import { CONFIG } from '../../config.js';

export function updateFightingState(scene, dt) {
    const input = scene.game.inputHandler;

    if (scene.game.settings.timer > 0) {
        if (scene.roundTimer > 0) {
            scene.roundTimer = Math.max(0, scene.roundTimer - dt);
            if (scene.roundTimer <= 0) scene.endRound('timeout');
        }
    }

    handlePlayerInput(scene, dt, input);
    scene.p1.update(scene.p2, dt);
    scene.p2.update(scene.p1, dt);

    // Projectiles
    for (let i = scene.projectiles.length - 1; i >= 0; i--) {
        const p = scene.projectiles[i];
        if (!p.active) {
            scene.projectiles.splice(i, 1);
            continue;
        }
        p.update(dt, [scene.p1, scene.p2]);
        if (!p.active) {
            scene.projectiles.splice(i, 1);
        }
    }

    // Projectile vs projectile collision
    for (let i = 0; i < scene.projectiles.length; i++) {
        const a = scene.projectiles[i];
        if (!a.active) continue;
        for (let j = i + 1; j < scene.projectiles.length; j++) {
            const b = scene.projectiles[j];
            if (!b.active) continue;
            // Only collide if from different owners
            if (a.owner !== b.owner && rectsOverlap(a, b)) {
                a.active = false;
                b.active = false;
                // Optional: brief spark effect
                window.game?.soundManager?.play('block');
                // Could add hitSpark here but simpler to just deactivate
                break; // a is now inactive, move to next a
            }
        }
    }

    // Cleanup inactive projectiles
    for (let i = scene.projectiles.length - 1; i >= 0; i--) {
        if (!scene.projectiles[i].active) scene.projectiles.splice(i, 1);
    }

    if (scene.p1.health <= 0) scene.endRound('p2');
    else if (scene.p2.health <= 0) scene.endRound('p1');
}

function rectsOverlap(a, b) {
    return (
        a.x < b.x + b.width &&
        a.x + a.width > b.x &&
        a.y < b.y + b.height &&
        a.y + a.height > b.y
    );
}

// ... rest of handlePlayerInput and applyPlayerInput unchanged ...
function handlePlayerInput(scene, dt, input) {
    const p1State = input.getPlayerState('p1');
    const p2State = input.getPlayerState('p2');

    if (!scene.p1.isAI) {
        applyPlayerInput(scene.p1, p1State, scene.p2);
        if (p1State.charge && p1State.special && scene.p1.ultimateSystem.ready) {
            scene.p1.ultimateSystem.activate(scene.p2);
        }
    }

    if (!scene.p2.isAI) {
        applyPlayerInput(scene.p2, p2State, scene.p1);
        if (p2State.charge && p2State.special && scene.p2.ultimateSystem.ready) {
            scene.p2.ultimateSystem.activate(scene.p1);
        }
    }
}

function applyPlayerInput(fighter, state, opponent) {
    // ---- Free Teleport ----
    if (state.teleport && fighter.teleportCooldown <= 0 &&
        fighter.state !== 'hurt' && fighter.state !== 'ultimate') {

        let teleported = false;
        if (state.left && !fighter._prevInput.left) {
            teleported = fighter.performTeleport(opponent, 'left');
            if (teleported) fighter._prevInput.left = true;
        } else if (state.right && !fighter._prevInput.right) {
            teleported = fighter.performTeleport(opponent, 'right');
            if (teleported) fighter._prevInput.right = true;
        } else if (state.jump && !fighter._prevInput.up) {
            teleported = fighter.performTeleport(opponent, 'up');
            if (teleported) {
                fighter._prevInput.up = true;
                fighter._prevJump = true;
            }
        }

        if (teleported) {
            fighter.stopMove();
            fighter._prevInput.left = state.left;
            fighter._prevInput.right = state.right;
            fighter._prevInput.up = state.jump;
            return;
        }
    }

    // ---- Charge Teleport ----
    if (state.charge && fighter.teleportCooldown <= 0 &&
        fighter.state !== 'hurt' && fighter.state !== 'ultimate' && opponent) {

        const myMid = fighter.x + fighter.width / 2;
        const oppMid = opponent.x + opponent.width / 2;
        const isLeftOfOpponent = myMid < oppMid;

        let chargeTeleported = false;

        if (state.left && !fighter._prevInput.left) {
            const pos = isLeftOfOpponent ? 'behind' : 'front';
            chargeTeleported = fighter.performChargeTeleport(opponent, pos);
            if (chargeTeleported) fighter._prevInput.left = true;
        } else if (state.right && !fighter._prevInput.right) {
            const pos = isLeftOfOpponent ? 'front' : 'behind';
            chargeTeleported = fighter.performChargeTeleport(opponent, pos);
            if (chargeTeleported) fighter._prevInput.right = true;
        }

        if (chargeTeleported) {
            fighter.stopMove();
            fighter.charging = false;
            fighter._prevInput.left = state.left;
            fighter._prevInput.right = state.right;
            return;
        }
    }

    // ---- Regular charging ----
    fighter.charging = state.charge && fighter.grounded;

    // ---- Movement ----
    if (state.left) fighter.moveLeft();
    else if (state.right) fighter.moveRight();
    else fighter.stopMove();

    // ---- Jump ----
    if (state.jump && !fighter._prevJump) {
        fighter.jump();
    }
    fighter._prevJump = state.jump;

    // ---- Attacks ----
    if (state.punch) fighter.punch();
    if (state.kick) fighter.kick();
    if (state.special && !(state.charge && fighter.ultimateSystem.ready)) fighter.performSpecial();
    fighter.setParry(state.parry);
    if (state.throw) fighter.throwAttempt();

    // ---- Update previous direction states ----
    fighter._prevInput.left = state.left;
    fighter._prevInput.right = state.right;
    fighter._prevInput.up = state.jump;
}