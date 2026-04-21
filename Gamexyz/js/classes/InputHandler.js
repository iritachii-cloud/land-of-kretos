// js/classes/InputHandler.js
export class InputHandler {
  constructor() {
    this.keys = {};
    this.init();
  }

  init() {
    window.addEventListener('keydown', (e) => {
      const code = e.code;
      // Prevent default for game keys
      if ([
        'KeyW','KeyA','KeyS','KeyD',
        'KeyF','KeyG','KeyH','KeyV',
        'ArrowUp','ArrowDown','ArrowLeft','ArrowRight',
        'Comma','Period','Slash','KeyB',
        'Space'
      ].includes(code)) {
        e.preventDefault();
      }
      this.keys[code] = true;
    });

    window.addEventListener('keyup', (e) => {
      const code = e.code;
      if ([
        'KeyW','KeyA','KeyS','KeyD',
        'KeyF','KeyG','KeyH','KeyV',
        'ArrowUp','ArrowDown','ArrowLeft','ArrowRight',
        'Comma','Period','Slash','KeyB',
        'Space'
      ].includes(code)) {
        e.preventDefault();
      }
      this.keys[code] = false;
    });

    window.addEventListener('contextmenu', (e) => e.preventDefault());
  }

  getKeys() {
    return this.keys;
  }
}