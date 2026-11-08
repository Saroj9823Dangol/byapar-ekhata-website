import type { Metadata } from "next";
import { Fraunces, Inter_Tight, Noto_Sans_Devanagari } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
  axes: ["SOFT", "WONK", "opsz"],
});

const devanagari = Noto_Sans_Devanagari({
  variable: "--font-devanagari",
  subsets: ["devanagari", "latin"],
  display: "swap",
});

const description =
  "Byapar eKhata is the accounting app for Nepali businesses. Bill customers, track udharo, manage stock and file VAT — even when the internet is down.";

export const metadata: Metadata = {
  metadataBase: new URL("https://byaparekhata.com"),
  title: {
    default: "Byapar eKhata — accounting for Nepali businesses",
    template: "%s · Byapar eKhata",
  },
  description,
  keywords: [
    "accounting software Nepal",
    "khata app",
    "udharo",
    "VAT billing Nepal",
    "Nepali business app",
    "Byapar eKhata",
  ],
  openGraph: {
    title: "Byapar eKhata — accounting for Nepali businesses",
    description,
    type: "website",
    locale: "en_NP",
    siteName: "Byapar eKhata",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${interTight.variable} ${fraunces.variable} ${devanagari.variable} h-full`}
    >
      <body className="flex min-h-full flex-col bg-paper text-ink antialiased">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
