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
        this.fallbackColors = fallbackColors;

        this.image = null;
        this.imageLoaded = false;
        this.imageFailed = false;

        if (imagePath) {
            const img = new Image();
            img.src = imagePath;
            img.onload = () => { this.imageLoaded = true; };
            img.onerror = () => { this.imageFailed = true; };
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
                target.blockSpark = { active: true, x: target.x + target.width / 2, y: target.y, timer: 10 };
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
        target.hitSpark = { active: true, x: target.x + target.width / 2, y: target.y + target.height / 2, timer: 8, type: 'hit' };
    }

    render(ctx) {
        if (!this.active) return;
        ctx.save();
        const centerX = this.x + this.width / 2;
        const centerY = this.y + this.height / 2;

        if (this.image && this.image.complete && this.image.naturalWidth > 0) {
            const imgW = this.image.width / 3.5;
            const imgH = this.image.height / 2;
            const drawX = centerX - imgW / 2;
            const drawY = centerY - imgH / 2;
            if (this.vx < 0) {
                ctx.translate(drawX + imgW, drawY);
                ctx.scale(-1, 1);
                ctx.drawImage(this.image, 0, 0, imgW, imgH);
            } else {
                ctx.drawImage(this.image, drawX, drawY, imgW, imgH);
            }
        } else {
            const radius = this.width / 2;
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

export class HomingProjectile extends Projectile {
    constructor(x, y, vx, vy, damage, owner, type, lifetime, imagePath, fallbackColors, target) {
        super(x, y, vx, vy, damage, owner, type, lifetime, imagePath, fallbackColors);
        this.target = target;
        this.turnRate = 0.12;             // faster homing
        this.acceleration = 0;            // new
        this.maxSpeed = Infinity;         // new
    }

    update(dt, fighters) {
        if (!this.active) return;

        // Accelerate
        if (this.acceleration) {
            const currentSpeed = Math.sqrt(this.vx * this.vx + this.vy * this.vy);
            if (currentSpeed < this.maxSpeed) {
                const newSpeed = Math.min(currentSpeed + this.acceleration, this.maxSpeed);
                const angle = Math.atan2(this.vy, this.vx);
                this.vx = Math.cos(angle) * newSpeed;
                this.vy = Math.sin(angle) * newSpeed;
            }
        }

        // Steer toward target
        if (this.target && this.target.health > 0) {
            const targetX = this.target.x + this.target.width / 2;
            const targetY = this.target.y + this.target.height / 2;
            const dx = targetX - this.x;
            const dy = targetY - this.y;
            const angle = Math.atan2(dy, dx);
            const currentAngle = Math.atan2(this.vy, this.vx);
            let diff = angle - currentAngle;
            while (diff > Math.PI) diff -= Math.PI * 2;
            while (diff < -Math.PI) diff += Math.PI * 2;
            const newAngle = currentAngle + Math.sign(diff) * Math.min(Math.abs(diff), this.turnRate);
            const speed = Math.sqrt(this.vx * this.vx + this.vy * this.vy);
            this.vx = Math.cos(newAngle) * speed;
            this.vy = Math.sin(newAngle) * speed;
        }

        super.update(dt, fighters);
    }

    // Additional visual trail for ultimate missiles
    render(ctx) {
        super.render(ctx);
        // Add a glowing trail
        if (this.active) {
            ctx.save();
            const centerX = this.x + this.width / 2 - this.vx * 2;
            const centerY = this.y + this.height / 2 - this.vy * 2;
            ctx.globalAlpha = 0.4;
            ctx.fillStyle = this.fallbackColors[1] || '#ffffff';
            ctx.beginPath();
            ctx.arc(centerX, centerY, this.width * 0.4, 0, Math.PI * 2);
            ctx.fill();
            ctx.restore();
        }
    }
}