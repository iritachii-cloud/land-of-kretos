// js/main.js
import { heroes, getHeroById } from './data/heroes.js';
import { stages } from './data/stages.js';
import { Game } from './classes/Game.js';
import { InputHandler } from './classes/InputHandler.js';
import { AudioManager } from './utils/audio.js';
import { Sprite } from './classes/Sprite.js';
import { GAME_CONFIG } from './config.js';

// 🔧 CONFIGURE THIS TO MATCH YOUR FOLDER STRUCTURE
// If the game is in a subfolder like "Land of Kretos/Game/", set this to "/Land of Kretos/Game/"
// If assets are at the same level as index.html, leave as "" or "/"
const ASSET_BASE = ''; // e.g., '/Land of Kretos/Game/' or './'

const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
ctx.imageSmoothingEnabled = false;

const game = new Game(canvas, ctx);
const input = new InputHandler();
const audio = new AudioManager();

// DOM elements
const p1Select = document.getElementById('p1HeroSelect');
const p2Select = document.getElementById('p2HeroSelect');
const stageSelect = document.getElementById('stageSelect');
const aiCheckbox = document.getElementById('aiToggle');
const startBtn = document.getElementById('startFightBtn');
const selectionPanel = document.getElementById('selectionPanel');
const hudDisplay = document.getElementById('hudDisplay');
const postPanel = document.getElementById('postMatchPanel');
const winnerMsg = document.getElementById('winnerMessage');
const backBtn = document.getElementById('backToSelectBtn');

const p1HealthLabel = document.getElementById('p1HealthLabel');
const p1ManaLabel = document.getElementById('p1ManaLabel');
const p2HealthLabel = document.getElementById('p2HealthLabel');
const p2ManaLabel = document.getElementById('p2ManaLabel');

// Helper to resolve asset paths
function assetPath(relativePath) {
  if (ASSET_BASE.endsWith('/') && relativePath.startsWith('/')) {
    return ASSET_BASE + relativePath.slice(1);
  }
  return ASSET_BASE + relativePath;
}

// Store portrait sprites for preview
const portraitSprites = new Map();
let imagesToLoad = 0;
let imagesLoaded = 0;

// Populate selects and preload portraits
heroes.forEach(h => {
  p1Select.add(new Option(`${h.name} (${h.nickname})`, h.id));
  p2Select.add(new Option(`${h.name} (${h.nickname})`, h.id));
  
  // Create a modified portraitSprite with resolved path
  const resolvedPortraitSprite = {
    ...h.portraitSprite,
    imageSrc: assetPath(h.portraitSprite.imageSrc)
  };
  const portrait = new Sprite(resolvedPortraitSprite);
  portraitSprites.set(h.id, portrait);
  
  imagesToLoad++;
  
  if (portrait.image.complete) {
    imagesLoaded++;
    console.log(`✅ Portrait already loaded: ${resolvedPortraitSprite.imageSrc}`);
    if (imagesLoaded === imagesToLoad) drawSelectionScreen();
  } else {
    portrait.image.onload = () => {
      imagesLoaded++;
      console.log(`✅ Portrait loaded: ${resolvedPortraitSprite.imageSrc}`);
      if (imagesLoaded === imagesToLoad) drawSelectionScreen();
    };
    portrait.image.onerror = () => {
      console.error(`❌ Failed to load portrait: ${resolvedPortraitSprite.imageSrc}`);
      imagesLoaded++;
      if (imagesLoaded === imagesToLoad) drawSelectionScreen();
    };
  }
});

stages.forEach(s => {
  stageSelect.add(new Option(s.name, s.id));
});

function updateStatsPreview() {
  const p1Id = parseInt(p1Select.value);
  const p2Id = parseInt(p2Select.value);
  const p1Hero = getHeroById(p1Id);
  const p2Hero = getHeroById(p2Id);
  
  document.getElementById('p1StatsPreview').innerHTML = `
    ❤️ ${p1Hero.health}  ⚔️ ${p1Hero.attack}  ✨ ${p1Hero.specialPower}<br>
    🔹 ${p1Hero.combos[0]?.name || 'No combo'}
  `;
  document.getElementById('p2StatsPreview').innerHTML = `
    ❤️ ${p2Hero.health}  ⚔️ ${p2Hero.attack}  ✨ ${p2Hero.specialPower}<br>
    🔹 ${p2Hero.combos[0]?.name || 'No combo'}
  `;
  
  drawSelectionScreen();
}

p1Select.addEventListener('change', updateStatsPreview);
p2Select.addEventListener('change', updateStatsPreview);

function drawSelectionScreen() {
  ctx.clearRect(0, 0, GAME_CONFIG.CANVAS_WIDTH, GAME_CONFIG.CANVAS_HEIGHT);
  
  // Background
  const grad = ctx.createLinearGradient(0, 0, 0, GAME_CONFIG.CANVAS_HEIGHT);
  grad.addColorStop(0, '#1a1e3a');
  grad.addColorStop(1, '#0b0c1e');
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, GAME_CONFIG.CANVAS_WIDTH, GAME_CONFIG.CANVAS_HEIGHT);
  
  // Decorative frame
  ctx.strokeStyle = '#c9a96b';
  ctx.lineWidth = 4;
  ctx.strokeRect(10, 10, GAME_CONFIG.CANVAS_WIDTH-20, GAME_CONFIG.CANVAS_HEIGHT-20);
  
  // Title
  ctx.font = 'bold 36px "Cinzel"';
  ctx.fillStyle = '#ffd966';
  ctx.textAlign = 'center';
  ctx.shadowColor = '#6b0f0f';
  ctx.shadowBlur = 10;
  ctx.fillText('CHOOSE YOUR CHAMPION', GAME_CONFIG.CANVAS_WIDTH/2, 70);
  ctx.shadowBlur = 0;
  
  // Player 1 portrait
  const p1Id = parseInt(p1Select.value);
  const p1Portrait = portraitSprites.get(p1Id);
  if (p1Portrait) {
    p1Portrait.drawPortrait(ctx, 150, 120, 180, 240);
  }
  
  // Player 2 portrait
  const p2Id = parseInt(p2Select.value);
  const p2Portrait = portraitSprites.get(p2Id);
  if (p2Portrait) {
    p2Portrait.drawPortrait(ctx, 570, 120, 180, 240);
  }
  
  // VS text
  ctx.font = 'bold 48px "Cinzel"';
  ctx.fillStyle = '#e6c27a';
  ctx.fillText('VS', GAME_CONFIG.CANVAS_WIDTH/2, 250);
  
  // Names
  ctx.font = 'bold 20px "Cinzel"';
  ctx.fillStyle = '#f3e7c9';
  ctx.fillText(getHeroById(p1Id).name, 240, 390);
  ctx.fillText(getHeroById(p2Id).name, 660, 390);
}

function updateHUD() {
  if (!game.player1 || !game.player2) return;
  p1HealthLabel.textContent = Math.floor((game.player1.health / game.player1.maxHealth) * 100);
  p2HealthLabel.textContent = Math.floor((game.player2.health / game.player2.maxHealth) * 100);
  p1ManaLabel.textContent = Math.floor(game.player1.mana);
  p2ManaLabel.textContent = Math.floor(game.player2.mana);
}

function startMatch() {
  const p1 = getHeroById(parseInt(p1Select.value));
  const p2 = getHeroById(parseInt(p2Select.value));
  const stage = stages.find(s => s.id === parseInt(stageSelect.value));
  const ai = aiCheckbox.checked;
  
  game.initMatch(p1, p2, ai, stage);
  audio.playMusic(assetPath(stage.music));
  
  selectionPanel.style.display = 'none';
  hudDisplay.style.display = 'flex';
  postPanel.style.display = 'none';
  updateHUD();
}

function endMatch(winnerSide) {
  game.state = 'gameover';
  hudDisplay.style.display = 'none';
  postPanel.style.display = 'block';
  winnerMsg.textContent = `🏆 ${winnerSide === 'p1' ? game.player1.hero.name : game.player2.hero.name} WINS! 🏆`;
  audio.stopMusic();
}

startBtn.addEventListener('click', startMatch);
backBtn.addEventListener('click', () => {
  game.state = 'selection';
  selectionPanel.style.display = 'block';
  hudDisplay.style.display = 'none';
  postPanel.style.display = 'none';
  audio.stopMusic();
  drawSelectionScreen();
});

// Initial draw
drawSelectionScreen();

// Game loop
let lastTime = 0;
function loop(now) {
  const dt = Math.min(30, now - lastTime) / 16.67;
  if (dt > 0 && dt < 5) {
    game.keys = input.getKeys();
    
    if (game.state === 'fighting') {
      game.processInput(dt);
      game.update(dt);
      updateHUD();
      if (game.player1.health <= 0) endMatch('p2');
      else if (game.player2.health <= 0) endMatch('p1');
    }
    
    if (game.state === 'fighting' || game.state === 'gameover') {
      game.draw(ctx);
    }
  }
  lastTime = now;
  requestAnimationFrame(loop);
}
requestAnimationFrame(loop);

window.addEventListener('resize', () => {
  if (game.state === 'selection') drawSelectionScreen();
});