import React from 'react';
import ServicesSection from '../components/ServicesSection';
import { Wrench, PhoneCall, Zap, ShieldCheck, Clock, CheckCircle2 } from 'lucide-react';
import { companyInfo } from '../data/companyData';
import { Link } from 'react-router-dom';

export default function ServicesPage({ onOpenInquiry }) {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Page Header */}
      <div className="bg-slate-950 text-white py-16 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/20 text-red-400 text-xs font-bold uppercase tracking-wider mb-4">
            <Wrench className="w-3.5 h-3.5" />
            <span>Turnkey Engineering & Rapid Maintenance</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-black tracking-tight text-white uppercase">
            Specialized Water & Pump Services
          </h1>
          <p className="mt-4 text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            From precision in-house motor rewinding and on-call emergency mechanics to dewatering 
            rentals and housing society energy audits across Pune and Maharashtra.
          </p>
        </div>
      </div>

      {/* Services Section Component */}
      <ServicesSection onOpenInquiry={onOpenInquiry} />

      {/* Society Emergency Assistance Banner */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-10 rounded-3xl bg-slate-900 text-white flex flex-col lg:flex-row items-center justify-between gap-8 border border-slate-800">
            <div className="max-w-2xl">
              <span className="text-xs font-bold uppercase tracking-wider text-red-400">
                24/7 Society Support
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-white mt-1">
                Facing an Urgent Pump Failure in Your Society?
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed">
                Contact our emergency mechanics helpline immediately. We dispatch on-site mechanics and can deploy a temporary standby pump so water supply to residents remains uninterrupted.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto shrink-0">
              <a
                href={`tel:${companyInfo.phone1.replace(/\s+/g, '')}`}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-red-600 hover:bg-red-700 text-white text-xs font-bold uppercase tracking-wider shadow-lg shadow-red-600/30 transition-all"
              >
                <PhoneCall className="w-4 h-4" />
                <span>Call {companyInfo.phone1}</span>
              </a>

              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold uppercase tracking-wider border border-slate-700 transition-all"
              >
                <span>Book Service Online</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
