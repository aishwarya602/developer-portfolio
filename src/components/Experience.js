import { icons } from './icons';
import { experienceData } from '../data/portfolioData';

export function renderExperience() {
  const timelineCardsHtml = experienceData
    .map((exp, index) => {
      const isEven = index % 2 === 0;
      const isExpandedFirst = index === 0;

      const achievementsListHtml = exp.achievements
        .map(
          (a) => `
        <div class="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
          <span class="text-emerald-500 flex-shrink-0 mt-0.5">${icons.checkCircle2('w-4 h-4')}</span>
          <span>${a}</span>
        </div>
      `
        )
        .join('');

      const techBadgesHtml = exp.tech
        .map(
          (t) => `
        <span class="px-2 py-0.5 rounded text-[11px] font-mono bg-slate-100 dark:bg-slate-800/80 text-slate-600 dark:text-slate-300">
          ${t}
        </span>
      `
        )
        .join('');

      return `
        <div class="relative flex flex-col md:flex-row items-center ${isEven ? 'md:flex-row-reverse' : ''}">
          <!-- Central Node Badge -->
          <div class="absolute left-6 md:left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-slate-900 border-2 border-violet-500 dark:border-cyan-400 flex items-center justify-center text-white shadow-glow-sm z-10">
            <span class="text-cyan-400">${icons.briefcase('w-4 h-4')}</span>
          </div>

          <!-- Empty Column for Alternating Desktop Layout -->
          <div class="hidden md:block w-1/2"></div>

          <!-- Timeline Card Column -->
          <div class="w-full md:w-1/2 pl-14 md:pl-0 md:px-10">
            <div
              data-exp-card="${exp.id}"
              class="group p-6 sm:p-7 rounded-2xl bg-white/75 dark:bg-slate-900/70 border border-slate-200/80 dark:border-slate-800/80 backdrop-blur-md shadow-sm hover:shadow-glow-sm transition-all duration-300 ${
                isExpandedFirst ? 'border-violet-500/50 dark:border-cyan-400/50' : ''
              }"
            >
              <!-- Meta Badges -->
              <div class="flex flex-wrap items-center justify-between gap-2 mb-2">
                <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium text-violet-700 dark:text-cyan-300 bg-violet-100 dark:bg-slate-800 border border-violet-200 dark:border-slate-700">
                  ${icons.calendar('w-3.5 h-3.5')}
                  ${exp.period}
                </span>

                <span class="text-xs font-mono text-slate-500 flex items-center gap-1">
                  ${icons.mapPin('w-3.5 h-3.5')}
                  ${exp.location}
                </span>
              </div>

              <!-- Role & Company -->
              <h3 class="text-xl font-display font-bold text-slate-900 dark:text-white mt-1 mb-1">
                ${exp.role}
              </h3>

              <div class="flex items-center gap-2 text-violet-600 dark:text-cyan-400 font-medium text-sm mb-3">
                ${icons.building2('w-4 h-4')}
                <span>${exp.company}</span>
                <span class="text-xs px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
                  ${exp.type}
                </span>
              </div>

              <p class="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-4">
                ${exp.description}
              </p>

              <!-- Interactive Accordion Button -->
              <div class="border-t border-slate-200/60 dark:border-slate-800/60 pt-3">
                <button
                  type="button"
                  data-exp-toggle="${exp.id}"
                  class="exp-toggle-btn w-full flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 hover:text-violet-600 dark:hover:text-cyan-400 transition-colors py-1 focus:outline-none cursor-pointer"
                >
                  <span>Key Accomplishments & Metrics (${exp.achievements.length})</span>
                  <span class="exp-chevron-icon transition-transform duration-300 ${isExpandedFirst ? 'rotate-180' : ''}">
                    ${icons.chevronDown('w-4 h-4')}
                  </span>
                </button>

                <!-- Collapsible Achievements -->
                <div
                  id="exp-achievements-${exp.id}"
                  class="exp-achievements-drawer overflow-hidden transition-all duration-300 ${
                    isExpandedFirst ? 'max-h-96 opacity-100 mt-3' : 'max-h-0 opacity-0 mt-0'
                  }"
                >
                  <div class="space-y-2.5">
                    ${achievementsListHtml}
                  </div>
                </div>
              </div>

              <!-- Tech Stack Badges -->
              <div class="mt-4 pt-3 border-t border-slate-200/60 dark:border-slate-800/60 flex flex-wrap gap-1.5">
                ${techBadgesHtml}
              </div>
            </div>
          </div>
        </div>
      `;
    })
    .join('');

  return `
    <section id="experience" class="py-24 relative overflow-hidden">
      <!-- Background Ambient Glow -->
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-violet-600/5 rounded-full blur-[140px] pointer-events-none -z-10"></div>

      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <!-- Section Header -->
        <div class="text-center max-w-3xl mx-auto mb-16">
          <div class="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold tracking-wider uppercase text-violet-600 dark:text-cyan-400 bg-violet-500/10 dark:bg-cyan-400/10 border border-violet-500/20 dark:border-cyan-400/20 mb-4">
            Career Journey
          </div>
          <h2 class="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
            Experience & <span class="bg-clip-text text-transparent bg-gradient-to-r from-violet-600 via-purple-500 to-cyan-400">Impact Delivered</span>
          </h2>
          <p class="text-slate-600 dark:text-slate-400 text-base sm:text-lg">
            Track record of driving measurable business outcomes, leading engineering pods, and architecting resilient web platforms.
          </p>
        </div>

        <!-- Vertical Timeline Container -->
        <div class="relative">
          <!-- Central Glowing Guide Lines -->
          <div class="hidden md:block absolute left-1/2 top-4 bottom-4 -translate-x-1/2 w-0.5 bg-gradient-to-b from-violet-600 via-cyan-400 to-slate-800"></div>
          <div class="md:hidden absolute left-6 top-4 bottom-4 w-0.5 bg-gradient-to-b from-violet-600 via-cyan-400 to-slate-800"></div>

          <!-- Cards List -->
          <div class="space-y-12">
            ${timelineCardsHtml}
          </div>
        </div>

      </div>
    </section>
  `;
}

export function initExperience() {
  const toggleBtns = document.querySelectorAll('.exp-toggle-btn');

  toggleBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const expId = btn.getAttribute('data-exp-toggle');
      if (!expId) return;

      const drawer = document.getElementById(`exp-achievements-${expId}`);
      const chevron = btn.querySelector('.exp-chevron-icon');
      const card = btn.closest('[data-exp-card]');

      if (!drawer) return;

      const isOpen = drawer.classList.contains('max-h-96');

      if (isOpen) {
        // Collapse
        drawer.classList.remove('max-h-96', 'opacity-100', 'mt-3');
        drawer.classList.add('max-h-0', 'opacity-0', 'mt-0');
        if (chevron) chevron.classList.remove('rotate-180');
        if (card) card.classList.remove('border-violet-500/50', 'dark:border-cyan-400/50');
      } else {
        // Expand
        drawer.classList.add('max-h-96', 'opacity-100', 'mt-3');
        drawer.classList.remove('max-h-0', 'opacity-0', 'mt-0');
        if (chevron) chevron.classList.add('rotate-180');
        if (card) card.classList.add('border-violet-500/50', 'dark:border-cyan-400/50');
      }
    });
  });
}
