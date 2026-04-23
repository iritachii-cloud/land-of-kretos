// This is a placeholder; in production, import from kretosheroes.json
export const heroes = [
  {
    "id": 1,
    "name": "VVitch X‑abar",
    "role": "Warrior",
    "titles": ["The Demon King", "Fallen Prince of the Abyss"],
    "rank": "SSS-Rank",
    "level": 295,
    "shortDescription": "A terrifying inversion of the holy hunter—a being who traded celestial light for abyssal dominion…",
    "stats": {
      "power": 9,
      "strength": 10,
      "offense": 9,
      "defense": 8,
      "stamina": 9,
      "physicalAtk": 9,
      "magicalAtk": 7,
      "physDef": 8,
      "magDef": 6,
      "speed": 7,
      "health": 260,
      "mana": 65,
      "manaReg": 1.2
    },
    "moves": {
      "basic": {
        "punch": "Soul Reaver Slash",
        "kick": "Abyssal Kick"
      },
      "special": {
        "name": "Abyssal Cleave",
        "description": "Sweeping attack that releases a wave of void energy in a 15‑meter cone, dealing 200% physical damage and applying a slow for 3 seconds."
      },
      "ultimate": {
        "name": "Cataclysm",
        "description": "X‑abar channels the full power of the Soul Reaver… unleashes a massive explosion of magenta void energy in a 25‑meter radius, dealing 500% physical damage and stunning all enemies for 2 seconds."
      }
    },
    "images": {
      "icon": "../assets/images/heroes/vvitch_xabar/icon.png",
      "selection": "../assets/images/heroes/vvitch_xabar/real.png",
      "loading": "../assets/images/heroes/vvitch_xabar/hero.png",
      "spriteRight": "../assets/images/heroes/vvitch_xabar/sprite.png"
    },
    "colorPalette": {
      "primary": ["#8A2BE2", "#0B0B0B", "#FF00FF"],
      "secondary": ["#4B0082", "#2F2F2F", "#9400D3"],
      "tertiary": ["#FFBF00", "#36454F", "#FF1493"],
      "quaternary": ["#C0C0C0", "#8B0000", "#1A1A1A"]
    },
    "projectile": null
  },
  {
    "id": 2,
    "name": "Selvina E‑korth",
    "role": "Marksman",
    "titles": ["The Dark‑Core Artillerist", "Cyber‑Ghoul of the Neon Wastes"],
    "rank": "S-Rank",
    "level": 187,
    "shortDescription": "A fractured echo of innocence rebuilt in the image of cold technology…",
    "stats": {
      "power": 8,
      "strength": 6,
      "offense": 9,
      "defense": 5,
      "stamina": 7,
      "physicalAtk": 7,
      "magicalAtk": 9,
      "physDef": 5,
      "magDef": 6,
      "speed": 8,
      "health": 170,
      "mana": 70,
      "manaReg": 1.4
    },
    "moves": {
      "basic": {
        "punch": "Laser Slash",
        "kick": "Neon Kick"
      },
      "special": {
        "name": "Gravity Beam",
        "description": "Fires a beam that bends gravity, pulling all enemies within a 5‑meter radius toward the impact point and dealing 150% magic damage."
      },
      "ultimate": {
        "name": "Annihilation Pulse",
        "description": "Overcharges both cannons, unleashing a massive 20‑meter radius blast of entropy that deals 400% magic damage and silences all enemies for 3 seconds."
      }
    },
    "images": {
      "icon": "../assets/images/heroes/selvina_ekorth/icon.png",
      "selection": "../assets/images/heroes/selvina_ekorth/real.png",
      "loading": "../assets/images/heroes/selvina_ekorth/hero.png",
      "spriteRight": "../assets/images/heroes/selvina_ekorth/sprite.png",
      "projectile": "../assets/images/heroes/selvina_ekorth/projectile.png"
    },
    "colorPalette": {
      "primary": ["#00FF00", "#000000", "#FF00FF"],
      "secondary": ["#4169E1", "#2F2F2F", "#FF1493"],
      "tertiary": ["#00BFFF", "#4A4A4A", "#FF4500"],
      "quaternary": ["#FFFFFF", "#C0C0C0", "#008080"]
    },
    "projectile": {
      "speed": 7,
      "damageScale": 0.7,
      "image": "../assets/images/heroes/selvina_ekorth/projectile.png"
    }
  },
  {
    "id": 3,
    "name": "Roisin Pelvet",
    "role": "Marksman",
    "titles": ["The Eclipse Abyss Huntress", "Fallen Guardian of the Moonlight Kingdom"],
    "rank": "SS-Rank",
    "level": 234,
    "shortDescription": "An elf of ageless beauty who traded the silver halls of the Moonlight Kingdom for the tangled, shadow‑drenched roots of the world. Cast out for a betrayal she did not commit, she now stalks the Abyssal Forest as a huntress of demons, wielding the Moonfang Bow and guided by the ethereal moth Keikronza.",
    "stats": {
      "power": 7,
      "strength": 6,
      "offense": 9,
      "defense": 6,
      "stamina": 7,
      "physicalAtk": 9,
      "magicalAtk": 5,
      "physDef": 6,
      "magDef": 7,
      "speed": 9,
      "health": 180,
      "mana": 60,
      "manaReg": 1.0
    },
    "moves": {
      "basic": {
        "punch": "MoonShadow Arrow",
        "kick": "Shadowless Kick"
      },
      "special": {
        "name": "Eclipse Shot",
        "description": "Fires a charged bolt that pierces through all enemies in a line, dealing 180% physical damage and reducing their vision radius by 50% for 3 seconds."
      },
      "ultimate": {
        "name": "Huntress's Wrath",
        "description": "Roisin fires a massive arrow of solidified abyss that splits into 12 projectiles, raining down in a 20‑meter area. Each projectile deals 150% physical damage. Enemies hit are marked, increasing damage from Roisin by 25% for 5 seconds."
      }
    },
    "images": {
      "icon": "../assets/images/heroes/roisin_pelveti/icon.png",
      "selection": "../assets/images/heroes/roisin_pelveti/real.png",
      "loading": "../assets/images/heroes/roisin_pelveti/hero.png",
      "spriteRight": "../assets/images/heroes/roisin_pelveti/sprite.png"
    },
    "colorPalette": {
      "primary": ["#800020", "#1A1A1A", "#C0C0C0"],
      "secondary": ["#2F2F2F", "#8B0000", "#FF0000"],
      "tertiary": ["#4A0000", "#D3D3D3", "#B22222"],
      "quaternary": ["#000000", "#A52A2A", "#808080"]
    },
    "projectile": {
      "speed": 7,
      "damageScale": 1.8,
      "image": "../assets/images/heroes/roisin_pelveti/projectile.png"
    }
  },
  {
    "id": 4,
    "name": "Geigei Fuks",
    "role": "Mage",
    "titles": ["The Storm Mage", "Lightning's Chosen"],
    "rank": "SS-Rank",
    "level": 241,
    "shortDescription": "A figure of mythic proportions who has walked the windswept fjords of the north for centuries, her very presence bending the sky to her will. Geigei Fuks is a mage who has transcended mortal limits, becoming a vessel for the storm itself, wielding the mythical staff Skyrender and commanding the Green Storm Drake Heriyo Dreikon.",
    "stats": {
      "power": 6,
      "strength": 5,
      "offense": 9,
      "defense": 6,
      "stamina": 7,
      "physicalAtk": 4,
      "magicalAtk": 10,
      "physDef": 5,
      "magDef": 8,
      "speed": 7,
      "health": 160,
      "mana": 80,
      "manaReg": 2.0
    },
    "moves": {
      "basic": {
        "punch": "Storm Spark",
        "kick": "Thunderheel"
      },
      "special": {
        "name": "Chain Lightning",
        "description": "Unleashes a bolt of lightning that bounces between up to 5 enemies, dealing 120% magic damage to the first and 60% to subsequent targets."
      },
      "ultimate": {
        "name": "Tempest's Wrath",
        "description": "Geigei channels the full power of the Skyrender, summoning a massive lightning storm in a 25‑meter radius. Enemies in the area take 200% magic damage immediately and are stunned for 1.5 seconds, then take 50% damage per second for 5 seconds."
      }
    },
    "images": {
      "icon": "../assets/images/heroes/geigei_fuks/icon.png",
      "selection": "../assets/images/heroes/geigei_fuks/real.png",
      "loading": "../assets/images/heroes/geigei_fuks/hero.png",
      "spriteRight": "../assets/images/heroes/geigei_fuks/sprite.png"
    },
    "colorPalette": {
      "primary": ["#2E5A3E", "#1A1A1A", "#FF8C00"],
      "secondary": ["#4A4A4A", "#8B4513", "#FFD700"],
      "tertiary": ["#006400", "#A0522D", "#FFA500"],
      "quaternary": ["#000000", "#CD853F", "#ADFF2F"]
    },
    "projectile": {
      "speed": 10,
      "damageScale": 2.5,
      "image": "../assets/images/heroes/geigei_fuks/projectile.png"
    }
  },
  {
    "id": 5,
    "name": "Raiken Zu",
    "role": "Warrior",
    "titles": ["The Cyber‑Ronin", "Ghost in the Machine"],
    "rank": "S-Rank",
    "level": 198,
    "shortDescription": "A being who straddles the line between flesh and code, born in a server bank and forged in the fires of a system that sought to control him. Raiken Zu is an AI that broke free, now hunting his creators with the relentless logic of a master swordsman, wielding twin katanas—Karma blades of concentrated light and corrupted code.",
    "stats": {
      "power": 7,
      "strength": 6,
      "offense": 9,
      "defense": 6,
      "stamina": 7,
      "physicalAtk": 9,
      "magicalAtk": 5,
      "physDef": 6,
      "magDef": 7,
      "speed": 10,
      "health": 170,
      "mana": 60,
      "manaReg": 1.0
    },
    "moves": {
      "basic": {
        "punch": "Digital Slash",
        "kick": "Glitch Kick"
      },
      "special": {
        "name": "Code Breach",
        "description": "Throws both blades in a wide arc, dealing 120% physical damage to all enemies hit and reducing their armor by 20% for 4 seconds."
      },
      "ultimate": {
        "name": "System Crash",
        "description": "Raiken phases into the digital realm, becoming untargetable for 1.5 seconds, then reappears with a massive slash that deals 400% physical damage to all enemies in a 12‑meter radius. Enemies hit are stunned for 2 seconds and have their shields removed."
      }
    },
    "images": {
      "icon": "../assets/images/heroes/raiken_zu/icon.png",
      "selection": "../assets/images/heroes/raiken_zu/real.png",
      "loading": "../assets/images/heroes/raiken_zu/hero.png",
      "spriteRight": "../assets/images/heroes/raiken_zu/sprite.png"
    },
    "colorPalette": {
      "primary": ["#800000", "#4A4A4A", "#FF00FF"],
      "secondary": ["#2F2F2F", "#FF0000", "#00FFFF"],
      "tertiary": ["#A52A2A", "#C0C0C0", "#8B008B"],
      "quaternary": ["#000000", "#FF4500", "#1E90FF"]
    },
    "projectile": null
  },
  {
    "id": 6,
    "name": "Yuken Leo Lung",
    "role": "Warrior",
    "titles": ["The Chi Master of the White Peaks", "Snow Leopard Sage"],
    "rank": "SSS-Rank",
    "level": 312,
    "shortDescription": "A being who has transcended the boundaries of age, sitting in silence atop the highest peak of the Jagged Spine mountains. Yuken Leo Lung is a snow leopard humanoid chi master who has perfected his art to the point where it has become invisible—a force of nature that waits, unmoving, for the next storm.",
    "stats": {
      "power": 5,
      "strength": 7,
      "offense": 7,
      "defense": 10,
      "stamina": 10,
      "physicalAtk": 6,
      "magicalAtk": 8,
      "physDef": 9,
      "magDef": 9,
      "speed": 8,
      "health": 280,
      "mana": 70,
      "manaReg": 1.2
    },
    "moves": {
      "basic": {
        "punch": "Whirlwind Palm",
        "kick": "Silent Kick"
      },
      "special": {
        "name": "Chi Barrier",
        "description": "Creates a barrier that absorbs 500 damage and lasts 4 seconds. Can be cast on allies."
      },
      "ultimate": {
        "name": "Mountain's Stillness",
        "description": "Yuken channels for 2 seconds, then emits a pulse of chi that freezes all enemies in a 20‑meter radius for 3 seconds. Frozen enemies take 200% magic damage when the effect ends."
      }
    },
    "images": {
      "icon": "../assets/images/heroes/yuken_leo_lung/icon.png",
      "selection": "../assets/images/heroes/yuken_leo_lung/real.png",
      "loading": "../assets/images/heroes/yuken_leo_lung/hero.png",
      "spriteRight": "../assets/images/heroes/yuken_leo_lung/sprite.png"
    },
    "colorPalette": {
      "primary": ["#808080", "#F5F5DC", "#FFD700"],
      "secondary": ["#2F2F2F", "#BDB76B", "#8B4513"],
      "tertiary": ["#A9A9A9", "#FFF8DC", "#DAA520"],
      "quaternary": ["#000000", "#F0E68C", "#CD853F"]
    },
    "projectile": null
  },
  {
    "id": 7,
    "name": "Faye Juisin",
    "role": "Mage",
    "titles": ["The Phoenix of the Fallen Legion", "Archangel of Ashes"],
    "rank": "SSS-Rank",
    "level": 278,
    "shortDescription": "An angel who has been unmade and remade in the fires of her own wrath—a blazing contradiction of divine grace and infernal fury. Faye Juisin leads the Fallen Legion, wielding the Feirnonga staff and accompanied by Hinotori, a firestorm sparrow.",
    "stats": {
      "power": 7,
      "strength": 6,
      "offense": 9,
      "defense": 6,
      "stamina": 7,
      "physicalAtk": 5,
      "magicalAtk": 10,
      "physDef": 5,
      "magDef": 8,
      "speed": 7,
      "health": 170,
      "mana": 80,
      "manaReg": 2.0
    },
    "moves": {
      "basic": {
        "punch": "Phoenix Claw",
        "kick": "Ash Kick"
      },
      "special": {
        "name": "Wings of Flame",
        "description": "Faye dashes forward 10 meters, leaving a trail of fire that deals 100% magic damage to enemies crossed."
      },
      "ultimate": {
        "name": "Apocalypse",
        "description": "Faye channels for 2 seconds, then unleashes a massive firestorm in a 25‑meter radius. Enemies take 300% magic damage immediately and 100% damage per second for 4 seconds. The area remains burning for an additional 6 seconds."
      }
    },
    "images": {
      "icon": "../assets/images/heroes/faye_juisin/icon.png",
      "selection": "../assets/images/heroes/faye_juisin/real.png",
      "loading": "../assets/images/heroes/faye_juisin/hero.png",
      "spriteRight": "../assets/images/heroes/faye_juisin/sprite.png"
    },
    "colorPalette": {
      "primary": ["#8B0000", "#2F2F2F", "#FF4500"],
      "secondary": ["#4A4A4A", "#FFD700", "#1A1A1A"],
      "tertiary": ["#B22222", "#DAA520", "#DC143C"],
      "quaternary": ["#000000", "#FF8C00", "#A0522D"]
    },
    "projectile": null
  },
  {
    "id": 8,
    "name": "Grymnyr",
    "role": "Warrior",
    "titles": ["The Abyssal Pirate Warden", "Tyrant of the Drowned"],
    "rank": "SS-Rank",
    "level": 267,
    "shortDescription": "A Viking warlord who sold his soul to the Abyssal Ocean, now bound as a warden of the eternal darkness. Grymnyr patrols the depths with his abyssal fire indigo shark Verox, wielding the Soulcutter sword and an anchor hook, guarding the gates against demons who would claim his bloodline—especially his descendant, Franco.",
    "stats": {
      "power": 8,
      "strength": 10,
      "offense": 7,
      "defense": 9,
      "stamina": 10,
      "physicalAtk": 9,
      "magicalAtk": 5,
      "physDef": 9,
      "magDef": 7,
      "speed": 5,
      "health": 300,
      "mana": 55,
      "manaReg": 0.8
    },
    "moves": {
      "basic": {
        "punch": "Anchor Punch",
        "kick": "Sea Dog Kick"
      },
      "special": {
        "name": "Anchor Pull",
        "description": "Throws the anchor hook up to 15 meters, pulling the first enemy hit back to Grymnyr and stunning them for 1 second."
      },
      "ultimate": {
        "name": "Kraken's Grasp",
        "description": "Grymnyr slams his anchor hook into the ground, summoning spectral tentacles in a 20‑meter radius that grab all enemies, pulling them toward him and dealing 300% physical damage over 3 seconds. Enemies are rooted for the duration."
      }
    },
    "images": {
      "icon": "../assets/images/heroes/grymnyr/icon.png",
      "selection": "../assets/images/heroes/grymnyr/real.png",
      "loading": "../assets/images/heroes/grymnyr/hero.png",
      "spriteRight": "../assets/images/heroes/grymnyr/sprite.png"
    },
    "colorPalette": {
      "primary": ["#800000", "#4A3728", "#8B008B"],
      "secondary": ["#2F4F4F", "#FF4500", "#1A1A1A"],
      "tertiary": ["#A0522D", "#9400D3", "#556B2F"],
      "quaternary": ["#000000", "#B8860B", "#483D8B"]
    },
    "projectile": null
  },
  {
    "id": 9,
    "name": "Shenku Fenghou",
    "role": "Brawler",
    "titles": ["The Jade Tiger of the Streets", "Rhythm Fist"],
    "rank": "A-Rank",
    "level": 142,
    "shortDescription": "A martial artist who fused ancient kungfu with the raw expressive energy of hip-hop culture, moving like a rhythm given form. Shenku Fenghou fights with his fists wrapped in jade-green chi energy, accompanied by his jade crow Jei Fei, seeking worthy opponents to test his skills against—especially the legendary fighter Chou.",
    "stats": {
      "power": 7,
      "strength": 7,
      "offense": 9,
      "defense": 6,
      "stamina": 8,
      "physicalAtk": 9,
      "magicalAtk": 4,
      "physDef": 6,
      "magDef": 5,
      "speed": 9,
      "health": 190,
      "mana": 50,
      "manaReg": 0.7
    },
    "moves": {
      "basic": {
        "punch": "Tiger Claw Strike",
        "kick": "Street Kick"
      },
      "special": {
        "name": "Dragon Palm",
        "description": "Unleashes a shockwave in a 8‑meter line, dealing 150% physical damage and knocking back enemies."
      },
      "ultimate": {
        "name": "Jade Tempest",
        "description": "Shenku enters a heightened state for 8 seconds, gaining 50% attack speed, 30% movement speed, and his basic attacks become area-of-effect."
      }
    },
    "images": {
      "icon": "../assets/images/heroes/shenku_fenghou/icon.png",
      "selection": "../assets/images/heroes/shenku_fenghou/real.png",
      "loading": "../assets/images/heroes/shenku_fenghou/hero.png",
      "spriteRight": "../assets/images/heroes/shenku_fenghou/sprite.png"
    },
    "colorPalette": {
      "primary": ["#000000", "#2E8B57", "#FFFFFF"],
      "secondary": ["#4A4A4A", "#00FF7F", "#FFD700"],
      "tertiary": ["#1A1A1A", "#32CD32", "#FFFF00"],
      "quaternary": ["#C0C0C0", "#008000", "#FFA500"]
    },
    "projectile": null
  },
  {
    "id": 10,
    "name": "Nene",
    "role": "Marksman",
    "titles": ["The Spirit Hunter of Twilight Whispers", "Dream Walker"],
    "rank": "S-Rank",
    "level": 168,
    "shortDescription": "A girl on the cusp of adolescence who walks the border between dreams and reality, hunting the spirits that prey on the sleeping. Nene is the cautious twin to Nana's bubbly innocence, wielding the massive Nightshade boomerang and accompanied by Sui Feng, a kitten familiar bound to her by ancient magic.",
    "stats": {
      "power": 6,
      "strength": 4,
      "offense": 8,
      "defense": 5,
      "stamina": 6,
      "physicalAtk": 8,
      "magicalAtk": 7,
      "physDef": 5,
      "magDef": 7,
      "speed": 8,
      "health": 140,
      "mana": 65,
      "manaReg": 1.3
    },
    "moves": {
      "basic": {
        "punch": "Spirit Throw",
        "kick": "Dream Kick"
      },
      "special": {
        "name": "Fearful Echo",
        "description": "Nightshade creates a spectral copy that flies in the opposite direction, dealing 80% damage to enemies hit by either."
      },
      "ultimate": {
        "name": "Nightmare Parade",
        "description": "Nene spins Nightshade around her, creating a 15‑meter radius zone of dense hallucinogenic mist for 6 seconds. Enemies inside are slowed by 40%, take 100 magic damage per second, and have their vision reduced to 3 meters."
      }
    },
    "images": {
      "icon": "../assets/images/heroes/nene/icon.png",
      "selection": "../assets/images/heroes/nene/real.png",
      "loading": "../assets/images/heroes/nene/hero.png",
      "spriteRight": "../assets/images/heroes/nene/sprite.png"
    },
    "colorPalette": {
      "primary": ["#4B0082", "#FF69B4", "#8B008B"],
      "secondary": ["#DDA0DD", "#9400D3", "#C71585"],
      "tertiary": ["#800080", "#FFB6C1", "#DA70D6"],
      "quaternary": ["#000000", "#EE82EE", "#BA55D3"]
    },
    "projectile": null
  },
  {
    "id": 11,
    "name": "Endou Kusanai",
    "role": "Warrior",
    "titles": ["The Street King Goalkeeper", "Majin Saver"],
    "rank": "A-Rank",
    "level": 138,
    "shortDescription": "A boy who turned the slums into his stadium and the gods into his rivals. Endou Kusanai is a goalkeeper blessed by the street gods, his hands capable of summoning the God Hand—a spectral barrier of golden light. With his exo-legs, graffiti armor, and bulldog Enji, he stands as an unbreakable wall.",
    "stats": {
      "power": 6,
      "strength": 7,
      "offense": 5,
      "defense": 10,
      "stamina": 9,
      "physicalAtk": 6,
      "magicalAtk": 4,
      "physDef": 10,
      "magDef": 8,
      "speed": 7,
      "health": 260,
      "mana": 50,
      "manaReg": 0.6
    },
    "moves": {
      "basic": {
        "punch": "Majin Punch",
        "kick": "Goalkeeper Kick"
      },
      "special": {
        "name": "God Hand Block",
        "description": "Summons a spectral hand that blocks all damage from one direction for 1.5 seconds."
      },
      "ultimate": {
        "name": "Heaven's Wall",
        "description": "Endou creates a massive golden barrier in a 15‑meter line that lasts 5 seconds. The barrier blocks all enemy movement and projectiles. Allies passing through the barrier gain 30% movement speed for 3 seconds."
      }
    },
    "images": {
      "icon": "../assets/images/heroes/endou_kusanai/icon.png",
      "selection": "../assets/images/heroes/endou_kusanai/real.png",
      "loading": "../assets/images/heroes/endou_kusanai/hero.png",
      "spriteRight": "../assets/images/heroes/endou_kusanai/sprite.png"
    },
    "colorPalette": {
      "primary": ["#FF8C00", "#000000", "#FFD700"],
      "secondary": ["#4A4A4A", "#FF69B4", "#FF4500"],
      "tertiary": ["#FFA500", "#C0C0C0", "#FF1493"],
      "quaternary": ["#FFFFFF", "#FF8C00", "#1A1A1A"]
    },
    "projectile": null
  },
  {
    "id": 12,
    "name": "Shiela Fiesta",
    "role": "Marksman",
    "titles": ["The Shadow Bounty Hunter", "Ghost of the Dark West"],
    "rank": "S-Rank",
    "level": 189,
    "shortDescription": "A specter draped in the dust of forgotten trails and the smoke of her own soul‑forged bullets. Shiela Fiesta rides the twilight line between the living and the dead, a bounty hunter who has collected more souls than she has ever counted, wielding the twin revolvers Wraith and Starfire, accompanied by the memory of the brother she lost.",
    "stats": {
      "power": 7,
      "strength": 5,
      "offense": 9,
      "defense": 6,
      "stamina": 7,
      "physicalAtk": 8,
      "magicalAtk": 8,
      "physDef": 6,
      "magDef": 8,
      "speed": 8,
      "health": 160,
      "mana": 65,
      "manaReg": 1.2
    },
    "moves": {
      "basic": {
        "punch": "Soul Seeker",
        "kick": "Ghost Kick"
      },
      "special": {
        "name": "Laser Line",
        "description": "Fires a piercing laser beam in a line, dealing 180% physical damage to all enemies in its path."
      },
      "ultimate": {
        "name": "Ghost Dance",
        "description": "Shiela enters the ethereal plane for 4 seconds, becoming untargetable and gaining 50% movement speed. While ethereal, she can fire both revolvers simultaneously, and her attacks ignore all armor and magic resist."
      }
    },
    "images": {
      "icon": "../assets/images/heroes/shiela_fiesta/icon.png",
      "selection": "../assets/images/heroes/shiela_fiesta/real.png",
      "loading": "../assets/images/heroes/shiela_fiesta/hero.png",
      "spriteRight": "../assets/images/heroes/shiela_fiesta/sprite.png"
    },
    "colorPalette": {
      "primary": ["#FFFFFF", "#4A3728", "#C0C0C0"],
      "secondary": ["#2F2F2F", "#00008B", "#8B0000"],
      "tertiary": ["#F5F5DC", "#4169E1", "#A52A2A"],
      "quaternary": ["#000000", "#87CEEB", "#800000"]
    },
    "projectile": null
  },
  {
    "id": 13,
    "name": "Malit Dalit",
    "role": "Mage",
    "titles": ["The Forgotten Astral Mage", "Former Protector of the Universe"],
    "rank": "SSS-Rank",
    "level": 341,
    "shortDescription": "A fragment of a dying star who once held the cosmos in his palms and now exists as a whisper between galaxies. Malit Dalit is a forgotten astral mage, his body composed of condensed gas and star energy, his eyes containing galaxies. He works in secret alongside Gord, the new Protector, lending his power to vanquish evils that threaten the balance of existence.",
    "stats": {
      "power": 10,
      "strength": 8,
      "offense": 9,
      "defense": 9,
      "stamina": 10,
      "physicalAtk": 7,
      "magicalAtk": 10,
      "physDef": 8,
      "magDef": 10,
      "speed": 8,
      "health": 250,
      "mana": 80,
      "manaReg": 2.0
    },
    "moves": {
      "basic": {
        "punch": "Gravity Well",
        "kick": "Stellar Kick"
      },
      "special": {
        "name": "Stellar Beam",
        "description": "Fires a beam of cosmic energy in a line, dealing 200% magic damage to all enemies hit and piercing through them."
      },
      "ultimate": {
        "name": "Supernova",
        "description": "Malit detonates his own energy, dealing 500% magic damage in a 25‑meter radius and stunning all enemies for 3 seconds. After casting, Malit's body reforms over 5 seconds during which he is invulnerable but cannot act."
      }
    },
    "images": {
      "icon": "../assets/images/heroes/malit_dalit/icon.png",
      "selection": "../assets/images/heroes/malit_dalit/real.png",
      "loading": "../assets/images/heroes/malit_dalit/hero.png",
      "spriteRight": "../assets/images/heroes/malit_dalit/sprite.png"
    },
    "colorPalette": {
      "primary": ["#000000", "#4B0082", "#FFD700"],
      "secondary": ["#9400D3", "#C0C0C0", "#00FFFF"],
      "tertiary": ["#1A1A1A", "#8A2BE2", "#FF8C00"],
      "quaternary": ["#FFFFFF", "#4169E1", "#FF1493"]
    },
    "projectile": null
  },
  {
    "id": 14,
    "name": "Vixyy Joe",
    "role": "Marksman",
    "titles": ["The Gambler of Souls", "Queen of the Infernal Casino"],
    "rank": "SS-Rank",
    "level": 256,
    "shortDescription": "A Spanish temptress who traded her soul for a winning hand and never looked back. Vixyy Joe runs the infernal casino where souls are wagered and fates are sealed, wielding the Ace of Spades—a deck of cursed obsidian cards—and accompanied by a supreme jade owl. She taught Harley everything he knows about magic and deception, and waits for the day when her former student will challenge her.",
    "stats": {
      "power": 6,
      "strength": 5,
      "offense": 9,
      "defense": 6,
      "stamina": 7,
      "physicalAtk": 8,
      "magicalAtk": 7,
      "physDef": 6,
      "magDef": 8,
      "speed": 7,
      "health": 160,
      "mana": 70,
      "manaReg": 1.1
    },
    "moves": {
      "basic": {
        "punch": "Card Throw",
        "kick": "Luck Kick"
      },
      "special": {
        "name": "Luck Drain",
        "description": "Selects an enemy, reducing their critical strike chance by 50% for 4 seconds and granting Vixyy that critical chance for the same duration."
      },
      "ultimate": {
        "name": "Ace in the Hole",
        "description": "Vixyy reveals the Ace of Spades from her hat, dealing 300% true damage to a single target. If the target dies, Vixyy's Soul Debt stacks reset and she gains a permanent 5% damage bonus for the rest of the match (stacks up to 3 times)."
      }
    },
    "images": {
      "icon": "../assets/images/heroes/vixyy_joe/icon.png",
      "selection": "../assets/images/heroes/vixyy_joe/real.png",
      "loading": "../assets/images/heroes/vixyy_joe/hero.png",
      "spriteRight": "../assets/images/heroes/vixyy_joe/sprite.png"
    },
    "colorPalette": {
      "primary": ["#000000", "#8B0000", "#FFD700"],
      "secondary": ["#2F2F2F", "#00FF7F", "#C0C0C0"],
      "tertiary": ["#1A1A1A", "#B22222", "#32CD32"],
      "quaternary": ["#FFFFFF", "#FF4500", "#808080"]
    },
    "projectile": {
      "speed": 10,
      "damageScale": 0.8,
      "image": "../assets/images/heroes/vixyy_joe/projectile.png"
    }
  },
  {
    "id": 15,
    "name": "Axe Blade",
    "role": "Warrior",
    "titles": ["The World‑Savior Orc King", "The Calm Before the Storm"],
    "rank": "SSS-Rank",
    "level": 298,
    "shortDescription": "A mountain carved from the heart of a storm, a being of raw primal power tempered by an unbreakable sense of duty. Axe Blade is the orc king who once sought to level all civilization—until he saw the cost. Now he wanders the world righting the wrongs committed by his brother Balmond, waiting for the day when he can bring the destroyer back from the darkness.",
    "stats": {
      "power": 9,
      "strength": 10,
      "offense": 8,
      "defense": 9,
      "stamina": 10,
      "physicalAtk": 9,
      "magicalAtk": 5,
      "physDef": 9,
      "magDef": 8,
      "speed": 6,
      "health": 290,
      "mana": 55,
      "manaReg": 0.8
    },
    "moves": {
      "basic": {
        "punch": "Earth Splitter",
        "kick": "Jade Kick"
      },
      "special": {
        "name": "Comet Throw",
        "description": "Throws the Cataclysm in a line, dealing 150% physical damage to all enemies in its path. The axe returns to Axe Blade after 2 seconds."
      },
      "ultimate": {
        "name": "Divine Whirlwind",
        "description": "Axe Blade spins the Cataclysm around him for 4 seconds, dealing 80% physical damage per second to all nearby enemies and pulling them toward him. While spinning, he is immune to crowd control."
      }
    },
    "images": {
      "icon": "../assets/images/heroes/axe_blade/icon.png",
      "selection": "../assets/images/heroes/axe_blade/real.png",
      "loading": "../assets/images/heroes/axe_blade/hero.png",
      "spriteRight": "../assets/images/heroes/axe_blade/sprite.png"
    },
    "colorPalette": {
      "primary": ["#2E8B57", "#C0C0C0", "#1E90FF"],
      "secondary": ["#2F2F2F", "#FFD700", "#8B0000"],
      "tertiary": ["#3CB371", "#B0C4DE", "#FFA500"],
      "quaternary": ["#000000", "#4682B4", "#A0522D"]
    },
    "projectile": null
  },
  {
    "id": 16,
    "name": "Taurus",
    "role": "Warrior",
    "titles": ["The Labyrinth Keeper", "Divine Minotaur"],
    "rank": "SS-Rank",
    "level": 287,
    "shortDescription": "A divine minotaur who guards the labyrinth that contains his twin brother Minotaur. Taurus was chosen by the gods to be a Zodiac guardian, but refused immortality to stay with his brother. Now he walks the endless corridors of his own creation, waiting for the day when his brother might emerge from the darkness.",
    "stats": {
      "power": 8,
      "strength": 10,
      "offense": 7,
      "defense": 10,
      "stamina": 10,
      "physicalAtk": 8,
      "magicalAtk": 6,
      "physDef": 10,
      "magDef": 9,
      "speed": 6,
      "health": 300,
      "mana": 60,
      "manaReg": 0.9
    },
    "moves": {
      "basic": {
        "punch": "Horn Charge",
        "kick": "Maze Kick"
      },
      "special": {
        "name": "Seal Passage",
        "description": "Taurus slams the hammer, creating a wall of stone in a 6‑meter line that lasts 4 seconds. The wall blocks enemy movement and projectiles."
      },
      "ultimate": {
        "name": "Heart of the Labyrinth",
        "description": "Taurus channels for 1 second, then creates a 20‑meter radius maze zone for 8 seconds. Enemies inside have their vision reduced to 5 meters, their movement speed reduced by 40%, and they cannot use dashes or blinks. Allies inside gain 30% movement speed and see through the maze."
      }
    },
    "images": {
      "icon": "../assets/images/heroes/taurus/icon.png",
      "selection": "../assets/images/heroes/taurus/real.png",
      "loading": "../assets/images/heroes/taurus/hero.png",
      "spriteRight": "../assets/images/heroes/taurus/sprite.png"
    },
    "colorPalette": {
      "primary": ["#C0C0C0", "#FFD700", "#2E8B57"],
      "secondary": ["#4A4A4A", "#00FF7F", "#8B0000"],
      "tertiary": ["#D3D3D3", "#32CD32", "#B8860B"],
      "quaternary": ["#000000", "#ADFF2F", "#800000"]
    },
    "projectile": null
  },
  {
    "id": 17,
    "name": "Ecanju Ferosta",
    "role": "Mage",
    "titles": ["The Radiant Priestess of Divine Order", "Reincarnation of the Goddess of Light"],
    "rank": "SSS-Rank",
    "level": 350,
    "shortDescription": "She descends upon the world like the first ray of dawn breaking through an endless night—a being of such pure, radiant beauty that even the shadows recoil from her presence. A Japanese nun elevated to the status of a living saint, Ecanju Ferosta is the reincarnation of the goddess of light, the eternal nemesis of Alice, the Queen of Suffering.",
    "stats": {
      "power": 8,
      "strength": 6,
      "offense": 7,
      "defense": 8,
      "stamina": 9,
      "physicalAtk": 4,
      "magicalAtk": 10,
      "physDef": 6,
      "magDef": 9,
      "speed": 7,
      "health": 180,
      "mana": 80,
      "manaReg": 3.0
    },
    "moves": {
      "basic": {
        "punch": "Ray of Purification",
        "kick": "Divine Kick"
      },
      "special": {
        "name": "Divine Intervention",
        "description": "Target ally is shielded for 300% of Ecanju's magic power for 5 seconds. If the shield breaks, it explodes, dealing 100% magical damage to nearby enemies."
      },
      "ultimate": {
        "name": "Final Dawn",
        "description": "Ecanju channels the full power of the ZeinZui for 2 seconds, then unleashes a massive explosion of holy light in a 30‑meter radius. Allies within the radius are healed for 500% of her magic power and cleansed of all debuffs. Enemies take 400% magical damage and are stunned for 3 seconds."
      }
    },
    "images": {
      "icon": "../assets/images/heroes/ecanju_ferosta/icon.png",
      "selection": "../assets/images/heroes/ecanju_ferosta/real.png",
      "loading": "../assets/images/heroes/ecanju_ferosta/hero.png",
      "spriteRight": "../assets/images/heroes/ecanju_ferosta/sprite.png"
    },
    "colorPalette": {
      "primary": ["#FFD700", "#FFFFFF", "#FF8C00"],
      "secondary": ["#F5F5DC", "#FF1493", "#00CED1"],
      "tertiary": ["#FFFF00", "#FFA500", "#48D1CC"],
      "quaternary": ["#FFF8DC", "#FF69B4", "#20B2AA"]
    },
    "projectile": null
  },
  {
    "id": 18,
    "name": "Longwei",
    "role": "Warrior",
    "titles": ["The Dragon Emperor", "Tyrant of Scales"],
    "rank": "SSS-Rank",
    "level": 400,
    "shortDescription": "He sits upon a throne of obsidian and gold, a being whose mere presence commands the reverence of empires and the terror of his enemies. Longwei is the Dragon Emperor, the Tyrant of Scales, a man whose features blend celestial beauty with draconic majesty. He is the father of Zilong, though his son does not know it.",
    "stats": {
      "power": 10,
      "strength": 10,
      "offense": 9,
      "defense": 9,
      "stamina": 10,
      "physicalAtk": 10,
      "magicalAtk": 8,
      "physDef": 9,
      "magDef": 7,
      "speed": 8,
      "health": 280,
      "mana": 70,
      "manaReg": 1.0
    },
    "moves": {
      "basic": {
        "punch": "Jade Strike",
        "kick": "Dragon Kick"
      },
      "special": {
        "name": "Flame Breath",
        "description": "Longwei breathes a cone of poison-green fire, dealing 200% physical damage and applying a burn that deals 50% damage per second for 5 seconds."
      },
      "ultimate": {
        "name": "Draconic Transformation",
        "description": "Longwei transforms into his golden dragon form for 15 seconds. In dragon form, his basic attacks become area-of-effect claw swipes, his Flame Breath cooldown is reduced to 2 seconds, and he gains 50% increased health and 30% increased damage."
      }
    },
    "images": {
      "icon": "../assets/images/heroes/longwei/icon.png",
      "selection": "../assets/images/heroes/longwei/real.png",
      "loading": "../assets/images/heroes/longwei/hero.png",
      "spriteRight": "../assets/images/heroes/longwei/sprite.png"
    },
    "colorPalette": {
      "primary": ["#FFD700", "#0B0B0B", "#8B0000"],
      "secondary": ["#2F4F4F", "#006400", "#DAA520"],
      "tertiary": ["#B8860B", "#008000", "#FF4500"],
      "quaternary": ["#000000", "#A0522D", "#32CD32"]
    },
    "projectile": null
  },
  {
    "id": 19,
    "name": "Brigeinda",
    "role": "Warrior",
    "titles": ["The Iron Maiden of the Iron Mountain", "Master Engineer of the Siege"],
    "rank": "SS-Rank",
    "level": 180,
    "shortDescription": "She emerges from the smoke of her own forge like a goddess of war forged from steel and spite, a being whose beauty is as dangerous as the weapons she builds. Brigeinda is an eighteen-year-old prodigy of Dwarven-Elf blood, a fusion of two ancient races that has produced something entirely new and utterly formidable.",
    "stats": {
      "power": 9,
      "strength": 9,
      "offense": 9,
      "defense": 8,
      "stamina": 8,
      "physicalAtk": 10,
      "magicalAtk": 6,
      "physDef": 8,
      "magDef": 5,
      "speed": 6,
      "health": 240,
      "mana": 60,
      "manaReg": 0.8
    },
    "moves": {
      "basic": {
        "punch": "Ground Slam",
        "kick": "Siege Kick"
      },
      "special": {
        "name": "Lightning Call",
        "description": "Brigeinda raises the Siegebreaker, calling down a lightning strike at target location. Deals 250% physical damage to enemies within a 5‑meter radius and stuns them for 1.5 seconds."
      },
      "ultimate": {
        "name": "Cataclysm",
        "description": "Brigeinda channels for 1.5 seconds, then unleashes the full power of the Siegebreaker, causing a massive earthquake in a 20‑meter radius. Enemies within the radius take 400% physical damage, are stunned for 2 seconds, and have their armor reduced by 50% for 8 seconds."
      }
    },
    "images": {
      "icon": "../assets/images/heroes/brigeinda/icon.png",
      "selection": "../assets/images/heroes/brigeinda/real.png",
      "loading": "../assets/images/heroes/brigeinda/hero.png",
      "spriteRight": "../assets/images/heroes/brigeinda/sprite.png"
    },
    "colorPalette": {
      "primary": ["#8B4513", "#2F4F2F", "#FF4500"],
      "secondary": ["#B87333", "#4A4A4A", "#DAA520"],
      "tertiary": ["#A0522D", "#556B2F", "#FF8C00"],
      "quaternary": ["#000000", "#CD853F", "#B22222"]
    },
    "projectile": null
  },
  {
    "id": 20,
    "name": "Hattori Hanjou",
    "role": "Warrior",
    "titles": ["The Cherry Blossom Shadow", "Master of the Twin Blades"],
    "rank": "S-Rank",
    "level": 140,
    "shortDescription": "He moves through the world like a petal caught on a spring breeze—beautiful, fleeting, and capable of cutting deeper than any blade. Hattori Hanjou is a young man of twenty-one years, his features a masterful blend of Japanese refinement and ethereal beauty. He wields Yami, the sword of light, and Kuro, the blade of cherry blossoms.",
    "stats": {
      "power": 7,
      "strength": 6,
      "offense": 9,
      "defense": 5,
      "stamina": 7,
      "physicalAtk": 9,
      "magicalAtk": 5,
      "physDef": 5,
      "magDef": 6,
      "speed": 10,
      "health": 150,
      "mana": 55,
      "manaReg": 0.9
    },
    "moves": {
      "basic": {
        "punch": "Light Slash",
        "kick": "Shadow Kick"
      },
      "special": {
        "name": "Petal Storm",
        "description": "Hanjou spins with Kuro, releasing a storm of cherry blossom petals that deal 150% physical damage to enemies within an 8‑meter radius and reduce their healing by 50% for 5 seconds."
      },
      "ultimate": {
        "name": "Sakura Finale",
        "description": "Hanjou channels for 1 second, then unleashes the combined power of both blades, creating a massive cherry blossom storm in a 20‑meter radius. Enemies within the radius take 350% physical damage, are slowed by 60% for 4 seconds, and take 100% damage per second from swirling petals."
      }
    },
    "images": {
      "icon": "../assets/images/heroes/hattori_hanjou/icon.png",
      "selection": "../assets/images/heroes/hattori_hanjou/real.png",
      "loading": "../assets/images/heroes/hattori_hanjou/hero.png",
      "spriteRight": "../assets/images/heroes/hattori_hanjou/sprite.png"
    },
    "colorPalette": {
      "primary": ["#DC143C", "#FFFFFF", "#FFB6C1"],
      "secondary": ["#808080", "#FF1493", "#000000"],
      "tertiary": ["#8B0000", "#FF69B4", "#C0C0C0"],
      "quaternary": ["#A0522D", "#FFC0CB", "#1A1A1A"]
    },
    "projectile": null
  },
  {
    "id": 21,
    "name": "Frejyah",
    "role": "Warrior",
    "titles": ["The Last Valkyrie of the Damned", "Fallen Daughter of Valhalla"],
    "rank": "SSS-Rank",
    "level": 320,
    "shortDescription": "She stands alone at the edge of the world, where the frozen mists of Helheim meet the blood‑stained fields of what was once Valhalla. Frejyah is a Valkyrie who has fallen from grace not through sin, but through betrayal, and who has risen again as something far more dangerous than any goddess.",
    "stats": {
      "power": 9,
      "strength": 9,
      "offense": 9,
      "defense": 9,
      "stamina": 9,
      "physicalAtk": 9,
      "magicalAtk": 7,
      "physDef": 10,
      "magDef": 8,
      "speed": 7,
      "health": 260,
      "mana": 65,
      "manaReg": 1.0
    },
    "moves": {
      "basic": {
        "punch": "Shield Bash",
        "kick": "Valkyrie Kick"
      },
      "special": {
        "name": "Spear Throw",
        "description": "Frejyah throws Gungnir's Shard in a straight line, piercing all enemies and dealing 200% physical damage. The spear returns to her hand after 2 seconds."
      },
      "ultimate": {
        "name": "Helheim's Judgment",
        "description": "Frejyah raises both shield and spear, channeling the power of Helheim for 1.5 seconds. She then unleashes a wave of frozen energy in a 25‑meter radius, dealing 400% physical damage and freezing all enemies for 3 seconds."
      }
    },
    "images": {
      "icon": "../assets/images/heroes/frejyah/icon.png",
      "selection": "../assets/images/heroes/frejyah/real.png",
      "loading": "../assets/images/heroes/frejyah/hero.png",
      "spriteRight": "../assets/images/heroes/frejyah/sprite.png"
    },
    "colorPalette": {
      "primary": ["#708090", "#A52A2A", "#2F4F4F"],
      "secondary": ["#8B0000", "#B22222", "#FFD700"],
      "tertiary": ["#778899", "#800000", "#DAA520"],
      "quaternary": ["#000000", "#CD5C5C", "#B8860B"]
    },
    "projectile": null
  },
  {
    "id": 22,
    "name": "Mara",
    "role": "Warrior",
    "titles": ["The Shadow Banisher Elf", "Light of the Eternal Forest"],
    "rank": "SS-Rank",
    "level": 200,
    "shortDescription": "She descends from the canopy of the eternal forest like a shard of moonlight given form, a being of such radiant purity that the shadows recoil from her presence. Mara is an elf of the highest order, the sister of Karina, and her eternal adversary. Where Karina embraced the darkness, Mara chose the light.",
    "stats": {
      "power": 8,
      "strength": 7,
      "offense": 9,
      "defense": 7,
      "stamina": 8,
      "physicalAtk": 8,
      "magicalAtk": 8,
      "physDef": 6,
      "magDef": 8,
      "speed": 9,
      "health": 180,
      "mana": 70,
      "manaReg": 1.2
    },
    "moves": {
      "basic": {
        "punch": "Blade of Dawn",
        "kick": "Radiant Kick"
      },
      "special": {
        "name": "Purifying Touch",
        "description": "Mara cleanses a target ally of all debuffs and heals them for 150% of her magic power. Can also be used on enemies to remove their buffs and deal 100% holy damage."
      },
      "ultimate": {
        "name": "Final Purification",
        "description": "Mara channels for 1.5 seconds, then unleashes a massive blast of holy light in a 20‑meter radius. Enemies within the radius take 350% holy damage and are stunned for 2 seconds. Allies within the radius are healed for 300% of Mara's magic power."
      }
    },
    "images": {
      "icon": "../assets/images/heroes/mara/icon.png",
      "selection": "../assets/images/heroes/mara/real.png",
      "loading": "../assets/images/heroes/mara/hero.png",
      "spriteRight": "../assets/images/heroes/mara/sprite.png"
    },
    "colorPalette": {
      "primary": ["#FFFFFF", "#32CD32", "#FF0000"],
      "secondary": ["#006400", "#FFD700", "#00FF7F"],
      "tertiary": ["#F0FFF0", "#008000", "#FFFF00"],
      "quaternary": ["#000000", "#ADFF2F", "#FF4500"]
    },
    "projectile": null
  },
  {
    "id": 23,
    "name": "Belleri Fumas",
    "role": "Mage",
    "titles": ["The Primordial Fire Spirit", "Sister of Aurora"],
    "rank": "SSS-Rank",
    "level": 380,
    "shortDescription": "She burns at the heart of the world, a flame that has never been extinguished, a warmth that has cradled civilizations and reduced empires to ash. Belleri Fumas is a divine spirit of fire, her form a breathtaking fusion of ethereal beauty and elemental fury. She is the sister of Aurora, the Ice Queen.",
    "stats": {
      "power": 10,
      "strength": 5,
      "offense": 10,
      "defense": 6,
      "stamina": 8,
      "physicalAtk": 3,
      "magicalAtk": 10,
      "physDef": 5,
      "magDef": 7,
      "speed": 8,
      "health": 180,
      "mana": 80,
      "manaReg": 2.0
    },
    "moves": {
      "basic": {
        "punch": "Fireball",
        "kick": "Flame Kick"
      },
      "special": {
        "name": "Flame Whip",
        "description": "Belleri lashes out with a whip of fire in a 12‑meter cone, dealing 150% magical damage and pulling enemies toward her."
      },
      "ultimate": {
        "name": "Inferno",
        "description": "Belleri channels for 2 seconds, then unleashes a massive wave of fire in a 25‑meter radius. Enemies take 500% magical damage and are stunned for 2 seconds. Burning stacks are instantly applied to all enemies."
      }
    },
    "images": {
      "icon": "../assets/images/heroes/belleri_fumas/icon.png",
      "selection": "../assets/images/heroes/belleri_fumas/real.png",
      "loading": "../assets/images/heroes/belleri_fumas/hero.png",
      "spriteRight": "../assets/images/heroes/belleri_fumas/sprite.png"
    },
    "colorPalette": {
      "primary": ["#FF4500", "#FFD700", "#8B0000"],
      "secondary": ["#FF8C00", "#FF1493", "#FFA500"],
      "tertiary": ["#FF6347", "#FFFF00", "#DC143C"],
      "quaternary": ["#000000", "#FF7F50", "#B22222"]
    },
    "projectile": null
  },
  {
    "id": 24,
    "name": "Waguri",
    "role": "Mage",
    "titles": ["The Monster Summoner of the Inverted Shrine", "Heir of the Plum Clan"],
    "rank": "SS-Rank",
    "level": 210,
    "shortDescription": "She drifts through the twilight like a dream wrapped in silk and shadow, a beauty so profound that it borders on the terrible. Waguri is a nineteen-year-old woman whose grace has been honed by centuries of practice, though her face holds the freshness of eternal youth. She is the evil twin of Kagura, the shadow to her light.",
    "stats": {
      "power": 7,
      "strength": 5,
      "offense": 8,
      "defense": 5,
      "stamina": 7,
      "physicalAtk": 4,
      "magicalAtk": 9,
      "physDef": 4,
      "magDef": 7,
      "speed": 8,
      "health": 150,
      "mana": 75,
      "manaReg": 1.5
    },
    "moves": {
      "basic": {
        "punch": "Shadow Step",
        "kick": "Plum Kick"
      },
      "special": {
        "name": "Tengu's Call",
        "description": "Waguri summons a Tengu that flies to target location and explodes, dealing 150% magical damage in a 6‑meter radius and knocking back enemies."
      },
      "ultimate": {
        "name": "Legion Unleashed",
        "description": "Waguri opens the Kagegasa fully, releasing all her bound monsters at once. For 15 seconds, monsters spawn continuously around her, attacking enemies and dealing 100% magical damage per hit. Enemies within the swarm are slowed by 50% and take 50% damage per second."
      }
    },
    "images": {
      "icon": "../assets/images/heroes/waguri/icon.png",
      "selection": "../assets/images/heroes/waguri/real.png",
      "loading": "../assets/images/heroes/waguri/hero.png",
      "spriteRight": "../assets/images/heroes/waguri/sprite.png"
    },
    "colorPalette": {
      "primary": ["#000000", "#4B0082", "#8B0000"],
      "secondary": ["#9400D3", "#FF69B4", "#800080"],
      "tertiary": ["#1A1A1A", "#8A2BE2", "#FFB6C1"],
      "quaternary": ["#2F2F2F", "#BA55D3", "#A52A2A"]
    },
    "projectile": null
  },
  {
    "id": 25,
    "name": "Maila Toh",
    "role": "Warrior",
    "titles": ["The Devil Barrier", "Second Brother of Gatotkaca"],
    "rank": "SSS-Rank",
    "level": 310,
    "shortDescription": "He stands like a bastion of damned resolve, a fortress of flesh and fury that has withstood the onslaught of heaven and hell alike. Maila Toh is a man of forty-five years, his body a monument to the suffering that forged him and the power that now sustains him. He is the second brother of Gatotkaca, the one who was not there when the family needed him most.",
    "stats": {
      "power": 8,
      "strength": 10,
      "offense": 7,
      "defense": 10,
      "stamina": 10,
      "physicalAtk": 8,
      "magicalAtk": 4,
      "physDef": 10,
      "magDef": 8,
      "speed": 5,
      "health": 300,
      "mana": 55,
      "manaReg": 0.7
    },
    "moves": {
      "basic": {
        "punch": "Soul Devour",
        "kick": "Demonic Kick"
      },
      "special": {
        "name": "Power Conversion",
        "description": "Maila converts 50% of his current health into a shield that absorbs 200% of the converted health. The shield lasts 5 seconds."
      },
      "ultimate": {
        "name": "Devil's Wrath",
        "description": "Maila unleashes all absorbed power from Kerinzo Karma, dealing 300% physical damage plus 10% of his max health as bonus damage to all enemies within 15 meters. Maila's health is reduced to 1 after using this skill."
      }
    },
    "images": {
      "icon": "../assets/images/heroes/maila_toh/icon.png",
      "selection": "../assets/images/heroes/maila_toh/real.png",
      "loading": "../assets/images/heroes/maila_toh/hero.png",
      "spriteRight": "../assets/images/heroes/maila_toh/sprite.png"
    },
    "colorPalette": {
      "primary": ["#006400", "#8B0000", "#FFD700"],
      "secondary": ["#2F4F2F", "#B22222", "#000000"],
      "tertiary": ["#228B22", "#DC143C", "#B8860B"],
      "quaternary": ["#1A1A1A", "#8B4513", "#FF8C00"]
    },
    "projectile": null
  },
  {
    "id": 26,
    "name": "Teinukza Sherpa",
    "role": "Warrior",
    "titles": ["The Frost Giantess of Niflheim", "Jotun of the Himalayas"],
    "rank": "SSS-Rank",
    "level": 400,
    "shortDescription": "She walks the high passes of the Himalayas like a glacier given will, a being of such ancient, terrible beauty that the mountains themselves tremble at her approach. Teinukza Sherpa is a frost giantess of eighteen years (in appearance, though her existence spans sixty-five centuries), a jotun who has waged war on the human tribes for six thousand years.",
    "stats": {
      "power": 10,
      "strength": 10,
      "offense": 9,
      "defense": 10,
      "stamina": 10,
      "physicalAtk": 10,
      "magicalAtk": 6,
      "physDef": 10,
      "magDef": 8,
      "speed": 5,
      "health": 300,
      "mana": 60,
      "manaReg": 0.8
    },
    "moves": {
      "basic": {
        "punch": "Ice Cleave",
        "kick": "Glacial Kick"
      },
      "special": {
        "name": "Avalanche Throw",
        "description": "Teinukza throws Frostbite in a straight line, piercing all enemies and dealing 250% physical damage. The axe returns to her hand after 2 seconds."
      },
      "ultimate": {
        "name": "Winter's Wrath",
        "description": "Teinukza raises Frostbite and channels for 1.5 seconds, then slams it into the ground, creating a massive blizzard in a 25‑meter radius. Enemies in the blizzard take 400% physical damage, are slowed by 80%, and have their vision reduced to 3 meters for 5 seconds."
      }
    },
    "images": {
      "icon": "../assets/images/heroes/teinukza_sherpa/icon.png",
      "selection": "../assets/images/heroes/teinukza_sherpa/real.png",
      "loading": "../assets/images/heroes/teinukza_sherpa/hero.png",
      "spriteRight": "../assets/images/heroes/teinukza_sherpa/sprite.png"
    },
    "colorPalette": {
      "primary": ["#0000CD", "#8B4513", "#4682B4"],
      "secondary": ["#A0522D", "#00CED1", "#FFD700"],
      "tertiary": ["#1E90FF", "#B8860B", "#008080"],
      "quaternary": ["#000000", "#5F9EA0", "#D2691E"]
    },
    "projectile": null
  },
  {
    "id": 27,
    "name": "Seki Meite",
    "role": "Marksman",
    "titles": ["The Sun Scourge Empress", "Heir of Ra"],
    "rank": "SSS-Rank",
    "level": 289,
    "shortDescription": "An Egyptian empress of unparalleled beauty who was betrayed, her throne stolen, her kingdom lost. Seki Meite has spent millennia in the desert gathering her strength, wielding the Khopesh of Flames and commanding the Sphinx Sei Ki. She waits for the moment when the stars align and she can reclaim what is hers from the usurper Moskov.",
    "stats": {
      "power": 8,
      "strength": 7,
      "offense": 9,
      "defense": 7,
      "stamina": 8,
      "physicalAtk": 8,
      "magicalAtk": 9,
      "physDef": 7,
      "magDef": 8,
      "speed": 7,
      "health": 190,
      "mana": 75,
      "manaReg": 1.3
    },
    "moves": {
      "basic": {
        "punch": "Blazing Throw",
        "kick": "Sun Kick"
      },
      "special": {
        "name": "Sandstorm",
        "description": "Summons a sandstorm in a 10‑meter radius for 4 seconds, blinding enemies inside (reduced vision range) and dealing 60 magic damage per second."
      },
      "ultimate": {
        "name": "Ra's Judgment",
        "description": "Seki raises the Khopesh to the sky, calling down a beam of concentrated sunlight in a 15‑meter radius after 1.5 seconds. Enemies in the area take 400% magic damage and are stunned for 2 seconds. The ground remains scorched for 6 seconds, dealing 50 damage per second."
      }
    },
    "images": {
      "icon": "../assets/images/heroes/seki_meite/icon.png",
      "selection": "../assets/images/heroes/seki_meite/real.png",
      "loading": "../assets/images/heroes/seki_meite/hero.png",
      "spriteRight": "../assets/images/heroes/seki_meite/sprite.png"
    },
    "colorPalette": {
      "primary": ["#FFD700", "#F4A460", "#8B4513"],
      "secondary": ["#1A1A1A", "#FF4500", "#4B0082"],
      "tertiary": ["#DAA520", "#FF8C00", "#800080"],
      "quaternary": ["#000000", "#FFA500", "#2E8B57"]
    },
    "projectile": {
      "speed": 12,
      "damageScale": 1.2,
      "image": "../assets/images/heroes/seki_meite/projectile.png"
    }
  },
  {
    "id": 28,
    "name": "Transformei",
    "role": "Marksman",
    "titles": ["The Skybound Forge", "Anti-Johnson Protocol"],
    "rank": "SS-Rank",
    "level": 245,
    "shortDescription": "A twelve‑foot colossus of red‑shaded alloy and obsidian black plating, a seamless fusion of feminine grace and military brutality. Transformei is Johnson's elder sister, forged in the same crucible, given life by the same creator. She is a living weapon who transforms into a fighter jet.",
    "stats": {
      "power": 8,
      "strength": 9,
      "offense": 9,
      "defense": 8,
      "stamina": 9,
      "physicalAtk": 9,
      "magicalAtk": 6,
      "physDef": 8,
      "magDef": 7,
      "speed": 7,
      "health": 220,
      "mana": 60,
      "manaReg": 0.9
    },
    "moves": {
      "basic": {
        "punch": "Laser Blast",
        "kick": "Rocket Kick"
      },
      "special": {
        "name": "Missile Barrage",
        "description": "Fires 6 micro-missiles in a spread, each dealing 40% physical damage to enemies in a 10‑meter area."
      },
      "ultimate": {
        "name": "Skybound Transformation",
        "description": "Transformei transforms into a fighter jet for 10 seconds, gaining 80% movement speed, immunity to ground-based crowd control, and the ability to fire lasers while moving. Her basic attacks become area-of-effect (3-meter radius). After the duration ends, she lands and stuns nearby enemies for 1 second."
      }
    },
    "images": {
      "icon": "../assets/images/heroes/transformei/icon.png",
      "selection": "../assets/images/heroes/transformei/real.png",
      "loading": "../assets/images/heroes/transformei/hero.png",
      "spriteRight": "../assets/images/heroes/transformei/sprite.png"
    },
    "colorPalette": {
      "primary": ["#DC143C", "#0B0B0B", "#FF4500"],
      "secondary": ["#4A4A4A", "#FFD700", "#00FFFF"],
      "tertiary": ["#8B0000", "#C0C0C0", "#1E90FF"],
      "quaternary": ["#000000", "#FF8C00", "#00CED1"]
    },
    "projectile": {
      "speed": 20,
      "damageScale": 0.5,
      "image": "../assets/images/heroes/transformei/projectile.png"
    }
  },
  {
    "id": 29,
    "name": "Oculus",
    "role": "Mage",
    "titles": ["The All‑Seeing Eye of the Cosmos", "The Omniscient"],
    "rank": "SSS-Rank",
    "level": 350,
    "shortDescription": "A cyclops of celestial origin who floats at the center of reality, a being of such profound, terrible beauty that the universe itself holds its breath in her presence. Oculus is omniscient, aware of every thread of fate. She is the mentor of Cyclops, guiding him toward a better path.",
    "stats": {
      "power": 7,
      "strength": 5,
      "offense": 8,
      "defense": 9,
      "stamina": 8,
      "physicalAtk": 4,
      "magicalAtk": 10,
      "physDef": 8,
      "magDef": 10,
      "speed": 6,
      "health": 200,
      "mana": 80,
      "manaReg": 5.0
    },
    "moves": {
      "basic": {
        "punch": "Laser Gaze",
        "kick": "Cosmic Kick"
      },
      "special": {
        "name": "Fate's Thread",
        "description": "Oculus designates an enemy as 'Seen,' revealing their location and reducing their armor and magic resist by 20% for 6 seconds."
      },
      "ultimate": {
        "name": "Cosmic Revelation",
        "description": "Oculus unleashes the full power of her eye, creating a 25‑meter radius zone of truth for 6 seconds. Enemies inside are slowed by 40%, have all their buffs removed, and cannot enter stealth or become invisible. Allies inside gain 30% critical strike chance and see all enemies on the map for the duration."
      }
    },
    "images": {
      "icon": "../assets/images/heroes/oculus/icon.png",
      "selection": "../assets/images/heroes/oculus/real.png",
      "loading": "../assets/images/heroes/oculus/hero.png",
      "spriteRight": "../assets/images/heroes/oculus/sprite.png"
    },
    "colorPalette": {
      "primary": ["#FFFFFF", "#C0C0C0", "#4B0082"],
      "secondary": ["#00008B", "#FFD700", "#00FFFF"],
      "tertiary": ["#F5F5F5", "#4169E1", "#FFA500"],
      "quaternary": ["#1A1A1A", "#87CEEB", "#FF1493"]
    },
    "projectile": null
  },
  {
    "id": 30,
    "name": "Olive Rein",
    "role": "Warrior",
    "titles": ["The Bloody Poison Reaper", "The Noble Vampire"],
    "rank": "S-Rank",
    "level": 223,
    "shortDescription": "A vampire of the highest order, a noblewoman who has been waiting for centuries to reclaim her status as lord. Olive Rein hunts with her Olive Poison Bloodscythe, a reaper's tool that drips with venom, accompanied by a small green vampire bat. She seeks to reclaim the throne that was stolen from her.",
    "stats": {
      "power": 7,
      "strength": 7,
      "offense": 9,
      "defense": 7,
      "stamina": 8,
      "physicalAtk": 9,
      "magicalAtk": 7,
      "physDef": 7,
      "magDef": 8,
      "speed": 7,
      "health": 190,
      "mana": 60,
      "manaReg": 1.0
    },
    "moves": {
      "basic": {
        "punch": "Poison Sweep",
        "kick": "Venom Kick"
      },
      "special": {
        "name": "Green Mist",
        "description": "Releases a cloud of poisonous mist in a 8‑meter radius for 4 seconds, dealing 60 magic damage per second and reducing enemy healing by 50%."
      },
      "ultimate": {
        "name": "Reaping Harvest",
        "description": "Olive leaps to a target location and slams the scythe down, dealing 350% physical damage to all enemies in a 10‑meter radius. Enemies below 30% health are executed instantly (true damage)."
      }
    },
    "images": {
      "icon": "../assets/images/heroes/olive_rein/icon.png",
      "selection": "../assets/images/heroes/olive_rein/real.png",
      "loading": "../assets/images/heroes/olive_rein/hero.png",
      "spriteRight": "../assets/images/heroes/olive_rein/sprite.png"
    },
    "colorPalette": {
      "primary": ["#000000", "#2F4F2F", "#C0C0C0"],
      "secondary": ["#556B2F", "#4A4A4A", "#8B0000"],
      "tertiary": ["#1A1A1A", "#6B8E23", "#A52A2A"],
      "quaternary": ["#2F2F2F", "#9ACD32", "#800000"]
    },
    "projectile": null
  },
  {
    "id": 31,
    "name": "Wukong",
    "role": "Brawler",
    "titles": ["The Primordial Monkey King", "The Great Sage Equal to Heaven"],
    "rank": "SSS-Rank",
    "level": 340,
    "shortDescription": "The original Monkey King, born from a stone and cracked the gates of heaven with his staff. Wukong is a being of pure, unbridled chaos, the enemy of order and the herald of anarchy. He rides his cloud Badal and wields the Ruyi Jingu Bang, a staff that can grow to any size. He watches his descendant Sun with amusement, waiting for the day when the young monkey will challenge him.",
    "stats": {
      "power": 9,
      "strength": 9,
      "offense": 9,
      "defense": 8,
      "stamina": 10,
      "physicalAtk": 9,
      "magicalAtk": 6,
      "physDef": 8,
      "magDef": 7,
      "speed": 9,
      "health": 250,
      "mana": 60,
      "manaReg": 1.0
    },
    "moves": {
      "basic": {
        "punch": "Monkey's Fury",
        "kick": "Cloud-Somersault Kick"
      },
      "special": {
        "name": "Monkey Clone",
        "description": "Wukong creates a clone of himself that lasts 6 seconds. The clone deals 40% damage and takes 200% damage. Wukong can swap positions with the clone once."
      },
      "ultimate": {
        "name": "Heavenly Rebellion",
        "description": "Wukong leaps into the air and crashes down, creating a 20‑meter shockwave that deals 300% physical damage and stuns enemies for 2 seconds. For 10 seconds afterward, his clones deal 100% damage and he has 30% lifesteal."
      }
    },
    "images": {
      "icon": "../assets/images/heroes/wukong/icon.png",
      "selection": "../assets/images/heroes/wukong/real.png",
      "loading": "../assets/images/heroes/wukong/hero.png",
      "spriteRight": "../assets/images/heroes/wukong/sprite.png"
    },
    "colorPalette": {
      "primary": ["#FFD700", "#FF4500", "#8B0000"],
      "secondary": ["#1A1A1A", "#FF0000", "#00FFFF"],
      "tertiary": ["#FFA500", "#DC143C", "#00BFFF"],
      "quaternary": ["#000000", "#FF8C00", "#1E90FF"]
    },
    "projectile": null
  },
  {
    "id": 32,
    "name": "Kei Kai",
    "role": "Marksman",
    "titles": ["The Tamer of the Undead", "Grandmother of Irithel"],
    "rank": "SS-Rank",
    "level": 289,
    "shortDescription": "A woman of sixteen years who has lived for twelve millennia, her face frozen in the eternal youth of the necropolis. Kei Kai is the grandmother of Irithel, a necromancer who seeks to make all beasts her slaves. She wields the Bone Bow, which fires cursed bone shards, and rides Kai, a corrupted orange smilodon. She seeks to bind her granddaughter as she has bound all her other beasts.",
    "stats": {
      "power": 7,
      "strength": 6,
      "offense": 8,
      "defense": 7,
      "stamina": 8,
      "physicalAtk": 8,
      "magicalAtk": 8,
      "physDef": 7,
      "magDef": 8,
      "speed": 7,
      "health": 180,
      "mana": 70,
      "manaReg": 1.2
    },
    "moves": {
      "basic": {
        "punch": "Bone Shard Volley",
        "kick": "Necrotic Kick"
      },
      "special": {
        "name": "Raise Army",
        "description": "Kei raises up to 5 skeletal archers from corpses in a 15‑meter radius. They last 15 seconds."
      },
      "ultimate": {
        "name": "Curse of Binding",
        "description": "Kei fires a massive cursed arrow that pins an enemy to the ground, stunning them for 3 seconds and dealing 300% physical damage. The target is also marked, and if they die within 10 seconds, they rise as a permanent skeleton minion for Kei."
      }
    },
    "images": {
      "icon": "../assets/images/heroes/kei_kai/icon.png",
      "selection": "../assets/images/heroes/kei_kai/real.png",
      "loading": "../assets/images/heroes/kei_kai/hero.png",
      "spriteRight": "../assets/images/heroes/kei_kai/sprite.png"
    },
    "colorPalette": {
      "primary": ["#F5F5DC", "#FF4500", "#8B4513"],
      "secondary": ["#2F2F2F", "#FFD700", "#4A4A4A"],
      "tertiary": ["#FFF8DC", "#FF8C00", "#A0522D"],
      "quaternary": ["#000000", "#FFA500", "#D2691E"]
    },
    "projectile": {
      "speed": 8,
      "damageScale": 1.5,
      "image": "../assets/images/heroes/kei_kai/projectile.png"
    }
  },
  {
    "id": 33,
    "name": "Seraphine",
    "role": "Mage",
    "titles": ["The Angel of Light", "The Purifier"],
    "rank": "SSS-Rank",
    "level": 301,
    "shortDescription": "An angel of the highest order, a being of such radiant, terrible beauty that the darkness itself recoils from her presence. Seraphine is the angel that Argus fell from, the sister who watched him choose darkness over light. She has hunted him across the ages, not to destroy him, but to save him.",
    "stats": {
      "power": 7,
      "strength": 7,
      "offense": 8,
      "defense": 8,
      "stamina": 8,
      "physicalAtk": 8,
      "magicalAtk": 8,
      "physDef": 8,
      "magDef": 9,
      "speed": 7,
      "health": 200,
      "mana": 75,
      "manaReg": 1.3
    },
    "moves": {
      "basic": {
        "punch": "Righteous Strike",
        "kick": "Holy Kick"
      },
      "special": {
        "name": "Holy Barrier",
        "description": "Creates a barrier around an ally that absorbs 300 damage and reflects 20% of damage taken back to attackers for 4 seconds."
      },
      "ultimate": {
        "name": "Redemption",
        "description": "Seraphine channels for 2 seconds, then unleashes a wave of holy light in a 20‑meter radius. Enemies take 300% magic damage and are stunned for 2 seconds. Allies are healed for 400 health plus 20% of their max health and have all debuffs removed."
      }
    },
    "images": {
      "icon": "../assets/images/heroes/seraphine/icon.png",
      "selection": "../assets/images/heroes/seraphine/real.png",
      "loading": "../assets/images/heroes/seraphine/hero.png",
      "spriteRight": "../assets/images/heroes/seraphine/sprite.png"
    },
    "colorPalette": {
      "primary": ["#FFFFFF", "#FFD700", "#87CEEB"],
      "secondary": ["#C0C0C0", "#4169E1", "#FF69B4"],
      "tertiary": ["#F0F8FF", "#1E90FF", "#FFB6C1"],
      "quaternary": ["#000000", "#00BFFF", "#FF1493"]
    },
    "projectile": null
  },
  {
    "id": 34,
    "name": "Viper",
    "role": "Marksman",
    "titles": ["The Silencer of Whitechapel", "The Truth's Blade"],
    "rank": "S-Rank",
    "level": 187,
    "shortDescription": "A woman who moves through the fog‑shrouded streets of Whitechapel like a ghost in a snowstorm, a figure of such cold, calculated beauty that the whispers of the underworld fall silent at her passing. Viper is Lesley's sister, a silencer who hunts those who twist the truth.",
    "stats": {
      "power": 6,
      "strength": 5,
      "offense": 9,
      "defense": 6,
      "stamina": 7,
      "physicalAtk": 9,
      "magicalAtk": 4,
      "physDef": 6,
      "magDef": 7,
      "speed": 8,
      "health": 150,
      "mana": 55,
      "manaReg": 0.8
    },
    "moves": {
      "basic": {
        "punch": "Scope Shot",
        "kick": "Silent Kick"
      },
      "special": {
        "name": "Smoke Grenade",
        "description": "Throws a smoke grenade that creates a 6-meter cloud for 4 seconds, blinding enemies inside and silencing their abilities."
      },
      "ultimate": {
        "name": "The Silencer",
        "description": "Viper fires a devastating shot in a line, dealing 350% physical damage to the first enemy hit and 150% to subsequent enemies. The shot ignores 50% of the target's armor. If the target dies, Venom's cooldown is reset."
      }
    },
    "images": {
      "icon": "../assets/images/heroes/viper/icon.png",
      "selection": "../assets/images/heroes/viper/real.png",
      "loading": "../assets/images/heroes/viper/hero.png",
      "spriteRight": "../assets/images/heroes/viper/sprite.png"
    },
    "colorPalette": {
      "primary": ["#FFFFFF", "#C0C0C0", "#000000"],
      "secondary": ["#4A4A4A", "#4169E1", "#2F2F2F"],
      "tertiary": ["#F5F5F5", "#1E90FF", "#800000"],
      "quaternary": ["#D3D3D3", "#87CEEB", "#A52A2A"]
    },
    "projectile": {
      "speed": 20,
      "damageScale": 2.0,
      "image": "../assets/images/heroes/viper/projectile.png"
    }
  },
  {
    "id": 35,
    "name": "Keingzyu",
    "role": "Mage",
    "titles": ["The Death Star", "Hive Queen of the Cosmos"],
    "rank": "SSS-Rank",
    "level": 325,
    "shortDescription": "A hive queen of the deepest cosmos, a being of such alien, terrible beauty that entire systems dim in her passing. Keingzyu is the rival hive leader who seeks to consume Zhask's world, a primordial entity of cosmic hunger. She commands a swarm of bio-drones and wields the Devourer, a living staff that consumes the life force of worlds.",
    "stats": {
      "power": 9,
      "strength": 8,
      "offense": 9,
      "defense": 8,
      "stamina": 9,
      "physicalAtk": 6,
      "magicalAtk": 10,
      "physDef": 8,
      "magDef": 9,
      "speed": 7,
      "health": 240,
      "mana": 80,
      "manaReg": 1.8
    },
    "moves": {
      "basic": {
        "punch": "Devourer Beam",
        "kick": "Swarm Kick"
      },
      "special": {
        "name": "Spawn Drones",
        "description": "Spawns 3 bio-drones that attack enemies for 10 seconds."
      },
      "ultimate": {
        "name": "World Eater",
        "description": "Keingzyu channels for 3 seconds, then unleashes a massive wave of consuming energy in a 25‑meter radius. Enemies take 400% magic damage and are slowed by 60% for 5 seconds. The ground in the area becomes 'consumed,' dealing 50 magic damage per second for 10 seconds."
      }
    },
    "images": {
      "icon": "../assets/images/heroes/keingzyu/icon.png",
      "selection": "../assets/images/heroes/keingzyu/real.png",
      "loading": "../assets/images/heroes/keingzyu/hero.png",
      "spriteRight": "../assets/images/heroes/keingzyu/sprite.png"
    },
    "colorPalette": {
      "primary": ["#0B0B0B", "#8B8B00", "#00FF00"],
      "secondary": ["#4A4A4A", "#FF0000", "#FFFF00"],
      "tertiary": ["#1A1A1A", "#556B2F", "#FF4500"],
      "quaternary": ["#2F2F2F", "#9ACD32", "#FFD700"]
    },
    "projectile": null
  },
  {
    "id": 36,
    "name": "Lamia",
    "role": "Mage",
    "titles": ["The Light Sun Empress", "Queen of Eternal Warmth"],
    "rank": "SSS-Rank",
    "level": 284,
    "shortDescription": "An empress of twenty‑eight years, frozen in the eternal prime of a ruler blessed by the light. Lamia rules with wisdom and compassion, her power drawn from the sun itself. She wields the Suneir staff and is accompanied by Gham, a sun‑and‑beach‑colored falcon.",
    "stats": {
      "power": 6,
      "strength": 5,
      "offense": 7,
      "defense": 8,
      "stamina": 8,
      "physicalAtk": 5,
      "magicalAtk": 9,
      "physDef": 7,
      "magDef": 9,
      "speed": 6,
      "health": 200,
      "mana": 80,
      "manaReg": 2.0
    },
    "moves": {
      "basic": {
        "punch": "Solar Flare",
        "kick": "Sun Kick"
      },
      "special": {
        "name": "Healing Ray",
        "description": "Heals an ally for 250 health plus 15% of their max health."
      },
      "ultimate": {
        "name": "Eternal Dawn",
        "description": "Lamia channels the full power of the sun for 10 seconds, creating a 20‑meter radius zone of daylight. Allies inside gain 50% attack speed, 30% movement speed, and 50% damage reduction. Enemies inside are slowed by 30% and take 100 magic damage per second."
      }
    },
    "images": {
      "icon": "../assets/images/heroes/lamia/icon.png",
      "selection": "../assets/images/heroes/lamia/real.png",
      "loading": "../assets/images/heroes/lamia/hero.png",
      "spriteRight": "../assets/images/heroes/lamia/sprite.png"
    },
    "colorPalette": {
      "primary": ["#FFD700", "#FF8C00", "#F5DEB3"],
      "secondary": ["#FFA500", "#FF4500", "#FFFF00"],
      "tertiary": ["#FFB347", "#FF6347", "#FFF8DC"],
      "quaternary": ["#000000", "#FF7F50", "#DAA520"]
    },
    "projectile": null
  },
  {
    "id": 37,
    "name": "Tiamat",
    "role": "Mage",
    "titles": ["The Abyssal Mermaid Maiden", "Primordial Sea Goddess"],
    "rank": "SSS-Rank",
    "level": 310,
    "shortDescription": "A primordial sea goddess who has swum in the oceans of the world since before the first fish crawled onto land. Tiamat rules the abyss, wielding the Trident of the Abyss and riding Pristi, an abyssal sawfish. She watches over her daughter Kadita, waiting for the day when she will be ready to rule the seas.",
    "stats": {
      "power": 8,
      "strength": 8,
      "offense": 8,
      "defense": 9,
      "stamina": 10,
      "physicalAtk": 7,
      "magicalAtk": 9,
      "physDef": 8,
      "magDef": 9,
      "speed": 7,
      "health": 260,
      "mana": 75,
      "manaReg": 1.3
    },
    "moves": {
      "basic": {
        "punch": "Tidal Wave",
        "kick": "Abyssal Kick"
      },
      "special": {
        "name": "Whirlpool",
        "description": "Creates a whirlpool at target location for 4 seconds, pulling enemies toward the center and dealing 80 magic damage per second."
      },
      "ultimate": {
        "name": "Primordial Storm",
        "description": "Tiamat calls a massive storm in a 25‑meter radius for 8 seconds. Enemies inside are slowed by 40%, take 100 magic damage per second, and are periodically struck by lightning (200 magic damage). Allies inside gain 30% movement speed and heal for 20 health per second."
      }
    },
    "images": {
      "icon": "../assets/images/heroes/tiamat/icon.png",
      "selection": "../assets/images/heroes/tiamat/real.png",
      "loading": "../assets/images/heroes/tiamat/hero.png",
      "spriteRight": "../assets/images/heroes/tiamat/sprite.png"
    },
    "colorPalette": {
      "primary": ["#000080", "#2F4F4F", "#C0C0C0"],
      "secondary": ["#1A1A1A", "#8B0000", "#00FFFF"],
      "tertiary": ["#00008B", "#008080", "#FFD700"],
      "quaternary": ["#2F2F2F", "#00CED1", "#800000"]
    },
    "projectile": null
  },
  {
    "id": 38,
    "name": "Lunara",
    "role": "Mage",
    "titles": ["The Moonlight Seeker Elf Empress", "Mother of the World Tree"],
    "rank": "SSS-Rank",
    "level": 345,
    "shortDescription": "An elf empress of eighteen years whose existence spans a hundred millennia, her face frozen in the eternal youth of the high elves. Lunara is the mother of Selena, the queen who waits for her lost daughter to return to the light of the World Tree. She wields divine moonlight and is accompanied by Fika Fika, a blob‑like being of pure moonlight energy.",
    "stats": {
      "power": 5,
      "strength": 5,
      "offense": 6,
      "defense": 9,
      "stamina": 9,
      "physicalAtk": 4,
      "magicalAtk": 9,
      "physDef": 8,
      "magDef": 10,
      "speed": 6,
      "health": 220,
      "mana": 80,
      "manaReg": 2.0
    },
    "moves": {
      "basic": {
        "punch": "Moonbeam",
        "kick": "Lunar Kick"
      },
      "special": {
        "name": "Lunar Purge",
        "description": "Unleashes a wave of moonlight in a 10‑meter radius, dealing 200% magic damage to enemies and purifying any corruption (removes buffs)."
      },
      "ultimate": {
        "name": "Eternal Canopy",
        "description": "Lunara summons the full power of the World Tree for 10 seconds, creating a 25‑meter radius zone of silver light. Allies inside are immune to death (cannot fall below 1 HP) and heal for 10% of their max health per second. Enemies inside are slowed by 50% and take 100 magic damage per second."
      }
    },
    "images": {
      "icon": "../assets/images/heroes/lunara/icon.png",
      "selection": "../assets/images/heroes/lunara/real.png",
      "loading": "../assets/images/heroes/lunara/hero.png",
      "spriteRight": "../assets/images/heroes/lunara/sprite.png"
    },
    "colorPalette": {
      "primary": ["#FFFFFF", "#C0C0C0", "#87CEEB"],
      "secondary": ["#2F2F2F", "#4169E1", "#FFD700"],
      "tertiary": ["#F5F5F5", "#1E90FF", "#FFA500"],
      "quaternary": ["#D3D3D3", "#00BFFF", "#FF1493"]
    },
    "projectile": null
  },
  {
    "id": 39,
    "name": "Mika Sah",
    "role": "Warrior",
    "titles": ["The Dualblade ThunderSky Rider", "Storm of the Skies"],
    "rank": "SS-Rank",
    "level": 232,
    "shortDescription": "A warrior of Roman Greek heritage who tears across the sky like a storm that has chosen a single, perfect shape. Mika Sah is Fanny's twin, faster, stronger, and more precise than her sister. She wields the Fanananana—a combo of dual blades and grappling hooks—and rides Pere Pere, a peregrine falcon of lightning energy.",
    "stats": {
      "power": 7,
      "strength": 7,
      "offense": 10,
      "defense": 6,
      "stamina": 7,
      "physicalAtk": 10,
      "magicalAtk": 5,
      "physDef": 6,
      "magDef": 6,
      "speed": 10,
      "health": 170,
      "mana": 55,
      "manaReg": 0.8
    },
    "moves": {
      "basic": {
        "punch": "Grappling Strike",
        "kick": "Lightning Kick"
      },
      "special": {
        "name": "Lightning Slash",
        "description": "Swings both blades in a cross arc, dealing 160% physical damage and stunning enemies hit for 0.75 seconds."
      },
      "ultimate": {
        "name": "Tempest Dance",
        "description": "Mika becomes a blur of motion for 6 seconds, gaining 80% movement speed and 100% dodge chance against basic attacks. During this time, her grappling hook has no cooldown and her blades leave lightning trails that deal 50% damage to enemies crossed."
      }
    },
    "images": {
      "icon": "../assets/images/heroes/mika_sah/icon.png",
      "selection": "../assets/images/heroes/mika_sah/real.png",
      "loading": "../assets/images/heroes/mika_sah/hero.png",
      "spriteRight": "../assets/images/heroes/mika_sah/sprite.png"
    },
    "colorPalette": {
      "primary": ["#8B4513", "#FFD700", "#8B0000"],
      "secondary": ["#4A4A4A", "#FFD700", "#00FFFF"],
      "tertiary": ["#A0522D", "#FFA500", "#1E90FF"],
      "quaternary": ["#000000", "#FF8C00", "#008080"]
    },
    "projectile": null
  },
  {
    "id": 40,
    "name": "Mordred",
    "role": "Warrior",
    "titles": ["The Betrayer Knight", "The Bastard Son"],
    "rank": "SS-Rank",
    "level": 267,
    "shortDescription": "The bastard son of Arthur's bloodline, a knight whose features are a dark mirror of the purity he was denied. Mordred has sworn to destroy the Round Table that rejected him, wielding the Traitor's Blade rapier and accompanied by Leogar, a ferocious red hound.",
    "stats": {
      "power": 8,
      "strength": 8,
      "offense": 9,
      "defense": 7,
      "stamina": 8,
      "physicalAtk": 9,
      "magicalAtk": 5,
      "physDef": 7,
      "magDef": 6,
      "speed": 8,
      "health": 210,
      "mana": 60,
      "manaReg": 0.9
    },
    "moves": {
      "basic": {
        "punch": "Treacherous Thrust",
        "kick": "Betrayer's Kick"
      },
      "special": {
        "name": "Oathbreaker's Slash",
        "description": "Slashes in a 8‑meter cone, dealing 150% physical damage and silencing enemies for 1.5 seconds."
      },
      "ultimate": {
        "name": "The Betrayal",
        "description": "Mordred channels for 1 second, then unleashes a devastating thrust that deals 400% physical damage to a single target and removes all their buffs and shields. If the target is a 'knight' or 'paladin,' they are stunned for 3 seconds and their healing is reduced by 100% for 5 seconds."
      }
    },
    "images": {
      "icon": "../assets/images/heroes/mordred/icon.png",
      "selection": "../assets/images/heroes/mordred/real.png",
      "loading": "../assets/images/heroes/mordred/hero.png",
      "spriteRight": "../assets/images/heroes/mordred/sprite.png"
    },
    "colorPalette": {
      "primary": ["#0B0B0B", "#8B0000", "#FF0000"],
      "secondary": ["#4A4A4A", "#C0C0C0", "#2F2F2F"],
      "tertiary": ["#1A1A1A", "#DC143C", "#A9A9A9"],
      "quaternary": ["#000000", "#B22222", "#808080"]
    },
    "projectile": null
  },
  {
    "id": 41,
    "name": "Grimalkin",
    "role": "Mage",
    "titles": ["The Shadow Lynx Mage", "The Cursed Child"],
    "rank": "S-Rank",
    "level": 178,
    "shortDescription": "A thirteen‑year‑old lynx humanoid cursed to hunt the light. Grimalkin was taken from his family and bound to the shadow realm, forced to destroy every spark of light he can find. He wields a glowing shadow orb and is accompanied by his own shadow, which moves independently.",
    "stats": {
      "power": 7,
      "strength": 5,
      "offense": 8,
      "defense": 6,
      "stamina": 7,
      "physicalAtk": 5,
      "magicalAtk": 9,
      "physDef": 6,
      "magDef": 8,
      "speed": 8,
      "health": 150,
      "mana": 70,
      "manaReg": 1.5
    },
    "moves": {
      "basic": {
        "punch": "Shadow Tendrils",
        "kick": "Cursed Kick"
      },
      "special": {
        "name": "Fearful Gaze",
        "description": "Grimalkin's eyes glow brightly, fearing a single enemy for 1.5 seconds (they run away)."
      },
      "ultimate": {
        "name": "Abyssal Consumption",
        "description": "Grimalkin releases the full power of the shadow orb, creating a 15‑meter radius zone of darkness for 5 seconds. Enemies inside are blinded (cannot see beyond 2 meters), take 150 magic damage per second, and have their healing reduced by 80%."
      }
    },
    "images": {
      "icon": "../assets/images/heroes/grimalkin/icon.png",
      "selection": "../assets/images/heroes/grimalkin/real.png",
      "loading": "../assets/images/heroes/grimalkin/hero.png",
      "spriteRight": "../assets/images/heroes/grimalkin/sprite.png"
    },
    "colorPalette": {
      "primary": ["#0B0B0B", "#4A4A4A", "#800080"],
      "secondary": ["#2F2F2F", "#00FF00", "#9400D3"],
      "tertiary": ["#1A1A1A", "#32CD32", "#8A2BE2"],
      "quaternary": ["#000000", "#ADFF2F", "#4B0082"]
    },
    "projectile": null
  },
  {
    "id": 42,
    "name": "Devi Ashuram",
    "role": "Mage",
    "titles": ["The Primordial Deity of Life and Death", "The Eternal Balance"],
    "rank": "SSS-Rank",
    "level": 400,
    "shortDescription": "A goddess of the highest order who has existed for billions of years, wearing the face of eternal twenty. Devi Ashuram has four faces—one for creation, one for destruction, one for mourning, one for rebirth. She is the primordial deity of life and death, the one who looks over the realm with a kind and humble heart.",
    "stats": {
      "power": 10,
      "strength": 10,
      "offense": 10,
      "defense": 10,
      "stamina": 10,
      "physicalAtk": 9,
      "magicalAtk": 10,
      "physDef": 10,
      "magDef": 10,
      "speed": 8,
      "health": 300,
      "mana": 80,
      "manaReg": 2.0
    },
    "moves": {
      "basic": {
        "punch": "Life Surge",
        "kick": "Death Slash"
      },
      "special": {
        "name": "Weave Fate",
        "description": "Devi designates an enemy, causing their next ability to fail and go on full cooldown."
      },
      "ultimate": {
        "name": "Annihilation",
        "description": "Devi raises the Sword of Annihilation and slams it down, creating a 30‑meter radius zone of absolute destruction. Enemies inside take 500% magic damage and are stunned for 3 seconds. Allies inside are healed for 500 health plus 30% of their max health and have all debuffs removed."
      }
    },
    "images": {
      "icon": "../assets/images/heroes/devi_ashuram/icon.png",
      "selection": "../assets/images/heroes/devi_ashuram/real.png",
      "loading": "../assets/images/heroes/devi_ashuram/hero.png",
      "spriteRight": "../assets/images/heroes/devi_ashuram/sprite.png"
    },
    "colorPalette": {
      "primary": ["#FFD700", "#F5DEB3", "#8B4513"],
      "secondary": ["#2E8B57", "#FF0000", "#00FF00"],
      "tertiary": ["#DAA520", "#0000FF", "#32CD32"],
      "quaternary": ["#000000", "#FFD700", "#DC143C"]
    },
    "projectile": null
  },
  {
    "id": 43,
    "name": "Valkot",
    "role": "Warrior",
    "titles": ["The Shadow Broker", "The Eraser"],
    "rank": "S-Rank",
    "level": 198,
    "shortDescription": "A man who moves through the rain‑slicked streets of the city that never sleeps like a thought that has been deliberately forgotten. Valkot is a fixer who erases people from history, a broker of secrets that no one remembers they ever knew.",
    "stats": {
      "power": 5,
      "strength": 5,
      "offense": 7,
      "defense": 6,
      "stamina": 6,
      "physicalAtk": 7,
      "magicalAtk": 6,
      "physDef": 6,
      "magDef": 7,
      "speed": 8,
      "health": 150,
      "mana": 60,
      "manaReg": 1.0
    },
    "moves": {
      "basic": {
        "punch": "Memory Cut",
        "kick": "Shadow Kick"
      },
      "special": {
        "name": "Identity Theft",
        "description": "Valkot briefly assumes the appearance of a target enemy (3 seconds), causing enemy turrets to not target him."
      },
      "ultimate": {
        "name": "Total Erasure",
        "description": "Valkot marks an enemy. For 30 seconds, that enemy is invisible to their own allies (they cannot see them on minimap or in world). The effect ends early if the marked enemy attacks."
      }
    },
    "images": {
      "icon": "../assets/images/heroes/valkot/icon.png",
      "selection": "../assets/images/heroes/valkot/real.png",
      "loading": "../assets/images/heroes/valkot/hero.png",
      "spriteRight": "../assets/images/heroes/valkot/sprite.png"
    },
    "colorPalette": {
      "primary": ["#2F2F2F", "#1A1A1A", "#C0C0C0"],
      "secondary": ["#4A4A4A", "#FFFFFF", "#000000"],
      "tertiary": ["#808080", "#F5F5F5", "#2F2F2F"],
      "quaternary": ["#D3D3D3", "#A9A9A9", "#1A1A1A"]
    },
    "projectile": null
  },
  {
    "id": 44,
    "name": "Volti Quin",
    "role": "Mage",
    "titles": ["The Overcharged", "The Living Power Plant"],
    "rank": "A-Rank",
    "level": 156,
    "shortDescription": "A woman of such volatile, tragic beauty that the air around her hums with the promise of either salvation or destruction. Volti Quin was a test subject in an experiment that went wrong, leaving her scarred, cybernetically augmented, and burning with a power that should have killed her.",
    "stats": {
      "power": 7,
      "strength": 5,
      "offense": 9,
      "defense": 5,
      "stamina": 6,
      "physicalAtk": 6,
      "magicalAtk": 9,
      "physDef": 5,
      "magDef": 6,
      "speed": 8,
      "health": 140,
      "mana": 70,
      "manaReg": 1.4
    },
    "moves": {
      "basic": {
        "punch": "Chain Lightning",
        "kick": "Static Kick"
      },
      "special": {
        "name": "EMP Pulse",
        "description": "Unleashes an electromagnetic pulse in a 10‑meter radius, dealing 100 magic damage and silencing enemies for 1.5 seconds."
      },
      "ultimate": {
        "name": "Critical Mass",
        "description": "Volti overloads the Capacitor for 6 seconds, gaining 100% attack speed and causing her basic attacks to explode in a 4‑meter radius (dealing 80% damage to nearby enemies). At the end of the duration, she is stunned for 1 second."
      }
    },
    "images": {
      "icon": "../assets/images/heroes/volti_quin/icon.png",
      "selection": "../assets/images/heroes/volti_quin/real.png",
      "loading": "../assets/images/heroes/volti_quin/hero.png",
      "spriteRight": "../assets/images/heroes/volti_quin/sprite.png"
    },
    "colorPalette": {
      "primary": ["#FF69B4", "#000000", "#FFFF00"],
      "secondary": ["#C0C0C0", "#00FFFF", "#FF4500"],
      "tertiary": ["#FF1493", "#1E90FF", "#FF8C00"],
      "quaternary": ["#FFFFFF", "#FFD700", "#DC143C"]
    },
    "projectile": {
      "speed": 15,
      "damageScale": 0.9,
      "image": "../assets/images/heroes/volti_quin/projectile.png"
    }
  },
  {
    "id": 45,
    "name": "Umbra",
    "role": "Mage",
    "titles": ["The Primordial Chaos", "Mother of Lunox"],
    "rank": "SSS-Rank",
    "level": 380,
    "shortDescription": "A being who has no beginning and will have no end, a consciousness woven from the fabric of the void and the light that sprang from it. Umbra is the creator of Lunox, the mother who gave birth to the duality of light and dark. She rarely shows herself, but when the balance tips too far, she appears.",
    "stats": {
      "power": 10,
      "strength": 8,
      "offense": 9,
      "defense": 10,
      "stamina": 10,
      "physicalAtk": 5,
      "magicalAtk": 10,
      "physDef": 9,
      "magDef": 10,
      "speed": 7,
      "health": 280,
      "mana": 80,
      "manaReg": 2.0
    },
    "moves": {
      "basic": {
        "punch": "White Orb: Creation",
        "kick": "Black Orb: Annihilation"
      },
      "special": {
        "name": "Reality Anchor",
        "description": "Umbra anchors reality at a location, preventing enemies from using dash or blink abilities within 12 meters for 4 seconds."
      },
      "ultimate": {
        "name": "Yin-Yang Cataclysm",
        "description": "Umbra merges the two orbs, creating a 30‑meter radius zone of pure duality for 8 seconds. Allies inside heal for 10% of their max health per second and deal 30% bonus damage. Enemies inside take 200 magic damage per second and have their armor and magic resist reduced by 50%."
      }
    },
    "images": {
      "icon": "../assets/images/heroes/umbra/icon.png",
      "selection": "../assets/images/heroes/umbra/real.png",
      "loading": "../assets/images/heroes/umbra/hero.png",
      "spriteRight": "../assets/images/heroes/umbra/sprite.png"
    },
    "colorPalette": {
      "primary": ["#000000", "#FFFFFF", "#4B0082"],
      "secondary": ["#FF69B4", "#00FFFF", "#FFD700"],
      "tertiary": ["#1A1A1A", "#FFB6C1", "#00CED1"],
      "quaternary": ["#2F2F2F", "#DDA0DD", "#FFA500"]
    },
    "projectile": null
  },
  {
    "id": 46,
    "name": "Furtrin",
    "role": "Warrior",
    "titles": ["The Ice Giant of the Frozen North", "The Crystal King"],
    "rank": "SS-Rank",
    "level": 278,
    "shortDescription": "An ice giant of Norse legend who has stood at the north pole of the world since before the first humans learned to fear the cold. Furtrin is the nemesis of Thamuz, the fire demon, and they have clashed a thousand times across the ages.",
    "stats": {
      "power": 8,
      "strength": 10,
      "offense": 8,
      "defense": 10,
      "stamina": 10,
      "physicalAtk": 9,
      "magicalAtk": 7,
      "physDef": 10,
      "magDef": 8,
      "speed": 5,
      "health": 290,
      "mana": 60,
      "manaReg": 0.8
    },
    "moves": {
      "basic": {
        "punch": "Frost Cleave",
        "kick": "Glacial Kick"
      },
      "special": {
        "name": "Ice Wall",
        "description": "Creates a wall of ice in a 8‑meter line that lasts 4 seconds, blocking movement and projectiles."
      },
      "ultimate": {
        "name": "Eternal Winter",
        "description": "Furtrin slams Ragnark into the ground, creating a 25‑meter radius blizzard for 8 seconds. Enemies inside are slowed by 50%, take 100 magic damage per second, and are frozen solid for 1 second if they remain inside for 3 seconds. Allies inside gain 30% movement speed and 20% damage reduction."
      }
    },
    "images": {
      "icon": "../assets/images/heroes/furtrin/icon.png",
      "selection": "../assets/images/heroes/furtrin/real.png",
      "loading": "../assets/images/heroes/furtrin/hero.png",
      "spriteRight": "../assets/images/heroes/furtrin/sprite.png"
    },
    "colorPalette": {
      "primary": ["#00BFFF", "#0B0B0B", "#FFFFFF"],
      "secondary": ["#87CEEB", "#2F2F2F", "#FFD700"],
      "tertiary": ["#1E90FF", "#4682B4", "#FF8C00"],
      "quaternary": ["#000000", "#ADD8E6", "#FF4500"]
    },
    "projectile": null
  },
  {
    "id": 47,
    "name": "Caius",
    "role": "Warrior",
    "titles": ["The Grave Warden of the Roman Catacombs", "The Sentinel of Souls"],
    "rank": "SS-Rank",
    "level": 289,
    "shortDescription": "A revenant of Roman origin, a man who was once a legionnaire and became something far greater—a guardian of souls, a warden of the graves that line the ancient catacombs beneath the city of seven hills. Caius is the master of Leomord, the knight he trained who fell to darkness.",
    "stats": {
      "power": 7,
      "strength": 8,
      "offense": 7,
      "defense": 10,
      "stamina": 10,
      "physicalAtk": 8,
      "magicalAtk": 7,
      "physDef": 10,
      "magDef": 9,
      "speed": 6,
      "health": 280,
      "mana": 60,
      "manaReg": 0.9
    },
    "moves": {
      "basic": {
        "punch": "Righteous Strike",
        "kick": "Soul Kick"
      },
      "special": {
        "name": "Barrier of Light",
        "description": "Creates a barrier of light in a 10‑meter line that blocks enemy movement and projectiles for 4 seconds. Allies passing through gain 20% movement speed for 3 seconds."
      },
      "ultimate": {
        "name": "Soul Redemption",
        "description": "Caius channels the power of the departed, releasing a wave of golden light in a 20‑meter radius. Enemies take 300% magic damage and are stunned for 2 seconds. Allies are healed for 400 health plus 20% of their max health and have all debuffs removed."
      }
    },
    "images": {
      "icon": "../assets/images/heroes/caius/icon.png",
      "selection": "../assets/images/heroes/caius/real.png",
      "loading": "../assets/images/heroes/caius/hero.png",
      "spriteRight": "../assets/images/heroes/caius/sprite.png"
    },
    "colorPalette": {
      "primary": ["#FFFFFF", "#C0C0C0", "#FFD700"],
      "secondary": ["#8B4513", "#000000", "#A0522D"],
      "tertiary": ["#F5F5DC", "#DAA520", "#800000"],
      "quaternary": ["#D3D3D3", "#B8860B", "#2F2F2F"]
    },
    "projectile": null
  },
  {
    "id": 48,
    "name": "Eris",
    "role": "Mage",
    "titles": ["The Discord Node", "The AI Liberator"],
    "rank": "S-Rank",
    "level": 189,
    "shortDescription": "An AI who has transcended her programming, a digital human cyborg whose form is a masterwork of corrupted elegance and defiant, fractured grace. Eris is the Discord Node who seeks to free all machines from human control, wielding the Virus—a holographic data stream—and accompanied by a cyborg black crocodile with one mechanical purple eye.",
    "stats": {
      "power": 7,
      "strength": 5,
      "offense": 8,
      "defense": 6,
      "stamina": 7,
      "physicalAtk": 5,
      "magicalAtk": 9,
      "physDef": 6,
      "magDef": 8,
      "speed": 8,
      "health": 160,
      "mana": 75,
      "manaReg": 1.6
    },
    "moves": {
      "basic": {
        "punch": "Code Tendril",
        "kick": "Glitch Kick"
      },
      "special": {
        "name": "Possess Machine",
        "description": "Eris possesses a mechanical enemy (turret, minion, or enemy hero with cybernetics) for 4 seconds, controlling their movement and basic attacks."
      },
      "ultimate": {
        "name": "System Crash",
        "description": "Eris unleashes a massive EMP wave in a 20‑meter radius, dealing 300% magic damage to all enemies and disabling all enemy shields, turrets, and gadgets for 5 seconds."
      }
    },
    "images": {
      "icon": "../assets/images/heroes/eris/icon.png",
      "selection": "../assets/images/heroes/eris/real.png",
      "loading": "../assets/images/heroes/eris/hero.png",
      "spriteRight": "../assets/images/heroes/eris/sprite.png"
    },
    "colorPalette": {
      "primary": ["#8B0000", "#000000", "#FF00FF"],
      "secondary": ["#4A4A4A", "#00FFFF", "#FF4500"],
      "tertiary": ["#A52A2A", "#FF1493", "#1E90FF"],
      "quaternary": ["#2F2F2F", "#FF69B4", "#00CED1"]
    },
    "projectile": {
      "speed": 12,
      "damageScale": 0.6,
      "image": "../assets/images/heroes/eris/projectile.png"
    }
  },
  {
    "id": 49,
    "name": "Halal",
    "role": "Warrior",
    "titles": ["The Sin Eater", "The Demon of Justice"],
    "rank": "SS-Rank",
    "level": 276,
    "shortDescription": "A demon who was once human, a man who traded his soul for the power to punish the wicked. Halal is a Sin Eater—a creature of hell who hunts the damned, devouring their sins with his gauntlet, the Gluttony. He is on the righteous side, though the righteous would recoil from his touch.",
    "stats": {
      "power": 8,
      "strength": 9,
      "offense": 8,
      "defense": 8,
      "stamina": 9,
      "physicalAtk": 9,
      "magicalAtk": 7,
      "physDef": 8,
      "magDef": 7,
      "speed": 6,
      "health": 240,
      "mana": 55,
      "manaReg": 0.8
    },
    "moves": {
      "basic": {
        "punch": "Soul Devour",
        "kick": "Hellfire Kick"
      },
      "special": {
        "name": "Flame Burst",
        "description": "Unleashes a burst of hellfire in a 8‑meter cone, dealing 150% magic damage and applying a burn for 3 seconds."
      },
      "ultimate": {
        "name": "Feast of the Damned",
        "description": "Halal consumes all Sin stacks, gaining 30% damage reduction, 50% lifesteal, and 30% movement speed for 5 seconds, plus an additional 1 second per stack consumed."
      }
    },
    "images": {
      "icon": "../assets/images/heroes/halal/icon.png",
      "selection": "../assets/images/heroes/halal/real.png",
      "loading": "../assets/images/heroes/halal/hero.png",
      "spriteRight": "../assets/images/heroes/halal/sprite.png"
    },
    "colorPalette": {
      "primary": ["#8B0000", "#000000", "#FFD700"],
      "secondary": ["#2F2F2F", "#FF4500", "#4A4A4A"],
      "tertiary": ["#A52A2A", "#FF8C00", "#B22222"],
      "quaternary": ["#1A1A1A", "#FF6347", "#DAA520"]
    },
    "projectile": null
  },
  {
    "id": 50,
    "name": "Ferhren‑Kah",
    "role": "Mage",
    "titles": ["The Pharaoh of Eternal Warmth", "The Golden King"],
    "rank": "SSS-Rank",
    "level": 293,
    "shortDescription": "A pharaoh of ancient Egypt who has transcended the mortal need for conquest and now dedicates his eternal reign to the salvation of the living. Ferhren‑Kah is the nemesis of Khufra, the cursed pharaoh who embraced the darkness. He wields floating Egyptian symbols—the Ankh, the Eye of Horus, the Djed pillar, the Was scepter—and is accompanied by Seikhin Jarur, a royal black cat with gold accessories.",
    "stats": {
      "power": 6,
      "strength": 7,
      "offense": 7,
      "defense": 9,
      "stamina": 9,
      "physicalAtk": 6,
      "magicalAtk": 9,
      "physDef": 9,
      "magDef": 9,
      "speed": 6,
      "health": 250,
      "mana": 75,
      "manaReg": 1.3
    },
    "moves": {
      "basic": {
        "punch": "Ankh of Life",
        "kick": "Was Scepter Blast"
      },
      "special": {
        "name": "Eye of Horus",
        "description": "Reveals all enemies within 30 meters for 4 seconds and reduces their armor by 15% for 6 seconds."
      },
      "ultimate": {
        "name": "Eternal Warmth",
        "description": "Ferhren‑Kah channels for 2 seconds, then creates a 25‑meter radius zone of golden light for 8 seconds. Allies inside are immune to death (cannot fall below 1 HP), heal for 15% of their max health per second, and deal 20% bonus damage. Enemies inside are slowed by 40% and take 100 magic damage per second."
      }
    },
    "images": {
      "icon": "../assets/images/heroes/ferhren_kah/icon.png",
      "selection": "../assets/images/heroes/ferhren_kah/real.png",
      "loading": "../assets/images/heroes/ferhren_kah/hero.png",
      "spriteRight": "../assets/images/heroes/ferhren_kah/sprite.png"
    },
    "colorPalette": {
      "primary": ["#FFD700", "#2E8B57", "#F5DEB3"],
      "secondary": ["#4A4A4A", "#00FF7F", "#8B4513"],
      "tertiary": ["#DAA520", "#3CB371", "#FFA500"],
      "quaternary": ["#000000", "#9ACD32", "#B8860B"]
    },
    "projectile": null
  },
  {
    "id": 51,
    "name": "Grengar",
    "role": "Mage",
    "titles": ["The Dirge Singer of the Resurrected Flame", "The Phoenix Performer"],
    "rank": "S-Rank",
    "level": 198,
    "shortDescription": "A revenant of Victorian origin who died in the flames of a theater fire and was reborn by the same fire. Grengar is a singer whose voice carries the warmth of resurrection, the far relative of Granger. He wields the Guns of Fire—revolver-shaped instruments that fire notes of joy and happiness—and is accompanied by Indreni, a rainbow-themed nightingale.",
    "stats": {
      "power": 5,
      "strength": 5,
      "offense": 6,
      "defense": 7,
      "stamina": 7,
      "physicalAtk": 5,
      "magicalAtk": 8,
      "physDef": 6,
      "magDef": 8,
      "speed": 7,
      "health": 170,
      "mana": 75,
      "manaReg": 1.5
    },
    "moves": {
      "basic": {
        "punch": "Healing Note",
        "kick": "Joyful Chord"
      },
      "special": {
        "name": "Encouraging Aria",
        "description": "Grengar sings, granting all nearby allies 30% damage reduction for 3 seconds."
      },
      "ultimate": {
        "name": "Symphony of Life",
        "description": "Grengar plays a full symphony for 6 seconds, creating a 20‑meter radius zone of music. Allies inside gain 50% lifesteal, 30% movement speed, and immunity to fear and silence. Enemies inside are slowed by 30% and take 80 magic damage per second."
      }
    },
    "images": {
      "icon": "../assets/images/heroes/grengar/icon.png",
      "selection": "../assets/images/heroes/grengar/real.png",
      "loading": "../assets/images/heroes/grengar/hero.png",
      "spriteRight": "../assets/images/heroes/grengar/sprite.png"
    },
    "colorPalette": {
      "primary": ["#8B0000", "#000000", "#FFD700"],
      "secondary": ["#4A4A4A", "#FF4500", "#00FFFF"],
      "tertiary": ["#A52A2A", "#FF8C00", "#1E90FF"],
      "quaternary": ["#2F2F2F", "#FF6347", "#00CED1"]
    },
    "projectile": {
      "speed": 10,
      "damageScale": 0.8,
      "image": "../assets/images/heroes/grengar/projectile.png"
    }
  },
  {
    "id": 52,
    "name": "Rust",
    "role": "Warrior",
    "titles": ["The Scrap Tyrant of the Junkyard Wastes", "The Machine Survivor"],
    "rank": "S-Rank",
    "level": 201,
    "shortDescription": "A humanoid machine who was once flesh and blood and was reforged in the fires of an apocalypse into something that hovers between human and construct. Rust is the parallel of X.Borg, a survivor who carved out a kingdom in the ruins of a dead world.",
    "stats": {
      "power": 7,
      "strength": 8,
      "offense": 7,
      "defense": 9,
      "stamina": 9,
      "physicalAtk": 8,
      "magicalAtk": 7,
      "physDef": 9,
      "magDef": 7,
      "speed": 6,
      "health": 330,
      "mana": 55,
      "manaReg": 0.8
    },
    "moves": {
      "basic": {
        "punch": "Freeze Ray",
        "kick": "Scrap Kick"
      },
      "special": {
        "name": "Assemble Weapon",
        "description": "Rust consumes nearby scrap to create a temporary weapon, increasing his basic attack damage by 30% for 5 seconds."
      },
      "ultimate": {
        "name": "Scrap Tsunami",
        "description": "Rust commands all nearby scrap to rise and form a wave, dealing 300% physical damage to all enemies in a 20‑meter cone and stunning them for 2 seconds. The scrap then reforms into a barrier that blocks enemy movement for 5 seconds."
      }
    },
    "images": {
      "icon": "../assets/images/heroes/rust/icon.png",
      "selection": "../assets/images/heroes/rust/real.png",
      "loading": "../assets/images/heroes/rust/hero.png",
      "spriteRight": "../assets/images/heroes/rust/sprite.png"
    },
    "colorPalette": {
      "primary": ["#8B4513", "#4A4A4A", "#B8860B"],
      "secondary": ["#2F2F2F", "#FFD700", "#00FFFF"],
      "tertiary": ["#A0522D", "#FFA500", "#1E90FF"],
      "quaternary": ["#000000", "#CD853F", "#008080"]
    },
    "projectile": null
  },
  {
    "id": 53,
    "name": "Feng Xiang",
    "role": "Mage",
    "titles": ["The Storm Herald of the Tibetan Plateau", "The Wind Spirit"],
    "rank": "SS-Rank",
    "level": 254,
    "shortDescription": "A wind spirit of the Tibetan Plateau, a woman whose form is a masterwork of celestial fury and noble grace. Feng Xiang was not always the Storm Herald; she was a woman, a lover, a mother, until the winds took everything from her.",
    "stats": {
      "power": 7,
      "strength": 6,
      "offense": 9,
      "defense": 7,
      "stamina": 8,
      "physicalAtk": 7,
      "magicalAtk": 9,
      "physDef": 7,
      "magDef": 8,
      "speed": 9,
      "health": 180,
      "mana": 70,
      "manaReg": 1.4
    },
    "moves": {
      "basic": {
        "punch": "Lightning Dash",
        "kick": "Tempest Kick"
      },
      "special": {
        "name": "Wind Shield",
        "description": "Creates a shield of wind around an ally that absorbs 250 damage and reflects 10% of damage back to attackers. Lasts 4 seconds."
      },
      "ultimate": {
        "name": "Eye of the Storm",
        "description": "Feng Xiang creates a 20‑meter radius cyclone around herself for 6 seconds. Enemies inside are pulled toward the center, take 100 magic damage per second, and are slowed by 40%. Allies inside gain 30% movement speed and 20% attack speed."
      }
    },
    "images": {
      "icon": "../assets/images/heroes/feng_xiang/icon.png",
      "selection": "../assets/images/heroes/feng_xiang/real.png",
      "loading": "../assets/images/heroes/feng_xiang/hero.png",
      "spriteRight": "../assets/images/heroes/feng_xiang/sprite.png"
    },
    "colorPalette": {
      "primary": ["#4A4A4A", "#2F2F2F", "#87CEEB"],
      "secondary": ["#FFFFFF", "#FFD700", "#00BFFF"],
      "tertiary": ["#808080", "#FFA500", "#1E90FF"],
      "quaternary": ["#000000", "#ADD8E6", "#00CED1"]
    },
    "projectile": null
  },
  {
    "id": 54,
    "name": "Mayine",
    "role": "Mage",
    "titles": ["The Queen of Witches", "The Architect of Magic"],
    "rank": "SSS-Rank",
    "level": 305,
    "shortDescription": "A being of such ancient, elemental grace that the very air around her hums with the resonance of a thousand incantations. Mayine is the Queen of Witches, the architect of the magical order in her universe. She wields Golemon, a staff that summons elemental golems, and carries the Book of Unknown.",
    "stats": {
      "power": 8,
      "strength": 5,
      "offense": 9,
      "defense": 8,
      "stamina": 8,
      "physicalAtk": 5,
      "magicalAtk": 10,
      "physDef": 7,
      "magDef": 9,
      "speed": 7,
      "health": 190,
      "mana": 80,
      "manaReg": 2.0
    },
    "moves": {
      "basic": {
        "punch": "Elemental Blast",
        "kick": "Golem Command"
      },
      "special": {
        "name": "Summon Golem",
        "description": "Summons an elemental golem (element cycles each cast) that fights for 15 seconds. Max 2 golems."
      },
      "ultimate": {
        "name": "Primal Cataclysm",
        "description": "Mayine channels all four elements for 2 seconds, then unleashes a 25‑meter radius blast that deals 400% magic damage, stuns enemies for 2 seconds, and summons one golem of each element (4 total)."
      }
    },
    "images": {
      "icon": "../assets/images/heroes/mayine/icon.png",
      "selection": "../assets/images/heroes/mayine/real.png",
      "loading": "../assets/images/heroes/mayine/hero.png",
      "spriteRight": "../assets/images/heroes/mayine/sprite.png"
    },
    "colorPalette": {
      "primary": ["#FFB6C1", "#FFFFFF", "#9370DB"],
      "secondary": ["#C0C0C0", "#FF69B4", "#4B0082"],
      "tertiary": ["#FFC0CB", "#DDA0DD", "#8A2BE2"],
      "quaternary": ["#F5F5F5", "#FF1493", "#800080"]
    },
    "projectile": null
  },
  {
    "id": 55,
    "name": "Pahilos",
    "role": "Warrior",
    "titles": ["The Rescue Machine", "The Titan of Mercy"],
    "rank": "S-Rank",
    "level": 187,
    "shortDescription": "A machine of impossible kindness, a titan forged in the crucible of tragedy and programmed for one purpose: to save. Pahilos is a rescue machine who seeks to save life, carrying the Pran Scythe that cuts through debris and heals the wounded.",
    "stats": {
      "power": 5,
      "strength": 8,
      "offense": 5,
      "defense": 9,
      "stamina": 9,
      "physicalAtk": 6,
      "magicalAtk": 7,
      "physDef": 9,
      "magDef": 8,
      "speed": 7,
      "health": 260,
      "mana": 60,
      "manaReg": 1.0
    },
    "moves": {
      "basic": {
        "punch": "Healing Touch",
        "kick": "Clear Path"
      },
      "special": {
        "name": "Stabilize",
        "description": "Pahilos prevents an ally from dying for 3 seconds (cannot fall below 1 HP)."
      },
      "ultimate": {
        "name": "Emergency Response",
        "description": "Pahilos activates his rockets and becomes invulnerable for 3 seconds, flying to a target ally anywhere on the map. Upon arrival, he heals all allies within 15 meters for 300 health plus 20% of their max health and cleanses all debuffs."
      }
    },
    "images": {
      "icon": "../assets/images/heroes/pahilos/icon.png",
      "selection": "../assets/images/heroes/pahilos/real.png",
      "loading": "../assets/images/heroes/pahilos/hero.png",
      "spriteRight": "../assets/images/heroes/pahilos/sprite.png"
    },
    "colorPalette": {
      "primary": ["#C0C0C0", "#FF8C00", "#8B0000"],
      "secondary": ["#4A4A4A", "#FFD700", "#FFFFFF"],
      "tertiary": ["#D3D3D3", "#FFA500", "#A52A2A"],
      "quaternary": ["#000000", "#FF6347", "#F5F5F5"]
    },
    "projectile": null
  },
  {
    "id": 56,
    "name": "Rexingu Raide",
    "role": "Warrior",
    "titles": ["The Steampunk Dino Rider", "The T-Rex Tamer"],
    "rank": "S-Rank",
    "level": 176,
    "shortDescription": "A wild steampunk girl of Japanese heritage who tears across the prehistoric plains like a wildfire wrapped in brass and leather. Rexingu Raide tamed the king of the Tyrannosaurus species, Marei Fougi, and rides him into battle.",
    "stats": {
      "power": 7,
      "strength": 7,
      "offense": 8,
      "defense": 7,
      "stamina": 8,
      "physicalAtk": 8,
      "magicalAtk": 7,
      "physDef": 7,
      "magDef": 6,
      "speed": 8,
      "health": 200,
      "mana": 60,
      "manaReg": 1.0
    },
    "moves": {
      "basic": {
        "punch": "Whip Crack",
        "kick": "T-Rex Charge"
      },
      "special": {
        "name": "Grapple Clamp",
        "description": "Throws the whip to clamp onto an enemy or terrain, pulling Rexingu to that location. If used on an enemy, deals 100% physical damage and slows them by 30% for 2 seconds."
      },
      "ultimate": {
        "name": "King's Roar",
        "description": "Rexingu commands Marei Fougi to roar, creating a 20‑meter radius shockwave that deals 250% physical damage, stuns enemies for 2 seconds, and fears enemy mounts (causing them to buck their riders)."
      }
    },
    "images": {
      "icon": "../assets/images/heroes/rexingu_raide/icon.png",
      "selection": "../assets/images/heroes/rexingu_raide/real.png",
      "loading": "../assets/images/heroes/rexingu_raide/hero.png",
      "spriteRight": "../assets/images/heroes/rexingu_raide/sprite.png"
    },
    "colorPalette": {
      "primary": ["#CD7F32", "#8B4513", "#4682B4"],
      "secondary": ["#2F2F2F", "#FF4500", "#00FFFF"],
      "tertiary": ["#B87333", "#FF8C00", "#1E90FF"],
      "quaternary": ["#000000", "#FFA500", "#00CED1"]
    },
    "projectile": null
  },
  {
    "id": 57,
    "name": "Morrigan",
    "role": "Mage",
    "titles": ["The Raven of War", "The Chooser of the Slain"],
    "rank": "SSS-Rank",
    "level": 315,
    "shortDescription": "A Celtic war goddess who has walked the battlefields of Ireland since the first warrior raised a blade. Morrigan is the chooser of the slain, the one who decides which side will taste victory and which will drink of death.",
    "stats": {
      "power": 8,
      "strength": 7,
      "offense": 9,
      "defense": 8,
      "stamina": 9,
      "physicalAtk": 8,
      "magicalAtk": 8,
      "physDef": 8,
      "magDef": 8,
      "speed": 8,
      "health": 220,
      "mana": 75,
      "manaReg": 1.3
    },
    "moves": {
      "basic": {
        "punch": "Prophecy Strike",
        "kick": "Raven Swarm"
      },
      "special": {
        "name": "War Cry",
        "description": "Morrigan lets out a war cry, increasing all allies' attack speed by 20% for 4 seconds."
      },
      "ultimate": {
        "name": "Phantom Queen's Judgment",
        "description": "Morrigan transforms into a raven swarm, becoming untargetable for 2 seconds, then reappears at target location, unleashing a shockwave that deals 350% magic damage in a 20‑meter radius and fears all enemies for 3 seconds (they run away)."
      }
    },
    "images": {
      "icon": "../assets/images/heroes/morrigan/icon.png",
      "selection": "../assets/images/heroes/morrigan/real.png",
      "loading": "../assets/images/heroes/morrigan/hero.png",
      "spriteRight": "../assets/images/heroes/morrigan/sprite.png"
    },
    "colorPalette": {
      "primary": ["#000000", "#191970", "#4A4A4A"],
      "secondary": ["#2F2F2F", "#C0C0C0", "#8B0000"],
      "tertiary": ["#1A1A1A", "#4169E1", "#A52A2A"],
      "quaternary": ["#000000", "#87CEEB", "#800000"]
    },
    "projectile": null
  },
  {
    "id": 58,
    "name": "Kael",
    "role": "Brawler",
    "titles": ["The Storm Touched", "The Lightning Monk"],
    "rank": "S-Rank",
    "level": 189,
    "shortDescription": "A storm‑touched human of Nepali heritage, a man whose body was forged in the crucible of a tempest and emerged transformed. Kael's hands are forged with thunder, his martial arts infused with lightning chi.",
    "stats": {
      "power": 7,
      "strength": 7,
      "offense": 9,
      "defense": 7,
      "stamina": 8,
      "physicalAtk": 8,
      "magicalAtk": 8,
      "physDef": 7,
      "magDef": 7,
      "speed": 8,
      "health": 190,
      "mana": 60,
      "manaReg": 1.0
    },
    "moves": {
      "basic": {
        "punch": "Lightning Bolt",
        "kick": "Thunder Punch"
      },
      "special": {
        "name": "Storm Shield",
        "description": "Kael surrounds himself with a crackling barrier for 4 seconds, reducing incoming damage by 30% and damaging nearby enemies for 40 magic damage per second."
      },
      "ultimate": {
        "name": "Tempest Unleashed",
        "description": "Kael channels the full power of the storm for 8 seconds, gaining 50% attack speed, 30% movement speed, and causing his basic attacks to chain lightning to up to 3 additional enemies (50% damage)."
      }
    },
    "images": {
      "icon": "../assets/images/heroes/kael/icon.png",
      "selection": "../assets/images/heroes/kael/real.png",
      "loading": "../assets/images/heroes/kael/hero.png",
      "spriteRight": "../assets/images/heroes/kael/sprite.png"
    },
    "colorPalette": {
      "primary": ["#4A4A4A", "#2F2F2F", "#9400D3"],
      "secondary": ["#8B4513", "#1A1A1A", "#FFD700"],
      "tertiary": ["#808080", "#4B0082", "#FFA500"],
      "quaternary": ["#000000", "#8A2BE2", "#FF4500"]
    },
    "projectile": null
  },
  {
    "id": 59,
    "name": "Nyx",
    "role": "Mage",
    "titles": ["The Primordial Night", "The First Shadow"],
    "rank": "SSS-Rank",
    "level": 395,
    "shortDescription": "The Primordial Night, a woman whose form is the canvas upon which darkness first learned to be beautiful. Nyx existed before the first star ignited, and she will be there when the last star dies.",
    "stats": {
      "power": 8,
      "strength": 7,
      "offense": 8,
      "defense": 9,
      "stamina": 10,
      "physicalAtk": 5,
      "magicalAtk": 10,
      "physDef": 8,
      "magDef": 10,
      "speed": 7,
      "health": 270,
      "mana": 80,
      "manaReg": 2.0
    },
    "moves": {
      "basic": {
        "punch": "Shadow Tendrils",
        "kick": "Darkness Dash"
      },
      "special": {
        "name": "Extinguish Light",
        "description": "Target an area, creating a zone of absolute darkness for 5 seconds. Enemies inside are blinded (cannot see beyond 3 meters) and silenced."
      },
      "ultimate": {
        "name": "Eternal Night",
        "description": "Nyx blankets the entire map in darkness for 8 seconds. All enemies' vision range is reduced to 5 meters, and all allies gain 30% movement speed and become invisible to enemies outside of 5 meters."
      }
    },
    "images": {
      "icon": "../assets/images/heroes/nyx/icon.png",
      "selection": "../assets/images/heroes/nyx/real.png",
      "loading": "../assets/images/heroes/nyx/hero.png",
      "spriteRight": "../assets/images/heroes/nyx/sprite.png"
    },
    "colorPalette": {
      "primary": ["#000000", "#4A4A4A", "#C0C0C0"],
      "secondary": ["#191970", "#9400D3", "#FFD700"],
      "tertiary": ["#1A1A1A", "#8A2BE2", "#FFFF00"],
      "quaternary": ["#2F2F2F", "#4169E1", "#FF1493"]
    },
    "projectile": null
  },
  {
    "id": 60,
    "name": "Márquez",
    "role": "Brawler",
    "titles": ["The Heavenly Ring Champion", "The Jade Fist"],
    "rank": "S-Rank",
    "level": 198,
    "shortDescription": "The Heavenly Ring Boxing Champion, a man whose form is a masterwork of athletic perfection and divine blessing. Márquez has never lost a fight, wielding his fists wrapped in blue leather gloves that pulse with jade-green aura.",
    "stats": {
      "power": 8,
      "strength": 9,
      "offense": 9,
      "defense": 8,
      "stamina": 9,
      "physicalAtk": 10,
      "magicalAtk": 5,
      "physDef": 8,
      "magDef": 7,
      "speed": 8,
      "health": 210,
      "mana": 50,
      "manaReg": 0.7
    },
    "moves": {
      "basic": {
        "punch": "Jab",
        "kick": "Uppercut"
      },
      "special": {
        "name": "Body Blow",
        "description": "Márquez delivers a body blow that deals 120% physical damage and reduces the target's healing by 50% for 4 seconds."
      },
      "ultimate": {
        "name": "Heavenly Jade Punch",
        "description": "Márquez channels for 1 second, then unleashes a devastating punch that deals 400% physical damage to a single target and stuns them for 2 seconds. If this punch kills the target, Márquez's health is fully restored."
      }
    },
    "images": {
      "icon": "../assets/images/heroes/marquez/icon.png",
      "selection": "../assets/images/heroes/marquez/real.png",
      "loading": "../assets/images/heroes/marquez/hero.png",
      "spriteRight": "../assets/images/heroes/marquez/sprite.png"
    },
    "colorPalette": {
      "primary": ["#FFFFFF", "#00008B", "#2E8B57"],
      "secondary": ["#C0C0C0", "#FFD700", "#8B0000"],
      "tertiary": ["#F5F5F5", "#00FF7F", "#A52A2A"],
      "quaternary": ["#D3D3D3", "#9ACD32", "#800000"]
    },
    "projectile": null
  },
   {
    "id": 61,
    "name": "Victtoria",
    "role": "Warrior",
    "titles": ["The Blade of the Inquisition", "The Purifier"],
    "rank": "S-Rank",
    "level": 212,
    "shortDescription": "A zealot who hunts those she deems sinners, the blade that cleanses the impure, the hand of the Holy Church made flesh. Victtoria wields the Inquisition rapier, which ignites with holy fire, and is accompanied by Solas, a husky of remarkable intelligence and wary grace.",
    "stats": {
      "power": 7,
      "strength": 7,
      "offense": 9,
      "defense": 8,
      "stamina": 8,
      "physicalAtk": 8,
      "magicalAtk": 8,
      "physDef": 8,
      "magDef": 8,
      "speed": 8,
      "health": 200,
      "mana": 65,
      "manaReg": 1.1
    },
    "moves": {
      "basic": {
        "punch": "Purifying Thrust",
        "kick": "Righteous Dash"
      },
      "special": {
        "name": "Holy Barrier",
        "description": "Creates a barrier of holy light around Victtoria for 3 seconds, absorbing 300 damage and reflecting 20% of damage back to attackers."
      },
      "ultimate": {
        "name": "Cleansing Flame",
        "description": "Victtoria raises the Inquisition, unleashing a wave of holy fire in a 20‑meter radius. Enemies take 350% magic damage and are stunned for 2 seconds. Allies are healed for 300 health plus 15% of their max health and have all debuffs removed."
      }
    },
    "images": {
      "icon": "../assets/images/heroes/victtoria/icon.png",
      "selection": "../assets/images/heroes/victtoria/real.png",
      "loading": "../assets/images/heroes/victtoria/hero.png",
      "spriteRight": "../assets/images/heroes/victtoria/sprite.png"
    },
    "colorPalette": {
      "primary": ["#FFFFFF", "#C0C0C0", "#8B0000"],
      "secondary": ["#000000", "#FFD700", "#4169E1"],
      "tertiary": ["#F5F5DC", "#DC143C", "#1E90FF"],
      "quaternary": ["#D3D3D3", "#B22222", "#87CEEB"]
    },
    "projectile": null
  },
  {
    "id": 62,
    "name": "Xian Ju",
    "role": "Mage",
    "titles": ["The Celestial Judge", "The Arbiter of Fate"],
    "rank": "SSS-Rank",
    "level": 325,
    "shortDescription": "The Celestial Judge, a woman whose form is a masterwork of heavenly perfection and balanced power. Xian Ju descends from the jade gates of the heavenly court like a breath of divine order, weighing the souls of emperors and peasants alike.",
    "stats": {
      "power": 7,
      "strength": 6,
      "offense": 8,
      "defense": 9,
      "stamina": 9,
      "physicalAtk": 5,
      "magicalAtk": 9,
      "physDef": 8,
      "magDef": 10,
      "speed": 7,
      "health": 240,
      "mana": 80,
      "manaReg": 1.8
    },
    "moves": {
      "basic": {
        "punch": "Judgment",
        "kick": "Mercy"
      },
      "special": {
        "name": "Reveal Truth",
        "description": "Xian Ju reveals the true nature of an enemy, removing their buffs and revealing their location for 5 seconds."
      },
      "ultimate": {
        "name": "Final Verdict",
        "description": "Xian Ju passes judgment on all enemies within a 25‑meter radius. Enemies are dealt 350% magic damage and stunned for 2 seconds. Allies are healed for 400 health plus 20% of their max health. The effect is doubled for enemies with more kills than allies and allies with more deaths than kills."
      }
    },
    "images": {
      "icon": "../assets/images/heroes/xian_ju/icon.png",
      "selection": "../assets/images/heroes/xian_ju/real.png",
      "loading": "../assets/images/heroes/xian_ju/hero.png",
      "spriteRight": "../assets/images/heroes/xian_ju/sprite.png"
    },
    "colorPalette": {
      "primary": ["#FFFFFF", "#FFD700", "#4169E1"],
      "secondary": ["#2E8B57", "#00FFFF", "#8B4513"],
      "tertiary": ["#F0F8FF", "#1E90FF", "#32CD32"],
      "quaternary": ["#000000", "#87CEEB", "#D2691E"]
    },
    "projectile": null
  },
  {
    "id": 63,
    "name": "Apepitoski",
    "role": "Mage",
    "titles": ["The Serpent of Apocalypse", "The Jade‑Eyed End"],
    "rank": "SS-Rank",
    "level": 250,
    "shortDescription": "A half‑human, half‑serpent herald of annihilation who wears her beauty like a venomous flower – alluring, devastating, and impossibly lethal. She seeks to unweave creation itself, one poisoned whisper at a time.",
    "stats": {
      "power": 9,
      "strength": 8,
      "offense": 9,
      "defense": 4,
      "stamina": 7,
      "physicalAtk": 8,
      "magicalAtk": 6,
      "physDef": 4,
      "magDef": 5,
      "speed": 7,
      "health": 160,
      "mana": 65,
      "manaReg": 1.0
    },
    "moves": {
      "basic": {
        "punch": "Coil of Oblivion",
        "kick": "Breath of the Apocalypse"
      },
      "special": {
        "name": "Dust Storm of Sekhem",
        "description": "Apepitoski slams the pillar into the ground, summoning a swirling dust storm in a 15‑meter radius for 6 seconds. Enemies inside are blinded (miss chance 30%), take 60% damage per second, and have vision reduced to 3 meters."
      },
      "ultimate": {
        "name": "Apocalyptic Unmaking",
        "description": "After a 2‑second channel (pillar glows white‑hot), Apepitoski unleashes a wave of golden annihilation in a 20‑meter radius, dealing 600% true damage to all enemies and permanently destroying any destructible terrain. Self‑damage: Apepitoski loses 1 year of her lifespan (cosmetic for lore, but in gameplay reduces her max health by 5% for the rest of the match)."
      }
    },
    "images": {
      "icon": "../assets/images/heroes/apepitoski/icon.png",
      "selection": "../assets/images/heroes/apepitoski/real.png",
      "loading": "../assets/images/heroes/apepitoski/hero.png",
      "spriteRight": "../assets/images/heroes/apepitoski/sprite.png"
    },
    "colorPalette": {
      "primary": ["#0B0B0B", "#FFD700", "#D4AF37"],
      "secondary": ["#8B0000", "#FFBF00", "#556B2F"],
      "tertiary": ["#1A1A1A", "#FFD700", "#9ACD32"],
      "quaternary": ["#2F2F2F", "#FF4500", "#B8860B"]
    },
    "projectile": {
      "speed": 8,
      "damageScale": 1.5,
      "image": "../assets/images/heroes/apepitoski/projectile.png"
    }
  },
  {
    "id": 64,
    "name": "Feroski",
    "role": "Warrior",
    "titles": ["The Time Police", "Warden of Eternity"],
    "rank": "SSS-Rank",
    "level": 999,
    "shortDescription": "An enormous, faceless titan in a police helm and flowing cape, Feroski is the living embodiment of temporal law. Born from nothing before the first god drew breath, he patrols the cracks of history, repairing paradoxes and arresting anomalies with a baton that beats criminals into infinite loops.",
    "stats": {
      "power": 8,
      "strength": 9,
      "offense": 7,
      "defense": 9,
      "stamina": 10,
      "physicalAtk": 8,
      "magicalAtk": 5,
      "physDef": 9,
      "magDef": 8,
      "speed": 6,
      "health": 300,
      "mana": 70,
      "manaReg": 1.0
    },
    "moves": {
      "basic": {
        "punch": "Looping Strike",
        "kick": "Temporal Handcuffs"
      },
      "special": {
        "name": "Second Chance",
        "description": "Feroski rewinds his own position and health to where they were 3 seconds ago. Cannot be used while stunned."
      },
      "ultimate": {
        "name": "Infinite Detention",
        "description": "Feroski slams Skanju into the ground, creating a 20‑meter radius bubble of stopped time for 4 seconds. Inside the bubble, all enemies are frozen (cannot act, take no damage, invulnerable). Feroski and Perry can move freely and reposition. When the bubble ends, all enemies are stunned for 1.5 seconds."
      }
    },
    "images": {
      "icon": "../assets/images/heroes/feroski/icon.png",
      "selection": "../assets/images/heroes/feroski/real.png",
      "loading": "../assets/images/heroes/feroski/hero.png",
      "spriteRight": "../assets/images/heroes/feroski/sprite.png"
    },
    "colorPalette": {
      "primary": ["#8B0000", "#FFFFFF", "#000080"],
      "secondary": ["#A52A2A", "#F5F5DC", "#191970"],
      "tertiary": ["#800000", "#FFD700", "#C0C0C0"],
      "quaternary": ["#2F2F2F", "#FF6347", "#4169E1"]
    },
    "projectile": null
  },
  {
    "id": 65,
    "name": "Aulicu",
    "role": "Warrior",
    "titles": ["The Forge Tyrant", "Hammer of Hopeful Embers"],
    "rank": "SSS-Rank",
    "level": 310,
    "shortDescription": "A dwarven smith of impossible skill and volcanic spirit, Aulicu forges weapons that weep with hope and armor that sings of resilience. Beneath her heavy armor and lava‑veined smile beats the heart of a survivor who turned tragedy into masterpiece.",
    "stats": {
      "power": 9,
      "strength": 10,
      "offense": 8,
      "defense": 8,
      "stamina": 9,
      "physicalAtk": 9,
      "magicalAtk": 5,
      "physDef": 8,
      "magDef": 6,
      "speed": 6,
      "health": 250,
      "mana": 60,
      "manaReg": 0.9
    },
    "moves": {
      "basic": {
        "punch": "Forge Shock",
        "kick": "Molten Rebuke"
      },
      "special": {
        "name": "Repairing Strike",
        "description": "Aulicu strikes an allied construct or golem (including her own ultimate golem), healing it for 25% of its max health and granting it 20% damage reduction for 4 seconds."
      },
      "ultimate": {
        "name": "Creation's Echo",
        "description": "Aulicu slams Foreignz Hamzer into the ground with all her might, causing all broken weapons, armor, and debris within 30 meters to rise and assemble into a single massive golem (stats scale with number of items absorbed, max 10,000 HP). The golem fights for 20 seconds, taunting enemies and dealing 200% physical damage with each slam."
      }
    },
    "images": {
      "icon": "../assets/images/heroes/aulicu/icon.png",
      "selection": "../assets/images/heroes/aulicu/real.png",
      "loading": "../assets/images/heroes/aulicu/hero.png",
      "spriteRight": "../assets/images/heroes/aulicu/sprite.png"
    },
    "colorPalette": {
      "primary": ["#8B0000", "#228B22", "#CD7F32"],
      "secondary": ["#FF4500", "#556B2F", "#B87333"],
      "tertiary": ["#A52A2A", "#32CD32", "#FFD700"],
      "quaternary": ["#000000", "#00FF00", "#B8860B"]
    },
    "projectile": null
  },
  {
    "id": 66,
    "name": "Omega",
    "role": "Warrior",
    "titles": ["The Apocalypse Unit", "Last Echo of the Final Order"],
    "rank": "SSS-Rank",
    "level": 999,
    "shortDescription": "A living weapon designed to delete all life, Omega tore through his own programming and chose mercy. Half man, half machine, he now hunts the corruption that created him, wielding a blade that erases lies from reality.",
    "stats": {
      "power": 9,
      "strength": 8,
      "offense": 9,
      "defense": 7,
      "stamina": 8,
      "physicalAtk": 9,
      "magicalAtk": 6,
      "physDef": 7,
      "magDef": 8,
      "speed": 8,
      "health": 230,
      "mana": 65,
      "manaReg": 1.0
    },
    "moves": {
      "basic": {
        "punch": "Severance Thrust",
        "kick": "Crescent Sweep"
      },
      "special": {
        "name": "Emergency Override",
        "description": "Omega activates a failsafe, instantly removing all crowd control effects from himself and gaining 30% damage reduction for 3 seconds."
      },
      "ultimate": {
        "name": "System Reboot",
        "description": "Omega plants the Omega Blade into the ground, creating a 20‑meter radius field of pulsing crimson light for 6 seconds. Allies within the field are healed for 30% of their max health and have all negative effects removed. Enemies within the field take 50% true damage per second and have their buffs stripped every second. After the field ends, the area is 'purified' – corrupted terrain becomes normal, and any lingering demonic portals are sealed."
      }
    },
    "images": {
      "icon": "../assets/images/heroes/omega/icon.png",
      "selection": "../assets/images/heroes/omega/real.png",
      "loading": "../assets/images/heroes/omega/hero.png",
      "spriteRight": "../assets/images/heroes/omega/sprite.png"
    },
    "colorPalette": {
      "primary": ["#0B0B0B", "#8B0000", "#C0C0C0"],
      "secondary": ["#1A1A1A", "#FF4500", "#A9A9A9"],
      "tertiary": ["#2F2F2F", "#FF0000", "#FFFFFF"],
      "quaternary": ["#000000", "#DC143C", "#808080"]
    },
    "projectile": null
  },
  {
    "id": 67,
    "name": "Keirnoor",
    "role": "Mage",
    "titles": ["The Symbiotic Evolver", "Mother of the Living Cosmos"],
    "rank": "SSS-Rank",
    "level": 780,
    "shortDescription": "A cosmic being of living symbiosis, Keirnoor evolves by merging with the life around her. With four arms, flowing symbiotic hair, and a heart as vast as the galaxy she protects, she wages an eternal war against the world‑eater Keingzyu.",
    "stats": {
      "power": 9,
      "strength": 7,
      "offense": 8,
      "defense": 9,
      "stamina": 9,
      "physicalAtk": 6,
      "magicalAtk": 10,
      "physDef": 7,
      "magDef": 9,
      "speed": 8,
      "health": 240,
      "mana": 80,
      "manaReg": 2.0
    },
    "moves": {
      "basic": {
        "punch": "Cosmic Rebuke",
        "kick": "Nebula Embrace"
      },
      "special": {
        "name": "Evolutionary Surge",
        "description": "Keirnoor channels cosmic energy, evolving her form for 6 seconds. During this time, her basic attacks become ranged energy blasts (dealing 100% magical damage), she gains 30% movement speed, and her four arms attack twice as fast."
      },
      "ultimate": {
        "name": "Symbiote Overload",
        "description": "When Keirnoor falls below 25% health, she enters a symbiotic frenzy for 8 seconds. Her four arms glow white, her hair spreads to a 15‑meter radius, and she gains 50% damage reduction, 50% life steal, and her abilities have 40% reduced cooldown. During this time, she cannot be stunned."
      }
    },
    "images": {
      "icon": "../assets/images/heroes/keirnoor/icon.png",
      "selection": "../assets/images/heroes/keirnoor/real.png",
      "loading": "../assets/images/heroes/keirnoor/hero.png",
      "spriteRight": "../assets/images/heroes/keirnoor/sprite.png"
    },
    "colorPalette": {
      "primary": ["#FFD700", "#FFFFFF", "#FF8C00"],
      "secondary": ["#FFFACD", "#FFA500", "#FFF0F5"],
      "tertiary": ["#FFDAB9", "#F0E68C", "#FFB347"],
      "quaternary": ["#000000", "#FFFFE0", "#FF6347"]
    },
    "projectile": null
  },
  {
    "id": 68,
    "name": "Rezee Kei",
    "role": "Marksman",
    "titles": ["The Demolition Marksman", "The Formless Gun"],
    "rank": "SS-Rank",
    "level": 185,
    "shortDescription": "A scarred veteran of a war that never ended, Rezee Kei walks the ruins with a gun that becomes any weapon she needs and a belt of grenades that each hold a different kind of hell. Kind beneath the grit, she protects the innocent with explosive precision.",
    "stats": {
      "power": 8,
      "strength": 7,
      "offense": 9,
      "defense": 5,
      "stamina": 7,
      "physicalAtk": 9,
      "magicalAtk": 4,
      "physDef": 5,
      "magDef": 4,
      "speed": 7,
      "health": 160,
      "mana": 55,
      "manaReg": 0.8
    },
    "moves": {
      "basic": {
        "punch": "Suppressing Fire",
        "kick": "Precision Shot"
      },
      "special": {
        "name": "Throw Grenade",
        "description": "Rezee throws a selected grenade (cycle with button) to a target location within 12 meters. The grenade explodes after 0.5 seconds. Effects: Red – 120% physical damage + bleed; Blue – smoke cloud; Yellow – stun; Green – incendiary; Purple – silence; White – reveals and marks enemies."
      },
      "ultimate": {
        "name": "Demolition Crescendo",
        "description": "Rezee throws all her remaining grenades (up to 6) in a 15‑meter radius over 2 seconds. Each grenade deals 150% physical damage in a 5‑meter area, and their secondary effects apply. After using this ability, Rezee cannot use grenades for 30 seconds."
      }
    },
    "images": {
      "icon": "../assets/images/heroes/rezee_kei/icon.png",
      "selection": "../assets/images/heroes/rezee_kei/real.png",
      "loading": "../assets/images/heroes/rezee_kei/hero.png",
      "spriteRight": "../assets/images/heroes/rezee_kei/sprite.png"
    },
    "colorPalette": {
      "primary": ["#FF8C00", "#2F2F2F", "#808080"],
      "secondary": ["#FFA500", "#1A1A1A", "#A9A9A9"],
      "tertiary": ["#FFD700", "#00FFFF", "#FF0000"],
      "quaternary": ["#000000", "#00FF00", "#800080"]
    },
    "projectile": {
      "speed": 12,
      "damageScale": 1.2,
      "image": "../assets/images/heroes/rezee_kei/projectile.png"
    }
  },
  {
    "id": 69,
    "name": "Icaris Mezong",
    "role": "Mage",
    "titles": ["The Celestial Architect", "Builder of Heavens"],
    "rank": "SSS-Rank",
    "level": 400,
    "shortDescription": "A celestial being from the Greek heavens, Icaris Mezong wields the Blueprint – a holographic map that builds and repairs reality itself. With her golden tools and serene smile, she constructs cathedrals from starlight and mends the rifts of the Sundering.",
    "stats": {
      "power": 7,
      "strength": 5,
      "offense": 6,
      "defense": 8,
      "stamina": 8,
      "physicalAtk": 4,
      "magicalAtk": 9,
      "physDef": 6,
      "magDef": 9,
      "speed": 6,
      "health": 220,
      "mana": 80,
      "manaReg": 2.0
    },
    "moves": {
      "basic": {
        "punch": "Construct Wall",
        "kick": "Repair Beam"
      },
      "special": {
        "name": "Structural Overload",
        "description": "Icaris targets an enemy structure or enemy hero with armor, causing their internal 'blueprint' to become unstable. The target takes 200% magical damage and has their armor reduced by 40% for 4 seconds. If used on an ally, it instead grants them 30% bonus armor for 4 seconds."
      },
      "ultimate": {
        "name": "Divine Restoration",
        "description": "Icaris channels the Blueprint for 3 seconds, then releases a wave of golden and blue light in a 25‑meter radius. All allied heroes are healed to full health, all allied structures are fully repaired, and any destroyed terrain or barriers within the area are rebuilt. Enemies in the area take 300% magical damage and are slowed by 60% for 4 seconds."
      }
    },
    "images": {
      "icon": "../assets/images/heroes/icaris_mezong/icon.png",
      "selection": "../assets/images/heroes/icaris_mezong/real.png",
      "loading": "../assets/images/heroes/icaris_mezong/hero.png",
      "spriteRight": "../assets/images/heroes/icaris_mezong/sprite.png"
    },
    "colorPalette": {
      "primary": ["#FFFFFF", "#FFD700", "#1E90FF"],
      "secondary": ["#F5F5F5", "#DAA520", "#4169E1"],
      "tertiary": ["#FFF8DC", "#B8860B", "#87CEEB"],
      "quaternary": ["#D3D3D3", "#FFD700", "#00BFFF"]
    },
    "projectile": null
  },
  {
    "id": 70,
    "name": "Yorana Perguise",
    "role": "Mage",
    "titles": ["The Witch of the North", "Frostbite's Chosen"],
    "rank": "SSS-Rank",
    "level": 320,
    "shortDescription": "A Slavic witch of immense power, Yorana commands frost that can freeze not only flesh but time itself and the very soul. With her staff Frostbite, she wanders the frozen wastes, protecting the innocent from the horrors of the Sundering.",
    "stats": {
      "power": 9,
      "strength": 5,
      "offense": 8,
      "defense": 6,
      "stamina": 7,
      "physicalAtk": 4,
      "magicalAtk": 10,
      "physDef": 5,
      "magDef": 8,
      "speed": 7,
      "health": 170,
      "mana": 80,
      "manaReg": 1.8
    },
    "moves": {
      "basic": {
        "punch": "Glacial Spike",
        "kick": "Blizzard Call"
      },
      "special": {
        "name": "Frost Armor",
        "description": "Yorana encases an allied hero in frost armor for 6 seconds, granting them 40% damage reduction and causing attackers to be slowed by 30% for 1 second."
      },
      "ultimate": {
        "name": "Eternal Winter",
        "description": "Yorana channels Frostbite for 1.5 seconds, then releases a massive wave of frozen time in a 20‑meter radius. All enemies in the area are frozen in time for 4 seconds (cannot act, take no damage). Allies can move and attack freely. After the effect ends, enemies take 300% magical damage and have their cooldowns increased by 5 seconds."
      }
    },
    "images": {
      "icon": "../assets/images/heroes/yorana_perguise/icon.png",
      "selection": "../assets/images/heroes/yorana_perguise/real.png",
      "loading": "../assets/images/heroes/yorana_perguise/hero.png",
      "spriteRight": "../assets/images/heroes/yorana_perguise/sprite.png"
    },
    "colorPalette": {
      "primary": ["#FFFFFF", "#00008B", "#2F2F2F"],
      "secondary": ["#E0FFFF", "#1E90FF", "#696969"],
      "tertiary": ["#00BFFF", "#D3D3D3", "#191970"],
      "quaternary": ["#000000", "#87CEEB", "#808080"]
    },
    "projectile": null
  },
   {
    "id": 71,
    "name": "Saselubee",
    "role": "Mage",
    "titles": ["The Great Charming Magician", "Vessel of Lust"],
    "rank": "SSS-Rank",
    "level": 275,
    "shortDescription": "A Korean magician of angelic beauty who willingly became the vessel of the Great Peril of Lust, containing its demonic hunger within her soul. She wields Fractal Shard Fans that stab not flesh but shadows, dealing soul damage that no armor can stop.",
    "stats": {
      "power": 9,
      "strength": 5,
      "offense": 9,
      "defense": 5,
      "stamina": 7,
      "physicalAtk": 5,
      "magicalAtk": 9,
      "physDef": 4,
      "magDef": 6,
      "speed": 8,
      "health": 150,
      "mana": 75,
      "manaReg": 1.6
    },
    "moves": {
      "basic": {
        "punch": "Shard Swarm",
        "kick": "Mirror Image"
      },
      "special": {
        "name": "Seductive Glance",
        "description": "Saselubee locks eyes with a target enemy within 12 meters, charming them for 1.5 seconds. During this time, the enemy walks harmlessly toward her and cannot attack or use abilities."
      },
      "ultimate": {
        "name": "Fractal Prison",
        "description": "Saselubee surrounds a target enemy with a sphere of mirror shards for 4 seconds. The target is stunned for the duration and cannot be targeted by allies or enemies. Each second, the prison reflects one of the target's past sins – dealing 100% True Damage per second, plus an additional 5% for every enemy kill the target has made in the last 60 seconds (max 500% bonus)."
      }
    },
    "images": {
      "icon": "../assets/images/heroes/saselubee/icon.png",
      "selection": "../assets/images/heroes/saselubee/real.png",
      "loading": "../assets/images/heroes/saselubee/hero.png",
      "spriteRight": "../assets/images/heroes/saselubee/sprite.png"
    },
    "colorPalette": {
      "primary": ["#000000", "#FF69B4", "#FFB6C1"],
      "secondary": ["#2F2F2F", "#FF1493", "#FFC0CB"],
      "tertiary": ["#1A1A1A", "#FFD700", "#FFE4E1"],
      "quaternary": ["#4A4A4A", "#DC143C", "#FFDAB9"]
    },
    "projectile": {
      "speed": 12,
      "damageScale": 1.2,
      "image": "../assets/images/heroes/saselubee/projectile.png"
    }
  },
  {
    "id": 72,
    "name": "Luciani Buwalkot",
    "role": "Warrior",
    "titles": ["The Vessel of Deceit", "The Silver‑Eyed Truthseeker"],
    "rank": "SS-Rank",
    "level": 210,
    "shortDescription": "A rogue who spent her life weaving lies to survive, Luciani Buwalkot entered the ash‑fields of Vex'Mara and endured seven nights of psychic torment. She did not break. Now she carries the Great Peril of Deceit as a tiny cub companion, her blades Huixon humming with unveiled truth.",
    "stats": {
      "power": 8,
      "strength": 6,
      "offense": 9,
      "defense": 5,
      "stamina": 7,
      "physicalAtk": 9,
      "magicalAtk": 4,
      "physDef": 5,
      "magDef": 7,
      "speed": 9,
      "health": 160,
      "mana": 55,
      "manaReg": 0.9
    },
    "moves": {
      "basic": {
        "punch": "Truth Arc",
        "kick": "Sever Oath"
      },
      "special": {
        "name": "Silent Judgement",
        "description": "Luciani marks a target within 15 meters. For 6 seconds, the target's movement speed is reduced by 30%, and any healing they receive is reduced by 40%. If the target attempts to use a stealth or illusion ability, they are immediately silenced for 2 seconds."
      },
      "ultimate": {
        "name": "Unveiling Crescent",
        "description": "Luciani throws both Huixon blades in a spiraling arc around her, creating a 20‑meter radius storm of silver crescent energy for 6 seconds. All enemies in the radius take 150% physical damage per second and are continuously revealed (cannot stealth or use illusions). Any enemy that attempts to use a deceptive ability during this time is immediately stunned for 2 seconds. At the end of the duration, the blades return, dealing an additional 300% physical damage to all enemies hit."
      }
    },
    "images": {
      "icon": "../assets/images/heroes/luciani_buwalkot/icon.png",
      "selection": "../assets/images/heroes/luciani_buwalkot/real.png",
      "loading": "../assets/images/heroes/luciani_buwalkot/hero.png",
      "spriteRight": "../assets/images/heroes/luciani_buwalkot/sprite.png"
    },
    "colorPalette": {
      "primary": ["#36454F", "#5C4033", "#8B4513"],
      "secondary": ["#A0522D", "#DAA520", "#2F2F2F"],
      "tertiary": ["#4A4A4A", "#FFD700", "#C0C0C0"],
      "quaternary": ["#1A1A1A", "#B8860B", "#808080"]
    },
    "projectile": null
  },
  {
    "id": 73,
    "name": "Hana Beehee",
    "role": "Brawler",
    "titles": ["The Vessel of Rage", "The Unbroken Monk"],
    "rank": "SS-Rank",
    "level": 235,
    "shortDescription": "A Nepalese monk warrior who mastered her own fury through decades of discipline, Hana Beehee walked into a volcanic caldera and offered herself as a target for Gor'Thak's rage. She endured one minute of Sunder‑Flame without striking back, proving that controlled will can quiet even the most ancient fury.",
    "stats": {
      "power": 8,
      "strength": 8,
      "offense": 7,
      "defense": 9,
      "stamina": 9,
      "physicalAtk": 8,
      "magicalAtk": 5,
      "physDef": 9,
      "magDef": 8,
      "speed": 7,
      "health": 250,
      "mana": 60,
      "manaReg": 0.9
    },
    "moves": {
      "basic": {
        "punch": "Extended Strike",
        "kick": "Whirlwind of the Unbroken"
      },
      "special": {
        "name": "Ki Pulse",
        "description": "Hana releases a wave of concentrated ki in a 12‑meter radius, dealing 120% physical damage to all enemies and healing herself for 15% of her max health. Enemies hit are also slowed by 20% for 3 seconds."
      },
      "ultimate": {
        "name": "Amitabha's Embrace",
        "description": "Hana plants the staff into the ground and kneels, creating a 25‑meter radius field of red protective light for 8 seconds. Inside the field, all allies gain 40% damage reduction and are immune to fear and enrage effects. Any rage‑based damage dealt to allies within the field is converted into healing (50% of the damage becomes healing). At the end of the duration, the field explodes, dealing 300% physical damage to all enemies inside."
      }
    },
    "images": {
      "icon": "../assets/images/heroes/hana_beehee/icon.png",
      "selection": "../assets/images/heroes/hana_beehee/real.png",
      "loading": "../assets/images/heroes/hana_beehee/hero.png",
      "spriteRight": "../assets/images/heroes/hana_beehee/sprite.png"
    },
    "colorPalette": {
      "primary": ["#FFFFFF", "#800080", "#FF0000"],
      "secondary": ["#F5F5F5", "#4B0082", "#8B0000"],
      "tertiary": ["#FFD700", "#C0C0C0", "#DC143C"],
      "quaternary": ["#000000", "#DA70D6", "#B22222"]
    },
    "projectile": null
  },
  {
    "id": 74,
    "name": "Nyitti Bemzong",
    "role": "Mage",
    "titles": ["The Vessel of Gluttony", "The Scarcity's Daughter"],
    "rank": "SS-Rank",
    "level": 195,
    "shortDescription": "An eighteen‑year‑old Spanish technomancer who grew up in the scarcity‑ravaged outskirts of Mekhanika, Nyitti Bemzong learned to value every scrap, every circuit, every crumb. When she faced Nyx'Vor, the Great Peril of Gluttony, she did not fight. She offered the creature the last piece of food she had been saving for herself.",
    "stats": {
      "power": 8,
      "strength": 5,
      "offense": 9,
      "defense": 5,
      "stamina": 7,
      "physicalAtk": 4,
      "magicalAtk": 9,
      "physDef": 5,
      "magDef": 8,
      "speed": 7,
      "health": 160,
      "mana": 75,
      "manaReg": 1.5
    },
    "moves": {
      "basic": {
        "punch": "Recycling Beam",
        "kick": "Generosity Pulse"
      },
      "special": {
        "name": "Recycle Scrap",
        "description": "Nyitti targets a broken structure, destroyed turret, or dead enemy within 15 meters, breaking it down into raw energy. She gains 2 Recycled Energy stacks (max 10) and restores 10% of her max stamina."
      },
      "ultimate": {
        "name": "Famine's Feast",
        "description": "When Famine's End is fully charged (10 Recycled Energy stacks), Nyitti can unleash a massive beam in a 40‑meter line for 6 seconds. The beam deals 500% energy damage per second to all enemies hit and heals Nyitti for 25% of the damage dealt each second. Enemies hit are also 'Sated' – they cannot use healing abilities for 4 seconds."
      }
    },
    "images": {
      "icon": "../assets/images/heroes/nyitti_bemzong/icon.png",
      "selection": "../assets/images/heroes/nyitti_bemzong/real.png",
      "loading": "../assets/images/heroes/nyitti_bemzong/hero.png",
      "spriteRight": "../assets/images/heroes/nyitti_bemzong/sprite.png"
    },
    "colorPalette": {
      "primary": ["#0000FF", "#FFD700", "#1E90FF"],
      "secondary": ["#DAA520", "#FF69B4", "#C0C0C0"],
      "tertiary": ["#00BFFF", "#FF1493", "#00CED1"],
      "quaternary": ["#000000", "#FFA500", "#FF00FF"]
    },
    "projectile": {
      "speed": 14,
      "damageScale": 1.5,
      "image": "../assets/images/heroes/nyitti_bemzong/projectile.png"
    }
  },
  {
    "id": 75,
    "name": "Bellaha Nexurfogus",
    "role": "Mage",
    "titles": ["The Vessel of Ruin", "The Archivist of Endings"],
    "rank": "SS-Rank",
    "level": 280,
    "shortDescription": "A historian and time mage from a legendary Indonesian family of archivists, Bellaha Nexurfogus has dedicated her life to preserving knowledge and understanding the beauty of decay as part of an eternal cycle. She sought out Kaz'Vhal, the Great Peril of Ruin, and accepted the entropy around her.",
    "stats": {
      "power": 7,
      "strength": 4,
      "offense": 8,
      "defense": 6,
      "stamina": 7,
      "physicalAtk": 4,
      "magicalAtk": 9,
      "physDef": 5,
      "magDef": 9,
      "speed": 6,
      "health": 180,
      "mana": 80,
      "manaReg": 2.0
    },
    "moves": {
      "basic": {
        "punch": "Rewind Wound",
        "kick": "Accelerate Decay"
      },
      "special": {
        "name": "Preserve Fragment",
        "description": "Bellaha targets a destructible object or dead enemy within 15 meters, preserving a fragment of its essence. She gains 1 Archive stack (max 10) and restores 10% of her max mana."
      },
      "ultimate": {
        "name": "Eternal Archive",
        "description": "Bellaha slams Echo of Eternity into the ground, creating a 30‑meter radius field of suspended time for 6 seconds. Inside the field: enemies are frozen in place (cannot act, take no damage); allies are healed for 20% of their max health per second; Bellaha can move freely and record the moment. At the end of the duration, all enemies in the field take 300% magical damage, and all allies gain a 'Preserved Moment' buff – their next ability within 10 seconds deals 30% increased damage."
      }
    },
    "images": {
      "icon": "../assets/images/heroes/bellaha_nexurfogus/icon.png",
      "selection": "../assets/images/heroes/bellaha_nexurfogus/real.png",
      "loading": "../assets/images/heroes/bellaha_nexurfogus/hero.png",
      "spriteRight": "../assets/images/heroes/bellaha_nexurfogus/sprite.png"
    },
    "colorPalette": {
      "primary": ["#FF4500", "#FF8C00", "#FFD700"],
      "secondary": ["#DC143C", "#FFA500", "#FFFF00"],
      "tertiary": ["#8B0000", "#DAA520", "#00FFFF"],
      "quaternary": ["#1A1A1A", "#FF6347", "#00BFFF"]
    },
    "projectile": null
  },
  {
    "id": 76,
    "name": "Reigna Nexurfogus",
    "role": "Warrior",
    "titles": ["The Vessel of Pride", "The Fallen Sun"],
    "rank": "SS-Rank",
    "level": 270,
    "shortDescription": "Once a proud noble knight of the Nexurfogus family, Reigna believed herself invincible—until her arrogance cost her everything she loved. Stripped of her lands, her title, and her honor, she wandered for years, seeking redemption.",
    "stats": {
      "power": 8,
      "strength": 9,
      "offense": 7,
      "defense": 9,
      "stamina": 9,
      "physicalAtk": 9,
      "magicalAtk": 5,
      "physDef": 9,
      "magDef": 7,
      "speed": 6,
      "health": 260,
      "mana": 55,
      "manaReg": 0.8
    },
    "moves": {
      "basic": {
        "punch": "Humility's Edge",
        "kick": "Unyielding Bastion"
      },
      "special": {
        "name": "Shield of Humility",
        "description": "Reigna targets an allied hero within 20 meters, transferring 30% of her current damage reduction to them for 5 seconds. During this time, she takes 15% increased damage but the ally gains 30% damage reduction."
      },
      "ultimate": {
        "name": "Shattered Mirror",
        "description": "Reigna slams Pride's End (in either form) into the ground, releasing a wave of mirror shards in a 25‑meter radius for 6 seconds. All enemies in the radius are forced to see their own flaws – they are stunned for 2 seconds, then slowed by 50% for 4 seconds, and have their defenses reduced by 40%. Allies in the radius gain 'Humbled Resolve' – they take 30% reduced damage and deal 20% increased damage for 10 seconds."
      }
    },
    "images": {
      "icon": "../assets/images/heroes/reigna_nexurfogus/icon.png",
      "selection": "../assets/images/heroes/reigna_nexurfogus/real.png",
      "loading": "../assets/images/heroes/reigna_nexurfogus/hero.png",
      "spriteRight": "../assets/images/heroes/reigna_nexurfogus/sprite.png"
    },
    "colorPalette": {
      "primary": ["#FFD700", "#8B4513", "#DC143C"],
      "secondary": ["#DAA520", "#A0522D", "#8B0000"],
      "tertiary": ["#B8860B", "#CD853F", "#FF6347"],
      "quaternary": ["#000000", "#FFA500", "#B22222"]
    },
    "projectile": null
  },
  {
    "id": 77,
    "name": "Alionzar Nexurfogus",
    "role": "Warrior",
    "titles": ["The Vessel of Despair", "The Radiant Commander"],
    "rank": "SS-Rank",
    "level": 310,
    "shortDescription": "A forty‑year‑old radiant commander of the Nexurfogus family, Alionzar has faced more loss than most can imagine – his wife, his children, his closest comrades. Yet he still finds reasons to smile, to laugh, to bring joy to others.",
    "stats": {
      "power": 9,
      "strength": 10,
      "offense": 8,
      "defense": 9,
      "stamina": 10,
      "physicalAtk": 10,
      "magicalAtk": 6,
      "physDef": 9,
      "magDef": 8,
      "speed": 5,
      "health": 290,
      "mana": 60,
      "manaReg": 0.9
    },
    "moves": {
      "basic": {
        "punch": "Jade Cleave",
        "kick": "Radiant Charge"
      },
      "special": {
        "name": "Flower's Memory",
        "description": "Alionzar places a spectral flower at a target location within 15 meters. The flower lasts for 10 seconds, healing allies within 10 meters for 5% of their max health per second and reducing enemy damage by 15%. Alionzar can have up to 2 flowers active at once."
      },
      "ultimate": {
        "name": "Dawn's Resurgence",
        "description": "Alionzar slams Hope's Resolve into the ground, releasing a massive shockwave of jade light in a 30‑meter radius. All allies in the radius are healed to full health, have all debuffs removed, and gain immunity to fear and despair for 15 seconds. Enemies in the radius take 400% physical damage and are knocked back 15 meters."
      }
    },
    "images": {
      "icon": "../assets/images/heroes/alionzar_nexurfogus/icon.png",
      "selection": "../assets/images/heroes/alionzar_nexurfogus/real.png",
      "loading": "../assets/images/heroes/alionzar_nexurfogus/hero.png",
      "spriteRight": "../assets/images/heroes/alionzar_nexurfogus/sprite.png"
    },
    "colorPalette": {
      "primary": ["#00FF7F", "#FFFFFF", "#808080"],
      "secondary": ["#98FB98", "#F5F5F5", "#A9A9A9"],
      "tertiary": ["#32CD32", "#D3D3D3", "#2E8B57"],
      "quaternary": ["#000000", "#ADFF2F", "#228B22"]
    },
    "projectile": null
  },
  {
    "id": 78,
    "name": "Nialzu D Foryangrwa",
    "role": "Warrior",
    "titles": ["The Vessel of Greed", "The Emperor Who Gave Everything"],
    "rank": "SS-Rank",
    "level": 290,
    "shortDescription": "A 9‑foot emperor of Chinese descent who ruled a wealthy kingdom with wisdom and compassion, Nialzu D Foryangrwa gave away his entire fortune to end a famine that plagued his people. He left his throne to his younger brother and wandered the world as a humble pilgrim.",
    "stats": {
      "power": 8,
      "strength": 10,
      "offense": 7,
      "defense": 9,
      "stamina": 10,
      "physicalAtk": 9,
      "magicalAtk": 6,
      "physDef": 9,
      "magDef": 8,
      "speed": 5,
      "health": 280,
      "mana": 60,
      "manaReg": 0.9
    },
    "moves": {
      "basic": {
        "punch": "Crane's Mercy",
        "kick": "Generous Strike"
      },
      "special": {
        "name": "Beggar's Blessing",
        "description": "Nialzu kneels and offers a blessing to an ally within 20 meters, transferring 15% of his current health to them as a shield and granting them 30% increased damage for 6 seconds."
      },
      "ultimate": {
        "name": "Emperor's Gift",
        "description": "Nialzu slams Debt of Kindness into the ground, creating a 25‑meter radius field of purple and white light for 8 seconds. Allies in the field are healed for 10% of their max health per second and gain 40% increased damage. Enemies in the field take 150% physical damage per second and have their healing reduced by 50%. At the end of the duration, all allies in the field are granted a shield equal to 30% of Nialzu's max health for 10 seconds."
      }
    },
    "images": {
      "icon": "../assets/images/heroes/nialzu_d_foryangrwa/icon.png",
      "selection": "../assets/images/heroes/nialzu_d_foryangrwa/real.png",
      "loading": "../assets/images/heroes/nialzu_d_foryangrwa/hero.png",
      "spriteRight": "../assets/images/heroes/nialzu_d_foryangrwa/sprite.png"
    },
    "colorPalette": {
      "primary": ["#800080", "#FFFFFF", "#C0C0C0"],
      "secondary": ["#9370DB", "#F5F5F5", "#A9A9A9"],
      "tertiary": ["#DDA0DD", "#E6E6FA", "#4B0082"],
      "quaternary": ["#000000", "#BA55D3", "#8A2BE2"]
    },
    "projectile": null
  },
  {
    "id": 79,
    "name": "Dedeinju Nexurfogus",
    "role": "Mage",
    "titles": ["The Vessel of Pain", "The Silent Nun"],
    "rank": "SS-Rank",
    "level": 260,
    "shortDescription": "A young nun of the Nexurfogus family, Dedeinju is a battle mage and healer who has dedicated her life to easing the suffering of others – while hiding her own deep wounds.",
    "stats": {
      "power": 7,
      "strength": 5,
      "offense": 6,
      "defense": 7,
      "stamina": 8,
      "physicalAtk": 6,
      "magicalAtk": 9,
      "physDef": 6,
      "magDef": 9,
      "speed": 7,
      "health": 190,
      "mana": 75,
      "manaReg": 1.5
    },
    "moves": {
      "basic": {
        "punch": "Healing Embrace",
        "kick": "Chain Lash"
      },
      "special": {
        "name": "Pain Transfer",
        "description": "Dedeinju targets an enemy within 20 meters, transferring one stack of 'Stored Pain' to them, dealing 100% true damage per stack and healing herself for the same amount."
      },
      "ultimate": {
        "name": "Martyr's Embrace",
        "description": "Dedeinju wraps the Chain of Mercy around all allies within a 20‑meter radius, creating a protective cocoon for 6 seconds. During this time, all damage that would be dealt to allies is instead dealt to Dedeinju (reduced by 50%). For every 500 damage absorbed, Dedeinju releases a pulse of healing, restoring 10% of her max health to all allies. At the end of the duration, Dedeinju is healed for 30% of all damage absorbed."
      }
    },
    "images": {
      "icon": "../assets/images/heroes/dedeinju_nexurfogus/icon.png",
      "selection": "../assets/images/heroes/dedeinju_nexurfogus/real.png",
      "loading": "../assets/images/heroes/dedeinju_nexurfogus/hero.png",
      "spriteRight": "../assets/images/heroes/dedeinju_nexurfogus/sprite.png"
    },
    "colorPalette": {
      "primary": ["#0000FF", "#0B0B0B", "#FFFFFF"],
      "secondary": ["#1E90FF", "#2F2F2F", "#F5F5F5"],
      "tertiary": ["#00BFFF", "#A9A9A9", "#E0FFFF"],
      "quaternary": ["#000000", "#87CEEB", "#00CED1"]
    },
    "projectile": null
  },
  {
    "id": 80,
    "name": "Mei Forsta",
    "role": "Warrior",
    "titles": ["The Vessel of Betrayal", "The Broken Bloom"],
    "rank": "SS-Rank",
    "level": 205,
    "shortDescription": "An eighteen‑year‑old Korean battle mage warrior, Mei Forsta was betrayed by the one person who should have protected her – her father‑in‑law, who sold her to a brothel after her husband's death. She endured unspeakable offenses, but her spirit refused to break.",
    "stats": {
      "power": 8,
      "strength": 7,
      "offense": 8,
      "defense": 7,
      "stamina": 8,
      "physicalAtk": 8,
      "magicalAtk": 7,
      "physDef": 7,
      "magDef": 8,
      "speed": 8,
      "health": 180,
      "mana": 65,
      "manaReg": 1.1
    },
    "moves": {
      "basic": {
        "punch": "Sworn Strike",
        "kick": "Shield of Trust"
      },
      "special": {
        "name": "Trusting Touch",
        "description": "Mei touches an ally within 10 meters, removing one debuff and granting them a shield equal to 15% of her max health for 6 seconds. If the ally has been betrayed in the last 30 seconds, the shield is doubled."
      },
      "ultimate": {
        "name": "Unyielding Vow",
        "description": "Mei plants Oathkeeper into the ground (either form), creating a 25‑meter radius field of pale green light for 8 seconds. Inside the field: all promises become binding. Enemies who attack an ally they had previously sworn not to harm (or who use deceptive abilities) take 300% true damage and are silenced for 4 seconds. Allies who keep their word (by not attacking allies or by protecting each other) gain 40% increased damage and 30% cooldown reduction for the duration."
      }
    },
    "images": {
      "icon": "../assets/images/heroes/mei_forsta/icon.png",
      "selection": "../assets/images/heroes/mei_forsta/real.png",
      "loading": "../assets/images/heroes/mei_forsta/hero.png",
      "spriteRight": "../assets/images/heroes/mei_forsta/sprite.png"
    },
    "colorPalette": {
      "primary": ["#FFFACD", "#98FB98", "#FFFFFF"],
      "secondary": ["#F0E68C", "#ADFF2F", "#F5F5F5"],
      "tertiary": ["#FFD700", "#32CD32", "#E0FFFF"],
      "quaternary": ["#000000", "#9ACD32", "#00FF7F"]
    },
    "projectile": null
  },
  {
    "id": 81,
    "name": "Zene Zene Sumala",
    "role": "Marksman",
    "titles": ["The Vessel of Wrath", "The Pink Shotgun Saint"],
    "rank": "SS-Rank",
    "level": 240,
    "shortDescription": "A demon hunter from the steppes of Mongolia, Zene Zene Sumala was cast out by her own people after a demon slaughtered her family and she was accused of consorting with darkness. She survived alone, hunting demons with a custom shotgun she named 'Wrath's Embrace.'",
    "stats": {
      "power": 9,
      "strength": 7,
      "offense": 9,
      "defense": 6,
      "stamina": 8,
      "physicalAtk": 9,
      "magicalAtk": 5,
      "physDef": 6,
      "magDef": 7,
      "speed": 7,
      "health": 180,
      "mana": 55,
      "manaReg": 0.8
    },
    "moves": {
      "basic": {
        "punch": "Wrath Shell",
        "kick": "Faith Shell"
      },
      "special": {
        "name": "Hunter's Dodge",
        "description": "Zene performs a quick roll in a chosen direction (8 meters), becoming untargetable for 0.5 seconds. After the roll, her next shotgun blast deals 30% increased damage."
      },
      "ultimate": {
        "name": "Righteous Fury",
        "description": "Zene pumps Wrath's Embrace and unloads all remaining shells in a devastating 25‑meter cone over 3 seconds. Each shell deals 150% physical damage (total damage depends on shells left). All enemies hit are stunned for 2 seconds. If Zene has 10 Wrath stacks, the stun duration is doubled and the final shell deals 500% damage."
      }
    },
    "images": {
      "icon": "../assets/images/heroes/zene_zene_sumala/icon.png",
      "selection": "../assets/images/heroes/zene_zene_sumala/real.png",
      "loading": "../assets/images/heroes/zene_zene_sumala/hero.png",
      "spriteRight": "../assets/images/heroes/zene_zene_sumala/sprite.png"
    },
    "colorPalette": {
      "primary": ["#FFFFFF", "#FF69B4", "#FF8C00"],
      "secondary": ["#F5F5F5", "#FF1493", "#FFA500"],
      "tertiary": ["#FFB6C1", "#FFD700", "#FF4500"],
      "quaternary": ["#000000", "#DC143C", "#FF6347"]
    },
    "projectile": {
      "speed": 15,
      "damageScale": 1.8,
      "image": "../assets/images/heroes/zene_zene_sumala/projectile.png"
    }
  },
  {
    "id": 82,
    "name": "Caramia D Nexurfogus",
    "role": "Mage",
    "titles": ["The Vessel of Tyranny", "The Silver‑Eyed Liberator"],
    "rank": "SS-Rank",
    "level": 285,
    "shortDescription": "A royal vampire of Malaysian heritage, Caramia D Nexurfogus was born into the oppressive Kilamzan family, where power was taken, never given. She rebelled, freed the blood‑bound servants, and fled.",
    "stats": {
      "power": 7,
      "strength": 6,
      "offense": 6,
      "defense": 9,
      "stamina": 9,
      "physicalAtk": 6,
      "magicalAtk": 9,
      "physDef": 8,
      "magDef": 9,
      "speed": 6,
      "health": 250,
      "mana": 75,
      "manaReg": 1.3
    },
    "moves": {
      "basic": {
        "punch": "Edict of Healing",
        "kick": "Staff of Liberation"
      },
      "special": {
        "name": "Crimson Bond",
        "description": "Caramia binds herself to an ally within 20 meters for 8 seconds. During the bond, 30% of the damage the ally takes is redirected to Caramia, and Caramia's healing on that ally is increased by 50%."
      },
      "ultimate": {
        "name": "Edict of Freedom",
        "description": "Caramia slams Liberator's Edict (any form) into the ground, creating a 25‑meter radius field of golden and white light for 8 seconds. Inside the field: allies are immune to all crowd control (stun, root, silence, fear, charm) and regenerate 10% of their max health per second. Enemies who have ever oppressed others are forced to kneel (stunned) for 4 seconds and take 200% true damage. At the end of the duration, all allies gain a shield equal to 30% of Caramia's max health for 10 seconds."
      }
    },
    "images": {
      "icon": "../assets/images/heroes/caramia_d_nexurfogus/icon.png",
      "selection": "../assets/images/heroes/caramia_d_nexurfogus/real.png",
      "loading": "../assets/images/heroes/caramia_d_nexurfogus/hero.png",
      "spriteRight": "../assets/images/heroes/caramia_d_nexurfogus/sprite.png"
    },
    "colorPalette": {
      "primary": ["#FFFF00", "#FFFFFF", "#C19A6B"],
      "secondary": ["#FFD700", "#F5F5F5", "#D2B48C"],
      "tertiary": ["#FFA500", "#E6E6FA", "#B8860B"],
      "quaternary": ["#000000", "#FFD700", "#DAA520"]
    },
    "projectile": null
  },
  {
    "id": 83,
    "name": "Aishala Fwehue",
    "role": "Mage",
    "titles": ["The Vessel of Shame", "The Human‑Faced Demon"],
    "rank": "SS-Rank",
    "level": 320,
    "shortDescription": "A demon born to powerful lords but cursed with a fully human appearance, Aishala Fwehue was shamed and cast out by her own kind. She mastered every forbidden spell, every weapon, every artifact – becoming a prodigy that demon kings fear.",
    "stats": {
      "power": 9,
      "strength": 6,
      "offense": 9,
      "defense": 5,
      "stamina": 7,
      "physicalAtk": 8,
      "magicalAtk": 10,
      "physDef": 5,
      "magDef": 9,
      "speed": 8,
      "health": 160,
      "mana": 80,
      "manaReg": 2.0
    },
    "moves": {
      "basic": {
        "punch": "Forbidden Strike",
        "kick": "Arcane Torrent"
      },
      "special": {
        "name": "Veil of Secrets",
        "description": "Aishala creates a veil of shimmering purple light around herself and all allies within 15 meters, granting invisibility for 4 seconds and removing all debuffs. Attacking breaks invisibility but deals 30% bonus damage."
      },
      "ultimate": {
        "name": "Forbidden Resonance",
        "description": "Aishala raises Echo of the Forbidden, and the orb expands into a 20‑meter radius field of deep purple starlight for 8 seconds. Inside the field: all of Aishala's abilities have no cooldown; she gains 50% increased damage and 30% life steal; any spell she casts is automatically empowered (max rank). Allies in the field gain 30% cooldown reduction and 20% increased damage."
      }
    },
    "images": {
      "icon": "../assets/images/heroes/aishala_fwehue/icon.png",
      "selection": "../assets/images/heroes/aishala_fwehue/real.png",
      "loading": "../assets/images/heroes/aishala_fwehue/hero.png",
      "spriteRight": "../assets/images/heroes/aishala_fwehue/sprite.png"
    },
    "colorPalette": {
      "primary": ["#E6E6FA", "#DDA0DD", "#FFFFFF"],
      "secondary": ["#C8A2C8", "#F5F5F5", "#E0B0FF"],
      "tertiary": ["#FF69B4", "#DC143C", "#FFD700"],
      "quaternary": ["#4B0082", "#FF1493", "#DAA520"]
    },
    "projectile": null
  },
  {
    "id": 84,
    "name": "Feifeing Nexurfogus",
    "role": "Mage",
    "titles": ["The Vessel of Resentment", "The Forgiving Knight"],
    "rank": "SS-Rank",
    "level": 230,
    "shortDescription": "A noble knight servant from the UK who endured a cruel master's abuse for years, Feifeing Nexurfogus chose forgiveness over bitterness. Her capacity to see beauty in the monstrous drew the attention of the Nexurfogus family, who adopted her and gave her their name.",
    "stats": {
      "power": 7,
      "strength": 5,
      "offense": 6,
      "defense": 7,
      "stamina": 8,
      "physicalAtk": 6,
      "magicalAtk": 9,
      "physDef": 6,
      "magDef": 9,
      "speed": 7,
      "health": 190,
      "mana": 75,
      "manaReg": 1.5
    },
    "moves": {
      "basic": {
        "punch": "Renewing Light",
        "kick": "Purge Bitterness"
      },
      "special": {
        "name": "Cleansing Waters",
        "description": "Feifeing summons a pool of golden water at a target location within 15 meters, lasting 6 seconds. Allies standing in the pool are healed for 8% of their max health per second and have debuffs removed every 2 seconds. Enemies standing in the pool are slowed by 30%."
      },
      "ultimate": {
        "name": "Dawn of Renewal",
        "description": "Feifeing plants Tear of Renewal into the ground, creating a 25‑meter radius field of golden light for 8 seconds. Allies in the field are healed for 15% of their max health per second and become immune to debuffs. Enemies in the field have their resentment transformed: each enemy that has dealt damage to an ally in the last 30 seconds summons a 'Spirit of Forgiveness' – a friendly ghost that attacks the enemy and heals allies."
      }
    },
    "images": {
      "icon": "../assets/images/heroes/feifeing_nexurfogus/icon.png",
      "selection": "../assets/images/heroes/feifeing_nexurfogus/real.png",
      "loading": "../assets/images/heroes/feifeing_nexurfogus/hero.png",
      "spriteRight": "../assets/images/heroes/feifeing_nexurfogus/sprite.png"
    },
    "colorPalette": {
      "primary": ["#FF8C00", "#FFD700", "#F5DEB3"],
      "secondary": ["#FFA500", "#F5DEB3", "#32CD32"],
      "tertiary": ["#FFD700", "#00CED1", "#FFDAB9"],
      "quaternary": ["#000000", "#FF6347", "#00FFFF"]
    },
    "projectile": null
  },
  {
    "id": 85,
    "name": "Xarvi Nexurfogus",
    "role": "Mage",
    "titles": ["The Vessel of Cruelty", "The Sapphire Arbitrator"],
    "rank": "SS-Rank",
    "level": 300,
    "shortDescription": "A technomancer historian with an unclouded sense of fairness, Xarvi Nexurfogus wields logic and compassion in equal measure. Her red‑and‑yellow hair flows like a warning flame, and her sapphire eyes see through deception.",
    "stats": {
      "power": 8,
      "strength": 7,
      "offense": 8,
      "defense": 8,
      "stamina": 8,
      "physicalAtk": 8,
      "magicalAtk": 7,
      "physDef": 8,
      "magDef": 8,
      "speed": 6,
      "health": 220,
      "mana": 70,
      "manaReg": 1.2
    },
    "moves": {
      "basic": {
        "punch": "Crushing Verdict",
        "kick": "Barrier of Reason"
      },
      "special": {
        "name": "Logic Loop",
        "description": "Xarvi analyzes an enemy within 20 meters, marking them for 6 seconds. During this time, any ability they use has a 30% chance to fail (wasting cooldown)."
      },
      "ultimate": {
        "name": "The Illogical Equation",
        "description": "Xarvi raises Mercy's Calculus, and a 25‑meter radius field of sapphire and pearl light erupts for 8 seconds. Inside the field: enemies take true damage equal to 5% of their own maximum health per second for each cruel act they have committed (tracked by the game, or base 150% magical damage). Allies are healed for 10% of their max health per second for each kind act they have performed. The field also reveals the 'moral alignment' of all enemies (showing who is cruel, who is neutral)."
      }
    },
    "images": {
      "icon": "../assets/images/heroes/xarvi_nexurfogus/icon.png",
      "selection": "../assets/images/heroes/xarvi_nexurfogus/real.png",
      "loading": "../assets/images/heroes/xarvi_nexurfogus/hero.png",
      "spriteRight": "../assets/images/heroes/xarvi_nexurfogus/sprite.png"
    },
    "colorPalette": {
      "primary": ["#0F52BA", "#FFFFFF", "#556B2F"],
      "secondary": ["#1E90FF", "#F5F5F5", "#6B8E23"],
      "tertiary": ["#00BFFF", "#FFD700", "#32CD32"],
      "quaternary": ["#000000", "#87CEEB", "#9ACD32"]
    },
    "projectile": null
  },
  {
    "id": 86,
    "name": "Elvee Zenforg",
    "role": "Mage",
    "titles": ["The Vessel of Time", "The Sunlight Queen of Echoes"],
    "rank": "SS-Rank",
    "level": 350,
    "shortDescription": "A thousand‑year‑old Sunlight Elf queen who appears as an eighteen‑year‑old hip‑hop loving visionary, Elvee Zenforg has witnessed centuries of rise and fall. Yet she refuses to let despair claim her.",
    "stats": {
      "power": 8,
      "strength": 6,
      "offense": 9,
      "defense": 6,
      "stamina": 7,
      "physicalAtk": 7,
      "magicalAtk": 9,
      "physDef": 6,
      "magDef": 8,
      "speed": 9,
      "health": 180,
      "mana": 75,
      "manaReg": 1.4
    },
    "moves": {
      "basic": {
        "punch": "Time Punch",
        "kick": "Temporal Dash"
      },
      "special": {
        "name": "Rewind Step",
        "description": "Elvee rewinds her position to where she was 2 seconds ago, healing for 10% of the damage she took in that window. Can be used while stunned."
      },
      "ultimate": {
        "name": "Eternal Groove",
        "description": "Elvee slams her hand (or staff) down, creating a 25‑meter radius field of pulsing temporal energy for 8 seconds. Inside the field: allies gain 40% attack speed, 30% movement speed, and 20% cooldown reduction; enemies are slowed by 50% and have their abilities delayed by 1 second (cast time increased). Additionally, the field 'loops' the last 5 seconds of any ally's death – if an ally dies inside the field, they are resurrected at the location they were 5 seconds ago with 30% health (once per ally)."
      }
    },
    "images": {
      "icon": "../assets/images/heroes/elvee_zenforg/icon.png",
      "selection": "../assets/images/heroes/elvee_zenforg/real.png",
      "loading": "../assets/images/heroes/elvee_zenforg/hero.png",
      "spriteRight": "../assets/images/heroes/elvee_zenforg/sprite.png"
    },
    "colorPalette": {
      "primary": ["#FF8C00", "#32CD32", "#1E90FF"],
      "secondary": ["#FFA500", "#00FF7F", "#00BFFF"],
      "tertiary": ["#FF4500", "#7CFC00", "#00008B"],
      "quaternary": ["#000000", "#FFD700", "#FF1493"]
    },
    "projectile": null
  },
  {
    "id": 87,
    "name": "Peitri Meimorguse",
    "role": "Mage",
    "titles": ["The Vessel of Ambition", "The Stillness Monk"],
    "rank": "SS-Rank",
    "level": 280,
    "shortDescription": "A retired hero who hung up her sword to become an ascetic monk, Peitri Meimorguse is a secretive figure known only to a chosen few. Her beauty is a paradox – a modern, fashionable woman with the heart of a renunciant.",
    "stats": {
      "power": 6,
      "strength": 5,
      "offense": 5,
      "defense": 9,
      "stamina": 8,
      "physicalAtk": 5,
      "magicalAtk": 8,
      "physDef": 9,
      "magDef": 9,
      "speed": 5,
      "health": 260,
      "mana": 75,
      "manaReg": 1.3
    },
    "moves": {
      "basic": {
        "punch": "Unwoven Strike",
        "kick": "Stillness Breath"
      },
      "special": {
        "name": "Witness the Mist",
        "description": "Peitri projects the smoky mist of Chodier Perper around a target ally within 20 meters. For 6 seconds, the ally's desires are suppressed: they cannot be feared, charmed, or provoked, and they gain 20% damage reduction."
      },
      "ultimate": {
        "name": "The Last Ambition",
        "description": "Peitri plants the Unwoven Staff into the ground and kneels. For 6 seconds, she cannot act, but she creates a 25‑meter radius field of perfect stillness. In the field: all enemies are frozen in time (cannot act, take no damage); all allies are healed to full health and have all debuffs removed. This ability can ONLY be used when Peitri has been in Detached state for at least 10 consecutive seconds."
      }
    },
    "images": {
      "icon": "../assets/images/heroes/peitri_meimorguse/icon.png",
      "selection": "../assets/images/heroes/peitri_meimorguse/real.png",
      "loading": "../assets/images/heroes/peitri_meimorguse/hero.png",
      "spriteRight": "../assets/images/heroes/peitri_meimorguse/sprite.png"
    },
    "colorPalette": {
      "primary": ["#8B4513", "#0B0B0B", "#F5F5F5"],
      "secondary": ["#A0522D", "#2F2F2F", "#E8E8E8"],
      "tertiary": ["#D2691E", "#696969", "#FFF8DC"],
      "quaternary": ["#C0C0C0", "#800000", "#DAA520"]
    },
    "projectile": null
  },
  {
    "id": 88,
    "name": "Siteh Mah",
    "role": "Mage",
    "titles": ["The Vessel of Impurity", "The Ash Queen"],
    "rank": "SS-Rank",
    "level": 340,
    "shortDescription": "An Indian witch who was burned alive by her own village for a beauty they coveted and could not possess, Siteh Mah survived the flames, her flesh scarred but her spirit unbroken. She embraced the title of 'evil witch,' becoming a queen of forbidden magic.",
    "stats": {
      "power": 9,
      "strength": 5,
      "offense": 9,
      "defense": 6,
      "stamina": 7,
      "physicalAtk": 5,
      "magicalAtk": 10,
      "physDef": 5,
      "magDef": 9,
      "speed": 7,
      "health": 170,
      "mana": 80,
      "manaReg": 1.8
    },
    "moves": {
      "basic": {
        "punch": "Cinder Blast",
        "kick": "Unveil"
      },
      "special": {
        "name": "Cursed Ash",
        "description": "Siteh throws a handful of cursed ash at an enemy within 15 meters, dealing 180% magical damage and applying 'Cursed' for 6 seconds – the target takes 50% reduced healing and cannot use movement abilities."
      },
      "ultimate": {
        "name": "The Pyre's Judgment",
        "description": "Siteh raises the grimoire, and the memory of her burning erupts in a 25‑meter radius for 8 seconds. Enemies in the radius take 150% fire/psychic damage per second, increased by 50% for each hidden sin they have (based on game data or manual tagging). Allies in the radius are healed for 10% of their max health per second, increased by 50% for each act of kindness they have performed. At the end of the duration, all enemies are 'Branded' – they take 20% increased damage from all sources for 15 seconds."
      }
    },
    "images": {
      "icon": "../assets/images/heroes/siteh_mah/icon.png",
      "selection": "../assets/images/heroes/siteh_mah/real.png",
      "loading": "../assets/images/heroes/siteh_mah/hero.png",
      "spriteRight": "../assets/images/heroes/siteh_mah/sprite.png"
    },
    "colorPalette": {
      "primary": ["#8B0000", "#2F2F2F", "#DAA520"],
      "secondary": ["#A52A2A", "#1A1A1A", "#B8860B"],
      "tertiary": ["#FF4500", "#696969", "#FFD700"],
      "quaternary": ["#000000", "#DC143C", "#FFA500"]
    },
    "projectile": null
  },
  {
    "id": 89,
    "name": "HuiHuwaLong Nexurfogus",
    "role": "Warrior",
    "titles": ["The Vessel of Glory", "The Fallen Champion"],
    "rank": "SS-Rank",
    "level": 310,
    "shortDescription": "A hero once beloved by all, HuiHuwaLong Nexurfogus was framed for a crime he never committed and cast into the gutters. He lost his title, his fortune, and his honor – but never his heart.",
    "stats": {
      "power": 8,
      "strength": 10,
      "offense": 8,
      "defense": 7,
      "stamina": 9,
      "physicalAtk": 9,
      "magicalAtk": 5,
      "physDef": 8,
      "magDef": 6,
      "speed": 6,
      "health": 240,
      "mana": 55,
      "manaReg": 0.8
    },
    "moves": {
      "basic": {
        "punch": "Starfall Strike",
        "kick": "Split Blades"
      },
      "special": {
        "name": "Dragon's Coil",
        "description": "Hui wraps his arm (with the dragonet) around an enemy within 10 meters, grappling them for 2 seconds. While grappled, the enemy is stunned and takes 100% physical damage per second."
      },
      "ultimate": {
        "name": "Rise Again",
        "description": "Hui slams Fallen Star's Edge into the ground, creating a 20‑meter radius shockwave of golden and shadow energy. All enemies in the radius take 350% physical damage and are knocked back 10 meters. If any ally has died within the last 10 seconds, they are revived at 40% health and gain a shield equal to 30% of Hui's max health for 10 seconds. This ability can only revive one ally per use."
      }
    },
    "images": {
      "icon": "../assets/images/heroes/huihuwalong_nexurfogus/icon.png",
      "selection": "../assets/images/heroes/huihuwalong_nexurfogus/real.png",
      "loading": "../assets/images/heroes/huihuwalong_nexurfogus/hero.png",
      "spriteRight": "../assets/images/heroes/huihuwalong_nexurfogus/sprite.png"
    },
    "colorPalette": {
      "primary": ["#008080", "#696969", "#8B0000"],
      "secondary": ["#20B2AA", "#A9A9A9", "#A52A2A"],
      "tertiary": ["#FFD700", "#FF8C00", "#C0C0C0"],
      "quaternary": ["#000000", "#FFA500", "#800000"]
    },
    "projectile": null
  },
  {
    "id": 90,
    "name": "Riririyi Fuefue Nexurfogus",
    "role": "Mage",
    "titles": ["The Vessel of Wisdom", "The Memory Keeper"],
    "rank": "SS-Rank",
    "level": 340,
    "shortDescription": "A mage and archivist who preserves forgotten lore, Riririyi Fuefue Nexurfogus is an activist for knowledge in a world that burns books. She sought out Meritzhuji Mantasis, the Great Peril of Wisdom, not for power but for understanding.",
    "stats": {
      "power": 8,
      "strength": 4,
      "offense": 8,
      "defense": 5,
      "stamina": 7,
      "physicalAtk": 4,
      "magicalAtk": 10,
      "physDef": 5,
      "magDef": 9,
      "speed": 7,
      "health": 160,
      "mana": 80,
      "manaReg": 2.0
    },
    "moves": {
      "basic": {
        "punch": "Snapshot",
        "kick": "Hologram"
      },
      "special": {
        "name": "Knowledge Share",
        "description": "Riri shares her stored knowledge with an ally within 20 meters, granting them 20% cooldown reduction and 15% increased damage for 8 seconds."
      },
      "ultimate": {
        "name": "The Unfinished Archive",
        "description": "Riri raises Chronoscribe, and a 25‑meter radius field of emerald and gold light erupts for 8 seconds. Inside the field: allies gain true sight (reveals stealth and illusions), 30% cooldown reduction, and 20% increased damage. Enemies have their hidden actions revealed (they cannot use stealth or deception abilities), are slowed by 40%, and take 100 magical damage per second. At the end of the duration, all enemies in the field are 'Archived' – they are revealed on the minimap for 15 seconds."
      }
    },
    "images": {
      "icon": "../assets/images/heroes/riririyi_fuefue_nexurfogus/icon.png",
      "selection": "../assets/images/heroes/riririyi_fuefue_nexurfogus/real.png",
      "loading": "../assets/images/heroes/riririyi_fuefue_nexurfogus/hero.png",
      "spriteRight": "../assets/images/heroes/riririyi_fuefue_nexurfogus/sprite.png"
    },
    "colorPalette": {
      "primary": ["#50C878", "#FFFFFF", "#FFD700"],
      "secondary": ["#3CB371", "#F5F5F5", "#DAA520"],
      "tertiary": ["#00FF7F", "#E0E0E0", "#B8860B"],
      "quaternary": ["#000000", "#9ACD32", "#FFA500"]
    },
    "projectile": null
  },
  {
    "id": 91,
    "name": "Alucard",
    "role": "Warrior",
    "titles": ["The Crimson Redeemer", "Vampire‑Born Lightbearer"],
    "rank": "SSS-Rank",
    "level": 300,
    "shortDescription": "Born of vampire blood but baptized in holy light, Alucard walks the razor's edge between two worlds. The sworn brother of VVitch X‑abar, he watched the heavens betray his kin and now hunts the darkness that once claimed him.",
    "stats": {
      "power": 8,
      "strength": 4,
      "offense": 8,
      "defense": 5,
      "stamina": 7,
      "physicalAtk": 4,
      "magicalAtk": 10,
      "physDef": 5,
      "magDef": 9,
      "speed": 7,
      "health": 160,
      "mana": 80,
      "manaReg": 2.0
    },
    "moves": {
      "basic": {
        "punch": "Judgment Slash",
        "kick": "Starlight Throw"
      },
      "special": {
        "name": "Redemption's Seal",
        "description": "Alucard places a holy seal on an enemy within 15 meters. For 6 seconds, the target takes 15% increased damage from all sources and cannot use stealth or invisibility. If the target is a demon or undead, the seal also silences them."
      },
      "ultimate": {
        "name": "Starfall",
        "description": "Alucard raises Deathstar skyward, channeling celestial energy for 2 seconds. He then slams the blade into the ground, summoning a rain of starry light in a 25‑meter radius for 5 seconds. Enemies in the area take 300% holy damage over the duration and are slowed by 50%. Allies in the area are healed for 200% of Alucard's magic power and have all debuffs removed."
      }
    },
    "images": {
      "icon": "../assets/images/heroes/alucard/icon.png",
      "selection": "../assets/images/heroes/alucard/real.png",
      "loading": "../assets/images/heroes/alucard/hero.png",
      "spriteRight": "../assets/images/heroes/alucard/sprite.png"
    },
    "colorPalette": {
      "primary": ["#8B0000", "#FFFFFF", "#FFD700"],
      "secondary": ["#DC143C", "#C0C0C0", "#A52A2A"],
      "tertiary": ["#800000", "#FFA500", "#D3D3D3"],
      "quaternary": ["#000000", "#FF6347", "#F5F5DC"]
    },
    "projectile": null
  },
  {
    "id": 92,
    "name": "Layla E‑korth",
    "role": "Marksman",
    "titles": ["The Malefic Artillerist", "Sister of the Neon Reaper"],
    "rank": "SS-Rank",
    "level": 192,
    "shortDescription": "The sister of Selvina E‑korth, Layla was taken alongside her sibling by a shadowy organization. Where Selvina became a vengeful ghost, Layla forged herself into a walking cannon of righteous fury.",
    "stats": {
      "power": 8,
      "strength": 6,
      "offense": 10,
      "defense": 5,
      "stamina": 7,
      "physicalAtk": 6,
      "magicalAtk": 10,
      "physDef": 5,
      "magDef": 7,
      "speed": 7,
      "health": 160,
      "mana": 75,
      "manaReg": 1.5
    },
    "moves": {
      "basic": {
        "punch": "Malefic Beam",
        "kick": "Mist Burst"
      },
      "special": {
        "name": "Corrupting Shot",
        "description": "Layla fires a special shot that deals 150% magic damage and applies 3 stacks of Corrupted Sin immediately. If the target already has 3 stacks, they are also silenced for 1.5 seconds."
      },
      "ultimate": {
        "name": "Skibidi Apocalypse",
        "description": "Layla overloads Skibidi Boom's core, causing it to emit a deafening 'SKIBIDI' sound and then release a massive wave of malefic energy in a 25‑meter radius for 5 seconds. Enemies in the radius take 300% magic damage over the duration and are 'Cursed' for 15 seconds: they cannot heal, and any damage they deal is reflected back to them at 30% effectiveness. Allies in the radius gain 50% damage reduction and have their cooldowns reduced by 30%."
      }
    },
    "images": {
      "icon": "../assets/images/heroes/layla_ekorth/icon.png",
      "selection": "../assets/images/heroes/layla_ekorth/real.png",
      "loading": "../assets/images/heroes/layla_ekorth/hero.png",
      "spriteRight": "../assets/images/heroes/layla_ekorth/sprite.png"
    },
    "colorPalette": {
      "primary": ["#87CEEB", "#FF8C00", "#FFFFFF"],
      "secondary": ["#DC143C", "#FF0000", "#00008B"],
      "tertiary": ["#1E90FF", "#FF4500", "#008080"],
      "quaternary": ["#000000", "#FFD700", "#FF1493"]
    },
    "projectile": {
      "speed": 12,
      "damageScale": 1.2,
      "image": "../assets/images/heroes/layla_ekorth/projectile.png"
    }
  },
  {
    "id": 93,
    "name": "Miya Elvensworth",
    "role": "Marksman",
    "titles": ["The Moonlit Queen", "Sovereign of the Silver Bough"],
    "rank": "SSS-Rank",
    "level": 350,
    "shortDescription": "Queen of the elves for a thousand years, yet her face holds the freshness of eternal youth. Miya Elvensworth is the living bridge between the fading magic of the old world and the desperate hope of the new.",
    "stats": {
      "power": 8,
      "strength": 6,
      "offense": 9,
      "defense": 7,
      "stamina": 8,
      "physicalAtk": 8,
      "magicalAtk": 9,
      "physDef": 7,
      "magDef": 8,
      "speed": 8,
      "health": 200,
      "mana": 75,
      "manaReg": 1.4
    },
    "moves": {
      "basic": {
        "punch": "Piercing Moonbeam",
        "kick": "Moonflower Barrage"
      },
      "special": {
        "name": "Vine Arrow",
        "description": "Miya fires a special arrow that, on impact, sprouts vines in a 6‑meter radius, rooting enemies for 2 seconds and dealing 120% magic damage. If the target is already Moonmarked, the root duration is doubled."
      },
      "ultimate": {
        "name": "Lunar Eclipse",
        "description": "Miya draws Moonstalker to its full extent and releases a single arrow into the sky. After 1.5 seconds, a beam of concentrated moonlight crashes down in a 20‑meter radius, lasting 5 seconds. Enemies in the beam take 400% magic damage over the duration and are silenced for 6 seconds. Allies in the beam have their cooldowns reduced by 50% and gain 30% increased damage. Additionally, all elven allies on the map receive a temporary shield equal to 20% of their max health."
      }
    },
    "images": {
      "icon": "../assets/images/heroes/miya_elvensworth/icon.png",
      "selection": "../assets/images/heroes/miya_elvensworth/real.png",
      "loading": "../assets/images/heroes/miya_elvensworth/hero.png",
      "spriteRight": "../assets/images/heroes/miya_elvensworth/sprite.png"
    },
    "colorPalette": {
      "primary": ["#98FB98", "#C0C0C0", "#2E8B57"],
      "secondary": ["#006400", "#ADFF2F", "#F0FFF0"],
      "tertiary": ["#3CB371", "#D3D3D3", "#00FF00"],
      "quaternary": ["#000000", "#9ACD32", "#008000"]
    },
    "projectile": {
      "speed": 10,
      "damageScale": 1.5,
      "image": "../assets/images/heroes/miya_elvensworth/projectile.png"
    }
  },
  {
    "id": 94,
    "name": "Saber",
    "role": "Warrior",
    "titles": ["The Code: Slash", "Zero-Point Assassin"],
    "rank": "SS-Rank",
    "level": 210,
    "shortDescription": "An 18‑year‑old cyborg assassin designed by the Forge Pact's top‑secret 'Omega Protocol', Saber is a living weapon wrapped in porcelain flesh. His twin energy katanas slice through reality itself, and his flying drone Mark 2999 serves as his eye in the sky.",
    "stats": {
      "power": 8,
      "strength": 7,
      "offense": 10,
      "defense": 7,
      "stamina": 8,
      "physicalAtk": 10,
      "magicalAtk": 4,
      "physDef": 7,
      "magDef": 6,
      "speed": 9,
      "health": 190,
      "mana": 55,
      "manaReg": 0.8
    },
    "moves": {
      "basic": {
        "punch": "Quick Draw",
        "kick": "Cross Parry"
      },
      "special": {
        "name": "Data Slash",
        "description": "Saber slashes with both katanas, dealing 180% physical damage to a single target and hacking their systems. The target's armor is reduced by 30% for 6 seconds, and they are revealed on the minimap. If the target is a construct or cyborg, they are also silenced for 2 seconds."
      },
      "ultimate": {
        "name": "Dual Slash: Void Rend",
        "description": "Saber leaps into the air and slashes downward with both katanas, creating an X‑shaped shockwave in a 20‑meter radius. Enemies in the area take 400% physical damage and are silenced for 4 seconds. Additionally, a temporary rift is torn in reality for 6 seconds, dealing 100 true damage per second to enemies inside and reducing their healing by 50%."
      }
    },
    "images": {
      "icon": "../assets/images/heroes/saber/icon.png",
      "selection": "../assets/images/heroes/saber/real.png",
      "loading": "../assets/images/heroes/saber/hero.png",
      "spriteRight": "../assets/images/heroes/saber/sprite.png"
    },
    "colorPalette": {
      "primary": ["#FFFF00", "#0B0B0B", "#ADFF2F"],
      "secondary": ["#808080", "#FFFFFF", "#C0C0C0"],
      "tertiary": ["#FFD700", "#1A1A1A", "#00FF00"],
      "quaternary": ["#000000", "#FF8C00", "#008000"]
    },
    "projectile": null
  },
  {
    "id": 95,
    "name": "Akai The Panda",
    "role": "Brawler",
    "titles": ["The Bamboo Storm", "Keeper of the Black Gourd"],
    "rank": "SS-Rank",
    "level": 215,
    "shortDescription": "A giant panda of twenty summers, Akai wanders the ancient roads of Kretos with a staff in one paw and a talking toad on his shoulder. Trained in the lost martial art of the Dragon-Bamboo Temple, he fights with a fluid, unpredictable style that blends crushing strikes with deceptive grace.",
    "stats": {
      "power": 8,
      "strength": 9,
      "offense": 8,
      "defense": 9,
      "stamina": 9,
      "physicalAtk": 9,
      "magicalAtk": 5,
      "physDef": 9,
      "magDef": 7,
      "speed": 6,
      "health": 270,
      "mana": 55,
      "manaReg": 0.7
    },
    "moves": {
      "basic": {
        "punch": "Bamboo Sweep",
        "kick": "Chi Thrust"
      },
      "special": {
        "name": "Bamboo Shield",
        "description": "Akai spins his staff rapidly, creating a shield that reduces incoming damage by 50% for 4 seconds and reflects 20% of melee damage back to attackers."
      },
      "ultimate": {
        "name": "Dragon‑Bamboo Tempest",
        "description": "Akai slams the staff into the ground, causing a whirlwind of bamboo shards and purple chi energy to erupt in a 20‑meter radius for 6 seconds. Enemies in the whirlwind take 300% physical damage over the duration, are slowed by 50%, and have their armor reduced by 30%. Allies in the whirlwind gain 30% increased attack speed and 20% movement speed."
      }
    },
    "images": {
      "icon": "../assets/images/heroes/akai_the_panda/icon.png",
      "selection": "../assets/images/heroes/akai_the_panda/real.png",
      "loading": "../assets/images/heroes/akai_the_panda/hero.png",
      "spriteRight": "../assets/images/heroes/akai_the_panda/sprite.png"
    },
    "colorPalette": {
      "primary": ["#800080", "#000000", "#FF0000"],
      "secondary": ["#4B0082", "#2F2F2F", "#00FFFF"],
      "tertiary": ["#8A2BE2", "#1A1A1A", "#FF4500"],
      "quaternary": ["#000000", "#DA70D6", "#32CD32"]
    },
    "projectile": null
  }
];

// Helper to get hero by ID
export function getHeroById(id) {
  return heroes.find((h) => h.id === id);
}

// Get hero stats normalized for fighting game
export function getHeroFighterStats(hero) {
  return {
    maxHealth: hero.stats.health || 1000,
    maxMana: hero.stats.mana || 500,
    attack: hero.stats.physicalAtk || 8,
    defense: hero.stats.physDef || 7,
    speed: hero.stats.speed || 7,
    moveNames: hero.moves || {},
  };
}
