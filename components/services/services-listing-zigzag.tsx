"use client";

import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Button } from "@/components/ui/button";
import { useSectionReveal } from "@/components/home/use-section-reveal";

import type { ServiceItem } from "@/lib/services";

interface ServicesListingZigzagProps {
  services: ServiceItem[];
}

// Generate IDs that match the ServicesDropdown links.
function generateSlug(title: string) {
  return title
    .toLowerCase()
    .replace(/&/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

export function ServicesListingZigzag({
  services,
}: ServicesListingZigzagProps) {
  const { sectionRef, isVisible } = useSectionReveal({
    threshold: 0.05,
  });

  return (
    <section
      id="service-grid"
      ref={sectionRef}
      className="py-18 sm:py-24 lg:py-28 bg-white overflow-hidden"
    >
      <Container>
        {/* Section Heading */}
        <div className="max-w-2xl mx-auto text-center mb-16 sm:mb-24">
          <div
            className={`flex justify-center reveal-item ${
              isVisible ? "is-visible" : ""
            }`}
            style={{ transitionDelay: "100ms" }}
          >
            <Eyebrow theme="dark" className="!mb-3 !text-[#17191a] font-bold">
              OUR CORE PORTFOLIO
            </Eyebrow>
          </div>

          <h2
            className={`m-0 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#17191a] reveal-item ${
              isVisible ? "is-visible" : ""
            }`}
            style={{ transitionDelay: "160ms" }}
          >
            Specialized Services & Fleet Solutions
          </h2>
        </div>

        {/* Zigzag Services List */}
        <div className="flex flex-col gap-20 sm:gap-28 lg:gap-32">
          {services.map((service, index) => {
            const isEven = index % 2 === 0;
            const serviceSlug = generateSlug(service.title);

            return (
              <article
                key={service.id}
                id={serviceSlug}
                className={`scroll-mt-28 sm:scroll-mt-36 reveal-item ${
                  isVisible ? "is-visible" : ""
                }`}
                style={{
                  transitionDelay: `${150 + (index % 2) * 100}ms`,
                }}
              >
                <div
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16 items-center ${
                    isEven ? "" : "lg:[&>*:first-child]:order-2"
                  }`}
                >
                  {/* Image Column */}
                  <div className="lg:col-span-6 w-full">
                    <div className="relative group rounded-2xl sm:rounded-3xl overflow-hidden aspect-[4/3] sm:aspect-[16/11] bg-[#17191a]">
                      {service.image ? (
                        <img
                          src={service.image}
                          alt={service.title}
                          className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                        />
                      ) : (
                        <div className="absolute inset-0 flex items-center justify-center text-white/50">
                          <span className="text-sm">{service.title}</span>
                        </div>
                      )}

                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />

                      {/* Corner Number Badge */}
                      <div className="absolute bottom-4 right-4 sm:bottom-5 sm:right-5 z-10 text-white/30 font-bold text-3xl sm:text-4xl select-none">
                        {String(index + 1).padStart(2, "0")}
                      </div>
                    </div>
                  </div>

                  {/* Text / Details Column */}
                  <div className="lg:col-span-6 flex flex-col items-start">
                    {/* Tagline */}
                    <Eyebrow>{service.tagline || "OUR SERVICES"}</Eyebrow>

                    {/* Service Title */}
                    <h3 className="m-0 text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#17191a] mb-4">
                      {service.title}
                    </h3>

                    {/* Subtitle */}
                    {service.subtitle && (
                      <p className="m-0 text-sm sm:text-base text-[#17191a] font-medium leading-snug mb-3">
                        {service.subtitle}
                      </p>
                    )}

                    {/* Main Description */}
                    {service.description_text && (
                      <p className="m-0 text-xs sm:text-sm text-[#4a4f52] leading-relaxed mb-6">
                        {service.description_text}
                      </p>
                    )}

                    {/* Features Checklist */}
                    {service.features && service.features.length > 0 && (
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3 w-full mb-8 pt-4 border-t border-black/10">
                        {service.features.map((feature, fIdx) => (
                          <div key={fIdx} className="flex items-start gap-2.5">
                            <CheckCircle2
                              size={16}
                              className="text-[#ed292f] shrink-0 mt-0.5"
                              strokeWidth={2.5}
                            />

                            <span className="text-xs sm:text-[13px] text-[#2c3033] font-medium leading-snug">
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Action Button */}
                    <div className="flex flex-wrap items-center gap-3.5">
                      <Button
                        href="/contact#contact-form"
                        variant="dark"
                        size="sm"
                        className="!text-xs sm:!text-sm"
                      >
                        Enquire for this service
                      </Button>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}

          {/* Empty State */}
          {services.length === 0 && (
            <div className="text-center py-12">
              <p className="text-sm text-[#4a4f52]">
                No services are currently available.
              </p>
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}
