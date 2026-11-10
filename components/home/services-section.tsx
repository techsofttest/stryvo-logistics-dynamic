"use client";

import { Container } from "../ui/container";
import { Eyebrow } from "../ui/eyebrow";
import { useSectionReveal } from "./use-section-reveal";
import { ServiceCard } from "@/components/services/service-card";

interface ApiServiceItem {
  id: number;
  title: string;
  tagline: string;
  subtitle: string;
  description_text: string;
  features: string[];
  description: string;
  image: string | null;
}

interface ServicesSectionProps {
  services: ApiServiceItem[];
}

export function ServicesSection({ services }: ServicesSectionProps) {
  const { sectionRef, isVisible } = useSectionReveal({ threshold: 0.1 });

  return (
    <section
      ref={sectionRef}
      className="bg-gray-100 py-18 sm:py-23 lg:py-32"
      id="services"
    >
      <Container>
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 sm:gap-12 mb-9 sm:mb-15">
          <div>
            <div
              className={`reveal-item ${isVisible ? "is-visible" : ""}`}
              style={{ transitionDelay: "80ms" }}
            >
              <Eyebrow>WHAT WE DO</Eyebrow>
            </div>

            <h2
              className={`m-0 font-medium tracking-tight leading-tight text-4xl sm:text-5xl md:text-6xl reveal-item ${
                isVisible ? "is-visible" : ""
              }`}
              style={{ transitionDelay: "160ms" }}
            >
              One partner.
              <br />
              <span className="text-[#ed292f]">More ways forward.</span>
            </h2>
          </div>

          <p
            className={`max-w-xs m-0 mb-1 text-[#55595a] text-base leading-relaxed reveal-item ${
              isVisible ? "is-visible" : ""
            }`}
            style={{ transitionDelay: "240ms" }}
          >
            Practical, connected logistics solutions designed around your cargo,
            your deadlines and your business.
          </p>
        </div>

        {/* Services Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={service.id}
              service={{
                title: service.title,
                slug: service.title
                  .toLowerCase()
                  .replace(/&/g, "")
                  .replace(/[^a-z0-9]+/g, "-")
                  .replace(/^-|-$/g, ""),
                description:
                  service.description_text ||
                  service.subtitle ||
                  service.tagline ||
                  "",
                image: service.image || "/images/service-placeholder.jpg",
              }}
              index={index}
              isVisible={isVisible}
            />
          ))}

          {/* Empty State */}
          {services.length === 0 && (
            <div className="col-span-full text-center py-10">
              <p className="text-sm text-[#55595a]">
                No services are currently available.
              </p>
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}
