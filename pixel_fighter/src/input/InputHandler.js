import { CONFIG } from '../config.js';

export class InputHandler {
    constructor() {
        this.keyState = new Map();
        this.p1Controls = CONFIG.P1_CONTROLS;
        this.p2Controls = CONFIG.P2_CONTROLS;

        window.addEventListener('keydown', (e) => this.handleKeyDown(e));
        window.addEventListener('keyup', (e) => this.handleKeyUp(e));
    }

    handleKeyDown(e) {
        this.keyState.set(e.code, true);
    }

    handleKeyUp(e) {
        this.keyState.set(e.code, false);
    }

    isPressed(code) {
        return this.keyState.get(code) || false;
    }

    getPlayerState(playerId) {
        const controls = playerId === 'p1' ? this.p1Controls : this.p2Controls;
        return {
            left: this.isPressed(controls.left),
            right: this.isPressed(controls.right),
            jump: this.isPressed(controls.jump),
            crouch: this.isPressed(controls.crouch),
            punch: this.isPressed(controls.punch),
            kick: this.isPressed(controls.kick),
            charge: this.isPressed(controls.charge),
            special: this.isPressed(controls.special)
        };
    }

    updateControls(playerId, newControls) {
        if (playerId === 'p1') {
            this.p1Controls = { ...this.p1Controls, ...newControls };
        } else {
            this.p2Controls = { ...this.p2Controls, ...newControls };
        }
    }
}