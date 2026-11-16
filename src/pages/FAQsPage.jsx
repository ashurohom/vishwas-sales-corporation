import React, { useState } from 'react';
import { HelpCircle, ChevronDown, Phone, MessageSquare, ArrowRight } from 'lucide-react';
import { faqsData } from '../data/faqsData';
import { companyInfo } from '../data/companyData';
import { Link } from 'react-router-dom';

export default function FAQsPage({ onOpenInquiry }) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Page Header */}
      <div
        className="relative bg-slate-950 text-white py-16 border-b border-slate-800 bg-no-repeat bg-cover bg-center bg-[url('/faq_hero_bg_mobile.png')] sm:bg-[url('/faq_hero_bg.png')]"
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-slate-950/45"></div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-500/10 border border-red-500/25 text-red-400 text-xs font-semibold mb-3 sm:mb-4 shadow-sm">
            <HelpCircle className="w-4 h-4" />
            <span>Frequently Asked Questions</span>
          </div>

          {/* Heading */}
          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-[2.6rem] xl:text-[3.25rem] font-black tracking-tight leading-[1.16] text-white">
            Frequently Asked Questions
          </h1>

          {/* Description */}
          <p className="mt-4 text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Find answers to common questions regarding water pump repairs,
            emergency standby pumps, housing society energy audits,
            dewatering rentals, and authorized dealership.
          </p>

        </div>
      </div>

      {/* Accordion List */}
      <section className="py-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-4">
          {faqsData.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden transition-all"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-slate-50 transition-colors"
                >
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-red-600 block mb-1">
                      {faq.category}
                    </span>
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 pr-4">
                      {faq.question}
                    </h3>
                  </div>

                  <div className={`p-2 rounded-xl bg-slate-100 text-slate-600 transition-transform ${isOpen ? 'rotate-180 bg-red-50 text-red-600' : ''
                    }`}>
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-sm text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/50">
                    <p className="text-justify leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still Have Questions Box */}
        <div className="mt-14 p-8 rounded-3xl bg-white border border-slate-200 shadow-lg text-center">
          <h3 className="text-xl font-black text-slate-900">
            Have a Specific Technical Question?
          </h3>
          <p className="text-xs sm:text-sm text-slate-500 mt-1 max-w-lg mx-auto">
            Our engineering team in Hadapsar, Pune is available on call to answer any pump sizing, hydraulic flow, or pipeline compatibility questions.
          </p>

          <div className="mt-6 flex flex-wrap justify-center gap-4">


            <button
              onClick={() => onOpenInquiry && onOpenInquiry('FAQ Custom Inquiry')}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold  tracking-wider transition-all"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Ask a Question Online</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
