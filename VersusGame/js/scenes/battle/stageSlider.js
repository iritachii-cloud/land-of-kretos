import { CONFIG } from '../../config.js';

export function drawStageSlider(ctx, scene) {
    const { width, height } = scene.game.canvas;
    ctx.fillStyle = 'rgba(0,0,0,0.8)';
    ctx.fillRect(0, 0, width, height);
    const stages = scene.game.stages;
    const boxW = 600, boxH = 200;
    const boxX = (width - boxW) / 2, boxY = (height - boxH) / 2;
    ctx.fillStyle = '#1e1e30';
    ctx.fillRect(boxX, boxY, boxW, boxH);
    ctx.strokeStyle = '#f5a623';
    ctx.lineWidth = 3;
    ctx.strokeRect(boxX, boxY, boxW, boxH);
    ctx.font = 'bold 28px monospace';
    ctx.fillStyle = '#ffd966';
    ctx.textAlign = 'center';
    ctx.fillText('SELECT STAGE', width / 2, boxY + 40);
    const currentIdx = stages.findIndex(s => s.id === scene.stage.id);
    const displayStages = [stages[(currentIdx - 1 + stages.length) % stages.length], scene.stage, stages[(currentIdx + 1) % stages.length]];
    displayStages.forEach((s, i) => {
        const x = boxX + 50 + i * 170;
        const y = boxY + 70;
        const isCenter = i === 1;
        ctx.fillStyle = isCenter ? '#e67e22' : '#2a2a4a';
        ctx.fillRect(x, y, 150, 80);
        ctx.strokeStyle = isCenter ? '#ffcc44' : '#aaa';
        ctx.lineWidth = isCenter ? 3 : 1;
        ctx.strokeRect(x, y, 150, 80);
        ctx.font = '14px monospace';
        ctx.fillStyle = '#fff';
        ctx.textAlign = 'center';
        ctx.fillText(s.name, x + 75, y + 45);
    });
    ctx.font = '16px monospace';
    ctx.fillStyle = '#aaa';
    ctx.textAlign = 'center';
    ctx.fillText('← → to change · ENTER to confirm · ESC to cancel', width / 2, boxY + 170);
}

export function handleStageSliderInput(scene, e) {
    if (e.type !== 'keydown') return;
    const stages = scene.game.stages;
    if (e.code === 'ArrowLeft' || e.code === 'ArrowRight') {
        let idx = stages.findIndex(s => s.id === scene.stage.id);
        if (e.code === 'ArrowLeft') idx = (idx - 1 + stages.length) % stages.length;
        else idx = (idx + 1) % stages.length;
        scene.stage = stages[idx];
        scene.game.soundManager?.play('select');
    } else if (e.code === 'Enter') {
        scene.showStageSlider = false;
        scene.paused = true;
        scene.game.soundManager?.play('confirm');
    } else if (e.code === 'Escape') {
        scene.showStageSlider = false;
        scene.paused = true;
        scene.game.soundManager?.play('back');
    }
}