/**
 * Initializes the Lab News photo carousel, when approved photos are present.
 * The router keeps pages mounted, so autoplay only advances while News is
 * visible. Manual controls always work, including with reduced motion.
 */
export function initNewsGallery() {
  const gallery = document.querySelector('[data-news-gallery]');
  if (!gallery) return;

  const slides = Array.from(gallery.querySelectorAll('[data-news-gallery-slide]'));
  const dots = Array.from(gallery.querySelectorAll('[data-news-gallery-dot]'));
  if (slides.length < 2) return;

  const next = gallery.querySelector('[data-news-gallery-next]');
  const previous = gallery.querySelector('[data-news-gallery-previous]');
  const pause = gallery.querySelector('[data-news-gallery-pause]');
  const intervalMs = Math.max(3000, Number(gallery.dataset.interval) || 6000);
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

  let active = 0;
  let paused = reducedMotion.matches;

  function showSlide(index) {
    active = ((index % slides.length) + slides.length) % slides.length;
    slides.forEach((slide, i) => {
      slide.hidden = i !== active;
    });
    dots.forEach((dot, i) => {
      dot.setAttribute('aria-current', String(i === active));
    });
  }

  function setPaused(value) {
    paused = value;
    pause.textContent = paused ? 'Play' : 'Pause';
    pause.setAttribute('aria-pressed', String(paused));
    pause.setAttribute('aria-label', paused
      ? 'Resume automatic photo rotation'
      : 'Pause automatic photo rotation');
  }

  next?.addEventListener('click', () => showSlide(active + 1));
  previous?.addEventListener('click', () => showSlide(active - 1));
  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => showSlide(index));
  });
  pause?.addEventListener('click', () => setPaused(!paused));
  gallery.addEventListener('keydown', (event) => {
    if (event.key !== 'ArrowLeft' && event.key !== 'ArrowRight') return;
    if (!gallery.contains(document.activeElement)) return;
    event.preventDefault();
    showSlide(active + (event.key === 'ArrowRight' ? 1 : -1));
  });

  setPaused(paused);
  showSlide(0);

  window.setInterval(() => {
    if (paused || reducedMotion.matches || document.visibilityState !== 'visible') return;
    if (!gallery.closest('.page')?.classList.contains('active')) return;
    if (gallery.matches(':hover') || gallery.contains(document.activeElement)) return;
    showSlide(active + 1);
  }, intervalMs);
}
