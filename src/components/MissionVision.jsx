
import React from 'react';
import { Compass, Sunrise } from 'lucide-react';

export default function MissionVision() {
  return (
    <section
      id="mission-vision"
      className="relative overflow-hidden py-12 bg-slate-50"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="relative z-10 text-center max-w-3xl mx-auto mb-10">

          <div className="inline-flex items-center gap-4 mb-3">
            <span className="px-5 py-1.5 rounded-full bg-red-50 border border-red-100 uppercase text-red-600 text-xs font-bold tracking-wider">
              Our Purpose
            </span>
          </div>

          {/* Heading */}
          <div className="w-full flex items-center justify-center gap-3 sm:gap-6 mb-6">
            <span className="h-0.5 w-10 sm:w-20 md:w-28 bg-red-600 rounded-full shrink-0 shadow-xs" />

            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight text-center">
              Mission &{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-rose-600 to-red-700">
                Vision
              </span>
            </h2>

            <span className="h-0.5 w-10 sm:w-20 md:w-28 bg-red-600 rounded-full shrink-0 shadow-xs" />
          </div>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            The principles that have guided us for four decades
            and will continue to drive us forward.
          </p>

        </div>

        {/* Mission & Vision Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

          {/* ================= MISSION BOX ================= */}
          <div className="group rounded-2xl bg-white border border-slate-200 shadow-md hover:shadow-xl hover:border-red-200 overflow-hidden transition-all duration-300">

            <div className="flex flex-col sm:grid sm:grid-cols-2 items-stretch gap-3 p-4 sm:p-5 h-full">

              {/* Mission Image */}
              <div className="relative h-48 sm:h-full min-h-[190px] overflow-hidden rounded-xl">
                <img
                  src="/mission.png"
                  alt="Our Mission"
                  className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Mission Description */}
              <div className="flex flex-col justify-center py-2">
                <div className="flex items-center gap-2 mb-3">
                  <Compass size={24} className="text-red-600 shrink-0" />
                  <h3 className="text-base sm:text-xl font-black text-slate-900">
                    Our Mission
                  </h3>
                </div>

                <div className="h-1 w-10 rounded-full bg-red-600 mb-3" />

                <p className="text-sm sm:text-base text-slate-700 leading-relaxed text-justify">
                  To be Maharashtra's most reliable and comprehensive
                  wholesale partner for plumbing, pumping, solar,
                  sanitary, and building solutions — delivering genuine
                  products, honest pricing, and expert support to every
                  client, on every project.
                </p>
              </div>
            </div>
          </div>

          {/* ================= VISION BOX ================= */}
          <div className="group rounded-2xl bg-white border border-slate-200 shadow-md hover:shadow-xl hover:border-red-200 overflow-hidden transition-all duration-300">

            <div className="flex flex-col sm:grid sm:grid-cols-2 items-stretch gap-3 p-4 sm:p-5 h-full">

              {/* Vision Image */}
              <div className="relative h-48 sm:h-full min-h-[190px] overflow-hidden rounded-xl sm:order-2">
                <img
                  src="/vision.png"
                  alt="Our Vision"
                  className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Vision Description */}
              <div className="flex flex-col justify-center py-2 sm:order-1">
                <div className="flex items-center gap-2 mb-3">
                  <Sunrise size={24} className="text-red-600 shrink-0" />
                  <h3 className="text-base sm:text-xl font-black text-slate-900">
                    Our <span className="text-red-600">Vision</span>
                  </h3>
                </div>

                <div className="h-1 w-10 rounded-full bg-red-600 mb-3" />

                <p className="text-sm sm:text-base text-slate-700 leading-relaxed text-justify">
                  To be Maharashtra's most reliable and comprehensive
                  wholesale partner for plumbing, pumping, solar,
                  sanitary, and building solutions — delivering genuine
                  products, honest pricing, and expert support to every
                  client, on every project.
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
