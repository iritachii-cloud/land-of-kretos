import { CONFIG } from '../config.js';
import { ASSET_BASE } from '../main.js';
import { AIController } from './AI.js';
import { Projectile, HomingProjectile } from './Projectile.js';
import { UltimateSystem } from '../systems/UltimateSystem.js';
import { FighterRenderer } from '../renderers/FighterRenderer.js';

// Attack helpers
import { executePunch } from './attacks/punch.js';
import { executeKick } from './attacks/kick.js';
import { executeSpecial } from './attacks/special.js';
import { executeThrow } from './attacks/throw.js';
import { setParry } from './attacks/parry.js';
import { startUltimateBarrage as startUltBarrage } from './attacks/ultimateBarrage.js';
import { performTeleport, performChargeTeleport } from './attacks/teleport.js';

// Movement helpers
import { moveLeft, moveRight, stopMove } from './movement.js';
import { jump, resetJumpIfGrounded } from './jump.js';

// Fight helpers
import { applyHit, applyUltimateHit } from './fight/hitHandler.js';
import { launchHomingMissile } from './fight/homingMissile.js';

// Hero custom data
import { heroCustomData } from './heroData/index.js';

// Fighter update logic
import { updateFighter } from './fighterUpdate.js';

export class Fighter {
    constructor(hero, side, isAI = false) {
        this.hero = hero;
        this.side = side;
        this.isAI = isAI;
        this.role = hero.role || 'Brawler';

        this.heroCustom = heroCustomData[hero.id] || null;

        // Stats
        this.maxHealth = hero.stats?.health || 1000;
        this.health = this.maxHealth;
        this.displayHealth = this.maxHealth;
        this.maxMana = hero.stats?.mana || CONFIG.MAX_MANA;
        this.mana = this.maxMana;
        this.superMana = 0;
        this.manaReg = hero.stats?.manaReg || 1;
        this.speed = ((hero.stats?.speed || 7) * 0.7) * (this.heroCustom?.stats?.speedMultiplier ?? 1);
        this.attackPower = hero.stats?.physicalAtk || 8;
        this.specialPower = hero.stats?.magicalAtk || 8;

        // Dimensions
        this.width = CONFIG.PLAYER_WIDTH;
        this.baseHeight = CONFIG.PLAYER_HEIGHT;
        this.height = this.baseHeight;
        this.baseY = CONFIG.GROUND_Y - this.baseHeight;
        this.x = side === 'left' ? 150 : CONFIG.CANVAS_WIDTH - 150 - this.width;
        this.y = this.baseY;
        this.vx = 0;
        this.vy = 0;
        this.facing = side === 'left' ? 1 : -1;
        this.grounded = true;
        this.doubleJumpUsed = false;

        // Jump system
        this.maxJumps = this.heroCustom?.stats?.maxJumps ?? (hero.stats?.maxJumps ?? 1);
        this._jumpsUsed = 0;
        this._prevJump = false;

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

        // Projectile cooldown
        this.projectileCooldown = 0;

        // Melee hit effect
        this.meleeEffectType = null;
        this.meleeEffectTimer = 0;

        // Charging
        this.charging = false;
        this.chargeTimer = 0;
        this.chargeManaMultiplier = 2.0;
        this.chargeParticles = [];

        // Ultimate
        this.ultimateSystem = new UltimateSystem(this);
        this.ultimateDamage = 0;
        this.ultimateAttackCount = 0;
        this.ultimateAttackTimer = 0;

        this.customUltimate = null;
        this.jadeTempestActive = false;
        this.jadeTempestTimer = 0;

        // Teleport
        this.teleportCooldown = 0;
        this.teleportCooldownMax = CONFIG.TELEPORT_COOLDOWN;

        // Previous input states
        this._prevInput = { left: false, right: false, up: false };

        this.scene = null;
        this.renderer = new FighterRenderer(this);
    }

    setAIDifficulty(difficultyStr) {
        const diffMap = { 'Easy': 0.7, 'Normal': 1.0, 'Hard': 1.3, 'Expert': 1.6 };
        this.aiDifficulty = diffMap[difficultyStr] || 1.0;
        if (this.aiController) {
            this.aiController.difficulty = difficultyStr;
            this.aiController.reactionTime = this.aiController.getReactionTime();
        }
    }

    /**
     * Spend mana for abilities.
     * Drains superMana first, then regular mana.
     * Returns true if enough total mana was available.
     */
    spendMana(cost) {
        const total = this.mana + this.superMana;
        if (total < cost) return false;

        let remaining = cost;

        // Drain superMana first
        if (this.superMana > 0) {
            const fromSuper = Math.min(this.superMana, remaining);
            this.superMana -= fromSuper;
            remaining -= fromSuper;
        }

        // Drain regular mana if still needed
        if (remaining > 0) {
            this.mana -= remaining;
        }

        return true;
    }

    // ---- Attacks ----
    punch() { return executePunch(this); }
    kick() { return executeKick(this); }
    performSpecial() { return executeSpecial(this); }
    throwAttempt() { return executeThrow(this); }
    setParry(active) { setParry(this, active); }
    startUltimateBarrage(opponent, damagePerHit) {
        this.ultimateDamage = damagePerHit;
        startUltBarrage(this, opponent);
    }
    launchHomingMissile(opponent, damage, index) {
        launchHomingMissile(this, opponent, damage, index);
    }

    autoAttack(opponent, type, damage) {
        opponent.health = Math.max(0, opponent.health - damage);
        opponent.parryBlockCount = 0;
        opponent.invulTimer = 12;
        opponent.vy = -4;
        opponent.vx = this.facing * 5;
        opponent.state = 'hurt';
        opponent.hitSpark = {
            active: true,
            x: opponent.x + opponent.width / 2,
            y: opponent.y + opponent.height / 2,
            timer: 6,
            type: 'ultimate'
        };
        window.game?.soundManager?.play(type === 'punch' ? 'punch' : 'kick');
        window.game?.sceneManager?.current?.shake(6, 0.15);
    }

    // ---- Movement ----
    moveLeft() { moveLeft(this); }
    moveRight() { moveRight(this); }
    stopMove() { stopMove(this); }
    jump() { jump(this); }

    // ---- Teleport ----
    performTeleport(opponent, dir) {
        return performTeleport(this, opponent, dir);
    }

    performChargeTeleport(opponent, pos) {
        return performChargeTeleport(this, opponent, pos);
    }

    // ---- Update ----
    update(opponent, dt) {
        updateFighter(this, opponent, dt);
    }

    // ---- Throw execution ----
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
        opponent.hitSpark = { active: true, x: opponent.x + opponent.width / 2, y: opponent.y + opponent.height / 2, timer: 10, type: 'throw' };
        window.game?.soundManager?.play('throw');
        window.game?.sceneManager?.current?.shake(10, 0.15);
    }

    // ---- Hitbox getters ----
    getAttackBox() {
        let w = 45, h = 40;
        let offsetX = this.facing === 1 ? this.width : -w;
        if (this.role === 'Warrior' && this.currentMove === 'punch') w = 75;
        if (this.currentMove === 'kick') { w = 55; offsetX = this.facing === 1 ? this.width - 10 : -w + 10; }
        if (this.currentMove === 'special') { w = 85; h = 60; offsetX = this.facing === 1 ? this.width - 15 : -w + 15; }
        if (this.currentMove === 'ultimate') { w = 100; h = 70; offsetX = this.facing === 1 ? this.width - 20 : -w + 20; }
        if (this.jadeTempestActive && (this.currentMove === 'punch' || this.currentMove === 'kick')) {
            w *= 2;
            offsetX = this.facing === 1 ? this.width : -w;
        }
        return { x: this.x + offsetX, y: this.y + this.height / 2 - 20, w, h };
    }

    getThrowBox() {
        let w = 40, h = 50;
        let offsetX = this.facing === 1 ? this.width : -w;
        return { x: this.x + offsetX, y: this.y + this.height / 2 - 25, w, h };
    }

    rectCollide(r1, r2) {
        return r1.x < r2.x + r2.w && r1.x + r1.w > r2.x && r1.y < r2.y + r2.h && r1.y + r1.h > r2.y;
    }

    render(ctx) { this.renderer.render(ctx); }
}