import type { Metadata } from "next";
import { Arrow, Button, Container, Eyebrow, SectionHead, Tick } from "@/components/ui";
import { PageHero } from "@/components/page-hero";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Refer & earn",
  description:
    "Refer a business to Byapar eKhata and earn a commission on every subscription payment. Join as a marketer and build a recurring income from businesses you bring.",
};

const steps = [
  {
    n: "01",
    t: "Get your link",
    d: "Every account has a personal referral link and QR code. Share it over WhatsApp, Viber, or print it and stick it on your counter.",
  },
  {
    n: "02",
    t: "They sign up free",
    d: "The business you refer starts on the free plan, with no card and nothing to lose. You are credited the moment they register.",
  },
  {
    n: "03",
    t: "You earn on every payment",
    d: "When they move to a paid plan you earn commission on each subscription payment they make — not a one-off bonus.",
  },
  {
    n: "04",
    t: "Withdraw your wallet",
    d: "Commission lands in your wallet. Request a payout once you cross the threshold, and track the whole thing from your dashboard.",
  },
];

const tiers = [
  {
    name: "Referrer",
    rate: "25%",
    who: "Anyone with a Byapar eKhata account",
    note: "Share your link and earn on every payment your referrals make.",
  },
  {
    name: "Marketer",
    rate: "27%",
    who: "10 or more active referrals",
    note: "For people who promote Byapar eKhata as a side income.",
    featured: false,
  },
  {
    name: "Partner",
    rate: "30%",
    who: "Sustained performance, by review",
    note: "Top performers, with co-marketing support and faster payouts.",
    featured: true,
  },
];

const marketerPoints = [
  "A dedicated referral code and link you can use anywhere",
  "A dashboard showing sign-ups, active plans and commission earned",
  "Wallet balance, payout requests and payout history in one place",
  "Leaderboard standing so you know where you sit each month",
  "Reusable campaign material for festivals and local events",
  "Commission history per referral, per payment — nothing hidden",
];

export default function ReferPage() {
  return (
    <>
      <PageHero
        eyebrow="Refer & earn"
        title="Get paid for the businesses you already help"
        intro="You probably already tell other shopkeepers what to use. Byapar eKhata pays you for it — a share of every subscription payment from every business you bring, for as long as they stay."
      >
        <div className="flex flex-wrap gap-3">
          <Button href="/download">
            Get your referral link
            <Arrow />
          </Button>
          <Button href="#marketer" variant="ghost">
            Become a marketer
          </Button>
        </div>
      </PageHero>

      {/* how it works */}
      <Container className="py-20">
        <SectionHead eyebrow="How it works" title="Four steps, no forms to chase" />
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

      {/* tiers */}
      <section className="bg-paper-2/50 border-line border-y py-20">
        <Container>
          <SectionHead
            eyebrow="Commission"
            title="The rate rises with you"
            intro="Commission is paid on every subscription payment a referred business makes, for as long as their plan stays active."
          />
          <div className="mt-14 grid gap-5 lg:grid-cols-3">
            {tiers.map((t) => (
              <div
                key={t.name}
                className={`flex flex-col rounded-2xl border p-7 ${
                  t.featured ? "border-ink bg-ink text-paper" : "border-line bg-paper"
                }`}
              >
                <div className="flex items-baseline justify-between">
                  <h3 className="display-sm text-[21px]">{t.name}</h3>
                  <p
                    className={`tnum display-sm text-[32px] ${t.featured ? "text-brand-bright" : "text-brand"}`}
                  >
                    {t.rate}
                  </p>
                </div>
                <p className={`mt-4 text-[13px] ${t.featured ? "text-paper/65" : "text-muted"}`}>
                  {t.who}
                </p>
                <p
                  className={`mt-4 text-[14px] leading-relaxed ${t.featured ? "text-paper/85" : "text-ink-soft"}`}
                >
                  {t.note}
                </p>
              </div>
            ))}
          </div>
          <p className="text-muted mt-8 text-[12.5px]">
            Rates shown are indicative and may be revised. The rate that applies to a referral is the
            one in force when the payment is made, and is always visible in your dashboard before you
            share a link.
          </p>
        </Container>
      </section>

      {/* marketer */}
      <section id="marketer" className="scroll-mt-24 py-20">
        <Container>
          <div className="grid gap-14 lg:grid-cols-[1fr_1fr]">
            <div>
              <Eyebrow>Marketer programme</Eyebrow>
              <h2 className="display-sm mt-5 text-[30px] sm:text-[38px]">
                For people who want more than a link
              </h2>
              <p className="text-ink-soft mt-6 text-[16px] leading-relaxed">
                If you work with businesses every day — as an accountant, a computer shop, a
                consultant — the marketer programme gives you the tools to promote Byapar eKhata
                properly: your own code, a dashboard, performance tiers and faster payouts.
              </p>
              <p className="text-ink-soft mt-4 text-[16px] leading-relaxed">
                It is recurring income, not a bounty. As long as the businesses you brought keep
                paying, you keep earning.
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <Button href={`mailto:${site.email}?subject=Marketer%20programme`}>
                  Apply to be a marketer
                  <Arrow />
                </Button>
                <Button href="/contact" variant="ghost">
                  Ask a question
                </Button>
              </div>
            </div>

            <div className="border-line bg-paper-2/40 rounded-2xl border p-7">
              <h3 className="text-[11px] font-semibold tracking-[0.16em] text-muted uppercase">
                What you get
              </h3>
              <ul className="mt-6 space-y-4">
                {marketerPoints.map((p) => (
                  <li key={p} className="flex items-start gap-3 text-[14px]">
                    <Tick className="text-brand mt-0.5 h-4 w-4 shrink-0" />
                    <span className="text-ink-soft leading-relaxed">{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* payout terms */}
      <section className="pb-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-3">
            {[
              {
                t: "When commission is credited",
                d: "Commission is credited to your wallet after the referred business's payment is settled and any refund window has passed. This keeps the balance honest for everyone.",
              },
              {
                t: "How payouts work",
                d: "Request a payout from your dashboard once your wallet crosses the minimum threshold. Payouts are made to a Nepali bank account or wallet, and every request is recorded.",
              },
              {
                t: "Fair use",
                d: "Self-referrals, duplicate accounts and fake businesses do not qualify. Accounts found gaming the programme are removed from it, and unpaid commission on those referrals is reversed.",
              },
            ].map((b) => (
              <div key={b.t} className="border-line border-t pt-6">
                <h3 className="text-[15.5px] font-medium">{b.t}</h3>
                <p className="text-ink-soft mt-3 text-[13.5px] leading-relaxed">{b.d}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
