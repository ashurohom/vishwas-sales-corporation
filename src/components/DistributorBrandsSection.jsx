import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react';

export default function DistributorBrandsSection({ onOpenInquiry }) {
  const distributorBrands = [
    {
      id: 'kohler',
      name: 'Kohler',
      logo: '/distributor/KOHLER.webp',
      category: 'CP & Sanitaryware',
      tagline: 'The Bold Look of Kohler',
      badge: 'Luxury Bathware'
    },
    {
      id: 'ashirvad',
      name: 'Ashirvad by aliaxis',
      logo: '/distributor/ASHIRVAD.webp',
      category: 'Pipes & Drainage Systems',
      tagline: 'by aliaxis',
      badge: 'CPVC & SWR'
    },
    {
      id: 'raksha',
      name: 'Raksha Pipes',
      logo: '/distributor/RAKSHA.webp',
      category: 'Plumbing & Agriculture Pipes',
      tagline: 'Pipes & Water Solutions',
      badge: 'ISI Certified'
    },
    {
      id: 'sintex',
      name: 'Sintex by Welspun',
      logo: '/distributor/SINTEX.webp',
      category: 'Water Storage Tanks',
      tagline: 'by Welspun',
      badge: 'Antibacterial Tanks'
    },
    {
      id: 'cri',
      name: 'C.R.I. Pumps',
      logo: '/distributor/CRI_PUMPS.webp',
      category: 'Water Pumps & Boosting Systems',
      tagline: 'Pumping trust. Worldwide.',
      badge: 'Agri & Industrial'
    }
  ];

  // Quadruple the brand list to create a completely seamless, gap-free infinite loop
  const marqueeBrands = [
    ...distributorBrands,
    ...distributorBrands,
    ...distributorBrands,
    ...distributorBrands
  ];

  return (
    <section className="relative bg-white py-12 sm:py-16 border-b border-slate-200 overflow-hidden">
      {/* Subtle Ambient Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50/70 via-white to-slate-50/30 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading with Exact Left & Right Red Accent Lines */}
        <div className="flex items-center justify-center gap-3 sm:gap-6 mb-8 sm:mb-10">
          <span className="h-0.5 w-10 sm:w-20 md:w-28 bg-red-600 rounded-full shrink-0 shadow-xs" />
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight text-center">
            Authorized distributor for{' '}
            <span className="text-red-600">leading brands</span>
          </h2>
          <span className="h-0.5 w-10 sm:w-20 md:w-28 bg-red-600 rounded-full shrink-0 shadow-xs" />
        </div>

      </div>

      {/* Infinite Logo Marquee Carousel */}
      <div className="relative w-full overflow-hidden py-2">
        {/* Ultra-soft Low-Opacity Edge Fade (Keeps edge logos fully visible) */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-6 sm:w-12 bg-gradient-to-r from-white/40 to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-6 sm:w-12 bg-gradient-to-l from-white/40 to-transparent z-10" />

        <div className="animate-marquee flex items-center gap-3.5 sm:gap-5 pl-4">
          {marqueeBrands.map((brand, index) => (
            <Link
              key={`${brand.id}-${index}`}
              to={`/products?q=${encodeURIComponent(brand.name)}`}
              className="group relative w-48 sm:w-56 h-22 sm:h-26 bg-white rounded-xl sm:rounded-2xl border border-slate-200/90 hover:border-red-500 shadow-xs hover:shadow-lg hover:shadow-red-600/10 transition-all duration-300 flex items-center justify-center p-2.5 sm:p-3 shrink-0 hover:-translate-y-1 cursor-pointer"
              title={brand.name}
            >
              {/* Brand Logo Image (Crisp, High-Visibility Sizing) */}
              <div className="w-full h-full flex items-center justify-center">
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="w-auto h-13 sm:h-16 max-h-[82%] max-w-[88%] object-contain filter group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Trust Highlights & Link */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 sm:mt-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-slate-100">
          
          {/* Trust Pills */}
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 sm:gap-6 text-xs text-slate-600 font-medium">
            <span className="inline-flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>100% Genuine Factory Direct Supply</span>
            </span>
            <span className="inline-flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-red-600 shrink-0" />
              <span>Certified ISI Grade Inventory</span>
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-amber-500 shrink-0" />
              <span>Wholesale Institutional Rates</span>
            </span>
          </div>

          {/* Action Link to Full Product Catalog */}
          <Link
            to="/products"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-red-600 hover:text-red-700 transition-colors group"
          >
            <span>Explore All 50+ Authorized Brands</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>

        </div>
      </div>
    </section>
  );
}
