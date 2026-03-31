class Navbar {
    static init() {
        this.render();
        this.setupEventListeners();
    }

    static render() {
        const navbarContainer = document.getElementById('navbar-container');
        if (!navbarContainer) return;

        const currentTheme = localStorage.getItem('kretos-theme') || 'light';
        navbarContainer.innerHTML = `
            <div class="navbar">
                <div class="container">
                    <div class="nav-brand">
                        <img src="assets/images/placeholders/kretos-logo.png" alt="Kretos" class="logo">
                        <span class="brand-text">Kretos</span>
                    </div>
                    <ul class="nav-menu">
                        <li><a href="index.html" data-page="home" class="nav-link">Home</a></li>
                        <li><a href="heroes.html" data-page="heroes" class="nav-link">Heroes</a></li>
                        <li><a href="monsters.html" data-page="monsters" class="nav-link">Monsters</a></li>
                        <li><a href="novel.html" data-page="novel" class="nav-link">Novel</a></li>
                    </ul>
                    <div class="nav-actions">
                        <button id="themeToggle" class="theme-toggle">
                            ${currentTheme === 'dark' ? '☀️' : '🌙'}
                        </button>
                        <button class="mobile-menu-toggle">☰</button>
                    </div>
                </div>
            </div>
        `;
    }

    static setupEventListeners() {
        const themeToggle = document.getElementById('themeToggle');
        if (themeToggle) {
            themeToggle.addEventListener('click', () => {
                ThemeManager.toggleTheme();
            });
        }

        const mobileToggle = document.querySelector('.mobile-menu-toggle');
        if (mobileToggle) {
            mobileToggle.addEventListener('click', () => {
                document.querySelector('.nav-menu').classList.toggle('active');
            });
        }

        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                document.querySelector('.nav-menu')?.classList.remove('active');
            });
        });
    }
}