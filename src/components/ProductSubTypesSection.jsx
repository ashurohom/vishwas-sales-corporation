import React, { useState } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { 
  Package, 
  ArrowLeft, 
  Search, 
  CheckCircle2, 
  Clock, 
  Truck, 
  Plus, 
  Minus, 
  ShoppingCart, 
  MessageSquare,
  FileText,
  ShieldCheck
} from 'lucide-react';

export default function ProductSubTypesSection({ onOpenInquiry }) {
  const location = useLocation();
  const navigate = useNavigate();

  // 1. Destructure state passed from ProductsSection card click
  const { 
    productTitle = 'Brand Product Sub-Types', 
    subTypes: initialSubTypes = [], 
    brandTag = 'Authorized Brand' 
  } = location.state || {};

  // Default fallback mock data if page is accessed directly without state
  const defaultSubTypes = [
    {
      id: "SUB-01",
      name: "High-Pressure Hydraulic Submersible Pump",
      sku: "CRI-HP-100",
      categoryType: "Borewell Pump",
      rating: "5.0 HP - 15.0 HP",
      headRange: "30m - 180m",
      discharge: "100 - 450 LPM",
      inStock: true,
      stockQty: 42,
      estDelivery: "Same-day dispatch to Pune/PCMC",
      priceEst: "₹28,500 - ₹45,000",
      imgUrl: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80",
      features: [
        "High head pressure performance for deep borewells",
        "Energy-efficient IE2/IE3 motor options",
        "Robust copper winding with thermal protection"
      ],
      applications: ["Agriculture Irrigation", "Deep Borewell Dewatering"]
    },
    {
      id: "SUB-02",
      name: "Monoblock Domestic Pressure Pump",
      sku: "CRI-MB-200",
      categoryType: "Monoblock Pump",
      rating: "0.5 HP - 2.0 HP",
      headRange: "6m - 40m",
      discharge: "20 - 120 LPM",
      inStock: true,
      stockQty: 18,
      estDelivery: "Same-day dispatch to Pune/PCMC",
      priceEst: "₹6,500 - ₹14,200",
      imgUrl: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80",
      features: [
        "Self-priming mechanism up to 8m suction lift",
        "Low-noise operation for domestic apartments",
        "Thermal overload protection"
      ],
      applications: ["Bungalows", "Overhead Tank Transfer"]
    }
  ];

  const activeList = initialSubTypes.length > 0 ? initialSubTypes : defaultSubTypes;

  // 2. Local state for quantities, search & stock filtering
  const [subTypes, setSubTypes] = useState(
    activeList.map(item => ({ ...item, quantity: item.quantity || 1 }))
  );
  const [searchQuery, setSearchQuery] = useState('');
  const [stockOnly, setStockOnly] = useState(false);

  // Quantity adjuster
  const handleQuantityChange = (id, delta) => {
    setSubTypes(prev =>
      prev.map(item => {
        if (item.id === id) {
          const newQty = (item.quantity || 1) + delta;
          return { ...item, quantity: newQty > 0 ? newQty : 1 };
        }
        return item;
      })
    );
  };

  // WhatsApp Inquiry Generator
  const handleWhatsAppInquiry = (sub) => {
    const phoneNumber = "919158242448"; // Replace with your official WhatsApp number
    const text = `Hi Vishwas Sales team, I want to inquire about ${sub.quantity} unit(s) of "${sub.name}" (SKU: ${sub.sku || 'N/A'}).`;
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`, "_blank");
  };

  // Filtered List based on Search & Stock Toggle
  const filteredSubTypes = subTypes.filter(sub => {
    const matchesSearch = 
      sub.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (sub.sku && sub.sku.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (sub.categoryType && sub.categoryType.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesStock = !stockOnly || sub.inStock;
    return matchesSearch && matchesStock;
  });

  return (
    <div className="bg-slate-50 min-h-screen">
      
      {/* Page Hero Header (Dark Theme matching ProductsPage) */}
      <div className="bg-slate-950 text-white py-14 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Back Button Link */}
          <button 
            onClick={() => navigate('/products')}
            className="inline-flex items-center gap-2 text-xs font-bold text-slate-400 hover:text-white mb-6 transition-colors group cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>BACK TO AUTHORIZED PRODUCTS</span>
          </button>

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/20 text-red-400 text-xs font-bold uppercase tracking-wider mb-3">
                <Package className="w-3.5 h-3.5" />
                <span>{brandTag}</span>
              </div>
              <h1 className="text-3xl sm:text-4xl font-black tracking-tight text-white uppercase">
                {productTitle}
              </h1>
              <p className="mt-2 text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed">
                Explore detailed technical specifications, pressure head ratings, discharge capabilities, and Hadapsar warehouse stock status.
              </p>
            </div>

            {/* Quick Inquiry Header Trigger */}
            {onOpenInquiry && (
              <button
                onClick={() => onOpenInquiry(productTitle)}
                className="shrink-0 px-5 py-3 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-red-600/30 transition-all active:scale-95 cursor-pointer"
              >
                Request Bulk BOQ Quote
              </button>
            )}
          </div>

        </div>
      </div>

      {/* Main Sub-Types Content Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Toolbar: Search + Stock Filter */}
          <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm mb-8 flex flex-col md:flex-row items-center justify-between gap-4">
            
            {/* Search Input */}
            <div className="relative w-full md:w-80">
              <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder="Search by sub-type, SKU, or specs..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs font-medium text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>

            {/* Stock Switch & Count */}
            <div className="flex items-center justify-between md:justify-end gap-6 w-full md:w-auto">
              <span className="text-xs font-bold text-slate-500">
                Showing <strong className="text-slate-900">{filteredSubTypes.length}</strong> items
              </span>

            </div>

          </div>

          {/* Sub-Types Cards Grid */}
          {filteredSubTypes.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredSubTypes.map((sub, idx) => (
                <div 
                  key={sub.id || idx}
                  className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    {/* Image & Stock Badge Top Header */}
                    <div className="relative h-48 bg-slate-100 overflow-hidden">
                      {sub.imgUrl ? (
                        <img 
                          src={sub.imgUrl} 
                          alt={sub.name} 
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      ) : (
                        <div className="w-full h-full bg-slate-200 flex items-center justify-center">
                          <Package className="w-10 h-10 text-slate-400" />
                        </div>
                      )}
                      
                    </div>

                    {/* Content Section */}
                    <div className="p-6">
                      
                      {/* Type Pill & Rating */}
                      <div className="flex items-center gap-2 mb-2">
                        {sub.categoryType && (
                          <span className="text-[10px] font-extrabold px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700 uppercase">
                            {sub.categoryType}
                          </span>
                        )}
                        {sub.rating && (
                          <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-red-50 text-red-600 border border-red-100">
                            {sub.rating}
                          </span>
                        )}
                      </div>

                      {/* Title */}
                      <h3 className="text-base font-extrabold text-slate-900 group-hover:text-red-600 transition-colors line-clamp-2 min-h-[48px]">
                        {sub.name}
                      </h3>

                      {/* Key Specs Box */}
                      <div className="mt-3 bg-slate-50 p-3 rounded-xl border border-slate-100 text-xs space-y-1.5">
                        {sub.headRange && (
                          <div className="flex justify-between">
                            <span className="text-slate-500 font-medium">Head / Range:</span>
                            <span className="font-bold text-slate-800">{sub.headRange}</span>
                          </div>
                        )}
                        {sub.discharge && (
                          <div className="flex justify-between">
                            <span className="text-slate-500 font-medium">Discharge Rate:</span>
                            <span className="font-bold text-slate-800">{sub.discharge}</span>
                          </div>
                        )}
                        {sub.priceEst && (
                          <div className="flex justify-between border-t border-slate-200 pt-1.5 mt-1">
                            <span className="text-slate-500 font-medium">Est. Wholesale:</span>
                            <span className="font-extrabold text-red-600">{sub.priceEst}</span>
                          </div>
                        )}
                      </div>

                      {/* Features List */}
                      {sub.features && sub.features.length > 0 && (
                        <div className="mt-4 space-y-1.5">
                          <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Features</p>
                          {sub.features.slice(0, 3).map((feat, fIdx) => (
                            <div key={fIdx} className="flex items-start gap-2 text-xs text-slate-600">
                              <span className="w-1.5 h-1.5 rounded-full bg-red-500 shrink-0 mt-1.5" />
                              <span className="line-clamp-1">{feat}</span>
                            </div>
                          ))}
                        </div>
                      )}

                    </div>
                  </div>

                  {/* Card Bottom Actions */}
                  <div className="p-6 pt-0 mt-auto border-t border-slate-100">
                    
                    {sub.estDelivery && (
                      <div className="flex items-center gap-1.5 text-[11px] font-medium text-slate-500 mb-3 pt-3">
                        <Truck className="w-3.5 h-3.5 text-slate-400" />
                        <span>{sub.estDelivery}</span>
                      </div>
                    )}

                    <div className="flex items-center gap-2">
                      {/* Quantity Control */}
                      <div className="flex items-center border border-slate-200 rounded-xl bg-slate-50 p-1">
                        <button
                          onClick={() => handleQuantityChange(sub.id, -1)}
                          className="w-7 h-7 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-slate-100 active:scale-95 transition-all"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="w-8 text-center text-xs font-bold text-slate-900">
                          {sub.quantity}
                        </span>
                        <button
                          onClick={() => handleQuantityChange(sub.id, 1)}
                          className="w-7 h-7 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-slate-100 active:scale-95 transition-all"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      {/* WhatsApp Inquiry Action */}
                      <button
                        onClick={() => handleWhatsAppInquiry(sub)}
                        className="flex-1 py-2.5 px-3 rounded-xl bg-slate-900 hover:bg-red-600 text-white text-xs font-extrabold uppercase tracking-wider flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                      >
                        <MessageSquare className="w-3.5 h-3.5" />
                        <span>Inquire</span>
                      </button>
                    </div>

                  </div>

                </div>
              ))}
            </div>
          ) : (
            <div className="bg-white rounded-3xl border border-slate-200 p-12 text-center max-w-lg mx-auto">
              <Package className="w-12 h-12 text-slate-300 mx-auto mb-3" />
              <h4 className="text-lg font-bold text-slate-900">No Sub-Types Found</h4>
              <p className="text-xs text-slate-500 mt-1 mb-4">
                No products match your current search query or stock requirements.
              </p>
              <button
                onClick={() => { setSearchQuery(''); setStockOnly(false); }}
                className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold transition-colors"
              >
                Reset Filters
              </button>
            </div>
          )}

        </div>
      </section>

      {/* Footer Banner Quick Link */}
      <section className="py-10 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-6 rounded-3xl bg-slate-900 text-white flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <ShieldCheck className="w-8 h-8 text-red-500 shrink-0" />
              <div>
                <h4 className="text-base font-bold text-white">Looking for technical catalogues or price lists?</h4>
                <p className="text-xs text-slate-400">Download official datasheets and institutional pricing charts.</p>
              </div>
            </div>
            <div className="flex items-center gap-3 shrink-0">
              <Link to="/catalogues" className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold transition-colors">
                Catalogues
              </Link>
              <Link to="/pricelist" className="px-4 py-2.5 rounded-xl bg-red-600 hover:bg-red-700 text-white text-xs font-bold transition-colors">
                Price List
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}