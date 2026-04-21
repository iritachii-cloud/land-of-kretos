// js/classes/Game.js
import { Fighter } from './Fighter.js';
import { GAME_CONFIG } from '../config.js';

export class Game {
  constructor(canvas, ctx) {
    this.canvas = canvas;
    this.ctx = ctx;
    this.groundY = GAME_CONFIG.GROUND_Y;
    this.state = 'selection';
    this.player1 = null;
    this.player2 = null;
    this.aiEnabled = true;
    this.stage = null;
    this.winner = null;
    this.keys = {};
    this.stageImage = new Image();
  }

  initMatch(p1Hero, p2Hero, aiEnabled, stage) {
    this.player1 = new Fighter(p1Hero, 'left', false);
    this.player2 = new Fighter(p2Hero, 'right', aiEnabled);
    this.player1.y = this.groundY - this.player1.height;
    this.player2.y = this.groundY - this.player2.height;
    this.aiEnabled = aiEnabled;
    this.stage = stage;
    this.stageImage.src = stage.background;
    this.state = 'fighting';
  }

  update(deltaTime) {
    if (this.state !== 'fighting') return;
    this.player1.update(this.player2, deltaTime, this.groundY);
    this.player2.update(this.player1, deltaTime, this.groundY);
    
    if (this.player1.health <= 0) {
      this.state = 'gameover';
      this.winner = 'p2';
    } else if (this.player2.health <= 0) {
      this.state = 'gameover';
      this.winner = 'p1';
    }
  }

  processInput(dt) {
    if (this.state !== 'fighting') return;
    const p1 = this.player1;
    const p2 = this.player2;
    
    // Player 1 (WASD + F,G,H,V)
    if (!p1.isAI) {
      if (this.keys['KeyA']) { p1.vx = -p1.speed * dt; if (p1.state !== 'walk' && p1.attackTimer <= 0) p1.state = 'walk'; }
      if (this.keys['KeyD']) { p1.vx = p1.speed * dt; if (p1.state !== 'walk' && p1.attackTimer <= 0) p1.state = 'walk'; }
      if (this.keys['KeyW'] && p1.grounded) p1.vy = GAME_CONFIG.JUMP_FORCE;
      if (this.keys['KeyF']) p1.punch();
      if (this.keys['KeyG']) p1.kick();
      if (this.keys['KeyH']) p1.performSpecial();
      if (this.keys['KeyV']) p1.parry();
    }
    
    // Player 2 (Arrows + , . / B) if not AI
    if (!p2.isAI) {
      if (this.keys['ArrowLeft']) { p2.vx = -p2.speed * dt; if (p2.state !== 'walk' && p2.attackTimer <= 0) p2.state = 'walk'; }
      if (this.keys['ArrowRight']) { p2.vx = p2.speed * dt; if (p2.state !== 'walk' && p2.attackTimer <= 0) p2.state = 'walk'; }
      if (this.keys['ArrowUp'] && p2.grounded) p2.vy = GAME_CONFIG.JUMP_FORCE;
      if (this.keys['Comma']) p2.punch();
      if (this.keys['Period']) p2.kick();
      if (this.keys['Slash']) p2.performSpecial();
      if (this.keys['KeyB']) p2.parry();
    }
  }

  draw(ctx) {
    // Stage background
    if (this.stageImage.complete && this.stageImage.naturalWidth > 0) {
      ctx.drawImage(this.stageImage, 0, 0, GAME_CONFIG.CANVAS_WIDTH, GAME_CONFIG.CANVAS_HEIGHT);
    } else {
      // Fallback gradient
      const grad = ctx.createLinearGradient(0, 0, 0, GAME_CONFIG.CANVAS_HEIGHT);
      grad.addColorStop(0, '#2a344a');
      grad.addColorStop(1, '#1a1e2f');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, GAME_CONFIG.CANVAS_WIDTH, GAME_CONFIG.CANVAS_HEIGHT);
    }
    
    // Ground line
    ctx.fillStyle = '#5a4a3a';
    ctx.fillRect(0, this.groundY, GAME_CONFIG.CANVAS_WIDTH, 5);
    
    if (this.player1) this.player1.draw(ctx);
    if (this.player2) this.player2.draw(ctx);
    
    this.drawHUD(ctx);
    
    if (this.state === 'gameover') {
      ctx.font = 'bold 32px "Courier New"';
      ctx.fillStyle = '#FFD700';
      ctx.textAlign = 'center';
      const winnerName = this.winner === 'p1' ? this.player1.hero.name : this.player2.hero.name;
      ctx.fillText(`${winnerName} WINS!`, GAME_CONFIG.CANVAS_WIDTH/2, 250);
      ctx.textAlign = 'left';
    }
  }

  drawHUD(ctx) {
    if (!this.player1 || !this.player2) return;
    // Health bars
    this.drawBar(ctx, 30, 20, 250, 20, this.player1.health / this.player1.maxHealth, '#c44');
    this.drawBar(ctx, GAME_CONFIG.CANVAS_WIDTH - 280, 20, 250, 20, this.player2.health / this.player2.maxHealth, '#44c');
    // Mana bars
    this.drawBar(ctx, 30, 45, 200, 10, this.player1.mana / GAME_CONFIG.MAX_MANA, '#6cf');
    this.drawBar(ctx, GAME_CONFIG.CANVAS_WIDTH - 230, 45, 200, 10, this.player2.mana / GAME_CONFIG.MAX_MANA, '#6cf');
    // Names
    ctx.font = 'bold 14px "Courier New"';
    ctx.fillStyle = '#fff';
    ctx.fillText(this.player1.hero.name, 30, 15);
    ctx.textAlign = 'right';
    ctx.fillText(this.player2.hero.name, GAME_CONFIG.CANVAS_WIDTH - 30, 15);
    ctx.textAlign = 'left';
  }

  drawBar(ctx, x, y, w, h, percent, color) {
    ctx.fillStyle = '#111';
    ctx.fillRect(x, y, w, h);
    ctx.fillStyle = color;
    ctx.fillRect(x+2, y+2, Math.max(0, (w-4)*percent), h-4);
  }
}