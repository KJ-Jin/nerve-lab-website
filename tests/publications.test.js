import test from 'node:test';
import assert from 'node:assert/strict';

import publicationsContent from '../src/content/publications.js';
import { PublicationsPage, FormatAuthors } from '../src/pages/publications.js';

test('all 24 selected publications appear in reverse chronological order', () => {
  const { publications } = publicationsContent;
  assert.equal(publications.length, 24);
  assert.equal(publications[0].year, 'Accepted');
  assert.equal(publications[0].title, 'Sonographic appearance of peri-procedural popliteal fossa nerve injuries');
  const years = publications.slice(1).map(p => Number(p.year));
  assert.deepEqual(years, [...years].sort((a,b) => b-a));
  assert.equal(publications.filter(p => p.pmid).length, 22);
  assert.equal(new Set(publications.map(p => p.pmid).filter(Boolean)).size, 22);
});

test('all linked publications show a working destination, with no invented accepted PMID', () => {
  const { publications } = publicationsContent;
  const html = String(PublicationsPage());
  assert.equal((html.match(/class="publication"/g) || []).length, 23);
  assert.equal((html.match(/class="publication publication--accepted"/g) || []).length, 1);
  assert.equal((html.match(/View on PubMed/g) || []).length, 22);
  assert.ok(html.includes('https://doi.org/10.1080/17538068.2021.1994826'));
  assert.ok(html.includes('Accepted for publication'));
  assert.ok(!publications[0].pmid);
});

test('Katie is underlined for both Liu Y and Liu YK without affecting other author names', () => {
  const markup = String(PublicationsPage());
  assert.ok(markup.includes('<u class="pub-katie">Liu Y</u>, MD, PhD'));
  assert.ok(markup.includes('<u class="pub-katie">Liu YK</u>, MD, PhD'));
  assert.ok(!markup.includes('&lt;u'));
  assert.equal((markup.match(/<u class="pub-katie">/g) || []).length,
    publicationsContent.publications.filter(p => /\bLiu YK?\b/.test(p.authors)).length);
  assert.ok(!String(FormatAuthors('Liu YK and <script>')).includes('<script>'));
});
