/**
 * Artwork gallery.
 *
 * HOW TO ADD ARTWORK:
 * 1. Put the photo in /public/images/gallery/ (e.g. papier-mache-birds.jpg).
 * 2. Run `npm run images` to make web-sized copies (optional but faster).
 * 3. Add an entry below with `src`, a description in `alt`, and its width/height.
 *
 * Entries without `src` show a clearly labelled "photo to add" slot, so the
 * layout stays intact while photos are collected. Avoid photos where a child's
 * face or name is identifiable unless the family has agreed to it.
 */

export type Tone = "vermilion" | "ultramarine" | "ochre" | "garden" | "rose";

export type Artwork = {
  id: string;
  title: string;
  medium: string;
  program: "Kids' classes" | "Teen classes" | "Adult classes" | "Art camp";
  /** Path under /public, e.g. "/images/gallery/papier-mache-birds.jpg". */
  src?: string;
  /** Describe what the artwork shows, for screen readers and search engines. */
  alt: string;
  width: number;
  height: number;
  tone: Tone;
};

export const gallery: Artwork[] = [
  { id: "painting", title: "Painting", medium: "Paint", program: "Art camp", alt: "", width: 4, height: 5, tone: "vermilion" },
  { id: "papier-mache", title: "Papier-mâché", medium: "Papier-mâché", program: "Art camp", alt: "", width: 1, height: 1, tone: "ochre" },
  { id: "still-life", title: "Still-life drawing", medium: "Drawing", program: "Teen classes", alt: "", width: 3, height: 4, tone: "ultramarine" },
  { id: "mosaic", title: "Mosaic", medium: "Mosaic", program: "Art camp", alt: "", width: 4, height: 3, tone: "garden" },
  { id: "adult-painting", title: "Lunchtime painting", medium: "Paint", program: "Adult classes", alt: "", width: 4, height: 5, tone: "rose" },
  { id: "collage", title: "Collage", medium: "Collage", program: "Kids' classes", alt: "", width: 1, height: 1, tone: "vermilion" },
  { id: "sculpture", title: "3D sculpture", medium: "Sculpture", program: "Art camp", alt: "", width: 3, height: 4, tone: "ultramarine" },
  { id: "drawing", title: "Drawing", medium: "Drawing", program: "Kids' classes", alt: "", width: 4, height: 3, tone: "ochre" },
  { id: "portfolio", title: "Portfolio work", medium: "Mixed media", program: "Teen classes", alt: "", width: 4, height: 5, tone: "garden" },
];
