/* ------------------------------------------------------------------ *
 * Product UI rendered in markup rather than shipped as an image, so it
 * stays crisp at any zoom and reflects what the app actually shows.
 * ------------------------------------------------------------------ */

const bars = [38, 52, 44, 68, 57, 79, 62];
const days = ["S", "M", "T", "W", "T", "F", "S"];

function Chart() {
  return (
    <div className="flex h-[62px] items-end gap-1.5">
      {bars.map((h, i) => (
        <div key={i} className="flex flex-1 flex-col items-center gap-1.5">
          <div className="flex h-[52px] w-full items-end">
            <div
              className={`w-full rounded-[3px] ${i === 5 ? "bg-brand" : "bg-line-strong"}`}
              style={{ height: `${h}%` }}
            />
          </div>
          <span className="text-muted text-[8px] leading-none">{days[i]}</span>
        </div>
      ))}
    </div>
  );
}

const recent = [
  { no: "INV-0421", who: "Ram Bahadur", amt: "3,250", mode: "Credit" },
  { no: "INV-0420", who: "Sita Devi", amt: "1,180", mode: "Cash" },
  { no: "INV-0419", who: "Ganesh Traders", amt: "9,400", mode: "Bank" },
  { no: "INV-0418", who: "Walk-in", amt: "640", mode: "Cash" },
];

export function AppMockup() {
  return (
    <div className="relative mx-auto w-[300px] shrink-0">
      {/* device */}
      <div className="border-line-strong bg-ink relative rounded-[38px] border p-[9px] shadow-[0_28px_60px_-30px_rgba(26,23,18,0.55)]">
        <div className="overflow-hidden rounded-[30px] bg-paper">
          {/* status bar */}
          <div className="flex items-center justify-between px-5 pt-3 pb-2">
            <span className="tnum text-[10px] font-semibold">9:41</span>
            <span className="bg-ink h-[18px] w-[62px] rounded-full" />
            <svg viewBox="0 0 28 10" className="h-2.5 w-6 text-ink" aria-hidden="true">
              <rect x="0" y="3" width="2.5" height="7" rx="0.8" fill="currentColor" />
              <rect x="4" y="2" width="2.5" height="8" rx="0.8" fill="currentColor" />
              <rect x="8" y="0.5" width="2.5" height="9.5" rx="0.8" fill="currentColor" />
              <rect
                x="13"
                y="1"
                width="12"
                height="8"
                rx="2"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
              />
              <rect x="14.5" y="2.5" width="7" height="5" rx="1" fill="currentColor" />
            </svg>
          </div>

          {/* app header */}
          <div className="border-line flex items-center justify-between border-b px-5 py-3">
            <div>
              <p className="text-[9px] tracking-wide text-muted uppercase">Business</p>
              <p className="text-[12.5px] font-semibold">Sunita Kirana Store</p>
            </div>
            <div className="border-line flex h-7 w-7 items-center justify-center rounded-full border">
              <span className="bg-brand h-1.5 w-1.5 rounded-full" />
            </div>
          </div>

          <div className="space-y-2.5 px-4 pt-3 pb-4">
            {/* balance card */}
            <div className="bg-ink rounded-[14px] px-4 py-3.5 text-paper">
              <p className="text-[9px] tracking-wide text-paper/60 uppercase">Cash in hand</p>
              <p className="tnum mt-1 text-[22px] leading-none font-semibold">Rs 42,180</p>
              <div className="mt-3 flex items-center gap-4 border-t border-paper/15 pt-2.5">
                <div>
                  <p className="text-[8.5px] tracking-wide text-paper/55 uppercase">Bank</p>
                  <p className="tnum text-[11.5px] font-medium">1,18,600</p>
                </div>
                <div className="h-6 w-px bg-paper/15" />
                <div>
                  <p className="text-[8.5px] tracking-wide text-paper/55 uppercase">To receive</p>
                  <p className="tnum text-[11.5px] font-medium text-brand-bright">64,250</p>
                </div>
                <div className="h-6 w-px bg-paper/15" />
                <div>
                  <p className="text-[8.5px] tracking-wide text-paper/55 uppercase">To give</p>
                  <p className="tnum text-[11.5px] font-medium">21,900</p>
                </div>
              </div>
            </div>

            {/* chart card */}
            <div className="border-line rounded-[14px] border bg-white px-4 py-3">
              <div className="flex items-baseline justify-between">
                <p className="text-[10px] font-medium text-ink-soft">Sales this week</p>
                <p className="tnum text-[12px] font-semibold">Rs 84,300</p>
              </div>
              <div className="mt-3">
                <Chart />
              </div>
            </div>

            {/* recent */}
            <div className="border-line overflow-hidden rounded-[14px] border bg-white">
              <div className="border-line flex items-center justify-between border-b px-4 py-2">
                <p className="text-[10px] font-medium text-ink-soft">Recent bills</p>
                <p className="text-brand text-[9.5px] font-medium">View all</p>
              </div>
              {recent.map((r) => (
                <div
                  key={r.no}
                  className="border-line flex items-center justify-between border-b px-4 py-2 last:border-b-0"
                >
                  <div>
                    <p className="text-[10.5px] font-medium">{r.who}</p>
                    <p className="tnum text-[8.5px] text-muted">{r.no}</p>
                  </div>
                  <div className="text-right">
                    <p className="tnum text-[10.5px] font-semibold">Rs {r.amt}</p>
                    <p className="text-[8.5px] text-muted">{r.mode}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* tab bar */}
          <div className="border-line flex items-center justify-around border-t px-2 py-2.5">
            {["Home", "Bills", "Parties", "Stock"].map((t, i) => (
              <div key={t} className="flex flex-col items-center gap-1">
                <span
                  className={`h-1.5 w-1.5 rounded-full ${i === 0 ? "bg-brand" : "bg-line-strong"}`}
                />
                <span className={`text-[8.5px] ${i === 0 ? "text-ink font-medium" : "text-muted"}`}>
                  {t}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* offline chip */}
      <div className="border-line bg-paper absolute -left-6 top-24 hidden rounded-full border px-3 py-1.5 text-[10.5px] font-medium shadow-sm sm:flex sm:items-center sm:gap-1.5">
        <span className="bg-pine h-1.5 w-1.5 rounded-full" />
        Offline · saved
      </div>

      {/* reminder chip */}
      <div className="border-line bg-paper absolute -right-8 bottom-28 hidden rounded-xl border px-3 py-2 shadow-sm sm:block">
        <p className="text-[9px] text-muted">Reminder sent</p>
        <p className="tnum text-[10.5px] font-semibold">Rs 12,400 · overdue</p>
      </div>
    </div>
  );
}

const dues = [
  { name: "Ganesh Traders", amount: "42,300", age: "48 days", tone: "brand" },
  { name: "Ram Bahadur", amount: "12,400", age: "22 days", tone: "amber" },
  { name: "Himal Suppliers", amount: "6,150", age: "9 days", tone: "muted" },
  { name: "Sita Devi", amount: "3,400", age: "3 days", tone: "muted" },
];

export function DuesMockup() {
  return (
    <div className="border-line bg-paper-2/60 rounded-2xl border p-5">
      <div className="flex items-baseline justify-between">
        <div>
          <p className="text-[11px] font-semibold tracking-[0.14em] text-muted uppercase">
            Outstanding dues
          </p>
          <p className="tnum mt-2 text-[26px] leading-none font-semibold">Rs 64,250</p>
        </div>
        <span className="border-brand/25 bg-brand-wash text-brand rounded-full border px-2.5 py-1 text-[10.5px] font-medium">
          4 overdue
        </span>
      </div>

      <div className="mt-5 divide-y divide-[color:var(--color-line)]">
        {dues.map((d) => (
          <div key={d.name} className="flex items-center justify-between gap-4 py-3">
            <div className="flex items-center gap-3">
              <span
                className={`h-2 w-2 rounded-full ${
                  d.tone === "brand"
                    ? "bg-brand"
                    : d.tone === "amber"
                      ? "bg-amber"
                      : "bg-line-strong"
                }`}
              />
              <div>
                <p className="text-[13px] font-medium">{d.name}</p>
                <p className="text-muted text-[11px]">{d.age} overdue</p>
              </div>
            </div>
            <p className="tnum text-[13px] font-semibold">Rs {d.amount}</p>
          </div>
        ))}
      </div>

      <div className="border-line mt-3 flex items-center justify-between border-t pt-4">
        <p className="text-muted text-[11.5px]">Reminders went out this morning</p>
        <span className="bg-ink text-paper rounded-full px-3 py-1.5 text-[11px] font-medium">
          Send again
        </span>
      </div>
    </div>
  );
}

const vatRows = [
  { label: "Taxable sales", value: "8,42,500" },
  { label: "VAT collected (13%)", value: "1,09,525" },
  { label: "Taxable purchases", value: "5,18,200" },
  { label: "VAT paid (13%)", value: "67,366" },
];

export function ReportMockup() {
  return (
    <div className="border-line bg-paper-2/60 rounded-2xl border p-5">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-[11px] font-semibold tracking-[0.14em] text-muted uppercase">
            VAT summary
          </p>
          <p className="text-muted mt-1.5 text-[11.5px]">Shrawan 2082 · 17 Jul – 16 Aug</p>
        </div>
        <div className="border-line-strong text-ink-soft rounded-full border px-2.5 py-1 text-[10.5px]">
          Export PDF
        </div>
      </div>

      <dl className="mt-5 space-y-2.5">
        {vatRows.map((r) => (
          <div key={r.label} className="flex items-center justify-between text-[12.5px]">
            <dt className="text-ink-soft">{r.label}</dt>
            <dd className="tnum font-medium">{r.value}</dd>
          </div>
        ))}
      </dl>

      <div className="border-line mt-4 flex items-center justify-between border-t pt-4">
        <p className="text-[12.5px] font-medium">Net VAT payable</p>
        <p className="tnum text-[18px] font-semibold text-brand">Rs 42,159</p>
      </div>

      <p className="text-muted mt-3 text-[11px]">
        Ready for filing. Nothing else to calculate by hand.
      </p>
    </div>
  );
}

export function BillMockup() {
  const rows = [
    { item: "Basmati rice 25kg", qty: "2", rate: "2,750", total: "5,500" },
    { item: "Sunflower oil 5L", qty: "4", rate: "1,120", total: "4,480" },
    { item: "Sugar (per kg)", qty: "15", rate: "118", total: "1,770" },
  ];
  return (
    <div className="border-line rounded-2xl border bg-white p-5 shadow-[0_18px_40px_-32px_rgba(26,23,18,0.4)]">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-[13px] font-semibold">Sunita Kirana Store</p>
          <p className="text-muted text-[11px]">Balkumari, Lalitpur · PAN 601234567</p>
        </div>
        <div className="text-right">
          <p className="text-muted text-[10px] tracking-wide uppercase">Tax invoice</p>
          <p className="tnum text-[12px] font-semibold">INV-0421</p>
        </div>
      </div>

      <div className="border-line mt-4 border-y">
        <div className="text-muted grid grid-cols-[1fr_auto_auto_auto] gap-3 py-2 text-[10px] tracking-wide uppercase">
          <span>Item</span>
          <span className="w-8 text-right">Qty</span>
          <span className="w-16 text-right">Rate</span>
          <span className="w-16 text-right">Total</span>
        </div>
        {rows.map((r) => (
          <div
            key={r.item}
            className="border-line grid grid-cols-[1fr_auto_auto_auto] gap-3 border-t py-2.5 text-[12px]"
          >
            <span>{r.item}</span>
            <span className="tnum w-8 text-right text-ink-soft">{r.qty}</span>
            <span className="tnum w-16 text-right text-ink-soft">{r.rate}</span>
            <span className="tnum w-16 text-right font-medium">{r.total}</span>
          </div>
        ))}
      </div>

      <dl className="mt-4 space-y-1.5 text-[12px]">
        <div className="flex justify-between">
          <dt className="text-ink-soft">Subtotal</dt>
          <dd className="tnum">11,750</dd>
        </div>
        <div className="flex justify-between">
          <dt className="text-ink-soft">VAT 13%</dt>
          <dd className="tnum">1,527</dd>
        </div>
        <div className="border-line mt-1 flex justify-between border-t pt-2 text-[13px] font-semibold">
          <dt>Total</dt>
          <dd className="tnum">Rs 13,277</dd>
        </div>
      </dl>

      <div className="mt-4 flex items-center gap-2">
        <span className="bg-pine-wash text-pine rounded-full px-2.5 py-1 text-[10.5px] font-medium">
          Ledger updated
        </span>
        <span className="bg-paper-2 text-ink-soft rounded-full px-2.5 py-1 text-[10.5px] font-medium">
          Stock deducted
        </span>
        <span className="text-muted ml-auto text-[10.5px]">WhatsApp · Print</span>
      </div>
    </div>
  );
}
