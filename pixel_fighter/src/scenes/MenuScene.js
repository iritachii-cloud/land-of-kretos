import { Scene } from './Scene.js';

export class MenuScene extends Scene {
    constructor(game) {
        super(game);
        this.selectedIndex = 0;
        this.buttons = [
            { text: 'FIGHT', action: 'play' },
            { text: 'KRETOS INDEX', action: 'index' },
            { text: 'SETTINGS', action: 'settings' }
        ];
    }
    
    enter() {
        this.selectedIndex = 0;
    }
    
    render(ctx) {
        const { width, height } = this.game.canvas;
        
        const grad = ctx.createLinearGradient(0, 0, width, height);
        grad.addColorStop(0, '#1a0a2e');
        grad.addColorStop(1, '#0a1a2e');
        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, width, height);
        
        ctx.font = 'bold 56px "Courier New", Courier, monospace';
        ctx.fillStyle = '#ffcc00';
        ctx.shadowColor = '#aa5500';
        ctx.shadowBlur = 8;
        ctx.textAlign = 'center';
        ctx.fillText('KRETOS FIGHTER', width / 2, 120);
        ctx.shadowBlur = 0;
        
        ctx.font = '24px "Courier New", Courier, monospace';
        ctx.fillStyle = '#aaccff';
        ctx.fillText('PIXEL ARENA', width / 2, 170);
        
        const startY = 300;
        const buttonSpacing = 70;
        const buttonWidth = 300;
        const buttonHeight = 50;
        
        this.buttons.forEach((btn, i) => {
            const x = (width - buttonWidth) / 2;
            const y = startY + i * buttonSpacing;
            
            ctx.fillStyle = i === this.selectedIndex ? '#ffaa00' : '#334466';
            ctx.fillRect(x, y, buttonWidth, buttonHeight);
            ctx.strokeStyle = i === this.selectedIndex ? '#ffffff' : '#888888';
            ctx.lineWidth = 3;
            ctx.strokeRect(x, y, buttonWidth, buttonHeight);
            
            ctx.font = 'bold 28px "Courier New", Courier, monospace';
            ctx.fillStyle = i === this.selectedIndex ? '#000' : '#fff';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillText(btn.text, x + buttonWidth/2, y + buttonHeight/2);
        });
        
        ctx.font = '16px "Courier New", Courier, monospace';
        ctx.fillStyle = '#888';
        ctx.fillText('Use ↑↓ to select, ENTER to confirm', width / 2, height - 40);
    }
    
    handleInput(event) {
        if (event.type === 'keydown') {
            switch (event.code) {
                case 'ArrowUp':
                    this.selectedIndex = (this.selectedIndex - 1 + this.buttons.length) % this.buttons.length;
                    break;
                case 'ArrowDown':
                    this.selectedIndex = (this.selectedIndex + 1) % this.buttons.length;
                    break;
                case 'Enter':
                    this.activateButton();
                    break;
            }
        }
    }
    
    activateButton() {
        const action = this.buttons[this.selectedIndex].action;
        switch (action) {
            case 'play':
                this.game.sceneManager.switchTo('selection');
                break;
            case 'index':
                this.game.sceneManager.switchTo('index');
                break;
            case 'settings':
                this.game.sceneManager.switchTo('settings');
                break;
        }
    }
}