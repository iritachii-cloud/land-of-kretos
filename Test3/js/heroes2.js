// js/heroes.js – Heroes Hub dynamic logic
class HeroesHub {
    constructor() {
        this.heroes = [];
        this.filteredHeroes = [];
        this.currentHeroIndex = 0;
        this.currentHero = null;
        this.gallerySwiper = null;
        this.isModalOpen = false;
        this.touchStartX = 0;
        this.touchEndX = 0;
    }

    async init() {
        await this.loadHeroes();
        this.setupNavbar();
        this.setupPaletteSwitcher();
        this.renderCards();
        this.setupFilters();
        this.setupUrlParameter();
        this.setupImagePreviewModal();
    }

    async loadHeroes() {
        const spinner = document.getElementById('loadingSpinner');
        spinner.style.display = 'block';
        try {
            const res = await fetch('data/heroes.json');
            const data = await res.json();
            this.heroes = data.heroes;
            this.filteredHeroes = [...this.heroes];
        } catch (err) {
            console.error('Failed to load heroes:', err);
            document.getElementById('heroesCardGrid').innerHTML = '<p class="error">Failed to load heroes.</p>';
        } finally {
            spinner.style.display = 'none';
        }
    }

    setupNavbar() {
        Navbar.init();
    }

    setupPaletteSwitcher() {
        const toggleBtn = document.getElementById('openPaletteBtn');
        const dropdown = document.getElementById('paletteDropdown');
        const paletteList = document.getElementById('paletteList');

        toggleBtn.addEventListener('click', () => {
            dropdown.classList.toggle('active');
        });

        // Populate palette list with heroes
        this.heroes.forEach(hero => {
            const palette = hero.colorPalette;
            if (palette && palette.primary && palette.secondary) {
                const item = document.createElement('div');
                item.className = 'palette-item';
                item.innerHTML = `
                    <div class="palette-colors">
                        <div class="color-swatch" style="background: ${palette.primary[0]}"></div>
                        <div class="color-swatch" style="background: ${palette.secondary[0]}"></div>
                        <div class="color-swatch" style="background: ${palette.accent[0]}"></div>
                    </div>
                    <span class="palette-name">${hero.name}</span>
                `;
                item.addEventListener('click', () => {
                    this.applyHeroPalette(palette);
                    dropdown.classList.remove('active');
                });
                paletteList.appendChild(item);
            }
        });

        // Close dropdown when clicking outside
        document.addEventListener('click', (e) => {
            if (!toggleBtn.contains(e.target) && !dropdown.contains(e.target)) {
                dropdown.classList.remove('active');
            }
        });
    }

    applyHeroPalette(palette) {
        if (!palette) return;
        const primary = palette.primary[0];
        const secondary = palette.secondary[0];
        const accent = palette.accent[0];
        document.documentElement.style.setProperty('--hero-primary', primary);
        document.documentElement.style.setProperty('--hero-secondary', secondary);
        document.documentElement.style.setProperty('--hero-accent', accent);
        // Also update CSS variables for dynamic card gradients
        document.documentElement.style.setProperty('--hero-card-grad-start', this.adjustBrightness(primary, 0.2));
        document.documentElement.style.setProperty('--hero-card-grad-end', this.adjustBrightness(secondary, 0.9));
    }

    adjustBrightness(hex, alpha) {
        // Convert hex to rgb and add alpha
        let r, g, b;
        if (hex.startsWith('#')) {
            r = parseInt(hex.slice(1,3), 16);
            g = parseInt(hex.slice(3,5), 16);
            b = parseInt(hex.slice(5,7), 16);
        } else {
            return `rgba(0,0,0,${alpha})`;
        }
        return `rgba(${r}, ${g}, ${b}, ${alpha})`;
    }

    renderCards() {
        const grid = document.getElementById('heroesCardGrid');
        if (!grid) return;
        if (this.filteredHeroes.length === 0) {
            grid.innerHTML = '<p class="no-results">No heroes match your search.</p>';
            return;
        }

        grid.innerHTML = this.filteredHeroes.map(hero => {
            const primaryColor = hero.colorPalette?.primary?.[0] || '#8A2BE2';
            const secondaryColor = hero.colorPalette?.secondary?.[0] || '#0B0B0B';
            const gradientStyle = `radial-gradient(circle at 70% 20%, ${primaryColor}20, ${secondaryColor}cc)`;
            const rating = hero.stats?.ratings?.overall || 0;
            const stars = this.getStarRating(rating);
            return `
                <div class="hero-card" data-hero-id="${hero.id}" style="background: ${gradientStyle}; --hero-accent: ${hero.colorPalette?.accent?.[0] || '#FFBF00'}">
                    <div class="card-inner">
                        <div class="card-icon" style="background-image: url('${hero.images?.iconImage || 'assets/images/dunnyimage.png'}')"></div>
                        <h3>${this.escapeHtml(hero.name)}</h3>
                        <div class="rank-badge" data-rank="${hero.rank}">${hero.rank}</div>
                        <div class="rating-stars">${stars}</div>
                    </div>
                </div>
            `;
        }).join('');

        // Attach click events
        document.querySelectorAll('.hero-card').forEach(card => {
            card.addEventListener('click', (e) => {
                const id = parseInt(card.dataset.heroId);
                const hero = this.heroes.find(h => h.id === id);
                if (hero) this.openHeroModal(hero);
            });
        });
    }

    getStarRating(rating) {
        const fullStars = Math.floor(rating);
        const halfStar = (rating % 1) >= 0.5;
        let stars = '';
        for (let i = 0; i < fullStars; i++) stars += '★';
        if (halfStar) stars += '½';
        for (let i = stars.length; i < 10; i++) stars += '☆';
        return stars;
    }

    setupFilters() {
        const searchInput = document.getElementById('heroSearchInput');
        const rankFilter = document.getElementById('rankFilter');

        const filter = () => {
            const searchTerm = searchInput.value.toLowerCase();
            const selectedRank = rankFilter.value;
            this.filteredHeroes = this.heroes.filter(hero => {
                const matchesSearch = hero.name.toLowerCase().includes(searchTerm);
                const matchesRank = selectedRank === 'all' || hero.rank === selectedRank;
                return matchesSearch && matchesRank;
            });
            this.renderCards();
        };

        searchInput.addEventListener('input', filter);
        rankFilter.addEventListener('change', filter);
    }

    setupUrlParameter() {
        const params = new URLSearchParams(window.location.search);
        const heroId = params.get('id');
        if (heroId) {
            const hero = this.heroes.find(h => h.id == heroId);
            if (hero) {
                setTimeout(() => this.openHeroModal(hero), 500);
            }
        }
    }

    openHeroModal(hero) {
        this.currentHero = hero;
        this.currentHeroIndex = this.heroes.findIndex(h => h.id === hero.id);
        this.renderModalContent(hero);
        const modal = document.getElementById('heroDetailModal');
        modal.style.display = 'block';
        this.isModalOpen = true;
        this.applyHeroPalette(hero.colorPalette);
        this.setupModalEvents();
        this.setupSwipeDetection();
        this.animateStatsOnModalOpen();
    }

    renderModalContent(hero) {
        const container = document.getElementById('heroModalContent');
        if (!container) return;

        const bgImage = hero.images?.herobg || 'assets/images/dunnyimage.png';
        const rating = hero.stats?.ratings?.overall || 0;
        const starsLarge = this.getStarRating(rating);
        const rankColor = this.getRankColor(hero.rank);
        const statsHtml = this.renderStats(hero.stats);
        const attireHtml = this.renderAttire(hero.attire);
        const armorHtml = `<div><strong>Armor Type:</strong> ${hero.armorType || 'Unknown'}</div>`;
        const bodyTypeHtml = this.renderBodyType(hero.bodyType);
        const skillsHtml = this.renderSkills(hero.skills);
        const relationsHtml = this.renderRelations(hero.relationships);
        const mountHtml = hero.mount && hero.mount.length ? this.renderMount(hero.mount[0]) : '';
        const petHtml = hero.pet && hero.pet.length ? this.renderPet(hero.pet[0]) : '';

        container.innerHTML = `
            <div class="hero-detail-header">
                <div class="image-tabs-panel">
                    <div class="tabs-container">
                        <button class="tab-btn active" data-img-type="normal">Normal</button>
                        <button class="tab-btn" data-img-type="real">Real</button>
                        <button class="tab-btn" data-img-type="90">90's</button>
                    </div>
                    <img src="${hero.images?.normalImage || 'assets/images/dunnyimage.png'}" class="display-image" id="modalDisplayImage" alt="${hero.name}">
                </div>
                <div class="hero-info-panel">
                    <div class="name-container"><h1>${this.escapeHtml(hero.name)}</h1></div>
                    <div class="rank-level">
                        <span class="rank-tag" style="background: ${rankColor}">${hero.rank}</span>
                        <span class="level-tag">Lv. ${hero.level || '?'}</span>
                    </div>
                    <div class="nickname">${hero.nicknames ? hero.nicknames.join(' • ') : ''}</div>
                    <div class="title-list">${hero.titles ? hero.titles.join(' • ') : ''}</div>
                    <div class="rating-stars-large">${starsLarge}</div>
                    <p class="short-desc-full">${hero.shortDescription || ''}</p>
                </div>
            </div>
            <div class="stats-section">${statsHtml}</div>
            <div class="section-card"><div class="section-title">⚔️ Attire</div>${attireHtml}</div>
            <div class="section-card"><div class="section-title">🛡️ Armor</div>${armorHtml}</div>
            <div class="section-card"><div class="section-title">💪 Body Type</div>${bodyTypeHtml}</div>
            <div class="section-card"><div class="section-title">✨ Skills</div>${skillsHtml}</div>
            <div class="section-card"><div class="section-title">🤝 Relations</div>${relationsHtml}</div>
            ${mountHtml ? `<div class="section-card"><div class="section-title">🐉 Mount</div>${mountHtml}</div>` : ''}
            ${petHtml ? `<div class="section-card"><div class="section-title">🐾 Pet</div>${petHtml}</div>` : ''}
            <div class="gallery-swiper-container">
                <div class="gallery-swiper swiper">
                    <div class="swiper-wrapper" id="galleryWrapper"></div>
                    <div class="swiper-button-next"></div>
                    <div class="swiper-button-prev"></div>
                </div>
            </div>
        `;

        // Setup image tabs
        this.setupImageTabs(hero.images);
        // Setup gallery swiper
        this.initGallerySwiper(hero.images);
        // Setup double-click preview on display image and gallery images
        this.setupImagePreview(hero.images);
    }

    renderStats(stats) {
        if (!stats) return '';
        const excluded = ['ratings'];
        return Object.entries(stats)
            .filter(([k]) => !excluded.includes(k) && typeof stats[k] === 'number')
            .map(([k, v]) => `
                <div class="stat-row">
                    <span class="stat-label">${k.charAt(0).toUpperCase() + k.slice(1)}</span>
                    <div class="progress-bar"><div class="progress-fill-animated" data-value="${v}"></div></div>
                    <span class="stat-value">${v}/10</span>
                </div>
            `).join('');
    }

    animateStatsOnModalOpen() {
        setTimeout(() => {
            document.querySelectorAll('.progress-fill-animated').forEach(bar => {
                const val = bar.dataset.value;
                if (val) bar.style.width = (val * 10) + '%';
            });
        }, 150);
    }

    renderAttire(attire) {
        if (!attire) return '<p>No attire data.</p>';
        let html = '';
        if (attire.upper) html += `<div><strong>Upper:</strong> ${attire.upper.chest || ''} ${attire.upper.arms || ''}</div>`;
        if (attire.lower) html += `<div><strong>Lower:</strong> ${attire.lower.legs || ''} ${attire.lower.feet || ''}</div>`;
        if (attire.accessories) html += `<div><strong>Accessories:</strong> ${attire.accessories.join(', ')}</div>`;
        return html || '<p>—</p>';
    }

    renderBodyType(body) {
        if (!body) return '<p>—</p>';
        let html = '';
        if (body.upper) html += `<div><strong>Chest:</strong> ${body.upper.chest || ''}</div>`;
        if (body.lower) html += `<div><strong>Legs:</strong> ${body.lower.legs || ''}</div>`;
        return html;
    }

    renderSkills(skills) {
        if (!skills || !skills.length) return '<p>No skills listed.</p>';
        return `<div class="skills-grid">${skills.map(s => `
            <div class="skill-item">
                <strong>${s.name}</strong> (${s.type})<br>
                ${s.description}
            </div>
        `).join('')}</div>`;
    }

    renderRelations(relations) {
        if (!relations || !relations.length) return '<p>No relations.</p>';
        return `<div class="relations-grid">${relations.map(r => `
            <div class="relation-item">
                <strong>${r.withHeroId || 'Unknown'}</strong> – ${r.type}<br>
                ${r.description}
            </div>
        `).join('')}</div>`;
    }

    renderMount(mount) {
        if (!mount) return '';
        return `<div><strong>${mount.name}</strong> (${mount.type})<br>${mount.description}<br>Abilities: ${mount.abilities ? mount.abilities.join(', ') : '—'}</div>`;
    }

    renderPet(pet) {
        if (!pet) return '';
        return `<div><strong>${pet.name}</strong> (${pet.type})<br>${pet.description}</div>`;
    }

    setupImageTabs(images) {
        const tabs = document.querySelectorAll('.tab-btn');
        const displayImg = document.getElementById('modalDisplayImage');
        if (!tabs.length || !displayImg) return;
        tabs.forEach(tab => {
            tab.addEventListener('click', () => {
                const type = tab.dataset.imgType;
                let src = images?.normalImage;
                if (type === 'real') src = images?.realImage;
                if (type === '90') src = images?.['90sImage'];
                if (src) displayImg.src = src;
                else displayImg.src = 'assets/images/dunnyimage.png';
                tabs.forEach(t => t.classList.remove('active'));
                tab.classList.add('active');
            });
        });
    }

    initGallerySwiper(images) {
        if (this.gallerySwiper) this.gallerySwiper.destroy(true, true);
        const galleryWrapper = document.getElementById('galleryWrapper');
        if (!galleryWrapper) return;

        const allImages = [];
        if (images?.herobg) allImages.push({ url: images.herobg, label: 'Background' });
        if (images?.iconImage) allImages.push({ url: images.iconImage, label: 'Icon' });
        if (images?.normalImage) allImages.push({ url: images.normalImage, label: 'Normal' });
        if (images?.realImage) allImages.push({ url: images.realImage, label: 'Real' });
        if (images?.['90sImage']) allImages.push({ url: images['90sImage'], label: '90s' });
        if (images?.fullBodyImage) allImages.push({ url: images.fullBodyImage, label: 'Full Body' });
        if (images?.halfImage) allImages.push({ url: images.halfImage, label: 'Half' });
        if (images?.heropng) allImages.push({ url: images.heropng, label: 'Hero' });
        if (images?.gallery) images.gallery.forEach((url, idx) => allImages.push({ url, label: `Gallery ${idx+1}` }));

        if (allImages.length === 0) {
            galleryWrapper.innerHTML = '<div class="swiper-slide">No images available</div>';
            return;
        }

        galleryWrapper.innerHTML = allImages.map(img => `
            <div class="swiper-slide gallery-slide">
                <img src="${img.url}" alt="${img.label}" data-full-img="${img.url}">
            </div>
        `).join('');

        this.gallerySwiper = new Swiper('.gallery-swiper', {
            slidesPerView: 1,
            spaceBetween: 20,
            navigation: { nextEl: '.gallery-swiper .swiper-button-next', prevEl: '.gallery-swiper .swiper-button-prev' },
            loop: allImages.length > 1,
            effect: 'slide',
        });

        // Attach preview for gallery images
        document.querySelectorAll('.gallery-slide img').forEach(img => {
            img.addEventListener('dblclick', (e) => this.showFullPreview(e.target.src));
            img.addEventListener('touchstart', (e) => {
                // Single tap on mobile triggers preview (simple)
                this.tapTimeout = setTimeout(() => this.showFullPreview(e.target.src), 300);
            });
            img.addEventListener('touchend', () => clearTimeout(this.tapTimeout));
        });
    }

    setupImagePreview(images) {
        const displayImg = document.getElementById('modalDisplayImage');
        if (displayImg) {
            displayImg.addEventListener('dblclick', () => this.showFullPreview(displayImg.src));
            displayImg.addEventListener('touchstart', () => {
                this.tapTimeout = setTimeout(() => this.showFullPreview(displayImg.src), 300);
            });
            displayImg.addEventListener('touchend', () => clearTimeout(this.tapTimeout));
        }
    }

    showFullPreview(src) {
        const previewModal = document.getElementById('imagePreviewModal');
        const previewImg = document.getElementById('previewImg');
        previewImg.src = src;
        previewModal.style.display = 'flex';
    }

    setupImagePreviewModal() {
        const modal = document.getElementById('imagePreviewModal');
        const closeBtn = modal.querySelector('.preview-close');
        closeBtn.addEventListener('click', () => modal.style.display = 'none');
        modal.addEventListener('click', (e) => {
            if (e.target === modal) modal.style.display = 'none';
        });
    }

    setupModalEvents() {
        const modal = document.getElementById('heroDetailModal');
        const closeBtn = modal.querySelector('.modal-close-btn');
        const prevBtn = modal.querySelector('.prev-hero');
        const nextBtn = modal.querySelector('.next-hero');

        const closeModal = () => {
            modal.style.display = 'none';
            this.isModalOpen = false;
            if (this.gallerySwiper) this.gallerySwiper.destroy(true, true);
        };

        closeBtn.addEventListener('click', closeModal);
        modal.addEventListener('click', (e) => {
            if (e.target === modal || e.target.classList.contains('hero-modal-overlay')) closeModal();
        });

        prevBtn.addEventListener('click', () => this.navigateHero(-1));
        nextBtn.addEventListener('click', () => this.navigateHero(1));

        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (!this.isModalOpen) return;
            if (e.key === 'ArrowLeft') this.navigateHero(-1);
            if (e.key === 'ArrowRight') this.navigateHero(1);
            if (e.key === 'Escape') closeModal();
        });
    }

    setupSwipeDetection() {
        const swipeArea = document.getElementById('modalSwipeArea');
        if (!swipeArea) return;
        swipeArea.addEventListener('touchstart', (e) => {
            this.touchStartX = e.changedTouches[0].screenX;
        });
        swipeArea.addEventListener('touchend', (e) => {
            this.touchEndX = e.changedTouches[0].screenX;
            const diff = this.touchEndX - this.touchStartX;
            if (Math.abs(diff) > 50) {
                if (diff > 0) this.navigateHero(-1);
                else this.navigateHero(1);
            }
        });
    }

    navigateHero(direction) {
        let newIndex = this.currentHeroIndex + direction;
        if (newIndex < 0) newIndex = this.heroes.length - 1;
        if (newIndex >= this.heroes.length) newIndex = 0;
        this.currentHeroIndex = newIndex;
        this.currentHero = this.heroes[newIndex];
        this.renderModalContent(this.currentHero);
        this.applyHeroPalette(this.currentHero.colorPalette);
        this.animateStatsOnModalOpen();
        this.setupImageTabs(this.currentHero.images);
        this.initGallerySwiper(this.currentHero.images);
        this.setupImagePreview(this.currentHero.images);
    }

    getRankColor(rank) {
        const colors = {
            'SSS-Rank': '#FFD700',
            'SS-Rank': '#C0C0C0',
            'S-Rank': '#B8860B',
            'A-Rank': '#2E8B57',
            'B-Rank': '#4682B4',
            'C-Rank': '#6A5ACD',
            'D-Rank': '#8B4513',
            'E-Rank': '#556B2F',
            'F-Rank': '#8B0000'
        };
        return colors[rank] || '#333';
    }

    escapeHtml(str) {
        if (!str) return '';
        const div = document.createElement('div');
        div.textContent = str;
        return div.innerHTML;
    }
}

// Initialize on DOM ready
document.addEventListener('DOMContentLoaded', () => {
    window.heroesHub = new HeroesHub();
    heroesHub.init();
});