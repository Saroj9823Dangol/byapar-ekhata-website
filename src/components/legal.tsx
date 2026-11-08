import type { ReactNode } from "react";
import { Container } from "@/components/ui";

export type LegalSection = {
  id: string;
  title: string;
  body: ReactNode;
};

export function LegalPage({
  eyebrow,
  title,
  updated,
  summary,
  reviewNote,
  sections,
}: {
  eyebrow: string;
  title: string;
  updated: string;
  summary: ReactNode;
  reviewNote?: ReactNode;
  sections: LegalSection[];
}) {
  return (
    <>
      <section className="border-line border-b">
        <Container className="py-16 sm:py-20">
          <p className="text-muted flex items-center gap-2.5 text-[11px] font-semibold tracking-[0.18em] uppercase">
            <span className="bg-brand h-px w-6" aria-hidden="true" />
            {eyebrow}
          </p>
          <h1 className="display mt-6 max-w-3xl text-[38px] sm:text-[50px]">{title}</h1>
          <p className="text-muted mt-6 text-[13.5px]">Last updated {updated}</p>
          <div className="text-ink-soft mt-8 max-w-2xl text-[16px] leading-relaxed">{summary}</div>
          {reviewNote ? (
            <div className="border-amber/30 bg-amber-wash mt-8 max-w-2xl rounded-xl border px-5 py-4">
              <p className="text-[13px] leading-relaxed text-[#7a5210]">{reviewNote}</p>
            </div>
          ) : null}
        </Container>
      </section>

      <Container className="py-16">
        <div className="grid gap-14 lg:grid-cols-[220px_1fr]">
          <nav aria-label="Contents" className="lg:sticky lg:top-24 lg:self-start">
            <p className="text-muted text-[11px] font-semibold tracking-[0.14em] uppercase">
              Contents
            </p>
            <ol className="mt-5 space-y-2.5">
              {sections.map((s, i) => (
                <li key={s.id}>
                  <a
                    href={`#${s.id}`}
                    className="text-ink-soft hover:text-ink flex gap-3 text-[13px] leading-snug transition-colors"
                  >
                    <span className="tnum text-line-strong">{String(i + 1).padStart(2, "0")}</span>
                    {s.title}
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          <div className="max-w-3xl">
            {sections.map((s, i) => (
              <section key={s.id} id={s.id} className="scroll-mt-24 pb-12">
                <h2 className="display-sm flex gap-4 text-[22px] sm:text-[26px]">
                  <span className="tnum text-brand">{String(i + 1).padStart(2, "0")}</span>
                  {s.title}
                </h2>
                <div className="legal-body text-ink-soft mt-5 space-y-4 text-[14.5px] leading-relaxed">
                  {s.body}
                </div>
              </section>
            ))}
          </div>
        </div>
      </Container>
    </>
  );
}
