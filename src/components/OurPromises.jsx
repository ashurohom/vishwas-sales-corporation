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
      points: ["100% genuine factory warranty", "Tested for endurance & high pressure", "Rigorous pre-dispatch quality checks"]
    },
    {
      title: "Sustainable Products",
      icon: <Leaf className="w-8 h-8 text-emerald-600" />,
      tagline: "Eco-Friendly & Energy-Efficient",
      desc: "Delivering sustainable water management solutions including solar thermal water heaters, low-friction lead-free piping, and energy-audited high-efficiency pumping motors.",
      points: ["Solar water heaters (WAASOL & LAXSO)", "Energy-rated induction motors", "Lead-free & recyclable piping materials"]
    },
    {
      title: "Unsurpassed Services",
      icon: <Sparkles className="w-8 h-8 text-blue-600" />,
      tagline: "40 Years of Service Reliability",
      desc: "Our relationship doesn't end at the sale. Benefit from our in-house motor repair workshop, rapid on-call mechanics, and standby replacement pumps for zero downtime.",
      points: ["Mechanics available on call", "Standby pump replacement for societies", "Comprehensive energy audits"]
    }
  ];

  return (
    <section id="promises" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-100 text-red-700 text-xs font-bold uppercase tracking-wider mb-3">
            <span>Commitment to Excellence</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            OUR PROMISES
          </h2>
          <p className="mt-4 text-base text-slate-600 leading-relaxed">
            For more than 40 years, Vishwas Sales Corporation has been built on three immovable pillars 
            that safeguard your investment and guarantee seamless water infrastructure.
          </p>
        </div>

        {/* 3 Promises Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {promiseCards.map((promise, index) => (
            <div 
              key={index}
              className="relative rounded-3xl bg-slate-50 border border-slate-200/80 p-8 hover:shadow-xl hover:border-red-200 hover:bg-white transition-all group flex flex-col justify-between"
            >
              <div>
                {/* Icon Badge */}
                <div className="w-16 h-16 rounded-2xl bg-white shadow-md border border-slate-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {promise.icon}
                </div>

                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  {promise.tagline}
                </span>

                <h3 className="text-2xl font-black text-slate-900 mt-1 mb-3">
                  {promise.title}
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  {promise.desc}
                </p>

                {/* Bullet Points */}
                <ul className="space-y-2.5 pt-4 border-t border-slate-200/60 mb-6">
                  {promise.points.map((point, i) => (
                    <li key={i} className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-red-600 shrink-0" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button
                onClick={() => onOpenInquiry && onOpenInquiry(`Inquiry regarding ${promise.title}`)}
                className="inline-flex items-center gap-2 text-xs font-bold text-red-600 group-hover:text-red-700 transition-colors"
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
