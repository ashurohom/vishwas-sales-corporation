import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Sparkles,
  Award,
} from 'lucide-react';
import { brandsList } from '../data/companyData';

export default function DistributorBrandsSection() {
  // Duplicate the list to create a seamless marquee.
  const displayBrands = [...brandsList, ...brandsList];

  const trustPoints = [
    {
      icon: CheckCircle2,
      text: 'Genuine Authorized Products',
      color: 'text-emerald-600',
      bg: 'bg-emerald-50',
    },
    {
      icon: ShieldCheck,
      text: 'Quality Assured Inventory',
      color: 'text-red-600',
      bg: 'bg-red-50',
    },
    {
      icon: Sparkles,
      text: 'Competitive Wholesale Rates',
      color: 'text-amber-600',
      bg: 'bg-amber-50',
    },
  ];

  return (
    <section className="relative overflow-hidden border-y border-slate-200 bg-white py-14 sm:py-16 lg:py-20">

      {/* Subtle background decoration */}
      <div className="pointer-events-none absolute -top-32 left-1/2 h-72 w-[600px] -translate-x-1/2 rounded-full bg-red-100/40 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Section Heading */}
        <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-12">

          <span className="inline-flex items-center gap-2 rounded-full border border-red-100 bg-red-50 px-4 py-2 text-[10px] font-extrabold uppercase tracking-[0.18em] text-red-700 sm:text-xs">
            <Award size={14} />
            Our Authorized Network
          </span>

          <h2 className="mt-4 text-2xl font-black leading-tight tracking-tight text-slate-900 sm:text-3xl lg:text-4xl">
            Trusted Brands.
            <span className="block text-red-600">
              Trusted Partnerships.
            </span>
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-slate-500 sm:text-base">
            We partner with recognized manufacturers to bring you
            dependable products, quality solutions and reliable support.
          </p>
        </div>
      </div>

      {/* Brand Carousel */}
      <div className="relative w-full overflow-hidden py-3">

        {/* Left and Right Fade */}
        <div className="pointer-events-none absolute bottom-0 left-0 top-0 z-10 w-12 bg-gradient-to-r from-white to-transparent sm:w-28" />
        <div className="pointer-events-none absolute bottom-0 right-0 top-0 z-10 w-12 bg-gradient-to-l from-white to-transparent sm:w-28" />

        <div className="brand-marquee flex w-max items-center gap-4 px-4 sm:gap-6">
          {displayBrands.map((brand, index) => (
            <Link
              key={`${brand.id}-${index}`}
              to={`/products?q=${encodeURIComponent(brand.name)}`}
              title={`Explore ${brand.name} products`}
              aria-label={`Explore ${brand.name} products`}
              className="group relative flex h-24 w-44 shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-red-300 hover:shadow-xl hover:shadow-red-900/5 sm:h-28 sm:w-52 sm:p-6"
            >
              {/* Hover Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-red-50/70 via-white to-white opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <img
                src={brand.logo}
                alt={brand.name}
                loading="lazy"
                className="relative z-10 h-full max-h-16 w-auto max-w-full object-contain transition-transform duration-300 group-hover:scale-105"
              />

              <div className="absolute bottom-0 left-1/2 h-0.5 w-0 -translate-x-1/2 bg-red-600 transition-all duration-300 group-hover:w-1/2" />
            </Link>
          ))}
        </div>
      </div>

      {/* Trust Points and CTA */}
      <div className="relative mx-auto mt-10 max-w-7xl px-4 sm:px-6 lg:mt-12 lg:px-8">

        <div className="flex flex-col items-center justify-between gap-6 border-t border-slate-200 pt-7 lg:flex-row">

          {/* Trust Points */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            {trustPoints.map((point) => {
              const Icon = point.icon;

              return (
                <div
                  key={point.text}
                  className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-2 text-[11px] font-semibold text-slate-600 sm:text-xs"
                >
                  <span className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full ${point.bg} ${point.color}`}>
                    <Icon size={14} />
                  </span>
                  {point.text}
                </div>
              );
            })}
          </div>

          {/* Explore Button */}
          <Link
            to="/products"
            className="group inline-flex shrink-0 items-center gap-2 rounded-full bg-red-600 px-5 py-3 text-xs font-bold text-white shadow-lg shadow-red-600/15 transition-all duration-300 hover:-translate-y-0.5 hover:bg-red-700 hover:shadow-xl sm:text-sm"
          >
            Explore All Brands
            <ArrowRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </div>
      </div>

      {/* Carousel Animation */}
      <style>{`
        .brand-marquee {
          animation: brand-scroll 35s linear infinite;
        }

        .brand-marquee:hover {
          animation-play-state: paused;
        }

        @keyframes brand-scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .brand-marquee {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}
