import { CONFIG } from '../../config.js';

/**
 * Starts the melee ultimate barrage for Warrior / Brawler.
 * Positions the fighter next to the opponent and begins the sequence.
 */
export function startUltimateBarrage(fighter, opponent) {
    const offset = fighter.facing === 1 ? -60 : 60;
    fighter.x = opponent.x + offset;
    fighter.y = CONFIG.GROUND_Y - fighter.height;
    fighter.vx = 0;
    fighter.vy = 0;
    fighter.facing = (opponent.x > fighter.x) ? 1 : -1;
    fighter.charging = false;
    fighter.state = 'ultimate';
    fighter.invulTimer = 9999;
    fighter.ultimateAttackCount = 0;
    fighter.ultimateAttackTimer = 0;
    fighter.ultimateDamage = 12;  // will be set by the caller immediately after
}