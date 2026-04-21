import { Scene } from './Scene.js';
import { Fighter } from '../entities/Fighter.js';
import { AIController } from '../entities/AI.js';
import { getHeroFighterStats } from '../data/heroes.js';
import { getStageById } from '../data/stages.js';
import { HealthBar } from '../ui/HealthBar.js';

export class BattleScene extends Scene {
    constructor(game) {
        super(game);
        this.p1 = null;
        this.p2 = null;
        this.ai1 = null;
        this.ai2 = null;
        this.stage = null;
        this.timer = 0;
        this.roundTime = 0;
        this.round = 1;
        this.p1Wins = 0;
        this.p2Wins = 0;
        this.maxRounds = 3;
        this.state = 'fighting';
        this.roundEndTimer = 0;
        this.winner = null;
        this.p1HealthBar = null;
        this.p2HealthBar = null;
        this.p1ManaBar = null;
        this.p2ManaBar = null;

        this.p1PrevJump = false;
        this.p2PrevJump = false;

        this.paused = false;
        this.pauseSelected = 0;
        this.pauseOptions = ['Resume', 'Character Select', 'Main Menu'];
    }

    enter() {
        const config = this.game.battleConfig;
        if (!config) {
            this.game.sceneManager.switchTo('menu');
            return;
        }
        const p1Stats = getHeroFighterStats(config.p1);
        const p2Stats = getHeroFighterStats(config.p2);

        this.p1 = new Fighter(config.p1, p1Stats, 'p1');
        this.p2 = new Fighter(config.p2, p2Stats, 'p2');

        if (config.mode === 'pvai') {
            this.ai2 = new AIController(this.p2, this.p1, config.settings.difficulty);
        } else if (config.mode === 'aivai') {
            this.ai1 = new AIController(this.p1, this.p2, config.settings.difficulty);
            this.ai2 = new AIController(this.p2, this.p1, config.settings.difficulty);
        }

        this.stage = getStageById(config.stageId);
        this.maxRounds = config.settings.rounds;
        this.timer = config.settings.timer;
        this.roundTime = this.timer > 0 ? this.timer : 0;
        this.round = 1;
        this.p1Wins = 0;
        this.p2Wins = 0;
        this.state = 'fighting';
        this.paused = false;

        this.p1.x = 150;
        this.p1.y = 580;
        this.p2.x = this.game.canvas.width - 150;
        this.p2.y = 580;
        this.p1.facing = 1;
        this.p2.facing = -1;

        this.p1HealthBar = new HealthBar(50, 30, 400, 25, this.p1.maxHealth);
        this.p2HealthBar = new HealthBar(this.game.canvas.width - 450, 30, 400, 25, this.p2.maxHealth);
        this.p1ManaBar = new HealthBar(50, 60, 300, 15, this.p1.maxMana, '#4a90e2');
        this.p2ManaBar = new HealthBar(this.game.canvas.width - 350, 60, 300, 15, this.p2.maxMana, '#4a90e2');

        this.p1PrevJump = false;
        this.p2PrevJump = false;
    }

    update(deltaTime) {
        if (this.paused) return;

        if (this.state === 'fighting') {
            if (this.timer > 0) {
                this.roundTime -= deltaTime;
                if (this.roundTime <= 0) {
                    this.endRound('timeout');
                    return;
                }
            }

            if (this.ai1) this.ai1.update(deltaTime);
            if (this.ai2) this.ai2.update(deltaTime);

            this.p1.update(deltaTime, this.game.canvas.width);
            this.p2.update(deltaTime, this.game.canvas.width);

            // ===== COLLISION RESOLUTION =====
            const p1 = this.p1;
            const p2 = this.p2;
            const fighterWidth = 55;
            const minDistance = fighterWidth; // centre-to-centre distance
            
            const dx = p2.x - p1.x;
            const dist = Math.abs(dx);
            
            if (dist < minDistance) {
                const overlap = minDistance - dist;
                const pushDir = dx > 0 ? -1 : 1;
                
                // Only push if neither is in hitstun (so knockback still works)
                if (p1.hitTimer <= 0 && p2.hitTimer <= 0) {
                    p1.x -= pushDir * overlap * 0.5;
                    p2.x += pushDir * overlap * 0.5;
                    
                    // Stop horizontal movement to prevent sliding through
                    p1.vx = 0;
                    p2.vx = 0;
                }
            }
            
            // Re-clamp positions after collision
            p1.x = Math.max(40, Math.min(this.game.canvas.width - 40, p1.x));
            p2.x = Math.max(40, Math.min(this.game.canvas.width - 40, p2.x));

            this.checkCombat();

            if (this.p1.health <= 0) {
                this.endRound('p2');
            } else if (this.p2.health <= 0) {
                this.endRound('p1');
            }

            this.p1HealthBar.setValue(this.p1.health);
            this.p2HealthBar.setValue(this.p2.health);
            this.p1ManaBar.setValue(this.p1.mana);
            this.p2ManaBar.setValue(this.p2.mana);
        } else if (this.state === 'roundEnd') {
            this.roundEndTimer -= deltaTime;
            if (this.roundEndTimer <= 0) {
                if (this.p1Wins >= Math.ceil(this.maxRounds/2) || this.p2Wins >= Math.ceil(this.maxRounds/2)) {
                    this.state = 'matchEnd';
                    this.winner = this.p1Wins > this.p2Wins ? 'p1' : 'p2';
                    this.game.battleConfig.winner = this.winner;
                } else {
                    this.resetRound();
                }
            }
        }
    }

    checkCombat() {
        const p1 = this.p1;
        const p2 = this.p2;
        if (!p1 || !p2) return;

        const dist = Math.abs(p1.x - p2.x);
        const attackRange = 85;

        if (p1.canHit()) {
            if (dist < attackRange) {
                const facingCorrect = (p1.facing === 1 && p2.x > p1.x) || (p1.facing === -1 && p2.x < p1.x);
                if (facingCorrect) {
                    const damage = p1.calculateDamage(p2);
                    p2.takeDamage(damage, p1.x);
                    p1.registerHit();
                }
            }
        }

        if (p2.canHit()) {
            if (dist < attackRange) {
                const facingCorrect = (p2.facing === 1 && p1.x > p2.x) || (p2.facing === -1 && p1.x < p2.x);
                if (facingCorrect) {
                    const damage = p2.calculateDamage(p1);
                    p1.takeDamage(damage, p2.x);
                    p2.registerHit();
                }
            }
        }
    }

    endRound(winner) {
        if (winner === 'p1') this.p1Wins++;
        else if (winner === 'p2') this.p2Wins++;
        else {
            if (this.p1.health > this.p2.health) this.p1Wins++;
            else if (this.p2.health > this.p1.health) this.p2Wins++;
        }
        this.state = 'roundEnd';
        this.roundEndTimer = 1.5;
    }

    resetRound() {
        this.round++;
        this.p1.reset();
        this.p2.reset();
        this.p1.x = 150;
        this.p2.x = this.game.canvas.width - 150;
        this.p1.facing = 1;
        this.p2.facing = -1;
        this.roundTime = this.timer > 0 ? this.timer : 0;
        this.state = 'fighting';
    }

    render(ctx) {
        ctx.fillStyle = '#1a122a';
        ctx.fillRect(0, 0, this.game.canvas.width, this.game.canvas.height);
        ctx.fillStyle = '#3a2a1a';
        ctx.fillRect(0, 580, this.game.canvas.width, 8);
        ctx.fillStyle = '#5a4a3a';
        ctx.fillRect(0, 588, this.game.canvas.width, 4);

        this.p1.render(ctx);
        this.p2.render(ctx);
        this.renderUI(ctx);

        if (this.state === 'roundEnd') {
            ctx.font = 'bold 48px "Courier New", Courier, monospace';
            ctx.fillStyle = '#fff';
            ctx.textAlign = 'center';
            ctx.fillText(`ROUND ${this.round} OVER`, this.game.canvas.width/2, 200);
        }

        if (this.state === 'matchEnd') {
            ctx.font = 'bold 64px "Courier New", Courier, monospace';
            ctx.fillStyle = '#ffcc00';
            ctx.textAlign = 'center';
            ctx.fillText(`${this.winner === 'p1' ? 'P1' : 'P2'} WINS!`, this.game.canvas.width/2, 300);
            ctx.font = '24px monospace';
            ctx.fillStyle = '#fff';
            ctx.fillText('Press ENTER to continue', this.game.canvas.width/2, 400);
        }

        if (this.paused) {
            ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
            ctx.fillRect(0, 0, this.game.canvas.width, this.game.canvas.height);
            ctx.font = 'bold 48px "Courier New", Courier, monospace';
            ctx.fillStyle = '#fff';
            ctx.textAlign = 'center';
            ctx.fillText('PAUSED', this.game.canvas.width/2, 200);

            const startY = 320;
            this.pauseOptions.forEach((opt, i) => {
                const y = startY + i * 60;
                ctx.fillStyle = i === this.pauseSelected ? '#ffaa00' : '#334466';
                ctx.fillRect(this.game.canvas.width/2 - 150, y - 20, 300, 40);
                ctx.strokeStyle = '#fff';
                ctx.lineWidth = 2;
                ctx.strokeRect(this.game.canvas.width/2 - 150, y - 20, 300, 40);
                ctx.font = '28px monospace';
                ctx.fillStyle = '#fff';
                ctx.fillText(opt, this.game.canvas.width/2, y + 8);
            });
            ctx.font = '18px monospace';
            ctx.fillStyle = '#aaa';
            ctx.fillText('↑↓ to select, ENTER to confirm, ESC to resume', this.game.canvas.width/2, 520);
        }
    }

    renderUI(ctx) {
        if (this.timer > 0) {
            const seconds = Math.ceil(this.roundTime);
            ctx.font = 'bold 32px "Courier New", Courier, monospace';
            ctx.fillStyle = '#fff';
            ctx.textAlign = 'center';
            ctx.fillText(`${seconds}`, this.game.canvas.width/2, 50);
        } else {
            ctx.font = 'bold 32px "Courier New", Courier, monospace';
            ctx.fillStyle = '#fff';
            ctx.textAlign = 'center';
            ctx.fillText('∞', this.game.canvas.width/2, 50);
        }

        ctx.font = '24px monospace';
        ctx.fillText(`Round ${this.round} / ${this.maxRounds}`, this.game.canvas.width/2, 90);

        for (let i = 0; i < this.maxRounds; i++) {
            const x = this.game.canvas.width/2 - 100 + i * 50;
            const y = 120;
            ctx.fillStyle = i < this.p1Wins ? '#4a90e2' : '#333';
            ctx.beginPath();
            ctx.arc(x, y, 10, 0, Math.PI*2);
            ctx.fill();
            ctx.fillStyle = i < this.p2Wins ? '#e24a4a' : '#333';
            ctx.beginPath();
            ctx.arc(x + 200, y, 10, 0, Math.PI*2);
            ctx.fill();
        }

        this.p1HealthBar.render(ctx);
        this.p2HealthBar.render(ctx);
        this.p1ManaBar.render(ctx);
        this.p2ManaBar.render(ctx);

        ctx.font = '20px "Courier New", Courier, monospace';
        ctx.fillStyle = '#4a90e2';
        ctx.textAlign = 'left';
        ctx.fillText(this.p1.hero.name, 50, 20);
        ctx.fillStyle = '#e24a4a';
        ctx.textAlign = 'right';
        ctx.fillText(this.p2.hero.name, this.game.canvas.width - 50, 20);
    }

    handleInput(event) {
        if (event.type !== 'keydown') return;

        // Debug heal (Ctrl+Space)
        if (event.code === 'Space' && event.ctrlKey) {
            if (this.p1) {
                this.p1.health = this.p1.maxHealth;
                this.p1.mana = this.p1.maxMana;
            }
            if (this.p2) {
                this.p2.health = this.p2.maxHealth;
                this.p2.mana = this.p2.maxMana;
            }
            event.preventDefault();
            return;
        }

        if (event.code === 'Escape') {
            if (this.state === 'matchEnd') return;
            this.paused = !this.paused;
            this.pauseSelected = 0;
            event.preventDefault();
            return;
        }

        if (this.paused) {
            if (event.code === 'ArrowUp') {
                this.pauseSelected = (this.pauseSelected - 1 + this.pauseOptions.length) % this.pauseOptions.length;
            } else if (event.code === 'ArrowDown') {
                this.pauseSelected = (this.pauseSelected + 1) % this.pauseOptions.length;
            } else if (event.code === 'Enter') {
                const action = this.pauseOptions[this.pauseSelected];
                if (action === 'Resume') {
                    this.paused = false;
                } else if (action === 'Character Select') {
                    this.game.sceneManager.switchTo('selection');
                } else if (action === 'Main Menu') {
                    this.game.sceneManager.switchTo('menu');
                }
            } else if (event.code === 'Escape') {
                this.paused = false;
            }
            return;
        }

        if (this.state === 'matchEnd') {
            if (event.code === 'Enter') {
                this.game.sceneManager.switchTo('win');
            }
            return;
        }

        if (this.state !== 'fighting') return;

        const input = this.game.inputHandler;
        if (!input) return;

        const p1State = input.getPlayerState('p1');
        const p2State = input.getPlayerState('p2');

        // Handle P1 input (if not AI)
        if (!this.ai1) {
            const jumpPressed = p1State.jump;
            this.p1.handleInput(p1State, jumpPressed, this.p1PrevJump);
            this.p1PrevJump = jumpPressed;
        }

        // Handle P2 input (if not AI)
        if (!this.ai2) {
            const jumpPressed = p2State.jump;
            this.p2.handleInput(p2State, jumpPressed, this.p2PrevJump);
            this.p2PrevJump = jumpPressed;
        }
    }
}