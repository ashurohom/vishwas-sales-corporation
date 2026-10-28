
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import {
  Package,
  ArrowLeft,
  Search,
  Plus,
  Minus,
  MessageSquare,
  ShieldCheck,
} from 'lucide-react';

export default function ProductSubTypesSection({ onOpenInquiry }) {
  const location = useLocation();
  const navigate = useNavigate();

  const {
    productTitle = 'Brand Product Sub-Types',
    subTypes: initialSubTypes = [],
    brandTag = 'Authorized Brand',
  } = location.state || {};

  const [subTypes, setSubTypes] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    setSubTypes(
      initialSubTypes.map((item, index) => ({
        ...item,
        id: item.id || `SUB-${index + 1}`,
        quantity: Math.max(1, Number(item.quantity) || 1),
      }))
    );
  }, [initialSubTypes]);

  const handleQuantityChange = (id, delta) => {
    setSubTypes((previous) =>
      previous.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: Math.max(1, (item.quantity || 1) + delta),
            }
          : item
      )
    );
  };

  const handleWhatsAppInquiry = (sub) => {
    const phoneNumber = '919158242448';

    const message = [
      'Hi Vishwas Sales team, I would like to enquire about:',
      `Brand: ${brandTag}`,
      `Product: ${sub.name}`,
      `Category: ${sub.categoryType || 'N/A'}`,
      `Quantity: ${sub.quantity} unit(s)`,
    ].join('\n');

    window.open(
      `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`,
      '_blank',
      'noopener,noreferrer'
    );
  };

  const query = searchQuery.trim().toLowerCase();

  const filteredSubTypes = subTypes.filter((sub) => {
    const searchableText = [
      sub.name,
      sub.categoryType,
      ...(sub.applications || []),
    ]
      .filter(Boolean)
      .join(' ')
      .toLowerCase();

    return !query || searchableText.includes(query);
  });

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Page Header */}
      <section className="border-b border-slate-800 bg-slate-950 py-12 text-white sm:py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <button
            type="button"
            onClick={() => navigate('/products')}
            className="mb-6 inline-flex items-center gap-2 text-xs font-bold text-slate-400 transition hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" />
            BACK TO AUTHORIZED PRODUCTS
          </button>

          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-center">
            <div>
              <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-red-500/20 px-3 py-1 text-xs font-bold uppercase tracking-wider text-red-400">
                <Package className="h-3.5 w-3.5" />
                {brandTag}
              </div>

              <h1 className="text-2xl font-black uppercase tracking-tight sm:text-4xl">
                {productTitle}
              </h1>

              <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-300">
                Explore product types and applications for this brand.
                Contact our team for product details and quotations.
              </p>
            </div>

            {onOpenInquiry && (
              <button
                type="button"
                onClick={() => onOpenInquiry(productTitle)}
                className="shrink-0 rounded-xl bg-red-600 px-5 py-3 text-xs font-bold uppercase tracking-wider text-white transition hover:bg-red-700"
              >
                Request Bulk Quote
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Product Search and Listing */}
      <section className="py-10 sm:py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="relative w-full sm:max-w-md">
                <Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />

                <input
                  type="search"
                  value={searchQuery}
                  onChange={(event) => setSearchQuery(event.target.value)}
                  placeholder="Search product or application..."
                  aria-label="Search product subtypes"
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3 pl-10 pr-4 text-sm outline-none focus:border-red-500 focus:ring-2 focus:ring-red-100"
                />
              </div>

              <span className="text-sm text-slate-500">
                Showing{' '}
                <strong className="text-slate-900">
                  {filteredSubTypes.length}
                </strong>{' '}
                products
              </span>
            </div>
          </div>

          {filteredSubTypes.length > 0 ? (
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filteredSubTypes.map((sub) => (
                <article
                  key={sub.id}
                  className="group flex flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
                >
                  {/* Product Image */}
                  <div className="flex h-44 items-center justify-center overflow-hidden bg-slate-100">
                    {sub.imgUrl ? (
                      <img
                        src={sub.imgUrl}
                        alt={sub.name}
                        loading="lazy"
                        className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <Package className="h-12 w-12 text-slate-300" />
                    )}
                  </div>

                  {/* Product Details */}
                  <div className="flex flex-1 flex-col p-5 sm:p-6">
                    {sub.categoryType && (
                      <div className="mb-3">
                        <span className="rounded-full bg-slate-100 px-2.5 py-1 text-[10px] font-bold uppercase text-slate-700">
                          {sub.categoryType}
                        </span>
                      </div>
                    )}

                    <h2 className="text-lg font-extrabold leading-snug text-slate-900 transition group-hover:text-red-600">
                      {sub.name}
                    </h2>

                    {sub.applications?.length > 0 && (
                      <div className="mt-4">
                        <p className="mb-2 text-[10px] font-bold uppercase tracking-wider text-slate-400">
                          Applications
                        </p>

                        <div className="flex flex-wrap gap-2">
                          {sub.applications.map((application, index) => (
                            <span
                              key={`${sub.id}-application-${index}`}
                              className="rounded-lg bg-slate-100 px-2.5 py-1.5 text-[10px] font-semibold text-slate-600"
                            >
                              {application}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Quantity and Inquiry */}
                    <div className="mt-auto border-t border-slate-100 pt-5">
                      <div className="flex items-center gap-2">
                        <div className="flex items-center rounded-xl border border-slate-200 bg-slate-50 p-1">
                          <button
                            type="button"
                            aria-label={`Decrease ${sub.name} quantity`}
                            onClick={() =>
                              handleQuantityChange(sub.id, -1)
                            }
                            className="flex h-8 w-8 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-600 hover:bg-slate-100"
                          >
                            <Minus className="h-3.5 w-3.5" />
                          </button>

                          <span className="w-9 text-center text-sm font-bold text-slate-900">
                            {sub.quantity}
                          </span>

                          <button
                            type="button"
                            aria-label={`Increase ${sub.name} quantity`}
                            onClick={() =>
                              handleQuantityChange(sub.id, 1)
                            }
                            className="flex h-8 w-8 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-600 hover:bg-slate-100"
                          >
                            <Plus className="h-3.5 w-3.5" />
                          </button>
                        </div>

                        <button
                          type="button"
                          onClick={() => handleWhatsAppInquiry(sub)}
                          className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-slate-900 px-3 py-3 text-xs font-extrabold uppercase tracking-wide text-white transition hover:bg-red-600"
                        >
                          <MessageSquare className="h-4 w-4" />
                          Enquire
                        </button>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="rounded-3xl border border-slate-200 bg-white px-5 py-14 text-center">
              <Package className="mx-auto h-12 w-12 text-slate-300" />

              <h3 className="mt-4 text-lg font-extrabold text-slate-900">
                No Products Found
              </h3>

              <p className="mt-2 text-sm text-slate-500">
                {subTypes.length === 0
                  ? 'No subtype data was provided for this brand. Return to the products page and select a brand.'
                  : 'Try a different search term.'}
              </p>

              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="mt-5 rounded-xl bg-slate-900 px-5 py-3 text-sm font-bold text-white hover:bg-red-600"
              >
                Reset Search
              </button>

              {subTypes.length === 0 && (
                <button
                  type="button"
                  onClick={() => navigate('/products')}
                  className="ml-3 mt-5 rounded-xl border border-slate-200 px-5 py-3 text-sm font-bold text-slate-700 hover:bg-slate-100"
                >
                  Browse Brands
                </button>
              )}
            </div>
          )}
        </div>
      </section>

      {/* Catalogue and Pricing Links */}
      <section className="border-t border-slate-200 bg-white py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-5 rounded-3xl bg-slate-900 p-6 text-white sm:p-8 md:flex-row">
            <div className="flex items-center gap-3">
              <ShieldCheck className="h-8 w-8 shrink-0 text-red-500" />

              <div>
                <h3 className="text-base font-bold">
                  Need catalogues or pricing?
                </h3>

                <p className="mt-1 text-xs text-slate-400">
                  Contact our team for product documentation and quotations.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <Link
                to="/catalogues"
                className="rounded-xl bg-slate-800 px-4 py-3 text-xs font-bold text-white transition hover:bg-slate-700"
              >
                Catalogues
              </Link>

              <Link
                to="/pricelist"
                className="rounded-xl bg-red-600 px-4 py-3 text-xs font-bold text-white transition hover:bg-red-700"
              >
                Price List
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
