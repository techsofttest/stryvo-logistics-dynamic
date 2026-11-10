"use client";

import { useSectionReveal } from "./use-section-reveal";
import { Container } from "../ui/container";
import { Eyebrow } from "../ui/eyebrow";
import { Button } from "../ui/button";

export function BannerSection() {
  const { sectionRef, isVisible } = useSectionReveal({ threshold: 0.2 });

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[590px] sm:min-h-[680px] flex items-center overflow-hidden text-white bg-[#17191a]"
    >
      <img
        src="/banner/Coastal Highway to the Skyline.png"
        alt="Logistics shipment operations"
        className="absolute inset-0 w-full h-full object-cover object-[60%_center] sm:object-[center_55%]"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />

      <Container className="relative z-1 py-19 sm:py-25">
        <div
          className={`reveal-item ${isVisible ? "is-visible" : ""}`}
          style={{ transitionDelay: "100ms" }}
        >
          <Eyebrow theme="light">READY WHEN YOU ARE</Eyebrow>
        </div>
        <h2
          className={`m-0 mb-7 sm:mb-10.5 font-medium tracking-tight leading-tight text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white reveal-item ${isVisible ? "is-visible" : ""
            }`}
          style={{ transitionDelay: "180ms" }}
        >
          Your next move
          <br />
          starts here.
        </h2>
        <div
          className={`reveal-item ${isVisible ? "is-visible" : ""}`}
          style={{ transitionDelay: "260ms" }}
        >
          <Button href="/contact#contact-form" variant="red">
            Plan a shipment
          </Button>
        </div>
      </Container>
    </section>
  );
}
