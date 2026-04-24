import { Scene } from './Scene.js';
import { Fighter } from '../entities/Fighter.js';
import { CONFIG } from '../config.js';
import { BattleHUD } from '../ui/BattleHUD.js';
import { renderBattle } from './battle/render.js';
import { drawPauseMenu, handlePauseInput } from './battle/pause.js';
import { drawStageSlider, handleStageSliderInput } from './battle/stageSlider.js';
import { updateFightingState } from './battle/update.js';

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
        this.projectiles = [];
        this.hud = new BattleHUD(game);
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
        // Attach scene reference
        this.p1.scene = this;
        this.p2.scene = this;

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
        this.projectiles = [];

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
        this.p1.superMana = 0;
        this.p2.superMana = 0;
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
        this.projectiles = [];
        this.p1.ultimateSystem.resetForRound();
        this.p2.ultimateSystem.resetForRound();
    }

    update(dt) {
        if (this.paused || this.showStageSlider) return;
        if (this.screenShake.duration > 0) this.screenShake.duration -= dt;

        if (this.state === 'fighting') {
            updateFightingState(this, dt);
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
    addProjectile(proj) { this.projectiles.push(proj); }

    render(ctx) {
        if (this.screenShake.duration > 0) {
            const dx = (Math.random() - 0.5) * this.screenShake.intensity;
            const dy = (Math.random() - 0.5) * this.screenShake.intensity;
            ctx.translate(dx, dy);
        }
        renderBattle(ctx, this);
        if (this.paused) drawPauseMenu(ctx, this);
        else if (this.showStageSlider) drawStageSlider(ctx, this);
        if (this.screenShake.duration > 0) ctx.setTransform(1, 0, 0, 1, 0, 0);
    }

    handleInput(e) {
        if (this.state === 'gameover') {
            if (e.code === 'Enter' || e.code === 'Escape' || e.code === 'KeyU') this.game.sceneManager.switchTo('win');
            return;
        }
        if (this.showStageSlider) {
            handleStageSliderInput(this, e);
            return;
        }
        if (this.paused) {
            handlePauseInput(this, e);
            return;
        }
        // Delegate default input to BattleScene's own handler (not from modules)
        if (e.code === 'Escape') {
            this.paused = true;
            this.pauseSelection = 0;
            this.game.soundManager?.play('select');
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