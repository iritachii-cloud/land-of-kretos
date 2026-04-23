export class ComboManager {
    constructor(combos, windowMs) {
        this.combos = combos;
        this.window = windowMs;
        this.buffer = [];
        this.lastTime = 0;
    }
    registerInput(move) {
        const now = performance.now();
        if (now - this.lastTime > this.window) this.buffer = [];
        this.buffer.push(move);
        this.lastTime = now;
        for (let combo of this.combos) {
            if (this.matches(this.buffer, combo.sequence)) {
                this.buffer = [];
                return combo.specialId;
            }
        }
        return null;
    }
    matches(buffer, seq) {
        if (buffer.length < seq.length) return false;
        const recent = buffer.slice(-seq.length);
        return recent.every((v,i) => v === seq[i]);
    }
    reset() { this.buffer = []; this.lastTime = 0; }
}