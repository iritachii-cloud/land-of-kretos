// js/utils/audio.js
export class AudioManager {
  constructor() {
    this.sounds = {};
    this.music = null;
  }

  loadSound(name, src) {
    this.sounds[name] = new Howl({ src: [src] });
  }

  playSound(name) {
    if (this.sounds[name]) this.sounds[name].play();
  }

  playMusic(src, loop = true) {
    if (this.music) this.music.stop();
    this.music = new Howl({ src: [src], loop, volume: 0.4 });
    this.music.play();
  }

  stopMusic() {
    if (this.music) this.music.stop();
  }
}