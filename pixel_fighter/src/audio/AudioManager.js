export class AudioManager {
    constructor() {
        this.musicVolume = 0.7;
        this.sfxVolume = 0.8;
        this.currentMusic = null;
    }
    
    playMusic(track) {
        // Placeholder – will be implemented with actual audio
        console.log(`Playing music: ${track}`);
    }
    
    playSFX(sfx) {
        console.log(`Playing SFX: ${sfx}`);
    }
    
    setMusicVolume(vol) {
        this.musicVolume = Math.max(0, Math.min(1, vol));
    }
    
    setSFXVolume(vol) {
        this.sfxVolume = Math.max(0, Math.min(1, vol));
    }
}