# Modern Developer Portfolio Website (Pure Vanilla JavaScript)

A sleek, responsive, and ultra-lightweight personal developer portfolio website built with **pure Vanilla JavaScript (ES6+)**, **Vite**, and **Tailwind CSS**. Zero framework overhead.

---

## 🚀 Key Features

- **Pure Vanilla JavaScript (Zero Framework Overhead):** 100% React-free. Built using modular ES6+ functions, native DOM methods, and standard event listeners.
- **Ultra-Lightweight & Fast:** JavaScript bundle size dropped by over 70% compared to heavy framework architectures.
- **Dark-Mode First Design & Theme Switcher:** Sleek deep slate palette (`bg-slate-950`) with vibrant cyan and violet gradient accents. Persists user preference smoothly in `localStorage`.
- **Glassmorphism & Micro-Interactions:** Subtle backdrop blurs (`backdrop-blur-md`), ambient glow orbs, and interactive card hovering effects.
- **Native IntersectionObserver Scroll Reveal:** Smooth viewport entrance animations without bloated animation libraries.
- **Typewriter Role Animator:** Pure JS dynamic typewriter effect rotating through developer specializations.
- **Interactive Projects Showcase & Native Modal:** Category filters (`All`, `React`, `Full-Stack`, `UI/UX`), tech tags, demo/GitHub links, and an in-depth case study modal built with native HTML `<dialog>` (supporting backdrop clicks, close button, and `Escape` key dismissal).
- **Experience Timeline:** Interactive vertical timeline detailing career history, company roles, tech stacks, and collapsible accomplishment metrics.
- **Skills Matrix:** Categorized competencies (Frontend, Backend, Tools, Soft Skills) with dynamic tab switching, proficiency bars, and "Core" status badges.
- **Interactive Contact Form:** Client-side validation, error states, loading spinner, celebratory confetti burst (`canvas-confetti`), and one-click email copy.
- **Mobile Responsive Navigation:** Sticky header with scrollspy active links and a collapsible mobile menu drawer with smooth transitions.
- **Zero-Config Content Customization:** All personal information, projects, skills, and work history live in `src/data/portfolioData.js`.

---

## 🛠️ Tech Stack

- **Runtime & Language:** [Vanilla JavaScript (ES6+)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- **Bundler / Dev Server:** [Vite](https://vitejs.dev/)
- **Styling:** [Tailwind CSS v3](https://tailwindcss.com/) + PostCSS + Autoprefixer
- **Icons:** Lightweight, inline SVGs (`src/components/icons.js`)
- **Interactions:** [canvas-confetti](https://www.npmjs.com/package/canvas-confetti)
- **Fonts:** Inter & Poppins (Google Fonts)

---

## 📂 Project Structure

```text
developer-portfolio/
├── index.html                  # HTML entry mounting #app and loading /src/main.js
├── package.json                # Lean dependencies (no React or React ecosystem packages)
├── postcss.config.js           # PostCSS configuration for Tailwind CSS
├── tailwind.config.js          # Extended colors, animations, glassmorphism & glow
└── src/
    ├── main.js                 # Application bootstrap and component mounting
    ├── index.css               # Tailwind directives, custom scrollbars, and reveal styles
    ├── utils/
    │   ├── theme.js            # Pure JS theme state manager (localStorage & <html> class)
    │   └── scrollReveal.js     # Native IntersectionObserver viewport trigger
    ├── data/
    │   └── portfolioData.js    # Centralized portfolio data (Bio, Projects, Skills, Timeline)
    └── components/
        ├── icons.js            # Lightweight inline SVG icon provider
        ├── Navbar.js           # Sticky glassmorphic navbar with mobile menu & scrollspy
        ├── Hero.js             # Typewriter animation, CTAs & ambient gradients
        ├── About.js            # Bio, stats cards, code preview & engineering pillars
        ├── Skills.js           # Categorized skill badges, category tabs & proficiency meters
        ├── Projects.js         # Project grid with category filtering & card triggers
        ├── ProjectModal.js     # Native HTML <dialog> project case study modal
        ├── Experience.js       # Vertical career history timeline with accordion
        ├── Contact.js          # Interactive form with client validation & confetti
        └── Footer.js           # Footer with social links & back-to-top button
```

---

## 💻 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Run the Development Server
```bash
npm run dev
```

### 3. Build for Production
```bash
npm run build
```

### 4. Preview the Production Build
```bash
npm run preview
```

---

## 📝 Updating Your Content

All website content is located in [`src/data/portfolioData.js`](file:///C:/Users/aishw/.gemini/antigravity/scratch/developer-portfolio/src/data/portfolioData.js):
- **`personalInfo`**: Name, email, bio paragraphs, social profiles, and statistics.
- **`skillsData`**: Frontend, Backend, Tools, and Soft Skills lists.
- **`projectsData`**: Project titles, categories, summaries, challenges, tags, and links.
- **`experienceData`**: Past work positions, dates, locations, accomplishments, and tech stacks.
