export class InputHandler {
    constructor() {
        this.keys = {};
        window.addEventListener('keydown', e => {
            this.keys[e.code] = true;
        });
        window.addEventListener('keyup', e => {
            this.keys[e.code] = false;
        });
    }
    getPlayerState(playerId) {
        if (playerId === 'p1') {
            return {
                left: this.keys['KeyA'] || false,
                right: this.keys['KeyD'] || false,
                jump: this.keys['KeyW'] || false,
                punch: this.keys['KeyU'] || false,
                kick: this.keys['KeyI'] || false,
                special: this.keys['KeyO'] || false,
                parry: this.keys['KeyP'] || false,
                throw: this.keys['KeyL'] || false
            };
        } else {
            return {
                left: this.keys['ArrowLeft'] || false,
                right: this.keys['ArrowRight'] || false,
                jump: this.keys['ArrowUp'] || false,
                punch: this.keys['Numpad7'] || false,
                kick: this.keys['Numpad8'] || false,
                special: this.keys['Numpad9'] || false,
                parry: this.keys['Numpad0'] || false,
                throw: this.keys['Numpad6'] || false
            };
        }
    }
}