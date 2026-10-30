import { html, paragraphs } from '../lib/html.js';

/** Top-of-page banner: small eyebrow label, page title, optional intro text. */
export function PageBanner({ eyebrow = '', title, intro = '' }) {
  return html`
    <section class="page-banner shell-wide">
      <div class="eyebrow">${eyebrow}</div>
      <h1 class="display">${title}</h1>
      ${intro && html`<p class="copy multiline">${paragraphs(intro)}</p>`}
    </section>
    <div class="thin-rule"></div>
  `;
}
