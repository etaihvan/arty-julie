import { Link } from "react-router-dom";
import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";

type Variant = "primary" | "secondary" | "ink" | "ghost";

const styles: Record<Variant, string> = {
  primary: "bg-postbox text-white hover:bg-postbox-deep shadow-[0_6px_16px_-8px_rgba(192,24,45,.8)]",
  secondary: "bg-card text-navy border-2 border-navy hover:bg-navy hover:text-white",
  ink: "bg-navy text-white hover:bg-navy-deep shadow-[0_6px_16px_-8px_rgba(31,52,99,.8)]",
  ghost: "text-navy underline decoration-postbox decoration-2 underline-offset-[6px] hover:text-postbox px-0!",
};

type Props = {
  to: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
  arrow?: boolean;
  /** Analytics event name, see src/lib/analytics.ts */
  track?: string;
  trackLabel?: string;
};

const base =
  "inline-flex min-h-14 items-center justify-center gap-2.5 rounded-full px-7 py-3.5 text-[1.05rem] font-bold leading-tight transition-all duration-150 text-center";

/** Internal paths use the router; anything with a protocol is a normal link. */
export function Button({ to, children, variant = "primary", className = "", arrow = false, track, trackLabel }: Props) {
  const cls = `${base} ${styles[variant]} ${className}`;
  const content = (
    <>
      {children}
      {arrow && <ArrowRight className="h-4 w-4 shrink-0" aria-hidden="true" />}
    </>
  );
  const data = { "data-track": track, "data-track-label": trackLabel };
  if (/^(https?:|mailto:|tel:)/.test(to)) {
    const external = to.startsWith("http");
    return (
      <a href={to} className={cls} {...data} {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
        {content}
        {external && <span className="sr-only"> (opens in a new tab)</span>}
      </a>
    );
  }
  return (
    <Link to={to} className={cls} {...data}>
      {content}
    </Link>
  );
}
