import { Scene } from './Scene.js';
import { CONFIG } from '../config.js';
import { ASSET_BASE } from '../main.js';

export class LoadingScene extends Scene {
    constructor(game) {
        super(game);
        this.progress = 0;
        this.startTime = 0;
        this.tip = "";
        this.minDuration = 20.0;

        this.stars = [];
        this.particles = [];
        this.heroSprites = [];
        this.galaxyHue = 0;
        this.time = 0;
    }

    enter() {
        this.startTime = performance.now();
        this.progress = 0;
        this.tip = CONFIG.TIPS[Math.floor(Math.random() * CONFIG.TIPS.length)];
        this.time = 0;

        // Generate starfield
        this.stars = [];
        for (let i = 0; i < 200; i++) {
            this.stars.push({
                x: Math.random(),
                y: Math.random(),
                size: Math.random() * 2.5 + 0.5,
                speed: Math.random() * 0.02 + 0.005,
                brightness: Math.random() * 0.5 + 0.5
            });
        }

        // Floating particles
        this.particles = [];
        for (let i = 0; i < 50; i++) {
            this.particles.push({
                x: Math.random(),
                y: Math.random(),
                vx: (Math.random() - 0.5) * 0.003,
                vy: (Math.random() - 0.5) * 0.003,
                size: Math.random() * 3 + 1,
                color: `hsla(${Math.random() * 60 + 20}, 80%, 60%, 0.7)`
            });
        }

        // Select random heroes and attempt to load images
        const heroes = this.game.heroes || [];
        this.heroSprites = [];
        if (heroes.length > 0) {
            const shuffled = [...heroes].sort(() => Math.random() - 0.5);
            const count = Math.min(8, heroes.length);

            for (let i = 0; i < count; i++) {
                const hero = shuffled[i];
                const spriteData = {
                    hero,
                    x: Math.random() * 0.7 + 0.15,
                    y: Math.random() * 0.6 + 0.2,
                    scale: 0.8 + Math.random() * 1.2,
                    rotation: (Math.random() - 0.5) * 0.3,
                    phase: Math.random() * Math.PI * 2,
                    speed: 0.5 + Math.random() * 1.5,
                    alpha: 0,
                    img: null,
                    loaded: false,
                    failed: false
                };

                // Try to load images in priority order: loading → selection → spriteRight → icon
                const tryLoad = (path, nextType = null) => {
                    const img = new Image();
                    img.onload = () => {
                        spriteData.img = img;
                        spriteData.loaded = true;
                    };
                    img.onerror = () => {
                        if (nextType) {
                            tryLoad(nextType);
                        } else {
                            spriteData.failed = true;
                        }
                    };
                    img.src = path;
                };

                // Build the fallback chain
                const images = hero.images || {};
                const loadingPath = images.loading ? ASSET_BASE + images.loading.replace(/^\//, '') : null;
                const selectionPath = images.selection ? ASSET_BASE + images.selection.replace(/^\//, '') : null;
                const spritePath = images.spriteRight ? ASSET_BASE + images.spriteRight.replace(/^\//, '') : null;
                const iconPath = images.icon ? ASSET_BASE + images.icon.replace(/^\//, '') : null;

                if (loadingPath) {
                    tryLoad(loadingPath, selectionPath || spritePath || iconPath);
                } else if (selectionPath) {
                    tryLoad(selectionPath, spritePath || iconPath);
                } else if (spritePath) {
                    tryLoad(spritePath, iconPath);
                } else if (iconPath) {
                    tryLoad(iconPath);
                } else {
                    spriteData.failed = true;
                }

                this.heroSprites.push(spriteData);
            }
        }
    }

    update(dt) {
        this.time += dt;
        const elapsed = (performance.now() - this.startTime) / 1000;
        this.progress = Math.min(1, elapsed / this.minDuration);

        this.galaxyHue = (this.galaxyHue + dt * 5) % 360;

        this.stars.forEach(s => {
            s.brightness = 0.5 + 0.5 * Math.sin(this.time * 2 + s.x * 10);
        });

        this.particles.forEach(p => {
            p.x += p.vx * dt * 60;
            p.y += p.vy * dt * 60;
            if (p.x < 0) p.x = 1;
            if (p.x > 1) p.x = 0;
            if (p.y < 0) p.y = 1;
            if (p.y > 1) p.y = 0;
        });

        this.heroSprites.forEach(s => {
            s.alpha = 0.3 + 0.5 * (Math.sin(this.time * s.speed + s.phase) + 1) * 0.5;
            s.x += Math.sin(this.time * 0.5 + s.phase) * 0.002;
            s.y += Math.cos(this.time * 0.3 + s.phase) * 0.0015;
            s.x = Math.max(0.1, Math.min(0.9, s.x));
            s.y = Math.max(0.1, Math.min(0.8, s.y));
        });

        if (this.progress >= 1) {
            this.game.sceneManager.switchTo('menu');
        }
    }

    render(ctx) {
        const { width, height } = this.game.canvas;

        // Background gradient
        const grad = ctx.createRadialGradient(width * 0.3, height * 0.4, 50, width * 0.7, height * 0.6, width);
        const hue1 = (this.galaxyHue) % 360;
        const hue2 = (this.galaxyHue + 40) % 360;
        const hue3 = (this.galaxyHue + 200) % 360;
        grad.addColorStop(0, `hsl(${hue1}, 70%, 8%)`);
        grad.addColorStop(0.5, `hsl(${hue2}, 60%, 5%)`);
        grad.addColorStop(1, `hsl(${hue3}, 70%, 3%)`);
        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, width, height);

        // Stars
        this.stars.forEach(s => {
            const x = s.x * width;
            const y = s.y * height;
            ctx.fillStyle = `rgba(255, 240, 200, ${s.brightness})`;
            ctx.beginPath();
            ctx.arc(x, y, s.size * 0.8, 0, Math.PI * 2);
            ctx.fill();
            ctx.shadowColor = `hsl(${this.galaxyHue}, 80%, 70%)`;
            ctx.shadowBlur = 8 * s.brightness;
            ctx.fill();
            ctx.shadowBlur = 0;
        });

        // Particles
        this.particles.forEach(p => {
            const x = p.x * width;
            const y = p.y * height;
            ctx.fillStyle = p.color;
            ctx.beginPath();
            ctx.arc(x, y, p.size, 0, Math.PI * 2);
            ctx.fill();
            ctx.shadowColor = '#ffaa33';
            ctx.shadowBlur = 12;
            ctx.fill();
            ctx.shadowBlur = 0;
        });

        // Hero sprites - only draw if image loaded successfully
        this.heroSprites.forEach(s => {
            if (!s.loaded || s.failed || !s.img) return;
            if (!s.img.complete || s.img.naturalWidth === 0) return;

            const x = s.x * width;
            const y = s.y * height;
            const w = s.img.width * s.scale * 0.8;
            const h = s.img.height * s.scale * 0.8;

            ctx.save();
            ctx.translate(x, y);
            ctx.rotate(s.rotation + Math.sin(this.time * 0.8 + s.phase) * 0.05);
            ctx.globalAlpha = s.alpha * 0.7;
            ctx.shadowColor = `hsl(${this.galaxyHue + 30}, 80%, 60%)`;
            ctx.shadowBlur = 25;
            ctx.drawImage(s.img, -w / 2, -h / 2, w, h);
            ctx.shadowBlur = 0;
            ctx.globalAlpha = s.alpha;
            ctx.drawImage(s.img, -w / 2, -h / 2, w, h);
            ctx.restore();
        });

        // Decorative border
        ctx.strokeStyle = '#f5c542';
        ctx.lineWidth = 4;
        ctx.strokeRect(20, 20, width - 40, height - 40);

        // Title
        ctx.font = 'bold 64px "Courier New"';
        ctx.fillStyle = '#ffd966';
        ctx.shadowColor = '#ff8800';
        ctx.shadowBlur = 20;
        ctx.textAlign = 'center';
        ctx.fillText('KRETOS VERSUS', width / 2, height / 2 - 60);

        // Subtitle
        ctx.font = '24px monospace';
        ctx.fillStyle = '#bbddff';
        ctx.shadowBlur = 10;
        ctx.fillText('Arcade Fighter · Across the Six Realms', width / 2, height / 2 - 10);

        // Tip
        ctx.font = '20px monospace';
        ctx.fillStyle = '#ffe0b0';
        ctx.shadowBlur = 8;
        ctx.fillText(this.tip, width / 2, height / 2 + 40);

        // Loading bar
        const barW = 600, barH = 28;
        const barX = (width - barW) / 2, barY = height / 2 + 100;

        ctx.shadowColor = '#f5a623';
        ctx.shadowBlur = 20;
        ctx.fillStyle = '#222';
        ctx.fillRect(barX, barY, barW, barH);

        const fillW = barW * this.progress;
        const gradient = ctx.createLinearGradient(barX, barY, barX + fillW, barY);
        gradient.addColorStop(0, '#ffaa00');
        gradient.addColorStop(0.5, '#ff6600');
        gradient.addColorStop(1, '#ff3300');
        ctx.fillStyle = gradient;
        ctx.fillRect(barX, barY, fillW, barH);

        ctx.shadowBlur = 10;
        ctx.strokeStyle = '#f5c542';
        ctx.lineWidth = 3;
        ctx.strokeRect(barX, barY, barW, barH);

        ctx.shadowBlur = 15;
        ctx.font = 'bold 20px monospace';
        ctx.fillStyle = '#fff';
        ctx.fillText(`${Math.floor(this.progress * 100)}%`, width / 2, barY + 45);

        ctx.font = '16px monospace';
        ctx.fillStyle = '#aaa';
        ctx.shadowBlur = 5;
        ctx.shadowBlur = 5;
        if (window.innerWidth <= 768) {
            ctx.fillText('Press ✨ S (Special) to skip', width/2, height - 50);
        } else {
            ctx.fillText('Press BACKSPACE to skip', width/2, height - 50);
        }
        ctx.shadowBlur = 0;
    }

    handleInput(e) {
        if (e.type !== 'keydown') return;

        // Desktop skip: Backspace always works
        if (e.code === 'Backspace') {
            this.game.sceneManager.switchTo('menu');
            return;
        }

        // SP mode skip: Special button (KeyO) only when screen width ≤ 768px
        if (e.code === 'KeyO' && window.innerWidth <= 768) {
            this.game.sceneManager.switchTo('menu');
        }
    }
}