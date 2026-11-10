"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import { ArrowUpRight, Check, Phone, Mail, Clock } from "lucide-react";

interface ServiceEnquiryCardProps {
  currentServiceTitle?: string;
}

export function ServiceEnquiryCard({ currentServiceTitle }: ServiceEnquiryCardProps) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    origin: "",
    destination: "",
    message: "",
  });

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="bg-[#f3f2ee] rounded-2xl p-6 sm:p-7 md:p-8 border border-black/10">

      <h3 className="m-0 text-xl sm:text-2xl font-bold tracking-tight text-[#17191a] mb-2">
        Request a quotation
      </h3>
      <p className="m-0 text-xs sm:text-sm text-[#2c3033] font-medium leading-relaxed mb-6">
        {currentServiceTitle
          ? `Get customized rates and routing options for ${currentServiceTitle}.`
          : "Get customized freight rates and end-to-end logistics solutions."}
      </p>

      {submitted ? (
        <div className="py-8 flex flex-col items-center text-center">
          <div className="w-12 h-12 rounded-full bg-[#008000]/15 text-[#006e00] grid place-items-center mb-4">
            <Check size={24} strokeWidth={2.6} />
          </div>
          <h4 className="m-0 text-lg font-bold text-[#17191a] mb-2">
            Enquiry Received
          </h4>
          <p className="m-0 text-xs sm:text-sm text-[#2c3033] max-w-xs mb-4">
            Our dispatch coordinator will review your route parameters and send a rate sheet within 2 business hours.
          </p>
          <button
            type="button"
            onClick={() => setSubmitted(false)}
            className="text-xs font-bold text-[#ed292f] underline cursor-pointer"
          >
            Send another enquiry
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {/* Full Name */}
          <div className="relative border-b border-[#8a8e8f] focus-within:border-[#ed292f] transition-colors">
            <input
              type="text"
              id="enq-name"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder=" "
              className="peer w-full pt-4 pb-1.5 bg-transparent text-[#17191a] font-medium text-sm outline-none placeholder-transparent"
            />
            <label
              htmlFor="enq-name"
              className="absolute left-0 top-4 text-[#35393c] text-xs font-semibold transition-all duration-200 pointer-events-none origin-[0] -translate-y-4 scale-90 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-90 peer-focus:text-[#ed292f] peer-focus:font-bold"
            >
              Full name *
            </label>
          </div>

          {/* Business Email & Phone Number in the same row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="relative border-b border-[#8a8e8f] focus-within:border-[#ed292f] transition-colors">
              <input
                type="email"
                id="enq-email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder=" "
                className="peer w-full pt-4 pb-1.5 bg-transparent text-[#17191a] font-medium text-sm outline-none placeholder-transparent"
              />
              <label
                htmlFor="enq-email"
                className="absolute left-0 top-4 text-[#35393c] text-xs font-semibold transition-all duration-200 pointer-events-none origin-[0] -translate-y-4 scale-90 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-90 peer-focus:text-[#ed292f] peer-focus:font-bold"
              >
                Business email *
              </label>
            </div>

            <div className="relative border-b border-[#8a8e8f] focus-within:border-[#ed292f] transition-colors">
              <input
                type="tel"
                id="enq-phone"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder=" "
                className="peer w-full pt-4 pb-1.5 bg-transparent text-[#17191a] font-medium text-sm outline-none placeholder-transparent"
              />
              <label
                htmlFor="enq-phone"
                className="absolute left-0 top-4 text-[#35393c] text-xs font-semibold transition-all duration-200 pointer-events-none origin-[0] -translate-y-4 scale-90 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-90 peer-focus:text-[#ed292f] peer-focus:font-bold"
              >
                Phone number *
              </label>
            </div>
          </div>

          {/* Route details: Origin & Destination */}
          <div className="grid grid-cols-2 gap-3 pt-1">
            <div className="relative border-b border-[#8a8e8f] focus-within:border-[#ed292f] transition-colors">
              <input
                type="text"
                id="enq-origin"
                value={formData.origin}
                onChange={(e) => setFormData({ ...formData, origin: e.target.value })}
                placeholder=" "
                className="peer w-full pt-4 pb-1.5 bg-transparent text-[#17191a] font-medium text-sm outline-none placeholder-transparent"
              />
              <label
                htmlFor="enq-origin"
                className="absolute left-0 top-4 text-[#35393c] text-xs font-semibold transition-all duration-200 pointer-events-none origin-[0] -translate-y-4 scale-90 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-90 peer-focus:text-[#ed292f] peer-focus:font-bold"
              >
                Origin (City/Port)
              </label>
            </div>
            <div className="relative border-b border-[#8a8e8f] focus-within:border-[#ed292f] transition-colors">
              <input
                type="text"
                id="enq-destination"
                value={formData.destination}
                onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                placeholder=" "
                className="peer w-full pt-4 pb-1.5 bg-transparent text-[#17191a] font-medium text-sm outline-none placeholder-transparent"
              />
              <label
                htmlFor="enq-destination"
                className="absolute left-0 top-4 text-[#35393c] text-xs font-semibold transition-all duration-200 pointer-events-none origin-[0] -translate-y-4 scale-90 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-90 peer-focus:text-[#ed292f] peer-focus:font-bold"
              >
                Destination
              </label>
            </div>
          </div>

          {/* Cargo Message */}
          <div className="relative border-b border-[#8a8e8f] focus-within:border-[#ed292f] transition-colors">
            <textarea
              id="enq-message"
              rows={2}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder=" "
              className="peer w-full pt-4 pb-1.5 bg-transparent text-[#17191a] font-medium text-sm outline-none resize-none placeholder-transparent"
            />
            <label
              htmlFor="enq-message"
              className="absolute left-0 top-4 text-[#35393c] text-xs font-semibold transition-all duration-200 pointer-events-none origin-[0] -translate-y-4 scale-90 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-90 peer-focus:text-[#ed292f] peer-focus:font-bold"
            >
              Cargo specifications / Timeline
            </label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="group mt-2 w-full inline-flex items-center justify-between font-bold rounded-lg transition-all duration-200 cursor-pointer bg-[#ed292f] text-white hover:bg-[#17191a] text-xs sm:text-sm pl-4 pr-1.5 py-2 gap-2.5"
          >
            <span>Send Enquiry Now</span>
            <span className="w-7 h-7 rounded-md bg-white text-[#ed292f] grid place-items-center shrink-0 transition-transform duration-200 group-hover:scale-105">
              <ArrowUpRight size={15} strokeWidth={2.4} />
            </span>
          </button>
        </form>
      )}

      {/* Direct Contact Links: 3 columns in the same row with icon + label on top */}
      <div className="mt-5 pt-4 border-t border-black/15 grid grid-cols-2 gap-2 text-xs">
        {/* Direct Call */}
        <div className="flex flex-col items-start gap-1 min-w-0">
          <div className="flex items-center gap-1.5 text-[11px] font-semibold text-[#55595a] uppercase tracking-wider">
            <Phone size={12} className="text-[#ed292f] shrink-0" />
            <span>Direct Call</span>
          </div>
          <a
            href="tel:+97140000000"
            className="text-xs sm:text-[13px] font-bold text-[#17191a] hover:text-[#ed292f] transition-colors truncate w-full"
          >
            +971 4 000 0000
          </a>
        </div>

        {/* Freight Desk */}
        <div className="flex flex-col items-start gap-1 min-w-0">
          <div className="flex items-center gap-1.5 text-[11px] font-semibold text-[#55595a] uppercase tracking-wider">
            <Mail size={12} className="text-[#ed292f] shrink-0" />
            <span>Freight Desk</span>
          </div>
          <a
            href="mailto:operations@stryvo.com"
            className="text-xs sm:text-[13px] font-bold text-[#17191a] hover:text-[#ed292f] transition-colors truncate w-full"
          >
            operations@stryvo.com
          </a>
        </div>
      </div>
    </div>
  );
}
