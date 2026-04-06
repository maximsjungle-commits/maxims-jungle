/**
 * Lenis smooth scroll — https://www.lenis.dev
 * Vertical pages use window scroll; Projects uses horizontal scroll on .proj-viewport.
 */
import Lenis from 'https://unpkg.com/lenis@1.3.21/dist/lenis.mjs';

function prefersReducedMotion() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

function init() {
  if (prefersReducedMotion()) return null;

  const isProjects = document.documentElement.classList.contains('projects-html');

  if (isProjects) {
    const wrapper = document.querySelector('.proj-viewport');
    const content = document.querySelector('.proj-scroll');
    if (!wrapper || !content) return null;
    return new Lenis({
      wrapper,
      content,
      eventsTarget: wrapper,
      orientation: 'horizontal',
      gestureOrientation: 'vertical',
      autoRaf: true,
      smoothWheel: true,
    });
  }

  return new Lenis({
    autoRaf: true,
    smoothWheel: true,
  });
}

const lenis = init();
if (lenis) {
  window.lenisInstance = lenis;
}
