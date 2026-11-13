import { html } from '../lib/html.js';
import { PageBanner } from '../components/page-banner.js';
import content from '../content/news.js';
import { getArchivedPhotos } from '../lib/news-photos.js';
import { ArrowIcon } from '../components/arrow-icon.js';

/** #gallery-archive — photos only, without captions or descriptive copy. */
export function GalleryArchivePage(gallery = content.gallery) {
  const photos = getArchivedPhotos(gallery);
  return html`
    ${PageBanner({ title: 'Gallery Archive' })}
    <section class="shell-wide gallery-archive-wrap">
      ${photos.length
        ? html`<div class="gallery-archive-grid">
            ${photos.map((photo) => html`
              <figure class="gallery-archive-card">
                <img src="${photo.src}" alt="${photo.alt || photo.caption}" loading="lazy" decoding="async">
              </figure>
            `)}
          </div>`
        : ''}
      <a class="text-link gallery-archive-back" href="#news">Back to News ${ArrowIcon('right')}</a>
    </section>
  `;
}
