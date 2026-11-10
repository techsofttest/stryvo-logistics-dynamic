"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { Container } from "@/components/ui/container";
import { useSectionReveal } from "@/components/home/use-section-reveal";
import { Eyebrow } from "@/components/ui/eyebrow";

interface FaqItem {
  q: string;
  a: string;
}

interface FaqCategory {
  id: string;
  name: string;
  faqs: FaqItem[];
}

const faqCategories: FaqCategory[] = [
  {
    id: "road-freight",
    name: "Road Freight & GCC Transit",
    faqs: [
      {
        q: "Which cross-border corridors do you serve overland?",
        a: "We operate daily dedicated Full Truckload (FTL) and scheduled consolidation (LTL) linehauls connecting all 7 UAE Emirates with Muscat and Sohar in Oman, as well as Riyadh, Jeddah, Dammam, and border crossings across Saudi Arabia.",
      },
      {
        q: "What types of road transportation fleet do you deploy?",
        a: "Our fleet consists of standard box trailers, tautliners (curtain-siders), temperature-controlled reefer trailers, flatbeds, and heavy-haul low-bed trailers capable of handling out-of-gauge and project cargo.",
      },
      {
        q: "What are your typical transit times between UAE, Oman, and Saudi Arabia?",
        a: "Transit times typically range between 24 to 48 hours for UAE-to-Oman corridors and 48 to 72 hours for direct UAE-to-Saudi Arabia destinations, including border clearance checkpoints.",
      },
    ],
  },
  {
    id: "ocean-air",
    name: "Ocean & Air Freight",
    faqs: [
      {
        q: "Do you handle both FCL (Full Container) and LCL (Groupage) shipments?",
        a: "Yes. We manage Full Container Loads (FCL) with priority shipping line carrier contracts, as well as weekly Less-than-Container Loads (LCL) consolidations across Asia, Europe, the Americas, and Middle Eastern ports.",
      },
      {
        q: "What airfreight services are available through Dubai gateways?",
        a: "We provide scheduled air consolidation, express priority airfreight, dangerous goods handling, and airport-to-airport or door-to-door deliveries through Dubai International (DXB) and Al Maktoum International (DWC).",
      },
    ],
  },
  {
    id: "customs-compliance",
    name: "Customs Clearance & Free Zones",
    faqs: [
      {
        q: "Do you handle bonded export shipments originating from Dubai Free Zones?",
        a: "Yes. Stryvo Logistics provides licensed bonded customs clearance from JAFZA, DAFZA, Dubai South, and all major UAE free zones, preparing complete transit documentation and customs escort where required.",
      },
      {
        q: "How does Stryvo assist with cross-border border inspections and tariffs?",
        a: "Our licensed in-house customs brokers review Harmonized System (HS) tariff codes, verify Bayan declarations, and expedite border inspections at Hatta, Al Wajajah, Batha, and Ghuwaifat border posts.",
      },
    ],
  },
  {
    id: "quotes-tracking",
    name: "Rates, Quotes & Tracking",
    faqs: [
      {
        q: "How fast can I receive a quotation for a shipment?",
        a: "Our dedicated freight dispatch team provides comprehensive rate quotes within 2 business hours during operating times (08:00 – 19:00 GST, Monday to Saturday).",
      },
      {
        q: "How can I track my active shipment status?",
        a: "Every consignment is assigned a unique reference code with continuous GPS linehaul tracking and checkpoint status reports sent via email or WhatsApp directly to your supply chain team.",
      },
    ],
  },
  {
    id: "hazmat-equipment",
    name: "HAZMAT & Equipment Rental",
    faqs: [
      {
        q: "Can Stryvo handle dangerous goods and chemical products (HAZMAT)?",
        a: "Yes. We maintain fully compliant DG-certified vehicles, trained drivers, and safety equipment for handling, storing, and transporting hazardous chemical cargo in full alignment with UAE and GCC civil defense regulations.",
      },
      {
        q: "What types of equipment do you rent out across the UAE?",
        a: "Our equipment rental fleet includes heavy-duty forklifts, reach stackers, mobile cranes, flatbed trailers, and specialized heavy-haul low-bed carriers available on flexible short-term and long-term lease terms.",
      },
    ],
  },
];

export function HelpFaqSection() {
  const { sectionRef, isVisible } = useSectionReveal({ threshold: 0.08 });
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({
    "road-freight-0": true,
    "ocean-air-0": true,
  });

  const toggleItem = (key: string) => {
    setOpenItems((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <section ref={sectionRef} className="bg-white py-18 sm:py-24 overflow-hidden">
      <Container>
        {/* Centered Header with readable max-width */}
        <div className={`max-w-2xl mx-auto text-center mb-12 sm:mb-16 reveal-item ${isVisible ? "is-visible" : ""}`} style={{ transitionDelay: "100ms" }}>
          <div className="flex justify-center">
            <Eyebrow theme="dark" className="!mb-3 !text-[#17191a] font-bold">
              FREQUENT QUESTIONS
            </Eyebrow>
          </div>
          <h2 className="m-0 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#17191a]">
            Common Queries & Guidance
          </h2>
        </div>

        {/* Categories placed one after another in a centered, readable width */}
        <div className={`max-w-3xl mx-auto flex flex-col gap-10 sm:gap-12 reveal-item ${isVisible ? "is-visible" : ""}`} style={{ transitionDelay: "200ms" }}>
          {faqCategories.map((category) => (
            <div key={category.id} className="flex flex-col gap-4">
              {/* Category Topic Header */}
              <div className="flex items-center gap-3 pb-2">
                <h3 className="m-0 text-lg sm:text-xl font-bold text-[#17191a] tracking-tight">
                  {category.name}
                </h3>
              </div>

              {/* Single gray box containing all FAQs for this category */}
              <div className="bg-[#f3f2ee] rounded-2xl sm:rounded-3xl border border-black/10 overflow-hidden divide-y divide-black/10">
                {category.faqs.map((faq, idx) => {
                  const itemKey = `${category.id}-${idx}`;
                  const isOpen = Boolean(openItems[itemKey]);

                  return (
                    <div key={itemKey} className="transition-colors">
                      <button
                        type="button"
                        onClick={() => toggleItem(itemKey)}
                        aria-expanded={isOpen}
                        className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer select-none bg-transparent hover:bg-black/[0.02] transition-colors"
                      >
                        <span className="text-sm sm:text-base font-bold text-[#17191a] leading-snug">
                          {faq.q}
                        </span>
                        <span
                          className={`w-8 h-8 rounded-full grid place-items-center shrink-0 transition-all duration-200 ${isOpen
                            ? "bg-[#ed292f] text-white"
                            : "bg-white text-[#17191a] shadow-xs hover:bg-[#ed292f] hover:text-white"
                            }`}
                        >
                          {isOpen ? (
                            <Minus size={15} strokeWidth={2.4} />
                          ) : (
                            <Plus size={15} strokeWidth={2.4} />
                          )}
                        </span>
                      </button>

                      {isOpen && (
                        <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-[#35393c] leading-relaxed">
                          <p className="m-0 font-normal">{faq.a}</p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
