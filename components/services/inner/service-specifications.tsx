import { Eyebrow } from "@/components/ui/eyebrow";
import type { ServiceItem } from "@/data/services";

interface ServiceSpecificationsProps {
  specifications: ServiceItem["specifications"];
}

export function ServiceSpecifications({ specifications }: ServiceSpecificationsProps) {
  return (
    <div id="specifications" className="bg-gray-100 rounded-2xl p-6 sm:p-8 border border-black/10">
      <Eyebrow theme="dark" className="!mb-3 !text-[#17191a] font-bold">
        TECHNICAL METRICS
      </Eyebrow>
      <h3 className="m-0 text-xl sm:text-2xl font-bold tracking-tight text-[#17191a] mb-6">
        Operational Parameters
      </h3>
      <div className="divide-y divide-black/15">
        {specifications.map((spec, idx) => (
          <div key={idx} className="py-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-1">
            <span className="text-xs sm:text-sm font-bold text-[#35393c]">
              {spec.label}
            </span>
            <span className="text-xs sm:text-sm font-extrabold text-[#17191a]">
              {spec.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
