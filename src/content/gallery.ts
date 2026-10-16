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

export type Tone = "postbox" | "navy" | "mustard" | "racing" | "blush";

export type Artwork = {
  id: string;
  title: string;
  medium: string;
  /** Which class or camp it came from. Leave out if not known. */
  program?: "Kids' classes" | "Teen classes" | "Adult classes" | "Art camp";
  /** Path under /public, e.g. "/images/gallery/papier-mache-birds.jpg". */
  src?: string;
  /** Describe what the artwork shows, for screen readers and search engines. */
  alt: string;
  width: number;
  height: number;
  tone: Tone;
};

// TODO(Julie): add which class or camp each piece came from (`program`), and
// confirm she's happy for each piece to appear on the website.
export const gallery: Artwork[] = [
  { id: "postcards", title: "Postcards on a washing line", medium: "Paint", src: "/images/gallery/postcards-washing-line.jpg",
    alt: "A painting of three postcards pegged to a washing line on a pink background: a rock arch at sunset labelled Cabo San Lucas, shopping bags labelled Los Angeles, and the Golden Gate Bridge labelled San Francisco",
    width: 4, height: 3, tone: "blush" },
  { id: "summer-tote", title: "Summer tote bag", medium: "Fabric paint", src: "/images/gallery/summer-tote.jpg",
    alt: "A canvas tote bag painted with the word SUMMER in blue bubble letters, a sun, a palm tree, a purple butterfly, a pink hibiscus and a wave, inside a scalloped orange border",
    width: 1, height: 1, tone: "mustard" },
  { id: "magazine-cover", title: "Magazine cover", medium: "Paint and collage", src: "/images/gallery/magazine-cover.jpg",
    alt: "A painted fashion magazine cover in a pop-art style: a blonde woman in a lilac jumper against black, with VOGUE in red letters and two butterflies cut out and stuck on",
    width: 4, height: 5, tone: "postbox" },
  { id: "sheet-music-collage", title: "Sheet-music collage", medium: "Mixed media", src: "/images/gallery/sheet-music-collage.jpg",
    alt: "An abstract collage of torn sheet music and newspaper, painted over with sweeps of blue and yellow and red outlined shapes, with a black-and-white sunflower in one corner, mounted on black card",
    width: 4, height: 3, tone: "navy" },
  { id: "portrait-gold-frame", title: "Portrait in a gold frame", medium: "Paint", src: "/images/gallery/portrait-gold-frame.jpg",
    alt: "A painted figure in a black jumper and checked skirt, drawn over in white line, on a turquoise background inside a wide hand-painted gold and black patterned border",
    width: 3, height: 4, tone: "racing" },
  { id: "los-angeles-collage", title: "Los Angeles collage", medium: "Mixed media", src: "/images/gallery/los-angeles-collage.jpg",
    alt: "A dense collage of newspaper and sheet-music scraps splattered with orange, green and blue paint, with the words LOS ANGELES spelled out in cut-out letters",
    width: 4, height: 3, tone: "mustard" },
  { id: "papier-mache", title: "Papier-mâché", medium: "Papier-mâché", program: "Art camp", alt: "", width: 1, height: 1, tone: "mustard" },
  { id: "mosaic", title: "Mosaic", medium: "Mosaic", program: "Art camp", alt: "", width: 4, height: 3, tone: "racing" },
  { id: "sculpture", title: "3D sculpture", medium: "Sculpture", program: "Art camp", alt: "", width: 3, height: 4, tone: "navy" },
];
