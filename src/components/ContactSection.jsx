import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

import {
  Phone,
  Mail,
  MapPin,
  Clock,
  CheckCircle2,
  ExternalLink,
} from 'lucide-react';

import { companyInfo } from '../data/companyData';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    organization: '',
    serviceType: 'Pump Repair / Maintenance',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [emailLoading, setEmailLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // Validate form
  const validateForm = () => {
    if (!formData.name.trim()) {
      alert('Please enter your full name.');
      return false;
    }

    if (!formData.phone.trim()) {
      alert('Please enter your phone number.');
      return false;
    }

    if (!formData.email.trim()) {
      alert('Please enter your email address.');
      return false;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      alert('Please enter a valid email address.');
      return false;
    }

    if (!formData.serviceType.trim()) {
      alert('Please select a service or product.');
      return false;
    }

    return true;
  };

  // Automatically send enquiry using EmailJS
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setEmailLoading(true);
    setErrorMessage('');

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          // These names must match your EmailJS template variables
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          society: formData.organization || 'Not provided',
          service: formData.serviceType,
          notes: formData.message || 'Not provided',
        },
        {
          publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        }
      );

      // Show success only after email is sent
      setSubmitted(true);

    } catch (error) {
      console.error('Email sending failed:', error);

      setErrorMessage(
        'Unable to send your enquiry. Please try again.'
      );

    } finally {
      setEmailLoading(false);
    }
  };

  // Reset form
  const handleReset = () => {
    setFormData({
      name: '',
      phone: '',
      email: '',
      organization: '',
      serviceType: 'Pump Repair / Maintenance',
      message: '',
    });

    setSubmitted(false);
    setErrorMessage('');
  };

  return (
    <section
      id="contact"
      className="py-20 bg-slate-50 border-b border-slate-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* MAIN GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">

          {/* LEFT COLUMN */}
          <div className="lg:col-span-5 flex flex-col gap-6">

            {/* OFFICE ADDRESS */}
            <div className="rounded-3xl bg-white p-6 border border-slate-200 shadow-sm space-y-5">

              <div className="flex items-start gap-4">

                <div className="w-12 h-12 rounded-2xl bg-red-50 text-red-600 flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>

                <div>
                  <h4 className="text-sm font-bold  tracking-wider text-slate-400">
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

              {/* PHONE */}
              <div className="pt-5 border-t border-slate-100 flex items-start gap-4">

                <div className="w-12 h-12 rounded-2xl bg-red-50 text-red-600 flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6" />
                </div>

                <div>
                  <h4 className="text-sm font-bold  tracking-wider text-slate-400">
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

              {/* EMAIL */}
              <div className="pt-5 border-t border-slate-100 flex items-start gap-4">

                <div className="w-12 h-12 rounded-2xl bg-red-50 text-red-600 flex items-center justify-center shrink-0">
                  <Mail className="w-6 h-6" />
                </div>

                <div>
                  <h4 className="text-sm font-bold  tracking-wider text-slate-400">
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

              {/* WORKING HOURS */}
              <div className="pt-5 border-t border-slate-100 flex items-start gap-4">

                <div className="w-12 h-12 rounded-2xl bg-red-50 text-red-600 flex items-center justify-center shrink-0">
                  <Clock className="w-6 h-6" />
                </div>

                <div>
                  <h4 className="text-sm font-bold tracking-wider text-slate-400">
                    Operational Timings
                  </h4>

                  <p className="text-sm font-bold text-slate-900 mt-1">
                    {companyInfo.hours}
                  </p>

                  <p className="text-xs text-slate-500">
                    Breakdown mechanics available on-call 24/7 for emergency
                    society outages.
                  </p>
                </div>

              </div>

            </div>

            {/* CREDENTIAL BANNER */}
            <div className="mt-auto rounded-3xl bg-slate-900 text-white p-6 border border-slate-800 flex items-center gap-4">

              <div className="w-12 h-12 rounded-2xl bg-red-600 text-white flex items-center justify-center shrink-0 font-black text-xl">
                ★
              </div>

              <div>
                <h4 className="text-sm font-bold text-white">
                  Serving Pune & Maharashtra Since 1985
                </h4>

                <p className="text-xs text-slate-400 mt-0.5">
                  Over 40 Years of Dependability in Pumps, Motors, and
                  Pipelines.
                </p>
              </div>

            </div>

          </div>

          {/* RIGHT COLUMN - QUERY FORM */}
          <div className="lg:col-span-7">

            <div className="rounded-3xl bg-white p-8 sm:p-10 border border-slate-200 shadow-xl">

              {/* SUCCESS MESSAGE */}
              {submitted ? (

                <div className="p-8 rounded-2xl bg-emerald-50 border border-emerald-200 text-center">

                  <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto mb-3" />

                  <h4 className="text-lg font-bold text-emerald-900">
                    Thank You for Inquiring!
                  </h4>

                  <p className="text-xs text-emerald-700 mt-1">
                    Your enquiry has been sent successfully to Vishwas Sales
                    Corporation. Our team will contact you shortly.
                  </p>

                  <button
                    type="button"
                    onClick={handleReset}
                    className="mt-4 px-5 py-2 rounded-xl bg-emerald-600 text-white text-xs font-bold hover:bg-emerald-700 transition-colors"
                  >
                    Submit Another Inquiry
                  </button>

                </div>

              ) : (

                /* FORM */
                <form
                  onSubmit={handleSubmit}
                  className="space-y-4"
                >

                  {/* FORM HEADER */}
                  <div className="mb-6">

                    <h3 className="text-2xl font-black text-slate-900">
                      Send Your Inquiry / Request Quotation
                    </h3>

                    <p className="text-xs text-slate-500 mt-1">
                      Fill in your requirements below. Submit your enquiry and
                      our team will contact you shortly.
                    </p>

                  </div>

                  {/* NAME + PHONE */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                    {/* NAME */}
                    <div>

                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                        Your Full Name *
                      </label>

                      <input
                        type="text"
                        required
                        placeholder="e.g. Rahul Patil"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            name: e.target.value,
                          })
                        }
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-red-500 focus:bg-white"
                      />

                    </div>

                    {/* PHONE */}
                    <div>

                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                        Phone Number *
                      </label>

                      <input
                        type="tel"
                        required
                        placeholder="e.g. 98765 43210"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            phone: e.target.value,
                          })
                        }
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-red-500 focus:bg-white"
                      />

                    </div>

                  </div>

                  {/* EMAIL + ORGANIZATION */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                    {/* EMAIL ADDRESS */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                        Email Address *
                      </label>

                      <input
                        type="email"
                        required
                        placeholder="e.g. anand@gmail.com"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            email: e.target.value,
                          })
                        }
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-red-500 focus:bg-white font-medium"
                      />
                    </div>

                    {/* ORGANIZATION */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                        Housing Society / Company Name
                      </label>

                      <input
                        type="text"
                        placeholder="e.g. Silver Oak CHS / L&T Project"
                        value={formData.organization}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            organization: e.target.value,
                          })
                        }
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-red-500 focus:bg-white font-medium"
                      />
                    </div>

                  </div>

                  {/* SERVICE */}
                  <div>

                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                      Service or Product Required *
                    </label>

                    <select
                      required
                      value={formData.serviceType}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          serviceType: e.target.value,
                        })
                      }
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-red-500 focus:bg-white font-medium"
                    >
                      <option>Pump Repair / Motor Rewinding</option>
                      <option>Pump & Motor Installation</option>
                      <option>On-Call Emergency Mechanic</option>
                      <option>Housing Society Energy Audit</option>
                      <option>Standby Pump</option>
                      <option>New Water Pump Purchase</option>
                      <option>Pipes & Drainage Bulk Order</option>
                      <option>Valves & Control Panels</option>
                      <option>Sintex Tanks & Solar Water Heaters</option>
                      <option>Join 800+ Dealer Network</option>
                      <option>Other Requirements</option>
                    </select>

                  </div>

                  {/* MESSAGE */}
                  <div>

                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                      Message / Project Scope / Pump Specifications
                    </label>

                    <textarea
                      rows={4}
                      placeholder="Please specify HP rating, society location, product quantities..."
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          message: e.target.value,
                        })
                      }
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-red-500 focus:bg-white resize-none"
                    />

                  </div>

                  {/* ERROR MESSAGE */}
                  {errorMessage && (
                    <p className="text-sm text-red-600 font-medium">
                      {errorMessage}
                    </p>
                  )}

                  {/* SUBMIT BUTTON */}
                  <div className="pt-2">

                    <button
                      type="submit"
                      disabled={emailLoading}
                      className="w-full inline-flex items-center justify-center gap-2 py-4 px-5 rounded-xl bg-slate-900 hover:bg-red-600 text-white font-bold text-sm shadow-lg shadow-slate-900/20 transition-all hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0"
                    >
                      {emailLoading ? (
                        <span>Sending Inquiry...</span>
                      ) : (
                        <>
                          <Mail className="w-5 h-5" />
                          <span>Submit Query</span>
                        </>
                      )}
                    </button>

                  </div>

                  {/* FOOTER NOTE */}
                  <p className="text-[11px] text-center text-slate-400 mt-2">
                    🔒 Your enquiry will be sent directly to Vishwas Sales
                    Corporation management.
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
