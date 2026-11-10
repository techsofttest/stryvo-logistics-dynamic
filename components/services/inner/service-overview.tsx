import { Eyebrow } from "@/components/ui/eyebrow";
import type { ServiceItem } from "@/data/services";

interface ServiceOverviewProps {
  service: ServiceItem;
}

export function ServiceOverview({ service }: ServiceOverviewProps) {
  return (
    <div>
      <Eyebrow theme="dark" className="!mb-3 !text-[#17191a] font-bold">
        OPERATIONAL OVERVIEW
      </Eyebrow>
      <h2 className="m-0 text-2xl sm:text-3xl font-semibold tracking-tight text-[#17191a] mb-5">
        Engineered execution for complex cargo movements
      </h2>
      <p className="m-0 text-[#25282a] text-base sm:text-lg leading-relaxed mb-4 font-normal">
        {service.description}
      </p>
      <p className="m-0 text-[#3a3e40] text-sm sm:text-base leading-relaxed">
        Operating across established GCC industrial corridors and international freight gateways, Stryvo Logistics deploys qualified logistics personnel, certified assets, and dedicated dispatch coordinators to provide reliable, compliant, and cost-efficient handling.
      </p>
    </div>
  );
}
