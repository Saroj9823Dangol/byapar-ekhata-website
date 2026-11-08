export const site = {
  name: "Byapar eKhata",
  wordmark: "Byapar",
  wordmarkTail: "eKhata",
  tagline: "The khata your business deserves.",
  domain: "byaparekhata.com",
  email: "hello@byaparekhata.com",
  supportEmail: "support@byaparekhata.com",
  phone: "+977 9800 000 000",
  address: "Putalisadak, Kathmandu 44600, Nepal",
  playStore: "https://play.google.com/store/apps",
  appStore: "https://www.apple.com/app-store/",
  webLogin: "https://app.byaparekhata.com",
  established: 2024,
};

export const nav = [
  { label: "Features", href: "/features" },
  { label: "Pricing", href: "/pricing" },
  { label: "Refer & earn", href: "/refer" },
  { label: "Help", href: "/help" },
] as const;

export const footerNav = [
  {
    title: "Product",
    links: [
      { label: "Features", href: "/features" },
      { label: "Pricing", href: "/pricing" },
      { label: "Download the app", href: "/download" },
      { label: "Offline mode", href: "/features#offline" },
      { label: "Reports & VAT", href: "/features#reports" },
    ],
  },
  {
    title: "Business",
    links: [
      { label: "Refer & earn", href: "/refer" },
      { label: "About us", href: "/about" },
      { label: "Contact", href: "/contact" },
      { label: "Become a marketer", href: "/refer#marketer" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Help centre", href: "/help" },
      { label: "Frequently asked questions", href: "/help#faq" },
      { label: "VAT & PAN guide", href: "/help#vat" },
      { label: "Status", href: "/help#status" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy policy", href: "/privacy" },
      { label: "Terms & conditions", href: "/terms" },
      { label: "Refund policy", href: "/terms#refunds" },
      { label: "Data & security", href: "/privacy#security" },
    ],
  },
] as const;

export const flowFeatures = [
  {
    id: "billing",
    kicker: "Sales & billing",
    title: "Bill a customer in under twenty seconds",
    body: "Pick the items, apply a line or invoice discount, choose cash, bank, credit or part-payment, and the bill is numbered, printed and sent. Stock comes down and the customer's ledger updates at the same moment — no second entry, no chance of the two books disagreeing.",
    points: [
      "Automatic document numbering with your own invoice prefix",
      "VAT bills, plus WhatsApp and SMS delivery in one tap",
      "Full and partial sales returns that restore stock and refund correctly",
      "Duplicate, edit or void any past bill without breaking history",
    ],
  },
  {
    id: "ledger",
    kicker: "Parties & udharo",
    title: "Know exactly who owes you, and what to say",
    body: "Every customer and supplier gets a running ledger. Balances are stored the way a trader thinks about them — positive means you are owed, negative means you owe. Open a party, see every bill and payment in order, and send a reminder drafted in plain language.",
    points: [
      "Running statement per party, with credit limits and opening balance",
      "Amounts split cleanly between party dues, cash and bank",
      "Reminder drafts you can send over email, SMS or push",
      "Aged dues view so the oldest money never gets forgotten",
    ],
  },
  {
    id: "stock",
    kicker: "Stock & inventory",
    title: "Stop keeping stock in a notebook",
    body: "Track products in whichever unit you buy and sell them in. Byapar eKhata converts between them, warns you before an item runs out, and keeps a movement history you can audit — so the number on the shelf and the number on the screen stay the same.",
    points: [
      "Purchase, selling and wholesale prices with per-unit pricing",
      "Multi-unit support with conversion — crates, dozens, kilograms",
      "Low-stock alerts and one-tap stock adjustment",
      "Barcode scanning, product images, expiry and valuation reports",
    ],
  },
  {
    id: "cashbank",
    kicker: "Cash & bank",
    title: "Cash in hand, to the rupee",
    body: "Cash sales, petty expenses, deposits, withdrawals and transfers all post through the same engine as every other transaction. That means cash in hand and bank balances are never a side-calculation — they are the same figures your reports use.",
    points: [
      "Multiple bank accounts with running balances",
      "Deposits, withdrawals and transfers between accounts",
      "Expense and income categories with monthly summaries",
      "Bill photos attached to expenses for clean record-keeping",
    ],
  },
  {
    id: "reports",
    kicker: "Reports & VAT",
    title: "Eighteen reports your accountant will accept",
    body: "Profit & loss, balance sheet, trial balance and a VAT/GST summary that is ready for filing. Every report exports to PDF or Excel, prints on any printer, or goes straight to WhatsApp for your accountant — no reformatting, no re-typing.",
    points: [
      "P&L, Balance Sheet, Trial Balance and VAT/GST summary",
      "Sales, purchase, stock summary, low stock and stock movement",
      "Customer, supplier, outstanding dues, expense and income reports",
      "Export to PDF, Excel, print or WhatsApp in one click",
    ],
  },
  {
    id: "offline",
    kicker: "Works offline",
    title: "It keeps working when the internet doesn't",
    body: "Load shedding, no data, a shop in the hills with one bar of signal — it makes no difference. Keep billing offline and Byapar eKhata holds every entry in a local queue, then syncs to the cloud the moment you are back on a network.",
    points: [
      "Full billing, ledger and stock access without a connection",
      "Queued changes push automatically when you reconnect",
      "Built-in conflict handling so two devices never overwrite each other",
      "Cloud backup and restore with a full audit trail",
    ],
  },
  {
    id: "team",
    kicker: "Businesses & staff",
    title: "One login for every business you run",
    body: "Run a shop, a wholesale counter and a small workshop from the same account. Switch between them in a tap, and give each staff member exactly the access they need — sales only, inventory only, reports only, or full control.",
    points: [
      "Unlimited businesses per account on higher plans",
      "Access groups: full, sales, purchase, inventory, reports, read-only",
      "Owner, manager and staff roles with fine-grained permissions",
      "Per-business settings — PAN/VAT, fiscal year, currency, invoice format",
    ],
  },
  {
    id: "reminders",
    kicker: "Credit recovery",
    title: "Follow up on dues without the awkward phone call",
    body: "Set a due date on a bill and Byapar eKhata schedules the reminder for the right morning — in Nepal time, not UTC. Email is on by default, SMS and push are opt-in, and every send is logged so you know what went out and when.",
    points: [
      "Automatic reminders on overdue balances",
      "Email, SMS and push notifications",
      "Delivery log with a full audit trail",
      "SMS credit packs and bulk campaigns for festivals",
    ],
  },
] as const;

export const capabilityGroups = [
  {
    title: "Accounting core",
    items: [
      "Double-entry transaction engine with atomic writes",
      "14 transaction types from sale to opening balance",
      "Payment allocation against specific invoices",
      "Party dues, cash and bank kept separate",
    ],
  },
  {
    title: "Nepal-ready",
    items: [
      "VAT and PAN fields on businesses, parties and products",
      "Fiscal year, invoice prefix and Nepali date handling",
      "eSewa, Khalti and Fonepay subscription payments",
      "Reminders scheduled in Nepal time (UTC+5:45)",
    ],
  },
  {
    title: "Accounts & access",
    items: [
      "Mobile number login with OTP, password optional",
      "Multi-device sessions with rotating refresh tokens",
      "Access groups for sales, purchase, inventory and reports",
      "Activity log and soft delete with restore",
    ],
  },
  {
    title: "Notifications",
    items: [
      "In-app notifications with unread counts",
      "SMS campaigns and reusable message templates",
      "FCM push to every signed-in device",
      "Email delivery for statements and reminders",
    ],
  },
] as const;

export const transactionTypes = [
  "Sale",
  "Sale return",
  "Purchase",
  "Purchase return",
  "Payment in",
  "Payment out",
  "Cash in",
  "Cash out",
  "Bank deposit",
  "Bank withdrawal",
  "Bank transfer",
  "Expense",
  "Adjustment",
  "Opening balance",
] as const;

export type Plan = {
  id: string;
  name: string;
  monthly: number;
  blurb: string;
  highlights: string[];
  featured?: boolean;
};

export const plans: Plan[] = [
  {
    id: "free",
    name: "Free",
    monthly: 0,
    blurb: "For a single shop getting its books in order.",
    highlights: [
      "1 business, 1 user",
      "100 transactions a month",
      "Core sales, purchases and ledger",
      "Offline billing and sync",
      "Basic dashboard",
    ],
  },
  {
    id: "basic",
    name: "Basic",
    monthly: 999,
    blurb: "For a growing shop that has to file VAT.",
    highlights: [
      "1 business, up to 3 users",
      "2,000 transactions a month",
      "VAT reports and P&L",
      "PDF, Excel and WhatsApp export",
      "Email credit reminders",
    ],
  },
  {
    id: "premium",
    name: "Premium",
    monthly: 1999,
    blurb: "For businesses with staff, stock and several counters.",
    featured: true,
    highlights: [
      "3 businesses, up to 10 users",
      "Unlimited transactions",
      "Advanced reports and cloud backup",
      "SMS reminders and barcode scanning",
      "Priority support",
    ],
  },
  {
    id: "enterprise",
    name: "Enterprise",
    monthly: 4999,
    blurb: "For distributors, chains and multi-branch operations.",
    highlights: [
      "Unlimited businesses and users",
      "API access and custom reports",
      "Dedicated onboarding and data migration",
      "Named account manager",
      "Custom SLAs",
    ],
  },
];

export const planMatrix: { label: string; values: string[] }[] = [
  { label: "Businesses", values: ["1", "1", "3", "Unlimited"] },
  { label: "Users per business", values: ["1", "3", "10", "Unlimited"] },
  { label: "Transactions / month", values: ["100", "2,000", "Unlimited", "Unlimited"] },
  { label: "Offline mode & sync", values: ["yes", "yes", "yes", "yes"] },
  { label: "VAT / PAN fields", values: ["yes", "yes", "yes", "yes"] },
  { label: "PDF & Excel export", values: ["no", "yes", "yes", "yes"] },
  { label: "WhatsApp bill sharing", values: ["no", "yes", "yes", "yes"] },
  { label: "Advanced reports", values: ["no", "no", "yes", "yes"] },
  { label: "Cloud backup", values: ["no", "no", "yes", "yes"] },
  { label: "SMS reminders & campaigns", values: ["no", "no", "yes", "yes"] },
  { label: "Barcode scanning", values: ["no", "no", "yes", "yes"] },
  { label: "API access", values: ["no", "no", "no", "yes"] },
  { label: "Priority support", values: ["no", "no", "yes", "yes"] },
];

export const testimonials = [
  {
    quote:
      "Before this, udharo was written in three different notebooks and half of it was wrong. Now I open the app, see who is overdue, and send the reminder before I even open the shutter.",
    name: "Sunita Shrestha",
    role: "Groceries, Balkumari",
  },
  {
    quote:
      "The VAT summary alone saves my accountant two days every quarter. He stopped complaining about my bills, which honestly I did not think was possible.",
    name: "Rajan Tamang",
    role: "Hardware supplier, Pokhara",
  },
  {
    quote:
      "Our counter loses power most afternoons. The app does not care — we keep billing offline and it uploads by itself when the internet comes back.",
    name: "Bishal Karki",
    role: "Electricals, Biratnagar",
  },
];

export const security = [
  {
    title: "Your figures stay yours",
    body: "Transaction data is encrypted in transit and at rest. Access is scoped to the business you are signed into, enforced on the server for every request — not just hidden in the app.",
  },
  {
    title: "Backups that can be restored",
    body: "Manual and scheduled cloud backups, with a log of every run. Restore a business to an earlier point without waiting on support.",
  },
  {
    title: "A record of every action",
    body: "Activity logs track who created, edited or deleted what. Deletes are soft, so a mistake is a recoverable event rather than a loss.",
  },
  {
    title: "Built to resist abuse",
    body: "Rate limiting on sensitive endpoints, request-ID tracking for support, rotating refresh tokens, and OTP-verified sign-in on every new device.",
  },
];

export const faqs = [
  {
    q: "Does Byapar eKhata work without internet?",
    a: "Yes. Sales, purchases, ledger entries and stock checks all work offline. Entries queue on your device and upload automatically the next time you have a connection. Two devices editing at once are reconciled with a last-write-wins rule and a full change history.",
  },
  {
    q: "Do I need an accountant to use it?",
    a: "No. The app speaks in the language of a shop — bills, udharo, cash in hand. Underneath, everything is recorded with double-entry accounting, so when you do hand the books to an accountant, the reports already match what they expect.",
  },
  {
    q: "Is the app available in Nepali?",
    a: "Yes. The interface supports English and Nepali, and switching languages does not change any of your data or reports.",
  },
  {
    q: "How do I pay for a plan?",
    a: "Subscriptions are paid from inside the app using eSewa, Khalti or Fonepay. Prices are in Nepali rupees and plans renew monthly or yearly. You can change or cancel a plan at any time.",
  },
  {
    q: "Can I run more than one business?",
    a: "Yes. Add each business separately, each with its own PAN/VAT details, fiscal year, invoice format and staff. Premium supports three businesses and Enterprise is unlimited. Switch between them from the sidebar.",
  },
  {
    q: "Can my staff use it without seeing everything?",
    a: "Access groups let you give a counter person sales-only access, a storekeeper inventory-only access, and an accountant reports-only access. Permissions are enforced on the server, so they hold even if someone is using the web app.",
  },
  {
    q: "Can I get my data out?",
    a: "Every report exports to PDF or Excel, and you can request a full data export at any time. Your records are yours — leaving is one request, not a negotiation.",
  },
  {
    q: "Is there a free trial of paid plans?",
    a: "Paid plans start with a 30-day trial. If you do not upgrade, the account drops back to the Free plan automatically. Your data is never deleted when a trial ends.",
  },
];

export const stats = [
  { value: "12,400+", label: "businesses keeping books on Byapar eKhata" },
  { value: "18", label: "reports, exportable to PDF, Excel and WhatsApp" },
  { value: "14", label: "transaction types on one accounting engine" },
  { value: "4.7★", label: "average rating on the Play Store" },
];
