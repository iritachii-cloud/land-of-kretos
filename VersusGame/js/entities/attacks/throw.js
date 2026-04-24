import { CONFIG } from '../../config.js';

export function executeThrow(fighter) {
    if (fighter.heroCustom?.attackOverrides?.throw) {
        const handled = fighter.heroCustom.attackOverrides.throw(fighter);
        if (handled !== false) return handled;
    }

    const att = fighter.heroCustom?.attacks?.throw || {};
    if (fighter.throwCooldown > 0 || fighter.state === 'hurt' || fighter.state === 'parry' || fighter.state === 'ultimate') return false;

    fighter.throwActive = true;
    fighter.throwTimer = 12;
    fighter.throwCooldown = att.cooldown ?? CONFIG.THROW_COOLDOWN ?? 30;
    fighter.state = 'throw';
    fighter.hitGiven = false;
    fighter.displayMove = att.displayName || 'THROW';
    fighter.moveDisplayTimer = 40;
    return true;
}