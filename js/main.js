// Global state
window.appData = null;
window.currentModalItems = [];
window.currentModalIndex = 0;
window.currentModalType = null; // 'hero' or 'monster'
window.activeImageTab = 'normalImage'; // default tab

// Theme handling
function initTheme() {
    const stored = localStorage.getItem('theme');
    if (stored === 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark');
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
    }
}
function toggleTheme() {
    const current = document.documentElement.getAttribute('data-theme');
    const newTheme = current === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
}
initTheme();

// Fetch data
async function loadData() {
    try {
        const res = await fetch('data.json');
        const data = await res.json();
        window.appData = data;
        return data;
    } catch (err) {
        console.error('Failed to load data.json', err);
        return null;
    }
}

// Helper: get rating stars
function getStars(rating, max=10) {
    const full = Math.floor(rating);
    let stars = '';
    for(let i=0; i<full; i++) stars += '★';
    for(let i=full; i<5; i++) stars += '☆';
    return stars;
}

// Helper: create stat bar HTML
function renderStats(stats) {
    let html = '<div class="stats-container">';
    for(let [key, val] of Object.entries(stats)) {
        if(typeof val === 'number' && val <= 10) {
            const percent = (val/10)*100;
            html += `
                <div class="stat-item">
                    <span>${key}: ${val}</span>
                    <div class="stat-bar"><div class="stat-fill" style="width:${percent}%"></div></div>
                </div>
            `;
        }
    }
    html += '</div>';
    return html;
}

// Modal navigation
function showModal(type, items, startIndex) {
    window.currentModalType = type;
    window.currentModalItems = items;
    window.currentModalIndex = startIndex;
    renderModalContent();
    document.getElementById('global-modal').style.display = 'flex';
}
function renderModalContent() {
    const item = window.currentModalItems[window.currentModalIndex];
    const type = window.currentModalType;
    const container = document.querySelector('#global-modal .modal-content-wrapper');
    if(type === 'hero') {
        container.innerHTML = renderHeroFullModal(item);
    } else if(type === 'monster') {
        container.innerHTML = renderMonsterFullModal(item);
    }
    // attach image tab listeners
    document.querySelectorAll('.image-tab').forEach(tab => {
        tab.addEventListener('click', (e) => {
            const variant = tab.dataset.variant;
            window.activeImageTab = variant;
            renderModalContent(); // re-render with active tab
        });
    });
}
function nextModal() {
    if(window.currentModalIndex < window.currentModalItems.length - 1) {
        window.currentModalIndex++;
        renderModalContent();
    }
}
function prevModal() {
    if(window.currentModalIndex > 0) {
        window.currentModalIndex--;
        renderModalContent();
    }
}

// Hero full modal renderer (used on heroes page and homepage summary)
function renderHeroFullModal(hero) {
    const imgVariant = hero.images[window.activeImageTab] || hero.images.normalImage || 'assets/images/placeholders/hero_icon.png';
    return `
        <div class="modal-two-column">
            <div class="modal-left">
                <img src="${imgVariant}" alt="${hero.name}" style="width:100%; border-radius:1rem;">
                <div class="image-tabs">
                    <button class="image-tab" data-variant="normalImage">Normal</button>
                    <button class="image-tab" data-variant="realImage">Real</button>
                    <button class="image-tab" data-variant="90sImage">90s</button>
                    <button class="image-tab" data-variant="fullBodyImage">Full</button>
                    <button class="image-tab" data-variant="halfImage">Half</button>
                </div>
            </div>
            <div class="modal-right">
                <h2>${hero.name}</h2>
                <p class="nickname">${hero.nicknames ? hero.nicknames.join(', ') : ''}</p>
                <div class="rating">${getStars(hero.stats.ratings.overall)} ${hero.stats.ratings.overall}/10</div>
                <p>${hero.shortDescription}</p>
                <h3>Stats</h3>
                ${renderStats(hero.stats)}
                <h3>Titles</h3>
                <ul>${hero.titles.map(t => `<li>${t}</li>`).join('')}</ul>
                <h3>Lore</h3>
                <p>${hero.lore}</p>
                <a href="heroes.html?hero=${hero.id}" class="btn">Full Profile →</a>
            </div>
        </div>
    `;
}

// Monster full modal renderer
function renderMonsterFullModal(monster) {
    const imgVariant = monster.images[window.activeImageTab] || monster.images.normalImage || 'assets/images/placeholders/monster_icon.png';
    return `
        <div class="modal-two-column">
            <div class="modal-left">
                <img src="${imgVariant}" alt="${monster.name}" style="width:100%; border-radius:1rem;">
                <div class="image-tabs">
                    <button class="image-tab" data-variant="normalImage">Normal</button>
                    <button class="image-tab" data-variant="realImage">Real</button>
                    <button class="image-tab" data-variant="90sImage">90s</button>
                    <button class="image-tab" data-variant="fullBodyImage">Full</button>
                    <button class="image-tab" data-variant="halfImage">Half</button>
                </div>
            </div>
            <div class="modal-right">
                <h2>${monster.name}</h2>
                <p>${monster.nicknames ? monster.nicknames.join(', ') : ''}</p>
                <div>Rank: ${monster.rank} | Level: ${monster.level}</div>
                <div class="rating">${getStars(monster.stats.ratings.overall)} ${monster.stats.ratings.overall}/10</div>
                <p>${monster.shortDescription}</p>
                <h3>Stats</h3>
                ${renderStats(monster.stats)}
                <h3>Lore</h3>
                <p>${monster.lore}</p>
                <a href="monsters.html?monster=${monster.id}" class="btn">Full Profile →</a>
            </div>
        </div>
    `;
}

// Global event listeners after DOM
document.addEventListener('DOMContentLoaded', () => {
    // attach modal close and nav
    const modalOverlay = document.getElementById('global-modal');
    if(modalOverlay) {
        modalOverlay.querySelector('.modal-close').addEventListener('click', () => {
            modalOverlay.style.display = 'none';
        });
        modalOverlay.addEventListener('click', (e) => {
            if(e.target === modalOverlay) modalOverlay.style.display = 'none';
        });
        const prevBtn = modalOverlay.querySelector('.modal-nav.prev');
        const nextBtn = modalOverlay.querySelector('.modal-nav.next');
        if(prevBtn) prevBtn.addEventListener('click', prevModal);
        if(nextBtn) nextBtn.addEventListener('click', nextModal);
    }
});