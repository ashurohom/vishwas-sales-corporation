
import React from 'react';
import { Award } from 'lucide-react';

export default function Hero({ onOpenInquiry }) {
  return (
    <section
      id="home"
      className="relative isolate overflow-hidden min-h-[auto] sm:min-h-[calc(100vh-112px)] flex items-center py-8 sm:py-12 lg:py-8 bg-[#050b1b] bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/home_page_hero_bg.jpg')",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#050b1b]/95 via-[#050b1b]/80 to-[#050b1b]/25" />

      {/* Bottom ambient glow */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#050b1b]/60 via-transparent to-[#050b1b]/20" />

      {/* Dot pattern */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(#ef4444_0.75px,transparent_0.75px)] [background-size:24px_24px] opacity-[0.08] pointer-events-none" />

      {/* Hero Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl text-center lg:text-left">

          {/* Legacy Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-500/10 border border-red-500/30 text-red-400 text-[10px] sm:text-sm font-semibold mb-3 sm:mb-5 shadow-sm">
            <Award className="w-4 h-4 text-red-500 shrink-0" />
            <span>Since 1985 • 4 Decades of Excellence</span>
          </div>

          {/* Company Name */}
          <p className="text-xs sm:text-base lg:text-lg font-black uppercase tracking-[0.15em] sm:tracking-[0.18em] text-red-500 mb-2 sm:mb-3">
            Vishwas Sales Corporation
          </p>

          {/* Main Heading */}
          <h1 className="text-[1.8rem] sm:text-5xl md:text-6xl lg:text-[3.7rem] xl:text-[4.2rem] font-black tracking-tight leading-[1.12] text-white">
            Pune's Leading Brand in{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-rose-400 to-red-400">
              Plumbing & Pumping
            </span>{' '}
            Solutions
          </h1>

          {/* Description */}
          <p className="mt-3 sm:mt-5 text-xs sm:text-base lg:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto lg:mx-0">
            Authorized distributor of India's premier pump & pipe brands,
            trusted by over{' '}
            <span className="text-white font-bold">800+ dealers</span> and
            top real estate developers across Maharashtra.
          </p>

        </div>
      </div>
    </section>
  );
}
