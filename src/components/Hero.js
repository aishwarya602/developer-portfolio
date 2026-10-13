import { icons } from './icons';
import { personalInfo } from '../data/portfolioData';

export function renderHero() {
  return `
    <section id="hero" class="relative pt-32 pb-20 md:pt-44 md:pb-32 overflow-hidden">
      <!-- Background Ambient Glow Gradients -->
      <div class="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] sm:w-[750px] h-[350px] sm:h-[450px] bg-gradient-to-tr from-violet-600/20 via-purple-600/15 to-cyan-400/20 rounded-full blur-[110px] pointer-events-none -z-10 animate-pulse-glow"></div>
      <div class="absolute top-1/2 right-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-[90px] pointer-events-none -z-10"></div>
      <div class="absolute top-1/3 left-10 w-72 h-72 bg-violet-600/15 rounded-full blur-[90px] pointer-events-none -z-10"></div>

      <!-- Subtle Grid Pattern -->
      <div class="absolute inset-0 bg-[linear-gradient(to_right,#8882_1px,transparent_1px),linear-gradient(to_bottom,#8882_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] -z-10 opacity-30 dark:opacity-20 pointer-events-none"></div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col items-center text-center">
          
          <!-- Availability Status Badge -->
          <div class="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-slate-900/5 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 backdrop-blur-md mb-8 shadow-sm">
            <span class="relative flex h-2.5 w-2.5">
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span class="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <span class="text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-300">
              Available for full-time roles & high-impact contracts
            </span>
          </div>

          <!-- Main Heading -->
          <h1 class="text-4xl sm:text-6xl md:text-7xl font-display font-extrabold tracking-tight text-slate-900 dark:text-white max-w-4xl leading-tight">
            Hi, I'm <span class="bg-clip-text text-transparent bg-gradient-to-r from-violet-600 via-purple-500 to-cyan-400">${personalInfo.name}</span>
          </h1>

          <!-- Dynamic Typewriter Role Slot -->
          <div class="h-12 sm:h-16 flex items-center justify-center mt-3 mb-6">
            <div class="text-xl sm:text-3xl md:text-4xl font-display font-semibold text-slate-700 dark:text-slate-300 flex items-center">
              <span>Crafting as&nbsp;</span>
              <span class="text-violet-600 dark:text-cyan-400 border-b-2 border-violet-500 dark:border-cyan-400 pb-0.5 min-w-[220px] text-left">
                <span id="hero-typewriter-text"></span>
                <span class="animate-pulse inline-block ml-0.5">|</span>
              </span>
            </div>
          </div>

          <!-- Subtitle / Tagline -->
          <p class="text-lg sm:text-xl text-slate-600 dark:text-slate-400 max-w-2xl font-normal leading-relaxed mb-10">
            ${personalInfo.tagline}
          </p>

          <!-- Call To Action Buttons -->
          <div class="flex flex-wrap items-center justify-center gap-4 mb-14">
            <a
              href="#projects"
              class="group relative inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-violet-600 to-cyan-500 hover:from-violet-500 hover:to-cyan-400 shadow-lg shadow-violet-500/25 hover:shadow-glow-md transition-all duration-300 transform hover:-translate-y-0.5"
            >
              <span>View Projects</span>
              <span class="transition-transform duration-200 group-hover:translate-x-1">
                ${icons.arrowRight('w-4 h-4')}
              </span>
            </a>

            <button
              id="download-resume-btn"
              type="button"
              class="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl font-semibold text-slate-700 dark:text-slate-200 bg-white/80 dark:bg-slate-900/80 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-300/80 dark:border-slate-800 backdrop-blur-md shadow-sm hover:shadow transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer"
            >
              <span class="text-violet-600 dark:text-cyan-400">
                ${icons.download('w-4 h-4')}
              </span>
              <span>Download Resume</span>
            </button>
          </div>

          <!-- Quick Social Links -->
          <div class="flex items-center gap-4 text-slate-600 dark:text-slate-400">
            <a
              href="${personalInfo.socials.github}"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              class="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-900/60 hover:bg-slate-200 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-slate-800 transition-all hover:scale-110"
            >
              ${icons.github('w-5 h-5')}
            </a>
            <a
              href="${personalInfo.socials.linkedin}"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              class="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-900/60 hover:bg-slate-200 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-slate-800 transition-all hover:scale-110"
            >
              ${icons.linkedin('w-5 h-5')}
            </a>
            <a
              href="${personalInfo.socials.twitter}"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter Profile"
              class="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-900/60 hover:bg-slate-200 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-slate-800 transition-all hover:scale-110"
            >
              ${icons.twitter('w-5 h-5')}
            </a>
            <a
              href="${personalInfo.socials.email}"
              aria-label="Send Direct Email"
              class="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-900/60 hover:bg-slate-200 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-slate-800 transition-all hover:scale-110"
            >
              ${icons.mail('w-5 h-5')}
            </a>
          </div>

          <!-- Floating Tech Pills -->
          <div class="mt-12 pt-8 border-t border-slate-200/60 dark:border-slate-800/60 flex flex-wrap items-center justify-center gap-3 text-xs font-mono text-slate-500 dark:text-slate-400">
            <span class="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800">
              <span class="w-2 h-2 rounded-full bg-cyan-400"></span> Vanilla JS (ES6+)
            </span>
            <span class="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800">
              <span class="w-2 h-2 rounded-full bg-blue-500"></span> TypeScript
            </span>
            <span class="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800">
              <span class="w-2 h-2 rounded-full bg-violet-500"></span> Tailwind CSS
            </span>
            <span class="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800">
              <span class="w-2 h-2 rounded-full bg-emerald-500"></span> Node.js
            </span>
            <span class="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800">
              <span class="w-2 h-2 rounded-full bg-purple-500"></span> Vite
            </span>
          </div>

        </div>
      </div>
    </section>
  `;
}

export function initHero() {
  const typewriterSlot = document.getElementById('hero-typewriter-text');
  const resumeBtn = document.getElementById('download-resume-btn');

  // 1. Dynamic Typewriter Engine in Pure Vanilla JS
  const roles = personalInfo.roles;
  let roleIdx = 0;
  let charIdx = 0;
  let isDeleting = false;

  const tickTypewriter = () => {
    if (!typewriterSlot) return;
    const currentRole = roles[roleIdx];

    if (!isDeleting) {
      charIdx++;
      typewriterSlot.textContent = currentRole.substring(0, charIdx);

      if (charIdx === currentRole.length) {
        // Word complete: wait before deleting
        setTimeout(() => {
          isDeleting = true;
          tickTypewriter();
        }, 1800);
        return;
      }
      setTimeout(tickTypewriter, 100);
    } else {
      charIdx--;
      typewriterSlot.textContent = currentRole.substring(0, charIdx);

      if (charIdx === 0) {
        // Completely deleted: cycle to next word
        isDeleting = false;
        roleIdx = (roleIdx + 1) % roles.length;
        setTimeout(tickTypewriter, 350);
        return;
      }
      setTimeout(tickTypewriter, 50);
    }
  };

  tickTypewriter();

  // 2. Resume Download Action
  if (resumeBtn) {
    resumeBtn.addEventListener('click', () => {
      const resumeContent = `ALEX RIVERA - RESUME
Senior Full-Stack Developer & UI Architect
Email: ${personalInfo.email}
Location: ${personalInfo.location}

Summary:
${personalInfo.bio.join('\n\n')}

Key Skills:
- Vanilla JavaScript (ES6+), TypeScript, Tailwind CSS, Vite
- Node.js, Express, PostgreSQL, Redis, Docker
- UI/UX Architecture, Web Accessibility, Performance Optimization

Visit full interactive portfolio at: https://alexrivera.dev`;

      const blob = new Blob([resumeContent], { type: 'text/plain;charset=utf-8' });
      const downloadLink = document.createElement('a');
      downloadLink.href = URL.createObjectURL(blob);
      downloadLink.download = 'Alex_Rivera_Resume.txt';
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);
      URL.revokeObjectURL(downloadLink.href);
    });
  }
}
