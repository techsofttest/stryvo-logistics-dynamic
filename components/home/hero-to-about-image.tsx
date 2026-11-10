"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface Position {
  top: number;
  left: number;
  width: number;
  height: number;
  borderRadius: number;
  rotate: number;
}

export function HeroToAboutImage() {
  const [heroPos, setHeroPos] = useState<Position | null>(null);
  const [aboutPos, setAboutPos] = useState<Position | null>(null);
  const [scrollRange, setScrollRange] = useState<[number, number]>([0, 600]);

  const { scrollY } = useScroll();

  useEffect(() => {
    const updatePositions = () => {
      const heroSlot = document.getElementById("hero-inline-image-slot");
      const aboutSlot = document.getElementById("about-image-slot");
      const aboutSection = document.getElementById("about");

      if (heroSlot && aboutSlot && aboutSection) {
        const hRect = heroSlot.getBoundingClientRect();
        const aRect = aboutSlot.getBoundingClientRect();
        const secRect = aboutSection.getBoundingClientRect();

        const scrollYCurrent = window.scrollY;
        const windowHeight = window.innerHeight;

        // Exact document-relative position
        setHeroPos({
          top: hRect.top + scrollYCurrent,
          left: hRect.left,
          width: hRect.width,
          height: hRect.height,
          borderRadius: 24,
          rotate: -8,
        });

        setAboutPos({
          top: aRect.top + scrollYCurrent,
          left: aRect.left,
          width: aRect.width,
          height: aRect.height,
          borderRadius: 16,
          rotate: 0,
        });

        // Exact scroll position when the about section is centered in viewport:
        const aboutSectionTopDoc = secRect.top + scrollYCurrent;
        const aboutSectionCenterDoc = aboutSectionTopDoc + secRect.height / 2;
        const targetScrollY = Math.max(aboutSectionCenterDoc - windowHeight / 2, 100);

        setScrollRange([0, targetScrollY]);
      }
    };

    updatePositions();
    window.addEventListener("resize", updatePositions);
    window.addEventListener("scroll", updatePositions, { passive: true, once: true });
    const t1 = setTimeout(updatePositions, 100);
    const t2 = setTimeout(updatePositions, 500);

    return () => {
      window.removeEventListener("resize", updatePositions);
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  const [scrollStart, scrollEnd] = scrollRange;

  // Clamp output values so once target scroll position is reached, it stays locked in the about slot
  const top = useTransform(
    scrollY,
    [scrollStart, scrollEnd],
    [heroPos ? heroPos.top : 0, aboutPos ? aboutPos.top : 0],
    { clamp: true }
  );
  const left = useTransform(
    scrollY,
    [scrollStart, scrollEnd],
    [heroPos ? heroPos.left : 0, aboutPos ? aboutPos.left : 0],
    { clamp: true }
  );
  const width = useTransform(
    scrollY,
    [scrollStart, scrollEnd],
    [heroPos ? heroPos.width : 0, aboutPos ? aboutPos.width : 0],
    { clamp: true }
  );
  const height = useTransform(
    scrollY,
    [scrollStart, scrollEnd],
    [heroPos ? heroPos.height : 0, aboutPos ? aboutPos.height : 0],
    { clamp: true }
  );
  const rotate = useTransform(
    scrollY,
    [scrollStart, scrollEnd],
    [heroPos ? heroPos.rotate : -8, aboutPos ? aboutPos.rotate : 0],
    { clamp: true }
  );
  const borderRadius = useTransform(
    scrollY,
    [scrollStart, scrollEnd],
    [heroPos ? heroPos.borderRadius : 24, aboutPos ? aboutPos.borderRadius : 16],
    { clamp: true }
  );

  if (!heroPos || !aboutPos) return null;

  return (
    <motion.div
      className="absolute z-20 overflow-hidden pointer-events-none will-change-transform"
      style={{
        top,
        left,
        width,
        height,
        rotate,
        borderRadius,
      }}
    >
      <video
        src="/home-services/b4.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-cover"
      />
    </motion.div>
  );
}
