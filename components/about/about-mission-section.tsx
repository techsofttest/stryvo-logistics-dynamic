"use client";

import Image from "next/image";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { useSectionReveal } from "@/components/home/use-section-reveal";

export function AboutMissionSection() {
  const { sectionRef, isVisible } = useSectionReveal({ threshold: 0.15 });

  return (
    <section
      ref={sectionRef}
      className="bg-white py-18 sm:py-24 lg:py-32 overflow-hidden"
    >
      <Container className="grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-10 lg:gap-[8vw] items-center">
        {/* Left Column: Who We Are Card with Tagline */}
        <div
          className={`flex flex-col overflow-hidden bg-[#ed292f] text-white rounded-2xl w-full shadow-lg reveal-item ${
            isVisible ? "is-visible" : ""
          }`}
          style={{ transitionDelay: "120ms" }}
        >
          <div className="p-6 sm:p-8 pb-5">
            <Eyebrow theme="light" slashColor="white" className="text-white">
              WHO WE ARE
            </Eyebrow>
            <p className="mt-2 text-white text-2xl sm:text-3xl lg:text-4xl leading-tight font-bold tracking-tight">
              The drive to strive.
            </p>
            <p className="mt-4 text-white/90 text-sm sm:text-base leading-relaxed">
              Stryvo Logistics LLC is a Dubai-based premier logistics and
              transportation provider connecting commercial hubs across the UAE,
              Oman, Saudi Arabia, and international trade gateways.
            </p>
          </div>

          <div className="relative w-full aspect-[16/10] sm:aspect-[4/3] overflow-hidden mt-2">
            <Image
              src="/home-about/STRYVO Trucks at Warehouse Loading Yard.png"
              alt="Stryvo Logistics fleet yard"
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover object-center"
            />
          </div>
        </div>

        {/* Right Column: Narrative Copy */}
        <div className="flex flex-col gap-6">
          <div
            className={`reveal-item ${isVisible ? "is-visible" : ""}`}
            style={{ transitionDelay: "180ms" }}
          >
            <Eyebrow theme="dark" className="!mb-2">
              STRYVO HERITAGE & PURPOSE
            </Eyebrow>
          </div>
          <h2
            className={`m-0 font-bold tracking-tight leading-tight text-3xl sm:text-4xl md:text-5xl text-[#17191a] reveal-item ${
              isVisible ? "is-visible" : ""
            }`}
            style={{ transitionDelay: "240ms" }}
          >
            Every shipment has a destination.{" "}
            <span className="inline-block bg-[#ed292f] text-white px-2.5 sm:px-3.5 py-0.5 rounded-md">
              We make
            </span>{" "}
            <span className="text-[#898b8a]">the journey count.</span>
          </h2>
          <p
            className={`m-0 text-[#25282a] text-base sm:text-lg leading-relaxed font-normal reveal-item ${
              isVisible ? "is-visible" : ""
            }`}
            style={{ transitionDelay: "300ms" }}
          >
            At Stryvo Logistics, excellence is built into our architecture. We
            maintain strategic agreements with a network of elite partners, each
            selected for their deep, specialized expertise in specific logistics
            activities.
          </p>
          <p
            className={`m-0 text-[#3a3e40] text-sm sm:text-base leading-relaxed reveal-item ${
              isVisible ? "is-visible" : ""
            }`}
            style={{ transitionDelay: "360ms" }}
          >
            By deploying modern fleet units, real-time tracking checkpoints, and
            licensed customs clearance brokers stationed at every critical land
            border and maritime port in the GCC, we empower enterprises to scale
            their supply chains with confidence.
          </p>
        </div>
      </Container>
    </section>
  );
}
