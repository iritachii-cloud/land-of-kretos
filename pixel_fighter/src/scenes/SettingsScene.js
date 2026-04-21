import { Scene } from './Scene.js';
import { CONFIG } from '../config.js';

export class SettingsScene extends Scene {
    constructor(game) {
        super(game);
        this.selectedOption = 0;
        this.options = [
            { name: 'Music Volume', value: '70%', key: 'musicVolume', type: 'slider', min: 0, max: 100 },
            { name: 'SFX Volume', value: '80%', key: 'sfxVolume', type: 'slider', min: 0, max: 100 },
            { name: 'Rounds', value: '3', key: 'rounds', type: 'select', values: ['1','3','5'] },
            { name: 'Timer', value: '∞', key: 'timer', type: 'select', values: ['30','60','99','∞'] },
            { name: 'Difficulty', value: 'Normal', key: 'difficulty', type: 'select', values: ['Newbie','Beginner','Normal','Hard','Expert','Hellmode'] },
            { name: 'Back', action: 'back' }
        ];
        this.settings = { ...this.game.settings };
        this.updateOptionValues();
    }
    
    updateOptionValues() {
        this.options[0].value = Math.round(this.settings.musicVolume * 100) + '%';
        this.options[1].value = Math.round(this.settings.sfxVolume * 100) + '%';
        this.options[2].value = this.settings.rounds.toString();
        this.options[3].value = this.settings.timer === 0 ? '∞' : this.settings.timer.toString();
        this.options[4].value = this.settings.difficulty;
    }
    
    enter() {
        this.selectedOption = 0;
        this.settings = { ...this.game.settings };
        this.updateOptionValues();
    }
    
    render(ctx) {
        const { width, height } = this.game.canvas;
        ctx.fillStyle = '#1a0a2e';
        ctx.fillRect(0, 0, width, height);
        
        ctx.font = 'bold 40px "Courier New", Courier, monospace';
        ctx.fillStyle = '#fff';
        ctx.textAlign = 'center';
        ctx.fillText('SETTINGS', width/2, 80);
        
        const startY = 180;
        this.options.forEach((opt, i) => {
            const y = startY + i * 60;
            ctx.fillStyle = i === this.selectedOption ? '#ffaa00' : '#334466';
            ctx.fillRect(width/2 - 200, y - 20, 400, 40);
            ctx.strokeStyle = '#fff';
            ctx.lineWidth = 2;
            ctx.strokeRect(width/2 - 200, y - 20, 400, 40);
            
            ctx.font = '24px monospace';
            ctx.fillStyle = '#fff';
            ctx.fillText(opt.name, width/2 - 100, y + 5);
            if (opt.value !== undefined) {
                ctx.fillText(opt.value, width/2 + 100, y + 5);
            }
        });
        
        ctx.font = '16px monospace';
        ctx.fillStyle = '#aaa';
        ctx.fillText('↑↓ select, ←→ change, ENTER confirm, ESC back', width/2, height - 40);
    }
    
    handleInput(event) {
        if (event.type !== 'keydown') return;
        const key = event.code;
        const opt = this.options[this.selectedOption];
        
        if (key === 'ArrowUp') {
            this.selectedOption = (this.selectedOption - 1 + this.options.length) % this.options.length;
        } else if (key === 'ArrowDown') {
            this.selectedOption = (this.selectedOption + 1) % this.options.length;
        } else if (key === 'ArrowLeft' || key === 'ArrowRight') {
            if (opt.key) {
                const delta = key === 'ArrowRight' ? 1 : -1;
                if (opt.type === 'slider') {
                    let val = parseInt(opt.value) + delta * 5;
                    val = Math.max(opt.min, Math.min(opt.max, val));
                    this.settings[opt.key] = val / 100;
                    opt.value = val + '%';
                } else if (opt.type === 'select') {
                    let idx = opt.values.indexOf(opt.value);
                    idx = (idx + delta + opt.values.length) % opt.values.length;
                    opt.value = opt.values[idx];
                    if (opt.key === 'rounds') this.settings.rounds = parseInt(opt.value);
                    else if (opt.key === 'timer') this.settings.timer = opt.value === '∞' ? 0 : parseInt(opt.value);
                    else if (opt.key === 'difficulty') this.settings.difficulty = opt.value;
                }
                this.game.audioManager.setMusicVolume(this.settings.musicVolume);
                this.game.audioManager.setSFXVolume(this.settings.sfxVolume);
            }
        } else if (key === 'Enter') {
            if (opt.action === 'back') {
                this.saveSettings();
                this.game.sceneManager.switchTo('menu');
            }
        } else if (key === 'Escape') {
            this.saveSettings();
            this.game.sceneManager.switchTo('menu');
        }
    }
    
    saveSettings() {
        this.game.settings = { ...this.settings };
        // Save to localStorage
        localStorage.setItem('kretos_settings', JSON.stringify(this.game.settings));
    }
}