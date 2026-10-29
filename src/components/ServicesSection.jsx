import React from 'react';
import {
  PhoneCall,
  CheckCircle2,
  ArrowUpRight,
  Sparkles,
} from 'lucide-react';

import { companyInfo, servicesList } from '../data/companyData';

export default function ServicesSection({ onOpenInquiry }) {
  return (
    <section
      id="services"
      className="bg-slate-50 py-14 sm:py-16 lg:py-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="mb-9 flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-red-100 bg-red-50 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-red-700">
              <Sparkles size={14} />
              Our Expertise
            </div>

            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Services You Can{' '}
              <span className="text-red-600">Trust</span>
            </h2>

            <p className="mt-3 max-w-xl text-sm leading-7 text-slate-600 sm:text-base">
              Reliable pump repair, installation, rental, and
              maintenance solutions for homes, societies, and
              businesses.
            </p>
          </div>

          {/* Contact Box */}
          <a
            href={`tel:${companyInfo.phone1.replace(/\s+/g, '')}`}
            className="group flex w-fit items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3 shadow-sm transition-all hover:border-red-200 hover:shadow-md"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-red-50 text-red-600 transition-colors group-hover:bg-red-600 group-hover:text-white">
              <PhoneCall size={19} />
            </span>

            <span>
              <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-500">
                Need assistance?
              </span>
              <span className="mt-0.5 block text-sm font-bold text-slate-900">
                Call Our Team
              </span>
              <span className="block text-xs text-slate-500">
                {companyInfo.phone1}
              </span>
            </span>
          </a>
        </div>

        {/* Services Grid */}

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {servicesList.map((service) => {
            const ServiceIcon = service.icon;

            return (
              <article
                key={service.id}
                className="group relative isolate flex min-h-[360px] flex-col overflow-hidden rounded-xl border border-slate-200 bg-slate-900 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                {/* Background Image */}
                <div
                  className="absolute inset-0 -z-20 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{
                    backgroundImage: `url("${service.image}")`,
                  }}
                  role="img"
                  aria-label={service.title}
                />

                {/* Dark Overlay */}
                <div className="absolute inset-0 -z-10 bg-gradient-to-t from-slate-950 via-slate-950/85 to-slate-900/30" />

                {/* Card Content */}
                <div className="flex flex-1 flex-col p-4">

                  {/* Icon and Category */}
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-white/20 bg-white/10 text-white backdrop-blur-sm transition-colors group-hover:bg-red-600">
                      {ServiceIcon && <ServiceIcon size={19} />}
                    </div>

                    <span className="rounded-full border border-white/20 bg-black/30 px-2.5 py-1 text-[9px] font-bold uppercase tracking-wide text-white backdrop-blur-sm">
                      {service.category}
                    </span>
                  </div>

                  {/* Service Information */}
                  <div className="mt-auto pt-8">
                    {service.tag && (
                      <p className="mb-1.5 text-[9px] font-bold uppercase tracking-widest text-red-300">
                        {service.tag}
                      </p>
                    )}

                    <h3 className="text-lg font-extrabold leading-snug text-white">
                      {service.title}
                    </h3>

                    <p className="mt-2 text-xs leading-5 text-slate-200">
                      {service.desc}
                    </p>
                  </div>

                  {/* Service Highlights */}
                  <div className="mt-3 border-t border-white/20 pt-3">
                    <p className="mb-2 text-[9px] font-bold uppercase tracking-widest text-slate-300">
                      What We Offer
                    </p>

                    <ul className="space-y-1.5">
                      {service.deliverables.slice(0, 2).map((item, index) => (
                        <li
                          key={index}
                          className="flex items-start gap-2 text-[11px] leading-4 text-slate-100"
                        >
                          <CheckCircle2
                            size={13}
                            className="mt-0.5 shrink-0 text-red-400"
                          />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Inquiry Button */}
                  <button
                    type="button"
                    onClick={() => onOpenInquiry?.(service.title)}
                    className="mt-4 flex w-full items-center justify-between rounded-lg border border-white/25 bg-white/10 px-3 py-2.5 text-xs font-bold text-white backdrop-blur-sm transition-all hover:border-red-600 hover:bg-red-600"
                  >
                    <span>{service.cta}</span>
                    <ArrowUpRight size={15} />
                  </button>
                </div>
              </article>
            );
          })}
        </div>


        {/* Bottom Contact Strip */}
        <div className="mt-8 flex flex-col items-start justify-between gap-4 rounded-2xl bg-slate-900 px-5 py-5 text-white sm:flex-row sm:items-center sm:px-7">
          <div>
            <h3 className="text-base font-bold sm:text-lg">
              Looking for the right pump solution?
            </h3>
            <p className="mt-1 text-xs leading-5 text-slate-300">
              Talk to our team about your service requirements.
            </p>
          </div>

          <button
            type="button"
            onClick={() =>
              onOpenInquiry?.('General Service Inquiry')
            }
            className="inline-flex shrink-0 items-center gap-2 rounded-lg bg-red-600 px-4 py-2.5 text-sm font-bold text-white transition-colors hover:bg-red-700"
          >
            Get in Touch
            <ArrowUpRight size={16} />
          </button>
        </div>

      </div>
    </section>
  );
}