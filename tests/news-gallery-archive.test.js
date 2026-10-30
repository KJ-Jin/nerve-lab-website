import test from 'node:test';
import assert from 'node:assert/strict';
import { getRecentPhotos, getArchivedPhotos, MAX_RECENT_PHOTOS } from '../src/lib/news-photos.js';
import { NewsGallery } from '../src/components/news-gallery.js';
import { GalleryArchivePage } from '../src/pages/gallery-archive.js';
import { NewsPage } from '../src/pages/news.js';

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
  assert.ok(recent.includes('Event 9 caption'));
  assert.ok(!recent.includes('Event 10 caption'));
  assert.equal((archive.match(/class="gallery-archive-card"/g) ?? []).length, 3);
  assert.ok(archive.includes('Event 10 caption'));
  assert.ok(!archive.includes('Event 9 caption'));
  assert.ok(archive.includes('Back to News'));
});

test('Archive exists before there are ten photos, with no placeholders or fake images', () => {
  const archive = String(GalleryArchivePage());
  assert.ok(archive.includes('Gallery Archive'));
  assert.ok(archive.includes('Older photos will appear here'));
  assert.equal((archive.match(/class="gallery-archive-card"/g) ?? []).length, 0);
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
