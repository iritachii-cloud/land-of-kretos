import { applyUltimateHit } from '../fight/hitHandler.js';

export const geigeiData = {
    stats: {
        maxJumps: 1,
        speedMultiplier: 0.8
    },
    attacks: {
        punch: {
            // Mage – projectile
            cooldown: 20,          // slow heavy projectiles
            projectileOverride: {
                speed: 4.5,        // slow lightning bolt
                damageScale: 2.5,
                lifetime: 5.0,     // lasts longer
            }
        },
        kick: {
            cooldown: 22,
            active: 10,
            displayName: 'THUNDERHEEL',
            meleeEffectType: 'kick'
        },
        special: {
            cooldown: 52,
            active: 14,
            manaCost: 35,
            displayName: 'CHAIN LIGHTNING',
            meleeEffectType: 'special'
        },
        throw: null,
        parry: null
    },
    ultimate: {
        name: "TEMPEST'S WRATH",
        description: 'Geigei channels the Skyrender and summons a lightning storm.',
        damage: 70,
        channelTime: 1.5,
        handler: (fighter, opponent) => {
            fighter.customUltimate = {
                phase: 'channel',
                timer: 1.5,
                damage: 70,
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
            fighter.displayMove = "TEMPEST'S WRATH";
            fighter.moveDisplayTimer = 9999;
        }
    }
};