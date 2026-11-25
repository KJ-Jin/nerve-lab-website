import { html, paragraphs } from '../lib/html.js';

/** "Haneul Ryou" → "HR". Shown in place of a missing photo. */
export function initials(name) {
  return (name.match(/\p{L}+/gu) ?? ['?']).map((word) => word[0]).slice(0, 2).join('');
}

export function Portrait({ photo, name, photoPosition }) {
  return html`
    <div class="portrait">
      ${photo
        ? html`<img src="${photo}" alt="Portrait of ${name}" loading="lazy" ${photoPosition ? html`style="object-position: ${photoPosition} center"` : ''}>`
        : html`<span class="portrait-placeholder">${initials(name)}</span>`}
    </div>
  `;
}

function MemberCard(member) {
  return html`
    <article class="member-card">
      ${Portrait(member)}
      <h3 class="member-name">${member.name}</h3>
      <div class="member-role">${member.role}</div>
      ${member.bio && html`<p class="member-description multiline">${paragraphs(member.bio)}</p>`}
      ${member.profileUrl && html`<a class="text-link member-profile-link" href="${member.profileUrl}" target="_blank" rel="noopener noreferrer">Faculty profile</a>`}
    </article>
  `;
}

export function MemberGrid(members) {
  return html`<div class="members-grid">${members.map(MemberCard)}</div>`;
}
