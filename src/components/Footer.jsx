
import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ArrowUp,
  ShieldCheck,
  ArrowRight,
  ExternalLink,
  Headset,
  Building2,
  ChevronRight,
} from 'lucide-react';
import { companyInfo } from '../data/companyData';

export default function Footer() {
  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Products & Brands', path: '/products' },
    { name: 'Services & Repairs', path: '/services' },
    { name: 'Clients & 800+ Dealers', path: '/clients' },
    { name: 'Price List', path: '/pricelist' },
    { name: "FAQ's", path: '/faqs' },
    { name: 'Contact Us', path: '/contact' },
  ];

  const serviceLinks = [
    'Pump & Motor Repairing',
    'Mechanics On-Call (24/7)',
    'Dewatering Pumps on Rent',
    'Standby Pumps for Societies',
    'Housing Society Energy Audit',
    'Hydro-Pneumatic Booster Setup',
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const phoneHref = (phone) =>
    `tel:${phone.replace(/[^\d+]/g, '')}`;

  return (
    <footer className="relative overflow-hidden border-t-4 border-red-600 bg-slate-950 text-slate-300">
      {/* Decorative background */}
      <div className="pointer-events-none absolute -right-32 top-20 h-80 w-80 rounded-full bg-red-600/[0.06] blur-3xl" />
      <div className="pointer-events-none absolute -left-32 bottom-20 h-80 w-80 rounded-full bg-blue-500/[0.05] blur-3xl" />

      {/* Contact CTA banner */}
      <div className="relative border-b border-white/10 bg-gradient-to-r from-slate-900 via-slate-900 to-red-950">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-4 py-7 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-red-600 text-white shadow-lg shadow-red-950/40">
              <Headset className="h-6 w-6" />
            </div>

            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-red-400">
                Need Help With Your Requirements?
              </p>
              <h3 className="mt-1 text-lg font-black text-white sm:text-xl">
                Let's find the right solution for you.
              </h3>
              <p className="mt-1 text-sm leading-6 text-slate-400">
                Connect with our team for product and service inquiries.
              </p>
            </div>
          </div>

          <Link
            to="/contact"
            className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-red-600 px-5 py-3.5 text-sm font-extrabold text-white shadow-lg shadow-red-950/30 transition duration-200 hover:-translate-y-0.5 hover:bg-red-700"
          >
            Contact Our Team
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>

      {/* Main footer */}
      <div className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-12 lg:gap-9">
          {/* Brand information */}
          <div className="space-y-5 sm:col-span-2 lg:col-span-4">
            <Link
              to="/"
              aria-label="Vishwas Sales Corporation home"
              className="inline-block rounded-lg transition-opacity hover:opacity-90"
            >
              <Logo light={true} imgClassName="h-14 sm:h-16" />
            </Link>

            <p className="max-w-md text-sm leading-7 text-slate-400">
              Your trusted destination for plumbing, pumping, and water
              management solutions in Pune. We support residential,
              commercial, and industrial requirements with product expertise
              and customer-focused service.
            </p>

            {/* Quality highlight */}
            <div className="inline-flex items-start gap-2.5 rounded-xl border border-emerald-800/50 bg-emerald-950/30 px-3.5 py-3">
              <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-emerald-400" />
              <div>
                <p className="text-xs font-extrabold text-emerald-300">
                  Genuine Products
                </p>
                <p className="mt-0.5 text-xs leading-5 text-slate-400">
                  Authorized product availability, subject to brand and stock.
                </p>
              </div>
            </div>

            {/* Memberships */}
            {companyInfo.memberships?.length > 0 && (
              <div className="pt-2">
                <h4 className="mb-3 flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.14em] text-slate-300">
                  <Building2 className="h-4 w-4 text-red-500" />
                  Association Memberships
                </h4>

                <div className="flex flex-wrap gap-2">
                  {companyInfo.memberships.map((membership, index) => (
                    <span
                      key={membership.label ?? index}
                      className="rounded-lg border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs font-medium text-slate-400 transition hover:border-red-500/40 hover:text-white"
                    >
                      {membership.label}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Navigation */}
          <div className="lg:col-span-2">
            <h4 className="mb-5 flex items-center gap-2 text-sm font-extrabold uppercase tracking-[0.12em] text-white">
              <span className="h-5 w-1 rounded-full bg-red-600" />
              Quick Links
            </h4>

            <ul className="space-y-3">
              {quickLinks.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="group inline-flex items-center gap-2 text-sm text-slate-400 transition-colors duration-200 hover:text-red-400"
                  >
                    <ChevronRight className="h-3.5 w-3.5 shrink-0 text-red-600 transition-transform group-hover:translate-x-1" />
                    <span>{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-3">
            <h4 className="mb-5 flex items-center gap-2 text-sm font-extrabold uppercase tracking-[0.12em] text-white">
              <span className="h-5 w-1 rounded-full bg-red-600" />
              Our Services
            </h4>

            <ul className="space-y-3">
              {serviceLinks.map((service) => (
                <li key={service}>
                  <Link
                    to="/services"
                    className="group inline-flex items-start gap-2 text-sm leading-5 text-slate-400 transition-colors duration-200 hover:text-red-400"
                  >
                    <ChevronRight className="mt-0.5 h-3.5 w-3.5 shrink-0 text-red-600 transition-transform group-hover:translate-x-1" />
                    <span>{service}</span>
                  </Link>
                </li>
              ))}
            </ul>

            <Link
              to="/services"
              className="mt-5 inline-flex items-center gap-2 rounded-lg border border-red-500/20 bg-red-500/[0.07] px-3.5 py-2.5 text-xs font-extrabold text-red-400 transition hover:border-red-500/50 hover:bg-red-500/10 hover:text-red-300"
            >
              Explore All Services
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          {/* Contact information */}
          <div className="lg:col-span-3">
            <h4 className="mb-5 flex items-center gap-2 text-sm font-extrabold uppercase tracking-[0.12em] text-white">
              <span className="h-5 w-1 rounded-full bg-red-600" />
              Get in Touch
            </h4>

            <div className="space-y-5">
              {/* Address */}
              <div className="flex items-start gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-red-500/10 text-red-400">
                  <MapPin className="h-4 w-4" />
                </div>
                <div className="min-w-0">
                  <p className="mb-1 text-xs font-bold uppercase tracking-wider text-slate-500">
                    Office Address
                  </p>
                  <p className="text-sm leading-6 text-slate-300">
                    {companyInfo.address}
                  </p>
                  <a
                    href={companyInfo.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-flex items-center gap-1.5 text-xs font-bold text-red-400 transition hover:text-red-300"
                  >
                    Get Directions
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </div>
              </div>

              {/* Phone numbers */}
              <div className="flex items-start gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-red-500/10 text-red-400">
                  <Phone className="h-4 w-4" />
                </div>
                <div className="min-w-0">
                  <p className="mb-1 text-xs font-bold uppercase tracking-wider text-slate-500">
                    Phone Support
                  </p>
                  <div className="flex flex-col gap-1.5">
                    {[companyInfo.phone1, companyInfo.phone2]
                      .filter(Boolean)
                      .map((phone) => (
                        <a
                          key={phone}
                          href={phoneHref(phone)}
                          className="w-fit text-sm font-bold text-slate-200 transition hover:text-red-400"
                        >
                          {phone}
                        </a>
                      ))}
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-red-500/10 text-red-400">
                  <Mail className="h-4 w-4" />
                </div>
                <div className="min-w-0">
                  <p className="mb-1 text-xs font-bold uppercase tracking-wider text-slate-500">
                    Email Inquiries
                  </p>
                  <a
                    href={`mailto:${companyInfo.email}`}
                    className="break-all text-sm text-slate-300 transition hover:text-red-400"
                  >
                    {companyInfo.email}
                  </a>
                </div>
              </div>

              {/* Business hours */}
              <div className="flex items-start gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-red-500/10 text-red-400">
                  <Clock className="h-4 w-4" />
                </div>
                <div className="min-w-0">
                  <p className="mb-1 text-xs font-bold uppercase tracking-wider text-slate-500">
                    Business Hours
                  </p>
                  <p className="text-sm leading-6 text-slate-300">
                    {companyInfo.hours}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright bar */}
      <div className="relative border-t border-white/[0.08] bg-black/20">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-6 text-center sm:px-6 md:flex-row md:text-left lg:px-8">
          <div>
            <p className="text-xs leading-6 text-slate-400">
              © {new Date().getFullYear()}{' '}
              <span className="font-bold text-slate-200">
                Vishwas Sales Corporation.
              </span>{' '}
              All rights reserved.
            </p>
            <p className="mt-1 text-xs text-slate-500">
              Plumbing, pumping & water management solutions in Pune.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <Link
              to="/contact"
              className="text-xs font-semibold text-slate-400 transition hover:text-red-400"
            >
              Contact Us
            </Link>

            <span className="h-4 w-px bg-slate-700" />

            <button
              type="button"
              onClick={scrollToTop}
              className="group inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-2.5 text-xs font-bold text-slate-300 transition hover:border-red-500/40 hover:bg-red-600 hover:text-white"
              aria-label="Scroll to top"
              title="Back to top"
            >
              Back to Top
              <ArrowUp className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-1" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
