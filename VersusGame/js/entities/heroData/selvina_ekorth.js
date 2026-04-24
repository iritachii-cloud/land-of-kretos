import { applyUltimateHit } from '../fight/hitHandler.js';

export const selvinaData = {
    stats: {
        maxJumps: 2,
        speedMultiplier: 1.1
    },
    attacks: {
        punch: {
            // Marksman – projectile
            cooldown: 14,
            projectileOverride: {
                speed: 9,          // faster than default
                damageScale: 1.8,  // hits harder
                lifetime: 3.5,
                // image & colors taken from hero data
            }
        },
        kick: {
            cooldown: 18,
            active: 8,
            displayName: 'NEON KICK',
            meleeEffectType: 'kick'
        },
        special: {
            cooldown: 48,
            active: 14,
            manaCost: 30,
            displayName: 'GRAVITY BEAM',
            meleeEffectType: 'special'
        },
        throw: null,   // defaults
        parry: null    // defaults
    },
    ultimate: {
        name: 'ANNIHILATION PULSE',
        description: 'Selvina overcharges both cannons and unleashes a massive entropy blast.',
        damage: 60,
        channelTime: 1.0,
        handler: (fighter, opponent) => {
            fighter.customUltimate = {
                phase: 'channel',
                timer: 1.0,
                damage: 60,
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
            fighter.displayMove = 'ANNIHILATION PULSE';
            fighter.moveDisplayTimer = 9999;
        }
    }
};