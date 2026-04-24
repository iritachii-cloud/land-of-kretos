/**
 * Applies a hit from fighter to opponent.
 * Called when Fighter's attack box overlaps opponent and attack is active.
 * This is a pure function – it reads from fighter and mutates opponent.
 */
export function applyHit(fighter, opponent) {
    const moveType = fighter.currentMove;
    const isParried = (moveType === 'punch' || moveType === 'kick') && opponent.parryActive;
    const isCounter = (opponent.attackActive > 0 && opponent.invulTimer <= 0);

    let dmg = fighter.attackPower;
    if (moveType === 'kick') dmg = Math.floor(fighter.attackPower * 1.4);
    else if (moveType === 'special') dmg = fighter.specialPower;
    else if (moveType === 'ultimate') dmg = fighter.specialPower * 1.5;

    // Parry handling
    if (isParried) {
        opponent.parryBlockCount++;
        if (opponent.parryBlockCount > opponent.maxParryBlocks) {
            // broke parry guard
            opponent.parryActive = false;
            opponent.parryBlockCount = 0;
            opponent.parryCooldown = 30;
        } else {
            if (moveType === 'special' || moveType === 'ultimate') {
                dmg = Math.floor(dmg * 0.3);
                opponent.blockSpark = { active: true, x: opponent.x + opponent.width / 2, y: opponent.y, timer: 10 };
                window.game?.soundManager?.play('block');
            } else {
                dmg = 0;
                opponent.blockSpark = { active: true, x: opponent.x + opponent.width / 2, y: opponent.y, timer: 10 };
                window.game?.soundManager?.play('parry');
            }
        }
    }

    // Counter hit bonus
    if (isCounter && !isParried) {
        dmg = Math.floor(dmg * 1.3);
        fighter.counterHit = true;
        window.game?.soundManager?.play('hit');
    } else if (!isParried) {
        window.game?.soundManager?.play('hit');
    }

    // Apply damage
    if (dmg > 0) {
        opponent.health = Math.max(0, opponent.health - dmg);
        opponent.parryBlockCount = 0;
    }

    // Visual effect on opponent (kick sparks)
    if (moveType === 'kick' && dmg > 0) {
        opponent.meleeEffectType = 'kick';
        opponent.meleeEffectTimer = 12;
    }

    // Knockback & hitstun
    let knockbackVX = fighter.facing * 9;
    let knockbackVY = -5;
    let hitStun = 25;

    if (moveType === 'kick')        { knockbackVX = fighter.facing * 12; knockbackVY = -7; hitStun = 30; }
    if (moveType === 'special')     { knockbackVX = fighter.facing * 15; knockbackVY = -9; hitStun = 40; }
    if (moveType === 'ultimate')    { knockbackVX = fighter.facing * 20; knockbackVY = -12; hitStun = 50; }
    if (isCounter)                  { knockbackVX *= 1.2; hitStun += 10; }
    if (isParried && dmg === 0)     { knockbackVX = 0; knockbackVY = 0; hitStun = 15; }

    opponent.invulTimer = hitStun;
    opponent.vy = knockbackVY;
    opponent.vx = knockbackVX;
    opponent.state = 'hurt';
    fighter.hitGiven = true;

    // Hit spark
    opponent.hitSpark = {
        active: true,
        x: opponent.x + opponent.width / 2,
        y: opponent.y + opponent.height / 2,
        timer: 8,
        type: isCounter ? 'counter' : (isParried ? 'block' : 'hit')
    };

    // Screen shake on heavy hits
    if (dmg > 15 && window.game?.sceneManager?.current?.shake) {
        window.game.sceneManager.current.shake(8, 0.2);
    }

    // Attack sounds (only when not parried)
    if (!isParried) {
        const soundMap = {
            punch: 'punch',
            kick: 'kick',
            special: 'special',
            ultimate: 'ultimate'
        };
        const sound = soundMap[moveType] || 'hit';
        window.game?.soundManager?.play(sound);
    }
}

/**
 * Applies ultimate damage with parry reduction rules:
 *   - parry reduces damage by only 30% (takes 70% of original)
 *   - always deals at least 1 damage
 *   - applies hitstun and knockback similar to a special move
 *   - does NOT use fighter.currentMove (so we don't interfere with active attack)
 */
export function applyUltimateHit(fighter, opponent, baseDamage) {
    const isParried = opponent.parryActive;
    let dmg = Math.floor(baseDamage);
    let hitStun = 40;
    let knockbackVX = fighter.facing * 18;
    let knockbackVY = -10;

    if (isParried) {
        // ultimate parry: only 30% reduction
        dmg = Math.floor(dmg * 0.7);
        knockbackVX = Math.floor(knockbackVX * 0.5);
        knockbackVY = Math.floor(knockbackVY * 0.5);
        hitStun = 20;
        opponent.blockSpark = { active: true, x: opponent.x + opponent.width / 2, y: opponent.y, timer: 10 };
        window.game?.soundManager?.play('block');
    }

    if (dmg > 0) {
        opponent.health = Math.max(0, opponent.health - dmg);
        opponent.parryBlockCount = 0;
    }

    opponent.invulTimer = hitStun;
    opponent.vy = knockbackVY;
    opponent.vx = knockbackVX;
    opponent.state = 'hurt';
    opponent.hitSpark = {
        active: true,
        x: opponent.x + opponent.width / 2,
        y: opponent.y + opponent.height / 2,
        timer: 10,
        type: isParried ? 'block' : 'ultimate'
    };

    window.game?.sceneManager?.current?.shake(15, 0.4);
    window.game?.soundManager?.play('ultimate');
}