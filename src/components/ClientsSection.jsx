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
  Sparkles,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

import { prominentClients } from '../data/companyData';

export default function ClientsSection({ onOpenInquiry }) {
  const [clientSearch, setClientSearch] = useState('');
  const [clientPage, setClientPage] = useState(0);

  const CLIENTS_PER_PAGE = 12;

  // =====================================================
  // SECTORS / BUSINESS CATEGORIES
  // =====================================================

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

  // =====================================================
  // FILTER CLIENTS
  // =====================================================

  const filteredClients = prominentClients.filter((client) =>
    client.name.toLowerCase().includes(clientSearch.toLowerCase())
  );

  // =====================================================
  // PAGINATION
  // =====================================================

  const totalPages = Math.ceil(
    filteredClients.length / CLIENTS_PER_PAGE
  );

  const startIndex = clientPage * CLIENTS_PER_PAGE;

  const visibleClients = filteredClients.slice(
    startIndex,
    startIndex + CLIENTS_PER_PAGE
  );

  const goToNextPage = () => {
    if (clientPage < totalPages - 1) {
      setClientPage((prev) => prev + 1);
    }
  };

  const goToPreviousPage = () => {
    if (clientPage > 0) {
      setClientPage((prev) => prev - 1);
    }
  };

  // =====================================================
  // SEARCH HANDLER
  // =====================================================

  const handleClientSearch = (e) => {
    setClientSearch(e.target.value);
    setClientPage(0);
  };

  return (
    <section
      id="clients"
      className="py-20 bg-white border-b border-slate-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* =====================================================
            SECTION HEADER
        ====================================================== */}

        <div className="text-center max-w-3xl mx-auto mb-14">

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-100 uppercase text-red-700 text-xs font-bold tracking-wider mb-3">
            <span>
              Trusted Across Maharashtra
            </span>
          </div>

          <div className="flex flex-nowrap items-center justify-center gap-3 sm:gap-6 !mb-0">
            <span className="h-0.5 w-10 sm:w-20 md:w-28 bg-red-600 rounded-full shrink-0 shadow-xs" />

            <h2 className="whitespace-nowrap text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 tracking-tight text-center !mb-0">
              Our Clients &{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-rose-600 to-red-700">
                800+ Dealers Network
              </span>
            </h2>

            <span className="h-0.5 w-10 sm:w-20 md:w-28 bg-red-600 rounded-full shrink-0 shadow-xs" />
          </div>



        </div>

        {/* Dealership Onboarding Program */}



        <section className="pt-2 pb-10 bg-white">
          <div className="max-w-7xl mx-auto w-full px-4">

            {/* MAIN DEALERSHIP CONTAINER */}
            <div
              className="
        p-6 sm:p-10 lg:p-12
        rounded-3xl
        bg-slate-50
        border border-slate-200
        grid grid-cols-1 lg:grid-cols-2
        items-stretch
        gap-8 lg:gap-12
      "
            >

              {/* LEFT SIDE - CONTENT */}
              <div className="max-w-2xl h-full flex flex-col justify-center">

                {/* SECTION LABEL */}
                <span className="text-xs font-bold uppercase tracking-wider text-red-600">
                  Dealer Expansion Program
                </span>

                {/* HEADING */}
                <h3 className="text-2xl sm:text-3xl font-black text-slate-900 mt-2">
                  Grow Your Business with Vishwas Sales Corporation
                </h3>

                {/* DESCRIPTION */}
                <p className="
  w-full
  max-w-2xl
  mt-3
  text-justify
  text-sm sm:text-base
  leading-7
  text-slate-600
">
                  From the most esteemed industrial groups and premier real estate
                  developers to thousands of housing societies, our 40-year legacy
                  speaks for itself.
                </p>
                {/* DEALER BENEFITS */}
                <div
                  className="
            mt-5
            grid grid-cols-1 sm:grid-cols-2
            gap-3
            text-xs font-semibold text-slate-700
          "
                >

                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-red-600 shrink-0" />
                    <span>Direct Authorized Margins</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-red-600 shrink-0" />
                    <span>Same-Day / Next-Day Regional Dispatch</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-red-600 shrink-0" />
                    <span>100% Genuine Factory Warranty</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-red-600 shrink-0" />
                    <span>Marketing & In-Store Branding Support</span>
                  </div>

                </div>
              </div>


              {/* RIGHT SIDE - IMAGE + BUTTON */}
              <div
                className="
          w-full
          sm:max-w-[380px]
          mx-auto
          h-full
          flex flex-col
          items-center
          gap-5
        "
              >

                {/* DEALERSHIP IMAGE CARD */}
                <div
                  className="
            w-full
            flex-1
            min-h-[220px]
            overflow-hidden
            rounded-2xl
            bg-white
            border border-slate-200
            shadow-md
            transition-all duration-300
            hover:shadow-xl
          "
                >
                  <img
                    src="/apply_for_dealership.png"
                    alt="Vishwas Sales Corporation Dealership Partnership"
                    className="w-full h-full object-cover"
                  />
                </div>


                {/* APPLICATION BUTTON */}
                <button
                  type="button"
                  onClick={() =>
                    onOpenInquiry &&
                    onOpenInquiry('Apply to Join 800+ Dealer Network')
                  }
                  className="
            w-full
            px-6 py-4
            rounded-xl
            bg-red-600
            hover:bg-red-700
            text-white
            font-bold
            text-xs
            uppercase
            tracking-wider
            shadow-lg
            shadow-red-600/30
            hover:-translate-y-1
            transition-all duration-300
          "
                >
                  Apply for Dealership Onboarding
                </button>

              </div>

            </div>
          </div>
        </section>




        {/* =====================================================
    SECTORS GRID
====================================================== */}

        {/* Section Heading */}
        <div className="text-center mb-10">

          {/* Badge */}
          <div className="inline-flex items-center justify-center gap-2 px-3 py-1 rounded-full bg-red-100 uppercase text-red-700 text-xs font-bold tracking-wider mb-3">
            <span>Our Network & Partnerships</span>
          </div>

          {/* Heading */}
          <div className="flex items-center justify-center gap-3 sm:gap-6">
            <span className="h-0.5 w-10 sm:w-20 md:w-28 bg-red-600 rounded-full shrink-0" />

            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Industries We{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-rose-600 to-red-700">
                Serve
              </span>
            </h2>

            <span className="h-0.5 w-10 sm:w-20 md:w-28 bg-red-600 rounded-full shrink-0" />
          </div>

        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-9 gap-5 sm:gap-6 items-stretch mb-16 mt-16">

          {sectors.map((sec, index) => {

            const isLastTwo =
              sectors.length % 3 === 2 &&
              index >= sectors.length - 2;

            const isLastOne =
              sectors.length % 3 === 1 &&
              index === sectors.length - 1;

            return (
              <div
                key={index}
                className={`
          relative
          w-full
          lg:col-span-3
          ${isLastTwo && index === sectors.length - 2 ? "lg:col-start-2" : ""}
          ${isLastTwo && index === sectors.length - 1 ? "lg:col-start-6" : ""}
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
                    {sec.icon}
                  </div>

                  <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-red-50 text-red-700 border border-red-100">
                    {sec.tag}
                  </span>

                </div>

                {/* Title */}
                <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 group-hover:text-red-600 transition-colors leading-snug mb-3">
                  {sec.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5 text-justify">
                  {sec.desc}
                </p>

                {/* Highlight */}
                <div className="mt-auto border-t border-slate-200/70 pt-3 flex items-center gap-1.5 text-xs font-semibold text-red-600">
                  <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />

                  <span>
                    {sec.highlight}
                  </span>
                </div>

              </div>
            );
          })}

        </div>

        {/* =====================================================
            CLIENT LIST
        ====================================================== */}

        <div
          className="
            rounded-3xl
            bg-slate-50
            border border-slate-200/90
            p-8 sm:p-10
          "
        >

          {/* Header + Search */}
          <div
            className="
              flex
              flex-col
              sm:flex-row
              sm:items-center
              justify-between
              gap-4
              mb-8
            "
          >

            {/* Heading */}
            <div className="w-full text-center">

              <div className="flex items-center justify-center gap-3 sm:gap-6 !mb-0">
                <span className="h-0.5 w-10 sm:w-20 md:w-28 bg-red-600 rounded-full shadow-sm" />

                <h3 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight text-center !mb-0">
                  Our{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-rose-600 to-red-700">
                    Client List
                  </span>
                </h3>

                <span className="h-0.5 w-10 sm:w-20 md:w-28 bg-red-600 rounded-full shadow-sm" />
              </div>

              <p className="text-sm sm:text-base text-slate-500 !mt-2 !pt-0 leading-tight">
                A selection of esteemed builders, institutions, and
                industrial leaders who trust Vishwas Sales.
              </p>

            </div>

            {/* Search */}


          </div>

          {/* =================================================
              CLIENT LOGOS GRID
          ================================================== */}

          {filteredClients.length > 0 ? (
            <>
              <div
                className="
        grid
        grid-cols-2
        sm:grid-cols-3
        md:grid-cols-4
        lg:grid-cols-6
        gap-3
      "
              >
                {visibleClients.map((client, index) => (
                  <div
                    key={`${client.name}-${index}`}
                    className="
  max-w-[98%]
  max-h-28
  sm:max-h-32
  object-contain
  transition-transform
  duration-300
  group-hover:scale-105
"
                  >
                    {/* Logo Container */}
                    <div
                      className="
                        flex-1
                        w-full
                        flex
                        items-center
                        justify-center
                        min-h-[100px]
                      "
                    >
                      <img
                        src={client.img}
                        alt={client.name}
                        title={client.name}
                        loading="lazy"
                        className="
                          max-w-[95%]
                          max-h-20
                          sm:max-h-24
                          object-contain
                          transition-transform
                          duration-300
                          group-hover:scale-105
                        "
                      />
                    </div>


                  </div>
                ))}
              </div>

              {/* PAGINATION */}
              {filteredClients.length > CLIENTS_PER_PAGE && (
                <div className="mt-8 flex items-center justify-center gap-4">
                  {/* Previous */}
                  <button
                    type="button"
                    onClick={goToPreviousPage}
                    disabled={clientPage === 0}
                    className="
            w-10 h-10
            rounded-xl
            border border-slate-200
            bg-white
            flex items-center justify-center
            text-slate-700
            hover:border-red-400
            hover:text-red-600
            hover:bg-red-50
            disabled:opacity-40
            disabled:cursor-not-allowed
            transition-all
          "
                    aria-label="Previous clients"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>

                  {/* Page Number */}
                  <span
                    className="
            text-sm
            font-semibold
            text-slate-600
            min-w-[80px]
            text-center
          "
                  >
                    Page {clientPage + 1} of {totalPages}
                  </span>

                  {/* Next */}
                  <button
                    type="button"
                    onClick={goToNextPage}
                    disabled={clientPage >= totalPages - 1}
                    className="
            w-10 h-10
            rounded-xl
            border border-slate-200
            bg-white
            flex items-center justify-center
            text-slate-700
            hover:border-red-400
            hover:text-red-600
            hover:bg-red-50
            disabled:opacity-40
            disabled:cursor-not-allowed
            transition-all
          "
                    aria-label="Next clients"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              )}
            </>
          ) : (

            /* =================================================
               NO RESULTS
            ================================================== */

            <div
              className="
                py-12
                text-center
                text-sm
                text-slate-500
              "
            >

              No clients found for

              <span className="font-semibold text-slate-700 ml-1">
                "{clientSearch}"
              </span>

            </div>

          )}

          {/* =================================================
              ASSOCIATED WITH
          ================================================== */}



        </div>

      </div>
    </section>
  );
}