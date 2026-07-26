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

  Site architecture (per Donna, 26 Jul 26):
  - /stories                     the three case studies (nav: "Story")
  - /stories/jessie|mike|bennetts
  - /dna-surprises               Part Two — files under How It Works
  - /journeys                    travel itineraries (nav: "Journeys") —
                                 placeholder until Donna writes the content
*/

export default function App() {
  const path = window.location.pathname;

  if (path === "/stories/jessie") return <JessiePage />;
  if (path === "/stories/mike") return <MikePage />;
  if (path === "/stories/bennetts") return <BennettsPage />;
  if (path === "/stories") return <StoriesPage />;
  if (path === "/dna-surprises") return <DnaPage />;
  if (path === "/journeys") return <JourneysPage />;

  return <HomePage />;
}
