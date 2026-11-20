import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ArrowUp,
  ShieldCheck,
  Wrench,
  ArrowRight,
  ExternalLink
} from 'lucide-react';
import { companyInfo } from '../data/companyData';

export default function Footer() {
  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Products & Brands', path: '/products' },
    { name: 'Services & Repairs', path: '/services' },
    { name: 'Clients & 800+ Dealers', path: '/clients' },
    { name: 'Catalogues & Specs', path: '/catalogues' },
    { name: 'Wholesale PriceList', path: '/pricelist' },
    { name: "FAQ's", path: '/faqs' },
    { name: 'Contact Us', path: '/contact' },
  ];

  const serviceLinks = [
    { name: 'Pump & Motor Repairing', path: '/services' },
    { name: 'Mechanics On-Call (24/7)', path: '/services' },
    { name: 'Dewatering Pumps on Rent', path: '/services' },
    { name: 'Standby Pumps for Societies', path: '/services' },
    { name: 'Housing Society Energy Audit', path: '/services' },
    { name: 'Hydro-Pneumatic Booster Setup', path: '/services' }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-800">

      {/* Upper Pre-Footer Support & Emergency Hotline Banner */}
      <div className="border-b border-slate-800/80 bg-slate-900/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4 text-center md:text-left">
              <div className="w-12 h-12 rounded-2xl bg-red-600/15 border border-red-500/30 text-red-500 flex items-center justify-center shrink-0">
                <Wrench className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-base sm:text-lg font-bold text-white">
                  Need Emergency Pump Breakdown Assistance or Standby Backup?
                </h4>
                <p className="text-xs sm:text-sm text-slate-400 mt-0.5">
                  Our certified mechanics and service pumps are on-call across Pune and Maharashtra.
                </p>
              </div>
            </div>

            <div className="flex flex-nowrap items-center justify-center gap-2 sm:gap-3 shrink-0">
              <a
                href={`tel:${companyInfo.phone1.replace(/\s+/g, '')}`}
                className="inline-flex items-center justify-center gap-1.5 sm:gap-2 px-3 sm:px-5 py-2.5 rounded-xl bg-red-600 hover:bg-red-700 text-white text-[10px] sm:text-xs font-bold uppercase tracking-wide sm:tracking-wider shadow-md shadow-red-600/30 transition-all hover:-translate-y-0.5 whitespace-nowrap"
              >
                <Phone className="w-3.5 h-3.5 shrink-0" />
                <span>Call {companyInfo.phone1}</span>
              </a>

              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-1.5 sm:gap-2 px-3 sm:px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-[10px] sm:text-xs font-bold uppercase tracking-wide sm:tracking-wider border border-slate-700 transition-all whitespace-nowrap"
              >
                <span>Request Online</span>
                <ArrowRight className="w-3.5 h-3.5 shrink-0" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}


      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-6">

          {/* Column 1: Brand Info & Accreditations */}
          <div className="lg:col-span-4 space-y-5">
            <Link to="/" className="inline-block group">
              <Logo light={true} imgClassName="h-14 sm:h-16" />
            </Link>

            <p className="text-sm text-slate-400 leading-relaxed font-normal text-justify">
              Pune's Leading Company in Plumbing & Pumping Solutions since 1985.
              Catering to corporate, residential, and industrial water needs with
              over 40 years of trusted technical engineering.
            </p>

            {/* Official Accreditations */}
            <div className="pt-2">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-2.5">
                Official Association Memberships:
              </span>

              <div className="flex flex-wrap gap-2">
                {companyInfo.memberships.map((m, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-xs font-medium text-slate-300"
                  >
                    {m.label}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white border-b border-slate-800 pb-2">
              Navigation
            </h4>

            <ul className="space-y-2.5">
              {quickLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="text-sm text-slate-400 hover:text-red-400 transition-all flex items-center gap-1.5 group"
                  >
                    <span className="text-red-500 text-xs opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all">
                      ›
                    </span>
                    <span className="group-hover:translate-x-0.5 transition-transform">
                      {item.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Specialized Services */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white border-b border-slate-800 pb-2">
              Our Services
            </h4>

            <ul className="space-y-2.5">
              {serviceLinks.map((serv, i) => (
                <li key={i}>
                  <Link
                    to={serv.path}
                    className="text-sm text-slate-400 hover:text-red-400 transition-all flex items-center gap-1.5 group"
                  >
                    <span className="text-red-500 text-xs opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all">
                      ›
                    </span>
                    <span className="group-hover:translate-x-0.5 transition-transform">
                      {serv.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>


          </div>


          {/* Column 4: Corporate Office & Contact */}
          <div className="lg:col-span-3 space-y-4 lg:-ml-2">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white border-b border-slate-800 pb-2">
              Corporate Office
            </h4>

            <div className="space-y-3.5 text-sm text-slate-400">

              {/* Address */}
              <div className="flex items-start gap-2.5 group">
                <MapPin className="w-4 h-4 text-red-500 shrink-0 mt-1" />
                <span className="leading-relaxed group-hover:text-red-400 transition-all">
                  {companyInfo.address}
                </span>
              </div>

              {/* Phones */}
              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-red-500 shrink-0 mt-1" />
                <div className="flex flex-col space-y-1">
                  <a
                    href={`tel:${companyInfo.phone1.replace(/\s+/g, '')}`}
                    className="hover:text-red-400 transition-all"
                  >
                    {companyInfo.phone1}
                  </a>

                  <a
                    href={`tel:${companyInfo.phone2.replace(/\s+/g, '')}`}
                    className="hover:text-red-400 transition-all"
                  >
                    {companyInfo.phone2}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-2.5 min-w-0">
                <Mail className="w-4 h-4 text-red-500 shrink-0" />
                <a
                  href={`mailto:${companyInfo.email}`}
                  className="text-[13px] sm:text-sm font-medium tracking-tight hover:text-red-400 transition-all whitespace-nowrap"
                >
                  {companyInfo.email}
                </a>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-red-500 shrink-0 mt-1" />
                <div>
                  <span className="hover:text-red-400 transition-all">
                    {companyInfo.hours}
                  </span>

                  <span className="block text-xs text-slate-400 mt-0.5">
                    Breakdown mechanics available 24/7 on-call
                  </span>
                </div>
              </div>
            </div>

          </div>


        </div>
      </div>

      {/* Bottom Copyright & Back To Top Strip */}
      <div className="border-t border-slate-900 bg-slate-950 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">

          <p className="text-center md:text-left">
            © {new Date().getFullYear()} Vishwas Sales Corporation. All rights reserved. Established Since 1985.
          </p>

          <div className="flex items-center gap-6">
            <span className="hidden md:inline text-slate-400">
              Pune's Leading Company in Plumbing & Pumping Solutions
            </span>

            <button
              onClick={scrollToTop}
              className="p-2 rounded-xl bg-slate-900 hover:bg-red-600 text-slate-400 hover:text-white transition-all border border-slate-800"
              title="Scroll to Top"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>
      </div>


    </footer>
  );
}
