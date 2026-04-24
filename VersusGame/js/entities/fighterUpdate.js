import { CONFIG } from '../config.js';
import { AIController } from './AI.js';
import { resetJumpIfGrounded } from './jump.js';
import { applyHit, applyUltimateHit } from './fight/hitHandler.js';

/**
 * Full update loop for a fighter.
 * Called every frame by BattleScene / Fighter.update.
 */
export function updateFighter(fighter, opponent, dt) {
    if (!opponent) return;
    const frameMult = 60;

    // ----- Timers -----
    if (fighter.attackTimer > 0) fighter.attackTimer -= dt * frameMult;
    if (fighter.attackActive > 0) {
        fighter.attackActive -= dt * frameMult;
        if (fighter.attackActive <= 0) {
            fighter.currentMove = null;
            fighter.hitGiven = false;
            fighter.counterHit = false;
            if (fighter.state !== 'hurt' && fighter.state !== 'parry' && fighter.state !== 'ultimate')
                fighter.state = 'idle';
        }
    }
    if (fighter.parryCooldown > 0) fighter.parryCooldown -= dt * frameMult;
    if (fighter.throwTimer > 0) fighter.throwTimer -= dt * frameMult;
    if (fighter.throwTimer <= 0) {
        fighter.throwActive = false;
        if (fighter.state === 'throw') fighter.state = 'idle';
    }
    if (fighter.throwCooldown > 0) fighter.throwCooldown -= dt * frameMult;
    if (fighter.invulTimer > 0 && fighter.state !== 'ultimate') fighter.invulTimer -= dt * frameMult;
    if (fighter.hitSpark.timer > 0) fighter.hitSpark.timer -= dt * frameMult;
    if (fighter.blockSpark.timer > 0) fighter.blockSpark.timer -= dt * frameMult;
    if (fighter.moveDisplayTimer > 0) fighter.moveDisplayTimer -= dt * frameMult;
    if (fighter.projectileCooldown > 0) fighter.projectileCooldown -= dt * frameMult;
    if (fighter.meleeEffectTimer > 0) fighter.meleeEffectTimer -= dt * frameMult;
    if (fighter.teleportCooldown > 0) fighter.teleportCooldown -= dt * frameMult;

    fighter.ultimateSystem.update(dt);

    // ----- Charge timer -----
    fighter.charging ? fighter.chargeTimer += dt : (fighter.chargeTimer = 0);

    // ----- Mana regen -----
    const MANA_REGEN_SPEED_FACTOR = 0.18;
    if (fighter.mana < fighter.maxMana) {
        fighter.mana = Math.min(
            fighter.maxMana,
            fighter.mana + fighter.manaReg * MANA_REGEN_SPEED_FACTOR * dt * frameMult
        );
    }
    if (fighter.charging && fighter.grounded && fighter.state !== 'ultimate') {
        const chargeBoost = fighter.manaReg * (fighter.chargeManaMultiplier - 1) *
            MANA_REGEN_SPEED_FACTOR * dt * frameMult;
        if (fighter.mana < fighter.maxMana) {
            fighter.mana = Math.min(fighter.maxMana, fighter.mana + chargeBoost);
        } else if (fighter.superMana < fighter.maxMana) {
            fighter.superMana = Math.min(
                fighter.maxMana,
                fighter.superMana + fighter.manaReg * MANA_REGEN_SPEED_FACTOR * dt * frameMult
            );
        }
    }

    // ----- Custom channeled ultimate -----
    if (fighter.customUltimate) {
        const cu = fighter.customUltimate;
        cu.timer -= dt;
        if (!fighter.displayMove || fighter.moveDisplayTimer <= 0) {
            fighter.displayMove = fighter.heroCustom?.ultimate?.name || 'ULTIMATE';
            fighter.moveDisplayTimer = 0.1;
        }
        if (cu.timer <= 0) {
            applyUltimateHit(fighter, cu.opponent, cu.damage);
            fighter.state = 'idle';
            fighter.invulTimer = 0;
            fighter.charging = cu.restoreState.charging;
            fighter.vx = cu.restoreState.vx;
            fighter.vy = cu.restoreState.vy;
            fighter.meleeEffectType = 'ultimate';
            fighter.meleeEffectTimer = 30;
            fighter.displayMove = '';
            fighter.moveDisplayTimer = 0;
            fighter.customUltimate = null;
        }
    } else {
        // Default ultimate barrage (Warrior/Brawler)
        if (fighter.state === 'ultimate' && fighter.ultimateAttackCount < 5) {
            fighter.ultimateAttackTimer += dt * frameMult;
            const attackInterval = 6;
            while (fighter.ultimateAttackTimer >= attackInterval && fighter.ultimateAttackCount < 5) {
                fighter.ultimateAttackTimer -= attackInterval;
                const type = (fighter.ultimateAttackCount % 2 === 0) ? 'punch' : 'kick';
                fighter.autoAttack(opponent, type, fighter.ultimateDamage);
                fighter.ultimateAttackCount++;
            }
        } else if (fighter.ultimateAttackCount >= 5) {
            fighter.state = 'idle';
            fighter.invulTimer = 0;
            fighter.ultimateAttackCount = 0;
            fighter.ultimateAttackTimer = 0;
        }
    }

    // ----- Shenku Jade Tempest buff -----
    if (fighter.jadeTempestActive) {
        fighter.jadeTempestTimer -= dt;
        if (fighter.jadeTempestTimer <= 0) fighter.jadeTempestActive = false;
    }

    // ----- Physics -----
    fighter.vy += CONFIG.GRAVITY * dt * frameMult;
    fighter.y += fighter.vy * dt * frameMult;
    if (fighter.y + fighter.height >= CONFIG.GROUND_Y) {
        fighter.y = CONFIG.GROUND_Y - fighter.height;
        fighter.vy = 0;
        fighter.grounded = true;
        resetJumpIfGrounded(fighter);
    } else {
        fighter.grounded = false;
    }

    // ----- Horizontal movement -----
    if (
        (fighter.state !== 'hurt' || fighter.invulTimer > 20) &&
        !fighter.charging &&
        fighter.state !== 'ultimate' &&
        !fighter.customUltimate
    ) {
        fighter.x += fighter.vx * dt * frameMult;
    }
    fighter.x = Math.max(30, Math.min(CONFIG.CANVAS_WIDTH - fighter.width - 30, fighter.x));

    // ----- Collision push -----
    if (opponent && fighter.grounded && opponent.grounded &&
        fighter.state !== 'ultimate' && !fighter.customUltimate) {
        const dx = fighter.x - opponent.x;
        const minDist = (fighter.width + opponent.width) / 2;
        const overlap = minDist - Math.abs(dx);
        if (overlap > 0) {
            const push = (dx > 0 ? 1 : -1) * overlap * 0.5;
            fighter.x += push;
            opponent.x -= push;
        }
    }

    // ----- Face opponent -----
    if (opponent) fighter.facing = opponent.x > fighter.x ? 1 : -1;

    // ----- Attack collision -----
    if (
        fighter.attackActive > 0 &&
        !fighter.hitGiven &&
        opponent &&
        opponent.invulTimer <= 0 &&
        fighter.state !== 'ultimate'
    ) {
        const myBox = fighter.getAttackBox();
        const oppBox = { x: opponent.x, y: opponent.y, w: opponent.width, h: opponent.height };
        if (fighter.rectCollide(myBox, oppBox)) applyHit(fighter, opponent);
    }

    // ----- Throw collision -----
    if (
        fighter.throwActive &&
        !fighter.hitGiven &&
        opponent &&
        opponent.invulTimer <= 0 &&
        fighter.state !== 'ultimate'
    ) {
        const myBox = fighter.getThrowBox();
        const oppBox = { x: opponent.x, y: opponent.y, w: opponent.width, h: opponent.height };
        if (fighter.rectCollide(myBox, oppBox)) {
            if (opponent.throwActive) {
                opponent.executeThrow(fighter, -opponent.facing);
                fighter.throwActive = false;
                fighter.throwTimer = 0;
                fighter.state = 'idle';
                fighter.hitGiven = true;
            } else {
                fighter.executeThrow(opponent, -fighter.facing);
            }
        }
    }

    // ----- State recovery -----
    if (fighter.state === 'hurt' && fighter.invulTimer <= 0) fighter.state = 'idle';
    if (fighter.grounded &&
        (fighter.state === 'jump' || fighter.state === 'doubleJump' || fighter.state === 'multiJump'))
        fighter.state = 'idle';

    // ----- AI -----
    if (fighter.isAI && opponent) {
        if (!fighter.aiController) fighter.aiController = new AIController(fighter, opponent, 'Normal');
        fighter.aiController.update(dt);
    }

    // ----- Friction -----
    if (fighter.grounded && fighter.state !== 'ultimate' && !fighter.customUltimate)
        fighter.vx *= 0.9;

    // ----- Smooth health display -----
    const healthDrainRate = fighter.health <= 0 ? 800 : 250;
    if (fighter.displayHealth > fighter.health)
        fighter.displayHealth = Math.max(
            fighter.health,
            fighter.displayHealth - healthDrainRate * dt * frameMult
        );
    else fighter.displayHealth = fighter.health;

    // ----- Charge particles -----
    if (fighter.charging && fighter.grounded && fighter.state !== 'ultimate') {
        const palette = fighter.hero.colorPalette?.primary || ['#C0C0C0', '#FFD700'];
        if (Math.random() < 0.4) {
            fighter.chargeParticles.push({
                x: fighter.x + 10 + Math.random() * (fighter.width - 20),
                y: fighter.y + fighter.height * 0.7,
                vx: (Math.random() - 0.5) * 1.5,
                vy: -2 - Math.random() * 3,
                life: 0,
                maxLife: 0.6 + Math.random() * 0.5,
                size: 2 + Math.random() * 4,
                color: palette[0] || '#C0C0C0'
            });
        }
        for (let i = fighter.chargeParticles.length - 1; i >= 0; i--) {
            const p = fighter.chargeParticles[i];
            p.x += p.vx * dt * 60;
            p.y += p.vy * dt * 60;
            p.life += dt;
            if (p.life >= p.maxLife) fighter.chargeParticles.splice(i, 1);
        }
    } else {
        fighter.chargeParticles = [];
    }
}