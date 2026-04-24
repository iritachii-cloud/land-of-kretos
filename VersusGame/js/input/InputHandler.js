export class InputHandler {
    constructor() {
        this.keys = {};
        window.addEventListener('keydown', e => {
            this.keys[e.code] = true;
            // Prevent default for game keys
            const gameKeys = [
                'KeyW','KeyA','KeyS','KeyD','KeyU','KeyI','KeyO','KeyP',
                'ArrowUp','ArrowDown','ArrowLeft','ArrowRight',
                'Numpad7','Numpad8','Numpad9','Numpad0','NumpadAdd',
                'Enter','Escape','Space','Backspace','BracketLeft','BracketRight',
                'Digit0'   // teleport P1
            ];
            if (gameKeys.includes(e.code)) e.preventDefault();
        });
        window.addEventListener('keyup', e => {
            this.keys[e.code] = false;
            const gameKeys = [
                'KeyW','KeyA','KeyS','KeyD','KeyU','KeyI','KeyO','KeyP',
                'ArrowUp','ArrowDown','ArrowLeft','ArrowRight',
                'Numpad7','Numpad8','Numpad9','Numpad0','NumpadAdd',
                'Digit0'
            ];
            if (gameKeys.includes(e.code)) e.preventDefault();
        });
    }

    getPlayerState(playerId) {
        if (playerId === 'p1') {
            return {
                left:   this.keys['KeyA'] || false,
                right:  this.keys['KeyD'] || false,
                jump:   this.keys['KeyW'] || false,
                charge: this.keys['KeyS'] || false,
                punch:  this.keys['KeyU'] || false,
                kick:   this.keys['KeyI'] || false,
                special:this.keys['KeyO'] || false,
                parry:  this.keys['KeyP'] || false,
                throw:  this.keys['KeyL'] || false,
                teleport: this.keys['Digit0'] || false
            };
        } else {
            return {
                left:   this.keys['ArrowLeft'] || false,
                right:  this.keys['ArrowRight'] || false,
                jump:   this.keys['ArrowUp'] || false,
                charge: this.keys['ArrowDown'] || false,
                punch:  this.keys['Numpad7'] || false,
                kick:   this.keys['Numpad8'] || false,
                special:this.keys['Numpad9'] || false,
                parry:  this.keys['Numpad0'] || false,
                throw:  this.keys['Numpad6'] || false,
                teleport: this.keys['NumpadAdd'] || false
            };
        }
    }
}