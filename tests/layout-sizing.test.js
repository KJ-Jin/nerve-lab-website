import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const css = file => readFileSync(new URL('../src/styles/' + file, import.meta.url), 'utf8');

test('Navigation, UW affiliation and donation text grow by 35%', () => {
  const nav = css('components/nav.css');
  const header = css('components/header.css');
  const footer = css('components/footer.css');
  assert.match(nav, /\.nav-link\s*\{[^}]*font-size:\s*14\.85px;/);
  assert.match(nav, /font:\s*700 14\.85px\/1\.4 Arial/);
  assert.ok(nav.includes('font-size: 16.2px;'));
  assert.match(header, /\.affiliation\s*\{[^}]*font-size:\s*13\.5px;/);
  assert.ok(header.includes('font-size: 10.8px;'));
  assert.ok(footer.includes('clamp(31.05px, 3.105vw, 41.85px)'));
  assert.ok(footer.includes('font-size: 17.55px;'));
  assert.ok(footer.includes('font: 700 16.2px/1.5 var(--sans)'));
  assert.ok(footer.includes('padding: 18.9px 27px;'));
});

test('Welcome headline is 25% smaller and intro uses publication title sizes', () => {
  const home = css('pages/home.css');
  const pubs = css('pages/publications.css');
  for (const declaration of ['clamp(24px, 2.8125vw, 42.75px)', 'clamp(24px, 3.4875vw, 36.75px)', 'clamp(21.75px, 5.625vw, 29.25px)']) {
    assert.ok(home.includes(declaration));
  }
  assert.match(home, /\.home-hero \.copy\s*\{[^}]*font-size:\s*25px;/);
  assert.match(home, /@media \(max-width: 640px\)[\s\S]*?\.home-hero \.copy\s*\{[^}]*font-size:\s*20px;/);
  assert.match(pubs, /\.pub-title\s*\{[^}]*font:\s*400 25px/);
  assert.match(pubs, /@media \(max-width: 640px\)[\s\S]*?\.pub-title\s*\{[^}]*font-size:\s*20px;/);
});

test('Page titles, main sections and hero text line up with the header logo at all breakpoints', () => {
  const tokens = css('tokens.css');
  const layout = css('layout.css');
  const header = css('components/header.css');
  const home = css('pages/home.css');
  const news = css('pages/news.css');
  assert.ok(tokens.includes('--content-width: 1148px'));
  assert.ok(tokens.includes('--gutter: 56px'));
  assert.match(tokens, /@media \(max-width: 900px\)[\s\S]*?--gutter: 30px/);
  assert.match(tokens, /@media \(max-width: 640px\)[\s\S]*?--gutter: 23px/);
  assert.match(layout, /\.shell\s*\{[^}]*max-width:\s*1260px;[^}]*padding-inline:\s*var\(--gutter\)/);
  assert.match(layout, /\.shell-wide\s*\{[^}]*width:\s*min\(var\(--content-width\), 100% - 2 \* var\(--gutter\)\)/);
  assert.match(header, /\.header-top\s*\{[^}]*max-width:\s*1260px;[^}]*padding:\s*26px var\(--gutter\) 24px/);
  assert.match(home, /\.home-copy\s*\{[^}]*max-width:\s*1260px;[^}]*padding:\s*78px var\(--gutter\) 85px/);
  assert.match(news, /\.news-gallery-section\s*\{[^}]*width:\s*min\(var\(--content-width\), calc\(100% - 2 \* var\(--gutter\)\)\)/);
  for (const viewport of [375, 640, 768, 900, 1024, 1280, 1440, 1920]) {
    const g = viewport <= 640 ? 23 : viewport <= 900 ? 30 : 56;
    const headerLeft = (viewport - Math.min(viewport, 1260)) / 2 + g;
    const shellWideLeft = (viewport - Math.min(1148, viewport - 2 * g)) / 2;
    assert.equal(shellWideLeft, headerLeft, 'horizontal alignment at width ' + viewport);
  }
});

test('Black backgrounds, muted gold and purple navigation line stay unchanged', () => {
  assert.match(css('base.css'), /body\s*\{[^}]*background:\s*#000;/);
  assert.ok(css('components/nav.css').includes('background: var(--uw-purple-soft)'));
  assert.ok(css('tokens.css').includes('--uw-gold-muted: color-mix('));
});
