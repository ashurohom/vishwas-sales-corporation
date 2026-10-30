
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight } from 'lucide-react';

export default function LatestProductsSection({ onOpenInquiry }) {
  const latestProducts = [
    {
      id: 'pipes-fittings',
      title: 'Pipes & Fittings',
      image: '/pipes-fitting-bg.png',
      link: '/products'
    },
    {
      id: 'centrifugal-pumps',
      title: 'Centrifugal Pumps',
      image: '/centrifugal-pump.png',
      link: '/products'
    },
    {
      id: 'water-tanks',
      title: 'Water Tanks',
      image: '/water-tank.png',
      link: '/products'
    }
  ];

  return (
    <section className="relative py-8 sm:py-10 lg:py-12 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-6 sm:mb-8">
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Our Latest <span className="text-red-600">Products</span>
          </h2>
          <div className="w-10 h-0.5 bg-red-600 rounded-full mx-auto mt-2" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6">

          {latestProducts.map((product) => (
            <div
              key={product.id}
              className="group relative bg-white rounded-3xl border border-red-100 shadow-sm hover:shadow-xl hover:border-red-300 transition-all duration-300 hover:-translate-y-1 p-3 sm:p-4"
            >

              {/* Full Background Image */}
              <Link
                to={product.link}
                className="relative block w-full h-52 sm:h-56 lg:h-64 rounded-2xl overflow-hidden bg-slate-100"
              >
                <img
                  src={product.image}
                  alt={product.title}
                  className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />

                {/* Subtle Image Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent pointer-events-none" />

                {/* Inspect Icon */}
                <div className="absolute top-3 right-3 w-8 h-8 rounded-lg bg-white/95 backdrop-blur-sm border border-slate-200 flex items-center justify-center text-slate-500 group-hover:text-red-600 transition-colors shadow-md">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </Link>

              {/* Product Action */}
              <div className="mt-3">
                <Link
                  to={product.link}
                  className="flex items-center justify-between w-full py-3 px-4 rounded-xl bg-gradient-to-r from-red-600 to-red-700 text-white shadow-sm hover:from-red-700 hover:to-rose-600 hover:shadow-md transition-all duration-300"
                >
                  <span className="text-sm sm:text-base font-bold tracking-wide">
                    {product.title}
                  </span>

                  <div className="w-7 h-7 rounded-md bg-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-red-600 transition-all shrink-0">
                    <ArrowRight className="w-4 h-4" />
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
