// Runs after `vite build`. Renders every route to a real HTML file in dist/
// so search engines, AI assistants, and link previews can read the site.
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = dirname(fileURLToPath(import.meta.url));
const { render } = await import("./dist-ssr/prerender-entry.js");

const SITE = "https://rootsnroad.com";

// One entry per route: path, page title, meta description.
const routes = [
  {
    path: "/",
    title: "Roots & Road — Identity Adventures",
    description:
      "Immersive heritage journeys that reconnect people with the places, stories, and lives that shaped who they are. Research-driven family history, told with care.",
  },
  {
    path: "/stories",
    title: "Stories — Roots & Road",
    description:
      "Real case studies from the archives: DNA surprises, name changes, and family mysteries traced through original records, one document at a time.",
  },
  {
    path: "/stories/jessie",
    title: "Jessie's Story — Roots & Road",
    description:
      "A 1903 Nashville divorce, a DNA test a century later, and the great-grandmother whose secrets outlived her. A case study in evidence-based family history.",
  },
  {
    path: "/stories/mike",
    title: "The Man Who Called Himself Mike — Roots & Road",
    description:
      "Traced backward from a 1937 Kansas City death notice to 1814 Aberdeen, Scotland — how a Robertson became a Robeson, one record at a time.",
  },
  {
    path: "/stories/bennetts",
    title: "Now We Are Bennetts — Roots & Road",
    description:
      "Seven generations of a hidden biological line, from Nashville in 1911 back to a Revolutionary War soldier and a 1709 colonial Virginia baptism.",
  },
  {
    path: "/dna-surprises",
    title: "DNA, Consent & Discovery — Roots & Road",
    description:
      "Before you open a DNA result: questions of consent, agency, and emotional readiness. How Roots & Road handles unexpected discoveries with care.",
  },
  {
    path: "/journeys",
    title: "Journeys — Roots & Road",
    description:
      "Heritage journeys designed from completed research — walking the streets, standing in the parishes, and seeing the places your ancestors knew.",
  },
  { path: "/privacy",
    title: "Privacy - Roots & Road",
    description: "Privacy",
  },
   
  {path: "/methodology",
    title: "Methodology - Roots & Road",
    description: "How I go about the work",
  },
    
];

const template = readFileSync(join(root, "dist/index.html"), "utf8");

for (const { path, title, description } of routes) {
  const appHtml = render(path);

  let html = template
    .replace(/<title>[^<]*<\/title>/, `<title>${title}</title>`)
    .replace(
      '<div id="root"></div>',
      `<div id="root">${appHtml}</div>`
    );

  // Per-page meta description, canonical URL, and social-preview tags.
  const canonical = SITE + (path === "/" ? "/" : path);
  const headExtras = [
    `<meta name="description" content="${description}" />`,
    `<link rel="canonical" href="${canonical}" />`,
    `<meta property="og:title" content="${title}" />`,
    `<meta property="og:description" content="${description}" />`,
    `<meta property="og:url" content="${canonical}" />`,
    `<meta property="og:type" content="website" />`,
  ].join("\n    ");
  html = html.replace("</head>", `    ${headExtras}\n  </head>`);

  const outFile =
    path === "/"
      ? join(root, "dist/index.html")
      : join(root, "dist", path.slice(1), "index.html");
  mkdirSync(dirname(outFile), { recursive: true });
  writeFileSync(outFile, html);
  console.log(`prerendered ${path} -> ${outFile.replace(root + "/", "")}`);
}

console.log(`\nDone: ${routes.length} pages written as real HTML.`);
