import { html } from '../lib/html.js';
import { PageBanner } from '../components/page-banner.js';
import content from '../content/news.js';
import { getArchivedPhotos } from '../lib/news-photos.js';
import { ArrowIcon } from '../components/arrow-icon.js';

/** #gallery-archive — photo cards with captions from the News image collection. */
export function GalleryArchivePage(gallery = content.gallery) {
  const photos = getArchivedPhotos(gallery);
  return html`
    ${PageBanner({ title: 'Gallery Archive' })}
    <section class="shell-wide gallery-archive-wrap">
      <p class="gallery-archive-intro">
        Photos and memories from earlier Nerve Lab events, conferences, and milestones.
      </p>
      ${photos.length
        ? html`<div class="gallery-archive-grid">
            ${photos.map((photo) => html`
              <figure class="gallery-archive-card">
                <img src="${photo.src}" alt="${photo.alt || photo.caption}" loading="lazy" decoding="async">
                <figcaption>
                  ${photo.date && html`<span class="news-gallery-date">${photo.date}</span>`}
                  <span>${photo.caption}</span>
                </figcaption>
              </figure>
            `)}
          </div>`
        : html`<p class="gallery-archive-empty">
            Older photos will appear here once the recent gallery has more than nine photos.
          </p>`}
      <a class="text-link gallery-archive-back" href="#news">Back to News ${ArrowIcon('right')}</a>
    </section>
  `;
}
