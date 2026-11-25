import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const css = readFileSync(new URL('../src/styles/photo-sizing.css', import.meta.url), 'utf8');
const main = readFileSync(new URL('../src/styles/main.css', import.meta.url), 'utf8');

test('Responsive sizing stylesheet loads after all page rules', () => {
  assert.ok(main.trimEnd().endsWith("@import './photo-sizing.css';"));
  assert.match(css, /\.team-division-grid\s*\{[^}]*max-width:\s*930px/);
  assert.match(css, /\.members-grid\s*\{[^}]*max-width:\s*970px/);
  assert.match(css, /\.team-group-photo\s*\{[^}]*max-width:\s*950px/);
  assert.match(css, /\.project-visual\s*\{[^}]*max-width:\s*460px/);
  assert.match(css, /\.news-gallery-section\s*\{[^}]*max-width:\s*980px/);
  assert.match(css, /\.group-photo-figure img\s*\{[^}]*object-fit:\s*contain/);
  assert.match(css, /\.team-division-photo img\s*\{[^}]*object-fit:\s*contain/);
});

test('Research titles and descriptions remain separate in normal document flow', () => {
  assert.match(css, /\.project-content h3\s*\{[^}]*margin-bottom:\s*16px/);
  assert.match(css, /\.project-content \.copy\s*\{[^}]*position:\s*static;[^}]*clear:\s*both;[^}]*margin-top:\s*16px/);
  assert.match(css, /\.project-content h3,[\s\S]*?overflow-wrap:\s*normal;[^}]*word-break:\s*normal;[^}]*hyphens:\s*none;[^}]*line-height:\s*1\.24/);
  assert.match(css, /\.project-content,\s*\.project-visual,[\s\S]*?min-width:\s*0;/);
  assert.ok(css.includes('white-space: normal;'));
});

test('Desktop photo limits have mobile single-column counterparts', () => {
  assert.match(css, /@media \(max-width: 900px\)\s*\{[\s\S]*?\.project:not\(\.project--text-only\)\s*\{\s*grid-template-columns:\s*minmax\(0, 1fr\)/);
  assert.match(css, /@media \(max-width: 640px\)\s*\{[\s\S]*?\.pi-block\s*\{\s*grid-template-columns:\s*minmax\(0, 1fr\)/);
  assert.match(css, /\.team-division-grid\s*\{[^}]*width:\s*100%;[^}]*max-width:\s*930px/);
});

test('Whole words remain intact and the research overview switches before its heading gets squeezed', () => {
  const research = readFileSync(new URL('../src/styles/pages/research.css', import.meta.url), 'utf8');
  assert.match(css, /body, h1, h2, h3, h4, h5, h6, p, li, span, a\s*\{[^}]*overflow-wrap:\s*normal;[^}]*word-break:\s*normal;[^}]*hyphens:\s*none;/);
  assert.match(research, /\.research-overview\s*\{[^}]*grid-template-columns:\s*minmax\(300px, 0\.9fr\) minmax\(0, 1\.9fr\)/);
  assert.match(research, /\.research-overview h2\s*\{[^}]*font:\s*400 clamp\(26px, 2\.35vw, 30px\)/);
  assert.match(research, /@media \(max-width: 990px\)\s*\{\s*\.research-overview\s*\{[^}]*grid-template-columns:\s*minmax\(0, 1fr\)/);
  assert.ok(!css.includes('hyphens: auto'));
});
