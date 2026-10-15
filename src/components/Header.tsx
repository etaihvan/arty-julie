import { useEffect, useRef, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Menu, X, Phone, Mail, ChevronRight } from "lucide-react";
import { Logo } from "./Logo";
import { Button } from "./Button";
import { navItems } from "./nav";
import { site } from "../content/site";

/** Slim navy strip with the phone number, so it's never more than a glance away. */
function UtilityBar() {
  return (
    <aside aria-label="Contact Julie" className="bg-navy text-paper">
      <div className="container-page flex min-h-10 items-center justify-between gap-4 py-1.5 text-[0.95rem]">
        <p className="hidden sm:block">
          <span className="hand text-[1.05rem] text-mustard">Questions?</span> Julie is happy to help.
        </p>
        <div className="flex w-full items-center justify-between gap-5 sm:w-auto sm:justify-end">
          <a href={site.contact.phoneHref} className="inline-flex items-center gap-2 font-semibold hover:text-mustard">
            <Phone className="h-4 w-4" aria-hidden="true" />
            Call {site.contact.phoneDisplay}
          </a>
          <a href={`mailto:${site.contact.email}`} className="inline-flex items-center gap-2 font-semibold hover:text-mustard">
            <Mail className="h-4 w-4" aria-hidden="true" /> Email Julie
          </a>
        </div>
      </div>
    </aside>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const toggleRef = useRef<HTMLButtonElement>(null);

  // Close the mobile menu on navigation and on Escape.
  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  const linkCls = ({ isActive }: { isActive: boolean }) =>
    `relative py-2 font-semibold transition-colors hover:text-postbox ${
      isActive ? "text-postbox after:absolute after:inset-x-0 after:-bottom-0.5 after:h-[2px] after:bg-postbox" : "text-ink"
    }`;

  return (
    <>
      <UtilityBar />
      <header className="sticky top-0 z-40 border-b border-ink/15 bg-paper/95 backdrop-blur supports-[backdrop-filter]:bg-paper/90">
        <div className="container-page flex h-20 items-center justify-between gap-6">
          <Logo />
          <nav aria-label="Main" className="hidden lg:block">
            <ul className="flex items-center gap-7 text-[1.02rem]">
              {navItems.map((item) => (
                <li key={item.to}>
                  <NavLink to={item.to} className={linkCls} data-track={item.track} data-track-label={item.trackLabel}>
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
          <div className="hidden lg:block">
            <Button to="/contact/" className="min-h-12 px-6 py-2.5" track="register_click" trackLabel="header">
              Ask about a class
            </Button>
          </div>
          <button
            ref={toggleRef}
            type="button"
            className="inline-flex h-12 items-center gap-2 rounded-full border-2 border-navy bg-card px-4 font-bold text-navy lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
            {open ? "Close" : "Menu"}
          </button>
        </div>
        <div id="mobile-menu" hidden={!open} className="max-h-[calc(100dvh-5rem)] overflow-y-auto border-t border-ink/15 bg-paper lg:hidden">
          <nav aria-label="Mobile" className="container-page py-4">
            <ul className="flex flex-col">
              {[...navItems, { to: "/contact/", label: "Contact & booking", hint: "Ask a question or book", track: undefined, trackLabel: undefined }].map((item) => (
                <li key={item.to} className="border-b border-line last:border-0">
                  <NavLink
                    to={item.to}
                    className={({ isActive }) => `flex min-h-16 items-center justify-between gap-4 py-2 ${isActive ? "text-postbox" : ""}`}
                    data-track={item.track}
                    data-track-label={item.trackLabel}
                  >
                    <span>
                      <span className="block font-serif text-[1.35rem] font-bold leading-tight">{item.label}</span>
                      <span className="block text-[0.95rem] text-ink-soft">{item.hint}</span>
                    </span>
                    <ChevronRight className="h-6 w-6 shrink-0 text-postbox" aria-hidden="true" />
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}
