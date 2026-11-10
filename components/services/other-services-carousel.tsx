"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Container } from "../ui/container";
import { Eyebrow } from "../ui/eyebrow";
import { ServiceCard } from "./service-card";
import { servicesData, type ServiceItem } from "@/data/services";

interface OtherServicesCarouselProps {
  currentSlug: string;
}

export function OtherServicesCarousel({ currentSlug }: OtherServicesCarouselProps) {
  const otherServices = servicesData.filter((s) => s.slug !== currentSlug);

  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: false,
    dragFree: true,
  });

  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(false);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setPrevBtnDisabled(!emblaApi.canScrollPrev());
    setNextBtnDisabled(!emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <section className="bg-gray-100 py-18 sm:py-24 border-t border-black/5 overflow-hidden">
      <Container>
        {/* Carousel Header with Navigation Controls */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6 mb-10 sm:mb-12">
          <div>
            <Eyebrow>COMPREHENSIVE CAPABILITIES</Eyebrow>
            <h2 className="m-0 font-medium tracking-tight leading-tight text-3xl sm:text-4xl md:text-5xl text-[#17191a]">
              Other logistics <span className="text-[#ed292f]">services.</span>
            </h2>
          </div>

          <div className="flex items-center gap-2.5">
            <button
              type="button"
              onClick={scrollPrev}
              disabled={prevBtnDisabled}
              aria-label="Previous services"
              className={`w-11 h-11 rounded-full border border-black/15 bg-white grid place-items-center text-[#17191a] transition-all duration-200 ${
                prevBtnDisabled
                  ? "opacity-40 cursor-not-allowed"
                  : "hover:bg-[#ed292f] hover:text-white hover:border-[#ed292f] cursor-pointer shadow-sm"
              }`}
            >
              <ChevronLeft size={20} strokeWidth={2.2} />
            </button>
            <button
              type="button"
              onClick={scrollNext}
              disabled={nextBtnDisabled}
              aria-label="Next services"
              className={`w-11 h-11 rounded-full border border-black/15 bg-white grid place-items-center text-[#17191a] transition-all duration-200 ${
                nextBtnDisabled
                  ? "opacity-40 cursor-not-allowed"
                  : "hover:bg-[#ed292f] hover:text-white hover:border-[#ed292f] cursor-pointer shadow-sm"
              }`}
            >
              <ChevronRight size={20} strokeWidth={2.2} />
            </button>
          </div>
        </div>

        {/* Embla Viewport */}
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-4 sm:gap-5 lg:gap-6">
            {otherServices.map((service, index) => (
              <div
                key={service.slug}
                className="flex-[0_0_82%] sm:flex-[0_0_46%] lg:flex-[0_0_calc((100%-4.5rem)/4)] min-w-0"
              >
                <ServiceCard service={service} index={index} />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

