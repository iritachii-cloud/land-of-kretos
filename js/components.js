// Dynamic navbar injection
async function injectNavbar() {
    const navbarContainer = document.getElementById('navbar-container');
    if(!navbarContainer) return;
    const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
    navbarContainer.innerHTML = `
        <nav class="navbar">
            <div class="nav-logo">⚔️ KRETOS</div>
            <div class="nav-links">
                <a href="index.html">Home</a>
                <a href="heroes.html">Heroes</a>
                <a href="monsters.html">Monsters</a>
                <a href="novel.html">Novel</a>
                <button id="theme-toggle-btn" class="theme-toggle"><i class="fas ${currentTheme === 'dark' ? 'fa-sun' : 'fa-moon'}"></i></button>
            </div>
        </nav>
    `;
    const themeBtn = document.getElementById('theme-toggle-btn');
    if(themeBtn) {
        themeBtn.addEventListener('click', () => {
            toggleTheme();
            const newTheme = document.documentElement.getAttribute('data-theme');
            themeBtn.innerHTML = `<i class="fas ${newTheme === 'dark' ? 'fa-sun' : 'fa-moon'}"></i>`;
        });
    }
}
document.addEventListener('DOMContentLoaded', injectNavbar);