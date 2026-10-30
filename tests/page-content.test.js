import test from 'node:test';
import assert from 'node:assert/strict';

import { NewsPage } from '../src/pages/news.js';
import { PublicationsPage } from '../src/pages/publications.js';
import { TeamPage } from '../src/pages/team.js';
import { ResearchAreaPage } from '../src/pages/research-area.js';
import basic from '../src/content/research-basic.js';
import translational from '../src/content/research-translational.js';

test('Lab News, Publications and Team use the requested page headings', () => {
  const news = String(NewsPage());
  const publications = String(PublicationsPage());
  const team = String(TeamPage());
  assert.match(news, /<h1 class="display">Lab News<\/h1>/);
  assert.ok(!news.includes('FROM THE LAB'));
  assert.ok(!news.includes('Selected updates and milestones from the Liu Lab'));

  assert.match(publications, /<h1 class="display">Publications<\/h1>/);
  assert.ok(!publications.includes('SELECTED WORK'));

  assert.match(team, /<h1 class="display">The Team<\/h1>/);
  assert.ok(!team.includes('THE LAB'));
  assert.ok(team.includes('Basic Science Team'));
});

test('Basic Science introduction ends with a period', () => {
  assert.ok(String(ResearchAreaPage(basic)).includes('Overview of basic science research.'));
});

test('Translational Research page shows its title without draft projects or empty placeholders', () => {
  const page = String(ResearchAreaPage(translational));
  assert.match(page, /<h1 class="display">Translational Research<\/h1>/);
  assert.ok(!page.includes('Connecting discoveries in nerve biology'));
  assert.ok(!page.includes('class="project"'));
  assert.ok(!page.includes('class="collaborator-section"'));
  assert.ok(!page.includes('Studies for this category are being prepared.'));
  assert.ok(!page.includes('Collaborator profiles will be added here.'));
});

test('Lab News includes both external trial announcements and the UW Medicine Vitals link', () => {
  const news = String(NewsPage());
  assert.match(news, /checkpointsurgical\.com\/news\/harborview-medical-center-fastr-ten-study-site/);
  assert.match(news, /businesswire\.com\/news\/home\/20251002748937/);
  assert.match(news, /vitals\.uwmedicine\.org\/site\/c125bab2/);
  assert.ok(news.indexOf('FEBRUARY 2026') < news.indexOf('OCTOBER 2025'));
  assert.ok(news.includes('UW Medicine Vitals feature'));
});
