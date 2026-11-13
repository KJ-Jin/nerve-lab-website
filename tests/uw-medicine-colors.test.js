import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const officialColors = new Set([
  '#32006e', '#5d348b', '#8663a8', '#ae95c4', '#d6c8e1',
  '#ffc700', '#ffdd66', '#333d47', '#566069',
  '#d1d4d7', '#f5f5f5',
]);

const cssPaths = [
  'base.css', 'layout.css', 'tokens.css', 'typography.css',
  'components/header.css', 'components/nav.css', 'components/footer.css',
  'components/page-banner.css', 'components/collaborators.css',
  'components/member-card.css', 'components/study-card.css',
  'pages/home.css', 'pages/research.css', 'pages/team.css',
  'pages/news.css', 'pages/publications.css', 'pages/contact.css',
];

function css(path) {
  return readFileSync(new URL('../src/styles/' + path, import.meta.url), 'utf8');
}

function luminance(hex) {
  const values = [1, 3, 5].map(index => parseInt(hex.slice(index, index + 2), 16) / 255);
  const linear = values.map(x => x <= 0.04045 ? x / 12.92 : ((x + 0.055) / 1.055) ** 2.4);
  return 0.2126 * linear[0] + 0.7152 * linear[1] + 0.0722 * linear[2];
}
function contrast(a, b) {
  const x = luminance(a), y = luminance(b);
  return (Math.max(x, y) + 0.05) / (Math.min(x, y) + 0.05);
}

test('visible CSS hex colors use the official UW Medicine primary and secondary palette', () => {
  for (const path of cssPaths) {
    const source = css(path);
    for (const found of source.matchAll(/#[0-9a-fA-F]{3,8}\b/g)) {
      assert.ok(officialColors.has(found[0].toLowerCase()), `${path}: off-palette color ${found[0]}`);
    }
  }
});

test('site surfaces and navigation use UW Medicine purple, charcoal and gold', () => {
  const tokens = css('tokens.css');
  const base = css('base.css');
  const nav = css('components/nav.css');
  const footer = css('components/footer.css');
  assert.ok(tokens.includes('--uw-purple: #32006e'));
  assert.ok(tokens.includes('--uw-gold: #ffc700'));
  assert.ok(tokens.includes('--uw-charcoal: #333d47'));
  assert.ok(tokens.includes('--accent: var(--uw-gold)'));
  assert.ok(base.includes('background: var(--uw-charcoal)'));
  assert.ok(nav.includes('background: var(--uw-purple)'));
  assert.ok(footer.includes('background: #32006e'));
});

test('core text and link color combinations meet WCAG AA normal-text contrast', () => {
  for (const background of ['#333d47', '#32006e']) {
    for (const foreground of ['#f5f5f5', '#d1d4d7', '#ffc700']) {
      assert.ok(contrast(background, foreground) >= 4.5,
        `${foreground} on ${background} has insufficient contrast`);
    }
  }
});
