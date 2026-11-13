import test from 'node:test';
import assert from 'node:assert/strict';
import team from '../src/content/team.js';
import { TeamPage } from '../src/pages/team.js';
import { TeamGroupPage } from '../src/pages/team-group.js';

const basic = team.groups.find(group => group.id === 'basic');
const clinical = team.groups.find(group => group.id === 'clinical');

test('Team landing page has two clickable photo placeholders and keeps the principal investigator', () => {
  const landing = String(TeamPage());
  assert.equal(team.groups.length, 2);
  assert.equal((landing.match(/class="team-division-card"/g) || []).length, 2);
  assert.equal((landing.match(/class="team-division-placeholder"/g) || []).length, 2);
  assert.ok(landing.includes('href="#team-basic"'));
  assert.ok(landing.includes('href="#team-clinical"'));
  assert.ok(landing.includes('Yusha'));
  assert.ok(landing.includes('Our Team'));
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
  assert.equal((clinic.match(/class="member-card"/g) || []).length, 2);
  for (const page of [basics, clinic]) {
    assert.ok(page.includes('Team Members'));
    assert.ok(page.includes('images/team/haneul-ryou.webp'));
    assert.ok(page.includes('images/team/joyce-liu.png'));
    assert.ok(page.includes('href="#people"'));
    assert.ok(!page.includes('New member'));
  }
});
