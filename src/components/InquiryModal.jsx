import React, { useEffect, useState } from 'react';
import {
  X,
  Phone,
  MessageCircle,
  Mail,
  CheckCircle2,
  ShieldCheck,
} from 'lucide-react';
import { companyInfo } from '../data/companyData';

const labelClasses =
  'mb-2 block text-xs font-bold text-[#17243B]';

const inputClasses =
  'w-full rounded-xl border border-[#DCD3C7] bg-white px-4 py-3 ' +
  'text-sm text-[#17243B] outline-none transition duration-200 ' +
  'placeholder:text-slate-400 hover:border-[#C5B6A5] ' +
  'focus:border-[#E76F51] focus:ring-4 focus:ring-[#E76F51]/10';

export default function InquiryModal({
  isOpen,
  onClose,
  initialService = '',
}) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    society: '',
    service: initialService || 'Water Pump Repair & Service',
    notes: '',
  });

  const [submittedVia, setSubmittedVia] = useState('');

  useEffect(() => {
    if (!isOpen) return;

    const handleEscape = (event) => {
      if (event.key === 'Escape') onClose();
    };

    document.addEventListener('keydown', handleEscape);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  useEffect(() => {
    if (isOpen) {
      setFormData((previous) => ({
        ...previous,
        service: initialService || previous.service,
      }));
      setSubmittedVia('');
    }
  }, [isOpen, initialService]);

  if (!isOpen) return null;

  const updateField = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = (event, method) => {
    event.preventDefault();

    const form = event.currentTarget.closest('form');

    if (!form || !form.reportValidity()) return;

    const message = [
      'Hello Vishwas Sales Corporation,',
      '',
      'I would like to make an inquiry.',
      '',
      `Name: ${formData.name.trim()}`,
      `Phone: ${formData.phone.trim()}`,
      `Society / Company: ${formData.society.trim() || 'Not provided'}`,
      `Service / Product: ${formData.service}`,
      `Additional Details: ${formData.notes.trim() || 'Not provided'}`,
    ].join('\n');

    let url;

    if (method === 'whatsapp') {
      url = `https://wa.me/919923122448?text=${encodeURIComponent(message)}`;
    } else {
      const subject = encodeURIComponent(
        `Inquiry - ${formData.service}`
      );

      const body = encodeURIComponent(message);

      // Replace the empty recipient with your business email address.
      url = `mailto:?subject=${subject}&body=${body}`;
    }

    window.open(url, '_blank', 'noopener,noreferrer');
    setSubmittedVia(method);
  };

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center
      bg-[#101827]/70 p-2.5 backdrop-blur-md sm:p-5"
      onClick={onClose}
    >
      {/* The entire modal scrolls, including its header */}
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="inquiry-title"
        className="relative max-h-[95dvh] w-full max-w-2xl
        overflow-y-auto overscroll-contain rounded-[24px]
        border border-white/40 bg-[#FAF7F2]
        shadow-[0_30px_100px_rgba(10,20,40,0.3)]
        animate-in fade-in zoom-in-95 duration-200"
        onClick={(event) => event.stopPropagation()}
        style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
      >
        {/* Premium navy header - scrolls with the modal */}
        <div
          className="relative overflow-hidden bg-[#17243B]
          px-5 pb-6 pt-6 text-white sm:px-8 sm:pb-7 sm:pt-8"
        >
          <div
            className="pointer-events-none absolute -right-12 -top-20
            h-56 w-56 rounded-full border-[36px] border-white/[0.04]"
          />

          <div
            className="pointer-events-none absolute -bottom-20
            right-24 h-40 w-40 rounded-full bg-[#E76F51]/15 blur-3xl"
          />

          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              onClose();
            }}
            aria-label="Close inquiry form"
            className="absolute right-4 top-4 z-50 flex h-9 w-9
  items-center justify-center rounded-full border
  border-white/20 bg-white/10 text-white
  transition duration-200 hover:rotate-90
  hover:bg-white/20 hover:text-white
  focus:outline-none focus:ring-2 focus:ring-white/50
  sm:right-6 sm:top-6"
          >
            <X size={19} />
          </button>

          <div className="relative z-10">
            <div className="mb-5 flex items-center gap-2.5">
              <span
                className="flex h-9 w-9 items-center justify-center
                rounded-xl border border-[#E76F51]/30
                bg-[#E76F51]/10 text-[#FFAA91]"
              >
                <ShieldCheck size={19} />
              </span>

              <span
                className="max-w-[220px] text-[10px] font-extrabold
                uppercase tracking-[1.5px] text-[#FFC0AF] sm:text-[11px]"
              >
                Vishwas Sales Corporation
              </span>
            </div>

            <h2
              id="inquiry-title"
              className="max-w-lg text-[29px] font-extrabold
              leading-tight tracking-[-1.2px] sm:text-[38px]"
            >
              Let's get your
              <span className="block text-[#FF9B80]">
                requirement sorted.
              </span>
            </h2>

            <p
              className="mt-3 max-w-md text-xs leading-6
              text-slate-300 sm:text-sm"
            >
              Expert pump services, reliable products, and quick support.
              Tell us what you need, and we'll help you find the right solution.
            </p>

            <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2.5">
              <span
                className="flex items-center gap-2 text-[11px]
                font-semibold text-slate-200"
              >
                <CheckCircle2 size={15} className="text-[#7DD8B5]" />
                Expert assistance
              </span>

              <span
                className="flex items-center gap-2 text-[11px]
                font-semibold text-slate-200"
              >
                <CheckCircle2 size={15} className="text-[#7DD8B5]" />
                Quick response
              </span>
            </div>
          </div>
        </div>

        {/* Success screen */}
        {submittedVia ? (
          <div className="px-6 py-12 text-center sm:px-10">
            <div
              className="mx-auto flex h-16 w-16 items-center
              justify-center rounded-2xl bg-emerald-100 text-emerald-700"
            >
              <CheckCircle2 size={32} />
            </div>

            <h3
              className="mt-5 text-2xl font-extrabold
              tracking-tight text-[#17243B]"
            >
              Your inquiry is ready!
            </h3>

            <p
              className="mx-auto mt-3 max-w-sm
              text-sm leading-7 text-slate-500"
            >
              {submittedVia === 'whatsapp'
                ? 'WhatsApp has opened with your inquiry details. Please press Send to contact our team.'
                : 'Your email application has opened with your inquiry details. Please press Send to contact our team.'}
            </p>

            <button
              type="button"
              onClick={onClose}
              className="mt-7 rounded-xl bg-[#17243B] px-8 py-3
              text-sm font-bold text-white shadow-lg
              transition hover:bg-[#263954] focus:outline-none
              focus:ring-4 focus:ring-[#17243B]/20"
            >
              Done
            </button>
          </div>
        ) : (
          <form
            onSubmit={(event) => event.preventDefault()}
            className="px-5 py-6 sm:px-8 sm:py-7"
          >
            <div className="mb-6">
              <h3
                className="text-lg font-extrabold
                tracking-tight text-[#17243B]"
              >
                Tell us what you need
              </h3>

              <p className="mt-1.5 text-[11px] text-slate-500">
                Fields marked <span className="text-[#E76F51]">*</span> are required.
              </p>
            </div>

            {/* Full name */}
            <div className="mb-5">
              <label htmlFor="inquiry-name" className={labelClasses}>
                Full Name <span className="text-[#E76F51]">*</span>
              </label>

              <input
                id="inquiry-name"
                name="name"
                type="text"
                autoComplete="name"
                placeholder="Enter your full name"
                value={formData.name}
                onChange={updateField}
                className={inputClasses}
                required
              />
            </div>

            {/* Phone and organization */}
            <div className="mb-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="inquiry-phone" className={labelClasses}>
                  Phone Number <span className="text-[#E76F51]">*</span>
                </label>

                <input
                  id="inquiry-phone"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  inputMode="tel"
                  pattern="[+]?[0-9 ()-]{10,18}"
                  title="Enter a valid phone number"
                  placeholder="98765 43210"
                  value={formData.phone}
                  onChange={updateField}
                  className={inputClasses}
                  required
                />
              </div>

              <div>
                <label htmlFor="inquiry-society" className={labelClasses}>
                  Society / Company
                </label>

                <input
                  id="inquiry-society"
                  name="society"
                  type="text"
                  autoComplete="organization"
                  placeholder="Organization name"
                  value={formData.society}
                  onChange={updateField}
                  className={inputClasses}
                />
              </div>
            </div>

            {/* Service */}
            <div className="mb-5">
              <label htmlFor="inquiry-service" className={labelClasses}>
                Service or Product
              </label>

              <select
                id="inquiry-service"
                name="service"
                value={formData.service}
                onChange={updateField}
                className={`${inputClasses} cursor-pointer`}
              >
                <option>Water Pump Repair & Service</option>
                <option>Water Pump Repair & Motor Rewinding</option>
                <option>On-Call Emergency Breakdown Mechanic</option>
                <option>Housing Society Energy Audit</option>
                <option>Standby Pump / Dewatering Rental</option>
                <option>C.R.I. Pumps Purchase Quote</option>
                <option>Raksha / Ashirvad Pipes Bulk Order</option>
                <option>Leader Valves & Autocon Panels</option>
                <option>Sintex Tanks & Solar Water Heaters</option>
                <option>Join 800+ Dealer Network</option>
                <option>Other Enquiry</option>
              </select>
            </div>

            {/* Additional details */}
            <div>
              <label htmlFor="inquiry-notes" className={labelClasses}>
                Additional Details
                <span
                  className="ml-2 font-medium normal-case
                  tracking-normal text-slate-400"
                >
                  (Optional)
                </span>
              </label>

              <textarea
                id="inquiry-notes"
                name="notes"
                rows={3}
                placeholder="Tell us about your pump, model, HP, or requirements..."
                value={formData.notes}
                onChange={updateField}
                className={`${inputClasses} min-h-[90px] resize-y leading-6`}
              />
            </div>

            {/* Contact method */}
            <div className="mt-7 border-t border-[#E8E0D7] pt-6">
              <h4 className="text-sm font-extrabold text-[#17243B]">
                Choose your preferred contact method
              </h4>

              <p className="mt-1.5 text-[11px] leading-5 text-slate-500">
                Your details will be added to a pre-filled message.
              </p>

              <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
                <button
                  type="button"
                  onClick={(event) => handleSubmit(event, 'whatsapp')}
                  className="flex min-h-[52px] items-center justify-center
                  gap-2.5 rounded-xl border border-[#168568]
                  bg-[#168568] px-4 py-3 text-sm font-extrabold
                  text-white shadow-sm shadow-emerald-900/10
                  transition duration-200 hover:-translate-y-0.5
                  hover:bg-[#116E55] hover:shadow-md
                  focus:outline-none focus:ring-4
                  focus:ring-emerald-600/20"
                >
                  <MessageCircle size={19} />
                  Send via WhatsApp
                </button>

                <button
                  type="button"
                  onClick={(event) => handleSubmit(event, 'email')}
                  className="flex min-h-[52px] items-center justify-center
                  gap-2.5 rounded-xl border border-[#DCD3C7]
                  bg-white px-4 py-3 text-sm font-extrabold
                  text-[#17243B] transition duration-200
                  hover:-translate-y-0.5 hover:border-[#E76F51]
                  hover:bg-[#FFF0E9] focus:outline-none
                  focus:ring-4 focus:ring-[#E76F51]/15"
                >
                  <Mail size={19} className="text-[#D65F43]" />
                  Send via Email
                </button>
              </div>

              <p className="mt-3 text-center text-[10px] leading-5 text-slate-400">
                Select an option to continue with your inquiry.
              </p>
            </div>

            {/* Direct call */}
            <div
              className="mt-5 flex flex-col gap-4 rounded-2xl
              border border-[#E8E0D7] bg-white/80 p-4
              sm:flex-row sm:items-center sm:justify-between"
            >
              <div>
                <h4 className="text-sm font-extrabold text-[#17243B]">
                  Need immediate assistance?
                </h4>

                <p className="mt-1.5 text-[11px] text-slate-500">
                  Speak directly with our service team.
                </p>
              </div>

              <a
                href={`tel:${companyInfo.phone1.replace(/\s+/g, '')}`}
                className="inline-flex min-h-[44px] shrink-0
                items-center justify-center gap-2 rounded-xl
                bg-[#17243B] px-5 py-3 text-xs font-extrabold
                text-white no-underline transition
                hover:bg-[#263954] focus:outline-none
                focus:ring-4 focus:ring-[#17243B]/20"
              >
                <Phone size={16} />
                Call Our Team
              </a>
            </div>

            <p className="mt-5 text-center text-[10px] leading-5 text-slate-400">
              Vishwas Sales Corporation
              <span className="mx-1">·</span>
              Reliable Products, Trusted Service
            </p>
          </form>
        )}
      </div>
    </div>
  );
}