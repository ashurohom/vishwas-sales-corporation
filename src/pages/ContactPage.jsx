
import React from 'react';
import { Link } from 'react-router-dom';
import ContactSection from '../components/ContactSection';
import {
  MapPin,
  Phone,
  ArrowRight,
  Home,
  Headset,
  ShieldCheck,
} from 'lucide-react';
import { companyInfo } from '../data/companyData';

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      {/* Premium Page Hero */}
      <section className="relative isolate overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-red-950 text-white">
        {/* Background decoration */}
        <div className="pointer-events-none absolute -right-20 -top-24 h-80 w-80 rounded-full border-[45px] border-white/[0.04]" />
        <div className="pointer-events-none absolute -bottom-36 -left-20 h-96 w-96 rounded-full bg-red-600/10 blur-3xl" />
        <div className="pointer-events-none absolute right-1/4 top-1/2 h-40 w-40 rounded-full bg-blue-500/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 pb-16 pt-8 sm:px-6 sm:pb-20 lg:px-8 lg:pb-24">
          {/* Breadcrumb */}
          <nav
            aria-label="Breadcrumb"
            className="mb-12 flex items-center justify-center gap-2 text-xs font-medium text-slate-400 sm:justify-start sm:text-sm"
          >
            <Link
              to="/"
              className="inline-flex items-center gap-1.5 transition hover:text-white"
            >
              <Home className="h-3.5 w-3.5" />
              Home
            </Link>

            <ArrowRight className="h-3.5 w-3.5" />

            <span className="font-bold text-red-400">Contact Us</span>
          </nav>

          <div className="mx-auto max-w-4xl text-center">
            {/* Eyebrow */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-red-400/25 bg-red-500/10 px-4 py-2 text-[10px] font-extrabold uppercase tracking-[0.16em] text-red-300 sm:text-xs">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400 opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-red-500" />
              </span>

              Corporate Showroom & Technical Support
            </div>

            {/* Heading */}
            <h1 className="text-3xl font-black uppercase leading-tight tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
              Let's Get in
              <span className="mt-1 block bg-gradient-to-r from-red-400 via-rose-400 to-orange-300 bg-clip-text text-transparent">
                Touch With You
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base sm:leading-8">
              Connect with Vishwas Sales Corporation for product inquiries,
              pump maintenance, plumbing solutions, and project supply
              quotations. Our team is ready to help with your requirements.
            </p>

            {/* Quick contact actions */}
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href={`tel:${companyInfo.phone1.replace(/[^\d+]/g, '')}`}
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-red-600 px-6 py-3.5 text-sm font-extrabold text-white shadow-lg shadow-red-950/30 transition hover:-translate-y-0.5 hover:bg-red-700 sm:w-auto"
              >
                <Phone className="h-4 w-4" />
                Call Our Team
              </a>

              <a
                href={companyInfo.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/[0.06] px-6 py-3.5 text-sm font-bold text-white backdrop-blur transition hover:border-white/30 hover:bg-white/10 sm:w-auto"
              >
                <MapPin className="h-4 w-4 text-red-300" />
                Visit Our Showroom
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>

            {/* Trust indicators */}
            <div className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-4 border-t border-white/10 pt-7 text-xs font-semibold text-slate-300 sm:gap-x-10 sm:text-sm">
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-red-400" />
                Reliable Product Support
              </div>

              <div className="flex items-center gap-2">
                <Headset className="h-4 w-4 text-red-400" />
                Customer-Focused Service
              </div>

              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-red-400" />
                Hadapsar, Pune
              </div>
            </div>
          </div>
        </div>

        {/* Bottom divider */}
        <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent" />
      </section>

      {/* Contact details and inquiry form */}
      <ContactSection />
    </main>
  );
}
