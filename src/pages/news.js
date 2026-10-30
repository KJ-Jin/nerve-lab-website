import { html } from '../lib/html.js';
import { PageBanner } from '../components/page-banner.js';
import content from '../content/news.js';
import { ArrowIcon } from '../components/arrow-icon.js';
import { NewsGallery } from '../components/news-gallery.js';

export function NewsPage() {
  const { banner, gallery, news } = content;

  return html`
    ${PageBanner(banner)}
    ${NewsGallery(gallery)}

    <section class="shell-wide news-wrap">
      ${news.map((item) => html`
        <article class="news-entry">
          <span class="news-date">${item.date}</span>
          <div>
            <h2>${item.title}</h2>
            <p>${item.description}</p>
            ${item.url && html`<a class="text-link" href="${item.url}" target="_blank" rel="noopener noreferrer">${item.linkLabel || 'Read more'} ${ArrowIcon('up-right')}</a>`}
          </div>
        </article>
      `)}
    </section>

    <section class="shell-wide news-archive-link">
      <div>
        <div class="eyebrow">MORE MOMENTS</div>
        <h2>Gallery Archive</h2>
        <p>Explore earlier lab photos and the stories behind them.</p>
      </div>
      <a class="text-link" href="#gallery-archive">Explore Gallery Archive ${ArrowIcon('right')}</a>
    </section>
  `;
}
