import Image from "next/image";

import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Button } from "@/components/ui/button";

import type { ServicesBanner } from "@/lib/services";

interface ServicesListingHeroProps {
  banner: ServicesBanner | null;
}

export function ServicesListingHero({ banner }: ServicesListingHeroProps) {
  const backgroundImage =
    banner?.image || "/banner/Red Semi-Truck on the Open Highway.png";

  return (
    <section className="relative pt-32 sm:pt-36 lg:pt-40 pb-16 sm:pb-20 bg-[#17191a] text-white overflow-hidden min-h-[460px] flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={backgroundImage}
          alt="Stryvo Logistics Services"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />

        {/* Dark contrast gradient overlays to ensure text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-transparent" />
      </div>

      {/* Subtle background ambient red glow */}
      <div className="absolute top-1/4 left-10 w-[450px] h-[250px] bg-[#ed292f]/20 rounded-full blur-3xl pointer-events-none z-1" />

      <Container className="relative z-10">
        <div className="max-w-3xl">
          <Eyebrow theme="light">STRYVO CORE SOLUTIONS</Eyebrow>

          <h1 className="m-0 font-medium tracking-tight leading-tight text-4xl sm:text-5xl md:text-6xl text-white mb-6">
            {banner?.title_first || "Specialized logistics built for the"}{" "}
            <span className="text-[#ed292f]">
              {banner?.title_highlight || "Middle East & beyond."}
            </span>
          </h1>

          <div className="flex flex-wrap items-center gap-4">
            <Button href="#service-grid" variant="red" size="md">
              Browse All Services
            </Button>

            <Button href="#contact" variant="white" size="md">
              Talk to Operations
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
