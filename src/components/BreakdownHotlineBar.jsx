import React from 'react';
import { PhoneCall } from 'lucide-react';
import { companyInfo } from '../data/companyData';

export default function BreakdownHotlineBar({ onOpenInquiry }) {
  return (
    <div className="relative z-30 -mt-5 sm:-mt-6 md:-mt-8 lg:-mt-9 max-w-2xl mx-auto px-4 sm:px-6">
      <div className="bg-white rounded-2xl sm:rounded-3xl shadow-xl shadow-slate-950/10 border border-slate-200/90 p-4 sm:py-4.5 sm:px-6 transition-all flex flex-col sm:flex-row items-center justify-between gap-4">
        
        {/* Left Side: Icon & Phone Number */}
        <div className="flex items-center gap-3.5 sm:gap-4 min-w-0">
          <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-red-600 text-white flex items-center justify-center shrink-0 shadow-md shadow-red-600/30">
            <PhoneCall className="w-5 h-5 animate-bounce" />
          </div>
          <div>
            <span className="text-[10px] sm:text-[11px] uppercase font-bold text-red-600 tracking-wider block">
              Breakdown Technical Hotline
            </span>
            <a 
              href={`tel:${companyInfo.phone1.replace(/\s+/g, '')}`} 
              className="text-lg sm:text-xl font-black text-slate-900 hover:text-red-600 transition-colors"
            >
              {companyInfo.phone1}
            </a>
          </div>
        </div>

        {/* Right Side: Action Button */}
        <div className="flex items-center w-full sm:w-auto shrink-0">
          <a
            href={`tel:${companyInfo.phone1.replace(/\s+/g, '')}`}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-700 hover:to-rose-700 text-white text-xs font-bold uppercase tracking-wider transition-all shadow-md shadow-red-600/25 active:scale-95 shrink-0"
          >
            Call Now
          </a>
        </div>

      </div>
    </div>
  );
}
