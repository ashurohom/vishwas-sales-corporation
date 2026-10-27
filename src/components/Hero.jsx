import React from 'react';
import { 
  ArrowRight, 
  Award 
} from 'lucide-react';
import { companyInfo } from '../data/companyData';

export default function Hero({ onOpenInquiry }) {
  return (
    <section 
      id="home" 
      className="relative overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white min-h-[calc(100dvh-112px)] flex items-center border-b border-slate-800 py-8 lg:py-4"
    >
      
      {/* Ambient Lighting Gradients */}
      <div className="absolute top-1/4 -left-40 w-96 h-96 bg-red-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 -right-40 w-96 h-96 bg-rose-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -top-20 right-1/4 w-80 h-80 bg-red-700/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(#ef4444_0.75px,transparent_0.75px)] [background-size:24px_24px] opacity-10 pointer-events-none" />

      <div className="relative max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 xl:gap-12 items-center">
          
          {/* Left Column: Hero Copy & Value Proposition */}
          <div className="lg:col-span-6 xl:col-span-6 text-center lg:text-left z-10 py-2">
            
            {/* Top Legacy Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-500/10 border border-red-500/25 text-red-400 text-xs font-semibold mb-3 sm:mb-4 shadow-sm">
              <Award className="w-3.5 h-3.5 text-red-500 shrink-0" />
              <span>Since 1985 • 4 Decades of Excellence</span>
            </div>

            {/* Impactful Headline with Prominent Company Brand Name */}
            <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-[2.6rem] xl:text-[3.25rem] font-black tracking-tight leading-[1.16] text-white">
              <span className="block text-xs sm:text-sm md:text-base lg:text-lg font-black uppercase tracking-widest text-red-500 mb-1 sm:mb-1.5">
                VISHWAS SALES CORPORATION
              </span>
              Pune's Leading Brand in{' '}
              <span className="block sm:inline text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-rose-400 to-red-400">
                Plumbing & Pumping
              </span>{' '}
              Solutions
            </h1>

            {/* Crisp Subtitle */}
            <p className="mt-3 sm:mt-4 text-sm sm:text-base lg:text-base xl:text-lg text-slate-300 leading-relaxed max-w-xl mx-auto lg:mx-0 font-normal">
              Authorized distributor of India's premier pump & pipe brands, trusted by over <span className="text-white font-semibold">800+ dealers</span> and top real estate developers across Maharashtra.
            </p>

            {/* Action Buttons */}
            <div className="mt-5 sm:mt-6 flex flex-col sm:flex-row items-center justify-center lg:justify-start">
              <button
                onClick={() => onOpenInquiry && onOpenInquiry('Hero Quotation Request')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 sm:px-8 py-3.5 sm:py-4 rounded-xl bg-gradient-to-r from-red-600 via-rose-600 to-red-700 hover:from-red-700 hover:to-rose-800 text-white font-bold text-xs sm:text-sm uppercase tracking-wider shadow-lg shadow-red-600/30 hover:shadow-red-600/50 transition-all hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              >
                <span>Request Project Quote</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>

          {/* Right Column: Clean PNG Cutout with Reference 1 Style Backdrop */}
          <div className="lg:col-span-6 xl:col-span-6 relative flex justify-center items-center py-2">
            
            {/* Reference 1 Style Circular Graphic Backdrop */}
            <div className="absolute w-[320px] h-[320px] sm:w-[440px] sm:h-[440px] lg:w-[490px] lg:h-[490px] xl:w-[550px] xl:h-[550px] rounded-full bg-gradient-to-tr from-slate-900 via-slate-800/80 to-red-950/40 border border-slate-700/40 shadow-2xl pointer-events-none" />
            
            {/* Concentric Golden & Red Accent Rings (Reference 1) */}
            <div className="absolute w-[360px] h-[360px] sm:w-[490px] sm:h-[490px] lg:w-[550px] lg:h-[550px] xl:w-[610px] xl:h-[610px] rounded-full border border-amber-500/20 pointer-events-none" />
            <div className="absolute -top-4 -right-4 sm:-top-8 sm:-right-8 w-44 h-44 sm:w-60 sm:h-60 rounded-full border border-red-500/25 pointer-events-none animate-pulse duration-1000" />
            <div className="absolute -bottom-4 -left-4 sm:-bottom-8 sm:-left-8 w-32 h-32 sm:w-48 sm:h-48 rounded-full border border-slate-700/30 pointer-events-none" />

            {/* Glowing Aura Behind Engineer */}
            <div className="absolute w-72 h-72 sm:w-96 sm:h-96 lg:w-[480px] lg:h-[480px] rounded-full bg-red-600/15 blur-3xl pointer-events-none" />

            {/* Pure PNG Image - Increased Height & Prominence */}
            <div className="relative z-10 w-full max-w-[340px] sm:max-w-[440px] lg:max-w-[500px] xl:max-w-[380px] flex justify-center">
              <img
                src="/images/hero-engineer.png"
                alt="Vishwas Sales Professional Plumbing & Pumping Technical Engineer"
                className="w-full h-auto max-h-[calc(100dvh-130px)] lg:max-h-[calc(100dvh-125px)] xl:max-h-[560px] object-contain drop-shadow-[0_25px_50px_rgba(0,0,0,0.9)] filter hover:scale-[1.02] transition-transform duration-500 select-none"
                loading="eager"
              />
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
