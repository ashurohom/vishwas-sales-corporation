import React from 'react';
import ProductSubTypesSection from '../components/ProductSubTypesSection';
import { Package, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function SubTypeDetailsPage({ onOpenInquiry }) {
  return (
    <div className="bg-slate-50 min-h-screen">
      
      {/* Main Product Sub-Types Catalog Section */}
      <ProductSubTypesSection onOpenInquiry={onOpenInquiry} />

      {/* Quick Links to Catalogues & PriceList (Matching ProductsPage Layout) */}
      
    </div>
  );
}