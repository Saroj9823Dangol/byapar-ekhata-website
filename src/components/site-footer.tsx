import Link from "next/link";
import { footerNav, site } from "@/lib/site";
import { Container, Logo } from "@/components/ui";

const paymentBadges = ["eSewa", "Khalti", "Fonepay"];

export function SiteFooter() {
  return (
    <footer className="border-line mt-24 border-t">
      <Container className="py-14">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_2.6fr]">
          <div>
            <Logo />
            <p className="text-ink-soft mt-5 max-w-xs text-[14px] leading-relaxed">
              Accounting, billing and credit recovery for Nepali shops, wholesalers and
              service businesses. Built in Kathmandu, for the way trade actually works here.
            </p>
            <p className="font-deva text-muted mt-4 text-[14px]">
              तपाईंको व्यापार, एउटै खातामा।
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {paymentBadges.map((p) => (
                <span
                  key={p}
                  className="border-line text-muted rounded-full border px-3 py-1 text-[11px] font-medium tracking-wide"
                >
                  {p}
                </span>
              ))}
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {footerNav.map((group) => (
              <div key={group.title}>
                <h3 className="text-[11px] font-semibold tracking-[0.14em] text-muted uppercase">
                  {group.title}
                </h3>
                <ul className="mt-4 space-y-2.5">
                  {group.links.map((link) => (
                    <li key={link.href + link.label}>
                      <Link
                        href={link.href}
                        className="text-ink-soft hover:text-ink text-[13.5px] transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="border-line mt-12 flex flex-col gap-6 border-t pt-8 md:flex-row md:items-center md:justify-between">
          <div className="text-muted flex flex-wrap items-center gap-x-6 gap-y-2 text-[13px]">
            <span>
              © {new Date().getFullYear()} {site.name} Pvt. Ltd.
            </span>
            <a href={`mailto:${site.email}`} className="hover:text-ink transition-colors">
              {site.email}
            </a>
            <span>{site.address}</span>
          </div>
          <div className="text-muted flex items-center gap-5 text-[13px]">
            <Link href="/privacy" className="hover:text-ink transition-colors">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-ink transition-colors">
              Terms
            </Link>
            <span className="text-line-strong">|</span>
            <span className="tnum">🇳🇵 Made in Nepal</span>
          </div>
        </div>
      </Container>
    </footer>
  );
}
