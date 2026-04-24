import { CONFIG } from '../../config.js';

export function executeKick(fighter) {
    if (fighter.heroCustom?.attackOverrides?.kick) {
        const handled = fighter.heroCustom.attackOverrides.kick(fighter);
        if (handled !== false) return handled;
    }

    if (fighter.attackTimer > 0 || fighter.state === 'hurt' || fighter.state === 'parry' || fighter.state === 'throw' || fighter.state === 'ultimate') return false;

    const att = fighter.heroCustom?.attacks?.kick || {};

    fighter.attackTimer = att.cooldown ?? CONFIG.KICK_COOLDOWN;
    fighter.attackActive = att.active ?? CONFIG.KICK_ACTIVE;
    fighter.currentMove = 'kick';
    fighter.state = 'kick';
    fighter.hitGiven = false;
    fighter.counterHit = false;
    fighter.displayMove = att.displayName || fighter.hero.moves?.basic?.kick || 'KICK';
    fighter.moveDisplayTimer = 60;
    fighter.meleeEffectType = att.meleeEffectType || null;   // null = no special FX (default is handled elsewhere)
    fighter.meleeEffectTimer = att.meleeEffectType ? 12 : 0;
    return true;
}