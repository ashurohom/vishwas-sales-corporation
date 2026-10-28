import React from 'react';
import ContactSection from '../components/ContactSection';
import { MapPin, Phone, Mail, Clock, MessageSquare } from 'lucide-react';
import { companyInfo } from '../data/companyData';

export default function ContactPage() {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Page Header */}
      <div className="bg-slate-950 text-white py-16 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/20 text-red-400 text-xs font-bold uppercase tracking-wider mb-4">
            <MapPin className="w-3.5 h-3.5" />
            <span>Corporate Showroom & In-House Technical Workshop</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-black tracking-tight text-white uppercase">
            Contact Vishwas Sales Corporation
          </h1>
          <p className="mt-4 text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Headquartered at Hadapsar, Pune-Solapur Road. Connect with our sales engineering desk 
            for urgent pump repairs, standby pump requests, or project supply quotations.
          </p>
        </div>
      </div>

      {/* Contact Section Component */}
      <ContactSection />
    </div>
  );
}
