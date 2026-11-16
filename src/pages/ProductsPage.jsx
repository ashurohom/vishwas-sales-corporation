import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import ProductsSection from '../components/ProductsSection';
import { Package, ShieldCheck, Download, ArrowRight, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ProductsPage({ onOpenInquiry }) {
  const [searchParams] = useSearchParams();
  const queryParam = searchParams.get('q') || '';

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Page Header */}
      <div
        className="relative bg-slate-950 text-white py-16 border-b border-slate-800 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/products_hero_bg.png')",
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-slate-950/75"></div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-semibold mb-3 sm:mb-4 shadow-sm">
            <Package className="w-4 h-4" />
            <span>Official Authorized Distribution</span>
          </div>

          {/* Heading */}
          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-[2.6rem] xl:text-[3.25rem] font-black tracking-tight leading-[1.16] text-white">
            Authorized Products & Brands
          </h1>

          {/* Description */}
          <p className="mt-4 text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Direct authorized wholesale distributor for C.R.I. Pumps,
            Raksha Pipes, Ashirvad by aliaxis, Leader Valves, Huliot,
            Sintex Tanks, and municipal PMC/PCMC approved chamber covers.
          </p>

        </div>
      </div>

      {/* Main Products Catalog Section */}

      <ProductsSection onOpenInquiry={onOpenInquiry} />

    </div>
  );
}
