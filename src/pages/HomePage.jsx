
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

import { brand, servicesList } from '../data/companyData';

import {
  ArrowRight,
  Sparkles,
  CheckCircle2,
} from 'lucide-react';

export default function HomePage({ onOpenInquiry }) {
  return (
    <div className="bg-white">

      {/* 1. Hero */}
      <Hero onOpenInquiry={onOpenInquiry} />

      {/* 2. Emergency Hotline */}
      <BreakdownHotlineBar onOpenInquiry={onOpenInquiry} />

      {/* 3. Authorized Brands */}
      <AuthorizedBrandsSection onOpenInquiry={onOpenInquiry} />

      {/* 4. Distributor Brands */}
      <DistributorBrandsSection onOpenInquiry={onOpenInquiry} />

      {/* 5. Company Legacy */}
      <LegacySection onOpenInquiry={onOpenInquiry} />

      {/* 6. Latest Products */}
      <LatestProductsSection onOpenInquiry={onOpenInquiry} />

      {/* 7. Why Choose Us */}
      <WhyChooseUsSection onOpenInquiry={onOpenInquiry} />

      {/* 8. Our Promises */}
      <OurPromises onOpenInquiry={onOpenInquiry} />

      {/* 9. Featured Services */}
      <section className="py-12 sm:py-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Heading */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">

            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-red-600">
                What We Do
              </span>

              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mt-2">
                Our <span className="text-red-600">Services</span>
              </h2>

              <p className="text-sm text-slate-500 mt-2">
                Complete water management solutions.
              </p>
            </div>

            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-sm font-bold text-red-600 hover:gap-3 transition-all"
            >
              View All Services
              <ArrowRight className="w-4 h-4" />
            </Link>

          </div>

          {/* Service Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">

            {servicesList.map((service) => {
              const IconComponent = service.icon;

              return (
                <article
                  key={service.id}
                  className="group bg-white rounded-2xl border border-slate-200 overflow-hidden hover:border-red-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                >

                  {/* Image */}
                  <div className="relative h-44 overflow-hidden bg-slate-100">
                    <img
                      src={service.image}
                      alt={service.name}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                      }}
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/30 to-transparent" />

                    <div className="absolute bottom-3 left-4 w-10 h-10 rounded-xl bg-white shadow-md flex items-center justify-center text-red-600">
                      <IconComponent className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5">

                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-red-600 transition-colors">
                      {service.name}
                    </h3>

                    <p className="mt-2 text-sm text-slate-500 leading-relaxed line-clamp-2">
                      {service.description}
                    </p>

                    <button
                      onClick={() => onOpenInquiry?.(service.name)}
                      className="mt-5 flex items-center gap-2 text-sm font-bold text-red-600 hover:gap-3 transition-all"
                    >
                      Enquire Now
                      <ArrowRight className="w-4 h-4" />
                    </button>

                  </div>
                </article>
              );
            })}

          </div>

        </div>
      </section>

      {/* 10. Top Authorized Brands */}
      <section className="py-12 sm:py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Heading */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">

            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-red-600">
                Our Brand Partners
              </span>

              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mt-2">
                Authorized <span className="text-red-600">Brands</span>
              </h2>

              <p className="text-sm text-slate-500 mt-2">
                Quality products from trusted manufacturers.
              </p>
            </div>

            <Link
              to="/products"
              className="inline-flex items-center gap-2 text-sm font-bold text-red-600 hover:gap-3 transition-all"
            >
              View All Brands
              <ArrowRight className="w-4 h-4" />
            </Link>

          </div>

          {/* Brand Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">

            {brand.map((b) => (
              <Link
                key={b.name}
                to={`/products?q=${encodeURIComponent(b.name)}`}
                className="group rounded-2xl border border-slate-200 bg-white overflow-hidden hover:border-red-300 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >

                {/* Brand Image */}
                <div className="h-32 sm:h-36 flex items-center justify-center p-5 bg-slate-50 group-hover:bg-red-50/40 transition-colors">

                  {b.img ? (
                    <img
                      src={b.img}
                      alt={`${b.name} logo`}
                      loading="lazy"
                      className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-300"
                    />
                  ) : (
                    <span className="text-sm font-bold text-slate-500 text-center">
                      {b.name}
                    </span>
                  )}

                </div>

                {/* Brand Name */}
                <div className="px-3 py-3 border-t border-slate-100 text-center">

                  <h3 className="text-xs sm:text-sm font-bold text-slate-800 group-hover:text-red-600 transition-colors line-clamp-2">
                    {b.name}
                  </h3>

                  <span className="inline-flex items-center gap-1 mt-2 text-[10px] font-bold uppercase tracking-wide text-red-600">
                    Explore
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </span>

                </div>

              </Link>
            ))}

          </div>
        </div>
      </section>

      {/* 11. Clients & Network */}
      <section className="relative overflow-hidden py-14 sm:py-20 bg-slate-950 text-white">

        {/* Background Decoration */}
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-red-600/15 rounded-full blur-3xl" />
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl" />

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/10 text-red-400 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-4 h-4" />
            Trusted Network
          </span>

          <h2 className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-black leading-tight">
            Building Trust.
            <span className="text-red-500"> Delivering Excellence.</span>
          </h2>

          <p className="mt-4 text-sm sm:text-base text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Trusted by builders, industries, hospitals, and housing societies
            across Maharashtra.
          </p>

          {/* Trust Highlights */}
          <div className="flex flex-wrap justify-center gap-5 sm:gap-10 mt-8">

            {[
              '800+ Active Dealers',
              '100+ Real Estate Developers',
              '40+ Years of Experience'
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-2 text-sm font-semibold text-slate-200"
              >
                <CheckCircle2 className="w-4 h-4 text-red-500" />
                {item}
              </div>
            ))}

          </div>

          <Link
            to="/clients"
            className="inline-flex items-center gap-2 mt-9 px-6 py-3 rounded-xl bg-red-600 hover:bg-red-700 text-white text-sm font-bold shadow-lg shadow-red-600/20 transition-all"
          >
            Explore Our Network
            <ArrowRight className="w-4 h-4" />
          </Link>

        </div>
      </section>

    </div>
  );
}
