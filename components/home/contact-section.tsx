"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import { ArrowRight, ArrowUpRight, Check, ChevronDown } from "lucide-react";
import { Container } from "../ui/container";
import { Eyebrow } from "../ui/eyebrow";
import { useSectionReveal } from "./use-section-reveal";

// --------------------------------------------------
// Types
// --------------------------------------------------

interface ContactAddress {
  heading: string;
  description: string;
}

interface ContactSectionProps {
  address: ContactAddress[];
  services: string[];
}

// --------------------------------------------------
// Contact Section
// --------------------------------------------------

export function ContactSection({ address, services }: ContactSectionProps) {
  const { sectionRef, isVisible } = useSectionReveal({ threshold: 0.15 });

  const [submitted, setSubmitted] = useState(false);
  const [serviceValue, setServiceValue] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
    setServiceValue("");
    event.currentTarget.reset();
  }

  return (
    <section
      ref={sectionRef}
      className="bg-white py-18 sm:py-23 lg:py-32"
      id="contact"
    >
      <Container className="grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-10 lg:gap-[9vw] items-start">
        {/* Left Column: Heading & Contact Info */}
        <div>
          <div
            className={`reveal-item ${isVisible ? "is-visible" : ""}`}
            style={{ transitionDelay: "100ms" }}
          >
            <Eyebrow>GET IN TOUCH</Eyebrow>
          </div>

          <h2
            className={`m-0 font-medium tracking-tight leading-tight text-4xl sm:text-5xl md:text-6xl reveal-item ${
              isVisible ? "is-visible" : ""
            }`}
            style={{ transitionDelay: "180ms" }}
          >
            How can we
            <br />
            <span className="text-[#ed292f]">help you move?</span>
          </h2>

          <p
            className={`max-w-sm my-7 sm:mt-7.5 sm:mb-12 text-[#55595a] text-base leading-relaxed reveal-item ${
              isVisible ? "is-visible" : ""
            }`}
            style={{ transitionDelay: "260ms" }}
          >
            Tell us what you need to move. We’ll help you explore the right
            logistics solution.
          </p>

          <div
            className={`border-t border-[rgba(23,25,26,0.18)] reveal-item ${
              isVisible ? "is-visible" : ""
            }`}
            style={{ transitionDelay: "320ms" }}
          >
            {/* Location */}
            <div className="py-5 border-b border-[rgba(23,25,26,0.18)]">
              <span className="block mb-1.5 text-sm tracking-wider text-[#6c7070] font-semibold">
                LOCATION
              </span>

              <p className="m-0 text-base font-medium">
                {address.find((item) => item.heading === "Address")
                  ?.description ||
                  "Fronds Building, Office 02, Sheikh Zayed Road, Al Goze Industrial Third, Dubai"}
              </p>
            </div>

            {/* Enquiries */}
            <div className="py-5 border-b border-[rgba(23,25,26,0.18)]">
              <span className="block mb-1.5 text-sm tracking-wider text-[#6c7070] font-semibold">
                ENQUIRIES
              </span>

              <p className="m-0 text-base font-medium">
                Share your requirements using the form and our team can follow
                up.
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: Contact Form */}
        <div
          className={`bg-[#f3f2ee] rounded-xl p-5 sm:p-8 md:p-10 lg:p-12.5 shadow-sm overflow-hidden reveal-item ${
            isVisible ? "is-visible" : ""
          }`}
          style={{ transitionDelay: "200ms" }}
        >
          {submitted ? (
            <div
              className="min-h-100 flex flex-col items-start justify-center"
              role="status"
            >
              <span className="w-13 h-13 grid place-items-center bg-[#ed292f] text-white mb-7">
                <Check size={24} />
              </span>

              <Eyebrow className="mb-4">ENQUIRY READY</Eyebrow>

              <h3 className="text-4xl font-medium tracking-tight leading-tight m-0 mb-4">
                Thanks for reaching out.
              </h3>

              <p className="text-[#55595a] text-base max-w-md leading-relaxed">
                This demo form is working on the front end. Connect an email or
                form endpoint to deliver enquiries to Stryvo Logistics.
              </p>

              <button
                className="inline-flex items-center gap-3 pb-2 border-b border-[#ed292f] bg-transparent text-sm font-semibold whitespace-nowrap transition-all hover:gap-4.5 cursor-pointer mt-4"
                onClick={() => setSubmitted(false)}
                type="button"
              >
                Send another enquiry <ArrowRight size={17} />
              </button>
            </div>
          ) : (
            <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
              <div className="flex justify-between gap-4 pb-4 border-b border-[rgba(23,25,26,0.18)] text-sm tracking-wide font-semibold">
                <span>YOUR DETAILS</span>
                <span className="text-[#777b7b] text-right">
                  RESPONSE ENQUIRY
                </span>
              </div>

              {/* Row 1: Full name & Company */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-1">
                <div className="relative border-b border-[#b9bcba] focus-within:border-[#ed292f] transition-colors">
                  <input
                    type="text"
                    id="contact-name"
                    name="name"
                    autoComplete="name"
                    placeholder=" "
                    required
                    className="peer w-full pt-5 pb-2 bg-transparent text-[#17191a] text-base outline-none placeholder-transparent"
                  />
                  <label
                    htmlFor="contact-name"
                    className="absolute left-0 top-5 text-[#6c7070] text-sm font-medium transition-all duration-200 pointer-events-none origin-[0] -translate-y-5 scale-90 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-5 peer-focus:scale-90 peer-focus:text-[#ed292f] peer-focus:font-semibold"
                  >
                    Full name *
                  </label>
                </div>

                <div className="relative border-b border-[#b9bcba] focus-within:border-[#ed292f] transition-colors">
                  <input
                    type="text"
                    id="contact-company"
                    name="company"
                    autoComplete="organization"
                    placeholder=" "
                    className="peer w-full pt-5 pb-2 bg-transparent text-[#17191a] text-base outline-none placeholder-transparent"
                  />
                  <label
                    htmlFor="contact-company"
                    className="absolute left-0 top-5 text-[#6c7070] text-sm font-medium transition-all duration-200 pointer-events-none origin-[0] -translate-y-5 scale-90 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-5 peer-focus:scale-90 peer-focus:text-[#ed292f] peer-focus:font-semibold"
                  >
                    Company
                  </label>
                </div>
              </div>

              {/* Row 2: Email & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-1">
                <div className="relative border-b border-[#b9bcba] focus-within:border-[#ed292f] transition-colors">
                  <input
                    type="email"
                    id="contact-email"
                    name="email"
                    autoComplete="email"
                    placeholder=" "
                    required
                    className="peer w-full pt-5 pb-2 bg-transparent text-[#17191a] text-base outline-none placeholder-transparent"
                  />
                  <label
                    htmlFor="contact-email"
                    className="absolute left-0 top-5 text-[#6c7070] text-sm font-medium transition-all duration-200 pointer-events-none origin-[0] -translate-y-5 scale-90 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-5 peer-focus:scale-90 peer-focus:text-[#ed292f] peer-focus:font-semibold"
                  >
                    Email address *
                  </label>
                </div>

                <div className="relative border-b border-[#b9bcba] focus-within:border-[#ed292f] transition-colors">
                  <input
                    type="tel"
                    id="contact-phone"
                    name="phone"
                    autoComplete="tel"
                    placeholder=" "
                    className="peer w-full pt-5 pb-2 bg-transparent text-[#17191a] text-base outline-none placeholder-transparent"
                  />
                  <label
                    htmlFor="contact-phone"
                    className="absolute left-0 top-5 text-[#6c7070] text-sm font-medium transition-all duration-200 pointer-events-none origin-[0] -translate-y-5 scale-90 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-5 peer-focus:scale-90 peer-focus:text-[#ed292f] peer-focus:font-semibold"
                  >
                    Phone number
                  </label>
                </div>
              </div>

              {/* Row 3: Dynamic Service Selection */}
              <div className="relative border-b border-[#b9bcba] focus-within:border-[#ed292f] transition-colors">
                <select
                  id="contact-service"
                  name="service"
                  value={serviceValue}
                  onChange={(e) => setServiceValue(e.target.value)}
                  required
                  className="w-full appearance-none pt-5 pb-2 pr-8 bg-transparent text-[#17191a] text-base outline-none cursor-pointer focus:outline-none"
                >
                  <option value="" disabled hidden></option>

                  {services.map((service, index) => (
                    <option key={index} value={service}>
                      {service}
                    </option>
                  ))}

                  <option value="Other">Other requirements</option>
                </select>

                <label
                  htmlFor="contact-service"
                  className={`absolute left-0 pointer-events-none transition-all duration-200 origin-[0] ${
                    serviceValue
                      ? "top-5 -translate-y-5 scale-90 text-[#ed292f] font-semibold"
                      : "top-5 translate-y-0 scale-100 text-[#6c7070] font-medium"
                  }`}
                >
                  Service required *
                </label>

                <ChevronDown
                  size={17}
                  className="absolute right-0 top-5 pointer-events-none text-[#17191a]"
                />
              </div>

              {/* Row 4: Message Textarea */}
              <div className="relative border-b border-[#b9bcba] focus-within:border-[#ed292f] transition-colors pt-1">
                <textarea
                  id="contact-message"
                  name="message"
                  rows={3}
                  placeholder=" "
                  required
                  className="peer w-full pt-5 pb-2 bg-transparent text-[#17191a] text-base outline-none resize-y min-h-24 placeholder-transparent"
                />
                <label
                  htmlFor="contact-message"
                  className="absolute left-0 top-5 text-[#6c7070] text-sm font-medium transition-all duration-200 pointer-events-none origin-[0] -translate-y-5 scale-90 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-5 peer-focus:scale-90 peer-focus:text-[#ed292f] peer-focus:font-semibold"
                >
                  Tell us about your shipment *
                </label>
              </div>

              {/* Form Bottom Row */}
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-5 mt-2">
                <p className="max-w-xs sm:max-w-none lg:max-w-xs m-0 text-[#686c6c] text-sm leading-normal">
                  By submitting, you agree to be contacted about this enquiry.
                </p>

                <button
                  type="submit"
                  className="group inline-flex items-center justify-between sm:justify-start font-semibold rounded-lg transition-all duration-200 cursor-pointer bg-[#ed292f] text-white hover:bg-[#17191a] shadow-md text-xs sm:text-sm pl-4 pr-1.5 py-1.5 gap-2.5"
                >
                  <span>Send enquiry</span>
                  <span className="w-7 h-7 rounded-md bg-white text-[#ed292f] grid place-items-center shrink-0 transition-transform duration-200 group-hover:scale-105">
                    <ArrowUpRight size={15} strokeWidth={2.4} />
                  </span>
                </button>
              </div>
            </form>
          )}
        </div>
      </Container>
    </section>
  );
}
