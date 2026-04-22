export class SoundManager {
    constructor() {
        this.sounds = {};
        this.theme = null;
        this.enabled = true;
        this.loadSounds();
    }
    
    loadSounds() {
        // Theme music
        this.theme = new Audio('../assets/sound/theme/theme.mp3');
        this.theme.loop = true;
        this.theme.volume = 0.5;
        
        // SFX
        const sfxFiles = {
            select: '../assets/sound/sfx/select.mp3',
            confirm: '../assets/sound/sfx/confirm.mp3',
            back: '../assets/sound/sfx/back.mp3',
            punch: '../assets/sound/sfx/punch.mp3',
            kick: '../assets/sound/sfx/kick.mp3',
            special: '../assets/sound/sfx/special.mp3',
            ultimate: '../assets/sound/sfx/ultimate.mp3',
            hit: '../assets/sound/sfx/hit.mp3',
            block: '../assets/sound/sfx/block.mp3',
            parry: '../assets/sound/sfx/parry.mp3',
            throw: '../assets/sound/sfx/throw.mp3',
            jump: '../assets/sound/sfx/jump.mp3',          // NEW
            roundStart: '../assets/sound/sfx/round_start.mp3',
            roundWin: '../assets/sound/sfx/round_win.mp3',
            gameWin: '../assets/sound/sfx/game_win.mp3'
        };
        
        for (let key in sfxFiles) {
            const audio = new Audio(sfxFiles[key]);
            audio.preload = 'auto';
            audio.volume = 0.7;                              // increased from 0.6
            this.sounds[key] = audio;
        }
    }
    
    play(soundName) {
        if (!this.enabled) return;
        const sound = this.sounds[soundName];
        if (sound) {
            sound.currentTime = 0;
            const playPromise = sound.play();
            if (playPromise !== undefined) {
                playPromise.catch(e => {
                    console.warn(`Sound '${soundName}' play blocked, will retry on next interaction`);
                    const retry = () => {
                        sound.play().catch(() => {});
                        document.removeEventListener('click', retry);
                        document.removeEventListener('keydown', retry);
                    };
                    document.addEventListener('click', retry, { once: true });
                    document.addEventListener('keydown', retry, { once: true });
                });
            }
        }
    }
    
    playTheme() {
        if (!this.enabled) return;
        if (this.theme) {
            this.theme.play().catch(e => {});
        }
    }
    
    stopTheme() {
        if (this.theme) {
            this.theme.pause();
            this.theme.currentTime = 0;
        }
    }
    
    setVolume(vol) {
        if (this.theme) this.theme.volume = vol;
        for (let key in this.sounds) {
            this.sounds[key].volume = vol * 0.8;
        }
    }
}