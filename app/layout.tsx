import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Syne } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/global/site-header";
import { SiteFooter } from "@/components/global/site-footer";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-sans",
  display: "swap",
});

const syne = Syne({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Stryvo Logistics LLC | Moving Business Without Borders",
  description:
    "Dubai-based logistics and transportation solutions across the UAE, Oman, Saudi Arabia and global trade lanes. Connect with Stryvo Logistics LLC for road, air, sea and supply-chain services.",
  applicationName: "Stryvo Logistics LLC",
  openGraph: {
    title: "Stryvo Logistics LLC | Moving Business Without Borders",
    description:
      "Regional strength. Global reach. Logistics solutions built around the way your business moves.",
    type: "website",
    locale: "en_AE",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${plusJakartaSans.variable} ${syne.variable}`}>
      <body className="font-sans antialiased">
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
