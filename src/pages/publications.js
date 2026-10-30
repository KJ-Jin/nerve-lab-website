import { html } from '../lib/html.js';
import { PageBanner } from '../components/page-banner.js';
import content from '../content/publications.js';
import { ArrowIcon } from '../components/arrow-icon.js';

// Underline Katie's author citation while keeping all author text HTML-escaped.
export function FormatAuthors(authors) {
  return authors.split(/\b(Liu YK|Liu Y)\b/g).map((part) =>
    part === 'Liu YK' || part === 'Liu Y'
      ? html`<u class="pub-katie">${part}</u>`
      : part
  );
}

function PublicationCard(pub) {
  const link = pub.pmid ? `https://pubmed.ncbi.nlm.nih.gov/${pub.pmid}/` : pub.url;
  const details = html`
    <div class="pub-year">${pub.year}</div>
    <div>
      <div class="pub-meta pub-authors">${FormatAuthors(pub.authors)}</div>
      <h2 class="pub-title">${pub.title}</h2>
      <div class="pub-meta pub-journal">${pub.journal}</div>
      ${link
        ? html`<span class="pub-pubmed">${pub.pmid ? 'View on PubMed' : 'View journal article'} ${ArrowIcon('up-right')}</span>`
        : html`<span class="pub-status">${pub.status || 'PubMed link pending'}</span>`}
    </div>
    ${link && html`<div class="arrow" aria-hidden="true">${ArrowIcon('up-right')}</div>`}
  `;
  return link
    ? html`<a class="publication" href="${link}" target="_blank" rel="noopener noreferrer">${details}</a>`
    : html`<article class="publication publication--accepted">${details}</article>`;
}

export function PublicationsPage() {
  const { banner, publications } = content;

  return html`
    ${PageBanner(banner)}
    <section class="shell-wide publications-wrap">
      ${publications.map(PublicationCard)}
    </section>
  `;
}
