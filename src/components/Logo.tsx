import { Link } from "react-router-dom";

/** Wordmark with a little teacup-and-brush roundel, like a tea-room sign. */
export function Logo({ className = "", light = false }: { className?: string; light?: boolean }) {
  return (
    <Link to="/" className={`group inline-flex items-center gap-3 ${className}`} aria-label="Arty Julie, home">
      <svg viewBox="0 0 48 48" className="h-11 w-11 shrink-0" aria-hidden="true">
        <circle cx="24" cy="24" r="23" fill="#c0182d" />
        <circle cx="24" cy="24" r="19.5" fill="none" stroke="#fbf7ef" strokeWidth="1.2" strokeDasharray="2 2.2" />
        <path d="M14 22h17c0 7-3.5 11-8.5 11S14 29 14 22Z" fill="#fbf7ef" />
        <path d="M31 24.5c3-.6 4.6.8 4.4 2.6-.2 2-2.6 3-5 2.5" fill="none" stroke="#fbf7ef" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M12 35.5c6 1.6 15 1.6 21 0" fill="none" stroke="#fbf7ef" strokeWidth="1.8" strokeLinecap="round" />
        <path d="m27 10.5-6 9.5" stroke="#dca63e" strokeWidth="2.6" strokeLinecap="round" />
        <path d="M20.2 19.3c-1 1.4-.4 2.8 1.2 2.6" stroke="#dca63e" strokeWidth="2.2" strokeLinecap="round" fill="none" />
      </svg>
      <span className="flex flex-col leading-none">
        <span className={`font-display text-[1.9rem] tracking-tight ${light ? "text-paper" : "text-ink"}`}>
          Arty <span className={`italic ${light ? "text-mustard" : "text-postbox"}`} style={{ fontFamily: "var(--font-serif)" }}>Julie</span>
        </span>
        <span className={`mt-1 whitespace-nowrap text-[0.62rem] font-bold uppercase tracking-[0.16em] sm:text-[0.7rem] sm:tracking-[0.22em] ${light ? "text-paper/80" : "text-ink-soft"}`}>
          Julie V's Art Classes
        </span>
      </span>
    </Link>
  );
}
