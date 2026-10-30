import React, { useState, useEffect } from 'react';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import Logo from './Logo';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Menu, 
  X, 
  Search, 
  Wrench, 
  ArrowRight
} from 'lucide-react';
import { companyInfo } from '../data/companyData';

export default function Navbar({ onOpenInquiry }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Products', path: '/products' },
    { name: 'Services', path: '/services' },
    { name: 'Clients & Dealers', path: '/clients' },
    { name: 'Price List', path: '/pricelist' },
    { name: "FAQ's", path: '/faqs' },
    { name: 'Contact Us', path: '/contact' },
  ];

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      setSearchOpen(false);
      navigate(`/products?q=${encodeURIComponent(searchTerm.trim())}`);
      setSearchTerm('');
    }
  };

  return (
    <header className="w-full sticky top-0 z-50 transition-all duration-300">
      {/* Top Credential & Hotline Bar */}
      <div className="bg-slate-950 text-slate-300 text-xs py-1.5 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-2">
          {/* Direct Phone & Email */}
          <div className="flex items-center space-x-4 sm:space-x-6 flex-wrap justify-center md:justify-start">
            <a 
              href={`tel:${companyInfo.phone1.replace(/\s+/g, '')}`} 
              className="flex items-center gap-1.5 hover:text-red-400 font-semibold transition-colors whitespace-nowrap"
            >
              <Phone className="w-3.5 h-3.5 text-red-500 shrink-0" />
              <span>{companyInfo.phone1}</span>
            </a>
            <span className="text-slate-700 hidden sm:inline">/</span>
            <a 
              href={`tel:${companyInfo.phone2.replace(/\s+/g, '')}`} 
              className="hidden sm:flex items-center gap-1.5 hover:text-red-400 font-semibold transition-colors whitespace-nowrap"
            >
              <span>{companyInfo.phone2}</span>
            </a>
            <span className="text-slate-700 hidden lg:inline">|</span>
            <a 
              href={`mailto:${companyInfo.email}`} 
              className="hidden lg:flex items-center gap-1.5 hover:text-red-400 transition-colors whitespace-nowrap"
            >
              <Mail className="w-3.5 h-3.5 text-red-500 shrink-0" />
              <span>{companyInfo.email}</span>
            </a>
          </div>

          {/* Memberships Badges */}
          <div className="flex items-center gap-1.5 sm:gap-2 flex-wrap justify-center text-[10px]">
            <span className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800 font-bold text-slate-300 whitespace-nowrap">
              CREDAI PUNE METRO
            </span>
            <span className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800 font-bold text-slate-300 whitespace-nowrap">
              BAI
            </span>
            <span className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800 font-bold text-slate-300 whitespace-nowrap">
              MEA
            </span>
            <span className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800 font-bold text-slate-300 whitespace-nowrap">
              MBVA
            </span>
          </div>
        </div>
      </div>

      {/* Main Multi-Page Navbar */}
      <nav 
        className={`bg-white transition-all duration-300 ${
          isScrolled ? 'shadow-lg border-b border-slate-200 py-2' : 'border-b border-slate-200 py-3'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            
            {/* Logo Link to Home */}
            <Link to="/" className="shrink-0 flex items-center">
              <Logo size="normal" />
            </Link>

            {/* Desktop Navigation Links with Animated Underline Effect */}
            <div className="hidden xl:flex items-center space-x-1 lg:space-x-1.5 2xl:space-x-2">
              {navItems.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.path}
                  className={({ isActive }) =>
                    `group relative py-2 px-2.5 text-sm font-semibold whitespace-nowrap transition-colors duration-200 flex items-center ${
                      isActive
                        ? 'text-red-600 font-bold'
                        : 'text-slate-700 hover:text-red-600'
                    }`
                  }
                >
                  {({ isActive }) => (
                    <span className="relative inline-flex items-center py-0.5">
                      <span>{item.name}</span>
                      {/* Animated Expanding Underline */}
                      <span
                        className={`absolute -bottom-1 left-0 w-full h-[2.5px] bg-red-600 rounded-full transition-transform duration-300 ease-out origin-left ${
                          isActive
                            ? 'scale-x-100'
                            : 'scale-x-0 group-hover:scale-x-100'
                        }`}
                      />
                    </span>
                  )}
                </NavLink>
              ))}
            </div>

            {/* Right Action Icons & Buttons */}
            <div className="hidden lg:flex items-center gap-3 shrink-0">
              {/* Search Toggle Icon */}
              <button
                onClick={() => setSearchOpen(!searchOpen)}
                className="p-2 rounded-xl text-slate-600 hover:text-red-600 hover:bg-slate-100 transition-colors"
                title="Search Products or Brands"
              >
                <Search className="w-5 h-5" />
              </button>

              {/* Quick Call / Service Desk Button with Underline Accent on Hover */}
              <a
                href={`tel:${companyInfo.phone1.replace(/\s+/g, '')}`}
                className="group hidden xl:inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl border border-red-200 bg-red-50 text-red-700 hover:bg-red-100 text-xs font-bold whitespace-nowrap shrink-0 transition-all shadow-xs"
                title="Service & Support Helpline"
              >
                <Wrench className="w-3.5 h-3.5 text-red-600 group-hover:rotate-12 transition-transform" />
                <span className="relative inline-block">
                  <span>Service & Support</span>
                  <span className="absolute -bottom-0.5 left-0 w-full h-[1.5px] bg-red-600 rounded-full transition-transform duration-300 ease-out origin-left scale-x-0 group-hover:scale-x-100" />
                </span>
              </a>
            </div>

            {/* Mobile Controls */}
            <div className="flex items-center gap-2 xl:hidden">
              <button
                onClick={() => setSearchOpen(!searchOpen)}
                className="p-2 text-slate-600 hover:text-red-600"
                aria-label="Search"
              >
                <Search className="w-5 h-5" />
              </button>
              <button
                onClick={() => onOpenInquiry && onOpenInquiry('Mobile Quote')}
                className="text-xs font-bold px-3 py-1.5 bg-red-600 text-white rounded-lg shadow-xs whitespace-nowrap"
              >
                Quote
              </button>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-xl text-slate-800 hover:text-red-600 hover:bg-red-50 focus:outline-none"
                aria-label="Toggle Navigation Menu"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

          </div>

          {/* Quick Search Dropdown Bar */}
          {searchOpen && (
            <div className="pt-3 pb-2 border-t border-slate-100 mt-2 animate-fadeIn">
              <form onSubmit={handleSearchSubmit} className="flex items-center gap-2">
                <div className="relative flex-1">
                  <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input
                    type="text"
                    autoFocus
                    placeholder="Search pumps, pipes, valves, controllers, solar (e.g. C.R.I., Raksha, Leader)..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-red-500 focus:bg-white"
                  />
                </div>
                <button
                  type="submit"
                  className="px-4 py-2 rounded-xl bg-red-600 text-white text-xs font-bold hover:bg-red-700 whitespace-nowrap"
                >
                  Search
                </button>
                <button
                  type="button"
                  onClick={() => setSearchOpen(false)}
                  className="p-2 text-slate-400 hover:text-slate-600"
                >
                  <X className="w-4 h-4" />
                </button>
              </form>
            </div>
          )}
        </div>

        {/* Mobile Navigation Drawer */}
        {isOpen && (
          <div className="xl:hidden border-t border-slate-100 bg-white shadow-2xl animate-fadeIn max-h-[85vh] overflow-y-auto">
            <div className="px-4 pt-3 pb-6 space-y-1">
              {navItems.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `group block px-3.5 py-2.5 rounded-xl text-sm font-semibold transition-colors ${
                      isActive
                        ? 'text-red-600 font-bold bg-red-50/50'
                        : 'text-slate-800 hover:text-red-600 hover:bg-slate-50'
                    }`
                  }
                >
                  {({ isActive }) => (
                    <span className="relative inline-block py-0.5">
                      <span>{item.name}</span>
                      <span
                        className={`absolute bottom-0 left-0 w-full h-[2px] bg-red-600 rounded-full transition-transform duration-300 ease-out origin-left ${
                          isActive
                            ? 'scale-x-100'
                            : 'scale-x-0 group-hover:scale-x-100'
                        }`}
                      />
                    </span>
                  )}
                </NavLink>
              ))}

              <div className="pt-4 border-t border-slate-100">
                <a
                  href={`tel:${companyInfo.phone1.replace(/\s+/g, '')}`}
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-red-50 border border-red-200 text-red-700 font-bold text-xs"
                >
                  <Phone className="w-4 h-4 text-red-600 shrink-0" />
                  <span>Call Service Desk: {companyInfo.phone1}</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
