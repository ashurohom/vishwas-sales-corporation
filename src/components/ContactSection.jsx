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

        {/* MAIN SECTION */}
        <div className="flex flex-col gap-8">




          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0">

            {/* BOX 1 - PHONE */}
            <div
              className="relative px-5 pt-4 pb-7
    border-b-2 border-red-600
    lg:border-b-0
    lg:after:content-[''] lg:after:absolute lg:after:right-0
    lg:after:inset-y-5 lg:after:w-[2px]
    lg:after:bg-red-600 lg:after:rounded-full"
            >
              <div className="flex items-center justify-center gap-2 sm:flex-col sm:gap-0">
                <div className="w-11 h-11 shrink-0 rounded-xl bg-red-50 text-red-600 flex items-center justify-center">
                  <Phone className="w-5 h-5" />
                </div>

                <h3 className="text-sm font-bold text-slate-500 mt-0 sm:mt-2 text-right sm:text-center">
                  Call Us
                </h3>
              </div>

              <a
                href={`tel:${companyInfo.phone1.replace(/\s+/g, '')}`}
                className="text-sm text-slate-500 hover:text-red-600 mt-2 block text-center"
              >
                {companyInfo.phone1}
              </a>

              <a
                href={`tel:${companyInfo.phone2.replace(/\s+/g, '')}`}
                className="text-sm text-slate-500 hover:text-red-600 mt-1 block text-center"
              >
                {companyInfo.phone2}
              </a>

              <p className="text-xs text-slate-400 mt-3 text-center">
                <Phone className="w-3.5 h-3.5 inline mr-1" />
                Speak with our team
              </p>
            </div>


            {/* BOX 2 - EMAIL */}
            <div
              className="relative px-5 pt-4 pb-7
    border-b-2 border-red-600
    lg:border-b-0
    lg:after:content-[''] lg:after:absolute lg:after:right-0
    lg:after:inset-y-5 lg:after:w-[2px]
    lg:after:bg-red-600 lg:after:rounded-full"
            >
              <div className="flex items-center justify-center gap-2 sm:flex-col sm:gap-0">
                <div className="w-11 h-11 shrink-0 rounded-xl bg-orange-50 text-orange-600 flex items-center justify-center">
                  <Mail className="w-5 h-5" />
                </div>

                <h3 className="text-sm font-bold text-slate-500 mt-0 sm:mt-2 text-right sm:text-center">
                  Email Us
                </h3>
              </div>

              <a
                href={`mailto:${companyInfo.email}`}
                className="text-sm text-slate-500 hover:text-red-600 mt-2 block text-center break-all"
              >
                {companyInfo.email}
              </a>

              <p className="text-xs text-slate-400 mt-3 text-center">
                <Mail className="w-3.5 h-3.5 inline mr-1" />
                Send us your requirements
              </p>
            </div>


            {/* BOX 3 - OFFICE ADDRESS */}
            <div
              className="relative px-5 pt-4 pb-7
    border-b-2 border-red-600
    sm:border-b-0
    lg:after:content-[''] lg:after:absolute lg:after:right-0
    lg:after:inset-y-5 lg:after:w-[2px]
    lg:after:bg-red-600 lg:after:rounded-full"
            >
              <div className="flex items-center justify-center gap-2 sm:flex-col sm:gap-0">
                <div className="w-11 h-11 shrink-0 rounded-xl bg-green-50 text-green-600 flex items-center justify-center">
                  <MapPin className="w-5 h-5" />
                </div>

                <h3 className="text-sm font-bold text-slate-500 mt-0 sm:mt-2 text-right sm:text-center">
                  Visit Our Office
                </h3>
              </div>

              <p className="text-sm text-slate-500 mt-2 leading-relaxed text-center">
                {companyInfo.address}
              </p>
            </div>


            {/* BOX 4 - WORKING HOURS & SUPPORT */}
            <div
              className="relative px-5 pt-4 pb-7
    border-b-2 border-red-600
    sm:border-b-0
    lg:after:content-[''] lg:after:absolute lg:after:right-0
    lg:after:inset-y-5 lg:after:w-[2px]
    lg:after:bg-red-600 lg:after:rounded-full"
            >
              <div className="flex items-center justify-center gap-2 sm:flex-col sm:gap-0">
                <div className="w-11 h-11 shrink-0 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                  <Clock className="w-5 h-5" />
                </div>

                <h3 className="text-sm font-bold text-slate-500 mt-0 sm:mt-2 text-right sm:text-center">
                  Working Hours
                </h3>
              </div>

              <p className="text-sm text-slate-500 mt-2 text-center">
                {companyInfo.hours}
              </p>

              <p className="text-xs text-slate-500 mt-3 leading-relaxed text-center">
                Breakdown mechanics available on-call 24/7 for emergency society outages.
              </p>
            </div>

          </div>




          {/* INQUIRY SECTION - SPLIT CARD DESIGN */}
          <div className="w-full max-w-5xl mx-auto">

            <div className="grid grid-cols-1 lg:grid-cols-3 rounded-3xl overflow-hidden border border-slate-200 shadow-xl bg-white">

              {/* LEFT SECTION - BACKGROUND IMAGE */}
              <div
                className="
        lg:col-span-1
        relative
        overflow-hidden
        min-h-[280px]
        lg:min-h-full
        bg-cover
        bg-center
        bg-no-repeat
      "
                style={{
                  backgroundImage: "url('/contact_us_form_bg.png')",
                }}
              >
                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-slate-950/40"></div>

              </div>


              {/* RIGHT SECTION - 2/3 WIDTH */}
              <div className="lg:col-span-2 bg-white px-0 py-4 sm:py-5 lg:py-6">

                {/* SUCCESS MESSAGE */}
                {submitted ? (

                  <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-center">

                    <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto mb-2" />

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
                      className="mt-3 px-5 py-2 rounded-xl bg-emerald-600 text-white text-xs font-bold hover:bg-emerald-700 transition-colors"
                    >
                      Submit Another Inquiry
                    </button>

                  </div>

                ) : (

                  /* FORM */
                  <div className="w-full max-w-none mx-auto px-4 sm:px-5 lg:px-6">

                    <form onSubmit={handleSubmit} className="space-y-3">

                      {/* FORM HEADER */}
                      <div className="mb-4">

                        <h3 className="text-2xl sm:text-3xl font-black text-slate-900">
                          Send Your Inquiry
                        </h3>

                        <p className="text-sm text-slate-500 mt-1 leading-relaxed">
                          Fill in your requirements below. Our team will get in touch
                          with you shortly.
                        </p>

                      </div>


                      {/* NAME + PHONE */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                        {/* NAME */}
                        <div>

                          <label className="block text-xs font-bold text-slate-600 mb-1.5">
                            Your Full Name *
                          </label>

                          <input
                            type="text"
                            required
                            value={formData.name}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                name: e.target.value,
                              })
                            }
                            placeholder="Enter your full name"
                            className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:bg-white transition-all"
                          />

                        </div>


                        {/* PHONE */}
                        <div>

                          <label className="block text-xs font-bold text-slate-600 mb-1.5">
                            Phone Number *
                          </label>

                          <input
                            type="tel"
                            required
                            value={formData.phone}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                phone: e.target.value,
                              })
                            }
                            placeholder="+91 XXXXX XXXXX"
                            className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:bg-white transition-all"
                          />

                        </div>

                      </div>


                      {/* EMAIL + ORGANIZATION */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                        {/* EMAIL */}
                        <div>

                          <label className="block text-xs font-bold text-slate-600 mb-1.5">
                            Email Address *
                          </label>

                          <input
                            type="email"
                            required
                            value={formData.email}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                email: e.target.value,
                              })
                            }
                            placeholder="example@email.com"
                            className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:bg-white transition-all"
                          />

                        </div>


                        {/* ORGANIZATION */}
                        <div>

                          <label className="block text-xs font-bold text-slate-600 mb-1.5">
                            Housing Society / Company Name
                          </label>

                          <input
                            type="text"
                            value={formData.organization}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                organization: e.target.value,
                              })
                            }
                            placeholder="Your organization"
                            className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:bg-white transition-all"
                          />

                        </div>

                      </div>


                      {/* SERVICE */}
                      <div>

                        <label className="block text-xs font-bold text-slate-600 mb-1.5">
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
                          className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-red-500 focus:bg-white transition-all"
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

                        <label className="block text-xs font-bold text-slate-600 mb-1.5">
                          Other Requirements
                        </label>

                        <textarea
                          rows={3}
                          value={formData.message}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              message: e.target.value,
                            })
                          }
                          placeholder="Tell us more about your requirements..."
                          className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:bg-white resize-none transition-all"
                        />

                      </div>


                      {/* ERROR MESSAGE */}
                      {errorMessage && (
                        <p className="text-sm text-red-600 font-medium">
                          {errorMessage}
                        </p>
                      )}


                      {/* SUBMIT BUTTON */}
                      <div className="pt-1">

                        <button
                          type="submit"
                          disabled={emailLoading}
                          className="w-fit mx-auto flex items-center justify-center gap-2 py-3 px-14 rounded-xl bg-slate-900 hover:bg-red-600 text-white font-bold text-sm shadow-lg shadow-slate-900/20 transition-all hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0"
                        >
                          {emailLoading ? (
                            <span>Sending Inquiry...</span>
                          ) : (
                            <span>Submit</span>
                          )}
                        </button>

                      </div>

                    </form>

                  </div>

                )}

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
