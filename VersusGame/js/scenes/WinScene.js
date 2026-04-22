import { Scene } from './Scene.js';

export class WinScene extends Scene {
    constructor(game) {
        super(game);
        this.winner = null;
    }
    enter() {
        this.winner = this.game.battleConfig?.winner || 'p1';
    }
    render(ctx) {
        const { width, height } = this.game.canvas;
        ctx.fillStyle = '#0a0a1a';
        ctx.fillRect(0, 0, width, height);
        ctx.font = 'bold 56px monospace';
        ctx.fillStyle = '#ffcc44';
        ctx.textAlign = 'center';
        ctx.fillText('VICTORY!', width/2, height/2 - 50);
        ctx.font = '32px monospace';
        ctx.fillStyle = '#fff';
        ctx.fillText(`${this.winner.toUpperCase()}`, width/2, height/2 + 30);
        ctx.font = '20px monospace';
        ctx.fillStyle = '#aaa';
        ctx.fillText('Press ENTER to rematch · ESC for menu', width/2, height - 80);
    }
    handleInput(e) {
        if (e.code === 'Enter') {
            // Rematch with same config
            this.game.sceneManager.switchTo('battle');
        } else if (e.code === 'Escape') {
            this.game.sceneManager.switchTo('selection');
        }
    }
}