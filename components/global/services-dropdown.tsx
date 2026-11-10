"use client";

import { useState, useRef, useEffect } from "react";
import {
  Plus,
  ArrowUpRight,
  Truck,
  Ship,
  Warehouse,
  FileCheck2,
  Workflow,
  Compass,
  Forklift,
  Container,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import { getServices } from "@/lib/services";
import type { ServiceItem } from "@/lib/services";

interface ServicesDropdownProps {
  scrolled: boolean;
  onItemClick?: () => void;
}

// --------------------------------------------------
// Service Icons
// --------------------------------------------------

const serviceIcons = [
  Truck,
  Ship,
  Warehouse,
  FileCheck2,
  Workflow,
  Compass,
  Forklift,
  Container,
];

export function ServicesDropdown({
  scrolled,
  onItemClick,
}: ServicesDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [services, setServices] = useState<ServiceItem[]>([]);

  const containerRef = useRef<HTMLDivElement>(null);

  // --------------------------------------------------
  // Fetch Services API
  // --------------------------------------------------

  useEffect(() => {
    let isMounted = true;

    async function fetchServices() {
      const result = await getServices();

      if (isMounted && result?.success) {
        setServices(result.services);
      }
    }

    fetchServices();

    return () => {
      isMounted = false;
    };
  }, []);

  // --------------------------------------------------
  // Generate Service URL Slug
  // --------------------------------------------------

  function generateSlug(title: string) {
    return title
      .toLowerCase()
      .replace(/&/g, "")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-|-$/g, "");
  }

  // --------------------------------------------------
  // Close Dropdown on Outside Click
  // --------------------------------------------------

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      {/* Trigger Button */}
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-expanded={isOpen}
        className={`inline-flex items-center gap-1.5 text-sm font-medium transition-colors hover:text-[#ed292f] py-3.5 sm:py-0 border-b border-white/10 sm:border-0 w-full sm:w-auto text-left cursor-pointer bg-transparent outline-none ${
          isOpen ? "text-[#ed292f]" : ""
        }`}
      >
        <span>Services</span>

        <Plus
          size={14}
          strokeWidth={2.4}
          className={`transition-transform duration-200 ${
            isOpen
              ? "rotate-45 text-[#ed292f]"
              : scrolled
                ? "text-[#17191a]"
                : "text-white sm:text-white"
          }`}
        />
      </button>

      {/* Dropdown Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.99 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 6, scale: 0.99 }}
            transition={{ duration: 0.16, ease: "easeOut" }}
            className="sm:absolute sm:left-0 sm:top-full sm:pt-4 w-full sm:w-[360px] z-50"
          >
            <div className="bg-[#17191a]/95 sm:bg-white text-white sm:text-[#17191a] backdrop-blur-2xl rounded-2xl p-4 sm:p-5 shadow-[0_16px_40px_rgba(0,0,0,0.12)] border border-white/15 sm:border-black/[0.08]">
              {/* Subtle Category Header */}
              <div className="px-2 pb-3 mb-2 border-b border-white/10 sm:border-black/[0.06] flex items-center justify-between">
                <span className="text-[11px] font-semibold tracking-widest uppercase text-white/40 sm:text-[#17191a]/40">
                  Services
                </span>

                <a
                  href="/services"
                  onClick={() => {
                    setIsOpen(false);
                    onItemClick?.();
                  }}
                  className="text-[11px] font-semibold text-[#ed292f] hover:underline inline-flex items-center gap-1"
                >
                  All {services.length} services
                  <ArrowUpRight size={11} strokeWidth={2.4} />
                </a>
              </div>

              {/* Dynamic Service Links */}
              <div className="flex flex-col gap-0.5">
                {services.map((item, index) => {
                  const Icon = serviceIcons[index % serviceIcons.length];

                  const slug = generateSlug(item.title);

                  return (
                    <a
                      key={item.id}
                      href={`/services#${slug}`}
                      onClick={() => {
                        setIsOpen(false);
                        onItemClick?.();
                      }}
                      className="group flex items-center justify-between px-2.5 py-2 rounded-xl transition-all duration-150 hover:bg-white/10 sm:hover:bg-[#f5f5f4]"
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <Icon
                          size={15}
                          strokeWidth={1.8}
                          className="shrink-0 text-white/50 sm:text-[#17191a]/50 transition-colors duration-150 group-hover:text-[#ed292f]"
                        />

                        <span className="text-xs sm:text-[13px] font-medium tracking-normal text-white/85 sm:text-[#25282a] transition-colors duration-150 group-hover:text-[#ed292f] truncate">
                          {item.title}
                        </span>
                      </div>

                      <ArrowUpRight
                        size={13}
                        strokeWidth={2}
                        className="opacity-0 -translate-x-1 translate-y-1 transition-all duration-150 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 text-[#ed292f] shrink-0 ml-2"
                      />
                    </a>
                  );
                })}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
