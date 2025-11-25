// Theme toggle: toggles html.dark / html.light and persists choice in localStorage
(function () {
    const toggle = document.getElementById('theme-toggle');
    if (!toggle) return;
    const root = document.documentElement;
    const iconEl = toggle.querySelector('.icon');
    const labelEl = toggle.querySelector('.label');

    function setTheme(t) {
        root.classList.remove('light', 'dark');
        if (t === 'dark') root.classList.add('dark');
        else root.classList.add('light');
        localStorage.setItem('theme', t);
        updateUI(t);
    }

    function updateUI(t) {
        if (!iconEl || !labelEl) return;
        if (t === 'dark') {
            iconEl.textContent = '🌙';
            labelEl.textContent = 'Dark';
        } else {
            iconEl.textContent = '☀️';
            labelEl.textContent = 'Light';
        }
    }

    // initial theme: saved > user preference > light
    const saved = localStorage.getItem('theme');
    let theme = saved;
    if (!theme) {
        theme = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }

    setTheme(theme);

    toggle.addEventListener('click', function () {
        const next = root.classList.contains('dark') ? 'light' : 'dark';
        setTheme(next);
    });
})();
