import Image from "next/image";
import type { ReactNode } from "react";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";

export interface InnerPageBannerProps {
  eyebrow?: string;
  title: string | ReactNode;
  highlightText?: string;
  description?: string;
  bgImage?: string;
  children?: ReactNode;
}

export function InnerPageBanner({
  eyebrow = "STRYVO LOGISTICS LLC",
  title,
  highlightText,
  description,
  bgImage = "/banner/Red Semi-Truck on the Open Highway.png",
  children,
}: InnerPageBannerProps) {
  return (
    <section className="relative pt-32 sm:pt-36 lg:pt-40 pb-16 sm:pb-20 bg-[#17191a] text-white overflow-hidden min-h-[460px] flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={bgImage}
          alt={typeof title === "string" ? title : "Banner"}
          className="absolute inset-0 w-full h-full object-cover object-center"
          loading="eager"
          fetchPriority="high"
        />

        {/* Dark contrast gradient overlays to ensure text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent" />
      </div>

      {/* Subtle background ambient red glow */}
      {/* <div className="absolute top-1/4 left-10 w-[450px] h-[250px] bg-[#ed292f]/20 rounded-full blur-3xl pointer-events-none z-1" /> */}

      <Container className="relative z-10">
        <div className="max-w-3xl">
          {eyebrow && <Eyebrow theme="light">{eyebrow}</Eyebrow>}

          <h1 className="m-0 font-medium tracking-tight leading-tight text-4xl sm:text-5xl md:text-6xl text-white mb-6">
            {title}{" "}
            {highlightText && (
              <span className="text-[#ed292f]">{highlightText}</span>
            )}
          </h1>

          {description && (
            <p className="m-0 text-white/75 text-base sm:text-lg leading-relaxed max-w-2xl mb-8">
              {description}
            </p>
          )}

          {children && (
            <div className="flex flex-wrap items-center gap-4">{children}</div>
          )}
        </div>
      </Container>
    </section>
  );
}
