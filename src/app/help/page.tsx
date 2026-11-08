import type { Metadata } from "next";
import { Arrow, Button, Container, Eyebrow, SectionHead } from "@/components/ui";
import { PageHero } from "@/components/page-hero";
import { FaqList } from "@/components/faq";
import { faqs, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Help centre",
  description:
    "Answers for Byapar eKhata: getting started, VAT and PAN setup, offline mode, staff access, billing, backups and data export.",
};

const guides = [
  {
    id: "start",
    k: "Getting started",
    t: "Set up a business in about ten minutes",
    steps: [
      "Install the app and sign in with your mobile number. You will get a one-time code — no password to remember.",
      "Add your business: name, type, address and, if you have them, your PAN and VAT numbers. These appear on your invoices.",
      "Set your invoice prefix and the fiscal year you work to. Byapar eKhata numbers your bills from here, automatically.",
      "Add a few products with their purchase and selling prices, and the unit you buy and sell them in.",
      "Write your first bill. Stock, the party ledger and your cash or bank balance all update at the same time.",
    ],
  },
  {
    id: "vat",
    k: "VAT & PAN",
    t: "Where VAT lives in Byapar eKhata",
    steps: [
      "Record your PAN and VAT numbers once in business settings. They print on every tax invoice.",
      "Mark each product as VAT-applicable or exempt. Byapar eKhata applies 13% to the taxable lines only.",
      "Choose whether prices you enter are VAT-inclusive or exclusive, per business, so the screen matches your habit.",
      "Run the VAT summary for any date range. It shows taxable sales, VAT collected, taxable purchases and VAT paid, with the net position.",
      "Export the summary to PDF or Excel straight from the report screen and hand it to your accountant.",
    ],
  },
  {
    id: "sync",
    k: "Offline & sync",
    t: "What happens when the connection drops",
    steps: [
      "Everything you can do online, you can do offline: bills, payments, purchases, stock counts and expenses.",
      "Offline entries are stored on the device in a queue, with their own reference so nothing is lost or duplicated.",
      "When a connection returns, the queue uploads on its own. You can watch it clear in the sync screen.",
      "If the same record was changed on two devices, the most recent change wins, and the full history stays visible.",
      "You can back up to the cloud on demand, or let scheduled backups run. Restores bring a business back to a chosen point.",
    ],
  },
];

const statusItems = [
  { n: "Mobile app & sync", s: "Operational" },
  { n: "Web app", s: "Operational" },
  { n: "Payment gateways", s: "Operational" },
  { n: "SMS & push notifications", s: "Operational" },
];

export default function HelpPage() {
  return (
    <>
      <PageHero
        eyebrow="Help centre"
        title="Guides, answers and somewhere to ask"
        intro="Everything you need to get running and keep running. If the answer is not here, write to support — a person reads it."
      >
        <div className="flex flex-wrap gap-3">
          <Button href={`mailto:${site.supportEmail}`}>
            Email support
            <Arrow />
          </Button>
          <Button href="/download" variant="ghost">
            Download the app
          </Button>
        </div>
      </PageHero>

      {guides.map((g, i) => (
        <section
          key={g.id}
          id={g.id}
          className={`scroll-mt-24 py-16 sm:py-20 ${i % 2 === 1 ? "bg-paper-2/50 border-line border-y" : ""}`}
        >
          <Container>
            <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
              <div>
                <Eyebrow>{g.k}</Eyebrow>
                <h2 className="display-sm mt-5 text-[26px] sm:text-[32px]">{g.t}</h2>
              </div>
              <ol className="space-y-0">
                {g.steps.map((s, n) => (
                  <li key={s} className="border-line flex gap-5 border-t py-5 last:border-b">
                    <span className="tnum text-brand shrink-0 pt-0.5 text-[13px] font-semibold">
                      {String(n + 1).padStart(2, "0")}
                    </span>
                    <p className="text-ink-soft text-[14.5px] leading-relaxed">{s}</p>
                  </li>
                ))}
              </ol>
            </div>
          </Container>
        </section>
      ))}

      <section id="faq" className="scroll-mt-24 py-20">
        <Container>
          <SectionHead align="center" eyebrow="FAQ" title="Frequently asked questions" />
          <div className="mx-auto mt-12 max-w-3xl">
            <FaqList items={faqs} />
          </div>
        </Container>
      </section>

      <section id="status" className="scroll-mt-24 border-line border-t bg-paper-2/50 py-20">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <SectionHead
              eyebrow="Service status"
              title="Everything currently working"
              intro="We publish incidents when they happen and we do not quietly take features down. If something is broken, it shows here."
            />
            <div className="border-line bg-paper rounded-2xl border p-6">
              {statusItems.map((s) => (
                <div
                  key={s.n}
                  className="border-line flex items-center justify-between border-b py-4 last:border-b-0"
                >
                  <p className="text-[14.5px]">{s.n}</p>
                  <span className="bg-pine-wash text-pine flex items-center gap-2 rounded-full px-3 py-1 text-[12px] font-medium">
                    <span className="bg-pine h-1.5 w-1.5 rounded-full" />
                    {s.s}
                  </span>
                </div>
              ))}
              <p className="text-muted mt-5 text-[12.5px]">
                Last checked on the 1st of this month. Support hours are Sunday to Friday, 9am to 5pm
                Nepal time.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="pb-24">
        <Container>
          <div className="border-line flex flex-col items-start justify-between gap-6 rounded-3xl border p-8 sm:flex-row sm:items-center sm:p-10">
            <div>
              <h2 className="display-sm text-[24px]">Still stuck?</h2>
              <p className="text-ink-soft mt-2 max-w-lg text-[14.5px]">
                Send us the invoice number and a screenshot if you have one. Most issues are resolved
                the same working day.
              </p>
            </div>
            <Button href={`mailto:${site.supportEmail}`}>
              Contact support
              <Arrow />
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
