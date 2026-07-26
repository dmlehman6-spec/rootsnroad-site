import HomePage from "./HomePage";
import JessiePage from "./JessiePage";
import DnaPage from "./DnaPage";
import MikePage from "./MikePage";

/*
  Minimal routing without extra packages: the path decides the page.
  public/_redirects makes Netlify serve index.html for every path,
  so /journeys/jessie works on the live site and on refresh.
*/

export default function App() {
  const path = window.location.pathname;

  if (path === "/journeys/jessie") {
    return <JessiePage />;
  }

  if (path === "/journeys/jessie/what-it-means") {
    return <DnaPage />;
  }

  if (path === "/journeys/mike") {
    return <MikePage />;
  }

  return <HomePage />;
}
