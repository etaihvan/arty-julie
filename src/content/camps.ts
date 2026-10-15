/**
 * Holiday art camps.
 *
 * HOW TO ADD A CAMP: copy one entry, change the fields, and set `status`:
 *   "open"        registration is open (shows a Register button)
 *   "coming-soon" dates announced, registration not open yet
 *   "full"        no places left
 * Camps whose `end` date has passed are moved to "Past camps" automatically,
 * whatever their status says, so an old camp never shows as upcoming.
 *
 * Dates use YYYY-MM-DD. `registerUrl` is optional: leave it out and the
 * Register button goes to the inquiry form with this camp pre-selected.
 */

export type CampStatus = "open" | "coming-soon" | "full";

export type Camp = {
  id: string;
  season: "Summer" | "Winter" | "Spring";
  title: string;
  start: string;
  end: string;
  hours?: string;
  ages?: string;
  price?: string;
  capacity?: string;
  theme?: string;
  description?: string;
  status: CampStatus;
  registerUrl?: string;
};

export const camps: Camp[] = [
  {
    id: "summer-2026-week-1",
    season: "Summer",
    title: "Summer Art Camp 2026, Week 1",
    start: "2026-06-08",
    end: "2026-06-12",
    hours: "11:30am to 3:00pm",
    ages: "8 and up",
    price: "$520 for the week",
    capacity: "6 to 8 campers",
    status: "open",
  },
  {
    id: "winter-2024-session-2",
    season: "Winter",
    title: "Winter Art Camp, Session 2",
    start: "2025-01-02",
    end: "2025-01-03",
    hours: "11:30am to 3:00pm",
    ages: "7 and up",
    price: "$190",
    capacity: "Up to 8 campers",
    status: "open",
  },
  {
    id: "winter-2024-session-1",
    season: "Winter",
    title: "Winter Art Camp, Session 1",
    start: "2024-12-16",
    end: "2024-12-20",
    hours: "11:30am to 3:00pm",
    ages: "7 and up",
    price: "$475",
    capacity: "Up to 8 campers",
    status: "open",
  },
];

/** General camp details shown on the camps page. */
export const campDetails = {
  seasons: "Julie runs art camps during the summer, spring and winter school breaks.",
  ages: "7 and up (most recent camp: 8 and up)",
  groupSize: "Small groups of up to 8 campers",
  hours: "11:30am to 3:00pm at recent camps",
  included: "Art materials and afternoon snacks",
  setting: "Julie's art studio, with breaks, lunch and afternoon tea in the garden",
  deposit: "At recent camps a $50 deposit has held a place; Julie will confirm when you book.",
};
