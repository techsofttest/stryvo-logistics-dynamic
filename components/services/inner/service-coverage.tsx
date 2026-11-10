import { Eyebrow } from "@/components/ui/eyebrow";

interface ServiceCoverageProps {
  coverage: string[];
}

export function ServiceCoverage({ coverage }: ServiceCoverageProps) {
  return (
    <div className="bg-[#17191a] text-white rounded-2xl p-6 sm:p-8 shadow-md">
      <Eyebrow theme="light" className="!mb-3">
        OPERATIONAL FOOTPRINT
      </Eyebrow>
      <h3 className="m-0 text-xl sm:text-2xl font-medium tracking-tight text-white mb-3">
        Strategic Hubs & Corridors
      </h3>
      <p className="m-0 text-xs sm:text-sm text-white/70 leading-relaxed mb-6">
        Operating dedicated handling teams, licensed customs brokers, and distribution assets across premier commercial hubs.
      </p>
      <div className="flex flex-wrap gap-2.5">
        {coverage.map((region, idx) => (
          <span
            key={idx}
            className="px-3 py-1.5 rounded-lg bg-white/10 text-xs font-medium text-white/90 border border-white/10"
          >
            {region}
          </span>
        ))}
      </div>
    </div>
  );
}
