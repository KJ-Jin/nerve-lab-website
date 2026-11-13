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
  const collaborators = ['Chris Crowe', 'Jeff Friedrich', 'Ben Grannan', 'Chris Dy', 'David Brogan'];
  const urls = [
    'https://www.uwmedicine.org/bios/christopher-crowe',
    'https://www.uwmedicine.org/bios/jeffrey-friedrich',
    'https://www.uwmedicine.org/bios/benjamin-grannan',
    'https://nerveresearch.wustl.edu/',
  ];

  assert.equal((page.match(/class="collaborator-card"/g) ?? []).length, 5);
  assert.equal((page.match(/University of Washington/g) ?? []).length, 3);
  assert.equal((page.match(/Washington University in St. Louis/g) ?? []).length, 2);
  for (const name of collaborators) assert.ok(page.includes(name), `Missing ${name}`);
  for (const url of urls) assert.ok(page.includes(url), `Missing ${url}`);
  assert.ok(page.indexOf('class="shell collaborator-section"') > page.lastIndexOf('class="project"'));
  assert.ok(page.indexOf('Chris Crowe') > page.indexOf('Cutaneous Thermography for Diagnosis of Nerve Injury and Recovery'));
});

test('basic science collaborators remain at the end of the page', () => {
  const page = render(basic);
  for (const name of ['Mark Bothwell', 'David Mack', 'Alec Smith', 'Shao-En Ong', 'Samuel Rayner', 'David Brogan']) {
    assert.ok(page.includes(name), `Missing ${name}`);
  }
  assert.equal((page.match(/class="collaborator-card"/g) ?? []).length, 6);
  assert.equal((page.match(/University of Washington/g) || []).length, 5);
  assert.ok(page.includes('Washington University in St. Louis'));
  assert.ok(page.includes('https://nerveresearch.wustl.edu/'));
  assert.ok(page.includes('https://ndrg.uw.edu/'));
  assert.ok(page.includes('https://www.quantbiology.org/'));
  assert.ok(page.includes('https://sites.uw.edu/raynerlab/'));
  assert.ok(page.indexOf('class="shell collaborator-section"') > page.lastIndexOf('class="project"'));
});

test('requested clinical source links and study numbers stay removed', () => {
  const page = render(clinical);
  assert.ok(!page.includes('Research source ↗'));
  assert.ok(!page.includes('class="project-index"'));
  assert.ok(!render(basic).includes('class="project-index"'));
});

test('Clinical Studies separates active clinical trials from other studies without duplication', () => {
  const page = render(clinical);
  assert.ok(page.includes('Clinical Studies'));
  assert.ok(page.includes('Active Clinical Trials'));
  assert.equal(clinical.studies.length, 5);
  assert.equal(clinical.activeTrials.length, 3);
  const titles = ['Neuraptive Phase III', 'Neuraptive Expanded Access', 'FASTR-TEN'];
  for (const title of titles) {
    assert.ok(!clinical.studies.some(s => s.title === title), `Trial should no longer be in upper studies: ${title}`);
    assert.equal(clinical.activeTrials.filter(s => s.title === title).length, 1);
  }
  assert.ok(page.indexOf('Cutaneous Thermography for Diagnosis') < page.indexOf('active-trials-heading'));
  assert.ok(page.indexOf('active-trials-heading') < page.indexOf('Neuraptive Phase III'));
  assert.ok(page.indexOf('FASTR-TEN') < page.indexOf('class="shell collaborator-section"'));
  assert.ok(page.includes('class="active-trials-divider"'));
  assert.equal((page.match(/class="project"/g) || []).length, 8);
});

test('Each active trial links its title and description to the supplied ClinicalTrials.gov record', () => {
  const urls = new Map([
    ['Neuraptive Phase III', 'https://clinicaltrials.gov/study/NCT06616025'],
    ['Neuraptive Expanded Access', 'https://clinicaltrials.gov/study/NCT05565846'],
    ['FASTR-TEN', 'https://clinicaltrials.gov/study/NCT06867185'],
  ]);
  const page = render(clinical);
  for (const [title, url] of urls) {
    const study = clinical.activeTrials.find(s => s.title === title);
    assert.ok(study);
    assert.ok(study.trialUrl.startsWith(url));
    assert.equal((page.match(new RegExp(url.replaceAll('/', '\\/'), 'g')) || []).length, 2);
  }
  assert.equal((page.match(/View trial details on ClinicalTrials.gov/g) || []).length, 3);
});

test('Research overview and navigation show Basic Science first, Clinical Studies second, no Translational', async () => {
  const { ResearchPage } = await import('../src/pages/research.js');
  const { readFileSync } = await import('node:fs');
  const overview = String(ResearchPage());
  const nav = readFileSync(new URL('../index.html', import.meta.url), 'utf8');
  const main = readFileSync(new URL('../src/main.js', import.meta.url), 'utf8');
  assert.ok(nav.indexOf('>Basic Science</a>') < nav.indexOf('>Clinical Studies</a>'));
  assert.ok(!nav.includes('data-page="research-translational"'));
  assert.ok(overview.indexOf('Basic Science') < overview.indexOf('Clinical Studies'));
  assert.ok(!overview.includes('Translational'));
  assert.ok(!main.includes("'research-translational':"));
});
