import React, { useState } from 'react';
import { FileText, Phone, MessageSquare, CheckCircle2, ShieldCheck, ArrowRight, Building2 } from 'lucide-react';
import { companyInfo } from '../data/companyData';

export default function PriceListPage({ onOpenInquiry }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    firm: '',
    category: 'C.R.I. Pumps & Boosting Systems',
    quantity: 'Wholesale / Bulk Order'
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
      title: "C.R.I. Water Pumps & Motors",
      brands: "C.R.I. Pumps",
      description: "Submersible, Monoblock, Bare Induction Motors, Sewage Cutter Pumps & Pressure Boosters.",
      tiers: "Wholesale & Builder Slab Rates"
    },
    {
      title: "CPVC & UPVC Plumbing Systems",
      brands: "Raksha Pipes & Ashirvad by aliaxis",
      description: "SDR 11, SDR 13.5 CPVC, UPVC Schedule 40/80, SWR Drainage & Solvent Cements.",
      tiers: "Contractor Bundle Discount"
    },
    {
      title: "Industrial & Municipal Valves",
      brands: "Leader Valves Limited",
      description: "Gate, Globe, Check, Sluice, Butterfly, and Air Release Valves in all class ratings.",
      tiers: "Project Rate Card"
    },
    {
      title: "Water Storage & Loft Tanks",
      brands: "Sintex & Raksha",
      description: "Triple-layer, 4-layer antimicrobial, underground sumps, and commercial storage capacities.",
      tiers: "Direct Distributor Pricing"
    },
    {
      title: "Solar Water Heaters",
      brands: "WAASOL & LAXSO",
      description: "ETC and FPC systems, PV solar heating arrays, and commercial institutional systems.",
      tiers: "Government Subsidy / Institutional Rates"
    },
    {
      title: "Municipal Chambers & RCC Pipes",
      brands: "Thermodrain / Vikrant / Jasper / Topaz",
      description: "PMC & PCMC approved CI, RCC & FRP chamber covers and reinforced concrete pipes.",
      tiers: "EPC & Infrastructure Tenders"
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Page Header */}
      <div className="bg-slate-950 text-white py-16 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/20 text-red-400 text-xs font-bold uppercase tracking-wider mb-4">
            <FileText className="w-3.5 h-3.5" />
            <span>Authorized Wholesale & Institutional Rates</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white uppercase">
            Official Price List Desk
          </h1>
          <p className="mt-4 text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Get transparent wholesale pricing, contractor discounts, and institutional BOQ tender rates 
            for pumps, plumbing pipelines, valves, and water storage.
          </p>
        </div>
      </div>

      <div className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Categories List */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-red-600">
                Direct Authorized Margins
              </span>
              <h2 className="text-2xl font-black text-slate-900 mt-1">
                Product Categories Available for Wholesale Rate Card
              </h2>
              <p className="text-xs text-slate-500 mt-1">
                Tiered pricing structures for hardware dealers, MEP contractors, and housing societies.
              </p>
            </div>

            <div className="space-y-4">
              {categories.map((cat, idx) => (
                <div 
                  key={idx}
                  className="bg-white p-6 rounded-2xl border border-slate-200/90 shadow-sm hover:border-red-300 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                >
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-bold px-2 py-0.5 rounded bg-red-50 text-red-700">
                        {cat.brands}
                      </span>
                      <span className="text-[11px] font-bold text-slate-400">
                        {cat.tiers}
                      </span>
                    </div>
                    <h3 className="text-base font-extrabold text-slate-900">
                      {cat.title}
                    </h3>
                    <p className="text-xs text-slate-500 mt-1">
                      {cat.description}
                    </p>
                  </div>

                  <button
                    onClick={() => onOpenInquiry && onOpenInquiry(`Price List for ${cat.title}`)}
                    className="shrink-0 px-4 py-2 rounded-xl bg-slate-900 hover:bg-red-600 text-white text-xs font-bold whitespace-nowrap transition-colors"
                  >
                    Request Price List
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Instant Price List Request Form */}
          <div className="lg:col-span-5">
            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-xl sticky top-28">
              <div className="mb-6">
                <span className="text-xs font-bold uppercase text-red-600 tracking-wider">
                  Fast Price Delivery
                </span>
                <h3 className="text-xl font-black text-slate-900 mt-1">
                  Request Instant Price List PDF
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Enter your details to receive the current distributor price schedule via WhatsApp.
                </p>
              </div>

              {submitted ? (
                <div className="text-center py-8">
                  <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto mb-3" />
                  <h4 className="text-base font-bold text-slate-900">Request Sent Successfully</h4>
                  <p className="text-xs text-slate-600 mt-1">
                    Your price list request has been forwarded to our sales dispatch team on WhatsApp.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 px-5 py-2 rounded-xl bg-slate-900 text-white text-xs font-bold"
                  >
                    Request Another Category
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Mahesh Kadam"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-red-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">
                      WhatsApp Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 99231 22448"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-red-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">
                      Firm, Dealer or Society Name
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Pune Builders Consortium"
                      value={formData.firm}
                      onChange={(e) => setFormData({ ...formData, firm: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-red-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">
                      Select Product Category
                    </label>
                    <select
                      value={formData.category}
                      onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-red-500"
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
                    className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-gradient-to-r from-red-600 to-rose-700 hover:from-red-700 hover:to-rose-800 text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-red-600/30 transition-all"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Get Price List on WhatsApp</span>
                  </button>

                  <div className="pt-2 text-center">
                    <span className="text-[11px] text-slate-400">Direct sales line:</span>
                    <a 
                      href={`tel:${companyInfo.phone1.replace(/\s+/g, '')}`}
                      className="block text-xs font-bold text-red-600 hover:underline"
                    >
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
  );
}
