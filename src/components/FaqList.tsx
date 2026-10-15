import { Plus } from "lucide-react";
import type { Faq } from "../content/faqs";

/** Native <details> accordions: accessible and no JavaScript required. */
export function FaqList({ faqs }: { faqs: Faq[] }) {
  return (
    <div className="divide-y-2 divide-ink/15 border-y-2 border-ink">
      {faqs.map((f) => (
        <details key={f.q} className="group py-1">
          <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-4 py-3 font-display text-xl font-medium [&::-webkit-details-marker]:hidden">
            {f.q}
            <Plus
              className="h-6 w-6 shrink-0 text-vermilion transition-transform duration-200 group-open:rotate-45"
              aria-hidden="true"
            />
          </summary>
          <p className="pb-5 pr-10 text-ink-soft">{f.a}</p>
        </details>
      ))}
    </div>
  );
}
