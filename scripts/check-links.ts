/**
 * Checks every internal link and asset reference in the built site (dist/)
 * points at a real file. Run after `npm run build`: `npm run check:links`.
 */
import fs from "node:fs";
import path from "node:path";

const dist = path.resolve("dist");
const htmlFiles: string[] = [];
(function walk(d: string) {
  for (const e of fs.readdirSync(d, { withFileTypes: true })) {
    const p = path.join(d, e.name);
    if (e.isDirectory()) walk(p);
    else if (p.endsWith(".html")) htmlFiles.push(p);
  }
})(dist);

const ids = new Map<string, Set<string>>();
for (const f of htmlFiles) ids.set(f, new Set([...fs.readFileSync(f, "utf8").matchAll(/\sid="([^"]+)"/g)].map((m) => m[1])));

function resolve(urlPath: string) {
  const clean = decodeURIComponent(urlPath.split(/[?#]/)[0]);
  const p = path.join(dist, clean);
  if (clean.endsWith("/")) return path.join(p, "index.html");
  if (fs.existsSync(p) && fs.statSync(p).isDirectory()) return path.join(p, "index.html");
  return p;
}

let broken = 0;
let checked = 0;
for (const f of htmlFiles) {
  const html = fs.readFileSync(f, "utf8");
  for (const m of html.matchAll(/(?:href|src)="(\/[^"]*)"/g)) {
    const url = m[1].replace(/&amp;/g, "&");
    if (url.startsWith("//")) continue;
    checked++;
    const target = resolve(url);
    const hash = url.includes("#") ? url.split("#")[1] : "";
    if (!fs.existsSync(target)) {
      broken++;
      console.log(`✗ ${path.relative(dist, f)} → ${url} (missing file)`);
    } else if (hash && target.endsWith(".html") && !ids.get(target)?.has(hash)) {
      broken++;
      console.log(`✗ ${path.relative(dist, f)} → ${url} (missing #${hash})`);
    }
  }
}
console.log(`${checked} internal links checked across ${htmlFiles.length} pages, ${broken} broken.`);
process.exit(broken ? 1 : 0);
