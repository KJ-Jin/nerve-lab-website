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

test('Haneul Ryou and Joyce Liu are shown only on Basic Science Lab Team', () => {
  assert.ok(basic.members.some(member => member.name === 'Haneul Ryou'));
  assert.ok(basic.members.some(member => member.name === 'Joyce Liu'));
  assert.equal(clinical.members.length, 0);
  const haneul = basic.members.find(person => person.name === 'Haneul Ryou');
  assert.equal(haneul.role, 'Medical Student Research Fellow');
  assert.equal(haneul.photo, 'images/team/haneul-ryou.webp');
  assert.match(haneul.bio, /socioeconomic barriers to care/);
  assert.match(haneul.bio, /cafe hopping, cooking, reading, and running!/);
  const joyce = basic.members.find(person => person.name === 'Joyce Liu');
  assert.equal(joyce.photo, 'images/team/joyce-liu.png');
  assert.match(joyce.bio, /cardiovascular research/);
  assert.equal(basic.members.length, 5);
  assert.deepEqual(clinical.members, []);
});

test('Member cards appear on Basic Science and only PI cards appear on Clinical Research', () => {
  const basics = String(TeamGroupPage(basic));
  const clinic = String(TeamGroupPage(clinical));
  assert.equal((basics.match(/class="member-card"/g) || []).length, 5);
  assert.equal((clinic.match(/class="member-card"/g) || []).length, 7);
  assert.ok(basics.includes('Team Members'));
  assert.ok(basics.includes('images/team/haneul-ryou.webp'));
  assert.ok(basics.includes('images/team/joyce-liu.png'));
  assert.ok(!clinic.includes('class="team-members-section"'));
  assert.ok(!clinic.includes('images/team/haneul-ryou.webp'));
  assert.ok(!clinic.includes('images/team/joyce-liu.png'));
  assert.ok(!clinic.includes('Joyce Liu'));
  assert.ok(!clinic.includes('Haneul Ryou'));
  assert.ok(clinic.includes('Clinical Studies Collaborators'));
  for (const page of [basics, clinic]) {
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

test('Clinical PIs keep their portraits in the requested W layout order', () => {
  const page = String(TeamGroupPage(clinical));
  assert.equal(clinical.principalInvestigators.length, 7);
  const names = [
    'Jeffrey B. Friedrich, MD',
    'Aaron E. Bunnell, MD',
    'Benjamin L. Grannan, MD',
    'Yusha “Katie” Liu, MD, PhD',
    'Sarah M. Smith, MD',
    'Christopher S. Crowe, MD',
    'Whitney M. Morean, PhD',
  ];  for (let i=0; i<names.length; i++) {
    assert.equal(clinical.principalInvestigators[i].name, names[i]);
    assert.equal(clinical.principalInvestigators[i].role, 'Principal Investigator');
    const newPhotoPaths = [
      'images/team/clinical-pis/jeffrey-friedrich.webp',
      'images/team/clinical-pis/aaron-bunnell.webp',
      'images/team/clinical-pis/benjamin-grannan.webp',
      'images/team/clinical-pis/katie-liu.webp',
      'images/team/clinical-pis/sarah-smith.webp',
      'images/team/clinical-pis/christopher-crowe.webp',
      'images/team/clinical-pis/whitney-morean.webp',
    ];
    assert.equal(clinical.principalInvestigators[i].photo, newPhotoPaths[i]);
    assert.equal(clinical.principalInvestigators[i].photoPosition, undefined);
    assert.ok(page.includes(names[i]));
  }
  assert.deepEqual(clinical.members, []);
  assert.ok(page.includes('Principal Investigators'));
  assert.ok(!page.includes('class="team-members-section"'));
  assert.equal((page.match(/class="member-card"/g) || []).length, 7);
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

test('Clinical principal investigators form a staggered W: four above, three centered', async () => {
  const { readFileSync } = await import('node:fs');
  const css = readFileSync(new URL('../src/styles/pages/team.css', import.meta.url), 'utf8');
  assert.match(css, /\.clinical-pi-section \.members-grid\s*\{[^}]*grid-template-columns:\s*repeat\(8, minmax\(0, 1fr\)\)/);
  assert.match(css, /\.clinical-pi-section \.member-card\s*\{[^}]*grid-column:\s*span 2/);
  for (const [n, col] of [[5, 2], [6, 4], [7, 6]]) {
    assert.ok(css.includes(`.clinical-pi-section .member-card:nth-child(${n}) {\n  grid-column: ${col} / span 2;`), 'staggered placement for card ' + n);
  }
  assert.match(css, /@media \(max-width: 900px\)[\s\S]*?\.clinical-pi-section \.member-card:nth-child\(n\)\s*\{[^}]*grid-column:\s*auto/);
  assert.match(css, /@media \(max-width: 900px\)[\s\S]*?\.clinical-pi-section \.members-grid\s*\{[^}]*repeat\(2, minmax\(0, 1fr\)\)/);
  assert.match(css, /@media \(max-width: 640px\)[\s\S]*?\.clinical-pi-section \.members-grid\s*\{[^}]*grid-template-columns:\s*1fr/);
  const surname = name => name.split(',')[0].trim().split(' ').at(-1);
  const pi = clinical.principalInvestigators.map(person => person.name);
  assert.deepEqual(pi, [
    'Jeffrey B. Friedrich, MD',
    'Aaron E. Bunnell, MD',
    'Benjamin L. Grannan, MD',
    'Yusha “Katie” Liu, MD, PhD',
    'Sarah M. Smith, MD',
    'Christopher S. Crowe, MD',
    'Whitney M. Morean, PhD',
  ]);
  const members = clinical.members.map(person => surname(person.name));
  assert.deepEqual(members, [...members].sort((a,b) => a.localeCompare(b, 'en')));
});


test('All seven clinical PI images are optimized square portraits stored in the website', async () => {
  const { readFileSync, statSync } = await import('node:fs');
  const photoPaths = clinical.principalInvestigators.map(person => person.photo);
  assert.equal(new Set(photoPaths).size, 7);
  for (const photo of photoPaths) {
    assert.match(photo, /^images\/team\/clinical-pis\/[-a-z]+\.webp$/);
    const path = new URL('../' + photo, import.meta.url);
    const buf = readFileSync(path);
    assert.ok(buf.length > 8000, 'headshot must be present: ' + photo);
    assert.equal(buf.toString('ascii',0,4), 'RIFF');
    assert.equal(buf.toString('ascii',8,12), 'WEBP');
    assert.equal(buf.toString('ascii',12,16), 'VP8 ');
    const width=buf.readUInt16LE(26) & 0x3fff;
    const height=buf.readUInt16LE(28) & 0x3fff;
    assert.equal(width,620,photo+' width');
    assert.equal(height,620,photo+' height');
  }
  const page = String(TeamGroupPage(clinical));
  assert.ok(!page.includes('clinical-pis-sprite.webp'));
  for(const photo of photoPaths) assert.ok(page.includes(photo));
});


test('Only Aaron receives a smaller face framing; other six photos remain unchanged', async () => {
  const { readFileSync } = await import('node:fs');
  const css = readFileSync(new URL('../src/styles/pages/team.css', import.meta.url), 'utf8');
  assert.match(css, /\.clinical-pi-section \.portrait img\[src\$="\/aaron-bunnell\.webp"\]\s*\{[^}]*transform:\s*scale\(0\.88\)/);
  const photos = clinical.principalInvestigators.map(person => person.photo);
  assert.equal(new Set(photos).size, 7);
  assert.equal(photos[1], 'images/team/clinical-pis/aaron-bunnell.webp');
});
