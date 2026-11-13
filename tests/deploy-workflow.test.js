import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

test('Publishing builds main as preview and published as live', () => {
  const workflow = readFileSync(new URL('../.github/workflows/deploy-pages.yml', import.meta.url), 'utf8');
  assert.match(workflow, /branches: \[main, published\]/);
  assert.match(workflow, /ref: main\s+path: preview-src/);
  assert.match(workflow, /ref: published\s+path: published-src/);
  assert.ok(workflow.includes('cp -a published-src/dist/. site/'));
  assert.ok(workflow.includes('cp -a preview-src/dist/. site/preview/'));
  assert.ok(workflow.includes('noindex, nofollow'));
  assert.ok(workflow.includes('upload-pages-artifact'));
});
