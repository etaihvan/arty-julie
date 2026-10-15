import type { ReactNode } from "react";
import { ArtImage } from "./ArtImage";
import { Blob } from "./Doodles";
import type { Tone } from "../content/gallery";

type Props = {
  eyebrow: string;
  title: ReactNode;
  intro: ReactNode;
  actions?: ReactNode;
  image: { label: string; alt: string; src?: string; tone: Tone };
  blob?: string;
};

/** Top-of-page hero for inner pages: headline left, taped photo right. */
export function PageHero({ eyebrow, title, intro, actions, image, blob = "text-blush/50" }: Props) {
  return (
    <section className="overflow-hidden border-b border-ink/15">
      <div className="container-page grid items-center gap-12 py-14 sm:py-20 lg:grid-cols-[1.25fr_1fr]">
        <div>
          <p className="eyebrow">{eyebrow}</p>
          <h1 className="mt-3 text-[clamp(2.6rem,6vw,4.6rem)] font-semibold leading-[1.02]">{title}</h1>
          <div className="mt-6 max-w-xl text-lg text-ink-soft sm:text-xl">{intro}</div>
          {actions && <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:flex-wrap">{actions}</div>}
        </div>
        <div className="relative mx-auto w-full max-w-md">
          <Blob className={`absolute -inset-6 h-[calc(100%+3rem)] w-[calc(100%+3rem)] ${blob}`} variant={2} />
          <figure className="relative rotate-[1.5deg] stamp">
            <ArtImage src={image.src} alt={image.alt} placeholderLabel={image.label} tone={image.tone} ratio="5 / 4" priority />
          </figure>
        </div>
      </div>
    </section>
  );
}
