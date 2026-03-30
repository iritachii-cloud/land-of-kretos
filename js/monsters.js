document.addEventListener('DOMContentLoaded', async () => {
    const data = await loadData();
    if(!data) return;
    const monsters = data.monsters;
    const grid = document.getElementById('monsters-grid');
    const searchInput = document.getElementById('monster-search');

    function renderMonsters(filtered) {
        grid.innerHTML = filtered.map(monster => `
            <div class="monster-card" data-id="${monster.id}">
                <img src="${monster.images.iconImage}" alt="${monster.name}">
                <h3>${monster.name}</h3>
                <div class="rating-stars">${getStars(monster.stats.ratings.overall)}</div>
            </div>
        `).join('');
    }
    renderMonsters(monsters);

    searchInput.addEventListener('input', () => {
        const term = searchInput.value.trim();
        if(term.startsWith('secretcode')) {
            const id = parseInt(term.replace('secretcode', ''));
            const monster = monsters.find(m => m.id === id);
            if(monster) {
                showModal('monster', monsters, monsters.indexOf(monster));
                searchInput.value = '';
            } else {
                alert('No monster found with that code');
            }
            return;
        }
        const filtered = monsters.filter(m => m.name.toLowerCase().includes(term.toLowerCase()));
        renderMonsters(filtered);
    });

    grid.addEventListener('click', (e) => {
        const card = e.target.closest('.monster-card');
        if(card) {
            const id = parseInt(card.dataset.id);
            const monster = monsters.find(m => m.id === id);
            showModal('monster', monsters, monsters.indexOf(monster));
        }
    });
});