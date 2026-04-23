import { CONFIG } from '../config.js';

export class AIController {
    constructor(fighter, opponent, difficulty = 'Normal') {
        this.fighter = fighter;
        this.opponent = opponent;
        this.difficulty = difficulty;
        
        // Core timings
        this.decisionTimer = 0;
        this.reactionBase = this.getReactionTime();
        this.currentReaction = this.reactionBase;
        
        // State machine
        this.state = 'neutral';
        this.stateTimer = 0;
        this.subState = null;
        
        // Advanced profiling
        this.profile = {
            aggression: 0.5,
            jumpHappy: 0.3,
            blockHappy: 0.4,
            parryHappy: 0.15,
            throwHappy: 0.1,
            specialHappy: 0.3,
            favoriteRange: 120,
            favoriteMoves: new Map(),
            lastActions: [],
            wakeUpOption: 'block',
            techThrowRate: 0.3,
            comboBreaker: false
        };
        
        // Move history for pattern recognition
        this.moveHistory = [];
        this.maxHistory = 30;
        
        // Combo system
        this.comboLibrary = this.buildComboLibrary();
        this.activeCombo = null;
        this.comboIndex = 0;
        this.comboTimer = 0;
        
        // Positioning
        this.idealRange = 120;
        this.cornerPressure = false;
        this.antiAirReady = false;
        
        // Difficulty multipliers
        this.setDifficultyParams();
    }
    
    setDifficultyParams() {
        const params = {
            'Easy':   { reactionMult: 1.5, precision: 0.6, aggression: 0.4, comboRate: 0.2, adaptation: 0.3 },
            'Normal': { reactionMult: 1.0, precision: 0.8, aggression: 0.6, comboRate: 0.4, adaptation: 0.6 },
            'Hard':   { reactionMult: 0.7, precision: 0.95, aggression: 0.8, comboRate: 0.6, adaptation: 0.8 },
            'Expert': { reactionMult: 0.5, precision: 1.0, aggression: 0.95, comboRate: 0.8, adaptation: 1.0 }
        };
        const p = params[this.difficulty] || params['Normal'];
        this.reactionMult = p.reactionMult;
        this.precision = p.precision;
        this.aggressionBias = p.aggression;
        this.comboRate = p.comboRate;
        this.adaptationRate = p.adaptation;
    }
    
    getReactionTime() {
        const base = { 'Easy': 0.40, 'Normal': 0.25, 'Hard': 0.16, 'Expert': 0.10 };
        return (base[this.difficulty] || 0.25) * this.reactionMult;
    }
    
    buildComboLibrary() {
        return [
            { name: 'jab string', moves: ['punch', 'punch'], weight: 1.0, condition: (d) => d < 80 },
            { name: 'heavy', moves: ['punch', 'kick'], weight: 0.9, condition: (d) => d < 70 },
            { name: 'special cancel', moves: ['punch', 'special'], weight: 0.7, condition: (d) => d < 90 && this.fighter.mana >= CONFIG.SPECIAL_COST },
            { name: 'kick confirm', moves: ['kick', 'special'], weight: 0.6, condition: (d) => d < 80 && this.fighter.mana >= CONFIG.SPECIAL_COST },
            { name: 'jump in', moves: ['jump', 'kick'], weight: 0.5, condition: (d) => d > 100 && d < 200 },
            { name: 'throw mix', moves: ['dash', 'throw'], weight: 0.4, condition: (d) => d < 60 }
        ];
    }
    
    update(dt) {
        const frameMult = 60;
        
        // Update profiling
        this.updateProfiling(dt);
        
        // Adjust reaction based on situation
        this.currentReaction = this.reactionBase;
        if (this.fighter.health < this.fighter.maxHealth * 0.3) {
            this.currentReaction *= 0.7;
        }
        if (this.opponent.health < this.opponent.maxHealth * 0.25) {
            this.currentReaction *= 0.6;
        }
        
        // Decision timer
        if (this.decisionTimer > 0) {
            this.decisionTimer -= dt * frameMult;
            return;
        }
        this.decisionTimer = this.currentReaction * (0.8 + Math.random() * 0.4);
        
        // Execute active combo
        if (this.activeCombo) {
            this.executeCombo();
            return;
        }
        
        // Main behavior tree
        this.evaluateAndAct();
        
        // Emergency overrides
        this.handleEmergencies();
    }
    
    evaluateAndAct() {
        const dist = this.opponent.x - this.fighter.x;
        const absDist = Math.abs(dist);
        const healthPercent = this.fighter.health / this.fighter.maxHealth;
        const oppHealthPercent = this.opponent.health / this.opponent.maxHealth;
        const canAttack = this.fighter.attackTimer <= 0;
        const canSpecial = this.fighter.mana >= CONFIG.SPECIAL_COST && canAttack;
        
        // Update corner awareness
        const leftCorner = this.fighter.x < 80;
        const rightCorner = this.fighter.x > CONFIG.CANVAS_WIDTH - 80;
        this.cornerPressure = leftCorner || rightCorner;
        
        // Opponent is in corner? apply pressure
        const oppLeftCorner = this.opponent.x < 80;
        const oppRightCorner = this.opponent.x > CONFIG.CANVAS_WIDTH - 80;
        const oppCornered = oppLeftCorner || oppRightCorner;
        
        // Anti-air readiness
        this.antiAirReady = !this.opponent.grounded && this.opponent.vy > 0 && absDist < 150;
        
        // 1. Defensive reactions first (highest priority)
        if (this.opponent.attackActive > 0) {
            this.handleDefense(absDist, canAttack);
            return;
        }
        
        // 2. Anti-air punish
        if (this.antiAirReady && canAttack && absDist < 130) {
            if (Math.random() < 0.8 * this.precision) {
                this.fighter.kick(); // anti-air kick
                return;
            }
        }
        
        // 3. Whiff punish
        if (this.opponent.attackTimer > 0 && this.opponent.attackActive <= 0 && absDist < 100) {
            if (canAttack && Math.random() < 0.7 * this.precision) {
                this.fighter.punch();
                return;
            }
        }
        
        // 4. Throw tech / attempt
        if (this.opponent.throwActive && absDist < 60) {
            if (this.fighter.throwCooldown <= 0 && Math.random() < this.profile.techThrowRate) {
                this.fighter.throwAttempt();
                return;
            }
        }
        if (!this.opponent.throwActive && absDist < 50 && this.fighter.throwCooldown <= 0 && !this.opponent.invulTimer) {
            if (Math.random() < this.profile.throwHappy * (oppCornered ? 1.5 : 1.0)) {
                this.fighter.throwAttempt();
                return;
            }
        }
        
        // 5. Offensive actions
        if (canAttack) {
            // Special move usage
            if (canSpecial && absDist < 140) {
                let specialScore = 0.3;
                if (oppCornered) specialScore += 0.3;
                if (oppHealthPercent < 0.3) specialScore += 0.2;
                if (this.profile.specialHappy > 0.5) specialScore += 0.2;
                if (Math.random() < specialScore * this.aggressionBias) {
                    this.fighter.performSpecial();
                    if (Math.random() < this.comboRate) {
                        this.startCombo('special');
                    }
                    return;
                }
            }
            
            // Basic attacks
            if (absDist < 90) {
                const attackType = this.selectAttack(absDist, oppCornered);
                let success = false;
                if (attackType === 'punch') success = this.fighter.punch();
                else if (attackType === 'kick') success = this.fighter.kick();
                
                if (success && Math.random() < this.comboRate) {
                    this.startCombo(attackType);
                }
                if (success) return;
            }
        }
        
        // 6. Movement and positioning
        this.handleMovement(dist, absDist, oppCornered);
    }
    
    selectAttack(absDist, oppCornered) {
        const scores = { punch: 0.5, kick: 0.5 };
        
        // Range adjustment
        if (absDist < 60) scores.punch += 0.3;
        if (absDist > 70) scores.kick += 0.2;
        
        // Opponent profile adaptation
        if (this.profile.favoriteMoves.get('punch') > 3) scores.kick += 0.2;
        if (this.profile.favoriteMoves.get('kick') > 3) scores.punch += 0.2;
        
        // Randomness scaled by precision
        const total = scores.punch + scores.kick;
        let rand = Math.random() * total;
        return rand < scores.punch ? 'punch' : 'kick';
    }
    
    handleDefense(absDist, canAttack) {
        const oppMove = this.opponent.currentMove;
        const isHeavy = oppMove === 'special' || oppMove === 'ultimate';
        
        // Parry normal attacks, block heavies
        if (!isHeavy && this.fighter.parryCooldown <= 0 && absDist < 100) {
            if (Math.random() < this.profile.parryHappy * this.precision) {
                this.fighter.setParry(true);
                return;
            }
        }
        
        // Block (by doing nothing) or backdash
        if (absDist < 120) {
            // 70% chance to block, 30% to backdash
            if (Math.random() < 0.7) {
                this.fighter.stopMove();
                this.fighter.setParry(false);
            } else {
                this.fighter.vx = -this.fighter.facing * this.fighter.speed * 1.5;
            }
        }
        
        // Counter-poke after block (simulate frame trap punish)
        if (this.opponent.attackActive <= 0 && this.opponent.attackTimer > 5 && absDist < 70 && canAttack) {
            if (Math.random() < 0.5) {
                this.fighter.punch();
            }
        }
    }
    
    handleMovement(dist, absDist, oppCornered) {
        // Desired range
        let targetRange = this.idealRange;
        if (oppCornered) targetRange = 70;
        if (this.cornerPressure) targetRange = 140;
        if (this.antiAirReady) targetRange = 100;
        
        if (absDist > targetRange + 20) {
            // Approach
            if (dist > 0) this.fighter.moveRight();
            else this.fighter.moveLeft();
            
            // Dash
            if (absDist > 180 && this.fighter.grounded && Math.random() < 0.15) {
                this.fighter.vx = this.fighter.facing * this.fighter.speed * 2.0;
            }
            
            // Jump in
            if (absDist < 200 && absDist > 120 && this.fighter.grounded && !this.antiAirReady) {
                if (Math.random() < this.profile.jumpHappy * 0.3) {
                    this.fighter.jump();
                }
            }
        } else if (absDist < targetRange - 20) {
            // Retreat
            if (dist > 0) this.fighter.moveLeft();
            else this.fighter.moveRight();
            
            // Backdash
            if (this.fighter.grounded && Math.random() < 0.1) {
                this.fighter.vx = -this.fighter.facing * this.fighter.speed * 2.0;
            }
        } else {
            // Footsies: small adjustments
            if (Math.random() < 0.3) {
                if (dist > 0) this.fighter.moveRight();
                else this.fighter.moveLeft();
            } else {
                this.fighter.stopMove();
            }
        }
    }
    
    startCombo(startingMove) {
        const dist = Math.abs(this.opponent.x - this.fighter.x);
        const valid = this.comboLibrary.filter(c => 
            c.moves[0] === startingMove && 
            (!c.condition || c.condition(dist))
        );
        if (valid.length === 0) return;
        
        // Weighted selection
        const totalWeight = valid.reduce((sum, c) => sum + c.weight, 0);
        let rand = Math.random() * totalWeight;
        let selected = valid[0];
        for (let c of valid) {
            rand -= c.weight;
            if (rand <= 0) { selected = c; break; }
        }
        
        this.activeCombo = selected;
        this.comboIndex = 1;
        this.comboTimer = 15; // frames to continue
    }
    
    executeCombo() {
        if (!this.activeCombo || this.comboIndex >= this.activeCombo.moves.length) {
            this.activeCombo = null;
            return;
        }
        
        const move = this.activeCombo.moves[this.comboIndex];
        const canAttack = this.fighter.attackTimer <= 0;
        const canSpecial = this.fighter.mana >= CONFIG.SPECIAL_COST && canAttack;
        
        // Check if combo still viable (opponent not invulnerable)
        if (this.opponent.invulTimer > 0) {
            this.activeCombo = null;
            return;
        }
        
        let success = false;
        switch (move) {
            case 'jump':
                if (this.fighter.grounded) { this.fighter.jump(); success = true; }
                break;
            case 'punch':
                if (canAttack) success = this.fighter.punch();
                break;
            case 'kick':
                if (canAttack) success = this.fighter.kick();
                break;
            case 'special':
                if (canSpecial) success = this.fighter.performSpecial();
                break;
            case 'throw':
                if (this.fighter.throwCooldown <= 0) success = this.fighter.throwAttempt();
                break;
            case 'dash':
                this.fighter.vx = this.fighter.facing * this.fighter.speed * 2.0;
                success = true;
                break;
        }
        
        if (success) {
            this.comboIndex++;
            this.comboTimer = 15;
        } else {
            this.comboTimer--;
            if (this.comboTimer <= 0) {
                this.activeCombo = null;
            }
        }
    }
    
    handleEmergencies() {
        // Low health: more defensive
        if (this.fighter.health < this.fighter.maxHealth * 0.2) {
            if (Math.random() < 0.6) {
                this.fighter.setParry(true);
            }
        }
        
        // Opponent about to die: all-in
        if (this.opponent.health < this.opponent.maxHealth * 0.15) {
            if (this.fighter.mana >= CONFIG.SPECIAL_COST && this.fighter.attackTimer <= 0) {
                this.fighter.performSpecial();
            }
        }
        
        // Wake-up reversal
        if (this.fighter.state === 'hurt' && this.fighter.invulTimer < 5) {
            if (this.profile.wakeUpOption === 'throw' && this.fighter.throwCooldown <= 0) {
                this.fighter.throwAttempt();
            } else if (this.profile.wakeUpOption === 'special' && this.fighter.mana >= CONFIG.SPECIAL_COST) {
                this.fighter.performSpecial();
            } else {
                this.fighter.setParry(true);
            }
        }
    }
    
    updateProfiling(dt) {
        const opp = this.opponent;
        
        // Record opponent's moves
        if (opp.currentMove) {
            const move = opp.currentMove;
            this.moveHistory.push({ move, time: performance.now(), dist: Math.abs(opp.x - this.fighter.x) });
            if (this.moveHistory.length > this.maxHistory) this.moveHistory.shift();
            
            const count = this.profile.favoriteMoves.get(move) || 0;
            this.profile.favoriteMoves.set(move, count + 1);
        }
        
        // Update tendencies with exponential moving average
        const alpha = 0.05 * this.adaptationRate;
        
        // Aggression: how often opponent attacks when in range
        const inRange = Math.abs(opp.x - this.fighter.x) < 150;
        if (inRange && opp.attackActive > 0) {
            this.profile.aggression = this.profile.aggression * (1 - alpha) + alpha * 1;
        } else if (inRange) {
            this.profile.aggression = this.profile.aggression * (1 - alpha);
        }
        
        // Jump tendency
        if (!opp.grounded) {
            this.profile.jumpHappy = this.profile.jumpHappy * (1 - alpha) + alpha * 1;
        } else {
            this.profile.jumpHappy = this.profile.jumpHappy * (1 - alpha);
        }
        
        // Block tendency (when opponent stops moving while we attack)
        if (this.fighter.attackActive > 0 && opp.attackTimer <= 0 && opp.state !== 'hurt') {
            this.profile.blockHappy = this.profile.blockHappy * (1 - alpha) + alpha * 1;
        } else {
            this.profile.blockHappy = this.profile.blockHappy * (1 - alpha);
        }
        
        // Parry tendency
        if (opp.parryActive) {
            this.profile.parryHappy = this.profile.parryHappy * (1 - alpha) + alpha * 1;
        } else {
            this.profile.parryHappy = this.profile.parryHappy * (1 - alpha);
        }
        
        // Throw tendency
        if (opp.throwActive) {
            this.profile.throwHappy = this.profile.throwHappy * (1 - alpha) + alpha * 1;
        } else {
            this.profile.throwHappy = this.profile.throwHappy * (1 - alpha);
        }
        
        // Special tendency
        if (opp.currentMove === 'special') {
            this.profile.specialHappy = this.profile.specialHappy * (1 - alpha) + alpha * 1;
        } else {
            this.profile.specialHappy = this.profile.specialHappy * (1 - alpha);
        }
        
        // Adaptive ideal range
        if (this.moveHistory.length > 10) {
            const recent = this.moveHistory.slice(-10);
            const avgDist = recent.reduce((sum, m) => sum + (m.dist || 120), 0) / recent.length;
            this.idealRange = Math.min(200, Math.max(80, avgDist * 1.2));
        }
        
        // Wake-up option learning
        if (opp.state === 'hurt' && opp.invulTimer < 5) {
            // observe what opponent does on wake-up
            if (opp.currentMove === 'throw') this.profile.wakeUpOption = 'throw';
            else if (opp.currentMove === 'special') this.profile.wakeUpOption = 'special';
            else this.profile.wakeUpOption = 'block';
        }
        
        // Tech throw rate adaptation
        if (opp.throwActive) {
            this.profile.techThrowRate = Math.min(1, this.profile.techThrowRate + alpha * 2);
        } else {
            this.profile.techThrowRate = Math.max(0.2, this.profile.techThrowRate - alpha);
        }
    }
}