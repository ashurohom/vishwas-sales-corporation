import React, { useState } from 'react';
import { 
  Building2, 
  Hospital, 
  Home, 
  Factory, 
  Share2, 
  CheckCircle2, 
  ArrowRight,
  Search,
  Sparkles
} from 'lucide-react';
import { companyInfo } from '../data/companyData';

export default function ClientsSection({ onOpenInquiry }) {
  const [clientSearch, setClientSearch] = useState('');

  const sectors = [
    {
      title: "Dealer Network",
      tag: "800+ Active Dealers",
      icon: <Share2 className="w-6 h-6 text-red-600" />,
      desc: "Vishwas Sales Corporation has an active dealer network of more than 800+ dealers in Pune district and will soon extend its network all over Maharashtra.",
      highlight: "Expanding statewide"
    },
    {
      title: "Real Estate & Builders",
      tag: "Top Developers",
      icon: <Building2 className="w-6 h-6 text-blue-600" />,
      desc: "Associated with most of the leading builders and infrastructure developers in Maharashtra for turnkey water pumping and piping systems.",
      highlight: "Commercial & Residential High-Rises"
    },
    {
      title: "Hospitals & Institutions",
      tag: "Zero-Outage Care",
      icon: <Hospital className="w-6 h-6 text-emerald-600" />,
      desc: "We work closely & extensively with various leading hospitals, medical colleges, and educational campuses requiring continuous water supply.",
      highlight: "Standby Pump Assurance"
    },
    {
      title: "Co-operative Housing Societies",
      tag: "Society Specialists",
      icon: <Home className="w-6 h-6 text-amber-600" />,
      desc: "We provide customized pump repair, on-call mechanics, energy audits, and plumbing replacement solutions to co-operative housing societies.",
      highlight: "Save up to 30% Electricity"
    },
    {
      title: "Industries & Manufacturing",
      tag: "Heavy Industry",
      icon: <Factory className="w-6 h-6 text-indigo-600" />,
      desc: "Supplying and servicing some of the most esteemed industrial conglomerates across automotive, pharmaceutical, and engineering sectors.",
      highlight: "Heavy Flow & Slurry Handling"
    }
  ];

  const filteredClients = companyInfo.prominentClients.filter(client =>
    client.toLowerCase().includes(clientSearch.toLowerCase())
  );

  return (
    <section id="clients" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-100 text-red-700 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Trusted Across Maharashtra</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            OUR CLIENTS & 800+ DEALER NETWORK
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            From the most esteemed industrial groups and premier real estate developers to 
            thousands of housing societies, our 40-year legacy speaks for itself.
          </p>
        </div>

        {/* 5 Sectors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {sectors.map((sec, i) => (
            <div 
              key={i}
              className="p-6 rounded-3xl bg-slate-50 border border-slate-200/90 hover:shadow-lg hover:border-red-200 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-white shadow-sm border border-slate-100 flex items-center justify-center">
                    {sec.icon}
                  </div>
                  <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-red-100 text-red-700">
                    {sec.tag}
                  </span>
                </div>

                <h3 className="text-lg font-black text-slate-900 mb-2">
                  {sec.title}
                </h3>
                
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {sec.desc}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-200/60 flex items-center gap-1.5 text-xs font-semibold text-red-600">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>{sec.highlight}</span>
              </div>
            </div>
          ))}

          {/* Special Join Dealer Network Card */}
          <div className="p-6 rounded-3xl bg-gradient-to-br from-slate-900 via-slate-850 to-slate-950 text-white border border-slate-800 flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-red-400 block mb-2">
                Business Expansion
              </span>
              <h3 className="text-xl font-black text-white mb-2">
                Become an Authorized Dealer
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Join our 800+ dealer network. Gain access to authorized wholesale pricing for C.R.I. Pumps, Raksha Pipes, Ashirvad, Leader Valves, and Sintex with prompt logistics.
              </p>
            </div>
            <button
              onClick={() => onOpenInquiry && onOpenInquiry('New Dealership Application')}
              className="mt-6 w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-red-600/30 transition-all"
            >
              <span>Apply for Dealership</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Client List Showcase (From Page 3) */}
        <div className="rounded-3xl bg-slate-50 border border-slate-200/90 p-8 sm:p-10">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-red-600">
                Page 3 Official Document Roster
              </span>
              <h3 className="text-2xl font-black text-slate-900 mt-0.5">
                OUR CLIENT LIST
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                A selection of esteemed builders, institutions, and industrial leaders who trust Vishwas Sales.
              </p>
            </div>

            {/* Quick search inside client list */}
            <div className="relative w-full sm:w-64">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input 
                type="text"
                placeholder="Search builder or company..."
                value={clientSearch}
                onChange={(e) => setClientSearch(e.target.value)}
                className="w-full pl-9 pr-3 py-1.5 rounded-xl bg-white border border-slate-200 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>
          </div>

          {/* Client Badges Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {filteredClients.map((client, index) => (
              <div 
                key={index}
                className="bg-white p-3 rounded-xl border border-slate-200/80 text-center shadow-xs hover:border-red-400 hover:shadow-md transition-all flex items-center justify-center min-h-[56px] group"
              >
                <span className="text-xs font-bold text-slate-700 group-hover:text-red-600 transition-colors">
                  {client}
                </span>
              </div>
            ))}
          </div>

          {/* Quick Notice */}
          <div className="mt-8 pt-6 border-t border-slate-200 text-center text-xs text-slate-500 flex flex-wrap items-center justify-center gap-4">
            <span className="font-semibold text-slate-700">Associated with:</span>
            <span>✓ Serum Institute of India</span>
            <span>✓ Godrej Properties</span>
            <span>✓ Shapoorji Pallonji</span>
            <span>✓ L&T Construction</span>
            <span>✓ Thermax</span>
            <span>✓ Bharat Forge</span>
            <span>✓ Sahyadri Hospitals</span>
            <span>✓ Magarpatta City</span>
          </div>
        </div>

      </div>
    </section>
  );
}
