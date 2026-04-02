// ==========================================================================
// HOMEPAGE.JS - Complete Homepage Functionality
// Version: 2.1.0
// Description: Hero slider with animated progress bars, legendary heroes,
//              world swipers (kingdoms, factions, classes), monsters, creators
// ==========================================================================

class HomePage {
    static async init(data) {
        this.data = data;
        await this.initHeroSlider();
        await this.initLegendaryHeroes();
        await this.initWorldSections();
        await this.initHomeMonsters();
        await this.initCreators();
    }

    // ----------------------------------------------------------------------
    // 1. HERO SLIDER (with progress bar re-animation on slide change)
    // ----------------------------------------------------------------------
    static async initHeroSlider() {
        const randomHeroes = kretosApp.getRandomHeroes(7);
        const heroWrapper = document.getElementById('heroSlider');
        if (!heroWrapper) return;

        // Build hero slides HTML
        heroWrapper.innerHTML = randomHeroes.map(hero => `
            <div class="swiper-slide hero-slide" data-hero-id="${hero.id}">
                <div class="hero-bg" style="background-image: url('${hero.images.herobg || 'assets/images/placeholders/hero_bg.png'}')"></div>
                <div class="hero-content">
                    <div class="hero-left">
                        <img src="${hero.images.heropng || 'assets/images/placeholders/hero_hero.png'}" alt="${hero.name}" class="hero-image wobble">
                    </div>
                    <div class="hero-center">
                        <h1 class="hero-name">${hero.name}</h1>
                        <p class="hero-desc">${hero.shortDescription?.substring(0, 150) || ''}...</p>
                        <button class="see-more-btn" data-hero-id="${hero.id}">👁️ See More</button>
                    </div>
                    <div class="hero-right">
                        <div class="stats-container">
                            ${Object.entries(hero.stats)
                                .filter(([key]) => !['ratings'].includes(key) && typeof hero.stats[key] === 'number')
                                .map(([key, value]) => `
                                    <div class="stat-item">
                                        <span class="stat-label">${this.formatStatLabel(key)}</span>
                                        <div class="progress-container">
                                            <div class="progress-bar">
                                                <div class="progress-fill" data-value="${value}" style="width: 0%"></div>
                                            </div>
                                        </div>
                                        <span class="stat-value">${value}/10</span>
                                    </div>
                                `).join('')}
                        </div>
                    </div>
                </div>
            </div>
        `).join('');

        // Helper function to animate progress bars on the currently active slide
        const animateProgressBars = () => {
            const activeSlide = document.querySelector('.hero-swiper .swiper-slide-active');
            if (!activeSlide) return;
            const progressBars = activeSlide.querySelectorAll('.progress-fill');
            progressBars.forEach(bar => {
                const value = bar.dataset.value;
                if (value) {
                    // Reset to 0
                    bar.style.width = '0%';
                    // Force reflow to restart transition
                    void bar.offsetHeight;
                    // Animate to target width (value * 10 = percentage)
                    bar.style.width = (value * 10) + '%';
                }
            });
        };

        // Initialize Swiper with event handlers
        const heroSwiper = new Swiper('.hero-swiper', {
            slidesPerView: 1,
            effect: 'fade',
            fadeEffect: { crossFade: true },
            loop: true,
            autoplay: { delay: 6000, disableOnInteraction: false },
            pagination: { el: '.hero-pagination', clickable: true },
            navigation: false,
            on: {
                init: function() {
                    // Animate on first load
                    setTimeout(animateProgressBars, 300);
                },
                slideChangeTransitionEnd: function() {
                    // Re-animate when slide changes
                    animateProgressBars();
                }
            }
        });

        // Also re-animate after any manual click on pagination (just in case)
        document.querySelector('.hero-pagination')?.addEventListener('click', () => {
            setTimeout(animateProgressBars, 350);
        });
    }

    // Format stat labels for display
    static formatStatLabel(key) {
        const labels = {
            power: 'Power', strength: 'Strength', offense: 'Offense',
            defense: 'Defense', stamina: 'Stamina', speed: 'Speed',
            mana: 'Mana', intelligence: 'Intel', physicalAtk: 'Phys Atk',
            magicalAtk: 'Mag Atk', physDef: 'Phys Def', magDef: 'Mag Def'
        };
        return labels[key] || key;
    }

    // ----------------------------------------------------------------------
    // 2. LEGENDARY HEROES (random 5, asymmetrical cards)
    // ----------------------------------------------------------------------
    static async initLegendaryHeroes() {
        const heroes = kretosApp.getRandomLegendaryHeroes(5);
        const container = document.getElementById('legendaryHeroesGrid');
        if (!container) return;

        container.innerHTML = heroes.map(hero => `
            <div class="legendary-hero-card asymmetrical-card" data-hero-id="${hero.id}">
                <div class="hero-icon" style="background-image: url('${hero.images.iconImage || 'assets/images/placeholders/hero_icon.png'}')"></div>
                <div class="hero-info">
                    <div class="rating">${hero.stats.ratings.overall}/10</div>
                    <h3>${hero.name}</h3>
                    <p>"${hero.nicknames?.[0] || 'The Legend'}"</p>
                    <p class="short-desc">${hero.shortDescription?.substring(0, 80) || ''}...</p>
                    <button class="learn-more-btn" data-hero-id="${hero.id}">Learn More →</button>
                </div>
            </div>
        `).join('');
    }

    // ----------------------------------------------------------------------
    // 3. WORLD SECTIONS (Kingdoms, Factions, Classes Swipers)
    // ----------------------------------------------------------------------
    static async initWorldSections() {
        const world = this.data.world;
        if (!world) return;

        // Kingdoms Swiper
        const kingdomsContainer = document.getElementById('kingdomsSwiper');
        if (kingdomsContainer && world.kingdoms) {
            kingdomsContainer.innerHTML = world.kingdoms.map(kingdom => `
                <div class="swiper-slide">
                    <div class="kingdom-card" style="background-image: url('${kingdom.image || 'assets/images/placeholders/kingdom_default.jpg'}')">
                        <div class="kingdom-overlay">
                            <h3>${kingdom.name}</h3>
                            <p>${kingdom.region}</p>
                            <p>${kingdom.description?.substring(0, 100) || ''}...</p>
                            <div class="races">${kingdom.races?.slice(0, 3).join(', ') || ''}</div>
                        </div>
                    </div>
                </div>
            `).join('');
        }

        // Factions Swiper
        const factionsContainer = document.getElementById('factionsSwiper');
        if (factionsContainer && world.factions) {
            factionsContainer.innerHTML = world.factions.map(faction => `
                <div class="swiper-slide">
                    <div class="faction-card">
                        <img src="${faction.image || 'assets/images/placeholders/faction_default.jpg'}" alt="${faction.name}">
                        <div class="faction-info">
                            <h3>${faction.name}</h3>
                            <span class="alignment">${faction.alignment}</span>
                            <p>${faction.description}</p>
                        </div>
                    </div>
                </div>
            `).join('');
        }

        // Classes Swiper
        const classesContainer = document.getElementById('classesSwiper');
        if (classesContainer && world.classes) {
            classesContainer.innerHTML = world.classes.map(cls => `
                <div class="swiper-slide">
                    <div class="class-card">
                        <img src="${cls.image || 'assets/images/placeholders/class_default.jpg'}" alt="${cls.name}">
                        <div class="class-details">
                            <h3>${cls.name}</h3>
                            <span class="class-type">${cls.type}</span>
                            <p>${cls.description}</p>
                        </div>
                    </div>
                </div>
            `).join('');
        }

        // Initialize all swipers (defined in swipers.js)
        if (typeof SwiperManager !== 'undefined') {
            SwiperManager.initAll();
        }
    }

    // ----------------------------------------------------------------------
    // 4. HOME MONSTERS (random 6, asymmetrical cards)
    // ----------------------------------------------------------------------
    static async initHomeMonsters() {
        const monsters = kretosApp.getRandomMonsters(6);
        const container = document.getElementById('homeMonstersGrid');
        if (!container) return;

        container.innerHTML = monsters.map(monster => `
            <div class="monster-card asymmetrical-monster-card" data-monster-id="${monster.id}">
                <div class="monster-icon" style="background-image: url('${monster.images.iconImage || 'assets/images/placeholders/monster_icon.png'}')"></div>
                <div class="monster-info">
                    <div class="rating">${monster.stats.ratings.overall}/10</div>
                    <h3>${monster.name}</h3>
                    <p>"${monster.nicknames?.[0] || 'The Beast'}"</p>
                    <p class="short-desc">${monster.shortDescription?.substring(0, 80) || ''}...</p>
                    <button class="learn-more-btn monster-btn" data-monster-id="${monster.id}">Learn More →</button>
                </div>
            </div>
        `).join('');
    }

    // ----------------------------------------------------------------------
    // 5. CREATORS SECTION
    // ----------------------------------------------------------------------
    static async initCreators() {
        const creators = this.data.creators;
        const container = document.getElementById('creatorsGrid');
        if (!container || !creators) return;

        container.innerHTML = creators.map(creator => `
            <div class="creator-card" data-creator-id="${creator.id}">
                <img src="${creator.avatar || 'assets/images/placeholders/creator_default.jpg'}" alt="${creator.name}" class="creator-avatar">
                <div class="creator-info">
                    <h3>${creator.name}</h3>
                    <p class="creator-role">${creator.role}</p>
                    <button class="meet-creator-btn" data-creator-id="${creator.id}">Meet ${creator.name.split(' ')[0]}</button>
                </div>
            </div>
        `).join('');
    }
}

// Make it globally available
window.HomePage = HomePage;