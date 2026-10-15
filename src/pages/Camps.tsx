import { Link } from "react-router-dom";
import { CalendarCheck, Palette, Users, Coffee, PackageCheck, Home as HomeIcon } from "lucide-react";
import { Button } from "../components/Button";
import { PageHero } from "../components/PageHero";
import { SectionHeading } from "../components/SectionHeading";
import { UpcomingCamps, PastCamps, StatusBadge } from "../components/CampList";
import { Steps } from "../components/Steps";
import { FaqList } from "../components/FaqList";
import { CtaBand } from "../components/CtaBand";
import { Teacup } from "../components/Doodles";
import { campDetails, camps } from "../content/camps";
import { mediums } from "../content/programs";
import { campFaqs } from "../content/faqs";
import { site } from "../content/site";

export default function Camps() {
  const details = [
    { icon: CalendarCheck, label: "When", value: campDetails.seasons },
    { icon: Users, label: "Who", value: `Ages ${campDetails.ages}. ${campDetails.groupSize}.` },
    { icon: PackageCheck, label: "Included", value: campDetails.included },
    { icon: HomeIcon, label: "Where", value: campDetails.setting },
  ];
  return (
    <>
      <PageHero
        eyebrow="Kids' art camps"
        title={
          <>
            A week of making, with <span className="italic text-garden">tea</span> in the garden.
          </>
        }
        intro={
          <p>
            Small holiday art camps in Julie's studio during the summer, spring and winter breaks. Campers work across lots of
            mediums, learn about influential artists, and finish each day with afternoon tea.
          </p>
        }
        actions={
          <Button to="#upcoming" arrow track="view_program_click" trackLabel="camps-hero">
            Find a camp
          </Button>
        }
        image={{ label: "campers working on a group project", alt: "Art campers working together on a project", tone: "garden" }}
        blob="text-garden/25"
      />

      <section id="upcoming" tabIndex={-1} aria-labelledby="upcoming-title" className="container-page scroll-mt-28 py-20 outline-none">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading id="upcoming-title" eyebrow="Dates & booking" title="Upcoming camps" underline="garden" />
          <ul className="flex flex-wrap gap-2" aria-label="What the labels mean">
            <li><StatusBadge status="open" /></li>
            <li><StatusBadge status="coming-soon" /></li>
            <li><StatusBadge status="full" /></li>
          </ul>
        </div>
        <div className="mt-12">
          <UpcomingCamps camps={camps} />
        </div>
      </section>

      <section aria-labelledby="day-title" className="border-y-2 border-ink bg-garden py-20 text-paper">
        <div className="container-page grid gap-14 lg:grid-cols-[1fr_1.2fr]">
          <div className="relative">
            <p className="eyebrow text-paper/80">What campers make</p>
            <h2 id="day-title" className="mt-3 text-4xl text-paper sm:text-5xl">Paint, paper, pulp and art history</h2>
            <p className="mt-6 max-w-md text-lg text-paper/90">
              Students make their own artwork across lots of mediums, learn core techniques and the principles of visual
              art, and hear about the artists and periods that shaped art history.
            </p>
            <Teacup className="mt-10 h-24 w-28 text-ochre" />
          </div>
          <ul className="grid gap-px overflow-hidden border-2 border-paper/70 bg-paper/40 sm:grid-cols-2">
            {mediums.map((m) => (
              <li key={m.name} className="bg-garden p-6">
                <Palette className="h-6 w-6 text-ochre" aria-hidden="true" />
                <h3 className="mt-3 text-2xl text-paper">{m.name}</h3>
                <p className="mt-1 text-paper/85">{m.detail}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section aria-labelledby="details-title" className="container-page py-20">
        <SectionHeading id="details-title" eyebrow="Good to know" title="Camp details" />
        <dl className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {details.map(({ icon: Icon, label, value }) => (
            <div key={label} className="border-t-4 border-ink pt-4">
              <dt className="flex items-center gap-2 font-display text-xl font-semibold">
                <Icon className="h-5 w-5 text-vermilion" aria-hidden="true" />
                {label}
              </dt>
              <dd className="mt-2 text-ink-soft">{value}</dd>
            </div>
          ))}
        </dl>
        <p className="mt-10 flex items-start gap-2 text-ink-soft">
          <Coffee className="mt-1 h-5 w-5 shrink-0 text-garden" aria-hidden="true" />
          Hours vary by camp ({campDetails.hours}); each listing above shows its own times, ages and price.
        </p>
      </section>

      <section aria-labelledby="book-title" className="border-y-2 border-ink bg-paper-deep/70 py-20">
        <div className="container-page">
          <SectionHeading id="book-title" eyebrow="Booking" title="How to book a camp" />
          <div className="mt-14">
            <Steps
              steps={[
                {
                  title: "Tell Julie which camp",
                  body: (
                    <p>
                      <Link className="link-ink" to="/contact/?program=camp">Send a message</Link> or call{" "}
                      <a className="link-ink" href={site.contact.phoneHref}>{site.contact.phoneDisplay}</a>. Spaces are
                      limited to eight per camp.
                    </p>
                  ),
                },
                {
                  title: "Complete the forms",
                  body: (
                    <p>
                      Fill in the{" "}
                      <a className="link-ink" href={site.forms.application} target="_blank" rel="noopener noreferrer">application</a> and{" "}
                      <a className="link-ink" href={site.forms.release} target="_blank" rel="noopener noreferrer">release form</a>.
                    </p>
                  ),
                },
                {
                  title: "Secure your place",
                  body: <p>{campDetails.deposit} Payment is due before camp, by Venmo ({site.payment.venmo}) or PayPal.</p>,
                },
              ]}
            />
          </div>
        </div>
      </section>

      <section aria-labelledby="camp-faq" className="container-page grid gap-12 py-20 lg:grid-cols-[1fr_1.6fr]">
        <SectionHeading id="camp-faq" eyebrow="Questions" title="Camp FAQs" />
        <FaqList faqs={campFaqs} />
      </section>

      <section aria-labelledby="past-title" className="container-page pb-12">
        <h2 id="past-title" className="text-3xl">Past camps</h2>
        <p className="mt-2 mb-6 max-w-2xl text-ink-soft">
          For reference only. These dates have passed, but they give a feel for timing and prices.
        </p>
        <PastCamps camps={camps} />
      </section>

      <CtaBand
        title="Want first dibs on the next camp?"
        body="Camps are small, so send Julie a note and she'll tell you when new dates are set."
        primary={{ to: "/contact/?program=camp", label: "Hear about the next camp", track: "register_click", trackLabel: "camps-cta" }}
        secondary={{ to: "/kids-art-classes/", label: "See weekly kids' classes", track: "view_program_click", trackLabel: "camps-to-kids" }}
      />
    </>
  );
}
