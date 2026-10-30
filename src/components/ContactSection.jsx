
import React, { useRef, useState } from 'react';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  CheckCircle2,
  ExternalLink,
  MessageSquare,
  ShieldCheck,
  Building2,
  Send,
  ArrowUpRight,
  Headset,
  BadgeCheck,
  ChevronRight,
} from 'lucide-react';
import { companyInfo } from '../data/companyData';

export default function ContactSection() {
  const formRef = useRef(null);

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    organization: '',
    serviceType: 'Pump Repair / Motor Rewinding',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [submissionMethod, setSubmissionMethod] = useState('');

  const updateField = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const getInquiryDetails = () => {
    return `Hello Vishwas Sales Corporation,

I would like to make an inquiry.

Name: ${formData.name}
Phone: ${formData.phone}
Email: ${formData.email || 'Not provided'}
Organization / Society: ${formData.organization || 'Not provided'}
Requirement: ${formData.serviceType}
Message: ${formData.message || 'No additional details provided'}

Please contact me regarding this inquiry.

Thank you.`;
  };

  const handleWhatsAppSubmit = () => {
    if (!formRef.current.reportValidity()) return;

    const text = encodeURIComponent(getInquiryDetails());

    window.open(
      `https://wa.me/919923122448?text=${text}`,
      '_blank',
      'noopener,noreferrer'
    );

    setSubmissionMethod('WhatsApp');
    setSubmitted(true);
  };

  const handleEmailSubmit = () => {
    if (!formRef.current.reportValidity()) return;

    const subject = encodeURIComponent(
      `Website Inquiry - ${formData.serviceType}`
    );
    const body = encodeURIComponent(getInquiryDetails());

    const mailtoLink = `mailto:${companyInfo.email}?subject=${subject}&body=${body}`;

    window.location.href = mailtoLink;

    setSubmissionMethod('Email');
    setSubmitted(true);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      phone: '',
      email: '',
      organization: '',
      serviceType: 'Pump Repair / Motor Rewinding',
      message: '',
    });

    setSubmitted(false);
    setSubmissionMethod('');
  };

  const contactCards = [
    {
      icon: MapPin,
      title: 'Visit Our Office',
      description: 'Corporate Office & Showroom',
      value: companyInfo.address,
      note: 'Near HP Petrol Pump, Gadital, Hadapsar, Pune',
      color: 'red',
      action: {
        label: 'Get Directions',
        href: companyInfo.googleMapsUrl,
        external: true,
      },
    },
    {
      icon: Phone,
      title: 'Call Our Team',
      description: 'Sales & Emergency Support',
      value: companyInfo.phone1,
      note: `Additional contact: ${companyInfo.phone2}`,
      color: 'blue',
      action: {
        label: 'Call Now',
        href: `tel:${companyInfo.phone1.replace(/[^\d+]/g, '')}`,
      },
    },
    {
      icon: Mail,
      title: 'Email Us',
      description: 'Business & Product Inquiries',
      value: companyInfo.email,
      note: 'Send your requirements or request a quotation.',
      color: 'purple',
      action: {
        label: 'Send Email',
        href: `mailto:${companyInfo.email}`,
      },
    },
  ];

  const serviceOptions = [
    'Pump Repair / Motor Rewinding',
    'On-Call Emergency Mechanic',
    'Housing Society Energy Audit',
    'Standby Pump / Dewatering Rental',
    'New Water Pump Purchase (C.R.I. Pumps)',
    'Pipes & Drainage Bulk Order (Raksha / Ashirvad / Huliot)',
    'Valves & Control Panels (Leader / Autocon)',
    'Sintex Tanks & Solar Water Heaters',
    'Join 800+ Dealer Network',
    'Other Requirements',
  ];

  return (
    <section
      id="contact"
      className="relative overflow-hidden border-t border-slate-200 bg-slate-50 py-16 sm:py-20 lg:py-24"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute -left-32 top-20 h-80 w-80 rounded-full bg-red-100/60 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-10 h-96 w-96 rounded-full bg-blue-100/60 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section heading */}
        <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-16">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-red-200 bg-white px-4 py-2 text-xs font-extrabold  tracking-[0.16em] text-red-700 shadow-sm">
            <span className="h-2 w-2 rounded-full bg-red-600" />
            We Are Here to Help
          </div>

          <h2 className="text-3xl font-black leading-tight tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
            Let's Talk About
            <span className="mt-1 block text-red-600">
              Your Requirements
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
            Need a pump, plumbing products, maintenance support, or a bulk
            quotation? Connect with Vishwas Sales Corporation and let our team
            help you find the right solution.
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-xs font-semibold text-slate-600 sm:text-sm">
            <span className="inline-flex items-center gap-2">
              <BadgeCheck className="h-4 w-4 text-red-600" />
              Trusted Product Brands
            </span>
            <span className="inline-flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-red-600" />
              Customer-Focused Service
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12 lg:gap-10">
          {/* Left: Contact information */}
          <div className="space-y-5 lg:col-span-5">
            <div className="mb-6">
              <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-red-600">
                Contact Information
              </p>
              <h3 className="mt-2 text-2xl font-black text-slate-950 sm:text-3xl">
                We'd Love to Hear From You
              </h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Choose the most convenient way to reach our team.
              </p>
            </div>

            {contactCards.map((item) => {
              const Icon = item.icon;

              const iconColors = {
                red: 'bg-red-50 text-red-600 ring-red-100',
                blue: 'bg-blue-50 text-blue-700 ring-blue-100',
                purple: 'bg-violet-50 text-violet-700 ring-violet-100',
              };

              return (
                <div
                  key={item.title}
                  className="group rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-red-200 hover:shadow-xl hover:shadow-slate-200/60 sm:p-6"
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl ring-1 transition-transform duration-300 group-hover:scale-105 ${iconColors[item.color]}`}
                    >
                      <Icon className="h-5 w-5" />
                    </div>

                    <div className="min-w-0 flex-1">
                      <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                        {item.description}
                      </p>

                      <h4 className="mt-1 text-lg font-extrabold text-slate-900">
                        {item.title}
                      </h4>

                      <p className="mt-2 break-words text-sm font-semibold leading-6 text-slate-700">
                        {item.value}
                      </p>

                      <p className="mt-1 text-xs leading-5 text-slate-500">
                        {item.note}
                      </p>

                      <a
                        href={item.action.href}
                        target={item.action.external ? '_blank' : undefined}
                        rel={
                          item.action.external
                            ? 'noopener noreferrer'
                            : undefined
                        }
                        className="mt-4 inline-flex items-center gap-1.5 text-sm font-extrabold text-red-600 transition-colors hover:text-red-800"
                      >
                        {item.action.label}
                        <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}

            {/* Business highlight */}
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-950 via-slate-900 to-red-950 p-6 text-white shadow-lg sm:p-7">
              <div className="pointer-events-none absolute -right-10 -top-10 h-36 w-36 rounded-full border-[24px] border-white/5" />

              <div className="relative flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-red-600 shadow-lg shadow-red-950/30">
                  <Building2 className="h-6 w-6" />
                </div>

                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.15em] text-red-300">
                    Our Commitment
                  </p>
                  <h4 className="mt-2 text-lg font-extrabold">
                    A Reliable Partner for Your Needs
                  </h4>
                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    From product selection to service inquiries, our team is
                    ready to help you explore suitable solutions.
                  </p>
                </div>
              </div>

              <div className="relative mt-5 flex items-center gap-3 border-t border-white/10 pt-5">
                <Clock className="h-5 w-5 shrink-0 text-red-300" />
                <div>
                  <p className="text-sm font-bold text-white">
                    Business Hours
                  </p>
                  <p className="mt-1 text-xs leading-5 text-slate-300">
                    {companyInfo.hours}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Inquiry form */}
          <div className="lg:col-span-7">
            <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl shadow-slate-200/70">
              {/* Form heading */}
              <div className="relative overflow-hidden bg-gradient-to-r from-slate-950 via-slate-900 to-red-950 px-6 py-7 text-white sm:px-9 sm:py-9">
                <div className="pointer-events-none absolute -right-8 -top-12 h-40 w-40 rounded-full border-[26px] border-white/5" />

                <div className="relative flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-red-600 shadow-lg shadow-black/20">
                    <MessageSquare className="h-6 w-6" />
                  </div>

                  <div>
                    <p className="text-xs font-extrabold uppercase tracking-[0.17em] text-red-300">
                      Get a Quick Response
                    </p>
                    <h3 className="mt-2 text-2xl font-black sm:text-3xl">
                      Send an Inquiry
                    </h3>
                    <p className="mt-2 max-w-lg text-sm leading-6 text-slate-300">
                      Share your details and requirements. Choose WhatsApp or
                      email to continue.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-5 sm:p-8 lg:p-9">
                {submitted ? (
                  <div className="py-8 text-center sm:py-12">
                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-50 ring-8 ring-emerald-50/60">
                      <CheckCircle2 className="h-9 w-9 text-emerald-600" />
                    </div>

                    <h4 className="mt-5 text-2xl font-black text-slate-900">
                      Thank You!
                    </h4>

                    <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-slate-600">
                      Your inquiry has been prepared for {submissionMethod}.
                      Please complete the send action in the app that opens,
                      if prompted.
                    </p>

                    <button
                      type="button"
                      onClick={handleReset}
                      className="mt-7 inline-flex items-center justify-center gap-2 rounded-xl bg-slate-900 px-6 py-3 text-sm font-bold text-white transition hover:bg-red-700"
                    >
                      Submit Another Inquiry
                      <ChevronRight className="h-4 w-4" />
                    </button>
                  </div>
                ) : (
                  <form
                    ref={formRef}
                    onSubmit={(e) => e.preventDefault()}
                    className="space-y-5"
                  >
                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                      <div>
                        <label
                          htmlFor="contact-name"
                          className="mb-2 block text-xs font-extrabold uppercase tracking-wider text-slate-700"
                        >
                          Full Name <span className="text-red-600">*</span>
                        </label>
                        <input
                          id="contact-name"
                          name="name"
                          type="text"
                          autoComplete="name"
                          required
                          maxLength={100}
                          placeholder="Enter your full name"
                          value={formData.name}
                          onChange={updateField}
                          className="w-full rounded-xl border border-slate-200 bg-slate-50/80 px-4 py-3.5 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 hover:border-slate-300 focus:border-red-500 focus:bg-white focus:ring-4 focus:ring-red-500/10"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="contact-phone"
                          className="mb-2 block text-xs font-extrabold uppercase tracking-wider text-slate-700"
                        >
                          Phone Number <span className="text-red-600">*</span>
                        </label>
                        <input
                          id="contact-phone"
                          name="phone"
                          type="tel"
                          autoComplete="tel"
                          required
                          maxLength={20}
                          pattern="[0-9+\s()-]{7,20}"
                          title="Enter a valid phone number."
                          placeholder="e.g. 98765 43210"
                          value={formData.phone}
                          onChange={updateField}
                          className="w-full rounded-xl border border-slate-200 bg-slate-50/80 px-4 py-3.5 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 hover:border-slate-300 focus:border-red-500 focus:bg-white focus:ring-4 focus:ring-red-500/10"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                      <div>
                        <label
                          htmlFor="contact-email"
                          className="mb-2 block text-xs font-extrabold uppercase tracking-wider text-slate-700"
                        >
                          Email Address
                        </label>
                        <input
                          id="contact-email"
                          name="email"
                          type="email"
                          autoComplete="email"
                          maxLength={150}
                          placeholder="you@company.com"
                          value={formData.email}
                          onChange={updateField}
                          className="w-full rounded-xl border border-slate-200 bg-slate-50/80 px-4 py-3.5 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 hover:border-slate-300 focus:border-red-500 focus:bg-white focus:ring-4 focus:ring-red-500/10"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="contact-organization"
                          className="mb-2 block text-xs font-extrabold uppercase tracking-wider text-slate-700"
                        >
                          Company / Society
                        </label>
                        <input
                          id="contact-organization"
                          name="organization"
                          type="text"
                          autoComplete="organization"
                          maxLength={150}
                          placeholder="Company or society name"
                          value={formData.organization}
                          onChange={updateField}
                          className="w-full rounded-xl border border-slate-200 bg-slate-50/80 px-4 py-3.5 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 hover:border-slate-300 focus:border-red-500 focus:bg-white focus:ring-4 focus:ring-red-500/10"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="contact-service"
                        className="mb-2 block text-xs font-extrabold uppercase tracking-wider text-slate-700"
                      >
                        Product or Service Required{' '}
                        <span className="text-red-600">*</span>
                      </label>

                      <select
                        id="contact-service"
                        name="serviceType"
                        required
                        value={formData.serviceType}
                        onChange={updateField}
                        className="w-full cursor-pointer appearance-none rounded-xl border border-slate-200 bg-slate-50/80 px-4 py-3.5 text-sm font-medium text-slate-800 outline-none transition hover:border-slate-300 focus:border-red-500 focus:bg-white focus:ring-4 focus:ring-red-500/10"
                      >
                        {serviceOptions.map((service) => (
                          <option key={service} value={service}>
                            {service}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="contact-message"
                        className="mb-2 block text-xs font-extrabold uppercase tracking-wider text-slate-700"
                      >
                        Message / Project Details
                      </label>

                      <textarea
                        id="contact-message"
                        name="message"
                        rows={4}
                        maxLength={3000}
                        placeholder="Tell us about your product requirements, quantity, pump specifications, location, or project..."
                        value={formData.message}
                        onChange={updateField}
                        className="w-full resize-y rounded-xl border border-slate-200 bg-slate-50/80 px-4 py-3.5 text-sm leading-6 text-slate-800 outline-none transition placeholder:text-slate-400 hover:border-slate-300 focus:border-red-500 focus:bg-white focus:ring-4 focus:ring-red-500/10"
                      />

                      <p className="mt-1.5 text-right text-xs text-slate-400">
                        {formData.message.length}/3000 characters
                      </p>
                    </div>

                    {/* Submission actions */}
                    <div className="border-t border-slate-100 pt-5">
                      <p className="mb-4 text-sm font-bold text-slate-800">
                        How would you like to send your inquiry?
                      </p>

                      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                        <button
                          type="button"
                          onClick={handleWhatsAppSubmit}
                          className="group inline-flex min-h-14 items-center justify-center gap-2 rounded-xl bg-emerald-600 px-4 py-4 text-sm font-extrabold text-white shadow-lg shadow-emerald-600/20 transition duration-200 hover:-translate-y-0.5 hover:bg-emerald-700 hover:shadow-xl active:translate-y-0"
                        >
                          <MessageSquare className="h-5 w-5" />
                          Send via WhatsApp
                          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </button>

                        <button
                          type="button"
                          onClick={handleEmailSubmit}
                          className="group inline-flex min-h-14 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-red-600 to-rose-700 px-4 py-4 text-sm font-extrabold text-white shadow-lg shadow-red-600/20 transition duration-200 hover:-translate-y-0.5 hover:from-red-700 hover:to-rose-800 hover:shadow-xl active:translate-y-0"
                        >
                          <Send className="h-5 w-5" />
                          Send via Email
                          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </button>
                      </div>

                      <div className="mt-4 flex items-start gap-2 rounded-xl border border-slate-100 bg-slate-50 p-3.5">
                        <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-slate-500" />
                        <p className="text-xs leading-5 text-slate-500">
                          Your information will be included in the inquiry
                          message. WhatsApp requires you to send the message,
                          while email opens your configured email application.
                        </p>
                      </div>
                    </div>
                  </form>
                )}
              </div>
            </div>

            {/* Bottom help strip */}
            <div className="mt-5 flex items-start gap-3 rounded-2xl border border-red-100 bg-red-50/80 p-4 sm:items-center sm:p-5">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-red-600 shadow-sm">
                <Headset className="h-5 w-5" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-extrabold text-slate-900">
                  Need assistance choosing a product?
                </p>
                <p className="mt-1 text-xs leading-5 text-slate-600">
                  Contact our team for help with product selection and
                  quotation inquiries.
                </p>
              </div>
              <a
                href={`tel:${companyInfo.phone1.replace(/[^\d+]/g, '')}`}
                aria-label="Call Vishwas Sales Corporation"
                className="mt-1 inline-flex shrink-0 items-center gap-1 text-xs font-extrabold text-red-700 hover:text-red-900 sm:mt-0"
              >
                Call Us
                <ChevronRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
