import { html, paragraphs } from '../lib/html.js';
import { PageBanner } from '../components/page-banner.js';
import { Portrait } from '../components/member-grid.js';
import content from '../content/team.js';
import { ArrowIcon } from '../components/arrow-icon.js';

function TeamGroupLink(group) {
  return html`
    <a class="team-division-card" href="${group.href}" aria-label="View ${group.title} members and collaborators">
      <div class="team-division-photo">
        ${group.photo
          ? html`<img src="${group.photo}" alt="${group.title} group photograph">`
          : html`
            <div class="team-division-placeholder" aria-hidden="true">
              <span>GROUP PHOTO</span>
              <small>Coming soon</small>
            </div>
          `}
      </div>
      <div class="team-division-label">
        <h3>${group.title}</h3>
        <span>View team members ${ArrowIcon('right')}</span>
      </div>
    </a>
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

/** #people — principal investigator and two group-photo links to team details. */
export function TeamPage() {
  const { banner, pi, groups } = content;

  return html`
    ${PageBanner(banner)}
    <section class="shell-wide team-wrap">
      ${PrincipalInvestigator(pi)}
      <div class="team-divisions">
        <h2 class="team-heading">Our Team</h2>
        <div class="team-division-grid">
          ${groups.map(TeamGroupLink)}
        </div>
      </div>
    </section>
  `;
}
