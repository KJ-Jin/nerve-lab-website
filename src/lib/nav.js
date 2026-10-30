/**
 * Header navigation behaviour:
 * - mobile menu toggle
 * - Research dropdown (click/tap to open, Escape or outside click to close)
 */

const mobileToggle = document.getElementById('mobile-toggle');
const mainNav = document.getElementById('main-nav');
const researchMenu = document.getElementById('research-menu');
const researchToggle = document.getElementById('research-dropdown-toggle');

function setResearchMenuOpen(open) {
  researchMenu.classList.toggle('open', open);
  researchToggle.setAttribute('aria-expanded', String(open));
}

function setMobileMenuOpen(open) {
  mainNav.classList.toggle('open', open);
  mobileToggle.setAttribute('aria-expanded', String(open));
}

export function initNav() {
  mobileToggle.addEventListener('click', () => {
    setMobileMenuOpen(!mainNav.classList.contains('open'));
  });

  researchToggle.addEventListener('click', (event) => {
    event.preventDefault();
    setResearchMenuOpen(!researchMenu.classList.contains('open'));
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && researchMenu.classList.contains('open')) {
      researchToggle.focus();
      setResearchMenuOpen(false);
    }
  });

  document.addEventListener('click', (event) => {
    if (!event.target.closest('#research-menu')) setResearchMenuOpen(false);
  });
}

/** Called on every page change: highlight Research for its sub-pages and close open menus. */
export function updateNav(pageId) {
  researchMenu.classList.toggle('current', pageId === 'research' || pageId.startsWith('research-'));
  setResearchMenuOpen(false);
  setMobileMenuOpen(false);
}
