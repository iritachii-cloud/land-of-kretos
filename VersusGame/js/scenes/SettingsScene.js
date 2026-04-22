import { Scene } from './Scene.js';

export class SettingsScene extends Scene {
    constructor(game) {
        super(game);
        this.selected = 0;
        this.settings = { ...this.game.settings };
        this.options = [
            { name: 'Music Volume', key: 'musicVol', type: 'slider', min: 0, max: 100, value: 70 },
            { name: 'SFX Volume', key: 'sfxVol', type: 'slider', min: 0, max: 100, value: 80 },
            { name: 'Rounds', key: 'rounds', type: 'select', values: ['1', '3', '5'], value: '3' },
            { name: 'Timer (sec)', key: 'timer', type: 'select', values: ['30', '60', '99', '∞'], value: '∞' },
            { name: 'Difficulty', key: 'difficulty', type: 'select', values: ['Easy', 'Normal', 'Hard', 'Expert'], value: 'Normal' },
            { name: 'Save Settings', action: 'save' },
            { name: '← BACK', action: 'back' }
        ];
    }

    enter() {
        this.selected = 0;
        this.settings = { ...this.game.settings };
        const saved = localStorage.getItem('versus_settings');
        if (saved) this.settings = { ...this.settings, ...JSON.parse(saved) };
        this.options[0].value = Math.round((this.settings.musicVol || 0.7) * 100);
        this.options[1].value = Math.round((this.settings.sfxVol || 0.8) * 100);
        this.options[2].value = (this.settings.rounds || 3).toString();
        this.options[3].value = (this.settings.timer === 0 ? '∞' : (this.settings.timer || 60).toString());
        this.options[4].value = this.settings.difficulty || 'Normal';
    }

    render(ctx) {
        const { width, height } = this.game.canvas;
        ctx.fillStyle = '#0b0d1a';
        ctx.fillRect(0, 0, width, height);
        ctx.strokeStyle = '#f5a623';
        ctx.lineWidth = 3;
        ctx.strokeRect(15, 15, width - 30, height - 30);

        ctx.font = 'bold 44px "Courier New"';
        ctx.fillStyle = '#ffcc66';
        ctx.textAlign = 'center';
        ctx.fillText('SETTINGS', width / 2, 80);

        const startY = 160;
        this.options.forEach((opt, i) => {
            const y = startY + i * 55;
            const isSelected = i === this.selected;
            ctx.fillStyle = isSelected ? '#e67e22' : '#1e1e30';
            ctx.fillRect(width / 2 - 220, y - 15, 440, 40);
            ctx.strokeStyle = '#aaa';
            ctx.strokeRect(width / 2 - 220, y - 15, 440, 40);
            ctx.font = '20px monospace';
            ctx.fillStyle = '#fff';
            ctx.textAlign = 'left';
            ctx.fillText(opt.name, width / 2 - 200, y + 8);
            ctx.textAlign = 'right';
            if (!opt.action) {
                let displayVal = opt.value;
                if (opt.type === 'slider') displayVal = opt.value + '%';
                ctx.fillText(displayVal, width / 2 + 200, y + 8);
            }
        });

        ctx.font = '16px monospace';
        ctx.fillStyle = '#aaa';
        ctx.textAlign = 'center';
        ctx.fillText('↑↓ to select · ←→ to change · ENTER to confirm', width / 2, height - 40);
    }

    handleInput(e) {
        if (e.type !== 'keydown') return;
        const opt = this.options[this.selected];

        if (e.code === 'ArrowUp') {
            this.selected = (this.selected - 1 + this.options.length) % this.options.length;
            this.game.soundManager?.play('select');
        } else if (e.code === 'ArrowDown') {
            this.selected = (this.selected + 1) % this.options.length;
            this.game.soundManager?.play('select');
        } else if (e.code === 'ArrowLeft' || e.code === 'ArrowRight') {
            if (opt.type === 'slider') {
                const delta = e.code === 'ArrowRight' ? 5 : -5;
                let newVal = opt.value + delta;
                newVal = Math.max(opt.min, Math.min(opt.max, newVal));
                opt.value = newVal;
                this.settings[opt.key] = newVal / 100;
                this.game.soundManager?.play('select');
            } else if (opt.type === 'select') {
                let idx = opt.values.indexOf(opt.value);
                const delta = e.code === 'ArrowRight' ? 1 : -1;
                idx = (idx + delta + opt.values.length) % opt.values.length;
                opt.value = opt.values[idx];
                if (opt.key === 'rounds') this.settings.rounds = parseInt(opt.value);
                else if (opt.key === 'timer') this.settings.timer = opt.value === '∞' ? 0 : parseInt(opt.value);
                else if (opt.key === 'difficulty') this.settings.difficulty = opt.value;
                this.game.soundManager?.play('select');
            }
        } else if (e.code === 'Enter') {
            this.game.soundManager?.play('confirm');
            if (opt.action === 'save') {
                this.saveSettings();
            } else if (opt.action === 'back') {
                this.goBack();
            }
        } else if (e.code === 'Escape') {
            this.game.soundManager?.play('back');
            this.goBack();
        }
    }

    saveSettings() {
        this.game.settings = { ...this.settings };
        localStorage.setItem('versus_settings', JSON.stringify(this.game.settings));
        this.game.soundManager?.setVolume(this.settings.musicVol);
    }

    goBack() {
        if (this.game.returnToBattleFromSettings) {
            this.game.returnToBattleFromSettings = false;
            this.game.sceneManager.switchTo('battle');
            const battleScene = this.game.sceneManager.current;
            if (battleScene && battleScene.constructor.name === 'BattleScene') {
                battleScene.paused = true;
                battleScene.pauseSelection = 0;
            }
        } else {
            this.game.sceneManager.switchTo('menu');
        }
    }
}