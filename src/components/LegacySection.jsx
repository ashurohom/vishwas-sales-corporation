import React from 'react';
import {
  Award,
  ShieldCheck,
  Building2,
  CheckCircle2,
  ArrowUpRight,
} from 'lucide-react';

export default function LegacySection() {
  return (
    <section
      id="legacy-section"
      className="relative overflow-hidden border-b border-slate-200 bg-slate-50 py-10 sm:py-14 lg:py-16"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Main Legacy Card */}
        <div className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-lg shadow-slate-200/60 transition-all duration-500 hover:shadow-xl">

          <div className="grid lg:grid-cols-[0.78fr_1.6fr]">

            {/* ================= LEFT LEGACY PANEL ================= */}
            <div className="relative flex flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-red-700 via-red-600 to-rose-700 px-6 py-10 text-center text-white sm:px-10 lg:py-12">

              {/* Decorative Elements */}
              <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full border border-white/10" />
              <div className="pointer-events-none absolute -right-10 -top-10 h-44 w-44 rounded-full border border-white/10" />
              <div className="pointer-events-none absolute -bottom-24 -left-16 h-64 w-64 rounded-full border border-white/10" />

              <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/20 bg-white/10 shadow-lg backdrop-blur-sm">
                <Award size={30} strokeWidth={1.6} />
              </div>

              <p className="relative z-10 mt-5 text-[10px] font-bold uppercase tracking-[0.25em] text-red-100">
                A Journey of Trust
              </p>

              {/* Legacy Number */}
              <div className="relative z-10 mt-2 flex items-start justify-center">
                <span className="text-8xl font-black leading-none tracking-tighter sm:text-9xl">
                  41
                </span>
                <span className="ml-1 mt-3 text-2xl font-black text-red-200">
                  +
                </span>
              </div>

              <h3 className="relative z-10 mt-2 text-sm font-extrabold uppercase tracking-[0.22em] sm:text-base">
                Years of Legacy
              </h3>

              <div className="relative z-10 my-5 h-1 w-12 rounded-full bg-white/70" />

              <p className="relative z-10 max-w-[230px] text-xs leading-6 text-red-50 sm:text-sm">
                Building relationships through quality, reliability and dedicated service.
              </p>

              {/* Bottom Trust Label */}
              <div className="relative z-10 mt-7 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2">
                <ShieldCheck size={14} />
                <span className="text-[10px] font-bold uppercase tracking-wider">
                  Trusted Since 1985
                </span>
              </div>

            </div>

            {/* ================= RIGHT CONTENT PANEL ================= */}
            <div className="flex flex-col justify-center px-6 py-8 sm:px-9 sm:py-10 lg:px-10 xl:px-14">

              {/* Section Label */}
              <div className="mb-4 flex items-center gap-2">
                <span className="h-1 w-7 rounded-full bg-red-600" />
                <span className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-red-600 sm:text-xs">
                  About Our Company
                </span>
              </div>

              {/* Heading */}
              <h2 className="text-2xl font-black leading-tight tracking-tight text-slate-900 sm:text-3xl lg:text-4xl">
                Vishwas Sales
                <span className="block text-red-600">
                  Corporation
                </span>
              </h2>

              {/* Description */}
              <div className="mt-5 space-y-4 text-xs leading-7 text-slate-600 sm:text-sm sm:leading-7">

                <p>
                  <strong className="font-bold text-slate-900">
                    Vishwas Sales Corporation
                  </strong>{' '}
                  is a trusted name for industrial products and engineering
                  solutions, serving customers with quality products,
                  dependable service and practical technical support.
                  With a legacy of over 41 years, we focus on building
                  long-term relationships with industries, businesses
                  and customers across a wide range of applications.
                </p>

                <p>
                  Our product range includes industrial electrical and
                  engineering products from leading brands. We aim to
                  make it easier for customers to find reliable products,
                  competitive solutions and professional support for
                  their industrial requirements.
                </p>

                <p>
                  Whether you are looking for industrial products,
                  electrical components, engineering supplies or
                  technical assistance, we are committed to providing
                  responsive service and solutions suited to your
                  requirements.
                </p>

              </div>

              {/* Bottom Highlights */}
              <div className="mt-7 grid grid-cols-1 gap-3 border-t border-slate-100 pt-6 sm:grid-cols-3">

                <div className="flex items-center gap-2.5">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-red-50 text-red-600">
                    <Award size={18} />
                  </div>
                  <div>
                    <p className="text-xs font-extrabold text-slate-900">
                      41+ Years
                    </p>
                    <p className="text-[10px] text-slate-500">
                      Industry Experience
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2.5">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-red-50 text-red-600">
                    <Building2 size={18} />
                  </div>
                  <div>
                    <p className="text-xs font-extrabold text-slate-900">
                      Quality Products
                    </p>
                    <p className="text-[10px] text-slate-500">
                      Trusted Brands
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2.5">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-red-50 text-red-600">
                    <CheckCircle2 size={18} />
                  </div>
                  <div>
                    <p className="text-xs font-extrabold text-slate-900">
                      Dependable
                    </p>
                    <p className="text-[10px] text-slate-500">
                      Customer Support
                    </p>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}