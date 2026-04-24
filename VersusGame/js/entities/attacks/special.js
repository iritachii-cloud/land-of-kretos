import { CONFIG } from '../../config.js';

export function executeSpecial(fighter) {
    // Hero override – if it returns true, special handled; if false, fall through to default
    if (fighter.heroCustom?.attackOverrides?.special) {
        const handled = fighter.heroCustom.attackOverrides.special(fighter);
        if (handled !== false) return handled;
    }

    const att = fighter.heroCustom?.attacks?.special || {};
    const manaCost = att.manaCost ?? CONFIG.SPECIAL_COST;
    if (fighter.attackTimer > 0 || fighter.state === 'hurt' || fighter.state === 'ultimate') return false;
    if (!fighter.spendMana(manaCost)) return false;       // <-- priority spend

    fighter.attackTimer = att.cooldown ?? CONFIG.SPECIAL_COOLDOWN;
    fighter.attackActive = att.active ?? CONFIG.SPECIAL_ACTIVE;
    fighter.currentMove = 'special';
    fighter.state = 'special';
    fighter.hitGiven = false;
    fighter.counterHit = false;
    fighter.displayMove = att.displayName || fighter.hero.moves?.special?.name || 'SPECIAL';
    fighter.moveDisplayTimer = 60;
    fighter.meleeEffectType = att.meleeEffectType || 'special';
    fighter.meleeEffectTimer = 20;
    return true;
}