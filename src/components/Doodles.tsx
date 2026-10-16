/**
 * Hand-drawn decorative marks. All are purely decorative (aria-hidden) and
 * inherit colour from `currentColor`, so set colour with a text-* class.
 */
type Props = { className?: string };

export function BrushUnderline({ className = "" }: Props) {
  return (
    <svg className={className} viewBox="0 0 300 24" fill="none" aria-hidden="true" preserveAspectRatio="none">
      <path
        d="M3 15c38-7 84-10 128-9 39 1 72 4 104 2 22-1 41-4 62-6-31 7-74 10-112 11-44 1-87-2-129 1-19 1-36 3-53 5"
        stroke="currentColor"
        strokeWidth="7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Squiggle({ className = "" }: Props) {
  return (
    <svg className={className} viewBox="0 0 120 20" fill="none" aria-hidden="true">
      <path
        d="M2 12c8-9 14-9 20 0s13 9 20 0 13-9 20 0 13 9 20 0 13-9 20 0 10 6 16 2"
        stroke="currentColor"
        strokeWidth="3.2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function Teacup({ className = "" }: Props) {
  return (
    <svg className={className} viewBox="0 0 120 100" fill="none" aria-hidden="true">
      <g stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 40c1 22 15 38 37 38s35-15 37-38c-24 3-50 3-74 0Z" />
        <path d="M92 47c10-3 17 2 16 10-1 9-11 13-21 11" />
        <path d="M10 84c18 6 70 7 92-1" />
        <path d="M42 30c-6-6 4-10-2-17M56 28c-6-7 5-11-1-19M70 30c-6-6 4-10-2-17" opacity=".7" />
      </g>
    </svg>
  );
}

export function Paintbrush({ className = "" }: Props) {
  return (
    <svg className={className} viewBox="0 0 120 120" fill="none" aria-hidden="true">
      <g stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
        <path d="M24 98c-6 4-12 4-16 2 6-3 6-10 10-14 5-5 13-4 16 0 3 4 1 9-10 12Z" />
        <path d="M33 85 47 71" />
        <path d="m44 74 8 8 62-66c2-3-1-6-4-4L44 74Z" />
      </g>
    </svg>
  );
}

export function Sparkle({ className = "" }: Props) {
  return (
    <svg className={className} viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <path
        d="M20 3c1 9 4 14 16 17-12 2-15 7-16 17-2-10-5-15-17-17 12-3 15-8 17-17Z"
        stroke="currentColor"
        strokeWidth="2.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Arrow({ className = "" }: Props) {
  return (
    <svg className={className} viewBox="0 0 90 60" fill="none" aria-hidden="true">
      <path
        d="M4 8c22 2 52 10 66 38M58 40l13 8 3-15"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/** A soft painted blob, used behind images and headings. */
export function Blob({ className = "", variant = 0 }: Props & { variant?: 0 | 1 | 2 }) {
  const d = [
    "M63 8c25 6 36 31 31 55-5 25-29 35-53 31C17 90 2 72 6 47 10 21 37 2 63 8Z",
    "M55 4c26 2 43 22 40 48-3 25-25 45-50 42C20 91 3 70 5 45 7 20 29 2 55 4Z",
    "M50 6c22-3 44 12 46 37 2 26-17 49-43 51S5 79 4 53C3 28 26 9 50 6Z",
  ][variant];
  return (
    <svg className={className} viewBox="0 0 100 100" aria-hidden="true" preserveAspectRatio="none">
      <path d={d} fill="currentColor" />
    </svg>
  );
}

/** A strip of masking tape, for "taped to the studio wall" frames. */
export function Tape({ className = "" }: Props) {
  return (
    <span
      aria-hidden="true"
      className={`pointer-events-none absolute block h-7 w-24 bg-[#f4e6bf]/85 shadow-sm ${className}`}
      style={{ clipPath: "polygon(3% 8%, 97% 0, 100% 88%, 1% 100%)" }}
    />
  );
}

/** A small classical divider: rule, diamond, rule. */
export function Flourish({ className = "" }: Props) {
  return (
    <svg className={className} viewBox="0 0 120 12" fill="none" aria-hidden="true">
      <path d="M0 6h48M72 6h48" stroke="currentColor" strokeWidth="1.5" />
      <path d="m60 0 6 6-6 6-6-6 6-6Z" fill="currentColor" />
      <circle cx="44" cy="6" r="1.8" fill="currentColor" />
      <circle cx="76" cy="6" r="1.8" fill="currentColor" />
    </svg>
  );
}
