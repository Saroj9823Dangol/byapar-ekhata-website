import { faqs } from "@/lib/site";

export function FaqList({ items = faqs }: { items?: { q: string; a: string }[] }) {
  return (
    <div className="border-line border-t">
      {items.map((item, i) => (
        <details key={item.q} className="group border-line border-b" open={i === 0}>
          <summary className="flex cursor-pointer list-none items-start justify-between gap-6 py-5 marker:content-none">
            <span className="display-sm pr-2 text-[17px] sm:text-[19px]">{item.q}</span>
            <span className="border-line-strong text-ink-soft mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border transition-transform duration-300 group-open:rotate-45">
              <svg viewBox="0 0 14 14" className="h-3 w-3" aria-hidden="true">
                <path
                  d="M7 2.5v9M2.5 7h9"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </summary>
          <p className="text-ink-soft max-w-2xl pr-10 pb-6 text-[14.5px] leading-relaxed">
            {item.a}
          </p>
        </details>
      ))}
    </div>
  );
}
