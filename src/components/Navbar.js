import { icons } from './icons';
import { navigationLinks, personalInfo } from '../data/portfolioData';
import { getTheme, toggleTheme } from '../utils/theme';

export function renderNavbar() {
  const currentTheme = getTheme();
  const themeIcon = currentTheme === 'dark' ? icons.sun('w-5 h-5 text-amber-400') : icons.moon('w-5 h-5 text-violet-600');

  const navItemsHtml = navigationLinks
    .map(
      (link) => `
      <a
        href="${link.href}"
        data-nav-link="${link.href.replace('#', '')}"
        class="nav-link px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200/50 dark:hover:bg-slate-800/50"
      >
        ${link.name}
      </a>
    `
    )
    .join('');

  const mobileNavItemsHtml = navigationLinks
    .map(
      (link) => `
      <a
        href="${link.href}"
        data-mobile-link="${link.href.replace('#', '')}"
        class="mobile-nav-link block px-4 py-2.5 rounded-xl text-base font-medium transition-all text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-900"
      >
        ${link.name}
      </a>
    `
    )
    .join('');

  return `
    <header id="site-header" class="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-transparent py-5">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between">
          
          <!-- Logo -->
          <a
            href="#hero"
            class="group flex items-center gap-2.5 text-slate-900 dark:text-white font-display font-bold text-xl tracking-tight focus:outline-none focus:ring-2 focus:ring-violet-500 rounded-lg p-1"
          >
            <div class="w-10 h-10 rounded-xl bg-gradient-to-tr from-violet-600 via-indigo-600 to-cyan-400 p-[2px] transition-transform duration-300 group-hover:scale-105 group-hover:shadow-glow-md">
              <div class="w-full h-full bg-slate-50 dark:bg-slate-950 rounded-[10px] flex items-center justify-center">
                <div class="text-violet-600 dark:text-cyan-400 transition-transform duration-300 group-hover:rotate-6">
                  ${icons.code2('w-5 h-5')}
                </div>
              </div>
            </div>
            <div class="flex flex-col text-left">
              <span class="font-extrabold tracking-tight group-hover:text-violet-600 dark:group-hover:text-cyan-400 transition-colors">
                ${personalInfo.name}
              </span>
              <span class="text-[10px] uppercase font-mono tracking-widest text-slate-500 dark:text-slate-400 -mt-1">
                Portfolio
              </span>
            </div>
          </a>

          <!-- Desktop Navigation -->
          <nav class="hidden md:flex items-center gap-1 bg-slate-100/70 dark:bg-slate-900/60 p-1.5 rounded-full border border-slate-200/60 dark:border-slate-800/60 backdrop-blur-md">
            ${navItemsHtml}
          </nav>

          <!-- Actions: Theme Toggle & Contact Button -->
          <div class="hidden md:flex items-center gap-3">
            <button
              id="theme-toggle-btn"
              type="button"
              aria-label="Toggle dark/light theme"
              class="p-2.5 rounded-xl text-slate-600 dark:text-slate-300 hover:text-violet-600 dark:hover:text-cyan-400 bg-slate-100 dark:bg-slate-900/80 hover:bg-slate-200 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-violet-500 cursor-pointer"
            >
              <span id="theme-icon-slot">${themeIcon}</span>
            </button>

            <a
              href="#contact"
              class="group relative inline-flex items-center gap-1.5 px-4 py-2 text-sm font-semibold rounded-xl text-white bg-gradient-to-r from-violet-600 to-cyan-500 hover:from-violet-500 hover:to-cyan-400 shadow-md shadow-violet-500/20 hover:shadow-glow-sm transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-violet-500"
            >
              <span>Let's Talk</span>
              <span class="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                ${icons.arrowUpRight('w-4 h-4')}
              </span>
            </a>
          </div>

          <!-- Mobile Menu & Theme Buttons -->
          <div class="flex md:hidden items-center gap-2">
            <button
              id="mobile-theme-btn"
              type="button"
              aria-label="Toggle theme"
              class="p-2 rounded-lg text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 cursor-pointer"
            >
              <span id="mobile-theme-icon-slot">${themeIcon}</span>
            </button>

            <button
              id="mobile-menu-btn"
              type="button"
              aria-label="Toggle Navigation Menu"
              aria-expanded="false"
              class="p-2 rounded-lg text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 focus:outline-none focus:ring-2 focus:ring-violet-500 cursor-pointer"
            >
              <span id="hamburger-icon">${icons.menu('w-6 h-6')}</span>
            </button>
          </div>

        </div>
      </div>

      <!-- Mobile Drawer Menu -->
      <div
        id="mobile-menu-drawer"
        class="md:hidden overflow-hidden transition-all duration-300 ease-in-out max-h-0 opacity-0 bg-white/95 dark:bg-slate-950/95 backdrop-blur-xl shadow-xl"
      >
        <div class="px-5 py-4 space-y-2">
          ${mobileNavItemsHtml}
          <div class="pt-2">
            <a
              href="#contact"
              class="mobile-nav-link flex items-center justify-center gap-2 w-full py-2.5 rounded-xl text-white font-medium bg-gradient-to-r from-violet-600 to-cyan-500 shadow-md"
            >
              <span>Get in Touch</span>
              ${icons.arrowUpRight('w-4 h-4')}
            </a>
          </div>
        </div>
      </div>
    </header>
  `;
}

export function initNavbar() {
  const header = document.getElementById('site-header');
  const themeBtn = document.getElementById('theme-toggle-btn');
  const mobileThemeBtn = document.getElementById('mobile-theme-btn');
  const menuBtn = document.getElementById('mobile-menu-btn');
  const mobileDrawer = document.getElementById('mobile-menu-drawer');
  const hamburgerSlot = document.getElementById('hamburger-icon');
  const themeSlot = document.getElementById('theme-icon-slot');
  const mobileThemeSlot = document.getElementById('mobile-theme-icon-slot');

  let isMenuOpen = false;

  // 1. Scroll styling & Scrollspy active link
  const updateScrollState = () => {
    if (window.scrollY > 20) {
      header.classList.add(
        'bg-white/80',
        'dark:bg-slate-950/80',
        'backdrop-blur-md',
        'border-b',
        'border-slate-200/70',
        'dark:border-slate-800/80',
        'shadow-lg',
        'shadow-black/5',
        'dark:shadow-violet-950/10',
        'py-3'
      );
      header.classList.remove('bg-transparent', 'py-5');
    } else {
      header.classList.remove(
        'bg-white/80',
        'dark:bg-slate-950/80',
        'backdrop-blur-md',
        'border-b',
        'border-slate-200/70',
        'dark:border-slate-800/80',
        'shadow-lg',
        'shadow-black/5',
        'dark:shadow-violet-950/10',
        'py-3'
      );
      header.classList.add('bg-transparent', 'py-5');
    }

    // Scrollspy active section
    const sections = ['hero', 'about', 'skills', 'projects', 'experience', 'contact'];
    const scrollPosition = window.scrollY + 220;

    let currentSection = 'hero';
    for (const sectionId of sections) {
      const el = document.getElementById(sectionId);
      if (el) {
        const top = el.offsetTop;
        const height = el.offsetHeight;
        if (scrollPosition >= top && scrollPosition < top + height) {
          currentSection = sectionId;
          break;
        }
      }
    }

    // Update desktop link classes
    document.querySelectorAll('.nav-link').forEach((link) => {
      const target = link.getAttribute('data-nav-link');
      if (target === currentSection) {
        link.className =
          'nav-link px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 text-white bg-gradient-to-r from-violet-600 to-indigo-600 shadow-sm';
      } else {
        link.className =
          'nav-link px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200/50 dark:hover:bg-slate-800/50';
      }
    });

    // Update mobile link classes
    document.querySelectorAll('.mobile-nav-link[data-mobile-link]').forEach((link) => {
      const target = link.getAttribute('data-mobile-link');
      if (target === currentSection) {
        link.className =
          'mobile-nav-link block px-4 py-2.5 rounded-xl text-base font-medium transition-all text-white bg-gradient-to-r from-violet-600 to-indigo-600';
      } else {
        link.className =
          'mobile-nav-link block px-4 py-2.5 rounded-xl text-base font-medium transition-all text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-900';
      }
    });
  };

  window.addEventListener('scroll', updateScrollState, { passive: true });
  updateScrollState();

  // 2. Smooth scrolling for internal anchor clicks
  const handleNavClick = (e) => {
    const targetLink = e.target.closest('a[href^="#"]');
    if (!targetLink) return;

    const href = targetLink.getAttribute('href');
    if (!href || href === '#') return;

    const targetElement = document.querySelector(href);
    if (targetElement) {
      e.preventDefault();
      // Close mobile drawer if open
      if (isMenuOpen) {
        toggleMobileMenu();
      }
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  header.addEventListener('click', handleNavClick);

  // 3. Mobile Hamburger Menu Toggle
  const toggleMobileMenu = () => {
    isMenuOpen = !isMenuOpen;
    menuBtn.setAttribute('aria-expanded', String(isMenuOpen));

    if (isMenuOpen) {
      mobileDrawer.classList.remove('max-h-0', 'opacity-0');
      mobileDrawer.classList.add('max-h-96', 'opacity-100', 'border-b', 'border-slate-200/80', 'dark:border-slate-800');
      hamburgerSlot.innerHTML = icons.x('w-6 h-6');
    } else {
      mobileDrawer.classList.add('max-h-0', 'opacity-0');
      mobileDrawer.classList.remove('max-h-96', 'opacity-100', 'border-b', 'border-slate-200/80', 'dark:border-slate-800');
      hamburgerSlot.innerHTML = icons.menu('w-6 h-6');
    }
  };

  if (menuBtn) {
    menuBtn.addEventListener('click', toggleMobileMenu);
  }

  // 4. Dark / Light Theme Toggle
  const updateThemeIcons = (newTheme) => {
    const iconHtml =
      newTheme === 'dark'
        ? icons.sun('w-5 h-5 text-amber-400')
        : icons.moon('w-5 h-5 text-violet-600');
    if (themeSlot) themeSlot.innerHTML = iconHtml;
    if (mobileThemeSlot) mobileThemeSlot.innerHTML = iconHtml;
  };

  const handleThemeToggle = () => {
    const newTheme = toggleTheme();
    updateThemeIcons(newTheme);
  };

  if (themeBtn) themeBtn.addEventListener('click', handleThemeToggle);
  if (mobileThemeBtn) mobileThemeBtn.addEventListener('click', handleThemeToggle);

  window.addEventListener('theme-change', (e) => {
    updateThemeIcons(e.detail.theme);
  });
}
