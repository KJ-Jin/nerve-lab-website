import test from 'node:test';
import assert from 'node:assert/strict';
import team from '../src/content/team.js';
import { TeamPage } from '../src/pages/team.js';
import { TeamGroupPage } from '../src/pages/team-group.js';

const basic = team.groups.find(group => group.id === 'basic');
const clinical = team.groups.find(group => group.id === 'clinical');

test('Team landing page has two vertically stacked clickable group-photo slots, without the PI portrait', () => {
  const landing = String(TeamPage());
  assert.equal(team.groups.length, 2);
  assert.equal((landing.match(/class="team-division-card"/g) || []).length, 2);
  assert.equal((landing.match(/class="team-division-placeholder"/g) || []).length, 0);
  assert.ok(landing.includes('src="images/team/basic-science-team.webp"'));
  assert.ok(landing.includes('src="images/team/clinical-team.webp"'));
  assert.ok(landing.includes('Basic Science Lab Team'));
  assert.ok(landing.includes('href="#team-basic"'));
  assert.ok(landing.includes('href="#team-clinical"'));
  assert.ok(!landing.includes('Yusha'));
  assert.ok(!landing.includes('pi-block'));
  assert.ok(landing.indexOf('href="#team-basic"') < landing.indexOf('href="#team-clinical"'));
  assert.ok(!landing.includes('Our Team'));
  assert.ok(!landing.includes('Translational Team'));
  assert.ok(!landing.includes('class="member-card"'));
  assert.ok(!landing.includes('class="collaborator-card"'));
});

test('Haneul Ryou and Joyce Liu belong to both basic sciences and clinical teams', () => {
  for (const group of [basic, clinical]) {
    assert.ok(group.members.some(member => member.name === 'Haneul Ryou'));
    assert.ok(group.members.some(member => member.name === 'Joyce Liu'));
  }
  const haneul = basic.members.find(person => person.name === 'Haneul Ryou');
  assert.equal(haneul.role, 'Medical Student Research Fellow');
  assert.equal(haneul.photo, 'images/team/haneul-ryou.webp');
  assert.match(haneul.bio, /socioeconomic barriers to care/);
  assert.match(haneul.bio, /cafe hopping, cooking, reading, and running!/);
  const joyce = clinical.members.find(person => person.name === 'Joyce Liu');
  assert.equal(joyce.photo, 'images/team/joyce-liu.png');
  assert.match(joyce.bio, /cardiovascular research/);
  assert.equal(basic.members.length, 5);
  assert.equal(clinical.members.length, 2);
});

test('Member cards render only inside the team group detail pages', () => {
  const basics = String(TeamGroupPage(basic));
  const clinic = String(TeamGroupPage(clinical));
  assert.equal((basics.match(/class="member-card"/g) || []).length, 5);
  assert.equal((clinic.match(/class="member-card"/g) || []).length, 9); // 7 PIs + 2 clinical members
  for (const page of [basics, clinic]) {
    assert.ok(page.includes('Team Members') || page.includes('Clinical Team'));
    assert.ok(page.includes('images/team/haneul-ryou.webp'));
    assert.ok(page.includes('images/team/joyce-liu.png'));
    assert.ok(page.includes('href="#people"'));
    assert.ok(!page.includes('New member'));
  }
});

test('Basic Sciences details begin with Katie as PI followed by five members', () => {
  const page = String(TeamGroupPage(basic));
  assert.ok(page.includes('Principal Investigator'));
  assert.ok(page.includes('Yusha'));
  assert.ok(page.indexOf('Yusha') < page.indexOf('Sean Yuan'));
  assert.ok(page.indexOf('class="pi-block"') < page.indexOf('class="team-members-section"'));
  assert.equal(team.pi.photo, 'images/team/yusha-katie-liu.jpg');
  assert.ok(page.includes('images/team/yusha-katie-liu.jpg'));
  assert.ok(!page.includes('images/team/clinical-pis-sprite.webp'));
});

test('Clinical PIs use the supplied file-name identities, Katie first; Joyce and Haneul follow', () => {
  const page = String(TeamGroupPage(clinical));
  assert.equal(clinical.principalInvestigators.length, 7);
  const names = [
    'Yusha “Katie” Liu, MD, PhD',
    'Aaron E. Bunnell, MD',
    'Benjamin L. Grannan, MD',
    'Christopher S. Crowe, MD',
    'Jeffrey B. Friedrich, MD',
    'Sarah M. Smith, MD',
    'Whitney M. Morean, PhD',
  ];
  for (let i=0; i<names.length; i++) {
    assert.equal(clinical.principalInvestigators[i].name, names[i]);
    assert.equal(clinical.principalInvestigators[i].role, 'Principal Investigator');
    assert.equal(clinical.principalInvestigators[i].photo, 'images/team/clinical-pis-sprite.webp');
    assert.ok(page.includes(names[i]));
  }
  assert.equal(clinical.members[0].name, 'Joyce Liu');
  assert.equal(clinical.members[1].name, 'Haneul Ryou');
  assert.ok(page.indexOf('Principal Investigators') < page.indexOf('class="team-members-section"'));
  assert.ok(page.indexOf('Whitney M. Morean') < page.indexOf('Joyce Liu'));
  assert.equal((page.match(/class="member-card"/g) || []).length, 9);
  assert.equal(clinical.collaborators.items.length, 2);
  assert.deepEqual(clinical.collaborators.items.map(c=>c.name), ['Chris Dy','David Brogan']);
});


test('Illustrated group portrait is uploaded with a correct team label and remains uncropped', async () => {
  const { statSync, readFileSync } = await import('node:fs');
  assert.equal(basic.title, 'Basic Science Lab Team');
  assert.equal(basic.photo, 'images/team/basic-science-team.webp');
  assert.ok(statSync(new URL('../images/team/basic-science-team.webp', import.meta.url)).size > 10000);
  const landing = String(TeamPage());
  assert.ok(landing.includes('Illustration of six Basic Science Lab Team members'));
  const styles = readFileSync(new URL('../src/styles/pages/team.css', import.meta.url), 'utf8');
  assert.ok(styles.includes('aspect-ratio: 1920 / 819'));
  assert.ok(styles.includes('object-fit: contain;'));
});


test('Clinical Team photo is a permanent asset and its full waterfront illustration is shown uncropped', async () => {
  const { statSync, readFileSync } = await import('node:fs');
  assert.equal(clinical.title, 'Clinical Research Team');
  assert.equal(clinical.photo, 'images/team/clinical-team.webp');
  assert.ok(statSync(new URL('../images/team/clinical-team.webp', import.meta.url)).size > 20000);
  const landing = String(TeamPage());
  assert.ok(landing.includes('Illustrated portrait of seven Clinical Team members'));
  assert.ok(landing.includes('team-division-photo--clinical'));
  const styles = readFileSync(new URL('../src/styles/pages/team.css', import.meta.url), 'utf8');
  assert.match(styles, /\.team-division-photo--clinical\s*\{[^}]*aspect-ratio:\s*16\s*\/\s*9;/);
  assert.ok(styles.includes('object-fit: contain;'));
});


test('Navigation provides accessible dropdown links to both Team sections', async () => {
  const { readFileSync } = await import('node:fs');
  const markup = readFileSync(new URL('../index.html', import.meta.url), 'utf8');
  const nav = readFileSync(new URL('../src/lib/nav.js', import.meta.url), 'utf8');
  assert.ok(markup.includes('id="team-menu"'));
  assert.ok(markup.includes('id="team-dropdown-toggle"'));
  assert.ok(markup.includes('aria-controls="team-submenu"'));
  assert.ok(markup.includes('href="#team-basic" data-page="team-basic">Basic Science Lab Team</a>'));
  assert.ok(markup.includes('href="#team-clinical" data-page="team-clinical">Clinical Research Team</a>'));
  assert.ok(nav.includes("['research', 'team', 'news']"));
  assert.ok(nav.includes("teamMenu.wrapper.classList.toggle('current'"));
});
