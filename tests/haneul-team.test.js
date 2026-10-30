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
  const rendered = String(TeamPage());
  assert.match(rendered, /images\/team\/haneul-ryou\.webp/);
  assert.match(rendered, /Haneul Ryou/);
  assert.ok(!rendered.includes('Haneul Ryou</h3>\n      <div class="member-role">Role'));
});
