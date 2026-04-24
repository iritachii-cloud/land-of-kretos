export function renderChargeAura(ctx, fighter, palette) {
    if (!fighter.charging || !fighter.grounded || fighter.state === 'ultimate') return;

    const centerX = fighter.x + fighter.width / 2;
    const centerY = fighter.y + fighter.height / 2;
    const primary = palette?.primary || ['#C0C0C0', '#FFD700'];
    const colors = [primary[0], primary[1] || '#FFD700'];

    const time = fighter.chargeTimer;
    const pulse = 0.8 + 0.4 * Math.sin(time * 8);

    ctx.save();
    ctx.translate(centerX, centerY);

    // Outer jagged aura layers
    for (let layer = 0; layer < 3; layer++) {
        const layerScale = (layer + 1) * 0.6;
        const rx = (70 + layer * 15) * pulse * layerScale;
        const ry = (100 + layer * 15) * pulse * layerScale;
        const opacity = 0.1 + layer * 0.08;
        ctx.globalAlpha = opacity;

        ctx.beginPath();
        const segments = 16;
        for (let i = 0; i <= segments; i++) {
            const angle = (i / segments) * Math.PI * 2;
            const rXmod = rx + Math.sin(angle * 6 + time * 15) * 12;
            const rYmod = ry + Math.cos(angle * 5 + time * 12) * 12;
            const x = Math.cos(angle) * rXmod;
            const y = Math.sin(angle) * rYmod;
            if (i === 0) ctx.moveTo(x, y);
            else ctx.lineTo(x, y);
        }
        ctx.closePath();

        const gradient = ctx.createRadialGradient(0, 0, 10, 0, 0, rx);
        gradient.addColorStop(0, colors[0]);
        gradient.addColorStop(1, colors[1]);
        ctx.fillStyle = gradient;
        ctx.fill();
        ctx.strokeStyle = colors[0];
        ctx.lineWidth = 2;
        ctx.stroke();
    }

    // Inner bright core
    ctx.globalAlpha = 0.25;
    ctx.beginPath();
    ctx.ellipse(0, 0, 30 * pulse, 40 * pulse, 0, 0, Math.PI * 2);
    const innerGrad = ctx.createRadialGradient(0, 0, 5, 0, 0, 30 * pulse);
    innerGrad.addColorStop(0, '#ffffff');
    innerGrad.addColorStop(1, colors[0]);
    ctx.fillStyle = innerGrad;
    ctx.fill();

    // Rising particles
    if (fighter.chargeParticles) {
        fighter.chargeParticles.forEach(p => {
            const alpha = 1 - p.life / p.maxLife;
            ctx.globalAlpha = alpha * 0.8;
            ctx.fillStyle = p.color;
            ctx.beginPath();
            ctx.arc(p.x - centerX, p.y - centerY, p.size, 0, Math.PI * 2);
            ctx.fill();
            ctx.globalAlpha = alpha * 0.3;
            ctx.beginPath();
            ctx.arc(p.x - centerX, p.y - centerY, p.size * 3, 0, Math.PI * 2);
            ctx.fillStyle = p.color;
            ctx.fill();
        });
    }

    ctx.restore();
}