import Link from "next/link";
import type { ReactNode } from "react";
import { site } from "@/lib/site";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link
      href="/"
      aria-label={`${site.name} home`}
      className={`group inline-flex items-center gap-2.5 ${className}`}
    >
      <span className="relative flex h-8 w-8 items-center justify-center rounded-[7px] bg-ink">
        <svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" aria-hidden="true">
          <path
            d="M5 3.5h12.5a1.5 1.5 0 0 1 1.5 1.5v14a1.5 1.5 0 0 1-1.5 1.5H5A1.5 1.5 0 0 1 3.5 19V5A1.5 1.5 0 0 1 5 3.5Z"
            fill="none"
            stroke="currentColor"
            className="text-paper"
            strokeWidth="1.4"
          />
          <path d="M7.5 3.5v17" stroke="currentColor" className="text-paper" strokeWidth="1.4" />
          <path
            d="M11 8.5h6M11 12h6M11 15.5h4"
            stroke="currentColor"
            className="text-paper"
            strokeWidth="1.4"
            strokeLinecap="round"
          />
        </svg>
        <span className="absolute -right-0.5 -bottom-0.5 h-2 w-2 rounded-full bg-brand ring-2 ring-paper" />
      </span>
      <span className="text-[17px] leading-none font-semibold tracking-tight">
        Byapar
        <span className="text-brand display-sm ml-1 text-[17px] font-medium">eKhata</span>
      </span>
    </Link>
  );
}

export function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={`mx-auto w-full max-w-[1140px] px-6 md:px-8 ${className}`}>{children}</div>;
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="text-muted flex items-center gap-2.5 text-[11px] font-semibold tracking-[0.18em] uppercase">
      <span className="bg-brand h-px w-6" aria-hidden="true" />
      {children}
    </p>
  );
}

export function Button({
  href,
  children,
  variant = "primary",
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "ghost" | "quiet";
  className?: string;
}) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full text-[14px] font-medium transition duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand";
  const styles = {
    primary:
      "bg-ink px-5 py-3 text-paper hover:bg-brand shadow-[0_1px_0_0_rgba(0,0,0,0.04)]",
    ghost: "border border-line-strong px-5 py-3 text-ink hover:border-ink hover:bg-paper-2",
    quiet: "px-3 py-2 text-ink-soft hover:text-ink",
  }[variant];

  const isExternal = href.startsWith("http");
  if (isExternal) {
    return (
      <a href={href} className={`${base} ${styles} ${className}`}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={`${base} ${styles} ${className}`}>
      {children}
    </Link>
  );
}

export function Arrow({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" className={`h-3.5 w-3.5 ${className}`} aria-hidden="true">
      <path
        d="M2.5 8h10M8.5 4l4 4-4 4"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Tick({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" className={`h-4 w-4 ${className}`} aria-hidden="true">
      <path
        d="M3.5 8.5 6.5 11.5 12.5 4.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Cross({ className = "", muted = false }: { className?: string; muted?: boolean }) {
  return (
    <svg viewBox="0 0 16 16" className={`h-4 w-4 ${className}`} aria-hidden="true">
      <path
        d="M4.5 4.5l7 7M11.5 4.5l-7 7"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        className={muted ? "text-line-strong" : "text-muted"}
      />
    </svg>
  );
}

export function SectionHead({
  eyebrow,
  title,
  intro,
  align = "left",
}: {
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  align?: "left" | "center";
}) {
  return (
    <div className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {eyebrow ? (
        <div className={align === "center" ? "flex justify-center" : ""}>
          <Eyebrow>{eyebrow}</Eyebrow>
        </div>
      ) : null}
      <h2 className="display-sm mt-5 text-[30px] sm:text-[38px]">{title}</h2>
      {intro ? <p className="text-ink-soft mt-5 text-[16px] leading-relaxed">{intro}</p> : null}
    </div>
  );
}
