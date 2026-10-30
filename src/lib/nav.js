/**
 * Header navigation: desktop dropdowns, accessible mobile menu toggles,
 * outside-click and Escape dismissal. Research and News share the same behavior.
 */
const mobileToggle = document.getElementById('mobile-toggle');
const mainNav = document.getElementById('main-nav');

const menus = ['research', 'news'].map((id) => ({
  id,
  wrapper: document.getElementById(`${id}-menu`),
  toggle: document.getElementById(`${id}-dropdown-toggle`),
}));

function setMenuOpen(menu, open) {
  menu.wrapper.classList.toggle('open', open);
  menu.toggle.setAttribute('aria-expanded', String(open));
}

function closeMenus(except = null) {
  menus.forEach((menu) => {
    if (menu !== except) setMenuOpen(menu, false);
  });
}

function setMobileMenuOpen(open) {
  mainNav.classList.toggle('open', open);
  mobileToggle.setAttribute('aria-expanded', String(open));
}

export function initNav() {
  mobileToggle.addEventListener('click', () => {
    setMobileMenuOpen(!mainNav.classList.contains('open'));
  });

  menus.forEach((menu) => {
    menu.toggle.addEventListener('click', (event) => {
      event.preventDefault();
      const shouldOpen = !menu.wrapper.classList.contains('open');
      closeMenus();
      setMenuOpen(menu, shouldOpen);
    });
  });

  document.addEventListener('keydown', (event) => {
    if (event.key !== 'Escape') return;
    const openMenu = menus.find((menu) => menu.wrapper.classList.contains('open'));
    if (!openMenu) return;
    closeMenus();
    openMenu.toggle.focus();
  });

  document.addEventListener('click', (event) => {
    menus.forEach((menu) => {
      if (!menu.wrapper.contains(event.target)) setMenuOpen(menu, false);
    });
  });
}

/** Highlight parent menus on their subpages and close menus on navigation. */
export function updateNav(pageId) {
  const researchMenu = menus.find((menu) => menu.id === 'research');
  const newsMenu = menus.find((menu) => menu.id === 'news');
  researchMenu.wrapper.classList.toggle('current', pageId === 'research' || pageId.startsWith('research-'));
  newsMenu.wrapper.classList.toggle('current', pageId === 'news' || pageId === 'gallery-archive');
  closeMenus();
  setMobileMenuOpen(false);
}
