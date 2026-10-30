import { html } from '../lib/html.js';
import { ArrowIcon } from './arrow-icon.js';
import { getRecentPhotos } from '../lib/news-photos.js';

/**
 * News event photo carousel. Hidden until approved images and captions are
 * added to content/news.js; never fills the page with placeholder pictures.
 */
export function NewsGallery(gallery = {}) {
  const photos = getRecentPhotos(gallery);
  if (!photos.length) return html``;

  const intervalMs = Number.isFinite(gallery.intervalMs)
    ? Math.max(3000, gallery.intervalMs)
    : 6000;

  return html`
    <section class="shell-wide news-gallery-section" aria-label="Lab event photographs">
      <div class="news-gallery-heading">
        <div class="eyebrow">PHOTO GALLERY</div>
        <h2 class="section-title">Recent Happenings</h2>
      </div>
      <div class="news-gallery" data-news-gallery data-interval="${intervalMs}"
           role="region" aria-roledescription="carousel" aria-label="Lab events and milestones">
        <div class="news-gallery-slides" aria-live="off">
          ${photos.map((photo, index) => html`
            <figure class="news-gallery-slide" data-news-gallery-slide ${index !== 0 && html`hidden`}>
              <div class="news-gallery-image-frame">
                <img src="${photo.src}" alt="${photo.alt || photo.caption}"
                     loading="${index === 0 ? 'eager' : 'lazy'}"
                     decoding="async">
              </div>
              <figcaption class="news-gallery-caption">
                ${photo.date && html`<span class="news-gallery-date">${photo.date}</span>`}
                <span>${photo.caption}</span>
              </figcaption>
            </figure>
          `)}
        </div>
        ${photos.length > 1 && html`
          <div class="news-gallery-controls" aria-label="Photo carousel controls">
            <button type="button" class="news-gallery-arrow news-gallery-arrow--prev"
                    data-news-gallery-previous aria-label="Previous photo">${ArrowIcon('right')}</button>
            <div class="news-gallery-dots" role="group" aria-label="Choose a photo">
              ${photos.map((photo, index) => html`
                <button type="button" class="news-gallery-dot"
                        data-news-gallery-dot="${index}"
                        aria-label="Show photo ${index + 1} of ${photos.length}"
                        aria-current="${index === 0}"></button>
              `)}
            </div>
            <button type="button" class="news-gallery-arrow"
                    data-news-gallery-next aria-label="Next photo">${ArrowIcon('right')}</button>
            <button type="button" class="news-gallery-pause"
                    data-news-gallery-pause aria-pressed="false"
                    aria-label="Pause automatic photo rotation">Pause</button>
          </div>
        `}
      </div>
    </section>
  `;
}
