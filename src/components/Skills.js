import { icons } from './icons';
import { skillsData } from '../data/portfolioData';

const categoryIconMap = {
  Frontend: icons.layout,
  Backend: icons.server,
  'AI & Machine Learning': icons.cpu,
  'Databases & SQL': icons.layers,
  'Tools & Workflow': icons.wrench,
  'Soft Skills': icons.messageSquare,
};

function renderSkillsList(category) {
  const skills = skillsData[category] || [];
  const isSoftSkill = category === 'Soft Skills';

  return skills
    .map((skill) => {
      const hotBadge = skill.hot
        ? `<span class="flex items-center gap-1 text-[11px] font-mono text-amber-500 bg-amber-500/10 px-2 py-0.5 rounded-full border border-amber-500/20">
             ${icons.flame('w-3 h-3 fill-amber-500')} Core
           </span>`
        : '';

      const yearsBadge = skill.years
        ? `<span class="text-[11px] font-mono text-slate-500">${skill.years}</span>`
        : '';

      const descHtml =
        isSoftSkill && skill.description
          ? `<p class="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mt-2">${skill.description}</p>`
          : '';

      const progressHtml = !isSoftSkill
        ? `
          <div class="mt-4 pt-3 border-t border-slate-200/60 dark:border-slate-800/60">
            <div class="w-full bg-slate-200 dark:bg-slate-800 h-1.5 rounded-full overflow-hidden">
              <div
                class="bg-gradient-to-r from-violet-500 to-cyan-400 h-full rounded-full transition-all duration-500 group-hover:opacity-100 opacity-80"
                style="width: ${
                  skill.level === 'Expert' ? '95%' : skill.level === 'Advanced' ? '85%' : '70%'
                }"
              ></div>
            </div>
          </div>
        `
        : '';

      return `
        <div class="group relative p-5 rounded-2xl bg-white/70 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800/80 backdrop-blur-md shadow-sm hover:shadow-glow-sm hover:border-violet-500/50 dark:hover:border-cyan-400/50 transition-all duration-300 transform hover:-translate-y-1 flex flex-col justify-between">
          <div>
            <!-- Header Row -->
            <div class="flex items-center justify-between mb-3">
              <span class="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-medium text-violet-700 dark:text-cyan-300 bg-violet-100 dark:bg-slate-800 border border-violet-200 dark:border-slate-700">
                ${skill.level}
              </span>
              ${hotBadge}
              ${yearsBadge}
            </div>

            <!-- Skill Name -->
            <h3 class="text-base font-display font-bold text-slate-900 dark:text-white mb-1 group-hover:text-violet-600 dark:group-hover:text-cyan-400 transition-colors">
              ${skill.name}
            </h3>

            ${descHtml}
          </div>

          ${progressHtml}
        </div>
      `;
    })
    .join('');
}

export function renderSkills() {
  const categories = Object.keys(skillsData);
  const initialCategory = categories[0];

  const categoryTabsHtml = categories
    .map((cat, idx) => {
      const getIcon = categoryIconMap[cat] || icons.layout;
      const count = skillsData[cat].length;
      const isActive = idx === 0;

      return `
        <button
          type="button"
          data-skill-category="${cat}"
          class="skill-category-tab flex items-center gap-2.5 px-5 py-3 rounded-2xl text-sm font-semibold transition-all duration-300 cursor-pointer ${
            isActive
              ? 'bg-gradient-to-r from-violet-600 to-cyan-500 text-white shadow-lg shadow-violet-500/25 scale-105'
              : 'bg-white/80 dark:bg-slate-900/60 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white border border-slate-200/80 dark:border-slate-800/80 hover:bg-slate-100 dark:hover:bg-slate-800'
          }"
        >
          ${getIcon('w-4 h-4')}
          <span>${cat}</span>
          <span class="text-xs px-2 py-0.5 rounded-full ${
            isActive ? 'bg-white/20' : 'bg-slate-200 dark:bg-slate-800'
          }">
            ${count}
          </span>
        </button>
      `;
    })
    .join('');

  return `
    <section id="skills" class="py-24 relative overflow-hidden">
      <!-- Background Ambient Glow -->
      <div class="absolute top-1/2 right-10 w-96 h-96 bg-purple-600/10 rounded-full blur-[130px] pointer-events-none -z-10"></div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <!-- Section Header -->
        <div class="text-center max-w-3xl mx-auto mb-14">
          <div class="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold tracking-wider uppercase text-violet-600 dark:text-cyan-400 bg-violet-500/10 dark:bg-cyan-400/10 border border-violet-500/20 dark:border-cyan-400/20 mb-4">
            Technical Competencies
          </div>
          <h2 class="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
            Skills Matrix & <span class="bg-clip-text text-transparent bg-gradient-to-r from-violet-600 to-cyan-400">Tool Proficiency</span>
          </h2>
          <p class="text-slate-600 dark:text-slate-400 text-base sm:text-lg">
            A comprehensive overview of programming languages, frameworks, cloud architecture, and collaborative competencies.
          </p>
        </div>

        <!-- Category Tabs -->
        <div class="flex flex-wrap items-center justify-center gap-3 mb-12">
          ${categoryTabsHtml}
        </div>

        <!-- Skills Grid Container -->
        <div id="skills-grid-container" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 transition-opacity duration-200">
          ${renderSkillsList(initialCategory)}
        </div>

        <!-- Bottom Callout Strip -->
        <div class="mt-14 p-6 rounded-2xl bg-gradient-to-r from-violet-900/10 via-cyan-900/10 to-indigo-900/10 border border-violet-500/20 dark:border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <div>
            <h4 class="text-base font-display font-bold text-slate-900 dark:text-white">
              Looking for a tailored stack for your team?
            </h4>
            <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
              I quickly adapt to custom tech ecosystems, internal toolkits, and emerging enterprise standards.
            </p>
          </div>
          <a
            href="#contact"
            class="px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-white bg-slate-900 dark:bg-white dark:text-slate-900 hover:bg-violet-700 dark:hover:bg-slate-200 transition-colors whitespace-nowrap shadow-sm"
          >
            Discuss Tech Requirements
          </a>
        </div>

      </div>
    </section>
  `;
}

export function initSkills() {
  const tabs = document.querySelectorAll('.skill-category-tab');
  const container = document.getElementById('skills-grid-container');

  tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      const category = tab.getAttribute('data-skill-category');
      if (!category) return;

      // Update tabs styling
      tabs.forEach((t) => {
        const isSelected = t === tab;
        const countSpan = t.querySelector('span:last-child');

        if (isSelected) {
          t.className =
            'skill-category-tab flex items-center gap-2.5 px-5 py-3 rounded-2xl text-sm font-semibold transition-all duration-300 cursor-pointer bg-gradient-to-r from-violet-600 to-cyan-500 text-white shadow-lg shadow-violet-500/25 scale-105';
          if (countSpan) countSpan.className = 'text-xs px-2 py-0.5 rounded-full bg-white/20';
        } else {
          t.className =
            'skill-category-tab flex items-center gap-2.5 px-5 py-3 rounded-2xl text-sm font-semibold transition-all duration-300 cursor-pointer bg-white/80 dark:bg-slate-900/60 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white border border-slate-200/80 dark:border-slate-800/80 hover:bg-slate-100 dark:hover:bg-slate-800';
          if (countSpan) countSpan.className = 'text-xs px-2 py-0.5 rounded-full bg-slate-200 dark:bg-slate-800';
        }
      });

      // Smooth switch of skills cards
      if (container) {
        container.style.opacity = '0';
        container.style.transform = 'translateY(6px)';

        setTimeout(() => {
          container.innerHTML = renderSkillsList(category);
          container.style.opacity = '1';
          container.style.transform = 'translateY(0)';
        }, 150);
      }
    });
  });
}
