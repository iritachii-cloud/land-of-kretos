import { CONFIG } from '../../config.js';

export function drawPauseMenu(ctx, scene) {
    const { width, height } = scene.game.canvas;
    ctx.fillStyle = 'rgba(0,0,0,0.7)';
    ctx.fillRect(0, 0, width, height);
    ctx.font = 'bold 48px "Courier New"';
    ctx.fillStyle = '#ffd966';
    ctx.textAlign = 'center';
    ctx.fillText('PAUSED', width / 2, 150);

    const menuX = width / 2 - 200;
    const menuY = 220;
    scene.pauseOptions.forEach((opt, i) => {
        const y = menuY + i * 50;
        const isSelected = i === scene.pauseSelection;
        ctx.fillStyle = isSelected ? '#e67e22' : '#2a2a4a';
        ctx.fillRect(menuX, y - 10, 400, 40);
        ctx.strokeStyle = isSelected ? '#ffcc44' : '#aaa';
        ctx.lineWidth = 2;
        ctx.strokeRect(menuX, y - 10, 400, 40);
        ctx.font = '24px monospace';
        ctx.fillStyle = '#fff';
        ctx.textAlign = 'center';
        let label = opt.label;
        if (opt.action === 'toggleP1AI') label = `P1 AI: ${scene.p1?.isAI ? 'ON' : 'OFF'}`;
        if (opt.action === 'toggleP2AI') label = `P2 AI: ${scene.p2?.isAI ? 'ON' : 'OFF'}`;
        ctx.fillText(label, width / 2, y + 15);
    });
    ctx.font = '16px monospace';
    ctx.fillStyle = '#aaa';
    ctx.textAlign = 'center';
    ctx.fillText('↑↓ to select · ENTER to confirm · ESC to resume', width / 2, height - 50);
}

export function handlePauseInput(scene, e) {
    if (e.type !== 'keydown') return;
    if (scene.showStageSlider) return;
    if (e.code === 'Escape') {
        if (scene.paused) {
            scene.paused = false;
            scene.game.soundManager?.play('back');
        } else {
            scene.paused = true;
            scene.pauseSelection = 0;
            scene.game.soundManager?.play('select');
        }
        return;
    }
    if (!scene.paused) return;

    if (e.code === 'ArrowUp' || e.code === 'KeyW') {
        scene.pauseSelection = (scene.pauseSelection - 1 + scene.pauseOptions.length) % scene.pauseOptions.length;
        scene.game.soundManager?.play('select');
    } else if (e.code === 'ArrowDown' || e.code === 'KeyS') {
        scene.pauseSelection = (scene.pauseSelection + 1) % scene.pauseOptions.length;
        scene.game.soundManager?.play('select');
    } else if (e.code === 'Enter' || e.code === 'KeyU') {
        const action = scene.pauseOptions[scene.pauseSelection].action;
        scene.game.soundManager?.play('confirm');
        scene.handlePauseAction(action);
    }
}