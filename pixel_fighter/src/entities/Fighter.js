export class Fighter {
    constructor(hero, stats, playerId) {
        this.hero = hero;
        this.playerId = playerId;
        this.maxHealth = stats.maxHealth || 1000;
        this.health = this.maxHealth;
        this.maxMana = stats.maxMana || 500;
        this.mana = this.maxMana;
        this.attackPower = stats.attack || 8;
        this.defense = stats.defense || 7;
        this.speed = stats.speed * 50 || 250;

        // Position & physics
        this.x = 0;
        this.y = 580;               // Ground level
        this.vx = 0;
        this.vy = 0;
        this.facing = 1;            // 1 = right, -1 = left
        this.state = 'idle';
        
        // Ground detection
        this.groundY = 580;
        this.gravity = 1800;        // Overridden by config values if set externally, but we'll use hardcoded for consistency
        this.jumpForce = -700;
        this.moveSpeed = 450;

        // Double jump
        this.jumpsRemaining = 2;
        this._wasGrounded = true;   // Track previous frame to reset jumps only on landing
        
        // Attack state
        this.isAttacking = false;
        this.attackTimer = 0;
        this.attackCooldown = 0;
        this.attackHitGiven = false;
        this.attackDamage = 0;
        
        // Hit & invincibility
        this.hitTimer = 0;
        this.hitInvincibility = 0;
        
        // Charge
        this.chargeLevel = 0;
        this.isCharging = false;

        // Knockback
        this.knockbackVx = 0;
    }

    reset() {
        this.health = this.maxHealth;
        this.mana = this.maxMana;
        this.chargeLevel = 0;
        this.state = 'idle';
        this.x = this.playerId === 'p1' ? 150 : 1130;
        this.y = this.groundY;
        this.vx = 0;
        this.vy = 0;
        this.facing = this.playerId === 'p1' ? 1 : -1;
        this.hitTimer = 0;
        this.hitInvincibility = 0;
        this.knockbackVx = 0;
        this.jumpsRemaining = 2;
        this.isAttacking = false;
        this.attackTimer = 0;
        this.attackCooldown = 0;
        this.attackHitGiven = false;
        this._wasGrounded = true;
    }

    // Helper to check grounded state (with small epsilon for floating point)
    get isGrounded() {
        return this.y >= this.groundY - 0.1;
    }

    update(deltaTime, canvasWidth) {
        // --- Apply knockback (overrides normal movement) ---
        if (this.knockbackVx !== 0) {
            this.x += this.knockbackVx * deltaTime;
            this.knockbackVx *= Math.pow(0.1, deltaTime); // decay quickly
            if (Math.abs(this.knockbackVx) < 5) this.knockbackVx = 0;
        } else {
            // Normal horizontal movement + friction
            this.x += this.vx * deltaTime;
            
            if (this.isGrounded) {
                // Ground friction – stop very fast
                this.vx *= Math.pow(0.05, deltaTime);
                if (Math.abs(this.vx) < 1) this.vx = 0;
            }
            // No friction in air
        }

        // --- Vertical physics ---
        this.y += this.vy * deltaTime;
        const groundedNow = this.isGrounded;
        
        if (!groundedNow) {
            this.vy += this.gravity * deltaTime;
            // Clamp fall speed
            if (this.vy > 1000) this.vy = 1000;
        } else {
            // Landed
            this.y = this.groundY;
            this.vy = 0;
            
            // Reset double jump when landing (only on the frame we touch ground)
            if (!this._wasGrounded) {
                this.jumpsRemaining = 2;
            }
            
            // Update state if we were jumping/falling
            if (this.state === 'jumping' || this.state === 'falling') {
                this.state = 'idle';
            }
        }
        this._wasGrounded = groundedNow;

        // Update falling state
        if (!this.isGrounded && this.vy > 0 && this.state !== 'jumping') {
            this.state = 'falling';
        }

        // --- Boundaries (keep inside canvas) ---
        const minX = 40;
        const maxX = canvasWidth - 40;
        this.x = Math.max(minX, Math.min(maxX, this.x));

        // --- Timers ---
        if (this.attackTimer > 0) {
            this.attackTimer -= deltaTime;
            if (this.attackTimer <= 0) {
                this.isAttacking = false;
                this.attackHitGiven = false;
                if (this.state === 'attacking') this.state = 'idle';
            }
        }
        if (this.attackCooldown > 0) this.attackCooldown -= deltaTime;
        if (this.hitTimer > 0) this.hitTimer -= deltaTime;
        if (this.hitInvincibility > 0) this.hitInvincibility -= deltaTime;

        // Mana regen
        if (this.mana < this.maxMana) {
            this.mana += 25 * deltaTime;
        }

        // Charging
        if (this.isCharging && this.mana >= 5 && this.hitTimer <= 0) {
            this.chargeLevel = Math.min(this.chargeLevel + 80 * deltaTime, 100);
            this.mana -= 10 * deltaTime;
        }
        if (!this.isCharging) {
            this.chargeLevel = 0;
        }

        // State cleanup
        if (this.hitTimer <= 0 && this.state === 'hit') {
            this.state = 'idle';
        }
        if (!this.isAttacking && this.state === 'attacking') {
            this.state = 'idle';
        }
    }

    handleInput(inputState, jumpPressed, jumpWasPressed) {
        // Cannot act while in hitstun
        if (this.hitTimer > 0) return;

        const { left, right, jump, crouch, punch, kick, charge, special } = inputState;
        const onGround = this.isGrounded;

        // --- Horizontal movement ---
        if (left) {
            this.vx = -this.moveSpeed;
            this.facing = -1;
            if (onGround && this.state !== 'crouching' && this.state !== 'attacking') this.state = 'walking';
        }
        if (right) {
            this.vx = this.moveSpeed;
            this.facing = 1;
            if (onGround && this.state !== 'crouching' && this.state !== 'attacking') this.state = 'walking';
        }
        // Stop instantly when no horizontal input and on ground
        if (!left && !right && onGround) {
            this.vx = 0;
            if (this.state !== 'crouching' && this.state !== 'attacking' && this.state !== 'hit') {
                this.state = 'idle';
            }
        }

        // --- Jump (with double jump) ---
        // Rising edge detection: jump pressed now but wasn't last frame
        if (jump && !jumpWasPressed) {
            if (onGround) {
                // Ground jump
                this.vy = this.jumpForce;
                this.state = 'jumping';
                this.jumpsRemaining = 1; // one air jump left
            } else if (this.jumpsRemaining > 0) {
                // Air jump (double jump)
                this.vy = this.jumpForce;
                this.state = 'jumping';
                this.jumpsRemaining--;
            }
        }

        // --- Crouch ---
        if (crouch && onGround) {
            this.state = 'crouching';
            this.vx = 0; // can't move while crouching (optional)
        }

        // --- Charging ---
        this.isCharging = charge;

        // --- Attacks ---
        if (punch && this.attackCooldown <= 0 && !this.isAttacking) {
            this.performAttack('punch');
        }
        if (kick && this.attackCooldown <= 0 && !this.isAttacking) {
            this.performAttack('kick');
        }
        if (special && this.mana >= 50 && this.attackCooldown <= 0 && !this.isAttacking) {
            this.performSpecial();
        }
    }

    performAttack(type) {
        this.state = 'attacking';
        this.isAttacking = true;
        this.attackHitGiven = false;
        this.attackTimer = 0.15;
        this.attackCooldown = 0.3;
        this.attackDamage = this.attackPower * 12;
    }

    performSpecial() {
        if (this.mana < 50) return;
        this.mana -= 50;
        this.state = 'attacking';
        this.isAttacking = true;
        this.attackHitGiven = false;
        this.attackTimer = 0.2;
        this.attackCooldown = 0.45;
        this.attackDamage = this.attackPower * 25;
    }

    canHit() {
        return this.isAttacking && !this.attackHitGiven && this.attackTimer > 0;
    }

    registerHit() {
        this.attackHitGiven = true;
    }

    calculateDamage(target) {
        let damage = this.attackDamage;
        if (this.chargeLevel > 0) {
            damage *= (1 + this.chargeLevel / 100);
            this.chargeLevel = 0;
        }
        const reduction = target.defense * 2.5;
        return Math.max(8, Math.floor(damage - reduction));
    }

    takeDamage(amount, attackerX) {
        if (this.hitInvincibility > 0) return;
        
        this.health = Math.max(0, this.health - amount);
        this.hitTimer = 0.25;
        this.hitInvincibility = 0.5;
        this.state = 'hit';
        this.isAttacking = false;
        this.attackHitGiven = false;

        const knockbackDir = (attackerX < this.x) ? 1 : -1;
        this.knockbackVx = knockbackDir * 350;
        this.vx = this.knockbackVx;
    }

    render(ctx) {
        const x = this.x;
        const y = this.y;
        const width = 55;
        const height = 95;

        let color = this.playerId === 'p1' ? '#4a90e2' : '#e24a4a';
        if (this.hitInvincibility > 0) {
            color = '#aaa';
        }
        ctx.fillStyle = color;
        ctx.fillRect(x - width/2, y - height, width, height);

        // Eyes
        ctx.fillStyle = '#fff';
        ctx.beginPath();
        ctx.arc(x + (this.facing * 12), y - height + 18, 5, 0, Math.PI*2);
        ctx.fill();
        ctx.fillStyle = '#000';
        ctx.beginPath();
        ctx.arc(x + (this.facing * 15), y - height + 16, 2, 0, Math.PI*2);
        ctx.fill();

        // State text
        ctx.font = '11px monospace';
        ctx.fillStyle = '#fff';
        ctx.textAlign = 'center';
        ctx.fillText(this.state, x, y - height - 8);

        // Health bar above head
        const healthPercent = this.health / this.maxHealth;
        ctx.fillStyle = '#300';
        ctx.fillRect(x - 40, y - height - 22, 80, 7);
        ctx.fillStyle = this.health > this.maxHealth * 0.3 ? '#0f0' : '#ff0';
        ctx.fillRect(x - 40, y - height - 22, 80 * healthPercent, 7);
    }
}