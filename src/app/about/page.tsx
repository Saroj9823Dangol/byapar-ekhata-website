import type { Metadata } from "next";
import { Arrow, Button, Container, SectionHead } from "@/components/ui";
import { PageHero } from "@/components/page-hero";
import { site, stats } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Byapar eKhata is built in Kathmandu for Nepali businesses — a digital khata with a real double-entry accounting core underneath.",
};

const principles = [
  {
    t: "Plain language over accounting jargon",
    d: "The app says udharo, not accounts receivable. It says cash in hand, not cash balance b/f. The accounting underneath is rigorous, but you should never have to learn our vocabulary to run your shop.",
  },
  {
    t: "Works first, syncs later",
    d: "If the app stops when the internet stops, it is not an app for Nepal. Offline is not a setting we added; it is the assumption the product was designed around.",
  },
  {
    t: "Your data leaves when you want it to",
    d: "Every report exports. A full export is a request, not a negotiation. We would rather earn your business each month than trap it.",
  },
  {
    t: "Built to be checked",
    d: "Double-entry, atomic transactions and an audit log mean that when a figure looks wrong, you can trace it back to the entry that produced it.",
  },
];

const milestones = [
  {
    y: "2024",
    t: "The first khata",
    d: "Started after watching a hardware shop in Lalitpur run three separate notebooks, and lose money in the gaps between them.",
  },
  {
    y: "2025",
    t: "From khata to books",
    d: "A double-entry engine underneath the simple screens — so the ledger, VAT and balance sheet all agree without being maintained twice.",
  },
  {
    y: "2025",
    t: "Offline, properly",
    d: "Full offline billing with a local queue and automatic conflict handling, tested where load shedding is still part of the day.",
  },
  {
    y: "2026",
    t: "A network of referrers",
    d: "Accountants, computer shops and consultants across the country now bring businesses to Byapar eKhata and earn from it.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title="We started with a notebook, because most businesses here do"
        intro="Byapar eKhata is built in Kathmandu by a small team of engineers and accountants who kept meeting the same problem: a business that is doing well, but cannot tell you how well, because its records live in five places."
      />

      <Container>
        <dl className="grid grid-cols-2 gap-y-8 py-12 lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="border-line border-t pt-6 pr-6">
              <dt className="tnum display-sm text-[28px]">{s.value}</dt>
              <dd className="text-muted mt-2 max-w-[190px] text-[13px] leading-snug">{s.label}</dd>
            </div>
          ))}
        </dl>
      </Container>

      <section className="border-line border-y bg-paper-2/50 py-20">
        <Container>
          <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr]">
            <SectionHead
              eyebrow="What we believe"
              title="Four principles we have not moved on"
            />
            <div className="grid gap-x-12 gap-y-8 sm:grid-cols-2">
              {principles.map((p) => (
                <div key={p.t} className="border-line border-t pt-6">
                  <h3 className="display-sm text-[18px]">{p.t}</h3>
                  <p className="text-ink-soft mt-3 text-[13.5px] leading-relaxed">{p.d}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <SectionHead eyebrow="How we got here" title="A short history" />
          <div className="mt-12">
            {milestones.map((m) => (
              <div
                key={m.t}
                className="border-line grid gap-3 border-t py-7 sm:grid-cols-[120px_1fr_2fr] sm:gap-8"
              >
                <p className="tnum text-muted text-[14px]">{m.y}</p>
                <p className="text-[15.5px] font-medium">{m.t}</p>
                <p className="text-ink-soft text-[14px] leading-relaxed">{m.d}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="pb-24">
        <Container>
          <div className="border-line bg-paper-2/40 grid gap-10 rounded-3xl border p-8 sm:p-12 lg:grid-cols-[1.3fr_1fr] lg:items-center">
            <div>
              <h2 className="display-sm text-[26px] sm:text-[32px]">
                Built in Nepal, for Nepal — and honest about it
              </h2>
              <p className="text-ink-soft mt-5 text-[15.5px] leading-relaxed">
                We are not a foreign product with a Nepali price tag. Payments go through Nepali
                gateways, reminders run on Nepal time, VAT and PAN fields are part of the core
                schema, and support answers in Nepali. Everything else is a detail.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <Button href="/contact">
                Get in touch
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
