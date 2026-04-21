export const stages = [
    {
        id: 1,
        name: "Throne of Nyxara",
        description: "Obsidian throne room of the Demon King",
        kingdomId: 2,
        background: "assets/images/stages/nyxara_throne.png",
        music: "nyxara_theme"
    },
    {
        id: 2,
        name: "Neon Wastes",
        description: "Mekhanika's industrial underbelly",
        kingdomId: 5,
        background: "assets/images/stages/neon_wastes.png",
        music: "mekhanika_theme"
    },
    {
        id: 3,
        name: "Sacred Vale",
        description: "Aethelgard's misty canyon",
        kingdomId: 1,
        background: "assets/images/stages/sacred_vale.png",
        music: "aethelgard_theme"
    },
    {
        id: 4,
        name: "Molten Caldera",
        description: "Flamma's volcanic heart",
        kingdomId: 3,
        background: "assets/images/stages/molten_caldera.png",
        music: "flamma_theme"
    },
    {
        id: 5,
        name: "Frozen Sea",
        description: "Glaciar's icy expanse",
        kingdomId: 4,
        background: "assets/images/stages/frozen_sea.png",
        music: "glaciar_theme"
    },
    {
        id: 6,
        name: "Wild Zones",
        description: "Untamed prehistoric jungle",
        kingdomId: 6,
        background: "assets/images/stages/wild_zones.png",
        music: "wild_theme"
    }
];

export function getStageById(id) {
    return stages.find(s => s.id === id);
}