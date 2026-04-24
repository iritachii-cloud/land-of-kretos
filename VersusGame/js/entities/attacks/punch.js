import { CONFIG } from '../../config.js';
import { Projectile } from '../Projectile.js';

export function executePunch(fighter) {
    // Hero custom override – if a function, run it; if false, fall through
    if (fighter.heroCustom?.attackOverrides?.punch) {
        const handled = fighter.heroCustom.attackOverrides.punch(fighter);
        if (handled !== false) return handled;
    }

    // Get attack data (heroCustom.attacks.punch or empty)
    const att = fighter.heroCustom?.attacks?.punch || {};

    if (
        fighter.attackTimer > 0 ||
        fighter.state === 'hurt' ||
        fighter.state === 'parry' ||
        fighter.state === 'throw' ||
        fighter.state === 'ultimate'
    ) return false;
    if (fighter.projectileCooldown > 0) return false;

    const role = fighter.role;

    // Melee roles
    if (role === 'Brawler' || role === 'Warrior') {
        fighter.attackTimer = att.cooldown ?? CONFIG.PUNCH_COOLDOWN;
        fighter.attackActive = att.active ?? CONFIG.PUNCH_ACTIVE;
        fighter.currentMove = 'punch';
        fighter.state = 'punch';
        fighter.hitGiven = false;
        fighter.counterHit = false;
        fighter.displayMove = att.displayName || fighter.hero.moves?.basic?.punch || (role === 'Brawler' ? 'PUNCH' : 'SLASH');
        fighter.moveDisplayTimer = 60;
        fighter.meleeEffectType = att.meleeEffectType || (role === 'Brawler' ? 'brawler' : 'warrior');
        fighter.meleeEffectTimer = 15;
        return true;
    }

    // Ranged roles
    if (role === 'Mage' || role === 'Marksman') {
        const projData = fighter.hero.projectile;
        const override = att.projectileOverride || {};

        const defaultSpeed = role === 'Mage' ? 2.5 : 6;
        const speed = override.speed ?? projData?.speed ?? defaultSpeed;
        const dmgScale = override.damageScale ?? projData?.damageScale ?? (role === 'Mage' ? 0.5 : 1.0);
        const lifetime = override.lifetime ?? 4.0;
        const imagePath = override.image || projData?.image || fighter.hero.images?.projectile || null;
        const fallbackColors = override.colors || fighter.hero.colorPalette?.primary || ['#ff66ff', '#ff00ff'];

        const dmg = Math.floor((role === 'Mage' ? fighter.specialPower * 0.5 : fighter.attackPower) * dmgScale);
        const type = role === 'Mage' ? 'magic' : 'arrow';

        const projX = fighter.x + (fighter.facing === 1 ? fighter.width : -24);
        const projY = fighter.y + fighter.height / 2 - 12;
        const projectile = new Projectile(projX, projY, fighter.facing * speed, 0, dmg, fighter, type, lifetime, imagePath, fallbackColors);
        if (fighter.scene?.addProjectile) fighter.scene.addProjectile(projectile);
        else if (window.game?.sceneManager?.current?.addProjectile) window.game.sceneManager.current.addProjectile(projectile);

        fighter.projectileCooldown = att.cooldown ?? 40;    // frames before next shot
        fighter.attackTimer = 0;                             // no melee attack timer for projectile
        fighter.displayMove = att.displayName || fighter.hero.moves?.basic?.punch || (role === 'Mage' ? 'FIREBALL' : 'SHOOT');
        fighter.moveDisplayTimer = 30;
        return true;
    }

    return false;
}