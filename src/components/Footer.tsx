import { Link } from "react-router-dom";
import { Mail, Phone } from "lucide-react";
import { Instagram } from "./InstagramIcon";
import { site } from "../content/site";
import { Logo } from "./Logo";
import { Teacup } from "./Doodles";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative mt-24 border-t-2 border-ink bg-paper-deep">
      <Teacup className="absolute -top-14 right-[8%] h-24 w-28 text-garden" />
      <div className="container-page grid gap-12 py-14 md:grid-cols-[1.3fr_1fr_1fr]">
        <div>
          <Logo />
          <p className="mt-5 max-w-sm text-ink-soft">
            Art classes for kids, teens and adults, and holiday art camps that end with afternoon tea.
          </p>
        </div>
        <nav aria-label="Footer">
          <h2 className="eyebrow mb-4">Explore</h2>
          <ul className="space-y-2.5">
            <li><Link className="hover:text-vermilion" to="/kids-art-classes/">Kids' art classes</Link></li>
            <li><Link className="hover:text-vermilion" to="/kids-art-classes/#teens">Teen art classes</Link></li>
            <li><Link className="hover:text-vermilion" to="/art-camps/">Holiday art camps</Link></li>
            <li><Link className="hover:text-vermilion" to="/adult-art-classes/">Adult art classes</Link></li>
            <li><Link className="hover:text-vermilion" to="/gallery/">Gallery</Link></li>
            <li><Link className="hover:text-vermilion" to="/about/">About Julie</Link></li>
          </ul>
        </nav>
        <div>
          <h2 className="eyebrow mb-4">Get in touch</h2>
          <ul className="space-y-3">
            <li>
              <a className="inline-flex items-center gap-2.5 hover:text-vermilion" href={site.contact.phoneHref}>
                <Phone className="h-4 w-4" aria-hidden="true" /> {site.contact.phoneDisplay}
              </a>
            </li>
            <li>
              <a className="inline-flex items-center gap-2.5 break-all hover:text-vermilion" href={`mailto:${site.contact.email}`}>
                <Mail className="h-4 w-4 shrink-0" aria-hidden="true" /> {site.contact.email}
              </a>
            </li>
            <li>
              <a
                className="inline-flex items-center gap-2.5 hover:text-vermilion"
                href={site.social.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram className="h-4 w-4" aria-hidden="true" /> @{site.social.instagramHandle}
                <span className="sr-only"> on Instagram (opens in a new tab)</span>
              </a>
            </li>
            <li>
              <Link className="link-ink" to="/contact/">Registration forms</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-ink/15">
        <p className="container-page py-5 text-sm text-ink-soft">
          © {year} {site.legalName}. Made with paint on our hands.
        </p>
      </div>
    </footer>
  );
}
