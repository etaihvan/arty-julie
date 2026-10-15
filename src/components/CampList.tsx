import { CalendarDays, Clock, Users, Tag, Sparkles } from "lucide-react";
import type { Camp } from "../content/camps";
import { displayStatus, formatRange, splitCamps, type DisplayStatus } from "../lib/camps";
import { Button } from "./Button";

const statusInfo: Record<DisplayStatus, { label: string; cls: string }> = {
  open: { label: "Registration open", cls: "bg-garden text-white" },
  "coming-soon": { label: "Registration opens soon", cls: "bg-ochre text-ink" },
  full: { label: "Full", cls: "bg-ink text-paper" },
  past: { label: "Past camp", cls: "bg-paper-deep text-ink-soft border border-line" },
};

const seasonColor: Record<Camp["season"], string> = {
  Summer: "bg-ochre",
  Winter: "bg-ultramarine",
  Spring: "bg-garden",
};

export function StatusBadge({ status }: { status: DisplayStatus }) {
  const s = statusInfo[status];
  return (
    <span className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wider ${s.cls}`}>
      {s.label}
    </span>
  );
}

function CampCard({ camp }: { camp: Camp }) {
  const status = displayStatus(camp);
  const registerTo = camp.registerUrl ?? `/contact/?program=camp&camp=${encodeURIComponent(camp.title)}`;
  return (
    <article className="relative flex flex-col border-2 border-ink bg-card shadow-[6px_6px_0_0_var(--color-ink)]">
      <div className={`h-3 ${seasonColor[camp.season]}`} aria-hidden="true" />
      <div className="flex flex-1 flex-col p-6">
        <div className="mb-3"><StatusBadge status={status} /></div>
        <h3 className="text-2xl">{camp.title}</h3>
        {camp.theme && <p className="mt-1 hand text-2xl text-vermilion">{camp.theme}</p>}
        <dl className="mt-4 grid gap-2 text-[0.98rem]">
          <Row icon={CalendarDays} label="Dates" value={formatRange(camp.start, camp.end)} />
          {camp.hours && <Row icon={Clock} label="Hours" value={camp.hours} />}
          {camp.ages && <Row icon={Sparkles} label="Ages" value={camp.ages} />}
          {camp.capacity && <Row icon={Users} label="Group size" value={camp.capacity} />}
          {camp.price && <Row icon={Tag} label="Price" value={camp.price} />}
        </dl>
        {camp.description && <p className="mt-4 text-ink-soft">{camp.description}</p>}
        <div className="mt-auto pt-6">
          {status === "open" && (
            <Button to={registerTo} className="w-full" arrow track="register_click" trackLabel={camp.id}>
              Book a place
            </Button>
          )}
          {status === "coming-soon" && (
            <Button to={`/contact/?program=camp&camp=${encodeURIComponent(camp.title)}`} variant="secondary" className="w-full" track="register_click" trackLabel={`${camp.id}-interest`}>
              Ask to be told when it opens
            </Button>
          )}
          {status === "full" && (
            <Button to={`/contact/?program=camp&camp=${encodeURIComponent(camp.title)}`} variant="secondary" className="w-full" track="register_click" trackLabel={`${camp.id}-waitlist`}>
              Ask about the waiting list
            </Button>
          )}
        </div>
      </div>
    </article>
  );
}

function Row({ icon: Icon, label, value }: { icon: typeof Clock; label: string; value: string }) {
  return (
    <div className="flex items-start gap-2.5">
      <Icon className="mt-1 h-4 w-4 shrink-0 text-vermilion" aria-hidden="true" />
      <dt className="sr-only">{label}</dt>
      <dd>{value}</dd>
    </div>
  );
}

export function UpcomingCamps({ camps }: { camps: Camp[] }) {
  const { upcoming } = splitCamps(camps);
  if (upcoming.length === 0) {
    return (
      <div className="relative border-2 border-dashed border-ink/50 bg-card/70 p-8 sm:p-10">
        <p className="hand text-3xl text-vermilion">Fresh paint drying…</p>
        <h3 className="mt-2 text-3xl">New camp dates haven't been announced yet</h3>
        <p className="mt-3 max-w-xl text-ink-soft">
          Julie runs camps in the summer, spring and winter school breaks. Send a quick note and she'll let you know as soon
          as the next dates are set.
        </p>
        <div className="mt-6 flex flex-wrap gap-4">
          <Button to="/contact/?program=camp" arrow track="register_click" trackLabel="camp-interest">
            Hear about the next camp
          </Button>
        </div>
      </div>
    );
  }
  return (
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {upcoming.map((c) => (
        <CampCard key={c.id} camp={c} />
      ))}
    </div>
  );
}

export function PastCamps({ camps }: { camps: Camp[] }) {
  const { past } = splitCamps(camps);
  if (past.length === 0) return null;
  return (
    <div className="overflow-x-auto border-2 border-ink bg-card">
      <table className="w-full min-w-[34rem] text-left text-[0.95rem]">
        <caption className="sr-only">Past camps, for reference</caption>
        <thead className="border-b-2 border-ink bg-paper-deep">
          <tr>
            <th scope="col" className="px-4 py-3">Camp</th>
            <th scope="col" className="px-4 py-3">Dates</th>
            <th scope="col" className="px-4 py-3">Ages</th>
            <th scope="col" className="px-4 py-3">Price</th>
          </tr>
        </thead>
        <tbody>
          {past.map((c) => (
            <tr key={c.id} className="border-b border-line last:border-0 text-ink-soft">
              <th scope="row" className="px-4 py-3 font-semibold text-ink">{c.title}</th>
              <td className="px-4 py-3">{formatRange(c.start, c.end)}</td>
              <td className="px-4 py-3">{c.ages ?? "–"}</td>
              <td className="px-4 py-3">{c.price ?? "–"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
