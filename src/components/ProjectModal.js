import { icons } from './icons';
import { projectsData } from '../data/portfolioData';

/**
 * Native Interactive Project Modal Handler
 */

export function renderProjectModal() {
  return `
    <dialog
      id="project-detail-modal"
      class="backdrop:bg-black/80 backdrop:backdrop-blur-md bg-transparent p-4 sm:p-6 w-full max-w-3xl m-auto rounded-3xl outline-none border-none shadow-2xl transition-all"
    >
      <div
        id="project-modal-content"
        class="relative w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-2xl overflow-hidden transform transition-all text-slate-900 dark:text-white"
      >
        <!-- Modal Content Dynamically Injected Here -->
      </div>
    </dialog>
  `;
}

export function openProjectModal(projectId) {
  const modal = document.getElementById('project-detail-modal');
  const modalContent = document.getElementById('project-modal-content');
  if (!modal || !modalContent) return;

  const project = projectsData.find((p) => p.id === projectId);
  if (!project) return;

  const challengesHtml = project.challenges
    ? `
      <div>
        <h3 class="text-sm font-semibold tracking-wider uppercase text-slate-500 dark:text-slate-400 mb-3 flex items-center gap-2">
          ${icons.cpu('w-4 h-4 text-cyan-400')}
          Key Engineering Challenges & Solutions
        </h3>
        <ul class="space-y-3">
          ${project.challenges
            .map(
              (c) => `
            <li class="flex items-start gap-3 text-sm text-slate-700 dark:text-slate-300">
              <span class="text-emerald-500 flex-shrink-0 mt-0.5">${icons.checkCircle2('w-5 h-5')}</span>
              <span>${c}</span>
            </li>
          `
            )
            .join('')}
        </ul>
      </div>
    `
    : '';

  const tagsHtml = project.tags
    .map(
      (t) => `
      <span class="px-3 py-1 rounded-lg text-xs font-mono font-medium bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700">
        ${t}
      </span>
    `
    )
    .join('');

  modalContent.innerHTML = `
    <!-- Modal Hero Banner -->
    <div class="relative h-64 sm:h-80 overflow-hidden bg-slate-950">
      <img
        src="${project.image}"
        alt="${project.title}"
        class="w-full h-full object-cover opacity-85 transition-transform duration-700 hover:scale-105"
        loading="lazy"
      />
      <div class="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>

      <!-- Close Button -->
      <button
        id="modal-close-btn"
        type="button"
        aria-label="Close project modal"
        class="absolute top-4 right-4 p-2 rounded-full bg-slate-900/80 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-700 backdrop-blur-md transition-colors focus:outline-none focus:ring-2 focus:ring-violet-500 cursor-pointer"
      >
        ${icons.x('w-5 h-5')}
      </button>

      <!-- Category Pill -->
      <div class="absolute top-4 left-4">
        <span class="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-violet-600/90 text-white backdrop-blur-md">
          ${project.category}
        </span>
      </div>

      <!-- Title Overlay -->
      <div class="absolute bottom-6 left-6 right-6">
        <h2 class="text-2xl sm:text-3xl font-display font-bold text-white mb-1">
          ${project.title}
        </h2>
        <p class="text-slate-300 text-sm sm:text-base line-clamp-1">
          ${project.summary}
        </p>
      </div>
    </div>

    <!-- Modal Scrollable Body -->
    <div class="p-6 sm:p-8 space-y-6 max-h-[calc(85vh-20rem)] overflow-y-auto">
      <div>
        <h3 class="text-sm font-semibold tracking-wider uppercase text-slate-500 dark:text-slate-400 mb-2 flex items-center gap-2">
          ${icons.layers('w-4 h-4 text-violet-500')}
          Project Architecture & Overview
        </h3>
        <p class="text-slate-700 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
          ${project.description}
        </p>
      </div>

      ${challengesHtml}

      <div>
        <h3 class="text-sm font-semibold tracking-wider uppercase text-slate-500 dark:text-slate-400 mb-3">
          Technologies & Tools
        </h3>
        <div class="flex flex-wrap gap-2">
          ${tagsHtml}
        </div>
      </div>
    </div>

    <!-- Modal Footer Actions -->
    <div class="p-6 bg-slate-50 dark:bg-slate-950/70 border-t border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between gap-4">
      <div class="flex items-center gap-3">
        ${
          project.liveDemo
            ? `
        <a
          href="${project.liveDemo}"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-medium text-sm text-white bg-gradient-to-r from-violet-600 to-cyan-500 hover:from-violet-500 hover:to-cyan-400 shadow-md shadow-violet-500/20 transition-all hover:scale-105"
        >
          <span>Demo / Overview</span>
          ${icons.externalLink('w-4 h-4')}
        </a>
        `
            : ''
        }

        <a
          href="${project.github}"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-medium text-sm text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 transition-all hover:scale-105"
        >
          ${icons.github('w-4 h-4')}
          <span>GitHub Repository</span>
        </a>
      </div>

      <button
        id="modal-close-footer-btn"
        type="button"
        class="px-4 py-2 text-sm font-medium text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-white transition-colors cursor-pointer"
      >
        Close Modal
      </button>
    </div>
  `;

  // Prevent background scroll
  document.body.style.overflow = 'hidden';

  if (typeof modal.showModal === 'function') {
    modal.showModal();
  } else {
    modal.setAttribute('open', '');
  }

  // Hook close buttons
  const closeBtn = document.getElementById('modal-close-btn');
  const closeFooterBtn = document.getElementById('modal-close-footer-btn');

  const handleClose = () => closeProjectModal();

  if (closeBtn) closeBtn.onclick = handleClose;
  if (closeFooterBtn) closeFooterBtn.onclick = handleClose;
}

export function closeProjectModal() {
  const modal = document.getElementById('project-detail-modal');
  if (!modal) return;

  document.body.style.overflow = '';
  if (typeof modal.close === 'function') {
    modal.close();
  } else {
    modal.removeAttribute('open');
  }
}

export function initProjectModal() {
  const modal = document.getElementById('project-detail-modal');
  if (!modal) return;

  // Backdrop click to close native dialog
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeProjectModal();
    }
  });

  // Handle Escape key
  modal.addEventListener('cancel', (e) => {
    e.preventDefault();
    closeProjectModal();
  });
}
