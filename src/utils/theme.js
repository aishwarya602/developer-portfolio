/**
 * Pure Vanilla JavaScript Theme Switcher
 * Manages dark/light theme state with localStorage persistence
 */

const STORAGE_KEY = 'portfolio-theme';

export function getTheme() {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved) return saved;
  // Dark mode first by default
  return 'dark';
}

export function setTheme(theme) {
  const root = document.documentElement;
  if (theme === 'dark') {
    root.classList.add('dark');
  } else {
    root.classList.remove('dark');
  }
  localStorage.setItem(STORAGE_KEY, theme);
  window.dispatchEvent(new CustomEvent('theme-change', { detail: { theme } }));
}

export function toggleTheme() {
  const current = getTheme();
  const next = current === 'dark' ? 'light' : 'dark';
  setTheme(next);
  return next;
}

export function initTheme() {
  const current = getTheme();
  setTheme(current);
}
