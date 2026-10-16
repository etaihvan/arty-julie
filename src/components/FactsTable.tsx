import { Info } from "lucide-react";
import type { Fact } from "../content/programs";

/** "At a glance" table of program details. */
export function FactsTable({ facts, caption }: { facts: Fact[]; caption: string }) {
  return (
    <div className="border border-ink/20 bg-card shadow-card rounded-2xl overflow-hidden">
      <table className="w-full text-left text-[0.98rem]">
        <caption className="bg-navy px-5 py-3.5 text-left font-serif text-xl font-bold text-paper">
          {caption}
        </caption>
        <tbody>
          {facts.map((f) => (
            <tr key={f.label} className="border-b border-line last:border-b-0 align-top">
              <th scope="row" className="w-[38%] px-5 py-3 font-semibold text-ink-soft">
                {f.label}
              </th>
              <td className="px-5 py-3">
                <span className={f.confirm ? "inline-flex items-start gap-1.5" : ""}>
                  {f.confirm && <Info className="mt-1 h-4 w-4 shrink-0 text-navy" aria-hidden="true" />}
                  <span>{f.value}</span>
                </span>
                {f.note && <span className="mt-1 block text-sm text-ink-soft">{f.note}</span>}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
