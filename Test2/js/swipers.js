class SwiperManager {
    static initAll() {
        this.initKingdomsSwiper();
        this.initFactionsSwiper();
        this.initClassesSwiper();
    }

    static initKingdomsSwiper() {
        const swiperEl = document.querySelector('.kingdoms-swiper');
        if (!swiperEl) return;
        new Swiper(swiperEl, {
            slidesPerView: 1,
            spaceBetween: 30,
            effect: 'coverflow',
            grabCursor: true,
            centeredSlides: true,
            loop: true,
            autoplay: { delay: 5000, disableOnInteraction: false },
            coverflowEffect: { rotate: 30, stretch: 0, depth: 100, modifier: 1, slideShadows: true },
            navigation: { nextEl: '.kingdoms-swiper .swiper-button-next', prevEl: '.kingdoms-swiper .swiper-button-prev' },
            breakpoints: { 768: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }
        });
    }

    static initFactionsSwiper() {
        const swiperEl = document.querySelector('.factions-swiper');
        if (!swiperEl) return;
        new Swiper(swiperEl, {
            slidesPerView: 1,
            spaceBetween: 20,
            effect: 'cube',
            grabCursor: true,
            loop: true,
            cubeEffect: { shadow: true, slideShadows: true, shadowOffset: 20, shadowScale: 0.94 },
            navigation: { nextEl: '.factions-swiper .swiper-button-next', prevEl: '.factions-swiper .swiper-button-prev' }
        });
    }

    static initClassesSwiper() {
        const swiperEl = document.querySelector('.classes-swiper');
        if (!swiperEl) return;
        new Swiper(swiperEl, {
            slidesPerView: 1,
            spaceBetween: 30,
            effect: 'flip',
            grabCursor: true,
            loop: true,
            flipEffect: { slideShadows: true },
            navigation: { nextEl: '.classes-swiper .swiper-button-next', prevEl: '.classes-swiper .swiper-button-prev' }
        });
    }
}

window.SwiperManager = SwiperManager;