import { useEffect, useRef, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";
import { Button } from "./Button";
import { navItems } from "./nav";

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
    `relative py-2 font-semibold transition-colors hover:text-vermilion ${
      isActive ? "text-vermilion after:absolute after:inset-x-0 after:-bottom-0.5 after:h-[3px] after:rounded-full after:bg-ochre" : ""
    }`;

  return (
    <header className="sticky top-0 z-40 border-b-2 border-ink bg-paper/95 backdrop-blur supports-[backdrop-filter]:bg-paper/85">
      <div className="container-page flex h-[4.75rem] items-center justify-between gap-6">
        <Logo />
        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-7 text-[0.98rem]">
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
          <Button to="/contact/" className="min-h-11 px-5 py-2.5" track="register_click" trackLabel="header">
            Ask about a class
          </Button>
        </div>
        <button
          ref={toggleRef}
          type="button"
          className="inline-flex h-12 w-12 items-center justify-center rounded-md border-2 border-ink bg-card lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-6 w-6" aria-hidden="true" /> : <Menu className="h-6 w-6" aria-hidden="true" />}
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
        </button>
      </div>
      <div id="mobile-menu" hidden={!open} className="border-t-2 border-ink bg-paper lg:hidden">
        <nav aria-label="Mobile" className="container-page py-4">
          <ul className="flex flex-col">
            {[...navItems, { to: "/contact/", label: "Contact", track: undefined, trackLabel: undefined }].map((item) => (
              <li key={item.to} className="border-b border-line last:border-0">
                <NavLink
                  to={item.to}
                  className={({ isActive }) =>
                    `flex min-h-14 items-center font-display text-2xl ${isActive ? "text-vermilion" : ""}`
                  }
                  data-track={item.track}
                  data-track-label={item.trackLabel}
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
          <Button to="/contact/" className="mt-4 w-full" track="register_click" trackLabel="mobile-menu">
            Ask about a class
          </Button>
        </nav>
      </div>
    </header>
  );
}
