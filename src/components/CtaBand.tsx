import { Button } from "./Button";
import { Sparkle, Teacup } from "./Doodles";

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
      <div className="relative overflow-hidden border-2 border-ink bg-ultramarine px-6 py-14 text-white shadow-[8px_8px_0_0_var(--color-ink)] sm:px-14">
        <Teacup className="absolute -right-4 bottom-2 h-28 w-32 text-white/25 sm:right-10" />
        <Sparkle className="absolute left-6 top-6 h-8 w-8 text-ochre" />
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
