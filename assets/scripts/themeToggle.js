const THEME_KEY = 'theme';
const DARK_THEME = 'dark';
const LIGHT_THEME = 'light';

window.addEventListener('DOMContentLoaded', initThemeToggle);

function initThemeToggle() {
  const toggleButton = document.querySelector('#theme-toggle');

  if (localStorage.getItem(THEME_KEY) === DARK_THEME) {
    document.body.classList.add('dark-mode');
  }

  if (!toggleButton) return;

  updateToggleButton(toggleButton);
  toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    const isDarkMode = document.body.classList.contains('dark-mode');
    localStorage.setItem(THEME_KEY, isDarkMode ? DARK_THEME : LIGHT_THEME);
    updateToggleButton(toggleButton);
  });
}

function updateToggleButton(toggleButton) {
  const isDarkMode = document.body.classList.contains('dark-mode');
  toggleButton.textContent = isDarkMode ? 'Toggle Light Mode' : 'Toggle Dark Mode';
  toggleButton.setAttribute('aria-pressed', String(isDarkMode));
}
