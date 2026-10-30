import { html } from '../lib/html.js';
import { PageBanner } from '../components/page-banner.js';
import { StudyCard } from '../components/study-card.js';
import { Collaborators } from '../components/collaborators.js';

/**
 * Shared layout for the three research area pages
 * (#research-clinical, #research-basic, #research-translational).
 * Content comes from src/content/research-*.js.
 */
export function ResearchAreaPage({ banner, studies, collaborators, showStudyNumbers = true }) {
  const breadcrumb = html`<a class="research-breadcrumb" href="#research">RESEARCH</a> <span aria-hidden="true">/</span> ${banner.title.toUpperCase()}`;

  return html`
    ${PageBanner({ eyebrow: breadcrumb, title: banner.title, intro: banner.intro })}

    ${studies.length > 0 && html`
      <section class="study-list">
        <div class="shell">
          ${studies.map((study, index) => StudyCard(study, index, { showNumber: showStudyNumbers }))}
        </div>
      </section>
    `}

    ${collaborators?.items?.length > 0 && Collaborators(collaborators)}
  `;
}
