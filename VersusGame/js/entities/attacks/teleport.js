import { CONFIG } from '../../config.js';

/**
 * Free teleport (0 / NumpadAdd + direction) – no mana cost.
 */
export function performTeleport(fighter, opponent, dir) {
    if (fighter.teleportCooldown > 0) return false;
    if (fighter.state === 'hurt' || fighter.state === 'ultimate') return false;

    const bounds = {
        left: 30,
        right: CONFIG.CANVAS_WIDTH - fighter.width - 30
    };

    switch (dir) {
        case 'left':
            fighter.x = bounds.left;
            break;
        case 'right':
            fighter.x = bounds.right;
            break;
        case 'up':
            if (opponent) {
                fighter.x = opponent.x + opponent.width / 2 - fighter.width / 2;
                fighter.y = opponent.y - fighter.height - 150;
                fighter.vy = 0;
            }
            break;
        default:
            return false;
    }

    fighter.x = Math.max(bounds.left, Math.min(bounds.right, fighter.x));
    fighter.vx = 0;
    fighter.teleportCooldown = fighter.teleportCooldownMax;
    fighter.state = 'idle';
    window.game?.soundManager?.play('jump');
    return true;
}

/**
 * Charge teleport (S + direction) – costs TELEPORT_MANA_COST mana.
 * Mana is drained from superMana first, then regular mana.
 */
export function performChargeTeleport(fighter, opponent, position) {
    const cost = CONFIG.TELEPORT_MANA_COST;
    if (fighter.teleportCooldown > 0) return false;
    if (fighter.state === 'hurt' || fighter.state === 'ultimate') return false;
    if (!opponent) return false;

    if (!fighter.spendMana(cost)) return false;   // <-- spends superMana first

    const bounds = {
        left: 30,
        right: CONFIG.CANVAS_WIDTH - fighter.width - 30
    };

    const myMid = fighter.x + fighter.width / 2;
    const oppMid = opponent.x + opponent.width / 2;

    if (position === 'behind') {
        if (myMid < oppMid) {
            fighter.x = opponent.x + opponent.width + 15;
        } else {
            fighter.x = opponent.x - fighter.width - 15;
        }
    } else { // 'front'
        if (myMid < oppMid) {
            fighter.x = opponent.x - fighter.width - 15;
        } else {
            fighter.x = opponent.x + opponent.width + 15;
        }
    }

    fighter.x = Math.max(bounds.left, Math.min(bounds.right, fighter.x));
    fighter.teleportCooldown = fighter.teleportCooldownMax;
    fighter.vx = 0;
    fighter.state = 'idle';
    window.game?.soundManager?.play('jump');
    return true;
}