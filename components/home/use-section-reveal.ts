"use client";

import { useEffect, useRef, useState } from "react";

interface ScrollRevealOptions {
  /**
   * Proportion of section that must be visible before triggering (e.g. 0.2 = 20% visible).
   */
  threshold?: number;
  /**
   * Margin around the root viewport. E.g. "0px 0px -100px 0px" requires the element
   * to travel at least 100px into the viewport before firing.
   */
  rootMargin?: string;
}

/**
 * High-precision scroll observer for elements INSIDE a section.
 * - Only triggers once the user has genuinely scrolled INTO the section.
 * - Hero section (top of page) is revealed immediately on load.
 * - Below-the-fold sections require the section to cross into the screen before animating.
 */
export function useSectionReveal(options: ScrollRevealOptions = {}) {
  const { threshold = 0.2, rootMargin = "0px 0px -100px 0px" } = options;
  const sectionRef = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // If reduced motion is requested, reveal immediately
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setIsVisible(true);
      return;
    }

    const element = sectionRef.current;
    if (!element) return;

    // Only auto-reveal if section is at the very top of the page on initial load (like Hero)
    const rect = element.getBoundingClientRect();
    if (rect.top <= 80 && rect.bottom > 0) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
            break;
          }
        }
      },
      {
        threshold,
        rootMargin,
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [threshold, rootMargin]);

  return { sectionRef, isVisible };
}
