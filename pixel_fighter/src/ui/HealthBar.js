export class HealthBar {
    constructor(x, y, width, height, maxValue, color = '#e24a4a') {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.maxValue = maxValue;
        this.currentValue = maxValue;
        this.color = color;
        this.phases = 3;
    }
    
    setValue(value) {
        this.currentValue = Math.max(0, Math.min(this.maxValue, value));
    }
    
    render(ctx) {
        const percent = this.currentValue / this.maxValue;
        
        // Background
        ctx.fillStyle = '#222';
        ctx.fillRect(this.x, this.y, this.width, this.height);
        
        // Health fill with phase colors
        let fillColor = this.color;
        if (percent < 0.33) fillColor = '#ff4444';
        else if (percent < 0.66) fillColor = '#ffaa00';
        
        ctx.fillStyle = fillColor;
        ctx.fillRect(this.x, this.y, this.width * percent, this.height);
        
        // Border
        ctx.strokeStyle = '#fff';
        ctx.lineWidth = 2;
        ctx.strokeRect(this.x, this.y, this.width, this.height);
        
        // Phase markers
        ctx.strokeStyle = '#aaa';
        ctx.lineWidth = 1;
        for (let i = 1; i < this.phases; i++) {
            const phaseX = this.x + (this.width / this.phases) * i;
            ctx.beginPath();
            ctx.moveTo(phaseX, this.y);
            ctx.lineTo(phaseX, this.y + this.height);
            ctx.stroke();
        }
    }
}