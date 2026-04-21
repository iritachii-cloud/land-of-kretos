import { Scene } from './Scene.js';

export class WinScene extends Scene {
    constructor(game) {
        super(game);
        this.winner = null;
    }
    
    enter() {
        // Retrieve winner from battle config
        this.winner = this.game.battleConfig?.winner || 'p1';
    }
    
    render(ctx) {
        const { width, height } = this.game.canvas;
        
        ctx.fillStyle = '#0a0a1a';
        ctx.fillRect(0, 0, width, height);
        
        ctx.font = 'bold 64px "Courier New", Courier, monospace';
        ctx.fillStyle = '#ffcc00';
        ctx.textAlign = 'center';
        ctx.fillText(`${this.winner.toUpperCase()} WINS!`, width/2, height/2 - 50);
        
        ctx.font = '28px monospace';
        ctx.fillStyle = '#fff';
        ctx.fillText('Press ENTER for Rematch', width/2, height/2 + 50);
        ctx.fillText('Press ESC for Character Select', width/2, height/2 + 100);
    }
    
    handleInput(event) {
        if (event.type === 'keydown') {
            if (event.code === 'Enter') {
                // Rematch: reuse same config
                this.game.sceneManager.switchTo('battle');
            } else if (event.code === 'Escape') {
                this.game.sceneManager.switchTo('selection');
            }
        }
    }
}