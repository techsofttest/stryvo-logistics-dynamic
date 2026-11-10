"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { ServiceItem } from "@/data/services";

interface ServiceCardProps {
  service: ServiceItem;
  index?: number;
  isVisible?: boolean;
}

export function ServiceCard({
  service,
  index = 0,
  isVisible = true,
}: ServiceCardProps) {
  return (
    <Link
      href={`/services#${service.slug}`}
      key={service.title}
      className={`group relative aspect-[4/5] overflow-hidden rounded-2xl bg-[#17191a] text-white isolate flex flex-col justify-between p-4 sm:p-5 transition-all duration-300 cursor-pointer shadow-sm hover:shadow-2xl ${
        isVisible !== undefined
          ? `reveal-item ${isVisible ? "is-visible" : ""}`
          : ""
      }`}
      style={{ transitionDelay: `${200 + (index % 4) * 80}ms` }}
    >
      {/* Background Photo with subtle zoom */}
      <div className="absolute -z-2 inset-0 overflow-hidden">
        <img
          src={service.image}
          alt={service.title}
          className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-700 ease-[cubic-bezier(0.2,0.7,0.2,1)] group-hover:scale-108"
        />
      </div>

      {/* Gradient overlay: dark on top for title readability, and deep dark at bottom on hover */}
      <div className="absolute -z-1 inset-0 bg-gradient-to-b from-black/75 via-black/20 to-transparent transition-opacity duration-300 group-hover:from-black/85 group-hover:via-black/40 group-hover:to-black/45" />

      {/* Top Row: Title on Left, Arrow Icon on Right */}
      <div className="relative z-10 flex items-start justify-between gap-3">
        <h3 className="m-0 text-base sm:text-lg font-semibold tracking-tight leading-snug drop-shadow-sm text-white transition-colors duration-200 group-hover:text-white">
          {service.title}
        </h3>
        <div className="w-7 h-7 rounded-md bg-[#ed292f] text-white grid place-items-center shrink-0 shadow-md transition-all duration-300 group-hover:scale-110 group-hover:bg-white group-hover:text-[#ed292f]">
          <ArrowUpRight size={15} strokeWidth={2.4} />
        </div>
      </div>

      {/* Bottom: Description pushes up from the bottom on hover */}
      <div className="relative z-10 w-full overflow-hidden">
        <div className="translate-y-full opacity-0 transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:translate-y-0 group-hover:opacity-100">
          <div className="p-3.5 rounded-xl bg-black/60 backdrop-blur-md border border-white/10 shadow-lg">
            <p className="m-0 text-[11px] sm:text-xs leading-relaxed text-white/95">
              {service.description}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}
