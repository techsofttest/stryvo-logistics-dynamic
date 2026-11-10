import { Container } from "@/components/ui/container";
import { ServiceOverview } from "./service-overview";
import { ServiceScope } from "./service-scope";
import { ServiceBenefits } from "./service-benefits";
import { ServiceSpecifications } from "./service-specifications";
import { ServiceCoverage } from "./service-coverage";
import { ServiceEnquiryCard } from "@/components/services/service-enquiry-card";
import type { ServiceItem } from "@/data/services";

interface ServiceDetailContentProps {
  service: ServiceItem;
}

export function ServiceDetailContent({ service }: ServiceDetailContentProps) {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Content Column */}
          <div className="lg:col-span-7 flex flex-col gap-12 sm:gap-14">
            <ServiceOverview service={service} />
            <ServiceScope features={service.features} />
            <ServiceBenefits benefits={service.keyBenefits} />
            <ServiceSpecifications specifications={service.specifications} />
            <ServiceCoverage coverage={service.coverage} />
          </div>

          {/* Right Sticky Enquiry Card */}
          <div id="enquiry" className="lg:col-span-5 lg:sticky lg:top-28">
            <ServiceEnquiryCard currentServiceTitle={service.title} />
          </div>
        </div>
      </Container>
    </section>
  );
}
