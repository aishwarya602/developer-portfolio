import { icons } from './icons';
import { personalInfo } from '../data/portfolioData';

export function renderAbout() {
  const statIcons = [icons.briefcase, icons.award, icons.gitBranch, icons.users];

  const statsHtml = personalInfo.stats
    .map((stat, idx) => {
      const getIcon = statIcons[idx % statIcons.length];
      return `
        <div class="group p-6 rounded-2xl bg-white/70 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800/80 backdrop-blur-md shadow-sm hover:shadow-glow-sm hover:border-violet-500/40 dark:hover:border-cyan-400/40 transition-all duration-300 transform hover:-translate-y-1">
          <div class="w-10 h-10 rounded-xl bg-violet-500/10 dark:bg-cyan-400/10 border border-violet-500/20 dark:border-cyan-400/20 flex items-center justify-center mb-4 text-violet-600 dark:text-cyan-400 group-hover:scale-110 transition-transform">
            ${getIcon('w-5 h-5')}
          </div>
          <div class="text-3xl sm:text-4xl font-display font-extrabold text-slate-900 dark:text-white tracking-tight mb-1">
            ${stat.value}
          </div>
          <div class="text-sm font-semibold text-slate-800 dark:text-slate-200 mb-0.5">
            ${stat.label}
          </div>
          <div class="text-xs text-slate-500 dark:text-slate-400">
            ${stat.description}
          </div>
        </div>
      `;
    })
    .join('');

  const principles = [
    {
      icon: icons.zap,
      title: 'Performance First',
      description: 'Sub-second load times, optimized asset pipelines, and zero-layout-shift UI experiences.',
    },
    {
      icon: icons.shield,
      title: 'Resilient Architecture',
      description: 'Typed domain models, strict error handling, and robust test suites built for enterprise scale.',
    },
    {
      icon: icons.cpu,
      title: 'Modern Tech Stack',
      description: 'Leveraging modern ES6+ standards, Vite, Tailwind CSS, Node.js, and edge computing.',
    },
    {
      icon: icons.heartHandshake,
      title: 'User & Team Empathy',
      description: 'Deep dedication to web accessibility (a11y), clean code documentation, and seamless handoffs.',
    },
  ];

  const principlesHtml = principles
    .map(
      (item) => `
      <div class="p-6 rounded-2xl bg-slate-50/80 dark:bg-slate-900/40 border border-slate-200/60 dark:border-slate-800/60 hover:bg-white dark:hover:bg-slate-900/80 transition-all duration-300">
        <div class="w-10 h-10 rounded-xl bg-gradient-to-tr from-violet-600 to-cyan-500 text-white flex items-center justify-center mb-4 shadow-sm">
          ${item.icon('w-5 h-5')}
        </div>
        <h4 class="text-lg font-display font-bold text-slate-900 dark:text-white mb-2">
          ${item.title}
        </h4>
        <p class="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
          ${item.description}
        </p>
      </div>
    `
    )
    .join('');

  const bioParagraphsHtml = personalInfo.bio
    .map(
      (p) => `
      <p class="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
        ${p}
      </p>
    `
    )
    .join('');

  return `
    <section id="about" class="py-24 relative overflow-hidden">
      <!-- Background Ambient Orb -->
      <div class="absolute top-1/2 left-0 w-96 h-96 bg-purple-600/10 rounded-full blur-[100px] pointer-events-none -z-10"></div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <!-- Section Header -->
        <div class="text-center max-w-3xl mx-auto mb-16">
          <div class="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold tracking-wider uppercase text-violet-600 dark:text-cyan-400 bg-violet-500/10 dark:bg-cyan-400/10 border border-violet-500/20 dark:border-cyan-400/20 mb-4">
            About Me
          </div>
          <h2 class="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-slate-900 dark:text-white tracking-tight">
            Bridging Product Design with <span class="bg-clip-text text-transparent bg-gradient-to-r from-violet-600 to-cyan-400">High-Scale Engineering</span>
          </h2>
        </div>

        <!-- Bio & Code Card Grid -->
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16">
          
          <!-- Bio Column -->
          <div class="lg:col-span-7 space-y-6">
            <h3 class="text-2xl font-display font-bold text-slate-900 dark:text-white">
              Hello! I'm ${personalInfo.name}, an engineer driven by craftsmanship and real user impact.
            </h3>
            
            ${bioParagraphsHtml}

            <div class="pt-2 flex flex-wrap gap-4">
              <div class="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300 font-medium">
                <span class="text-emerald-500 flex-shrink-0">${icons.checkCircle2('w-5 h-5')}</span>
                <span>Vanilla JS & High-Performance UI</span>
              </div>
              <div class="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300 font-medium">
                <span class="text-emerald-500 flex-shrink-0">${icons.checkCircle2('w-5 h-5')}</span>
                <span>Distributed APIs & Cloud Systems</span>
              </div>
              <div class="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300 font-medium">
                <span class="text-emerald-500 flex-shrink-0">${icons.checkCircle2('w-5 h-5')}</span>
                <span>CI/CD & DevOps Automation</span>
              </div>
            </div>
          </div>

          <!-- Code Window Card -->
          <div class="lg:col-span-5">
            <div class="rounded-2xl overflow-hidden border border-slate-200/80 dark:border-slate-800/80 bg-slate-900/90 shadow-2xl backdrop-blur-xl text-left font-mono text-xs sm:text-sm">
              <!-- Window Header -->
              <div class="px-4 py-3 bg-slate-800/80 border-b border-slate-700/80 flex items-center justify-between">
                <div class="flex items-center gap-2">
                  <div class="w-3 h-3 rounded-full bg-red-500/80"></div>
                  <div class="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                  <div class="w-3 h-3 rounded-full bg-green-500/80"></div>
                </div>
                <span class="text-slate-400 text-xs">developer_profile.js</span>
                <span class="text-slate-500 text-xs">utf-8</span>
              </div>

              <!-- Code Content -->
              <div class="p-5 text-slate-300 space-y-2 overflow-x-auto">
                <div>
                  <span class="text-purple-400">const</span> <span class="text-blue-400">engineer</span> = {
                </div>
                <div class="pl-4">
                  <span class="text-slate-400">name:</span> <span class="text-emerald-400">"${personalInfo.name}"</span>,
                </div>
                <div class="pl-4">
                  <span class="text-slate-400">location:</span> <span class="text-emerald-400">"${personalInfo.location}"</span>,
                </div>
                <div class="pl-4">
                  <span class="text-slate-400">focus:</span> <span class="text-emerald-400">"Full-Stack Web Systems"</span>,
                </div>
                <div class="pl-4">
                  <span class="text-slate-400">passions:</span> [
                  <span class="text-cyan-400">"A11y"</span>,
                  <span class="text-cyan-400">"DX"</span>,
                  <span class="text-cyan-400">"Performance"</span>
                  ],
                </div>
                <div class="pl-4">
                  <span class="text-slate-400">status:</span> <span class="text-amber-400">"Open for interesting challenges"</span>,
                </div>
                <div class="pl-4">
                  <span class="text-violet-400">codePhilosophy</span>: () =&gt; {
                </div>
                <div class="pl-8 text-cyan-300">
                  return <span class="text-emerald-400">"Clean, testable & blazing fast"</span>;
                </div>
                <div class="pl-4">}
                </div>
                <div>};</div>
                <div class="text-slate-500 pt-2">// Built without heavy framework overhead.</div>
              </div>
            </div>
          </div>

        </div>

        <!-- Metrics Grid -->
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-16">
          ${statsHtml}
        </div>

        <!-- 4 Engineering Principles -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          ${principlesHtml}
        </div>

      </div>
    </section>
  `;
}

export function initAbout() {
  // Can bind any custom micro-interactions if needed
}
