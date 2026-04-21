// js/classes/Fighter.js
import { Sprite } from './Sprite.js';
import { ComboManager } from './ComboManager.js';
import { GAME_CONFIG } from '../config.js';

export class Fighter {
  constructor(heroData, side, isAI = false) {
    this.hero = heroData;
    this.side = side;
    this.isAI = isAI;
    
    // Stats
    this.maxHealth = heroData.health;
    this.health = this.maxHealth;
    this.maxMana = GAME_CONFIG.MAX_MANA;
    this.mana = this.maxMana;
    this.speed = heroData.speed || GAME_CONFIG.WALK_SPEED;
    this.attackPower = heroData.attack;
    this.specialPower = heroData.specialPower;
    
    // Position & physics
    this.width = GAME_CONFIG.PLAYER_WIDTH;
    this.height = GAME_CONFIG.PLAYER_HEIGHT;
    this.x = side === 'left' ? 150 : GAME_CONFIG.CANVAS_WIDTH - 150 - this.width;
    this.y = 0;
    this.vx = 0;
    this.vy = 0;
    this.grounded = false;
    this.facing = side === 'left' ? 1 : -1;
    
    // Combat state
    this.state = 'idle'; // idle, walk, punch, kick, special, parry, hurt
    this.attackTimer = 0;
    this.attackActive = 0;
    this.currentMove = null;
    this.hitGiven = false;
    this.invulnerable = 0;
    this.parryActive = false;
    this.parryTimer = 0;
    
    // Combo system
    this.comboManager = new ComboManager(heroData.combos || [], GAME_CONFIG.COMBO_WINDOW);
    
    // Sprite
    this.sprite = new Sprite(heroData.spriteData);
    this.sprite.facing = this.facing;
    
    // AI
    this.aiDecisionTimer = 0;
  }

  update(opponent, deltaTime, groundY) {
    const dt = deltaTime;
    
    // Timers
    if (this.attackTimer > 0) this.attackTimer -= dt;
    if (this.attackActive > 0) {
      this.attackActive -= dt;
      if (this.attackActive <= 0) {
        this.currentMove = null;
        this.hitGiven = false;
        if (this.state !== 'hurt') this.state = 'idle';
      }
    }
    if (this.parryTimer > 0) {
      this.parryTimer -= dt;
      if (this.parryTimer <= 0) {
        this.parryActive = false;
        if (this.state !== 'hurt') this.state = 'idle';
      }
    }
    if (this.invulnerable > 0) {
      this.invulnerable -= dt;
      if (this.invulnerable <= 0 && this.state === 'hurt') this.state = 'idle';
    }
    
    // Mana regen
    if (this.mana < this.maxMana) {
      this.mana = Math.min(this.maxMana, this.mana + GAME_CONFIG.MANA_REGEN * dt * 0.5);
    }
    
    // Physics
    this.vy += GAME_CONFIG.GRAVITY * dt;
    this.y += this.vy * dt;
    if (this.y + this.height >= groundY) {
      this.y = groundY - this.height;
      this.vy = 0;
      this.grounded = true;
    } else {
      this.grounded = false;
    }
    
    this.x += this.vx * dt;
    this.x = Math.max(20, Math.min(GAME_CONFIG.CANVAS_WIDTH - this.width - 20, this.x));
    
    // Facing
    if (opponent) {
      this.facing = opponent.x > this.x ? 1 : -1;
      this.sprite.facing = this.facing;
    }
    
    // Attack hit detection
    if (this.attackActive > 0 && !this.hitGiven && opponent && !this.parryActive) {
      const hitbox = this.getHitbox();
      const oppBox = { x: opponent.x, y: opponent.y, w: opponent.width, h: opponent.height };
      if (this.rectCollide(hitbox, oppBox) && opponent.invulnerable <= 0) {
        if (opponent.parryActive) {
          // Parry success: stun attacker
          this.invulnerable = 10;
          this.vx = -this.facing * 6;
          opponent.parryActive = false;
        } else {
          let dmg = this.attackPower;
          if (this.currentMove === 'kick') dmg = Math.floor(this.attackPower * 1.3);
          else if (this.currentMove === 'special') dmg = this.specialPower;
          opponent.health = Math.max(0, opponent.health - dmg);
          opponent.invulnerable = 18;
          opponent.vy = -4;
          opponent.vx = this.facing * 7;
          opponent.state = 'hurt';
          this.hitGiven = true;
        }
      }
    }
    
    // AI update
    if (this.isAI && opponent) this.aiUpdate(opponent, dt);
    
    // Update sprite state
    this.updateSpriteState();
    this.sprite.update(dt);
    
    // Friction
    this.vx *= 0.78;
  }

  updateSpriteState() {
    if (this.state === 'idle') this.sprite.setAnimation('idle');
    else if (this.state === 'walk') this.sprite.setAnimation('walk');
    else if (this.state === 'punch') this.sprite.setAnimation('punch', false);
    else if (this.state === 'kick') this.sprite.setAnimation('kick', false);
    else if (this.state === 'special') this.sprite.setAnimation('special', false);
    else if (this.state === 'parry') this.sprite.setAnimation('parry', false);
    else if (this.state === 'hurt') this.sprite.setAnimation('hurt', false);
  }

  getHitbox() {
    let w = 40, h = 30;
    let offsetX = this.facing === 1 ? this.width : -w;
    if (this.currentMove === 'kick') { w = 50; h = 35; offsetX = this.facing === 1 ? this.width : -w; }
    if (this.currentMove === 'special') { w = 80; h = 50; offsetX = this.facing === 1 ? this.width : -w; }
    return { x: this.x + offsetX, y: this.y + this.height/2 - 15, w, h };
  }

  rectCollide(r1, r2) {
    return r1.x < r2.x + r2.w && r1.x + r1.w > r2.x &&
           r1.y < r2.y + r2.h && r1.y + r1.h > r2.y;
  }

  // Moves
  punch() {
    if (this.attackTimer <= 0 && this.state !== 'parry' && this.state !== 'hurt') {
      this.attackTimer = GAME_CONFIG.PUNCH_COOLDOWN;
      this.attackActive = GAME_CONFIG.PUNCH_ACTIVE;
      this.currentMove = 'punch';
      this.state = 'punch';
      this.hitGiven = false;
      const specialTrigger = this.comboManager.registerInput('punch');
      if (specialTrigger) this.performSpecial(specialTrigger);
      return true;
    }
    return false;
  }

  kick() {
    if (this.attackTimer <= 0 && this.state !== 'parry' && this.state !== 'hurt') {
      this.attackTimer = GAME_CONFIG.KICK_COOLDOWN;
      this.attackActive = GAME_CONFIG.KICK_ACTIVE;
      this.currentMove = 'kick';
      this.state = 'kick';
      this.hitGiven = false;
      const specialTrigger = this.comboManager.registerInput('kick');
      if (specialTrigger) this.performSpecial(specialTrigger);
      return true;
    }
    return false;
  }

  performSpecial(specialId = 'default') {
    if (this.mana >= GAME_CONFIG.SPECIAL_COST && this.attackTimer <= 0 && this.state !== 'hurt') {
      this.mana -= GAME_CONFIG.SPECIAL_COST;
      this.attackTimer = GAME_CONFIG.SPECIAL_COOLDOWN;
      this.attackActive = GAME_CONFIG.SPECIAL_ACTIVE;
      this.currentMove = 'special';
      this.state = 'special';
      this.hitGiven = false;
      // specialId could be used for different effects
    }
  }

  parry() {
    if (this.parryTimer <= 0 && this.attackTimer <= 0 && this.state !== 'hurt') {
      this.parryTimer = GAME_CONFIG.PARRY_COOLDOWN;
      this.parryActive = true;
      this.state = 'parry';
      return true;
    }
    return false;
  }

  aiUpdate(opponent, dt) {
    const dist = opponent.x - this.x;
    const absDist = Math.abs(dist);
    
    if (this.state === 'idle' || this.state === 'walk') {
      if (absDist > 100) {
        this.vx = Math.sign(dist) * this.speed * dt;
        this.state = 'walk';
      } else {
        this.state = 'idle';
      }
    }
    
    // Random attacks
    if (Math.random() < 0.015 * dt && this.attackTimer <= 0) {
      if (absDist < 130) {
        const r = Math.random();
        if (r < 0.4) this.punch();
        else if (r < 0.7) this.kick();
        else if (r < 0.9 && this.mana >= GAME_CONFIG.SPECIAL_COST) this.performSpecial();
      }
    }
    
    // Parry when opponent is attacking
    if (opponent.attackActive > 0 && Math.random() < 0.02 * dt) {
      this.parry();
    }
    
    // Jump occasionally
    if (this.grounded && opponent.y < this.y - 40 && Math.random() < 0.02 * dt) {
      this.vy = GAME_CONFIG.JUMP_FORCE;
    }
  }

  draw(ctx) {
    this.sprite.draw(ctx, this.x, this.y, this.width, this.height);
  }
}