class ModalManager {
    static init() {
        this.modals = {
            hero: document.getElementById('heroModal'),
            heroDetail: document.getElementById('heroDetailModal'),
            monster: document.getElementById('monsterModal'),
            monsterDetail: document.getElementById('monsterDetailModal'),
            creator: document.getElementById('creatorModal')
        };
        this.currentImageTab = 'normal';
        this.currentImages = null;
        this.setupEventListeners();
    }

    static setupEventListeners() {
        document.querySelectorAll('.close').forEach(close => close.addEventListener('click', () => this.closeAllModals()));
        document.querySelectorAll('.modal').forEach(modal => modal.addEventListener('click', (e) => { if (e.target === modal) this.closeAllModals(); }));

        // Global triggers for hero/monster/creator
        document.addEventListener('click', (e) => {
            const heroBtn = e.target.closest('[data-hero-id]');
            if (heroBtn) {
                const hero = kretosApp.data.heroes.find(h => h.id == heroBtn.dataset.heroId);
                if (hero) this.showHeroModal(hero);
            }
            const monsterBtn = e.target.closest('[data-monster-id]');
            if (monsterBtn) {
                const monster = kretosApp.data.monsters.find(m => m.id == monsterBtn.dataset.monsterId);
                if (monster) this.showMonsterModal(monster);
            }
            const creatorBtn = e.target.closest('[data-creator-id]');
            if (creatorBtn) {
                const creator = kretosApp.data.creators.find(c => c.id == creatorBtn.dataset.creatorId);
                if (creator) this.showCreatorModal(creator);
            }
        });

        // Image tab switching (delegation)
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('image-tab')) {
                this.switchImageTab(e.target.dataset.tab);
            }
        });
    }

    static showHeroModal(hero) {
        const modal = this.modals.heroDetail || this.modals.hero;
        if (!modal) return;
        const body = modal.querySelector('.modal-body');
        if (body) body.innerHTML = this.renderHeroFullModal(hero);
        modal.style.display = 'flex';
        this.storeImages(hero.images);
        this.animateStats();
    }

    static showMonsterModal(monster) {
        const modal = this.modals.monsterDetail || this.modals.monster;
        if (!modal) return;
        const body = modal.querySelector('.modal-body');
        if (body) body.innerHTML = this.renderMonsterFullModal(monster);
        modal.style.display = 'flex';
        this.storeImages(monster.images);
        this.animateStats();
    }

    static showCreatorModal(creator) {
        const modal = this.modals.creator;
        if (!modal) return;
        const body = modal.querySelector('.modal-body');
        if (body) body.innerHTML = this.renderCreatorModal(creator);
        modal.style.display = 'flex';
    }

    static storeImages(images) {
        this.currentImages = images;
    }

    static switchImageTab(tabName) {
        this.currentImageTab = tabName;
        document.querySelectorAll('.image-tab').forEach(tab => tab.classList.remove('active'));
        event.target.classList.add('active');
        const imgMap = { normal: 'normalImage', real: 'realImage', '90': '90sImage', full: 'fullBodyImage', half: 'halfImage' };
        const imgKey = imgMap[tabName];
        const imgSrc = this.currentImages?.[imgKey] || this.currentImages?.normalImage;
        const modalImg = document.querySelector('.modal-hero-image, .modal-monster-image');
        if (modalImg && imgSrc) modalImg.src = imgSrc;
    }

    static animateStats() {
        setTimeout(() => {
            document.querySelectorAll('.progress-fill').forEach(bar => {
                const val = bar.dataset.value;
                if (val) bar.style.width = (val * 10) + '%';
            });
        }, 100);
    }

    static renderHeroFullModal(hero) {
        return `
            <div class="modal-grid">
                <div class="image-section">
                    <div class="image-tabs">
                        <button class="image-tab active" data-tab="normal">Normal</button>
                        <button class="image-tab" data-tab="real">Real</button>
                        <button class="image-tab" data-tab="90">90's</button>
                        <button class="image-tab" data-tab="full">Full</button>
                        <button class="image-tab" data-tab="half">Half</button>
                    </div>
                    <img src="${hero.images.normalImage || 'assets/images/placeholders/hero_normal.png'}" alt="${hero.name}" class="modal-hero-image">
                </div>
                <div class="info-section">
                    <div class="info-row">
                        <h2>${hero.name}</h2>
                        <div class="rank-level">
                            <span class="rank">${hero.rank}</span>
                            <span class="level">Lv.${hero.level}</span>
                        </div>
                    </div>
                    <div class="info-row rating-container">
                        <div class="star-rating" data-rating="${hero.stats.ratings.overall}">${this.renderStars(hero.stats.ratings.overall)}</div>
                        <span>${hero.stats.ratings.overall}/10</span>
                    </div>
                    <div class="info-row">
                        <h4>Nicknames</h4>
                        <p>${hero.nicknames.join(', ')}</p>
                    </div>
                    <div class="info-row">
                        <h4>Titles</h4>
                        <p>${hero.titles.join(' • ')}</p>
                    </div>
                    <div class="stats-section">
                        ${Object.entries(hero.stats).filter(([key]) => !['ratings'].includes(key) && typeof hero.stats[key] === 'number').map(([key, value]) => `
                            <div class="stat-item">
                                <span class="stat-label">${this.formatStatLabel(key)}</span>
                                <div class="progress-container">
                                    <div class="progress-bar">
                                        <div class="progress-fill" data-value="${value}"></div>
                                    </div>
                                </div>
                                <span class="stat-value">${value}/10</span>
                            </div>
                        `).join('')}
                    </div>
                    <div class="modal-actions">
                        <a href="heroes.html#hero-${hero.id}" class="full-details-btn">Full Details →</a>
                    </div>
                </div>
            </div>
        `;
    }

    static renderMonsterFullModal(monster) {
        return `
            <div class="modal-grid">
                <div class="image-section">
                    <div class="image-tabs">
                        <button class="image-tab active" data-tab="normal">Normal</button>
                        <button class="image-tab" data-tab="real">Real</button>
                        <button class="image-tab" data-tab="90">90's</button>
                        <button class="image-tab" data-tab="full">Full</button>
                        <button class="image-tab" data-tab="half">Half</button>
                    </div>
                    <img src="${monster.images.normalImage || 'assets/images/placeholders/monster_normal.png'}" alt="${monster.name}" class="modal-monster-image">
                </div>
                <div class="info-section">
                    <div class="info-row">
                        <h2>${monster.name}</h2>
                        <div class="rank-level">
                            <span class="rank">${monster.rank}</span>
                            <span class="level">Lv.${monster.level}</span>
                        </div>
                    </div>
                    <div class="info-row rating-container">
                        <div class="star-rating" data-rating="${monster.stats.ratings.overall}">${this.renderStars(monster.stats.ratings.overall)}</div>
                        <span>${monster.stats.ratings.overall}/10</span>
                    </div>
                    <div class="info-row">
                        <h4>Nicknames</h4>
                        <p>${monster.nicknames.join(', ')}</p>
                    </div>
                    <div class="stats-section">
                        ${Object.entries(monster.stats).filter(([key]) => !['ratings'].includes(key) && typeof monster.stats[key] === 'number').map(([key, value]) => `
                            <div class="stat-item">
                                <span class="stat-label">${this.formatStatLabel(key)}</span>
                                <div class="progress-container">
                                    <div class="progress-bar">
                                        <div class="progress-fill" data-value="${value}"></div>
                                    </div>
                                </div>
                                <span class="stat-value">${value}/10</span>
                            </div>
                        `).join('')}
                    </div>
                    <div class="modal-actions">
                        <a href="monsters.html#monster-${monster.id}" class="full-details-btn">Full Details →</a>
                    </div>
                </div>
            </div>
        `;
    }

    static renderCreatorModal(creator) {
        return `
            <div class="creator-modal-content">
                <img src="${creator.avatar || 'assets/images/placeholders/creator_default.jpg'}" alt="${creator.name}" class="creator-large-avatar">
                <div class="creator-details">
                    <h2>${creator.name}</h2>
                    <p class="creator-role">${creator.role}</p>
                    <p class="creator-bio">${creator.bio}</p>
                    <div class="creator-motto">
                        <strong>"${creator.motto}"</strong>
                    </div>
                    <div class="creator-favorites">
                        <div class="fav-hero">
                            <strong>Favorite Hero:</strong> ${creator.favHero}<br>
                            <em>"${creator.reason.split(';')[0]}"</em>
                        </div>
                        <div class="fav-monster">
                            <strong>Favorite Monster:</strong> ${creator.favMonster}<br>
                            <em>"${creator.reason.split(';')[1] || 'Perfect companion'}"</em>
                        </div>
                    </div>
                    <div class="qa-section">
                        ${creator.qa.map((qna, index) => `
                            <div class="qa-item style-${index % 3}">
                                <h4>Q: ${qna.question}</h4>
                                <p>A: ${qna.answer}</p>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </div>
        `;
    }

    static renderStars(rating) {
        const fullStars = Math.floor(rating);
        const hasHalf = rating % 1 >= 0.5;
        let stars = '';
        for (let i = 0; i < 5; i++) {
            if (i < fullStars) stars += '⭐';
            else if (i === fullStars && hasHalf) stars += '⭐';
            else stars += '☆';
        }
        return stars;
    }

    static formatStatLabel(key) {
        const labels = {
            power: 'Power', strength: 'Strength', offense: 'Offense',
            defense: 'Defense', stamina: 'Stamina', speed: 'Speed',
            mana: 'Mana', intelligence: 'Intel', physicalAtk: 'Phys Atk',
            magicalAtk: 'Mag Atk', physDef: 'Phys Def', magDef: 'Mag Def'
        };
        return labels[key] || key;
    }

    static closeAllModals() {
        Object.values(this.modals).forEach(modal => { if (modal) modal.style.display = 'none'; });
    }
}

window.ModalManager = ModalManager;