import test from 'node:test';
import assert from 'node:assert/strict';

import publicationsContent from '../src/content/publications.js';
import { PublicationsPage } from '../src/pages/publications.js';

test('featured publications are the four selected papers in descending publication year', () => {
  const { publications } = publicationsContent;
  assert.deepEqual(publications.map((paper) => paper.year), ['2023', '2012', '2008', '2007']);
  assert.deepEqual(publications.map((paper) => new URL(paper.url).pathname), [
    '/36965013/', '/22961814/', '/18804034/', '/17609251/',
  ]);
  for (const paper of publications) {
    assert.ok(paper.authors.includes('Yusha Liu, MD, PhD'));
    assert.ok(paper.title.length > 25);
    assert.ok(paper.journal);
  }
});

test('publication cards show authors, title, journal, then PubMed link', () => {
  const markup = String(PublicationsPage());
  assert.equal((markup.match(/class="publication"/g) ?? []).length, 4);
  assert.equal((markup.match(/View on PubMed/g) ?? []).length, 4);
  assert.ok(markup.indexOf('Jaclyn T. Mauch') < markup.indexOf('Targeted muscle reinnervation'));
  assert.ok(markup.indexOf('Targeted muscle reinnervation') < markup.indexOf('PM&amp;R, 15(11)'));
  assert.ok(markup.indexOf('PM&amp;R, 15(11)') < markup.indexOf('View on PubMed'));
});
