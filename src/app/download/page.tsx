import type { Metadata } from "next";
import { Arrow, Button, Container, SectionHead, Tick } from "@/components/ui";
import { PageHero } from "@/components/page-hero";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Download",
  description:
    "Get Byapar eKhata for Android, iOS or the web. Free plan, no card required, works offline.",
};

const steps = [
  { n: "01", t: "Install the app", d: "Download from Google Play or the App Store. The web app is available in any browser." },
  { n: "02", t: "Sign in with your number", d: "Enter your mobile number and the one-time code. No password to set, nothing to remember." },
  { n: "03", t: "Add your business", d: "Name, type, address, and PAN or VAT if you have them. This takes about two minutes." },
  { n: "04", t: "Write your first bill", d: "Add a product or two and raise an invoice. The ledger, stock and cash update together." },
];

export default function DownloadPage() {
  return (
    <>
      <PageHero
        eyebrow="Download"
        title="Get Byapar eKhata on your phone"
        intro="The mobile app works fully offline and syncs when you are back online. The web app is there for the desk, the accountant and the partner who wants to check the figures."
      >
        <div className="flex flex-wrap gap-3">
          <a
            href={site.playStore}
            className="bg-ink text-paper hover:bg-brand inline-flex items-center gap-2 rounded-full px-5 py-3.5 text-[14px] font-medium transition-colors"
          >
            Get it on Google Play
            <Arrow />
          </a>
          <a
            href={site.appStore}
            className="border-line-strong hover:border-ink inline-flex items-center gap-2 rounded-full border px-5 py-3.5 text-[14px] font-medium transition-colors"
          >
            Download on the App Store
          </a>
          <a
            href={site.webLogin}
            className="text-ink-soft hover:text-ink inline-flex items-center gap-2 rounded-full px-4 py-3.5 text-[14px] font-medium transition-colors"
          >
            Open the web app
          </a>
        </div>
      </PageHero>

      <Container className="py-20">
        <SectionHead eyebrow="Getting started" title="From install to your first bill" />
        <div className="mt-14 grid gap-x-12 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s) => (
            <div key={s.n} className="border-line border-t pt-6">
              <p className="tnum display text-brand text-[30px]">{s.n}</p>
              <h3 className="mt-4 text-[16px] font-medium">{s.t}</h3>
              <p className="text-ink-soft mt-3 text-[13.5px] leading-relaxed">{s.d}</p>
            </div>
          ))}
        </div>
      </Container>

      <section className="bg-paper-2/50 border-line border-y py-20">
        <Container>
          <div className="grid gap-12 lg:grid-cols-3">
            <div>
              <h2 className="display-sm text-[22px]">What you need</h2>
              <ul className="mt-6 space-y-3">
                {[
                  "Android 8.0 or later",
                  "iOS 14 or later",
                  "Any modern browser for the web app",
                  "A Nepali mobile number for sign-in",
                ].map((r) => (
                  <li key={r} className="text-ink-soft flex items-start gap-2.5 text-[13.5px]">
                    <Tick className="text-brand mt-0.5 h-3.5 w-3.5 shrink-0" />
                    {r}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="display-sm text-[22px]">What it costs</h2>
              <p className="text-ink-soft mt-6 text-[13.5px] leading-relaxed">
                The free plan is genuinely free and does not expire. It covers a single business with
                core billing, the ledger, stock and offline mode — enough for many small shops
                indefinitely.
              </p>
              <p className="text-ink-soft mt-4 text-[13.5px] leading-relaxed">
                Paid plans start with a 30-day trial and are billed through eSewa, Khalti or Fonepay.
                No card is required to start.
              </p>
              <Button href="/pricing" variant="ghost" className="mt-6">
                See plans
                <Arrow />
              </Button>
            </div>

            <div>
              <h2 className="display-sm text-[22px]">Bringing your old records</h2>
              <p className="text-ink-soft mt-6 text-[13.5px] leading-relaxed">
                If you are moving from a spreadsheet or another app, we can help. Send us your
                product and party lists and we will prepare them for import — this is included with
                Premium and Enterprise, and offered free during setup for smaller businesses.
              </p>
              <Button href={`mailto:${site.email}?subject=Data%20migration`} variant="ghost" className="mt-6">
                Ask about migration
                <Arrow />
              </Button>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <div className="border-line bg-paper-2/40 rounded-3xl border p-8 sm:p-12">
            <h2 className="display text-[28px] sm:text-[36px]">Start on the free plan today</h2>
            <p className="text-ink-soft mt-5 max-w-2xl text-[15.5px] leading-relaxed">
              There is no trial clock on the free plan and no card to enter. Add your business,
              write a few bills, and decide later whether you need more.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={site.playStore}
                className="bg-ink text-paper hover:bg-brand inline-flex items-center gap-2 rounded-full px-5 py-3.5 text-[14px] font-medium transition-colors"
              >
                Get it on Google Play
                <Arrow />
              </a>
              <a
                href={site.appStore}
                className="border-line-strong hover:border-ink inline-flex items-center gap-2 rounded-full border px-5 py-3.5 text-[14px] font-medium transition-colors"
              >
                Download on the App Store
              </a>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
