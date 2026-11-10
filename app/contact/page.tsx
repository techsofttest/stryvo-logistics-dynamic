import type { Metadata } from "next";

import { getContact } from "@/lib/contact";
import { getServices } from "@/lib/services";

import { InnerPageBanner } from "@/components/global/inner-page-banner";
import { Button } from "@/components/ui/button";
import { ContactDetailsSection } from "@/components/contact/contact-details-section";
import { ContactFormSection } from "@/components/contact/contact-form-section";
import { ContactMapSection } from "@/components/contact/contact-map-section";

export const dynamic = "force-dynamic";

// --------------------------------------------------
// Dynamic SEO Metadata
// --------------------------------------------------

export async function generateMetadata(): Promise<Metadata> {
  const contactData = await getContact();

  return {
    title:
      contactData?.seo?.meta_title ||
      "Contact Us | Stryvo Logistics LLC - Dubai, UAE",

    description:
      contactData?.seo?.meta_description?.replace(/<[^>]*>/g, "").trim() ||
      "Connect with Stryvo Logistics LLC. Inquire about GCC overland freight, air & sea forwarding, bonded customs clearance, and 3PL warehousing.",

    keywords: contactData?.seo?.meta_key || undefined,
  };
}

// --------------------------------------------------
// Contact Page
// --------------------------------------------------

export default async function ContactPage() {
  // Fetch Contact and Services API simultaneously
  const [contactData, servicesData] = await Promise.all([
    getContact(),
    getServices(),
  ]);

  return (
    <main className="w-full bg-white">
      {/* Reusable Inner Page Hero Banner */}
      <InnerPageBanner
        eyebrow="GET IN TOUCH // STRYVO LOGISTICS"
        title={contactData?.banner?.title_first || "Moving business without"}
        highlightText={contactData?.banner?.title_highlight || "borders."}
        bgImage={
          contactData?.banner?.image ||
          "/banner/Golden Hour Container Ship at Sea.png"
        }
      >
        <Button href="#contact-form" variant="red" size="md">
          Request a Rate Quote
        </Button>

        <Button href="tel:+97140000000" variant="white" size="md">
          Call Dispatch Desk
        </Button>
      </InnerPageBanner>

      {/* Direct Contact Details Section */}
      <ContactDetailsSection data={contactData?.data ?? null} />

      {/* Interactive Contact / Quote Form Section */}
      <ContactFormSection services={servicesData?.services ?? []} />

      {/* Google Map Section */}
      <ContactMapSection />
    </main>
  );
}
