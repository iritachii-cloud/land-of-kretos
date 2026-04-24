export class UltimateSystem {
    constructor(fighter) {
        this.fighter = fighter;
        this.usesLeft = 3;
        this.cooldownRemaining = 0;
        this.cooldownDuration = 1200;   // 20 seconds in frames at 60 fps
    }

    get ready() {
        return (
            this.usesLeft > 0 &&
            this.cooldownRemaining <= 0 &&
            this.fighter.superMana >= this.fighter.maxMana
        );
    }

    update(dt) {
        if (this.cooldownRemaining > 0) {
            this.cooldownRemaining -= dt * 60;
            if (this.cooldownRemaining < 0) this.cooldownRemaining = 0;
        }
    }

    activate(opponent) {
        if (!this.ready) return false;

        this.fighter.mana = 0;
        this.fighter.superMana = 0;
        this.usesLeft--;
        this.cooldownRemaining = this.cooldownDuration;

        window.game?.soundManager?.play('ultimate');
        window.game?.sceneManager?.current?.shake(20, 0.5);

        // Use hero custom ultimate handler
        if (this.fighter.heroCustom?.ultimate?.handler) {
            this.fighter.heroCustom.ultimate.handler(this.fighter, opponent);
            return true;
        }

        // Default behavior (fallback)
        const totalDamage = 60;
        const hits = 5;
        const dmgPerHit = Math.floor(totalDamage / hits);
        if (this.fighter.role === 'Mage' || this.fighter.role === 'Marksman') {
            for (let i = 0; i < hits; i++) {
                this.fighter.launchHomingMissile(opponent, dmgPerHit, i);
            }
        } else {
            this.fighter.startUltimateBarrage(opponent, dmgPerHit);
        }
        return true;
    }

    resetForRound() {
        this.usesLeft = 3;
        this.cooldownRemaining = 0;
    }
}