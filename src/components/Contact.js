import { icons } from './icons';
import { personalInfo } from '../data/portfolioData';
import confetti from 'canvas-confetti';

export function renderContact() {
  return `
    <section id="contact" class="py-24 relative overflow-hidden">
      <!-- Background Ambient Orbs -->
      <div class="absolute top-1/4 right-0 w-[500px] h-[500px] bg-violet-600/10 rounded-full blur-[140px] pointer-events-none -z-10"></div>
      <div class="absolute bottom-10 left-10 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none -z-10"></div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <!-- Section Header -->
        <div class="text-center max-w-3xl mx-auto mb-16">
          <div class="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold tracking-wider uppercase text-violet-600 dark:text-cyan-400 bg-violet-500/10 dark:bg-cyan-400/10 border border-violet-500/20 dark:border-cyan-400/20 mb-4">
            Get In Touch
          </div>
          <h2 class="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
            Let's Build Something <span class="bg-clip-text text-transparent bg-gradient-to-r from-violet-600 to-cyan-400">Exceptional Together</span>
          </h2>
          <p class="text-slate-600 dark:text-slate-400 text-base sm:text-lg">
            Whether you have a product to build, an engineering team to scale, or just want to chat about architecture, my inbox is open.
          </p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          <!-- Left Column: Contact Channels & Meta -->
          <div class="lg:col-span-5 space-y-6">
            
            <!-- Quick Copy Email Card -->
            <div class="p-6 rounded-2xl bg-white/70 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800/80 backdrop-blur-md shadow-sm">
              <span class="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 block mb-2">
                Direct Email
              </span>
              <div class="flex items-center justify-between gap-3 p-3 rounded-xl bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">
                <div class="flex items-center gap-2.5 overflow-hidden">
                  <span class="text-violet-600 dark:text-cyan-400 flex-shrink-0">
                    ${icons.mail('w-4 h-4')}
                  </span>
                  <span class="text-xs sm:text-sm font-mono text-slate-800 dark:text-slate-200 truncate">
                    ${personalInfo.email}
                  </span>
                </div>
                <button
                  id="contact-copy-email-btn"
                  type="button"
                  class="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-violet-700 dark:text-cyan-300 bg-violet-100 dark:bg-slate-700 hover:bg-violet-200 dark:hover:bg-slate-600 transition-colors flex-shrink-0 cursor-pointer"
                >
                  <span id="copy-email-icon">${icons.copy('w-3.5 h-3.5')}</span>
                  <span id="copy-email-text">Copy</span>
                </button>
              </div>
            </div>

            <!-- Location & Availability Cards -->
            <div class="grid grid-cols-2 gap-4">
              <div class="p-5 rounded-2xl bg-white/70 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800/80 backdrop-blur-md">
                <div class="text-violet-500 mb-2">${icons.mapPin('w-5 h-5')}</div>
                <h4 class="text-xs uppercase font-mono text-slate-500 dark:text-slate-400">Location</h4>
                <p class="text-sm font-semibold text-slate-900 dark:text-white mt-1">
                  Nagpur, Maharashtra
                </p>
                <span class="text-[11px] text-emerald-500 font-medium">Remote Worldwide</span>
              </div>

              <div class="p-5 rounded-2xl bg-white/70 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800/80 backdrop-blur-md">
                <div class="text-cyan-400 mb-2">${icons.clock('w-5 h-5')}</div>
                <h4 class="text-xs uppercase font-mono text-slate-500 dark:text-slate-400">Response Time</h4>
                <p class="text-sm font-semibold text-slate-900 dark:text-white mt-1">
                  Within 24 Hours
                </p>
                <span class="text-[11px] text-slate-500 font-medium">Mon - Fri</span>
              </div>
            </div>

            <!-- Social Networks Links -->
            <div class="p-6 rounded-2xl bg-white/70 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800/80 backdrop-blur-md">
              <h3 class="text-sm font-display font-bold text-slate-900 dark:text-white mb-4">
                Connect on Social Networks
              </h3>
              <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <a
                  href="${personalInfo.socials.github}"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="flex items-center gap-2 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 transition-all hover:scale-105"
                >
                  <span class="text-violet-500">${icons.github('w-4 h-4')}</span>
                  <span class="text-xs font-semibold">GitHub</span>
                </a>

                <a
                  href="${personalInfo.socials.linkedin}"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="flex items-center gap-2 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 transition-all hover:scale-105"
                >
                  <span class="text-cyan-400">${icons.linkedin('w-4 h-4')}</span>
                  <span class="text-xs font-semibold">LinkedIn</span>
                </a>

                <a
                  href="${personalInfo.socials.twitter}"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="flex items-center gap-2 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 transition-all hover:scale-105"
                >
                  <span class="text-blue-400">${icons.twitter('w-4 h-4')}</span>
                  <span class="text-xs font-semibold">Twitter</span>
                </a>
              </div>
            </div>

          </div>

          <!-- Right Column: Interactive Contact Form & State Container -->
          <div class="lg:col-span-7">
            <div id="contact-form-card" class="p-8 sm:p-10 rounded-3xl bg-white/80 dark:bg-slate-900/70 border border-slate-200/80 dark:border-slate-800/80 backdrop-blur-xl shadow-xl">
              
              <form id="portfolio-contact-form" novalidate class="space-y-5">
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <!-- Name Field -->
                  <div>
                    <label
                      for="contact-name"
                      class="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5"
                    >
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="contact-name"
                      name="name"
                      placeholder="Sarah Connor"
                      class="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-300 dark:border-slate-700 focus:border-violet-500 focus:ring-violet-500 text-slate-900 dark:text-white text-sm placeholder-slate-400 focus:outline-none focus:ring-2 transition-all"
                    />
                    <p id="name-error-msg" class="hidden mt-1 text-xs text-red-500 flex items-center gap-1"></p>
                  </div>

                  <!-- Email Field -->
                  <div>
                    <label
                      for="contact-email"
                      class="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5"
                    >
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="contact-email"
                      name="email"
                      placeholder="sarah@example.com"
                      class="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-300 dark:border-slate-700 focus:border-violet-500 focus:ring-violet-500 text-slate-900 dark:text-white text-sm placeholder-slate-400 focus:outline-none focus:ring-2 transition-all"
                    />
                    <p id="email-error-msg" class="hidden mt-1 text-xs text-red-500 flex items-center gap-1"></p>
                  </div>
                </div>

                <!-- Subject Field -->
                <div>
                  <label
                    for="contact-subject"
                    class="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5"
                  >
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="contact-subject"
                    name="subject"
                    placeholder="Project Opportunity / Technical Architecture"
                    class="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-300 dark:border-slate-700 focus:border-violet-500 focus:ring-violet-500 text-slate-900 dark:text-white text-sm placeholder-slate-400 focus:outline-none focus:ring-2 transition-all"
                  />
                  <p id="subject-error-msg" class="hidden mt-1 text-xs text-red-500 flex items-center gap-1"></p>
                </div>

                <!-- Message Field -->
                <div>
                  <label
                    for="contact-message"
                    class="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5"
                  >
                    Message / Project Details *
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows="5"
                    placeholder="Tell me about your product vision, timeline, and goals..."
                    class="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-300 dark:border-slate-700 focus:border-violet-500 focus:ring-violet-500 text-slate-900 dark:text-white text-sm placeholder-slate-400 focus:outline-none focus:ring-2 transition-all resize-y"
                  ></textarea>
                  <p id="message-error-msg" class="hidden mt-1 text-xs text-red-500 flex items-center gap-1"></p>
                </div>

                <!-- Submit Button -->
                <button
                  id="contact-submit-btn"
                  type="submit"
                  class="w-full py-4 rounded-xl font-semibold text-white bg-gradient-to-r from-violet-600 via-indigo-600 to-cyan-500 hover:from-violet-500 hover:to-cyan-400 shadow-lg shadow-violet-500/25 hover:shadow-glow-md transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer transform hover:-translate-y-0.5 active:translate-y-0"
                >
                  <span id="submit-btn-icon">${icons.send('w-4 h-4')}</span>
                  <span id="submit-btn-text">Send Message</span>
                </button>
              </form>

              <!-- Success Feedback View (Initially Hidden) -->
              <div id="contact-success-view" class="hidden py-12 text-center space-y-4">
                <div class="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-500 flex items-center justify-center mx-auto shadow-glow-sm">
                  ${icons.checkCircle2('w-8 h-8')}
                </div>
                <h3 class="text-2xl font-display font-bold text-slate-900 dark:text-white">
                  Message Sent Successfully!
                </h3>
                <p class="text-slate-600 dark:text-slate-400 text-sm sm:text-base max-w-md mx-auto">
                  Thank you for reaching out. I have received your message and will get back to you within 24 hours.
                </p>
                <button
                  id="contact-reset-btn"
                  type="button"
                  class="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-violet-600 to-cyan-500 hover:from-violet-500 hover:to-cyan-400 shadow-md transition-all mt-4 cursor-pointer"
                >
                  <span>Send Another Message</span>
                </button>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  `;
}

export function initContact() {
  const form = document.getElementById('portfolio-contact-form');
  const successView = document.getElementById('contact-success-view');
  const resetBtn = document.getElementById('contact-reset-btn');
  const copyBtn = document.getElementById('contact-copy-email-btn');
  const copyIconSlot = document.getElementById('copy-email-icon');
  const copyTextSlot = document.getElementById('copy-email-text');
  const submitBtn = document.getElementById('contact-submit-btn');
  const submitBtnIcon = document.getElementById('submit-btn-icon');
  const submitBtnText = document.getElementById('submit-btn-text');

  // 1. One-click Email Copy
  if (copyBtn) {
    copyBtn.addEventListener('click', () => {
      navigator.clipboard.writeText(personalInfo.email);
      if (copyIconSlot) copyIconSlot.innerHTML = icons.check('w-3.5 h-3.5 text-emerald-500');
      if (copyTextSlot) copyTextSlot.textContent = 'Copied!';

      setTimeout(() => {
        if (copyIconSlot) copyIconSlot.innerHTML = icons.copy('w-3.5 h-3.5');
        if (copyTextSlot) copyTextSlot.textContent = 'Copy';
      }, 2500);
    });
  }

  // 2. Client-side Form Validation & Submission
  if (form) {
    const nameInput = document.getElementById('contact-name');
    const emailInput = document.getElementById('contact-email');
    const subjectInput = document.getElementById('contact-subject');
    const messageInput = document.getElementById('contact-message');

    const nameError = document.getElementById('name-error-msg');
    const emailError = document.getElementById('email-error-msg');
    const subjectError = document.getElementById('subject-error-msg');
    const messageError = document.getElementById('message-error-msg');

    const setError = (input, errorEl, message) => {
      if (message) {
        input.classList.add('border-red-500', 'focus:ring-red-500');
        input.classList.remove('border-slate-300', 'dark:border-slate-700', 'focus:border-violet-500');
        input.setAttribute('aria-invalid', 'true');
        errorEl.innerHTML = `${icons.alertCircle('w-3.5 h-3.5')}<span>${message}</span>`;
        errorEl.classList.remove('hidden');
      } else {
        input.classList.remove('border-red-500', 'focus:ring-red-500');
        input.classList.add('border-slate-300', 'dark:border-slate-700', 'focus:border-violet-500');
        input.removeAttribute('aria-invalid');
        errorEl.textContent = '';
        errorEl.classList.add('hidden');
      }
    };

    // Live validation cleanup on input
    [nameInput, emailInput, subjectInput, messageInput].forEach((input) => {
      input.addEventListener('input', () => {
        if (input === nameInput) setError(nameInput, nameError, '');
        if (input === emailInput) setError(emailInput, emailError, '');
        if (input === subjectInput) setError(subjectInput, subjectError, '');
        if (input === messageInput) setError(messageInput, messageError, '');
      });
    });

    form.addEventListener('submit', (e) => {
      e.preventDefault();

      let hasError = false;

      // Validate Name
      if (!nameInput.value.trim()) {
        setError(nameInput, nameError, 'Please provide your full name.');
        hasError = true;
      } else if (nameInput.value.trim().length < 2) {
        setError(nameInput, nameError, 'Name must be at least 2 characters long.');
        hasError = true;
      } else {
        setError(nameInput, nameError, '');
      }

      // Validate Email
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailInput.value.trim()) {
        setError(emailInput, emailError, 'Please provide your email address.');
        hasError = true;
      } else if (!emailRegex.test(emailInput.value.trim())) {
        setError(emailInput, emailError, 'Please enter a valid email address.');
        hasError = true;
      } else {
        setError(emailInput, emailError, '');
      }

      // Validate Subject
      if (!subjectInput.value.trim()) {
        setError(subjectInput, subjectError, 'Please specify a subject.');
        hasError = true;
      } else {
        setError(subjectInput, subjectError, '');
      }

      // Validate Message
      if (!messageInput.value.trim()) {
        setError(messageInput, messageError, 'Please include a message or inquiry details.');
        hasError = true;
      } else if (messageInput.value.trim().length < 10) {
        setError(messageInput, messageError, 'Message must be at least 10 characters long.');
        hasError = true;
      } else {
        setError(messageInput, messageError, '');
      }

      if (hasError) return;

      // Loading state
      submitBtn.disabled = true;
      submitBtn.classList.add('opacity-75', 'cursor-not-allowed');
      submitBtnIcon.innerHTML = `<div class="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>`;
      submitBtnText.textContent = 'Sending Message...';

      // Simulate async submit
      setTimeout(() => {
        // Trigger celebratory confetti
        try {
          confetti({
            particleCount: 110,
            spread: 75,
            origin: { y: 0.6 },
            colors: ['#8b5cf6', '#06b6d4', '#10b981', '#f59e0b'],
          });
        } catch {
          // fallback
        }

        // Show success state
        form.classList.add('hidden');
        successView.classList.remove('hidden');

        // Reset submit button state
        submitBtn.disabled = false;
        submitBtn.classList.remove('opacity-75', 'cursor-not-allowed');
        submitBtnIcon.innerHTML = icons.send('w-4 h-4');
        submitBtnText.textContent = 'Send Message';

        // Clear form values
        form.reset();
      }, 1200);
    });
  }

  // 3. Reset Button Action
  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      successView.classList.add('hidden');
      form.classList.remove('hidden');
    });
  }
}
