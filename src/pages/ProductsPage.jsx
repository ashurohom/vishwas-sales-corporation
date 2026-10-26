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
      <div className="bg-slate-950 text-white py-16 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/20 text-red-400 text-xs font-bold uppercase tracking-wider mb-4">
            <Package className="w-3.5 h-3.5" />
            <span>Official Authorized Distribution</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white uppercase">
            Authorized Products & Brands
          </h1>
          <p className="mt-4 text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Direct authorized wholesale distributor for C.R.I. Pumps, Raksha Pipes, Ashirvad by aliaxis, 
            Leader Valves, Huliot, Sintex Tanks, and municipal PMC/PCMC approved chamber covers.
          </p>
        </div>
      </div>

      {/* Main Products Catalog Section */}
      <ProductsSection onOpenInquiry={onOpenInquiry} />

      {/* Quick Links to Catalogues & PriceList */}
      <section className="py-14 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-7 rounded-3xl bg-slate-50 border border-slate-200 flex items-center justify-between">
              <div>
                <span className="text-xs font-bold text-red-600 uppercase">Technical Datasheets</span>
                <h4 className="text-lg font-bold text-slate-900 mt-1">Product Catalogues & Sizing Charts</h4>
                <p className="text-xs text-slate-500 mt-1">Download technical brochures for C.R.I., Raksha & Leader.</p>
              </div>
              <Link 
                to="/catalogues"
                className="shrink-0 p-3 rounded-xl bg-slate-900 text-white hover:bg-red-600 transition-colors"
              >
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="p-7 rounded-3xl bg-slate-50 border border-slate-200 flex items-center justify-between">
              <div>
                <span className="text-xs font-bold text-red-600 uppercase">Commercial & BOQ</span>
                <h4 className="text-lg font-bold text-slate-900 mt-1">Wholesale Price List & Tenders</h4>
                <p className="text-xs text-slate-500 mt-1">Request institutional tiered pricing for contractors.</p>
              </div>
              <Link 
                to="/pricelist"
                className="shrink-0 p-3 rounded-xl bg-slate-900 text-white hover:bg-red-600 transition-colors"
              >
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
