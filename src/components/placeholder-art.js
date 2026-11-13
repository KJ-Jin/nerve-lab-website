import { html } from '../lib/html.js';

/**
 * Decorative SVG illustration shown on a study card that has no image.
 * type: 'axon' (default) | 'nmj' | 'vascular'
 */

let instance = 0;

const line = (d, width = 3, color = '#e8b1a2', opacity = 1) =>
  html`<path d="${d}" fill="none" stroke="${color}" stroke-width="${width}" opacity="${opacity}" stroke-linecap="round"/>`;

function nmj() {
  const parts = [];
  for (let i = 0; i < 12; i++) {
    const y = 305 + i * 14;
    parts.push(line(`M-20 ${y} Q 120 ${y - 30} 255 ${y + 8} T650 ${y + 7}`, 3, '#b0bfc0', 0.47));
  }
  parts.push(line('M245 -30 C238 90 340 95 330 170 S418 244 405 282', 10, '#f3c5ae', 0.95));
  for (let i = 0; i < 8; i++) {
    const cx = 335 + (i % 4) * 26;
    const cy = 250 + Math.floor(i / 4) * 14;
    parts.push(html`<ellipse cx="${cx}" cy="${cy}" rx="13" ry="7" fill="#e4b2a4" opacity=".9"/>`);
  }
  for (let i = 0; i < 15; i++) {
    const x = 235 + i * 13;
    const y = 310 + Math.sin(i) * 10;
    parts.push(html`<path d="M${x} ${y} q9 -12 17 -2" stroke="#b9a3df" stroke-width="3" fill="none"/>`);
  }
  return parts;
}

function vascular() {
  const parts = [];
  for (let i = 0; i < 26; i++) {
    const y = 40 + i * 19;
    parts.push(line(`M-40 ${y} C${100 + (i % 3) * 50} ${y - 90} 320 ${y + 95} 660 ${y - 40}`, 1.4, i % 3 ? '#b5a7d2' : '#aa8ad4', 0.45));
  }
  parts.push(line('M-25 420 C155 400 176 205 347 205 S495 90 644 -20', 13, '#9579c8', 0.8));
  parts.push(line('M-10 452 C180 391 240 355 310 282 S400 280 605 112', 6, '#d3c4ea', 0.86));
  for (let i = 0; i < 50; i++) {
    const cx = (i * 173 + 36) % 600;
    const cy = (i * 107 + 48) % 540;
    parts.push(html`<circle cx="${cx}" cy="${cy}" r="${2 + (i % 3)}" fill="#c3b1e6" opacity=".55"/>`);
  }
  return parts;
}

function axon() {
  const parts = [];
  for (let i = 0; i < 31; i++) {
    const s = i * 13;
    parts.push(line(`M-38 ${70 + s * 0.8} C 140 ${110 + s} 200 ${s * 0.2} 360 ${140 + s * 0.35} S570 ${80 + s * 0.9} 680 ${180 + s}`, i % 4 === 0 ? 3 : 1.5, i % 3 ? '#c1a8df' : '#ad9bce', 0.4));
  }
  parts.push(line('M-40 375 C170 370 158 189 365 177 S500 45 640 -13', 9, '#ad98d4', 0.9));
  parts.push(line('M314 186 C380 267 430 250 520 330 S580 417 648 402', 5, '#9780c6', 0.76));
  parts.push(line('M170 300 C120 210 70 188 -40 170', 5, '#9780c6', 0.65));
  for (let i = 0; i < 37; i++) {
    const cx = (i * 97 + 18) % 600;
    const cy = (i * 73 + 17) % 540;
    parts.push(html`<circle cx="${cx}" cy="${cy}" r="${2 + (i % 4)}" fill="#d3c2f0" opacity="${0.2 + (i % 4) * 0.16}"/>`);
  }
  return parts;
}

const DRAWINGS = { nmj, vascular, axon };

export function PlaceholderArt(type = 'axon') {
  // Unique gradient ids, so several illustrations can share a page.
  const id = `art-${++instance}`;
  const draw = DRAWINGS[type] ?? axon;
  return html`<svg viewBox="0 0 600 540" preserveAspectRatio="xMidYMid slice" role="img" aria-label="Decorative scientific diagram, not experimental data" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="${id}-bg" x1="0" x2="1" y2="1"><stop stop-color="#312946"/><stop offset="1" stop-color="#71608f"/></linearGradient><radialGradient id="${id}-glow"><stop stop-color="#d1b9ed" stop-opacity=".6"/><stop offset="1" stop-color="#d1b9ed" stop-opacity="0"/></radialGradient></defs><rect width="600" height="540" fill="url(#${id}-bg)"/><circle cx="400" cy="205" r="230" fill="url(#${id}-glow)"/>${draw()}</svg>`;
}
