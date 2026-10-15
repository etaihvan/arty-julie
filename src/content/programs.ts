/**
 * Weekly classes. Edit prices, times and notes here; every page that shows
 * them updates automatically.
 *
 * `facts` rows render as the "At a glance" table on each program page.
 * Use `confirm: true` on a fact when the published information is unclear;
 * the site then tells visitors to check with Julie instead of stating it as fact.
 */

export type Fact = {
  label: string;
  value: string;
  note?: string;
  confirm?: boolean;
};

export type Program = {
  id: "kids" | "teens" | "adults";
  name: string;
  shortName: string;
  path: string;
  audience: string;
  summary: string;
  priceFrom: string;
  facts: Fact[];
};

export const kidsClasses: Program = {
  id: "kids",
  name: "Kids' Art Classes",
  shortName: "Kids' classes",
  path: "/kids-art-classes/",
  audience: "Children",
  summary:
    "After-school art classes in four-week sessions. Materials and a snack are included, so all your child needs to bring is their imagination.",
  priceFrom: "$265 per 4-week session",
  facts: [
    { label: "Sessions", value: "4 weeks" },
    { label: "Class length", value: "1½ hours" },
    { label: "Days", value: "Monday to Thursday" },
    { label: "Time", value: "4:00 to 5:30pm", note: "Times can change, so check with Julie when you book." },
    { label: "Price", value: "$265 per session" },
    { label: "Included", value: "All materials and a snack" },
    { label: "Ages", value: "Ask Julie which class suits your child", confirm: true },
    { label: "Make-ups", value: "For illness or emergencies only" },
    { label: "Holidays", value: "No classes on school holidays" },
  ],
};

export const teenClasses: Program = {
  id: "teens",
  name: "Teen Art Classes",
  shortName: "Teen classes",
  path: "/kids-art-classes/#teens",
  audience: "Teens 13 to 19",
  summary:
    "For teens who are serious about art college or finding their own artistic voice: portfolio building, painting, still-life drawing and ongoing projects.",
  priceFrom: "$200 per 5-week session",
  facts: [
    { label: "Ages", value: "13 to 19" },
    { label: "Sessions", value: "5 weeks" },
    { label: "Day", value: "Wednesdays" },
    {
      label: "Time",
      value: "Please check with Julie",
      // TODO(Julie): the old teen page gives both 4:30–6:00pm and 2:30–4:00pm.
      confirm: true,
    },
    { label: "Price", value: "$200 per session" },
    { label: "Included", value: "All materials and a snack" },
    { label: "Focus", value: "Portfolio, painting, still-life drawing, ongoing projects" },
    { label: "Make-ups", value: "For illness or emergencies only" },
    { label: "Holidays", value: "No classes on school holidays" },
  ],
};

export const adultClasses: Program = {
  id: "adults",
  name: "Adult Art Classes",
  shortName: "Adult classes",
  path: "/adult-art-classes/",
  audience: "Adults",
  summary:
    "A long, unhurried lunchtime in the studio. Four-week sessions on Wednesdays and Fridays, with materials provided and your lunch welcome at the table.",
  priceFrom: "$285 per 4-week session",
  facts: [
    { label: "Days", value: "Wednesdays and Fridays" },
    { label: "Time", value: "12:00 to 2:30pm" },
    { label: "Sessions", value: "4 weeks" },
    { label: "Price", value: "$285 per session" },
    { label: "Included", value: "All materials" },
    { label: "Lunch", value: "Bring your own; food and drinks are welcome" },
    { label: "Experience", value: "Ask Julie; tell her what you'd like to work on", confirm: true },
    { label: "Make-ups", value: "For illness or emergencies only" },
    { label: "Holidays", value: "No classes on school holidays" },
  ],
};

export const programs = [kidsClasses, teenClasses, adultClasses];

/** Art mediums Julie lists for her camps. Used on the camps and home pages. */
export const mediums = [
  { name: "Painting", detail: "Colour, brushwork and big confident marks." },
  { name: "Drawing", detail: "Looking closely and putting it on paper." },
  { name: "Papier-mâché", detail: "Messy, sculptural and endlessly satisfying." },
  { name: "3D sculpture", detail: "Building art you can walk around." },
  { name: "Mosaics", detail: "Patterns, pieces and a lot of patience." },
  { name: "Collage", detail: "Cutting, layering and happy accidents." },
];
