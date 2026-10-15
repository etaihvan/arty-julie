import type { ReactNode } from "react";
import { BrushUnderline } from "./Doodles";

type Props = {
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  id?: string;
  align?: "left" | "center";
  as?: "h1" | "h2";
  underline?: "vermilion" | "ochre" | "ultramarine" | "garden";
};

const underlineColor = {
  vermilion: "text-vermilion/70",
  ochre: "text-ochre",
  ultramarine: "text-ultramarine/60",
  garden: "text-garden/60",
};

export function SectionHeading({ eyebrow, title, intro, id, align = "left", as = "h2", underline = "ochre" }: Props) {
  const H = as;
  const center = align === "center";
  return (
    <div className={`max-w-2xl ${center ? "mx-auto text-center" : ""}`}>
      {eyebrow && <p className="eyebrow mb-3">{eyebrow}</p>}
      <H id={id} className={`relative inline-block ${as === "h1" ? "text-5xl sm:text-6xl" : "text-4xl sm:text-5xl"}`}>
        <span className="relative z-10">{title}</span>
        <BrushUnderline className={`absolute -bottom-2 left-0 z-0 h-4 w-[min(100%,14rem)] ${underlineColor[underline]}`} />
      </H>
      {intro && <div className="mt-6 text-lg text-ink-soft">{intro}</div>}
    </div>
  );
}
