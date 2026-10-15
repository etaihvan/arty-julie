/**
 * Lightweight conversion tracking.
 *
 * - If VITE_GA_MEASUREMENT_ID is set, Google Analytics 4 is loaded and every
 *   event below is sent to it.
 * - If it is not set, nothing is loaded and events are only pushed to
 *   window.dataLayer (harmless, and ready for Google Tag Manager later).
 *
 * Events (GA4 names):
 *   view_program_click   click on a link to kids' classes, camps or adult classes
 *   register_click       click on a Register / Book / Enquire button
 *   generate_lead        inquiry form submitted successfully
 *   contact_click        click on an email, phone or Instagram link
 *
 * No personal information is ever sent: only the event name and which
 * program or link type was clicked.
 */

type Params = Record<string, string | number | undefined>;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

const GA_ID = import.meta.env.VITE_GA_MEASUREMENT_ID as string | undefined;

export function track(event: string, params: Params = {}) {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];
  if (window.gtag) window.gtag("event", event, params);
  else window.dataLayer.push({ event, ...params });
}

/** Loads GA4 only when a measurement ID is configured. */
export function initAnalytics() {
  if (typeof window === "undefined" || !GA_ID || window.gtag) return;
  const s = document.createElement("script");
  s.async = true;
  s.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(GA_ID)}`;
  document.head.appendChild(s);
  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag() {
    // eslint-disable-next-line prefer-rest-params
    window.dataLayer!.push(arguments);
  };
  window.gtag("js", new Date());
  window.gtag("config", GA_ID, { anonymize_ip: true });
}

/**
 * One delegated click listener for the whole site. Elements opt in with
 * data-track="event_name" and optional data-track-label="…"; mailto:, tel:
 * and Instagram links are tracked automatically.
 */
export function installClickTracking() {
  if (typeof document === "undefined") return;
  document.addEventListener("click", (e) => {
    const el = (e.target as HTMLElement | null)?.closest("a, button") as HTMLElement | null;
    if (!el) return;
    const named = el.dataset.track;
    if (named) {
      track(named, { label: el.dataset.trackLabel });
      return;
    }
    const href = el.getAttribute("href") || "";
    if (href.startsWith("mailto:")) track("contact_click", { method: "email" });
    else if (href.startsWith("tel:")) track("contact_click", { method: "phone" });
    else if (href.includes("instagram.com")) track("contact_click", { method: "instagram" });
  });
}
