import React, { useState } from 'react';
import { X, Phone, MessageSquare, CheckCircle2, ShieldCheck } from 'lucide-react';
import { companyInfo } from '../data/companyData';

export default function InquiryModal({ isOpen, onClose, initialService = '' }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    society: '',
    service: initialService || 'Water Pump Repair & Service',
    notes: ''
  });
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = encodeURIComponent(
      `*New Inquiry - Vishwas Sales Website*\n\nName: ${formData.name}\nPhone: ${formData.phone}\nSociety/Company: ${formData.society}\nRequirement: ${formData.service}\nDetails: ${formData.notes}`
    );
    window.open(`https://wa.me/919923122448?text=${text}`, '_blank');
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fadeIn">
      <div className="relative w-full max-w-lg bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-100 max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="mb-6">
          <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-red-600 mb-1">
            <ShieldCheck className="w-4 h-4" />
            <span>Fast Technical Response</span>
          </div>
          <h3 className="text-2xl font-black text-slate-900">
            Request Quotation / Service
          </h3>
          <p className="text-xs text-slate-500 mt-1">
            Connect directly with Vishwas Sales Corporation. We provide on-call mechanics, standby pumps, and authorized brand quotes.
          </p>
        </div>

        {submitted ? (
          <div className="text-center py-8">
            <CheckCircle2 className="w-14 h-14 text-emerald-600 mx-auto mb-3" />
            <h4 className="text-xl font-bold text-slate-900">Inquiry Received</h4>
            <p className="text-xs text-slate-600 mt-1">
              Your inquiry has been opened on WhatsApp. We will respond promptly!
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="mt-6 px-6 py-2.5 rounded-xl bg-slate-900 text-white font-bold text-xs uppercase"
            >
              Close Window
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">
                Your Full Name *
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Anand Shinde"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="e.g. 98765 43210"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">
                  Society / Firm
                </label>
                <input
                  type="text"
                  placeholder="e.g. Kumar City CHS"
                  value={formData.society}
                  onChange={(e) => setFormData({ ...formData, society: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">
                Service / Product Interested In
              </label>
              <select
                value={formData.service}
                onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-red-500"
              >
                <option>Water Pump Repair & Motor Rewinding</option>
                <option>On-Call Emergency Breakdown Mechanic</option>
                <option>Housing Society Energy Audit</option>
                <option>Standby Pump / Dewatering Rental</option>
                <option>C.R.I. Pumps Purchase Quote</option>
                <option>Raksha / Ashirvad Pipes Bulk Order</option>
                <option>Leader Valves & Autocon Panels</option>
                <option>Sintex Tanks & Solar Water Heaters</option>
                <option>Join 800+ Dealer Network</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">
                Notes or Specific Problem
              </label>
              <textarea
                rows={3}
                placeholder="Give details about pump type, HP, or site address..."
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>

            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-gradient-to-r from-red-600 to-rose-700 text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-red-600/30 hover:from-red-700 hover:to-rose-800 transition-all"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Connect via WhatsApp Desk</span>
            </button>

            <div className="pt-3 text-center border-t border-slate-100">
              <span className="text-[11px] text-slate-500">Need instant breakdown service right now?</span>
              <a
                href={`tel:${companyInfo.phone1.replace(/\s+/g, '')}`}
                className="flex items-center justify-center gap-1.5 text-xs font-extrabold text-red-600 mt-1 hover:underline"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call Directly: {companyInfo.phone1}</span>
              </a>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
