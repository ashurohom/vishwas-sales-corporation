
import React from 'react';
import Logo from './Logo';
import {
  Award,
  Smile,
  Layers,
  ShieldCheck,
  Users2,
  CircleDollarSign,
  ArrowRight,
  CheckCircle,
  Wrench,
} from 'lucide-react';
import { companyInfo } from '../data/companyData';

const pillarIcons = [
  Award,
  Smile,
  Layers,
  ShieldCheck,
  Users2,
  CircleDollarSign,
];

export default function AboutSection({ onOpenInquiry }) {
  return (
    <section id="about" className="py-12 sm:py-16 lg:py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* About Introduction */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 items-center">

          {/* Left Content */}
          <div>
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-50 border border-red-100 text-red-700 text-xs font-bold mb-4">
              <Award className="w-4 h-4" />
              Since 1985 • 40+ Years of Trust
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 leading-tight tracking-tight">
              About{' '}
              <span className="text-red-600">
                Vishwas Sales Corporation
              </span>
            </h2>

            <p className="mt-5 text-sm sm:text-base text-slate-600 leading-relaxed">
              With over four decades of experience, Vishwas Sales Corporation
              has been a trusted name in the water industry, serving residential,
              commercial and industrial requirements.
            </p>

            <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
              Based in Hadapsar, Pune, we deliver quality pumps, pipes and
              plumbing solutions through a network of 800+ dealers and
              partnerships with leading brands.
            </p>

            {/* Highlights */}
            <div className="grid grid-cols-2 gap-x-4 gap-y-4 mt-7">
              {[
                '40+ Years of Experience',
                '800+ Dealer Network',
                'Trusted Brand Partners',
                'Dedicated Service Team',
              ].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-red-600 shrink-0" />
                  <span className="text-xs sm:text-sm font-semibold text-slate-700">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <button
              onClick={() => onOpenInquiry?.('Partner With Us')}
              className="mt-8 inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-red-600 hover:bg-red-700 text-white text-xs font-bold uppercase tracking-wider transition-all shadow-md shadow-red-600/20"
            >
              Partner With Us
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Right Showcase */}
          <div className="relative">
            <div className="bg-white rounded-3xl border border-slate-200 p-5 sm:p-7 shadow-lg shadow-slate-900/5">

              <div className="flex justify-center sm:justify-start pb-5 border-b border-slate-100">
                <Logo size="normal" />
              </div>

              <div className="mt-6 rounded-2xl bg-[#10192c] p-5 sm:p-6 text-white">
                <div className="w-11 h-11 rounded-xl bg-red-600/20 flex items-center justify-center mb-4">
                  <Wrench className="w-6 h-6 text-red-400" />
                </div>

                <h3 className="text-lg sm:text-xl font-bold">
                  Technical Expertise You Can Trust
                </h3>

                <p className="mt-2 text-sm text-slate-300 leading-relaxed">
                  Our skilled technical team provides pump repairs,
                  maintenance, installation and emergency support.
                </p>
              </div>

              {/* Associations */}
              <div className="mt-6">
                <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                  Our Associations
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {['CREDAI', 'BAI MEMBER', 'MEA PUNE', 'MBVA'].map((item) => (
                    <div
                      key={item}
                      className="flex items-center justify-center min-h-11 rounded-lg bg-slate-50 border border-slate-100 text-xs font-bold text-slate-700"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Core Pillars */}
        <div className="mt-14 sm:mt-20">
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-red-600">
              Why Choose Us
            </span>

            <h3 className="mt-2 text-2xl sm:text-3xl font-black text-slate-900">
              What Makes Us Different
            </h3>

            <p className="mt-2 text-sm text-slate-500">
              The values that have guided us for over four decades.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {companyInfo.sixPillars.map((pillar, idx) => {
              const Icon = pillarIcons[idx % pillarIcons.length];

              return (
                <div
                  key={pillar.number}
                  className="group bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 hover:border-red-200 hover:shadow-lg hover:shadow-slate-900/5 transition-all"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-11 h-11 rounded-xl bg-red-50 flex items-center justify-center group-hover:bg-red-600 transition-colors">
                      <Icon className="w-5 h-5 text-red-600 group-hover:text-white transition-colors" />
                    </div>

                    <span className="text-xs font-bold text-slate-400">
                      0{pillar.number}
                    </span>
                  </div>

                  <h4 className="text-base font-bold text-slate-900 mb-2 group-hover:text-red-600 transition-colors">
                    {pillar.title}
                  </h4>

                  <p className="text-sm text-slate-500 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
