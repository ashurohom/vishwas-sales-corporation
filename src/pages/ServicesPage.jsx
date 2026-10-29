import React from 'react';
import ServicesSection from '../components/ServicesSection';
import {
  Wrench,
  ArrowRight,
  PhoneCall,
  ShieldCheck,
  CheckCircle2,
} from 'lucide-react';
import { companyInfo } from '../data/companyData';
import { Link } from 'react-router-dom';

export default function ServicesPage({ onOpenInquiry }) {
  return (
    <main className="min-h-screen bg-white">

      {/* Hero Section */}
      <section className="relative isolate overflow-hidden bg-slate-950 text-white">
        {/* Background decoration */}
        <div className="absolute -right-24 -top-24 -z-10 h-80 w-80 rounded-full bg-red-600/20 blur-3xl" />
        <div className="absolute -bottom-32 -left-20 -z-10 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl" />

        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-3xl text-center">

            {/* Eyebrow */}
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-red-400/20 bg-red-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-red-300">
              <Wrench size={15} />
              Our Services
            </div>

            {/* Heading */}
            <h1 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              Reliable Water &amp; Pump
              <span className="mt-2 block text-red-500">
                Service Solutions
              </span>
            </h1>

            {/* Description */}
            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">
              From pump maintenance and motor servicing to dewatering
              solutions and housing society support, we help keep your
              water systems running smoothly.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <button
                type="button"
                onClick={() =>
                  onOpenInquiry?.('Service Enquiry')
                }
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-red-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2 focus:ring-offset-slate-950 sm:w-auto"
              >
                Request a Service
                <ArrowRight size={17} />
              </button>

              <a
                href={`tel:${(companyInfo.phone1 || '').replace(/[^\d+]/g, '')}`}
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10 sm:w-auto"
              >
                <PhoneCall size={16} />
                Call Us
              </a>
            </div>

            {/* Trust indicators */}
            <div className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-xs text-slate-300 sm:text-sm">
              <span className="inline-flex items-center gap-2">
                <CheckCircle2 size={16} className="text-red-400" />
                Professional Support
              </span>

              <span className="inline-flex items-center gap-2">
                <ShieldCheck size={16} className="text-red-400" />
                Quality-Focused Service
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6 lg:px-8">
          <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-2 text-sm text-slate-500"
          >
            <Link
              to="/"
              className="transition hover:text-red-600"
            >
              Home
            </Link>

            <span>/</span>

            <span className="font-medium text-slate-900">
              Services
            </span>
          </nav>
        </div>
      </div>

      {/* Existing Services Component */}
      <ServicesSection onOpenInquiry={onOpenInquiry} />

    </main>
  );
}
