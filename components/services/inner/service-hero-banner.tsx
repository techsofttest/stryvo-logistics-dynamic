import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import type { ServiceItem } from "@/data/services";

interface ServiceHeroBannerProps {
  service: ServiceItem;
}

export function ServiceHeroBanner({ service }: ServiceHeroBannerProps) {
  return (
    <section className="relative bg-[#17191a] text-white overflow-hidden min-h-[380px] lg:min-h-[460px]">
      {/* Ambient subtle glow aligned to left edge */}
      <div className="absolute top-1/2 -translate-y-1/2 -left-36 w-[450px] sm:w-[520px] h-[450px] sm:h-[220px] bg-[#ed292f]/15 rounded-full blur-3xl pointer-events-none" />

      {/* Container holding both content and image inside 1440px max-width */}
      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 min-h-[380px] lg:min-h-[460px] items-stretch">
          {/* Left Column: Breadcrumbs, Title, Subtitle, and CTAs with vertical padding */}
          <div className="lg:col-span-7 flex flex-col justify-center pt-28 sm:pt-32 lg:pt-36 pb-12 sm:pb-16 lg:pb-20 pr-0 lg:pr-6 relative z-10">
            {/* Breadcrumb Navigation */}
            <nav aria-label="Breadcrumb" className="mb-4 flex items-center gap-2 text-xs text-white/50">
              <Link href="/" className="hover:text-white transition-colors">
                Home
              </Link>
              <span>/</span>
              <Link href="/services" className="hover:text-white transition-colors">
                Services
              </Link>
              <span>/</span>
              <span className="text-white/80 font-medium truncate">{service.title}</span>
            </nav>

            <h1 className="m-0 font-medium tracking-tight leading-tight text-3xl sm:text-4xl md:text-5xl text-white mb-4">
              {service.title}
            </h1>

            <p className="m-0 text-white/70 text-sm sm:text-base leading-relaxed mb-6 max-w-xl">
              {service.subtitle}
            </p>

            <div className="flex flex-wrap items-center gap-3.5">
              <Button href="#enquiry" variant="red" size="sm">
                Request a Rate Quote
              </Button>
              <Button href="#specifications" variant="white" size="sm">
                View Specifications
              </Button>
            </div>
          </div>

          {/* Right Column: Stacked red card behind + Full-height skewed image */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end items-stretch relative">
            <div className="relative w-full max-w-[340px] sm:max-w-[380px] lg:max-w-none lg:w-auto h-full flex justify-end">
              {/* Stacked red card behind image, shifted to the left and aligned a little lower */}
              <div
                aria-hidden="true"
                className="absolute inset-y-0 right-3 sm:right-5 lg:right-6 w-full h-full aspect-[4/5] -skew-x-8 bg-gradient-to-br from-[#ed292f] via-[#d71920] to-[#b3141a] translate-y-8 sm:translate-y-28 -translate-x-8 sm:-translate-x-10 lg:-translate-x-28 z-0 pointer-events-none shadow-xl"
              />

              {/* Main Image Card: Full-height, same skewed shape */}
              <div className="relative w-full h-full aspect-[4/5] -skew-x-8 overflow-hidden shadow-2xl z-10 bg-[#17191a]">
                {/* Counter-skew image so photo content remains straight & upright */}
                <div className="absolute -inset-4 skew-x-3">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 42vw"
                    className="object-cover object-center"
                  />
                </div>

                {/* Top gradient overlay to ensure header legibility */}
                <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/85 via-black/45 to-transparent pointer-events-none" />

                {/* Bottom gradient overlay */}
                <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
