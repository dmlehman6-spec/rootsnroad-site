import HomePage from "./HomePage";
import JessiePage from "./JessiePage";
import DnaPage from "./DnaPage";
import MikePage from "./MikePage";
import BennettsPage from "./BennettsPage";
import StoriesPage from "./StoriesPage";
import JourneysPage from "./JourneysPage";

/*
  Minimal routing without extra packages: the path decides the page.
  public/_redirects makes Netlify serve index.html for every path.

  Pre-rendering: during `npm run build`, prerender.mjs passes the path in
  as a prop; in the browser we read the address bar instead.

  IMPORTANT: Netlify serves pre-rendered pages with a trailing slash
  (/stories/jessie/), so we normalize the path before matching —
  otherwise every deep page falls through to the homepage.
*/

export default function App({ path }) {
  if (path === undefined) path = window.location.pathname;

  // Normalize: strip trailing slash (but keep "/" itself)
  if (path.length > 1 && path.endsWith("/")) {
    path = path.slice(0, -1);
  }

  if (path === "/stories/jessie") return <JessiePage />;
  if (path === "/stories/mike") return <MikePage />;
  if (path === "/stories/bennetts") return <BennettsPage />;
  if (path === "/stories") return <StoriesPage />;
  if (path === "/dna-surprises") return <DnaPage />;
  if (path === "/journeys") return <JourneysPage />;

  return <HomePage />;
}
