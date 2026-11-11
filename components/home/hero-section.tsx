"use client";

import { ArrowDownRight } from "lucide-react";
import { Container } from "../ui/container";
import { Eyebrow } from "../ui/eyebrow";
import { Button } from "../ui/button";
import { useSectionReveal } from "./use-section-reveal";

interface HomeBanner {
  title_first: string;
  title_second: string;
  title_third: string;
  image: string | null;
}

interface HeroSectionProps {
  banner: HomeBanner | null;
}

export function HeroSection({ banner }: HeroSectionProps) {
  const { sectionRef, isVisible } = useSectionReveal({ threshold: 0.1 });

  const backgroundImage =
    banner?.image || "/hero/STRYVO Truck at the Logistics Terminal.png";

  return (
    <section
      className="relative flex flex-col justify-between pt-24 sm:pt-28 lg:pt-32 pb-14 sm:pb-16 lg:pb-20 h-[92svh] min-h-[620px] sm:min-h-[640px] lg:h-[90svh] lg:min-h-[700px] lg:max-h-[860px] overflow-hidden bg-[#222] text-white"
      id="top"
      ref={sectionRef}
    >
      {/* Background Image */}
      <div className="absolute -inset-x-0 -top-[5%] bottom-0 overflow-hidden">
        <img
          src={backgroundImage}
          alt="Logistics fleet and transportation"
          className="w-full h-full object-cover object-[58%_center] sm:object-[center_56%]"
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/85 sm:bg-gradient-to-b sm:from-black/40 sm:via-black/5 sm:to-black/3" />

      {/* Top Center: Main Headline + CTA Button */}
      <Container className="relative z-2 w-full text-center flex flex-col items-center">
        <h1
          className={`max-w-5xl m-0 font-medium tracking-tight leading-none text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white flex flex-col items-center gap-2 sm:gap-3 reveal-item ${
            isVisible ? "is-visible" : ""
          }`}
          style={{ transitionDelay: "100ms" }}
        >
          <span className="inline-flex items-center justify-center flex-wrap gap-2 sm:gap-3">
            {banner?.title_first || "Moving"}

            <span
              id="hero-inline-image-slot"
              className="relative inline-flex items-center opacity-0 rounded-3xl w-12 sm:w-16 md:w-20 lg:w-32 h-8 sm:h-10 md:h-12 lg:h-24 align-middle pointer-events-none"
              aria-hidden="true"
            />

            {banner?.title_second || "business."}
          </span>

          <span className="inline-flex items-center justify-center flex-wrap gap-2 sm:gap-3">
            {banner?.title_third || "Without borders."}
          </span>
        </h1>

        <div
          className={`mt-6 sm:mt-8 reveal-item ${
            isVisible ? "is-visible" : ""
          }`}
          style={{ transitionDelay: "220ms" }}
        >
          <Button href="#contact" variant="white" size="md">
            Explore Solutions
          </Button>
        </div>
      </Container>

      {/* Bottom Row: Eyebrow on Bottom-Left | Description & Button on Bottom-Right */}
      <Container className="relative z-2 w-full flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6 sm:gap-10">
        {/* Bottom Left: Eyebrow */}
        <div
          className={`self-start sm:self-end reveal-item ${
            isVisible ? "is-visible" : ""
          }`}
          style={{ transitionDelay: "180ms" }}
        >
          <Eyebrow theme="light" className="m-0">
            DUBAI · CONNECTING THE GCC
          </Eyebrow>
        </div>
      </Container>
    </section>
  );
}
