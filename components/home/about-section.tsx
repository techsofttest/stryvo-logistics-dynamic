"use client";

import { Container } from "../ui/container";
import { Eyebrow } from "../ui/eyebrow";
import { Button } from "../ui/button";
import { useSectionReveal } from "./use-section-reveal";

export function AboutSection() {
  const { sectionRef, isVisible } = useSectionReveal({ threshold: 0.2 });

  return (
    <section ref={sectionRef} className="bg-white py-18 sm:py-23 lg:py-32" id="about">
      <Container className="grid grid-cols-1 lg:grid-cols-[0.7fr_2fr] gap-7 lg:gap-[8vw]">
        {/* Left Col: Who We Are Card */}
        <div
          className="flex flex-col overflow-hidden bg-[#ed292f] text-white rounded-2xl w-full"
          style={{ transitionDelay: "100ms" }}
        >
          {/* Top Text Content with Padding */}
          <div className="p-6 sm:p-7 pb-4">
            <Eyebrow theme="light" slashColor="white" className="text-white">
              WHO WE ARE
            </Eyebrow>
            <p className="mt-0 lg:mt-6 text-white/95 text-md sm:text-2xl leading-relaxed font-bold">
              The drive to strive.
            </p>
          </div>

          {/* Full-Width Image Slot Below Content (dock target for hero-to-about-image) */}
          <div
            id="about-image-slot"
            className="w-full aspect-[16/10] sm:aspect-[4/3] rounded-b-2xl opacity-0 pointer-events-none mt-auto"
            aria-hidden="true"
          />
        </div>

        {/* Right Col: Intro Copy & Action Button */}
        <div className="intro-copy">
          <h2
            className={`max-w-4xl m-0 font-medium tracking-tight leading-tight text-4xl sm:text-5xl md:text-6xl reveal-item ${isVisible ? "is-visible" : ""
              }`}
            style={{ transitionDelay: "180ms" }}
          >
            Every shipment has a destination.{" "}
            <span className="inline-block bg-[#ed292f] text-white px-2.5 sm:px-3.5 py-0.5 rounded-sm sm:rounded-md">
              We make
            </span>{" "}
            <span className="text-[#898b8a]">the journey count.</span>
          </h2>

          <div className="flex flex-col items-start gap-6 sm:gap-7 mt-8 sm:mt-12">
            <p
              className={`max-w-2xl m-0 text-gray-900 text-base leading-relaxed reveal-item ${isVisible ? "is-visible" : ""
                }`}
              style={{ transitionDelay: "260ms" }}
            >
              Stryvo Logistics LLC is a Dubai-based logistics and transportation
              partner connecting businesses across the UAE, Oman, Saudi Arabia
              and global markets. We bring road, air, sea and supply-chain
              services together to help cargo move with clarity and purpose.
            </p>
            <div
              className={`reveal-item ${isVisible ? "is-visible" : ""}`}
              style={{ transitionDelay: "340ms" }}
            >
              <Button href="#contact" variant="dark" size="md">
                Talk to our team
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
