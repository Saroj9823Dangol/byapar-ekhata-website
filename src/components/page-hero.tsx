import type { ReactNode } from "react";
import { Container, Eyebrow } from "@/components/ui";

export function PageHero({
  eyebrow,
  title,
  intro,
  meta,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
  meta?: ReactNode;
  children?: ReactNode;
}) {
  return (
    <section className="border-line border-b">
      <Container className="py-16 sm:py-20">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1 className="display mt-6 max-w-3xl text-[38px] sm:text-[52px]">{title}</h1>
        {intro ? (
          <p className="text-ink-soft mt-6 max-w-2xl text-[17px] leading-relaxed">{intro}</p>
        ) : null}
        {meta ? <div className="mt-6">{meta}</div> : null}
        {children ? <div className="mt-10">{children}</div> : null}
      </Container>
    </section>
  );
}
