import { html, paragraphs } from '../lib/html.js';
import { PlaceholderArt } from './placeholder-art.js';

const ART_CYCLE = ['axon', 'nmj', 'vascular'];

/** One study / project on a research area page. Image and text sides alternate. */
export function StudyCard(study, index) {
  const {
    title,
    subtitle,
    principalInvestigator,
    status,
    description,
    questions = [],
    methods,
    sourceUrl,
    image,
    imageAlt,
    caption = '',
    art = ART_CYCLE[index % 3],
  } = study;

  return html`
    <article class="project">
      <div class="project-visual">
        <div class="visual-frame">
          ${image ? html`<img src="${image}" alt="${imageAlt || title}">` : PlaceholderArt(art)}
        </div>
        <p class="image-note">${caption}</p>
      </div>
      <div class="project-content">
        <span class="project-index">${String(index + 1).padStart(2, '0')}</span>
        <h3>${title}</h3>
        ${subtitle && html`<p class="project-subtitle">${subtitle}</p>`}
        ${principalInvestigator && html`
          <p class="study-pi"><span class="study-pi-label">Principal Investigator:</span> <span class="study-pi-name">${principalInvestigator}</span></p>
        `}
        ${status && html`<p class="study-status">${status}</p>`}
        <p class="copy multiline">${paragraphs(description)}</p>
        ${questions.length > 0 && html`
          <h4>Questions we explore</h4>
          <ul class="question-list">${questions.map((q) => html`<li>${q}</li>`)}</ul>
        `}
        ${methods && html`<p class="method-note">${methods}</p>`}
        ${sourceUrl && html`<a class="study-source" href="${sourceUrl}" target="_blank" rel="noopener noreferrer">Research source ↗</a>`}
      </div>
    </article>
  `;
}
