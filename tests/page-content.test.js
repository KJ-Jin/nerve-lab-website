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

test('Lab News includes external trial announcements and the locally hosted Vitals PDF', () => {
  const news = String(NewsPage());
  assert.match(news, /checkpointsurgical\.com\/news\/harborview-medical-center-fastr-ten-study-site/);
  assert.match(news, /businesswire\.com\/news\/home\/20251002748937/);
  assert.match(news, /images\/news\/optimizing-peripheral-nerve-injury-care\.pdf/);
  assert.ok(news.indexOf('FEBRUARY 2026') < news.indexOf('OCTOBER 2025'));
  assert.ok(news.includes('Optimizing Peripheral Nerve Injury Care'));
  assert.ok(news.includes('Read PDF'));
  assert.ok(news.indexOf('OCTOBER 2024') < news.indexOf('JANUARY 2024'));
  assert.ok(!news.includes('Access may require a UW Medicine login'));
});

test('Lab News lists the two Goldner awards and the 2024 AFSH Basic Science Grant', () => {
  const news = String(NewsPage());
  const goldnerUrl = 'https://www.assh.org/annualmeeting/general-information/awards';
  const afshUrl = 'https://afsh.assh.org/s/basic-science-grants';
  assert.equal(news.split(goldnerUrl).length - 1, 2);
  assert.ok(news.includes(afshUrl));
  assert.ok(news.includes('Induced pluripotent stem cells to model the neuromuscular junction'));
  assert.ok(news.includes('Electrodiagnostic Features of Hyperselective Neurectomy in the Spastic Upper Limb'));
  assert.ok(news.includes('Patterned Microvascular Patches to Promote Angiogenesis in Nerve Surgery'));
  assert.ok(news.includes('Samuel Rayner'));
  assert.ok(news.indexOf('OCTOBER 2024') < news.indexOf('2024 AFSH Basic Science Grant'));
});
