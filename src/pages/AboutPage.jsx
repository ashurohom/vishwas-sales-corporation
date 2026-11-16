import React from 'react';
import AboutSection from '../components/AboutSection';
import OurPromises from '../components/OurPromises';
import { Award, ShieldCheck, Users, Clock, CheckCircle2, ArrowRight } from 'lucide-react';
import { companyInfo } from '../data/companyData';
import { Link } from 'react-router-dom';
import MissionVision from '../components/MissionVision';

export default function AboutPage({ onOpenInquiry }) {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Page Header Banner */}

      <div
        className="relative bg-slate-950 text-white py-16 border-b border-slate-800 bg-cover bg-center"
        style={{
          backgroundImage: "url('/About_us_hero_section_bg.jpg')"
        }}
      >
        {/* Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/85 via-slate-950/75 to-slate-950/90"></div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

          {/* Experience Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-500/10 border border-red-500/25 text-red-400 text-xs font-semibold mb-3 sm:mb-4 shadow-sm">
            
            <span>Since 1985 • Over 40 Years of Excellence</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-[2.6rem] xl:text-[3.25rem] font-black tracking-tight leading-[1.16] text-white">
            About Vishwas Sales Corporation
          </h1>

          {/* Description */}
          <p className="mt-4 text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Pune's Leading Company in Plumbing & Pumping Solutions.
            With a legacy completed 4 decades, catering to both
            corporate and residential water needs with superior,
            trustworthy dealings.
          </p>

        </div>
      </div>




      {/* 6 Core Pillars & About Section Component */}
      <AboutSection onOpenInquiry={onOpenInquiry} />

      {/* Promises */}
    </div>
  );
}
