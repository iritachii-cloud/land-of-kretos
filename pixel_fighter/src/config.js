export const CONFIG = {
    CANVAS_WIDTH: 1280,
    CANVAS_HEIGHT: 720,
    FPS: 60,
    DEBUG: true,
    
    LOADING_MIN_DURATION: 3000,
    TIPS: [
        "Tip: Hold O to charge your ultimate!",
        "Tip: Double-tap W for a double jump.",
        "Tip: Combine movement keys with attack for special moves.",
        "Tip: Alucard's Deathstar deals bonus damage to demons.",
        "Tip: X-abar's Soul Reaver heals on hit.",
        "Tip: Press Backspace to skip loading.",
        "Tip: You can rebind controls in Settings."
    ],
    
    P1_CONTROLS: {
        left: 'KeyA', right: 'KeyD', jump: 'KeyW', crouch: 'KeyS',
        punch: 'KeyU', kick: 'KeyI', charge: 'KeyO', special: 'KeyP'
    },
    P2_CONTROLS: {
        left: 'ArrowLeft', right: 'ArrowRight', jump: 'ArrowUp', crouch: 'ArrowDown',
        punch: 'Numpad7', kick: 'Numpad8', charge: 'Numpad9', special: 'Numpad0'
    },
    
    DEFAULT_SETTINGS: {
        musicVolume: 0.7,
        sfxVolume: 0.8,
        rounds: 3,
        timer: 0
        , // seconds, 0 = infinite
        difficulty: 'Normal',
        theme: 'default'
    },
    
    // Physics constants (per second)
    PHYSICS: {
        GRAVITY: 1200,
        JUMP_FORCE: -550,
        MOVE_SPEED: 400,
        FRICTION_AIR: 0.85,
        FRICTION_GROUND: 0.90,
        MAX_FALL_SPEED: 800
    }
};