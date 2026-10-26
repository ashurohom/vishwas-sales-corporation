import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle2, 
  ExternalLink,
  MessageSquare,
  ShieldCheck,
  Building
} from 'lucide-react';
import { companyInfo } from '../data/companyData';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    organization: '',
    serviceType: 'Pump Repair / Maintenance',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Generate WhatsApp direct lead link
    const text = encodeURIComponent(
      `Hello Vishwas Sales Corporation,\n\nName: ${formData.name}\nPhone: ${formData.phone}\nOrg/Society: ${formData.organization}\nRequirement: ${formData.serviceType}\nDetails: ${formData.message}`
    );
    window.open(`https://wa.me/919923122448?text=${text}`, '_blank');
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-100 text-red-700 text-xs font-bold uppercase tracking-wider mb-3">
            <span>Get in Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            CONTACT VISHWAS SALES CORPORATION
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            Need an immediate on-call mechanic, standby pump, society energy audit, or bulk 
            wholesale quotation? Reach our technical desk in Hadapsar, Pune.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Official Contact Info */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Office Address Card */}
            <div className="rounded-3xl bg-white p-7 border border-slate-200 shadow-sm space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-red-50 text-red-600 flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-wider text-slate-400">
                    Corporate Office & Showroom
                  </h4>
                  <p className="text-base font-extrabold text-slate-900 mt-1 leading-snug">
                    {companyInfo.address}
                  </p>
                  <p className="text-xs text-slate-500 mt-1">
                    Landmark: Near HP Petrol Pump, Gadital, Hadapsar, Pune
                  </p>
                  <a 
                    href={companyInfo.googleMapsUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-red-600 hover:text-red-700 mt-3"
                  >
                    <span>View Location on Google Maps</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Phone Contacts */}
              <div className="pt-6 border-t border-slate-100 flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-red-50 text-red-600 flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-wider text-slate-400">
                    Sales & Emergency Breakdown Hotline
                  </h4>
                  <div className="mt-1 space-y-1">
                    <div>
                      <a 
                        href={`tel:${companyInfo.phone1.replace(/\s+/g, '')}`} 
                        className="text-lg font-black text-slate-900 hover:text-red-600 transition-colors"
                      >
                        {companyInfo.phone1}
                      </a>
                    </div>
                    <div>
                      <a 
                        href={`tel:${companyInfo.phone2.replace(/\s+/g, '')}`} 
                        className="text-lg font-black text-slate-900 hover:text-red-600 transition-colors"
                      >
                        {companyInfo.phone2}
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="pt-6 border-t border-slate-100 flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-red-50 text-red-600 flex items-center justify-center shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-wider text-slate-400">
                    Official Email Inquiries
                  </h4>
                  <a 
                    href={`mailto:${companyInfo.email}`} 
                    className="text-sm font-bold text-slate-900 hover:text-red-600 break-all transition-colors mt-1 block"
                  >
                    {companyInfo.email}
                  </a>
                </div>
              </div>

              {/* Working Hours */}
              <div className="pt-6 border-t border-slate-100 flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-red-50 text-red-600 flex items-center justify-center shrink-0">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-wider text-slate-400">
                    Operational Timings
                  </h4>
                  <p className="text-sm font-bold text-slate-900 mt-1">
                    {companyInfo.hours}
                  </p>
                  <p className="text-xs text-slate-500">
                    Breakdown mechanics available on-call 24/7 for emergency society outages.
                  </p>
                </div>
              </div>
            </div>

            {/* Credential Quick Banner */}
            <div className="rounded-3xl bg-slate-900 text-white p-6 border border-slate-800 flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-red-600 text-white flex items-center justify-center shrink-0 font-black text-xl">
                ★
              </div>
              <div>
                <h4 className="text-sm font-bold text-white">Serving Pune & Maharashtra Since 1985</h4>
                <p className="text-xs text-slate-400 mt-0.5">
                  Over 40 Years of Dependability in Pumps, Motors, and Pipelines.
                </p>
              </div>
            </div>

          </div>

          {/* Right Column: Inquiry / Quotation Form */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl bg-white p-8 sm:p-10 border border-slate-200 shadow-xl">
              <div className="mb-6">
                <h3 className="text-2xl font-black text-slate-900">
                  Send Your Inquiry / Request Quotation
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Fill in your requirements below. Our technical desk will reach out with pricing, technical datasheets, or mechanic dispatch.
                </p>
              </div>

              {submitted ? (
                <div className="p-8 rounded-2xl bg-emerald-50 border border-emerald-200 text-center">
                  <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto mb-3" />
                  <h4 className="text-lg font-bold text-emerald-900">Thank You for Inquiring!</h4>
                  <p className="text-xs text-emerald-700 mt-1">
                    Your inquiry details have been forwarded to our technical dispatch team on WhatsApp.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 px-5 py-2 rounded-xl bg-emerald-600 text-white text-xs font-bold hover:bg-emerald-700"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                        Your Full Name *
                      </label>
                      <input 
                        type="text"
                        required
                        placeholder="e.g. Rahul Patil"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-red-500 focus:bg-white"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                        Phone Number *
                      </label>
                      <input 
                        type="tel"
                        required
                        placeholder="e.g. 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-red-500 focus:bg-white"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                        Email Address
                      </label>
                      <input 
                        type="email"
                        placeholder="e.g. rahul@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-red-500 focus:bg-white"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                        Housing Society / Company Name
                      </label>
                      <input 
                        type="text"
                        placeholder="e.g. Silver Oak CHS / L&T Project"
                        value={formData.organization}
                        onChange={(e) => setFormData({...formData, organization: e.target.value})}
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-red-500 focus:bg-white"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                      Service or Product Required *
                    </label>
                    <select
                      value={formData.serviceType}
                      onChange={(e) => setFormData({...formData, serviceType: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-red-500 focus:bg-white font-medium"
                    >
                      <option>Pump Repair / Motor Rewinding</option>
                      <option>On-Call Emergency Mechanic</option>
                      <option>Housing Society Energy Audit</option>
                      <option>Standby Pump / Dewatering Rental</option>
                      <option>New Water Pump Purchase (C.R.I. Pumps)</option>
                      <option>Pipes & Drainage Bulk Order (Raksha / Ashirvad / Huliot)</option>
                      <option>Valves & Control Panels (Leader / Autocon)</option>
                      <option>Sintex Tanks & Solar Water Heaters</option>
                      <option>Join 800+ Dealer Network</option>
                      <option>Other Requirements</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                      Message / Project Scope / Pump Specifications
                    </label>
                    <textarea 
                      rows={4}
                      placeholder="Please specify HP rating, society location, or product quantities..."
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-red-500 focus:bg-white"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 py-4 px-6 rounded-xl bg-gradient-to-r from-red-600 to-rose-700 hover:from-red-700 hover:to-rose-800 text-white font-bold text-sm shadow-xl shadow-red-600/30 transition-all hover:-translate-y-0.5 active:translate-y-0"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Send Inquiry to WhatsApp Technical Desk</span>
                  </button>

                  <p className="text-[11px] text-center text-slate-400 mt-2">
                    🔒 Direct connection with Vishwas Sales Corporation management. Immediate reply during office hours.
                  </p>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
