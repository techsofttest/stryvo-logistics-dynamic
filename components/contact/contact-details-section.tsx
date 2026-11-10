"use client";

import { MapPin, Phone, Mail, Clock } from "lucide-react";

import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { useSectionReveal } from "@/components/home/use-section-reveal";

import type { ContactDetails } from "@/lib/contact";

interface ContactDetail {
  label: string;
  value: string;
  href?: string;
}

interface ContactItem {
  icon: typeof MapPin;
  title: string;
  subtitle: string;
  details: ContactDetail[];
}

interface ContactDetailsSectionProps {
  data: ContactDetails | null;
}

export function ContactDetailsSection({ data }: ContactDetailsSectionProps) {
  const { sectionRef, isVisible } = useSectionReveal({ threshold: 0.1 });

  // --------------------------------------------------
  // Contact Cards
  // --------------------------------------------------

  const contactCards: ContactItem[] = [
    {
      icon: MapPin,
      title: "Dubai Office",
      subtitle: "Stryvo Logistics LLC",
      details:
        data?.address?.map((item) => ({
          label: item.heading,
          value: item.description,
          href: item.description
            ? `https://maps.google.com/?q=${encodeURIComponent(item.description)}`
            : undefined,
        })) || [],
    },

    {
      icon: Phone,
      title: "Direct Operations & Dispatch",
      subtitle: "Dedicated Support",
      details: [
        ...(data?.phone1
          ? [
              {
                label: "Freight Operations",
                value: data.phone1,
                href: `tel:${data.phone1.replace(/[^\d+]/g, "")}`,
              },
            ]
          : []),

        ...(data?.phone2
          ? [
              {
                label: "Customer Support",
                value: data.phone2,
                href: `tel:${data.phone2.replace(/[^\d+]/g, "")}`,
              },
            ]
          : []),
      ],
    },

    {
      icon: Mail,
      title: "Email & Commercial Desks",
      subtitle: "Contact Our Team",
      details: [
        ...(data?.email1
          ? [
              {
                label: "Rate Inquiries",
                value: data.email1,
                href: `mailto:${data.email1}`,
              },
            ]
          : []),

        ...(data?.email2
          ? [
              {
                label: "General Inquiries",
                value: data.email2,
                href: `mailto:${data.email2}`,
              },
            ]
          : []),

        ...(data?.email3
          ? [
              {
                label: "Management Contact",
                value: data.email3,
                href: `mailto:${data.email3}`,
              },
            ]
          : []),
      ],
    },

    {
      icon: Clock,
      title: "Operating Hours & Transit",
      subtitle: "Active GCC Linehauls",
      details:
        data?.operating_hrs_transit?.map((item) => ({
          label: item.heading,
          value: item.description,
        })) || [],
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="bg-white py-18 sm:py-24 lg:py-28 overflow-hidden"
    >
      <Container>
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-14 sm:mb-18">
          <div
            className={`flex justify-center reveal-item ${
              isVisible ? "is-visible" : ""
            }`}
            style={{ transitionDelay: "100ms" }}
          >
            <Eyebrow theme="dark" className="!mb-3 !text-[#17191a] font-bold">
              GET IN TOUCH
            </Eyebrow>
          </div>

          <h2
            className={`m-0 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#17191a] reveal-item ${
              isVisible ? "is-visible" : ""
            }`}
            style={{ transitionDelay: "160ms" }}
          >
            Connected Across Every Channel
          </h2>

          <p
            className={`m-0 text-sm sm:text-base text-[#2c3033] mt-3 font-normal leading-relaxed reveal-item ${
              isVisible ? "is-visible" : ""
            }`}
            style={{ transitionDelay: "220ms" }}
          >
            Reach our Dubai headquarters, 24/7 overland dispatch desks, or
            commercial support teams.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactCards.map((card, idx) => {
            const Icon = card.icon;

            return (
              <div
                key={card.title}
                className={`bg-[#f3f2ee] rounded-2xl p-6 sm:p-7 border border-black/10 flex flex-col justify-between hover:shadow-lg transition-all duration-300 reveal-item ${
                  isVisible ? "is-visible" : ""
                }`}
                style={{ transitionDelay: `${150 + idx * 80}ms` }}
              >
                <div>
                  {/* Icon Header */}
                  <div className="w-12 h-12 rounded-xl bg-[#ed292f] text-white grid place-items-center mb-5 shadow-sm">
                    <Icon size={22} strokeWidth={2.2} />
                  </div>

                  <h3 className="m-0 text-lg font-bold text-[#17191a] mb-1">
                    {card.title}
                  </h3>

                  <p className="m-0 text-xs font-semibold text-[#ed292f] uppercase tracking-wider mb-5">
                    {card.subtitle}
                  </p>

                  {/* Detail Items */}
                  <div className="flex flex-col gap-3 pt-3 border-t border-black/10 text-xs sm:text-sm">
                    {card.details.map((detail, dIdx) => (
                      <div key={dIdx} className="flex flex-col">
                        <span className="text-[11px] uppercase tracking-wider text-[#4a4f52] font-semibold">
                          {detail.label}
                        </span>

                        {detail.href ? (
                          <a
                            href={detail.href}
                            target={
                              detail.href.startsWith("https://")
                                ? "_blank"
                                : undefined
                            }
                            rel={
                              detail.href.startsWith("https://")
                                ? "noopener noreferrer"
                                : undefined
                            }
                            className="text-[#17191a] font-bold underline underline-offset-2 hover:text-[#ed292f] transition-colors break-words"
                          >
                            {detail.value}
                          </a>
                        ) : (
                          <span className="text-[#17191a] font-medium leading-snug">
                            {detail.value}
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
