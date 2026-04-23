export class InputHandler {
    constructor() {
        this.keys = {};
        this.virtualKeys = {}; // for touch simulation
        this.activeDirections = { up: false, down: false, left: false, right: false };
        window.addEventListener('keydown', e => {
            this.keys[e.code] = true;
        });
        window.addEventListener('keyup', e => {
            this.keys[e.code] = false;
        });
    }

    // Get combined state (keyboard + virtual)
    getPlayerState(playerId) {
        const keyState = (code) => this.keys[code] || this.virtualKeys[code] || false;

        // Debug log every 60 frames to avoid spam (only in development)
        if (Math.random() < 0.01) {
            console.log('Virtual keys:', this.virtualKeys);
        }

        if (playerId === 'p1') {
            return {
                left: keyState('KeyA'),
                right: keyState('KeyD'),
                jump: keyState('KeyW'),
                punch: keyState('KeyU'),
                kick: keyState('KeyI'),
                special: keyState('KeyO'),
                parry: keyState('KeyP'),
                throw: keyState('KeyL')
            };
        } else {
            return {
                left: keyState('ArrowLeft'),
                right: keyState('ArrowRight'),
                jump: keyState('ArrowUp'),
                punch: keyState('Numpad7'),
                kick: keyState('Numpad8'),
                special: keyState('Numpad9'),
                parry: keyState('Numpad0'),
                throw: keyState('Numpad6')
            };
        }
    }

    // --- Virtual Input Methods ---
    pressVirtual(code) {
        if (this.virtualKeys[code]) return; // already pressed
        this.virtualKeys[code] = true;
        console.log(`pressVirtual: ${code}`);
        this.dispatchKeyEvent('keydown', code);
    }

    releaseVirtual(code) {
        if (!this.virtualKeys[code]) return; // not pressed
        this.virtualKeys[code] = false;
        console.log(`releaseVirtual: ${code}`);
        this.dispatchKeyEvent('keyup', code);
    }

    // Simulate a key press for one frame
    tapVirtual(code) {
        this.pressVirtual(code);
        setTimeout(() => this.releaseVirtual(code), 50);
    }

    dispatchKeyEvent(type, code) {
        const event = new KeyboardEvent(type, { code, bubbles: true, cancelable: true });
        window.dispatchEvent(event);
    }

    // Clear all virtual keys (e.g., on scene change)
    clearVirtualKeys() {
        for (let code in this.virtualKeys) {
            if (this.virtualKeys[code]) {
                this.releaseVirtual(code);
            }
        }
        this.virtualKeys = {};
        this.activeDirections = { up: false, down: false, left: false, right: false };
    }

    // --- Joystick handling ---
    setupJoystick(joystickElement, baseElement, stickElement) {
        console.log('Setting up joystick...', joystickElement, baseElement, stickElement);
        if (!joystickElement || !baseElement || !stickElement) {
            console.error('Joystick elements not found!');
            return;
        }

        const state = {
            active: false,
            startX: 0, startY: 0,
            currentX: 0, currentY: 0,
            maxDist: 50,
        };

        const handleStart = (clientX, clientY) => {
            console.log('Joystick start', clientX, clientY);
            state.active = true;
            const rect = baseElement.getBoundingClientRect();
            state.startX = rect.left + rect.width/2;
            state.startY = rect.top + rect.height/2;
            state.currentX = clientX;
            state.currentY = clientY;
            updateJoystick(clientX, clientY);
        };

        const handleMove = (clientX, clientY) => {
            if (!state.active) return;
            state.currentX = clientX;
            state.currentY = clientY;
            updateJoystick(clientX, clientY);
        };

        const handleEnd = () => {
            console.log('Joystick end');
            state.active = false;
            stickElement.style.transform = `translate(-50%, -50%)`;
            // Release all movement keys
            this.releaseVirtual('KeyA');
            this.releaseVirtual('KeyD');
            this.releaseVirtual('KeyW');
            this.releaseVirtual('KeyS');
            this.releaseVirtual('ArrowUp');
            this.releaseVirtual('ArrowDown');
            this.releaseVirtual('ArrowLeft');
            this.releaseVirtual('ArrowRight');
            this.activeDirections = { up: false, down: false, left: false, right: false };
        };

        const updateJoystick = (clientX, clientY) => {
            let dx = clientX - state.startX;
            let dy = clientY - state.startY;
            const dist = Math.min(state.maxDist, Math.sqrt(dx*dx + dy*dy));
            const angle = Math.atan2(dy, dx);
            const stickX = Math.cos(angle) * dist;
            const stickY = Math.sin(angle) * dist;
            stickElement.style.transform = `translate(calc(-50% + ${stickX}px), calc(-50% + ${stickY}px))`;

            // Determine direction (deadzone 0.2 for better responsiveness)
            const normX = dx / state.maxDist;
            const normY = dy / state.maxDist;
            const left = normX < -0.2;
            const right = normX > 0.2;
            const up = normY < -0.2;
            const down = normY > 0.2;

            console.log(`Joystick: dx=${dx.toFixed(1)} dy=${dy.toFixed(1)} left=${left} right=${right} up=${up} down=${down}`);

            // Update virtual keys for WASD (Player 1 movement)
            setDirectionKey('KeyA', left);
            setDirectionKey('KeyD', right);
            setDirectionKey('KeyW', up);
            setDirectionKey('KeyS', down);
            // Update virtual keys for Arrow keys (menu navigation)
            setDirectionKey('ArrowLeft', left);
            setDirectionKey('ArrowRight', right);
            setDirectionKey('ArrowUp', up);
            setDirectionKey('ArrowDown', down);
        };

        const setDirectionKey = (code, pressed) => {
            if (pressed) {
                if (!this.virtualKeys[code]) this.pressVirtual(code);
            } else {
                if (this.virtualKeys[code]) this.releaseVirtual(code);
            }
        };

        // Touch events
        joystickElement.addEventListener('touchstart', (e) => {
            e.preventDefault();
            console.log('touchstart on joystick');
            const touch = e.touches[0];
            if (touch) handleStart(touch.clientX, touch.clientY);
        });
        joystickElement.addEventListener('touchmove', (e) => {
            e.preventDefault();
            const touch = e.touches[0];
            if (touch) handleMove(touch.clientX, touch.clientY);
        });
        joystickElement.addEventListener('touchend', (e) => {
            e.preventDefault();
            handleEnd();
        });
        joystickElement.addEventListener('touchcancel', (e) => {
            e.preventDefault();
            handleEnd();
        });

        // Mouse events for testing on desktop
        joystickElement.addEventListener('mousedown', (e) => {
            e.preventDefault();
            console.log('mousedown on joystick');
            handleStart(e.clientX, e.clientY);
            const onMouseMove = (me) => { handleMove(me.clientX, me.clientY); };
            const onMouseUp = () => {
                handleEnd();
                window.removeEventListener('mousemove', onMouseMove);
                window.removeEventListener('mouseup', onMouseUp);
            };
            window.addEventListener('mousemove', onMouseMove);
            window.addEventListener('mouseup', onMouseUp);
        });
    }

    // Setup attack buttons and pause button
    setupTouchButtons() {
        // Attack buttons
        const attackButtons = document.querySelectorAll('.attack-btn');
        attackButtons.forEach(btn => {
            const key = btn.dataset.key;
            if (!key) return;

            const press = () => this.pressVirtual(key);
            const release = () => this.releaseVirtual(key);

            btn.addEventListener('touchstart', (e) => { e.preventDefault(); press(); });
            btn.addEventListener('touchend', (e) => { e.preventDefault(); release(); });
            btn.addEventListener('touchcancel', (e) => { e.preventDefault(); release(); });
            btn.addEventListener('mousedown', (e) => { e.preventDefault(); press(); });
            btn.addEventListener('mouseup', (e) => { e.preventDefault(); release(); });
            btn.addEventListener('mouseleave', (e) => { release(); });
        });

        // Pause button
        const pauseBtn = document.getElementById('touchPauseBtn');
        if (pauseBtn) {
            const pressPause = () => this.tapVirtual('Escape');
            pauseBtn.addEventListener('touchstart', (e) => { e.preventDefault(); pressPause(); });
            pauseBtn.addEventListener('mousedown', (e) => { e.preventDefault(); pressPause(); });
        }
    }
}