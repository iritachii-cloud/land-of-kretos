import { HomingProjectile } from '../Projectile.js';

/**
 * Launch a single homing missile from a random direction toward the opponent.
 * Used by UltimateSystem for Mage/Marksman ultimate.
 * Assumes fighter.scene is set and has addProjectile.
 */
export function launchHomingMissile(fighter, opponent, damage, index) {
    const angle = Math.random() * Math.PI * 2;
    const startDist = 300 + Math.random() * 150;
    const startX = opponent.x + opponent.width / 2 + Math.cos(angle) * startDist;
    const startY = opponent.y + opponent.height / 2 + Math.sin(angle) * startDist;

    const colors = fighter.hero.colorPalette?.primary || ['#ffaa00', '#ff4400'];
    const imagePath =
        (fighter.hero.projectile && fighter.hero.projectile.image)
            ? fighter.hero.projectile.image
            : (fighter.hero.images && fighter.hero.images.projectile)
                ? fighter.hero.images.projectile
                : null;

    const missile = new HomingProjectile(
        startX, startY,
        0, 0,
        damage, fighter, 'homing', 5.5,
        imagePath, colors, opponent
    );

    // initial slow velocity toward opponent
    const toOppX = (opponent.x + opponent.width / 2) - startX;
    const toOppY = (opponent.y + opponent.height / 2) - startY;
    const len = Math.sqrt(toOppX * toOppX + toOppY * toOppY) || 1;
    missile.vx = (toOppX / len) * 1.2;
    missile.vy = (toOppY / len) * 1.2;
    missile.acceleration = 0.15;
    missile.maxSpeed = 10;

    // Add to scene
    const scene = fighter.scene || window.game?.sceneManager?.current;
    if (scene && scene.addProjectile) {
        scene.addProjectile(missile);
    }
}