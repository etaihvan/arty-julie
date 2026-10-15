/**
 * Pre-renders every route to static HTML after `vite build`, so each page
 * loads instantly, works without JavaScript and is fully visible to search
 * engines. Also writes 404.html, sitemap.xml and robots.txt.
 *
 * Run via `npm run build`.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const dist = path.join(root, "dist");
const SITE_URL = (process.env.SITE_URL || "https://kidsartclasses.info").replace(/\/$/, "");

type Server = typeof import("../src/entry-server");
const server: Server = await import(pathToFileURL(path.join(root, "dist-ssr/entry-server.js")).href);
const { render, routes, notFoundMeta, site, camps, kidsClasses, teenClasses, adultClasses } = server;

const template = fs.readFileSync(path.join(dist, "index.html"), "utf8");

// Preload the two fonts used above the fold to avoid a late font swap.
const preloadFonts = fs
  .readdirSync(path.join(dist, "assets"))
  .filter((f) => /^(fraunces-latin-full-normal|instrument-sans-latin-wght-normal)-.*\.woff2$/.test(f))
  .map((f) => `<link rel="preload" href="/assets/${f}" as="font" type="font/woff2" crossorigin />`);

const esc = (s: string) => s.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

// ---------- Structured data (only verified facts; see content/site.ts) ----------
const orgId = `${SITE_URL}/#organization`;
const personId = `${SITE_URL}/#julie`;

const organization = {
  "@type": "EducationalOrganization",
  "@id": orgId,
  name: site.name,
  alternateName: site.legalName,
  url: `${SITE_URL}/`,
  logo: `${SITE_URL}/favicon.svg`,
  image: `${SITE_URL}/og-image.png`,
  telephone: site.contact.phoneDisplay,
  email: site.contact.email,
  sameAs: [site.social.instagramUrl],
  founder: { "@id": personId },
  ...(site.location.address
    ? { address: { "@type": "PostalAddress", addressCountry: "US", ...site.location.address } }
    : {}),
};

const person = {
  "@type": "Person",
  "@id": personId,
  name: site.teacher,
  alternateName: site.teacherShort,
  jobTitle: "Art teacher",
  birthPlace: "London, England",
  worksFor: { "@id": orgId },
  sameAs: [site.social.instagramUrl],
};

function course(p: typeof kidsClasses, url: string) {
  const price = p.priceFrom.match(/\$(\d+)/)?.[1];
  return {
    "@type": "Course",
    name: p.name,
    description: p.summary,
    url,
    provider: { "@id": orgId },
    ...(price ? { offers: { "@type": "Offer", price, priceCurrency: "USD", category: "Paid", url } } : {}),
  };
}

function campEvents() {
  // Event markup needs a real address, and only upcoming camps qualify.
  if (!site.location.address) return [];
  const today = new Date().toISOString().slice(0, 10);
  return camps
    .filter((c) => c.end >= today)
    .map((c) => ({
      "@type": "Event",
      name: c.title,
      startDate: c.start,
      endDate: c.end,
      eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
      eventStatus: "https://schema.org/EventScheduled",
      location: { "@type": "Place", name: site.legalName, address: { "@type": "PostalAddress", addressCountry: "US", ...site.location.address } },
      organizer: { "@id": orgId },
      ...(c.price?.match(/\$(\d+)/)
        ? {
            offers: {
              "@type": "Offer",
              price: c.price.match(/\$(\d+)/)![1],
              priceCurrency: "USD",
              availability: c.status === "full" ? "https://schema.org/SoldOut" : "https://schema.org/InStock",
              url: `${SITE_URL}/art-camps/`,
            },
          }
        : {}),
    }));
}

function breadcrumbs(p: string, title: string) {
  if (p === "/") return null;
  return {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
      { "@type": "ListItem", position: 2, name: title.split(" | ")[0], item: `${SITE_URL}${p}` },
    ],
  };
}

function jsonLdFor(p: string, title: string) {
  const graph: object[] = [organization];
  if (p === "/" || p === "/about/") graph.push(person);
  if (p === "/kids-art-classes/") graph.push(course(kidsClasses, `${SITE_URL}${p}`), course(teenClasses, `${SITE_URL}${p}#teens`));
  if (p === "/adult-art-classes/") graph.push(course(adultClasses, `${SITE_URL}${p}`));
  if (p === "/art-camps/") graph.push(...campEvents());
  const bc = breadcrumbs(p, title);
  if (bc) graph.push(bc);
  return JSON.stringify({ "@context": "https://schema.org", "@graph": graph }).replace(/</g, "\\u003c");
}

// ---------- Head ----------
function head(meta: { path: string; title: string; description: string; noindex?: boolean }) {
  const url = `${SITE_URL}${meta.path === "/404" ? "/" : meta.path}`;
  return [
    ...preloadFonts,
    `<title>${esc(meta.title)}</title>`,
    `<meta name="description" content="${esc(meta.description)}" />`,
    meta.noindex ? `<meta name="robots" content="noindex" />` : `<link rel="canonical" href="${url}" />`,
    `<meta property="og:type" content="website" />`,
    `<meta property="og:site_name" content="${esc(site.name)}" />`,
    `<meta property="og:title" content="${esc(meta.title)}" />`,
    `<meta property="og:description" content="${esc(meta.description)}" />`,
    `<meta property="og:url" content="${url}" />`,
    `<meta property="og:image" content="${SITE_URL}/og-image.png" />`,
    `<meta property="og:image:width" content="1200" />`,
    `<meta property="og:image:height" content="630" />`,
    `<meta property="og:image:alt" content="Arty Julie: art classes and camps for kids, teens and adults" />`,
    `<meta property="og:locale" content="en_US" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    meta.noindex ? "" : `<script type="application/ld+json">${jsonLdFor(meta.path, meta.title)}</script>`,
  ]
    .filter(Boolean)
    .join("\n    ");
}

function page(url: string, meta: Parameters<typeof head>[0]) {
  return template.replace("<!--app-head-->", head(meta)).replace("<!--app-html-->", render(url));
}

// ---------- Write pages ----------
for (const r of routes) {
  const file = r.path === "/" ? path.join(dist, "index.html") : path.join(dist, r.path, "index.html");
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, page(r.path, r));
  console.log(`  prerendered ${r.path}`);
}
fs.writeFileSync(path.join(dist, "404.html"), page("/404", notFoundMeta));
console.log("  prerendered 404.html");

// ---------- sitemap.xml & robots.txt ----------
const today = new Date().toISOString().slice(0, 10);
const urls = routes
  .filter((r) => !r.noindex)
  .map((r) => `  <url><loc>${SITE_URL}${r.path}</loc><lastmod>${today}</lastmod></url>`)
  .join("\n");
fs.writeFileSync(
  path.join(dist, "sitemap.xml"),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
);
fs.writeFileSync(path.join(dist, "robots.txt"), `User-agent: *\nAllow: /\n\nSitemap: ${SITE_URL}/sitemap.xml\n`);
console.log(`  wrote sitemap.xml and robots.txt for ${SITE_URL}`);

fs.rmSync(path.join(root, "dist-ssr"), { recursive: true, force: true });
