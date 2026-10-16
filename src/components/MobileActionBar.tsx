import { Link, useLocation } from "react-router-dom";
import { Mail, MessageCircle } from "lucide-react";
import { site } from "../content/site";

/**
 * Always-visible "Email" and "Ask Julie" buttons on phones, so the next
 * step never depends on finding the menu. Hidden on large screens and on
 * the contact page itself.
 */
export function MobileActionBar() {
  const { pathname } = useLocation();
  if (pathname.startsWith("/contact")) return null;
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-ink/15 bg-paper/95 px-4 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-3 backdrop-blur lg:hidden">
      <div className="mx-auto grid max-w-md grid-cols-2 gap-3">
        <a
          href={`mailto:${site.contact.email}`}
          className="inline-flex min-h-13 items-center justify-center gap-2 whitespace-nowrap rounded-full border-2 border-navy bg-card px-4 font-bold text-navy"
        >
          <Mail className="h-5 w-5" aria-hidden="true" /> Email Julie
        </a>
        <Link
          to="/contact/"
          className="inline-flex min-h-13 items-center justify-center gap-2 whitespace-nowrap rounded-full bg-postbox px-4 font-bold text-white"
          data-track="register_click"
          data-track-label="mobile-bar"
        >
          <MessageCircle className="h-5 w-5" aria-hidden="true" /> Ask Julie
        </Link>
      </div>
    </div>
  );
}
