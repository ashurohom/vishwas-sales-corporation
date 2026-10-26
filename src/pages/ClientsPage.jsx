import React from 'react';
import ClientsSection from '../components/ClientsSection';
import { Users, Building2, Share2, CheckCircle2, ArrowRight } from 'lucide-react';
import { companyInfo } from '../data/companyData';

export default function ClientsPage({ onOpenInquiry }) {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Page Header */}
      <div className="bg-slate-950 text-white py-16 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/20 text-red-400 text-xs font-bold uppercase tracking-wider mb-4">
            <Share2 className="w-3.5 h-3.5" />
            <span>800+ Dealer Network & Major Real Estate Partners</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white uppercase">
            Our Clients & Dealer Network
          </h1>
          <p className="mt-4 text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Active dealer network of more than 800+ dealers in Pune district and expanding across Maharashtra. 
            Trusted by top builders, hospitals, co-operative housing societies, and industrial leaders.
          </p>
        </div>
      </div>

      {/* Main Clients & Sectors Section */}
      <ClientsSection onOpenInquiry={onOpenInquiry} />

      {/* Dealership Onboarding Program */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-12 rounded-3xl bg-slate-50 border border-slate-200 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl">
              <span className="text-xs font-bold uppercase tracking-wider text-red-600">
                Dealer Expansion Program
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-slate-900 mt-1">
                Grow Your Business with Vishwas Sales Corporation
              </h3>
              <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                Are you a plumbing stockist, hardware retailer, or electrical contractor in Maharashtra? Gain direct access to authorized distribution pricing for C.R.I. Pumps, Raksha Pipes, Ashirvad, Leader Valves, and Sintex.
              </p>

              <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-semibold text-slate-700">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-red-600" />
                  <span>Direct Authorized Margins</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-red-600" />
                  <span>Same-Day / Next-Day Regional Dispatch</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-red-600" />
                  <span>100% Genuine Factory Warranty</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-red-600" />
                  <span>Marketing & In-Store Branding Support</span>
                </div>
              </div>
            </div>

            <div className="shrink-0 w-full lg:w-auto">
              <button
                onClick={() => onOpenInquiry && onOpenInquiry('Apply to Join 800+ Dealer Network')}
                className="w-full lg:w-auto px-8 py-4 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-red-600/30 transition-all"
              >
                Apply for Dealership Onboarding
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
