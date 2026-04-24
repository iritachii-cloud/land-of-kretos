import { CONFIG } from '../config.js';

/**
 * Move the fighter left.
 * Works when not hurt, charging, or in ultimate state.
 */
export function moveLeft(fighter) {
    if (fighter.state !== 'hurt' && !fighter.charging && fighter.state !== 'ultimate') {
        fighter.vx = -fighter.speed;
    }
}

/**
 * Move the fighter right.
 */
export function moveRight(fighter) {
    if (fighter.state !== 'hurt' && !fighter.charging && fighter.state !== 'ultimate') {
        fighter.vx = fighter.speed;
    }
}

/**
 * Stop horizontal movement.
 * Only applies when grounded and not hurt.
 */
export function stopMove(fighter) {
    if (fighter.grounded && fighter.state !== 'hurt') {
        fighter.vx = 0;
    }
}