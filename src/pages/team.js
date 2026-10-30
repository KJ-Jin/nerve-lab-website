import { html, paragraphs } from '../lib/html.js';
import { PageBanner } from '../components/page-banner.js';
import { MemberGrid, Portrait } from '../components/member-grid.js';
import content from '../content/team.js';
import { ArrowIcon } from '../components/arrow-icon.js';

function GroupPhoto({ eyebrow, title, image, caption, placeholderTitle, placeholderNote }) {
  return html`
    <section class="team-group-photo">
      <div class="group-photo-heading">
        <div class="eyebrow">${eyebrow}</div>
        <h2 class="team-heading">${title}</h2>
      </div>
      ${image
        ? html`
          <figure class="group-photo-figure">
            <img src="${image}" alt="Group photograph of Nerve Lab members">
            <figcaption>${caption}</figcaption>
          </figure>`
        : html`
          <div class="group-photo-empty">
            <span>${placeholderTitle}</span>
            <small>${placeholderNote}</small>
          </div>`}
    </section>
  `;
}

function PrincipalInvestigator(pi) {
  return html`
    <h2 class="team-heading">${pi.heading}</h2>
    <div class="pi-block">
      ${Portrait(pi)}
      <div class="pi-text">
        <div class="eyebrow">${pi.role}</div>
        <h3>${pi.name}</h3>
        <div class="pi-title">${pi.title}</div>
        <p class="copy multiline">${paragraphs(pi.bio)}</p>
        <a class="text-link" href="${pi.profileUrl}" target="_blank" rel="noopener noreferrer">Faculty profile ${ArrowIcon('up-right')}</a>
      </div>
    </div>
  `;
}

/** #people — group photo, principal investigator, then member groups. */
export function TeamPage() {
  const { banner, groupPhoto, pi, groups } = content;

  return html`
    ${PageBanner(banner)}

    <section class="shell-wide team-wrap">
      ${GroupPhoto(groupPhoto)}
      ${PrincipalInvestigator(pi)}
      ${groups.map((group) => html`
        <div class="team-group">
          <h2 class="team-heading">${group.title}</h2>
          ${group.members.length > 0 && MemberGrid(group.members)}
        </div>
      `)}
    </section>
  `;
}
