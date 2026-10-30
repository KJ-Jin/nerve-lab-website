import test from 'node:test';
import assert from 'node:assert/strict';
import { TeamPage } from '../src/pages/team.js';
import team from '../src/content/team.js';

test('Haneul Ryou has the supplied portrait and biography', () => {
  const member = team.groups.flatMap(group => group.members).find(person => person.name === 'Haneul Ryou');
  assert.ok(member);
  assert.equal(member.role, 'Medical Student Research Fellow');
  assert.equal(member.photo, 'images/team/haneul-ryou.webp');
  assert.match(member.bio, /socioeconomic barriers to care/);
  assert.match(member.bio, /cafe hopping, cooking, reading, and running!/);
  const basic = team.groups.find(group => group.title === 'Basic Science Team');
  const clinical = team.groups.find(group => group.title === 'Clinical Team');
  assert.ok(clinical.members.some(person => person.name === 'Haneul Ryou'));
  assert.ok(!basic.members.some(person => person.name === 'Haneul Ryou'));
  assert.ok(!basic.members.some(person => person.name === 'New member'));
  const translational = team.groups.find(group => group.title === 'Translational Team');
  assert.ok(translational);
  assert.deepEqual(translational.members, []);
  assert.equal(team.groups.length, 3);
  const rendered = String(TeamPage());
  assert.ok(!rendered.includes('Add clinical member'));
  assert.ok(rendered.includes('Translational Team'));
  assert.ok(!rendered.includes('Add translational member'));
  assert.equal((rendered.match(/class="member-card"/g) || []).length, 5);
  assert.ok(!rendered.includes('New member'));

  assert.match(rendered, /images\/team\/haneul-ryou\.webp/);
  assert.match(rendered, /Haneul Ryou/);
  assert.ok(!rendered.includes('Haneul Ryou</h3>\n      <div class="member-role">Role'));
});
