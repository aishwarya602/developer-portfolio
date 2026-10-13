/**
 * Native IntersectionObserver Scroll Reveal Animations
 */

export function initScrollReveal() {
  const elements = document.querySelectorAll('.reveal-on-scroll, section');

  if (!('IntersectionObserver' in window)) {
    // Fallback for environments lacking IntersectionObserver
    elements.forEach((el) => el.classList.add('is-revealed'));
    return;
  }

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
          obs.unobserve(entry.target); // Trigger once
        }
      });
    },
    {
      threshold: 0.12,
      rootMargin: '0px 0px -40px 0px',
    }
  );

  elements.forEach((el) => {
    el.classList.add('reveal-on-scroll');
    observer.observe(el);
  });
}
