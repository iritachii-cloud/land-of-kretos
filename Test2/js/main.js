class KretosApp {
    constructor() {
        this.data = { world: null, heroes: [], monsters: [], creators: [] };
        this.currentTheme = localStorage.getItem('kretos-theme') || 'light';
    }

    async init() {
        await this.loadData();
        Navbar.init();
        ThemeManager.init();
        
        if (document.querySelector('.home-main')) {
            await HomePage.init(this.data);
        } else if (document.querySelector('.heroes-main')) {
            HeroesPage.init(this.data);
        } else if (document.querySelector('.monsters-main')) {
            MonstersPage.init(this.data);
        }
        
        if (typeof ModalManager !== 'undefined') ModalManager.init();
        if (typeof SearchManager !== 'undefined') SearchManager.init();
    }

    async loadData() {
        try {
            const [worldRes, heroesRes, monstersRes, creatorsRes] = await Promise.all([
                fetch('data/world.json'),
                fetch('data/heroes.json'),
                fetch('data/monsters.json'),
                fetch('data/creators.json')
            ]);
            this.data.world = (await worldRes.json()).world;
            this.data.heroes = (await heroesRes.json()).heroes;
            this.data.monsters = (await monstersRes.json()).monsters;
            this.data.creators = (await creatorsRes.json()).creators;
            window.kretosData = this.data;
            console.log('✅ All data loaded');
        } catch (error) {
            console.error('❌ Data load failed:', error);
            this.showError('Failed to load world data');
        }
    }

    showError(message) {
        document.body.innerHTML = `<div style="text-align:center;padding:4rem;color:var(--primary);"><h1>⚠️ ${message}</h1><p>Check console or data files</p></div>`;
    }

    getRandomHeroes(count = 7) {
        if (!this.data.heroes.length) return [];
        const shuffled = [...this.data.heroes].sort(() => Math.random() - 0.5);
        return shuffled.slice(0, Math.min(count, shuffled.length));
    }

    getRandomLegendaryHeroes(count = 5) {
        return this.getRandomHeroes(count);
    }

    getRandomMonsters(count = 6) {
        if (!this.data.monsters.length) return [];
        const shuffled = [...this.data.monsters].sort(() => Math.random() - 0.5);
        return shuffled.slice(0, Math.min(count, shuffled.length));
    }
}

document.addEventListener('DOMContentLoaded', async () => {
    window.kretosApp = new KretosApp();
    await window.kretosApp.init();
});