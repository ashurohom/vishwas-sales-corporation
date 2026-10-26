import React from 'react';
import { FileText, Download, ArrowRight, CheckCircle2, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function CataloguesPage({ onOpenInquiry }) {
  const catalogues = [
    {
      title: "C.R.I. Pumps Full Range Technical Catalog",
      brand: "C.R.I. Pumps",
      category: "Pumps & Boosting",
      desc: "Comprehensive specifications for Agricultural, Residential, Sewage, and Multistage Industrial Booster Pumps.",
      size: "8.4 MB PDF",
      types: ["Submersible Motors", "Open Well Pumps", "Self-Priming Monoblocks", "Centrifugal Bare Motors"]
    },
    {
      title: "Raksha Pipes & Plumbing Dimension Guide",
      brand: "Raksha Pipes",
      category: "Pipes & Drainage",
      desc: "Complete technical chart for CPVC & UPVC plumbing pipes, agriculture pressure pipes, SWR drainage, and storage tanks.",
      size: "6.2 MB PDF",
      types: ["CPVC / UPVC Pipes", "SWR Ringfit Drainage", "Agriculture Pressure Pipes", "Fittings & Solvent Cements"]
    },
    {
      title: "Ashirvad by aliaxis Complete System Guide",
      brand: "Ashirvad",
      category: "Pipes & Drainage",
      desc: "Lead-free CPVC hot & cold water systems, foamcore underground drainage pipes, and low-noise acoustic fittings.",
      size: "7.1 MB PDF",
      types: ["FlowGuard Plus CPVC", "Underground SWR", "Acoustic Low Noise", "Valves & Accessories"]
    },
    {
      title: "Hydro-Pneumatic Pressure Boosting Engineering Manual",
      brand: "Vishwas Engineering",
      category: "Turnkey Projects",
      desc: "Commercial high-rise booster systems, variable frequency drive (VFD) controls, expansion tank sizing, and piping schematics.",
      size: "4.8 MB PDF",
      types: ["Multi-Pump Cascade Systems", "VFD Constant Pressure Panels", "Expansion Pressure Tanks", "Turnkey Site Layouts"]
    },
    {
      title: "Leader Valves Flow Control Industrial Catalog",
      brand: "Leader Valves",
      category: "Valves & Flow",
      desc: "Engineered Gate, Globe, Check, Ball, Butterfly, and Air Release valves for industrial, fire-fighting, and municipal projects.",
      size: "5.5 MB PDF",
      types: ["Cast Iron / Cast Steel", "Air Release & Non-Return", "Sluice & Butterfly Valves", "Fire Hydrant Flow Valves"]
    },
    {
      title: "Sintex Antimicrobial Water Tanks Technical Sheet",
      brand: "Sintex",
      category: "Storage Tanks",
      desc: "Triple and multi-layer food-grade polyethylene water storage tanks, structural loft tanks, and underground sump capacities.",
      size: "3.9 MB PDF",
      types: ["Pure Antimicrobial Series", "Titus Multi-layer", "Loft Tanks", "Heavy Commercial Tanks"]
    },
    {
      title: "WAASOL & LAXSO Solar Water Heating System Datasheet",
      brand: "WAASOL LAXSO",
      category: "Solar Energy",
      desc: "Evacuated tube collector (ETC) and flat plate collector (FPC) solar water heaters, plus PV solar hybrid heating systems.",
      size: "4.2 MB PDF",
      types: ["Residential Solar Heaters", "PV Solar Water Heaters", "Commercial Centralized Arrays", "Pressurized Stainless Steel Tanks"]
    },
    {
      title: "Autocon Electronic Control Panels & Water Automation",
      brand: "Autocon",
      category: "Automation & Control",
      desc: "Microprocessor pump controllers, automatic water level sensors, cyclic dual-pump starters, and dry-run safety modules.",
      size: "3.1 MB PDF",
      types: ["Auto Water Level Controllers", "Microprocessor Panels", "Dry-Run Protectors", "Dual-Pump Alternators"]
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Page Header */}
      <div className="bg-slate-950 text-white py-16 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/20 text-red-400 text-xs font-bold uppercase tracking-wider mb-4">
            <FileText className="w-3.5 h-3.5" />
            <span>Product Documentation & Engineering Datasheets</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white uppercase">
            Product Catalogues & Manuals
          </h1>
          <p className="mt-4 text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Download or request official technical specification sheets, pump head curves, 
            pipe dimension tables, and architectural manuals directly from Vishwas Sales Corporation.
          </p>
        </div>
      </div>

      {/* Catalogues List */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {catalogues.map((cat, idx) => (
            <div 
              key={idx}
              className="bg-white rounded-3xl p-7 border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-red-300 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-full bg-red-50 text-red-700 border border-red-100">
                    {cat.category}
                  </span>
                  <span className="text-[11px] font-bold text-slate-400">
                    {cat.size}
                  </span>
                </div>

                <h3 className="text-xl font-black text-slate-900 group-hover:text-red-600 transition-colors">
                  {cat.title}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed mt-2 mb-4">
                  {cat.desc}
                </p>

                <div className="pt-3 border-t border-slate-100 mb-6">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-2">
                    Included Specifications:
                  </span>
                  <div className="grid grid-cols-2 gap-1.5 text-xs text-slate-700">
                    {cat.types.map((t, i) => (
                      <div key={i} className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-red-600 shrink-0" />
                        <span className="truncate">{t}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3 pt-2">
                <button
                  onClick={() => onOpenInquiry && onOpenInquiry(`Request Catalogue PDF for ${cat.title}`)}
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-xs uppercase tracking-wider shadow-md shadow-red-600/30 transition-all"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Request Full PDF Catalogue</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Custom Engineering BOQ Box */}
        <div className="mt-14 p-8 rounded-3xl bg-slate-900 text-white flex flex-col md:flex-row items-center justify-between gap-6 border border-slate-800">
          <div>
            <span className="text-xs font-bold text-red-400 uppercase tracking-wider">
              Need Architectural Drawings or Custom Sizing?
            </span>
            <h3 className="text-xl sm:text-2xl font-black mt-1">
              Have a Tender BOQ or Builder Project Specification?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-xl">
              Send your project piping layout or pump head requirement to our engineering department. We prepare custom sizing recommendations within 24 hours.
            </p>
          </div>

          <Link
            to="/pricelist"
            className="shrink-0 px-6 py-3.5 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-red-600/30 transition-all"
          >
            Submit Project BOQ
          </Link>
        </div>
      </section>
    </div>
  );
}
