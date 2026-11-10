"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Container } from "../ui/container";
import { Eyebrow } from "../ui/eyebrow";
import { Button } from "../ui/button";
import { useSectionReveal } from "./use-section-reveal";

const capabilities = [
  "Cross-border customs transit between UAE, Oman & KSA",
  "Temperature-controlled pharmaceuticals & perishable freight",
  "Out-of-gauge & heavy equipment transportation",
  "Express collection & last-mile delivery",
  "Daily GCC consolidation services",
  "Dangerous goods & chemical cargo handling",
  "Equipment rental across the UAE",
  "Logistics and supply-chain consultancy",
  "Oil, gas, renewable energy & industrial projects",
];

export function CapabilitiesSection() {
  const { sectionRef, isVisible } = useSectionReveal({ threshold: 0.15 });

  return (
    <section ref={sectionRef} className="relative bg-white py-18 sm:py-23 lg:py-32 overflow-hidden">
      {/* Background PNG: Stacked Red Shipping Containers in Bottom Left */}
      <div
        className={`absolute bottom-0 left-0 z-0 pointer-events-none w-52 sm:w-72 md:w-88 lg:w-[460px] max-w-[48vw] transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${isVisible
          ? "translate-y-0 opacity-100 scale-100"
          : "translate-y-36 opacity-0 scale-95"
          }`}
      >
        <Image
          src="/home-services/Stacked Red Shipping Containers Isolated2.png"
          alt="Stacked Red Shipping Containers"
          width={600}
          height={400}
          className="w-full h-auto object-contain select-none drop-shadow-xl"
        />
      </div>

      <Container className="relative z-1 grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-10 lg:gap-[10vw]">
        {/* Left Column: Heading, Description, CTA */}
        <div>
          <div
            className={`reveal-item ${isVisible ? "is-visible" : ""}`}
            style={{ transitionDelay: "100ms" }}
          >
            <Eyebrow>MORE THAN MOVEMENT</Eyebrow>
          </div>
          <h2
            className={`m-0 font-medium tracking-tight leading-tight text-4xl sm:text-5xl md:text-6xl reveal-item ${isVisible ? "is-visible" : ""
              }`}
            style={{ transitionDelay: "180ms" }}
          >
            Built for the
            <br />
            details that <span className="text-[#ed292f]">matter.</span>
          </h2>
          <p
            className={`max-w-md my-7 sm:my-8 text-[#55595a] text-base leading-relaxed reveal-item ${isVisible ? "is-visible" : ""
              }`}
            style={{ transitionDelay: "260ms" }}
          >
            Behind every successful delivery is a plan. We help businesses
            navigate specialist requirements with responsive coordination and a
            practical, solutions-first approach.
          </p>
          <div
            className={`reveal-item ${isVisible ? "is-visible" : ""}`}
            style={{ transitionDelay: "340ms" }}
          >
            <Button href="#contact" variant="dark">
              Discuss your requirements
            </Button>
          </div>
        </div>

        {/* Right Column: Numbered Capabilities List */}
        <div className="border-t border-[rgba(23,25,26,0.18)]">
          {capabilities.map((item, index) => (
            <div
              className={`group grid grid-cols-[2rem_1fr_1.25rem] sm:grid-cols-[3rem_1fr_1.5rem] items-center gap-2.5 sm:gap-4.5 min-h-19.5 sm:min-h-20.5 border-b border-[rgba(23,25,26,0.18)] transition-all duration-200 hover:px-2 hover:text-[#ed292f] cursor-default reveal-item ${isVisible ? "is-visible" : ""
                }`}
              key={item}
              style={{ transitionDelay: `${150 + index * 40}ms` }}
            >
              <span className="text-[#ed292f] text-sm font-medium">
                0{index + 1}
              </span>
              <p className="m-0 text-sm sm:text-base font-medium text-inherit">
                {item}
              </p>
              <ArrowUpRight
                size={18}
                strokeWidth={1.5}
                className="text-inherit"
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
