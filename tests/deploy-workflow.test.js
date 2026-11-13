import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

test('The main branch deploys directly to the live GitHub Pages site', () => {
  const workflow = readFileSync(new URL('../.github/workflows/deploy-pages.yml', import.meta.url), 'utf8');
  assert.match(workflow, /branches: \[main\]/);
  assert.ok(workflow.includes('npm test'));
  assert.ok(workflow.includes('npm run build'));
  assert.ok(workflow.includes('path: dist'));
  assert.ok(workflow.includes('actions/deploy-pages@'));
  assert.ok(!workflow.includes('published-src'));
  assert.ok(!workflow.includes('preview-src'));
});
