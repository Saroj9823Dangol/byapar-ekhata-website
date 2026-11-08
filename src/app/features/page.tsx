import type { Metadata } from "next";
import { Container, SectionHead, Tick } from "@/components/ui";
import { PageHero } from "@/components/page-hero";
import { capabilityGroups, flowFeatures, transactionTypes } from "@/lib/site";

export const metadata: Metadata = {
  title: "Features",
  description:
    "Sales and billing, purchases, inventory, parties and ledgers, cash and bank, eighteen reports, VAT, credit reminders, offline mode and staff access — everything inside Byapar eKhata.",
};

const reportList = [
  "Profit & Loss",
  "Balance Sheet",
  "Trial Balance",
  "VAT / GST summary",
  "Sales",
  "Purchase",
  "Stock summary",
  "Low stock",
  "Stock movement",
  "Expiry",
  "Customer",
  "Supplier",
  "Outstanding dues",
  "Expense",
  "Income",
  "Cash",
  "Bank",
  "Day book",
];

const accessGroups = [
  { name: "Full access", note: "Owner or manager. Sees and does everything." },
  { name: "Sales only", note: "Billing and customer parties, nothing else." },
  { name: "Purchase only", note: "Suppliers, purchase bills and stock in." },
  { name: "Inventory only", note: "Products, stock counts and adjustments." },
  { name: "Reports only", note: "Read the books, change nothing." },
  { name: "Staff", note: "Day-to-day entries without settings or pricing." },
  { name: "Read only", note: "A viewer account for partners or auditors." },
];

export default function FeaturesPage() {
  return (
    <>
      <PageHero
        eyebrow="Features"
        title="One app that covers the whole of a small business"
        intro="Byapar eKhata runs on a single double-entry engine. Every screen you use — a bill, a payment, a cash deposit — writes to the same ledger, so no two reports can ever disagree about the same rupee."
      >
        <nav className="flex flex-wrap gap-2" aria-label="Feature sections">
          {flowFeatures.map((f) => (
            <a
              key={f.id}
              href={`#${f.id}`}
              className="border-line text-ink-soft hover:border-ink hover:text-ink rounded-full border px-3.5 py-1.5 text-[12.5px] transition-colors"
            >
              {f.kicker}
            </a>
          ))}
        </nav>
      </PageHero>

      <Container className="divide-line divide-y">
        {flowFeatures.map((f, i) => (
          <section key={f.id} id={f.id} className="scroll-mt-24 py-14 sm:py-16">
            <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr]">
              <div>
                <p className="tnum display text-line-strong text-[42px]">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <p className="text-muted mt-3 text-[11px] font-semibold tracking-[0.16em] uppercase">
                  {f.kicker}
                </p>
                <h2 className="display-sm mt-4 text-[26px] sm:text-[30px]">{f.title}</h2>
              </div>

              <div>
                <p className="text-ink-soft text-[16px] leading-relaxed">{f.body}</p>
                <ul className="mt-7 grid gap-x-10 gap-y-3 sm:grid-cols-2">
                  {f.points.map((p) => (
                    <li key={p} className="flex items-start gap-2.5 text-[14px]">
                      <Tick className="text-brand mt-0.5 h-3.5 w-3.5 shrink-0" />
                      <span className="text-ink-soft">{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        ))}
      </Container>

      {/* transaction engine */}
      <section className="bg-paper-2/50 border-line border-y py-20">
        <Container>
          <SectionHead
            eyebrow="One engine"
            title="Fourteen transaction types, one set of rules"
            intro="Whatever you record, the same accounting rules apply. Entries are written atomically: if any part of a transaction fails, none of it is saved, so the books never end up half-written."
          />
          <ul className="mt-12 flex flex-wrap gap-2.5">
            {transactionTypes.map((t) => (
              <li
                key={t}
                className="border-line bg-paper text-ink-soft rounded-full border px-4 py-2 text-[13px]"
              >
                {t}
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* reports */}
      <section id="reports" className="scroll-mt-24 py-20">
        <Container>
          <SectionHead
            eyebrow="Reports"
            title="Eighteen reports your accountant will accept"
            intro="Each report exports to PDF or Excel, prints on any printer or shares to WhatsApp, exactly as it appears on screen."
          />
          <ul className="mt-12 grid gap-x-10 gap-y-0 sm:grid-cols-2 lg:grid-cols-3">
            {reportList.map((r) => (
              <li
                key={r}
                className="border-line flex items-center gap-3 border-t py-4 text-[14px]"
              >
                <span className="bg-brand h-1 w-1 rounded-full" />
                {r}
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* access */}
      <section className="pb-20">
        <Container>
          <SectionHead
            eyebrow="Staff & access"
            title="The right access for every person behind the counter"
            intro="Access groups are enforced on the server for every request, so permissions hold on the phone and on the web alike."
          />
          <div className="mt-12 grid gap-x-12 gap-y-0 sm:grid-cols-2 lg:grid-cols-3">
            {accessGroups.map((g) => (
              <div key={g.name} className="border-line border-t py-5">
                <h3 className="text-[15px] font-medium">{g.name}</h3>
                <p className="text-muted mt-2 text-[13px] leading-relaxed">{g.note}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* all capabilities */}
      <section className="bg-paper-2/50 border-line border-y py-20">
        <Container>
          <SectionHead eyebrow="In full" title="The complete list" />
          <div className="mt-12 grid gap-x-12 gap-y-10 sm:grid-cols-2">
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
          <div className="border-line mt-12 border-t pt-8">
            <p className="text-muted text-[13.5px]">
              Businesses, parties, products, sales, purchases, returns, payments, cash and bank
              accounts, expenses, income, reminders, backups, SMS campaigns and subscriptions are
              all included — no add-on modules to buy.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
