import React from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import ProductsSection from '../components/ProductsSection';
import { Package, ArrowRight } from 'lucide-react';

export default function ProductsPage({ onOpenInquiry }) {
  const [searchParams] = useSearchParams();
  const queryParam = searchParams.get('q') || '';

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Page Header Banner */}
      <div className="bg-slate-950 text-white py-16 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

          {/* Top Category Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/20 text-red-400 text-xs font-bold uppercase tracking-wider mb-4">
            <Package className="w-3.5 h-3.5" />
            <span>Official Authorized Distribution</span>
          </div>

          {/* Primary Page Heading */}
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white uppercase">
            Authorized Products & Brands
          </h1>

          {/* Subheading / Lead Description */}
          <p className="mt-4 text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Your trusted source for authorized wholesale distribution of
            C.R.I. Pumps, Raksha Pipes, Ashirvad by aliaxis, Leader Valves,
            Huliot, Sintex Tanks, and PMC/PCMC-approved chamber covers.
          </p>

        </div>
      </div>

      {/* Main Products Catalog Section */}
      <ProductsSection
        onOpenInquiry={onOpenInquiry}
        initialSearch={queryParam}
      />

      {/* Quick Links to Catalogues & Price List */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Section Heading */}
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
              Product Resources & Commercial Information
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-2 leading-relaxed">
              Explore technical product documentation or request pricing
              information for your next project.
            </p>
          </div>

          {/* Resource Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* Technical Datasheets Card */}
            <div className="p-6 sm:p-7 rounded-2xl bg-slate-50 border border-slate-200 shadow-sm hover:border-red-400 hover:shadow-lg transition-all flex items-center justify-between gap-4">
              <div>
                <span className="text-xs font-bold text-red-600 uppercase tracking-wider">
                  Technical Datasheets
                </span>

                <h3 className="text-lg font-bold text-slate-900 mt-1 mb-1">
                  Product Catalogues & Sizing Charts
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed">
                  Explore technical brochures and product sizing information
                  for C.R.I., Raksha, and Leader.
                </p>
              </div>

              <Link
                to="/catalogues"
                aria-label="View product catalogues and sizing charts"
                className="shrink-0 p-3 rounded-xl bg-slate-900 text-white hover:bg-red-600 transition-colors shadow-sm"
              >
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Commercial & BOQ Card */}
            <div className="p-6 sm:p-7 rounded-2xl bg-slate-50 border border-slate-200 shadow-sm hover:border-red-400 hover:shadow-lg transition-all flex items-center justify-between gap-4">
              <div>
                <span className="text-xs font-bold text-red-600 uppercase tracking-wider">
                  Commercial & BOQ
                </span>

                <h3 className="text-lg font-bold text-slate-900 mt-1 mb-1">
                  Wholesale Price List & Tenders
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed">
                  Request wholesale pricing, BOQ assistance, and commercial
                  quotations for your projects.
                </p>
              </div>

              <Link
                to="/pricelist"
                aria-label="View wholesale price list and tender information"
                className="shrink-0 p-3 rounded-xl bg-slate-900 text-white hover:bg-red-600 transition-colors shadow-sm"
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