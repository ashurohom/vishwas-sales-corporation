import React from 'react';
import ClientsSection from '../components/ClientsSection';
import { Users, Building2, Share2, CheckCircle2, ArrowRight } from 'lucide-react';
import { companyInfo } from '../data/companyData';

export default function ClientsPage({ onOpenInquiry }) {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Page Header */}
      <div
        className="relative bg-slate-950 text-white py-16 border-b border-slate-800 bg-no-repeat bg-center bg-[length:100%_100%] md:bg-cover"
        style={{
          backgroundImage: "url('/client_hero_bg.png')",
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-slate-950/65"></div>

        {/* Main Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

          {/* Dealer Network Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-500/10 border border-red-500/25 text-red-400 text-xs font-semibold mb-3 sm:mb-4 shadow-sm">
            <Share2 className="w-4 h-4" />
            <span>800+ Dealer Network & Major Real Estate Partners</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-[2.6rem] xl:text-[3.25rem] font-black tracking-tight leading-[1.16] text-white">
            Our Clients & Dealer Network
          </h1>

          {/* Hero Description */}
          <p className="mt-4 text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Active dealer network of more than 800+ dealers in Pune district and
            expanding across Maharashtra. Trusted by top builders, hospitals,
            co-operative housing societies, and industrial leaders.
          </p>

        </div>
      </div>

      {/* Main Clients & Sectors Section */}
      <ClientsSection onOpenInquiry={onOpenInquiry} />


    </div>
  );
}
