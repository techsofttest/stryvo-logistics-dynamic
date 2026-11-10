import type { Metadata } from "next";

import { HeroSection } from "@/components/home/hero-section";
import { HeroToAboutImage } from "@/components/home/hero-to-about-image";
import { AboutSection } from "@/components/home/about-section";
import { NetworkSection } from "@/components/home/network-section";
import { ServicesSection } from "@/components/home/services-section";
import { CapabilitiesSection } from "@/components/home/capabilities-section";
import { BannerSection } from "@/components/home/banner-section";
import { ContactSection } from "@/components/home/contact-section";

export const dynamic = "force-dynamic";

// --------------------------------------------------
// Types
// --------------------------------------------------

interface HomeBanner {
  title_first: string;
  title_second: string;
  title_third: string;
  image: string | null;
}

interface HomePageData {
  success: boolean;
  seo: {
    meta_title: string;
    meta_description: string;
    meta_key: string;
  };
  banner: HomeBanner;
}

interface ServiceItem {
  id: number;
  title: string;
  tagline: string;
  subtitle: string;
  description_text: string;
  features: string[];
  description: string;
  image: string | null;
}

interface ServicesPageData {
  success: boolean;
  services: ServiceItem[];
}

interface ContactAddress {
  heading: string;
  description: string;
}

interface ContactPageData {
  success: boolean;
  data: {
    address?: ContactAddress[];
  };
}

// --------------------------------------------------
// API URL
// --------------------------------------------------

const API_URL = process.env.NEXT_PUBLIC_API_URL?.replace(/\/$/, "");

// --------------------------------------------------
// Get Home API
// --------------------------------------------------

async function getHome(): Promise<HomePageData | null> {
  try {
    if (!API_URL) {
      throw new Error("NEXT_PUBLIC_API_URL is not configured");
    }

    const response = await fetch(`${API_URL}/home`);

    if (!response.ok) {
      throw new Error(`Home API error: ${response.status}`);
    }

    const result: HomePageData = await response.json();

    return result.success ? result : null;
  } catch (error) {
    console.error("Failed to fetch home data:", error);
    return null;
  }
}

// --------------------------------------------------
// Get Services API
// --------------------------------------------------

async function getServices(): Promise<ServicesPageData | null> {
  try {
    if (!API_URL) {
      throw new Error("NEXT_PUBLIC_API_URL is not configured");
    }

    const response = await fetch(`${API_URL}/services`);

    if (!response.ok) {
      throw new Error(`Services API error: ${response.status}`);
    }

    const result: ServicesPageData = await response.json();

    return result.success ? result : null;
  } catch (error) {
    console.error("Failed to fetch services data:", error);
    return null;
  }
}

// --------------------------------------------------
// Get Contact API
// --------------------------------------------------

async function getContact(): Promise<ContactPageData | null> {
  try {
    if (!API_URL) {
      throw new Error("NEXT_PUBLIC_API_URL is not configured");
    }

    const response = await fetch(`${API_URL}/contact`);

    if (!response.ok) {
      throw new Error(`Contact API error: ${response.status}`);
    }

    const result: ContactPageData = await response.json();

    return result.success ? result : null;
  } catch (error) {
    console.error("Failed to fetch contact data:", error);
    return null;
  }
}

// --------------------------------------------------
// Dynamic SEO Metadata
// --------------------------------------------------

export async function generateMetadata(): Promise<Metadata> {
  const homeData = await getHome();

  return {
    title: homeData?.seo?.meta_title || "Stryvo Logistics LLC",

    description:
      homeData?.seo?.meta_description?.replace(/<[^>]*>/g, "").trim() ||
      "Moving business without borders. Integrated logistics solutions across the GCC.",

    keywords: homeData?.seo?.meta_key || undefined,
  };
}

// --------------------------------------------------
// Home Page
// --------------------------------------------------

export default async function HomePage() {
  const [homeData, servicesData, contactData] = await Promise.all([
    getHome(),
    getServices(),
    getContact(),
  ]);

  return (
    <main className="w-full">
      <HeroSection banner={homeData?.banner ?? null} />

      <HeroToAboutImage />

      <AboutSection />

      <NetworkSection />

      <ServicesSection services={servicesData?.services ?? []} />

      <CapabilitiesSection />

      <BannerSection />

      <ContactSection
        address={contactData?.data?.address ?? []}
        services={servicesData?.services?.map((service) => service.title) ?? []}
      />
    </main>
  );
}
