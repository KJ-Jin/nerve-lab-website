import { html } from '../lib/html.js';
import { PageBanner } from '../components/page-banner.js';
import { StudyCard } from '../components/study-card.js';
import { Collaborators } from '../components/collaborators.js';

/**
 * Shared layout for the three research area pages
 * (#research-clinical, #research-basic, #research-translational).
 * Content comes from src/content/research-*.js.
 */
export function ResearchAreaPage({ banner, studies, collaborators }) {
  const breadcrumb = html`<a class="research-breadcrumb" href="#research">RESEARCH</a> <span aria-hidden="true">/</span> ${banner.title.toUpperCase()}`;

  return html`
    ${PageBanner({ eyebrow: breadcrumb, title: banner.title, intro: banner.intro })}

    <section class="study-list">
      <div class="shell">
        ${studies.length > 0
          ? studies.map(StudyCard)
          : html`<p class="research-empty">Studies for this category are being prepared.</p>`}
      </div>
    </section>

    ${Collaborators(collaborators)}
  `;
}
