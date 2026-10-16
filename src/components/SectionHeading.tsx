import type { ReactNode } from "react";
import { Flourish } from "./Doodles";

type Props = {
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  id?: string;
  align?: "left" | "center";
  as?: "h1" | "h2";
  underline?: "postbox" | "mustard" | "navy" | "racing";
};

const flourishColor = {
  postbox: "text-postbox",
  mustard: "text-mustard",
  navy: "text-navy",
  racing: "text-racing",
};

export function SectionHeading({ eyebrow, title, intro, id, align = "left", as = "h2", underline = "postbox" }: Props) {
  const H = as;
  const center = align === "center";
  return (
    <div className={`max-w-2xl ${center ? "mx-auto text-center" : ""}`}>
      {eyebrow && <p className="eyebrow mb-3">{eyebrow}</p>}
      <H id={id} className={as === "h1" ? "text-5xl sm:text-6xl" : "text-4xl sm:text-5xl"}>
        {title}
      </H>
      <Flourish className={`mt-5 h-3 w-28 ${flourishColor[underline]} ${center ? "mx-auto" : ""}`} />
      {intro && <div className="mt-5 text-lg text-ink-soft">{intro}</div>}
    </div>
  );
}
