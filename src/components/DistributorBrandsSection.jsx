import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react';

export default function DistributorBrandsSection({ onOpenInquiry }) {
  const distributorBrands = [
    {
      id: 'raksha',
      name: 'Raksha Pipes',
      logo: '/Brand/Raksha_Pipes.png',
      category: 'Plumbing, Sanitary & Agriculture',
      tagline: 'Pipes & Water Solutions',
      badge: 'ISI Certified'
    },
    {
      id: 'ashirvad',
      name: 'Ashirvad by aliaxis',
      logo: '/Brand/Ashirvad_by_Aliaxis.png',
      category: 'Plumbing & Drainage Systems',
      tagline: 'Complete Piping Solutions',
      badge: 'CPVC & SWR'
    },
    {
      id: 'cri',
      name: 'C.R.I. Pumps',
      logo: '/Brand/CRI_PUMPS.png',
      category: 'Agriculture, Residential & Industrial',
      tagline: 'Pumping Trust. Worldwide.',
      badge: 'Water Pump Solutions'
    },
    {
      id: 'hydro-pneumatic',
      name: 'Hydro-Pneumatic Water Supply System',
      logo: '/Brand/hydro_pneumatic_water_supply.png',
      category: 'Water Supply Systems',
      tagline: 'Complete Water Supply Solution',
      badge: 'Turnkey Projects'
    },
    {
      id: 'huliot',
      name: 'Huliot India',
      logo: '/Brand/Huliot_India.png',
      category: 'Plumbing & Drainage Systems',
      tagline: 'Advanced Piping Solutions',
      badge: 'Waste Water Systems'
    },
    {
      id: 'leader-valves',
      name: 'Leader Valves Limited',
      logo: '/Brand/Leader_Valves.png',
      category: 'Industrial & Plumbing Valves',
      tagline: 'Valves for Every Application',
      badge: 'Valve Solutions'
    },
    {
      id: 'autocon',
      name: 'Autocon',
      logo: '/Brand/Autocon.png',
      category: 'Electrical & Automation',
      tagline: 'Smart Control Solutions',
      badge: 'Electronic Control Panels'
    },
    {
      id: 'sintex',
      name: 'Sintex',
      logo: '/Brand/Sintex.png',
      category: 'Water Storage Solutions',
      tagline: 'Trusted Water Storage',
      badge: 'Water Tanks'
    },
    {
      id: 'johnson',
      name: 'Johnson Bathware',
      logo: '/Brand/Johnson_Bathware.png',
      category: 'CP Fittings & Sanitaryware',
      tagline: 'Style Meets Functionality',
      badge: 'Premium Bathware'
    },
    {
      id: 'kohler',
      name: 'Kohler',
      logo: '/distributor/KOHLER.webp',
      category: 'CP Fittings & Sanitaryware',
      tagline: 'The Bold Look of Kohler',
      badge: 'Luxury Bathware'
    },
    {
      id: 'waasol',
      name: 'WAASOL',
      logo: '/Brand/Waasol.png',
      category: 'Solar Water Heating',
      tagline: 'Harness the Power of Solar',
      badge: 'Solar Solutions'
    },
    {
      id: 'laxso',
      name: 'LAXSO',
      logo: '/Brand/Laxso.png',
      category: 'Solar Water Heating',
      tagline: 'Efficient Solar Solutions',
      badge: 'Solar Water Heaters'
    },
    {
      id: 'r-drain',
      name: 'R Drain',
      logo: '/Brand/R_Drain.png',
      category: 'Drainage Systems',
      tagline: 'Reliable Subsoil Drainage',
      badge: 'HDPE Drainage Pipes'
    },
    {
      id: 'kisan',
      name: 'Kisan',
      logo: '/Brand/Kisan.png',
      category: 'Pipes & Hose Solutions',
      tagline: 'Complete Piping Solutions',
      badge: 'HDPE & PVC Pipes'
    },
    {
      id: 'maru-ropes',
      name: 'Maru Ropes',
      logo: '/Brand/Maru_Ropes.png',
      category: 'Industrial Ropes',
      tagline: 'Strength You Can Trust',
      badge: 'PP & Nylon Ropes'
    },
    {
      id: 'thermodrain',
      name: 'Thermodrain',
      logo: '/Brand/Thermodrain.png',
      category: 'Drainage Products',
      tagline: 'Smart Drainage Solutions',
      badge: 'Drainage Systems'
    },
    {
      id: 'vikrant',
      name: 'Vikrant',
      logo: '/Brand/Vikrant.png',
      category: 'Infrastructure Products',
      tagline: 'Built for Infrastructure',
      badge: 'Chamber Covers'
    },
    {
      id: 'jasper',
      name: 'Jasper',
      logo: '/Brand/Jasper.png',
      category: 'Infrastructure Products',
      tagline: 'Reliable Infrastructure Solutions',
      badge: 'Chamber Covers'
    },
    {
      id: 'rp-composites',
      name: 'R.P. Composites',
      logo: '/Brand/RP_Composites.png',
      category: 'Composite Infrastructure Products',
      tagline: 'Advanced Composite Solutions',
      badge: 'Composite Covers'
    },
    {
      id: 'topaz',
      name: 'Topaz',
      logo: '/Brand/Topaz.png',
      category: 'Infrastructure Products',
      tagline: 'Quality Infrastructure Solutions',
      badge: 'Chamber Covers'
    },
    {
      id: 'birla-opus',
      name: 'Birla Opus Paints',
      logo: '/Brand/Birla_Opus.png',
      category: 'Paints & Coatings',
      tagline: 'Colours That Inspire',
      badge: 'Decorative Paints'
    },
    {
      id: 'birla-white',
      name: 'Birla White',
      logo: '/Brand/Birla_White.png',
      category: 'Building Materials',
      tagline: 'Building with Excellence',
      badge: 'White Cement'
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
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight text-center">
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
              {/* Brand Logo Image */}
              <div className="w-full h-full flex items-center justify-center overflow-hidden">
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="w-full h-14 sm:h-16 object-cover object-center group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
            </Link>
          ))}
        </div>

      </div>

      {/* Trust Highlights */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 sm:mt-10">
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 pt-6 border-t border-slate-100 text-xs text-slate-600 font-medium">
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
      </div>
    </section>
  );
}
