import React, { useState } from 'react';
import { prominentClients, sectors } from '../data/companyData';
import {
  Building2,
  Hospital,
  Home,
  Factory,
  Share2,
  Search,
  ArrowRight,
  Users,
} from 'lucide-react';

const CLIENTS_PER_PAGE = 12;

// Map icon names from companyData.js to Lucide components.
const iconMap = {
  Share2,
  Building2,
  Hospital,
  Home,
  Factory,
};

export default function ClientsSection({ onOpenInquiry }) {
  const [clientSearch, setClientSearch] = useState('');
  const [currentPage, setCurrentPage] = useState(0);

  // Search clients by name.
  const filteredClients = prominentClients.filter((client) =>
    client.name
      .toLowerCase()
      .includes(clientSearch.trim().toLowerCase())
  );

  // Pagination.
  const totalPages = Math.ceil(
    filteredClients.length / CLIENTS_PER_PAGE
  );

  const visibleClients = filteredClients.slice(
    currentPage * CLIENTS_PER_PAGE,
    (currentPage + 1) * CLIENTS_PER_PAGE
  );

  const handleSearch = (value) => {
    setClientSearch(value);
    setCurrentPage(0);
  };

  return (
    <section id="clients" className="bg-white py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Section heading */}
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-red-50 px-4 py-2 text-xs font-bold uppercase tracking-wider text-red-700">
            <Users size={15} />
            Our Network
          </span>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Our Clients &amp; Partners
          </h2>

          <p className="mt-3 text-sm leading-6 text-slate-600 sm:text-base">
            Building trusted relationships with dealers, builders,
            institutions, housing societies, and industries.
          </p>
        </div>

        {/* Business sector cards */}
        <div className="mb-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {sectors.map((sector) => {
            const Icon = iconMap[sector.icon] || Building2;

            return (
              <article
                key={sector.title}
                className="group relative isolate flex min-h-[240px] flex-col justify-end overflow-hidden rounded-2xl bg-slate-900 p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:min-h-[260px]"
              >
                {/* Background image */}
                <img
                  src={sector.image}
                  alt=""
                  aria-hidden="true"
                  loading="lazy"
                  className="absolute inset-0 -z-20 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Dark gradient overlay */}
                <div className="absolute inset-0 -z-10 bg-gradient-to-t from-slate-950/95 via-slate-900/45 to-slate-900/10" />

                {/* Sector icon */}
                <div className="mb-auto flex h-11 w-11 items-center justify-center rounded-xl border border-white/30 bg-white/15 text-white backdrop-blur-sm">
                  <Icon size={22} />
                </div>

                {/* Sector details */}
                <div className="mt-8">
                  <h3 className="text-lg font-bold text-white sm:text-xl">
                    {sector.title}
                  </h3>

                  <p className="mt-2 max-w-sm text-sm leading-6 text-white/85">
                    {sector.description}
                  </p>

                  <div className="mt-4 h-1 w-10 rounded-full bg-red-500 transition-all duration-300 group-hover:w-16" />
                </div>
              </article>
            );
          })}

          {/* Dealer inquiry card */}
          <article className="relative isolate flex min-h-[240px] flex-col justify-between overflow-hidden rounded-2xl bg-slate-900 p-5 text-white shadow-sm sm:min-h-[260px]">
            {/* Decorative background */}
            <div className="absolute -right-10 -top-10 -z-10 h-40 w-40 rounded-full bg-red-600/20 blur-3xl" />
            <div className="absolute -bottom-16 -left-10 -z-10 h-40 w-40 rounded-full bg-blue-500/15 blur-3xl" />

            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-red-400">
                Partner With Us
              </span>

              <h3 className="mt-3 text-xl font-bold sm:text-2xl">
                Become a Dealer
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-300">
                Interested in our products? Contact us to explore
                dealership opportunities.
              </p>
            </div>

            <button
              type="button"
              onClick={() =>
                onOpenInquiry?.('New Dealership Application')
              }
              className="mt-6 inline-flex w-fit items-center gap-2 rounded-lg bg-red-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2 focus:ring-offset-slate-900"
            >
              Enquire Now
              <ArrowRight size={16} />
            </button>
          </article>
        </div>

        {/* Client directory */}
        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 sm:p-6 lg:p-8">

          {/* Directory heading and search */}
          <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h3 className="text-xl font-bold text-slate-900">
                Our Client Directory
              </h3>

              <p className="mt-1 text-sm text-slate-500">
                Explore the organizations in our network.
              </p>
            </div>

            <div className="relative w-full sm:max-w-xs">
              <Search
                size={18}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
              />

              <input
                type="search"
                value={clientSearch}
                onChange={(event) =>
                  handleSearch(event.target.value)
                }
                placeholder="Search clients..."
                aria-label="Search clients"
                className="w-full rounded-xl border border-slate-200 bg-white py-3 pl-10 pr-4 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-red-400 focus:ring-2 focus:ring-red-100"
              />
            </div>
          </div>

          {/* Client logo grid */}
          {visibleClients.length > 0 ? (
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
              {visibleClients.map((client) => (
                <div
                  key={client.name}
                  title={client.name}
                  className="flex h-24 items-center justify-center overflow-hidden rounded-xl border border-slate-200 bg-white p-3 transition hover:border-red-200 hover:shadow-sm sm:h-28"
                >
                  <img
                    src={client.img}
                    alt={client.name}
                    loading="lazy"
                    className="max-h-full max-w-full object-contain"
                    onError={(event) => {
                      event.currentTarget.style.display = 'none';
                    }}
                  />
                </div>
              ))}
            </div>
          ) : (
            <div className="py-10 text-center">
              <Search
                className="mx-auto mb-3 text-slate-400"
                size={28}
              />

              <p className="font-semibold text-slate-800">
                No clients found
              </p>

              <p className="mt-1 text-sm text-slate-500">
                Try another company name.
              </p>
            </div>
          )}

          {/* Pagination */}
          {filteredClients.length > 0 && (
            <div className="mt-6 flex flex-col gap-4 border-t border-slate-200 pt-5 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm text-slate-500">
                Showing{' '}
                <span className="font-semibold text-slate-800">
                  {currentPage * CLIENTS_PER_PAGE + 1}–
                  {Math.min(
                    (currentPage + 1) * CLIENTS_PER_PAGE,
                    filteredClients.length
                  )}
                </span>{' '}
                of {filteredClients.length} clients
              </p>

              {totalPages > 1 && (
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() =>
                      setCurrentPage((page) =>
                        Math.max(0, page - 1)
                      )
                    }
                    disabled={currentPage === 0}
                    className="rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-red-300 hover:text-red-600 disabled:cursor-not-allowed disabled:opacity-40"
                  >
                    Previous
                  </button>

                  <span className="whitespace-nowrap text-sm text-slate-600">
                    {currentPage + 1} / {totalPages}
                  </span>

                  <button
                    type="button"
                    onClick={() =>
                      setCurrentPage((page) =>
                        Math.min(totalPages - 1, page + 1)
                      )
                    }
                    disabled={currentPage >= totalPages - 1}
                    className="rounded-lg bg-red-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-red-700 disabled:cursor-not-allowed disabled:bg-slate-300"
                  >
                    Next
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
