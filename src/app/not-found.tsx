import Link from "next/link";
import { Arrow, Container } from "@/components/ui";

export default function NotFound() {
  return (
    <Container className="flex min-h-[60vh] flex-col justify-center py-24">
      <p className="text-muted text-[11px] font-semibold tracking-[0.18em] uppercase">404</p>
      <h1 className="display mt-6 max-w-xl text-[38px] sm:text-[52px]">
        This page is not in the khata.
      </h1>
      <p className="text-ink-soft mt-6 max-w-lg text-[16px] leading-relaxed">
        The link may be old, or the page may have moved. Everything else is still where you left it.
      </p>
      <div className="mt-9 flex flex-wrap gap-3">
        <Link
          href="/"
          className="bg-ink text-paper hover:bg-brand inline-flex items-center gap-2 rounded-full px-5 py-3 text-[14px] font-medium transition-colors"
        >
          Back to the home page
          <Arrow />
        </Link>
        <Link
          href="/help"
          className="border-line-strong hover:border-ink inline-flex items-center gap-2 rounded-full border px-5 py-3 text-[14px] font-medium transition-colors"
        >
          Help centre
        </Link>
      </div>
    </Container>
  );
}
