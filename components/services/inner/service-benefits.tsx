import { Eyebrow } from "@/components/ui/eyebrow";
import type { ServiceItem } from "@/data/services";

interface ServiceBenefitsProps {
  benefits: ServiceItem["keyBenefits"];
}

export function ServiceBenefits({ benefits }: ServiceBenefitsProps) {
  return (
    <div>
      <Eyebrow theme="dark" className="!mb-3 !text-[#17191a] font-bold">
        WHY STRYVO
      </Eyebrow>
      <h3 className="m-0 text-xl sm:text-2xl font-bold tracking-tight text-[#17191a] mb-6">
        Strategic Advantages for Shippers
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
        {benefits.map((benefit, idx) => (
          <div
            key={idx}
            className="bg-gray-100 rounded-xl p-5 border border-black/10 flex flex-col justify-between"
          >
            <div>
              <div className="w-8 h-8 rounded-lg bg-[#17191a] text-white grid place-items-center mb-3 text-xs font-bold">
                0{idx + 1}
              </div>
              <h4 className="m-0 text-sm sm:text-base font-bold text-[#17191a] mb-2 leading-snug">
                {benefit.title}
              </h4>
              <p className="m-0 text-xs sm:text-[13px] text-[#2c3033] leading-relaxed font-normal">
                {benefit.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
