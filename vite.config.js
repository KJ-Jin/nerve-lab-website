import { cpSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';

// Images live in images/, next to index.html, and content files refer to them as 'images/…'.
// Those paths work under `vite`, `vite preview` and any plain static server (Live Server,
// GitHub Pages, …). The build copies the folder into dist/ unchanged so they keep working there.
function copyImages() {
  return {
    name: 'copy-images',
    apply: 'build',
    writeBundle({ dir }) {
      cpSync(fileURLToPath(new URL('images', import.meta.url)), join(dir, 'images'), { recursive: true });
    },
  };
}

export default defineConfig({
  // Relative asset paths, so the built site works from any folder on any host.
  base: './',
  plugins: [copyImages()],
});
