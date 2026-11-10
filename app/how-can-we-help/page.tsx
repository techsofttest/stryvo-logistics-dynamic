import type { Metadata } from "next";

import { getContact } from "@/lib/contact";
import { getServices, type ServiceItem } from "@/lib/services";

import { InnerPageBanner } from "@/components/global/inner-page-banner";
import { Button } from "@/components/ui/button";
import { HelpFaqSection } from "@/components/help/help-faq-section";
import { ContactDetailsSection } from "@/components/contact/contact-details-section";
import { BannerSection } from "@/components/home/banner-section";
import { ContactFormSection } from "@/components/contact/contact-form-section";

export const dynamic = "force-dynamic";

// --------------------------------------------------
// API Types
// --------------------------------------------------

interface HelpPageData {
  success: boolean;
  seo: {
    meta_title: string;
    meta_description: string;
    meta_key: string;
  };
  banner: {
    title_first: string;
    title_highlight: string;
    image: string | null;
  };
}

interface ServicesPageData {
  success: boolean;
  services: ServiceItem[];
}

// --------------------------------------------------
// API URL
// --------------------------------------------------

const API_URL = process.env.NEXT_PUBLIC_API_URL?.replace(/\/$/, "");

// --------------------------------------------------
// Fetch Help API
// --------------------------------------------------

async function getHelp(): Promise<HelpPageData | null> {
  try {
    if (!API_URL) {
      throw new Error("NEXT_PUBLIC_API_URL is not configured");
    }

    const response = await fetch(`${API_URL}/help`);

    if (!response.ok) {
      throw new Error(`Help API error: ${response.status}`);
    }

    const result: HelpPageData = await response.json();

    return result.success ? result : null;
  } catch (error) {
    console.error("Failed to fetch Help data:", error);
    return null;
  }
}

// --------------------------------------------------
// Dynamic SEO Metadata
// --------------------------------------------------

export async function generateMetadata(): Promise<Metadata> {
  const helpData = await getHelp();

  return {
    title:
      helpData?.seo?.meta_title ||
      "How Can We Help You? | Stryvo Logistics LLC",

    description:
      helpData?.seo?.meta_description?.replace(/<[^>]*>/g, "").trim() ||
      "Explore how Stryvo Logistics LLC can assist your business with GCC cross-border road freight, air and sea forwarding, customs clearance, warehousing, and freight solutions.",

    keywords: helpData?.seo?.meta_key || undefined,
  };
}

// --------------------------------------------------
// Help Page
// --------------------------------------------------

export default async function HowCanWeHelpPage() {
  const [helpData, servicesData, contactData] = await Promise.all([
    getHelp(),
    getServices(),
    getContact(),
  ]);

  const banner = helpData?.banner;

  return (
    <main className="w-full bg-white">
      {/* Dynamic Inner Page Hero Banner */}
      <InnerPageBanner
        eyebrow="SUPPORT & SOLUTIONS // STRYVO LOGISTICS"
        title={
          <>
            {banner?.title_first || "How can we"}
            <br className="hidden sm:block" />
          </>
        }
        highlightText={banner?.title_highlight || "help you move?"}
        bgImage={banner?.image || "/banner/Sunlit Colorful Container Yard.png"}
      >
        <Button href="#help-options" variant="red" size="md">
          Explore Solutions
        </Button>

        <Button href="#contact-form" variant="white" size="md">
          Ask a Question
        </Button>
      </InnerPageBanner>

      {/* Frequently Asked Questions */}
      <HelpFaqSection />

      {/* Direct Contact Channels */}
      <ContactDetailsSection data={contactData?.data ?? null} />

      {/* Banner */}
      <BannerSection />

      {/* Interactive Form Section */}
      <ContactFormSection services={servicesData?.services ?? []} />
    </main>
  );
}
