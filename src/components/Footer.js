import { icons } from './icons';
import { personalInfo, navigationLinks } from '../data/portfolioData';

const CURRENT_YEAR = new Date().getFullYear();

export function renderFooter() {
  const navLinksHtml = navigationLinks
    .map(
      (link) => `
      <a
        href="${link.href}"
        class="hover:text-violet-600 dark:hover:text-cyan-400 transition-colors"
      >
        ${link.name}
      </a>
    `
    )
    .join('');

  return `
    <footer class="relative border-t border-slate-200/80 dark:border-slate-800/80 bg-white/50 dark:bg-slate-950/70 backdrop-blur-md pt-16 pb-12">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <!-- Top Footer Row -->
        <div class="flex flex-col md:flex-row items-center justify-between gap-8 pb-12 border-b border-slate-200/60 dark:border-slate-800/60">
          
          <!-- Logo & Bio Tag -->
          <div class="flex flex-col items-center md:items-start text-center md:text-left">
            <div class="flex items-center gap-2.5 mb-2">
              <div class="w-8 h-8 rounded-lg bg-gradient-to-tr from-violet-600 to-cyan-400 p-[2px]">
                <div class="w-full h-full bg-slate-50 dark:bg-slate-950 rounded-[6px] flex items-center justify-center">
                  <span class="text-violet-600 dark:text-cyan-400">${icons.code2('w-4 h-4')}</span>
                </div>
              </div>
              <span class="font-display font-bold text-lg text-slate-900 dark:text-white">
                ${personalInfo.name}
              </span>
            </div>
            <p class="text-xs sm:text-sm text-slate-500 dark:text-slate-400 max-w-sm">
              Crafting delightful digital experiences with clean ES6+ JavaScript, modern web standards, and thoughtful design.
            </p>
          </div>

          <!-- Quick Navigation Links -->
          <div class="flex flex-wrap items-center justify-center gap-6 text-sm font-medium text-slate-600 dark:text-slate-400">
            ${navLinksHtml}
          </div>

          <!-- Social Links & Back To Top -->
          <div class="flex items-center gap-3">
            <a
              href="${personalInfo.socials.github}"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              class="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-900 hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-slate-800 transition-colors"
            >
              ${icons.github('w-4 h-4')}
            </a>

            <a
              href="${personalInfo.socials.linkedin}"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              class="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-900 hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-slate-800 transition-colors"
            >
              ${icons.linkedin('w-4 h-4')}
            </a>

            <a
              href="${personalInfo.socials.twitter}"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              class="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-900 hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-slate-800 transition-colors"
            >
              ${icons.twitter('w-4 h-4')}
            </a>

            <button
              id="back-to-top-btn"
              type="button"
              aria-label="Scroll back to top"
              class="p-2.5 rounded-xl bg-violet-600/10 dark:bg-cyan-400/10 hover:bg-violet-600/20 dark:hover:bg-cyan-400/20 text-violet-600 dark:text-cyan-400 border border-violet-500/20 dark:border-cyan-400/20 transition-all hover:-translate-y-1 ml-2 cursor-pointer"
              title="Back to Top"
            >
              ${icons.arrowUp('w-4 h-4')}
            </button>
          </div>

        </div>

        <!-- Bottom Sub-Footer -->
        <div class="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 dark:text-slate-400">
          <p>© ${CURRENT_YEAR} ${personalInfo.name}. All rights reserved.</p>
          <p class="flex items-center gap-1">
            Built with pure Vanilla JavaScript (ES6+), Vite & Tailwind CSS
          </p>
        </div>

      </div>
    </footer>
  `;
}

export function initFooter() {
  const backToTopBtn = document.getElementById('back-to-top-btn');

  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    });
  }
}
