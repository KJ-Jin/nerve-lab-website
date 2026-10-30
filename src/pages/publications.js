import { html } from '../lib/html.js';
import { PageBanner } from '../components/page-banner.js';
import content from '../content/publications.js';
import { ArrowIcon } from '../components/arrow-icon.js';

export function PublicationsPage() {
  const { banner, publications } = content;

  return html`
    ${PageBanner(banner)}

    <section class="shell-wide publications-wrap">
      ${publications.map((pub) => html`
        <a class="publication" href="${pub.url}" target="_blank" rel="noopener noreferrer">
          <div class="pub-year">${pub.year}</div>
          <div>
            <div class="pub-meta pub-authors">${pub.authors}</div>
            <h2 class="pub-title">${pub.title}</h2>
            <div class="pub-meta pub-journal">${pub.journal}</div>
            <span class="pub-pubmed">View on PubMed ${ArrowIcon('up-right')}</span>
          </div>
          <div class="arrow" aria-hidden="true">${ArrowIcon('up-right')}</div>
        </a>
      `)}
    </section>
  `;
}
