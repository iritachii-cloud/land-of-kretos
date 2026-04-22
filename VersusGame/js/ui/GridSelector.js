export class GridSelector {
    constructor(items, columns = 6, itemsPerPage = 36, getIconImage = null) {
        this.items = items;
        this.columns = columns;
        this.itemsPerPage = itemsPerPage;
        this.currentPage = 0;
        this.cursorX = 0;
        this.cursorY = 0;
        this.getIconImage = getIconImage;
        this.updatePage();
    }
    updatePage() {
        const start = this.currentPage * this.itemsPerPage;
        this.pageItems = this.items.slice(start, start + this.itemsPerPage);
        this.totalPages = Math.ceil(this.items.length / this.itemsPerPage);
    }
    reset() {
        this.currentPage = 0;
        this.cursorX = 0;
        this.cursorY = 0;
        this.updatePage();
    }
    resetCursor() {
        this.cursorX = 0;
        this.cursorY = 0;
    }
    moveCursor(dx, dy) {
        const rows = Math.ceil(this.pageItems.length / this.columns);
        this.cursorX = Math.min(this.columns-1, Math.max(0, this.cursorX + dx));
        this.cursorY = Math.min(rows-1, Math.max(0, this.cursorY + dy));
        const idx = this.cursorY * this.columns + this.cursorX;
        if (idx >= this.pageItems.length) {
            const lastIdx = this.pageItems.length - 1;
            this.cursorY = Math.floor(lastIdx / this.columns);
            this.cursorX = lastIdx % this.columns;
        }
    }
    prevPage() {
        if (this.currentPage > 0) {
            this.currentPage--;
            this.updatePage();
            this.resetCursor();
            return true;
        }
        return false;
    }
    nextPage() {
        if (this.currentPage < this.totalPages - 1) {
            this.currentPage++;
            this.updatePage();
            this.resetCursor();
            return true;
        }
        return false;
    }
    getSelectedHero() {
        const idx = this.cursorY * this.columns + this.cursorX;
        return this.pageItems[idx];
    }
    render(ctx, x, y, w, h, activePlayer) {
        const iconSize = 60;
        const padding = 8;
        const cols = this.columns;
        const rows = Math.ceil(this.pageItems.length / cols);
        const gridW = cols * (iconSize + padding);
        const gridH = rows * (iconSize + padding);
        const startX = x + (w - gridW) / 2;
        const startY = y + (h - gridH) / 2;
        
        this.pageItems.forEach((hero, i) => {
            const col = i % cols;
            const row = Math.floor(i / cols);
            const ix = startX + col * (iconSize + padding);
            const iy = startY + row * (iconSize + padding);
            ctx.fillStyle = '#2a2a3a';
            ctx.fillRect(ix, iy, iconSize, iconSize);
            ctx.strokeStyle = '#aaa';
            ctx.lineWidth = 2;
            ctx.strokeRect(ix, iy, iconSize, iconSize);
            
            const img = this.getIconImage ? this.getIconImage(hero) : null;
            if (img && img.complete && img.naturalWidth > 0) {
                ctx.drawImage(img, ix, iy, iconSize, iconSize);
            } else {
                ctx.font = 'bold 20px monospace';
                ctx.fillStyle = '#fff';
                ctx.textAlign = 'center';
                ctx.fillText(hero.name.slice(0, 3).toUpperCase(), ix + iconSize/2, iy + iconSize/2);
            }
            
            if (col === this.cursorX && row === this.cursorY) {
                ctx.strokeStyle = activePlayer === 1 ? '#4a90e2' : '#e24a4a';
                ctx.lineWidth = 4;
                ctx.strokeRect(ix-3, iy-3, iconSize+6, iconSize+6);
            }
        });
        ctx.font = '14px monospace';
        ctx.fillStyle = '#ccc';
        ctx.fillText(`Page ${this.currentPage+1}/${this.totalPages}`, x + w/2, startY + gridH + 20);
    }
}