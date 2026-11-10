"use client";

import { Container } from "../ui/container";
import { Eyebrow } from "../ui/eyebrow";
import { useSectionReveal } from "./use-section-reveal";

const routes = [
  "UNITED ARAB EMIRATES",
  "OMAN",
  "SAUDI ARABIA",
  "GLOBAL TRADE LANES",
];

export function NetworkSection() {
  const { sectionRef, isVisible } = useSectionReveal({ threshold: 0.3 });

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[500px] sm:min-h-[560px] text-white bg-[#ed292f] flex items-center py-18 sm:py-23 overflow-hidden"
      id="network"
    >
      {/* Suspended Container PNG: drops down only once the user properly reaches the section */}
      <div
        className={`absolute top-0 right-0 z-0 pointer-events-none w-48 sm:w-64 md:w-80 lg:w-[420px] max-w-[45vw] translate-x-4 sm:translate-x-6 lg:translate-x-8 transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isVisible ? "translate-y-0 opacity-100" : "-translate-y-48 opacity-0"
        }`}
      >
        <img
          src="/home-about/Suspended White Container and Crane Spreader.png"
          alt="Suspended White Container and Crane Spreader"
          className="w-full h-auto object-contain drop-shadow-2xl -translate-y-4 sm:-translate-y-6 lg:-translate-y-8"
        />
      </div>

      <Container className="relative z-1">
        {/* Top Eyebrow & Headline */}
        <div>
          <div
            className={`reveal-item ${isVisible ? "is-visible" : ""}`}
            style={{ transitionDelay: "100ms" }}
          >
            <Eyebrow theme="light" slashColor="white">
              BUILT AROUND YOUR ROUTES
            </Eyebrow>
          </div>
          <h2
            className={`m-0 font-medium tracking-tight leading-tight text-4xl sm:text-6xl md:text-7xl text-white reveal-item ${
              isVisible ? "is-visible" : ""
            }`}
            style={{ transitionDelay: "180ms" }}
          >
            Local knowledge.
            <br />
            <span className="text-white">Regional momentum.</span>
          </h2>
        </div>

        {/* Bottom Description & Interactive Route Pills */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 sm:gap-12 mt-12 sm:mt-15 pt-6.5 border-t border-white/30">
          <p
            className={`max-w-sm m-0 text-white/90 text-base leading-relaxed reveal-item ${
              isVisible ? "is-visible" : ""
            }`}
            style={{ transitionDelay: "260ms" }}
          >
            From everyday freight to complex project cargo, we coordinate the
            details that keep your supply chain moving.
          </p>
          <div className="max-w-2xl flex justify-start lg:justify-end flex-wrap gap-2 sm:gap-2.5">
            {routes.map((route, i) => (
              <span
                key={route}
                className={`px-3 py-2 sm:px-3.5 sm:py-2.5 border border-white/50 text-sm tracking-wide rounded-md transition-colors hover:bg-white hover:text-[#ed292f] reveal-item ${
                  isVisible ? "is-visible" : ""
                }`}
                style={{ transitionDelay: `${320 + i * 60}ms` }}
              >
                {route}
              </span>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
