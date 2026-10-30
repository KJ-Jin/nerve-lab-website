# [Nerve Lab Website](https://kj-jin.github.io/nerve-lab-website/#home)

Website for the Nerve Lab (Liu Lab), University of Washington. Plain HTML/CSS/JavaScript built with [Vite](https://vite.dev). No framework.

## Quick start

```bash
npm ci
npm run dev       # local dev server with live reload
npm run build     # production build → dist/
npm run preview   # serve the dist/ build locally
```

Use Node.js 24 for local development. Pages use hash URLs (`#research`, `#people`, …), so the host needs no routing setup, and the build works from any sub-folder.

## Editing and publishing

The `main` branch stores the editable source, not generated bundles. The normal workflow is:

1. Edit content in `src/content/`, or add images under `images/`.
2. Run `npm run build` to catch build errors locally.
3. Commit and push the source changes to `main`.
4. GitHub Actions builds `dist/` and publishes it to GitHub Pages automatically.

The generated `dist/` directory is intentionally ignored and should not be committed. The deployment workflow lives at `.github/workflows/deploy-pages.yml`.

The unbuilt project also runs on any plain static server (VS Code Live Server, `python3 -m http.server`, …), because the source is plain ES modules and all paths are relative. Opening `index.html` by double-clicking it does not work: browsers block JavaScript modules on `file://` pages.

## Where things live

```
index.html                  Page shell: <head>, header + navigation, footer
images/                     All images (copied as-is into the build)
public/                     Search files copied directly into the build
src/
  main.js                   Entry point: route list (#hash → page), renders pages, starts router
  content/                  ✏️  ALL site text, lists and image paths — one file per page
    home.js
    research.js             Research overview page
    research-clinical.js    Clinical Trials studies + collaborators
    research-basic.js       Basic Science studies + collaborators
    research-translational.js
    team.js                 PI, group photo, lab members
    publications.js
    news.js
    contact.js
  pages/                    HTML templates, one per page (research-area.js is shared by the 3 research areas)
  components/               Reusable template pieces (page banner, study card, member grid, …)
  lib/
    html.js                 html`` template helper (auto-escapes text)
    router.js               Shows the page matching the URL hash
    nav.js                  Mobile menu and Research dropdown
  styles/
    main.css                Imports everything below, in order
    tokens.css              Colors, fonts, logo size, hero image settings
    base.css · layout.css · typography.css
    components/             Styles for header, nav, footer, banner, cards, …
    pages/                  Page-specific styles
```

To change **words**, edit `src/content/`. To change **structure**, edit `src/pages/` or `src/components/`. To change **looks**, edit `src/styles/`. Each CSS file matches the template of the same name.

## Common edits

**Add a team member.** Put the photo in `images/team/`. Then add an entry to a group in `src/content/team.js`:

```js
{ name: 'Jane Doe, PhD', role: 'Postdoctoral Fellow', bio: 'Short biography.', photo: 'images/team/jane-doe.jpg' },
```

If you leave out `photo`, the card shows the person's initials. A group with no members is hidden.

**Add a publication or news item.** Add an object at the top of the list in `src/content/publications.js` or `src/content/news.js`.

**Add a study.** Add an object to `studies` in the matching `src/content/research-*.js` file. The available fields are listed at the top of `research-clinical.js`. Studies are numbered automatically. Without an `image`, a generated illustration is drawn instead (`art: 'axon' | 'nmj' | 'vascular'`).

**Long text with paragraphs.** Any description or bio can be a list of strings, one per paragraph:

```js
description: ['First paragraph.', 'Second paragraph.'],
```

**Images.** Reference files in `images/` as `'images/…'`, with no leading slash. Paths are relative to `index.html`, so they work with `npm run dev`, in the build, on a plain static server and in a sub-folder.

**Colors, logo size, hero image focus.** Edit `src/styles/tokens.css`.

**Add a page.** Create a content file and a template in `src/pages/`, then add a route in `src/main.js`. Finally, add a nav link in `index.html` with `href="#your-page"` and `data-page="your-page"`.
