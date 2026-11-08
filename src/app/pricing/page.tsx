import type { Metadata } from "next";
import Link from "next/link";
import { Arrow, Button, Container, Cross, SectionHead, Tick } from "@/components/ui";
import { PageHero } from "@/components/page-hero";
import { planMatrix, plans, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Simple plans in Nepali rupees. Start on the free plan and upgrade to Basic, Premium or Enterprise when the business needs it. Pay with eSewa, Khalti or Fonepay.",
};

function rupees(n: number) {
  return n.toLocaleString("en-IN");
}

const billingFaqs = [
  {
    q: "How do I pay?",
    a: "From inside the app, using eSewa, Khalti or Fonepay. You can pay monthly or yearly, and the yearly price is ten months — two months free.",
  },
  {
    q: "What happens after the 30-day trial?",
    a: "Nothing is deleted. If you do not upgrade, the account drops back to the Free plan automatically and your data stays exactly where it is.",
  },
  {
    q: "Can I change plans later?",
    a: "Yes. Upgrade or downgrade at any time. Upgrades take effect immediately and the difference is adjusted against your next payment.",
  },
  {
    q: "Do you offer refunds?",
    a: "Subscriptions are billed for a period already in use, so we do not refund part of a month. If something has gone wrong with a charge, write to us and we will sort it out. See the refund section of our terms for detail.",
  },
];

export default function PricingPage() {
  return (
    <>
      <PageHero
        eyebrow="Pricing"
        title="Priced for shops, not for boardrooms"
        intro="Every plan includes billing, the ledger, stock, offline mode and Nepal-ready VAT fields. What changes is scale — how many businesses, how many staff, and how much reporting you need."
        meta={
          <p className="text-muted text-[13.5px]">
            Paid plans start with a 30-day trial · No card required to begin
          </p>
        }
      />

      <Container className="py-16">
        <div className="grid gap-5 lg:grid-cols-4">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`flex flex-col rounded-2xl border p-6 ${
                plan.featured
                  ? "border-ink bg-ink text-paper shadow-[0_24px_60px_-34px_rgba(26,23,18,0.65)]"
                  : "border-line bg-paper-2/35"
              }`}
            >
              <div className="flex items-center justify-between">
                <h2 className="display-sm text-[22px]">{plan.name}</h2>
                {plan.featured ? (
                  <span className="bg-brand rounded-full px-2.5 py-1 text-[10.5px] font-medium text-white">
                    Popular
                  </span>
                ) : null}
              </div>

              <p
                className={`mt-4 min-h-[42px] text-[13px] leading-relaxed ${
                  plan.featured ? "text-paper/65" : "text-muted"
                }`}
              >
                {plan.blurb}
              </p>

              <div className="mt-6">
                <p className="tnum flex items-baseline gap-1.5">
                  <span className="display-sm text-[34px]">
                    {plan.monthly === 0 ? "Free" : `Rs ${rupees(plan.monthly)}`}
                  </span>
                  {plan.monthly > 0 ? (
                    <span className={`text-[12px] ${plan.featured ? "text-paper/55" : "text-muted"}`}>
                      /month
                    </span>
                  ) : null}
                </p>
                <p className={`mt-2 text-[12px] ${plan.featured ? "text-paper/50" : "text-muted"}`}>
                  {plan.monthly === 0
                    ? "Forever. No card."
                    : `or Rs ${rupees(plan.monthly * 10)} a year · 2 months free`}
                </p>
              </div>

              <ul className="mt-7 flex-1 space-y-3">
                {plan.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-2.5 text-[13.5px]">
                    <Tick
                      className={`mt-0.5 h-3.5 w-3.5 shrink-0 ${
                        plan.featured ? "text-[#ffb4ac]" : "text-brand"
                      }`}
                    />
                    <span className={plan.featured ? "text-paper/85" : "text-ink-soft"}>{h}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="/download"
                className={`mt-8 inline-flex items-center justify-center gap-2 rounded-full px-4 py-3 text-[13.5px] font-medium transition-colors ${
                  plan.featured
                    ? "bg-paper text-ink hover:bg-brand hover:text-white"
                    : "border-line-strong hover:border-ink border"
                }`}
              >
                {plan.monthly === 0 ? "Start free" : `Choose ${plan.name}`}
                <Arrow />
              </Link>
            </div>
          ))}
        </div>

        <p className="text-muted mt-8 text-center text-[13px]">
          All prices in Nepali rupees, inclusive of applicable taxes. Payments are processed by
          eSewa, Khalti and Fonepay.
        </p>
      </Container>

      {/* matrix */}
      <section className="bg-paper-2/50 border-line border-y py-20">
        <Container>
          <SectionHead eyebrow="Compare" title="Every plan, side by side" />
          <div className="border-line mt-12 overflow-x-auto rounded-2xl border bg-paper">
            <table className="w-full min-w-[720px] border-collapse text-left">
              <thead>
                <tr className="border-line border-b">
                  <th className="text-muted px-5 py-4 text-[11px] font-semibold tracking-[0.14em] uppercase">
                    Feature
                  </th>
                  {plans.map((p) => (
                    <th
                      key={p.id}
                      className="display-sm px-5 py-4 text-center text-[16px] whitespace-nowrap"
                    >
                      {p.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {planMatrix.map((row) => (
                  <tr key={row.label} className="border-line border-b last:border-b-0">
                    <th className="text-ink-soft px-5 py-4 text-[13.5px] font-normal">
                      {row.label}
                    </th>
                    {row.values.map((v, i) => (
                      <td key={i} className="px-5 py-4 text-center">
                        {v === "yes" ? (
                          <Tick className="text-pine mx-auto h-4 w-4" />
                        ) : v === "no" ? (
                          <Cross className="mx-auto" muted />
                        ) : (
                          <span className="tnum text-[13.5px] font-medium">{v}</span>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Container>
      </section>

      {/* payments */}
      <section className="py-20">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <SectionHead
                eyebrow="Paying"
                title="Pay the way you already pay"
                intro="Subscriptions are billed in Nepali rupees and settled through the wallets and banks you use every day."
              />
              <div className="mt-12 space-y-4">
                {[
                  { n: "eSewa", d: "Wallet payment, instant activation." },
                  { n: "Khalti", d: "Wallet or linked bank account." },
                  { n: "Fonepay", d: "Direct from mobile banking and connect IPS." },
                ].map((p) => (
                  <div
                    key={p.n}
                    className="border-line flex items-center justify-between gap-6 border-t pt-4"
                  >
                    <p className="text-[15px] font-medium">{p.n}</p>
                    <p className="text-muted text-[13px]">{p.d}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <SectionHead eyebrow="Billing questions" title="The practical details" />
              <div className="border-line mt-12 border-t">
                {billingFaqs.map((f, i) => (
                  <details key={f.q} className="border-line group border-b" open={i === 0}>
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 marker:content-none">
                      <span className="text-[15.5px]">{f.q}</span>
                      <span className="border-line-strong text-ink-soft flex h-6 w-6 shrink-0 items-center justify-center rounded-full border transition-transform duration-300 group-open:rotate-45">
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
                    <p className="text-ink-soft pb-6 text-[14px] leading-relaxed">{f.a}</p>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="pb-24">
        <Container>
          <div className="border-line bg-paper-2/40 flex flex-col items-start justify-between gap-6 rounded-3xl border p-8 sm:flex-row sm:items-center sm:p-10">
            <div>
              <h2 className="display-sm text-[24px]">Not sure which plan fits?</h2>
              <p className="text-ink-soft mt-2 text-[14.5px]">
                Tell us how many counters and staff you have. We will tell you honestly.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button href="/contact">
                Talk to us
                <Arrow />
              </Button>
              <Button href={`mailto:${site.email}`} variant="ghost">
                {site.email}
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
