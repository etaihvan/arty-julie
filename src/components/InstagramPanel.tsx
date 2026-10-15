import { Instagram } from "./InstagramIcon";
import { site } from "../content/site";
import { Button } from "./Button";
import { Arrow } from "./Doodles";

/** A link to the real Instagram profile. No embed, so it never breaks or slows the page. */
export function InstagramPanel() {
  return (
    <div className="relative flex flex-col items-start gap-6 border-2 border-ink bg-rose/40 p-8 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <p className="hand text-2xl text-vermilion">The newest work is on the wall… and on Instagram</p>
        <p className="mt-1 max-w-xl text-ink-soft">
          Julie posts examples of her students' artwork at <span className="font-semibold text-ink">@{site.social.instagramHandle}</span>.
        </p>
      </div>
      <Arrow className="absolute -top-10 right-40 hidden h-12 w-16 text-vermilion md:block" />
      <Button to={site.social.instagramUrl} variant="secondary" className="shrink-0">
        <Instagram className="h-5 w-5" aria-hidden="true" /> See @{site.social.instagramHandle}
      </Button>
    </div>
  );
}
