import { Link } from "react-router-dom";
import { BrushUnderline } from "./Doodles";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link to="/" className={`group inline-flex flex-col leading-none ${className}`} aria-label="Arty Julie, home">
      <span className="relative font-display text-[1.85rem] font-semibold italic tracking-tight display-wonk">
        <span className="relative z-10">
          Arty <span className="text-vermilion">Julie</span>
        </span>
        <BrushUnderline className="absolute -bottom-1 left-0 z-0 h-2.5 w-full text-ochre transition-colors group-hover:text-rose" />
      </span>
      <span className="mt-1.5 text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-ink-soft">
        Julie V's Art Classes
      </span>
    </Link>
  );
}
