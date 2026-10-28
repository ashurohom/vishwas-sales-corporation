import React from 'react';
import { ShieldCheck, Leaf, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';
import { companyInfo } from '../data/companyData';

export default function OurPromises({ onOpenInquiry }) {
  const promiseCards = [
    {
      title: "Super Quality",
      icon: <ShieldCheck className="w-8 h-8 text-red-600" />,
      tagline: "Uncompromised Standards",
      desc: "We exclusively partner with top authorized brands including C.R.I. Pumps, Raksha Pipes, Ashirvad, Leader Valves, and Sintex. Every product adheres to stringent ISI and municipal norms.",
      points: [
        "100% genuine factory warranty",
        "Tested for endurance & high pressure",
        "Rigorous pre-dispatch quality checks"
      ],
      bgImage: "/BG_Image/super-quality-bg.jpg",
      accent: {
        borderHover: "hover:border-red-300",
        shadowHover: "hover:shadow-red-500/10",
        check: "text-red-600",
        btn: "text-red-600 hover:text-red-700",
        tagline: "text-red-600"
      }
    },
    {
      title: "Sustainable Products",
      icon: <Leaf className="w-8 h-8 text-emerald-600" />,
      tagline: "Eco-Friendly & Energy-Efficient",
      desc: "Delivering sustainable water management solutions including solar thermal water heaters, low-friction lead-free piping, and energy-audited high-efficiency pumping motors.",
      points: [
        "Solar water heaters (WAASOL & LAXSO)",
        "Energy-rated induction motors",
        "Lead-free & recyclable piping materials"
      ],
      bgImage: "/BG_Image/sustainable-products-bg.jpg",
      accent: {
        borderHover: "hover:border-emerald-300",
        shadowHover: "hover:shadow-emerald-500/10",
        check: "text-emerald-600",
        btn: "text-emerald-600 hover:text-emerald-700",
        tagline: "text-emerald-600"
      }
    },
    {
      title: "Unsurpassed Services",
      icon: <Sparkles className="w-8 h-8 text-blue-600" />,
      tagline: "40 Years of Service Reliability",
      desc: "Our relationship doesn't end at the sale. Benefit from our in-house motor repair workshop, rapid on-call mechanics, and standby replacement pumps for zero downtime.",
      points: [
        "Mechanics available on call",
        "Standby pump replacement for societies",
        "Comprehensive energy audits"
      ],
      bgImage: "/BG_Image/unsurpassed-services-bg.jpg",
      accent: {
        borderHover: "hover:border-blue-300",
        shadowHover: "hover:shadow-blue-500/10",
        check: "text-blue-600",
        btn: "text-blue-600 hover:text-blue-700",
        tagline: "text-blue-600"
      }
    }
  ];

  return (
    <section id="promises" className="relative py-20 bg-slate-50/40 border-b border-slate-200 overflow-hidden">
      
      {/* Subtle Ambient Radial Highlight */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-200/40 via-transparent to-transparent pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-50 border border-red-100 text-red-700 text-xs font-bold uppercase tracking-wider mb-3 shadow-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-red-600 animate-pulse" />
            <span>Commitment to Excellence</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            OUR PROMISES
          </h2>
          <p className="mt-4 text-base text-slate-600 leading-relaxed">
            For more than 40 years, Vishwas Sales Corporation has been built on three immovable pillars[cite: 6] 
            that safeguard your investment and guarantee seamless water infrastructure.
          </p>
        </div>

        {/* 3 Promises Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {promiseCards.map((promise, index) => (
            <div 
              key={index}
              className={`relative rounded-3xl bg-white border border-slate-200/90 p-8 shadow-xs hover:shadow-2xl ${promise.accent.borderHover} ${promise.accent.shadowHover} transition-all duration-300 group flex flex-col justify-between overflow-hidden cursor-default min-h-[480px]`}
            >
              
              {/* ── Background Watermark & Positioning ── */}
              <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <img
                  src={promise.bgImage}
                  alt=""
                  className="absolute inset-0 w-full h-full object-cover object-right opacity-65 group-hover:opacity-85 group-hover:scale-105 transition-all duration-700 ease-out"
                />
                {/* Clean left fade: Keeps text 100% white-backed and legible, while letting right-side graphics shine */}
                <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-t from-white/60 via-transparent to-transparent" />
              </div>

              {/* ── Card Content ──────────────────────── */}
              <div className="relative z-10">
                {/* Icon Badge */}
                <div className="w-16 h-16 rounded-2xl bg-white shadow-md border border-slate-100 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:shadow-lg transition-all duration-300">
                  {promise.icon}
                </div>

                <span className={`text-xs font-bold uppercase tracking-wider ${promise.accent.tagline}`}>
                  {promise.tagline}
                </span>

                <h3 className="text-2xl font-black text-slate-900 mt-1 mb-3">
                  {promise.title}
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  {promise.desc}
                </p>

                {/* Bullet Points */}
                <ul className="space-y-2.5 pt-4 border-t border-slate-200/70 mb-6">
                  {promise.points.map((point, i) => (
                    <li key={i} className="flex items-center gap-2.5 text-xs font-semibold text-slate-700">
                      <CheckCircle2 className={`w-4 h-4 ${promise.accent.check} shrink-0`} />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button */}
              <button
                onClick={() => onOpenInquiry && onOpenInquiry(`Inquiry regarding ${promise.title}`)}
                className={`relative z-10 inline-flex items-center gap-2 text-xs font-bold ${promise.accent.btn} transition-all group-hover:gap-2.5 cursor-pointer mt-4`}
              >
                <span>Learn how we deliver this</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </button>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}