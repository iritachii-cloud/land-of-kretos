export class BattleHUD {
    constructor(game) {
        this.game = game;
        this.winnerIconImg = new Image();
        this.winnerIconImg.src = '../assets/images/game/winnericon.png';
    }

    drawPlayerUI(ctx, player, x, y, w, h, roundsWon, side, totalRounds) {
        if (!player) return;
        const hero = player.hero;
        const iconSize = 60;
        const iconX = side === 'left' ? x : x + w - iconSize;
        const iconY = y + (h - iconSize) / 2;

        // Icon (unchanged)
        ctx.save();
        ctx.beginPath();
        ctx.arc(iconX + iconSize / 2, iconY + iconSize / 2, iconSize / 2 + 2, 0, Math.PI * 2);
        ctx.fillStyle = '#222';
        ctx.fill();
        ctx.strokeStyle = side === 'left' ? '#4a90e2' : '#e24a4a';
        ctx.lineWidth = 3;
        ctx.stroke();
        ctx.clip();
        ctx.beginPath();
        ctx.arc(iconX + iconSize / 2, iconY + iconSize / 2, iconSize / 2, 0, Math.PI * 2);
        ctx.clip();
        if (hero.images?.icon) {
            const img = new Image();
            img.src = '../assets/' + hero.images.icon.replace(/^\//, '');
            if (img.complete) ctx.drawImage(img, iconX, iconY, iconSize, iconSize);
            else { ctx.fillStyle = '#555'; ctx.fillRect(iconX, iconY, iconSize, iconSize); }
        } else { ctx.fillStyle = '#555'; ctx.fillRect(iconX, iconY, iconSize, iconSize); }
        ctx.restore();

        const barX = side === 'left' ? iconX + iconSize + 10 : x;
        const barW = side === 'left' ? w - iconSize - 10 : w - iconSize - 10;
        const barY = y + 5, barH = 14;
        const manaBarY = barY + barH + 6, manaBarH = 8;
        const superManaBarY = manaBarY + manaBarH + 4;

        // Health segments (unchanged)
        const palette = hero.colorPalette || {
            primary: ['#cc3333', '#ff6666', '#ff9999'],
            secondary: ['#3366cc', '#6699ff', '#99ccff'],
            tertiary: ['#33cc33', '#66ff66', '#99ff99'],
            quaternary: ['#cc33cc', '#ff66ff', '#ff99ff']
        };
        const segCount = 3, segSpacing = 2, totalSpacing = (segCount - 1) * segSpacing;
        const segWidth = (barW - totalSpacing) / segCount;
        const healthPerSeg = player.maxHealth / segCount;
        const segmentPalettes = [palette.primary, palette.secondary, palette.tertiary];

        for (let i = 0; i < segCount; i++) {
            const segX = barX + i * (segWidth + segSpacing);
            const segHealth = Math.min(healthPerSeg, Math.max(0, player.displayHealth - i * healthPerSeg));
            const segPercent = segHealth / healthPerSeg;
            const colors = segmentPalettes[i] || ['#cc3333', '#ff6666', '#ff9999'];
            ctx.fillStyle = '#1a0a0a';
            ctx.fillRect(segX, barY, segWidth, barH);
            if (segPercent > 0) {
                const grad = ctx.createLinearGradient(segX, barY, segX + segWidth * segPercent, barY);
                grad.addColorStop(0, colors[0]);
                grad.addColorStop(0.5, colors[1]);
                grad.addColorStop(1, colors[2]);
                ctx.fillStyle = grad;
                ctx.fillRect(segX, barY, segWidth * segPercent, barH);
            }
            ctx.strokeStyle = '#ffaa00';
            ctx.lineWidth = 1.5;
            ctx.strokeRect(segX, barY, segWidth, barH);
        }
        ctx.font = 'bold 12px monospace';
        ctx.fillStyle = '#fff';
        ctx.shadowColor = '#000'; ctx.shadowBlur = 4;
        ctx.textAlign = 'center';
        ctx.fillText(`${Math.ceil(player.health)} / ${player.maxHealth}`, barX + barW / 2, barY + barH - 3);
        ctx.shadowBlur = 0;

        // Normal mana bar
        ctx.fillStyle = '#1a1a2e';
        ctx.fillRect(barX, manaBarY, barW, manaBarH);
        const manaPercent = player.mana / player.maxMana;
        const quatColors = palette.quaternary || ['#cc33cc', '#ff66ff', '#ff99ff'];
        const manaGrad = ctx.createLinearGradient(barX, manaBarY, barX + barW * manaPercent, manaBarY);
        manaGrad.addColorStop(0, quatColors[0]);
        manaGrad.addColorStop(0.5, quatColors[1]);
        manaGrad.addColorStop(1, quatColors[2]);
        ctx.fillStyle = manaGrad;
        ctx.fillRect(barX, manaBarY, barW * manaPercent, manaBarH);
        ctx.strokeStyle = '#88aaff';
        ctx.lineWidth = 1.5;
        ctx.strokeRect(barX, manaBarY, barW, manaBarH);

        // Super mana bar
        ctx.fillStyle = '#1a1a2e';
        ctx.fillRect(barX, superManaBarY, barW, manaBarH);
        const superPercent = player.superMana / player.maxMana;
        if (superPercent > 0) {
            const superGrad = ctx.createLinearGradient(barX, superManaBarY, barX + barW * superPercent, superManaBarY);
            superGrad.addColorStop(0, '#ffcc00');
            superGrad.addColorStop(0.5, '#ffdd55');
            superGrad.addColorStop(1, '#ffffff');
            ctx.fillStyle = superGrad;
            ctx.fillRect(barX, superManaBarY, barW * superPercent, manaBarH);
        }
        ctx.strokeStyle = '#ddaa00';
        ctx.lineWidth = 1.5;
        ctx.strokeRect(barX, superManaBarY, barW, manaBarH);

        // ULTIMATE READY BANNER (new epic design)
        if (player.ultimateSystem.ready) {
            // Pulsating golden banner above the super mana bar
            const bannerY = superManaBarY - 18;
            const bannerH = 18;
            const bannerX = barX;
            const bannerW = barW;
            const time = performance.now() / 200;

            ctx.save();
            ctx.shadowColor = '#ffaa00';
            ctx.shadowBlur = 15;
            ctx.fillStyle = '#1a1a00';
            this.roundRect(ctx, bannerX, bannerY, bannerW, bannerH, 4);
            ctx.fill();
            ctx.strokeStyle = '#ffcc00';
            ctx.lineWidth = 2;
            ctx.stroke();

            ctx.font = 'bold 12px "Press Start 2P", monospace';
            ctx.fillStyle = '#ffdd55';
            ctx.textAlign = 'center';
            ctx.fillText('⚡ ULTIMATE READY!', barX + barW/2, bannerY + bannerH - 4);
            ctx.shadowBlur = 0;
            ctx.restore();
        }

        // Mana values text
        ctx.font = 'bold 10px monospace';
        ctx.fillStyle = '#ccddff';
        ctx.shadowBlur = 4;
        ctx.fillText(`${Math.floor(player.mana)} / ${player.maxMana}`, barX + barW / 2, manaBarY + manaBarH - 2);
        ctx.fillStyle = '#ffdd88';
        ctx.fillText(`${Math.floor(player.superMana)} / ${player.maxMana}`, barX + barW / 2, superManaBarY + manaBarH - 2);
        ctx.shadowBlur = 0;

        // Name and win icons (unchanged)
        ctx.font = 'bold 16px "Courier New"';
        ctx.fillStyle = '#ffdd99';
        ctx.textAlign = side === 'left' ? 'left' : 'right';
        const nameX = side === 'left' ? barX : barX + barW;
        ctx.fillText(hero.name, nameX, y + h - 5);

        const winIconSize = 22;
        const winStartX = side === 'left' ? barX : barX + barW - winIconSize * totalRounds;
        const winY = y + h + 5;
        for (let i = 0; i < totalRounds; i++) {
            const winX = winStartX + i * (winIconSize + 4) * (side === 'left' ? 1 : -1);
            if (i < roundsWon) {
                if (this.winnerIconImg.complete) ctx.drawImage(this.winnerIconImg, winX, winY, winIconSize, winIconSize);
                else { ctx.fillStyle = '#ffd700'; ctx.beginPath(); ctx.arc(winX + winIconSize / 2, winY + winIconSize / 2, winIconSize / 2, 0, Math.PI * 2); ctx.fill(); }
            } else {
                ctx.fillStyle = '#444'; ctx.beginPath(); ctx.arc(winX + winIconSize / 2, winY + winIconSize / 2, winIconSize / 2, 0, Math.PI * 2); ctx.fill();
                ctx.strokeStyle = '#888'; ctx.lineWidth = 1; ctx.stroke();
            }
        }

        // Move display panel (dynamic width, prevents overflow)
        if (player.displayMove && player.moveDisplayTimer > 0) {
            const moveText = player.displayMove.toUpperCase();
            ctx.font = 'bold 18px "Courier New", monospace';
            const textWidth = ctx.measureText(moveText).width + 40;
            const marginBottom = 30, marginSide = 20;
            const mW = Math.max(180, textWidth + 20);
            const mH = 36;
            const mX = side === 'left' ? marginSide : this.game.canvas.width - mW - marginSide;
            const mY = this.game.canvas.height - mH - marginBottom;

            ctx.fillStyle = 'rgba(20,20,40,0.9)';
            ctx.strokeStyle = side === 'left' ? '#4a90e2' : '#e24a4a';
            ctx.lineWidth = 2;
            this.roundRect(ctx, mX, mY, mW, mH, 8);
            ctx.fill();
            ctx.stroke();

            ctx.font = 'bold 18px "Courier New", monospace';
            ctx.fillStyle = '#ffffff';
            ctx.shadowBlur = 6;
            ctx.shadowColor = '#000';
            ctx.textAlign = 'center';
            ctx.fillText(moveText, mX + mW / 2, mY + mH / 2 + 6);
            ctx.shadowBlur = 0;
        }
    }

    roundRect(ctx, x, y, w, h, r) {
        if (w < 2 * r) r = w / 2;
        if (h < 2 * r) r = h / 2;
        ctx.beginPath();
        ctx.moveTo(x + r, y);
        ctx.lineTo(x + w - r, y);
        ctx.quadraticCurveTo(x + w, y, x + w, y + r);
        ctx.lineTo(x + w, y + h - r);
        ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
        ctx.lineTo(x + r, y + h);
        ctx.quadraticCurveTo(x, y + h, x, y + h - r);
        ctx.lineTo(x, y + r);
        ctx.quadraticCurveTo(x, y, x + r, y);
        ctx.closePath();
    }
}