import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const css = path => readFileSync(new URL('../src/styles/' + path, import.meta.url), 'utf8');

test('The site preserves its original black and near-black backgrounds', () => {
  assert.match(css('base.css'), /body\s*\{[^}]*background:\s*#000;/);
  assert.match(css('components/header.css'), /background:\s*#000;/);
  assert.match(css('components/nav.css'), /\.nav-bar\s*\{[^}]*background:\s*#000;/);
  assert.match(css('pages/home.css'), /\.home-hero\s*\{[^}]*background:\s*#030305;/);
  assert.match(css('components/footer.css'), /\.site-footer\s*\{[^}]*background:\s*#08070b;/);
});

test('Official UW Medicine colors are reserved for understated accents', () => {
  const tokens = css('tokens.css');
  const nav = css('components/nav.css');
  const footer = css('components/footer.css');
  assert.ok(tokens.includes('--uw-purple: #32006e'));
  assert.ok(tokens.includes('--uw-lavender: #ae95c4'));
  assert.ok(tokens.includes('--uw-gold: #ffc700'));
  assert.ok(tokens.includes('--accent: var(--uw-lavender)'));
  assert.ok(nav.includes('background: var(--uw-purple-soft)'));
  assert.ok(footer.includes('color: #ffdd66'));
  assert.ok(footer.includes('border-color: #ffc700'));
  assert.ok(!css('base.css').includes('background: var(--uw-charcoal)'));
});

test('Dark study, News gallery and Team card surfaces remain', () => {
  assert.ok(css('pages/news.css').includes('background: #08080c'));
  assert.ok(css('pages/team.css').includes('background: #0d0b12'));
  assert.ok(css('components/study-card.css').includes('background: #111017'));
});
