import { Link } from "react-router-dom";
import { Brush, Palette, Users, Coffee, Landmark, PackageCheck, Sun, ChevronRight } from "lucide-react";
import { Button } from "../components/Button";
import { ArtImage } from "../components/ArtImage";
import { SectionHeading } from "../components/SectionHeading";
import { Gallery } from "../components/Gallery";
import { Testimonials } from "../components/Testimonials";
import { CtaBand } from "../components/CtaBand";
import { InstagramPanel } from "../components/InstagramPanel";
import { Arrow, Blob, Paintbrush, Sparkle, Squiggle, Teacup } from "../components/Doodles";
import { adultClasses, kidsClasses, mediums, teenClasses } from "../content/programs";
import { gallery } from "../content/gallery";
import { testimonials } from "../content/testimonials";
import { portrait } from "../content/about";

export default function Home() {
  return (
    <>
      <Hero />
      <QuickFacts />
      <Programs />
      <Studio />
      <section aria-labelledby="gallery-title" className="bg-paper-deep/60 py-24">
        <div className="container-page">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <SectionHeading
              id="gallery-title"
              eyebrow="On the studio wall"
              title="Made in Julie's classes"
              intro="Paint, paper, clay-like pulp and a lot of colour. A peek at what students make."
              underline="postbox"
            />
            <Button to="/gallery/" variant="ghost" arrow>
              See the full gallery
            </Button>
          </div>
          <div className="mt-14">
            <Gallery items={gallery.slice(0, 6)} />
          </div>
          <div className="mt-10">
            <InstagramPanel />
          </div>
        </div>
      </section>
      <MeetJulie />
      <Testimonials items={testimonials} />
      <CtaBand
        title="Find the right class for you (or your small artist)"
        body="Not sure which class fits? Send Julie a quick message with who it's for and she'll point you in the right direction."
        secondary={{ to: "/art-camps/", label: "See holiday camps", track: "view_program_click", trackLabel: "camps-cta" }}
      />
    </>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden" aria-labelledby="hero-title">
      <div className="container-page grid items-center gap-12 pb-20 pt-12 sm:pt-16 lg:grid-cols-[1.08fr_1fr] lg:gap-10 lg:pb-28">
        <div className="relative z-10">
          <p className="eyebrow">Art classes &amp; holiday camps · Taught by Julie V</p>
          <h1 id="hero-title" className="mt-5 text-[clamp(3rem,7.6vw,5.8rem)] leading-[0.98]">
            Make art.
            <br />
            Have <em className="text-navy" style={{ fontFamily: "var(--font-serif)" }}>fun.</em>
            <br />
            Stay for <em className="text-postbox" style={{ fontFamily: "var(--font-serif)" }}>tea.</em>
          </h1>
          <p className="mt-7 max-w-xl text-lg text-ink-soft sm:text-xl">
            Materials-included art classes for kids, teens and adults, and small holiday art camps where children paint,
            sculpt and learn about the artists who changed art history. Taught by Julie V, a London-born artist and former
            elementary school teacher.
          </p>
          <HeroChooser />
        </div>

        {/* Collage of artwork in postage-stamp frames */}
        <div className="relative mx-auto w-full max-w-[34rem] lg:max-w-none">
          <Blob className="absolute -left-8 top-6 h-[85%] w-[85%] text-sky/60" variant={1} />
          <Blob className="absolute -bottom-6 right-0 h-1/2 w-1/2 text-blush/70" variant={2} />
          <div className="relative grid grid-cols-6 gap-4">
            <figure className="relative col-span-4 col-start-1 rotate-[-2deg] stamp">
              <ArtImage
                placeholderLabel="a bright student painting, the hero image"
                alt="Brightly coloured student painting from Julie's art class"
                tone="postbox"
                ratio="4 / 5"
                labelPosition="top"
                priority
              />
            </figure>
            <figure className="relative col-span-3 col-start-4 -mt-40 rotate-[3deg] stamp sm:-mt-52">
              <ArtImage
                placeholderLabel="hands at work with papier-mâché"
                alt="A student shaping a papier-mâché sculpture"
                tone="mustard"
                ratio="1 / 1"
                priority
              />
            </figure>
          </div>
          <div className="absolute -bottom-10 left-2 flex rotate-[-3deg] items-center gap-2 sm:left-10">
            <Teacup className="h-14 w-16 text-racing" />
            <p className="hand max-w-[11rem] text-xl leading-tight text-racing">Camps end with afternoon tea!</p>
          </div>
          <Paintbrush className="absolute -right-2 -top-8 h-20 w-20 text-navy sm:-right-6" />
        </div>
      </div>
    </section>
  );
}

/** Three big, plainly worded choices so nobody has to hunt through a menu. */
function HeroChooser() {
  const choices = [
    { to: "/kids-art-classes/", icon: Brush, title: "After-school classes", sub: "For children and teens", color: "bg-postbox", label: "hero-kids" },
    { to: "/art-camps/", icon: Sun, title: "School holiday camps", sub: "Summer, spring and winter", color: "bg-racing", label: "hero-camps" },
    { to: "/adult-art-classes/", icon: Palette, title: "Classes for adults", sub: "Wednesday & Friday lunchtimes", color: "bg-navy", label: "hero-adults" },
  ];
  return (
    <nav aria-labelledby="chooser-title" className="mt-9 max-w-xl">
      <h2 id="chooser-title" className="font-serif text-xl font-bold" style={{ fontFamily: "var(--font-serif)" }}>
        What are you looking for?
      </h2>
      <ul className="mt-4 grid gap-3">
        {choices.map(({ to, icon: Icon, title, sub, color, label }) => (
          <li key={to}>
            <Link
              to={to}
              data-track="view_program_click"
              data-track-label={label}
              className="group flex min-h-[4.5rem] items-center gap-4 rounded-2xl border border-ink/15 bg-card p-3 pr-5 shadow-card transition hover:border-postbox"
            >
              <span className={`grid h-12 w-12 shrink-0 place-items-center rounded-full text-white ${color}`}>
                <Icon className="h-6 w-6" aria-hidden="true" />
              </span>
              <span className="flex-1">
                <span className="block text-[1.1rem] font-bold leading-tight">{title}</span>
                <span className="block text-[0.95rem] text-ink-soft">{sub}</span>
              </span>
              <ChevronRight className="h-6 w-6 shrink-0 text-postbox transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </Link>
          </li>
        ))}
      </ul>
      <p className="mt-4 text-[1rem] text-ink-soft">
        Not sure? <Link className="link-ink" to="/contact/">Send Julie a quick question</Link>
      </p>
    </nav>
  );
}

function QuickFacts() {
  const facts = [
    { icon: Users, text: "Kids, teens and adults" },
    { icon: PackageCheck, text: "All materials included" },
    { icon: Palette, text: "Camps capped at 8 artists" },
    { icon: Coffee, text: "Afternoon tea at camp" },
  ];
  return (
    <div className="border-y border-ink/15 bg-paper-deep">
      <ul className="container-page grid grid-cols-2 gap-x-6 gap-y-3 py-5 text-[0.98rem] font-semibold md:grid-cols-4">
        {facts.map(({ icon: Icon, text }) => (
          <li key={text} className="flex items-center gap-2.5">
            <Icon className="h-5 w-5 shrink-0 text-postbox" aria-hidden="true" />
            {text}
          </li>
        ))}
      </ul>
    </div>
  );
}

function Programs() {
  return (
    <section aria-labelledby="programs-title" className="container-page py-24">
      <SectionHeading
        id="programs-title"
        eyebrow="Classes & camps"
        title="Pick your way in"
        intro="Weekly classes in four- and five-week sessions, and week-long art camps in the school breaks."
      />

      <div className="mt-16 grid gap-16 lg:gap-20">
        {/* Kids' classes */}
        <article className="grid items-center gap-8 md:grid-cols-[5fr_6fr] md:gap-14">
          <div className="relative">
            <Squiggle className="absolute -left-3 -top-6 h-5 w-28 text-postbox" />
            <ArtImage
              placeholderLabel="children painting at the studio table"
              alt="Children painting together around the studio table"
              tone="postbox"
              ratio="4 / 3"
              className="border border-ink/20"
            />
          </div>
          <div>
            <p className="eyebrow text-postbox">For children · after school</p>
            <h3 className="mt-2 text-4xl">{kidsClasses.name}</h3>
            <p className="mt-4 text-lg text-ink-soft">{kidsClasses.summary}</p>
            <p className="mt-4 font-semibold">Monday to Thursday, 4:00–5:30pm · {kidsClasses.priceFrom}</p>
            <p className="mt-2 text-ink-soft">
              Older and more serious young artists can join the{" "}
              <Link to={teenClasses.path} className="link-ink">teen classes</Link> (ages 13 to 19).
            </p>
            <div className="mt-6">
              <Button to={kidsClasses.path} arrow track="view_program_click" trackLabel="home-kids">
                Explore kids' classes
              </Button>
            </div>
          </div>
        </article>

        {/* Camps */}
        <article className="relative grid items-center gap-8 border border-ink/20 bg-card p-6 shadow-card sm:p-10 md:grid-cols-[6fr_5fr] md:gap-14 rounded-2xl overflow-hidden">
          <div className="md:order-2">
            <ArtImage
              placeholderLabel="campers having afternoon tea in the garden"
              alt="Art campers sharing afternoon tea in the garden"
              tone="racing"
              ratio="5 / 4"
            />
          </div>
          <div>
            <p className="eyebrow text-racing">Summer · Spring · Winter breaks</p>
            <h3 className="mt-2 text-4xl">Holiday Art Camps</h3>
            <p className="mt-4 text-lg text-ink-soft">
              A small group (no more than eight), a week of different projects, stories about influential artists, lunch in
              the garden and afternoon tea to finish. Camps have been for ages 7 and up.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-5">
              <Button to="/art-camps/" variant="ink" arrow track="view_program_click" trackLabel="home-camps">
                Find a camp
              </Button>
            </div>
          </div>
        </article>

        {/* Adults */}
        <article className="grid items-center gap-8 md:grid-cols-[5fr_6fr] md:gap-14">
          <div className="relative">
            <ArtImage
              placeholderLabel="adult students painting at lunchtime"
              alt="Adult students painting during a lunchtime class"
              tone="navy"
              ratio="4 / 3"
              className="border border-ink/20"
            />
            <Arrow className="absolute -right-6 -top-12 hidden h-14 w-20 rotate-12 text-navy md:block" />
          </div>
          <div>
            <p className="eyebrow text-navy">For grown-ups · Wednesdays & Fridays</p>
            <h3 className="mt-2 text-4xl">{adultClasses.name}</h3>
            <p className="mt-4 text-lg text-ink-soft">{adultClasses.summary}</p>
            <p className="mt-4 font-semibold">12:00–2:30pm · {adultClasses.priceFrom}</p>
            <div className="mt-6">
              <Button to={adultClasses.path} variant="secondary" arrow track="view_program_click" trackLabel="home-adults">
                Explore adult classes
              </Button>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}

function Studio() {
  const reasons = [
    {
      icon: Brush,
      title: "Lots of different materials",
      body: "Painting, drawing, collage, mosaics, papier-mâché and 3D sculpture, so there's always something new to try.",
    },
    {
      icon: Landmark,
      title: "Meet the greats",
      body: "At camp, projects come with stories of influential artists and the art history they changed.",
    },
    {
      icon: Users,
      title: "Small groups",
      body: "Camps take up to eight artists, so there's room at the table and time for everyone.",
    },
    {
      icon: Coffee,
      title: "A very British finish",
      body: "Camp days end with afternoon tea in the garden. Julie grew up in London, after all.",
    },
  ];
  return (
    <section aria-labelledby="studio-title" className="relative border-t border-ink/15 bg-racing py-24 text-paper">
      <Sparkle className="absolute right-[10%] top-14 h-10 w-10 text-mustard" />
      <div className="container-page grid gap-14 lg:grid-cols-[1fr_1.25fr]">
        <div>
          <p className="eyebrow text-paper/80">Inside the studio</p>
          <h2 id="studio-title" className="mt-3 text-4xl text-paper sm:text-5xl">
            Proper art, taught by a <span className="italic text-mustard">real</span> teacher
          </h2>
          <p className="mt-6 max-w-md text-lg text-paper/90">
            Julie spent thirteen years teaching in a London elementary school before moving to California, where she has been
            teaching and making art ever since.
          </p>
          <ul className="mt-8 flex flex-wrap gap-2.5" aria-label="Art mediums">
            {mediums.map((m) => (
              <li key={m.name} className="rounded-full border-2 border-paper/80 px-4 py-1.5 text-sm font-semibold">
                {m.name}
              </li>
            ))}
          </ul>
        </div>
        <ul className="grid gap-x-10 gap-y-10 sm:grid-cols-2">
          {reasons.map(({ icon: Icon, title, body }) => (
            <li key={title}>
              <Icon className="h-8 w-8 text-mustard" aria-hidden="true" />
              <h3 className="mt-3 text-2xl text-paper">{title}</h3>
              <p className="mt-2 text-paper/85">{body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function MeetJulie() {
  return (
    <section aria-labelledby="julie-title" className="container-page py-24">
      <div className="grid items-center gap-14 md:grid-cols-[2fr_3fr]">
        <figure className="relative mx-auto w-full max-w-sm rotate-[-1.5deg]">
          <div className="stamp">
            <ArtImage src={portrait.src} alt={portrait.alt} placeholderLabel="a portrait of Julie in her studio" tone="blush" ratio="4 / 5" />
          </div>
          <figcaption className="hand mt-3 text-center text-2xl text-ink-soft">Julie V, in the studio</figcaption>
        </figure>
        <div>
          <SectionHeading id="julie-title" eyebrow="Meet your teacher" title="Hello, I'm Julie" underline="postbox" />
          <div className="prose-julie mt-8 max-w-xl text-lg text-ink-soft">
            <p>
              Julie van Herwerden grew up in London in a family of creatives: her father designed productions and costumes
              for theatre, television and film, and her mother was an actress.
            </p>
            <p>
              She taught elementary school in London for thirteen years, moved to California in 1992, painted whimsical
              furniture, co-owned an artists' co-operative, and has been teaching and tutoring ever since. Today her weekly
              classes and holiday camps are where all of that comes together.
            </p>
          </div>
          <div className="mt-8">
            <Button to="/about/" variant="ghost" arrow>
              Read Julie's story
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
