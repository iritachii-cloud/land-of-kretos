export class AIController {
    constructor(fighter, opponent, difficulty = 'Normal') {
        this.fighter = fighter;
        this.opponent = opponent;
        this.difficulty = difficulty;
        this.decisionTimer = 0;
        this.reactionDelay = this.getReactionDelay();
        this.aggression = this.getAggression();
    }
    
    getReactionDelay() {
        const delays = { 'Newbie': 40, 'Beginner': 30, 'Normal': 20, 'Hard': 12, 'Expert': 8, 'Hellmode': 4 };
        return delays[this.difficulty] || 20;
    }
    
    getAggression() {
        const aggro = { 'Newbie': 0.3, 'Beginner': 0.5, 'Normal': 0.7, 'Hard': 0.85, 'Expert': 0.95, 'Hellmode': 1.0 };
        return aggro[this.difficulty] || 0.7;
    }
    
    update(deltaTime) {
        this.decisionTimer--;
        if (this.decisionTimer > 0) return;
        this.decisionTimer = this.reactionDelay;
        
        const dist = Math.abs(this.fighter.x - this.opponent.x);
        const inputState = {
            left: false, right: false, jump: false, crouch: false,
            punch: false, kick: false, charge: false, special: false
        };
        
        // Movement AI
        if (dist > 150) {
            // Move towards opponent
            if (this.fighter.x < this.opponent.x) inputState.right = true;
            else inputState.left = true;
        } else if (dist < 80) {
            // Back away
            if (this.fighter.x < this.opponent.x) inputState.left = true;
            else inputState.right = true;
        }
        
        // Random jump
        if (Math.random() < 0.02 * this.aggression) {
            inputState.jump = true;
        }
        
        // Attack decisions
        if (dist < 120 && this.fighter.attackTimer === 0) {
            if (Math.random() < 0.1 * this.aggression) {
                if (Math.random() < 0.5) inputState.punch = true;
                else inputState.kick = true;
            }
            
            // Special moves for higher difficulties
            if (this.difficulty !== 'Newbie' && this.fighter.mana >= 50 && Math.random() < 0.05) {
                inputState.special = true;
            }
            
            // Charging
            if (this.difficulty !== 'Newbie' && dist > 200 && Math.random() < 0.1) {
                inputState.charge = true;
            }
        }
        
        this.fighter.handleInput(inputState);
    }
}