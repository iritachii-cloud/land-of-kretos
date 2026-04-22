import { CONFIG } from './config.js';
import { LoadingScene } from './scenes/LoadingScene.js';
import { MenuScene } from './scenes/MenuScene.js';
import { SelectionScene } from './scenes/SelectionScene.js';
import { BattleScene } from './scenes/BattleScene.js';
import { WinScene } from './scenes/WinScene.js';
import { SettingsScene } from './scenes/SettingsScene.js';
import { IndexScene } from './scenes/IndexScene.js';
import { InputHandler } from './input/InputHandler.js';
import { SoundManager } from './audio/SoundManager.js';

export const ASSET_BASE = '../assets/';

class SceneManager {
    constructor(game) {
        this.game = game;
        this.scenes = new Map();
        this.current = null;
    }
    register(name, SceneClass) {
        this.scenes.set(name, new SceneClass(this.game));
    }
    switchTo(name) {
        if (this.current) this.current.exit();
        this.current = this.scenes.get(name);
        if (this.current) this.current.enter();
    }
    update(dt) { if (this.current) this.current.update(dt); }
    render(ctx) { if (this.current) this.current.render(ctx); }
    handleInput(e) { if (this.current) this.current.handleInput(e); }
}

class Game {
    constructor() {
        this.canvas = document.getElementById('gameCanvas');
        this.ctx = this.canvas.getContext('2d');
        this.canvas.width = CONFIG.CANVAS_WIDTH;
        this.canvas.height = CONFIG.CANVAS_HEIGHT;
        
        this.inputHandler = new InputHandler();
        this.soundManager = new SoundManager();
        this.heroes = [];
        this.stages = [];
        this.settings = { rounds: 3, timer: 99, difficulty: 'Normal', musicVol: 0.7, sfxVol: 0.8 };
        this.battleConfig = null;
        this.selectionSceneResume = null;
        this.returnToBattleFromSettings = false;
        
        this.sceneManager = new SceneManager(this);
        this.sceneManager.register('loading', LoadingScene);
        this.sceneManager.register('menu', MenuScene);
        this.sceneManager.register('selection', SelectionScene);
        this.sceneManager.register('battle', BattleScene);
        this.sceneManager.register('win', WinScene);
        this.sceneManager.register('settings', SettingsScene);
        this.sceneManager.register('index', IndexScene);
        
        this.lastTime = 0;
        this.deltaTime = 1/60;
        this.setupEvents();
        
        this.loadData();
    }
    
    async loadData() {
        const { heroes } = await import('./data/heroes.js');
        const { stages } = await import('./data/stages.js');
        this.heroes = heroes;
        this.stages = stages;
        const saved = localStorage.getItem('versus_settings');
        if (saved) this.settings = { ...this.settings, ...JSON.parse(saved) };
        this.start();
    }
    
    setupEvents() {
        window.addEventListener('keydown', e => {
            const gameKeys = ['KeyW','KeyA','KeyS','KeyD','KeyU','KeyI','KeyO','KeyP',
                'ArrowUp','ArrowDown','ArrowLeft','ArrowRight','Numpad7','Numpad8','Numpad9','Numpad0',
                'Enter','Escape','Space','Backspace','BracketLeft','BracketRight'];
            if (gameKeys.includes(e.code)) e.preventDefault();
            this.sceneManager.handleInput(e);
        });
        window.addEventListener('keyup', e => {
            const gameKeys = ['KeyW','KeyA','KeyS','KeyD','KeyU','KeyI','KeyO','KeyP',
                'ArrowUp','ArrowDown','ArrowLeft','ArrowRight','Numpad7','Numpad8','Numpad9','Numpad0'];
            if (gameKeys.includes(e.code)) e.preventDefault();
            this.sceneManager.handleInput(e);
        });
        this.canvas.addEventListener('contextmenu', e => e.preventDefault());
    }
    
    start() {
        this.soundManager.playTheme();
        this.sceneManager.switchTo('loading');
        requestAnimationFrame(this.loop.bind(this));
    }
    
    loop(now) {
        if (this.lastTime) {
            this.deltaTime = Math.min(0.033, (now - this.lastTime) / 1000);
        }
        this.lastTime = now;
        this.sceneManager.update(this.deltaTime);
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.sceneManager.render(this.ctx);
        requestAnimationFrame(this.loop.bind(this));
    }
}

window.addEventListener('DOMContentLoaded', () => {
    window.game = new Game();
});