import { html } from '../lib/html.js';
import { PageBanner } from '../components/page-banner.js';
import content from '../content/team.js';
import { ArrowIcon } from '../components/arrow-icon.js';

function TeamGroupLink(group) {
  return html`
    <a class="team-division-card" href="${group.href}" aria-label="View ${group.title} members and investigators">
      <div class="team-division-photo${group.id === 'clinical' ? ' team-division-photo--clinical' : ''}">
        ${group.photo
          ? html`<img src="${group.photo}" alt="${group.photoAlt || `${group.title} group photograph`}" loading="lazy" decoding="async">`
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

/** #people — two vertically stacked, clickable group-photo sections. */
export function TeamPage() {
  const { banner, groups } = content;
  return html`
    ${PageBanner(banner)}
    <section class="shell-wide team-wrap">
      <div class="team-divisions">
        <div class="team-division-grid">
          ${groups.map(TeamGroupLink)}
        </div>
      </div>
    </section>
  `;
}
