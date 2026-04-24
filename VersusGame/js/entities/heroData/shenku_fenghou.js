import { applyUltimateHit } from '../fight/hitHandler.js';

export const shenkuData = {
    stats: {
        maxJumps: 3,          // can triple jump
        speedMultiplier: 1.2
    },
    attacks: {
        punch: {
            cooldown: 12,      // very fast brawler
            active: 6,
            displayName: 'TIGER CLAW',
            meleeEffectType: 'brawler'
        },
        kick: {
            cooldown: 16,
            active: 8,
            displayName: 'STREET KICK',
            meleeEffectType: 'kick'
        },
        special: {
            cooldown: 40,
            active: 12,
            manaCost: 25,
            displayName: 'DRAGON PALM',
            meleeEffectType: 'brawler'   // shockwave
        },
        throw: null,
        parry: {
            maxBlocks: 6,       // breaks faster
            cooldown: 22,
            displayName: 'FLOW PARRY'
        }
    },
    ultimate: {
        name: 'JADE TEMPEST',
        description: 'Shenku enters a heightened state, gaining massive speed and area damage.',
        damage: 50,
        handler: (fighter, opponent) => {
            applyUltimateHit(fighter, opponent, 50);
            fighter.jadeTempestActive = true;
            fighter.jadeTempestTimer = 8.0;
            fighter.state = 'idle';
            fighter.invulTimer = 0;
            fighter.charging = false;
            fighter.displayMove = 'JADE TEMPEST';
            fighter.moveDisplayTimer = 60;
            fighter.meleeEffectType = 'ultimate';
            fighter.meleeEffectTimer = 30;
        }
    }
};