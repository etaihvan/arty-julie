import { Clock, Sandwich, Palette, CalendarRange } from "lucide-react";
import { Button } from "../components/Button";
import { FactsTable } from "../components/FactsTable";
import { SectionHeading } from "../components/SectionHeading";
import { FaqList } from "../components/FaqList";
import { CtaBand } from "../components/CtaBand";
import { ArtImage } from "../components/ArtImage";
import { Paintbrush } from "../components/Doodles";
import { adultClasses, mediums } from "../content/programs";
import { adultFaqs } from "../content/faqs";
import { site } from "../content/site";

/**
 * Deliberately different in mood from the kids' pages: deeper navy,
 * calmer layout, copy written to grown-ups.
 */
export default function AdultClasses() {
  const points = [
    { icon: CalendarRange, title: "Wednesdays & Fridays", body: "Four-week sessions that fit into a working week." },
    { icon: Clock, title: "12:00 to 2:30pm", body: "Two and a half hours: long enough to really get absorbed." },
    { icon: Sandwich, title: "Lunch is welcome", body: "It's lunchtime, so bring food and drinks to the table." },
    { icon: Palette, title: "Materials provided", body: "Everything you need is included in the session price." },
  ];
  return (
    <>
      <section className="relative overflow-hidden border-b border-ink/15 bg-navy text-paper">
        <div className="container-page grid items-center gap-12 py-16 sm:py-24 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <p className="eyebrow text-paper/80">Adult art classes</p>
            <h1 className="mt-3 text-[clamp(2.6rem,6vw,4.8rem)] font-semibold leading-[1.02] text-paper">
              A long lunch,{" "}
              <span className="relative inline-block italic text-mustard">
                with paint.
              </span>
            </h1>
            <p className="mt-7 max-w-xl text-lg text-paper/90 sm:text-xl">
              Midday art classes for grown-ups on Wednesdays and Fridays. Two and a half unhurried hours in the studio, with
              the materials provided and your lunch welcome at the table.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Button to="/contact/?program=adults" arrow track="register_click" trackLabel="adults-hero">
                Ask about joining
              </Button>
              <Button to="#adult-details" variant="secondary">Class details</Button>
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-md">
            <Paintbrush className="absolute -left-10 -top-10 h-20 w-20 text-mustard" />
            <figure className="relative rotate-[-1.5deg] stamp">
              <ArtImage
                placeholderLabel="an adult student's painting in progress"
                alt="An adult student's painting in progress on the studio table"
                tone="navy"
                ratio="4 / 5"
                priority
              />
            </figure>
          </div>
        </div>
      </section>

      <section aria-labelledby="adult-why" className="container-page py-20">
        <SectionHeading
          id="adult-why"
          eyebrow="Why grown-ups come"
          title="Time that's just for you"
          intro="You bring your lunch; Julie brings the materials. All that's left is to make something."
          underline="navy"
        />
        <ul className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {points.map(({ icon: Icon, title, body }) => (
            <li key={title}>
              <span className="grid h-14 w-14 place-items-center rounded-full border border-ink/20 bg-blush/60">
                <Icon className="h-6 w-6" aria-hidden="true" />
              </span>
              <h3 className="mt-4 text-2xl">{title}</h3>
              <p className="mt-2 text-ink-soft">{body}</p>
            </li>
          ))}
        </ul>
      </section>

      <section id="adult-details" tabIndex={-1} aria-labelledby="adult-glance" className="scroll-mt-28 border-y border-ink/15 bg-paper-deep/70 py-20 outline-none">
        <div className="container-page grid gap-14 lg:grid-cols-[1fr_1.1fr]">
          <div>
            <SectionHeading id="adult-glance" eyebrow="The details" title="How the classes work" />
            <div className="prose-julie mt-8 max-w-lg text-lg text-ink-soft">
              <p>
                Classes run in four-week sessions. Make-ups are offered for illness or emergencies, and there are no classes on
                school holidays.
              </p>
              <p>
                At her camps Julie teaches painting, drawing, collage, mosaics, papier-mâché and sculpture. If there's a
                medium you'd love to try, mention it when you get in touch.
              </p>
              <p>
                Questions first? Email Julie at{" "}
                <a href={`mailto:${site.contact.email}`}>{site.contact.email}</a>.
              </p>
            </div>
            <ul className="mt-8 flex flex-wrap gap-2" aria-label="Mediums Julie teaches">
              {mediums.map((m) => (
                <li key={m.name} className="rounded-full border border-ink/20 px-3.5 py-1 text-sm font-semibold">{m.name}</li>
              ))}
            </ul>
          </div>
          <FactsTable caption="Adult classes at a glance" facts={adultClasses.facts} />
        </div>
      </section>

      <section aria-labelledby="adult-faq" className="container-page grid gap-12 py-20 lg:grid-cols-[1fr_1.6fr]">
        <SectionHeading id="adult-faq" eyebrow="Questions" title="Before you join" />
        <FaqList faqs={adultFaqs} />
      </section>

      <CtaBand
        title="Save yourself a seat at the table"
        body="Tell Julie which day you'd prefer and a little about what you'd like to make."
        primary={{ to: "/contact/?program=adults", label: "Ask about joining", track: "register_click", trackLabel: "adults-cta" }}
      />
    </>
  );
}
