import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { ServiceCard } from "@/components/services/service-card";
import { servicesData } from "@/data/services";

export function ServicesListingGrid() {
  return (
    <section id="service-grid" className="py-18 sm:py-24 lg:py-28 bg-white">
      <Container>
        {/* Subheader */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12 sm:mb-16 pb-6 border-b border-black/10">
          <div>
            <Eyebrow theme="dark" className="!mb-3 !text-[#17191a] font-bold">
              OUR CORE PORTFOLIO
            </Eyebrow>
            <h2 className="m-0 text-3xl sm:text-4xl font-bold tracking-tight text-[#17191a]">
              8 Connected Service Pillars
            </h2>
          </div>
          <p className="m-0 text-sm sm:text-base text-[#2c3033] max-w-md font-normal leading-relaxed">
            Every service is delivered with dedicated regional operations,
            transparent milestone tracking, and licensed customs clearance.
          </p>
        </div>

        {/* Service Cards Grid - 4 columns on large screens */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {servicesData.map((service, index) => (
            <ServiceCard key={service.slug} service={service} index={index} />
          ))}
        </div>
      </Container>
    </section>
  );
}
