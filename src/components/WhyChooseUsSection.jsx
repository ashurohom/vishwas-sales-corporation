import React from 'react';
import { Award, IndianRupee, Headset, Sparkles, CheckCircle2 } from 'lucide-react';

export default function WhyChooseUsSection({ onOpenInquiry }) {
  const trustCards = [
    {
      id: 'premium-quality',
      icon: Award,
      title: 'Premium Quality',
      description: 'We provide top quality plumbing and pump products.',
      highlights: ['Authorized brand warranties', 'Rigorous ISI & municipal standards', 'High-pressure endurance tested']
    },
    {
      id: 'best-pricing',
      icon: IndianRupee,
      title: 'Best Pricing',
      description: 'Competitive prices with reliable product quality.',
      highlights: ['Direct wholesale tier pricing', 'Institutional contractor rates', 'Transparent GST quotation']
    },
    {
      id: 'customer-support',
      icon: Headset,
      title: 'Customer Support',
      description: 'Dedicated support and quick customer response.',
      highlights: ['Dedicated engineering guidance', 'Rapid on-call mechanic support', 'Standby replacement pump access']
    }
  ];

  return (
    <section className="relative py-14 sm:py-18 lg:py-20 bg-slate-50/70 border-b border-slate-200 overflow-hidden">
      {/* Ambient background lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-rose-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-red-50 border border-red-200/80 text-red-700 text-xs font-black uppercase tracking-wider mb-3.5 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-red-600" />
            <span>WHY CHOOSE US</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight">
            Why Customers Trust <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-rose-600 to-red-700">Vishwas Sales Corporation</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-red-600 via-rose-500 to-amber-500 rounded-full mx-auto mt-4" />
        </div>

        {/* 3 Modern Trust Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {trustCards.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.id}
                className="group relative bg-white rounded-3xl border border-slate-200/90 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgba(220,38,38,0.12)] hover:border-red-400/80 transition-all duration-400 ease-out hover:-translate-y-1.5 p-7 sm:p-8 flex flex-col justify-between overflow-hidden"
              >
                {/* Top Glowing Gradient Accent Line */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-600 via-rose-500 to-amber-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Subtle Ambient Hover Glow in Corner */}
                <div className="absolute -bottom-10 -right-10 w-36 h-36 bg-red-500/5 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500 pointer-events-none" />

                <div>
                  {/* Modern Sculpted Icon Badge */}
                  <div className="relative mb-6">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-red-600 via-red-600 to-rose-700 text-white flex items-center justify-center shadow-md shadow-red-600/25 group-hover:scale-110 group-hover:rotate-2 group-hover:shadow-lg group-hover:shadow-red-600/35 transition-all duration-300">
                      <Icon className="w-7 h-7 sm:w-8 sm:h-8 text-white stroke-[2.2]" />
                    </div>
                  </div>

                  {/* Card Title */}
                  <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight group-hover:text-red-600 transition-colors mb-2.5">
                    {card.title}
                  </h3>

                  {/* Card Main Description (Exact text from design) */}
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal mb-6">
                    {card.description}
                  </p>

                  {/* Micro Highlights */}
                  <div className="space-y-2 pt-4 border-t border-slate-100">
                    {card.highlights.map((point, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-slate-600 font-medium">
                        <CheckCircle2 className="w-3.5 h-3.5 text-red-600 shrink-0" />
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
