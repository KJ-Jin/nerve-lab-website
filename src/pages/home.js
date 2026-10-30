import { html, externalLinkAttrs } from '../lib/html.js';
import content from '../content/home.js';
import { ArrowIcon } from '../components/arrow-icon.js';

export function HomePage() {
  const { heroImage, kicker, headline, intro, cta, patientNote } = content;

  return html`
    <section class="home-hero" aria-label="Welcome to the Nerve Lab">
      <div class="home-art">
        <img class="hero-image" src="${heroImage.src}" alt="${heroImage.alt}">
      </div>
      <div class="home-copy">
        <div class="home-kicker"><span>${kicker.text}</span> <span class="home-kicker-sep" aria-hidden="true">/</span> <abbr title="${kicker.abbrTitle}">${kicker.abbr}</abbr></div>
        <h1 class="display">${headline}</h1>
        <p class="copy">${intro}</p>
        <div class="home-actions">
          <a class="home-cta" href="${cta.href}"><span class="home-cta-label">${cta.label}</span> ${ArrowIcon('right')}</a>
        </div>
        <p class="home-patient-note">${patientNote.text} <a href="${patientNote.href}" ${externalLinkAttrs(patientNote.href)}>${patientNote.linkText}</a>.</p>
      </div>
    </section>
  `;
}
