import type { Testimonial } from "../content/testimonials";
import { SectionHeading } from "./SectionHeading";

/** Renders nothing until real testimonials are added in content/testimonials.ts. */
export function Testimonials({ items }: { items: Testimonial[] }) {
  if (items.length === 0) return null;
  return (
    <section aria-labelledby="kind-words" className="container-page py-20">
      <SectionHeading id="kind-words" eyebrow="Kind words" title="From families and students" />
      <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {items.map((t) => (
          <figure key={t.quote} className="border-l-4 border-postbox bg-card p-6">
            <blockquote className="font-display text-xl leading-snug">“{t.quote}”</blockquote>
            <figcaption className="mt-4 text-sm text-ink-soft">
              <span className="font-semibold text-ink">{t.name}</span>
              {t.detail && <>, {t.detail}</>}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
