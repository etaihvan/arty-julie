import { useEffect, useRef, useState, type FormEvent } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { AlertCircle, Loader2, Send } from "lucide-react";
import { site } from "../content/site";
import { track } from "../lib/analytics";

/**
 * Inquiry form, handled by Netlify Forms (no server or API keys needed).
 *
 * Netlify finds this form in the pre-rendered /contact/ HTML at deploy time
 * because of `data-netlify="true"`. Submissions appear in the Netlify
 * dashboard under Forms → "inquiry"; turn on email notifications there so they
 * reach Julie's inbox (see README → "Contact form").
 *
 * We deliberately don't ask for a child's name, school or other personal
 * details: just what Julie needs to reply.
 */

export const programOptions = [
  { value: "kids", label: "Kids' art classes" },
  { value: "teens", label: "Teen art classes" },
  { value: "camp", label: "Holiday art camp" },
  { value: "adults", label: "Adult art classes" },
  { value: "other", label: "Something else" },
] as const;

type Errors = Partial<Record<"name" | "email" | "program" | "message", string>>;

const encode = (data: FormData) =>
  new URLSearchParams(Array.from(data.entries()).map(([k, v]) => [k, String(v)])).toString();

export function InquiryForm() {
  const [params] = useSearchParams();
  const navigate = useNavigate();
  const initialProgram = programOptions.some((o) => o.value === params.get("program")) ? params.get("program")! : "";
  const initialCamp = params.get("camp") ?? "";
  // Start empty so the first client render matches the pre-rendered HTML,
  // then apply any ?program= / ?camp= from the link the visitor followed.
  const [program, setProgram] = useState("");
  const [preferred, setPreferred] = useState("");
  const [errors, setErrors] = useState<Errors>({});
  const [state, setState] = useState<"idle" | "sending" | "error">("idle");
  const summaryRef = useRef<HTMLDivElement>(null);

  // Keep the selection in sync if the visitor arrives via a different link.
  useEffect(() => setProgram(initialProgram), [initialProgram]);
  useEffect(() => setPreferred(initialCamp), [initialCamp]);

  const forChild = program === "kids" || program === "teens" || program === "camp";

  function validate(form: HTMLFormElement): Errors {
    const v = (n: string) => (form.elements.namedItem(n) as HTMLInputElement | null)?.value.trim() ?? "";
    const e: Errors = {};
    if (!v("name")) e.name = "Please tell Julie your name.";
    if (!v("email")) e.email = "Please add an email address so Julie can reply.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v("email"))) e.email = "That email address doesn't look quite right.";
    if (!v("program")) e.program = "Please choose what you're interested in.";
    if (!v("message")) e.message = "Please add a short message or question.";
    return e;
  }

  async function onSubmit(ev: FormEvent<HTMLFormElement>) {
    ev.preventDefault();
    const form = ev.currentTarget;
    const found = validate(form);
    setErrors(found);
    if (Object.keys(found).length) {
      requestAnimationFrame(() => summaryRef.current?.focus());
      return;
    }
    setState("sending");
    try {
      const res = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode(new FormData(form)),
      });
      if (!res.ok) throw new Error(String(res.status));
      track("generate_lead", { program });
      navigate("/thank-you/");
    } catch {
      setState("error");
    }
  }

  const field = "mt-2 block w-full rounded-xl border-2 border-ink/55 bg-card px-4 py-3 text-base text-ink placeholder:text-ink-soft/70 focus:border-navy focus:outline-none focus-visible:outline-3 focus-visible:outline-postbox";
  const errorText = "mt-1.5 flex items-center gap-1.5 text-sm font-semibold text-postbox";
  const errorList = Object.entries(errors) as [keyof Errors, string][];

  return (
    <form
      name="inquiry"
      method="POST"
      data-netlify="true"
      netlify-honeypot="bot-field"
      action="/thank-you/"
      onSubmit={onSubmit}
      noValidate
      className="space-y-6"
    >
      <input type="hidden" name="form-name" value="inquiry" />
      <p hidden>
        <label>
          Leave this empty: <input name="bot-field" tabIndex={-1} autoComplete="off" />
        </label>
      </p>

      {errorList.length > 0 && (
        <div ref={summaryRef} tabIndex={-1} role="alert" className="rounded-xl border-2 border-postbox bg-postbox/5 p-4">
          <p className="font-semibold">Please check {errorList.length === 1 ? "one thing" : `${errorList.length} things`}:</p>
          <ul className="mt-2 list-disc pl-5">
            {errorList.map(([k, msg]) => (
              <li key={k}>
                <a className="underline" href={`#f-${k}`}>{msg}</a>
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="f-name" className="font-semibold">Your name</label>
          <input id="f-name" name="name" autoComplete="name" className={field} aria-invalid={!!errors.name} aria-describedby={errors.name ? "e-name" : undefined} />
          {errors.name && <p id="e-name" className={errorText}><AlertCircle className="h-4 w-4" aria-hidden="true" />{errors.name}</p>}
        </div>
        <div>
          <label htmlFor="f-email" className="font-semibold">Email</label>
          <input id="f-email" name="email" type="email" autoComplete="email" inputMode="email" className={field} aria-invalid={!!errors.email} aria-describedby={errors.email ? "e-email" : undefined} />
          {errors.email && <p id="e-email" className={errorText}><AlertCircle className="h-4 w-4" aria-hidden="true" />{errors.email}</p>}
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="f-phone" className="font-semibold">
            Phone <span className="font-normal text-ink-soft">(optional)</span>
          </label>
          <input id="f-phone" name="phone" type="tel" autoComplete="tel" inputMode="tel" className={field} />
        </div>
        <div>
          <label htmlFor="f-program" className="font-semibold">I'm interested in</label>
          <select
            id="f-program"
            name="program"
            value={program}
            onChange={(e) => setProgram(e.target.value)}
            className={`${field} appearance-none bg-[url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 24 24%22 fill=%22none%22 stroke=%22%23211d18%22 stroke-width=%222.5%22%3E%3Cpath d=%22m6 9 6 6 6-6%22/%3E%3C/svg%3E')] bg-[length:1.25rem] bg-[right_1rem_center] bg-no-repeat pr-12`}
            aria-invalid={!!errors.program}
            aria-describedby={errors.program ? "e-program" : undefined}
          >
            <option value="">Choose one…</option>
            {programOptions.map((o) => (
              <option key={o.value} value={o.value}>{o.label}</option>
            ))}
          </select>
          {errors.program && <p id="e-program" className={errorText}><AlertCircle className="h-4 w-4" aria-hidden="true" />{errors.program}</p>}
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        {/* Always rendered so Netlify registers the field; hidden when not relevant. */}
        <div hidden={!forChild}>
          <label htmlFor="f-age" className="font-semibold">
            Child's age <span className="font-normal text-ink-soft">(optional)</span>
          </label>
          <input id="f-age" name="child_age" inputMode="numeric" maxLength={10} className={field} disabled={!forChild} />
        </div>
        <div className={forChild ? "" : "sm:col-span-2"}>
          <label htmlFor="f-preferred" className="font-semibold">
            Preferred class day or camp <span className="font-normal text-ink-soft">(optional)</span>
          </label>
          <input
            id="f-preferred"
            name="preferred"
            value={preferred}
            onChange={(e) => setPreferred(e.target.value)}
            placeholder={program === "adults" ? "e.g. Wednesdays" : "e.g. Tuesdays, or the next summer camp"}
            className={field}
          />
        </div>
      </div>

      <div>
        <label htmlFor="f-message" className="font-semibold">Message</label>
        <textarea
          id="f-message"
          name="message"
          rows={5}
          className={field}
          placeholder="Anything Julie should know, or any questions you have."
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "e-message" : undefined}
        />
        {errors.message && <p id="e-message" className={errorText}><AlertCircle className="h-4 w-4" aria-hidden="true" />{errors.message}</p>}
      </div>

      {state === "error" && (
        <div role="alert" className="rounded-xl border-2 border-postbox bg-postbox/5 p-4">
          <p className="font-semibold">Sorry, your message didn't send.</p>
          <p className="mt-1">
            Please try again, or email Julie at{" "}
            <a className="underline" href={`mailto:${site.contact.email}`}>{site.contact.email}</a> or call{" "}
            <a className="underline" href={site.contact.phoneHref}>{site.contact.phoneDisplay}</a>.
          </p>
        </div>
      )}

      <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:gap-6">
        <button
          type="submit"
          disabled={state === "sending"}
          className="inline-flex min-h-14 items-center gap-2 rounded-full bg-postbox px-8 py-3.5 text-[1.05rem] font-bold text-white transition-all hover:bg-postbox-deep hover:shadow-card disabled:opacity-70"
        >
          {state === "sending" ? <Loader2 className="h-5 w-5 animate-spin" aria-hidden="true" /> : <Send className="h-5 w-5" aria-hidden="true" />}
          {state === "sending" ? "Sending…" : "Send to Julie"}
        </button>
        <p className="text-sm text-ink-soft">Julie uses your details only to reply to you.</p>
      </div>
    </form>
  );
}
