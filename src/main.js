import { HomePage } from './pages/home.js';
import { ResearchPage } from './pages/research.js';
import { ResearchAreaPage } from './pages/research-area.js';
import { TeamPage } from './pages/team.js';
import { PublicationsPage } from './pages/publications.js';
import { NewsPage } from './pages/news.js';
import { ContactPage } from './pages/contact.js';

import clinical from './content/research-clinical.js';
import basic from './content/research-basic.js';
import translational from './content/research-translational.js';

import { startRouter } from './lib/router.js';
import { initNav, updateNav } from './lib/nav.js';

// URL hash → page. "#people" shows TeamPage, and so on. Unknown hashes show the home page.
const routes = {
  home: HomePage,
  research: ResearchPage,
  'research-clinical': () => ResearchAreaPage(clinical),
  'research-basic': () => ResearchAreaPage(basic),
  'research-translational': () => ResearchAreaPage(translational),
  people: TeamPage,
  publications: PublicationsPage,
  news: NewsPage,
  contact: ContactPage,
};

// Render every page once up front; the router just shows/hides them.
const main = document.getElementById('site-content');
for (const [id, renderPage] of Object.entries(routes)) {
  const page = document.createElement('div');
  page.className = 'page';
  page.id = `page-${id}`;
  page.innerHTML = String(renderPage());
  main.append(page);
}

initNav();
startRouter(Object.keys(routes), { onNavigate: updateNav });
