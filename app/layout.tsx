import type { Metadata } from "next";
import localFont from "next/font/local";

import "./globals.css";
import { SiteHeader } from "@/components/global/site-header";
import { SiteFooter } from "@/components/global/site-footer";
import { WhatsAppIsland } from "@/components/ui/whatsapp-island";
import { getContact } from "@/lib/contact";

const plusJakartaSans = localFont({
  src: "../public/fonts/plus-jakarta-sans.ttf",
  variable: "--font-sans",
  display: "swap",
  weight: "400 800",
});

const syne = localFont({
  src: "../public/fonts/syne.ttf",
  variable: "--font-display",
  display: "swap",
  weight: "600 800",
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

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const contactData = await getContact();
  const contact = contactData?.data ?? null;

  return (
    <html lang="en" className={`${plusJakartaSans.variable} ${syne.variable}`}>
      <body className="font-sans antialiased">
        <SiteHeader />
        {children}
        <SiteFooter />

        <WhatsAppIsland whatsapp={contact?.phone2 ?? ""} />
      </body>
    </html>
  );
}
