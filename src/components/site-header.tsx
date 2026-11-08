"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { nav, site } from "@/lib/site";
import { Arrow, Container, Logo } from "@/components/ui";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors duration-300 ${
        scrolled ? "border-line bg-paper/85 backdrop-blur-md" : "border-transparent bg-paper"
      }`}
    >
      <Container className="flex h-16 items-center justify-between">
        <Logo />

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {nav.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative text-[14px] transition-colors ${
                  active ? "text-ink" : "text-ink-soft hover:text-ink"
                }`}
              >
                {item.label}
                {active ? (
                  <span className="bg-brand absolute -bottom-1.5 left-0 h-px w-full" />
                ) : null}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-1 md:flex">
          <a
            href={site.webLogin}
            className="text-ink-soft hover:text-ink rounded-full px-3 py-2 text-[14px] transition-colors"
          >
            Log in
          </a>
          <Link
            href="/download"
            className="bg-ink text-paper hover:bg-brand inline-flex items-center gap-2 rounded-full px-4 py-2.5 text-[14px] font-medium transition-colors"
          >
            Get the app
            <Arrow />
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label="Toggle menu"
          className="border-line-strong text-ink -mr-2 flex h-10 w-10 items-center justify-center rounded-full border md:hidden"
        >
          <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true">
            {open ? (
              <path
                d="M5 5l14 14M19 5 5 19"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
              />
            ) : (
              <path
                d="M3.5 7h17M3.5 12h17M3.5 17h17"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
              />
            )}
          </svg>
        </button>
      </Container>

      {open ? (
        <div className="bg-paper border-line fixed inset-x-0 top-16 bottom-0 z-40 border-t md:hidden">
          <Container className="flex h-full flex-col py-8">
            <nav className="flex flex-col" aria-label="Mobile">
              {nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="border-line display-sm border-b py-5 text-[22px]"
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/about"
                onClick={() => setOpen(false)}
                className="border-line display-sm border-b py-5 text-[22px]"
              >
                About
              </Link>
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="border-line display-sm border-b py-5 text-[22px]"
              >
                Contact
              </Link>
            </nav>
            <div className="mt-8 flex flex-col gap-3">
              <a
                href={site.webLogin}
                className="border-line-strong hover:border-ink flex items-center justify-center rounded-full border px-5 py-3.5 text-[15px] font-medium transition-colors"
              >
                Log in to the web app
              </a>
              <Link
                href="/download"
                onClick={() => setOpen(false)}
                className="bg-ink text-paper flex items-center justify-center gap-2 rounded-full px-5 py-3.5 text-[15px] font-medium"
              >
                Get the app
                <Arrow />
              </Link>
            </div>
          </Container>
        </div>
      ) : null}
    </header>
  );
}
