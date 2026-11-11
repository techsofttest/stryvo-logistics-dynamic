"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

import { Container } from "../ui/container";
import { Button } from "../ui/button";
import { useSectionReveal } from "../home/use-section-reveal";

import { getContact } from "@/lib/contact";
import { getServices } from "@/lib/services";

import type { ContactPageData } from "@/lib/contact";
import type { ServicesPageData } from "@/lib/services";

export function SiteFooter() {
  const { sectionRef, isVisible } = useSectionReveal({ threshold: 0.1 });

  const [contactData, setContactData] = useState<ContactPageData | null>(null);
  const [servicesData, setServicesData] = useState<ServicesPageData | null>(
    null,
  );

  // --------------------------------------------------
  // Fetch Contact and Services Data
  // --------------------------------------------------

  useEffect(() => {
    let isMounted = true;

    async function fetchFooterData() {
      const [contact, services] = await Promise.all([
        getContact(),
        getServices(),
      ]);

      if (isMounted) {
        setContactData(contact);
        setServicesData(services);
      }
    }

    fetchFooterData();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <footer
      ref={sectionRef}
      className="relative bg-[#17191a] text-white pt-18 sm:pt-24 pb-8 overflow-hidden"
    >
      <Container className="relative z-10">
        {/* Top 4-Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-14 sm:pb-18 border-b border-white/10">
          {/* Col 1: Brand & Newsletter */}
          <div
            className={`lg:col-span-5 flex flex-col items-start pr-0 lg:pr-8 reveal-item ${
              isVisible ? "is-visible" : ""
            }`}
            style={{ transitionDelay: "100ms" }}
          >
            <a
              href="/"
              aria-label="Stryvo Logistics home"
              className="inline-block mb-6 transition-opacity hover:opacity-85"
            >
              <Image
                src="/logo/logo-wit.svg"
                alt="Stryvo Logistics LLC"
                width={164}
                height={52}
                className="w-31 sm:w-44 h-auto object-contain"
              />
            </a>

            <h3 className="m-0 text-sm sm:text-base font-semibold tracking-wider uppercase text-white mb-3">
              STAY CONNECTED WITH OUR UPDATES
            </h3>

            <p className="m-0 text-white/60 text-xs sm:text-sm leading-relaxed mb-6 max-w-sm">
              Moving business without borders. Receive market insights, freight
              advisories, and GCC logistics updates.
            </p>

            <div className="mt-2 flex items-center gap-3">
              <Button href="/contact" variant="white" size="sm">
                Contact Us
              </Button>
            </div>
          </div>

          {/* Col 2: Useful Links */}
          <div
            className={`lg:col-span-2 reveal-item ${
              isVisible ? "is-visible" : ""
            }`}
            style={{ transitionDelay: "180ms" }}
          >
            <h4 className="m-0 text-xs sm:text-sm font-semibold tracking-wider uppercase text-white mb-4">
              USEFUL LINKS
            </h4>

            <ul className="m-0 p-0 list-none flex flex-col gap-2.5 text-xs sm:text-sm text-white/60">
              <li>
                <a
                  href="#top"
                  className="transition-colors hover:text-[#ed292f]"
                >
                  Home
                </a>
              </li>

              <li>
                <a
                  href="/about"
                  className="transition-colors hover:text-[#ed292f]"
                >
                  About
                </a>
              </li>

              <li>
                <a
                  href="/services"
                  className="transition-colors hover:text-[#ed292f]"
                >
                  Services
                </a>
              </li>

              <li>
                <a
                  href="/how-can-we-help"
                  className="transition-colors hover:text-[#ed292f]"
                >
                  Help?
                </a>
              </li>

              <li>
                <a
                  href="/contact"
                  className="transition-colors hover:text-[#ed292f]"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Dynamic Services */}
          <div
            className={`lg:col-span-3 reveal-item ${
              isVisible ? "is-visible" : ""
            }`}
            style={{ transitionDelay: "260ms" }}
          >
            <h4 className="m-0 text-xs sm:text-sm font-semibold tracking-wider uppercase text-white mb-4">
              SERVICES
            </h4>

            <ul className="m-0 p-0 list-none flex flex-col gap-2.5 text-xs sm:text-sm text-white/60">
              {servicesData?.services?.map((service) => (
                <li key={service.id}>
                  <a
                    href="/services"
                    className="transition-colors hover:text-[#ed292f]"
                  >
                    {service.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Dynamic Phone & Email */}
          <div
            className={`lg:col-span-2 flex flex-col gap-6 reveal-item ${
              isVisible ? "is-visible" : ""
            }`}
            style={{ transitionDelay: "340ms" }}
          >
            <div>
              <h4 className="m-0 text-xs sm:text-sm font-semibold tracking-wider uppercase text-white mb-2">
                PHONE
              </h4>

              {contactData?.data?.phone1 && (
                <a
                  href={`tel:${contactData.data.phone1.replace(/[^\d+]/g, "")}`}
                  className="block text-xs sm:text-sm text-white/60 transition-colors hover:text-[#ed292f]"
                >
                  {contactData.data.phone1}
                </a>
              )}

              {contactData?.data?.phone2 && (
                <a
                  href={`tel:${contactData.data.phone2.replace(/[^\d+]/g, "")}`}
                  className="block text-xs sm:text-sm text-white/60 transition-colors hover:text-[#ed292f] mt-2"
                >
                  {contactData.data.phone2}
                </a>
              )}
            </div>

            <div>
              <h4 className="m-0 text-xs sm:text-sm font-semibold tracking-wider uppercase text-white mb-2">
                EMAIL
              </h4>

              {contactData?.data?.email1 && (
                <a
                  href={`mailto:${contactData.data.email1}`}
                  className="block text-xs sm:text-sm text-white/60 transition-colors hover:text-[#ed292f]"
                >
                  {contactData.data.email1}
                </a>
              )}

              {contactData?.data?.email2 && (
                <a
                  href={`mailto:${contactData.data.email2}`}
                  className="block text-xs sm:text-sm text-white/60 transition-colors hover:text-[#ed292f] mt-2"
                >
                  {contactData.data.email2}
                </a>
              )}

              {contactData?.data?.email3 && (
                <a
                  href={`mailto:${contactData.data.email3}`}
                  className="block text-xs sm:text-sm text-white/60 transition-colors hover:text-[#ed292f] mt-2"
                >
                  {contactData.data.email3}
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Sub-bar: Copyright & Legal */}
        <div
          className={`flex flex-col sm:flex-row justify-between items-center gap-3 pt-6 pb-8 text-xs text-white/40 reveal-item ${
            isVisible ? "is-visible" : ""
          }`}
          style={{ transitionDelay: "420ms" }}
        >
          <span>&copy; 2026 Stryvo Logistics LLC. All Rights Reserved.</span>

          <a
            href="https://www.techsoftweb.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-normal transition-colors hover:text-white hover:underline underline-offset-4"
          >
            Web Design Company in Kochi Techsoft
          </a>
        </div>
      </Container>

      {/* Saturated Stylish Red Gradient in the Background at Bottom */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-0 right-0 h-[600px] sm:h-[750px] lg:h-[850px] z-0 overflow-hidden"
      >
        {/* Deep ambient saturated red glow extending high up */}
        <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-[110vw] max-w-[1500px] h-[550px] sm:h-[680px] rounded-[100%] bg-gradient-to-t from-[#ed292f] via-[#ed292f]/55 to-transparent blur-3xl opacity-45" />

        {/* Smooth tall vertical gradient wash */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#ed292f]/35 via-[#ed292f]/10 to-transparent" />
      </div>

      {/* Massive Background Brand Watermark */}
      <div
        aria-hidden="true"
        className={`relative z-1 pointer-events-none select-none w-full text-center leading-none font-bold uppercase tracking-tight text-white/[0.06] text-[18vw] sm:text-[20vw] lg:text-[22vw] -mb-[4vw] reveal-item ${
          isVisible ? "is-visible" : ""
        }`}
        style={{ transitionDelay: "480ms" }}
      >
        STRYVO
      </div>
    </footer>
  );
}
