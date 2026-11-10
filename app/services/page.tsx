import type { Metadata } from "next";

import { getServices } from "@/lib/services";

import { ServicesListingHero } from "@/components/services/services-listing-hero";
import { ServicesListingZigzag } from "@/components/services/services-listing-zigzag";

export const dynamic = "force-dynamic";

// --------------------------------------------------
// Dynamic SEO Metadata
// --------------------------------------------------

export async function generateMetadata(): Promise<Metadata> {
  const servicesData = await getServices();

  return {
    title:
      servicesData?.seo?.meta_title ||
      "Logistics Services & Solutions | Stryvo Logistics LLC",

    description:
      servicesData?.seo?.meta_description?.replace(/<[^>]*>/g, "").trim() ||
      "Explore our complete range of logistics services across the UAE, Oman, and KSA: Road freight, Air & Sea freight, Warehousing, Customs Clearance, 3PL, and Project Cargo.",

    keywords: servicesData?.seo?.meta_key || undefined,
  };
}

// --------------------------------------------------
// Services Page
// --------------------------------------------------

export default async function ServicesPage() {
  const servicesData = await getServices();

  return (
    <main className="w-full bg-white">
      {/* Services Hero Banner */}
      <ServicesListingHero banner={servicesData?.banner ?? null} />

      {/* Dynamic Services Listing */}
      <ServicesListingZigzag services={servicesData?.services ?? []} />
    </main>
  );
}
