import { Link } from "react-router-dom";
import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";

type Variant = "primary" | "secondary" | "ink" | "ghost";

const styles: Record<Variant, string> = {
  primary:
    "bg-vermilion text-white hover:bg-vermilion-deep shadow-[3px_3px_0_0_var(--color-ink)] hover:shadow-[1px_1px_0_0_var(--color-ink)] hover:translate-x-[2px] hover:translate-y-[2px]",
  secondary:
    "bg-card text-ink border-2 border-ink hover:bg-paper-deep shadow-[3px_3px_0_0_var(--color-ink)] hover:shadow-[1px_1px_0_0_var(--color-ink)] hover:translate-x-[2px] hover:translate-y-[2px]",
  ink: "bg-ultramarine text-white hover:bg-ultramarine-deep shadow-[3px_3px_0_0_var(--color-ink)] hover:shadow-[1px_1px_0_0_var(--color-ink)] hover:translate-x-[2px] hover:translate-y-[2px]",
  ghost: "text-ink underline decoration-ochre decoration-[3px] underline-offset-[6px] hover:decoration-vermilion px-0!",
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
  "inline-flex min-h-12 items-center justify-center gap-2 rounded-[0.6rem] px-6 py-3 text-base font-semibold leading-tight transition-all duration-150 text-center";

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
