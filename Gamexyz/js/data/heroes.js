// js/data/heroes.js
export const heroes = [
  {
    id: 1,
    name: "VVitch X‑abar",
    nickname: "Xabar",
    health: 135,
    attack: 28,
    speed: 3.6,
    specialPower: 32,
    spriteData: {
      imageSrc: "assets/sprites/vvitch_xabar/sprite.png",
      frameWidth: 64,
      frameHeight: 64,
      animations: {
        idle: { frames: [0, 1, 2, 3], speed: 0.15 },
        walk: { frames: [4, 5, 6, 7], speed: 0.12 },
        punch: { frames: [8, 9, 10], speed: 0.08 },
        kick: { frames: [11, 12, 13], speed: 0.08 },
        special: { frames: [14, 15, 16, 17], speed: 0.1 },
        parry: { frames: [18, 19], speed: 0.1 },
        hurt: { frames: [20, 21], speed: 0.1 }
      }
    },
    portraitSprite: {
      imageSrc: "assets/sprites/vvitch_xabar/hero.png",
      frameWidth: 64,
      frameHeight: 64,
      animations: { idle: { frames: [0], speed: 1 } }
    },
    combos: [{ name: "Abyssal Cleave", sequence: ['punch', 'punch', 'kick'], specialId: 'special1' }],
    theme: "assets/audio/themes/vvitch_xabar.mp3"
  },
  {
    id: 2,
    name: "Selvina E‑korth",
    nickname: "Selvina",
    health: 102,
    attack: 23,
    speed: 4.0,
    specialPower: 34,
    spriteData: {
      imageSrc: "assets/sprites/selvina_ekorth/sprite.png",
      frameWidth: 64,
      frameHeight: 64,
      animations: {
        idle: { frames: [0, 1, 2, 3], speed: 0.15 },
        walk: { frames: [4, 5, 6, 7], speed: 0.12 },
        punch: { frames: [8, 9, 10], speed: 0.08 },
        kick: { frames: [11, 12, 13], speed: 0.08 },
        special: { frames: [14, 15, 16, 17], speed: 0.1 },
        parry: { frames: [18, 19], speed: 0.1 },
        hurt: { frames: [20, 21], speed: 0.1 }
      }
    },
    portraitSprite: {
      imageSrc: "assets/sprites/selvina_ekorth/hero.png",
      frameWidth: 64,
      frameHeight: 64,
      animations: { idle: { frames: [0], speed: 1 } }
    },
    combos: [{ name: "Gravity Beam", sequence: ['punch', 'punch', 'kick'], specialId: 'special1' }],
    theme: "assets/audio/themes/selvina_ekorth.mp3"
  },
  {
    id: 3,
    name: "Roisin Pelvet",
    nickname: "Roisin",
    health: 110,
    attack: 24,
    speed: 4.2,
    specialPower: 27,
    spriteData: {
      imageSrc: "assets/sprites/roisin_pelvet/sprite.png",
      frameWidth: 64,
      frameHeight: 64,
      animations: {
        idle: { frames: [0, 1, 2, 3], speed: 0.15 },
        walk: { frames: [4, 5, 6, 7], speed: 0.12 },
        punch: { frames: [8, 9, 10], speed: 0.08 },
        kick: { frames: [11, 12, 13], speed: 0.08 },
        special: { frames: [14, 15, 16, 17], speed: 0.1 },
        parry: { frames: [18, 19], speed: 0.1 },
        hurt: { frames: [20, 21], speed: 0.1 }
      }
    },
    portraitSprite: {
      imageSrc: "assets/sprites/roisin_pelvet/hero.png",
      frameWidth: 64,
      frameHeight: 64,
      animations: { idle: { frames: [0], speed: 1 } }
    },
    combos: [{ name: "Eclipse Shot", sequence: ['punch', 'punch', 'kick'], specialId: 'special1' }],
    theme: "assets/audio/themes/roisin_pelvet.mp3"
  },
  {
    id: 4,
    name: "Geigei Fuks",
    nickname: "Geigei",
    health: 115,
    attack: 19,
    speed: 3.8,
    specialPower: 39,
    spriteData: {
      imageSrc: "assets/sprites/geigei_fuks/sprite.png",
      frameWidth: 64,
      frameHeight: 64,
      animations: {
        idle: { frames: [0, 1, 2, 3], speed: 0.15 },
        walk: { frames: [4, 5, 6, 7], speed: 0.12 },
        punch: { frames: [8, 9, 10], speed: 0.08 },
        kick: { frames: [11, 12, 13], speed: 0.08 },
        special: { frames: [14, 15, 16, 17], speed: 0.1 },
        parry: { frames: [18, 19], speed: 0.1 },
        hurt: { frames: [20, 21], speed: 0.1 }
      }
    },
    portraitSprite: {
      imageSrc: "assets/sprites/geigei_fuks/hero.png",
      frameWidth: 64,
      frameHeight: 64,
      animations: { idle: { frames: [0], speed: 1 } }
    },
    combos: [{ name: "Chain Lightning", sequence: ['punch', 'punch', 'kick'], specialId: 'special1' }],
    theme: "assets/audio/themes/geigei_fuks.mp3"
  },
  {
    id: 5,
    name: "Raiken Zu",
    nickname: "Raiken",
    health: 105,
    attack: 24,
    speed: 4.5,
    specialPower: 26,
    spriteData: {
      imageSrc: "assets/sprites/raiken_zu/sprite.png",
      frameWidth: 64,
      frameHeight: 64,
      animations: {
        idle: { frames: [0, 1, 2, 3], speed: 0.15 },
        walk: { frames: [4, 5, 6, 7], speed: 0.12 },
        punch: { frames: [8, 9, 10], speed: 0.08 },
        kick: { frames: [11, 12, 13], speed: 0.08 },
        special: { frames: [14, 15, 16, 17], speed: 0.1 },
        parry: { frames: [18, 19], speed: 0.1 },
        hurt: { frames: [20, 21], speed: 0.1 }
      }
    },
    portraitSprite: {
      imageSrc: "assets/sprites/raiken_zu/hero.png",
      frameWidth: 64,
      frameHeight: 64,
      animations: { idle: { frames: [0], speed: 1 } }
    },
    combos: [{ name: "Digital Slash", sequence: ['punch', 'punch', 'kick'], specialId: 'special1' }],
    theme: "assets/audio/themes/raiken_zu.mp3"
  },
  {
    id: 6,
    name: "Yuken Leo Lung",
    nickname: "Yuken",
    health: 145,
    attack: 20,
    speed: 3.9,
    specialPower: 31,
    spriteData: {
      imageSrc: "assets/sprites/yuken_leo_lung/sprite.png",
      frameWidth: 64,
      frameHeight: 64,
      animations: {
        idle: { frames: [0, 1, 2, 3], speed: 0.15 },
        walk: { frames: [4, 5, 6, 7], speed: 0.12 },
        punch: { frames: [8, 9, 10], speed: 0.08 },
        kick: { frames: [11, 12, 13], speed: 0.08 },
        special: { frames: [14, 15, 16, 17], speed: 0.1 },
        parry: { frames: [18, 19], speed: 0.1 },
        hurt: { frames: [20, 21], speed: 0.1 }
      }
    },
    portraitSprite: {
      imageSrc: "assets/sprites/yuken_leo_lung/hero.png",
      frameWidth: 64,
      frameHeight: 64,
      animations: { idle: { frames: [0], speed: 1 } }
    },
    combos: [{ name: "Whirlwind Palm", sequence: ['punch', 'punch', 'kick'], specialId: 'special1' }],
    theme: "assets/audio/themes/yuken_leo_lung.mp3"
  },
  {
    id: 7,
    name: "Faye Juisin",
    nickname: "Faye",
    health: 115,
    attack: 20,
    speed: 3.7,
    specialPower: 37,
    spriteData: {
      imageSrc: "assets/sprites/faye_juisin/sprite.png",
      frameWidth: 64,
      frameHeight: 64,
      animations: {
        idle: { frames: [0, 1, 2, 3], speed: 0.15 },
        walk: { frames: [4, 5, 6, 7], speed: 0.12 },
        punch: { frames: [8, 9, 10], speed: 0.08 },
        kick: { frames: [11, 12, 13], speed: 0.08 },
        special: { frames: [14, 15, 16, 17], speed: 0.1 },
        parry: { frames: [18, 19], speed: 0.1 },
        hurt: { frames: [20, 21], speed: 0.1 }
      }
    },
    portraitSprite: {
      imageSrc: "assets/sprites/faye_juisin/hero.png",
      frameWidth: 64,
      frameHeight: 64,
      animations: { idle: { frames: [0], speed: 1 } }
    },
    combos: [{ name: "Meteor Shower", sequence: ['punch', 'punch', 'kick'], specialId: 'special1' }],
    theme: "assets/audio/themes/faye_juisin.mp3"
  },
  {
    id: 8,
    name: "Grymnyr",
    nickname: "Grym",
    health: 148,
    attack: 28,
    speed: 3.2,
    specialPower: 26,
    spriteData: {
      imageSrc: "assets/sprites/grymnyr/sprite.png",
      frameWidth: 64,
      frameHeight: 64,
      animations: {
        idle: { frames: [0, 1, 2, 3], speed: 0.15 },
        walk: { frames: [4, 5, 6, 7], speed: 0.12 },
        punch: { frames: [8, 9, 10], speed: 0.08 },
        kick: { frames: [11, 12, 13], speed: 0.08 },
        special: { frames: [14, 15, 16, 17], speed: 0.1 },
        parry: { frames: [18, 19], speed: 0.1 },
        hurt: { frames: [20, 21], speed: 0.1 }
      }
    },
    portraitSprite: {
      imageSrc: "assets/sprites/grymnyr/hero.png",
      frameWidth: 64,
      frameHeight: 64,
      animations: { idle: { frames: [0], speed: 1 } }
    },
    combos: [{ name: "Anchor Pull", sequence: ['punch', 'punch', 'kick'], specialId: 'special1' }],
    theme: "assets/audio/themes/grymnyr.mp3"
  },
  {
    id: 9,
    name: "Shenku Fenghou",
    nickname: "Shenku",
    health: 120,
    attack: 25,
    speed: 4.3,
    specialPower: 22,
    spriteData: {
      imageSrc: "assets/sprites/shenku_fenghou/sprite.png",
      frameWidth: 64,
      frameHeight: 64,
      animations: {
        idle: { frames: [0, 1, 2, 3], speed: 0.15 },
        walk: { frames: [4, 5, 6, 7], speed: 0.12 },
        punch: { frames: [8, 9, 10], speed: 0.08 },
        kick: { frames: [11, 12, 13], speed: 0.08 },
        special: { frames: [14, 15, 16, 17], speed: 0.1 },
        parry: { frames: [18, 19], speed: 0.1 },
        hurt: { frames: [20, 21], speed: 0.1 }
      }
    },
    portraitSprite: {
      imageSrc: "assets/sprites/shenku_fenghou/hero.png",
      frameWidth: 64,
      frameHeight: 64,
      animations: { idle: { frames: [0], speed: 1 } }
    },
    combos: [{ name: "Tiger Claw Strike", sequence: ['punch', 'punch', 'kick'], specialId: 'special1' }],
    theme: "assets/audio/themes/shenku_fenghou.mp3"
  },
  {
    id: 10,
    name: "Nene",
    nickname: "Nene",
    health: 98,
    attack: 20,
    speed: 4.1,
    specialPower: 28,
    spriteData: {
      imageSrc: "assets/sprites/nene/sprite.png",
      frameWidth: 64,
      frameHeight: 64,
      animations: {
        idle: { frames: [0, 1, 2, 3], speed: 0.15 },
        walk: { frames: [4, 5, 6, 7], speed: 0.12 },
        punch: { frames: [8, 9, 10], speed: 0.08 },
        kick: { frames: [11, 12, 13], speed: 0.08 },
        special: { frames: [14, 15, 16, 17], speed: 0.1 },
        parry: { frames: [18, 19], speed: 0.1 },
        hurt: { frames: [20, 21], speed: 0.1 }
      }
    },
    portraitSprite: {
      imageSrc: "assets/sprites/nene/hero.png",
      frameWidth: 64,
      frameHeight: 64,
      animations: { idle: { frames: [0], speed: 1 } }
    },
    combos: [{ name: "Spirit Throw", sequence: ['punch', 'punch', 'kick'], specialId: 'special1' }],
    theme: "assets/audio/themes/nene.mp3"
  },
  {
    id: 11,
    name: "Endou Kusanai",
    nickname: "Endou",
    health: 135,
    attack: 19,
    speed: 3.5,
    specialPower: 21,
    spriteData: {
      imageSrc: "assets/sprites/endou_kusanai/sprite.png",
      frameWidth: 64,
      frameHeight: 64,
      animations: {
        idle: { frames: [0, 1, 2, 3], speed: 0.15 },
        walk: { frames: [4, 5, 6, 7], speed: 0.12 },
        punch: { frames: [8, 9, 10], speed: 0.08 },
        kick: { frames: [11, 12, 13], speed: 0.08 },
        special: { frames: [14, 15, 16, 17], speed: 0.1 },
        parry: { frames: [18, 19], speed: 0.1 },
        hurt: { frames: [20, 21], speed: 0.1 }
      }
    },
    portraitSprite: {
      imageSrc: "assets/sprites/endou_kusanai/hero.png",
      frameWidth: 64,
      frameHeight: 64,
      animations: { idle: { frames: [0], speed: 1 } }
    },
    combos: [{ name: "God Hand Block", sequence: ['punch', 'punch', 'kick'], specialId: 'special1' }],
    theme: "assets/audio/themes/endou_kusanai.mp3"
  },
  {
    id: 12,
    name: "Shiela Fiesta",
    nickname: "Shiela",
    health: 105,
    attack: 21,
    speed: 4.0,
    specialPower: 31,
    spriteData: {
      imageSrc: "assets/sprites/shiela_fiesta/sprite.png",
      frameWidth: 64,
      frameHeight: 64,
      animations: {
        idle: { frames: [0, 1, 2, 3], speed: 0.15 },
        walk: { frames: [4, 5, 6, 7], speed: 0.12 },
        punch: { frames: [8, 9, 10], speed: 0.08 },
        kick: { frames: [11, 12, 13], speed: 0.08 },
        special: { frames: [14, 15, 16, 17], speed: 0.1 },
        parry: { frames: [18, 19], speed: 0.1 },
        hurt: { frames: [20, 21], speed: 0.1 }
      }
    },
    portraitSprite: {
      imageSrc: "assets/sprites/shiela_fiesta/hero.png",
      frameWidth: 64,
      frameHeight: 64,
      animations: { idle: { frames: [0], speed: 1 } }
    },
    combos: [{ name: "Soul Seeker", sequence: ['punch', 'punch', 'kick'], specialId: 'special1' }],
    theme: "assets/audio/themes/shiela_fiesta.mp3"
  },
  {
    id: 13,
    name: "Malit Dalit",
    nickname: "Malit",
    health: 150,
    attack: 24,
    speed: 3.9,
    specialPower: 40,
    spriteData: {
      imageSrc: "assets/sprites/malit_dalit/sprite.png",
      frameWidth: 64,
      frameHeight: 64,
      animations: {
        idle: { frames: [0, 1, 2, 3], speed: 0.15 },
        walk: { frames: [4, 5, 6, 7], speed: 0.12 },
        punch: { frames: [8, 9, 10], speed: 0.08 },
        kick: { frames: [11, 12, 13], speed: 0.08 },
        special: { frames: [14, 15, 16, 17], speed: 0.1 },
        parry: { frames: [18, 19], speed: 0.1 },
        hurt: { frames: [20, 21], speed: 0.1 }
      }
    },
    portraitSprite: {
      imageSrc: "assets/sprites/malit_dalit/hero.png",
      frameWidth: 64,
      frameHeight: 64,
      animations: { idle: { frames: [0], speed: 1 } }
    },
    combos: [{ name: "Stellar Beam", sequence: ['punch', 'punch', 'kick'], specialId: 'special1' }],
    theme: "assets/audio/themes/malit_dalit.mp3"
  },
  {
    id: 14,
    name: "Vixyy Joe",
    nickname: "Vixyy",
    health: 105,
    attack: 21,
    speed: 3.7,
    specialPower: 30,
    spriteData: {
      imageSrc: "assets/sprites/vixyy_joe/sprite.png",
      frameWidth: 64,
      frameHeight: 64,
      animations: {
        idle: { frames: [0, 1, 2, 3], speed: 0.15 },
        walk: { frames: [4, 5, 6, 7], speed: 0.12 },
        punch: { frames: [8, 9, 10], speed: 0.08 },
        kick: { frames: [11, 12, 13], speed: 0.08 },
        special: { frames: [14, 15, 16, 17], speed: 0.1 },
        parry: { frames: [18, 19], speed: 0.1 },
        hurt: { frames: [20, 21], speed: 0.1 }
      }
    },
    portraitSprite: {
      imageSrc: "assets/sprites/vixyy_joe/hero.png",
      frameWidth: 64,
      frameHeight: 64,
      animations: { idle: { frames: [0], speed: 1 } }
    },
    combos: [{ name: "Card Throw", sequence: ['punch', 'punch', 'kick'], specialId: 'special1' }],
    theme: "assets/audio/themes/vixyy_joe.mp3"
  },
  {
    id: 15,
    name: "Axe Blade",
    nickname: "Axe",
    health: 155,
    attack: 28,
    speed: 3.3,
    specialPower: 25,
    spriteData: {
      imageSrc: "assets/sprites/axe_blade/sprite.png",
      frameWidth: 64,
      frameHeight: 64,
      animations: {
        idle: { frames: [0, 1, 2, 3], speed: 0.15 },
        walk: { frames: [4, 5, 6, 7], speed: 0.12 },
        punch: { frames: [8, 9, 10], speed: 0.08 },
        kick: { frames: [11, 12, 13], speed: 0.08 },
        special: { frames: [14, 15, 16, 17], speed: 0.1 },
        parry: { frames: [18, 19], speed: 0.1 },
        hurt: { frames: [20, 21], speed: 0.1 }
      }
    },
    portraitSprite: {
      imageSrc: "assets/sprites/axe_blade/hero.png",
      frameWidth: 64,
      frameHeight: 64,
      animations: { idle: { frames: [0], speed: 1 } }
    },
    combos: [{ name: "Earth Splitter", sequence: ['punch', 'punch', 'kick'], specialId: 'special1' }],
    theme: "assets/audio/themes/axe_blade.mp3"
  },
  {
    id: 16,
    name: "Taurus",
    nickname: "Taurus",
    health: 160,
    attack: 26,
    speed: 3.1,
    specialPower: 27,
    spriteData: {
      imageSrc: "assets/sprites/taurus/sprite.png",
      frameWidth: 64,
      frameHeight: 64,
      animations: {
        idle: { frames: [0, 1, 2, 3], speed: 0.15 },
        walk: { frames: [4, 5, 6, 7], speed: 0.12 },
        punch: { frames: [8, 9, 10], speed: 0.08 },
        kick: { frames: [11, 12, 13], speed: 0.08 },
        special: { frames: [14, 15, 16, 17], speed: 0.1 },
        parry: { frames: [18, 19], speed: 0.1 },
        hurt: { frames: [20, 21], speed: 0.1 }
      }
    },
    portraitSprite: {
      imageSrc: "assets/sprites/taurus/hero.png",
      frameWidth: 64,
      frameHeight: 64,
      animations: { idle: { frames: [0], speed: 1 } }
    },
    combos: [{ name: "Horn Charge", sequence: ['punch', 'punch', 'kick'], specialId: 'special1' }],
    theme: "assets/audio/themes/taurus.mp3"
  },
  {
    id: 17,
    name: "Ecanju Ferosta",
    nickname: "Eca",
    health: 135,
    attack: 16,
    speed: 3.6,
    specialPower: 41,
    spriteData: {
      imageSrc: "assets/sprites/ecanju_ferosta/sprite.png",
      frameWidth: 64,
      frameHeight: 64,
      animations: {
        idle: { frames: [0, 1, 2, 3], speed: 0.15 },
        walk: { frames: [4, 5, 6, 7], speed: 0.12 },
        punch: { frames: [8, 9, 10], speed: 0.08 },
        kick: { frames: [11, 12, 13], speed: 0.08 },
        special: { frames: [14, 15, 16, 17], speed: 0.1 },
        parry: { frames: [18, 19], speed: 0.1 },
        hurt: { frames: [20, 21], speed: 0.1 }
      }
    },
    portraitSprite: {
      imageSrc: "assets/sprites/ecanju_ferosta/hero.png",
      frameWidth: 64,
      frameHeight: 64,
      animations: { idle: { frames: [0], speed: 1 } }
    },
    combos: [{ name: "Ray of Purification", sequence: ['punch', 'punch', 'kick'], specialId: 'special1' }],
    theme: "assets/audio/themes/ecanju_ferosta.mp3"
  },
  {
    id: 18,
    name: "Longwei",
    nickname: "Longwei",
    health: 155,
    attack: 30,
    speed: 3.8,
    specialPower: 34,
    spriteData: {
      imageSrc: "assets/sprites/longwei/sprite.png",
      frameWidth: 64,
      frameHeight: 64,
      animations: {
        idle: { frames: [0, 1, 2, 3], speed: 0.15 },
        walk: { frames: [4, 5, 6, 7], speed: 0.12 },
        punch: { frames: [8, 9, 10], speed: 0.08 },
        kick: { frames: [11, 12, 13], speed: 0.08 },
        special: { frames: [14, 15, 16, 17], speed: 0.1 },
        parry: { frames: [18, 19], speed: 0.1 },
        hurt: { frames: [20, 21], speed: 0.1 }
      }
    },
    portraitSprite: {
      imageSrc: "assets/sprites/longwei/hero.png",
      frameWidth: 64,
      frameHeight: 64,
      animations: { idle: { frames: [0], speed: 1 } }
    },
    combos: [{ name: "Flame Breath", sequence: ['punch', 'punch', 'kick'], specialId: 'special1' }],
    theme: "assets/audio/themes/longwei.mp3"
  },
  {
    id: 19,
    name: "Brigeinda",
    nickname: "Brig",
    health: 125,
    attack: 28,
    speed: 3.2,
    specialPower: 27,
    spriteData: {
      imageSrc: "assets/sprites/brigeinda/sprite.png",
      frameWidth: 64,
      frameHeight: 64,
      animations: {
        idle: { frames: [0, 1, 2, 3], speed: 0.15 },
        walk: { frames: [4, 5, 6, 7], speed: 0.12 },
        punch: { frames: [8, 9, 10], speed: 0.08 },
        kick: { frames: [11, 12, 13], speed: 0.08 },
        special: { frames: [14, 15, 16, 17], speed: 0.1 },
        parry: { frames: [18, 19], speed: 0.1 },
        hurt: { frames: [20, 21], speed: 0.1 }
      }
    },
    portraitSprite: {
      imageSrc: "assets/sprites/brigeinda/hero.png",
      frameWidth: 64,
      frameHeight: 64,
      animations: { idle: { frames: [0], speed: 1 } }
    },
    combos: [{ name: "Ground Slam", sequence: ['punch', 'punch', 'kick'], specialId: 'special1' }],
    theme: "assets/audio/themes/brigeinda.mp3"
  },
  {
    id: 20,
    name: "Hattori Hanjou",
    nickname: "Hanjou",
    health: 100,
    attack: 24,
    speed: 4.6,
    specialPower: 25,
    spriteData: {
      imageSrc: "assets/sprites/hattori_hanjou/sprite.png",
      frameWidth: 64,
      frameHeight: 64,
      animations: {
        idle: { frames: [0, 1, 2, 3], speed: 0.15 },
        walk: { frames: [4, 5, 6, 7], speed: 0.12 },
        punch: { frames: [8, 9, 10], speed: 0.08 },
        kick: { frames: [11, 12, 13], speed: 0.08 },
        special: { frames: [14, 15, 16, 17], speed: 0.1 },
        parry: { frames: [18, 19], speed: 0.1 },
        hurt: { frames: [20, 21], speed: 0.1 }
      }
    },
    portraitSprite: {
      imageSrc: "assets/sprites/hattori_hanjou/hero.png",
      frameWidth: 64,
      frameHeight: 64,
      animations: { idle: { frames: [0], speed: 1 } }
    },
    combos: [{ name: "Light Slash", sequence: ['punch', 'punch', 'kick'], specialId: 'special1' }],
    theme: "assets/audio/themes/hattori_hanjou.mp3"
  },
  {
    id: 21,
    name: "Frejyah",
    nickname: "Frej",
    health: 145,
    attack: 27,
    speed: 3.5,
    specialPower: 30,
    spriteData: {
      imageSrc: "assets/sprites/frejyah/sprite.png",
      frameWidth: 64,
      frameHeight: 64,
      animations: {
        idle: { frames: [0, 1, 2, 3], speed: 0.15 },
        walk: { frames: [4, 5, 6, 7], speed: 0.12 },
        punch: { frames: [8, 9, 10], speed: 0.08 },
        kick: { frames: [11, 12, 13], speed: 0.08 },
        special: { frames: [14, 15, 16, 17], speed: 0.1 },
        parry: { frames: [18, 19], speed: 0.1 },
        hurt: { frames: [20, 21], speed: 0.1 }
      }
    },
    portraitSprite: {
      imageSrc: "assets/sprites/frejyah/hero.png",
      frameWidth: 64,
      frameHeight: 64,
      animations: { idle: { frames: [0], speed: 1 } }
    },
    combos: [{ name: "Shield Charge", sequence: ['punch', 'punch', 'kick'], specialId: 'special1' }],
    theme: "assets/audio/themes/frejyah.mp3"
  },
  {
    id: 22,
    name: "Mara",
    nickname: "Mara",
    health: 115,
    attack: 22,
    speed: 4.2,
    specialPower: 32,
    spriteData: {
      imageSrc: "assets/sprites/mara/sprite.png",
      frameWidth: 64,
      frameHeight: 64,
      animations: {
        idle: { frames: [0, 1, 2, 3], speed: 0.15 },
        walk: { frames: [4, 5, 6, 7], speed: 0.12 },
        punch: { frames: [8, 9, 10], speed: 0.08 },
        kick: { frames: [11, 12, 13], speed: 0.08 },
        special: { frames: [14, 15, 16, 17], speed: 0.1 },
        parry: { frames: [18, 19], speed: 0.1 },
        hurt: { frames: [20, 21], speed: 0.1 }
      }
    },
    portraitSprite: {
      imageSrc: "assets/sprites/mara/hero.png",
      frameWidth: 64,
      frameHeight: 64,
      animations: { idle: { frames: [0], speed: 1 } }
    },
    combos: [{ name: "Blade of Dawn", sequence: ['punch', 'punch', 'kick'], specialId: 'special1' }],
    theme: "assets/audio/themes/mara.mp3"
  },
  {
    id: 23,
    name: "Belleri Fumas",
    nickname: "Belle",
    health: 125,
    attack: 13,
    speed: 3.9,
    specialPower: 42,
    spriteData: {
      imageSrc: "assets/sprites/belleri_fumas/sprite.png",
      frameWidth: 64,
      frameHeight: 64,
      animations: {
        idle: { frames: [0, 1, 2, 3], speed: 0.15 },
        walk: { frames: [4, 5, 6, 7], speed: 0.12 },
        punch: { frames: [8, 9, 10], speed: 0.08 },
        kick: { frames: [11, 12, 13], speed: 0.08 },
        special: { frames: [14, 15, 16, 17], speed: 0.1 },
        parry: { frames: [18, 19], speed: 0.1 },
        hurt: { frames: [20, 21], speed: 0.1 }
      }
    },
    portraitSprite: {
      imageSrc: "assets/sprites/belleri_fumas/hero.png",
      frameWidth: 64,
      frameHeight: 64,
      animations: { idle: { frames: [0], speed: 1 } }
    },
    combos: [{ name: "Fireball", sequence: ['punch', 'punch', 'kick'], specialId: 'special1' }],
    theme: "assets/audio/themes/belleri_fumas.mp3"
  },
  {
    id: 24,
    name: "Waguri",
    nickname: "Wagu",
    health: 98,
    attack: 13,
    speed: 3.9,
    specialPower: 34,
    spriteData: {
      imageSrc: "assets/sprites/waguri/sprite.png",
      frameWidth: 64,
      frameHeight: 64,
      animations: {
        idle: { frames: [0, 1, 2, 3], speed: 0.15 },
        walk: { frames: [4, 5, 6, 7], speed: 0.12 },
        punch: { frames: [8, 9, 10], speed: 0.08 },
        kick: { frames: [11, 12, 13], speed: 0.08 },
        special: { frames: [14, 15, 16, 17], speed: 0.1 },
        parry: { frames: [18, 19], speed: 0.1 },
        hurt: { frames: [20, 21], speed: 0.1 }
      }
    },
    portraitSprite: {
      imageSrc: "assets/sprites/waguri/hero.png",
      frameWidth: 64,
      frameHeight: 64,
      animations: { idle: { frames: [0], speed: 1 } }
    },
    combos: [{ name: "Summon Oni", sequence: ['punch', 'punch', 'kick'], specialId: 'special1' }],
    theme: "assets/audio/themes/waguri.mp3"
  },
  {
    id: 25,
    name: "Maila Toh",
    nickname: "Maila",
    health: 160,
    attack: 26,
    speed: 3.0,
    specialPower: 21,
    spriteData: {
      imageSrc: "assets/sprites/maila_toh/sprite.png",
      frameWidth: 64,
      frameHeight: 64,
      animations: {
        idle: { frames: [0, 1, 2, 3], speed: 0.15 },
        walk: { frames: [4, 5, 6, 7], speed: 0.12 },
        punch: { frames: [8, 9, 10], speed: 0.08 },
        kick: { frames: [11, 12, 13], speed: 0.08 },
        special: { frames: [14, 15, 16, 17], speed: 0.1 },
        parry: { frames: [18, 19], speed: 0.1 },
        hurt: { frames: [20, 21], speed: 0.1 }
      }
    },
    portraitSprite: {
      imageSrc: "assets/sprites/maila_toh/hero.png",
      frameWidth: 64,
      frameHeight: 64,
      animations: { idle: { frames: [0], speed: 1 } }
    },
    combos: [{ name: "Soul Devour", sequence: ['punch', 'punch', 'kick'], specialId: 'special1' }],
    theme: "assets/audio/themes/maila_toh.mp3"
  },
  {
    id: 26,
    name: "Teinukza Sherpa",
    nickname: "Teinu",
    health: 165,
    attack: 30,
    speed: 2.8,
    specialPower: 25,
    spriteData: {
      imageSrc: "assets/sprites/teinukza_sherpa/sprite.png",
      frameWidth: 64,
      frameHeight: 64,
      animations: {
        idle: { frames: [0, 1, 2, 3], speed: 0.15 },
        walk: { frames: [4, 5, 6, 7], speed: 0.12 },
        punch: { frames: [8, 9, 10], speed: 0.08 },
        kick: { frames: [11, 12, 13], speed: 0.08 },
        special: { frames: [14, 15, 16, 17], speed: 0.1 },
        parry: { frames: [18, 19], speed: 0.1 },
        hurt: { frames: [20, 21], speed: 0.1 }
      }
    },
    portraitSprite: {
      imageSrc: "assets/sprites/teinukza_sherpa/hero.png",
      frameWidth: 64,
      frameHeight: 64,
      animations: { idle: { frames: [0], speed: 1 } }
    },
    combos: [{ name: "Ice Cleave", sequence: ['punch', 'punch', 'kick'], specialId: 'special1' }],
    theme: "assets/audio/themes/teinukza_sherpa.mp3"
  },
  {
    id: 27,
    name: "Seki Meite",
    nickname: "Seki",
    health: 120,
    attack: 23,
    speed: 3.5,
    specialPower: 35,
    spriteData: {
      imageSrc: "assets/sprites/seki_meite/sprite.png",
      frameWidth: 64,
      frameHeight: 64,
      animations: {
        idle: { frames: [0, 1, 2, 3], speed: 0.15 },
        walk: { frames: [4, 5, 6, 7], speed: 0.12 },
        punch: { frames: [8, 9, 10], speed: 0.08 },
        kick: { frames: [11, 12, 13], speed: 0.08 },
        special: { frames: [14, 15, 16, 17], speed: 0.1 },
        parry: { frames: [18, 19], speed: 0.1 },
        hurt: { frames: [20, 21], speed: 0.1 }
      }
    },
    portraitSprite: {
      imageSrc: "assets/sprites/seki_meite/hero.png",
      frameWidth: 64,
      frameHeight: 64,
      animations: { idle: { frames: [0], speed: 1 } }
    },
    combos: [{ name: "Scorching Throw", sequence: ['punch', 'punch', 'kick'], specialId: 'special1' }],
    theme: "assets/audio/themes/seki_meite.mp3"
  },
  {
    id: 28,
    name: "Transformei",
    nickname: "Formei",
    health: 135,
    attack: 26,
    speed: 3.6,
    specialPower: 27,
    spriteData: {
      imageSrc: "assets/sprites/transformei/sprite.png",
      frameWidth: 64,
      frameHeight: 64,
      animations: {
        idle: { frames: [0, 1, 2, 3], speed: 0.15 },
        walk: { frames: [4, 5, 6, 7], speed: 0.12 },
        punch: { frames: [8, 9, 10], speed: 0.08 },
        kick: { frames: [11, 12, 13], speed: 0.08 },
        special: { frames: [14, 15, 16, 17], speed: 0.1 },
        parry: { frames: [18, 19], speed: 0.1 },
        hurt: { frames: [20, 21], speed: 0.1 }
      }
    },
    portraitSprite: {
      imageSrc: "assets/sprites/transformei/hero.png",
      frameWidth: 64,
      frameHeight: 64,
      animations: { idle: { frames: [0], speed: 1 } }
    },
    combos: [{ name: "Laser Beam", sequence: ['punch', 'punch', 'kick'], specialId: 'special1' }],
    theme: "assets/audio/themes/transformei.mp3"
  },
  {
    id: 29,
    name: "Oculus",
    nickname: "Oculus",
    health: 125,
    attack: 12,
    speed: 3.4,
    specialPower: 41,
    spriteData: {
      imageSrc: "assets/sprites/oculus/sprite.png",
      frameWidth: 64,
      frameHeight: 64,
      animations: {
        idle: { frames: [0, 1, 2, 3], speed: 0.15 },
        walk: { frames: [4, 5, 6, 7], speed: 0.12 },
        punch: { frames: [8, 9, 10], speed: 0.08 },
        kick: { frames: [11, 12, 13], speed: 0.08 },
        special: { frames: [14, 15, 16, 17], speed: 0.1 },
        parry: { frames: [18, 19], speed: 0.1 },
        hurt: { frames: [20, 21], speed: 0.1 }
      }
    },
    portraitSprite: {
      imageSrc: "assets/sprites/oculus/hero.png",
      frameWidth: 64,
      frameHeight: 64,
      animations: { idle: { frames: [0], speed: 1 } }
    },
    combos: [{ name: "Laser Gaze", sequence: ['punch', 'punch', 'kick'], specialId: 'special1' }],
    theme: "assets/audio/themes/oculus.mp3"
  },
  {
    id: 30,
    name: "Olive Rein",
    nickname: "Olive",
    health: 115,
    attack: 25,
    speed: 3.5,
    specialPower: 29,
    spriteData: {
      imageSrc: "assets/sprites/olive_rein/sprite.png",
      frameWidth: 64,
      frameHeight: 64,
      animations: {
        idle: { frames: [0, 1, 2, 3], speed: 0.15 },
        walk: { frames: [4, 5, 6, 7], speed: 0.12 },
        punch: { frames: [8, 9, 10], speed: 0.08 },
        kick: { frames: [11, 12, 13], speed: 0.08 },
        special: { frames: [14, 15, 16, 17], speed: 0.1 },
        parry: { frames: [18, 19], speed: 0.1 },
        hurt: { frames: [20, 21], speed: 0.1 }
      }
    },
    portraitSprite: {
      imageSrc: "assets/sprites/olive_rein/hero.png",
      frameWidth: 64,
      frameHeight: 64,
      animations: { idle: { frames: [0], speed: 1 } }
    },
    combos: [{ name: "Poison Sweep", sequence: ['punch', 'punch', 'kick'], specialId: 'special1' }],
    theme: "assets/audio/themes/olive_rein.mp3"
  },
  {
    id: 31,
    name: "Wukong",
    nickname: "Wukong",
    health: 145,
    attack: 27,
    speed: 4.2,
    specialPower: 27,
    spriteData: {
      imageSrc: "assets/sprites/wukong/sprite.png",
      frameWidth: 64,
      frameHeight: 64,
      animations: {
        idle: { frames: [0, 1, 2, 3], speed: 0.15 },
        walk: { frames: [4, 5, 6, 7], speed: 0.12 },
        punch: { frames: [8, 9, 10], speed: 0.08 },
        kick: { frames: [11, 12, 13], speed: 0.08 },
        special: { frames: [14, 15, 16, 17], speed: 0.1 },
        parry: { frames: [18, 19], speed: 0.1 },
        hurt: { frames: [20, 21], speed: 0.1 }
      }
    },
    portraitSprite: {
      imageSrc: "assets/sprites/wukong/hero.png",
      frameWidth: 64,
      frameHeight: 64,
      animations: { idle: { frames: [0], speed: 1 } }
    },
    combos: [{ name: "Staff Extension", sequence: ['punch', 'punch', 'kick'], specialId: 'special1' }],
    theme: "assets/audio/themes/wukong.mp3"
  },
  {
    id: 32,
    name: "Kei Kai",
    nickname: "Kei",
    health: 110,
    attack: 22,
    speed: 3.5,
    specialPower: 32,
    spriteData: {
      imageSrc: "assets/sprites/kei_kai/sprite.png",
      frameWidth: 64,
      frameHeight: 64,
      animations: {
        idle: { frames: [0, 1, 2, 3], speed: 0.15 },
        walk: { frames: [4, 5, 6, 7], speed: 0.12 },
        punch: { frames: [8, 9, 10], speed: 0.08 },
        kick: { frames: [11, 12, 13], speed: 0.08 },
        special: { frames: [14, 15, 16, 17], speed: 0.1 },
        parry: { frames: [18, 19], speed: 0.1 },
        hurt: { frames: [20, 21], speed: 0.1 }
      }
    },
    portraitSprite: {
      imageSrc: "assets/sprites/kei_kai/hero.png",
      frameWidth: 64,
      frameHeight: 64,
      animations: { idle: { frames: [0], speed: 1 } }
    },
    combos: [{ name: "Bone Shard Volley", sequence: ['punch', 'punch', 'kick'], specialId: 'special1' }],
    theme: "assets/audio/themes/kei_kai.mp3"
  },
  {
    id: 33,
    name: "Seraphine",
    nickname: "Sera",
    health: 125,
    attack: 23,
    speed: 3.6,
    specialPower: 32,
    spriteData: {
      imageSrc: "assets/sprites/seraphine/sprite.png",
      frameWidth: 64,
      frameHeight: 64,
      animations: {
        idle: { frames: [0, 1, 2, 3], speed: 0.15 },
        walk: { frames: [4, 5, 6, 7], speed: 0.12 },
        punch: { frames: [8, 9, 10], speed: 0.08 },
        kick: { frames: [11, 12, 13], speed: 0.08 },
        special: { frames: [14, 15, 16, 17], speed: 0.1 },
        parry: { frames: [18, 19], speed: 0.1 },
        hurt: { frames: [20, 21], speed: 0.1 }
      }
    },
    portraitSprite: {
      imageSrc: "assets/sprites/seraphine/hero.png",
      frameWidth: 64,
      frameHeight: 64,
      animations: { idle: { frames: [0], speed: 1 } }
    },
    combos: [{ name: "Righteous Strike", sequence: ['punch', 'punch', 'kick'], specialId: 'special1' }],
    theme: "assets/audio/themes/seraphine.mp3"
  },
  {
    id: 34,
    name: "Viper",
    nickname: "Viper",
    health: 100,
    attack: 24,
    speed: 4.0,
    specialPower: 20,
    spriteData: {
      imageSrc: "assets/sprites/viper/sprite.png",
      frameWidth: 64,
      frameHeight: 64,
      animations: {
        idle: { frames: [0, 1, 2, 3], speed: 0.15 },
        walk: { frames: [4, 5, 6, 7], speed: 0.12 },
        punch: { frames: [8, 9, 10], speed: 0.08 },
        kick: { frames: [11, 12, 13], speed: 0.08 },
        special: { frames: [14, 15, 16, 17], speed: 0.1 },
        parry: { frames: [18, 19], speed: 0.1 },
        hurt: { frames: [20, 21], speed: 0.1 }
      }
    },
    portraitSprite: {
      imageSrc: "assets/sprites/viper/hero.png",
      frameWidth: 64,
      frameHeight: 64,
      animations: { idle: { frames: [0], speed: 1 } }
    },
    combos: [{ name: "Scope Shot", sequence: ['punch', 'punch', 'kick'], specialId: 'special1' }],
    theme: "assets/audio/themes/viper.mp3"
  },
  {
    id: 35,
    name: "Keingzyu",
    nickname: "Keing",
    health: 145,
    attack: 20,
    speed: 3.6,
    specialPower: 39,
    spriteData: {
      imageSrc: "assets/sprites/keingzyu/sprite.png",
      frameWidth: 64,
      frameHeight: 64,
      animations: {
        idle: { frames: [0, 1, 2, 3], speed: 0.15 },
        walk: { frames: [4, 5, 6, 7], speed: 0.12 },
        punch: { frames: [8, 9, 10], speed: 0.08 },
        kick: { frames: [11, 12, 13], speed: 0.08 },
        special: { frames: [14, 15, 16, 17], speed: 0.1 },
        parry: { frames: [18, 19], speed: 0.1 },
        hurt: { frames: [20, 21], speed: 0.1 }
      }
    },
    portraitSprite: {
      imageSrc: "assets/sprites/keingzyu/hero.png",
      frameWidth: 64,
      frameHeight: 64,
      animations: { idle: { frames: [0], speed: 1 } }
    },
    combos: [{ name: "Devourer Beam", sequence: ['punch', 'punch', 'kick'], specialId: 'special1' }],
    theme: "assets/audio/themes/keingzyu.mp3"
  },
  {
    id: 36,
    name: "Lamia",
    nickname: "Lamia",
    health: 125,
    attack: 15,
    speed: 3.3,
    specialPower: 35,
    spriteData: {
      imageSrc: "assets/sprites/lamia/sprite.png",
      frameWidth: 64,
      frameHeight: 64,
      animations: {
        idle: { frames: [0, 1, 2, 3], speed: 0.15 },
        walk: { frames: [4, 5, 6, 7], speed: 0.12 },
        punch: { frames: [8, 9, 10], speed: 0.08 },
        kick: { frames: [11, 12, 13], speed: 0.08 },
        special: { frames: [14, 15, 16, 17], speed: 0.1 },
        parry: { frames: [18, 19], speed: 0.1 },
        hurt: { frames: [20, 21], speed: 0.1 }
      }
    },
    portraitSprite: {
      imageSrc: "assets/sprites/lamia/hero.png",
      frameWidth: 64,
      frameHeight: 64,
      animations: { idle: { frames: [0], speed: 1 } }
    },
    combos: [{ name: "Solar Flare", sequence: ['punch', 'punch', 'kick'], specialId: 'special1' }],
    theme: "assets/audio/themes/lamia.mp3"
  },
  {
    id: 37,
    name: "Tiamat",
    nickname: "Tiamat",
    health: 145,
    attack: 22,
    speed: 3.6,
    specialPower: 36,
    spriteData: {
      imageSrc: "assets/sprites/tiamat/sprite.png",
      frameWidth: 64,
      frameHeight: 64,
      animations: {
        idle: { frames: [0, 1, 2, 3], speed: 0.15 },
        walk: { frames: [4, 5, 6, 7], speed: 0.12 },
        punch: { frames: [8, 9, 10], speed: 0.08 },
        kick: { frames: [11, 12, 13], speed: 0.08 },
        special: { frames: [14, 15, 16, 17], speed: 0.1 },
        parry: { frames: [18, 19], speed: 0.1 },
        hurt: { frames: [20, 21], speed: 0.1 }
      }
    },
    portraitSprite: {
      imageSrc: "assets/sprites/tiamat/hero.png",
      frameWidth: 64,
      frameHeight: 64,
      animations: { idle: { frames: [0], speed: 1 } }
    },
    combos: [{ name: "Tidal Wave", sequence: ['punch', 'punch', 'kick'], specialId: 'special1' }],
    theme: "assets/audio/themes/tiamat.mp3"
  },
  {
    id: 38,
    name: "Lunara",
    nickname: "Lunara",
    health: 135,
    attack: 13,
    speed: 3.3,
    specialPower: 39,
    spriteData: {
      imageSrc: "assets/sprites/lunara/sprite.png",
      frameWidth: 64,
      frameHeight: 64,
      animations: {
        idle: { frames: [0, 1, 2, 3], speed: 0.15 },
        walk: { frames: [4, 5, 6, 7], speed: 0.12 },
        punch: { frames: [8, 9, 10], speed: 0.08 },
        kick: { frames: [11, 12, 13], speed: 0.08 },
        special: { frames: [14, 15, 16, 17], speed: 0.1 },
        parry: { frames: [18, 19], speed: 0.1 },
        hurt: { frames: [20, 21], speed: 0.1 }
      }
    },
    portraitSprite: {
      imageSrc: "assets/sprites/lunara/hero.png",
      frameWidth: 64,
      frameHeight: 64,
      animations: { idle: { frames: [0], speed: 1 } }
    },
    combos: [{ name: "Construct Wall", sequence: ['punch', 'punch', 'kick'], specialId: 'special1' }],
    theme: "assets/audio/themes/lunara.mp3"
  },
  {
    id: 39,
    name: "Mika Sah",
    nickname: "Mika",
    health: 105,
    attack: 27,
    speed: 4.8,
    specialPower: 22,
    spriteData: {
      imageSrc: "assets/sprites/mika_sah/sprite.png",
      frameWidth: 64,
      frameHeight: 64,
      animations: {
        idle: { frames: [0, 1, 2, 3], speed: 0.15 },
        walk: { frames: [4, 5, 6, 7], speed: 0.12 },
        punch: { frames: [8, 9, 10], speed: 0.08 },
        kick: { frames: [11, 12, 13], speed: 0.08 },
        special: { frames: [14, 15, 16, 17], speed: 0.1 },
        parry: { frames: [18, 19], speed: 0.1 },
        hurt: { frames: [20, 21], speed: 0.1 }
      }
    },
    portraitSprite: {
      imageSrc: "assets/sprites/mika_sah/hero.png",
      frameWidth: 64,
      frameHeight: 64,
      animations: { idle: { frames: [0], speed: 1 } }
    },
    combos: [{ name: "Grappling Strike", sequence: ['punch', 'punch', 'kick'], specialId: 'special1' }],
    theme: "assets/audio/themes/mika_sah.mp3"
  },
  {
    id: 40,
    name: "Mordred",
    nickname: "Mordred",
    health: 120,
    attack: 26,
    speed: 4.0,
    specialPower: 23,
    spriteData: {
      imageSrc: "assets/sprites/mordred/sprite.png",
      frameWidth: 64,
      frameHeight: 64,
      animations: {
        idle: { frames: [0, 1, 2, 3], speed: 0.15 },
        walk: { frames: [4, 5, 6, 7], speed: 0.12 },
        punch: { frames: [8, 9, 10], speed: 0.08 },
        kick: { frames: [11, 12, 13], speed: 0.08 },
        special: { frames: [14, 15, 16, 17], speed: 0.1 },
        parry: { frames: [18, 19], speed: 0.1 },
        hurt: { frames: [20, 21], speed: 0.1 }
      }
    },
    portraitSprite: {
      imageSrc: "assets/sprites/mordred/hero.png",
      frameWidth: 64,
      frameHeight: 64,
      animations: { idle: { frames: [0], speed: 1 } }
    },
    combos: [{ name: "Treacherous Thrust", sequence: ['punch', 'punch', 'kick'], specialId: 'special1' }],
    theme: "assets/audio/themes/mordred.mp3"
  },
  {
    id: 41,
    name: "Grimalkin",
    nickname: "Grim",
    health: 105,
    attack: 14,
    speed: 4.1,
    specialPower: 34,
    spriteData: {
      imageSrc: "assets/sprites/grimalkin/sprite.png",
      frameWidth: 64,
      frameHeight: 64,
      animations: {
        idle: { frames: [0, 1, 2, 3], speed: 0.15 },
        walk: { frames: [4, 5, 6, 7], speed: 0.12 },
        punch: { frames: [8, 9, 10], speed: 0.08 },
        kick: { frames: [11, 12, 13], speed: 0.08 },
        special: { frames: [14, 15, 16, 17], speed: 0.1 },
        parry: { frames: [18, 19], speed: 0.1 },
        hurt: { frames: [20, 21], speed: 0.1 }
      }
    },
    portraitSprite: {
      imageSrc: "assets/sprites/grimalkin/hero.png",
      frameWidth: 64,
      frameHeight: 64,
      animations: { idle: { frames: [0], speed: 1 } }
    },
    combos: [{ name: "Shadow Tendrils", sequence: ['punch', 'punch', 'kick'], specialId: 'special1' }],
    theme: "assets/audio/themes/grimalkin.mp3"
  },
  {
    id: 42,
    name: "Devi Ashuram",
    nickname: "Devi",
    health: 170,
    attack: 28,
    speed: 3.8,
    specialPower: 42,
    spriteData: {
      imageSrc: "assets/sprites/devi_ashuram/sprite.png",
      frameWidth: 64,
      frameHeight: 64,
      animations: {
        idle: { frames: [0, 1, 2, 3], speed: 0.15 },
        walk: { frames: [4, 5, 6, 7], speed: 0.12 },
        punch: { frames: [8, 9, 10], speed: 0.08 },
        kick: { frames: [11, 12, 13], speed: 0.08 },
        special: { frames: [14, 15, 16, 17], speed: 0.1 },
        parry: { frames: [18, 19], speed: 0.1 },
        hurt: { frames: [20, 21], speed: 0.1 }
      }
    },
    portraitSprite: {
      imageSrc: "assets/sprites/devi_ashuram/hero.png",
      frameWidth: 64,
      frameHeight: 64,
      animations: { idle: { frames: [0], speed: 1 } }
    },
    combos: [{ name: "Death Slash", sequence: ['punch', 'punch', 'kick'], specialId: 'special1' }],
    theme: "assets/audio/themes/devi_ashuram.mp3"
  },
  {
    id: 43,
    name: "Valkot",
    nickname: "Val",
    health: 95,
    attack: 19,
    speed: 4.0,
    specialPower: 26,
    spriteData: {
      imageSrc: "assets/sprites/valkot/sprite.png",
      frameWidth: 64,
      frameHeight: 64,
      animations: {
        idle: { frames: [0, 1, 2, 3], speed: 0.15 },
        walk: { frames: [4, 5, 6, 7], speed: 0.12 },
        punch: { frames: [8, 9, 10], speed: 0.08 },
        kick: { frames: [11, 12, 13], speed: 0.08 },
        special: { frames: [14, 15, 16, 17], speed: 0.1 },
        parry: { frames: [18, 19], speed: 0.1 },
        hurt: { frames: [20, 21], speed: 0.1 }
      }
    },
    portraitSprite: {
      imageSrc: "assets/sprites/valkot/hero.png",
      frameWidth: 64,
      frameHeight: 64,
      animations: { idle: { frames: [0], speed: 1 } }
    },
    combos: [{ name: "Memory Cut", sequence: ['punch', 'punch', 'kick'], specialId: 'special1' }],
    theme: "assets/audio/themes/valkot.mp3"
  },
  {
    id: 44,
    name: "Volti Quin",
    nickname: "Volti",
    health: 95,
    attack: 17,
    speed: 4.0,
    specialPower: 34,
    spriteData: {
      imageSrc: "assets/sprites/volti_quin/sprite.png",
      frameWidth: 64,
      frameHeight: 64,
      animations: {
        idle: { frames: [0, 1, 2, 3], speed: 0.15 },
        walk: { frames: [4, 5, 6, 7], speed: 0.12 },
        punch: { frames: [8, 9, 10], speed: 0.08 },
        kick: { frames: [11, 12, 13], speed: 0.08 },
        special: { frames: [14, 15, 16, 17], speed: 0.1 },
        parry: { frames: [18, 19], speed: 0.1 },
        hurt: { frames: [20, 21], speed: 0.1 }
      }
    },
    portraitSprite: {
      imageSrc: "assets/sprites/volti_quin/hero.png",
      frameWidth: 64,
      frameHeight: 64,
      animations: { idle: { frames: [0], speed: 1 } }
    },
    combos: [{ name: "Chain Lightning", sequence: ['punch', 'punch', 'kick'], specialId: 'special1' }],
    theme: "assets/audio/themes/volti_quin.mp3"
  },
  {
    id: 45,
    name: "Umbra",
    nickname: "Umbra",
    health: 165,
    attack: 18,
    speed: 3.6,
    specialPower: 42,
    spriteData: {
      imageSrc: "assets/sprites/umbra/sprite.png",
      frameWidth: 64,
      frameHeight: 64,
      animations: {
        idle: { frames: [0, 1, 2, 3], speed: 0.15 },
        walk: { frames: [4, 5, 6, 7], speed: 0.12 },
        punch: { frames: [8, 9, 10], speed: 0.08 },
        kick: { frames: [11, 12, 13], speed: 0.08 },
        special: { frames: [14, 15, 16, 17], speed: 0.1 },
        parry: { frames: [18, 19], speed: 0.1 },
        hurt: { frames: [20, 21], speed: 0.1 }
      }
    },
    portraitSprite: {
      imageSrc: "assets/sprites/umbra/hero.png",
      frameWidth: 64,
      frameHeight: 64,
      animations: { idle: { frames: [0], speed: 1 } }
    },
    combos: [{ name: "White Orb Creation", sequence: ['punch', 'punch', 'kick'], specialId: 'special1' }],
    theme: "assets/audio/themes/umbra.mp3"
  },
  {
    id: 46,
    name: "Furtrin",
    nickname: "Furtrin",
    health: 160,
    attack: 28,
    speed: 2.9,
    specialPower: 29,
    spriteData: {
      imageSrc: "assets/sprites/furtrin/sprite.png",
      frameWidth: 64,
      frameHeight: 64,
      animations: {
        idle: { frames: [0, 1, 2, 3], speed: 0.15 },
        walk: { frames: [4, 5, 6, 7], speed: 0.12 },
        punch: { frames: [8, 9, 10], speed: 0.08 },
        kick: { frames: [11, 12, 13], speed: 0.08 },
        special: { frames: [14, 15, 16, 17], speed: 0.1 },
        parry: { frames: [18, 19], speed: 0.1 },
        hurt: { frames: [20, 21], speed: 0.1 }
      }
    },
    portraitSprite: {
      imageSrc: "assets/sprites/furtrin/hero.png",
      frameWidth: 64,
      frameHeight: 64,
      animations: { idle: { frames: [0], speed: 1 } }
    },
    combos: [{ name: "Frost Cleave", sequence: ['punch', 'punch', 'kick'], specialId: 'special1' }],
    theme: "assets/audio/themes/furtrin.mp3"
  },
  {
    id: 47,
    name: "Caius",
    nickname: "Caius",
    health: 150,
    attack: 24,
    speed: 3.4,
    specialPower: 29,
    spriteData: {
      imageSrc: "assets/sprites/caius/sprite.png",
      frameWidth: 64,
      frameHeight: 64,
      animations: {
        idle: { frames: [0, 1, 2, 3], speed: 0.15 },
        walk: { frames: [4, 5, 6, 7], speed: 0.12 },
        punch: { frames: [8, 9, 10], speed: 0.08 },
        kick: { frames: [11, 12, 13], speed: 0.08 },
        special: { frames: [14, 15, 16, 17], speed: 0.1 },
        parry: { frames: [18, 19], speed: 0.1 },
        hurt: { frames: [20, 21], speed: 0.1 }
      }
    },
    portraitSprite: {
      imageSrc: "assets/sprites/caius/hero.png",
      frameWidth: 64,
      frameHeight: 64,
      animations: { idle: { frames: [0], speed: 1 } }
    },
    combos: [{ name: "Righteous Strike", sequence: ['punch', 'punch', 'kick'], specialId: 'special1' }],
    theme: "assets/audio/themes/caius.mp3"
  },
  {
    id: 48,
    name: "Eris",
    nickname: "Eris",
    health: 105,
    attack: 14,
    speed: 4.0,
    specialPower: 34,
    spriteData: {
      imageSrc: "assets/sprites/eris/sprite.png",
      frameWidth: 64,
      frameHeight: 64,
      animations: {
        idle: { frames: [0, 1, 2, 3], speed: 0.15 },
        walk: { frames: [4, 5, 6, 7], speed: 0.12 },
        punch: { frames: [8, 9, 10], speed: 0.08 },
        kick: { frames: [11, 12, 13], speed: 0.08 },
        special: { frames: [14, 15, 16, 17], speed: 0.1 },
        parry: { frames: [18, 19], speed: 0.1 },
        hurt: { frames: [20, 21], speed: 0.1 }
      }
    },
    portraitSprite: {
      imageSrc: "assets/sprites/eris/hero.png",
      frameWidth: 64,
      frameHeight: 64,
      animations: { idle: { frames: [0], speed: 1 } }
    },
    combos: [{ name: "Code Tendril", sequence: ['punch', 'punch', 'kick'], specialId: 'special1' }],
    theme: "assets/audio/themes/eris.mp3"
  },
  {
    id: 49,
    name: "Halal",
    nickname: "Halal",
    health: 135,
    attack: 27,
    speed: 3.3,
    specialPower: 28,
    spriteData: {
      imageSrc: "assets/sprites/halal/sprite.png",
      frameWidth: 64,
      frameHeight: 64,
      animations: {
        idle: { frames: [0, 1, 2, 3], speed: 0.15 },
        walk: { frames: [4, 5, 6, 7], speed: 0.12 },
        punch: { frames: [8, 9, 10], speed: 0.08 },
        kick: { frames: [11, 12, 13], speed: 0.08 },
        special: { frames: [14, 15, 16, 17], speed: 0.1 },
        parry: { frames: [18, 19], speed: 0.1 },
        hurt: { frames: [20, 21], speed: 0.1 }
      }
    },
    portraitSprite: {
      imageSrc: "assets/sprites/halal/hero.png",
      frameWidth: 64,
      frameHeight: 64,
      animations: { idle: { frames: [0], speed: 1 } }
    },
    combos: [{ name: "Soul Devour", sequence: ['punch', 'punch', 'kick'], specialId: 'special1' }],
    theme: "assets/audio/themes/halal.mp3"
  },
  {
    id: 50,
    name: "Ferhren‑Kah",
    nickname: "Ferhren",
    health: 145,
    attack: 21,
    speed: 3.3,
    specialPower: 36,
    spriteData: {
      imageSrc: "assets/sprites/ferhren_kah/sprite.png",
      frameWidth: 64,
      frameHeight: 64,
      animations: {
        idle: { frames: [0, 1, 2, 3], speed: 0.15 },
        walk: { frames: [4, 5, 6, 7], speed: 0.12 },
        punch: { frames: [8, 9, 10], speed: 0.08 },
        kick: { frames: [11, 12, 13], speed: 0.08 },
        special: { frames: [14, 15, 16, 17], speed: 0.1 },
        parry: { frames: [18, 19], speed: 0.1 },
        hurt: { frames: [20, 21], speed: 0.1 }
      }
    },
    portraitSprite: {
      imageSrc: "assets/sprites/ferhren_kah/hero.png",
      frameWidth: 64,
      frameHeight: 64,
      animations: { idle: { frames: [0], speed: 1 } }
    },
    combos: [{ name: "Ankh of Life", sequence: ['punch', 'punch', 'kick'], specialId: 'special1' }],
    theme: "assets/audio/themes/ferhren_kah.mp3"
  },
  {
    id: 51,
    name: "Grengar",
    nickname: "Grengar",
    health: 105,
    attack: 15,
    speed: 3.5,
    specialPower: 29,
    spriteData: {
      imageSrc: "assets/sprites/grengar/sprite.png",
      frameWidth: 64,
      frameHeight: 64,
      animations: {
        idle: { frames: [0, 1, 2, 3], speed: 0.15 },
        walk: { frames: [4, 5, 6, 7], speed: 0.12 },
        punch: { frames: [8, 9, 10], speed: 0.08 },
        kick: { frames: [11, 12, 13], speed: 0.08 },
        special: { frames: [14, 15, 16, 17], speed: 0.1 },
        parry: { frames: [18, 19], speed: 0.1 },
        hurt: { frames: [20, 21], speed: 0.1 }
      }
    },
    portraitSprite: {
      imageSrc: "assets/sprites/grengar/hero.png",
      frameWidth: 64,
      frameHeight: 64,
      animations: { idle: { frames: [0], speed: 1 } }
    },
    combos: [{ name: "Healing Note", sequence: ['punch', 'punch', 'kick'], specialId: 'special1' }],
    theme: "assets/audio/themes/grengar.mp3"
  },
  {
    id: 52,
    name: "Rust",
    nickname: "Rust",
    health: 140,
    attack: 24,
    speed: 3.3,
    specialPower: 28,
    spriteData: {
      imageSrc: "assets/sprites/rust/sprite.png",
      frameWidth: 64,
      frameHeight: 64,
      animations: {
        idle: { frames: [0, 1, 2, 3], speed: 0.15 },
        walk: { frames: [4, 5, 6, 7], speed: 0.12 },
        punch: { frames: [8, 9, 10], speed: 0.08 },
        kick: { frames: [11, 12, 13], speed: 0.08 },
        special: { frames: [14, 15, 16, 17], speed: 0.1 },
        parry: { frames: [18, 19], speed: 0.1 },
        hurt: { frames: [20, 21], speed: 0.1 }
      }
    },
    portraitSprite: {
      imageSrc: "assets/sprites/rust/hero.png",
      frameWidth: 64,
      frameHeight: 64,
      animations: { idle: { frames: [0], speed: 1 } }
    },
    combos: [{ name: "Freeze Ray", sequence: ['punch', 'punch', 'kick'], specialId: 'special1' }],
    theme: "assets/audio/themes/rust.mp3"
  },
  {
    id: 53,
    name: "Feng Xiang",
    nickname: "Feng",
    health: 120,
    attack: 21,
    speed: 4.3,
    specialPower: 34,
    spriteData: {
      imageSrc: "assets/sprites/feng_xiang/sprite.png",
      frameWidth: 64,
      frameHeight: 64,
      animations: {
        idle: { frames: [0, 1, 2, 3], speed: 0.15 },
        walk: { frames: [4, 5, 6, 7], speed: 0.12 },
        punch: { frames: [8, 9, 10], speed: 0.08 },
        kick: { frames: [11, 12, 13], speed: 0.08 },
        special: { frames: [14, 15, 16, 17], speed: 0.1 },
        parry: { frames: [18, 19], speed: 0.1 },
        hurt: { frames: [20, 21], speed: 0.1 }
      }
    },
    portraitSprite: {
      imageSrc: "assets/sprites/feng_xiang/hero.png",
      frameWidth: 64,
      frameHeight: 64,
      animations: { idle: { frames: [0], speed: 1 } }
    },
    combos: [{ name: "Lightning Dash", sequence: ['punch', 'punch', 'kick'], specialId: 'special1' }],
    theme: "assets/audio/themes/feng_xiang.mp3"
  },
  {
    id: 54,
    name: "Mayine",
    nickname: "Mayine",
    health: 125,
    attack: 15,
    speed: 3.6,
    specialPower: 40,
    spriteData: {
      imageSrc: "assets/sprites/mayine/sprite.png",
      frameWidth: 64,
      frameHeight: 64,
      animations: {
        idle: { frames: [0, 1, 2, 3], speed: 0.15 },
        walk: { frames: [4, 5, 6, 7], speed: 0.12 },
        punch: { frames: [8, 9, 10], speed: 0.08 },
        kick: { frames: [11, 12, 13], speed: 0.08 },
        special: { frames: [14, 15, 16, 17], speed: 0.1 },
        parry: { frames: [18, 19], speed: 0.1 },
        hurt: { frames: [20, 21], speed: 0.1 }
      }
    },
    portraitSprite: {
      imageSrc: "assets/sprites/mayine/hero.png",
      frameWidth: 64,
      frameHeight: 64,
      animations: { idle: { frames: [0], speed: 1 } }
    },
    combos: [{ name: "Summon Golem", sequence: ['punch', 'punch', 'kick'], specialId: 'special1' }],
    theme: "assets/audio/themes/mayine.mp3"
  },
  {
    id: 55,
    name: "Pahilos",
    nickname: "Pahilos",
    health: 135,
    attack: 18,
    speed: 3.5,
    specialPower: 26,
    spriteData: {
      imageSrc: "assets/sprites/pahilos/sprite.png",
      frameWidth: 64,
      frameHeight: 64,
      animations: {
        idle: { frames: [0, 1, 2, 3], speed: 0.15 },
        walk: { frames: [4, 5, 6, 7], speed: 0.12 },
        punch: { frames: [8, 9, 10], speed: 0.08 },
        kick: { frames: [11, 12, 13], speed: 0.08 },
        special: { frames: [14, 15, 16, 17], speed: 0.1 },
        parry: { frames: [18, 19], speed: 0.1 },
        hurt: { frames: [20, 21], speed: 0.1 }
      }
    },
    portraitSprite: {
      imageSrc: "assets/sprites/pahilos/hero.png",
      frameWidth: 64,
      frameHeight: 64,
      animations: { idle: { frames: [0], speed: 1 } }
    },
    combos: [{ name: "Healing Touch", sequence: ['punch', 'punch', 'kick'], specialId: 'special1' }],
    theme: "assets/audio/themes/pahilos.mp3"
  },
  {
    id: 56,
    name: "Rexingu Raide",
    nickname: "Rexi",
    health: 115,
    attack: 23,
    speed: 4.0,
    specialPower: 28,
    spriteData: {
      imageSrc: "assets/sprites/rexingu_raide/sprite.png",
      frameWidth: 64,
      frameHeight: 64,
      animations: {
        idle: { frames: [0, 1, 2, 3], speed: 0.15 },
        walk: { frames: [4, 5, 6, 7], speed: 0.12 },
        punch: { frames: [8, 9, 10], speed: 0.08 },
        kick: { frames: [11, 12, 13], speed: 0.08 },
        special: { frames: [14, 15, 16, 17], speed: 0.1 },
        parry: { frames: [18, 19], speed: 0.1 },
        hurt: { frames: [20, 21], speed: 0.1 }
      }
    },
    portraitSprite: {
      imageSrc: "assets/sprites/rexingu_raide/hero.png",
      frameWidth: 64,
      frameHeight: 64,
      animations: { idle: { frames: [0], speed: 1 } }
    },
    combos: [{ name: "Whip Crack", sequence: ['punch', 'punch', 'kick'], specialId: 'special1' }],
    theme: "assets/audio/themes/rexingu_raide.mp3"
  },
  {
    id: 57,
    name: "Morrigan",
    nickname: "Morrigan",
    health: 135,
    attack: 23,
    speed: 4.0,
    specialPower: 32,
    spriteData: {
      imageSrc: "assets/sprites/morrigan/sprite.png",
      frameWidth: 64,
      frameHeight: 64,
      animations: {
        idle: { frames: [0, 1, 2, 3], speed: 0.15 },
        walk: { frames: [4, 5, 6, 7], speed: 0.12 },
        punch: { frames: [8, 9, 10], speed: 0.08 },
        kick: { frames: [11, 12, 13], speed: 0.08 },
        special: { frames: [14, 15, 16, 17], speed: 0.1 },
        parry: { frames: [18, 19], speed: 0.1 },
        hurt: { frames: [20, 21], speed: 0.1 }
      }
    },
    portraitSprite: {
      imageSrc: "assets/sprites/morrigan/hero.png",
      frameWidth: 64,
      frameHeight: 64,
      animations: { idle: { frames: [0], speed: 1 } }
    },
    combos: [{ name: "Prophecy Strike", sequence: ['punch', 'punch', 'kick'], specialId: 'special1' }],
    theme: "assets/audio/themes/morrigan.mp3"
  },
  {
    id: 58,
    name: "Kael",
    nickname: "Kael",
    health: 115,
    attack: 23,
    speed: 4.0,
    specialPower: 31,
    spriteData: {
      imageSrc: "assets/sprites/kael/sprite.png",
      frameWidth: 64,
      frameHeight: 64,
      animations: {
        idle: { frames: [0, 1, 2, 3], speed: 0.15 },
        walk: { frames: [4, 5, 6, 7], speed: 0.12 },
        punch: { frames: [8, 9, 10], speed: 0.08 },
        kick: { frames: [11, 12, 13], speed: 0.08 },
        special: { frames: [14, 15, 16, 17], speed: 0.1 },
        parry: { frames: [18, 19], speed: 0.1 },
        hurt: { frames: [20, 21], speed: 0.1 }
      }
    },
    portraitSprite: {
      imageSrc: "assets/sprites/kael/hero.png",
      frameWidth: 64,
      frameHeight: 64,
      animations: { idle: { frames: [0], speed: 1 } }
    },
    combos: [{ name: "Lightning Bolt", sequence: ['punch', 'punch', 'kick'], specialId: 'special1' }],
    theme: "assets/audio/themes/kael.mp3"
  },
  {
    id: 59,
    name: "Nyx",
    nickname: "Nyx",
    health: 155,
    attack: 19,
    speed: 3.6,
    specialPower: 40,
    spriteData: {
      imageSrc: "assets/sprites/nyx/sprite.png",
      frameWidth: 64,
      frameHeight: 64,
      animations: {
        idle: { frames: [0, 1, 2, 3], speed: 0.15 },
        walk: { frames: [4, 5, 6, 7], speed: 0.12 },
        punch: { frames: [8, 9, 10], speed: 0.08 },
        kick: { frames: [11, 12, 13], speed: 0.08 },
        special: { frames: [14, 15, 16, 17], speed: 0.1 },
        parry: { frames: [18, 19], speed: 0.1 },
        hurt: { frames: [20, 21], speed: 0.1 }
      }
    },
    portraitSprite: {
      imageSrc: "assets/sprites/nyx/hero.png",
      frameWidth: 64,
      frameHeight: 64,
      animations: { idle: { frames: [0], speed: 1 } }
    },
    combos: [{ name: "Shadow Tendrils", sequence: ['punch', 'punch', 'kick'], specialId: 'special1' }],
    theme: "assets/audio/themes/nyx.mp3"
  },
  {
    id: 60,
    name: "Márquez",
    nickname: "Márquez",
    health: 135,
    attack: 29,
    speed: 4.0,
    specialPower: 23,
    spriteData: {
      imageSrc: "assets/sprites/marquez/sprite.png",
      frameWidth: 64,
      frameHeight: 64,
      animations: {
        idle: { frames: [0, 1, 2, 3], speed: 0.15 },
        walk: { frames: [4, 5, 6, 7], speed: 0.12 },
        punch: { frames: [8, 9, 10], speed: 0.08 },
        kick: { frames: [11, 12, 13], speed: 0.08 },
        special: { frames: [14, 15, 16, 17], speed: 0.1 },
        parry: { frames: [18, 19], speed: 0.1 },
        hurt: { frames: [20, 21], speed: 0.1 }
      }
    },
    portraitSprite: {
      imageSrc: "assets/sprites/marquez/hero.png",
      frameWidth: 64,
      frameHeight: 64,
      animations: { idle: { frames: [0], speed: 1 } }
    },
    combos: [{ name: "Uppercut", sequence: ['punch', 'punch', 'kick'], specialId: 'special1' }],
    theme: "assets/audio/themes/marquez.mp3"
  },
  {
    id: 61,
    name: "Victtoria",
    nickname: "Victtoria",
    health: 120,
    attack: 23,
    speed: 4.0,
    specialPower: 31,
    spriteData: {
      imageSrc: "assets/sprites/victtoria/sprite.png",
      frameWidth: 64,
      frameHeight: 64,
      animations: {
        idle: { frames: [0, 1, 2, 3], speed: 0.15 },
        walk: { frames: [4, 5, 6, 7], speed: 0.12 },
        punch: { frames: [8, 9, 10], speed: 0.08 },
        kick: { frames: [11, 12, 13], speed: 0.08 },
        special: { frames: [14, 15, 16, 17], speed: 0.1 },
        parry: { frames: [18, 19], speed: 0.1 },
        hurt: { frames: [20, 21], speed: 0.1 }
      }
    },
    portraitSprite: {
      imageSrc: "assets/sprites/victtoria/hero.png",
      frameWidth: 64,
      frameHeight: 64,
      animations: { idle: { frames: [0], speed: 1 } }
    },
    combos: [{ name: "Purifying Thrust", sequence: ['punch', 'punch', 'kick'], specialId: 'special1' }],
    theme: "assets/audio/themes/victtoria.mp3"
  },
  {
    id: 62,
    name: "Xian Ju",
    nickname: "Xian",
    health: 135,
    attack: 16,
    speed: 3.5,
    specialPower: 38,
    spriteData: {
      imageSrc: "assets/sprites/xian_ju/sprite.png",
      frameWidth: 64,
      frameHeight: 64,
      animations: {
        idle: { frames: [0, 1, 2, 3], speed: 0.15 },
        walk: { frames: [4, 5, 6, 7], speed: 0.12 },
        punch: { frames: [8, 9, 10], speed: 0.08 },
        kick: { frames: [11, 12, 13], speed: 0.08 },
        special: { frames: [14, 15, 16, 17], speed: 0.1 },
        parry: { frames: [18, 19], speed: 0.1 },
        hurt: { frames: [20, 21], speed: 0.1 }
      }
    },
    portraitSprite: {
      imageSrc: "assets/sprites/xian_ju/hero.png",
      frameWidth: 64,
      frameHeight: 64,
      animations: { idle: { frames: [0], speed: 1 } }
    },
    combos: [{ name: "Judgment", sequence: ['punch', 'punch', 'kick'], specialId: 'special1' }],
    theme: "assets/audio/themes/xian_ju.mp3"
  },
  {
    id: 63,
    name: "Apepitoski",
    nickname: "Apepitoski",
    health: 115,
    attack: 24,
    speed: 3.5,
    specialPower: 27,
    spriteData: {
      imageSrc: "assets/sprites/apepitoski/sprite.png",
      frameWidth: 64,
      frameHeight: 64,
      animations: {
        idle: { frames: [0, 1, 2, 3], speed: 0.15 },
        walk: { frames: [4, 5, 6, 7], speed: 0.12 },
        punch: { frames: [8, 9, 10], speed: 0.08 },
        kick: { frames: [11, 12, 13], speed: 0.08 },
        special: { frames: [14, 15, 16, 17], speed: 0.1 },
        parry: { frames: [18, 19], speed: 0.1 },
        hurt: { frames: [20, 21], speed: 0.1 }
      }
    },
    portraitSprite: {
      imageSrc: "assets/sprites/apepitoski/hero.png",
      frameWidth: 64,
      frameHeight: 64,
      animations: { idle: { frames: [0], speed: 1 } }
    },
    combos: [{ name: "Serpent's Embrace", sequence: ['punch', 'punch', 'kick'], specialId: 'special1' }],
    theme: "assets/audio/themes/apepitoski.mp3"
  },
  {
    id: 64,
    name: "Feroski",
    nickname: "Feroski",
    health: 165,
    attack: 25,
    speed: 3.2,
    specialPower: 23,
    spriteData: {
      imageSrc: "assets/sprites/feroski/sprite.png",
      frameWidth: 64,
      frameHeight: 64,
      animations: {
        idle: { frames: [0, 1, 2, 3], speed: 0.15 },
        walk: { frames: [4, 5, 6, 7], speed: 0.12 },
        punch: { frames: [8, 9, 10], speed: 0.08 },
        kick: { frames: [11, 12, 13], speed: 0.08 },
        special: { frames: [14, 15, 16, 17], speed: 0.1 },
        parry: { frames: [18, 19], speed: 0.1 },
        hurt: { frames: [20, 21], speed: 0.1 }
      }
    },
    portraitSprite: {
      imageSrc: "assets/sprites/feroski/hero.png",
      frameWidth: 64,
      frameHeight: 64,
      animations: { idle: { frames: [0], speed: 1 } }
    },
    combos: [{ name: "Looping Strike", sequence: ['punch', 'punch', 'kick'], specialId: 'special1' }],
    theme: "assets/audio/themes/feroski.mp3"
  },
  {
    id: 65,
    name: "Aulicu",
    nickname: "Aulicu",
    health: 145,
    attack: 27,
    speed: 3.3,
    specialPower: 23,
    spriteData: {
      imageSrc: "assets/sprites/aulicu/sprite.png",
      frameWidth: 64,
      frameHeight: 64,
      animations: {
        idle: { frames: [0, 1, 2, 3], speed: 0.15 },
        walk: { frames: [4, 5, 6, 7], speed: 0.12 },
        punch: { frames: [8, 9, 10], speed: 0.08 },
        kick: { frames: [11, 12, 13], speed: 0.08 },
        special: { frames: [14, 15, 16, 17], speed: 0.1 },
        parry: { frames: [18, 19], speed: 0.1 },
        hurt: { frames: [20, 21], speed: 0.1 }
      }
    },
    portraitSprite: {
      imageSrc: "assets/sprites/aulicu/hero.png",
      frameWidth: 64,
      frameHeight: 64,
      animations: { idle: { frames: [0], speed: 1 } }
    },
    combos: [{ name: "Forge Shock", sequence: ['punch', 'punch', 'kick'], specialId: 'special1' }],
    theme: "assets/audio/themes/aulicu.mp3"
  },
  {
    id: 66,
    name: "Omega",
    nickname: "Omega",
    health: 135,
    attack: 26,
    speed: 3.8,
    specialPower: 27,
    spriteData: {
      imageSrc: "assets/sprites/omega/sprite.png",
      frameWidth: 64,
      frameHeight: 64,
      animations: {
        idle: { frames: [0, 1, 2, 3], speed: 0.15 },
        walk: { frames: [4, 5, 6, 7], speed: 0.12 },
        punch: { frames: [8, 9, 10], speed: 0.08 },
        kick: { frames: [11, 12, 13], speed: 0.08 },
        special: { frames: [14, 15, 16, 17], speed: 0.1 },
        parry: { frames: [18, 19], speed: 0.1 },
        hurt: { frames: [20, 21], speed: 0.1 }
      }
    },
    portraitSprite: {
      imageSrc: "assets/sprites/omega/hero.png",
      frameWidth: 64,
      frameHeight: 64,
      animations: { idle: { frames: [0], speed: 1 } }
    },
    combos: [{ name: "Severance Thrust", sequence: ['punch', 'punch', 'kick'], specialId: 'special1' }],
    theme: "assets/audio/themes/omega.mp3"
  },
  {
    id: 67,
    name: "Keirnoor",
    nickname: "Keirnoor",
    health: 145,
    attack: 19,
    speed: 3.8,
    specialPower: 40,
    spriteData: {
      imageSrc: "assets/sprites/keirnoor/sprite.png",
      frameWidth: 64,
      frameHeight: 64,
      animations: {
        idle: { frames: [0, 1, 2, 3], speed: 0.15 },
        walk: { frames: [4, 5, 6, 7], speed: 0.12 },
        punch: { frames: [8, 9, 10], speed: 0.08 },
        kick: { frames: [11, 12, 13], speed: 0.08 },
        special: { frames: [14, 15, 16, 17], speed: 0.1 },
        parry: { frames: [18, 19], speed: 0.1 },
        hurt: { frames: [20, 21], speed: 0.1 }
      }
    },
    portraitSprite: {
      imageSrc: "assets/sprites/keirnoor/hero.png",
      frameWidth: 64,
      frameHeight: 64,
      animations: { idle: { frames: [0], speed: 1 } }
    },
    combos: [{ name: "Cosmic Rebuke", sequence: ['punch', 'punch', 'kick'], specialId: 'special1' }],
    theme: "assets/audio/themes/keirnoor.mp3"
  },
  {
    id: 68,
    name: "Rezee Kei",
    nickname: "Rezee",
    health: 105,
    attack: 25,
    speed: 3.6,
    specialPower: 20,
    spriteData: {
      imageSrc: "assets/sprites/rezee_kei/sprite.png",
      frameWidth: 64,
      frameHeight: 64,
      animations: {
        idle: { frames: [0, 1, 2, 3], speed: 0.15 },
        walk: { frames: [4, 5, 6, 7], speed: 0.12 },
        punch: { frames: [8, 9, 10], speed: 0.08 },
        kick: { frames: [11, 12, 13], speed: 0.08 },
        special: { frames: [14, 15, 16, 17], speed: 0.1 },
        parry: { frames: [18, 19], speed: 0.1 },
        hurt: { frames: [20, 21], speed: 0.1 }
      }
    },
    portraitSprite: {
      imageSrc: "assets/sprites/rezee_kei/hero.png",
      frameWidth: 64,
      frameHeight: 64,
      animations: { idle: { frames: [0], speed: 1 } }
    },
    combos: [{ name: "Suppressing Fire", sequence: ['punch', 'punch', 'kick'], specialId: 'special1' }],
    theme: "assets/audio/themes/rezee_kei.mp3"
  },
  {
    id: 69,
    name: "Icaris Mezong",
    nickname: "Icaris",
    health: 125,
    attack: 13,
    speed: 3.3,
    specialPower: 39,
    spriteData: {
      imageSrc: "assets/sprites/icaris_mezong/sprite.png",
      frameWidth: 64,
      frameHeight: 64,
      animations: {
        idle: { frames: [0, 1, 2, 3], speed: 0.15 },
        walk: { frames: [4, 5, 6, 7], speed: 0.12 },
        punch: { frames: [8, 9, 10], speed: 0.08 },
        kick: { frames: [11, 12, 13], speed: 0.08 },
        special: { frames: [14, 15, 16, 17], speed: 0.1 },
        parry: { frames: [18, 19], speed: 0.1 },
        hurt: { frames: [20, 21], speed: 0.1 }
      }
    },
    portraitSprite: {
      imageSrc: "assets/sprites/icaris_mezong/hero.png",
      frameWidth: 64,
      frameHeight: 64,
      animations: { idle: { frames: [0], speed: 1 } }
    },
    combos: [{ name: "Construct Wall", sequence: ['punch', 'punch', 'kick'], specialId: 'special1' }],
    theme: "assets/audio/themes/icaris_mezong.mp3"
  },
  {
    id: 70,
    name: "Yorana Perguise",
    nickname: "Yorana",
    health: 115,
    attack: 14,
    speed: 3.5,
    specialPower: 39,
    spriteData: {
      imageSrc: "assets/sprites/yorana_perguise/sprite.png",
      frameWidth: 64,
      frameHeight: 64,
      animations: {
        idle: { frames: [0, 1, 2, 3], speed: 0.15 },
        walk: { frames: [4, 5, 6, 7], speed: 0.12 },
        punch: { frames: [8, 9, 10], speed: 0.08 },
        kick: { frames: [11, 12, 13], speed: 0.08 },
        special: { frames: [14, 15, 16, 17], speed: 0.1 },
        parry: { frames: [18, 19], speed: 0.1 },
        hurt: { frames: [20, 21], speed: 0.1 }
      }
    },
    portraitSprite: {
      imageSrc: "assets/sprites/yorana_perguise/hero.png",
      frameWidth: 64,
      frameHeight: 64,
      animations: { idle: { frames: [0], speed: 1 } }
    },
    combos: [{ name: "Glacial Spike", sequence: ['punch', 'punch', 'kick'], specialId: 'special1' }],
    theme: "assets/audio/themes/yorana_perguise.mp3"
  },
  {
    id: 71,
    name: "Saselubee",
    nickname: "Saselubee",
    health: 105,
    attack: 14,
    speed: 4.0,
    specialPower: 36,
    spriteData: {
      imageSrc: "assets/sprites/saselubee/sprite.png",
      frameWidth: 64,
      frameHeight: 64,
      animations: {
        idle: { frames: [0, 1, 2, 3], speed: 0.15 },
        walk: { frames: [4, 5, 6, 7], speed: 0.12 },
        punch: { frames: [8, 9, 10], speed: 0.08 },
        kick: { frames: [11, 12, 13], speed: 0.08 },
        special: { frames: [14, 15, 16, 17], speed: 0.1 },
        parry: { frames: [18, 19], speed: 0.1 },
        hurt: { frames: [20, 21], speed: 0.1 }
      }
    },
    portraitSprite: {
      imageSrc: "assets/sprites/saselubee/hero.png",
      frameWidth: 64,
      frameHeight: 64,
      animations: { idle: { frames: [0], speed: 1 } }
    },
    combos: [{ name: "Shard Swarm", sequence: ['punch', 'punch', 'kick'], specialId: 'special1' }],
    theme: "assets/audio/themes/saselubee.mp3"
  },
  {
    id: 72,
    name: "Luciani Buwalkot",
    nickname: "Luciani",
    health: 105,
    attack: 21,
    speed: 4.3,
    specialPower: 20,
    spriteData: {
      imageSrc: "assets/sprites/luciani_buwalkot/sprite.png",
      frameWidth: 64,
      frameHeight: 64,
      animations: {
        idle: { frames: [0, 1, 2, 3], speed: 0.15 },
        walk: { frames: [4, 5, 6, 7], speed: 0.12 },
        punch: { frames: [8, 9, 10], speed: 0.08 },
        kick: { frames: [11, 12, 13], speed: 0.08 },
        special: { frames: [14, 15, 16, 17], speed: 0.1 },
        parry: { frames: [18, 19], speed: 0.1 },
        hurt: { frames: [20, 21], speed: 0.1 }
      }
    },
    portraitSprite: {
      imageSrc: "assets/sprites/luciani_buwalkot/hero.png",
      frameWidth: 64,
      frameHeight: 64,
      animations: { idle: { frames: [0], speed: 1 } }
    },
    combos: [{ name: "Truth Arc", sequence: ['punch', 'punch', 'kick'], specialId: 'special1' }],
    theme: "assets/audio/themes/luciani_buwalkot.mp3"
  },
  {
    id: 73,
    name: "Hana Beehee",
    nickname: "Hana",
    health: 135,
    attack: 25,
    speed: 3.5,
    specialPower: 23,
    spriteData: {
      imageSrc: "assets/sprites/hana_beehee/sprite.png",
      frameWidth: 64,
      frameHeight: 64,
      animations: {
        idle: { frames: [0, 1, 2, 3], speed: 0.15 },
        walk: { frames: [4, 5, 6, 7], speed: 0.12 },
        punch: { frames: [8, 9, 10], speed: 0.08 },
        kick: { frames: [11, 12, 13], speed: 0.08 },
        special: { frames: [14, 15, 16, 17], speed: 0.1 },
        parry: { frames: [18, 19], speed: 0.1 },
        hurt: { frames: [20, 21], speed: 0.1 }
      }
    },
    portraitSprite: {
      imageSrc: "assets/sprites/hana_beehee/hero.png",
      frameWidth: 64,
      frameHeight: 64,
      animations: { idle: { frames: [0], speed: 1 } }
    },
    combos: [{ name: "Extended Strike", sequence: ['punch', 'punch', 'kick'], specialId: 'special1' }],
    theme: "assets/audio/themes/hana_beehee.mp3"
  },
  {
    id: 74,
    name: "Nyitti Bemzong",
    nickname: "Nyitti",
    health: 105,
    attack: 13,
    speed: 3.5,
    specialPower: 35,
    spriteData: {
      imageSrc: "assets/sprites/nyitti_bemzong/sprite.png",
      frameWidth: 64,
      frameHeight: 64,
      animations: {
        idle: { frames: [0, 1, 2, 3], speed: 0.15 },
        walk: { frames: [4, 5, 6, 7], speed: 0.12 },
        punch: { frames: [8, 9, 10], speed: 0.08 },
        kick: { frames: [11, 12, 13], speed: 0.08 },
        special: { frames: [14, 15, 16, 17], speed: 0.1 },
        parry: { frames: [18, 19], speed: 0.1 },
        hurt: { frames: [20, 21], speed: 0.1 }
      }
    },
    portraitSprite: {
      imageSrc: "assets/sprites/nyitti_bemzong/hero.png",
      frameWidth: 64,
      frameHeight: 64,
      animations: { idle: { frames: [0], speed: 1 } }
    },
    combos: [{ name: "Recycling Beam", sequence: ['punch', 'punch', 'kick'], specialId: 'special1' }],
    theme: "assets/audio/themes/nyitti_bemzong.mp3"
  },
  {
    id: 75,
    name: "Bellaha Nexurfogus",
    nickname: "Bellaha",
    health: 110,
    attack: 13,
    speed: 3.3,
    specialPower: 37,
    spriteData: {
      imageSrc: "assets/sprites/bellaha_nexurfogus/sprite.png",
      frameWidth: 64,
      frameHeight: 64,
      animations: {
        idle: { frames: [0, 1, 2, 3], speed: 0.15 },
        walk: { frames: [4, 5, 6, 7], speed: 0.12 },
        punch: { frames: [8, 9, 10], speed: 0.08 },
        kick: { frames: [11, 12, 13], speed: 0.08 },
        special: { frames: [14, 15, 16, 17], speed: 0.1 },
        parry: { frames: [18, 19], speed: 0.1 },
        hurt: { frames: [20, 21], speed: 0.1 }
      }
    },
    portraitSprite: {
      imageSrc: "assets/sprites/bellaha_nexurfogus/hero.png",
      frameWidth: 64,
      frameHeight: 64,
      animations: { idle: { frames: [0], speed: 1 } }
    },
    combos: [{ name: "Rewind Wound", sequence: ['punch', 'punch', 'kick'], specialId: 'special1' }],
    theme: "assets/audio/themes/bellaha_nexurfogus.mp3"
  },
  {
    id: 76,
    name: "Reigna Nexurfogus",
    nickname: "Reigna",
    health: 135,
    attack: 27,
    speed: 3.3,
    specialPower: 23,
    spriteData: {
      imageSrc: "assets/sprites/reigna_nexurfogus/sprite.png",
      frameWidth: 64,
      frameHeight: 64,
      animations: {
        idle: { frames: [0, 1, 2, 3], speed: 0.15 },
        walk: { frames: [4, 5, 6, 7], speed: 0.12 },
        punch: { frames: [8, 9, 10], speed: 0.08 },
        kick: { frames: [11, 12, 13], speed: 0.08 },
        special: { frames: [14, 15, 16, 17], speed: 0.1 },
        parry: { frames: [18, 19], speed: 0.1 },
        hurt: { frames: [20, 21], speed: 0.1 }
      }
    },
    portraitSprite: {
      imageSrc: "assets/sprites/reigna_nexurfogus/hero.png",
      frameWidth: 64,
      frameHeight: 64,
      animations: { idle: { frames: [0], speed: 1 } }
    },
    combos: [{ name: "Humility's Edge", sequence: ['punch', 'punch', 'kick'], specialId: 'special1' }],
    theme: "assets/audio/themes/reigna_nexurfogus.mp3"
  },
  {
    id: 77,
    name: "Alionzar Nexurfogus",
    nickname: "Alionzar",
    health: 155,
    attack: 28,
    speed: 3.0,
    specialPower: 25,
    spriteData: {
      imageSrc: "assets/sprites/alionzar_nexurfogus/sprite.png",
      frameWidth: 64,
      frameHeight: 64,
      animations: {
        idle: { frames: [0, 1, 2, 3], speed: 0.15 },
        walk: { frames: [4, 5, 6, 7], speed: 0.12 },
        punch: { frames: [8, 9, 10], speed: 0.08 },
        kick: { frames: [11, 12, 13], speed: 0.08 },
        special: { frames: [14, 15, 16, 17], speed: 0.1 },
        parry: { frames: [18, 19], speed: 0.1 },
        hurt: { frames: [20, 21], speed: 0.1 }
      }
    },
    portraitSprite: {
      imageSrc: "assets/sprites/alionzar_nexurfogus/hero.png",
      frameWidth: 64,
      frameHeight: 64,
      animations: { idle: { frames: [0], speed: 1 } }
    },
    combos: [{ name: "Jade Cleave", sequence: ['punch', 'punch', 'kick'], specialId: 'special1' }],
    theme: "assets/audio/themes/alionzar_nexurfogus.mp3"
  },
  {
    id: 78,
    name: "Nialzu D Foryangrwa",
    nickname: "Nialzu",
    health: 155,
    attack: 26,
    speed: 3.0,
    specialPower: 27,
    spriteData: {
      imageSrc: "assets/sprites/nialzu_d_foryangrwa/sprite.png",
      frameWidth: 64,
      frameHeight: 64,
      animations: {
        idle: { frames: [0, 1, 2, 3], speed: 0.15 },
        walk: { frames: [4, 5, 6, 7], speed: 0.12 },
        punch: { frames: [8, 9, 10], speed: 0.08 },
        kick: { frames: [11, 12, 13], speed: 0.08 },
        special: { frames: [14, 15, 16, 17], speed: 0.1 },
        parry: { frames: [18, 19], speed: 0.1 },
        hurt: { frames: [20, 21], speed: 0.1 }
      }
    },
    portraitSprite: {
      imageSrc: "assets/sprites/nialzu_d_foryangrwa/hero.png",
      frameWidth: 64,
      frameHeight: 64,
      animations: { idle: { frames: [0], speed: 1 } }
    },
    combos: [{ name: "Crane's Mercy", sequence: ['punch', 'punch', 'kick'], specialId: 'special1' }],
    theme: "assets/audio/themes/nialzu_d_foryangrwa.mp3"
  },
  {
    id: 79,
    name: "Dedeinju Nexurfogus",
    nickname: "Dedeinju",
    health: 115,
    attack: 17,
    speed: 3.5,
    specialPower: 34,
    spriteData: {
      imageSrc: "assets/sprites/dedeinju_nexurfogus/sprite.png",
      frameWidth: 64,
      frameHeight: 64,
      animations: {
        idle: { frames: [0, 1, 2, 3], speed: 0.15 },
        walk: { frames: [4, 5, 6, 7], speed: 0.12 },
        punch: { frames: [8, 9, 10], speed: 0.08 },
        kick: { frames: [11, 12, 13], speed: 0.08 },
        special: { frames: [14, 15, 16, 17], speed: 0.1 },
        parry: { frames: [18, 19], speed: 0.1 },
        hurt: { frames: [20, 21], speed: 0.1 }
      }
    },
    portraitSprite: {
      imageSrc: "assets/sprites/dedeinju_nexurfogus/hero.png",
      frameWidth: 64,
      frameHeight: 64,
      animations: { idle: { frames: [0], speed: 1 } }
    },
    combos: [{ name: "Healing Embrace", sequence: ['punch', 'punch', 'kick'], specialId: 'special1' }],
    theme: "assets/audio/themes/dedeinju_nexurfogus.mp3"
  },
  {
    id: 80,
    name: "Mei Forsta",
    nickname: "Mei",
    health: 115,
    attack: 23,
    speed: 4.0,
    specialPower: 29,
    spriteData: {
      imageSrc: "assets/sprites/mei_forsta/sprite.png",
      frameWidth: 64,
      frameHeight: 64,
      animations: {
        idle: { frames: [0, 1, 2, 3], speed: 0.15 },
        walk: { frames: [4, 5, 6, 7], speed: 0.12 },
        punch: { frames: [8, 9, 10], speed: 0.08 },
        kick: { frames: [11, 12, 13], speed: 0.08 },
        special: { frames: [14, 15, 16, 17], speed: 0.1 },
        parry: { frames: [18, 19], speed: 0.1 },
        hurt: { frames: [20, 21], speed: 0.1 }
      }
    },
    portraitSprite: {
      imageSrc: "assets/sprites/mei_forsta/hero.png",
      frameWidth: 64,
      frameHeight: 64,
      animations: { idle: { frames: [0], speed: 1 } }
    },
    combos: [{ name: "Sworn Strike", sequence: ['punch', 'punch', 'kick'], specialId: 'special1' }],
    theme: "assets/audio/themes/mei_forsta.mp3"
  },
  {
    id: 81,
    name: "Zene Zene Sumala",
    nickname: "Zene",
    health: 115,
    attack: 25,
    speed: 3.6,
    specialPower: 22,
    spriteData: {
      imageSrc: "assets/sprites/zene_zene_sumala/sprite.png",
      frameWidth: 64,
      frameHeight: 64,
      animations: {
        idle: { frames: [0, 1, 2, 3], speed: 0.15 },
        walk: { frames: [4, 5, 6, 7], speed: 0.12 },
        punch: { frames: [8, 9, 10], speed: 0.08 },
        kick: { frames: [11, 12, 13], speed: 0.08 },
        special: { frames: [14, 15, 16, 17], speed: 0.1 },
        parry: { frames: [18, 19], speed: 0.1 },
        hurt: { frames: [20, 21], speed: 0.1 }
      }
    },
    portraitSprite: {
      imageSrc: "assets/sprites/zene_zene_sumala/hero.png",
      frameWidth: 64,
      frameHeight: 64,
      animations: { idle: { frames: [0], speed: 1 } }
    },
    combos: [{ name: "Wrath Shell", sequence: ['punch', 'punch', 'kick'], specialId: 'special1' }],
    theme: "assets/audio/themes/zene_zene_sumala.mp3"
  },
  {
    id: 82,
    name: "Caramia D Nexurfogus",
    nickname: "Caramia",
    health: 135,
    attack: 18,
    speed: 3.3,
    specialPower: 34,
    spriteData: {
      imageSrc: "assets/sprites/caramia_d_nexurfogus/sprite.png",
      frameWidth: 64,
      frameHeight: 64,
      animations: {
        idle: { frames: [0, 1, 2, 3], speed: 0.15 },
        walk: { frames: [4, 5, 6, 7], speed: 0.12 },
        punch: { frames: [8, 9, 10], speed: 0.08 },
        kick: { frames: [11, 12, 13], speed: 0.08 },
        special: { frames: [14, 15, 16, 17], speed: 0.1 },
        parry: { frames: [18, 19], speed: 0.1 },
        hurt: { frames: [20, 21], speed: 0.1 }
      }
    },
    portraitSprite: {
      imageSrc: "assets/sprites/caramia_d_nexurfogus/hero.png",
      frameWidth: 64,
      frameHeight: 64,
      animations: { idle: { frames: [0], speed: 1 } }
    },
    combos: [{ name: "Edict of Healing", sequence: ['punch', 'punch', 'kick'], specialId: 'special1' }],
    theme: "assets/audio/themes/caramia_d_nexurfogus.mp3"
  },
  {
    id: 83,
    name: "Aishala Fwehue",
    nickname: "Aishala",
    health: 105,
    attack: 21,
    speed: 4.0,
    specialPower: 37,
    spriteData: {
      imageSrc: "assets/sprites/aishala_fwehue/sprite.png",
      frameWidth: 64,
      frameHeight: 64,
      animations: {
        idle: { frames: [0, 1, 2, 3], speed: 0.15 },
        walk: { frames: [4, 5, 6, 7], speed: 0.12 },
        punch: { frames: [8, 9, 10], speed: 0.08 },
        kick: { frames: [11, 12, 13], speed: 0.08 },
        special: { frames: [14, 15, 16, 17], speed: 0.1 },
        parry: { frames: [18, 19], speed: 0.1 },
        hurt: { frames: [20, 21], speed: 0.1 }
      }
    },
    portraitSprite: {
      imageSrc: "assets/sprites/aishala_fwehue/hero.png",
      frameWidth: 64,
      frameHeight: 64,
      animations: { idle: { frames: [0], speed: 1 } }
    },
    combos: [{ name: "Forbidden Strike", sequence: ['punch', 'punch', 'kick'], specialId: 'special1' }],
    theme: "assets/audio/themes/aishala_fwehue.mp3"
  },
  {
    id: 84,
    name: "Feifeing Nexurfogus",
    nickname: "Feifeing",
    health: 115,
    attack: 17,
    speed: 3.5,
    specialPower: 34,
    spriteData: {
      imageSrc: "assets/sprites/feifeing_nexurfogus/sprite.png",
      frameWidth: 64,
      frameHeight: 64,
      animations: {
        idle: { frames: [0, 1, 2, 3], speed: 0.15 },
        walk: { frames: [4, 5, 6, 7], speed: 0.12 },
        punch: { frames: [8, 9, 10], speed: 0.08 },
        kick: { frames: [11, 12, 13], speed: 0.08 },
        special: { frames: [14, 15, 16, 17], speed: 0.1 },
        parry: { frames: [18, 19], speed: 0.1 },
        hurt: { frames: [20, 21], speed: 0.1 }
      }
    },
    portraitSprite: {
      imageSrc: "assets/sprites/feifeing_nexurfogus/hero.png",
      frameWidth: 64,
      frameHeight: 64,
      animations: { idle: { frames: [0], speed: 1 } }
    },
    combos: [{ name: "Renewing Light", sequence: ['punch', 'punch', 'kick'], specialId: 'special1' }],
    theme: "assets/audio/themes/feifeing_nexurfogus.mp3"
  },
  {
    id: 85,
    name: "Xarvi Nexurfogus",
    nickname: "Xarvi",
    health: 125,
    attack: 23,
    speed: 3.3,
    specialPower: 29,
    spriteData: {
      imageSrc: "assets/sprites/xarvi_nexurfogus/sprite.png",
      frameWidth: 64,
      frameHeight: 64,
      animations: {
        idle: { frames: [0, 1, 2, 3], speed: 0.15 },
        walk: { frames: [4, 5, 6, 7], speed: 0.12 },
        punch: { frames: [8, 9, 10], speed: 0.08 },
        kick: { frames: [11, 12, 13], speed: 0.08 },
        special: { frames: [14, 15, 16, 17], speed: 0.1 },
        parry: { frames: [18, 19], speed: 0.1 },
        hurt: { frames: [20, 21], speed: 0.1 }
      }
    },
    portraitSprite: {
      imageSrc: "assets/sprites/xarvi_nexurfogus/hero.png",
      frameWidth: 64,
      frameHeight: 64,
      animations: { idle: { frames: [0], speed: 1 } }
    },
    combos: [{ name: "Crushing Verdict", sequence: ['punch', 'punch', 'kick'], specialId: 'special1' }],
    theme: "assets/audio/themes/xarvi_nexurfogus.mp3"
  },
  {
    id: 86,
    name: "Elvee Zenforg",
    nickname: "Elvee",
    health: 105,
    attack: 20,
    speed: 4.5,
    specialPower: 34,
    spriteData: {
      imageSrc: "assets/sprites/elvee_zenforg/sprite.png",
      frameWidth: 64,
      frameHeight: 64,
      animations: {
        idle: { frames: [0, 1, 2, 3], speed: 0.15 },
        walk: { frames: [4, 5, 6, 7], speed: 0.12 },
        punch: { frames: [8, 9, 10], speed: 0.08 },
        kick: { frames: [11, 12, 13], speed: 0.08 },
        special: { frames: [14, 15, 16, 17], speed: 0.1 },
        parry: { frames: [18, 19], speed: 0.1 },
        hurt: { frames: [20, 21], speed: 0.1 }
      }
    },
    portraitSprite: {
      imageSrc: "assets/sprites/elvee_zenforg/hero.png",
      frameWidth: 64,
      frameHeight: 64,
      animations: { idle: { frames: [0], speed: 1 } }
    },
    combos: [{ name: "Time Punch", sequence: ['punch', 'punch', 'kick'], specialId: 'special1' }],
    theme: "assets/audio/themes/elvee_zenforg.mp3"
  },
  {
    id: 87,
    name: "Peitri Meimorguse",
    nickname: "Peitri",
    health: 135,
    attack: 15,
    speed: 3.0,
    specialPower: 32,
    spriteData: {
      imageSrc: "assets/sprites/peitri_meimorguse/sprite.png",
      frameWidth: 64,
      frameHeight: 64,
      animations: {
        idle: { frames: [0, 1, 2, 3], speed: 0.15 },
        walk: { frames: [4, 5, 6, 7], speed: 0.12 },
        punch: { frames: [8, 9, 10], speed: 0.08 },
        kick: { frames: [11, 12, 13], speed: 0.08 },
        special: { frames: [14, 15, 16, 17], speed: 0.1 },
        parry: { frames: [18, 19], speed: 0.1 },
        hurt: { frames: [20, 21], speed: 0.1 }
      }
    },
    portraitSprite: {
      imageSrc: "assets/sprites/peitri_meimorguse/hero.png",
      frameWidth: 64,
      frameHeight: 64,
      animations: { idle: { frames: [0], speed: 1 } }
    },
    combos: [{ name: "Unwoven Strike", sequence: ['punch', 'punch', 'kick'], specialId: 'special1' }],
    theme: "assets/audio/themes/peitri_meimorguse.mp3"
  },
  {
    id: 88,
    name: "Siteh Mah",
    nickname: "Siteh",
    health: 105,
    attack: 15,
    speed: 3.5,
    specialPower: 39,
    spriteData: {
      imageSrc: "assets/sprites/siteh_mah/sprite.png",
      frameWidth: 64,
      frameHeight: 64,
      animations: {
        idle: { frames: [0, 1, 2, 3], speed: 0.15 },
        walk: { frames: [4, 5, 6, 7], speed: 0.12 },
        punch: { frames: [8, 9, 10], speed: 0.08 },
        kick: { frames: [11, 12, 13], speed: 0.08 },
        special: { frames: [14, 15, 16, 17], speed: 0.1 },
        parry: { frames: [18, 19], speed: 0.1 },
        hurt: { frames: [20, 21], speed: 0.1 }
      }
    },
    portraitSprite: {
      imageSrc: "assets/sprites/siteh_mah/hero.png",
      frameWidth: 64,
      frameHeight: 64,
      animations: { idle: { frames: [0], speed: 1 } }
    },
    combos: [{ name: "Cinder Blast", sequence: ['punch', 'punch', 'kick'], specialId: 'special1' }],
    theme: "assets/audio/themes/siteh_mah.mp3"
  },
  {
    id: 89,
    name: "HuiHuwaLong Nexurfogus",
    nickname: "Hui",
    health: 135,
    attack: 27,
    speed: 3.3,
    specialPower: 22,
    spriteData: {
      imageSrc: "assets/sprites/huihuwalong_nexurfogus/sprite.png",
      frameWidth: 64,
      frameHeight: 64,
      animations: {
        idle: { frames: [0, 1, 2, 3], speed: 0.15 },
        walk: { frames: [4, 5, 6, 7], speed: 0.12 },
        punch: { frames: [8, 9, 10], speed: 0.08 },
        kick: { frames: [11, 12, 13], speed: 0.08 },
        special: { frames: [14, 15, 16, 17], speed: 0.1 },
        parry: { frames: [18, 19], speed: 0.1 },
        hurt: { frames: [20, 21], speed: 0.1 }
      }
    },
    portraitSprite: {
      imageSrc: "assets/sprites/huihuwalong_nexurfogus/hero.png",
      frameWidth: 64,
      frameHeight: 64,
      animations: { idle: { frames: [0], speed: 1 } }
    },
    combos: [{ name: "Starfall Strike", sequence: ['punch', 'punch', 'kick'], specialId: 'special1' }],
    theme: "assets/audio/themes/huihuwalong_nexurfogus.mp3"
  },
  {
    id: 90,
    name: "Riririyi Fuefue Nexurfogus",
    nickname: "Riri",
    health: 105,
    attack: 13,
    speed: 3.5,
    specialPower: 40,
    spriteData: {
      imageSrc: "assets/sprites/riririyi_fuefue_nexurfogus/sprite.png",
      frameWidth: 64,
      frameHeight: 64,
      animations: {
        idle: { frames: [0, 1, 2, 3], speed: 0.15 },
        walk: { frames: [4, 5, 6, 7], speed: 0.12 },
        punch: { frames: [8, 9, 10], speed: 0.08 },
        kick: { frames: [11, 12, 13], speed: 0.08 },
        special: { frames: [14, 15, 16, 17], speed: 0.1 },
        parry: { frames: [18, 19], speed: 0.1 },
        hurt: { frames: [20, 21], speed: 0.1 }
      }
    },
    portraitSprite: {
      imageSrc: "assets/sprites/riririyi_fuefue_nexurfogus/hero.png",
      frameWidth: 64,
      frameHeight: 64,
      animations: { idle: { frames: [0], speed: 1 } }
    },
    combos: [{ name: "Data Shard", sequence: ['punch', 'punch', 'kick'], specialId: 'special1' }],
    theme: "assets/audio/themes/riririyi_fuefue_nexurfogus.mp3"
  },
  {
    id: 91,
    name: "Alucard",
    nickname: "Alucard",
    health: 130,
    attack: 27,
    speed: 4.0,
    specialPower: 34,
    spriteData: {
      imageSrc: "assets/sprites/alucard/sprite.png",
      frameWidth: 64,
      frameHeight: 64,
      animations: {
        idle: { frames: [0, 1, 2, 3], speed: 0.15 },
        walk: { frames: [4, 5, 6, 7], speed: 0.12 },
        punch: { frames: [8, 9, 10], speed: 0.08 },
        kick: { frames: [11, 12, 13], speed: 0.08 },
        special: { frames: [14, 15, 16, 17], speed: 0.1 },
        parry: { frames: [18, 19], speed: 0.1 },
        hurt: { frames: [20, 21], speed: 0.1 }
      }
    },
    portraitSprite: {
      imageSrc: "assets/sprites/alucard/hero.png",
      frameWidth: 64,
      frameHeight: 64,
      animations: { idle: { frames: [0], speed: 1 } }
    },
    combos: [{ name: "Judgment Slash", sequence: ['punch', 'punch', 'kick'], specialId: 'special1' }],
    theme: "assets/audio/themes/alucard.mp3"
  },
  {
    id: 92,
    name: "Layla E‑korth",
    nickname: "Layla",
    health: 105,
    attack: 22,
    speed: 3.5,
    specialPower: 37,
    spriteData: {
      imageSrc: "assets/sprites/layla_ekorth/sprite.png",
      frameWidth: 64,
      frameHeight: 64,
      animations: {
        idle: { frames: [0, 1, 2, 3], speed: 0.15 },
        walk: { frames: [4, 5, 6, 7], speed: 0.12 },
        punch: { frames: [8, 9, 10], speed: 0.08 },
        kick: { frames: [11, 12, 13], speed: 0.08 },
        special: { frames: [14, 15, 16, 17], speed: 0.1 },
        parry: { frames: [18, 19], speed: 0.1 },
        hurt: { frames: [20, 21], speed: 0.1 }
      }
    },
    portraitSprite: {
      imageSrc: "assets/sprites/layla_ekorth/hero.png",
      frameWidth: 64,
      frameHeight: 64,
      animations: { idle: { frames: [0], speed: 1 } }
    },
    combos: [{ name: "Malefic Beam", sequence: ['punch', 'punch', 'kick'], specialId: 'special1' }],
    theme: "assets/audio/themes/layla_ekorth.mp3"
  },
  {
    id: 93,
    name: "Miya Elvensworth",
    nickname: "Miya",
    health: 125,
    attack: 22,
    speed: 4.0,
    specialPower: 36,
    spriteData: {
      imageSrc: "assets/sprites/miya_elvensworth/sprite.png",
      frameWidth: 64,
      frameHeight: 64,
      animations: {
        idle: { frames: [0, 1, 2, 3], speed: 0.15 },
        walk: { frames: [4, 5, 6, 7], speed: 0.12 },
        punch: { frames: [8, 9, 10], speed: 0.08 },
        kick: { frames: [11, 12, 13], speed: 0.08 },
        special: { frames: [14, 15, 16, 17], speed: 0.1 },
        parry: { frames: [18, 19], speed: 0.1 },
        hurt: { frames: [20, 21], speed: 0.1 }
      }
    },
    portraitSprite: {
      imageSrc: "assets/sprites/miya_elvensworth/hero.png",
      frameWidth: 64,
      frameHeight: 64,
      animations: { idle: { frames: [0], speed: 1 } }
    },
    combos: [{ name: "Piercing Moonbeam", sequence: ['punch', 'punch', 'kick'], specialId: 'special1' }],
    theme: "assets/audio/themes/miya_elvensworth.mp3"
  },
  {
    id: 94,
    name: "Saber",
    nickname: "Saber",
    health: 115,
    attack: 29,
    speed: 4.3,
    specialPower: 20,
    spriteData: {
      imageSrc: "assets/sprites/saber/sprite.png",
      frameWidth: 64,
      frameHeight: 64,
      animations: {
        idle: { frames: [0, 1, 2, 3], speed: 0.15 },
        walk: { frames: [4, 5, 6, 7], speed: 0.12 },
        punch: { frames: [8, 9, 10], speed: 0.08 },
        kick: { frames: [11, 12, 13], speed: 0.08 },
        special: { frames: [14, 15, 16, 17], speed: 0.1 },
        parry: { frames: [18, 19], speed: 0.1 },
        hurt: { frames: [20, 21], speed: 0.1 }
      }
    },
    portraitSprite: {
      imageSrc: "assets/sprites/saber/hero.png",
      frameWidth: 64,
      frameHeight: 64,
      animations: { idle: { frames: [0], speed: 1 } }
    },
    combos: [{ name: "Quick Draw", sequence: ['punch', 'punch', 'kick'], specialId: 'special1' }],
    theme: "assets/audio/themes/saber.mp3"
  },
  {
    id: 95,
    name: "Akai The Panda",
    nickname: "Akai",
    health: 135,
    attack: 27,
    speed: 3.3,
    specialPower: 22,
    spriteData: {
      imageSrc: "assets/sprites/akai_the_panda/sprite.png",
      frameWidth: 64,
      frameHeight: 64,
      animations: {
        idle: { frames: [0, 1, 2, 3], speed: 0.15 },
        walk: { frames: [4, 5, 6, 7], speed: 0.12 },
        punch: { frames: [8, 9, 10], speed: 0.08 },
        kick: { frames: [11, 12, 13], speed: 0.08 },
        special: { frames: [14, 15, 16, 17], speed: 0.1 },
        parry: { frames: [18, 19], speed: 0.1 },
        hurt: { frames: [20, 21], speed: 0.1 }
      }
    },
    portraitSprite: {
      imageSrc: "assets/sprites/akai_the_panda/hero.png",
      frameWidth: 64,
      frameHeight: 64,
      animations: { idle: { frames: [0], speed: 1 } }
    },
    combos: [{ name: "Bamboo Sweep", sequence: ['punch', 'punch', 'kick'], specialId: 'special1' }],
    theme: "assets/audio/themes/akai_the_panda.mp3"
  }
];

export function getHeroById(id) {
  return heroes.find(h => h.id === id) || heroes[0];
}