import { useId } from "react";

/**
 * Hand-printed motifs inspired by the stamped-and-painted patterns made in
 * Julie's classes: leafy fronds, spirals and dots. A noise filter breaks up
 * each shape so it looks pressed from a rubber stamp or lino block, not drawn
 * on a computer. All are decorative (aria-hidden) and take colour from
 * `currentColor`.
 */
type Props = { className?: string };

function PrintTexture({ id }: { id: string }) {
  return (
    <filter id={id} x="-5%" y="-5%" width="110%" height="110%">
      <feTurbulence type="fractalNoise" baseFrequency="1.1" numOctaves="2" seed="7" result="noise" />
      <feColorMatrix in="noise" type="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 -2.2 1.45" result="speckle" />
      <feComposite in="SourceGraphic" in2="speckle" operator="in" />
    </filter>
  );
}

/** A leafy frond, like a hand-cut leaf stamp pressed along a stem. */
export function PrintFrond({ className = "" }: Props) {
  const id = useId().replace(/:/g, "");
  const leaves = [
    [60, 150, -50], [60, 150, 50], [62, 120, -45], [62, 120, 45], [64, 92, -40],
    [64, 92, 40], [66, 66, -35], [66, 66, 35], [68, 42, -25], [68, 42, 25],
  ] as const;
  return (
    <svg className={className} viewBox="0 0 130 220" aria-hidden="true">
      <defs><PrintTexture id={id} /></defs>
      <g filter={`url(#${id})`} fill="currentColor">
        <path d="M58 215c2-60 4-120 12-190 1-6 6-6 5 0-6 70-8 130-11 190Z" />
        {leaves.map(([x, y, rot], i) => (
          <path
            key={i}
            transform={`translate(${x} ${y}) rotate(${rot})`}
            d="M0 0c-8-10-9-30 0-44 9 14 8 34 0 44Z"
          />
        ))}
        <path d="M70 26c-6-12-3-22 3-26 6 6 6 16-3 26Z" />
      </g>
    </svg>
  );
}

/** A loose painted spiral. */
export function PrintSpiral({ className = "" }: Props) {
  const id = useId().replace(/:/g, "");
  return (
    <svg className={className} viewBox="0 0 120 120" aria-hidden="true">
      <defs><PrintTexture id={id} /></defs>
      <path
        filter={`url(#${id})`}
        d="M62 60c0-6-8-8-12-3-6 7 1 18 11 18 13 0 21-13 17-26-5-16-24-22-38-14C24 44 20 66 30 82c12 19 40 24 58 10 16-12 22-34 14-52"
        fill="none"
        stroke="currentColor"
        strokeWidth="9"
        strokeLinecap="round"
      />
    </svg>
  );
}

/** A loose grid of dabbed dots, like a round sponge stamp. */
export function PrintDots({ className = "" }: Props) {
  const id = useId().replace(/:/g, "");
  const dots: [number, number, number][] = [];
  for (let r = 0; r < 4; r++)
    for (let c = 0; c < 4; c++) dots.push([18 + c * 32 + (r % 2) * 16, 18 + r * 30, 11 + ((r * 3 + c * 5) % 4)]);
  return (
    <svg className={className} viewBox="0 0 150 130" aria-hidden="true">
      <defs><PrintTexture id={id} /></defs>
      <g filter={`url(#${id})`} fill="currentColor">
        {dots.map(([cx, cy, r], i) => (
          <circle key={i} cx={cx} cy={cy} r={r} />
        ))}
      </g>
    </svg>
  );
}

/**
 * A strip of Julie's real stamped-and-painted pattern (public/images/pattern-strip.jpg),
 * used as a decorative edge between sections.
 */
export function PaintStrip({ className = "h-5" }: Props) {
  return <div aria-hidden="true" className={`paint-strip w-full ${className}`} />;
}
