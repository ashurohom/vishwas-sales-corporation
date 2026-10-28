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
      <section className="py-14 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Datasheets Card */}
            <div className="p-7 rounded-3xl bg-slate-50 border border-slate-200 flex items-center justify-between">
              <div>
                <span className="text-xs font-bold text-red-600 uppercase">Technical Datasheets</span>
                <h4 className="text-lg font-bold text-slate-900 mt-1">Product Catalogues & Sizing Charts</h4>
                <p className="text-xs text-slate-500 mt-1">Download technical brochures for C.R.I., Raksha & Leader.</p>
              </div>
              <Link 
                to="/catalogues"
                className="shrink-0 p-3 rounded-xl bg-slate-900 text-white hover:bg-red-600 transition-colors"
              >
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Price List Card */}
            <div className="p-7 rounded-3xl bg-slate-50 border border-slate-200 flex items-center justify-between">
              <div>
                <span className="text-xs font-bold text-red-600 uppercase">Commercial & BOQ</span>
                <h4 className="text-lg font-bold text-slate-900 mt-1">Wholesale Price List & Tenders</h4>
                <p className="text-xs text-slate-500 mt-1">Request institutional tiered pricing for contractors.</p>
              </div>
              <Link 
                to="/pricelist"
                className="shrink-0 p-3 rounded-xl bg-slate-900 text-white hover:bg-red-600 transition-colors"
              >
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}