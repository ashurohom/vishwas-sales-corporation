
import React, { useState } from 'react';
import {
  HelpCircle,
  ChevronDown,
  MessageSquare,
  ArrowRight,
  Headset,
  ShieldCheck,
  Wrench,
} from 'lucide-react';
import { faqsData } from '../data/faqsData';
import { companyInfo } from '../data/companyData';

export default function FAQsPage({ onOpenInquiry }) {
  const [openIndex, setOpenIndex] = useState(0);

  const phoneNumber = companyInfo.phone1?.replace(/[^\d+]/g, '');

  return (
    <main className="min-h-screen bg-slate-50">
      {/* Page Header */}
      <section className="relative isolate overflow-hidden border-b border-slate-800 bg-gradient-to-br from-slate-950 via-slate-900 to-red-950 py-16 text-white sm:py-20 lg:py-24">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-20 -top-24 -z-10 h-72 w-72 rounded-full bg-red-600/10 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-24 -left-20 -z-10 h-64 w-64 rounded-full bg-blue-500/10 blur-3xl"
        />

        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-red-400/30 bg-red-500/15 px-4 py-2 text-xs font-bold uppercase tracking-widest text-red-300">
            <HelpCircle className="h-4 w-4" />
            Frequently Asked Questions
          </div>

          <h1 className="text-3xl font-black uppercase tracking-tight text-white sm:text-4xl lg:text-5xl">
            How Can We Help You?
          </h1>

          <div className="mx-auto mt-5 h-1 w-20 rounded-full bg-red-500" />

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">
            Find answers to common questions about water pump repairs,
            standby pumps, energy audits, dewatering rentals, and our
            plumbing and pumping solutions.
          </p>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="mx-auto max-w-4xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
        <div className="mb-9 text-center">
          <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-red-600">
            Quick Answers
          </span>

          <h2 className="mt-2 text-2xl font-black text-slate-900 sm:text-3xl">
            Frequently Asked Questions
          </h2>

          <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-slate-500">
            Everything you need to know about our products and services.
          </p>
        </div>

        {faqsData?.length > 0 ? (
          <div className="space-y-4">
            {faqsData.map((faq, index) => {
              const isOpen = openIndex === index;
              const answerId = `faq-answer-${index}`;
              const questionId = `faq-question-${index}`;

              return (
                <article
                  key={faq.question ?? index}
                  className={`overflow-hidden rounded-2xl border bg-white transition-all duration-300 ${
                    isOpen
                      ? 'border-red-200 shadow-lg shadow-red-950/5'
                      : 'border-slate-200 shadow-sm hover:border-red-200 hover:shadow-md'
                  }`}
                >
                  <h3>
                    <button
                      id={questionId}
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={answerId}
                      onClick={() =>
                        setOpenIndex(isOpen ? -1 : index)
                      }
                      className={`flex w-full items-center justify-between gap-4 p-5 text-left transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-red-500 sm:p-6 ${
                        isOpen
                          ? 'bg-red-50/70'
                          : 'bg-white hover:bg-slate-50'
                      }`}
                    >
                      <div className="flex min-w-0 items-start gap-4">
                        <div
                          className={`mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl transition-colors ${
                            isOpen
                              ? 'bg-red-600 text-white shadow-md shadow-red-600/20'
                              : 'bg-slate-100 text-slate-600'
                          }`}
                        >
                          <HelpCircle
                            aria-hidden="true"
                            className="h-5 w-5"
                          />
                        </div>

                        <div className="min-w-0">
                          {faq.category && (
                            <span className="mb-1.5 inline-flex rounded-md bg-red-50 px-2 py-1 text-[10px] font-extrabold uppercase tracking-wider text-red-700">
                              {faq.category}
                            </span>
                          )}

                          <span className="block text-sm font-bold leading-6 text-slate-900 sm:text-base">
                            {faq.question}
                          </span>
                        </div>
                      </div>

                      <span
                        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                          isOpen
                            ? 'rotate-180 bg-red-600 text-white'
                            : 'bg-slate-100 text-slate-600'
                        }`}
                      >
                        <ChevronDown
                          aria-hidden="true"
                          className="h-5 w-5"
                        />
                      </span>
                    </button>
                  </h3>

                  {isOpen && (
                    <div
                      id={answerId}
                      role="region"
                      aria-labelledby={questionId}
                      className="border-t border-red-100 bg-gradient-to-br from-white to-red-50/40"
                    >
                      <div className="flex gap-3 px-5 py-5 sm:px-6 sm:py-6">
                        <div
                          aria-hidden="true"
                          className="w-1 shrink-0 self-stretch rounded-full bg-red-500"
                        />

                        <p className="text-sm leading-7 text-slate-600 sm:text-base">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  )}
                </article>
              );
            })}
          </div>
        ) : (
          <div className="rounded-2xl border border-slate-200 bg-white px-6 py-12 text-center">
            <HelpCircle className="mx-auto h-10 w-10 text-slate-400" />
            <p className="mt-4 font-semibold text-slate-800">
              FAQs are being updated.
            </p>
            <p className="mt-2 text-sm text-slate-500">
              Contact our team if you need help with a product or service.
            </p>
          </div>
        )}

        {/* Technical Support CTA */}
        <section
          aria-labelledby="faq-support-title"
          className="relative mt-14 overflow-hidden rounded-3xl bg-gradient-to-br from-slate-950 via-slate-900 to-red-950 p-7 text-center shadow-xl shadow-slate-900/10 sm:p-10 lg:p-12"
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full border-[24px] border-white/5"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-16 -left-12 h-48 w-48 rounded-full border-[30px] border-red-500/10"
          />

          <div className="relative">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-red-400/30 bg-red-500/15 text-red-300">
              <Headset className="h-8 w-8" />
            </div>

            <span className="mt-5 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-red-300">
              <ShieldCheck className="h-4 w-4" />
              Technical Support
            </span>

            <h2
              id="faq-support-title"
              className="mt-3 text-xl font-black text-white sm:text-2xl"
            >
              Still Have Questions?
            </h2>

            <p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-slate-300">
              Need help with pump selection, water supply systems, or
              product enquiries? Contact our team for assistance with
              your requirements.
            </p>

            <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
              <button
                type="button"
                onClick={() =>
                  onOpenInquiry?.('FAQ Custom Inquiry')
                }
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-red-600 px-6 py-3.5 text-xs font-extrabold uppercase tracking-wider text-white shadow-lg shadow-red-950/30 transition-all duration-300 hover:-translate-y-0.5 hover:bg-red-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
              >
                <MessageSquare className="h-4 w-4" />
                Ask a Question
                <ArrowRight className="h-4 w-4" />
              </button>

              {phoneNumber ? (
                <a
                  href={`tel:${phoneNumber}`}
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/5 px-6 py-3.5 text-xs font-extrabold uppercase tracking-wider text-white transition-all duration-300 hover:border-white/40 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                >
                  <Wrench className="h-4 w-4 text-red-300" />
                  Call Our Team
                </a>
              ) : (
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/5 px-6 py-3.5 text-xs font-extrabold uppercase tracking-wider text-white transition-all duration-300 hover:border-white/40 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                >
                  <MessageSquare className="h-4 w-4 text-red-300" />
                  Contact Our Team
                </a>
              )}
            </div>

            <p className="mt-5 text-xs text-slate-400">
              Vishwas Sales Corporation · Hadapsar, Pune
            </p>
          </div>
        </section>
      </section>
    </main>
  );
}
