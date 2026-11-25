import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const css = file => readFileSync(new URL('../src/styles/' + file, import.meta.url), 'utf8');

test('Navigation and UW affiliation remain 35% larger; donation copy is eased back by 10%', () => {
  const nav = css('components/nav.css');
  const header = css('components/header.css');
  const footer = css('components/footer.css');
  assert.match(nav, /\.nav-link\s*\{[^}]*font-size:\s*14\.85px;/);
  assert.match(nav, /font:\s*700 14\.85px\/1\.4 Arial/);
  assert.ok(nav.includes('font-size: 16.2px;'));
  assert.match(header, /\.affiliation\s*\{[^}]*font-size:\s*13\.5px;/);
  assert.ok(header.includes('font-size: 10.8px;'));
  assert.ok(footer.includes('clamp(27.945px, 2.7945vw, 37.665px)'));
  assert.ok(footer.includes('font-size: 15.795px;'));
  assert.ok(footer.includes('font: 700 14.58px/1.5 var(--sans)'));
  assert.ok(footer.includes('padding: 18.9px 27px;'));
});

test('Welcome headline stays 25% smaller and intro is reduced another 10%', () => {
  const home = css('pages/home.css');
  const pubs = css('pages/publications.css');
  for (const declaration of ['clamp(24px, 2.8125vw, 42.75px)', 'clamp(24px, 3.4875vw, 36.75px)', 'clamp(21.75px, 5.625vw, 29.25px)']) {
    assert.ok(home.includes(declaration));
  }
  assert.match(home, /\.home-hero \.copy\s*\{[^}]*font-size:\s*20\.25px;/);
  assert.match(home, /@media \(max-width: 640px\)[\s\S]*?\.home-hero \.copy\s*\{[^}]*font-size:\s*16\.2px;/);
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

test('Basic Science project titles shrink by 20% and descriptions grow by 20% only on that page', () => {
  const cssText = css('pages/research.css');
  const cardCSS = css('components/study-card.css');
  assert.match(cardCSS, /\.project-content h3\s*\{[^}]*clamp\(30px, 3vw, 42px\)/);
  assert.match(cardCSS, /\.project-content \.copy\s*\{[^}]*font-size:\s*14px;/);
  assert.match(cssText, /#page-research-basic \.project-content h3\s*\{[^}]*clamp\(24px, 2\.4vw, 33\.6px\)/);
  assert.match(cssText, /#page-research-basic \.project-content \.copy\s*\{[^}]*font-size:\s*clamp\(14\.8px, 1\.15vw, 16\.8px\);/);
  assert.match(cssText, /@media \(max-width: 640px\)[\s\S]*?#page-research-basic \.project-content h3\s*\{[^}]*font-size:\s*clamp\(23px, 5\.6vw, 28px\);/);
});

test('Active Clinical Trials links match 14px descriptions without changing other study links', () => {
  const cardCSS = css('components/study-card.css');
  assert.match(cardCSS, /\.project-content \.copy\s*\{[^}]*font-size:\s*14px;/);
  assert.match(cardCSS, /#page-research-clinical \.active-trials-list \.study-trial-link\s*\{[^}]*font-size:\s*14px;/);
  assert.ok(!cardCSS.includes('#page-research-basic .study-trial-link'));
});


test('Page headings match the former Recent Happenings scale, while section headings are smaller', () => {
  const titles = css('components/page-banner.css');
  const typography = css('typography.css');
  const news = css('pages/news.css');
  assert.match(titles, /\.page-banner \.display\s*\{[^}]*font-size:\s*clamp\(29px, 3\.4vw, 43px\)/);
  assert.ok(!titles.includes('font-size: 53px'));
  assert.match(typography, /\.section-title\s*\{[^}]*clamp\(25px, 2\.7vw, 36px\)/);
  assert.match(news, /\.news-gallery-heading \.section-title\s*\{[^}]*font-size:\s*clamp\(25px, 2\.7vw, 36px\)/);
});


test('Shared compact banners and stable photo proportions work at desktop and mobile widths', () => {
  const banner = css('components/page-banner.css');
  const team = css('pages/team.css');
  const studies = css('components/study-card.css');
  const nav = css('components/nav.css');
  assert.ok(banner.includes('padding-block: clamp(34px, 4vw, 54px) clamp(28px, 3.4vw, 46px);'));
  assert.ok(banner.includes('.page-banner .eyebrow:empty {\n  display: none;'));
  assert.ok(team.includes('aspect-ratio: 16 / 9;'));
  assert.ok(!team.includes('.team-division-photo {\n    aspect-ratio: 1920 / 819;'));
  assert.ok(studies.includes('aspect-ratio: 4 / 3;'));
  assert.ok(nav.includes('@media (min-width: 641px) and (max-width: 1050px)'));
});
