import { Mail, Phone, FileText, Wallet } from "lucide-react";
import { Instagram } from "../components/InstagramIcon";
import { InquiryForm } from "../components/InquiryForm";
import { SectionHeading } from "../components/SectionHeading";
import { Sparkle } from "../components/Doodles";
import { site } from "../content/site";

export default function Contact() {
  return (
    <>
      <section className="container-page pb-4 pt-16">
        <SectionHeading
          as="h1"
          eyebrow="Contact & registration"
          title="Say hello to Julie"
          intro="Ask about a class or camp, check availability, or just ask a question. Julie will reply by email or phone."
          underline="vermilion"
        />
      </section>

      <div className="container-page grid gap-14 py-12 lg:grid-cols-[1.5fr_1fr]">
        <section aria-labelledby="form-title" className="border-2 border-ink bg-card p-6 shadow-[8px_8px_0_0_var(--color-ink)] sm:p-10">
          <h2 id="form-title" className="text-3xl">Send a message</h2>
          <p className="mt-2 mb-8 text-ink-soft">All fields are required unless marked optional.</p>
          <InquiryForm />
        </section>

        <aside className="space-y-10">
          <section aria-labelledby="direct-title">
            <h2 id="direct-title" className="text-2xl">Prefer to call or email?</h2>
            <ul className="mt-5 space-y-4 text-lg">
              <li>
                <a className="flex items-center gap-3 hover:text-vermilion" href={site.contact.phoneHref}>
                  <span className="grid h-11 w-11 place-items-center rounded-full border-2 border-ink bg-ochre">
                    <Phone className="h-5 w-5" aria-hidden="true" />
                  </span>
                  {site.contact.phoneDisplay}
                </a>
              </li>
              <li>
                <a className="flex items-center gap-3 break-all hover:text-vermilion" href={`mailto:${site.contact.email}`}>
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border-2 border-ink bg-rose">
                    <Mail className="h-5 w-5" aria-hidden="true" />
                  </span>
                  {site.contact.email}
                </a>
              </li>
              <li>
                <a className="flex items-center gap-3 hover:text-vermilion" href={site.social.instagramUrl} target="_blank" rel="noopener noreferrer">
                  <span className="grid h-11 w-11 place-items-center rounded-full border-2 border-ink bg-card">
                    <Instagram className="h-5 w-5" aria-hidden="true" />
                  </span>
                  @{site.social.instagramHandle}
                  <span className="sr-only"> on Instagram (opens in a new tab)</span>
                </a>
              </li>
            </ul>
          </section>

          <section id="register" tabIndex={-1} aria-labelledby="register-title" className="scroll-mt-28 border-t-2 border-ink pt-8 outline-none">
            <h2 id="register-title" className="text-2xl">
              Registration forms <Sparkle className="inline h-5 w-5 -translate-y-1 text-ochre" />
            </h2>
            <p className="mt-3 text-ink-soft">
              Once Julie has confirmed your place, please complete both forms. They're fillable PDFs; on a phone, the free
              Adobe Fill &amp; Sign app works well.
            </p>
            <ul className="mt-5 space-y-3">
              <li>
                <a className="link-ink inline-flex items-center gap-2" href={site.forms.application} target="_blank" rel="noopener noreferrer" data-track="register_click" data-track-label="application-pdf">
                  <FileText className="h-5 w-5" aria-hidden="true" /> Application form (PDF)
                </a>
              </li>
              <li>
                <a className="link-ink inline-flex items-center gap-2" href={site.forms.release} target="_blank" rel="noopener noreferrer" data-track="register_click" data-track-label="release-pdf">
                  <FileText className="h-5 w-5" aria-hidden="true" /> Release form (PDF)
                </a>
              </li>
            </ul>
          </section>

          <section aria-labelledby="pay-title" className="border-t-2 border-ink pt-8">
            <h2 id="pay-title" className="flex items-center gap-2 text-2xl">
              <Wallet className="h-6 w-6 text-garden" aria-hidden="true" /> Paying
            </h2>
            <p className="mt-3 text-ink-soft">{site.payment.note}</p>
            <p className="mt-2 text-ink-soft">
              Venmo: <span className="font-semibold text-ink">{site.payment.venmo}</span>
            </p>
          </section>

          <section aria-labelledby="where-title" className="border-t-2 border-ink pt-8">
            <h2 id="where-title" className="text-2xl">Where</h2>
            {site.location.address ? (
              <address className="mt-3 not-italic text-ink-soft">
                {site.location.address.streetAddress}<br />
                {site.location.address.addressLocality}, {site.location.address.addressRegion} {site.location.address.postalCode}
              </address>
            ) : (
              <p className="mt-3 text-ink-soft">{site.location.description} Ask Julie for the address when you get in touch.</p>
            )}
          </section>
        </aside>
      </div>
    </>
  );
}
