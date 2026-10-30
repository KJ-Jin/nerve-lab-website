import test from 'node:test';
import assert from 'node:assert/strict';

import { ResearchAreaPage } from '../src/pages/research-area.js';
import clinical from '../src/content/research-clinical.js';
import basic from '../src/content/research-basic.js';

function render(content) {
  return String(ResearchAreaPage(content));
}

test('clinical collaborators are rendered after every study with working profile URLs', () => {
  const page = render(clinical);
  const collaborators = ['Chris Crowe', 'Jeff Friedrich', 'Ben Grannan'];
  const urls = [
    'https://www.uwmedicine.org/bios/christopher-crowe',
    'https://www.uwmedicine.org/bios/jeffrey-friedrich',
    'https://www.uwmedicine.org/bios/benjamin-grannan',
  ];

  assert.equal((page.match(/class="collaborator-card"/g) ?? []).length, 3);
  for (const name of collaborators) assert.ok(page.includes(name), `Missing ${name}`);
  for (const url of urls) assert.ok(page.includes(url), `Missing ${url}`);
  assert.ok(page.indexOf('class="shell collaborator-section"') > page.lastIndexOf('class="project"'));
  assert.ok(page.indexOf('Chris Crowe') > page.indexOf('Cutaneous Thermography for Diagnosis of Nerve Injury and Recovery'));
});

test('basic science collaborators remain at the end of the page', () => {
  const page = render(basic);
  for (const name of ['Mark Bothwell', 'David Mack', 'Alec Smith', 'Shao-En Ong', 'Samuel Rayner']) {
    assert.ok(page.includes(name), `Missing ${name}`);
  }
  assert.equal((page.match(/class="collaborator-card"/g) ?? []).length, 5);
  assert.ok(page.indexOf('class="shell collaborator-section"') > page.lastIndexOf('class="project"'));
});

test('requested clinical source links and study numbers stay removed', () => {
  const page = render(clinical);
  assert.ok(!page.includes('Research source ↗'));
  assert.ok(!page.includes('class="project-index"'));
  assert.ok(!render(basic).includes('class="project-index"'));
});
