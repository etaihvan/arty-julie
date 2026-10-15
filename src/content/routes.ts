/**
 * Page titles and descriptions for search engines and link previews.
 * Each path here is pre-rendered to its own HTML file at build time and
 * listed in sitemap.xml.
 */
export type RouteMeta = {
  path: string;
  title: string;
  description: string;
  /** Exclude utility pages from the sitemap and search results. */
  noindex?: boolean;
};

export const routes: RouteMeta[] = [
  {
    path: "/",
    title: "Arty Julie | Art Classes & Holiday Art Camps for Kids, Teens and Adults",
    description:
      "Art classes and small holiday art camps with Julie V, a London-born artist and teacher. Painting, drawing, papier-mâché, mosaics and more. Materials included.",
  },
  {
    path: "/kids-art-classes/",
    title: "Kids' & Teen Art Classes | Arty Julie",
    description:
      "After-school art classes for kids in 4-week sessions, Monday to Thursday, plus portfolio-focused teen classes. Materials and a snack included.",
  },
  {
    path: "/art-camps/",
    title: "Kids' Art Camps: Summer, Spring & Winter | Arty Julie",
    description:
      "Small holiday art camps for ages 7+ in Julie's studio and garden. Painting, sculpture, papier-mâché, mosaics, collage, art history and afternoon tea.",
  },
  {
    path: "/adult-art-classes/",
    title: "Adult Art Classes on Wednesdays & Fridays | Arty Julie",
    description:
      "Unhurried lunchtime art classes for adults, Wednesdays and Fridays 12 to 2:30pm. 4-week sessions with all materials provided. Bring your lunch.",
  },
  {
    path: "/gallery/",
    title: "Student Artwork Gallery | Arty Julie",
    description:
      "Paintings, drawings, papier-mâché, mosaics and more made in Julie V's art classes and camps.",
  },
  {
    path: "/about/",
    title: "About Julie V | Artist & Art Teacher | Arty Julie",
    description:
      "Meet Julie van Herwerden: London-born artist, former elementary school teacher and the person behind Arty Julie's art classes and camps.",
  },
  {
    path: "/contact/",
    title: "Contact & Registration | Arty Julie",
    description:
      "Ask Julie about a class or camp, check availability, and find the application and release forms you need to register.",
  },
  {
    path: "/thank-you/",
    title: "Thank You | Arty Julie",
    description: "Your message is on its way to Julie.",
    noindex: true,
  },
];

export const notFoundMeta: RouteMeta = {
  path: "/404",
  title: "Page Not Found | Arty Julie",
  description: "This page has wandered off the canvas.",
  noindex: true,
};

export function metaFor(path: string): RouteMeta {
  const normalized = path.endsWith("/") ? path : `${path}/`;
  return routes.find((r) => r.path === normalized || r.path === path) ?? notFoundMeta;
}
