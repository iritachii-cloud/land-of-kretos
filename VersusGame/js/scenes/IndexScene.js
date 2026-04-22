import { Scene } from './Scene.js';
import { heroes } from '../data/heroes.js';

export class IndexScene extends Scene {
    constructor(game) {
        super(game);
        this.scrollOffset = 0;
        this.maxScroll = 0;
        this.selectedIndex = 0;
    }
    
    enter() {
        this.scrollOffset = 0;
        this.selectedIndex = 0;
        this.maxScroll = Math.max(0, heroes.length - 12); // show 12 per page
    }
    
    render(ctx) {
        const { width, height } = this.game.canvas;
        ctx.fillStyle = '#0a0c1c';
        ctx.fillRect(0, 0, width, height);
        
        // decorative border
        ctx.strokeStyle = '#c9a96b';
        ctx.lineWidth = 3;
        ctx.strokeRect(20, 20, width-40, height-40);
        
        ctx.font = 'bold 38px "Courier New"';
        ctx.fillStyle = '#f5c542';
        ctx.textAlign = 'center';
        ctx.fillText('KRETOS INDEX', width/2, 70);
        ctx.font = '16px monospace';
        ctx.fillStyle = '#bbaa77';
        ctx.fillText('Hero Database', width/2, 105);
        
        const startY = 140;
        const rowHeight = 42;
        const visibleRows = 12;
        const startIdx = this.scrollOffset;
        const endIdx = Math.min(heroes.length, startIdx + visibleRows);
        
        for (let i = startIdx; i < endIdx; i++) {
            const hero = heroes[i];
            const y = startY + (i - startIdx) * rowHeight;
            const isSelected = i === this.selectedIndex;
            
            ctx.fillStyle = isSelected ? '#3a3a5a' : '#151828';
            ctx.fillRect(80, y-8, width-160, rowHeight-4);
            ctx.strokeStyle = '#aaa';
            ctx.lineWidth = 1;
            ctx.strokeRect(80, y-8, width-160, rowHeight-4);
            
            ctx.font = '18px monospace';
            ctx.fillStyle = '#ffdd99';
            ctx.textAlign = 'left';
            ctx.fillText(hero.name, 100, y+10);
            ctx.font = '14px monospace';
            ctx.fillStyle = '#ccccaa';
            ctx.fillText(`❤️ ${hero.stats.health}  ⚔️ ${hero.stats.physicalAtk}  💪 ${hero.stats.stamina}  ✨ ${hero.moves.ultimate.name}`, 400, y+10);
        }
        
        // scroll indicator
        if (this.maxScroll > 0) {
            const percent = this.scrollOffset / this.maxScroll;
            const barY = startY + 20;
            const barH = (visibleRows * rowHeight) - 40;
            ctx.fillStyle = '#555';
            ctx.fillRect(width-30, barY, 8, barH);
            ctx.fillStyle = '#f5a623';
            ctx.fillRect(width-30, barY + percent * barH, 8, 30);
        }
        
        ctx.font = '16px monospace';
        ctx.fillStyle = '#aaa';
        ctx.textAlign = 'center';
        ctx.fillText('↑↓ scroll · ESC to return', width/2, height - 40);
    }
    
    handleInput(e) {
        if (e.type !== 'keydown') return;
        if (e.code === 'ArrowUp') {
            if (this.selectedIndex > 0) this.selectedIndex--;
            if (this.selectedIndex < this.scrollOffset) this.scrollOffset = this.selectedIndex;
        } else if (e.code === 'ArrowDown') {
            if (this.selectedIndex < heroes.length - 1) this.selectedIndex++;
            if (this.selectedIndex >= this.scrollOffset + 12) this.scrollOffset = this.selectedIndex - 11;
        } else if (e.code === 'Escape') {
            this.game.sceneManager.switchTo('menu');
        }
    }
}