import { Check } from "lucide-react";
import { Eyebrow } from "@/components/ui/eyebrow";

interface ServiceScopeProps {
  features: string[];
}

export function ServiceScope({ features }: ServiceScopeProps) {
  return (
    <div className="bg-gray-100 rounded-2xl p-6 sm:p-8 border border-black/10">
      <Eyebrow theme="dark" className="!mb-3 !text-[#17191a] font-bold">
        SCOPE OF SERVICE
      </Eyebrow>
      <h3 className="m-0 text-xl sm:text-2xl font-bold tracking-tight text-[#17191a] mb-6">
        Key Capabilities & Deliverables
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {features.map((feature, idx) => (
          <div key={idx} className="flex items-start gap-3">
            <div className="w-5 h-5 rounded-md bg-[#008000]/15 text-[#006e00] grid place-items-center shrink-0 mt-0.5">
              <Check size={14} strokeWidth={2.8} />
            </div>
            <span className="text-xs sm:text-sm text-[#17191a] font-semibold leading-snug">
              {feature}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
