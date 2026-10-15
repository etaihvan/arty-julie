import type { Camp } from "../content/camps";

export type DisplayStatus = "open" | "coming-soon" | "full" | "past";

/** Today's date as YYYY-MM-DD in the visitor's own time zone. */
function todayISO(now = new Date()) {
  const y = now.getFullYear();
  const m = String(now.getMonth() + 1).padStart(2, "0");
  const d = String(now.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}

export function displayStatus(camp: Camp, today = todayISO()): DisplayStatus {
  if (camp.end < today) return "past";
  return camp.status;
}

export function splitCamps(all: Camp[], today = todayISO()) {
  const sorted = [...all].sort((a, b) => a.start.localeCompare(b.start));
  return {
    upcoming: sorted.filter((c) => displayStatus(c, today) !== "past"),
    past: sorted.filter((c) => displayStatus(c, today) === "past").reverse(),
  };
}

const fmt = (iso: string, opts: Intl.DateTimeFormatOptions) =>
  new Date(`${iso}T12:00:00`).toLocaleDateString("en-US", opts);

/** "June 8–12, 2026" or "December 30, 2026 – January 3, 2027". */
export function formatRange(start: string, end: string) {
  const [sy, sm] = start.split("-");
  const [ey, em] = end.split("-");
  if (start === end) return fmt(start, { month: "long", day: "numeric", year: "numeric" });
  if (sy === ey && sm === em)
    return `${fmt(start, { month: "long", day: "numeric" })}–${fmt(end, { day: "numeric" })}, ${sy}`;
  if (sy === ey)
    return `${fmt(start, { month: "long", day: "numeric" })} – ${fmt(end, { month: "long", day: "numeric" })}, ${sy}`;
  return `${fmt(start, { month: "long", day: "numeric", year: "numeric" })} – ${fmt(end, { month: "long", day: "numeric", year: "numeric" })}`;
}
