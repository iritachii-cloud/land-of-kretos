export class Projectile {
    constructor(x, y, vx, vy, damage, owner, type = 'magic', lifetime = 4.0, imagePath = null, fallbackColors = ['#ff66ff', '#ff00ff']) {
        this.x = x;
        this.y = y;
        this.vx = vx;
        this.vy = vy;
        this.damage = damage;
        this.owner = owner;
        this.type = type;
        this.lifetime = lifetime;
        this.active = true;
        this.width = 24;
        this.height = 24;
        this.hitGiven = false;

        this.image = null;
        this.imageLoaded = false;
        this.fallbackColors = fallbackColors;

        if (imagePath) {
            const img = new Image();
            img.src = imagePath;
            img.onload = () => { this.imageLoaded = true; };
            img.onerror = () => { this.imageLoaded = false; };
            this.image = img;
        }
    }

    update(dt, fighters) {
        if (!this.active) return;
        const frameMult = 60;
        this.x += this.vx * dt * frameMult;
        this.y += this.vy * dt * frameMult;
        this.lifetime -= dt;
        if (this.lifetime <= 0) { this.active = false; return; }

        for (let fighter of fighters) {
            if (fighter === this.owner) continue;
            if (fighter.invulTimer > 0) continue;
            if (fighter.y + fighter.height < this.y) continue;
            if (this.x < fighter.x + fighter.width &&
                this.x + this.width > fighter.x &&
                this.y < fighter.y + fighter.height &&
                this.y + this.height > fighter.y) {
                this.handleHit(fighter);
                this.active = false;
                break;
            }
        }
    }

    handleHit(target) {
        let isParried = target.parryActive;
        if (isParried) {
            target.parryBlockCount++;
            if (target.parryBlockCount > target.maxParryBlocks) {
                isParried = false;
                target.parryActive = false;
                target.parryBlockCount = 0;
                target.parryCooldown = 30;
            }
            if (isParried) {
                window.game?.soundManager?.play('parry');
                target.blockSpark = { active: true, x: target.x + target.width/2, y: target.y, timer: 10 };
                return;
            }
        }
        target.health = Math.max(0, target.health - this.damage);
        target.parryBlockCount = 0;
        target.invulTimer = 20;
        target.state = 'hurt';
        target.vy = -4;
        target.vx = (target.x < this.owner.x ? -6 : 6);
        window.game?.soundManager?.play('hit');
        target.hitSpark = { active: true, x: target.x + target.width/2, y: target.y + target.height/2, timer: 8, type: 'hit' };
    }

    render(ctx) {
        if (!this.active) return;
        ctx.save();
        const centerX = this.x + this.width / 2;
        const centerY = this.y + this.height / 2;
        const radius = this.width / 2;

        if (this.image && this.image.complete && this.image.naturalWidth > 0) {
            ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
        } else {
            const grad = ctx.createRadialGradient(centerX - 3, centerY - 3, 2, centerX, centerY, radius);
            grad.addColorStop(0, this.fallbackColors[0]);
            grad.addColorStop(1, this.fallbackColors[1]);
            ctx.fillStyle = grad;
            ctx.shadowColor = this.fallbackColors[0];
            ctx.shadowBlur = 12;
            ctx.beginPath();
            ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
            ctx.fill();
        }
        ctx.restore();
    }
}