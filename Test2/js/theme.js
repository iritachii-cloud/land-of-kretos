class ThemeManager {
    static init() {
        this.applyTheme(localStorage.getItem('kretos-theme') || 'light');
    }

    static toggleTheme() {
        const newTheme = document.body.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
        this.applyTheme(newTheme);
        localStorage.setItem('kretos-theme', newTheme);
        
        const toggleBtn = document.getElementById('themeToggle');
        if (toggleBtn) {
            toggleBtn.textContent = newTheme === 'dark' ? '☀️' : '🌙';
        }
    }

    static applyTheme(theme) {
        document.body.setAttribute('data-theme', theme);
    }
}