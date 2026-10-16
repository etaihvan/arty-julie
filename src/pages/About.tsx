import { Button } from "../components/Button";
import { ArtImage } from "../components/ArtImage";
import { SectionHeading } from "../components/SectionHeading";
import { CtaBand } from "../components/CtaBand";
import { Sparkle, Teacup } from "../components/Doodles";
import { portrait, timeline } from "../content/about";

export default function About() {
  return (
    <>
      <section className="border-b border-ink/15">
        <div className="container-page grid items-center gap-14 py-16 sm:py-20 lg:grid-cols-[1fr_1.3fr]">
          <figure className="relative mx-auto w-full max-w-sm rotate-[-2deg]">
            <div className="stamp">
              <ArtImage src={portrait.src} alt={portrait.alt} placeholderLabel="a portrait of Julie" tone="blush" ratio="4 / 5" priority />
            </div>
            <figcaption className="hand mt-3 text-center text-2xl text-ink-soft">Julie van Herwerden</figcaption>
          </figure>
          <div>
            <p className="eyebrow">About Julie</p>
            <h1 className="mt-3 text-[clamp(2.6rem,6vw,4.6rem)] font-semibold leading-[1.02]">
              From a London classroom to a <span className="italic text-postbox">California</span> studio
            </h1>
            <div className="prose-julie mt-7 max-w-xl text-lg text-ink-soft">
              <p>
                Julie V was born in London into a family of creatives: her father designed productions and costumes for
                theatre, television and film, and her mother was an actress.
              </p>
              <p>
                After thirteen years teaching elementary school in London, she moved to California in 1992. Since then she's
                painted furniture, co-owned an artists' co-operative, written books with schoolchildren and tutored privately.
                Now she shares all of it through her art classes and camps.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section aria-labelledby="story-title" className="container-page py-20">
        <SectionHeading id="story-title" eyebrow="Julie's story" title="A creative life, so far" underline="postbox" />
        <ol className="relative mt-14 border-l-[3px] border-dashed border-ink/40 pl-8 sm:pl-12">
          {timeline.map((t, i) => (
            <li key={t.title} className="relative pb-12 last:pb-0">
              <span
                aria-hidden="true"
                className={`absolute -left-[2.85rem] top-1 h-6 w-6 rounded-full border border-ink/20 sm:-left-[3.85rem] ${
                  ["bg-postbox", "bg-mustard", "bg-navy", "bg-racing", "bg-blush"][i % 5]
                }`}
              />
              <p className="hand text-2xl text-postbox">{t.when}</p>
              <h3 className="mt-1 text-2xl sm:text-3xl">{t.title}</h3>
              <p className="mt-2 max-w-2xl text-lg text-ink-soft">{t.body}</p>
            </li>
          ))}
        </ol>
      </section>

      <section aria-labelledby="tea-title" className="border-y border-ink/15 bg-racing py-20 text-paper">
        <div className="container-page grid items-center gap-10 md:grid-cols-[auto_1fr]">
          <Teacup className="h-32 w-36 text-mustard" />
          <div>
            <h2 id="tea-title" className="text-4xl text-paper">
              Why afternoon tea? <Sparkle className="inline h-7 w-7 -translate-y-1 text-mustard" />
            </h2>
            <p className="mt-4 max-w-2xl text-lg text-paper/90">
              Julie's camps finish each day with afternoon tea in the garden. It's a little bit of London, served up in a
              California art studio.
            </p>
          </div>
        </div>
      </section>

      <section className="container-page py-16 text-center">
        <p className="hand text-3xl text-ink-soft">Come and make something with Julie</p>
        <div className="mt-6 flex flex-col justify-center gap-4 sm:flex-row">
          <Button to="/kids-art-classes/" track="view_program_click" trackLabel="about-kids">Kids & teens</Button>
          <Button to="/art-camps/" variant="ink" track="view_program_click" trackLabel="about-camps">Art camps</Button>
          <Button to="/adult-art-classes/" variant="secondary" track="view_program_click" trackLabel="about-adults">Adults</Button>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
