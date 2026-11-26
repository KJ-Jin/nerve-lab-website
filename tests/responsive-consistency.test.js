import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const css = readFileSync(new URL('../src/styles/photo-sizing.css', import.meta.url), 'utf8');
const main = readFileSync(new URL('../src/styles/main.css', import.meta.url), 'utf8');
const section = css.split('/* CONSISTENT TYPE SCALE · 2026')[1];

test('Stable type scale follows the full-width reference at every viewport', () => {
  assert.ok(main.trimEnd().endsWith("@import './photo-sizing.css';"));
  assert.ok(section);
  for (const token of [
    '--type-page: 36px;', '--type-section: 29px;', '--type-card: 32px;',
    '--type-body: 16px;', '--type-member: 23px;'
  ]) assert.ok(section.includes(token), token);
  assert.match(section, /\.project-content h3,[\s\S]*?#page-research-basic \.project-content h3\s*\{[^}]*font-size:\s*var\(--type-card\)/);
  assert.match(section, /\.project-content \.copy,[\s\S]*?#page-research-basic \.project-content \.copy\s*\{[^}]*font-size:\s*var\(--type-body\)/);
  assert.ok(!/font-size:\s*[^;]*(?:vw|vh)/.test(section));
});

test('Research photos keep balanced 4:3 crops and proper text space', () => {
  assert.ok(section.includes('grid-template-columns: minmax(0, min(43%, 470px)) minmax(0, 1fr);'));
  assert.ok(section.includes('grid-template-columns: minmax(0, 1fr) minmax(0, min(43%, 470px));'));
  assert.match(section, /\.visual-frame:has\(> img\)\s*\{[^}]*aspect-ratio:\s*4 \/ 3;[^}]*overflow:\s*hidden/);
  assert.match(section, /\.visual-frame > img\s*\{[^}]*width:\s*100%;[^}]*max-width:\s*100%;[^}]*height:\s*100%;[^}]*max-height:\s*none;[^}]*object-fit:\s*cover/);
  assert.match(section, /\.project-content\s*\{[^}]*max-width:\s*690px/);
  assert.match(section, /\.project\s*\{[^}]*padding-block:\s*24px 30px/);
});

test('Research cards stack on narrow screens and remain proportionate on desktop', () => {
  assert.match(section, /@media \(max-width: 900px\)[\s\S]*?\.project-visual\s*\{[^}]*max-width:\s*360px/);
  assert.match(section, /@media \(max-width: 640px\)[\s\S]*?\.project-visual\s*\{[^}]*max-width:\s*320px/);
  for (const viewport of [375, 430, 640, 700, 800, 900, 901, 1024, 1440, 1920]) {
    const gutter = viewport <= 640 ? 23 : viewport <= 900 ? 30 : 56;
    const content = Math.min(1148, viewport - 2 * gutter);
    const image = viewport <= 640
      ? Math.min(content, 320)
      : viewport <= 900 ? Math.min(content, 360) : Math.min(content * 0.43, 470);
    assert.ok(image <= content, 'photo must fit in its container at ' + viewport);
    if (viewport > 900) {
      assert.ok(content - image - 30 > 240, 'text must have room at ' + viewport);
    }
  }
});
