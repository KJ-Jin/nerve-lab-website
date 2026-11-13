import { html } from '../lib/html.js';
import { PageBanner } from '../components/page-banner.js';
import { MemberGrid } from '../components/member-grid.js';
import { Collaborators } from '../components/collaborators.js';
import { ArrowIcon } from '../components/arrow-icon.js';

/** Detail page reached by clicking a Basic Sciences or Clinical group photo. */
export function TeamGroupPage(group) {
  const breadcrumb = html`<a class="research-breadcrumb" href="#people">TEAM</a> <span aria-hidden="true">/</span> ${group.title.toUpperCase()}`;

  return html`
    ${PageBanner({ eyebrow: breadcrumb, title: group.title })}
    <section class="shell-wide team-group-detail">
      <h2 class="team-heading">Team Members</h2>
      ${MemberGrid(group.members)}
    </section>
    ${group.collaborators?.items?.length > 0 && Collaborators(group.collaborators)}
    <div class="shell-wide team-group-return">
      <a class="text-link" href="#people">${ArrowIcon('right')} Back to Team</a>
    </div>
  `;
}
