import { Link } from "react-router-dom";
import { Mail } from "lucide-react";
import { Instagram } from "./InstagramIcon";
import { site } from "../content/site";
import { Logo } from "./Logo";
import { Teacup } from "./Doodles";
import { PaintStrip } from "./PrintMotifs";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative mt-24 bg-navy pb-24 text-paper lg:pb-0">
      <PaintStrip className="h-5" />
      <Teacup className="absolute right-[8%] top-10 hidden h-24 w-28 text-mustard/70 md:block" />
      <div className="container-page grid gap-12 py-14 md:grid-cols-[1.3fr_1fr_1fr]">
        <div>
          <Logo light />
          <p className="mt-5 max-w-sm text-paper/80">
            Art classes for kids, teens and adults, and holiday art camps that end with afternoon tea.
          </p>
        </div>
        <nav aria-label="Footer">
          <h2 className="eyebrow mb-4 text-mustard">Explore</h2>
          <ul className="space-y-2.5">
            <li><Link className="hover:text-mustard" to="/kids-art-classes/">Kids' art classes</Link></li>
            <li><Link className="hover:text-mustard" to="/kids-art-classes/#teens">Teen art classes</Link></li>
            <li><Link className="hover:text-mustard" to="/art-camps/">Holiday art camps</Link></li>
            <li><Link className="hover:text-mustard" to="/adult-art-classes/">Adult art classes</Link></li>
            <li><Link className="hover:text-mustard" to="/gallery/">Gallery</Link></li>
            <li><Link className="hover:text-mustard" to="/about/">About Julie</Link></li>
          </ul>
        </nav>
        <div>
          <h2 className="eyebrow mb-4 text-mustard">Get in touch</h2>
          <ul className="space-y-3">
            <li>
              <a className="inline-flex items-center gap-2.5 break-all hover:text-mustard" href={`mailto:${site.contact.email}`}>
                <Mail className="h-4 w-4 shrink-0" aria-hidden="true" /> {site.contact.email}
              </a>
            </li>
            <li>
              <a
                className="inline-flex items-center gap-2.5 hover:text-mustard"
                href={site.social.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram className="h-4 w-4" aria-hidden="true" /> @{site.social.instagramHandle}
                <span className="sr-only"> on Instagram (opens in a new tab)</span>
              </a>
            </li>
            <li>
              <Link className="font-semibold underline decoration-mustard decoration-2 underline-offset-4 hover:text-mustard" to="/contact/">Registration forms</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-paper/15">
        <p className="container-page py-5 text-sm text-paper/80">
          © {year} {site.legalName}. Made with paint on our hands (and a cup of tea).
        </p>
      </div>
    </footer>
  );
}
