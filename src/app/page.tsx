import Link from "next/link";
import type { Metadata } from "next";
import {
  Arrow,
  Button,
  Container,
  Eyebrow,
  SectionHead,
  Tick,
} from "@/components/ui";
import { AppMockup, BillMockup, DuesMockup, ReportMockup } from "@/components/mockups";
import { FaqList } from "@/components/faq";
import {
  capabilityGroups,
  faqs,
  plans,
  security,
  site,
  stats,
  testimonials,
} from "@/lib/site";

export const metadata: Metadata = {
  description:
    "Byapar eKhata is the accounting app for Nepali businesses. Write bills, track udharo, manage stock and file VAT — online or off.",
};

const problems = [
  {
    problem: "Udharo lives in three different notebooks, and none of them agree.",
    answer: "Every customer and supplier gets one running ledger, updated the moment a bill is written.",
  },
  {
    problem: "You find out a month was bad only when it is already over.",
    answer: "Sales, profit, cash in hand and bank balance are on the first screen you open.",
  },
  {
    problem: "Assembling the VAT file takes your accountant a week you do not have.",
    answer: "A VAT and GST summary that is ready to file, with every figure traceable to a bill.",
  },
  {
    problem: "The internet drops and the whole day's billing stops with it.",
    answer: "Keep billing offline. Entries queue, then sync the moment you have a signal.",
  },
];

const deepDives = [
  {
    id: "billing",
    kicker: "Sales & billing",
    title: "A bill that updates three books at once",
    body: "When you save a bill, Byapar eKhata does not ask you to record it anywhere else. Stock comes down, the party's ledger moves, and cash or bank is posted — in one atomic step, so the three can never disagree.",
    list: [
      "Cash, bank, credit and part-payment",
      "Line and invoice level discounts",
      "Automatic numbering with your invoice prefix",
      "Full and partial returns that reverse everything cleanly",
    ],
    mockup: <BillMockup />,
    flip: false,
  },
  {
    id: "ledger",
    kicker: "Parties & udharo",
    title: "The list that tells you who to call today",
    body: "Balances are stored the way a trader thinks about them — positive means you are owed, negative means you owe. Sort by how long money has been outstanding, and Byapar eKhata drafts the reminder for you.",
    list: [
      "Running statement and credit limit per party",
      "Aged dues sorted by days overdue",
      "Reminders over email, SMS or push, auto-scheduled",
      "A log of every reminder that went out",
    ],
    mockup: <DuesMockup />,
    flip: true,
  },
  {
    id: "reports",
    kicker: "Reports & VAT",
    title: "Eighteen reports, no reformatting",
    body: "Profit and loss, balance sheet, trial balance, VAT summary, stock movement — the reports your bank and your accountant ask for. Each one exports to PDF or Excel, prints, or goes to WhatsApp as it stands.",
    list: [
      "P&L, balance sheet and trial balance",
      "VAT/GST summary with the working shown",
      "Stock summary, movement, low stock and expiry",
      "Customer, supplier, dues, expense and income reports",
    ],
    mockup: <ReportMockup />,
    flip: false,
  },
];

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="bg-brand-wash/70 absolute -top-40 -right-24 h-[420px] w-[420px] rounded-full blur-3xl" />
        <div className="bg-pine-wash/60 absolute top-24 -left-32 h-[360px] w-[360px] rounded-full blur-3xl" />
      </div>

      <Container className="grid items-center gap-16 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:py-24">
        <div className="animate-rise">
          <Eyebrow>Made in Nepal · Works offline</Eyebrow>
          <h1 className="display mt-6 text-[44px] sm:text-[58px] lg:text-[64px]">
            Every sale, every udharo,
            <span className="block">
              one <span className="text-brand">khata</span>.
            </span>
          </h1>
          <p className="text-ink-soft mt-7 max-w-xl text-[17px] leading-relaxed">
            Byapar eKhata is the accounting app for Nepali businesses. Write a bill in seconds, see
            exactly who owes you, and file VAT without touching a calculator — online or off.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <Button href="/download">
              Start free — no card needed
              <Arrow />
            </Button>
            <Button href="/features" variant="ghost">
              See what it does
            </Button>
          </div>

          <p className="text-muted mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 text-[13px]">
            <span className="flex items-center gap-1.5">
              <Tick className="text-pine h-3.5 w-3.5" /> Free plan, forever
            </span>
            <span className="bg-line-strong h-3 w-px" aria-hidden="true" />
            <span>Android &amp; iOS</span>
            <span className="bg-line-strong h-3 w-px" aria-hidden="true" />
            <span className="font-deva">नेपाली र अङ्ग्रेजी</span>
          </p>
        </div>

        <div className="animate-rise [animation-delay:120ms]">
          <AppMockup />
        </div>
      </Container>

      <Container>
        <dl className="border-line grid grid-cols-2 gap-y-8 border-y py-8 lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="px-0 lg:px-8 lg:first:pl-0">
              <dt className="tnum display-sm text-[26px] sm:text-[32px]">{s.value}</dt>
              <dd className="text-muted mt-2 max-w-[190px] text-[13px] leading-snug">{s.label}</dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}

function Problems() {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <SectionHead
          eyebrow="Why businesses switch"
          title="Built for the way trade actually runs here"
          intro="Most accounting software assumes a spreadsheet on a desk and a reliable connection. Nepali shops have neither. Byapar eKhata was designed from the counter outward."
        />

        <div className="mt-14 grid gap-x-16 gap-y-0 md:grid-cols-2">
          {problems.map((p, i) => (
            <div
              key={p.problem}
              className="border-line grid gap-3 border-t py-7 sm:grid-cols-[1fr_1fr] sm:gap-8"
            >
              <p className="text-muted text-[13.5px] leading-relaxed">
                <span className="tnum mr-2 text-line-strong">{String(i + 1).padStart(2, "0")}</span>
                {p.problem}
              </p>
              <p className="text-[14.5px] leading-relaxed font-medium">
                <span className="text-brand mr-1.5">→</span>
                {p.answer}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

function DeepDives() {
  return (
    <section className="bg-paper-2/50 border-line border-y py-20 sm:py-28">
      <Container className="space-y-24 sm:space-y-32">
        {deepDives.map((d, i) => (
          <div
            key={d.id}
            id={d.id}
            className={`grid items-center gap-14 lg:grid-cols-2 ${
              d.flip ? "lg:[&>*:first-child]:order-2" : ""
            }`}
          >
            <div>
              <Eyebrow>{d.kicker}</Eyebrow>
              <h3 className="display-sm mt-5 text-[30px] sm:text-[36px]">{d.title}</h3>
              <p className="text-ink-soft mt-5 text-[16px] leading-relaxed">{d.body}</p>
              <ul className="mt-8 space-y-3">
                {d.list.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-[14.5px]">
                    <Tick className="text-brand mt-0.5 h-4 w-4 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/features"
                className="text-ink hover:text-brand mt-8 inline-flex items-center gap-2 text-[14px] font-medium transition-colors"
              >
                Read the full feature list
                <Arrow />
              </Link>
            </div>

            <div className="lg:px-4">
              <div className="relative">
                <span className="tnum display text-line-strong/60 absolute -top-10 -left-2 hidden text-[64px] lg:block">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {d.mockup}
              </div>
            </div>
          </div>
        ))}
      </Container>
    </section>
  );
}

function Capabilities() {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <SectionHead
            eyebrow="What is inside"
            title="Everything a small business needs, and nothing it doesn't"
          />
          <Button href="/features" variant="ghost" className="self-start">
            Full feature list
            <Arrow />
          </Button>
        </div>

        <div className="mt-14 grid gap-x-12 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {capabilityGroups.map((g) => (
            <div key={g.title} className="border-line border-t pt-6">
              <h3 className="display-sm text-[19px]">{g.title}</h3>
              <ul className="mt-5 space-y-3">
                {g.items.map((item) => (
                  <li key={item} className="text-ink-soft flex items-start gap-2.5 text-[13.5px]">
                    <span className="bg-line-strong mt-[7px] h-1 w-1 shrink-0 rounded-full" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

function OfflineBand() {
  return (
    <section id="offline" className="bg-ink grain relative overflow-hidden text-paper">
      <Container className="relative py-20 sm:py-24">
        <div className="grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <Eyebrow>
              <span className="text-paper/60">Offline-first</span>
            </Eyebrow>
            <h2 className="display-sm mt-6 text-[32px] text-paper sm:text-[42px]">
              The billing never stops, even when the connection does.
            </h2>
            <p className="text-paper/70 mt-6 max-w-xl text-[16px] leading-relaxed">
              Load shedding, no data, one bar of signal in the hills — it makes no difference.
              Entries are kept safely on the device and pushed to the cloud when the network
              returns. Conflicts are resolved automatically, and every device keeps its own sync
              record.
            </p>
            <div className="mt-10 grid grid-cols-2 gap-8 sm:grid-cols-3">
              {[
                { v: "< 1s", l: "to save a bill, offline" },
                { v: "Automatic", l: "sync on reconnect" },
                { v: "Cloud", l: "backup & restore" },
              ].map((s) => (
                <div key={s.l}>
                  <p className="tnum display-sm text-[24px] text-paper">{s.v}</p>
                  <p className="text-paper/55 mt-1.5 text-[12.5px] leading-snug">{s.l}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="border-paper/12 bg-paper/[0.04] rounded-2xl border p-6">
            <div className="flex items-center justify-between">
              <p className="text-[11px] tracking-[0.16em] text-paper/50 uppercase">Sync queue</p>
              <span className="rounded-full bg-pine px-2.5 py-1 text-[10.5px] font-medium text-white">
                Connected
              </span>
            </div>
            <div className="mt-5 space-y-3">
              {[
                { t: "INV-0421 · Rs 13,277", s: "Synced" },
                { t: "Payment in · Ganesh Traders", s: "Synced" },
                { t: "Stock adjustment · 6 items", s: "Synced" },
                { t: "Expense · Electricity bill", s: "Queued offline" },
              ].map((r) => (
                <div
                  key={r.t}
                  className="border-paper/10 flex items-center justify-between border-b pb-3 last:border-b-0 last:pb-0"
                >
                  <p className="text-[13px] text-paper/90">{r.t}</p>
                  <p
                    className={`text-[11px] ${
                      r.s === "Synced" ? "text-paper/45" : "text-brand-bright"
                    }`}
                  >
                    {r.s}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function PricingPreview() {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <SectionHead
          align="center"
          eyebrow="Pricing"
          title="Start free. Pay only when the business grows."
          intro="Prices are in Nepali rupees and billed from inside the app through eSewa, Khalti or Fonepay. Cancel whenever you like."
        />

        <div className="mt-14 grid gap-5 lg:grid-cols-4">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`flex flex-col rounded-2xl border p-6 ${
                plan.featured
                  ? "border-ink bg-ink text-paper shadow-[0_20px_50px_-30px_rgba(26,23,18,0.6)]"
                  : "border-line bg-paper-2/40"
              }`}
            >
              {plan.featured ? (
                <span className="bg-brand mb-4 w-fit rounded-full px-2.5 py-1 text-[10.5px] font-medium text-white">
                  Most popular
                </span>
              ) : null}
              <h3 className="display-sm text-[21px]">{plan.name}</h3>
              <p className={`mt-3 text-[13px] leading-relaxed ${plan.featured ? "text-paper/65" : "text-muted"}`}>
                {plan.blurb}
              </p>
              <p className="tnum mt-6 flex items-baseline gap-1.5">
                <span className="display-sm text-[30px]">
                  {plan.monthly === 0 ? "Free" : `Rs ${plan.monthly.toLocaleString("en-IN")}`}
                </span>
                {plan.monthly > 0 ? (
                  <span className={`text-[12px] ${plan.featured ? "text-paper/55" : "text-muted"}`}>
                    /month
                  </span>
                ) : null}
              </p>
              <ul className="mt-6 space-y-2.5">
                {plan.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-2.5 text-[13px]">
                    <Tick
                      className={`mt-0.5 h-3.5 w-3.5 shrink-0 ${plan.featured ? "text-brand-bright" : "text-brand"}`}
                    />
                    <span className={plan.featured ? "text-paper/85" : "text-ink-soft"}>{h}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/pricing"
                className={`mt-7 inline-flex items-center justify-center gap-2 rounded-full px-4 py-3 text-[13.5px] font-medium transition-colors ${
                  plan.featured
                    ? "bg-paper text-ink hover:bg-brand hover:text-white"
                    : "border-line-strong hover:border-ink border"
                }`}
              >
                Compare plans
              </Link>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

function ReferBand() {
  return (
    <section className="pb-20 sm:pb-28">
      <Container>
        <div className="border-brand/20 bg-brand-wash/60 grid items-center gap-10 rounded-3xl border p-8 sm:p-12 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <Eyebrow>Refer &amp; earn</Eyebrow>
            <h2 className="display-sm mt-5 text-[30px] sm:text-[38px]">
              Earn a share of every business you bring.
            </h2>
            <p className="text-ink-soft mt-5 max-w-xl text-[15.5px] leading-relaxed">
              Share your referral link. When a business you referred subscribes to a paid plan, you
              earn a commission on every payment — 25% at the base rate, rising to 30% as your
              referrals perform. Track sign-ups, wallet balance and payouts from one dashboard.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/refer">
                Join the referral programme
                <Arrow />
              </Button>
              <Button href="/refer#marketer" variant="ghost">
                Become a marketer
              </Button>
            </div>
          </div>

          <div className="border-line rounded-2xl border bg-paper p-6">
            <p className="text-[11px] tracking-[0.16em] text-muted uppercase">Your wallet</p>
            <p className="tnum display-sm mt-3 text-[34px]">Rs 18,450</p>
            <p className="text-muted mt-1 text-[12.5px]">Available for payout</p>
            <div className="border-line mt-5 space-y-3 border-t pt-5 text-[13px]">
              <div className="flex justify-between">
                <span className="text-ink-soft">Base commission</span>
                <span className="tnum font-medium">25%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-ink-soft">Performance rate</span>
                <span className="tnum font-medium text-brand">30%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-ink-soft">Active referrals</span>
                <span className="tnum font-medium">14</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="bg-paper-2/50 border-line border-y py-20 sm:py-28">
      <Container>
        <SectionHead eyebrow="From the counter" title="What owners say after a few months" />
        <div className="mt-14 grid gap-10 lg:grid-cols-3">
          {testimonials.map((t) => (
            <figure key={t.name} className="flex h-full flex-col">
              <span className="display text-brand text-[40px] leading-none">“</span>
              <blockquote className="mt-4 flex-1 text-[15.5px] leading-relaxed">{t.quote}</blockquote>
              <figcaption className="border-line mt-6 border-t pt-5">
                <p className="text-[14px] font-medium">{t.name}</p>
                <p className="text-muted text-[12.5px]">{t.role}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </Container>
    </section>
  );
}

function Security() {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionHead
            eyebrow="Security & backup"
            title="Books you can trust, and get back"
            intro="Your ledger is the record of your business. It is treated that way: encrypted, backed up, and recoverable."
          />

          <div className="grid gap-x-12 gap-y-8 sm:grid-cols-2">
            {security.map((s) => (
              <div key={s.title} className="border-line border-t pt-6">
                <h3 className="text-[15.5px] font-medium">{s.title}</h3>
                <p className="text-ink-soft mt-3 text-[13.5px] leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

function Faq() {
  return (
    <section className="pb-20 sm:pb-28">
      <Container>
        <div className="grid gap-14 lg:grid-cols-[0.7fr_1.3fr]">
          <div>
            <SectionHead eyebrow="Questions" title="Answers, before you ask" />
            <p className="text-muted mt-6 text-[13.5px] leading-relaxed">
              Still unsure? Write to us at{" "}
              <a href={`mailto:${site.supportEmail}`} className="text-ink underline underline-offset-4">
                {site.supportEmail}
              </a>{" "}
              or visit the{" "}
              <Link href="/help" className="text-ink underline underline-offset-4">
                help centre
              </Link>
              .
            </p>
          </div>
          <FaqList items={faqs.slice(0, 5)} />
        </div>
      </Container>
    </section>
  );
}

function Closing() {
  return (
    <section className="pb-24">
      <Container>
        <div className="bg-ink grain relative overflow-hidden rounded-3xl px-8 py-16 text-center text-paper sm:px-16">
          <h2 className="display mx-auto max-w-3xl text-[34px] sm:text-[48px]">
            Put your shop&apos;s books in order this week.
          </h2>
          <p className="text-paper/70 mx-auto mt-6 max-w-xl text-[16px] leading-relaxed">
            Download Byapar eKhata, add your first product and write your first bill in the time it
            takes to open one notebook.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <a
              href={site.playStore}
              className="bg-paper text-ink hover:bg-brand inline-flex items-center gap-2 rounded-full px-5 py-3.5 text-[14px] font-medium transition-colors hover:text-white"
            >
              Get it on Google Play
              <Arrow />
            </a>
            <a
              href={site.appStore}
              className="border-paper/25 hover:border-paper inline-flex items-center gap-2 rounded-full border px-5 py-3.5 text-[14px] font-medium text-paper transition-colors"
            >
              Download on the App Store
            </a>
          </div>
          <p className="text-paper/45 mt-8 text-[12.5px]">
            Free plan · No card required · Cancel any time
          </p>
        </div>
      </Container>
    </section>
  );
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <Problems />
      <DeepDives />
      <Capabilities />
      <OfflineBand />
      <PricingPreview />
      <ReferBand />
      <Testimonials />
      <Security />
      <Faq />
      <Closing />
    </>
  );
}
