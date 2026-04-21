import { CONFIG } from './config.js';
import { LoadingScene } from './scenes/LoadingScene.js';
import { MenuScene } from './scenes/MenuScene.js';
import { SelectionScene } from './scenes/SelectionScene.js';
import { BattleScene } from './scenes/BattleScene.js';
import { WinScene } from './scenes/WinScene.js';
import { SettingsScene } from './scenes/SettingsScene.js';
import { IndexScene } from './scenes/IndexScene.js';
import { InputHandler } from './input/InputHandler.js';
import { AudioManager } from './audio/AudioManager.js';
import { stages } from './data/stages.js';

class SceneManager {
    constructor(game) {
        this.game = game;
        this.scenes = new Map();
        this.currentScene = null;
    }

    register(name, sceneClass) {
        this.scenes.set(name, new sceneClass(this.game));
    }

    switchTo(name) {
        if (this.currentScene) {
            this.currentScene.exit();
        }
        this.currentScene = this.scenes.get(name);
        if (!this.currentScene) {
            console.error(`Scene "${name}" not registered!`);
            return;
        }
        this.currentScene.enter();
    }

    update(deltaTime) {
        if (this.currentScene) {
            this.currentScene.update(deltaTime);
        }
    }

    render(ctx) {
        if (this.currentScene) {
            this.currentScene.render(ctx);
        }
    }

    handleInput(event) {
        if (this.currentScene) {
            this.currentScene.handleInput(event);
        }
    }
}

class Game {
    constructor() {
        this.canvas = document.getElementById('game-canvas');
        this.ctx = this.canvas.getContext('2d');
        this.canvas.width = CONFIG.CANVAS_WIDTH;
        this.canvas.height = CONFIG.CANVAS_HEIGHT;

        this.inputHandler = new InputHandler();
        this.audioManager = new AudioManager();
        this.stageData = stages;
        this.settings = { ...CONFIG.DEFAULT_SETTINGS };
        this.battleConfig = null;

        this.sceneManager = new SceneManager(this);

        this.sceneManager.register('loading', LoadingScene);
        this.sceneManager.register('menu', MenuScene);
        this.sceneManager.register('selection', SelectionScene);
        this.sceneManager.register('battle', BattleScene);
        this.sceneManager.register('win', WinScene);
        this.sceneManager.register('settings', SettingsScene);
        this.sceneManager.register('index', IndexScene);

        this.lastTimestamp = 0;
        this.isRunning = true;
        this.deltaTime = 1/60; // Smooth variable delta

        this.setupEventListeners();
    }

    setupEventListeners() {
        window.addEventListener('keydown', (e) => {
            const gameKeys = [
                'KeyW','KeyA','KeyS','KeyD','KeyU','KeyI','KeyO','KeyP',
                'ArrowUp','ArrowDown','ArrowLeft','ArrowRight',
                'Numpad7','Numpad8','Numpad9','Numpad0',
                'Backspace','Enter','Escape','Space',
                'BracketLeft','BracketRight','KeyQ','KeyE'
            ];
            if (gameKeys.includes(e.code)) {
                e.preventDefault();
            }
            this.sceneManager.handleInput(e);
        });

        window.addEventListener('keyup', (e) => {
            const gameKeys = [
                'KeyW','KeyA','KeyS','KeyD','KeyU','KeyI','KeyO','KeyP',
                'ArrowUp','ArrowDown','ArrowLeft','ArrowRight',
                'Numpad7','Numpad8','Numpad9','Numpad0'
            ];
            if (gameKeys.includes(e.code)) {
                e.preventDefault();
            }
            this.sceneManager.handleInput(e);
        });

        this.canvas.addEventListener('contextmenu', (e) => e.preventDefault());
    }

    start() {
        this.sceneManager.switchTo('loading');
        requestAnimationFrame(this.gameLoop.bind(this));
    }

    gameLoop(timestamp) {
        if (!this.isRunning) return;

        // Calculate delta time (capped)
        if (this.lastTimestamp) {
            this.deltaTime = Math.min(0.033, (timestamp - this.lastTimestamp) / 1000); // max 33ms (30fps minimum)
        }
        this.lastTimestamp = timestamp;

        // Update with variable delta (smoother)
        this.sceneManager.update(this.deltaTime);

        // Render
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.sceneManager.render(this.ctx);

        requestAnimationFrame(this.gameLoop.bind(this));
    }
}

window.addEventListener('DOMContentLoaded', () => {
    const game = new Game();
    game.start();
});