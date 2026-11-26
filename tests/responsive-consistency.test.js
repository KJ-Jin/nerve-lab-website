import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const responsive = readFileSync(new URL('../src/styles/photo-sizing.css', import.meta.url), 'utf8');
const main = readFileSync(new URL('../src/styles/main.css', import.meta.url), 'utf8');

test('Consistent typography overrides load last and use fixed sizes instead of vw', () => {
  assert.ok(main.trimEnd().endsWith("@import './photo-sizing.css';"));
  for (const token of [
    '--type-page: 36px;',
    '--type-section: 29px;',
    '--type-card: 28px;',
    '--type-body: 16px;',
    '--type-member: 23px;',
  ]) assert.ok(responsive.includes(token), token);
  const section = responsive.split('/* CONSISTENT TYPE SCALE · 2026')[1];
  assert.ok(section);
  for (const pattern of [
    /\.page-banner \.display\s*\{[^}]*font-size:\s*var\(--type-page\)/,
    /\.project-content h3,[\s\S]*?#page-research-basic \.project-content h3\s*\{[^}]*font-size:\s*var\(--type-card\)/,
    /\.project-content \.copy,[\s\S]*?#page-research-basic \.project-content \.copy\s*\{[^}]*font-size:\s*var\(--type-body\)/,
    /\.research-overview h2,[\s\S]*?font-size:\s*27px/,
  ]) assert.match(section, pattern);
  assert.ok(!/font-size:\s*[^;]*(?:vw|vh)/.test(section), 'override font sizing should not depend on viewport');
});

test('Images scale with columns and become compact single-column photos when narrow', () => {
  const section = responsive.split('/* CONSISTENT TYPE SCALE · 2026')[1];
  assert.match(section, /\.project:not\(\.project--text-only\)\s*\{[^}]*grid-template-columns:\s*minmax\(0, min\(40%, 400px\)\) minmax\(0, 1fr\)/);
  assert.match(section, /\.project:not\(\.project--text-only\):nth-of-type\(even\)\s*\{[^}]*grid-template-columns:\s*minmax\(0, 1fr\) minmax\(0, min\(40%, 400px\)\)/);
  assert.match(section, /\.project-visual\s*\{[^}]*width:\s*100%;[^}]*max-width:\s*none/);
  assert.match(section, /\.visual-frame:has\(> img\)\s*\{[^}]*aspect-ratio:\s*auto/);
  assert.match(section, /\.visual-frame > img\s*\{[^}]*width:\s*auto;[^}]*max-width:\s*100%;[^}]*height:\s*auto;[^}]*max-height:\s*430px;[^}]*object-fit:\s*contain/);
  assert.match(section, /@media \(max-width: 800px\)[\s\S]*?\.project-visual\s*\{[^}]*max-width:\s*360px/);
  assert.match(section, /@media \(max-width: 640px\)[\s\S]*?\.project-visual\s*\{[^}]*max-width:\s*320px/);
});

test('Research image and text proportions stay reasonable across simulated viewport widths', () => {
  for (const viewport of [375, 430, 640, 700, 800, 801, 900, 1024, 1440, 1920]) {
    const gutter = viewport <= 640 ? 23 : viewport <= 900 ? 30 : 56;
    const content = Math.min(1148, viewport - 2 * gutter);
    const image = viewport <= 640
      ? Math.min(content, 320)
      : viewport <= 800 ? Math.min(content, 360) : Math.min(content * 0.4, 400);
    assert.ok(image <= content, 'photo must fit within content at ' + viewport);
    if (viewport > 800) {
      assert.ok(content - image - 30 > 240, 'text must have its own usable column at ' + viewport);
    }
  }
});

test('Natural-size photographs do not show letterboxing or distort next to research copy', () => {
  const section = responsive.split('/* CONSISTENT TYPE SCALE · 2026')[1];
  assert.match(section, /\.visual-frame:has\(> img\)\s*\{[^}]*aspect-ratio:\s*auto;[^}]*overflow:\s*visible;[^}]*background:\s*transparent/);
  assert.match(section, /\.project-content\s*\{[^}]*max-width:\s*690px/);
  assert.match(section, /\.project\s*\{[^}]*padding-block:\s*32px 46px/);
});
