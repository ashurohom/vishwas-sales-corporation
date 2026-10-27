import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import BreakdownHotlineBar from '../components/BreakdownHotlineBar';
import AuthorizedBrandsSection from '../components/AuthorizedBrandsSection';
import DistributorBrandsSection from '../components/DistributorBrandsSection';
import LatestProductsSection from '../components/LatestProductsSection';
import LegacySection from '../components/LegacySection';
import OurPromises from '../components/OurPromises';
import { brand } from '../data/companyData';
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

// Official Services List derived from company brochure
export const servicesList = [
  {
    id: 'pump-repairing',
    name: 'Pump & Motor Repairing',
    icon: Wrench,
    category: 'Repair & Maintenance',
    tagline: 'Repairing all types of water pumps & motors including submersible, open-well submersible, centrifugal monoblock, bare induction motors, starters, and electronic control panels.',
    badge: 'Expert Service'
  },
  {
    id: 'society-energy-audit',
    name: 'Society Energy Audit',
    icon: Zap,
    category: 'Energy Solutions',
    tagline: 'Professional diagnostic audit to optimize pump head pressure and reduce monthly society electricity bills by up to 30%.',
    badge: 'Energy Saving'
  },
  {
    id: 'pump-installation',
    name: 'Pump Installation & Renting',
    icon: Settings,
    category: 'Installation Services',
    tagline: 'Installing all types of water pumps & motors with rental pumps available for de-watering applications.',
    badge: 'Turnkey Support'
  },
  {
    id: 'mechanics-on-call',
    name: 'Mechanics & Standby Support',
    icon: PhoneCall,
    category: 'On-Call Maintenance',
    tagline: 'Mechanics available on call for service, along with service and standby pumps made readily available.',
    badge: '24/7 Support'
  }
];

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

      {/* Our Promises (Page 1 of brochure) */}
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
                40 years of precision motor repairing, on-call mechanics, and society energy audits[cite: 7].
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {servicesList.map((service) => {
              const IconComponent = service.icon;
              return (
                <div
                  key={service.id}
                  className="bg-white p-7 rounded-3xl border border-slate-200 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-red-50 text-red-600 flex items-center justify-center mb-4">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="inline-block px-2.5 py-0.5 rounded-md bg-slate-100 text-slate-700 text-[10px] font-bold uppercase tracking-wider mb-2">
                      {service.badge}
                    </span>
                    <h3 className="text-lg font-bold text-slate-900 mb-2">
                      {service.name}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {service.tagline}
                    </p>
                  </div>
                  <Link
                    to="/services"
                    className="mt-6 inline-flex items-center gap-1.5 text-xs font-bold text-red-600 hover:text-red-700"
                  >
                    <span>Read details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              );
            })}
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

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 sm:gap-5">
            {brand.map((b) => (
              <Link
                key={b.name}
                to={`/products?q=${encodeURIComponent(b.name)}`}
                className="group relative flex min-h-[260px] flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-red-400 hover:shadow-xl"
              >
                {/* Full Logo Area */}
                <div className="flex h-40 w-full shrink-0 items-center justify-center overflow-hidden bg-white p-4">
                  {b.img ? (
                    <img
                      src={b.img}
                      alt={`${b.name} logo`}
                      loading="lazy"
                      className="block max-h-full max-w-full object-contain object-center transition-transform duration-300 group-hover:scale-105"
                      onError={(e) => {
                        e.currentTarget.style.display = "none";
                        const fallback = e.currentTarget.nextElementSibling;
                        if (fallback) fallback.style.display = "flex";
                      }}
                    />
                  ) : null}

                  {/* Fallback */}
                  <div
                    className="h-full w-full items-center justify-center rounded-lg bg-slate-50 px-3 text-center"
                    style={{ display: b.img ? "none" : "flex" }}
                  >
                    <span className="text-sm font-bold text-slate-500">
                      {b.name}
                    </span>
                  </div>
                </div>

                {/* Brand Information */}
                <div className="flex flex-1 flex-col border-t border-slate-100 bg-slate-50 p-4 text-center transition-colors group-hover:bg-white">
                  <h3 className="text-sm font-bold leading-snug text-slate-900 group-hover:text-red-600">
                    {b.name}
                  </h3>

                  <p className="mt-2 text-xs leading-relaxed text-slate-500">
                    {b.tag}
                  </p>

                  <span className="mt-auto pt-4 inline-flex items-center justify-center gap-1 text-xs font-semibold text-red-600">
                    Explore Products
                    <span className="transition-transform group-hover:translate-x-1">
                      →
                    </span>
                  </span>
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
            <span>800+ Active Dealers & 100+ Leading Real Estate Developers[cite: 7, 8]</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Trusted by Builders, Hospitals & Industries Across Maharashtra[cite: 8]
          </h2>

          <p className="mt-4 text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Associated with Magarpatta City, Godrej Properties, Shapoorji Pallonji,
            Vascon, and thousands of co-operative housing societies[cite: 8].
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