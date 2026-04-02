// ==========================================================================
// MODALS.JS - Enhanced with error handling & debugging
// ==========================================================================

class ModalManager {
    static init() {
        // Get all modal elements (some may be null on certain pages)
        this.modals = {
            hero: document.getElementById('heroModal'),
            heroDetail: document.getElementById('heroDetailModal'),
            monster: document.getElementById('monsterModal'),
            monsterDetail: document.getElementById('monsterDetailModal'),
            creator: document.getElementById('creatorModal')
        };
        
        // Log which modals were found (for debugging)
        console.log('ModalManager initialized. Found modals:', Object.keys(this.modals).filter(k => this.modals[k] !== null));
        
        this.currentImageTab = 'normal';
        this.currentImages = null;
        this.setupEventListeners();
    }

    static setupEventListeners() {
        // Close buttons
        document.querySelectorAll('.close').forEach(close => {
            close.addEventListener('click', (e) => {
                e.stopPropagation();
                this.closeAllModals();
            });
        });
        
        // Click outside to close
        document.querySelectorAll('.modal').forEach(modal => {
            modal.addEventListener('click', (e) => {
                if (e.target === modal) this.closeAllModals();
            });
        });

        // Global click delegation for hero/monster/creator cards
        document.addEventListener('click', (e) => {
            // Hero card click
            const heroBtn = e.target.closest('[data-hero-id]');
            if (heroBtn) {
                e.preventDefault();
                const heroId = parseInt(heroBtn.dataset.heroId);
                const hero = window.kretosApp?.data?.heroes?.find(h => h.id === heroId);
                if (hero) {
                    console.log('Opening hero modal for:', hero.name);
                    this.showHeroModal(hero);
                } else {
                    console.error('Hero not found for ID:', heroId);
                }
                return;
            }
            
            // Monster card click
            const monsterBtn = e.target.closest('[data-monster-id]');
            if (monsterBtn) {
                e.preventDefault();
                const monsterId = parseInt(monsterBtn.dataset.monsterId);
                const monster = window.kretosApp?.data?.monsters?.find(m => m.id === monsterId);
                if (monster) {
                    console.log('Opening monster modal for:', monster.name);
                    this.showMonsterModal(monster);
                } else {
                    console.error('Monster not found for ID:', monsterId);
                }
                return;
            }
            
            // Creator card click
            const creatorBtn = e.target.closest('[data-creator-id]');
            if (creatorBtn) {
                e.preventDefault();
                const creatorId = parseInt(creatorBtn.dataset.creatorId);
                const creator = window.kretosApp?.data?.creators?.find(c => c.id === creatorId);
                if (creator) {
                    console.log('Opening creator modal for:', creator.name);
                    this.showCreatorModal(creator);
                }
                return;
            }
        });

        // Image tab switching (delegation)
        document.addEventListener('click', (e) => {
            if (e.target.classList && e.target.classList.contains('image-tab')) {
                this.switchImageTab(e.target.dataset.tab, e.target);
            }
        });
    }

    static showHeroModal(hero) {
        // Try to get the detail modal first, fallback to simple modal
        let modal = this.modals.heroDetail || this.modals.hero;
        if (!modal) {
            console.error('No hero modal found on this page!');
            return;
        }
        
        const body = modal.querySelector('.modal-body');
        if (!body) {
            console.error('Modal body not found inside hero modal');
            return;
        }
        
        // Render content
        body.innerHTML = this.renderHeroFullModal(hero);
        
        // Store images for tab switching
        this.currentImages = hero.images;
        this.currentImageTab = 'normal';
        
        // Show modal
        modal.style.display = 'flex';
        document.body.classList.add('modal-open');
        
        // Animate stats after render
        setTimeout(() => this.animateStats(), 100);
    }

    static showMonsterModal(monster) {
        let modal = this.modals.monsterDetail || this.modals.monster;
        if (!modal) {
            console.error('No monster modal found on this page!');
            return;
        }
        
        const body = modal.querySelector('.modal-body');
        if (!body) return;
        
        body.innerHTML = this.renderMonsterFullModal(monster);
        this.currentImages = monster.images;
        this.currentImageTab = 'normal';
        modal.style.display = 'flex';
        document.body.classList.add('modal-open');
        setTimeout(() => this.animateStats(), 100);
    }

    static showCreatorModal(creator) {
        const modal = this.modals.creator;
        if (!modal) {
            console.error('No creator modal found');
            return;
        }
        
        const body = modal.querySelector('.modal-body');
        if (!body) return;
        
        body.innerHTML = this.renderCreatorModal(creator);
        modal.style.display = 'flex';
        document.body.classList.add('modal-open');
    }

    static switchImageTab(tabName, clickedTab) {
        this.currentImageTab = tabName;
        
        // Update active tab UI
        document.querySelectorAll('.image-tab').forEach(tab => {
            tab.classList.remove('active');
        });
        if (clickedTab) clickedTab.classList.add('active');
        
        // Map tab name to image key
        const imgMap = {
            'normal': 'normalImage',
            'real': 'realImage',
            '90': '90sImage',
            'full': 'fullBodyImage',
            'half': 'halfImage'
        };
        const imgKey = imgMap[tabName];
        const imgSrc = this.currentImages?.[imgKey] || this.currentImages?.normalImage;
        
        const modalImg = document.querySelector('.modal-hero-image, .modal-monster-image');
        if (modalImg && imgSrc) {
            modalImg.src = imgSrc;
        } else if (modalImg) {
            console.warn(`Image not found for tab: ${tabName}, key: ${imgKey}`);
        }
    }

    static animateStats() {
        const progressBars = document.querySelectorAll('.progress-fill');
        progressBars.forEach(bar => {
            const value = bar.dataset.value;
            if (value) {
                const percent = parseFloat(value) * 10;
                bar.style.width = percent + '%';
            }
        });
    }

    static renderHeroFullModal(hero) {
        if (!hero) return '<div class="error">Hero data missing</div>';
        
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
                    <img src="${hero.images?.normalImage || 'assets/images/placeholders/hero_normal.png'}" 
                         alt="${hero.name}" 
                         class="modal-hero-image">
                </div>
                <div class="info-section">
                    <div class="info-row">
                        <h2>${this.escapeHtml(hero.name)}</h2>
                        <div class="rank-level">
                            <span class="rank">${hero.rank || 'N/A'}</span>
                            <span class="level">Lv.${hero.level || '?'}</span>
                        </div>
                    </div>
                    <div class="info-row rating-container">
                        <div class="star-rating">${this.renderStars(hero.stats?.ratings?.overall || 0)}</div>
                        <span>${hero.stats?.ratings?.overall || 0}/10</span>
                    </div>
                    <div class="info-row">
                        <h4>Nicknames</h4>
                        <p>${hero.nicknames?.join(', ') || 'None'}</p>
                    </div>
                    <div class="info-row">
                        <h4>Titles</h4>
                        <p>${hero.titles?.join(' • ') || 'None'}</p>
                    </div>
                    <div class="stats-section">
                        ${Object.entries(hero.stats || {})
                            .filter(([key]) => !['ratings'].includes(key) && typeof hero.stats[key] === 'number')
                            .map(([key, value]) => `
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
        if (!monster) return '<div class="error">Monster data missing</div>';
        
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
                    <img src="${monster.images?.normalImage || 'assets/images/placeholders/monster_normal.png'}" 
                         alt="${monster.name}" 
                         class="modal-monster-image">
                </div>
                <div class="info-section">
                    <div class="info-row">
                        <h2>${this.escapeHtml(monster.name)}</h2>
                        <div class="rank-level">
                            <span class="rank">${monster.rank || 'N/A'}</span>
                            <span class="level">Lv.${monster.level || '?'}</span>
                        </div>
                    </div>
                    <div class="info-row rating-container">
                        <div class="star-rating">${this.renderStars(monster.stats?.ratings?.overall || 0)}</div>
                        <span>${monster.stats?.ratings?.overall || 0}/10</span>
                    </div>
                    <div class="info-row">
                        <h4>Nicknames</h4>
                        <p>${monster.nicknames?.join(', ') || 'None'}</p>
                    </div>
                    <div class="stats-section">
                        ${Object.entries(monster.stats || {})
                            .filter(([key]) => !['ratings'].includes(key) && typeof monster.stats[key] === 'number')
                            .map(([key, value]) => `
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
        if (!creator) return '<div class="error">Creator data missing</div>';
        
        return `
            <div class="creator-modal-content">
                <img src="${creator.avatar || 'assets/images/placeholders/creator_default.jpg'}" 
                     alt="${creator.name}" 
                     class="creator-large-avatar">
                <div class="creator-details">
                    <h2>${this.escapeHtml(creator.name)}</h2>
                    <p class="creator-role">${creator.role || 'Creator'}</p>
                    <p class="creator-bio">${creator.bio || 'No bio available.'}</p>
                    <div class="creator-motto">
                        <strong>"${creator.motto || 'Create without limits'}"</strong>
                    </div>
                    <div class="creator-favorites">
                        <div class="fav-hero">
                            <strong>Favorite Hero:</strong> ${creator.favHero || 'Unknown'}<br>
                            <em>${creator.reason?.split(';')[0] || 'No reason provided'}</em>
                        </div>
                        <div class="fav-monster">
                            <strong>Favorite Monster:</strong> ${creator.favMonster || 'Unknown'}<br>
                            <em>${creator.reason?.split(';')[1] || 'No reason provided'}</em>
                        </div>
                    </div>
                    <div class="qa-section">
                        ${(creator.qa || []).map((qna, index) => `
                            <div class="qa-item style-${index % 3}">
                                <h4>Q: ${this.escapeHtml(qna.question)}</h4>
                                <p>A: ${this.escapeHtml(qna.answer)}</p>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </div>
        `;
    }

    static renderStars(rating) {
        const fullStars = Math.floor(rating / 2); // Convert 0-10 to 0-5 stars
        const hasHalf = (rating % 2) >= 1;
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

    static escapeHtml(str) {
        if (!str) return '';
        return str.replace(/[&<>]/g, function(m) {
            if (m === '&') return '&amp;';
            if (m === '<') return '&lt;';
            if (m === '>') return '&gt;';
            return m;
        });
    }

    static closeAllModals() {
        Object.values(this.modals).forEach(modal => {
            if (modal && modal.style.display === 'flex') {
                modal.style.display = 'none';
            }
        });
        document.body.classList.remove('modal-open');
        this.currentImages = null;
    }
}

window.ModalManager = ModalManager;