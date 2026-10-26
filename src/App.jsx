import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import InquiryModal from './components/InquiryModal';

// Pages
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProductsPage from './pages/ProductsPage';
import ServicesPage from './pages/ServicesPage';
import ClientsPage from './pages/ClientsPage';
import CataloguesPage from './pages/CataloguesPage';
import PriceListPage from './pages/PriceListPage';
import FAQsPage from './pages/FAQsPage';
import ContactPage from './pages/ContactPage';

export default function App() {
  const [inquiryModalOpen, setInquiryModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('');

  const handleOpenInquiry = (serviceName = '') => {
    setSelectedService(serviceName);
    setInquiryModalOpen(true);
  };

  const handleCloseInquiry = () => {
    setInquiryModalOpen(false);
    setSelectedService('');
  };

  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 selection:bg-red-500 selection:text-white">
        {/* Automatically scroll to top on page change */}
        <ScrollToTop />

        {/* Global Multi-Page Navbar */}
        <Navbar onOpenInquiry={handleOpenInquiry} />

        {/* Separate Routed Pages */}
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage onOpenInquiry={handleOpenInquiry} />} />
            <Route path="/about" element={<AboutPage onOpenInquiry={handleOpenInquiry} />} />
            <Route path="/products" element={<ProductsPage onOpenInquiry={handleOpenInquiry} />} />
            <Route path="/services" element={<ServicesPage onOpenInquiry={handleOpenInquiry} />} />
            <Route path="/clients" element={<ClientsPage onOpenInquiry={handleOpenInquiry} />} />
            <Route path="/catalogues" element={<CataloguesPage onOpenInquiry={handleOpenInquiry} />} />
            <Route path="/pricelist" element={<PriceListPage onOpenInquiry={handleOpenInquiry} />} />
            <Route path="/faqs" element={<FAQsPage onOpenInquiry={handleOpenInquiry} />} />
            <Route path="/contact" element={<ContactPage />} />
            {/* Fallback */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        {/* Global Footer */}
        <Footer />

        {/* Interactive Quotation & Lead Modal */}
        <InquiryModal
          isOpen={inquiryModalOpen}
          onClose={handleCloseInquiry}
          initialService={selectedService}
        />
      </div>
    </BrowserRouter>
  );
}
