"use client";

import { ShieldCheck, Clock, Award, Users, Leaf } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { useSectionReveal } from "@/components/home/use-section-reveal";

const values = [
  {
    icon: ShieldCheck,
    title: "Uncompromised Safety & HAZMAT Compliance",
    desc: "Rigorous adherence to international safety standards, certified chemical handlers, and full compliance across UAE and GCC jurisdictions.",
  },
  {
    icon: Clock,
    title: "Precision Timelines & Scheduled Departures",
    desc: "Daily scheduled consolidation runs, express linehaul dispatches, and guaranteed time-sensitive milestones.",
  },
  {
    icon: Award,
    title: "Regional Expertise & Licensed Brokers",
    desc: "Decades of deep Middle East market acumen with dedicated, licensed customs brokers at every critical border post.",
  },
  {
    icon: Users,
    title: "Client-First Dispatch & Custom Solutions",
    desc: "Dedicated operations coordinators, 2-hour quote turnaround, and proactive multi-stage shipment advisories.",
  },
  {
    icon: Leaf,
    title: "Sustainability",
    desc: "Committed to sustainable logistics through responsible resource management, efficient transportation, reduced environmental impact, and a greener future for generations to come.",
  },
];

export function AboutValuesSection() {
  const { sectionRef, isVisible } = useSectionReveal({ threshold: 0.15 });

  return (
    <section
      ref={sectionRef}
      className="bg-white py-18 sm:py-24 lg:py-28 overflow-hidden"
    >
      <Container>
        <div className="max-w-2xl mb-12 sm:mb-16">
          <div
            className={`reveal-item ${isVisible ? "is-visible" : ""}`}
            style={{ transitionDelay: "100ms" }}
          >
            <Eyebrow theme="dark" className="!mb-3 !text-[#17191a] font-bold">
              WHY CLIENTS TRUST STRYVO
            </Eyebrow>
          </div>
          <h2
            className={`m-0 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#17191a] reveal-item ${
              isVisible ? "is-visible" : ""
            }`}
            style={{ transitionDelay: "180ms" }}
          >
            Our Operating Principles
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {values.map((val, idx) => {
            const Icon = val.icon;
            return (
              <div
                key={idx}
                className={`bg-gray-100 rounded-2xl p-6 sm:p-7 flex flex-col justify-between reveal-item ${
                  isVisible ? "is-visible" : ""
                }`}
                style={{ transitionDelay: `${200 + idx * 80}ms` }}
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#17191a] text-white grid place-items-center mb-4">
                    <Icon size={20} strokeWidth={2.2} />
                  </div>
                  <h3 className="m-0 text-base sm:text-lg font-bold text-[#17191a] mb-2 leading-snug">
                    {val.title}
                  </h3>
                  <p className="m-0 text-xs sm:text-sm text-[#35393c] leading-relaxed">
                    {val.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
