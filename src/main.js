import './index.css';
import { initTheme } from './utils/theme';
import { initScrollReveal } from './utils/scrollReveal';
import { renderNavbar, initNavbar } from './components/Navbar';
import { renderHero, initHero } from './components/Hero';
import { renderAbout, initAbout } from './components/About';
import { renderSkills, initSkills } from './components/Skills';
import { renderProjects, initProjects } from './components/Projects';
import { renderProjectModal, initProjectModal } from './components/ProjectModal';
import { renderExperience, initExperience } from './components/Experience';
import { renderContact, initContact } from './components/Contact';
import { renderFooter, initFooter } from './components/Footer';

function initApp() {
  // 1. Initialize Theme (dark-mode first)
  initTheme();

  // 2. Render Full Page Layout into #app
  const app = document.getElementById('app');
  if (!app) return;

  app.innerHTML = `
    <div class="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 selection:bg-violet-500 selection:text-white transition-colors duration-300 relative">
      
      <!-- Ambient Page-wide Background Lighting -->
      <div class="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
        <div class="absolute top-0 left-1/4 w-[600px] h-[600px] bg-violet-600/5 dark:bg-violet-500/10 rounded-full blur-[140px]"></div>
        <div class="absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-cyan-500/5 dark:bg-cyan-500/10 rounded-full blur-[140px]"></div>
        <div class="absolute bottom-0 left-1/3 w-[600px] h-[600px] bg-indigo-600/5 dark:bg-indigo-600/10 rounded-full blur-[140px]"></div>
      </div>

      <!-- Navigation Header -->
      ${renderNavbar()}

      <!-- Main Content Sections -->
      <main>
        ${renderHero()}
        ${renderAbout()}
        ${renderSkills()}
        ${renderProjects()}
        ${renderExperience()}
        ${renderContact()}
      </main>

      <!-- Footer -->
      ${renderFooter()}

      <!-- Interactive Modal Dialog -->
      ${renderProjectModal()}

    </div>
  `;

  // 3. Initialize Interactive Behaviors & Event Listeners
  initNavbar();
  initHero();
  initAbout();
  initSkills();
  initProjects();
  initProjectModal();
  initExperience();
  initContact();
  initFooter();

  // 4. Trigger Scroll Reveal Observer
  initScrollReveal();
}

// Run when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}
