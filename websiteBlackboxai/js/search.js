class SearchManager {
    static init() {
        const heroesSearch = document.getElementById('heroesSearch');
        const monstersSearch = document.getElementById('monstersSearch');
        if (heroesSearch) heroesSearch.addEventListener('input', debounce(e => this.handleHeroSearch(e), 300));
        if (monstersSearch) monstersSearch.addEventListener('input', debounce(e => this.handleMonsterSearch(e), 300));
    }

    static handleHeroSearch(e) {
        const query = e.target.value.toLowerCase().trim();
        if (query.startsWith('secretcode')) {
            const id = parseInt(query.replace('secretcode', ''));
            const hero = kretosApp.data.heroes.find(h => h.id === id);
            if (hero) {
                const container = document.getElementById('heroesGrid');
                if (container) container.innerHTML = HeroesPage.renderHeroCard(hero);
            }
            return;
        }
        HeroesPage.filterHeroes(query);
    }

    static handleMonsterSearch(e) {
        const query = e.target.value.toLowerCase().trim();
        if (query.startsWith('secretcode')) {
            const id = parseInt(query.replace('secretcode', ''));
            const monster = kretosApp.data.monsters.find(m => m.id === id);
            if (monster) {
                const container = document.getElementById('monstersGrid');
                if (container) container.innerHTML = MonstersPage.renderMonsterCard(monster);
            }
            return;
        }
        MonstersPage.filterMonsters(query);
    }
}

function debounce(func, wait) {
    let timeout;
    return function(...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), wait);
    };
}

window.SearchManager = SearchManager;