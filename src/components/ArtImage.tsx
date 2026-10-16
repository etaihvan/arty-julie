import { useState } from "react";
import { ImagePlus } from "lucide-react";
import type { Tone } from "../content/gallery";

const toneColors: Record<Tone, { bg: string; a: string; b: string; c: string }> = {
  postbox: { bg: "#f7e1dd", a: "#c0182d", b: "#dca63e", c: "#1f3463" },
  navy: { bg: "#dfe7f1", a: "#1f3463", b: "#f3cdc5", c: "#dca63e" },
  mustard: { bg: "#f8ecd2", a: "#dca63e", b: "#c0182d", c: "#1e4a38" },
  racing: { bg: "#dde8e1", a: "#1e4a38", b: "#dca63e", c: "#c0182d" },
  blush: { bg: "#faeae6", a: "#f3cdc5", b: "#1f3463", c: "#1e4a38" },
};

function hash(s: string) {
  let h = 0;
  for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) | 0;
  return Math.abs(h);
}

type Props = {
  src?: string;
  /** Describe the image. Required whenever `src` is set. */
  alt: string;
  /** Shown on the placeholder so it's obvious which photo belongs here. */
  placeholderLabel: string;
  tone?: Tone;
  className?: string;
  /** CSS aspect-ratio, e.g. "4 / 5". Reserves space to prevent layout shift. */
  ratio?: string;
  priority?: boolean;
  sizes?: string;
  /** Where the "Photo to add" label sits on a placeholder. */
  labelPosition?: "top" | "bottom";
};

/**
 * Shows a real photo when `src` is set. When it isn't, or the file fails to
 * load, it shows an abstract painted placeholder that is clearly labelled as
 * a photo still to be added, so it can never be mistaken for student work.
 *
 * If `npm run images` has generated "-800.webp" / "-1600.webp" versions of a
 * JPG/PNG, they're used automatically via srcset.
 */
export function ArtImage({
  src,
  alt,
  placeholderLabel,
  tone = "postbox",
  className = "",
  ratio = "4 / 5",
  priority = false,
  sizes = "(min-width: 1024px) 40vw, 100vw",
  labelPosition = "bottom",
}: Props) {
  const [failed, setFailed] = useState(false);

  if (src && !failed) {
    const base = src.replace(/\.(jpe?g|png)$/i, "");
    const hasVariants = base !== src;
    return (
      <picture className={`block overflow-hidden ${className}`} style={{ aspectRatio: ratio }}>
        {hasVariants && (
          <source type="image/webp" srcSet={`${base}-800.webp 800w, ${base}-1600.webp 1600w`} sizes={sizes} />
        )}
        <img
          src={src}
          alt={alt}
          loading={priority ? "eager" : "lazy"}
          decoding="async"
          // fetchpriority is valid HTML; React 18 passes it through lowercase.
          {...(priority ? { fetchpriority: "high" } : {})}
          onError={() => setFailed(true)}
          className="h-full w-full object-cover"
        />
      </picture>
    );
  }

  const c = toneColors[tone];
  const h = hash(placeholderLabel);
  const r = (n: number, spread: number) => ((h >> n) % spread) - spread / 2;

  return (
    <div
      className={`relative overflow-hidden ${className}`}
      style={{ aspectRatio: ratio, background: c.bg }}
      role="img"
      aria-label={`Placeholder for a photo: ${placeholderLabel}`}
    >
      <svg viewBox="0 0 400 500" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 h-full w-full" aria-hidden="true">
        <path
          d={`M${90 + r(1, 40)} ${110 + r(2, 40)}c70-60 190-40 220 40s-20 170-110 190-170-40-170-120 0-70 60-110Z`}
          fill={c.a}
          opacity=".85"
        />
        <path
          d={`M${230 + r(3, 50)} ${300 + r(4, 40)}c40-30 110-10 120 40s-30 90-80 90-80-20-80-60 10-50 40-70Z`}
          fill={c.b}
          opacity=".9"
        />
        <path
          d={`M40 ${400 + r(5, 30)}c60-30 120 10 180-10s110-40 160-10`}
          stroke={c.c}
          strokeWidth="14"
          strokeLinecap="round"
          fill="none"
          opacity=".8"
        />
        <circle cx={310 + r(6, 40)} cy={110 + r(7, 40)} r="26" fill={c.c} opacity=".75" />
        <path d="M60 60c40 10 60-10 90 0" stroke="#17213a" strokeWidth="3" strokeLinecap="round" fill="none" opacity=".35" />
      </svg>
      <div className={`absolute inset-x-3 ${labelPosition === "top" ? "top-5" : "bottom-3"} flex items-start gap-2 rounded-sm bg-card/92 px-3 py-2 text-[0.8rem] leading-snug text-ink shadow-sm`}>
        <ImagePlus className="mt-0.5 h-4 w-4 shrink-0 text-ink-soft" aria-hidden="true" />
        <span>
          <span className="font-semibold">Photo to add:</span> {placeholderLabel}
        </span>
      </div>
    </div>
  );
}
