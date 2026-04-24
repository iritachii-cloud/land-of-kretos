import { Scene } from './Scene.js';
import { ASSET_BASE } from '../main.js';
import { GridSelector } from '../ui/GridSelector.js';

export class SelectionScene extends Scene {
    constructor(game) {
        super(game);
        this.state = 'mode';
        this.p1Hero = null;
        this.p2Hero = null;
        this.p1Confirmed = false;
        this.p2Confirmed = false;
        this.activePlayer = 1;
        this.previewHero = null;
        this.mode = 'pvp';
        this.selectedStage = null;

        this.iconImages = new Map();
        this.portraitImages = new Map();
        this.spriteImages = new Map();

        this.gridSelector = null;
        this.modal = { visible: false, title: '', message: '', onConfirm: null, onCancel: null, selected: 0 };
        this.animProgress = {};
    }

    enter() {
        const resume = this.game.selectionSceneResume;
        if (resume) {
            this.game.selectionSceneResume = null;
            this.mode = resume.mode;
            this.selectedStage = resume.stage || this.game.stages[0];

            // ----- Coming from battle pause (Change Hero) -----
            if (resume.skipToHero) {
                // Completely reset hero selection so both players can pick again
                this.state = 'hero';
                this.p1Hero = null;
                this.p2Hero = null;
                this.p1Confirmed = false;
                this.p2Confirmed = false;
                this.activePlayer = 1;
            }
            // ----- Coming from battle pause (Change Stage) -----
            else if (resume.skipToStage) {
                this.state = 'stage';
                // Keep heroes as they were (unchanged)
                this.p1Hero = this.game.battleConfig?.p1 || null;
                this.p2Hero = this.game.battleConfig?.p2 || null;
                this.p1Confirmed = !!this.p1Hero;
                this.p2Confirmed = !!this.p2Hero;
                this.activePlayer = this.p1Confirmed ? 2 : 1;
            } else {
                this.state = 'hero';
                this.p1Hero = null;
                this.p2Hero = null;
                this.p1Confirmed = false;
                this.p2Confirmed = false;
                this.activePlayer = 1;
            }

            this.gridSelector = new GridSelector(this.game.heroes, 6, 36, (hero) => this.iconImages.get(hero));
            this.gridSelector.reset();
            this.modal.visible = false;
            this.animProgress = {};
            return;
        }

        // Normal entry from menu
        this.state = 'mode';
        this.p1Hero = null;
        this.p2Hero = null;
        this.p1Confirmed = false;
        this.p2Confirmed = false;
        this.activePlayer = 1;
        this.previewHero = null;
        this.mode = 'pvp';
        this.selectedStage = this.game.stages[0];

        this.game.heroes.forEach(hero => {
            if (hero.images?.icon) {
                const img = new Image();
                img.src = ASSET_BASE + hero.images.icon.replace(/^\//, '');
                this.iconImages.set(hero, img);
            }
            if (hero.images?.selection) {
                const img = new Image();
                img.src = ASSET_BASE + hero.images.selection.replace(/^\//, '');
                this.portraitImages.set(hero, img);
            }
            if (hero.images?.spriteRight) {
                const img = new Image();
                img.src = ASSET_BASE + hero.images.spriteRight.replace(/^\//, '');
                this.spriteImages.set(hero, img);
            }
        });

        this.gridSelector = new GridSelector(this.game.heroes, 6, 36, (hero) => this.iconImages.get(hero));
        this.modal.visible = false;
        this.animProgress = {};
    }

    update(dt) {
        const currentPreview = this.activePlayer === 1
            ? (this.p1Confirmed ? null : this.previewHero)
            : (this.p2Confirmed ? null : this.previewHero);
        if (currentPreview) {
            const key = currentPreview.id;
            if (this.animProgress[key] === undefined) this.animProgress[key] = 0;
            this.animProgress[key] = Math.min(1, this.animProgress[key] + dt * 2.5);
        }
    }

    render(ctx) {
        const { width, height } = this.game.canvas;
        const grad = ctx.createLinearGradient(0, 0, width, height);
        grad.addColorStop(0, '#0a0c1c');
        grad.addColorStop(1, '#1a1e3a');
        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, width, height);
        ctx.strokeStyle = '#e6c27a';
        ctx.lineWidth = 4;
        ctx.strokeRect(15, 15, width - 30, height - 30);

        if (this.state === 'mode') this.renderModeSelection(ctx);
        else if (this.state === 'stage') this.renderStageSelection(ctx);
        else if (this.state === 'hero') this.renderHeroSelection(ctx);

        if (this.modal.visible) this.renderModal(ctx);
    }

    renderModeSelection(ctx) {
        const { width, height } = this.game.canvas;
        const modes = [
            { id: 'pvp', name: '👥 Player vs Player', desc: 'Local two-player battle' },
            { id: 'pvai', name: '🤖 Player vs AI', desc: 'Fight against the computer' },
            { id: 'aivai', name: '🧠 AI vs AI', desc: 'Watch AI battle' }
        ];
        const boxW = 500, boxH = 350;
        const boxX = (width - boxW) / 2, boxY = (height - boxH) / 2;

        ctx.fillStyle = 'rgba(20,20,40,0.9)';
        ctx.fillRect(boxX, boxY, boxW, boxH);
        ctx.strokeStyle = '#f5a623';
        ctx.lineWidth = 3;
        ctx.strokeRect(boxX, boxY, boxW, boxH);

        ctx.font = 'bold 32px "Courier New"';
        ctx.fillStyle = '#ffd966';
        ctx.textAlign = 'center';
        ctx.fillText('SELECT GAME MODE', width / 2, boxY + 60);

        modes.forEach((m, i) => {
            const y = boxY + 120 + i * 70;
            const isSelected = this.mode === m.id;
            ctx.fillStyle = isSelected ? '#e67e22' : '#2a2a4a';
            ctx.fillRect(boxX + 50, y - 10, boxW - 100, 50);
            ctx.strokeStyle = isSelected ? '#ffcc44' : '#aaa';
            ctx.lineWidth = 2;
            ctx.strokeRect(boxX + 50, y - 10, boxW - 100, 50);
            ctx.font = '22px monospace';
            ctx.fillStyle = '#fff';
            ctx.fillText(m.name, width / 2, y + 10);
            ctx.font = '14px monospace';
            ctx.fillStyle = '#ccc';
            ctx.fillText(m.desc, width / 2, y + 30);
        });

        ctx.font = '16px monospace';
        ctx.fillStyle = '#aaa';
        ctx.textAlign = 'center';
        ctx.fillText('↑↓/WS · U/Enter confirm · I/Esc back', width / 2, height - 50);
    }

    renderStageSelection(ctx) {
        const { width, height } = this.game.canvas;
        const stages = this.game.stages;
        const cols = 3;
        const boxW = 800, boxH = 400;
        const boxX = (width - boxW) / 2, boxY = (height - boxH) / 2;

        ctx.fillStyle = 'rgba(0,0,0,0.8)';
        ctx.fillRect(boxX, boxY, boxW, boxH);
        ctx.strokeStyle = '#f5a623';
        ctx.lineWidth = 3;
        ctx.strokeRect(boxX, boxY, boxW, boxH);

        ctx.font = 'bold 28px "Courier New"';
        ctx.fillStyle = '#ffd966';
        ctx.textAlign = 'center';
        ctx.fillText('CHOOSE YOUR ARENA', width / 2, boxY + 45);

        const startX = boxX + 40;
        const startY = boxY + 90;
        const cardW = 220, cardH = 90;
        stages.forEach((stage, i) => {
            const col = i % cols;
            const row = Math.floor(i / cols);
            const x = startX + col * (cardW + 20);
            const y = startY + row * (cardH + 20);
            const isSelected = this.selectedStage === stage;

            ctx.fillStyle = isSelected ? '#e67e22' : '#2a2a4a';
            ctx.fillRect(x, y, cardW, cardH);
            ctx.strokeStyle = isSelected ? '#ffcc44' : '#aaa';
            ctx.lineWidth = 2;
            ctx.strokeRect(x, y, cardW, cardH);

            if (stage.background) {
                const img = new Image();
                img.src = stage.background;
                if (img.complete) ctx.drawImage(img, x + 5, y + 5, cardW - 10, 50);
            }
            ctx.font = '18px monospace';
            ctx.fillStyle = '#fff';
            ctx.textAlign = 'center';
            ctx.fillText(stage.name, x + cardW / 2, y + 75);
        });

        ctx.font = '16px monospace';
        ctx.fillStyle = '#aaa';
        ctx.textAlign = 'center';
        ctx.fillText('←→↑↓/WASD · U/Enter confirm · I/Esc back', width / 2, height - 50);
    }

    renderHeroSelection(ctx) {
        const { width, height } = this.game.canvas;
        const panelWidth = 300;
        const centerWidth = width - 2 * panelWidth;

        const hoveredHero = this.gridSelector.getSelectedHero();
        if (hoveredHero !== this.previewHero) {
            this.previewHero = hoveredHero;
            if (hoveredHero && this.animProgress[hoveredHero.id] === undefined) {
                this.animProgress[hoveredHero.id] = 0;
            }
        }

        const leftHero = this.p1Confirmed ? this.p1Hero : (this.activePlayer === 1 ? this.previewHero : this.p1Hero);
        const rightHero = this.p2Confirmed ? this.p2Hero : (this.activePlayer === 2 ? this.previewHero : this.p2Hero);

        this.drawPlayerPanel(ctx, 0, 0, panelWidth, height, 1, leftHero, this.p1Confirmed, this.activePlayer === 1);
        this.drawPlayerPanel(ctx, width - panelWidth, 0, panelWidth, height, 2, rightHero, this.p2Confirmed, this.activePlayer === 2);

        this.gridSelector.render(ctx, panelWidth, 60, centerWidth, height - 120, this.activePlayer);

        ctx.font = 'bold 18px "Courier New"';
        ctx.fillStyle = '#ffdd99';
        ctx.textAlign = 'center';
        ctx.fillText(`PLAYER ${this.activePlayer} — BROWSE [←→↑↓/WASD] · CONFIRM [U/Enter]`, width / 2, height - 95);
        ctx.font = '14px monospace';
        ctx.fillStyle = '#aaa';
        ctx.fillText('PAGE [  ] · UNDO [I/Esc]', width / 2, height - 70);
    }

    drawPlayerPanel(ctx, x, y, w, h, playerNum, hero, confirmed, isActive) {
        ctx.fillStyle = isActive ? 'rgba(30,30,60,0.8)' : 'rgba(0,0,0,0.6)';
        ctx.fillRect(x + 5, y + 5, w - 10, h - 10);
        ctx.strokeStyle = isActive ? '#ffcc66' : (playerNum === 1 ? '#4a90e2' : '#e24a4a');
        ctx.lineWidth = isActive ? 5 : 3;
        ctx.shadowBlur = isActive ? 6 : 0;
        ctx.shadowColor = '#ffcc66';
        ctx.strokeRect(x + 5, y + 5, w - 10, h - 10);
        ctx.shadowBlur = 0;

        ctx.font = 'bold 22px "Courier New"';
        ctx.fillStyle = isActive ? '#ffcc66' : (playerNum === 1 ? '#4a90e2' : '#e24a4a');
        ctx.textAlign = 'center';
        ctx.fillText(`P${playerNum}`, x + w / 2, y + 30);

        if (hero) {
            const imgAreaHeight = (h - 80) * 0.55;
            const imgY = y + 50;
            const imgW = w - 30;
            const imgH = imgAreaHeight - 15;
            const imgX = x + 15;

            const displayImg = confirmed ? this.spriteImages.get(hero) : this.portraitImages.get(hero);
            if (displayImg && displayImg.complete && displayImg.naturalWidth > 0) {
                const scale = Math.min(imgW / displayImg.width, imgH / displayImg.height);
                const drawW = displayImg.width * scale;
                const drawH = displayImg.height * scale;
                const drawX = imgX + (imgW - drawW) / 2;
                const drawY = imgY + (imgH - drawH) / 2;

                if (playerNum === 2) {
                    ctx.save();
                    ctx.translate(drawX + drawW, drawY);
                    ctx.scale(-1, 1);
                    ctx.drawImage(displayImg, 0, 0, drawW, drawH);
                    ctx.restore();
                } else {
                    ctx.drawImage(displayImg, drawX, drawY, drawW, drawH);
                }
            } else {
                ctx.fillStyle = '#333';
                ctx.fillRect(imgX, imgY, imgW, imgH);
                ctx.fillStyle = '#fff';
                ctx.font = '14px monospace';
                ctx.textAlign = 'center';
                ctx.fillText(hero.name, x + w / 2, imgY + imgH / 2);
            }

            const detailsY = imgY + imgAreaHeight + 5;

            ctx.font = 'bold 16px monospace';
            ctx.fillStyle = '#ffd966';
            ctx.textAlign = 'center';
            ctx.fillText(hero.name, x + w / 2, detailsY - 5);

            const stats = hero.stats;
            const statEntries = [
                { label: 'HP', value: stats.health, max: 2500, color: '#e74c3c' },
                { label: 'ATK', value: stats.physicalAtk, max: 10, color: '#f39c12' },
                { label: 'DEF', value: stats.physDef, max: 10, color: '#3498db' },
                { label: 'SPD', value: stats.speed, max: 10, color: '#2ecc71' }
            ];

            const shouldAnimate = isActive && !confirmed;
            const animProgress = shouldAnimate ? (this.animProgress[hero.id] || 0) : 1;

            let statY = detailsY + 10;
            const barWidth = w - 60;
            statEntries.forEach(stat => {
                const percent = Math.min(1, stat.value / stat.max);
                const displayPercent = shouldAnimate ? percent * animProgress : percent;

                ctx.fillStyle = '#222';
                ctx.fillRect(x + 15, statY, barWidth, 7);
                ctx.fillStyle = stat.color;
                ctx.fillRect(x + 15, statY, barWidth * displayPercent, 7);
                ctx.fillStyle = '#ddd';
                ctx.font = '9px monospace';
                ctx.textAlign = 'left';
                ctx.fillText(`${stat.label}: ${stat.value}`, x + 15 + barWidth + 3, statY + 6);
                statY += 14;
            });

            const moves = hero.moves;
            if (moves) {
                const moveY = statY + 5;
                ctx.font = 'bold 9px monospace';
                ctx.fillStyle = '#ffaa66';
                ctx.textAlign = 'left';
                ctx.fillText('MOVES:', x + 15, moveY);
                ctx.font = '8px monospace';
                ctx.fillStyle = '#ccc';
                ctx.fillText(`P: ${moves.basic?.punch || 'Punch'}`, x + 15, moveY + 12);
                ctx.fillText(`K: ${moves.basic?.kick || 'Kick'}`, x + 15, moveY + 22);
                ctx.fillText(`S: ${moves.special?.name || 'Special'}`, x + w / 2 + 5, moveY + 12);
                ctx.fillText(`U: ${moves.ultimate?.name || 'Ultimate'}`, x + w / 2 + 5, moveY + 22);
            }

            if (confirmed) {
                ctx.fillStyle = '#0f0';
                ctx.font = 'bold 18px monospace';
                ctx.textAlign = 'center';
                ctx.fillText('✓ READY', x + w / 2, h - 15);
            }
        } else {
            ctx.fillStyle = '#aaa';
            ctx.font = '24px monospace';
            ctx.textAlign = 'center';
            ctx.fillText('?', x + w / 2, y + h / 2);
        }

        if (!confirmed && isActive && !hero) {
            ctx.font = '12px monospace';
            ctx.fillStyle = '#ffaa33';
            ctx.textAlign = 'center';
            ctx.fillText('← SELECT HERO', x + w / 2, h - 25);
        }
    }

    handleInput(e) {
        if (e.type !== 'keydown') return;
        if (this.modal.visible) {
            const key = e.code;
            if (key === 'ArrowLeft' || key === 'KeyA') { this.modal.selected = 0; this.game.soundManager?.play('select'); }
            else if (key === 'ArrowRight' || key === 'KeyD') { this.modal.selected = 1; this.game.soundManager?.play('select'); }
            else if (key === 'Enter' || key === 'KeyU') {
                this.game.soundManager?.play('confirm');
                if (this.modal.selected === 0 && this.modal.onConfirm) this.modal.onConfirm();
                if (this.modal.selected === 1 && this.modal.onCancel) this.modal.onCancel();
                this.modal.visible = false;
            } else if (key === 'Escape' || key === 'KeyI') {
                this.game.soundManager?.play('back');
                if (this.modal.onCancel) this.modal.onCancel();
                this.modal.visible = false;
            }
            return;
        }

        if (this.state === 'mode') this.handleModeInput(e);
        else if (this.state === 'stage') this.handleStageInput(e);
        else if (this.state === 'hero') this.handleHeroInput(e);
    }

    handleModeInput(e) {
        const key = e.code;
        const modes = ['pvp', 'pvai', 'aivai'];
        let idx = modes.indexOf(this.mode);
        if (key === 'ArrowUp' || key === 'KeyW') { idx = (idx - 1 + modes.length) % modes.length; this.game.soundManager?.play('select'); }
        if (key === 'ArrowDown' || key === 'KeyS') { idx = (idx + 1) % modes.length; this.game.soundManager?.play('select'); }
        this.mode = modes[idx];
        if (key === 'Enter' || key === 'KeyU') { this.game.soundManager?.play('confirm'); this.state = 'stage'; }
        if (key === 'Escape' || key === 'KeyI') { this.game.soundManager?.play('back'); this.game.sceneManager.switchTo('menu'); }
    }

    handleStageInput(e) {
        const key = e.code;
        const stages = this.game.stages;
        let idx = stages.findIndex(s => s === this.selectedStage);
        const cols = 3;
        if (key === 'ArrowLeft' || key === 'KeyA') { idx = Math.max(0, idx - 1); this.game.soundManager?.play('select'); }
        if (key === 'ArrowRight' || key === 'KeyD') { idx = Math.min(stages.length - 1, idx + 1); this.game.soundManager?.play('select'); }
        if (key === 'ArrowUp' || key === 'KeyW') { idx = Math.max(0, idx - cols); this.game.soundManager?.play('select'); }
        if (key === 'ArrowDown' || key === 'KeyS') { idx = Math.min(stages.length - 1, idx + cols); this.game.soundManager?.play('select'); }
        this.selectedStage = stages[idx];
        if (key === 'Enter' || key === 'KeyU') {
            this.game.soundManager?.play('confirm');
            this.state = 'hero';
            this.p1Hero = null; this.p2Hero = null;
            this.p1Confirmed = false; this.p2Confirmed = false;
            this.activePlayer = 1;
            this.gridSelector.reset();
            this.animProgress = {};
        }
        if (key === 'Escape' || key === 'KeyI') { this.game.soundManager?.play('back'); this.state = 'mode'; }
    }

    handleHeroInput(e) {
        const key = e.code;
        const isNav = key === 'BracketLeft' || key === 'BracketRight' || key.startsWith('Arrow') ||
            key === 'KeyA' || key === 'KeyD' || key === 'KeyW' || key === 'KeyS';
        if (isNav) this.game.soundManager?.play('select');

        if (key === 'BracketLeft') this.gridSelector.prevPage();
        if (key === 'BracketRight') this.gridSelector.nextPage();
        if (key === 'ArrowUp' || key === 'KeyW') this.gridSelector.moveCursor(0, -1);
        if (key === 'ArrowDown' || key === 'KeyS') this.gridSelector.moveCursor(0, 1);
        if (key === 'ArrowLeft' || key === 'KeyA') this.gridSelector.moveCursor(-1, 0);
        if (key === 'ArrowRight' || key === 'KeyD') this.gridSelector.moveCursor(1, 0);

        if (key === 'Enter' || key === 'KeyU') {
            const hero = this.gridSelector.getSelectedHero();
            if (!hero) return;
            this.game.soundManager?.play('confirm');

            if (this.activePlayer === 1 && !this.p1Confirmed) {
                this.p1Hero = hero;
                this.p1Confirmed = true;
                this.activePlayer = 2;
                this.gridSelector.resetCursor();
                this.previewHero = null;
                this.animProgress = {};
            }
            else if (this.activePlayer === 2 && !this.p2Confirmed) {
                this.p2Hero = hero;
                this.p2Confirmed = true;
                this.showModal('Ready to Brawl?', 'Both heroes are ready. Begin the battle?',
                    () => {
                        this.game.battleConfig = {
                            p1: this.p1Hero,
                            p2: this.p2Hero,
                            mode: this.mode,
                            stage: this.selectedStage,
                            settings: this.game.settings
                        };
                        this.game.sceneManager.switchTo('battle');
                    },
                    () => {
                        this.p2Confirmed = false;
                        this.p2Hero = null;
                        this.activePlayer = 2;
                        this.gridSelector.resetCursor();
                        this.previewHero = null;
                        this.animProgress = {};
                    }
                );
            }
        }

        if (key === 'Escape' || key === 'KeyI') {
            this.game.soundManager?.play('back');
            if (this.p2Confirmed) {
                this.p2Confirmed = false;
                this.p2Hero = null;
                this.activePlayer = 2;
            } else if (this.p1Confirmed) {
                this.p1Confirmed = false;
                this.p1Hero = null;
                this.activePlayer = 1;
            } else {
                this.state = 'stage';
            }
            this.gridSelector.resetCursor();
            this.previewHero = null;
            this.animProgress = {};
        }
    }

    showModal(title, message, onConfirm, onCancel) {
        this.modal = { visible: true, title, message, onConfirm, onCancel, selected: 0 };
    }

    renderModal(ctx) {
        const { width, height } = this.game.canvas;
        ctx.fillStyle = 'rgba(0,0,0,0.85)';
        ctx.fillRect(0, 0, width, height);

        const boxW = 500, boxH = 260;
        const boxX = (width - boxW) / 2;
        const boxY = (height - boxH) / 2;
        ctx.fillStyle = '#1e1e30';
        ctx.fillRect(boxX, boxY, boxW, boxH);
        ctx.strokeStyle = '#f5a623';
        ctx.lineWidth = 3;
        ctx.strokeRect(boxX, boxY, boxW, boxH);

        ctx.font = 'bold 28px monospace';
        ctx.fillStyle = '#ffcc66';
        ctx.textAlign = 'center';
        ctx.fillText(this.modal.title, width / 2, boxY + 50);
        ctx.font = '20px monospace';
        ctx.fillStyle = '#fff';
        ctx.fillText(this.modal.message, width / 2, boxY + 110);

        const btnW = 120, btnH = 45;
        const yesX = width / 2 - btnW - 20;
        const noX = width / 2 + 20;
        const btnY = boxY + 180;

        ctx.fillStyle = this.modal.selected === 0 ? '#4a6e2a' : '#2a3a1a';
        ctx.fillRect(yesX, btnY, btnW, btnH);
        ctx.strokeStyle = this.modal.selected === 0 ? '#ffcc44' : '#aaa';
        ctx.strokeRect(yesX, btnY, btnW, btnH);
        ctx.fillStyle = this.modal.selected === 1 ? '#8a2e2e' : '#5a1e1e';
        ctx.fillRect(noX, btnY, btnW, btnH);
        ctx.strokeStyle = this.modal.selected === 1 ? '#ffcc44' : '#aaa';
        ctx.strokeRect(noX, btnY, btnW, btnH);

        ctx.fillStyle = '#fff';
        ctx.font = '24px monospace';
        ctx.fillText('READY', yesX + btnW / 2, btnY + 30);
        ctx.fillText('BACK', noX + btnW / 2, btnY + 30);
    }
}