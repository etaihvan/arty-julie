import { Link } from "react-router-dom";
import { Button } from "../components/Button";
import { PageHero } from "../components/PageHero";
import { FactsTable } from "../components/FactsTable";
import { SectionHeading } from "../components/SectionHeading";
import { Steps } from "../components/Steps";
import { FaqList } from "../components/FaqList";
import { CtaBand } from "../components/CtaBand";
import { ArtImage } from "../components/ArtImage";
import { InstagramPanel } from "../components/InstagramPanel";
import { Sparkle } from "../components/Doodles";
import { kidsClasses, teenClasses } from "../content/programs";
import { kidsFaqs } from "../content/faqs";
import { site } from "../content/site";

export default function KidsClasses() {
  return (
    <>
      <PageHero
        eyebrow="Kids' & teen art classes"
        title={
          <>
            After school, <span className="italic text-postbox">paint</span> o'clock.
          </>
        }
        intro={
          <p>
            Weekly art classes in four-week sessions, Monday to Thursday afternoons. Every class includes the
            materials and a snack, so all your child needs to bring is their ideas.
          </p>
        }
        actions={
          <>
            <Button to="/contact/?program=kids" arrow track="register_click" trackLabel="kids-hero">
              Check class availability
            </Button>
            <Button to="#teens" variant="secondary">Teen classes (13–19)</Button>
          </>
        }
        image={{ src: "/images/kids-focus.jpg", label: "a child painting in class", alt: "A boy concentrating on his painting at the studio table, with paintings on the wall behind him", tone: "postbox", ratio: "4 / 5" }}
      />

      <section aria-labelledby="kids-glance" className="container-page grid gap-14 py-20 lg:grid-cols-[1fr_1.1fr]">
        <div>
          <SectionHeading id="kids-glance" eyebrow="For parents" title="The practical bits" underline="postbox" />
          <div className="prose-julie mt-8 max-w-lg text-lg text-ink-soft">
            <p>
              Each class is an hour and a half of making, with a teacher who spent thirteen years in an elementary school
              classroom.
            </p>
            <p>
              Places depend on availability, so get in touch with Julie to confirm which days have room before you pay.
            </p>
            <p>
              Curious what they make? Julie shares her students' artwork on{" "}
              <a href={site.social.instagramUrl} target="_blank" rel="noopener noreferrer">
                Instagram<span className="sr-only"> (opens in a new tab)</span>
              </a>{" "}
              and in the <Link to="/gallery/">gallery</Link>.
            </p>
          </div>
        </div>
        <FactsTable caption="Kids' classes at a glance" facts={kidsClasses.facts} />
      </section>

      <section aria-labelledby="kids-signup" className="border-y border-ink/15 bg-paper-deep/70 py-20">
        <div className="container-page">
          <SectionHeading id="kids-signup" eyebrow="Signing up" title="Three easy steps" />
          <div className="mt-14">
            <Steps
              steps={[
                {
                  title: "Check availability",
                  body: (
                    <p>
                      <Link className="link-ink" to="/contact/?program=kids">Send Julie a message</Link> or{" "}
                      <a className="link-ink" href={`mailto:${site.contact.email}`}>email her</a> to find a day with
                      space.
                    </p>
                  ),
                },
                {
                  title: "Fill in two forms",
                  body: (
                    <p>
                      Complete the{" "}
                      <a className="link-ink" href={site.forms.application} target="_blank" rel="noopener noreferrer">application</a> and{" "}
                      <a className="link-ink" href={site.forms.release} target="_blank" rel="noopener noreferrer">release form</a> (PDFs).
                    </p>
                  ),
                },
                {
                  title: "Pay for the session",
                  body: <p>Payment is due before the session starts, by Venmo ({site.payment.venmo}) or PayPal.</p>,
                },
              ]}
            />
          </div>
        </div>
      </section>

      <section id="teens" tabIndex={-1} aria-labelledby="teens-title" className="container-page scroll-mt-28 py-24 outline-none">
        <div className="grid items-start gap-14 lg:grid-cols-[1fr_1.1fr]">
          <div>
            <p className="hand text-3xl text-navy">
              For ages 13 to 19 <Sparkle className="inline h-6 w-6 -translate-y-1 text-mustard" />
            </p>
            <h2 id="teens-title" className="mt-2 text-4xl sm:text-5xl">{teenClasses.name}</h2>
            <p className="mt-6 max-w-lg text-lg text-ink-soft">
              For teens who are serious about going to art college, or who simply want to develop their own artistic voice.
              Sessions focus on building a portfolio (which art colleges ask for), alongside painting, still-life drawing and
              ongoing projects.
            </p>
            <div className="mt-8 max-w-md">
              <ArtImage
                src="/images/gallery/portrait-gold-frame.jpg"
                placeholderLabel="a teen's still-life drawing"
                alt="A painted figure on a turquoise background inside a wide hand-painted gold and black patterned border"
                tone="navy"
                ratio="4 / 5"
                className="border border-ink/20"
              />
            </div>
            <div className="mt-8">
              <Button to="/contact/?program=teens" variant="ink" arrow track="register_click" trackLabel="teens">
                Ask about teen classes
              </Button>
            </div>
          </div>
          <FactsTable caption="Teen classes at a glance" facts={teenClasses.facts} />
        </div>
      </section>

      <section aria-labelledby="kids-faq" className="container-page grid gap-12 py-12 lg:grid-cols-[1fr_1.6fr]">
        <SectionHeading id="kids-faq" eyebrow="Questions" title="Parents often ask" />
        <FaqList faqs={kidsFaqs} />
      </section>

      <div className="container-page py-12">
        <InstagramPanel />
      </div>

      <CtaBand
        title="Got a little artist at home?"
        body="Ask Julie which day has space and which class suits your child."
        primary={{ to: "/contact/?program=kids", label: "Check class availability", track: "register_click", trackLabel: "kids-cta" }}
        secondary={{ to: "/art-camps/", label: "Or see holiday camps", track: "view_program_click", trackLabel: "kids-to-camps" }}
      />
    </>
  );
}
