
import React, { useState } from 'react';
import {
  FileText,
  Phone,
  MessageSquare,
  CheckCircle2,
  ShieldCheck,
  ArrowRight,
  Building2,
  Home,
  Package,
  ArrowUpRight,
  Clock,
  Truck,
  BadgeCheck,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { companyInfo } from '../data/companyData';

export default function PriceListPage({ onOpenInquiry }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    firm: '',
    category: 'C.R.I. Pumps & Boosting Systems',
    quantity: 'Wholesale / Bulk Order',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const text = encodeURIComponent(
      `*Wholesale Price List Request - Vishwas Sales*\n\nName: ${formData.name}\nPhone: ${formData.phone}\nFirm/Society: ${formData.firm}\nCategory: ${formData.category}\nOrder Size: ${formData.quantity}`
    );

    window.open(`https://wa.me/919923122448?text=${text}`, '_blank');
    setSubmitted(true);
  };

  const categories = [
    {
      title: 'C.R.I. Water Pumps & Motors',
      brands: 'C.R.I. Pumps',
      description:
        'Submersible, Monoblock, Bare Induction Motors, Sewage Cutter Pumps & Pressure Boosters.',
      tiers: 'Wholesale & Builder Slab Rates',
      icon: 'pump',
    },
    {
      title: 'CPVC & UPVC Plumbing Systems',
      brands: 'Raksha Pipes & Ashirvad by aliaxis',
      description:
        'SDR 11, SDR 13.5 CPVC, UPVC Schedule 40/80, SWR Drainage & Solvent Cements.',
      tiers: 'Contractor Bundle Discount',
      icon: 'pipes',
    },
    {
      title: 'Industrial & Municipal Valves',
      brands: 'Leader Valves Limited',
      description:
        'Gate, Globe, Check, Sluice, Butterfly, and Air Release Valves in all class ratings.',
      tiers: 'Project Rate Card',
      icon: 'valves',
    },
    {
      title: 'Water Storage & Loft Tanks',
      brands: 'Sintex & Raksha',
      description:
        'Triple-layer, 4-layer antimicrobial, underground sumps, and commercial storage capacities.',
      tiers: 'Direct Distributor Pricing',
      icon: 'tanks',
    },
    {
      title: 'Solar Water Heaters',
      brands: 'WAASOL & LAXSO',
      description:
        'ETC and FPC systems, PV solar heating arrays, and commercial institutional systems.',
      tiers: 'Government Subsidy / Institutional Rates',
      icon: 'solar',
    },
    {
      title: 'Municipal Chambers & RCC Pipes',
      brands: 'Thermodrain / Vikrant / Jasper / Topaz',
      description:
        'PMC & PCMC approved CI, RCC & FRP chamber covers and reinforced concrete pipes.',
      tiers: 'EPC & Infrastructure Tenders',
      icon: 'chambers',
    },
  ];

  return (
    <main className="min-h-screen bg-slate-50">

      {/* ================= HERO ================= */}
      <section className="relative isolate overflow-hidden bg-slate-950 text-white">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,rgba(189,16,45,0.25),transparent_50%)]" />

        <div className="absolute -right-20 -top-24 -z-10 h-80 w-80 rounded-full border border-white/5" />
        <div className="absolute -right-10 -top-14 -z-10 h-60 w-60 rounded-full border border-white/5" />

        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-16">

          {/* Breadcrumb */}
          <nav
            aria-label="Breadcrumb"
            className="mb-8 flex items-center gap-2 text-xs font-medium text-slate-400 sm:text-sm"
          >
            <Link
              to="/"
              className="inline-flex items-center gap-1.5 transition hover:text-white"
            >
              <Home size={14} />
              Home
            </Link>

            <ArrowRight size={13} />

            <span className="font-bold text-red-400">Price List</span>
          </nav>

          <div className="grid items-center gap-10 lg:grid-cols-[1.3fr_0.7fr]">

            <div>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-red-400/20 bg-red-500/10 px-4 py-2 text-[10px] font-bold  tracking-[0.16em] text-red-300 sm:text-xs">
                <FileText size={15} />
                Authorized Wholesale & Institutional Rates
              </div>

              <h1 className="max-w-3xl text-3xl font-black leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                Official <span className="text-red-400">Price List</span>
                <br />
                & Wholesale Desk
              </h1>

              <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">
                Get transparent wholesale pricing, contractor discounts,
                and institutional BOQ tender rates for pumps, plumbing
                pipelines, valves, and water storage solutions.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href="#price-categories"
                  className="inline-flex items-center gap-2 rounded-xl bg-red-600 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-red-950/30 transition hover:-translate-y-0.5 hover:bg-red-700"
                >
                  Explore Categories
                  <ArrowRight size={17} />
                </a>

                <a
                  href="#request-price"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  Request Price List
                  <ArrowUpRight size={17} />
                </a>
              </div>

              <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 border-t border-white/10 pt-5">
                <div className="flex items-center gap-2 text-xs text-slate-300">
                  <ShieldCheck size={16} className="text-red-400" />
                  Authorized Products
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-300">
                  <Building2 size={16} className="text-red-400" />
                  Builder & Project Rates
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-300">
                  <Truck size={16} className="text-red-400" />
                  Bulk Order Enquiries
                </div>
              </div>
            </div>

            {/* Hero Side Panel */}
            <div className="hidden lg:block">
              <div className="relative rounded-2xl border border-white/10 bg-white/[0.05] p-6 shadow-2xl backdrop-blur-sm">

                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-500/10 text-red-400">
                  <FileText size={24} />
                </div>

                <p className="mt-6 text-xs font-bold uppercase tracking-[0.16em] text-red-300">
                  Vishwas Sales Corporation
                </p>

                <h2 className="mt-3 text-2xl font-extrabold leading-snug text-white">
                  The right products. The right pricing. The right support.
                </h2>

                <p className="mt-3 text-sm leading-6 text-slate-400">
                  Connect with our team for distributor pricing,
                  project requirements, and bulk procurement enquiries.
                </p>

                <div className="mt-6 space-y-4 border-t border-white/10 pt-5">
                  {[
                    'Wholesale product pricing',
                    'Contractor and builder discounts',
                    'Institutional and project enquiries',
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3 text-sm text-slate-300">
                      <CheckCircle2 size={17} className="shrink-0 text-red-400" />
                      {item}
                    </div>
                  ))}
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= MAIN CONTENT ================= */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12 lg:gap-10">

            {/* Product Categories */}
            <div id="price-categories" className="space-y-6 lg:col-span-7">

              <div className="mb-7">
                <div className="mb-2 inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.16em] text-red-600 sm:text-xs">
                  <span className="h-1.5 w-5 rounded-full bg-red-600" />
                  Wholesale Product Range
                </div>

                <h2 className="text-2xl font-black tracking-tight text-slate-900 sm:text-3xl">
                  Explore Our <span className="text-red-600">Product Categories</span>
                </h2>

                <p className="mt-3 max-w-xl text-sm leading-6 text-slate-500">
                  Select a product category to request its applicable
                  wholesale, contractor, or project pricing.
                </p>
              </div>

              <div className="space-y-4">
                {categories.map((cat, idx) => (
                  <article
                    key={cat.title}
                    className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-red-200 hover:shadow-lg sm:p-6"
                  >
                    <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-red-50 opacity-0 transition-all duration-500 group-hover:scale-125 group-hover:opacity-100" />

                    <div className="relative flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

                      <div className="flex min-w-0 gap-4">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-red-50 text-red-600 ring-1 ring-red-100 transition-colors group-hover:bg-red-600 group-hover:text-white">
                          <Package size={22} />
                        </div>

                        <div className="min-w-0">
                          <div className="mb-2 flex flex-wrap items-center gap-2">
                            <span className="rounded-md bg-red-50 px-2.5 py-1 text-[10px] font-bold text-red-700">
                              {cat.brands}
                            </span>
                          </div>

                          <h3 className="text-base font-extrabold leading-6 text-slate-900">
                            {cat.title}
                          </h3>

                          <p className="mt-2 text-xs leading-6 text-slate-500">
                            {cat.description}
                          </p>

                          <div className="mt-3 flex items-center gap-2 text-[10px] font-bold uppercase tracking-wide text-slate-400">
                            <BadgeCheck size={14} className="text-red-500" />
                            {cat.tiers}
                          </div>
                        </div>
                      </div>

                      <button
                        type="button"
                        onClick={() =>
                          onOpenInquiry?.(`Price List for ${cat.title}`)
                        }
                        className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-slate-900 px-4 py-3 text-xs font-bold text-white transition-all hover:bg-red-600"
                      >
                        Request Price
                        <ArrowRight size={15} />
                      </button>

                    </div>
                  </article>
                ))}
              </div>
            </div>

            {/* Price Request Form */}
            <div id="request-price" className="scroll-mt-28 lg:col-span-5">
              <div className="sticky top-28 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl">

                <div className="bg-slate-950 p-6 text-white sm:p-7">
                  <div className="flex items-center justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-red-600 text-white">
                      <MessageSquare size={21} />
                    </div>

                    <span className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-[10px] font-bold text-emerald-300">
                      <span className="mr-1.5 inline-block h-1.5 w-1.5 rounded-full bg-emerald-400" />
                      WhatsApp Enquiry
                    </span>
                  </div>

                  <p className="mt-5 text-[10px] font-bold uppercase tracking-[0.16em] text-red-400">
                    Fast Price Delivery
                  </p>

                  <h3 className="mt-2 text-xl font-black leading-snug sm:text-2xl">
                    Request Your <span className="text-red-400">Price List</span>
                  </h3>

                  <p className="mt-2 text-xs leading-6 text-slate-400">
                    Share your details and our sales team will assist you
                    with the relevant pricing information.
                  </p>
                </div>

                <div className="p-5 sm:p-7">
                  {submitted ? (
                    <div className="py-8 text-center">
                      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
                        <CheckCircle2 size={34} />
                      </div>

                      <h4 className="mt-5 text-lg font-extrabold text-slate-900">
                        Request Submitted!
                      </h4>

                      <p className="mx-auto mt-2 max-w-xs text-xs leading-6 text-slate-500">
                        Your WhatsApp price list request has been opened.
                        Our sales team can assist you with your enquiry.
                      </p>

                      <button
                        type="button"
                        onClick={() => setSubmitted(false)}
                        className="mt-6 rounded-xl bg-slate-900 px-5 py-3 text-xs font-bold text-white transition hover:bg-red-600"
                      >
                        Request Another Price List
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-4">

                      <div>
                        <label className="mb-1.5 block text-xs font-bold text-slate-700">
                          Your Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="Enter your full name"
                          value={formData.name}
                          onChange={(e) =>
                            setFormData({ ...formData, name: e.target.value })
                          }
                          className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-red-400 focus:bg-white focus:ring-4 focus:ring-red-500/10"
                        />
                      </div>

                      <div>
                        <label className="mb-1.5 block text-xs font-bold text-slate-700">
                          WhatsApp Phone Number *
                        </label>
                        <input
                          type="tel"
                          required
                          placeholder="Enter your phone number"
                          value={formData.phone}
                          onChange={(e) =>
                            setFormData({ ...formData, phone: e.target.value })
                          }
                          className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-red-400 focus:bg-white focus:ring-4 focus:ring-red-500/10"
                        />
                      </div>

                      <div>
                        <label className="mb-1.5 block text-xs font-bold text-slate-700">
                          Firm, Dealer or Society Name
                        </label>
                        <input
                          type="text"
                          placeholder="Enter firm or society name"
                          value={formData.firm}
                          onChange={(e) =>
                            setFormData({ ...formData, firm: e.target.value })
                          }
                          className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-red-400 focus:bg-white focus:ring-4 focus:ring-red-500/10"
                        />
                      </div>

                      <div>
                        <label className="mb-1.5 block text-xs font-bold text-slate-700">
                          Select Product Category
                        </label>
                        <select
                          value={formData.category}
                          onChange={(e) =>
                            setFormData({ ...formData, category: e.target.value })
                          }
                          className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-800 outline-none transition focus:border-red-400 focus:bg-white focus:ring-4 focus:ring-red-500/10"
                        >
                          <option>C.R.I. Pumps & Boosting Systems</option>
                          <option>Raksha Pipes (Plumbing & SWR)</option>
                          <option>Ashirvad by aliaxis (CPVC & Drainage)</option>
                          <option>Leader Valves Limited</option>
                          <option>Sintex Water Tanks</option>
                          <option>WAASOL & LAXSO Solar Water Heaters</option>
                          <option>PMC & PCMC Approved Chamber Covers</option>
                          <option>Complete Wholesale Product Catalog</option>
                        </select>
                      </div>

                      <button
                        type="submit"
                        className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-red-600 to-rose-700 px-4 py-4 text-xs font-extrabold uppercase tracking-wider text-white shadow-lg shadow-red-600/20 transition-all hover:-translate-y-0.5 hover:from-red-700 hover:to-rose-800"
                      >
                        <MessageSquare size={17} />
                        Get Price List on WhatsApp
                        <ArrowRight size={16} />
                      </button>

                      <div className="flex items-center justify-center gap-2 pt-1 text-[10px] text-slate-400">
                        <ShieldCheck size={13} className="text-emerald-600" />
                        Your enquiry details are used to respond to your request.
                      </div>

                      <div className="border-t border-slate-100 pt-4 text-center">
                        <p className="text-[11px] text-slate-400">
                          Prefer to speak with our team?
                        </p>
                        <a
                          href={`tel:${companyInfo.phone1.replace(/\s+/g, '')}`}
                          className="mt-1 inline-flex items-center gap-2 text-sm font-extrabold text-red-600 transition hover:text-red-700"
                        >
                          <Phone size={14} />
                          {companyInfo.phone1}
                        </a>
                      </div>
                    </form>
                  )}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= BOTTOM TRUST STRIP ================= */}
      <section className="border-t border-slate-200 bg-white py-8">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-5 px-4 sm:grid-cols-3 sm:px-6 lg:px-8">

          <div className="flex items-center justify-center gap-3 sm:justify-start">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-50 text-red-600">
              <BadgeCheck size={20} />
            </div>
            <div>
              <p className="text-xs font-extrabold text-slate-900">Authorized Brands</p>
              <p className="mt-0.5 text-[10px] text-slate-500">Reliable product sourcing</p>
            </div>
          </div>

          <div className="flex items-center justify-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-50 text-red-600">
              <Building2 size={20} />
            </div>
            <div>
              <p className="text-xs font-extrabold text-slate-900">Project Enquiries</p>
              <p className="mt-0.5 text-[10px] text-slate-500">Builder & institutional support</p>
            </div>
          </div>

          <div className="flex items-center justify-center gap-3 sm:justify-end">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-50 text-red-600">
              <Clock size={20} />
            </div>
            <div>
              <p className="text-xs font-extrabold text-slate-900">Direct Assistance</p>
              <p className="mt-0.5 text-[10px] text-slate-500">Connect with our sales team</p>
            </div>
          </div>

        </div>
      </section>

    </main>
  );
}
