"use client";

import { MapPin, ArrowUpRight, Navigation } from "lucide-react";
import { Container } from "@/components/ui/container";
import { useSectionReveal } from "@/components/home/use-section-reveal";
import { Eyebrow } from "@/components/ui/eyebrow";

export function ContactMapSection() {
  const { sectionRef, isVisible } = useSectionReveal({ threshold: 0.15 });
  return (
    <section className="bg-white py-16 sm:py-20 border-t border-black/5">
      <Container>
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-8 sm:mb-12">
          <div>
            <Eyebrow theme="dark" className="!mb-3 !text-[#17191a] font-bold">
              FIND OUR OFFICE
            </Eyebrow>
            <h2 className="m-0 text-3xl sm:text-4xl font-bold tracking-tight text-[#17191a]">
              Dubai Logistics Headquarters
            </h2>
          </div>
          <a
            href="https://maps.google.com/?q=Dubai+United+Arab+Emirates"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#ed292f] hover:underline"
          >
            <span>Open in Google Maps</span>
            <ArrowUpRight size={16} strokeWidth={2.4} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        {/* Map Frame Container */}
        <div className="relative w-full rounded-2xl sm:rounded-3xl overflow-hidden border border-black/10 shadow-md">
          {/* Responsive Embedded Google Map */}
          <div className="relative w-full h-[360px] sm:h-[440px] lg:h-[500px]">
            <iframe
              title="Stryvo Logistics Dubai Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115542.49258908756!2d55.19589379899141!3d25.180295130767175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43496ad9c645%3A0xbde66e5084295162!2sDubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2sae!4v1700000000000!5m2!1sen!2sae"
              width="100%"
              height="100%"
              style={{ border: 0, filter: "contrast(1.05)" }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            />
          </div>

          {/* Floating Address Overlay Card */}
          <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 max-w-xs sm:max-w-sm bg-[#17191a]/95 text-white p-5 sm:p-6 rounded-xl sm:rounded-2xl backdrop-blur-md border border-white/15 shadow-xl">
            <div className="flex items-center gap-2 mb-2 text-[#ed292f]">
              <MapPin size={18} />
              <span className="text-[11px] font-bold uppercase tracking-wider">
                STRYVO HEADQUARTERS
              </span>
            </div>
            <h3 className="m-0 text-base sm:text-lg font-bold text-white mb-1.5 leading-snug">
              Stryvo Logistics LLC
            </h3>
            <p className="m-0 text-xs sm:text-[13px] text-white/80 leading-relaxed mb-4">
              Dubai, United Arab Emirates — Strategic hub serving road, air, and ocean corridors across the GCC.
            </p>
            <div className="flex items-center gap-3 pt-3 border-t border-white/15 text-xs text-white/60">
              <span className="flex items-center gap-1.5 text-white font-medium">
                <Navigation size={13} className="text-[#ed292f]" />
                Easy Access via E11 / E311
              </span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

