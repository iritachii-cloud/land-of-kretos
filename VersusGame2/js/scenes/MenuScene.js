import { Scene } from './Scene.js';

export class MenuScene extends Scene {
    constructor(game) {
        super(game);
        this.selected = 0;
        this.options = [
            { text: '⭐ FIGHT', action: 'fight' },
            { text: '📖 KRETOS INDEX', action: 'index' },
            { text: '⚙️ SETTINGS', action: 'settings' }
        ];
    }
    enter() { this.selected = 0; }
    render(ctx) {
        const { width, height } = this.game.canvas;
        const grad = ctx.createLinearGradient(0, 0, width, height);
        grad.addColorStop(0, '#1a1124');
        grad.addColorStop(1, '#0a0a1a');
        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, width, height);

        ctx.font = 'bold 64px "Courier New"';
        ctx.fillStyle = '#f0a020';
        ctx.shadowBlur = 10;
        ctx.shadowColor = '#aa4400';
        ctx.textAlign = 'center';
        ctx.fillText('VERSUS', width / 2, 130);
        ctx.font = '28px monospace';
        ctx.fillStyle = '#c9b36b';
        ctx.fillText('Street Fighter · Arcade Edition', width / 2, 190);
        ctx.shadowBlur = 0;

        const startY = 300;
        this.options.forEach((opt, i) => {
            const isSelected = i === this.selected;
            const y = startY + i * 70;
            ctx.fillStyle = isSelected ? '#f0a020' : '#2a2a3a';
            ctx.fillRect(width / 2 - 180, y - 20, 360, 50);
            ctx.strokeStyle = isSelected ? '#ffdd88' : '#888';
            ctx.lineWidth = 2;
            ctx.strokeRect(width / 2 - 180, y - 20, 360, 50);
            ctx.font = 'bold 28px monospace';
            ctx.fillStyle = isSelected ? '#000' : '#fff';
            ctx.fillText(opt.text, width / 2, y + 12);
        });

        ctx.font = '16px monospace';
        ctx.fillStyle = '#aaa';
        ctx.fillText('↑↓ / WASD · ENTER / ⚡P', width / 2, height - 40);
    }
    handleInput(e) {
        if (e.type !== 'keydown') return;
        // Navigation with Arrow keys or WASD
        const isUp = e.code === 'ArrowUp' || e.code === 'KeyW';
        const isDown = e.code === 'ArrowDown' || e.code === 'KeyS';
        const isConfirm = e.code === 'Enter' || e.code === 'KeyU';
        
        if (isUp) {
            this.selected = (this.selected - 1 + this.options.length) % this.options.length;
            this.game.soundManager?.play('select');
        } else if (isDown) {
            this.selected = (this.selected + 1) % this.options.length;
            this.game.soundManager?.play('select');
        } else if (isConfirm) {
            const action = this.options[this.selected].action;
            this.game.soundManager?.play('confirm');
            if (action === 'fight') this.game.sceneManager.switchTo('selection');
            else if (action === 'index') this.game.sceneManager.switchTo('index');
            else if (action === 'settings') this.game.sceneManager.switchTo('settings');
        }
    }
}