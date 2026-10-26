import React from 'react';
import AboutSection from '../components/AboutSection';
import OurPromises from '../components/OurPromises';
import { Award, ShieldCheck, Users, Clock, CheckCircle2, ArrowRight } from 'lucide-react';
import { companyInfo } from '../data/companyData';
import { Link } from 'react-router-dom';

export default function AboutPage({ onOpenInquiry }) {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Page Header Banner */}
      <div className="bg-slate-950 text-white py-16 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/20 text-red-400 text-xs font-bold uppercase tracking-wider mb-4">
            <Award className="w-3.5 h-3.5" />
            <span>Since 1985 • Over 40 Years of Excellence</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-black tracking-tight text-white uppercase">
            About Vishwas Sales Corporation
          </h1>
          <p className="mt-4 text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Pune's Leading Company in Plumbing & Pumping Solutions. With a legacy completed 4 decades, 
            catering to both corporate and residential water needs with superior, trustworthy dealings.
          </p>
        </div>
      </div>

      {/* 6 Core Pillars & About Section Component */}
      <AboutSection onOpenInquiry={onOpenInquiry} />

      {/* Promises */}
      <OurPromises onOpenInquiry={onOpenInquiry} />

      {/* Credential Associations Banner */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h3 className="text-2xl font-black text-slate-900">
              Institutional Memberships & Accreditations
            </h3>
            <p className="text-xs text-slate-500 mt-1">
              Active participating members in Maharashtra's apex real estate and trade organizations.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {companyInfo.memberships.map((m, i) => (
              <div 
                key={i} 
                className="p-6 rounded-2xl bg-slate-50 border border-slate-200 text-center flex flex-col items-center justify-center hover:border-red-400 transition-all shadow-xs"
              >
                <div className="w-12 h-12 rounded-xl bg-red-600/10 text-red-600 flex items-center justify-center mb-3 font-black text-lg">
                  ★
                </div>
                <h4 className="font-bold text-slate-900 text-sm">{m.name}</h4>
                <span className="text-[11px] text-red-600 font-bold uppercase mt-1">{m.label}</span>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-red-600 hover:bg-red-700 text-white text-xs font-bold uppercase tracking-wider shadow-lg shadow-red-600/30 transition-all"
            >
              <span>Get in Touch With Our Leadership</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
