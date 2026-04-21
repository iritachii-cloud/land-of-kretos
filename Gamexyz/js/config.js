// js/config.js
export const GAME_CONFIG = {
  CANVAS_WIDTH: 900,
  CANVAS_HEIGHT: 500,
  GROUND_Y: 420,
  GRAVITY: 0.55,
  JUMP_FORCE: -11,
  PLAYER_WIDTH: 48,
  PLAYER_HEIGHT: 64,
  
  // Attack cooldowns (frames at 60fps)
  PUNCH_COOLDOWN: 20,
  KICK_COOLDOWN: 30,
  SPECIAL_COOLDOWN: 60,
  PARRY_COOLDOWN: 40,
  
  // Active frames
  PUNCH_ACTIVE: 6,
  KICK_ACTIVE: 8,
  SPECIAL_ACTIVE: 12,
  PARRY_ACTIVE: 10,
  
  // Combo window (ms)
  COMBO_WINDOW: 600,
  
  // Movement
  WALK_SPEED: 3.5,
  DASH_SPEED: 6.0,
  
  // Mana
  MAX_MANA: 100,
  MANA_REGEN: 0.8,
  SPECIAL_COST: 30
};