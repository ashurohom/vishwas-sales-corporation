
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
} from 'lucide-react';

import { dealerBenefits } from '../data/companyData';

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
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-red-400/30 bg-red-500/15 px-4 py-2 text-xs font-bold uppercase tracking-widest text-red-300">
            <Share2 className="h-4 w-4" />
            Clients, Dealers & Business Partners
          </div>

          <h1 className="text-3xl font-black uppercase tracking-tight text-white sm:text-4xl lg:text-5xl">
            Our Clients & Dealer Network
          </h1>

          <div className="mx-auto mt-5 h-1 w-20 rounded-full bg-red-500" />

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">
            Building lasting relationships with dealers, builders,
            hospitals, housing societies, and industrial customers
            through dependable product distribution and service support.
          </p>

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

      {/* Dealer Onboarding */}
      <section className="border-t border-slate-200 bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative isolate overflow-hidden rounded-3xl bg-gradient-to-br from-slate-950 via-slate-900 to-red-950 p-7 text-white shadow-xl shadow-slate-900/10 sm:p-10 lg:p-12">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-12 -top-12 -z-10 h-48 w-48 rounded-full border-[28px] border-white/5"
            />

            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-20 -left-10 -z-10 h-56 w-56 rounded-full border-[32px] border-red-500/10"
            />

            <div className="relative grid grid-cols-1 items-center gap-10 lg:grid-cols-[1fr_auto] lg:gap-12">
              <div className="max-w-3xl">
                <span className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.18em] text-red-300">
                  <Handshake className="h-4 w-4" />
                  Dealer Expansion Program
                </span>

                <h2 className="mt-4 text-2xl font-black leading-tight text-white sm:text-3xl lg:text-4xl">
                  Grow Your Business with Vishwas Sales Corporation
                </h2>

                <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">
                  Are you a plumbing stockist, hardware retailer, or
                  electrical contractor? Contact our team to discuss
                  dealership opportunities and product distribution
                  requirements in Maharashtra.
                </p>

                <div className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {dealerBenefits.map((benefit) => (
                    <div
                      key={benefit}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-red-400" />
                      <span className="text-sm leading-6 text-slate-200">
                        {benefit}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="w-full rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm lg:w-72">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-600 text-white shadow-lg shadow-red-950/30">
                  <Truck className="h-6 w-6" />
                </div>

                <h3 className="mt-5 text-xl font-black text-white">
                  Become a Distribution Partner
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-300">
                  Tell us about your business and the products you need.
                  Our team can discuss the next steps with you.
                </p>

                <button
                  type="button"
                  onClick={() =>
                    onOpenInquiry?.(
                      'Apply for Dealer Onboarding'
                    )
                  }
                  className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-red-600 px-5 py-3.5 text-xs font-extrabold uppercase tracking-wider text-white transition hover:bg-red-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
                >
                  Apply for Dealership
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
