import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight } from 'lucide-react';

export default function LatestProductsSection({ onOpenInquiry }) {
  const latestProducts = [
    {
      id: 'pipes-fittings',
      title: 'Pipes & Fittings',
      image: '/images/products/pipes-fittings.webp',
      fallbackImage: '/images/products/pipes-fittings-hd.png',
      link: '/products',
      inquiryTitle: 'Pipes & Fittings'
    },
    {
      id: 'centrifugal-pumps',
      title: 'Centrifugal Pumps',
      image: '/images/products/centrifugal-pumps.webp',
      fallbackImage: '/images/products/centrifugal-pumps-hd.png',
      link: '/products',
      inquiryTitle: 'Centrifugal Pumps'
    },
    {
      id: 'water-tanks',
      title: 'Water Tanks',
      image: '/images/products/water-tanks.webp',
      fallbackImage: '/images/products/water-tanks-hd.png',
      link: '/products',
      inquiryTitle: 'Water Tanks'
    }
  ];

  return (
    <section className="relative py-16 sm:py-20 lg:py-24 bg-white border-b border-slate-200 overflow-hidden">
      {/* Subtle Background Lighting & Ambient Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50/60 via-white to-slate-50/40 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-red-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading - No tags or taglines */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            Our Latest <span className="text-red-600">Products</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-red-600 to-rose-500 rounded-full mx-auto mt-4" />
        </div>

        {/* 3 Modern Product Showcase Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {latestProducts.map((product) => (
            <div
              key={product.id}
              className="group relative bg-white rounded-3xl border border-slate-200/90 shadow-[0_4px_25px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_45px_rgba(220,38,38,0.14)] hover:border-red-400/80 transition-all duration-400 ease-out hover:-translate-y-2 flex flex-col justify-between overflow-hidden p-5 sm:p-6"
            >
              {/* Product Visual Showcase Frame */}
              <Link
                to={product.link}
                className="relative w-full h-56 sm:h-64 rounded-2xl bg-gradient-to-b from-slate-50/90 via-white to-slate-50/60 border border-slate-100 flex items-center justify-center p-4 overflow-hidden"
              >
                {/* Radial Glow on Hover */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(239,68,68,0.12),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                {/* Product Image */}
                <picture className="relative z-10 w-full h-full flex items-center justify-center">
                  <source srcSet={product.image} type="image/webp" />
                  <img
                    src={product.fallbackImage}
                    alt={product.title}
                    className="max-h-full max-w-full object-contain filter drop-shadow-sm group-hover:scale-106 transition-transform duration-500 ease-out"
                    loading="lazy"
                  />
                </picture>

                {/* Floating Micro-Inspect Icon */}
                <div className="absolute top-3.5 right-3.5 w-8 h-8 rounded-full bg-white/90 backdrop-blur-sm border border-slate-200/80 shadow-sm flex items-center justify-center text-slate-500 group-hover:text-red-600 group-hover:border-red-200 group-hover:scale-110 transition-all duration-300">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </Link>

              {/* Bottom Title Bar - Modern Floating Action Bar */}
              <div className="mt-5">
                <Link
                  to={product.link}
                  className="relative block w-full py-3.5 px-5 rounded-2xl bg-gradient-to-r from-red-600 via-red-600 to-rose-700 text-white shadow-md shadow-red-600/20 group-hover:shadow-lg group-hover:shadow-red-600/35 transition-all duration-300 overflow-hidden"
                >
                  {/* Subtle Shimmer Sheen Effect on Hover */}
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none" />

                  <div className="relative z-10 flex items-center justify-between gap-3">
                    <span className="text-base sm:text-lg font-bold tracking-wide">
                      {product.title}
                    </span>
                    <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white group-hover:bg-white group-hover:text-red-600 group-hover:translate-x-1 transition-all duration-300 shrink-0">
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
