import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, X, Maximize2 } from "lucide-react";
import type { Artwork } from "../content/gallery";
import { ArtImage } from "./ArtImage";

const ratioOf = (a: Artwork) => `${a.width} / ${a.height}`;
const tilt = ["-rotate-1", "rotate-1", "rotate-0", "rotate-[0.6deg]", "-rotate-[0.6deg]"];

/**
 * Editorial, salon-hang style gallery (CSS columns, mixed proportions).
 * Real photos open in an accessible <dialog> lightbox; placeholders don't.
 */
export function Gallery({ items }: { items: Artwork[] }) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [index, setIndex] = useState<number | null>(null);
  const viewable = items.filter((i) => i.src);

  const open = (id: string) => {
    const i = viewable.findIndex((v) => v.id === id);
    if (i < 0) return;
    setIndex(i);
    dialogRef.current?.showModal();
  };
  const close = () => dialogRef.current?.close();
  const step = useCallback(
    (d: number) => setIndex((i) => (i === null ? i : (i + d + viewable.length) % viewable.length)),
    [viewable.length],
  );

  useEffect(() => {
    const dlg = dialogRef.current;
    if (!dlg) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    dlg.addEventListener("keydown", onKey);
    return () => dlg.removeEventListener("keydown", onKey);
  }, [step]);

  const current = index !== null ? viewable[index] : null;

  return (
    <>
      <ul className="columns-1 gap-6 sm:columns-2 lg:columns-3 [&>li]:mb-8">
        {items.map((a, i) => (
          <li key={a.id} className={`break-inside-avoid ${tilt[i % tilt.length]}`}>
            <figure>
              <div className="stamp">
              {a.src ? (
                <button
                  type="button"
                  onClick={() => open(a.id)}
                  className="group relative block w-full cursor-zoom-in"
                  aria-label={`Enlarge: ${a.title}`}
                >
                  <ArtImage src={a.src} alt={a.alt} placeholderLabel={a.title} tone={a.tone} ratio={ratioOf(a)} sizes="(min-width:1024px) 30vw, (min-width:640px) 45vw, 100vw" />
                  <span className="absolute right-2 top-2 rounded-full bg-card/90 p-2 opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">
                    <Maximize2 className="h-4 w-4" aria-hidden="true" />
                  </span>
                </button>
              ) : (
                <ArtImage alt="" placeholderLabel={a.program ? `${a.title} (${a.program.toLowerCase()})` : a.title} tone={a.tone} ratio={ratioOf(a)} />
              )}
              </div>
              <figcaption className="mt-3 flex items-baseline justify-between gap-3 px-1">
                <span className="font-serif text-lg font-bold">{a.title}</span>
                <span className="text-sm text-ink-soft">{a.program ?? a.medium}</span>
              </figcaption>
            </figure>
          </li>
        ))}
      </ul>

      <dialog
        ref={dialogRef}
        onClose={() => setIndex(null)}
        onClick={(e) => e.target === dialogRef.current && close()}
        className="m-auto max-h-[92vh] w-[min(64rem,94vw)] bg-transparent p-0 backdrop:bg-navy-deep/90"
        aria-label={current ? current.title : "Artwork"}
      >
        {current && (
          <figure className="relative rounded-xl bg-card p-3">
            <img src={current.src} alt={current.alt} className="mx-auto max-h-[76vh] w-auto object-contain" />
            <figcaption className="flex items-center justify-between gap-3 px-1 pt-3">
              <span>
                <span className="font-display text-xl">{current.title}</span>
                <span className="ml-2 text-sm text-ink-soft">{current.medium}{current.program ? ` · ${current.program}` : ""}</span>
              </span>
              <span className="flex gap-2">
                {viewable.length > 1 && (
                  <>
                    <button type="button" onClick={() => step(-1)} className="grid h-11 w-11 place-items-center rounded-full border border-ink/20" aria-label="Previous artwork">
                      <ChevronLeft className="h-5 w-5" aria-hidden="true" />
                    </button>
                    <button type="button" onClick={() => step(1)} className="grid h-11 w-11 place-items-center rounded-full border border-ink/20" aria-label="Next artwork">
                      <ChevronRight className="h-5 w-5" aria-hidden="true" />
                    </button>
                  </>
                )}
                <button type="button" onClick={close} className="grid h-11 w-11 place-items-center rounded-full bg-ink text-paper" aria-label="Close">
                  <X className="h-5 w-5" aria-hidden="true" />
                </button>
              </span>
            </figcaption>
          </figure>
        )}
      </dialog>
    </>
  );
}
