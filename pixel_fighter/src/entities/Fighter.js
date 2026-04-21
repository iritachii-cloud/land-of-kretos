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

        this.x = 0;
        this.y = 580; // Lower ground level
        this.vx = 0;
        this.vy = 0;
        this.facing = 1;
        this.state = 'idle';
        
        this.isAttacking = false;
        this.attackTimer = 0;
        this.attackCooldown = 0;
        this.attackHitGiven = false;
        this.attackDamage = 0;
        
        this.hitTimer = 0;
        this.hitInvincibility = 0;
        
        this.chargeLevel = 0;
        this.isCharging = false;

        this.jumpsRemaining = 2;
        this.groundY = 580; // Lower ground
        this.gravity = 800;
        this.jumpForce = -450;

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
    }

    update(deltaTime, canvasWidth) {
        // Knockback
        if (this.knockbackVx !== 0) {
            this.x += this.knockbackVx * deltaTime;
            this.knockbackVx *= 0.9;
            if (Math.abs(this.knockbackVx) < 5) this.knockbackVx = 0;
        } else {
            this.x += this.vx * deltaTime;
            if (Math.abs(this.vx) > 10) {
                this.vx *= 0.92;
            } else {
                this.vx = 0;
            }
        }

        this.y += this.vy * deltaTime;

        // Gravity
        if (this.y < this.groundY) {
            this.vy += this.gravity * deltaTime;
        } else {
            this.y = this.groundY;
            this.vy = 0;
            this.jumpsRemaining = 2;
            if (this.state === 'jumping') this.state = 'idle';
        }

        // Boundaries
        const minX = 40;
        const maxX = canvasWidth - 40;
        this.x = Math.max(minX, Math.min(maxX, this.x));

        // Timers
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

        if (this.hitTimer <= 0 && this.state === 'hit') {
            this.state = 'idle';
        }
        if (!this.isAttacking && this.state === 'attacking') {
            this.state = 'idle';
        }
    }

    handleInput(inputState, jumpPressed, jumpWasPressed) {
        if (this.hitTimer > 0) return;

        const { left, right, jump, crouch, punch, kick, charge, special } = inputState;

        if (left) {
            this.vx = -this.speed;
            this.facing = -1;
            if (this.y >= this.groundY && this.state !== 'crouching') this.state = 'walking';
        }
        if (right) {
            this.vx = this.speed;
            this.facing = 1;
            if (this.y >= this.groundY && this.state !== 'crouching') this.state = 'walking';
        }
        if (!left && !right && this.y >= this.groundY && this.state !== 'crouching' && this.state !== 'attacking') {
            this.state = 'idle';
        }

        if (jump && !jumpWasPressed) {
            if (this.y >= this.groundY) {
                this.vy = this.jumpForce;
                this.state = 'jumping';
                this.jumpsRemaining = 1;
            } else if (this.jumpsRemaining > 0) {
                this.vy = this.jumpForce;
                this.state = 'jumping';
                this.jumpsRemaining--;
            }
        }

        if (crouch && this.y >= this.groundY) {
            this.state = 'crouching';
        }

        this.isCharging = charge;

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

        ctx.fillStyle = '#fff';
        ctx.beginPath();
        ctx.arc(x + (this.facing * 12), y - height + 18, 5, 0, Math.PI*2);
        ctx.fill();
        ctx.fillStyle = '#000';
        ctx.beginPath();
        ctx.arc(x + (this.facing * 15), y - height + 16, 2, 0, Math.PI*2);
        ctx.fill();

        ctx.font = '11px monospace';
        ctx.fillStyle = '#fff';
        ctx.textAlign = 'center';
        ctx.fillText(this.state, x, y - height - 8);

        const healthPercent = this.health / this.maxHealth;
        ctx.fillStyle = '#300';
        ctx.fillRect(x - 40, y - height - 22, 80, 7);
        ctx.fillStyle = this.health > this.maxHealth * 0.3 ? '#0f0' : '#ff0';
        ctx.fillRect(x - 40, y - height - 22, 80 * healthPercent, 7);
    }
}