
import React from 'react';
import { PhoneCall } from 'lucide-react';
import { companyInfo } from '../data/companyData';

export default function BreakdownHotlineBar({ onOpenInquiry }) {
  const phoneNumber = companyInfo.phone1.replace(/\s+/g, '');

  return (
    <div className="relative z-30 -mt-8 sm:-mt-10 md:-mt-12 lg:-mt-14 w-full max-w-4xl mx-auto px-3 sm:px-6 lg:px-8">
      <div className="w-full min-w-0 bg-gradient-to-r from-red-50/40 via-white to-white rounded-2xl sm:rounded-3xl shadow-2xl shadow-slate-950/15 border border-red-100/80 hover:border-red-300 p-4 sm:p-5 lg:p-6 transition-all flex flex-col sm:flex-row items-center justify-between gap-4">

        {/* Left Side: Icon & Phone Number */}
        <div className="flex items-center gap-3.5 sm:gap-4 min-w-0 w-full sm:w-auto">
          <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-red-600 text-white flex items-center justify-center shrink-0 shadow-md shadow-red-600/30">
            <PhoneCall className="w-5 h-5 animate-bounce" />
          </div>

          <div className="min-w-0">
            <span className="text-[10px] sm:text-[11px] uppercase font-bold text-red-600 tracking-wider block">
              Breakdown Technical Hotline
            </span>

            <a
              href={`tel:${phoneNumber}`}
              className="text-lg sm:text-xl font-black text-slate-900 hover:text-red-600 transition-colors whitespace-nowrap"
            >
              {companyInfo.phone1}
            </a>
          </div>
        </div>

        {/* Right Side: Action Buttons */}
        <div className="flex items-center gap-2 sm:gap-3 w-full sm:w-auto min-w-0">

          <button
            onClick={() => onOpenInquiry?.('Breakdown Emergency Service')}
            className="flex-1 sm:flex-none min-w-0 px-2 sm:px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold transition-all border border-slate-200 cursor-pointer whitespace-nowrap"
          >
            Book Service
          </button>

          <a
            href={`tel:${phoneNumber}`}
            className="flex-1 sm:flex-none min-w-0 inline-flex items-center justify-center gap-2 px-3 sm:px-6 py-2.5 rounded-xl bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-700 hover:to-rose-700 text-white text-xs font-bold uppercase tracking-wider transition-all shadow-md shadow-red-600/25 active:scale-95 whitespace-nowrap"
          >
            <PhoneCall className="w-3.5 h-3.5 shrink-0" />
            Call Now
          </a>

        </div>
      </div>
    </div>
  );
}
