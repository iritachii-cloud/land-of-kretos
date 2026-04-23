import { Scene } from './Scene.js';
import { Fighter } from '../entities/Fighter.js';
import { CONFIG } from '../config.js';

export class BattleScene extends Scene {
    constructor(game) {
        super(game);
        this.p1 = null;
        this.p2 = null;
        this.stage = null;
        this.state = 'fighting';
        this.winner = null;
        this.endTimer = 0;
        this.roundTimer = 99;
        this.screenShake = { intensity: 0, duration: 0 };
        this.roundNumber = 1;
        this.p1RoundsWon = 0;
        this.p2RoundsWon = 0;
        this.totalRounds = 3;
        this.paused = false;
        this.pauseSelection = 0;
        this.pauseOptions = [
            { label: 'Resume', action: 'resume' },
            { label: 'Change Hero', action: 'changeHero' },
            { label: 'Change Stage', action: 'changeStage' },
            { label: 'Toggle P1 AI', action: 'toggleP1AI' },
            { label: 'Toggle P2 AI', action: 'toggleP2AI' },
            { label: 'Settings', action: 'settings' },
            { label: 'Main Menu', action: 'menu' }
        ];
        this.showStageSlider = false;
        this.returnToPause = false;
        this.p1PrevJump = false;
        this.p2PrevJump = false;

        // UI assets
        this.winnerIconImg = new Image();
        this.winnerIconImg.src = '../assets/images/game/winnericon.png';
    }

    enter() {
        const cfg = this.game.battleConfig;
        if (!cfg) { this.game.sceneManager.switchTo('menu'); return; }

        const settings = this.game.settings;
        this.totalRounds = settings.rounds || 3;
        this.roundTimer = settings.timer || 0;
        const difficulty = settings.difficulty || 'Normal';

        this.p1 = new Fighter(cfg.p1, 'left', cfg.mode === 'aivai');
        this.p2 = new Fighter(cfg.p2, 'right', (cfg.mode === 'pvai' || cfg.mode === 'aivai'));
        if (this.p1.isAI) this.p1.setAIDifficulty(difficulty);
        if (this.p2.isAI) this.p2.setAIDifficulty(difficulty);

        this.stage = cfg.stage;
        this.state = 'fighting';
        this.winner = null;
        this.endTimer = 0;
        this.roundNumber = 1;
        this.p1RoundsWon = 0;
        this.p2RoundsWon = 0;
        this.paused = false;
        this.showStageSlider = false;
        this.returnToPause = false;
        this.p1PrevJump = false;
        this.p2PrevJump = false;

        this.game.soundManager?.play('roundStart');
        this.resetRound();
    }

    resetRound() {
        this.p1.health = this.p1.maxHealth;
        this.p2.health = this.p2.maxHealth;
        this.p1.displayHealth = this.p1.maxHealth;
        this.p2.displayHealth = this.p2.maxHealth;
        this.p1.mana = this.p1.maxMana;
        this.p2.mana = this.p2.maxMana;
        this.p1.x = 150;
        this.p2.x = CONFIG.CANVAS_WIDTH - 150 - this.p2.width;
        this.p1.y = CONFIG.GROUND_Y - this.p1.height;
        this.p2.y = CONFIG.GROUND_Y - this.p2.height;
        this.p1.facing = 1;
        this.p2.facing = -1;
        this.p1.state = 'idle';
        this.p2.state = 'idle';
        this.p1.invulTimer = 60;
        this.p2.invulTimer = 60;
        const settingsTimer = this.game.settings.timer;
        this.roundTimer = (settingsTimer === 0 || settingsTimer === undefined) ? 999 : settingsTimer;
    }

    update(dt) {
        if (this.paused || this.showStageSlider) return;
        if (this.screenShake.duration > 0) this.screenShake.duration -= dt;

        if (this.state === 'fighting') {
            if (this.game.settings.timer > 0) {
                if (this.roundTimer > 0) {
                    this.roundTimer = Math.max(0, this.roundTimer - dt);
                    if (this.roundTimer <= 0) this.endRound('timeout');
                }
            }

            const input = this.game.inputHandler;
            const p1State = input.getPlayerState('p1');
            const p2State = input.getPlayerState('p2');

            if (!this.p1.isAI) {
                if (p1State.left) this.p1.moveLeft();
                else if (p1State.right) this.p1.moveRight();
                else this.p1.stopMove();
                if (p1State.jump && !this.p1PrevJump) this.p1.jump();
                this.p1PrevJump = p1State.jump;
                if (p1State.punch) this.p1.punch();
                if (p1State.kick) this.p1.kick();
                if (p1State.special) this.p1.performSpecial();
                this.p1.setParry(p1State.parry);   // continuous parry
                if (p1State.throw) this.p1.throwAttempt();
            }

            if (!this.p2.isAI) {
                if (p2State.left) this.p2.moveLeft();
                else if (p2State.right) this.p2.moveRight();
                else this.p2.stopMove();
                if (p2State.jump && !this.p2PrevJump) this.p2.jump();
                this.p2PrevJump = p2State.jump;
                if (p2State.punch) this.p2.punch();
                if (p2State.kick) this.p2.kick();
                if (p2State.special) this.p2.performSpecial();
                this.p2.setParry(p2State.parry);   // continuous parry
                if (p2State.throw) this.p2.throwAttempt();
            }

            this.p1.update(this.p2, dt);
            this.p2.update(this.p1, dt);

            if (this.p1.health <= 0) this.endRound('p2');
            else if (this.p2.health <= 0) this.endRound('p1');

        } else if (this.state === 'roundOver') {
            this.endTimer -= dt;
            if (this.endTimer <= 0) {
                if (this.p1RoundsWon >= Math.ceil(this.totalRounds / 2)) {
                    this.state = 'gameover';
                    this.winner = 'p1';
                    this.endTimer = 3;
                    this.game.soundManager?.play('gameWin');
                } else if (this.p2RoundsWon >= Math.ceil(this.totalRounds / 2)) {
                    this.state = 'gameover';
                    this.winner = 'p2';
                    this.endTimer = 3;
                    this.game.soundManager?.play('gameWin');
                } else {
                    this.roundNumber++;
                    this.resetRound();
                    this.state = 'fighting';
                    this.game.soundManager?.play('roundStart');
                }
            }
        } else if (this.state === 'gameover') {
            this.endTimer -= dt;
            if (this.endTimer <= 0) {
                this.game.battleConfig.winner = this.winner;
                this.game.sceneManager.switchTo('win');
            }
        }
    }

    endRound(winner) {
        if (winner === 'p1') this.p1RoundsWon++;
        else if (winner === 'p2') this.p2RoundsWon++;
        else if (winner === 'timeout') {
            if (this.p1.health > this.p2.health) this.p1RoundsWon++;
            else if (this.p2.health > this.p1.health) this.p2RoundsWon++;
            else this.p1RoundsWon++;
        }
        this.state = 'roundOver';
        this.endTimer = 2.0;
        this.game.soundManager?.play('roundWin');
    }

    shake(intensity, duration) { this.screenShake = { intensity, duration }; }

    render(ctx) {
        if (this.screenShake.duration > 0) {
            const dx = (Math.random() - 0.5) * this.screenShake.intensity;
            const dy = (Math.random() - 0.5) * this.screenShake.intensity;
            ctx.translate(dx, dy);
        }

        if (this.stage && this.stage.background) {
            const bgImg = new Image();
            bgImg.src = this.stage.background;
            if (bgImg.complete) ctx.drawImage(bgImg, 0, 0, CONFIG.CANVAS_WIDTH, CONFIG.CANVAS_HEIGHT);
            else { ctx.fillStyle = '#1a1e30'; ctx.fillRect(0, 0, CONFIG.CANVAS_WIDTH, CONFIG.CANVAS_HEIGHT); }
        } else {
            ctx.fillStyle = '#2a1a2a';
            ctx.fillRect(0, 0, CONFIG.CANVAS_WIDTH, CONFIG.CANVAS_HEIGHT);
        }

        ctx.fillStyle = '#6a4a2a';
        ctx.fillRect(0, CONFIG.GROUND_Y, CONFIG.CANVAS_WIDTH, 8);
        ctx.fillStyle = '#8a6a4a';
        ctx.fillRect(0, CONFIG.GROUND_Y + 2, CONFIG.CANVAS_WIDTH, 2);

        if (this.p1) this.p1.render(ctx);
        if (this.p2) this.p2.render(ctx);

        // ----- NEW UI: Player 1 (Left) -----
        this.drawPlayerUI(ctx, this.p1, 30, 20, 400, 70, this.p1RoundsWon, 'left');

        // ----- NEW UI: Player 2 (Right) -----
        this.drawPlayerUI(ctx, this.p2, CONFIG.CANVAS_WIDTH - 430, 20, 400, 70, this.p2RoundsWon, 'right');

        // Round text and timer
        ctx.font = 'bold 20px monospace';
        ctx.fillStyle = '#ffdd66';
        ctx.shadowColor = '#000';
        ctx.shadowBlur = 6;
        ctx.textAlign = 'center';
        ctx.fillText(`Round ${this.roundNumber} / ${this.totalRounds}`, CONFIG.CANVAS_WIDTH / 2, 70);

        ctx.font = 'bold 36px monospace';
        ctx.fillStyle = '#ffffff';
        if (this.game.settings.timer === 0) {
            ctx.fillText('∞', CONFIG.CANVAS_WIDTH / 2, 120);
        } else {
            ctx.fillText(Math.ceil(this.roundTimer), CONFIG.CANVAS_WIDTH / 2, 120);
        }
        ctx.shadowBlur = 0;

        // Round over / game over text
        if (this.state === 'roundOver') {
            ctx.font = 'bold 40px "Courier New"';
            ctx.fillStyle = '#ffaa33';
            ctx.shadowColor = '#aa4400';
            ctx.shadowBlur = 15;
            ctx.textAlign = 'center';
            const roundWinner = (this.p1RoundsWon > this.p2RoundsWon) ? this.p1.hero.name : this.p2.hero.name;
            ctx.fillText(`${roundWinner} wins the round!`, CONFIG.CANVAS_WIDTH / 2, 350);
        } else if (this.state === 'gameover') {
            ctx.font = 'bold 56px "Courier New"';
            ctx.fillStyle = '#ffaa33';
            ctx.shadowColor = '#aa4400';
            ctx.shadowBlur = 20;
            ctx.textAlign = 'center';
            const winnerName = this.winner === 'p1' ? this.p1.hero.name : this.p2.hero.name;
            ctx.fillText(`${winnerName} WINS!`, CONFIG.CANVAS_WIDTH / 2, 350);
        }
        ctx.shadowBlur = 0;

        // Pause menu (unchanged)
        if (this.paused) {
            ctx.fillStyle = 'rgba(0,0,0,0.7)';
            ctx.fillRect(0, 0, CONFIG.CANVAS_WIDTH, CONFIG.CANVAS_HEIGHT);
            ctx.font = 'bold 48px "Courier New"';
            ctx.fillStyle = '#ffd966';
            ctx.textAlign = 'center';
            ctx.fillText('PAUSED', CONFIG.CANVAS_WIDTH / 2, 150);
            const menuX = CONFIG.CANVAS_WIDTH / 2 - 200;
            const menuY = 220;
            this.pauseOptions.forEach((opt, i) => {
                const y = menuY + i * 50;
                const isSelected = i === this.pauseSelection;
                ctx.fillStyle = isSelected ? '#e67e22' : '#2a2a4a';
                ctx.fillRect(menuX, y - 10, 400, 40);
                ctx.strokeStyle = isSelected ? '#ffcc44' : '#aaa';
                ctx.lineWidth = 2;
                ctx.strokeRect(menuX, y - 10, 400, 40);
                ctx.font = '24px monospace';
                ctx.fillStyle = '#fff';
                ctx.textAlign = 'center';
                let label = opt.label;
                if (opt.action === 'toggleP1AI') label = `P1 AI: ${this.p1?.isAI ? 'ON' : 'OFF'}`;
                if (opt.action === 'toggleP2AI') label = `P2 AI: ${this.p2?.isAI ? 'ON' : 'OFF'}`;
                ctx.fillText(label, CONFIG.CANVAS_WIDTH / 2, y + 15);
            });
            ctx.font = '16px monospace';
            ctx.fillStyle = '#aaa';
            ctx.fillText('↑↓ to select · ENTER to confirm · ESC to resume', CONFIG.CANVAS_WIDTH / 2, CONFIG.CANVAS_HEIGHT - 50);
        }

        // Stage slider (unchanged)
        if (this.showStageSlider) {
            ctx.fillStyle = 'rgba(0,0,0,0.8)';
            ctx.fillRect(0, 0, CONFIG.CANVAS_WIDTH, CONFIG.CANVAS_HEIGHT);
            const stages = this.game.stages;
            const boxW = 600, boxH = 200;
            const boxX = (CONFIG.CANVAS_WIDTH - boxW) / 2, boxY = (CONFIG.CANVAS_HEIGHT - boxH) / 2;
            ctx.fillStyle = '#1e1e30';
            ctx.fillRect(boxX, boxY, boxW, boxH);
            ctx.strokeStyle = '#f5a623';
            ctx.lineWidth = 3;
            ctx.strokeRect(boxX, boxY, boxW, boxH);
            ctx.font = 'bold 28px monospace';
            ctx.fillStyle = '#ffd966';
            ctx.textAlign = 'center';
            ctx.fillText('SELECT STAGE', CONFIG.CANVAS_WIDTH / 2, boxY + 40);
            const currentStage = this.stage;
            const currentIdx = stages.findIndex(s => s.id === currentStage.id);
            const displayStages = [stages[(currentIdx - 1 + stages.length) % stages.length], currentStage, stages[(currentIdx + 1) % stages.length]];
            displayStages.forEach((s, i) => {
                const x = boxX + 50 + i * 170;
                const y = boxY + 70;
                const isCenter = i === 1;
                ctx.fillStyle = isCenter ? '#e67e22' : '#2a2a4a';
                ctx.fillRect(x, y, 150, 80);
                ctx.strokeStyle = isCenter ? '#ffcc44' : '#aaa';
                ctx.lineWidth = isCenter ? 3 : 1;
                ctx.strokeRect(x, y, 150, 80);
                ctx.font = '14px monospace';
                ctx.fillStyle = '#fff';
                ctx.textAlign = 'center';
                ctx.fillText(s.name, x + 75, y + 45);
            });
            ctx.font = '16px monospace';
            ctx.fillStyle = '#aaa';
            ctx.textAlign = 'center';
            ctx.fillText('← → to change · ENTER to confirm · ESC to cancel', CONFIG.CANVAS_WIDTH / 2, boxY + 170);
        }

        if (this.screenShake.duration > 0) ctx.setTransform(1, 0, 0, 1, 0, 0);
    }

    // NEW UI drawing method
    drawPlayerUI(ctx, player, x, y, w, h, roundsWon, side) {
        if (!player) return;
        const hero = player.hero;
        const iconSize = 60;
        const iconX = side === 'left' ? x : x + w - iconSize;
        const iconY = y + (h - iconSize) / 2;

        // Draw circular icon background
        ctx.save();
        ctx.beginPath();
        ctx.arc(iconX + iconSize / 2, iconY + iconSize / 2, iconSize / 2 + 2, 0, Math.PI * 2);
        ctx.fillStyle = '#222';
        ctx.fill();
        ctx.strokeStyle = side === 'left' ? '#4a90e2' : '#e24a4a';
        ctx.lineWidth = 3;
        ctx.stroke();
        ctx.clip();
        ctx.beginPath();
        ctx.arc(iconX + iconSize / 2, iconY + iconSize / 2, iconSize / 2, 0, Math.PI * 2);
        ctx.clip();

        // Draw icon image
        if (hero.images && hero.images.icon) {
            const img = new Image();
            img.src = '../assets/' + hero.images.icon.replace(/^\//, '');
            if (img.complete) {
                ctx.drawImage(img, iconX, iconY, iconSize, iconSize);
            } else {
                ctx.fillStyle = '#555';
                ctx.fillRect(iconX, iconY, iconSize, iconSize);
            }
        } else {
            ctx.fillStyle = '#555';
            ctx.fillRect(iconX, iconY, iconSize, iconSize);
        }
        ctx.restore();

        // Bars area
        const barX = side === 'left' ? iconX + iconSize + 10 : x;
        const barW = side === 'left' ? w - iconSize - 10 : w - iconSize - 10;
        const barY = y + 5;
        const barH = 14;
        const manaBarY = barY + barH + 6;
        const manaBarH = 8;

        // Health bar background
        ctx.fillStyle = '#1a0a0a';
        ctx.fillRect(barX, barY, barW, barH);
        // Health bar fill (using displayHealth)
        const healthPercent = player.displayHealth / player.maxHealth;
        const healthGrad = ctx.createLinearGradient(barX, barY, barX + barW * healthPercent, barY);
        healthGrad.addColorStop(0, side === 'left' ? '#cc3333' : '#3366cc');
        healthGrad.addColorStop(1, side === 'left' ? '#ff6666' : '#6699ff');
        ctx.fillStyle = healthGrad;
        ctx.fillRect(barX, barY, barW * healthPercent, barH);
        ctx.strokeStyle = '#ffaa00';
        ctx.lineWidth = 2;
        ctx.strokeRect(barX, barY, barW, barH);

        // Health text
        ctx.font = 'bold 12px monospace';
        ctx.fillStyle = '#fff';
        ctx.shadowColor = '#000';
        ctx.shadowBlur = 4;
        ctx.textAlign = 'center';
        ctx.fillText(`${Math.ceil(player.health)} / ${player.maxHealth}`, barX + barW / 2, barY + barH - 3);

        // Mana bar
        ctx.fillStyle = '#1a1a2e';
        ctx.fillRect(barX, manaBarY, barW, manaBarH);
        const manaPercent = player.mana / player.maxMana;
        ctx.fillStyle = '#4a9eff';
        ctx.fillRect(barX, manaBarY, barW * manaPercent, manaBarH);
        ctx.strokeStyle = '#88aaff';
        ctx.lineWidth = 1.5;
        ctx.strokeRect(barX, manaBarY, barW, manaBarH);

        // Mana text
        ctx.font = 'bold 10px monospace';
        ctx.fillStyle = '#ccddff';
        ctx.fillText(`${Math.floor(player.mana)} / ${player.maxMana}`, barX + barW / 2, manaBarY + manaBarH - 2);
        ctx.shadowBlur = 0;

        // Hero name
        ctx.font = 'bold 16px "Courier New"';
        ctx.fillStyle = '#ffdd99';
        ctx.textAlign = side === 'left' ? 'left' : 'right';
        const nameX = side === 'left' ? barX : barX + barW;
        ctx.fillText(hero.name, nameX, y + h - 5);

        // Round wins (winner icons)
        const winIconSize = 22;
        const winStartX = side === 'left' ? barX : barX + barW - winIconSize * this.totalRounds;
        const winY = y + h + 5;
        for (let i = 0; i < this.totalRounds; i++) {
            const winX = winStartX + i * (winIconSize + 4) * (side === 'left' ? 1 : -1);
            if (i < roundsWon) {
                if (this.winnerIconImg.complete) {
                    ctx.drawImage(this.winnerIconImg, winX, winY, winIconSize, winIconSize);
                } else {
                    ctx.fillStyle = '#ffd700';
                    ctx.beginPath();
                    ctx.arc(winX + winIconSize / 2, winY + winIconSize / 2, winIconSize / 2, 0, Math.PI * 2);
                    ctx.fill();
                }
            } else {
                ctx.fillStyle = '#444';
                ctx.beginPath();
                ctx.arc(winX + winIconSize / 2, winY + winIconSize / 2, winIconSize / 2, 0, Math.PI * 2);
                ctx.fill();
                ctx.strokeStyle = '#888';
                ctx.lineWidth = 1;
                ctx.stroke();
            }
        }
    }

    handleInput(e) {
        if (e.type !== 'keydown') return;
        if (this.state === 'gameover') {
            if (e.code === 'Enter' || e.code === 'Escape') this.game.sceneManager.switchTo('win');
            return;
        }
        if (this.showStageSlider) {
            if (e.code === 'ArrowLeft' || e.code === 'ArrowRight') {
                const stages = this.game.stages;
                let idx = stages.findIndex(s => s.id === this.stage.id);
                if (e.code === 'ArrowLeft') idx = (idx - 1 + stages.length) % stages.length;
                else idx = (idx + 1) % stages.length;
                this.stage = stages[idx];
                this.game.soundManager?.play('select');
            } else if (e.code === 'Enter') {
                this.showStageSlider = false;
                this.paused = true;
                this.game.soundManager?.play('confirm');
            } else if (e.code === 'Escape') {
                this.showStageSlider = false;
                this.paused = true;
                this.game.soundManager?.play('back');
            }
            return;
        }
        if (e.code === 'Escape') {
            if (this.paused) {
                this.paused = false;
                this.game.soundManager?.play('back');
            } else {
                this.paused = true;
                this.pauseSelection = 0;
                this.game.soundManager?.play('select');
            }
            return;
        }
        if (this.paused) {
            if (e.code === 'ArrowUp') {
                this.pauseSelection = (this.pauseSelection - 1 + this.pauseOptions.length) % this.pauseOptions.length;
                this.game.soundManager?.play('select');
            } else if (e.code === 'ArrowDown') {
                this.pauseSelection = (this.pauseSelection + 1) % this.pauseOptions.length;
                this.game.soundManager?.play('select');
            } else if (e.code === 'Enter') {
                const action = this.pauseOptions[this.pauseSelection].action;
                this.game.soundManager?.play('confirm');
                this.handlePauseAction(action);
            }
            return;
        }
    }

    handlePauseAction(action) {
        switch (action) {
            case 'resume': this.paused = false; break;
            case 'changeHero':
                this.game.selectionSceneResume = { mode: this.game.battleConfig.mode, stage: this.stage, skipToHero: true };
                this.game.sceneManager.switchTo('selection');
                break;
            case 'changeStage':
                this.showStageSlider = true;
                this.paused = false;
                break;
            case 'toggleP1AI':
                if (this.p1) { this.p1.isAI = !this.p1.isAI; if (this.p1.isAI) this.p1.setAIDifficulty(this.game.settings.difficulty || 'Normal'); }
                break;
            case 'toggleP2AI':
                if (this.p2) { this.p2.isAI = !this.p2.isAI; if (this.p2.isAI) this.p2.setAIDifficulty(this.game.settings.difficulty || 'Normal'); }
                break;
            case 'settings':
                this.game.returnToBattleFromSettings = true;
                this.game.sceneManager.switchTo('settings');
                break;
            case 'menu': this.game.sceneManager.switchTo('menu'); break;
        }
    }
}