
import React from 'react';
import {
  FileText,
  Download,
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  BookOpen,
  ClipboardList,
  Headset,
  Home,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { catalogues } from '../data/companyData';

export default function CataloguesPage({ onOpenInquiry }) {
  const catalogueList = Array.isArray(catalogues) ? catalogues : [];

  return (
    <main className="min-h-screen bg-slate-50">

      {/* Hero Section */}
      <section className="relative isolate overflow-hidden border-b border-slate-800 bg-gradient-to-br from-slate-950 via-slate-900 to-red-950 py-16 text-white sm:py-20 lg:py-24">

        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-20 -top-24 -z-10 h-72 w-72 rounded-full bg-red-600/10 blur-3xl"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-24 -left-20 -z-10 h-64 w-64 rounded-full bg-blue-500/10 blur-3xl"
        />

        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">

          {/* Breadcrumb */}
          <nav
            aria-label="Breadcrumb"
            className="mb-6 flex items-center justify-center gap-2 text-xs font-medium text-slate-400 sm:text-sm"
          >
            <Link
              to="/"
              className="inline-flex items-center gap-1.5 transition hover:text-white"
            >
              <Home className="h-3.5 w-3.5" />
              Home
            </Link>

            <ArrowRight className="h-3.5 w-3.5" />

            <span className="font-bold text-red-400">
              Catalogues
            </span>
          </nav>

          {/* Eyebrow */}
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-red-400/30 bg-red-500/15 px-4 py-2 text-xs font-bold tracking-widest text-red-300">
            <FileText className="h-4 w-4" />
            Product Documentation & Engineering Datasheets
          </div>

          {/* Heading */}
          <h1 className="text-3xl font-black tracking-tight text-white sm:text-4xl lg:text-5xl">
            Product Catalogues <span className="text-red-500">&amp; Manuals</span>
          </h1>

          <div className="mx-auto mt-5 h-1 w-20 rounded-full bg-red-500" />

          {/* Description */}
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">
            Access technical specifications, pump performance details,
            pipe dimension tables, and product documentation from
            Vishwas Sales Corporation.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href="#catalogue-list"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-red-600 px-6 py-3.5 text-xs font-extrabold tracking-wider text-white shadow-lg shadow-red-950/30 transition hover:-translate-y-0.5 hover:bg-red-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-400"
            >
              <BookOpen className="h-4 w-4" />
              Explore Catalogues
              <ArrowRight className="h-4 w-4" />
            </a>

            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/5 px-6 py-3.5 text-xs font-extrabold tracking-wider text-white transition hover:border-white/40 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <Headset className="h-4 w-4" />
              Contact Our Team
            </Link>
          </div>
        </div>
      </section>

      {/* Catalogue List */}
      <section
        id="catalogue-list"
        className="mx-auto max-w-7xl scroll-mt-24 px-4 py-14 sm:px-6 sm:py-20 lg:px-8"
      >
        <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-red-600">
              Technical Resources
            </span>

            <h2 className="mt-2 text-2xl font-black tracking-tight text-slate-900 sm:text-3xl">
              Find the Right <span className="text-red-600">Documentation</span>
            </h2>

            <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-500">
              Browse available product documentation and request the
              detailed catalogue you need for your project.
            </p>
          </div>

          <div className="inline-flex w-fit items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-3 text-xs font-bold text-slate-600 shadow-sm">
            <ShieldCheck className="h-4 w-4 text-red-600" />
            Product Information & Support
          </div>
        </div>

        {catalogueList.length > 0 ? (
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {catalogueList.map((cat, idx) => (
              <article
                key={cat.title ?? idx}
                className="group relative flex min-h-[340px] flex-col justify-between overflow-hidden rounded-2xl bg-slate-900 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                {/* Full Card Background Image */}
                <img
                  src={cat.image}
                  alt={cat.title}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-slate-950/10 transition-all duration-300 group-hover:via-slate-950/80" />

                {/* Top Content */}
                <div className="relative z-10 p-5">
                  {cat.category && (
                    <span className="inline-flex rounded-md border border-white/20 bg-white/15 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white backdrop-blur-md">
                      {cat.category}
                    </span>
                  )}
                </div>

                {/* Bottom Content */}
                <div className="relative z-10 mt-auto p-5">
                  <p className="mb-2 text-[10px] font-bold uppercase tracking-widest text-red-300">
                    {cat.brand || 'Vishwas Sales Corporation'}
                  </p>

                  <h3 className="text-xl font-black leading-snug text-white">
                    {cat.title}
                  </h3>

                  <p className="mt-2 line-clamp-2 text-xs leading-5 text-slate-200">
                    {cat.desc}
                  </p>

                  {/* Specifications */}
                  {Array.isArray(cat.types) && cat.types.length > 0 && (
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {cat.types.slice(0, 3).map((type, typeIndex) => (
                        <span
                          key={`${type}-${typeIndex}`}
                          className="rounded-md border border-white/15 bg-black/25 px-2 py-1 text-[10px] text-white/90 backdrop-blur-sm"
                        >
                          {type}
                        </span>
                      ))}

                      {cat.types.length > 3 && (
                        <span className="rounded-md bg-white/15 px-2 py-1 text-[10px] font-semibold text-white">
                          +{cat.types.length - 3} more
                        </span>
                      )}
                    </div>
                  )}

                  {/* Action */}
                  <button
                    type="button"
                    onClick={() =>
                      onOpenInquiry?.(`Request Catalogue PDF for ${cat.title}`)
                    }
                    className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-red-600 px-4 py-3 text-xs font-extrabold tracking-wider text-white transition-colors hover:bg-red-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                  >
                    Request Catalogue
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="rounded-2xl border border-slate-200 bg-white px-6 py-12 text-center">
            <FileText className="mx-auto h-10 w-10 text-slate-300" />

            <h3 className="mt-4 text-lg font-bold text-slate-900">
              Catalogues Coming Soon
            </h3>

            <p className="mt-2 text-sm text-slate-500">
              Contact our team for product specifications and technical documentation.
            </p>

            <Link
              to="/contact"
              className="mt-5 inline-flex items-center gap-2 rounded-lg bg-red-600 px-5 py-3 text-xs font-bold uppercase tracking-wider text-white transition hover:bg-red-700"
            >
              Contact Us
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        )}

        {/* Custom Engineering CTA */}
        <section className="relative mt-14 overflow-hidden rounded-3xl bg-gradient-to-br from-slate-950 via-slate-900 to-red-950 p-7 text-white shadow-xl shadow-slate-900/10 sm:p-10 lg:p-12">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full border-[24px] border-white/5"
          />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-16 -left-12 h-48 w-48 rounded-full border-[30px] border-red-500/10"
          />

          <div className="relative flex flex-col items-start gap-7 md:flex-row md:items-center md:justify-between">
            <div className="max-w-2xl">
              <span className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.18em] text-red-300">
                <ClipboardList className="h-4 w-4" />
                Project Engineering Support
              </span>

              <h2 className="mt-3 text-xl font-black leading-snug text-white sm:text-2xl lg:text-3xl">
                Have a Tender BOQ or Builder Project Specification?
              </h2>

              <p className="mt-3 text-sm leading-7 text-slate-300">
                Share your project requirements, piping layout, or pump
                head specifications with our team to discuss suitable
                product options and sizing requirements.
              </p>
            </div>

            <Link
              to="/pricelist"
              className="inline-flex w-full shrink-0 items-center justify-center gap-2 rounded-xl bg-red-600 px-6 py-4 text-xs font-extrabold tracking-wider text-white shadow-lg shadow-red-950/30 transition-all duration-300 hover:-translate-y-0.5 hover:bg-red-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 sm:w-auto"
            >
              Submit Project BOQ
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>

        {/* Contact Information */}
        <div className="mt-8 flex flex-col items-center justify-center gap-2 text-center sm:flex-row">
          <p className="text-sm text-slate-500">
            Need help finding a document?
          </p>

          <Link
            to="/contact"
            className="inline-flex items-center gap-1 text-sm font-bold text-red-600 transition hover:text-red-700"
          >
            Contact Vishwas Sales Corporation
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}
