import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight } from 'lucide-react';

export default function LatestProductsSection({ onOpenInquiry }) {
  const latestProducts = [
    {
      id: 'pipes-fittings',
      title: 'Pipes & Fittings',
      image: '/images/products/pipes-fittings.png',
      link: '/products'
    },
    {
      id: 'centrifugal-pumps',
      title: 'Centrifugal Pumps',
      image: '/images/products/centrifugal-pumps.png',
      link: '/products'
    },
    {
      id: 'water-tanks',
      title: 'Water Tanks',
      image: '/images/products/water-tanks.png',
      link: '/products'
    }
  ];

  return (
    <section className="relative py-8 sm:py-10 lg:py-12 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Sleek, Low-Profile Section Heading - No tags or taglines */}
        <div className="text-center mb-6 sm:mb-8">
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
            Our Latest <span className="text-red-600">Products</span>
          </h2>
          <div className="w-10 h-0.5 bg-red-600 rounded-full mx-auto mt-2" />
        </div>

        {/* Slim, Compact 3-Column Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6">
          {latestProducts.map((product) => (
            <div
              key={product.id}
              className="group relative bg-white rounded-2xl border border-slate-200/90 hover:border-red-400/80 shadow-xs hover:shadow-md transition-all duration-300 hover:-translate-y-1 p-3.5 sm:p-4 flex flex-col justify-between"
            >
              {/* Increased Image Display Frame */}
              <Link
                to={product.link}
                className="relative w-full h-48 sm:h-52 lg:h-56 rounded-xl bg-slate-50/60 border border-slate-100 flex items-center justify-center p-2 overflow-hidden"
              >
                {/* Subtle Radial Hover Accent */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(239,68,68,0.06),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                {/* Crisp HD PNG Image */}
                <img
                  src={product.image}
                  alt={product.title}
                  className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300 ease-out"
                  loading="lazy"
                />

                {/* Corner Inspect Affordance */}
                <div className="absolute top-2.5 right-2.5 w-6 h-6 rounded-md bg-white/90 backdrop-blur-xs border border-slate-200/70 flex items-center justify-center text-slate-400 group-hover:text-red-600 group-hover:border-red-200 transition-colors">
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </div>
              </Link>

              {/* Slim Action Bar */}
              <div className="mt-3.5">
                <Link
                  to={product.link}
                  className="relative flex items-center justify-between w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-red-600 to-red-700 text-white shadow-xs group-hover:shadow-sm group-hover:from-red-600 group-hover:to-rose-600 transition-all duration-300 overflow-hidden"
                >
                  <span className="text-sm sm:text-base font-bold tracking-wide">
                    {product.title}
                  </span>
                  <div className="w-6 h-6 rounded-md bg-white/20 flex items-center justify-center text-white group-hover:bg-white group-hover:text-red-600 group-hover:translate-x-0.5 transition-all shrink-0">
                    <ArrowRight className="w-3.5 h-3.5" />
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
