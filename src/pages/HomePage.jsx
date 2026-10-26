import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import BreakdownHotlineBar from '../components/BreakdownHotlineBar';
import AuthorizedBrandsSection from '../components/AuthorizedBrandsSection';
import DistributorBrandsSection from '../components/DistributorBrandsSection';
import LatestProductsSection from '../components/LatestProductsSection';
import WhyChooseUsSection from '../components/WhyChooseUsSection';
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

      {/* 4. 41 Years of Legacy & Corporate Introduction */}
      <LegacySection onOpenInquiry={onOpenInquiry} />

      {/* 5. Our Latest Products Showcase */}
      <LatestProductsSection onOpenInquiry={onOpenInquiry} />

      {/* 6. Why Customers Trust Vishwas Sales Corporation */}
      <WhyChooseUsSection onOpenInquiry={onOpenInquiry} />

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
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
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
    </div>
  );
}
