import { Scene } from './Scene.js';

export class WinScene extends Scene {
    constructor(game) {
        super(game);
        this.winner = null;
        this.winnerHero = null;
        this.bgImage = new Image();
        this.bgLoaded = false;
        this.blinkTimer = 0;
    }

    enter() {
        const cfg = this.game.battleConfig;
        this.winner = cfg?.winner || 'p1';
        
        // Determine winning hero
        if (this.winner === 'p1') {
            this.winnerHero = cfg?.p1;
        } else {
            this.winnerHero = cfg?.p2;
        }

        // Build background image path
        if (this.winnerHero && this.winnerHero.name) {
            const heroName = this.winnerHero.name.toLowerCase().replace(/\s+/g, '_').replace(/[^a-z0-9_]/g, '');
            const bgPath = `../assets/images/heroes/${heroName}/bg.png`;
            this.bgImage.src = bgPath;
            this.bgLoaded = false;
            this.bgImage.onload = () => { this.bgLoaded = true; };
            this.bgImage.onerror = () => { this.bgLoaded = false; };
        } else {
            this.bgLoaded = false;
        }
        
        this.blinkTimer = 0;
    }

    update(dt) {
        this.blinkTimer += dt * 3; // speed of blinking
        if (this.blinkTimer > Math.PI * 2) this.blinkTimer -= Math.PI * 2;
    }

    render(ctx) {
        const { width, height } = this.game.canvas;

        // Draw background
        if (this.bgLoaded && this.bgImage.complete && this.bgImage.naturalWidth > 0) {
            ctx.save();
            ctx.filter = 'blur(6px)';
            ctx.globalAlpha = 0.5;
            ctx.drawImage(this.bgImage, 0, 0, width, height);
            ctx.restore();
        } else {
            ctx.fillStyle = '#0a0a1a';
            ctx.fillRect(0, 0, width, height);
        }

        // Pixelated blinking text
        const playerText = this.winner === 'p1' ? 'PLAYER 1 WINS' : 'PLAYER 2 WINS';
        const blinkAlpha = 0.7 + 0.3 * Math.sin(this.blinkTimer);
        
        ctx.save();
        ctx.imageSmoothingEnabled = false; // pixelated look
        ctx.shadowColor = '#aa4400';
        ctx.shadowBlur = 12;
        ctx.font = 'bold 48px "Press Start 2P", "Courier New", monospace';
        ctx.fillStyle = '#ffcc44';
        ctx.globalAlpha = blinkAlpha;
        ctx.textAlign = 'center';
        ctx.fillText(playerText, width / 2, height / 2 - 30);
        
        ctx.font = 'bold 32px "Press Start 2P", "Courier New", monospace';
        ctx.fillStyle = '#ffffff';
        ctx.shadowBlur = 8;
        ctx.fillText(this.winnerHero?.name?.toUpperCase() || this.winner.toUpperCase(), width / 2, height / 2 + 30);
        ctx.restore();

        // Bottom instruction
        ctx.font = '18px monospace';
        ctx.fillStyle = '#aaa';
        ctx.shadowBlur = 4;
        ctx.fillText('Press U/Enter to rematch · I/Esc for menu', width / 2, height - 60);
        ctx.shadowBlur = 0;
    }

    handleInput(e) {
        const key = e.code;
        if (key === 'Enter' || key === 'KeyU') {
            this.game.soundManager?.play('confirm');
            this.game.sceneManager.switchTo('battle');
        } else if (key === 'Escape' || key === 'KeyI') {
            this.game.soundManager?.play('back');
            this.game.sceneManager.switchTo('selection');
        }
    }
}