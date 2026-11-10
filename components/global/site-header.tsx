"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { ServicesDropdown } from "./services-dropdown";

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div
      className={`fixed top-0 left-0 right-0 z-40 w-full transition-all duration-300 pointer-events-none ${
        scrolled ? "pt-3 sm:pt-4 px-3 sm:px-4 lg:px-6" : "pt-0 px-0"
      }`}
    >
      <header
        className={`pointer-events-auto flex items-center justify-between transition-all duration-300 ${
          scrolled
            ? "max-w-[1440px] mx-auto h-16 sm:h-18 px-5 sm:px-7 rounded-2xl bg-white/75 backdrop-blur-xl backdrop-saturate-150 border border-white/60 shadow-[0_8px_32px_0_rgba(0,0,0,0.08)] text-[#17191a]"
            : "w-full h-18 sm:h-20 px-5 sm:px-[4.5vw] bg-transparent text-white"
        }`}
      >
        <a
          className="relative flex items-center w-34 sm:w-38.5 min-h-10.5"
          href="/"
          aria-label="Stryvo Logistics home"
          onClick={closeMenu}
        >
          <Image
            src={scrolled ? "/logo/logo-drk.svg" : "/logo/logo-wit.svg"}
            alt="Stryvo Logistics LLC"
            width={154}
            height={42}
            priority
            className="w-34 sm:w-38.5 h-auto object-contain"
          />
        </a>

        {/* Navigation */}
        <nav
          className={`desktop-nav ${
            menuOpen
              ? "flex flex-col absolute top-full left-0 right-0 bg-[#17191a]/95 sm:bg-white/95 backdrop-blur-xl p-5 pt-2.5 pb-6 gap-0 items-stretch border-b border-white/10 sm:border-black/10 rounded-b-2xl shadow-xl text-white sm:text-[#17191a]"
              : "hidden sm:flex"
          } sm:static sm:flex-row sm:items-center sm:gap-6 md:gap-8 lg:gap-12 sm:bg-transparent sm:border-0 sm:p-0 sm:shadow-none`}
          aria-label="Main navigation"
        >
          <a
            href="/about"
            onClick={closeMenu}
            className="text-sm font-medium transition-colors hover:text-[#ed292f] py-3.5 sm:py-0 border-b border-white/10 sm:border-0"
          >
            Company
          </a>

          <ServicesDropdown scrolled={scrolled} onItemClick={closeMenu} />
          <a
            href="/how-can-we-help"
            onClick={closeMenu}
            className="text-sm font-medium transition-colors hover:text-[#ed292f] py-3.5 sm:py-0 border-b border-white/10 sm:border-0"
          >
            Help?
          </a>
          <a
            href="/contact"
            onClick={closeMenu}
            className="text-sm font-medium transition-colors hover:text-[#ed292f] py-3.5 sm:py-0 border-b border-white/10 sm:border-0"
          >
            Contact
          </a>
          <a
            className="group inline-flex items-center justify-between sm:justify-start font-semibold rounded-lg transition-all duration-200 cursor-pointer bg-[#ed292f] text-white hover:bg-[#17191a] shadow-sm text-xs sm:text-sm pl-4 pr-1.5 py-1.5 gap-2.5 mt-3.5 sm:mt-0"
            href="/contact"
            onClick={closeMenu}
          >
            <span>Request a quote</span>
            <span className="w-7 h-7 rounded-md bg-white text-[#ed292f] grid place-items-center shrink-0 transition-transform duration-200 group-hover:scale-105">
              <ArrowUpRight size={15} strokeWidth={2.4} />
            </span>
          </a>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className={`sm:hidden bg-transparent border-0 p-2 cursor-pointer inline-flex items-center justify-center ${
            scrolled ? "text-[#17191a]" : "text-white"
          }`}
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </header>
    </div>
  );
}
