import React from 'react';
import ContactSection from '../components/ContactSection';
import { MapPin, Phone, Mail, Clock, MessageSquare } from 'lucide-react';
import { companyInfo } from '../data/companyData';

export default function ContactPage() {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Page Header */}
      <div
        className="relative bg-slate-950 text-white py-16 border-b border-slate-800 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/contact_hero_bg_img.png')",
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-slate-950/60"></div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-500/10 border border-red-500/25 text-red-400 text-xs font-semibold mb-3 sm:mb-4 shadow-sm">
            <MapPin className="w-4 h-4" />
            <span>Corporate Showroom & In-House Technical Workshop</span>
          </div>

          {/* Heading */}
          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-[2.6rem] xl:text-[3.25rem] font-black tracking-tight leading-[1.16] text-white">
            Contact Vishwas Sales Corporation
          </h1>

          {/* Description */}
          <p className="mt-4 text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Headquartered at Hadapsar, Pune-Solapur Road. Connect with our sales
            engineering desk for urgent pump repairs, standby pump requests, or
            project supply quotations.
          </p>

        </div>
      </div>

      {/* Contact Section Component */}
      <ContactSection />
    </div>
  );
}
