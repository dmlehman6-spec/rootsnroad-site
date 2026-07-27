// Build-time entry: renders the app to plain HTML for a given path.
// Used only by prerender.mjs during `npm run build` — never shipped to browsers.
import { renderToString } from "react-dom/server";
import App from "./App.jsx";

export function render(path) {
  return renderToString(<App path={path} />);
}
