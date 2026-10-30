import { html } from '../lib/html.js';
import { ArrowIcon } from './arrow-icon.js';
import { getRecentPhotos } from '../lib/news-photos.js';

/**
 * Wide, cinematic carousel: the selected photo is sharp and centered,
 * with faded previous/next previews. Only its caption is displayed.
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
        <div class="news-gallery-stage" aria-live="off">
          ${photos.map((photo, index) => {
            const position = index === 0 ? 'center'
              : index === 1 ? 'next'
              : index === photos.length - 1 && photos.length > 2 ? 'previous'
              : 'hidden';
            return html`
              <figure class="news-gallery-slide" data-news-gallery-slide
                      data-position="${position}" aria-hidden="${position !== 'center'}">
                <img src="${photo.src}" alt="${photo.alt || photo.caption}"
                     loading="${index < 3 || index === photos.length - 1 ? 'eager' : 'lazy'}"
                     decoding="async">
              </figure>
            `;
          })}
          ${photos.length > 1 && html`
            <button type="button" class="news-gallery-arrow news-gallery-arrow--prev"
                    data-news-gallery-previous aria-label="Previous photo">${ArrowIcon('right')}</button>
            <button type="button" class="news-gallery-arrow news-gallery-arrow--next"
                    data-news-gallery-next aria-label="Next photo">${ArrowIcon('right')}</button>
          `}
        </div>
        <div class="news-gallery-captions" aria-live="off">
          ${photos.map((photo, index) => html`
            <div class="news-gallery-caption" data-news-gallery-caption
                 ${index !== 0 && html`hidden`}>
              ${photo.date && html`<span class="news-gallery-date">${photo.date}</span>`}
              <span>${photo.caption}</span>
            </div>
          `)}
        </div>
        ${photos.length > 1 && html`
          <div class="news-gallery-controls" aria-label="Photo carousel controls">
            <div class="news-gallery-dots" role="group" aria-label="Choose a photo">
              ${photos.map((photo, index) => html`
                <button type="button" class="news-gallery-dot"
                        data-news-gallery-dot="${index}"
                        aria-label="Show photo ${index + 1} of ${photos.length}"
                        aria-current="${index === 0}"></button>
              `)}
            </div>
            <button type="button" class="news-gallery-pause"
                    data-news-gallery-pause aria-pressed="false"
                    aria-label="Pause automatic photo rotation">Pause</button>
          </div>
        `}
      </div>
    </section>
  `;
}
