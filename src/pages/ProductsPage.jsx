import React from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import ProductsSection from '../components/ProductsSection';
import { Package, ArrowRight } from 'lucide-react';

export default function ProductsPage({ onOpenInquiry }) {
  const [searchParams] = useSearchParams();
  const queryParam = searchParams.get('q') || '';

  const isBrandSelected = queryParam.trim().length > 0;

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Page Header */}
      <div className="border-b border-slate-800 bg-slate-950 py-12 text-white sm:py-16">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-red-500/20 px-3 py-1 text-xs font-bold uppercase tracking-wider text-red-400">
            <Package className="h-3.5 w-3.5" />
            <span>
              {isBrandSelected
                ? 'Selected Brand'
                : 'Official Authorized Distribution'}
            </span>
          </div>

          <h1 className="text-3xl font-black uppercase tracking-tight text-white sm:text-5xl">
            {isBrandSelected ? queryParam : 'Authorized Products & Brands'}
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-300 sm:text-base">
            {isBrandSelected
              ? `Explore our available products and solutions from ${queryParam}.`
              : 'Your trusted source for authorized wholesale distribution of C.R.I. Pumps, Raksha Pipes, Ashirvad by Aliaxis, Leader Valves, Huliot, Sintex Tanks, and more.'}
          </p>

          {isBrandSelected && (
            <Link
              to="/products"
              className="mt-6 inline-flex items-center gap-2 rounded-xl border border-white/20 px-4 py-2.5 text-sm font-semibold text-white transition hover:border-red-400 hover:bg-white/10"
            >
              View All Brands
              <ArrowRight className="h-4 w-4" />
            </Link>
          )}
        </div>
      </div>

      {/* Product Catalog */}
      <ProductsSection
        onOpenInquiry={onOpenInquiry}
        initialSearch={queryParam}
      />

      {/* Resources: show only when viewing all products */}
      {!isBrandSelected && (
        <section className="border-b border-slate-200 bg-white py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto mb-10 max-w-2xl text-center">
              <h2 className="text-2xl font-black text-slate-900 sm:text-3xl">
                Product Resources & Commercial Information
              </h2>

              <p className="mt-2 text-xs leading-relaxed text-slate-500 sm:text-sm">
                Explore technical documentation or request pricing information
                for your next project.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div className="flex items-center justify-between gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm transition-all hover:border-red-400 hover:shadow-lg sm:p-7">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-red-600">
                    Technical Datasheets
                  </span>

                  <h3 className="mb-1 mt-1 text-lg font-bold text-slate-900">
                    Product Catalogues & Sizing Charts
                  </h3>

                  <p className="text-xs leading-relaxed text-slate-600">
                    Explore technical brochures and sizing information for
                    C.R.I., Raksha, and Leader.
                  </p>
                </div>

                <Link
                  to="/catalogues"
                  aria-label="View product catalogues and sizing charts"
                  className="shrink-0 rounded-xl bg-slate-900 p-3 text-white shadow-sm transition-colors hover:bg-red-600"
                >
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>

              <div className="flex items-center justify-between gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm transition-all hover:border-red-400 hover:shadow-lg sm:p-7">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-red-600">
                    Commercial & BOQ
                  </span>

                  <h3 className="mb-1 mt-1 text-lg font-bold text-slate-900">
                    Wholesale Price List & Tenders
                  </h3>

                  <p className="text-xs leading-relaxed text-slate-600">
                    Request wholesale pricing, BOQ assistance, and commercial
                    quotations for your projects.
                  </p>
                </div>

                <Link
                  to="/pricelist"
                  aria-label="View wholesale price list and tender information"
                  className="shrink-0 rounded-xl bg-slate-900 p-3 text-white shadow-sm transition-colors hover:bg-red-600"
                >
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
