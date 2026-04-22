export class HealthBar {
    constructor(x, y, w, h, maxVal, color) {
        this.x = x; this.y = y; this.w = w; this.h = h;
        this.max = maxVal;
        this.current = maxVal;
        this.color = color;
    }
    setValue(val) { this.current = Math.max(0, Math.min(this.max, val)); }
    render(ctx) {
        const percent = this.current / this.max;
        ctx.fillStyle = '#222';
        ctx.fillRect(this.x, this.y, this.w, this.h);
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x+2, this.y+2, (this.w-4)*percent, this.h-4);
        ctx.strokeStyle = '#fff';
        ctx.strokeRect(this.x, this.y, this.w, this.h);
    }
}