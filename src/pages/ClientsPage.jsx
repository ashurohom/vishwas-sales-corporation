
import React from 'react';
import ClientsSection from '../components/ClientsSection';
import {
  Users,
  Building2,
  Share2,
  CheckCircle2,
  ArrowRight,
  Handshake,
  ShieldCheck,
  Truck,
  Home,
} from 'lucide-react';

import { dealerBenefits } from '../data/companyData';
import { Link } from 'react-router-dom';

export default function ClientsPage({ onOpenInquiry }) {
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
              Clients
            </span>
          </nav>

          {/* Eyebrow */}
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-red-400/30 bg-red-500/15 px-4 py-2 text-xs font-bold tracking-widest text-red-300">
            <Share2 className="h-4 w-4" />
            Clients, Dealers & Business Partners
          </div>

          {/* Heading */}
          <h1 className="text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
            Our Clients & Dealer
            <span className="mt-2 block text-red-500">
              Network
            </span>
          </h1>

          <div className="mx-auto mt-5 h-1 w-20 rounded-full bg-red-500" />

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">
            Building lasting relationships with dealers, builders,
            hospitals, housing societies, and industrial customers
            through dependable product distribution and service support.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <button
              type="button"
              onClick={() =>
                onOpenInquiry?.('Apply to Join Dealer Network')
              }
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-red-600 px-6 py-3.5 text-xs font-extrabold uppercase tracking-wider text-white shadow-lg shadow-red-950/30 transition hover:-translate-y-0.5 hover:bg-red-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-400"
            >
              Become a Dealer
              <ArrowRight className="h-4 w-4" />
            </button>

            <a
              href="#our-clients"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/5 px-6 py-3.5 text-xs font-extrabold uppercase tracking-wider text-white transition hover:border-white/40 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <Users className="h-4 w-4" />
              Explore Our Network
            </a>
          </div>
        </div>
      </section>

      {/* Network Highlights */}
      <section className="relative z-10 mx-auto -mt-1 max-w-7xl px-4 pt-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">

          <div className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-red-50 text-red-600">
              <Handshake className="h-6 w-6" />
            </div>
            <div>
              <h2 className="font-bold text-slate-900">
                Dealer Partnerships
              </h2>
              <p className="mt-1 text-xs leading-5 text-slate-500">
                Supporting distribution partners
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-red-50 text-red-600">
              <Building2 className="h-6 w-6" />
            </div>
            <div>
              <h2 className="font-bold text-slate-900">
                Multiple Industries
              </h2>
              <p className="mt-1 text-xs leading-5 text-slate-500">
                Residential, commercial and industrial
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-red-50 text-red-600">
              <ShieldCheck className="h-6 w-6" />
            </div>
            <div>
              <h2 className="font-bold text-slate-900">
                Product Support
              </h2>
              <p className="mt-1 text-xs leading-5 text-slate-500">
                Product guidance and warranty assistance
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Clients and Sectors */}
      <section id="our-clients" className="scroll-mt-24">
        <ClientsSection onOpenInquiry={onOpenInquiry} />
      </section>

    </main>
  );
}
