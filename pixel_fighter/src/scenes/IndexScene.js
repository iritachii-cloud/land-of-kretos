import { Scene } from './Scene.js';

export class IndexScene extends Scene {
    render(ctx) {
        const { width, height } = this.game.canvas;
        ctx.fillStyle = '#0a1a2e';
        ctx.fillRect(0, 0, width, height);
        
        ctx.font = 'bold 32px "Courier New", Courier, monospace';
        ctx.fillStyle = '#fff';
        ctx.textAlign = 'center';
        ctx.fillText('KRETOS INDEX', width/2, 80);
        ctx.font = '20px monospace';
        ctx.fillText('(Lore and Hero Database)', width/2, 130);
        ctx.fillText('Press ESC to return', width/2, height - 50);
    }
    
    handleInput(event) {
        if (event.type === 'keydown' && event.code === 'Escape') {
            this.game.sceneManager.switchTo('menu');
        }
    }
}