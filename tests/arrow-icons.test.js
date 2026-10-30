import test from 'node:test';
import assert from 'node:assert/strict';

import { ArrowIcon } from '../src/components/arrow-icon.js';
import { Collaborators } from '../src/components/collaborators.js';
import { HomePage } from '../src/pages/home.js';
import { ContactPage } from '../src/pages/contact.js';
import { NewsPage } from '../src/pages/news.js';
import { PublicationsPage } from '../src/pages/publications.js';
import { ResearchPage } from '../src/pages/research.js';
import { TeamPage } from '../src/pages/team.js';

test('arrow icons use simple line-drawn SVG instead of emoji glyphs', () => {
  for (const direction of ['up-right', 'right']) {
    const icon = String(ArrowIcon(direction));
    assert.match(icon, /<svg class="site-arrow"/);
    assert.match(icon, /stroke="currentColor"/);
    assert.match(icon, /aria-hidden="true"/);
  }
});

test('all visible link arrows render as SVG rather than emoji characters', () => {
  const collaborator = String(Collaborators({
    intro: '',
    items: [{name:'Example', link:'https://example.org'}],
  }));
  for (const output of [
    collaborator, String(HomePage()), String(ContactPage()),
    String(NewsPage()), String(PublicationsPage()),
    String(ResearchPage()), String(TeamPage()),
  ]) {
    assert.ok(output.includes('class="site-arrow"'));
    assert.ok(!/[↗→➡➜➤]/u.test(output));
  }
});
