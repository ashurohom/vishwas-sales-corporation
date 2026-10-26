import React, { useState } from 'react';
import { 
  Check, 
  Search, 
  ArrowRight, 
  Layers, 
  Droplet, 
  Cpu, 
  Sun, 
  ShieldCheck,
  PackageCheck
} from 'lucide-react';

export default function ProductsSection({ onOpenInquiry }) {
  const [filter, setFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const products = [
    {
      brand: "Raksha Pipes",
      category: "pipes",
      categoryLabel: "Pipes & Fittings",
      tagline: "Plumbing | Sanitary | Agriculture | Water Tanks",
      details: ["CPVC & UPVC Plumbing Pipes", "SWR Drainage Systems", "Agricultural PVC Systems", "Water Storage Tanks"],
      badge: "Authorized Distributor",
      popular: true
    },
    {
      brand: "Ashirvad by aliaxis",
      category: "pipes",
      categoryLabel: "Pipes & Fittings",
      tagline: "Plumbing | Sanitary | Agriculture | Water Tanks",
      details: ["Lead-Free CPVC Systems", "Foamcore Underground Drainage", "Low-Noise SWR Pipes", "High-Pressure Fittings"],
      badge: "Industry Standard",
      popular: true
    },
    {
      brand: "C.R.I. Pumps",
      category: "pumps",
      categoryLabel: "Pumps & Motors",
      tagline: "Pumping trust. Worldwide.",
      details: [
        "Agriculture Pumps (Submersible & Monoblock)",
        "Residential Pumps (Domestic pressure)",
        "Industrial Pumps (Chemical & Process)",
        "Sewage Pumps (Submersible cutter & vortex)"
      ],
      badge: "Leading Pump Brand",
      popular: true
    },
    {
      brand: "Hydro-Pneumatic Booster Systems",
      category: "pumps",
      categoryLabel: "Pumps & Motors",
      tagline: "High-Rise & Turnkey Water Solutions",
      details: [
        "Complete water supply solutions",
        "Turnkey engineering projects",
        "Multi-pump pressure boosting systems",
        "VFD variable frequency drive integration"
      ],
      badge: "Commercial Grade",
      popular: true
    },
    {
      brand: "Huliot India",
      category: "pipes",
      categoryLabel: "Acoustic & Drainage",
      tagline: "Plumbing Water Supply | Waste Water | Infrastructure",
      details: [
        "Plumbing Water Supply System",
        "Waste Water & Drainage System",
        "Infrastructure System",
        "Acoustic Ultra-Silent Drainage"
      ],
      badge: "Global Technology"
    },
    {
      brand: "Leader Valves Limited",
      category: "valves",
      categoryLabel: "Valves & Flow Control",
      tagline: "Valves for all applications",
      details: [
        "Gate, Globe & Check Valves",
        "Forged Steel & Cast Iron Valves",
        "Ball, Butterfly & Air Release Valves",
        "Fire-fighting & Industrial Water Valves"
      ],
      badge: "Heavy Duty"
    },
    {
      brand: "Autocon",
      category: "valves",
      categoryLabel: "Electronics & Automation",
      tagline: "Electronic Control Panels",
      details: [
        "Automatic Water Level Controllers",
        "Microprocessor Pump Control Panels",
        "Dry Run & Overload Protection",
        "Dual Pump Cyclic Starters"
      ],
      badge: "Smart Automation"
    },
    {
      brand: "Sintex",
      category: "tanks",
      categoryLabel: "Water Tanks",
      tagline: "India's Most Trusted Water Tanks",
      details: [
        "Multi-Layer Antimicrobial Tanks",
        "Loft & Underground Tanks",
        "Commercial Water Storage",
        "UV Stabilized Materials"
      ],
      badge: "100% Food Grade"
    },
    {
      brand: "Johnson Bathware & Kohler",
      category: "sanitary",
      categoryLabel: "CP & Sanitary",
      tagline: "CP & Sanitary Solutions",
      details: [
        "Premium Commercial CP Fittings",
        "Wall-Hung & Floor Mounted Sanitaryware",
        "Commercial Sensor Faucets",
        "Concealed Flush Tanks & Valves"
      ],
      badge: "Luxury & Commercial"
    },
    {
      brand: "WAASOL & LAXSO",
      category: "solar",
      categoryLabel: "Solar Heating",
      tagline: "Solar & PV Water Heaters",
      details: [
        "Solar Water Heater Systems",
        "PV Solar Water Heater Systems",
        "Centralized Residential Solar arrays",
        "Commercial & Hospital installations"
      ],
      badge: "Energy Saving"
    },
    {
      brand: "R Drain",
      category: "pipes",
      categoryLabel: "Drainage Systems",
      tagline: "HDPE Subsoil Drainage Pipe",
      details: [
        "Perforated HDPE Drainage Pipes",
        "Groundwater Table De-watering",
        "Basement Retaining Wall Protection",
        "Sports Stadium & Road Sub-drainage"
      ],
      badge: "Specialized HDPE"
    },
    {
      brand: "Raksha / Kisan / Kothari",
      category: "pipes",
      categoryLabel: "Agricultural & Industrial",
      tagline: "Comprehensive Piping Solutions",
      details: [
        "HDPE Pipes & Coils",
        "Rigid PVC Pipes",
        "Heavy Duty Hose Suction Pipes",
        "Garden & Flexible Delivery Pipes"
      ],
      badge: "ISI Certified"
    },
    {
      brand: "Thermodrain / Vikrant / Jasper / Topaz",
      category: "infrastructure",
      categoryLabel: "Chamber Covers & RCC",
      tagline: "PMC & PCMC Approved Chambers",
      details: [
        "CI, RCC & FRP Chambers",
        "Heavy Duty Manhole Covers & Frames",
        "Reinforced Concrete Pipes (RCC)",
        "Municipal Authority Approved"
      ],
      badge: "PMC & PCMC Approved"
    },
    {
      brand: "Birla Opus Paints & Birla White",
      category: "infrastructure",
      categoryLabel: "Paints & Construction",
      tagline: "Surface Finishing & Wall Protection",
      details: [
        "Birla Opus Interior & Exterior Paints",
        "Birla White Wall Care Putty",
        "White Cement & Primers",
        "Waterproofing Coatings"
      ],
      badge: "Aditya Birla Quality"
    },
    {
      brand: "Maruti Ropes",
      category: "infrastructure",
      categoryLabel: "Submersible Rigging",
      tagline: "PP Nylon Ropes (ISI & Non-ISI)",
      details: [
        "High-tensile PP Virgin Ropes",
        "Borewell Submersible Lowering Support",
        "Weather & Chemical Resistant",
        "ISI Certified & Heavy Duty"
      ],
      badge: "Safety Verified"
    }
  ];

  const filterButtons = [
    { id: 'all', label: 'All Products' },
    { id: 'pumps', label: 'Pumps & Pressure Boosting' },
    { id: 'pipes', label: 'Pipes & Drainage' },
    { id: 'valves', label: 'Valves & Control Panels' },
    { id: 'tanks', label: 'Tanks & Solar' },
    { id: 'sanitary', label: 'CP & Sanitary' },
    { id: 'infrastructure', label: 'Chambers & Paints' }
  ];

  const filteredProducts = products.filter(item => {
    const matchesFilter = filter === 'all' || item.category === filter || (filter === 'tanks' && (item.category === 'tanks' || item.category === 'solar'));
    const matchesSearch = item.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.details.some(d => d.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesFilter && matchesSearch;
  });

  return (
    <section id="products" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-100 text-red-700 text-xs font-bold uppercase tracking-wider mb-3">
            <span>Official Authorized Brands</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            OUR PRODUCTS & AUTHORIZED BRANDS
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            Direct wholesale distributor and retailer for India's leading pumping, piping, 
            sanitary, solar, and municipal water infrastructure brands.
          </p>
        </div>

        {/* Filter and Search Bar */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-4 mb-10">
          {/* Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto w-full pb-2 lg:pb-0 scrollbar-none">
            {filterButtons.map((btn) => (
              <button
                key={btn.id}
                onClick={() => setFilter(btn.id)}
                className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                  filter === btn.id
                    ? 'bg-red-600 text-white shadow-md shadow-red-600/30'
                    : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {btn.label}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full lg:w-72 shrink-0">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search brand or product..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-xl bg-white border border-slate-200 text-xs font-medium text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((item, index) => (
            <div 
              key={index}
              className="relative rounded-3xl bg-white border border-slate-200 p-6 hover:shadow-xl hover:border-red-300 transition-all flex flex-col justify-between group"
            >
              <div>
                {/* Card Top Row */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[10px] font-extrabold px-2.5 py-1 rounded-full bg-slate-100 text-slate-700 group-hover:bg-red-50 group-hover:text-red-600 transition-colors">
                    {item.categoryLabel}
                  </span>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-red-100 text-red-700">
                    {item.badge}
                  </span>
                </div>

                {/* Brand Name */}
                <h3 className="text-xl font-black text-slate-900 group-hover:text-red-600 transition-colors">
                  {item.brand}
                </h3>

                <p className="text-xs font-semibold text-slate-500 mt-1 mb-4 italic">
                  {item.tagline}
                </p>

                {/* Details list */}
                <div className="pt-3 border-t border-slate-100 space-y-1.5 mb-6">
                  {item.details.map((point, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs font-medium text-slate-700">
                      <span className="w-1.5 h-1.5 rounded-full bg-red-500 shrink-0 mt-1.5" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Inquiry Action */}
              <button
                onClick={() => onOpenInquiry && onOpenInquiry(`Wholesale Pricing for ${item.brand}`)}
                className="w-full inline-flex items-center justify-between px-4 py-2.5 rounded-xl bg-slate-50 group-hover:bg-red-600 text-slate-700 group-hover:text-white text-xs font-bold border border-slate-200 group-hover:border-red-600 transition-all"
              >
                <span>Request Wholesale Price List</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          ))}
        </div>

        {/* Bulk Wholesale Banner */}
        <div className="mt-14 p-8 rounded-3xl bg-slate-900 text-white flex flex-col md:flex-row items-center justify-between gap-6 border border-slate-800">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold text-red-400 uppercase tracking-wider mb-1">
              <PackageCheck className="w-4 h-4" />
              <span>Direct Commercial & Bulk Supplies</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-white">
              Need Project Supply for an Ongoing Construction Site?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-2xl">
              Get tiered bulk discounts on C.R.I. pumps, CPVC/UPVC pipelines, Leader valves, and PMC/PCMC approved chamber covers. Prompt on-site delivery across Pune.
            </p>
          </div>

          <button
            onClick={() => onOpenInquiry && onOpenInquiry('Turnkey Project / Construction Site Supply')}
            className="shrink-0 px-6 py-3.5 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-red-600/30 transition-all active:scale-95"
          >
            Submit BOQ / Tender Request
          </button>
        </div>

      </div>
    </section>
  );
}
