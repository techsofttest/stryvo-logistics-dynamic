import type { Metadata } from "next";

import { InnerPageBanner } from "@/components/global/inner-page-banner";
import { Button } from "@/components/ui/button";
import { AboutMissionSection } from "@/components/about/about-mission-section";
import { AboutWhatWeDoSection } from "@/components/about/about-what-we-do-section";
import { AboutValuesSection } from "@/components/about/about-values-section";
import { NetworkSection } from "@/components/home/network-section";
import { CapabilitiesSection } from "@/components/home/capabilities-section";
import { BannerSection } from "@/components/home/banner-section";

export const dynamic = "force-dynamic";

// --------------------------------------------------
// Company API Response Interface
// --------------------------------------------------

interface CompanyPageData {
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

// --------------------------------------------------
// API Configuration
// --------------------------------------------------

const API_URL = process.env.NEXT_PUBLIC_API_URL?.replace(/\/$/, "");

// --------------------------------------------------
// Fetch Company Data
// --------------------------------------------------

async function getCompany(): Promise<CompanyPageData | null> {
  try {
    if (!API_URL) {
      throw new Error("NEXT_PUBLIC_API_URL is not configured");
    }

    const response = await fetch(`${API_URL}/company`);

    if (!response.ok) {
      throw new Error(`Company API error: ${response.status}`);
    }

    const result: CompanyPageData = await response.json();

    return result.success ? result : null;
  } catch (error) {
    console.error("Failed to fetch Company data:", error);
    return null;
  }
}

// --------------------------------------------------
// Dynamic SEO Metadata
// --------------------------------------------------

export async function generateMetadata(): Promise<Metadata> {
  const companyData = await getCompany();

  return {
    title:
      companyData?.seo?.meta_title ||
      "About Us | Stryvo Logistics LLC - The Drive to Strive",

    description:
      companyData?.seo?.meta_description?.replace(/<[^>]*>/g, "").trim() ||
      "Learn about Stryvo Logistics LLC: Dubai-based freight and supply chain partner connecting UAE, Oman, Saudi Arabia, and global trade corridors. The drive to strive.",

    keywords: companyData?.seo?.meta_key || undefined,
  };
}

// --------------------------------------------------
// Company Page
// --------------------------------------------------

export default async function AboutPage() {
  const companyData = await getCompany();

  const banner = companyData?.banner;

  return (
    <main className="w-full bg-white">
      {/* Inner Page Hero Banner */}
      <InnerPageBanner
        eyebrow="WHO WE ARE // STRYVO LOGISTICS"
        title={banner?.title_first || "Connecting commerce"}
        highlightText={banner?.title_highlight || "with clarity & purpose."}
        bgImage={
          banner?.image || "/banner/Red Truck Queue at the Industrial Port.png"
        }
      >
        <Button href="#what-we-do" variant="red" size="md">
          Explore What We Do
        </Button>

        <Button href="#contact" variant="white" size="md">
          Contact Our Team
        </Button>
      </InnerPageBanner>

      {/* Brand Narrative, Tagline ('The drive to strive') & Heritage */}
      <AboutMissionSection />

      {/* Comprehensive What Do We Do Capabilities Section */}
      <div id="what-we-do">
        <AboutWhatWeDoSection />
      </div>

      {/* Reusable Network Section from Home Page */}
      <NetworkSection />

      {/* Operating Principles / Core Values */}
      <AboutValuesSection />

      {/* Reusable Capabilities Section from Home Page */}
      <CapabilitiesSection />

      {/* Reusable Call-to-Action Banner from Home Page */}
      <BannerSection />
    </main>
  );
}
