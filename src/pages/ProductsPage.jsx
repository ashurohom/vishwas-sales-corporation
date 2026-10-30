import React from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import ProductsSection from '../components/ProductsSection';
import {
  Package,
  ArrowRight,
  ArrowUpRight,
  FileText,
  ClipboardList,
  ShieldCheck,
  Truck,
  Sparkles,
  Home, // Added for breadcrumb
} from 'lucide-react';

export default function ProductsPage({ onOpenInquiry }) {
  const [searchParams] = useSearchParams();
  const queryParam = searchParams.get('q') || '';

  const isBrandSelected = queryParam.trim().length > 0;

  return (
    <main className="min-h-screen bg-slate-50">

      {/* ================= PAGE HERO ================= */}
      <section className="relative isolate overflow-hidden bg-slate-950 text-white">
        {/* Background Effects */}
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,rgba(189,16,45,0.22),transparent_50%)]" />

        <div className="absolute -right-24 -top-24 -z-10 h-72 w-72 rounded-full border border-white/5 sm:h-96 sm:w-96" />
        <div className="absolute -right-12 -top-12 -z-10 h-56 w-56 rounded-full border border-white/5 sm:h-72 sm:w-72" />

        <div className="mx-auto max-w-7xl px-4 py-7 sm:px-6 sm:py-9 lg:px-8 lg:py-11">

          {/* Breadcrumb */}
          {/* Breadcrumb */}
          <nav
            aria-label="Breadcrumb"
            className="mb-6 flex items-center justify-center gap-2 text-xs font-medium text-slate-400 sm:justify-start sm:text-sm"
          >
            <Link
              to="/"
              className="inline-flex items-center gap-1.5 transition hover:text-white"
            >
              <Home className="h-3.5 w-3.5" />
              Home
            </Link>

            <ArrowRight className="h-3.5 w-3.5" />

            <span className={`font-bold ${isBrandSelected ? 'text-slate-300' : 'text-red-400'}`}>
              Products
            </span>

            {isBrandSelected && (
              <>
                <ArrowRight className="h-3.5 w-3.5" />
                <span className="max-w-[150px] truncate font-bold text-red-400">
                  {queryParam}
                </span>
              </>
            )}
          </nav>

          <div className="grid items-center gap-7 lg:grid-cols-[1.3fr_0.7fr]">

            {/* Hero Content */}
            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-red-400/20 bg-red-500/10 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.18em] text-red-300 sm:text-xs">
                <Sparkles size={14} />
                {isBrandSelected
                  ? 'Explore Selected Brand'
                  : 'Authorized Distribution Partner'}
              </div>

              <h1 className="max-w-3xl text-3xl font-black leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                {isBrandSelected ? (
                  <>
                    Explore{' '}
                    <span className="text-red-400">
                      {queryParam}
                    </span>
                  </>
                ) : (
                  <>
                    Quality Products.
                    <br />
                    <span className="text-red-400">
                      Trusted Brands.
                    </span>
                  </>
                )}
              </h1>

              <p className="mt-4 max-w-2xl text-sm leading-6 text-slate-300 sm:text-base sm:leading-7">
                {isBrandSelected
                  ? `Discover available products and solutions from ${queryParam}. Contact our team for product specifications, availability, and quotations.`
                  : 'Explore our range of pumps, pipes, valves, water tanks, and plumbing solutions from trusted manufacturers for residential, commercial, and industrial projects.'}
              </p>

              {/* Hero Buttons */}
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <a
                  href="#product-catalog"
                  className="inline-flex items-center gap-2 rounded-xl bg-red-600 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-red-950/30 transition-all hover:-translate-y-0.5 hover:bg-red-700"
                >
                  Explore Products
                  <ArrowRight size={17} />
                </a>

                {isBrandSelected ? (
                  <Link
                    to="/products"
                    className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition-all hover:border-white/30 hover:bg-white/10"
                  >
                    View All Brands
                  </Link>
                ) : (
                  <button
                    type="button"
                    onClick={() =>
                      onOpenInquiry?.('Product Enquiry')
                    }
                    className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition-all hover:border-white/30 hover:bg-white/10"
                  >
                    Request a Quote
                    <ArrowUpRight size={17} />
                  </button>
                )}
              </div>

              {/* Trust Indicators */}
              <div className="mt-7 flex flex-wrap gap-x-5 gap-y-3 border-t border-white/10 pt-4">
                <div className="flex items-center gap-2 text-xs text-slate-300">
                  <ShieldCheck size={15} className="text-red-400" />
                  Authorized Brands
                </div>

                <div className="flex items-center gap-2 text-xs text-slate-300">
                  <Package size={15} className="text-red-400" />
                  Wide Product Range
                </div>

                <div className="flex items-center gap-2 text-xs text-slate-300">
                  <Truck size={15} className="text-red-400" />
                  Project Supply Support
                </div>
              </div>
            </div>

            {/* Hero Information Panel */}
            <div className="hidden lg:block">
              <div className="relative rounded-2xl border border-white/10 bg-white/[0.04] p-5 shadow-xl backdrop-blur-sm xl:p-6">

                <div className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-xl bg-red-500/10 text-red-400">
                  <Package size={21} />
                </div>

                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-400">
                  Vishwas Sales Corporation
                </p>

                <h2 className="mt-10 text-xl font-extrabold leading-snug text-white xl:text-2xl">
                  The right products for your next project.
                </h2>

                <p className="mt-2 text-sm leading-6 text-slate-400">
                  From product selection to quotations, our team helps
                  you find suitable solutions for your requirements.
                </p>

                <div className="mt-5 space-y-2">
                  {[
                    'Pumps and motor solutions',
                    'Pipes, fittings and valves',
                    'Water storage and plumbing',
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 rounded-lg border border-white/5 bg-white/[0.03] px-3 py-2.5"
                    >
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-red-500/15 text-red-400">
                        <ShieldCheck size={13} />
                      </span>

                      <span className="text-xs font-medium text-slate-200">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-4 rounded-xl bg-red-600 p-3.5">
                  <p className="text-sm font-bold text-white">
                    Need help choosing a product?
                  </p>

                  <p className="mt-1 text-xs leading-5 text-red-100">
                    Contact our team for product information and pricing.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= PRODUCT CATALOG ================= */}
      <section id="product-catalog" className="scroll-mt-20">
        <ProductsSection
          onOpenInquiry={onOpenInquiry}
          initialSearch={queryParam}
        />
      </section>

      {/* ================= PRODUCT RESOURCES ================= */}
      {!isBrandSelected && (
        <section className="border-t border-slate-200 bg-white py-8 sm:py-10">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

            {/* Section Heading */}
            <div className="mb-6 flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
              <div>
                <div className="mb-2 inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.16em] text-red-600 sm:text-xs">
                  <span className="h-1.5 w-5 rounded-full bg-red-600" />
                  Helpful Resources
                </div>

                <h2 className="text-2xl font-black tracking-tight text-slate-900 sm:text-3xl">
                  Product Resources & Commercial Information
                </h2>

                <p className="mt-2 max-w-2xl text-xs leading-6 text-slate-500 sm:text-sm">
                  Find technical information, product catalogues, and
                  commercial assistance for your next project.
                </p>
              </div>

              <span className="w-fit rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-[10px] font-semibold text-slate-600 sm:text-xs">
                Project Support
              </span>
            </div>

            {/* Resource Cards */}
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">

              <article className="group relative min-h-[260px] overflow-hidden rounded-xl border border-red-100 bg-gradient-to-br from-white via-red-50 to-rose-100 p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-red-300 hover:shadow-lg sm:min-h-[280px] sm:p-6">

                <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-red-200/50 transition-transform duration-500 group-hover:scale-125" />

                <div className="relative flex items-start justify-between gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/95 text-red-600 shadow-sm ring-1 ring-slate-200">
                    <FileText size={21} />
                  </div>

                  <span className="rounded-full border border-slate-200 bg-white/95 px-3 py-1 text-[9px] font-bold uppercase tracking-wider text-slate-500">
                    Technical
                  </span>
                </div>

                <div className="relative mt-5">
                  <h3 className="text-lg font-extrabold text-slate-900 sm:text-xl">
                    Product Catalogues
                  </h3>

                  <p className="mt-2 max-w-md text-xs leading-6 text-slate-700 sm:text-sm">
                    Explore product catalogues, technical brochures,
                    and sizing information to identify suitable solutions.
                  </p>

                  <Link
                    to="/catalogues"
                    className="mt-4 inline-flex items-center gap-2 rounded-lg bg-slate-900 px-4 py-2.5 text-xs font-bold text-white transition-all hover:bg-red-600 sm:text-sm"
                  >
                    Explore Catalogues
                    <ArrowRight size={15} />
                  </Link>
                </div>
              </article>

              <article className="group relative min-h-[260px] overflow-hidden rounded-xl border border-blue-100 bg-gradient-to-br from-white via-sky-50 to-blue-100 p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-300 hover:shadow-lg sm:min-h-[280px] sm:p-6">

                <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-blue-200/50 transition-transform duration-500 group-hover:scale-125" />

                <div className="relative flex items-start justify-between gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/95 text-red-600 shadow-sm ring-1 ring-slate-200">
                    <ClipboardList size={21} />
                  </div>

                  <span className="rounded-full border border-slate-200 bg-white/95 px-3 py-1 text-[9px] font-bold uppercase tracking-wider text-slate-500">
                    Commercial
                  </span>
                </div>

                <div className="relative mt-5">
                  <h3 className="text-lg font-extrabold text-slate-900 sm:text-xl">
                    Pricing & Quotations
                  </h3>

                  <p className="mt-2 max-w-md text-xs leading-6 text-slate-700 sm:text-sm">
                    Request wholesale pricing, bill of quantities
                    assistance, and commercial quotations for your project.
                  </p>

                  <Link
                    to="/pricelist"
                    className="mt-4 inline-flex items-center gap-2 rounded-lg bg-slate-900 px-4 py-2.5 text-xs font-bold text-white transition-all hover:bg-red-600 sm:text-sm"
                  >
                    View Pricing Resources
                    <ArrowRight size={15} />
                  </Link>
                </div>
              </article>

            </div>

            {/* Bottom CTA */}


          </div>
        </section>
      )}

    </main>
  );
}
