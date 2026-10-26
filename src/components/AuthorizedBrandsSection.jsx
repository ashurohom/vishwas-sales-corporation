import React from 'react';
import { 
  PhoneCall, 
  Droplets, 
  Wrench, 
  ShieldCheck, 
  ArrowRight 
} from 'lucide-react';
import { companyInfo } from '../data/companyData';
import { Link } from 'react-router-dom';

export default function AuthorizedBrandsSection({ onOpenInquiry }) {
  return (
    <section className="relative bg-white pt-8 sm:pt-10 lg:pt-12 pb-14 sm:pb-16 lg:pb-20 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 3 Core Capabilities Cards (Authorized Brand Distribution) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
          
          {/* Card 1: Authorized Brand Distribution */}
          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-xl hover:border-red-300 transition-all flex items-start gap-4 group">
            <div className="w-12 h-12 rounded-xl bg-red-50 border border-red-100 text-red-600 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
              <Droplets className="w-6 h-6 text-red-600" />
            </div>
            <div>
              <h3 className="text-base font-bold text-slate-900 group-hover:text-red-600 transition-colors">
                Authorized Brand Distribution
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-1.5 leading-relaxed">
                Direct authorized partner for C.R.I. Pumps, Raksha Pipes, Ashirvad & Leader Valves.
              </p>
            </div>
          </div>

          {/* Card 2: In-House Pump Repair Workshop */}
          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-xl hover:border-red-300 transition-all flex items-start gap-4 group">
            <div className="w-12 h-12 rounded-xl bg-red-50 border border-red-100 text-red-600 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
              <Wrench className="w-6 h-6 text-red-600" />
            </div>
            <div>
              <h3 className="text-base font-bold text-slate-900 group-hover:text-red-600 transition-colors">
                In-House Pump Repair Workshop
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-1.5 leading-relaxed">
                Submersible, monoblock, bare induction motor rewinding, starters & control panels.
              </p>
            </div>
          </div>

          {/* Card 3: Zero Water Downtime Guarantee */}
          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-xl hover:border-red-300 transition-all flex items-start gap-4 group">
            <div className="w-12 h-12 rounded-xl bg-red-50 border border-red-100 text-red-600 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
              <ShieldCheck className="w-6 h-6 text-red-600" />
            </div>
            <div>
              <h3 className="text-base font-bold text-slate-900 group-hover:text-red-600 transition-colors">
                Zero Water Downtime Guarantee
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-1.5 leading-relaxed">
                Standby backup pumps and de-watering rentals for housing societies and hospitals.
              </p>
            </div>
          </div>

        </div>

        {/* 4 Clean Metric Cards (Light, Crisp, Modern - White Theme) */}
        <div className="mt-8 sm:mt-10 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
          <div className="p-4 sm:p-6 rounded-2xl bg-slate-50/80 border border-slate-200 text-center hover:bg-white hover:shadow-md transition-all">
            <div className="text-2xl sm:text-3xl font-black text-red-600">41+</div>
            <div className="text-xs sm:text-sm font-bold text-slate-800 mt-1">Years Experience</div>
          </div>

          <div className="p-4 sm:p-6 rounded-2xl bg-slate-50/80 border border-slate-200 text-center hover:bg-white hover:shadow-md transition-all">
            <div className="text-2xl sm:text-3xl font-black text-red-600">500+</div>
            <div className="text-xs sm:text-sm font-bold text-slate-800 mt-1">Happy Customers</div>
          </div>

          <div className="p-4 sm:p-6 rounded-2xl bg-slate-50/80 border border-slate-200 text-center hover:bg-white hover:shadow-md transition-all">
            <div className="text-2xl sm:text-3xl font-black text-red-600">1000+</div>
            <div className="text-xs sm:text-sm font-bold text-slate-800 mt-1">Products</div>
          </div>

          <div className="p-4 sm:p-6 rounded-2xl bg-slate-50/80 border border-slate-200 text-center hover:bg-white hover:shadow-md transition-all">
            <div className="text-2xl sm:text-3xl font-black text-red-600">50+</div>
            <div className="text-xs sm:text-sm font-bold text-slate-800 mt-1">Brands</div>
          </div>
        </div>

      </div>
    </section>
  );
}
