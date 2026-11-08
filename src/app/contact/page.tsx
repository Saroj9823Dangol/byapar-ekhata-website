import type { Metadata } from "next";
import { Container, SectionHead } from "@/components/ui";
import { PageHero } from "@/components/page-hero";
import { ContactForm } from "@/components/contact-form";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Talk to the Byapar eKhata team in Kathmandu about plans, setup, data migration or the marketer programme.",
};

const channels = [
  {
    t: "Sales & plans",
    d: "For help choosing a plan, pricing for multiple branches, or a walkthrough of the app.",
    v: site.email,
    href: `mailto:${site.email}`,
  },
  {
    t: "Support",
    d: "Already using Byapar eKhata? Send us the invoice number and we can look it up directly.",
    v: site.supportEmail,
    href: `mailto:${site.supportEmail}`,
  },
  {
    t: "Phone",
    d: "Sunday to Friday, 9am to 5pm Nepal time. We answer in Nepali or English.",
    v: site.phone,
    href: `tel:${site.phone.replace(/\s/g, "")}`,
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Talk to a person, not a queue"
        intro="Tell us what your business looks like and what you are trying to fix. If Byapar eKhata is not the right fit, we will say so."
      />

      <Container className="py-16">
        <div className="grid gap-16 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <SectionHead eyebrow="Send a message" title="Write to us" />
            <div className="mt-10">
              <ContactForm />
            </div>
          </div>

          <div>
            <SectionHead eyebrow="Direct lines" title="Other ways to reach us" />
            <div className="mt-10 space-y-8">
              {channels.map((c) => (
                <div key={c.t} className="border-line border-t pt-6">
                  <h3 className="text-[15px] font-medium">{c.t}</h3>
                  <p className="text-ink-soft mt-2 text-[13.5px] leading-relaxed">{c.d}</p>
                  <a
                    href={c.href}
                    className="text-ink hover:text-brand mt-3 inline-block text-[14px] underline underline-offset-4 transition-colors"
                  >
                    {c.v}
                  </a>
                </div>
              ))}

              <div className="border-line border-t pt-6">
                <h3 className="text-[15px] font-medium">Office</h3>
                <p className="text-ink-soft mt-2 text-[13.5px] leading-relaxed">{site.address}</p>
                <p className="text-muted mt-2 text-[13px]">Visits by appointment only.</p>
              </div>
            </div>
          </div>
        </div>
      </Container>

      <section className="pb-24">
        <Container>
          <div className="border-line bg-paper-2/40 rounded-3xl border p-8 sm:p-10">
            <h2 className="display-sm text-[22px]">Before you write, this speeds things up</h2>
            <div className="mt-8 grid gap-x-12 gap-y-6 sm:grid-cols-3">
              {[
                { t: "For setup help", d: "The type of business, how many counters, and how many people will use the app." },
                { t: "For billing issues", d: "The invoice number, the payment method (eSewa, Khalti or Fonepay) and the amount." },
                { t: "For data migration", d: "What you are moving from and roughly how many products and parties you have." },
              ].map((b) => (
                <div key={b.t} className="border-line border-t pt-5">
                  <h3 className="text-[14.5px] font-medium">{b.t}</h3>
                  <p className="text-muted mt-2 text-[13px] leading-relaxed">{b.d}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
