import test from 'node:test';
import assert from 'node:assert/strict';

import { NewsPage } from '../src/pages/news.js';
import { PublicationsPage } from '../src/pages/publications.js';
import { TeamPage } from '../src/pages/team.js';
import { ResearchAreaPage } from '../src/pages/research-area.js';
import basic from '../src/content/research-basic.js';
import translational from '../src/content/research-translational.js';

test('News, Publications and Team use the requested page headings', () => {
  const news = String(NewsPage());
  const publications = String(PublicationsPage());
  const team = String(TeamPage());
  assert.match(news, /<h1 class="display">News<\/h1>/);
  assert.ok(!news.includes('FROM THE LAB'));
  assert.ok(!news.includes('Selected updates and milestones from the Liu Lab'));

  assert.match(publications, /<h1 class="display">Publications<\/h1>/);
  assert.ok(!publications.includes('SELECTED WORK'));

  assert.match(team, /<h1 class="display">The Team<\/h1>/);
  assert.ok(!team.includes('THE LAB'));
  assert.ok(team.includes('Basic Science Team'));
  assert.ok(team.includes('Our Team'));
  assert.ok(!team.includes('TOGETHER IN RESEARCH'));
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

test('News photo carousel stays hidden until real event photos with captions exist', async () => {
  const { NewsGallery } = await import('../src/components/news-gallery.js');
  assert.equal(String(NewsGallery({photos: []})), '');
  assert.equal(String(NewsGallery({photos: [{src:'images/news/events/test.jpg'}]})), '');
  const gallery = String(NewsGallery({intervalMs: 6000, photos: [
    {src:'images/news/events/a.jpg', alt:'Lab group', caption:'Nerve Lab annual gathering', date:'October 2026'},
    {src:'images/news/events/b.jpg', alt:'Conference award', caption:'Award ceremony'},
  ]}));
  assert.ok(gallery.includes('Recent Happenings'));
  assert.ok(gallery.includes('data-news-gallery'));
  assert.equal((gallery.match(/data-news-gallery-slide/g) || []).length, 2);
  assert.equal((gallery.match(/data-news-gallery-dot=/g) || []).length, 2);
  assert.ok(gallery.includes('Previous photo'));
  assert.ok(gallery.includes('Next photo'));
  assert.ok(gallery.includes('Pause automatic photo rotation'));
  assert.ok(gallery.includes('Nerve Lab annual gathering'));
  assert.ok(gallery.includes('October 2026'));
  const one = String(NewsGallery({photos: [{src:'images/news/events/a.jpg',caption:'A moment'}]}));
  assert.ok(!one.includes('data-news-gallery-next'));
  const liveNews = String(NewsPage());
  assert.ok(liveNews.includes('data-news-gallery'));
  for (const [fileName, caption] of [
    ['cats-eating-together.webp', 'three cat eat food'],
    ['cat-on-tree.webp', 'cat on tree'],
    ['close-up-cat.webp', 'close up cat'],
  ]) {
    assert.ok(liveNews.includes(fileName), `Missing ${fileName}`);
    assert.ok(liveNews.includes(caption), `Missing caption: ${caption}`);
  }
  assert.equal((liveNews.match(/data-news-gallery-slide/g) || []).length, 3);
  assert.equal((liveNews.match(/data-news-gallery-dot=/g) || []).length, 3);
});

test('News page has its own reduced banner spacing without changing other page banners', async () => {
  const { readFileSync } = await import('node:fs');
  const newsCSS = readFileSync(new URL('../src/styles/pages/news.css', import.meta.url), 'utf8');
  assert.match(newsCSS, /#page-news \.page-banner\s*\{[^}]*padding-top:\s*43px;/);
  assert.match(newsCSS, /#page-news \.page-banner\s*\{[^}]*padding-bottom:\s*36px;/);
  assert.match(newsCSS, /#page-news \.page-banner \.eyebrow:empty/);
});
