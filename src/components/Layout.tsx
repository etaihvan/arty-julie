import { useEffect, useRef } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { metaFor } from "../content/routes";

/** Keeps <title>, description and canonical in sync during client-side navigation. */
function usePageMeta(pathname: string) {
  const first = useRef(true);
  useEffect(() => {
    const meta = metaFor(pathname);
    document.title = meta.title;
    document.querySelector('meta[name="description"]')?.setAttribute("content", meta.description);
    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      const origin = new URL(canonical.getAttribute("href") || "/", window.location.href).origin;
      canonical.setAttribute("href", origin + meta.path);
    }
    // Move focus to the main region on navigation so keyboard and screen
    // reader users start at the new page content (not on first load).
    if (first.current) {
      first.current = false;
      return;
    }
    if (!window.location.hash) {
      window.scrollTo(0, 0);
      document.getElementById("main")?.focus({ preventScroll: true });
    }
  }, [pathname]);
}

function useHashScroll() {
  const { hash, pathname } = useLocation();
  useEffect(() => {
    if (!hash) return;
    const el = document.getElementById(decodeURIComponent(hash.slice(1)));
    if (el) {
      el.scrollIntoView();
      (el as HTMLElement).focus?.({ preventScroll: true });
    }
  }, [hash, pathname]);
}

export function Layout() {
  const { pathname } = useLocation();
  usePageMeta(pathname);
  useHashScroll();
  return (
    <>
      <a
        href="#main"
        className="sr-only z-50 rounded-md bg-ink px-4 py-3 text-paper focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
      >
        Skip to content
      </a>
      <Header />
      <main id="main" tabIndex={-1} className="outline-none">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
