import { CONFIG } from '../config.js';
import { ASSET_BASE } from '../main.js';
import { AIController } from './AI.js';
import { Projectile } from './Projectile.js';

export class Fighter {
    constructor(hero, side, isAI = false) {
        this.hero = hero;
        this.side = side;
        this.isAI = isAI;
        this.role = hero.role || 'Brawler';

        // Stats
        this.maxHealth = hero.stats?.health || 1000;
        this.health = this.maxHealth;
        this.displayHealth = this.maxHealth;
        this.maxMana = hero.stats?.mana || CONFIG.MAX_MANA;
        this.mana = this.maxMana;
        this.manaReg = hero.stats?.manaReg || 1;
        this.speed = (hero.stats?.speed || 7) * 0.7;
        this.attackPower = hero.stats?.physicalAtk || 8;
        this.specialPower = hero.stats?.magicalAtk || 8;

        // Dimensions
        this.width = CONFIG.PLAYER_WIDTH;
        this.height = CONFIG.PLAYER_HEIGHT;
        this.x = side === 'left' ? 150 : CONFIG.CANVAS_WIDTH - 150 - this.width;
        this.y = CONFIG.GROUND_Y - this.height;
        this.vx = 0;
        this.vy = 0;
        this.facing = side === 'left' ? 1 : -1;
        this.grounded = true;
        this.doubleJumpUsed = false;

        // Combat state
        this.state = 'idle';
        this.attackTimer = 0;
        this.attackActive = 0;
        this.currentMove = null;
        this.hitGiven = false;
        this.invulTimer = 0;

        // Parry
        this.parryActive = false;
        this.parryBlockCount = 0;
        this.maxParryBlocks = 8;
        this.parryCooldown = 0;

        // Throw
        this.throwActive = false;
        this.throwTimer = 0;
        this.throwCooldown = 0;

        // Counter hit
        this.counterHit = false;

        // Visual effects
        this.hitSpark = { active: false, x: 0, y: 0, timer: 0, type: 'hit' };
        this.blockSpark = { active: false, x: 0, y: 0, timer: 0 };

        // AI
        this.aiController = null;
        this.aiDifficulty = 1.0;

        // Sprite
        this.spriteImg = null;
        this.spriteScale = 0.3;
        if (hero.images && hero.images.spriteRight) {
            const img = new Image();
            img.src = ASSET_BASE + hero.images.spriteRight.replace(/^\//, '');
            this.spriteImg = img;
        }

        // UI move display
        this.displayMove = '';
        this.moveDisplayTimer = 0;

        // Projectile cooldown for ranged classes
        this.projectileCooldown = 0;

        // Melee hit effect (for Brawler/Warrior)
        this.meleeEffectType = null;   // 'brawler', 'warrior'
        this.meleeEffectTimer = 0;
    }

    setAIDifficulty(difficultyStr) {
        const diffMap = { 'Easy': 0.7, 'Normal': 1.0, 'Hard': 1.3, 'Expert': 1.6 };
        this.aiDifficulty = diffMap[difficultyStr] || 1.0;
        if (this.aiController) {
            this.aiController.difficulty = difficultyStr;
            this.aiController.reactionTime = this.aiController.getReactionTime();
        }
    }

    update(opponent, dt) {
        const frameMult = 60;
        // Timers
        if (this.attackTimer > 0) this.attackTimer -= dt * frameMult;
        if (this.attackActive > 0) {
            this.attackActive -= dt * frameMult;
            if (this.attackActive <= 0) {
                this.currentMove = null;
                this.hitGiven = false;
                this.counterHit = false;
                if (this.state !== 'hurt' && this.state !== 'parry') this.state = 'idle';
            }
        }
        if (this.parryCooldown > 0) this.parryCooldown -= dt * frameMult;
        if (this.throwTimer > 0) this.throwTimer -= dt * frameMult;
        if (this.throwTimer <= 0) { this.throwActive = false; if (this.state === 'throw') this.state = 'idle'; }
        if (this.throwCooldown > 0) this.throwCooldown -= dt * frameMult;
        if (this.invulTimer > 0) this.invulTimer -= dt * frameMult;
        if (this.hitSpark.timer > 0) this.hitSpark.timer -= dt * frameMult;
        if (this.blockSpark.timer > 0) this.blockSpark.timer -= dt * frameMult;
        if (this.moveDisplayTimer > 0) this.moveDisplayTimer -= dt * frameMult;
        if (this.projectileCooldown > 0) this.projectileCooldown -= dt * frameMult;
        if (this.meleeEffectTimer > 0) this.meleeEffectTimer -= dt * frameMult;

        // Mana regen
        const MANA_REGEN_SPEED_FACTOR = 0.3;
        if (this.mana < this.maxMana) {
            this.mana = Math.min(this.maxMana, this.mana + this.manaReg * MANA_REGEN_SPEED_FACTOR * dt * frameMult);
        }

        // Physics
        this.vy += CONFIG.GRAVITY * dt * frameMult;
        this.y += this.vy * dt * frameMult;
        if (this.y + this.height >= CONFIG.GROUND_Y) {
            this.y = CONFIG.GROUND_Y - this.height;
            this.vy = 0;
            this.grounded = true;
            this.doubleJumpUsed = false;
        } else {
            this.grounded = false;
        }

        // Horizontal movement
        if (this.state !== 'hurt' || this.invulTimer > 20) this.x += this.vx * dt * frameMult;
        this.x = Math.max(30, Math.min(CONFIG.CANVAS_WIDTH - this.width - 30, this.x));

        // Collision push
        if (opponent && this.grounded && opponent.grounded) {
            const dx = this.x - opponent.x;
            const minDist = (this.width + opponent.width) / 2;
            const overlap = minDist - Math.abs(dx);
            if (overlap > 0) {
                const push = (dx > 0 ? 1 : -1) * overlap * 0.5;
                this.x += push;
                opponent.x -= push;
            }
        }

        // Facing
        if (opponent) this.facing = opponent.x > this.x ? 1 : -1;

        // Attack collision (melee)
        if (this.attackActive > 0 && !this.hitGiven && opponent && opponent.invulTimer <= 0) {
            const myBox = this.getAttackBox();
            const oppBox = { x: opponent.x, y: opponent.y, w: opponent.width, h: opponent.height };
            if (this.rectCollide(myBox, oppBox)) this.handleHit(opponent);
        }

        // Throw collision
        if (this.throwActive && !this.hitGiven && opponent && opponent.invulTimer <= 0) {
            const myBox = this.getThrowBox();
            const oppBox = { x: opponent.x, y: opponent.y, w: opponent.width, h: opponent.height };
            if (this.rectCollide(myBox, oppBox)) {
                if (opponent.throwActive) {
                    opponent.executeThrow(this, -opponent.facing);
                    this.throwActive = false; this.throwTimer = 0; this.state = 'idle'; this.hitGiven = true;
                } else {
                    this.executeThrow(opponent, -this.facing);
                }
            }
        }

        // State recovery
        if (this.state === 'hurt' && this.invulTimer <= 0) this.state = 'idle';
        if (this.grounded && (this.state === 'jump' || this.state === 'doubleJump')) this.state = 'idle';

        // AI
        if (this.isAI && opponent) {
            if (!this.aiController) this.aiController = new AIController(this, opponent, 'Normal');
            this.aiController.update(dt);
        }

        // Ground friction
        if (this.grounded) this.vx *= 0.9;

        // Smooth health
        const healthDrainRate = (this.health <= 0) ? 800 : 250;
        if (this.displayHealth > this.health) this.displayHealth = Math.max(this.health, this.displayHealth - healthDrainRate * dt * frameMult);
        else this.displayHealth = this.health;
    }

    handleHit(opponent) {
        let isParried = opponent.parryActive;
        const moveType = this.currentMove;
        const isCounter = (opponent.attackActive > 0 && opponent.invulTimer <= 0);

        let dmg = this.attackPower;
        if (moveType === 'kick') dmg = Math.floor(this.attackPower * 1.4);
        else if (moveType === 'special') dmg = this.specialPower;
        else if (moveType === 'ultimate') dmg = this.specialPower * 1.5;

        if (isParried) {
            if (moveType === 'punch' || moveType === 'kick') {
                opponent.parryBlockCount++;
                if (opponent.parryBlockCount > opponent.maxParryBlocks) {
                    isParried = false;
                    opponent.parryActive = false;
                    opponent.parryBlockCount = 0;
                    opponent.parryCooldown = 30;
                }
            }
            if (isParried) {
                if (moveType === 'special' || moveType === 'ultimate') {
                    dmg = Math.floor(dmg * 0.3);
                    opponent.blockSpark = { active: true, x: opponent.x + opponent.width/2, y: opponent.y, timer: 10 };
                    window.game?.soundManager?.play('block');
                } else {
                    dmg = 0;
                    opponent.blockSpark = { active: true, x: opponent.x + opponent.width/2, y: opponent.y, timer: 10 };
                    window.game?.soundManager?.play('parry');
                }
            }
        }

        if (isCounter && !isParried) {
            dmg = Math.floor(dmg * 1.3);
            this.counterHit = true;
            window.game?.soundManager?.play('hit');
        } else if (!isParried) {
            window.game?.soundManager?.play('hit');
        }

        if (dmg > 0) {
            opponent.health = Math.max(0, opponent.health - dmg);
            opponent.parryBlockCount = 0;
        }

        // ---- TRIGGER KICK HIT EFFECT ON THE TARGET ----
        if (moveType === 'kick' && dmg > 0) {
            opponent.meleeEffectType = 'kick';
            opponent.meleeEffectTimer = 12;
        }

        let knockbackVX = this.facing * 9;
        let knockbackVY = -5;
        let hitStun = 25;
        if (moveType === 'kick') { knockbackVX = this.facing * 12; knockbackVY = -7; hitStun = 30; }
        if (moveType === 'special') { knockbackVX = this.facing * 15; knockbackVY = -9; hitStun = 40; }
        if (moveType === 'ultimate') { knockbackVX = this.facing * 20; knockbackVY = -12; hitStun = 50; }
        if (isCounter) { knockbackVX *= 1.2; hitStun += 10; }

        if (isParried && dmg === 0) {
            knockbackVX = 0; knockbackVY = 0; hitStun = 15;
        }

        opponent.invulTimer = hitStun;
        opponent.vy = knockbackVY;
        opponent.vx = knockbackVX;
        opponent.state = 'hurt';
        this.hitGiven = true;

        opponent.hitSpark = {
            active: true,
            x: opponent.x + opponent.width/2,
            y: opponent.y + opponent.height/2,
            timer: 8,
            type: isCounter ? 'counter' : (isParried ? 'block' : 'hit')
        };

        if (dmg > 15 && window.game?.sceneManager?.current?.shake) {
            window.game.sceneManager.current.shake(8, 0.2);
        }

        if (!isParried) {
            if (moveType === 'punch') window.game?.soundManager?.play('punch');
            else if (moveType === 'kick') window.game?.soundManager?.play('kick');
            else if (moveType === 'special') window.game?.soundManager?.play('special');
            else if (moveType === 'ultimate') window.game?.soundManager?.play('ultimate');
        }
    }

    executeThrow(opponent, direction) {
        this.throwActive = true;
        this.throwTimer = 18;
        this.state = 'throw';
        this.hitGiven = true;
        this.displayMove = 'THROW';
        this.moveDisplayTimer = 40;

        const throwDmg = Math.floor(this.attackPower * 0.8);
        opponent.health = Math.max(0, opponent.health - throwDmg);
        opponent.parryBlockCount = 0;

        opponent.vx = direction * 18;
        opponent.vy = -9;
        opponent.invulTimer = 35;
        opponent.state = 'hurt';

        opponent.hitSpark = { active: true, x: opponent.x + opponent.width/2, y: opponent.y + opponent.height/2, timer: 10, type: 'throw' };
        window.game?.soundManager?.play('throw');
        window.game?.sceneManager?.current?.shake(10, 0.15);
    }

    getAttackBox() {
        let w = 45, h = 40;
        let offsetX = this.facing === 1 ? this.width : -w;
        if (this.role === 'Warrior' && this.currentMove === 'punch') w = 75;
        if (this.currentMove === 'kick') { w = 55; offsetX = this.facing === 1 ? this.width-10 : -w+10; }
        if (this.currentMove === 'special') { w = 85; h = 60; offsetX = this.facing === 1 ? this.width-15 : -w+15; }
        if (this.currentMove === 'ultimate') { w = 100; h = 70; offsetX = this.facing === 1 ? this.width-20 : -w+20; }
        return { x: this.x + offsetX, y: this.y + this.height/2 - 20, w, h };
    }

    getThrowBox() {
        let w = 40, h = 50;
        let offsetX = this.facing === 1 ? this.width : -w;
        return { x: this.x + offsetX, y: this.y + this.height/2 - 25, w, h };
    }

    rectCollide(r1, r2) {
        return r1.x < r2.x + r2.w && r1.x + r1.w > r2.x && r1.y < r2.y + r2.h && r1.y + r1.h > r2.y;
    }

    moveLeft() { if (this.state !== 'hurt') this.vx = -this.speed; }
    moveRight() { if (this.state !== 'hurt') this.vx = this.speed; }
    stopMove() { if (this.grounded && this.state !== 'hurt') this.vx = 0; }

    jump() {
        if (this.state === 'hurt') return;
        if (this.grounded) {
            this.vy = CONFIG.JUMP_FORCE;
            this.state = 'jump';
            this.doubleJumpUsed = false;
            window.game?.soundManager?.play('jump');
        } else if (!this.doubleJumpUsed) {
            this.vy = CONFIG.DOUBLE_JUMP_FORCE;
            this.state = 'doubleJump';
            this.doubleJumpUsed = true;
            window.game?.soundManager?.play('jump');
        }
    }

    punch() {
        if (this.attackTimer > 0 || this.state === 'hurt' || this.state === 'parry' || this.state === 'throw') return false;
        if (this.projectileCooldown > 0) return false;

        if (this.role === 'Brawler' || this.role === 'Warrior') {
            this.attackTimer = CONFIG.PUNCH_COOLDOWN;
            this.attackActive = CONFIG.PUNCH_ACTIVE;
            this.currentMove = 'punch';
            this.state = 'punch';
            this.hitGiven = false;
            this.counterHit = false;
            this.displayMove = this.hero.moves?.basic?.punch || (this.role === 'Brawler' ? 'PUNCH' : 'SLASH');
            this.moveDisplayTimer = 60;
            this.meleeEffectType = this.role === 'Brawler' ? 'brawler' : 'warrior';
            this.meleeEffectTimer = 15;
            return true;
        }
        else if (this.role === 'Mage' || this.role === 'Marksman') {
            const projData = this.hero.projectile;
            const projectileSpeed = projData ? projData.speed : (this.role === 'Mage' ? 6 : 8);
            const damageScale = projData ? projData.damageScale : (this.role === 'Mage' ? 0.5 : 1.0);
            const damage = Math.floor(
                (this.role === 'Mage' ? this.specialPower * 0.5 : this.attackPower) * damageScale
            );
            const type = this.role === 'Mage' ? 'magic' : 'arrow';
            const lifetime = 4.0;
            const facing = this.facing;

            const projX = this.x + (facing === 1 ? this.width : -24);
            const projY = this.y + this.height / 2 - 12;

            const projImagePath = this.hero.images?.projectile || null;
            const fallbackColors = this.hero.colorPalette?.primary || ['#ff66ff', '#ff00ff'];

            const projectile = new Projectile(
                projX, projY,
                facing * projectileSpeed, 0,
                damage, this, type, lifetime,
                projImagePath, fallbackColors
            );

            if (window.game?.sceneManager?.current?.addProjectile) {
                window.game.sceneManager.current.addProjectile(projectile);
            }

            this.projectileCooldown = 40;
            this.displayMove = this.hero.moves?.basic?.punch || (this.role === 'Mage' ? 'FIREBALL' : 'SHOOT');
            this.moveDisplayTimer = 30;
            return true;
        }
        return false;
    }

    kick() {
        if (this.attackTimer <= 0 && this.state !== 'hurt' && this.state !== 'parry' && this.state !== 'throw') {
            this.attackTimer = CONFIG.KICK_COOLDOWN;
            this.attackActive = CONFIG.KICK_ACTIVE;
            this.currentMove = 'kick';
            this.state = 'kick';
            this.hitGiven = false;
            this.counterHit = false;
            this.displayMove = this.hero.moves?.basic?.kick || 'KICK';
            this.moveDisplayTimer = 60;
            // No longer set melee effect here – it's triggered on hit
            return true;
        }
        return false;
    }

    performSpecial() {
        if (this.mana >= this.maxMana * 0.5 && this.attackTimer <= 0 && this.state !== 'hurt') {
            this.mana -= CONFIG.SPECIAL_COST;
            this.attackTimer = CONFIG.SPECIAL_COOLDOWN;
            this.attackActive = CONFIG.SPECIAL_ACTIVE;
            this.currentMove = 'special';
            this.state = 'special';
            this.hitGiven = false;
            this.counterHit = false;
            this.displayMove = this.hero.moves?.special?.name || 'SPECIAL';
            this.moveDisplayTimer = 60;
            return true;
        }
        return false;
    }

    setParry(active) {
        if (active && this.parryCooldown <= 0 && this.state !== 'hurt' && this.state !== 'throw') {
            this.parryActive = true;
            this.state = 'parry';
            this.displayMove = 'PARRY';
            this.moveDisplayTimer = 30;
        } else if (!active) {
            this.parryActive = false;
            if (this.state === 'parry') this.state = 'idle';
        }
    }

    throwAttempt() {
        if (this.throwCooldown <= 0 && this.state !== 'hurt' && this.state !== 'parry') {
            this.throwActive = true;
            this.throwTimer = 12;
            this.throwCooldown = 30;
            this.state = 'throw';
            this.hitGiven = false;
            this.displayMove = 'THROW';
            this.moveDisplayTimer = 40;
            return true;
        }
        return false;
    }

    render(ctx) {
        if (this.spriteImg && this.spriteImg.complete && this.spriteImg.naturalWidth > 0) {
            const imgW = this.spriteImg.width;
            const imgH = this.spriteImg.height;
            const scale = this.spriteScale;
            const drawWidth = imgW * scale;
            const drawHeight = imgH * scale;
            const drawX = this.x + (this.width - drawWidth) / 2;
            const drawY = this.y + this.height - drawHeight;

            ctx.save();
            if (this.facing === -1) {
                ctx.translate(drawX + drawWidth, drawY);
                ctx.scale(-1, 1);
                ctx.drawImage(this.spriteImg, 0, 0, drawWidth, drawHeight);
            } else {
                ctx.drawImage(this.spriteImg, drawX, drawY, drawWidth, drawHeight);
            }
            ctx.restore();
        } else {
            ctx.fillStyle = this.side === 'left' ? '#c44' : '#4a6ea8';
            if (this.state === 'hurt') ctx.fillStyle = '#aaa';
            if (this.parryActive) ctx.fillStyle = '#ffdd77';
            ctx.fillRect(this.x, this.y, this.width, this.height);
            ctx.fillStyle = '#fff';
            ctx.font = 'bold 14px monospace';
            ctx.textAlign = 'center';
            ctx.fillText(this.hero.name, this.x + this.width/2, this.y - 8);
        }

        if (this.parryActive) {
            ctx.save();
            ctx.translate(this.x + this.width/2, this.y + this.height/2);
            ctx.strokeStyle = '#aaccff';
            ctx.lineWidth = 4;
            ctx.globalAlpha = 0.6;
            ctx.beginPath();
            ctx.arc(0, 0, 30, 0, Math.PI * 2);
            ctx.stroke();
            ctx.globalAlpha = 1.0;
            ctx.font = 'bold 12px monospace';
            ctx.fillStyle = '#fff';
            ctx.textAlign = 'center';
            ctx.fillText(`${this.parryBlockCount}/${this.maxParryBlocks}`, 0, -40);
            ctx.restore();
        }
    }
}