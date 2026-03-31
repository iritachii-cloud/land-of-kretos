class HeroesPage {
    static init(data) {
        this.data = data;
        this.renderAllHeroes();
    }

    static renderAllHeroes() {
        const container = document.getElementById('heroesGrid');
        if (!container) return;
        container.innerHTML = this.data.heroes.map(hero => this.renderHeroCard(hero)).join('');
    }

    static renderHeroCard(hero) {
        return `
            <div class="hero-card" data-hero-id="${hero.id}">
                <div class="hero-card-image" style="background-image: url('${hero.images.iconImage || 'assets/images/placeholders/hero_icon.png'}')">
                    <div class="hero-overlay"><div class="rating-badge">${hero.stats.ratings.overall}</div></div>
                </div>
                <div class="hero-card-content">
                    <h3>${hero.name}</h3>
                    <div class="rating">${hero.stats.ratings.overall}/10</div>
                </div>
            </div>
        `;
    }

    static filterHeroes(query) {
        const container = document.getElementById('heroesGrid');
        if (!query) {
            this.renderAllHeroes();
            return;
        }
        const results = this.data.heroes.filter(hero =>
            hero.name.toLowerCase().includes(query) ||
            hero.nicknames.some(nick => nick.toLowerCase().includes(query))
        );
        container.innerHTML = results.length ? results.map(h => this.renderHeroCard(h)).join('') : '<div class="no-results">No heroes found 😢<br><small>Try secretcode1 for VVitch X-abar</small></div>';
    }
}

window.HeroesPage = HeroesPage;