import { html } from '../lib/html.js';
import { PageBanner } from '../components/page-banner.js';
import { StudyCard } from '../components/study-card.js';

/**
 * Shared layout for basic science and clinical studies pages
 * (#research-basic, #research-clinical).
 * Content comes from src/content/research-*.js.
 */
export function ResearchAreaPage({ banner, studies, activeTrials = [], showStudyNumbers = true }) {
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

    ${activeTrials.length > 0 && html`
      <section class="active-trials-section" aria-labelledby="active-trials-heading">
        <div class="shell">
          <div class="active-trials-divider" aria-hidden="true"></div>
          <h2 id="active-trials-heading" class="active-trials-heading">Active Clinical Trials</h2>
          <div class="active-trials-list">
            ${activeTrials.map((study, index) => StudyCard(study, index, { showNumber: showStudyNumbers }))}
          </div>
        </div>
      </section>
    `}

  `;
}
