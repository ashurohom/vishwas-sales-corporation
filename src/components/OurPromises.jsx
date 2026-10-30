
import React from 'react';
import {
  ShieldCheck,
  Leaf,
  Sparkles,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';

export default function OurPromises({ onOpenInquiry }) {

  const promiseCards = [
    {
      title: 'Super Quality',
      tagline: 'Uncompromised Standards',
      icon: ShieldCheck,
      image: '/BG_Image/super-quality-bg.jpg',
      description: 'Genuine products from trusted authorized brands.',
      points: [
        'Factory-backed warranty',
        'Quality-tested products',
        'Trusted authorized brands'
      ],
      color: 'text-red-600',
      bg: 'bg-red-50',
      border: 'group-hover:border-red-200'
    },
    {
      title: 'Sustainable Products',
      tagline: 'A Greener Tomorrow',
      icon: Leaf,
      image: '/BG_Image/sustainable-products-bg.jpg',
      description: 'Energy-efficient solutions for responsible water management.',
      points: [
        'Solar water heaters',
        'Energy-efficient motors',
        'Eco-friendly piping'
      ],
      color: 'text-emerald-600',
      bg: 'bg-emerald-50',
      border: 'group-hover:border-emerald-200'
    },
    {
      title: 'Unsurpassed Services',
      tagline: 'Support Beyond Sales',
      icon: Sparkles,
      image: '/BG_Image/unsurpassed-services-bg.jpg',
      description: 'Reliable technical support and after-sales assistance.',
      points: [
        'On-call mechanics',
        'Motor repair services',
        'Standby pump support'
      ],
      color: 'text-blue-600',
      bg: 'bg-blue-50',
      border: 'group-hover:border-blue-200'
    }
  ];

  return (
    <section
      id="promises"
      className="relative py-12 sm:py-14 lg:py-16 bg-slate-50 border-b border-slate-200 overflow-hidden"
    >

      {/* Background Decoration */}
      <div className="absolute -top-32 -right-32 w-80 h-80 bg-red-100/40 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto mb-9 sm:mb-11">

          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-50 border border-red-100 text-red-700 text-[10px] sm:text-xs font-bold uppercase tracking-widest mb-3">
            <ShieldCheck className="w-3.5 h-3.5" />
            Why Choose Us
          </span>

          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Our <span className="text-red-600">Promises</span>
          </h2>

          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
            Over 40 years of trust, quality, and reliable water solutions.
          </p>

          <div className="w-12 h-1 bg-red-600 rounded-full mx-auto mt-4" />
        </div>

        {/* Compact Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">

          {promiseCards.map((promise, index) => {
            const Icon = promise.icon;

            return (
              <div
                key={index}
                className={`group relative bg-white rounded-2xl border border-slate-200 ${promise.border} shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden`}
              >

                {/* Background Image */}
                <div className="absolute inset-0 overflow-hidden">
                  <img
                    src={promise.image}
                    alt=""
                    loading="lazy"
                    className="w-full h-full object-cover object-center opacity-45 group-hover:opacity-60 group-hover:scale-105 transition-all duration-500"
                  />

                  {/* Light overlay for readable content */}
                  <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/75 to-white/25" />

                  {/* Bottom readability overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-white/70 via-transparent to-white/10" />
                </div><div className="absolute inset-0">
                  <img
                    src={promise.image}
                    alt=""
                    loading="lazy"
                    className="w-full h-full object-cover opacity-15 group-hover:opacity-25 group-hover:scale-105 transition-all duration-500"
                  />

                  <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-white/75" />
                </div>

                {/* Content */}
                <div className="relative z-10 p-5 sm:p-6">

                  {/* Icon and Number */}
                  <div className="flex items-center justify-between mb-4">

                    <div className={`w-12 h-12 rounded-xl ${promise.bg} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className={`w-6 h-6 ${promise.color}`} />
                    </div>

                    <span className="text-3xl font-black text-slate-200">
                      0{index + 1}
                    </span>

                  </div>

                  {/* Title */}
                  <span className={`text-[10px] font-bold uppercase tracking-widest ${promise.color}`}>
                    {promise.tagline}
                  </span>

                  <h3 className="text-xl font-extrabold text-slate-900 mt-1 mb-2">
                    {promise.title}
                  </h3>

                  {/* Short Description */}
                  <p className="text-sm text-slate-600 leading-relaxed mb-5 min-h-[42px]">
                    {promise.description}
                  </p>

                  {/* Key Benefits */}
                  <ul className="space-y-2.5 border-t border-slate-200/80 pt-4">

                    {promise.points.map((point, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-slate-700"
                      >
                        <CheckCircle2 className={`w-4 h-4 ${promise.color} shrink-0`} />
                        {point}
                      </li>
                    ))}

                  </ul>

                  {/* Compact CTA */}
                  <button
                    onClick={() =>
                      onOpenInquiry?.(`Inquiry regarding ${promise.title}`)
                    }
                    className={`mt-5 pt-3 border-t border-slate-200/80 w-full flex items-center justify-between text-xs font-bold text-slate-700 hover:${promise.color} transition-colors`}
                  >
                    <span>Know More</span>
                    <ArrowRight className={`w-4 h-4 ${promise.color} group-hover:translate-x-1 transition-transform`} />
                  </button>

                </div>
              </div>
            );
          })}

        </div>

        {/* Bottom Trust Message */}
        <div className="mt-7 flex flex-wrap justify-center items-center gap-x-8 gap-y-3 text-xs sm:text-sm font-semibold text-slate-600">
          <span className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-red-600" />
            40+ Years of Experience
          </span>

          <span className="hidden sm:block w-1 h-1 rounded-full bg-slate-300" />

          <span className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            Authorized Brands
          </span>

          <span className="hidden sm:block w-1 h-1 rounded-full bg-slate-300" />

          <span className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-blue-600" />
            Reliable Support
          </span>
        </div>

      </div>
    </section>
  );
}
