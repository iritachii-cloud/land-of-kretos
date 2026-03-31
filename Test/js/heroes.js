document.addEventListener('DOMContentLoaded', async () => {
    const data = await loadData();
    if(!data) return;
    const heroes = data.heroes;
    const grid = document.getElementById('heroes-grid');
    const searchInput = document.getElementById('hero-search');

    function renderHeroes(filtered) {
        grid.innerHTML = filtered.map(hero => `
            <div class="hero-card" data-id="${hero.id}">
                <img src="${hero.images.iconImage}" alt="${hero.name}">
                <h3>${hero.name}</h3>
                <div class="rating-stars">${getStars(hero.stats.ratings.overall)}</div>
            </div>
        `).join('');
    }
    renderHeroes(heroes);

    searchInput.addEventListener('input', () => {
        const term = searchInput.value.trim();
        if(term.startsWith('secretcode')) {
            const id = parseInt(term.replace('secretcode', ''));
            const hero = heroes.find(h => h.id === id);
            if(hero) {
                showModal('hero', heroes, heroes.indexOf(hero));
                searchInput.value = '';
            } else {
                alert('No hero found with that code');
            }
            return;
        }
        const filtered = heroes.filter(h => h.name.toLowerCase().includes(term.toLowerCase()));
        renderHeroes(filtered);
    });

    grid.addEventListener('click', (e) => {
        const card = e.target.closest('.hero-card');
        if(card) {
            const id = parseInt(card.dataset.id);
            const hero = heroes.find(h => h.id === id);
            showModal('hero', heroes, heroes.indexOf(hero));
        }
    });
});