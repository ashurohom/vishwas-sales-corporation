import React from 'react';
import { Link } from 'react-router-dom'; 
import { ArrowRight, CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react';

import { brandsList } from "../data/companyData";

export default function DistributorBrandsSection({ onOpenInquiry }) {
  // Quadruple the brand list to create a completely seamless, gap-free infinite loop
  const displayBrands = [...brandsList, ...brandsList, ...brandsList, ...brandsList];

  return (
    <section className="relative bg-slate-50/50 py-12 sm:py-16 border-y border-slate-200/80 overflow-hidden">
      {/* Subtle Ambient Radial Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-red-500/[0.03] via-transparent to-transparent pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading with Smooth Gradient Accent Lines */}
        <div className="flex items-center justify-center gap-3 sm:gap-6 mb-8 sm:mb-10">
          <span className="h-0.5 w-10 sm:w-20 md:w-28 bg-gradient-to-r from-transparent via-red-400 to-red-600 rounded-full shrink-0" />
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight text-center">
            Authorized distributor for{' '}
            <span className="text-red-600">leading brands</span>
          </h2>
          <span className="h-0.5 w-10 sm:w-20 md:w-28 bg-gradient-to-l from-transparent via-red-400 to-red-600 rounded-full shrink-0" />
        </div>

      </div>

      {/* Infinite Logo Marquee Carousel */}
      <div className="relative w-full overflow-hidden py-2">
        {/* Seamless Edge Fade Masks (Soft gradient blend into background) */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-r from-slate-50/90 via-slate-50/50 to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-l from-slate-50/90 via-slate-50/50 to-transparent z-10" />

        <div className="animate-marquee flex items-center gap-3.5 sm:gap-5 pl-4">
          {displayBrands.map((brand, index) => (
            <Link
              key={`${brand.id}-${index}`}
              to={`/products?q=${encodeURIComponent(brand.name)}`}
              className="group relative w-48 sm:w-56 h-22 sm:h-26 bg-white rounded-xl sm:rounded-2xl border border-slate-200/80 hover:border-red-400/80 shadow-xs hover:shadow-lg hover:shadow-red-600/10 transition-all duration-300 flex items-center justify-center p-2.5 sm:p-3 shrink-0 hover:-translate-y-1 cursor-pointer"
              title={brand.name}
            >
              {/* Subtle Hover Ambient Backlight */}
              <div className="absolute inset-0 rounded-xl sm:rounded-2xl bg-gradient-to-b from-red-500/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

              {/* Brand Logo Image (Crisp, High-Visibility Sizing) */}
              <div className="w-full h-full flex items-center justify-center relative z-1">
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="w-auto h-13 sm:h-16 max-h-[82%] max-w-[88%] object-contain filter group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Trust Highlights & Link */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 sm:mt-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-slate-200/80">
          
          {/* Trust Badges */}
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2.5 sm:gap-3 text-xs text-slate-600 font-medium">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-slate-200/80 shadow-xs">
              <span className="flex items-center justify-center w-5 h-5 rounded-full bg-emerald-50 text-emerald-600 shrink-0">
                <CheckCircle2 className="w-3.5 h-3.5" />
              </span>
              <span>100% Genuine Factory Direct Supply</span>
            </span>

            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-slate-200/80 shadow-xs">
              <span className="flex items-center justify-center w-5 h-5 rounded-full bg-red-50 text-red-600 shrink-0">
                <ShieldCheck className="w-3.5 h-3.5" />
              </span>
              <span>Certified ISI Grade Inventory</span>
            </span>

            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-slate-200/80 shadow-xs">
              <span className="flex items-center justify-center w-5 h-5 rounded-full bg-amber-50 text-amber-600 shrink-0">
                <Sparkles className="w-3.5 h-3.5" />
              </span>
              <span>Wholesale Institutional Rates</span>
            </span>
          </div>

          {/* Action Link to Full Product Catalog */}
          <Link
            to="/products"
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-bold text-red-600 hover:text-red-700 hover:bg-red-50/80 transition-all duration-200 group"
          >
            <span>Explore All 50+ Authorized Brands</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>

        </div>
      </div>
    </section>
  );
}