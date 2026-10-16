import { Button } from "./Button";
import { Sparkle, Teacup } from "./Doodles";
import { PaintStrip, PrintFrond } from "./PrintMotifs";

type Props = {
  title?: string;
  body?: string;
  primary?: { to: string; label: string; track?: string; trackLabel?: string };
  secondary?: { to: string; label: string; track?: string; trackLabel?: string };
};

/** The consistent "next step" at the bottom of every page. */
export function CtaBand({
  title = "Ready to make something?",
  body = "Tell Julie who the class is for and she'll get back to you with availability and next steps.",
  primary = { to: "/contact/", label: "Ask Julie about a place", track: "register_click", trackLabel: "cta-band" },
  secondary,
}: Props) {
  return (
    <section className="container-page py-16" aria-labelledby="cta-title">
      <div className="relative overflow-hidden border border-ink/20 bg-navy px-6 py-14 text-white shadow-card sm:px-14 rounded-2xl">
        <PaintStrip className="absolute inset-x-0 top-0 h-3" />
        <PrintFrond className="absolute -bottom-6 right-36 hidden h-32 w-32 rotate-12 text-mustard/30 md:block" />
        <Teacup className="absolute -right-4 bottom-2 h-28 w-32 text-white/25 sm:right-10" />
        <Sparkle className="absolute left-6 top-6 h-8 w-8 text-mustard" />
        <h2 id="cta-title" className="max-w-2xl text-4xl sm:text-5xl">{title}</h2>
        <p className="mt-4 max-w-xl text-lg text-white/90">{body}</p>
        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
          <Button to={primary.to} arrow track={primary.track} trackLabel={primary.trackLabel}>
            {primary.label}
          </Button>
          {secondary && (
            <Button to={secondary.to} variant="secondary" track={secondary.track} trackLabel={secondary.trackLabel}>
              {secondary.label}
            </Button>
          )}
        </div>
      </div>
    </section>
  );
}
