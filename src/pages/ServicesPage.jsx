import React from 'react';
import ServicesSection from '../components/ServicesSection';
import { Wrench, PhoneCall, Zap, ShieldCheck, Clock, CheckCircle2 } from 'lucide-react';
import { companyInfo } from '../data/companyData';
import { Link } from 'react-router-dom';

export default function ServicesPage({ onOpenInquiry }) {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Page Header */}


      <div
        className="relative isolate overflow-hidden bg-slate-950 text-white py-16 border-b border-slate-800 bg-no-repeat bg-[length:100%_100%] bg-center md:bg-cover"
        style={{
          backgroundImage: "url('/services_hero_bg.png')",
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 -z-10 bg-slate-950/80"></div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

          {/* Badge */}
          <div className="inline-flex items-center justify-center gap-2 px-3.5 py-1.5 rounded-full bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-semibold mb-3 sm:mb-4 shadow-sm">
            <Wrench className="w-4 h-4" />
            <span>Turnkey Engineering & Rapid Maintenance</span>
          </div>

          {/* Heading */}
          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-[2.6rem] xl:text-[3.25rem] font-black tracking-tight leading-[1.16] text-white">
            Specialized Water & Pump Services
          </h1>

          {/* Description */}
          <p className="mt-4 text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            From precision in-house motor rewinding and on-call emergency mechanics
            to dewatering rentals and housing society energy audits across Pune and
            Maharashtra.
          </p>

        </div>
      </div>



      {/* Services Section Component */}
      <ServicesSection onOpenInquiry={onOpenInquiry} />

    </div>
  );
}
