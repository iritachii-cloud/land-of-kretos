import { CONFIG } from '../config.js';

/**
 * Jump logic supporting:
 *   - single jump (maxJumps = 1)
 *   - double jump (maxJumps = 2)
 *   - triple jump (maxJumps = 3)
 *   - infinite jumps (maxJumps = Infinity)
 *
 * The fighter's maxJumps property must be set (default is 1).
 * Track used jumps via fighter._jumpsUsed (reset when grounded).
 */
export function jump(fighter) {
    // can't jump while hurt, charging, or in ultimate
    if (
        fighter.state === 'hurt' ||
        fighter.charging ||
        fighter.state === 'ultimate'
    ) {
        return;
    }

    // if grounded, first jump
    if (fighter.grounded) {
        fighter.vy = CONFIG.JUMP_FORCE;
        fighter.state = 'jump';
        fighter._jumpsUsed = 1;
        window.game?.soundManager?.play('jump');
        return;
    }

    // already airborne, check for extra jumps
    const maxJumps = fighter.maxJumps ?? 1;
    const usedJumps = fighter._jumpsUsed ?? 0;

    if (usedJumps < maxJumps) {
        if (usedJumps === 1) {
            fighter.vy = CONFIG.DOUBLE_JUMP_FORCE;
            fighter.state = 'doubleJump';
        } else {
            // triple or more: use a slightly reduced jump force to keep it feeling snappy
            fighter.vy = CONFIG.DOUBLE_JUMP_FORCE * 0.8;
            fighter.state = 'multiJump';
        }
        fighter._jumpsUsed = usedJumps + 1;
        window.game?.soundManager?.play('jump');
    }
}

/**
 * Reset the jump counter when landing on the ground.
 * Call this from Fighter.update whenever grounded becomes true.
 */
export function resetJumpIfGrounded(fighter) {
    if (fighter.grounded) {
        fighter._jumpsUsed = 0;
    }
}