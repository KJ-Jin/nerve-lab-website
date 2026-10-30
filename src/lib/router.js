/**
 * Hash-based router: #research shows <div id="page-research">.
 * Unknown or empty hashes fall back to the home page.
 */

export function startRouter(pageIds, { onNavigate } = {}) {
  const show = () => {
    const requested = location.hash.slice(1).trim().toLowerCase();
    const current = pageIds.includes(requested) ? requested : 'home';

    document.querySelectorAll('.page').forEach((page) => {
      page.classList.toggle('active', page.id === `page-${current}`);
    });

    document.querySelectorAll('.nav-link, .nav-submenu a').forEach((link) => {
      const isCurrent = link.dataset.page === current;
      link.classList.toggle('active', isCurrent);
      if (isCurrent) link.setAttribute('aria-current', 'page');
      else link.removeAttribute('aria-current');
    });

    onNavigate?.(current);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  window.addEventListener('hashchange', show);
  show();
}
