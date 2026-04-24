import { renderChargeAura } from '../effects/ChargeAura.js';
import { ASSET_BASE } from '../main.js';

export class FighterRenderer {
    constructor(fighter) {
        this.fighter = fighter;
    }

    render(ctx) {
        const f = this.fighter;
        const drawHeight = f.height;
        const drawY = f.y;

        // Charging aura
        if (f.charging && f.grounded && f.state !== 'ultimate') {
            renderChargeAura(ctx, f, f.hero.colorPalette);
        }

        // Sprite
        if (f.spriteImg && f.spriteImg.complete && f.spriteImg.naturalWidth > 0) {
            const imgW = f.spriteImg.width;
            const imgH = f.spriteImg.height;
            const scale = f.spriteScale;
            const drawWidth = imgW * scale;
            const imgDrawHeight = imgH * scale;
            const imgX = f.x + (f.width - drawWidth) / 2;
            const imgY = drawY + drawHeight - imgDrawHeight;

            ctx.save();
            if (f.facing === -1) {
                ctx.translate(imgX + drawWidth, imgY);
                ctx.scale(-1, 1);
                ctx.drawImage(f.spriteImg, 0, 0, drawWidth, imgDrawHeight);
            } else {
                ctx.drawImage(f.spriteImg, imgX, imgY, drawWidth, imgDrawHeight);
            }
            ctx.restore();
        } else {
            ctx.fillStyle = f.side === 'left' ? '#c44' : '#4a6ea8';
            if (f.state === 'hurt') ctx.fillStyle = '#aaa';
            if (f.parryActive) ctx.fillStyle = '#ffdd77';
            if (f.state === 'ultimate') ctx.fillStyle = '#ffaa00';
            ctx.fillRect(f.x, drawY, f.width, drawHeight);
            ctx.fillStyle = '#fff';
            ctx.font = 'bold 14px monospace';
            ctx.textAlign = 'center';
            ctx.fillText(f.hero.name, f.x + f.width / 2, drawY - 8);
        }

        // Parry halo
        if (f.parryActive) {
            ctx.save();
            ctx.translate(f.x + f.width / 2, drawY + drawHeight / 2);
            ctx.strokeStyle = '#aaccff';
            ctx.lineWidth = 4;
            ctx.globalAlpha = 0.6;
            ctx.beginPath();
            ctx.arc(0, 0, 30, 0, Math.PI * 2);
            ctx.stroke();
            ctx.globalAlpha = 1.0;
            ctx.font = 'bold 12px monospace';
            ctx.fillStyle = '#fff';
            ctx.textAlign = 'center';
            ctx.fillText(`${f.parryBlockCount}/${f.maxParryBlocks}`, 0, -40);
            ctx.restore();
        }
    }
}