import { html } from '../lib/html.js';

/** Consistent line arrows, not font-dependent Unicode/emoji symbols. */
export function ArrowIcon(direction = 'up-right') {
  const path = direction === 'right'
    ? 'M5 12h14m-6-6 6 6-6 6'
    : 'M5 19 19 5M8 5h11v11';

  return html`<svg class="site-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="${path}"/></svg>`;
}
