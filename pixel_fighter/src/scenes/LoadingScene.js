import { Scene } from './Scene.js';
import { CONFIG } from '../config.js';

export class LoadingScene extends Scene {
    constructor(game) {
        super(game);
        this.progress = 0;
        this.startTime = null;
        this.tipIndex = 0;
        this.skipPressed = false;
    }
    enter() {
        this.startTime = performance.now();
        this.progress = 0;
        this.skipPressed = false;
        this.tipIndex = Math.floor(Math.random() * CONFIG.TIPS.length);
    }
    update(deltaTime) {
        const elapsed = performance.now() - this.startTime;
        this.progress = Math.min(elapsed / CONFIG.LOADING_MIN_DURATION, 1.0);
        if (this.progress >= 1.0 || this.skipPressed) {
            this.game.sceneManager.switchTo('menu');
        }
    }
    render(ctx) {
        const { width, height } = this.game.canvas;
        ctx.fillStyle = '#0a0a1a';
        ctx.fillRect(0, 0, width, height);
        ctx.strokeStyle = '#4a90e2';
        ctx.lineWidth = 4;
        ctx.strokeRect(10, 10, width - 20, height - 20);
        ctx.font = 'bold 48px "Courier New", Courier, monospace';
        ctx.fillStyle = '#fff';
        ctx.shadowColor = '#4a90e2';
        ctx.shadowBlur = 10;
        ctx.textAlign = 'center';
        ctx.fillText('KRETOS FIGHTER', width/2, height/2 - 60);
        ctx.shadowBlur = 0;
        ctx.font = '20px "Courier New", Courier, monospace';
        ctx.fillStyle = '#aaddff';
        ctx.fillText(CONFIG.TIPS[this.tipIndex], width/2, height/2 + 20);
        const barWidth = 400, barHeight = 20;
        const barX = (width - barWidth)/2, barY = height/2 + 60;
        ctx.fillStyle = '#333';
        ctx.fillRect(barX, barY, barWidth, barHeight);
        const grad = ctx.createLinearGradient(barX, barY, barX + barWidth * this.progress, barY);
        grad.addColorStop(0, '#4a90e2'); grad.addColorStop(1, '#aaddff');
        ctx.fillStyle = grad;
        ctx.fillRect(barX, barY, barWidth * this.progress, barHeight);
        ctx.strokeStyle = '#aaa';
        ctx.lineWidth = 2;
        ctx.strokeRect(barX, barY, barWidth, barHeight);
        ctx.font = '16px monospace';
        ctx.fillStyle = '#888';
        ctx.fillText('Press BACKSPACE to skip', width/2, height - 40);
    }
    handleInput(event) {
        if (event.type === 'keydown' && event.code === 'Backspace') {
            this.skipPressed = true;
        }
    }
}