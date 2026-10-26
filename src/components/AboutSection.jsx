import React from 'react';
import Logo from './Logo';
import { 
  Award, 
  Smile, 
  Layers, 
  ShieldCheck, 
  Users2, 
  CircleDollarSign, 
  ArrowRight,
  CheckCircle,
  Building
} from 'lucide-react';
import { companyInfo } from '../data/companyData';

export default function AboutSection({ onOpenInquiry }) {
  const pillarIcons = [
    <Award className="w-6 h-6 text-red-600" />,
    <Smile className="w-6 h-6 text-red-600" />,
    <Layers className="w-6 h-6 text-red-600" />,
    <ShieldCheck className="w-6 h-6 text-red-600" />,
    <Users2 className="w-6 h-6 text-red-600" />,
    <CircleDollarSign className="w-6 h-6 text-red-600" />
  ];

  return (
    <section id="about" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* About Main Presentation */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-100 text-red-700 text-xs font-bold uppercase tracking-wider mb-4">
              <span>Since 1985 • Over 40 Years of Trust</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
              Welcome to <br />
              <span className="text-red-600">VISHWAS SALES CORPORATION</span>
            </h2>

            <div className="mt-6 space-y-4 text-base text-slate-600 leading-relaxed">
              <p>
                With a legacy completed <strong>4 decades</strong>, <span className="font-bold text-slate-900">VISHWAS SALES CORPORATION</span> has been a leading name in the water industry, catering to both corporate and residential water needs.
              </p>
              <p>
                Our commitment to delivering superior, trustworthy dealings, prompt delivery schedules, and competitive pricing sets us apart as the preferred choice for discerning clients across Maharashtra.
              </p>
              <p>
                Headquartered at <strong>Hadapsar, Pune</strong>, we operate an active network of over <strong>800+ dealers</strong>, partnered with leading infrastructure builders, hospitals, and thousands of co-operative housing societies.
              </p>
            </div>

            {/* Credential bullets */}
            <div className="mt-6 grid grid-cols-2 gap-3 text-xs font-semibold text-slate-800">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-red-600 shrink-0" />
                <span>40+ Years Industry Legacy</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-red-600 shrink-0" />
                <span>800+ Pune & MH Dealers</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-red-600 shrink-0" />
                <span>CREDAI Pune Metro Member</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-red-600 shrink-0" />
                <span>Dedicated In-House Workshop</span>
              </div>
            </div>

            <div className="mt-8">
              <button
                onClick={() => onOpenInquiry && onOpenInquiry('Partner With Us')}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs uppercase tracking-wider shadow-md transition-all"
              >
                <span>Partner With Vishwas Sales</span>
                <ArrowRight className="w-4 h-4 text-red-400" />
              </button>
            </div>
          </div>

          {/* Visual Showcase Card */}
          <div className="lg:col-span-6">
            <div className="relative rounded-3xl bg-white p-8 border border-slate-200/90 shadow-xl">
              <div className="flex items-center justify-between pb-6 border-b border-slate-100">
                <Logo size="normal" />
                <span className="text-xs font-bold px-3 py-1 bg-red-50 text-red-700 rounded-full border border-red-200">
                  Reliability Assured Since 1985
                </span>
              </div>

              {/* In-House Workshop & Technical Excellence Banner */}
              <div className="mt-6 p-5 rounded-2xl bg-slate-900 text-white space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-red-400">
                    Workshop & Technical Force
                  </span>
                  <span className="text-[11px] bg-slate-800 text-slate-300 px-2 py-0.5 rounded">
                    On-Site & In-House
                  </span>
                </div>
                <h4 className="text-lg font-extrabold text-white">
                  Skilled & Dedicated Technical Team
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Our dedicated repair division features certified pump mechanics, electrical rewinders, and diagnostic equipment. Whether for routine society maintenance or emergency de-watering, we deploy skilled personnel immediately.
                </p>
                <div className="pt-2 flex items-center gap-3 text-xs text-slate-400">
                  <span>✓ Submersible Repairs</span>
                  <span>✓ Standby Pumps</span>
                  <span>✓ Emergency Dispatch</span>
                </div>
              </div>

              {/* Memberships block */}
              <div className="mt-6 pt-5 border-t border-slate-100">
                <span className="text-[11px] font-bold uppercase text-slate-400 tracking-wider block mb-3">
                  Recognized & Associated With:
                </span>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center text-xs font-bold text-slate-700">
                  <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                    CREDAI
                  </div>
                  <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                    BAI MEMBER
                  </div>
                  <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                    MEA PUNE
                  </div>
                  <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                    MBVA
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* The 6 Core Pillars from Page 2 */}
        <div className="mt-12 pt-12 border-t border-slate-200">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h3 className="text-2xl sm:text-3xl font-black text-slate-900">
              Why Discerning Clients Choose Us
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 mt-2">
              The 6 foundational principles driving our 4 decades of client satisfaction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {companyInfo.sixPillars.map((pillar, idx) => (
              <div 
                key={pillar.number}
                className="relative rounded-2xl bg-white p-6 border border-slate-200/80 shadow-sm hover:shadow-lg hover:border-red-300 transition-all group"
              >
                <div className="flex items-center justify-between mb-4">
                  {/* Number Badge */}
                  <div className="w-10 h-10 rounded-xl bg-red-600 text-white font-black text-lg flex items-center justify-center shadow-md shadow-red-600/30">
                    {pillar.number}
                  </div>
                  <div className="p-2 rounded-lg bg-slate-50 text-slate-500 group-hover:bg-red-50 group-hover:text-red-600 transition-colors">
                    {pillarIcons[idx]}
                  </div>
                </div>

                <h4 className="text-lg font-bold text-slate-900 group-hover:text-red-600 transition-colors mb-2">
                  {pillar.title}
                </h4>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
