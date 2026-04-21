export class GridSelector {
    constructor(items, columns = 5, itemsPerPage = 40) {
        this.items = items;
        this.columns = columns;
        this.itemsPerPage = itemsPerPage;
        this.currentPage = 0;
        this.cursorX = 0;
        this.cursorY = 0;
        this.updatePageItems();
    }

    updatePageItems() {
        const start = this.currentPage * this.itemsPerPage;
        const end = Math.min(start + this.itemsPerPage, this.items.length);
        this.pageItems = this.items.slice(start, end);
        this.totalPages = Math.ceil(this.items.length / this.itemsPerPage);
    }

    reset() {
        this.currentPage = 0;
        this.cursorX = 0;
        this.cursorY = 0;
        this.updatePageItems();
    }

    resetCursor() {
        this.cursorX = 0;
        this.cursorY = 0;
    }

    moveCursor(dx, dy) {
        const rows = Math.ceil(this.pageItems.length / this.columns);
        this.cursorX = Math.max(0, Math.min(this.columns - 1, this.cursorX + dx));
        this.cursorY = Math.max(0, Math.min(rows - 1, this.cursorY + dy));

        const index = this.cursorY * this.columns + this.cursorX;
        if (index >= this.pageItems.length) {
            const lastValidIndex = this.pageItems.length - 1;
            this.cursorY = Math.floor(lastValidIndex / this.columns);
            this.cursorX = lastValidIndex % this.columns;
        }
    }

    nextPage() {
        if (this.currentPage < this.totalPages - 1) {
            this.currentPage++;
            this.updatePageItems();
            this.resetCursor();
            return true;
        }
        return false;
    }

    prevPage() {
        if (this.currentPage > 0) {
            this.currentPage--;
            this.updatePageItems();
            this.resetCursor();
            return true;
        }
        return false;
    }

    getSelectedHero() {
        const index = this.cursorY * this.columns + this.cursorX;
        return this.pageItems[index];
    }

    render(ctx, x, y, width, height, activePlayer) {
        const iconSize = 50;
        const padding = 8;
        const cols = this.columns;
        const rows = Math.ceil(this.pageItems.length / cols);

        const gridWidth = cols * (iconSize + padding) - padding;
        const gridHeight = rows * (iconSize + padding) - padding;
        const startX = x + (width - gridWidth) / 2;
        const startY = y + (height - gridHeight) / 2;

        this.pageItems.forEach((hero, index) => {
            const col = index % cols;
            const row = Math.floor(index / cols);
            const ix = startX + col * (iconSize + padding);
            const iy = startY + row * (iconSize + padding);

            const colors = hero.colorPalette?.primary || ['#333', '#666'];
            ctx.fillStyle = colors[0];
            ctx.fillRect(ix, iy, iconSize, iconSize);
            ctx.strokeStyle = '#aaa';
            ctx.lineWidth = 2;
            ctx.strokeRect(ix, iy, iconSize, iconSize);

            ctx.font = 'bold 12px "Courier New", Courier, monospace';
            ctx.fillStyle = '#fff';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            const shortName = hero.name.split(' ').map(w => w[0]).join('').slice(0, 3);
            ctx.fillText(shortName, ix + iconSize/2, iy + iconSize/2);

            if (col === this.cursorX && row === this.cursorY) {
                ctx.strokeStyle = activePlayer === 1 ? '#4a90e2' : '#e24a4a';
                ctx.lineWidth = 4;
                ctx.strokeRect(ix - 2, iy - 2, iconSize + 4, iconSize + 4);
            }
        });

        // Page indicator
        ctx.font = '16px "Courier New", Courier, monospace';
        ctx.fillStyle = '#aaa';
        ctx.textAlign = 'center';
        ctx.fillText(`Page ${this.currentPage + 1} / ${this.totalPages}`, x + width/2, startY + gridHeight + 25);
        ctx.fillText('[ and ] to change page', x + width/2, startY + gridHeight + 45);
    }
}