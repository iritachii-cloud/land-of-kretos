class MonstersPage {
    static init(data) {
        this.data = data;
        this.renderAllMonsters();
    }

    static renderAllMonsters() {
        const container = document.getElementById('monstersGrid');
        if (!container) return;
        container.innerHTML = this.data.monsters.map(monster => this.renderMonsterCard(monster)).join('');
    }

    static renderMonsterCard(monster) {
        return `
            <div class="monster-card" data-monster-id="${monster.id}">
                <div class="monster-card-image" style="background-image: url('${monster.images.iconImage || 'assets/images/placeholders/monster_icon.png'}')">
                    <div class="monster-overlay"><div class="rating-badge">${monster.stats.ratings.overall}</div></div>
                </div>
                <div class="monster-card-content">
                    <h3>${monster.name}</h3>
                    <div class="rating">${monster.stats.ratings.overall}/10</div>
                </div>
            </div>
        `;
    }

    static filterMonsters(query) {
        const container = document.getElementById('monstersGrid');
        if (!query) {
            this.renderAllMonsters();
            return;
        }
        const results = this.data.monsters.filter(monster =>
            monster.name.toLowerCase().includes(query) ||
            monster.nicknames.some(nick => nick.toLowerCase().includes(query))
        );
        container.innerHTML = results.length ? results.map(m => this.renderMonsterCard(m)).join('') : '<div class="no-results">No monsters found 😢<br><small>Try secretcode1 for Malphas</small></div>';
    }
}

window.MonstersPage = MonstersPage;