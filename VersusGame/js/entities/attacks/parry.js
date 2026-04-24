export function setParry(fighter, active) {
    if (fighter.heroCustom?.attackOverrides?.parry) {
        fighter.heroCustom.attackOverrides.parry(fighter, active);
        return;
    }

    const att = fighter.heroCustom?.attacks?.parry || {};
    const maxBlocks = att.maxBlocks ?? fighter.maxParryBlocks;
    const cooldown = att.cooldown ?? 30;

    if (active && fighter.parryCooldown <= 0 && fighter.state !== 'hurt' && fighter.state !== 'throw' && fighter.state !== 'ultimate') {
        fighter.parryActive = true;
        fighter.maxParryBlocks = maxBlocks;   // may change per hero
        fighter.state = 'parry';
        fighter.displayMove = att.displayName || 'PARRY';
        fighter.moveDisplayTimer = 30;
    } else if (!active) {
        fighter.parryActive = false;
        if (fighter.state === 'parry') fighter.state = 'idle';
    }
    // cooldown is applied in hitHandler when parry breaks; we don't set it here
}