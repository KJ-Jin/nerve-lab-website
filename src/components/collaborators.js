import { html } from '../lib/html.js';

function CollaboratorCard({ name, affiliation, role, link, image }) {
  return html`
    <article class="collaborator-card">
      ${image && html`<img class="collaborator-logo" src="${image}" alt="${name} logo or portrait">`}
      <h3>${name}</h3>
      ${affiliation && html`<p>${affiliation}</p>`}
      ${role && html`<p>${role}</p>`}
      ${link && html`<a class="text-link" href="${link}" target="_blank" rel="noopener noreferrer">Visit collaborator ↗</a>`}
    </article>
  `;
}

/** "Collaborators" section at the bottom of each research area page. */
export function Collaborators({ intro, items }) {
  return html`
    <section class="shell collaborator-section" aria-label="Collaborators">
      <div class="collaborator-top">
        <div>
          <div class="eyebrow">WORKING TOGETHER</div>
          <h2 class="section-title">Collaborators</h2>
        </div>
        <p class="copy">${intro}</p>
      </div>
      ${items.length > 0
        ? html`<div class="collaborator-grid">${items.map(CollaboratorCard)}</div>`
        : html`<p class="collaborator-empty">Collaborator profiles will be added here.</p>`}
    </section>
  `;
}
