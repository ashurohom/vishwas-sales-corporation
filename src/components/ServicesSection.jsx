import React, { useState } from 'react';
import { 
  Wrench, 
  Settings, 
  RefreshCw, 
  PhoneCall, 
  Zap, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight,
  Clock,
  Sparkles
} from 'lucide-react';
import { companyInfo } from '../data/companyData';

export default function ServicesSection({ onOpenInquiry }) {
  const [activeTab, setActiveTab] = useState('all');

  const servicesList = [
    {
      id: "repair",
      title: "Repairing All Types of Water Pumps & Motors",
      category: "Maintenance",
      icon: <Wrench className="w-6 h-6 text-red-600" />,
      tag: "Comprehensive Workshop",
      desc: "Complete overhaul, rewinding, bearing replacement, and precision balancing for all motor models. We service submersibles, open-well submersibles, centrifugal monoblocks, self-priming monoblocks, induction motors (bare motors), starters, auto water level controllers, and control panels.",
      deliverables: [
        "Submersible & open-well pumps",
        "Centrifugal & self-priming monoblocks",
        "Bare induction motors (all HP ratings)",
        "Auto water level controllers & starter panels"
      ],
      cta: "Schedule Pump Repair"
    },
    {
      id: "installation",
      title: "Installing All Types of Water Pumps & Motors",
      category: "Installation",
      icon: <Settings className="w-6 h-6 text-blue-600" />,
      tag: "Turnkey Commissioning",
      desc: "Professional site installation adhering to manufacturer alignments, dynamic load calculations, non-return valve placements, and electrical safety standards for apartment complexes, towers, and commercial units.",
      deliverables: [
        "Hydro-pneumatic booster system setups",
        "Borewell submersible installations",
        "Sewage & drainage sump pumps",
        "Vibration isolation & acoustic dampening"
      ],
      cta: "Request Installation Quote"
    },
    {
      id: "rental",
      title: "Providing Pumps on Rent for De-Watering",
      category: "Rental",
      icon: <RefreshCw className="w-6 h-6 text-amber-600" />,
      tag: "Emergency & Construction",
      desc: "Instant dewatering solutions with high-discharge submersible and engine-driven dewatering pumps on daily, weekly, or monthly rental terms. Ideal for foundation excavations, construction basements, and basement rainwater flooding.",
      deliverables: [
        "Heavy mud and sludge handling pumps",
        "Basement rainwater emergency dewatering",
        "Construction foundation site clearing",
        "Flexible rental periods & standby mechanics"
      ],
      cta: "Rent Dewatering Pump"
    },
    {
      id: "on-call",
      title: "Mechanics Available On-Call for Service",
      category: "Emergency",
      icon: <PhoneCall className="w-6 h-6 text-red-600" />,
      tag: "Prompt On-Site Response",
      desc: "Experienced, uniformed breakdown mechanics dispatched directly to your housing society, commercial premises, or industrial plant. Fast on-site fault identification, starter diagnosis, and emergency repair.",
      deliverables: [
        "Breakdown assistance across Pune",
        "Motor winding & insulation check",
        "Starter & relay troubleshooting",
        "Water level sensor re-calibration"
      ],
      cta: "Contact Service Desk"
    },
    {
      id: "standby",
      title: "Service & Standby Pumps Made Available",
      category: "Zero Downtime",
      icon: <ShieldCheck className="w-6 h-6 text-emerald-600" />,
      tag: "Zero Outage Guarantee",
      desc: "Never leave your society or hospital without water while your primary pump is undergoing repair. We provide an immediate standby pump to keep water flowing smoothly throughout the service duration.",
      deliverables: [
        "Immediate temporary replacement pump",
        "Eliminates water tankers and emergency costs",
        "Seamless swap without civil changes",
        "Full support for residential societies"
      ],
      cta: "Request Standby Pump"
    },
    {
      id: "energy-audit",
      title: "Energy Audit for Housing Societies",
      category: "Energy Savings",
      icon: <Zap className="w-6 h-6 text-indigo-600" />,
      tag: "Save Electricity Bills",
      desc: "Is your society paying exorbitant electricity bills due to undersized or worn-out water pumps? Our energy audit evaluates head pressure, power factor, impeller efficiency, and provides tangible solutions to reduce power consumption by up to 30%.",
      deliverables: [
        "Power consumption & flow rate diagnosis",
        "Impeller & motor efficiency testing",
        "Automated level controller optimization",
        "Comprehensive society cost reduction report"
      ],
      cta: "Book Society Energy Audit"
    }
  ];

  return (
    <section id="services" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-100 text-red-700 text-xs font-bold uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Specialized Water Engineering Services</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              OUR SERVICES
            </h2>
            <p className="mt-3 text-base text-slate-600 leading-relaxed">
              From precision pump repairs and on-call mechanics to housing society energy audits 
              and dewatering rentals, our services ensure zero water interruption.
            </p>
          </div>

          {/* Quick Call Box */}
          <div className="shrink-0 p-4 rounded-2xl bg-slate-900 text-white flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-red-600 flex items-center justify-center text-white shrink-0">
              <PhoneCall className="w-6 h-6 animate-pulse" />
            </div>
            <div>
              <span className="text-[10px] text-slate-400 uppercase font-bold tracking-wider block">
                Mechanics On Call:
              </span>
              <a 
                href={`tel:${companyInfo.phone1.replace(/\s+/g, '')}`}
                className="text-base font-extrabold text-white hover:text-red-400 transition-colors"
              >
                {companyInfo.phone1}
              </a>
            </div>
          </div>
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesList.map((service) => (
            <div 
              key={service.id}
              className="relative rounded-3xl bg-slate-50 border border-slate-200/90 p-7 hover:shadow-xl hover:border-red-300 hover:bg-white transition-all group flex flex-col justify-between"
            >
              <div>
                {/* Header row */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-14 h-14 rounded-2xl bg-white shadow-sm border border-slate-200/70 flex items-center justify-center group-hover:scale-105 transition-transform">
                    {service.icon}
                  </div>
                  <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-red-50 text-red-700 border border-red-100">
                    {service.tag}
                  </span>
                </div>

                <h3 className="text-xl font-extrabold text-slate-900 group-hover:text-red-600 transition-colors leading-snug mb-3">
                  {service.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                  {service.desc}
                </p>

                {/* Key Deliverables */}
                <div className="pt-4 border-t border-slate-200/70 mb-6">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-2">
                    Key Highlights:
                  </span>
                  <ul className="space-y-2">
                    {service.deliverables.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs font-semibold text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-red-600 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Button */}
              <button
                onClick={() => onOpenInquiry && onOpenInquiry(service.title)}
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-slate-900 group-hover:bg-red-600 text-white font-bold text-xs uppercase tracking-wider shadow-sm transition-all"
              >
                <span>{service.cta}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          ))}
        </div>

        {/* Standby Pump / Society Guarantee Box */}
        

      </div>
    </section>
  );
}
