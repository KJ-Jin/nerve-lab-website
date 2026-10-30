/**
 * Tiny HTML templating helper.
 *
 *   html`<h2>${title}</h2>`
 *
 * - Interpolated strings are HTML-escaped automatically.
 * - Nested html`` results and arrays of them are inserted as-is.
 * - null, undefined and false render nothing, so `${cond && html`...`}` works.
 */

const ESCAPES = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' };

export function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (char) => ESCAPES[char]);
}

class SafeHtml {
  constructor(value) {
    this.value = value;
  }
  toString() {
    return this.value;
  }
}

function toHtml(value) {
  if (value == null || value === false) return '';
  if (value instanceof SafeHtml) return value.value;
  if (Array.isArray(value)) return value.map(toHtml).join('');
  return escapeHtml(value);
}

export function html(strings, ...values) {
  let out = strings[0];
  values.forEach((value, i) => {
    out += toHtml(value) + strings[i + 1];
  });
  return new SafeHtml(out);
}

/** Long text fields may be a string or a list of paragraphs (shown with a blank line between). */
export function paragraphs(text) {
  return Array.isArray(text) ? text.join('\n\n') : text;
}

/** Attributes for links that leave the site (open in a new tab). */
export function externalLinkAttrs(href) {
  return href.startsWith('#') ? '' : html`target="_blank" rel="noopener noreferrer"`;
}
