import type { ReactNode } from "react";

/** Numbered "how to sign up" steps. */
export function Steps({ steps }: { steps: { title: string; body: ReactNode }[] }) {
  return (
    <ol className="grid gap-6 md:grid-cols-3">
      {steps.map((s, i) => (
        <li key={s.title} className="relative border-t-2 border-postbox pt-5">
          <span className="hand absolute -top-7 right-0 text-6xl leading-none text-postbox/80" aria-hidden="true">
            {i + 1}
          </span>
          <h3 className="pr-10 text-2xl">
            <span className="sr-only">Step {i + 1}: </span>
            {s.title}
          </h3>
          <div className="mt-2 text-ink-soft">{s.body}</div>
        </li>
      ))}
    </ol>
  );
}
