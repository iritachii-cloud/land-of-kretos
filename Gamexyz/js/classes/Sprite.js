// js/classes/Sprite.js
export class Sprite {
  constructor({ imageSrc, frameWidth, frameHeight, animations, defaultAnim = 'idle' }) {
    this.image = new Image();
    this.image.src = imageSrc;
    this.frameWidth = frameWidth;
    this.frameHeight = frameHeight;
    this.animations = animations;
    this.currentAnim = defaultAnim;
    this.frameIndex = 0;
    this.frameTimer = 0;
    this.facing = 1;
    this.loop = true;
    this.imageLoaded = false;
    this.image.onload = () => { this.imageLoaded = true; };
  }

  update(deltaTime) {
    const anim = this.animations[this.currentAnim];
    if (!anim) return;
    this.frameTimer += deltaTime * 0.016;
    if (this.frameTimer >= anim.speed) {
      this.frameTimer = 0;
      this.frameIndex++;
      if (this.frameIndex >= anim.frames.length) {
        if (this.loop) {
          this.frameIndex = 0;
        } else {
          this.frameIndex = anim.frames.length - 1;
        }
      }
    }
  }

  setAnimation(name, loop = true) {
    if (this.currentAnim !== name) {
      this.currentAnim = name;
      this.frameIndex = 0;
      this.frameTimer = 0;
      this.loop = loop;
    }
  }

  getCurrentFrame() {
    const anim = this.animations[this.currentAnim];
    return anim ? anim.frames[this.frameIndex] : 0;
  }

  drawPortrait(ctx, x, y, width, height) {
    if (!this.imageLoaded) {
      ctx.fillStyle = '#7a5c3a';
      ctx.fillRect(x, y, width, height);
      ctx.fillStyle = '#f0dbb0';
      ctx.font = 'bold 16px "Cinzel"';
      ctx.textAlign = 'center';
      ctx.fillText('⏳', x + width/2, y + height/2 + 6);
      return;
    }
    if (this.image.naturalWidth === 0) {
      ctx.fillStyle = '#7a5c3a';
      ctx.fillRect(x, y, width, height);
      ctx.fillStyle = '#f0dbb0';
      ctx.font = 'bold 16px "Cinzel"';
      ctx.textAlign = 'center';
      ctx.fillText('❌', x + width/2, y + height/2 + 6);
      return;
    }
    const idleAnim = this.animations['idle'];
    const frame = idleAnim ? idleAnim.frames[0] : 0;
    const sx = frame * this.frameWidth;
    ctx.drawImage(this.image, sx, 0, this.frameWidth, this.frameHeight, x, y, width, height);
  }

  draw(ctx, x, y, width, height) {
    if (!this.imageLoaded) {
      ctx.fillStyle = this.facing === 1 ? '#b53b3b' : '#3b6bb5';
      ctx.fillRect(x, y, width, height);
      ctx.fillStyle = '#ffe0a0';
      ctx.fillRect(x+8, y-8, 12, 12);
      ctx.fillStyle = '#222';
      ctx.fillRect(x + (this.facing===1?28:8), y+12, 8, 8);
      ctx.font = '10px "Courier New"';
      ctx.fillStyle = '#fff';
      ctx.fillText(this.currentAnim, x, y-15);
      return;
    }
    const frame = this.getCurrentFrame();
    const sx = frame * this.frameWidth;
    ctx.save();
    if (this.facing === -1) {
      ctx.translate(x + width, y);
      ctx.scale(-1, 1);
      ctx.drawImage(this.image, sx, 0, this.frameWidth, this.frameHeight, 0, 0, width, height);
    } else {
      ctx.drawImage(this.image, sx, 0, this.frameWidth, this.frameHeight, x, y, width, height);
    }
    ctx.restore();
  }
}