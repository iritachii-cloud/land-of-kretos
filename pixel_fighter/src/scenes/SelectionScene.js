import { Scene } from './Scene.js';
import { heroes } from '../data/heroes.js';
import { GridSelector } from '../ui/GridSelector.js';

export class SelectionScene extends Scene {
    constructor(game) {
        super(game);
        this.state = 'selecting'; // 'selecting', 'confirmReady', 'mode', 'stage'
        this.p1Selected = null;
        this.p2Selected = null;
        this.p1Confirmed = false;
        this.p2Confirmed = false;
        this.mode = null;
        this.selectedStageId = 1;
        this.gridSelector = new GridSelector(heroes, 5, 40);
        this.activePlayer = 1;
        this.hoverHero = null;
    }

    enter() {
        this.reset();
    }

    reset() {
        this.state = 'selecting';
        this.p1Selected = null;
        this.p2Selected = null;
        this.p1Confirmed = false;
        this.p2Confirmed = false;
        this.mode = null;
        this.activePlayer = 1;
        this.gridSelector.reset();
        this.hoverHero = null;
    }

    render(ctx) {
        const { width, height } = this.game.canvas;
        this.drawBackground(ctx);

        if (this.state === 'selecting' || this.state === 'confirmReady') {
            this.renderSelection(ctx);
        } else if (this.state === 'mode') {
            this.renderModeSelection(ctx);
        } else if (this.state === 'stage') {
            this.renderStageSelection(ctx);
        }
    }

    drawBackground(ctx) {
        const grad = ctx.createLinearGradient(0, 0, this.game.canvas.width, this.game.canvas.height);
        grad.addColorStop(0, '#1a0a2e');
        grad.addColorStop(1, '#0a1a2e');
        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, this.game.canvas.width, this.game.canvas.height);
        ctx.strokeStyle = '#4a3a5a';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(200, 150, 80, 0, Math.PI * 2);
        ctx.stroke();
        ctx.beginPath();
        ctx.arc(1000, 500, 120, 0, Math.PI * 2);
        ctx.stroke();
    }

    renderSelection(ctx) {
        const { width, height } = this.game.canvas;
        const leftWidth = 250;
        const rightWidth = 250;
        const centerWidth = width - leftWidth - rightWidth;

        let leftDisplayHero = this.p1Selected;
        if (!leftDisplayHero && this.activePlayer === 1 && !this.p1Confirmed) {
            leftDisplayHero = this.hoverHero;
        }

        let rightDisplayHero = this.p2Selected;
        if (!rightDisplayHero && this.activePlayer === 2 && !this.p2Confirmed) {
            rightDisplayHero = this.hoverHero;
        }

        this.renderPlayerFrame(ctx, 0, 0, leftWidth, height, 1, leftDisplayHero, this.p1Confirmed);
        this.renderPlayerFrame(ctx, width - rightWidth, 0, rightWidth, height, 2, rightDisplayHero, this.p2Confirmed);
        this.renderHeroGrid(ctx, leftWidth, 0, centerWidth, height);

        // Status message
        ctx.font = '18px "Courier New", Courier, monospace';
        ctx.fillStyle = '#fff';
        ctx.textAlign = 'center';
        if (this.state === 'confirmReady') {
            ctx.fillText('Ready? Press ENTER to confirm, ESC to change', width/2, height - 30);
        } else if (this.p1Confirmed && this.p2Confirmed) {
            ctx.fillText('Press ENTER to continue', width/2, height - 30);
        } else {
            ctx.fillText(`Player ${this.activePlayer}: Select your hero`, width/2, height - 30);
        }
        ctx.fillText('ESC to undo / back', width/2, height - 10);
    }

    renderPlayerFrame(ctx, x, y, w, h, playerNum, hero, confirmed) {
        ctx.strokeStyle = playerNum === 1 ? '#4a90e2' : '#e24a4a';
        ctx.lineWidth = 4;
        ctx.strokeRect(x + 5, y + 5, w - 10, h - 10);

        ctx.font = 'bold 24px "Courier New", Courier, monospace';
        ctx.fillStyle = playerNum === 1 ? '#4a90e2' : '#e24a4a';
        ctx.textAlign = 'center';
        ctx.fillText(`P${playerNum}`, x + w/2, y + 50);

        if (hero) {
            ctx.fillStyle = '#333';
            ctx.fillRect(x + 20, y + 80, w - 40, 250);
            ctx.fillStyle = '#fff';
            ctx.font = '16px monospace';
            ctx.textAlign = 'center';
            ctx.fillText(hero.name, x + w/2, y + 350);
            ctx.fillText(hero.titles[0] || '', x + w/2, y + 375);

            const stats = hero.stats;
            ctx.font = '14px monospace';
            ctx.fillStyle = '#aaa';
            ctx.textAlign = 'left';
            ctx.fillText(`ATK: ${stats.physicalAtk}`, x + 20, y + 420);
            ctx.fillText(`DEF: ${stats.physDef}`, x + 20, y + 440);
            ctx.fillText(`SPD: ${stats.speed}`, x + 20, y + 460);

            if (confirmed) {
                ctx.fillStyle = '#0f0';
                ctx.font = 'bold 20px monospace';
                ctx.textAlign = 'center';
                ctx.fillText('✓ CONFIRMED', x + w/2, y + h - 40);
            }
        } else {
            ctx.font = '18px monospace';
            ctx.fillStyle = '#888';
            ctx.textAlign = 'center';
            ctx.fillText('Select Hero', x + w/2, y + h/2);
        }
    }

    renderHeroGrid(ctx, x, y, w, h) {
        ctx.fillStyle = '#1a1a2e';
        ctx.fillRect(x, y, w, h);
        ctx.strokeStyle = '#6a4a8a';
        ctx.lineWidth = 2;
        ctx.strokeRect(x + 5, y + 5, w - 10, h - 10);

        ctx.font = 'bold 20px "Courier New", Courier, monospace';
        ctx.fillStyle = '#ffcc00';
        ctx.textAlign = 'center';
        ctx.fillText('CHOOSE YOUR HERO', x + w/2, y + 30);

        this.gridSelector.render(ctx, x + 20, y + 60, w - 40, h - 120, this.activePlayer);
        this.hoverHero = this.gridSelector.getSelectedHero();
    }

    renderModeSelection(ctx) {
        const { width, height } = this.game.canvas;
        ctx.fillStyle = '#1a1a2e';
        ctx.fillRect(200, 200, width - 400, height - 400);
        ctx.strokeStyle = '#ffcc00';
        ctx.lineWidth = 3;
        ctx.strokeRect(200, 200, width - 400, height - 400);

        ctx.font = 'bold 28px "Courier New", Courier, monospace';
        ctx.fillStyle = '#fff';
        ctx.textAlign = 'center';
        ctx.fillText('SELECT MODE', width/2, 280);

        const modes = [
            { id: 'pvp', name: 'Player vs Player' },
            { id: 'pvai', name: 'Player vs AI' },
            { id: 'aivai', name: 'AI vs AI' }
        ];
        const startY = 350;
        modes.forEach((mode, i) => {
            const y = startY + i * 60;
            ctx.fillStyle = this.mode === mode.id ? '#ffaa00' : '#334466';
            ctx.fillRect(width/2 - 150, y, 300, 40);
            ctx.strokeStyle = '#fff';
            ctx.lineWidth = 2;
            ctx.strokeRect(width/2 - 150, y, 300, 40);
            ctx.font = '20px monospace';
            ctx.fillStyle = '#fff';
            ctx.fillText(mode.name, width/2, y + 28);
        });

        ctx.font = '16px monospace';
        ctx.fillStyle = '#aaa';
        ctx.fillText('↑↓ to select, ENTER to confirm, ESC to back', width/2, height - 80);
    }

    renderStageSelection(ctx) {
        const { width, height } = this.game.canvas;
        ctx.fillStyle = '#1a1a2e';
        ctx.fillRect(100, 100, width - 200, height - 200);
        ctx.strokeStyle = '#ffcc00';
        ctx.lineWidth = 3;
        ctx.strokeRect(100, 100, width - 200, height - 200);

        ctx.font = 'bold 28px "Courier New", Courier, monospace';
        ctx.fillStyle = '#fff';
        ctx.textAlign = 'center';
        ctx.fillText('SELECT STAGE', width/2, 180);

        const stages = this.game.stageData || [];
        const cols = 3;
        const stageWidth = 200;
        const stageHeight = 120;
        const startX = (width - (stageWidth * cols + 40 * (cols-1))) / 2;
        const startY = 250;

        stages.forEach((stage, i) => {
            const col = i % cols;
            const row = Math.floor(i / cols);
            const x = startX + col * (stageWidth + 40);
            const y = startY + row * (stageHeight + 40);

            ctx.fillStyle = this.selectedStageId === stage.id ? '#ffaa00' : '#334466';
            ctx.fillRect(x, y, stageWidth, stageHeight);
            ctx.strokeStyle = '#fff';
            ctx.lineWidth = 2;
            ctx.strokeRect(x, y, stageWidth, stageHeight);
            ctx.font = '16px monospace';
            ctx.fillStyle = '#fff';
            ctx.fillText(stage.name, x + stageWidth/2, y + stageHeight/2);
        });

        ctx.font = '16px monospace';
        ctx.fillStyle = '#aaa';
        ctx.fillText('←→↑↓ to select, ENTER to confirm, ESC to back', width/2, height - 80);
    }

    handleInput(event) {
        if (event.type !== 'keydown') return;
        const key = event.code;

        // Global ESC handling with state awareness
        if (key === 'Escape') {
            if (this.state === 'confirmReady') {
                this.state = 'selecting';
                return;
            }
            if (this.state === 'mode') {
                this.state = 'confirmReady';
                return;
            }
            if (this.state === 'stage') {
                this.state = 'mode';
                return;
            }
            if (this.state === 'selecting') {
                // If any player has confirmed, undo that instead of going to menu
                if (this.p2Confirmed) {
                    this.p2Confirmed = false;
                    this.p2Selected = null;
                    this.activePlayer = 2;
                    return;
                }
                if (this.p1Confirmed) {
                    this.p1Confirmed = false;
                    this.p1Selected = null;
                    this.activePlayer = 1;
                    return;
                }
                // Nothing to undo, go back to menu
                this.game.sceneManager.switchTo('menu');
                return;
            }
            return;
        }

        if (this.state === 'selecting') {
            this.handleSelectionInput(key);
        } else if (this.state === 'confirmReady') {
            if (key === 'Enter') {
                this.state = 'mode';
            } else if (key === 'Escape') {
                this.state = 'selecting';
            }
        } else if (this.state === 'mode') {
            this.handleModeInput(key);
        } else if (this.state === 'stage') {
            this.handleStageInput(key);
        }
    }

    handleSelectionInput(key) {
        // Page navigation with [ and ]
        if (key === 'BracketLeft') {
            this.gridSelector.prevPage();
            return;
        }
        if (key === 'BracketRight') {
            this.gridSelector.nextPage();
            return;
        }

        // Grid navigation
        if (key === 'ArrowUp') this.gridSelector.moveCursor(0, -1);
        if (key === 'ArrowDown') this.gridSelector.moveCursor(0, 1);
        if (key === 'ArrowLeft') this.gridSelector.moveCursor(-1, 0);
        if (key === 'ArrowRight') this.gridSelector.moveCursor(1, 0);

        if (key === 'Enter') {
            const selectedHero = this.gridSelector.getSelectedHero();
            if (!selectedHero) return;

            if (this.activePlayer === 1 && !this.p1Confirmed) {
                this.p1Selected = selectedHero;
                this.p1Confirmed = true;
                this.activePlayer = 2;
                this.gridSelector.resetCursor();
            } else if (this.activePlayer === 2 && !this.p2Confirmed) {
                this.p2Selected = selectedHero;
                this.p2Confirmed = true;
            }

            if (this.p1Confirmed && this.p2Confirmed) {
                this.state = 'confirmReady';
            }
        }

        // Manual undo keys
        if (key === 'KeyQ' && this.p1Confirmed && !this.p2Confirmed) {
            this.p1Confirmed = false;
            this.p1Selected = null;
            this.activePlayer = 1;
        }
        if (key === 'KeyE' && this.p2Confirmed) {
            this.p2Confirmed = false;
            this.p2Selected = null;
            this.activePlayer = 2;
        }
    }

    handleModeInput(key) {
        const modes = ['pvp', 'pvai', 'aivai'];
        let idx = modes.indexOf(this.mode);
        if (key === 'ArrowUp') idx = (idx - 1 + modes.length) % modes.length;
        if (key === 'ArrowDown') idx = (idx + 1) % modes.length;
        this.mode = modes[idx];

        if (key === 'Enter' && this.mode) {
            this.state = 'stage';
        }
    }

    handleStageInput(key) {
        const stages = this.game.stageData || [];
        if (stages.length === 0) {
            this.startBattle();
            return;
        }

        let idx = stages.findIndex(s => s.id === this.selectedStageId);
        if (key === 'ArrowLeft') idx = Math.max(0, idx - 1);
        if (key === 'ArrowRight') idx = Math.min(stages.length - 1, idx + 1);
        if (key === 'ArrowUp') idx = Math.max(0, idx - 3);
        if (key === 'ArrowDown') idx = Math.min(stages.length - 1, idx + 3);
        if (idx >= 0) this.selectedStageId = stages[idx].id;

        if (key === 'Enter') {
            this.startBattle();
        }
    }

    startBattle() {
        this.game.battleConfig = {
            p1: this.p1Selected,
            p2: this.p2Selected,
            mode: this.mode,
            stageId: this.selectedStageId,
            settings: this.game.settings || { rounds: 3, timer: 0, difficulty: 'Normal' }
        };
        this.game.sceneManager.switchTo('battle');
    }
}