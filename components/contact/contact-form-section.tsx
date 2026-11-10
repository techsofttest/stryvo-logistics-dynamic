"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import { ArrowUpRight, Check, MapPin, Clock, ShieldCheck } from "lucide-react";

import { Container } from "@/components/ui/container";
import { useSectionReveal } from "@/components/home/use-section-reveal";
import { Eyebrow } from "@/components/ui/eyebrow";

import type { ServiceItem } from "@/lib/services";

interface ContactFormSectionProps {
  services: ServiceItem[];
}

export function ContactFormSection({ services }: ContactFormSectionProps) {
  const { sectionRef, isVisible } = useSectionReveal({ threshold: 0.1 });

  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    origin: "",
    destination: "",
    cargoDetails: "",
    message: "",
  });

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section
      ref={sectionRef}
      className="bg-white py-18 sm:py-24 lg:py-32 overflow-hidden"
      id="contact-form"
    >
      <Container className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
        {/* Left Column: Context, FAQs & Assurance */}
        <div
          className={`lg:col-span-5 flex flex-col gap-8 reveal-item ${
            isVisible ? "is-visible" : ""
          }`}
          style={{ transitionDelay: "120ms" }}
        >
          <div>
            <Eyebrow theme="dark" className="!mb-3 !text-[#17191a] font-bold">
              REQUEST A RATE QUOTE
            </Eyebrow>

            <h2 className="m-0 font-bold tracking-tight leading-tight text-3xl sm:text-4xl md:text-5xl text-[#17191a] mb-5">
              Let&apos;s start moving your business.
            </h2>

            <p className="m-0 text-[#25282a] text-base sm:text-lg leading-relaxed font-normal">
              Fill out your cargo parameters and shipping routes. Our dedicated
              operations desk will analyse the optimal schedule and send you a
              transparent, competitive rate sheet within 2 business hours.
            </p>
          </div>

          {/* Quick Assurance Badges */}
          <div className="bg-[#f3f2ee] rounded-2xl p-6 border border-black/10 flex flex-col gap-4">
            <div className="flex items-start gap-3.5">
              <div className="w-8 h-8 rounded-lg bg-[#ed292f] text-white grid place-items-center shrink-0 mt-0.5">
                <Clock size={16} strokeWidth={2.4} />
              </div>

              <div>
                <h4 className="m-0 text-sm font-bold text-[#17191a]">
                  Fast 2-Hour Response Time
                </h4>
                <p className="m-0 text-xs text-[#35393c] leading-relaxed">
                  During business hours (08:00 – 19:00 GST), rate sheets are
                  processed immediately.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3.5">
              <div className="w-8 h-8 rounded-lg bg-[#ed292f] text-white grid place-items-center shrink-0 mt-0.5">
                <MapPin size={16} strokeWidth={2.4} />
              </div>

              <div>
                <h4 className="m-0 text-sm font-bold text-[#17191a]">
                  Direct GCC Fleet Dispatch
                </h4>
                <p className="m-0 text-xs text-[#35393c] leading-relaxed">
                  Dedicated linehaul trucks and flatbeds connecting UAE, Oman,
                  and Saudi Arabia.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Full Interactive Contact / Quote Form */}
        <div className="lg:col-span-7 bg-[#f3f2ee] rounded-2xl p-6 sm:p-8 md:p-10 border border-black/10">
          {submitted ? (
            <div className="py-14 flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-[#008000]/15 text-[#006e00] grid place-items-center mb-5">
                <Check size={32} strokeWidth={2.6} />
              </div>

              <span className="text-xs font-bold uppercase tracking-wider text-[#ed292f] mb-2">
                MESSAGE DELIVERED
              </span>

              <h3 className="m-0 text-2xl sm:text-3xl font-bold text-[#17191a] mb-3">
                Thank you for reaching out.
              </h3>

              <p className="m-0 text-sm text-[#2c3033] max-w-md leading-relaxed mb-6 font-normal">
                Your request has been routed directly to our freight desk. A
                dedicated logistics coordinator will review your shipment
                specifics and contact you shortly.
              </p>

              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="px-6 py-2.5 bg-[#17191a] text-white text-xs font-bold rounded-lg hover:bg-[#ed292f] transition-colors cursor-pointer"
              >
                Submit another request
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div className="pb-2 border-b border-black/10">
                <h3 className="m-0 text-xl sm:text-2xl font-bold tracking-tight text-[#17191a]">
                  Send an Enquiry
                </h3>
                <p className="m-0 text-xs sm:text-sm text-[#35393c] mt-1">
                  Required fields are marked with an asterisk (*).
                </p>
              </div>

              {/* Row 1: Name & Company */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="relative border-b border-[#8a8e8f] focus-within:border-[#ed292f] transition-colors">
                  <input
                    type="text"
                    id="contact-name"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    placeholder=" "
                    className="peer w-full pt-4 pb-1.5 bg-transparent text-[#17191a] font-medium text-sm outline-none placeholder-transparent"
                  />

                  <label
                    htmlFor="contact-name"
                    className="absolute left-0 top-4 text-[#35393c] text-xs font-semibold transition-all duration-200 pointer-events-none origin-[0] -translate-y-4 scale-90 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-90 peer-focus:text-[#ed292f] peer-focus:font-bold"
                  >
                    Your full name *
                  </label>
                </div>

                <div className="relative border-b border-[#8a8e8f] focus-within:border-[#ed292f] transition-colors">
                  <input
                    type="text"
                    id="contact-company"
                    value={formData.company}
                    onChange={(e) =>
                      setFormData({ ...formData, company: e.target.value })
                    }
                    placeholder=" "
                    className="peer w-full pt-4 pb-1.5 bg-transparent text-[#17191a] font-medium text-sm outline-none placeholder-transparent"
                  />

                  <label
                    htmlFor="contact-company"
                    className="absolute left-0 top-4 text-[#35393c] text-xs font-semibold transition-all duration-200 pointer-events-none origin-[0] -translate-y-4 scale-90 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-90 peer-focus:text-[#ed292f] peer-focus:font-bold"
                  >
                    Company name
                  </label>
                </div>
              </div>

              {/* Row 2: Email & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="relative border-b border-[#8a8e8f] focus-within:border-[#ed292f] transition-colors">
                  <input
                    type="email"
                    id="contact-email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    placeholder=" "
                    className="peer w-full pt-4 pb-1.5 bg-transparent text-[#17191a] font-medium text-sm outline-none placeholder-transparent"
                  />

                  <label
                    htmlFor="contact-email"
                    className="absolute left-0 top-4 text-[#35393c] text-xs font-semibold transition-all duration-200 pointer-events-none origin-[0] -translate-y-4 scale-90 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-90 peer-focus:text-[#ed292f] peer-focus:font-bold"
                  >
                    Business email *
                  </label>
                </div>

                <div className="relative border-b border-[#8a8e8f] focus-within:border-[#ed292f] transition-colors">
                  <input
                    type="tel"
                    id="contact-phone"
                    required
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    placeholder=" "
                    className="peer w-full pt-4 pb-1.5 bg-transparent text-[#17191a] font-medium text-sm outline-none placeholder-transparent"
                  />

                  <label
                    htmlFor="contact-phone"
                    className="absolute left-0 top-4 text-[#35393c] text-xs font-semibold transition-all duration-200 pointer-events-none origin-[0] -translate-y-4 scale-90 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-90 peer-focus:text-[#ed292f] peer-focus:font-bold"
                  >
                    Phone / WhatsApp *
                  </label>
                </div>
              </div>

              {/* Row 3: Dynamic Service Selector */}
              <div className="relative border-b border-[#8a8e8f] focus-within:border-[#ed292f] transition-colors pt-2">
                <label
                  htmlFor="contact-service"
                  className="block text-[11px] font-bold uppercase tracking-wider text-[#35393c] mb-1"
                >
                  Service of Interest
                </label>

                <select
                  id="contact-service"
                  value={formData.service}
                  onChange={(e) =>
                    setFormData({ ...formData, service: e.target.value })
                  }
                  className="w-full pb-2 bg-transparent text-[#17191a] font-medium text-sm outline-none cursor-pointer"
                >
                  <option value="" className="text-[#35393c]">
                    Select a service...
                  </option>

                  {services.map((service) => (
                    <option
                      key={service.id}
                      value={service.title}
                      className="text-[#17191a]"
                    >
                      {service.title}
                    </option>
                  ))}

                  <option
                    value="Other Logistics Requirement"
                    className="text-[#17191a]"
                  >
                    Other Logistics Requirement
                  </option>
                </select>
              </div>

              {/* Row 4: Route details (Origin & Destination) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="relative border-b border-[#8a8e8f] focus-within:border-[#ed292f] transition-colors">
                  <input
                    type="text"
                    id="contact-origin"
                    value={formData.origin}
                    onChange={(e) =>
                      setFormData({ ...formData, origin: e.target.value })
                    }
                    placeholder=" "
                    className="peer w-full pt-4 pb-1.5 bg-transparent text-[#17191a] font-medium text-sm outline-none placeholder-transparent"
                  />

                  <label
                    htmlFor="contact-origin"
                    className="absolute left-0 top-4 text-[#35393c] text-xs font-semibold transition-all duration-200 pointer-events-none origin-[0] -translate-y-4 scale-90 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-90 peer-focus:text-[#ed292f] peer-focus:font-bold"
                  >
                    Origin (City, Port, or Free Zone)
                  </label>
                </div>

                <div className="relative border-b border-[#8a8e8f] focus-within:border-[#ed292f] transition-colors">
                  <input
                    type="text"
                    id="contact-destination"
                    value={formData.destination}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        destination: e.target.value,
                      })
                    }
                    placeholder=" "
                    className="peer w-full pt-4 pb-1.5 bg-transparent text-[#17191a] font-medium text-sm outline-none placeholder-transparent"
                  />

                  <label
                    htmlFor="contact-destination"
                    className="absolute left-0 top-4 text-[#35393c] text-xs font-semibold transition-all duration-200 pointer-events-none origin-[0] -translate-y-4 scale-90 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-90 peer-focus:text-[#ed292f] peer-focus:font-bold"
                  >
                    Destination (City, Port, Country)
                  </label>
                </div>
              </div>

              {/* Row 5: Message / Cargo Details */}
              <div className="relative border-b border-[#8a8e8f] focus-within:border-[#ed292f] transition-colors">
                <textarea
                  id="contact-message"
                  rows={3}
                  required
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  placeholder=" "
                  className="peer w-full pt-4 pb-1.5 bg-transparent text-[#17191a] font-medium text-sm outline-none resize-none placeholder-transparent"
                />

                <label
                  htmlFor="contact-message"
                  className="absolute left-0 top-4 text-[#35393c] text-xs font-semibold transition-all duration-200 pointer-events-none origin-[0] -translate-y-4 scale-90 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-90 peer-focus:text-[#ed292f] peer-focus:font-bold"
                >
                  Cargo specifications, weight/dimensions, or requirements *
                </label>
              </div>

              {/* Submit CTA */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="group w-full sm:w-auto inline-flex items-center justify-between font-bold rounded-lg transition-all duration-200 cursor-pointer bg-[#ed292f] text-white hover:bg-[#17191a] text-sm pl-5 pr-2 py-2.5 gap-4"
                >
                  <span>Submit Rate Request</span>

                  <span className="w-8 h-8 rounded-md bg-white text-[#ed292f] grid place-items-center shrink-0 transition-transform duration-200 group-hover:scale-105">
                    <ArrowUpRight size={16} strokeWidth={2.4} />
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
