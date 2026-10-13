import { icons } from './icons';
import { projectsData } from '../data/portfolioData';
import { openProjectModal } from './ProjectModal';

function renderProjectCard(project) {
  const visibleTags = project.tags.slice(0, 4);
  const remainingCount = project.tags.length - 4;

  const tagsHtml = visibleTags
    .map(
      (tag) => `
      <span class="px-2.5 py-0.5 rounded-md text-xs font-mono bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200/80 dark:border-slate-700/80">
        ${tag}
      </span>
    `
    )
    .join('');

  const moreTagsHtml =
    remainingCount > 0
      ? `<span class="px-2 py-0.5 rounded-md text-xs font-mono bg-slate-100 dark:bg-slate-800 text-slate-500">+${remainingCount}</span>`
      : '';

  return `
    <article
      data-project-id="${project.id}"
      data-project-category="${project.category}"
      class="project-card group relative flex flex-col rounded-2xl overflow-hidden bg-white/70 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800/80 backdrop-blur-md hover:border-violet-500/50 dark:hover:border-cyan-400/50 shadow-sm hover:shadow-glow-md transition-all duration-300 transform hover:-translate-y-1.5"
    >
      <!-- Image Preview Container -->
      <div
        class="project-card-trigger relative h-52 sm:h-56 overflow-hidden bg-slate-950 cursor-pointer"
      >
        <img
          src="${project.image}"
          alt="${project.title}"
          class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-90 group-hover:opacity-100"
          loading="lazy"
        />
        
        <!-- Gradient overlay -->
        <div class="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent"></div>

        <!-- Category Badge -->
        <div class="absolute top-3 left-3">
          <span class="px-3 py-1 rounded-full text-xs font-mono font-medium bg-slate-950/70 border border-slate-700/80 text-violet-300 dark:text-cyan-300 backdrop-blur-md">
            ${project.category}
          </span>
        </div>

        <!-- Inspect Overlay Button -->
        <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-slate-950/40 backdrop-blur-[2px]">
          <span class="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-white bg-violet-600/90 shadow-lg">
            ${icons.eye('w-4 h-4')}
            Quick Case Study
          </span>
        </div>
      </div>

      <!-- Card Body -->
      <div class="p-6 flex-1 flex flex-col justify-between">
        <div>
          <h3
            class="project-card-trigger text-xl font-display font-bold text-slate-900 dark:text-white mb-2 group-hover:text-violet-600 dark:group-hover:text-cyan-400 transition-colors cursor-pointer flex items-center justify-between"
          >
            <span>${project.title}</span>
            <span class="opacity-0 group-hover:opacity-100 transition-opacity text-violet-500 dark:text-cyan-400">
              ${icons.arrowUpRight('w-5 h-5')}
            </span>
          </h3>

          <p class="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-4 line-clamp-2">
            ${project.summary}
          </p>

          <!-- Tech Badges -->
          <div class="flex flex-wrap gap-1.5 mb-6">
            ${tagsHtml}
            ${moreTagsHtml}
          </div>
        </div>

        <!-- Card Action Links -->
        <div class="pt-4 border-t border-slate-200/80 dark:border-slate-800/80 flex items-center justify-between">
          <button
            type="button"
            class="project-card-trigger text-xs font-semibold text-violet-600 dark:text-cyan-400 hover:underline flex items-center gap-1 focus:outline-none cursor-pointer"
          >
            <span>View Architecture</span>
            ${icons.arrowUpRight('w-3.5 h-3.5')}
          </button>

          <div class="flex items-center gap-2">
            <a
              href="${project.github}"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="${project.title} source code on GitHub"
              title="GitHub Repository"
              class="p-2 rounded-lg text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              ${icons.github('w-4 h-4')}
            </a>

            ${
              project.liveDemo
                ? `
            <a
              href="${project.liveDemo}"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="${project.title} project details"
              title="Project Details / Documentation"
              class="p-2 rounded-lg text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              ${icons.externalLink('w-4 h-4')}
            </a>
            `
                : ''
            }
          </div>
        </div>
      </div>
    </article>
  `;
}

export function renderProjects() {
  const dynamicCategories = [...new Set(projectsData.map((p) => p.category))];
  const categories = ['All', ...dynamicCategories];

  const filterTabsHtml = categories
    .map((cat, idx) => {
      const count =
        cat === 'All'
          ? projectsData.length
          : projectsData.filter((p) => p.category === cat).length;
      const isActive = idx === 0;

      return `
        <button
          type="button"
          data-project-filter="${cat}"
          class="project-filter-btn flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 cursor-pointer ${
            isActive
              ? 'bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow-md shadow-violet-500/20'
              : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200/60 dark:hover:bg-slate-800/60'
          }"
        >
          <span>${cat}</span>
          <span class="text-xs px-2 py-0.5 rounded-full ${
            isActive ? 'bg-white/20 text-white' : 'bg-slate-200 dark:bg-slate-800 text-slate-500 dark:text-slate-400'
          }">
            ${count}
          </span>
        </button>
      `;
    })
    .join('');

  const projectsGridHtml = projectsData.map((p) => renderProjectCard(p)).join('');

  return `
    <section id="projects" class="py-24 relative overflow-hidden">
      <!-- Background Ambient Orbs -->
      <div class="absolute top-1/3 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none -z-10"></div>
      <div class="absolute bottom-10 left-10 w-96 h-96 bg-violet-600/10 rounded-full blur-[120px] pointer-events-none -z-10"></div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <!-- Section Header -->
        <div class="text-center max-w-3xl mx-auto mb-12">
          <div class="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold tracking-wider uppercase text-violet-600 dark:text-cyan-400 bg-violet-500/10 dark:bg-cyan-400/10 border border-violet-500/20 dark:border-cyan-400/20 mb-4">
            Featured Portfolio
          </div>
          <h2 class="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
            Crafted with <span class="bg-clip-text text-transparent bg-gradient-to-r from-violet-600 via-purple-500 to-cyan-400">Precision & Scale</span>
          </h2>
          <p class="text-slate-600 dark:text-slate-400 text-base sm:text-lg">
            A curated selection of production web applications, open-source utilities, and interactive design engineering prototypes.
          </p>
        </div>

        <!-- Filter Tabs -->
        <div class="flex items-center justify-center mb-12">
          <div class="flex flex-wrap items-center justify-center gap-2 p-1.5 rounded-2xl bg-slate-100 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 backdrop-blur-md">
            ${filterTabsHtml}
          </div>
        </div>

        <!-- Projects Grid -->
        <div id="projects-grid" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          ${projectsGridHtml}
        </div>

      </div>
    </section>
  `;
}

export function initProjects() {
  const filterBtns = document.querySelectorAll('.project-filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  // 1. Category Filtering
  filterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const category = btn.getAttribute('data-project-filter');
      if (!category) return;

      // Update button styles
      filterBtns.forEach((b) => {
        const isSelected = b === btn;
        const countSpan = b.querySelector('span:last-child');

        if (isSelected) {
          b.className =
            'project-filter-btn flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 cursor-pointer bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow-md shadow-violet-500/20';
          if (countSpan) countSpan.className = 'text-xs px-2 py-0.5 rounded-full bg-white/20 text-white';
        } else {
          b.className =
            'project-filter-btn flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 cursor-pointer text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200/60 dark:hover:bg-slate-800/60';
          if (countSpan)
            countSpan.className =
              'text-xs px-2 py-0.5 rounded-full bg-slate-200 dark:bg-slate-800 text-slate-500 dark:text-slate-400';
        }
      });

      // Show/Hide project cards
      projectCards.forEach((card) => {
        const cardCategory = card.getAttribute('data-project-category');
        const shouldShow = category === 'All' || cardCategory === category;

        if (shouldShow) {
          card.classList.remove('hidden');
          // subtle entrance animation
          card.style.opacity = '0';
          card.style.transform = 'scale(0.96)';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'scale(1)';
          }, 50);
        } else {
          card.classList.add('hidden');
        }
      });
    });
  });

  // 2. Card click opens project modal
  projectCards.forEach((card) => {
    const projectId = card.getAttribute('data-project-id');
    const triggers = card.querySelectorAll('.project-card-trigger');

    triggers.forEach((trigger) => {
      trigger.addEventListener('click', (e) => {
        // Prevent opening if user clicked a link
        if (e.target.closest('a')) return;
        openProjectModal(projectId);
      });
    });
  });
}
