# Byapar eKhata — marketing website

The public marketing site for Byapar eKhata, the accounting and bookkeeping app for Nepali
MSMEs. Built with Next.js (App Router), TypeScript and Tailwind CSS v4.

## Commands

```bash
pnpm install
pnpm dev        # http://localhost:3000
pnpm build      # production build
pnpm start      # serve the production build
pnpm lint       # eslint
```

## Pages

| Route       | What it is |
| ----------- | ---------- |
| `/`         | Home — hero, problem/solution, feature deep dives, offline, pricing, referral, testimonials, security, FAQ, CTA |
| `/features` | Full feature list: sales, purchases, stock, ledger, cash & bank, reports, VAT, reminders, offline, staff access |
| `/pricing`  | Plans, annual pricing, comparison matrix, payment methods and billing questions |
| `/refer`    | Refer & earn and the marketer programme |
| `/download` | App download, setup steps, requirements, data migration |
| `/about`    | Company story and principles |
| `/contact`  | Contact form (composes an email — no backend) and direct channels |
| `/help`     | Getting started, VAT/PAN, offline & sync guides, FAQ, service status |
| `/privacy`  | Privacy policy |
| `/terms`    | Terms & conditions, including refunds and the referral programme |

`/sitemap.xml` and `/robots.txt` are generated from `src/app/sitemap.ts` and `src/app/robots.ts`.

## Where to edit content

Almost all copy lives in one file:

- **`src/lib/site.ts`** — site details, navigation, feature copy, plans and the comparison
  matrix, testimonials, security points, FAQs and headline statistics.

Legal copy lives with its pages:

- **`src/app/privacy/page.tsx`** and **`src/app/terms/page.tsx`.**

Design tokens — colours, fonts, type scale — are in the `@theme` block at the top of
**`src/app/globals.css`**.

Product UI on the site is drawn in markup, not shipped as images, so it stays sharp at any
zoom: see **`src/components/mockups.tsx`**.

## Before launch

Replace these placeholders, which are illustrative:

1. **Store links** — `site.playStore`, `site.appStore` and `site.webLogin` in `src/lib/site.ts`.
2. **Contact details** — `email`, `supportEmail`, `phone`, `address` in `src/lib/site.ts`.
3. **Statistics** — the `stats` array (user counts, ratings) must reflect real figures.
4. **Testimonials** — replace the `testimonials` array with real, permissioned quotes.
5. **Plans and prices** — confirm against the live subscription configuration.
6. **Domain** — `metadataBase` in `src/app/layout.tsx`, plus `sitemap.ts` and `robots.ts`,
   currently point at `byaparekhata.com`.
7. **Legal** — have the privacy policy and terms reviewed by a Nepali lawyer, and confirm the
   registered company name, address and retention periods.

## Stack

Next.js 16 (App Router) · React 19 · TypeScript · Tailwind CSS v4 · no runtime dependencies
beyond React and Next. All pages are statically prerendered.
