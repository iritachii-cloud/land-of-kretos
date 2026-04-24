import { CONFIG } from '../../config.js';

export function renderBattle(ctx, scene) {
    // Background
    if (scene.stage && scene.stage.background) {
        const bgImg = new Image();
        bgImg.src = scene.stage.background;
        if (bgImg.complete) ctx.drawImage(bgImg, 0, 0, CONFIG.CANVAS_WIDTH, CONFIG.CANVAS_HEIGHT);
        else { ctx.fillStyle = '#1a1e30'; ctx.fillRect(0, 0, CONFIG.CANVAS_WIDTH, CONFIG.CANVAS_HEIGHT); }
    } else {
        ctx.fillStyle = '#2a1a2a';
        ctx.fillRect(0, 0, CONFIG.CANVAS_WIDTH, CONFIG.CANVAS_HEIGHT);
    }

    // Ground
    ctx.fillStyle = '#6a4a2a';
    ctx.fillRect(0, CONFIG.GROUND_Y, CONFIG.CANVAS_WIDTH, 8);
    ctx.fillStyle = '#8a6a4a';
    ctx.fillRect(0, CONFIG.GROUND_Y + 2, CONFIG.CANVAS_WIDTH, 2);

    // Fighters
    if (scene.p1) scene.p1.render(ctx);
    if (scene.p2) scene.p2.render(ctx);

    // Creative melee effects
    if (scene.p1) drawMeleeEffect(ctx, scene.p1);
    if (scene.p2) drawMeleeEffect(ctx, scene.p2);

    // Projectiles
    scene.projectiles.forEach(p => p.render(ctx));

    // HUD
    scene.hud.drawPlayerUI(ctx, scene.p1, 30, 20, 400, 70, scene.p1RoundsWon, 'left', scene.totalRounds);
    scene.hud.drawPlayerUI(ctx, scene.p2, CONFIG.CANVAS_WIDTH - 430, 20, 400, 70, scene.p2RoundsWon, 'right', scene.totalRounds);

    // Round/Timer
    ctx.font = 'bold 20px monospace';
    ctx.fillStyle = '#ffdd66';
    ctx.textAlign = 'center';
    ctx.fillText(`Round ${scene.roundNumber} / ${scene.totalRounds}`, CONFIG.CANVAS_WIDTH / 2, 70);

    ctx.font = 'bold 36px monospace';
    ctx.fillStyle = '#ffffff';
    if (scene.game.settings.timer === 0) {
        ctx.fillText('∞', CONFIG.CANVAS_WIDTH / 2, 120);
    } else {
        ctx.fillText(Math.ceil(scene.roundTimer), CONFIG.CANVAS_WIDTH / 2, 120);
    }

    // Round / Game over messages
    if (scene.state === 'roundOver') {
        ctx.font = 'bold 40px "Courier New"';
        ctx.fillStyle = '#ffaa33';
        ctx.textAlign = 'center';
        const roundWinner = (scene.p1RoundsWon > scene.p2RoundsWon) ? scene.p1.hero.name : scene.p2.hero.name;
        ctx.fillText(`${roundWinner} wins the round!`, CONFIG.CANVAS_WIDTH / 2, 350);
    } else if (scene.state === 'gameover') {
        ctx.font = 'bold 56px "Courier New"';
        ctx.fillStyle = '#ffaa33';
        ctx.textAlign = 'center';
        const winnerName = scene.winner === 'p1' ? scene.p1.hero.name : scene.p2.hero.name;
        ctx.fillText(`${winnerName} WINS!`, CONFIG.CANVAS_WIDTH / 2, 350);
    }
}

// ---- Creative melee effect drawing ----
function drawMeleeEffect(ctx, fighter) {
    if (!fighter || fighter.meleeEffectTimer <= 0 || !fighter.meleeEffectType) return;

    const heroColors = fighter.hero?.colorPalette || {};
    const primary = heroColors.primary || ['#ffaa00', '#ff4400', '#aa0000'];
    const secondary = heroColors.secondary || ['#aaccff', '#88aaff', '#6688dd'];
    const tertiary = heroColors.tertiary || ['#ffcc00', '#ff8800', '#aa4400'];

    const centerX = fighter.x + fighter.width / 2;
    const centerY = fighter.y + fighter.height / 2;
    const alpha = fighter.meleeEffectTimer / 15;   // fade over time

    ctx.save();
    ctx.translate(centerX, centerY);
    if (fighter.facing === -1) ctx.scale(-1, 1);

    const type = fighter.meleeEffectType;

    if (type === 'brawler') {
        // Explosive burst with shockwave rings
        const grad = ctx.createRadialGradient(0, 0, 5, 0, 0, 50);
        grad.addColorStop(0, primary[0]);
        grad.addColorStop(0.5, primary[1]);
        grad.addColorStop(1, primary[2]);
        ctx.globalAlpha = alpha * 0.85;
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(0, 0, 50 * (1 - alpha * 0.4), 0, Math.PI * 2);
        ctx.fill();

        // Shockwave rings
        ctx.strokeStyle = secondary[0];
        ctx.lineWidth = 5 * alpha;
        for (let r = 15; r <= 70; r += 15) {
            ctx.beginPath();
            ctx.arc(0, 0, r, 0, Math.PI * 2);
            ctx.stroke();
        }

        // Radial energy lines
        ctx.strokeStyle = primary[1];
        ctx.lineWidth = 3 * alpha;
        for (let i = 0; i < 12; i++) {
            const angle = (i * Math.PI / 6) + Date.now() * 0.01;
            const dx = Math.cos(angle) * 35;
            const dy = Math.sin(angle) * 35;
            ctx.beginPath();
            ctx.moveTo(dx * 0.3, dy * 0.3);
            ctx.lineTo(dx, dy);
            ctx.stroke();
        }
    } else if (type === 'warrior') {
        // Swift slashing arc with afterimages
        const sweepAngle = Math.PI * 0.8;
        const halfSweep = sweepAngle / 2;
        ctx.globalAlpha = alpha * 0.9;
        ctx.lineWidth = 8;
        ctx.lineCap = 'round';
        ctx.shadowColor = secondary[0];
        ctx.shadowBlur = 25;

        // Main slash arc
        ctx.strokeStyle = primary[0];
        ctx.beginPath();
        ctx.arc(0, 0, 100, -halfSweep, halfSweep, false);
        ctx.stroke();

        // Inner bright arc
        ctx.lineWidth = 4;
        ctx.shadowBlur = 15;
        ctx.strokeStyle = secondary[0];
        ctx.beginPath();
        ctx.arc(0, 0, 40, -halfSweep, halfSweep, false);
        ctx.stroke();

        // Slash trails (small arcs radiating)
        ctx.lineWidth = 2;
        ctx.shadowBlur = 8;
        for (let i = 0; i < 5; i++) {
            const angle = -halfSweep + 0.2 + (i / 4) * (sweepAngle - 0.4);
            const dx = Math.cos(angle) * 35;
            const dy = Math.sin(angle) * 35;
            ctx.strokeStyle = primary[1];
            ctx.beginPath();
            ctx.moveTo(dx, dy);
            ctx.lineTo(dx + Math.cos(angle) * 25, dy + Math.sin(angle) * 25);
            ctx.stroke();
        }
        ctx.shadowBlur = 0;
        ctx.lineCap = 'butt';
    } else if (type === 'kick') {
        // Pixelated shockwave with central flash
        const flicker = alpha * 1.2;
        ctx.globalAlpha = Math.min(1, flicker);
        const size = 30 * (1 - alpha * 0.3);
        const half = size / 2;
        const step = 6;

        // Pixelated cloud
        ctx.fillStyle = tertiary[0];
        for (let ix = -half; ix <= half; ix += step) {
            for (let iy = -half; iy <= half; iy += step) {
                if (Math.random() > 0.25) continue;
                ctx.fillRect(ix, iy, 4, 4);
            }
        }

        // Flash center
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(-5, -5, 10, 10);

        // Expanding ring
        ctx.strokeStyle = tertiary[1];
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.arc(0, 0, size * 1.5, 0, Math.PI * 2);
        ctx.stroke();
    } else if (type === 'special') {
        // Elemental burst (colorful stars)
        ctx.globalAlpha = alpha * 0.7;
        const colors = [primary[0], secondary[0], tertiary[0], '#fff'];
        for (let i = 0; i < 20; i++) {
            const angle = Math.random() * Math.PI * 2;
            const dist = Math.random() * 50;
            const x = Math.cos(angle) * dist;
            const y = Math.sin(angle) * dist;
            ctx.fillStyle = colors[Math.floor(Math.random() * colors.length)];
            ctx.beginPath();
            ctx.moveTo(x + 5, y);
            for (let j = 0; j < 5; j++) {
                const a = (j / 5) * Math.PI * 2;
                const r = j === 0 ? 0 : 5;
                ctx.lineTo(x + Math.cos(a) * r, y + Math.sin(a) * r);
            }
            ctx.fill();
        }
    } else if (type === 'ultimate') {
        // Massive golden explosion with shockwave
        ctx.globalAlpha = alpha * 0.9;
        const grad = ctx.createRadialGradient(0, 0, 10, 0, 0, 80);
        grad.addColorStop(0, '#ffcc00');
        grad.addColorStop(0.5, '#ff8800');
        grad.addColorStop(1, '#ff0000');
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(0, 0, 80 * (1 - alpha * 0.2), 0, Math.PI * 2);
        ctx.fill();

        ctx.strokeStyle = '#ffdd55';
        ctx.lineWidth = 6 * alpha;
        ctx.beginPath();
        ctx.arc(0, 0, 95, 0, Math.PI * 2);
        ctx.stroke();
    }

    ctx.restore();
}