/**
 * Lenis smooth scroll — https://github.com/darkroomengineering/lenis/blob/main/README.md
 * Vertical pages: README "No-code usage" options.
 * Projects page: horizontal scroll on .proj-viewport (same extras except anchors).
 */
(function () {
  if (typeof Lenis === 'undefined') return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  var isProjects = document.documentElement.classList.contains('projects-html');

  if (isProjects) {
    var wrapper = document.querySelector('.proj-viewport');
    var content = document.querySelector('.proj-scroll');
    if (!wrapper || !content) return;
    window.lenisInstance = new Lenis({
      wrapper: wrapper,
      content: content,
      eventsTarget: wrapper,
      orientation: 'horizontal',
      gestureOrientation: 'vertical',
      autoRaf: true,
      autoToggle: true,
      allowNestedScroll: true,
      naiveDimensions: true,
      stopInertiaOnNavigate: true,
    });
    return;
  }

  window.lenisInstance = new Lenis({
    autoRaf: true,
    autoToggle: true,
    anchors: true,
    allowNestedScroll: true,
    naiveDimensions: true,
    stopInertiaOnNavigate: true,
  });
})();
