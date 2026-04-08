class Navbar {
    static init() {
        this.render();
        this.setupEvents();
        this.setActiveLink();
    }

    static render() {
        const container = document.getElementById('navbar-container');
        if (!container) return;
        const currentTheme = localStorage.getItem('kretos-theme') || 'light';
        container.innerHTML = `
            <div class="navbar">
                <div class="container">
                    <div class="nav-brand">
                        <img loading="lazy" src="assets/images/kretos-logo.png" alt="Kretos" class="logo" onerror="this.src='https://placehold.co/42x42'">
                        <span class="brand-text">Kretos</span>
                    </div>
                    <ul class="nav-menu">
                        <li><a href="index.html" class="nav-link" data-page="home">Home</a></li>
                        <li><a href="heroes.html" class="nav-link" data-page="heroes">Heroes</a></li>
                        <li><a href="monsters.html" class="nav-link" data-page="monsters">Monsters</a></li>
                        <li><a href="novel.html" class="nav-link" data-page="novel">Novel</a></li>
                    </ul>
                    <div class="nav-actions">
                        <button id="themeToggle" class="theme-toggle">${currentTheme === 'dark' ? '☀️' : '🌙'}</button>
                        <button class="mobile-menu-toggle">☰</button>
                    </div>
                </div>
            </div>
        `;
    }

    static setupEvents() {
        const toggle = document.getElementById('themeToggle');
        if (toggle) toggle.addEventListener('click', () => ThemeManager.toggleTheme());
        const mobileBtn = document.querySelector('.mobile-menu-toggle');
        if (mobileBtn) mobileBtn.addEventListener('click', () => document.querySelector('.nav-menu')?.classList.toggle('active'));
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => document.querySelector('.nav-menu')?.classList.remove('active'));
        });
    }

    static setActiveLink() {
        const current = window.location.pathname.split('/').pop() || 'index.html';
        document.querySelectorAll('.nav-link').forEach(link => {
            if (link.getAttribute('href') === current) link.classList.add('active');
        });
    }
}

class ThemeManager {
    static init() {
        const saved = localStorage.getItem('kretos-theme') || 'light';
        this.applyTheme(saved);
    }
    static toggleTheme() {
        const newTheme = document.body.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
        this.applyTheme(newTheme);
        localStorage.setItem('kretos-theme', newTheme);
        const toggleBtn = document.getElementById('themeToggle');
        if (toggleBtn) toggleBtn.textContent = newTheme === 'dark' ? '☀️' : '🌙';
    }
    static applyTheme(theme) {
        document.body.setAttribute('data-theme', theme);
    }
}