import { html } from '../lib/html.js';
import { PageBanner } from '../components/page-banner.js';
import content from '../content/contact.js';

export function ContactPage() {
  const { banner, locations, recruiting } = content;

  return html`
    ${PageBanner(banner)}

    <section class="shell-wide contact-layout">
      <div class="contact-locations">
        <div class="eyebrow">${locations.eyebrow}</div>
        ${locations.items.map((place) => html`
          <div class="address-block">
            <h2>${place.name}</h2>
            <p>${place.address}</p>
          </div>
        `)}
      </div>

      <aside class="contact-recruit">
        <div class="eyebrow">${recruiting.eyebrow}</div>
        <h2>${recruiting.title}</h2>
        <p>${recruiting.text}</p>
        <a class="contact-email-link" href="mailto:${recruiting.email}">${recruiting.email} <span aria-hidden="true">↗</span></a>
      </aside>
    </section>
  `;
}
