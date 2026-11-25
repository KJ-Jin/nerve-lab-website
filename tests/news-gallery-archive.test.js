import test from 'node:test';
import assert from 'node:assert/strict';
import { getRecentPhotos, getArchivedPhotos, MAX_RECENT_PHOTOS } from '../src/lib/news-photos.js';
import { NewsGallery } from '../src/components/news-gallery.js';
import { GalleryArchivePage } from '../src/pages/gallery-archive.js';
import { NewsPage } from '../src/pages/news.js';
import newsContent from '../src/content/news.js';
import { ContactPage } from '../src/pages/contact.js';

const photos = Array.from({ length: 12 }, (_, index) => ({
  src: `images/news/events/photo-${index + 1}.webp`,
  alt: `Photo ${index + 1}`,
  caption: `Event ${index + 1} caption`,
  date: '2026',
}));

test('only nine newest captioned photos appear in carousel, older photos move to archive', () => {
  const gallery = { photos };
  assert.equal(MAX_RECENT_PHOTOS, 9);
  assert.equal(getRecentPhotos(gallery).length, 9);
  assert.equal(getArchivedPhotos(gallery).length, 3);
  assert.equal(getRecentPhotos(gallery)[0].caption, 'Event 1 caption');
  assert.equal(getRecentPhotos(gallery)[8].caption, 'Event 9 caption');
  assert.equal(getArchivedPhotos(gallery)[0].caption, 'Event 10 caption');
  const recent = String(NewsGallery(gallery));
  const archive = String(GalleryArchivePage(gallery));
  assert.equal((recent.match(/data-news-gallery-slide/g) ?? []).length, 9);
  assert.equal((recent.match(/data-news-gallery-dot=/g) ?? []).length, 9);
  assert.equal((recent.match(/data-news-gallery-caption/g) ?? []).length, 9);
  assert.equal((recent.match(/data-position="center"/g) ?? []).length, 1);
  assert.equal((recent.match(/data-position="previous"/g) ?? []).length, 1);
  assert.equal((recent.match(/data-position="next"/g) ?? []).length, 1);
  assert.equal((recent.match(/data-position="hidden"/g) ?? []).length, 6);
  assert.ok(recent.includes('Event 9 caption'));
  assert.ok(!recent.includes('Event 10 caption'));
  assert.equal((archive.match(/class="gallery-archive-card"/g) ?? []).length, 3);
  assert.ok(archive.includes('photo-10.webp'));
  assert.ok(!archive.includes('Event 10 caption'));
  assert.ok(!archive.includes('Event 9 caption'));
  assert.ok(!archive.includes('<figcaption>'));
  assert.ok(!archive.includes('Photos and memories from earlier'));

  assert.ok(archive.includes('Back to News'));
});

test('Archive shows explicitly archived photos before ten recent photos, without placeholders', () => {
  const archive = String(GalleryArchivePage());
  assert.ok(archive.includes('Gallery Archive'));
  assert.ok(!archive.includes('Older photos will appear here'));
  assert.ok(!archive.includes('Photos and memories from earlier'));
  assert.ok(!archive.includes('class="gallery-archive-intro"'));
  assert.equal((archive.match(/class="gallery-archive-card"/g) ?? []).length, 1);
  assert.ok(archive.includes('assh-2026-panel.jpg'));
  assert.ok(String(NewsPage()).includes('href="#gallery-archive"'));
});

test('The News navigation dropdown exists and stays distinct from the Research menu', async () => {
  const { readFileSync } = await import('node:fs');
  const html = readFileSync(new URL('../index.html', import.meta.url), 'utf-8');
  assert.ok(html.includes('id="news-menu"'));
  assert.ok(html.includes('id="news-dropdown-toggle"'));
  assert.ok(html.includes('id="news-submenu"'));
  assert.ok(html.includes('href="#gallery-archive" data-page="gallery-archive"'));
  assert.ok(html.includes('id="research-dropdown-toggle"'));
  const { readFileSync: read } = await import('node:fs');
  const main = read(new URL('../src/main.js', import.meta.url), 'utf-8');
  assert.ok(main.includes("'gallery-archive': GalleryArchivePage"));
  assert.ok(main.includes("news: NewsPage"));
});

test('News is listed in the global footer, and archive teaser has no descriptive copy', async () => {
  const { readFileSync } = await import('node:fs');
  const index = readFileSync(new URL('../index.html', import.meta.url), 'utf8');
  const footer = index.slice(index.indexOf('<footer class="site-footer">'));
  assert.ok(footer.includes('<a href="#news">News</a>'));
  assert.ok(footer.indexOf('<a href="#publications">Publications</a>') < footer.indexOf('<a href="#news">News</a>'));
  const news = String(NewsPage());
  assert.ok(news.includes('Explore Gallery Archive'));
  assert.ok(!news.includes('Explore earlier lab photos and the stories behind them.'));
});

test('Contact page links University of Washington Nerve Lab to the official site homepage', () => {
  const contact = String(ContactPage());
  assert.ok(contact.includes('<a href="https://kj-jin.github.io/nerve-lab-website/"'));
  assert.ok(contact.includes('University of Washington Nerve Lab</a>'));
});

test('ASSH 2026 panel photo moves to Archive with unchanged caption; podium photo stays in carousel', () => {
  const panel = newsContent.gallery.photos.find(p => p.src === 'images/news/events/assh-2026-panel.jpg');
  const podium = newsContent.gallery.photos.find(p => p.src === 'images/news/events/assh-2026-presentation.jpg');
  assert.ok(panel && podium);
  assert.equal(panel.archiveOnly, true);
  assert.ok(getArchivedPhotos(newsContent.gallery).includes(panel));
  assert.ok(getRecentPhotos(newsContent.gallery).includes(podium));
  assert.ok(!getRecentPhotos(newsContent.gallery).includes(panel));
  assert.equal(getRecentPhotos(newsContent.gallery).length, 3);
  const carousel = String(NewsGallery(newsContent.gallery));
  const archive = String(GalleryArchivePage(newsContent.gallery));
  assert.ok(carousel.includes('assh-2026-presentation.jpg'));
  assert.ok(!carousel.includes('assh-2026-panel.jpg'));
  assert.ok(archive.includes('assh-2026-panel.jpg'));
  assert.ok(archive.includes(panel.caption));
  assert.ok(archive.includes(panel.date));
  assert.equal((archive.match(/<figcaption>/g) || []).length, 1);
});

test('Photo dates are 25% larger in News and Archive', async () => {
  const { readFileSync } = await import('node:fs');
  const css = readFileSync(new URL('../src/styles/pages/news.css', import.meta.url), 'utf8');
  assert.match(css, /\.news-gallery-date\s*\{[^}]*font:\s*700 12\.5px\/1\.5/);
});
