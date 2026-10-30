import { html, paragraphs } from '../lib/html.js';
import { PageBanner } from '../components/page-banner.js';
import content from '../content/research.js';
import { ArrowIcon } from '../components/arrow-icon.js';

/** #research — overview text plus links to the three research areas. */
export function ResearchPage() {
  const { banner, overview, areas } = content;

  return html`
    ${PageBanner(banner)}

    <section class="shell-wide research-overview">
      <h2>${overview.title}</h2>
      <p class="multiline">${paragraphs(overview.text)}</p>
    </section>

    <section class="research-areas">
      <div class="shell">
        <div class="eyebrow">${areas.eyebrow}</div>
        <h2 class="section-title">${areas.title}</h2>
        <div class="research-area-grid">
          ${areas.items.map((area, i) => html`
            <a class="research-area-link" href="${area.href}">
              <span class="research-area-index">${String(i + 1).padStart(2, '0')}</span>
              <h3>${area.title}</h3>
              <p>${area.text}</p>
              <span class="research-area-action">${area.linkText} ${ArrowIcon('right')}</span>
            </a>
          `)}
        </div>
      </div>
    </section>
  `;
}
