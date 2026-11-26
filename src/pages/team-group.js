import { html, paragraphs } from '../lib/html.js';
import { PageBanner } from '../components/page-banner.js';
import { MemberGrid, Portrait } from '../components/member-grid.js';
import { Collaborators } from '../components/collaborators.js';
import { ArrowIcon } from '../components/arrow-icon.js';
import team from '../content/team.js';

function BasicSciencePI(pi) {
  return html`
    <section class="team-basic-principal" aria-label="Principal Investigator">
      <h2 class="team-heading">Principal Investigator</h2>
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
    </section>
  `;
}

/** Detail page reached by clicking the Basic Sciences or Clinical Team group card. */
export function TeamGroupPage(group) {
  const breadcrumb = html`<a class="research-breadcrumb" href="#people">TEAM</a> <span aria-hidden="true">/</span> ${group.title.toUpperCase()}`;
  return html`
    ${PageBanner({ eyebrow: breadcrumb, title: group.title })}
    <section class="shell-wide team-group-detail">
      ${group.id === 'basic' && BasicSciencePI(team.pi)}
      ${group.principalInvestigators?.length > 0 && html`
        <div class="clinical-pi-section">
          <h2 class="team-heading">Principal Investigators</h2>
          ${MemberGrid(group.principalInvestigators)}
        </div>
      `}
      ${group.members?.length > 0 && html`
        <div class="team-members-section">
          <h2 class="team-heading">${group.id === 'clinical' ? 'Clinical Team' : 'Team Members'}</h2>
          ${MemberGrid(group.members)}
        </div>
      `}
    </section>
    ${group.collaborators?.items?.length > 0 && Collaborators(group.collaborators)}
    <div class="shell-wide team-group-return">
      <a class="text-link" href="#people">${ArrowIcon('right')} Back to Team</a>
    </div>
  `;
}
