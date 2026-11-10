"use client";

import {
  Truck,
  Package,
  Layers,
  FileCheck2,
  Anchor,
  Plane,
  Boxes,
  ShieldAlert,
  Warehouse,
  Workflow,
  Compass,
  Forklift,
  Flame,
} from "lucide-react";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { useSectionReveal } from "@/components/home/use-section-reveal";

const whatWeDoList = [
  {
    icon: Truck,
    title: "Regional Overland Freight (FTL & LTL)",
    description:
      "Providing Full Truck Load (FTL) and Less Than Truck Load (LTL) transportation solutions across the GCC, ensuring reliable, cost-effective, and timely delivery of goods through an extensive regional transport network across UAE, Oman, and KSA.",
    tag: "UAE • OMAN • KSA",
  },
  {
    icon: Package,
    title: "Express Collection & Last-Mile Distribution",
    description:
      "Providing express cargo collection and last-mile distribution services across the UAE, Oman, and KSA, ensuring fast, reliable, and time-sensitive delivery solutions for businesses and consumers.",
    tag: "LAST MILE & EXPRESS",
  },
  {
    icon: Layers,
    title: "Daily Scheduled Consolidation Services",
    description:
      "Providing daily consolidation services to destinations across the UAE and GCC, optimizing freight efficiency through scheduled departures, cost-effective transportation, and reliable transit times.",
    tag: "SCHEDULED DEPARTURES",
  },
  {
    icon: FileCheck2,
    title: "Bonded Customs Clearance (Free Zones & Cross-Border)",
    description:
      "Providing bonded customs clearance services for export shipments originating from Dubai-based free zones, including Full Truck Load (FTL) cargo movements, ensuring efficient regulatory compliance and seamless cross-border transportation.",
    tag: "DUBAI FREE ZONES",
  },
  {
    icon: Anchor,
    title: "Comprehensive Port & Airport Handling",
    description:
      "Providing seamless handling services for sea freight imports, exports, and transit cargo across major ports in the UAE, Oman, and KSA, ensuring efficient cargo movements, documentation compliance, and timely vessel departures.",
    tag: "SEA & MARITIME",
  },
  {
    icon: Plane,
    title: "Dedicated Air Freight Gateway Management",
    description:
      "Providing dedicated air freight forwarding, customs clearance, and airline handling services at major international airports across the UAE, Oman, and KSA, ensuring rapid transit times for urgent, high-value, and temperature-sensitive shipments.",
    tag: "AIR CARGO",
  },
  {
    icon: Boxes,
    title: "Port-to-Door & Airport-to-Door Logistics",
    description:
      "Providing comprehensive port-to-door and airport-to-door logistics solutions, managing the complete supply chain from vessel discharge or flight arrival through customs clearance to final delivery destination.",
    tag: "END-TO-END",
  },
  {
    icon: ShieldAlert,
    title: "Border Clearance Assistance (GCC Crossings)",
    description:
      "Providing comprehensive border clearance support at key land border crossings between the UAE, Oman, and Saudi Arabia, managing customs documentation, physical inspection coordination, and duty settlement.",
    tag: "GCC BORDERS",
  },
  {
    icon: Warehouse,
    title: "Warehousing, Storage & GCC Distribution",
    description:
      "Providing secure, modern warehousing and storage solutions across strategically located facilities in the UAE, supported by inventory management systems, temperature-controlled environments, and integrated distribution networks.",
    tag: "STORAGE & 3PL",
  },
  {
    icon: Workflow,
    title: "3PL & Integrated Supply Chain Solutions",
    description:
      "Providing end-to-end third-party logistics (3PL) solutions, managing warehousing, inventory control, order fulfillment, and multi-modal distribution to optimize supply chain performance.",
    tag: "SUPPLY CHAIN",
  },
  {
    icon: Compass,
    title: "Logistics & Supply Chain Consultancy",
    description:
      "Providing strategic consultancy services to optimize logistics networks, improve supply chain efficiency, reduce operational costs, and navigate complex regional regulatory frameworks across the Middle East.",
    tag: "CONSULTANCY",
  },
  {
    icon: Forklift,
    title: "Equipment Rental Services",
    description:
      "Providing short-term and long-term rental of specialized logistics and material handling equipment, including forklifts, reach stackers, container handlers, flatbed trailers, and low-bed heavy haulage trailers.",
    tag: "FLEET & ASSETS",
  },
  {
    icon: Flame,
    title: "HAZMAT & Dangerous Goods Transportation",
    description:
      "Providing certified hazardous materials (HAZMAT) and dangerous goods transportation and storage solutions, operating in strict compliance with UAE and international civil defense and safety standards.",
    tag: "HAZMAT & DG",
  },
];

export function AboutWhatWeDoSection() {
  const { sectionRef, isVisible } = useSectionReveal({ threshold: 0.08 });

  return (
    <section ref={sectionRef} id="what-we-do" className="bg-white py-18 sm:py-24 lg:py-32 overflow-hidden">
      <Container>
        {/* Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div
            className={`reveal-item ${isVisible ? "is-visible" : ""}`}
            style={{ transitionDelay: "100ms" }}
          >
            <Eyebrow theme="dark" className="!mb-3 !text-[#17191a] font-bold">
              WHAT WE DO
            </Eyebrow>
          </div>
          <h2
            className={`m-0 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#17191a] mb-4 reveal-item ${isVisible ? "is-visible" : ""
              }`}
            style={{ transitionDelay: "160ms" }}
          >
            Comprehensive Logistics & Transportation Portfolio
          </h2>
          <p
            className={`m-0 text-[#25282a] text-base sm:text-lg leading-relaxed font-normal reveal-item ${isVisible ? "is-visible" : ""
              }`}
            style={{ transitionDelay: "220ms" }}
          >
            From daily cross-border consolidations to certified HAZMAT haulage and bonded free-zone clearances, our capabilities cover every link of your supply chain.
          </p>
        </div>

        {/* Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {whatWeDoList.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className={`relative flex flex-col justify-between bg-[#f3f2ee] rounded-2xl p-6 sm:p-7 border border-black/10 overflow-hidden shadow-xs hover:shadow-lg transition-all duration-300 group reveal-item ${isVisible ? "is-visible" : ""
                  }`}
                style={{ transitionDelay: `${150 + (index % 3) * 80}ms` }}
              >
                <div>
                  {/* Top: Icon + Category Tag */}
                  <div className="flex items-center justify-between gap-3 mb-5">
                    <div className="w-11 h-11 rounded-xl bg-[#ed292f] text-white grid place-items-center shrink-0 shadow-sm transition-transform duration-300 group-hover:scale-108">
                      <Icon size={20} strokeWidth={2.2} />
                    </div>
                    <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-[#17191a]/70 bg-black/5 px-2.5 py-1 rounded-full border border-black/5">
                      {item.tag}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="m-0 text-base sm:text-lg font-bold text-[#17191a] mb-2.5 leading-snug">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="m-0 text-xs sm:text-sm text-[#35393c] leading-relaxed mb-8">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
