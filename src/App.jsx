import HomePage from "./HomePage";
import JessiePage from "./JessiePage";
import DnaPage from "./DnaPage";
import MikePage from "./MikePage";
import BennettsPage from "./BennettsPage";
import StoriesPage from "./StoriesPage";
import JourneysPage from "./JourneysPage";
import PrivacyPage from "./PrivacyPage";
import MethodologyPage from "./MethodologyPage";

/*
  Path-based router. THREE behaviors are load-bearing — do not remove:
  1. `path` arrives as a PROP during pre-rendering (prerender.mjs);
  2. in the browser it falls back to window.location.pathname;
  3. trailing slashes are stripped (Netlify serves /stories/jessie/).
*/

export default function App({ path }) {
  if (path === undefined) path = window.location.pathname;

  if (path.length > 1 && path.endsWith("/")) {
    path = path.slice(0, -1);
  }

  if (path === "/stories/jessie") return <JessiePage />;
  if (path === "/stories/mike") return <MikePage />;
  if (path === "/stories/bennetts") return <BennettsPage />;
  if (path === "/stories") return <StoriesPage />;
  if (path === "/dna-surprises") return <DnaPage />;
  if (path === "/journeys") return <JourneysPage />;
  if (path === "/privacy") return <PrivacyPage />;
  if (path === "/methodology") return <MethodologyPage />;

  return <HomePage />;
}
