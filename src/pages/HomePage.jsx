import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import BreakdownHotlineBar from '../components/BreakdownHotlineBar';
import AuthorizedBrandsSection from '../components/AuthorizedBrandsSection';
import DistributorBrandsSection from '../components/DistributorBrandsSection';
import LatestProductsSection from '../components/LatestProductsSection';
import LegacySection from '../components/LegacySection';
import OurPromises from '../components/OurPromises';
import { 
  Wrench, 
  Settings, 
  RefreshCw, 
  Zap, 
  ArrowRight, 
  CheckCircle2, 
  Building2, 
  Sparkles,
  PhoneCall,
  ShieldCheck,
  FileText
} from 'lucide-react';
import { companyInfo } from '../data/companyData';

export default function HomePage({ onOpenInquiry }) {
  return (
    <div className="bg-slate-50">
      {/* 1. Hero Showcase (Dark Background) */}
      <Hero onOpenInquiry={onOpenInquiry} />

      {/* Floating Breakdown Technical Hotline Bar (Bridging Hero & Next Section) */}
      <BreakdownHotlineBar onOpenInquiry={onOpenInquiry} />

      {/* 2. Core Capabilities & 4 Key Metrics (41+ Years Experience, 500+ Happy Customers, 1000+ Products, 50+ Brands) */}
      <AuthorizedBrandsSection onOpenInquiry={onOpenInquiry} />

      {/* 3. Official Brand Distribution Marquee (Placed directly after 41+ Stats) */}
      <DistributorBrandsSection onOpenInquiry={onOpenInquiry} />

      {/* 4. Our Latest Products Showcase */}
      <LatestProductsSection onOpenInquiry={onOpenInquiry} />

      {/* 5. 41 Years of Legacy & Corporate Introduction */}
      <LegacySection onOpenInquiry={onOpenInquiry} />

      {/* 4. Our Promises (Page 1 of brochure) */}
      <OurPromises onOpenInquiry={onOpenInquiry} />

      {/* 3. Featured Services Overview with Link to Separate Services Page */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-100 text-red-700 text-xs font-bold uppercase tracking-wider mb-2">
                <span>Expert Technical Solutions</span>
              </div>
              <h2 className="text-3xl font-black text-slate-900 tracking-tight">
                Our Comprehensive Services
              </h2>
              <p className="text-sm text-slate-600 mt-1">
                40 years of precision motor repairing, on-call mechanics, and society energy audits.
              </p>
            </div>

            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-sm font-bold text-red-600 hover:text-red-700 transition-colors"
            >
              <span>Explore All Services & Pricing</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-7 rounded-3xl border border-slate-200 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-red-50 text-red-600 flex items-center justify-center mb-4">
                  <Wrench className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  Pump & Motor Repairing
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Submersible, open-well, centrifugal monoblock, bare induction motors, starters, and electronic control panels.
                </p>
              </div>
              <Link 
                to="/services" 
                className="mt-6 inline-flex items-center gap-1.5 text-xs font-bold text-red-600"
              >
                <span>Read details</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="bg-white p-7 rounded-3xl border border-slate-200 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center mb-4">
                  <RefreshCw className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  Dewatering Pumps on Rent
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Heavy mud and wastewater pumps for basement rainwater flooding and construction excavations.
                </p>
              </div>
              <Link 
                to="/services" 
                className="mt-6 inline-flex items-center gap-1.5 text-xs font-bold text-red-600"
              >
                <span>Read details</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="bg-white p-7 rounded-3xl border border-slate-200 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  Society Energy Audit
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Professional diagnostic audit to optimize pump head pressure and reduce monthly society electricity bills by up to 30%.
                </p>
              </div>
              <Link 
                to="/services" 
                className="mt-6 inline-flex items-center gap-1.5 text-xs font-bold text-red-600"
              >
                <span>Read details</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Products & Authorized Brands Teaser */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-100 text-red-700 text-xs font-bold uppercase tracking-wider mb-2">
                <span>Direct Authorized Distributor</span>
              </div>
              <h2 className="text-3xl font-black text-slate-900 tracking-tight">
                Top Authorized Brands
              </h2>
              <p className="text-sm text-slate-600 mt-1">
                India's finest pumps, pipes, valves, solar heaters, and municipal infrastructure supplies.
              </p>
            </div>

            <Link
              to="/products"
              className="inline-flex items-center gap-2 text-sm font-bold text-red-600 hover:text-red-700 transition-colors"
            >
              <span>View Complete Product Catalog</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { name: "C.R.I. Pumps", tag: "Agricultural & Industrial" },
              { name: "Raksha Pipes", tag: "CPVC, UPVC & SWR" },
              { name: "Ashirvad", tag: "by aliaxis" },
              { name: "Leader Valves", tag: "Industrial Flow Control" },
              { name: "Sintex Tanks", tag: "Antibacterial Storage" },
              { name: "WAASOL Solar", tag: "Thermal & PV Heaters" }
            ].map((b, i) => (
              <Link
                key={i}
                to="/products"
                className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-red-400 hover:shadow-md transition-all text-center group"
              >
                <div className="text-sm font-black text-slate-900 group-hover:text-red-600 transition-colors">
                  {b.name}
                </div>
                <div className="text-[11px] text-slate-500 mt-1">
                  {b.tag}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Clients & Network Teaser */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/20 text-red-400 text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>800+ Active Dealers & 100+ Leading Real Estate Developers</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Trusted by Builders, Hospitals & Industries Across Maharashtra
          </h2>

          <p className="mt-4 text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Associated with Serum Institute of India, Magarpatta City, Godrej Properties, Shapoorji Pallonji, 
            L&T Construction, Thermax, Bharat Forge, and thousands of co-operative housing societies.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              to="/clients"
              className="px-6 py-3 rounded-xl bg-red-600 hover:bg-red-700 text-white text-xs font-bold uppercase tracking-wider shadow-lg shadow-red-600/30 transition-all"
            >
              View Full Client Roster & Network
            </Link>

            <Link
              to="/contact"
              className="px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold uppercase tracking-wider border border-slate-700 transition-all"
            >
              Contact Our Head Office
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
