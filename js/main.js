// js/main.js
class KretosApp {
    constructor() {
        this.data = { world: null, heroes: [], monsters: [], creators: [] };
        this.swipers = { 
            hero: null,
            kingdoms: null, 
            factions: null, 
            classes: null 
        };
    }

    async init() {
        await this.loadData();
        Navbar.init();
        ThemeManager.init();
        await HomePage.init(this.data);
        KretosModal.init();
        this.setupScrollAnimations();
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
            console.log('Data loaded successfully');
        } catch (error) {
            console.error('Failed to load data:', error);
            this.showError('Failed to load world data. Please check console.');
        }
    }

    showError(msg) {
        const main = document.querySelector('main');
        if (main) {
            main.innerHTML = `<div style="text-align:center;padding:4rem;color:var(--primary);"><h1>⚠️ ${msg}</h1></div>`;
        }
    }

    setupScrollAnimations() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) entry.target.classList.add('visible');
            });
        }, { threshold: 0.1 });
        document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));
    }

    getRandomItems(arr, count) {
        if (!arr || !arr.length) return [];
        const shuffled = [...arr];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled.slice(0, Math.min(count, shuffled.length));
    }

    destroySwiper(swiperKey) {
        if (this.swipers[swiperKey]) {
            this.swipers[swiperKey].destroy(true, true);
            this.swipers[swiperKey] = null;
        }
    }
}

const HomePage = {
    data: null,
    
    async init(data) {
        this.data = data;
        await this.renderHeroSlider();
        this.renderLegendaryHeroes();
        await this.renderWorldSections();
        this.renderMonsters();
        this.renderCreators();
    },

    async renderHeroSlider() {
        const heroes = kretosApp.getRandomItems(this.data.heroes, 62);
        const container = document.getElementById('heroSlider');
        if (!container) return;

        if (heroes.length === 0) {
            container.innerHTML = '<div class="swiper-slide">No heroes available</div>';
            return;
        }

        container.innerHTML = heroes.map(hero => `
            <div class="swiper-slide hero-slide">
                <div class="hero-bg" style="background-image: url('${hero.images?.herobg || 'assets/images/placeholders/hero_bg.jpg'}')"></div>
                <div class="hero-content">
                    <div class="hero-left">
                        <img src="${hero.images?.heropng || hero.images?.iconImage || 'assets/images/placeholders/hero_hero.png'}" class="hero-image" alt="${hero.name}">
                    </div>
                    <div class="hero-center">
                        <h1 class="hero-name">${hero.name}</h1>
                        <p class="hero-desc">${hero.shortDescription ? hero.shortDescription.substring(0, 120) : 'A legendary hero of Kretos'}...</p>
                        <button class="see-more-btn" data-kretos-hero-id="${hero.id}">👁️ See More</button>
                    </div>
                    <div class="hero-right">
                        <div class="stats-container">
                            ${Object.entries(hero.stats || {})
                                .filter(([k]) => !['ratings'].includes(k) && typeof hero.stats[k] === 'number')
                                .map(([k, v]) => `
                                    <div class="stat-item">
                                        <span class="stat-label">${k.charAt(0).toUpperCase() + k.slice(1)}</span>
                                        <div class="progress-bar-bg"><div class="progress-fill" data-value="${v}"></div></div>
                                        <span class="stat-value">${v}/10</span>
                                    </div>
                                `).join('')}
                        </div>
                    </div>
                </div>
            </div>
        `).join('');

        if (kretosApp.swipers.hero) {
            kretosApp.swipers.hero.destroy(true, true);
        }

        setTimeout(() => {
            kretosApp.swipers.hero = new Swiper('.hero-swiper', {
                slidesPerView: 1,
                effect: 'fade',
                fadeEffect: { crossFade: true },
                loop: heroes.length > 1,
                autoplay: { delay: 6000, disableOnInteraction: false },
                pagination: { el: '.hero-pagination', clickable: true },
                speed: 800
            });

            document.querySelectorAll('.progress-fill').forEach(bar => {
                const val = bar.dataset.value;
                if (val) bar.style.width = (val * 10) + '%';
            });
        }, 100);
    },

    renderLegendaryHeroes() {
        const heroes = kretosApp.getRandomItems(this.data.heroes, 5);
        const container = document.getElementById('legendaryHeroesGrid');
        if (!container) return;
        
        if (heroes.length === 0) {
            container.innerHTML = '<p>No heroes found</p>';
            return;
        }
        
        container.innerHTML = heroes.map(hero => `
            <div class="asymmetrical-card" data-kretos-hero-id="${hero.id}">
                <div class="hero-icon" style="background-image: url('${hero.images?.iconImage || 'assets/images/placeholders/hero_icon.png'}')"></div>
                <div class="rating-badge">${hero.stats?.ratings?.overall || '?'}</div>
                <div class="hero-card-content">
                    <h3>${hero.name}</h3>
                    <p class="short-desc">${hero.shortDescription ? hero.shortDescription.substring(0, 80) : ''}...</p>
                    <button class="learn-more-btn" data-kretos-hero-id="${hero.id}">Learn More →</button>
                </div>
            </div>
        `).join('');
    },

    async renderWorldSections() {
        const world = this.data.world;
        if (!world) return;

        // Kingdoms
        const kingdomsContainer = document.getElementById('kingdomsSwiper');
        if (kingdomsContainer && world.kingdoms && world.kingdoms.length) {
            kingdomsContainer.innerHTML = world.kingdoms.map(k => `
                <div class="swiper-slide">
                    <div class="kingdom-card" style="background-image: url('${k.image || 'assets/images/placeholders/kingdom_default.jpg'}')">
                        <div class="kingdom-overlay">
                            <h3>${this.escapeHtml(k.name)}</h3>
                            <p><strong>Region:</strong> ${this.escapeHtml(k.region)}</p>
                            <p>${this.escapeHtml(k.description ? k.description.substring(0, 100) : '')}...</p>
                        </div>
                    </div>
                </div>
            `).join('');
            
            setTimeout(() => {
                if (kretosApp.swipers.kingdoms) {
                    kretosApp.swipers.kingdoms.destroy(true, true);
                }
                kretosApp.swipers.kingdoms = new Swiper('.kingdoms-swiper', {
                    slidesPerView: 1,
                    spaceBetween: 30,
                    effect: 'coverflow',
                    coverflowEffect: { 
                        rotate: 30, 
                        stretch: 0, 
                        depth: 100, 
                        modifier: 1, 
                        slideShadows: true 
                    },
                    navigation: { 
                        nextEl: '.kingdoms-swiper .swiper-button-next', 
                        prevEl: '.kingdoms-swiper .swiper-button-prev' 
                    },
                    breakpoints: { 
                        768: { slidesPerView: 1 }, 
                        1024: { slidesPerView: 1 } 
                    },
                    loop: world.kingdoms.length > 1
                });
            }, 100);
        }

        // Factions
        const factionsContainer = document.getElementById('factionsSwiper');
        if (factionsContainer && world.factions && world.factions.length) {
            factionsContainer.innerHTML = world.factions.map(f => `
                <div class="swiper-slide">
                    <div class="faction-card">
                        <img src="${f.image || 'assets/images/placeholders/faction_default.jpg'}" alt="${this.escapeHtml(f.name)}">
                        <div class="faction-info">
                            <span class="alignment">${this.escapeHtml(f.alignment)}</span>
                            <h3>${this.escapeHtml(f.name)}</h3>
                            <p>${this.escapeHtml(f.description)}</p>
                        </div>
                    </div>
                </div>
            `).join('');
            
            setTimeout(() => {
                if (kretosApp.swipers.factions) {
                    kretosApp.swipers.factions.destroy(true, true);
                }
                kretosApp.swipers.factions = new Swiper('.factions-swiper', {
                    slidesPerView: 1,
                    effect: 'cube',
                    cubeEffect: { 
                        shadow: false, 
                        slideShadows: false 
                    },
                    navigation: { 
                        nextEl: '.factions-swiper .swiper-button-next', 
                        prevEl: '.factions-swiper .swiper-button-prev' 
                    },
                    loop: world.factions.length > 1
                });
            }, 100);
        }

        // Classes
        const classesContainer = document.getElementById('classesSwiper');
        if (classesContainer && world.classes && world.classes.length) {
            classesContainer.innerHTML = world.classes.map(c => `
                <div class="swiper-slide">
                    <div class="class-card">
                        <img src="${c.image || 'assets/images/placeholders/class_default.jpg'}" alt="${this.escapeHtml(c.name)}">
                        <div class="class-details">
                            <span class="class-type">${this.escapeHtml(c.type)}</span>
                            <h3>${this.escapeHtml(c.name)}</h3>
                            <p>${this.escapeHtml(c.description)}</p>
                        </div>
                    </div>
                </div>
            `).join('');
            
            setTimeout(() => {
                if (kretosApp.swipers.classes) {
                    kretosApp.swipers.classes.destroy(true, true);
                }
                kretosApp.swipers.classes = new Swiper('.classes-swiper', {
                    slidesPerView: 1,
                    effect: 'flip',
                    flipEffect: { 
                        slideShadows: true 
                    },
                    navigation: { 
                        nextEl: '.classes-swiper .swiper-button-next', 
                        prevEl: '.classes-swiper .swiper-button-prev' 
                    },
                    loop: world.classes.length > 1
                });
            }, 100);
        }
    },

    escapeHtml(str) {
        if (!str) return '';
        const div = document.createElement('div');
        div.textContent = str;
        return div.innerHTML;
    },

    renderMonsters() {
        const monsters = kretosApp.getRandomItems(this.data.monsters, 6);
        const container = document.getElementById('homeMonstersGrid');
        if (!container) return;
        
        if (monsters.length === 0) {
            container.innerHTML = '<p>No monsters found</p>';
            return;
        }
        
        container.innerHTML = monsters.map(monster => `
            <div class="asymmetrical-card" data-kretos-monster-id="${monster.id}">
                <div class="monster-icon" style="background-image: url('${monster.images?.iconImage || 'assets/images/placeholders/monster_icon.png'}')"></div>
                <div class="rating-badge">${monster.stats?.ratings?.overall || '?'}</div>
                <div class="hero-card-content">
                    <h3>${this.escapeHtml(monster.name)}</h3>
                    <p class="short-desc">${monster.shortDescription ? this.escapeHtml(monster.shortDescription.substring(0, 80)) : ''}...</p>
                    <button class="learn-more-btn" data-kretos-monster-id="${monster.id}">Learn More →</button>
                </div>
            </div>
        `).join('');
    },

    renderCreators() {
        const creators = this.data.creators;
        const container = document.getElementById('creatorsGrid');
        if (!container || !creators) return;
        
        container.innerHTML = creators.map(c => `
            <div class="creator-card" data-kretos-creator-id="${c.id}">
                <img src="${c.avatar || 'assets/images/placeholders/creator_default.jpg'}" class="creator-avatar" alt="${this.escapeHtml(c.name)}">
                <h3>${this.escapeHtml(c.name)}</h3>
                <p class="creator-role">${this.escapeHtml(c.role)}</p>
                <button class="learn-more-btn" data-kretos-creator-id="${c.id}">Meet ${this.escapeHtml(c.name.split(' ')[0])}</button>
            </div>
        `).join('');
    }
};

// ---------- Namespaced Modal Manager (no conflict with heroes page) ----------
const KretosModal = {
    init() {
        this.setupEventListeners();
    },

    setupEventListeners() {
        document.addEventListener('click', (e) => {
            // Hero buttons
            const heroBtn = e.target.closest('[data-kretos-hero-id]');
            if (heroBtn) {
                e.preventDefault();
                const heroId = parseInt(heroBtn.dataset.kretosHeroId);
                const hero = kretosApp.data.heroes.find(h => h.id === heroId);
                if (hero) this.showHeroModal(hero);
                return;
            }
            
            // Monster buttons
            const monsterBtn = e.target.closest('[data-kretos-monster-id]');
            if (monsterBtn) {
                e.preventDefault();
                const monsterId = parseInt(monsterBtn.dataset.kretosMonsterId);
                const monster = kretosApp.data.monsters.find(m => m.id === monsterId);
                if (monster) this.showMonsterModal(monster);
                return;
            }
            
            // Creator buttons
            const creatorBtn = e.target.closest('[data-kretos-creator-id]');
            if (creatorBtn) {
                e.preventDefault();
                const creatorId = parseInt(creatorBtn.dataset.kretosCreatorId);
                const creator = kretosApp.data.creators.find(c => c.id === creatorId);
                if (creator) this.showCreatorModal(creator);
                return;
            }
            
            // Close modals
            if (e.target.classList.contains('close') || e.target.classList.contains('modal')) {
                this.closeAllModals();
            }
        });
    },

    showHeroModal(hero) {
        const modal = document.getElementById('heroModal');
        if (!modal) return;
        
        const modalBody = modal.querySelector('.modal-body');
        modalBody.innerHTML = this.renderHeroModal(hero);
        modal.style.display = 'flex';
        
        setTimeout(() => {
            modal.querySelectorAll('.progress-fill').forEach(bar => {
                const val = bar.dataset.value;
                if (val) bar.style.width = (val * 10) + '%';
            });
        }, 100);
        
        this.setupImageTabs(hero.images);
    },

    renderHeroModal(hero) {
        const statsHtml = Object.entries(hero.stats || {})
            .filter(([k]) => !['ratings'].includes(k) && typeof hero.stats[k] === 'number')
            .map(([k, v]) => `
                <div class="stat-item">
                    <span class="stat-label">${k.charAt(0).toUpperCase() + k.slice(1)}</span>
                    <div class="progress-bar-bg">
                        <div class="progress-fill" data-value="${v}"></div>
                    </div>
                    <span class="stat-value">${v}/10</span>
                </div>
            `).join('');
        
        return `
            <div class="modal-grid">
                <div class="image-section">
                    <div class="image-tabs">
                        <button class="image-tab active" data-tab="normal">Normal</button>
                        <button class="image-tab" data-tab="real">Real</button>
                        <button class="image-tab" data-tab="90">90's</button>
                    </div>
                    <img src="${hero.images?.normalImage || 'assets/images/placeholders/hero_normal.png'}" class="modal-hero-image" id="modalMainImage" alt="${hero.name}">
                </div>
                <div class="info-section">
                    <div class="info-row">
                        <h2>${this.escapeHtml(hero.name)}</h2>
                        <div class="rank-level">
                            <span class="rank">${hero.rank || 'Unknown'}</span>
                            <span class="level">Lv.${hero.level || '?'}</span>
                        </div>
                    </div>
                    <div class="info-row">
                        <h4>⭐ Rating: ${hero.stats?.ratings?.overall || '?'}/10</h4>
                    </div>
                    <div class="info-row">
                        <h4>Nicknames</h4>
                        <p>${hero.nicknames ? hero.nicknames.join(', ') : '—'}</p>
                    </div>
                    <div class="info-row">
                        <h4>Titles</h4>
                        <p>${hero.titles ? hero.titles.join(' • ') : '—'}</p>
                    </div>
                    <div class="stats-section">
                        ${statsHtml}
                    </div>
                    <!-- DEEP LINK: pass hero id to heroes page -->
                    <a href="heroes.html?id=${hero.id}" class="full-details-btn">Full Details →</a>
                </div>
            </div>
        `;
    },

    showMonsterModal(monster) {
        const modal = document.getElementById('monsterModal');
        if (!modal) return;
        
        const modalBody = modal.querySelector('.modal-body');
        modalBody.innerHTML = this.renderMonsterModal(monster);
        modal.style.display = 'flex';
        
        setTimeout(() => {
            modal.querySelectorAll('.progress-fill').forEach(bar => {
                const val = bar.dataset.value;
                if (val) bar.style.width = (val * 10) + '%';
            });
        }, 100);
        
        this.setupImageTabs(monster.images);
    },

    renderMonsterModal(monster) {
        const statsHtml = Object.entries(monster.stats || {})
            .filter(([k]) => !['ratings'].includes(k) && typeof monster.stats[k] === 'number')
            .map(([k, v]) => `
                <div class="stat-item">
                    <span class="stat-label">${k.charAt(0).toUpperCase() + k.slice(1)}</span>
                    <div class="progress-bar-bg">
                        <div class="progress-fill" data-value="${v}"></div>
                    </div>
                    <span class="stat-value">${v}/10</span>
                </div>
            `).join('');
        
        return `
            <div class="modal-grid">
                <div class="image-section">
                    <div class="image-tabs">
                        <button class="image-tab active" data-tab="normal">Normal</button>
                        <button class="image-tab" data-tab="real">Real</button>
                        <button class="image-tab" data-tab="90">90's</button>
                    </div>
                    <img src="${monster.images?.normalImage || 'assets/images/placeholders/monster_normal.png'}" class="modal-monster-image" id="modalMainImage" alt="${monster.name}">
                </div>
                <div class="info-section">
                    <div class="info-row">
                        <h2>${this.escapeHtml(monster.name)}</h2>
                        <div>
                            <span class="rank">${monster.rank || 'Unknown'}</span>
                            <span class="level">Lv.${monster.level || '?'}</span>
                        </div>
                    </div>
                    <div class="info-row">
                        <h4>⭐ Rating: ${monster.stats?.ratings?.overall || '?'}/10</h4>
                    </div>
                    <div class="info-row">
                        <h4>Type</h4>
                        <p>${monster.type || 'Unknown'}</p>
                    </div>
                    <div class="info-row">
                        <h4>Found In</h4>
                        <p>${monster.foundIn ? monster.foundIn.join(', ') : '—'}</p>
                    </div>
                    <div class="stats-section">
                        ${statsHtml}
                    </div>
                    <a href="monsters.html?id=${monster.id}" class="full-details-btn">Full Details →</a>
                </div>
            </div>
        `;
    },

    showCreatorModal(creator) {
        const modal = document.getElementById('creatorModal');
        if (!modal) return;
        
        const modalBody = modal.querySelector('.modal-body');
        modalBody.innerHTML = `
            <div class="creator-modal-content">
                <img src="${creator.avatar || 'assets/images/placeholders/creator_default.jpg'}" class="creator-large-avatar" alt="${this.escapeHtml(creator.name)}">
                <div>
                    <h2>${this.escapeHtml(creator.name)}</h2>
                    <p><strong>${this.escapeHtml(creator.role)}</strong></p>
                    <p>${creator.bio ? this.escapeHtml(creator.bio) : ''}</p>
                    <div class="qa-item">
                        <strong>Motto:</strong> "${creator.motto ? this.escapeHtml(creator.motto) : '—'}"
                    </div>
                    ${(creator.qa || []).map(q => `
                        <div class="qa-item">
                            <strong>Q: ${this.escapeHtml(q.question)}</strong><br>
                            A: ${this.escapeHtml(q.answer)}
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
        modal.style.display = 'flex';
    },

    setupImageTabs(images) {
        if (!images) return;
        
        const tabs = document.querySelectorAll('.image-tab');
        const imgEl = document.getElementById('modalMainImage');
        if (!imgEl || !tabs.length) return;
        
        tabs.forEach(tab => {
            tab.removeEventListener('click', this.imageTabHandler);
            this.imageTabHandler = (e) => {
                const type = tab.dataset.tab;
                let src = images.normalImage;
                if (type === 'real') src = images.realImage;
                if (type === '90') src = images['90sImage'];
                if (type === 'full') src = images.fullBodyImage;
                if (type === 'half') src = images.halfImage;
                if (src) imgEl.src = src;
                tabs.forEach(t => t.classList.remove('active'));
                tab.classList.add('active');
            };
            tab.addEventListener('click', this.imageTabHandler);
        });
    },

    escapeHtml(str) {
        if (!str) return '';
        const div = document.createElement('div');
        div.textContent = str;
        return div.innerHTML;
    },

    closeAllModals() {
        document.querySelectorAll('.modal').forEach(m => m.style.display = 'none');
    }
};

// Initialize app
document.addEventListener('DOMContentLoaded', async () => {
    window.kretosApp = new KretosApp();
    await window.kretosApp.init();
});