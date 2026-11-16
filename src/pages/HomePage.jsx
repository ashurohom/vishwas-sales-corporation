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
  Truck,
  PhoneCall,
  PackageCheck,
  Zap,
  ArrowRight
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
            <div className="w-full flex flex-col items-center justify-center text-center">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-100 text-red-700 text-xs font-bold uppercase tracking-wider mb-2">
                <span>Expert Technical Solutions</span>
              </div>

              <div className="w-full flex items-center justify-center gap-3 sm:gap-6 mb-8 sm:mb-2">
                <span className="h-0.5 w-10 sm:w-20 md:w-28 bg-red-600 rounded-full shrink-0 shadow-xs" />

                <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight text-center">
                  Our Comprehensive <span className="text-red-600">Services</span>
                </h2>

                <span className="h-0.5 w-10 sm:w-20 md:w-28 bg-red-600 rounded-full shrink-0 shadow-xs" />
              </div>

              <p className=" text-slate-600 mt-1 text-center max-w-2xl">
                40 years of precision motor repairing, on-call mechanics, and society energy audits.
              </p>
            </div>

          </div>


          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            {/* CARD 1 - PUMP & MOTOR REPAIRING */}
            <div className="bg-white p-7 rounded-3xl border border-slate-200 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-red-50 text-red-600 flex items-center justify-center mb-4">
                  <Wrench className="w-6 h-6" />
                </div>

                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  Pump & Motor Repairing
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed text-justify">
                  Submersible, open-well, centrifugal monoblock, bare induction
                  motors, starters, and electronic control panels.
                </p>
              </div>

              <Link
                to="/services"
                className="mt-6 inline-flex items-center gap-1.5 text-xs font-bold text-red-600 hover:text-red-700 transition-colors"
              >
                <span>Read details</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* CARD 2 - SOCIETY ENERGY AUDIT */}
            <div className="bg-white p-7 rounded-3xl border border-slate-200 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6" />
                </div>

                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  Society Energy Audit
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed text-justify">
                  Professional diagnostic audit to optimize pump head pressure
                  and reduce monthly society electricity bills by up to 30%.
                </p>
              </div>

              <Link
                to="/services"
                className="mt-6 inline-flex items-center gap-1.5 text-xs font-bold text-red-600 hover:text-red-700 transition-colors"
              >
                <span>Read details</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* CARD 3 - ON-CALL MECHANICAL SERVICE */}
            <div className="bg-white p-7 rounded-3xl border border-slate-200 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-4">
                  <PhoneCall className="w-6 h-6" />
                </div>

                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  On-Call Mechanical Service
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed text-justify">
                  Experienced mechanics available on call to assist with water
                  pump and motor servicing and repair requirements.
                </p>
              </div>

              <Link
                to="/services"
                className="mt-6 inline-flex items-center gap-1.5 text-xs font-bold text-red-600 hover:text-red-700 transition-colors"
              >
                <span>Read details</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

          </div>

          {/* EXPLORE ALL SERVICES - RIGHT ALIGN */}
          <div className="flex justify-end mt-6">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-sm font-bold text-red-600 hover:text-red-700 transition-colors"
            >
              <span>Explore All Services & Pricing</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
