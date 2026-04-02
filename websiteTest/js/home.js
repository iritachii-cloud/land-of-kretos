document.addEventListener('DOMContentLoaded', async () => {
    const data = await loadData();
    if(!data) return;
    const main = document.getElementById('app-root');
    // Build homepage
    main.innerHTML = `
        <div class="hero-slider-section container">
            <div class="swiper heroSwiper">
                <div class="swiper-wrapper" id="hero-slider-wrapper"></div>
                <div class="swiper-pagination"></div>
                <div class="swiper-button-next"></div>
                <div class="swiper-button-prev"></div>
            </div>
        </div>
        <div class="legendary-section container">
            <h2 class="section-title">Legendary Heroes</h2>
            <div id="legendary-grid" class="legendary-grid"></div>
        </div>
        <div class="swiper-section container">
            <h2 class="section-title">Geography & Kingdoms</h2>
            <div class="swiper kingdomSwiper"><div class="swiper-wrapper" id="kingdom-wrapper"></div><div class="swiper-pagination"></div></div>
        </div>
        <div class="swiper-section container">
            <h2 class="section-title">Factions & Alliances</h2>
            <div class="swiper factionSwiper"><div class="swiper-wrapper" id="faction-wrapper"></div><div class="swiper-pagination"></div></div>
        </div>
        <div class="swiper-section container">
            <h2 class="section-title">Class System</h2>
            <div class="swiper classSwiper"><div class="swiper-wrapper" id="class-wrapper"></div><div class="swiper-pagination"></div></div>
        </div>
        <div class="monster-slider-section container">
            <h2 class="section-title">Monsters & Creatures</h2>
            <div class="swiper monsterSwiper"><div class="swiper-wrapper" id="monster-wrapper"></div><div class="swiper-pagination"></div></div>
        </div>
        <div class="creators-section container">
            <h2 class="section-title">Meet the Creators</h2>
            <div id="creators-grid" class="creators-grid"></div>
        </div>
    `;

    // Hero Slider (7 random)
    const heroes = data.heroes;
    const shuffled = [...heroes].sort(() => 0.5 - Math.random());
    const heroSlides = shuffled.slice(0,7);
    const sliderWrapper = document.getElementById('hero-slider-wrapper');
    heroSlides.forEach(hero => {
        const bg = hero.images.herobg || 'assets/images/placeholders/hero_bg.png';
        const png = hero.images.heropng || 'assets/images/placeholders/hero_hero.png';
        sliderWrapper.innerHTML += `
            <div class="swiper-slide hero-slide" style="background-image:url(${bg})">
                <div class="slide-content">
                    <h2>${hero.name}</h2>
                    <p>${hero.shortDescription}</p>
                    <div class="slide-stats">${renderStats(hero.stats)}</div>
                    <button class="btn see-more" data-id="${hero.id}" data-type="hero">See More</button>
                </div>
                <div class="hero-png"><img src="${png}" alt="${hero.name}"></div>
            </div>
        `;
    });
    new Swiper('.heroSwiper', { loop: true, pagination: { el: '.swiper-pagination' }, navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' } });

    // Legendary Heroes (5 random)
    const legendaryHeroes = [...heroes].sort(() => 0.5 - Math.random()).slice(0,5);
    const legendaryGrid = document.getElementById('legendary-grid');
    legendaryHeroes.forEach(hero => {
        legendaryGrid.innerHTML += `
            <div class="legendary-card" data-id="${hero.id}" data-type="hero">
                <div class="card-image" style="background-image:url(${hero.images.iconImage})"></div>
                <div class="card-content">
                    <h3>${hero.name}</h3>
                    <div class="rating">${getStars(hero.stats.ratings.overall)}</div>
                    <p>${hero.nicknames ? hero.nicknames[0] : ''}</p>
                    <button class="btn learn-more" data-id="${hero.id}" data-type="hero">Learn More</button>
                </div>
            </div>
        `;
    });

    // Kingdom Swiper (unique style)
    const kingdomWrapper = document.getElementById('kingdom-wrapper');
    data.world.kingdoms.forEach(k => {
        kingdomWrapper.innerHTML += `<div class="swiper-slide hexagon-card"><div class="card-content"><h3>${k.name}</h3><p>${k.description}</p></div></div>`;
    });
    new Swiper('.kingdomSwiper', { slidesPerView: 3, spaceBetween: 20, pagination: { el: '.swiper-pagination' } });

    // Faction Swiper (flip style)
    const factionWrapper = document.getElementById('faction-wrapper');
    data.world.factions.forEach(f => {
        factionWrapper.innerHTML += `<div class="swiper-slide flip-card"><div class="card-content"><h3>${f.name}</h3><p>${f.description}</p></div></div>`;
    });
    new Swiper('.factionSwiper', { slidesPerView: 3, spaceBetween: 20 });

    // Class Swiper (glass)
    const classWrapper = document.getElementById('class-wrapper');
    data.world.classes.forEach(c => {
        classWrapper.innerHTML += `<div class="swiper-slide glass-card"><div class="card-content"><h3>${c.name}</h3><p>${c.description}</p></div></div>`;
    });
    new Swiper('.classSwiper', { slidesPerView: 3, spaceBetween: 20 });

    // Monster Swiper
    const monsterWrapper = document.getElementById('monster-wrapper');
    data.monsters.forEach(m => {
        monsterWrapper.innerHTML += `<div class="swiper-slide monster-card"><div class="card-content"><h3>${m.name}</h3><p>${m.shortDescription}</p><button class="btn see-monster" data-id="${m.id}" data-type="monster">Learn More</button></div></div>`;
    });
    new Swiper('.monsterSwiper', { slidesPerView: 3, spaceBetween: 20 });

    // Creators (fallback since no data)
    const creatorsGrid = document.getElementById('creators-grid');
    const fallbackCreators = [
        { name: "Aria Stone", role: "Lead Worldbuilder", bio: "Dreamer of Kretos", qa: [{q:"Why fantasy?", a:"Because reality needs wonder."}], motto: "Create fearlessly", favHero: "VVitch X‑abar", favMonster: "Malphas", reason: "Dark complexity" },
        { name: "Marcus Vane", role: "Art Director", bio: "Visual alchemist", qa: [{q:"Favorite realm?", a:"Nyxara"}], motto: "Shadows tell truth", favHero: "VVitch X‑abar", favMonster: "Abyssal Dragon", reason: "Epic scale" },
        { name: "Luna Kai", role: "Lore Keeper", bio: "Weaver of legends", qa: [{q:"What inspires you?", a:"Ancient myths"}], motto: "Stories live forever", favHero: "VVitch X‑abar", favMonster: "Malphas", reason: "Loyalty" }
    ];
    fallbackCreators.forEach(creator => {
        creatorsGrid.innerHTML += `
            <div class="creator-card" data-creator='${JSON.stringify(creator)}'>
                <div class="creator-avatar" style="background: var(--accent-primary);"></div>
                <h3>${creator.name}</h3>
                <p>${creator.role}</p>
            </div>
        `;
    });
    // Creator modal
    document.querySelectorAll('.creator-card').forEach(card => {
        card.addEventListener('click', () => {
            const creator = JSON.parse(card.dataset.creator);
            alert(`Creator: ${creator.name}\nRole: ${creator.role}\nBio: ${creator.bio}\nMotto: ${creator.motto}\nFavorite Hero: ${creator.favHero}\nFavorite Monster: ${creator.favMonster}\nReason: ${creator.reason}`);
        });
    });

    // Event delegation for modals
    document.addEventListener('click', (e) => {
        if(e.target.classList.contains('see-more') || e.target.classList.contains('learn-more')) {
            const id = parseInt(e.target.dataset.id);
            const type = e.target.dataset.type;
            if(type === 'hero') {
                const hero = data.heroes.find(h => h.id === id);
                showModal('hero', data.heroes, data.heroes.indexOf(hero));
            } else if(type === 'monster') {
                const monster = data.monsters.find(m => m.id === id);
                showModal('monster', data.monsters, data.monsters.indexOf(monster));
            }
        }
    });
});