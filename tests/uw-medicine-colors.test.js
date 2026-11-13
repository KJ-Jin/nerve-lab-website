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
  assert.ok(tokens.includes('--uw-gold-muted: color-mix('));
  assert.ok(footer.includes('color: var(--uw-gold-muted)'));
  assert.ok(footer.includes('border-color: var(--uw-gold-muted)'));
  assert.ok(!css('base.css').includes('background: var(--uw-charcoal)'));
});

test('Dark study, News gallery and Team card surfaces remain', () => {
  assert.ok(css('pages/news.css').includes('background: #08080c'));
  assert.ok(css('pages/team.css').includes('background: #0d0b12'));
  assert.ok(css('components/study-card.css').includes('background: #111017'));
});

test('Muted gold is limited to small details; purple navigation line and black surfaces remain', () => {
  const nav = css('components/nav.css');
  assert.ok(nav.includes('border-block: 1px solid #5d348b'));
  assert.ok(nav.includes('background: var(--uw-purple-soft)'));
  assert.ok(css('pages/home.css').includes('text-decoration-color: var(--uw-gold-muted)'));
  assert.ok(css('pages/research.css').includes('color: var(--uw-gold-muted)'));
  assert.ok(css('pages/news.css').includes('border-color: var(--uw-gold-muted)'));
  assert.ok(css('typography.css').includes('border-bottom: 1px solid var(--uw-gold-muted)'));
  assert.ok(css('pages/contact.css').includes('border-bottom: 1px solid var(--uw-gold-muted)'));
  assert.ok(css('components/footer.css').includes('background: #08070b'));
  assert.ok(css('base.css').includes('background: #000'));
});
