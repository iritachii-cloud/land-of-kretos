// js/classes/ComboManager.js
export class ComboManager {
  constructor(comboDefinitions = [], comboWindow = 600) {
    this.definitions = comboDefinitions;
    this.comboWindow = comboWindow;
    this.inputBuffer = [];
    this.lastInputTime = 0;
  }

  registerInput(moveType) {
    const now = performance.now();
    if (now - this.lastInputTime > this.comboWindow) {
      this.inputBuffer = [];
    }
    this.inputBuffer.push(moveType);
    this.lastInputTime = now;

    // Check for combo matches (exact sequence)
    for (const def of this.definitions) {
      if (this.matches(this.inputBuffer, def.sequence)) {
        this.inputBuffer = []; // consume buffer
        return def.specialId;
      }
    }
    return null;
  }

  matches(buffer, sequence) {
    if (buffer.length < sequence.length) return false;
    const recent = buffer.slice(-sequence.length);
    return recent.every((val, idx) => val === sequence[idx]);
  }

  reset() {
    this.inputBuffer = [];
    this.lastInputTime = 0;
  }
}