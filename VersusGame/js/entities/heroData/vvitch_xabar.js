import { applyUltimateHit } from '../fight/hitHandler.js';

export const vvitchData = {
    // ---- Stat overrides ----
    stats: {
        maxJumps: 1,
        speedMultiplier: 0.9
    },

    // ---- Attack properties (used by default modules) ----
    attacks: {
        punch: {
            cooldown: 16,          // slower, heavier swings
            active: 8,
            displayName: 'SOUL REAVER SLASH',
            meleeEffectType: 'warrior'   // slash FX
        },
        kick: {
            cooldown: 22,
            active: 10,
            displayName: 'ABYSSAL KICK',
            meleeEffectType: 'brawler'
        },
        special: {
            cooldown: 50,
            active: 14,
            manaCost: 30,
            displayName: 'ABYSSAL CLEAVE',
            meleeEffectType: 'warrior'
        },
        throw: {
            cooldown: 30,
            displayName: 'SHADOW GRAB'
        },
        parry: {
            maxBlocks: 10,          // can block more hits before breaking
            cooldown: 28,
            displayName: 'VOID BARRIER'
        }
    },

    // ---- Ultimate ----
    ultimate: {
        name: 'CATACLYSM',
        description: 'X‑abar channels the Soul Reaver and unleashes a massive magenta void explosion.',
        damage: 65,
        channelTime: 1.2,
        handler: (fighter, opponent) => {
            fighter.customUltimate = {
                phase: 'channel',
                timer: 1.2,
                damage: 65,
                opponent: opponent,
                restoreState: {
                    charging: fighter.charging,
                    vx: fighter.vx,
                    vy: fighter.vy
                }
            };
            fighter.state = 'ultimate';
            fighter.invulTimer = 9999;
            fighter.charging = false;
            fighter.vx = 0;
            fighter.vy = 0;
            fighter.displayMove = 'CATACLYSM';
            fighter.moveDisplayTimer = 9999;
        }
    }
};