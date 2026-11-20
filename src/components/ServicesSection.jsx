import React from 'react';
import {
  Wrench,
  Settings,
  PhoneCall,
  Zap,
  ShieldCheck,
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { companyInfo } from '../data/companyData';

export default function ServicesSection({ onOpenInquiry }) {

  const servicesList = [
    {
      id: "repair",
      title: "Pump & Motor Repair",
      category: "Maintenance",
      icon: <Wrench className="w-6 h-6 text-red-600" />,
      tag: "Expert Repair",
      desc: "Repair and maintenance of all types of water pumps, motors, starters, controllers, and control panels.",
      cta: "Schedule Repair"
    },

    {
      id: "installation",
      title: "Pump & Motor Installation",
      category: "Installation",
      icon: <Settings className="w-6 h-6 text-blue-600" />,
      tag: "Professional Installation",
      desc: "Professional installation and commissioning of water pumps and motors for residential and commercial projects.",
      cta: "Request Installation"
    },

    {
      id: "on-call",
      title: "On-Call Mechanics",
      category: "Emergency",
      icon: <PhoneCall className="w-6 h-6 text-red-600" />,
      tag: "Quick Response",
      desc: "Experienced mechanics available for pump breakdowns, motor faults, starter issues, and emergency repairs.",
      cta: "Contact Service Desk"
    },



    {
      id: "energy-audit",
      title: "Energy Audit",
      category: "Energy Savings",
      icon: <Zap className="w-6 h-6 text-indigo-600" />,
      tag: "Save Energy",
      desc: "Pump and motor energy audits to identify inefficiencies and help reduce electricity consumption.",
      cta: "Book Energy Audit"
    }
  ];

  return (
    <section
      id="services"
      className="py-16 sm:py-20 bg-white border-b border-slate-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}

        <div className="mb-10 sm:mb-14">

          {/* Heading */}
          <div className="max-w-3xl mx-auto text-center">

            {/* Badge */}
            <div className="inline-flex items-center justify-center gap-2 px-3 py-1 rounded-full bg-red-100 uppercase text-red-700 text-xs font-bold tracking-wider mb-3">
              <span>Specialized Water Engineering Services</span>
            </div>

            {/* Heading */}
            <div className="flex items-center justify-center gap-3 sm:gap-6 mb-8 sm:mb-10">

              <span className="h-0.5 w-10 sm:w-20 md:w-28 bg-red-600 rounded-full shrink-0 shadow-xs" />

              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight text-center">
                Our{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-rose-600 to-red-700">
                  Services
                </span>
              </h2>

              <span className="h-0.5 w-10 sm:w-20 md:w-28 bg-red-600 rounded-full shrink-0 shadow-xs" />

            </div>

          </div>

          {/* Description + Contact Box */}

          <div className="grid grid-cols-1 w-full mt-5">
            {/* Description */}
            <p className="w-full max-w-none text-sm sm:text-base text-slate-600 leading-relaxed text-justify">
              We offer comprehensive water pumping solutions, from expert repair and
              maintenance of all types of pumps, motors, starters, and control panels
              to professional installation, testing, and commissioning. Our services
              also include dewatering pump rentals, on-call mechanical support,
              standby pump facilities, and energy audits for housing societies.
              We specialize in identifying pumping system issues, providing reliable
              technical assistance, and recommending cost-effective solutions to
              improve performance and reduce energy consumption.

              Backed by an experienced team and decades of industry knowledge, we
              focus on delivering quality workmanship, timely service, and dependable
              support for every project. Whether it is a residential building,
              commercial complex, or industrial facility, our goal is to ensure
              efficient pump operation, minimize downtime, and maintain an
              uninterrupted water supply through reliable and professional service.
            </p>
          </div>

          <section className="w-full py-16 bg-white border-b border-slate-200">
            <div className="w-full">
              <div className="w-full p-8 sm:p-10 rounded-3xl bg-slate-900 text-white flex flex-col lg:flex-row items-center justify-between gap-8 border border-slate-800">

                <div className="max-w-2xl">
                  <span className="text-xs font-bold uppercase tracking-wider text-red-400">
                    24/7 Society Support
                  </span>

                  <h3 className="text-2xl sm:text-3xl font-black text-white mt-1">
                    Facing an Urgent Pump Failure in Your Society?
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed">
                    Contact our emergency mechanics helpline immediately. We dispatch on-site mechanics and can deploy a temporary standby pump so water supply to residents remains uninterrupted.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto shrink-0">
                  <a
                    href={`tel:${companyInfo.phone1.replace(/\s+/g, '')}`}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-red-600 hover:bg-red-700 uppercase text-white text-xs font-bold tracking-wider shadow-lg shadow-red-600/30 transition-all"
                  >
                    <PhoneCall className="w-4 h-4" />
                    <span>Call {companyInfo.phone1}</span>
                  </a>

                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold tracking-wider uppercase border border-slate-700 transition-all"
                  >
                    <span>Book Service Online</span>
                  </Link>
                </div>

              </div>
            </div>
          </section>

        </div>
        {/* Society Emergency Assistance Banner */}



        {/* Services Cards Grid */}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-9 gap-5 sm:gap-6 items-stretch">

          {servicesList.map((service, index) => {

            const isLastTwo =
              servicesList.length % 3 === 2 &&
              index >= servicesList.length - 2;

            const isLastOne =
              servicesList.length % 3 === 1 &&
              index === servicesList.length - 1;

            return (
              <div
                key={service.id}
                className={`
          relative
          w-full
          lg:col-span-3
          ${isLastTwo && index === servicesList.length - 2 ? "lg:col-start-2" : ""}
          ${isLastTwo && index === servicesList.length - 1 ? "lg:col-start-6" : ""}
          ${isLastOne ? "lg:col-start-4" : ""}
          rounded-2xl
          bg-slate-50
          border border-slate-200
          p-5 sm:p-6
          hover:shadow-xl
          hover:border-red-300
          hover:bg-white
          transition-all
          duration-300
          group
          flex
          flex-col
          h-full
        `}
              >

                {/* Icon + Tag */}
                <div className="flex items-center justify-between mb-5">

                  <div className="w-12 h-12 rounded-xl bg-white shadow-sm border border-slate-200 flex items-center justify-center group-hover:scale-105 transition-transform">
                    {service.icon}
                  </div>

                  <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-red-50 text-red-700 border border-red-100">
                    {service.tag}
                  </span>

                </div>

                {/* Title */}
                <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 group-hover:text-red-600 transition-colors leading-snug mb-3">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6 text-justify">
                  {service.desc}
                </p>

                {/* Action Button */}
                <button
                  onClick={() =>
                    onOpenInquiry && onOpenInquiry(service.title)
                  }
                  className="
            mt-auto
            w-full
            inline-flex
            items-center
            justify-center
            gap-2
            py-3
            px-4
            rounded-xl
            bg-slate-900
            text-white
            font-bold
            text-xs
            uppercase
            tracking-wider
            shadow-sm
            transition-all
          "
                >
                  <span>{service.cta}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

              </div>
            );
          })}

        </div>


      </div>
    </section>
  );
}