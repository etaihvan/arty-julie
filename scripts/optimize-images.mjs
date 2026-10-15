/**
 * Makes fast, web-sized copies of photos in public/images.
 *
 * For every .jpg/.jpeg/.png it creates <name>-800.webp and <name>-1600.webp
 * next to the original (skipping ones already made). The <ArtImage> component
 * picks these up automatically. It also regenerates public/og-image.png.
 *
 * Usage: npm run images
 */
import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

const root = path.resolve(import.meta.dirname, "..");
const imagesDir = path.join(root, "public/images");

function walk(dir) {
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((d) =>
    d.isDirectory() ? walk(path.join(dir, d.name)) : [path.join(dir, d.name)],
  );
}

let made = 0;
for (const file of walk(imagesDir).filter((f) => /\.(jpe?g|png)$/i.test(f))) {
  const base = file.replace(/\.(jpe?g|png)$/i, "");
  for (const width of [800, 1600]) {
    const out = `${base}-${width}.webp`;
    if (fs.existsSync(out)) continue;
    await sharp(file).rotate().resize({ width, withoutEnlargement: true }).webp({ quality: 78 }).toFile(out);
    made++;
  }
}
console.log(`Created ${made} web image(s).`);

await sharp(path.join(root, "scripts/assets/og-image.svg")).png().toFile(path.join(root, "public/og-image.png"));
console.log("Updated public/og-image.png");
