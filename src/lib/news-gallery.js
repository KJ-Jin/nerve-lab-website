/**
 * Three-up News carousel. The centered image is always sharp; adjacent photos
 * are faded previews. Only the centered image's caption is visible.
 */
export function initNewsGallery() {
  const gallery = document.querySelector('[data-news-gallery]');
  if (!gallery) return;

  const slides = Array.from(gallery.querySelectorAll('[data-news-gallery-slide]'));
  const captions = Array.from(gallery.querySelectorAll('[data-news-gallery-caption]'));
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
    const previousIndex = (active + slides.length - 1) % slides.length;
    const nextIndex = (active + 1) % slides.length;

    slides.forEach((slide, i) => {
      const position = i === active ? 'center'
        : i === previousIndex && slides.length > 2 ? 'previous'
        : i === nextIndex ? 'next'
        : 'hidden';
      slide.dataset.position = position;
      slide.setAttribute('aria-hidden', String(position !== 'center'));
    });
    captions.forEach((caption, i) => {
      caption.hidden = i !== active;
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
  dots.forEach((dot, index) => dot.addEventListener('click', () => showSlide(index)));
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
