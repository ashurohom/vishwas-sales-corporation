import React, { useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { products } from '../data/companyData';
import {
  Search,
  Package,
  ArrowRight,
  Filter,
  X,
  ChevronDown,
} from 'lucide-react';

const categories = [
  'All',
  ...new Set(products.map((product) => product.category)),
];

export default function ProductsSection({
  onOpenInquiry,
  initialSearch = '',
}) {
  const navigate = useNavigate();

  const [searchQuery, setSearchQuery] = useState(initialSearch);
  const [activeCategory, setActiveCategory] = useState('All');

  useEffect(() => {
    setSearchQuery(initialSearch);
    setActiveCategory('All');
  }, [initialSearch]);

  const filteredProducts = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    return products.filter((item) => {
      const matchesCategory =
        activeCategory === 'All' ||
        item.category === activeCategory;

      const matchesSearch =
        !query ||
        item.brand.toLowerCase().includes(query) ||
        item.category.toLowerCase().includes(query) ||
        item.tagline.toLowerCase().includes(query) ||
        item.details.some((detail) =>
          detail.toLowerCase().includes(query)
        );

      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, activeCategory]);

  const clearFilters = () => {
    setSearchQuery('');
    setActiveCategory('All');
    navigate('/products');
  };

  const handleExplore = (item) => {
    navigate('/products/subtypes', {
      state: {
        productTitle: `${item.brand} Solutions`,
        subTypes: item.subTypes,
        brandTag: item.brand,
      },
    });
  };

  const handleInquiry = (brand) => {
    onOpenInquiry?.(brand);
  };

  return (
    <section className="bg-[#eef2f7] py-7 sm:py-9">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

        {/* Section Heading */}
        <div className="mb-5 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-red-100 bg-white px-3 py-1.5 text-[11px] font-extrabold uppercase tracking-widest text-red-700 shadow-sm">
            <Package className="h-3.5 w-3.5" />
            Our Product Range
          </span>

          <h2 className="mt-2 text-2xl font-black tracking-tight text-slate-900 sm:text-3xl">
            Explore Our <span className="text-red-600">Products</span>
          </h2>

          <p className="mx-auto mt-1.5 max-w-xl text-sm leading-6 text-slate-600">
            Quality brands for plumbing, water management and infrastructure.
          </p>
        </div>

        {/* Search and Category Filter Box */}
        <div className="mx-auto mb-5 max-w-5xl rounded-xl border border-red-100 bg-rose-50 p-3 shadow-sm sm:p-4">

          {/* Search and Reset */}
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <div className="relative flex-1">
              <Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />

              <input
                type="search"
                value={searchQuery}
                onChange={(event) =>
                  setSearchQuery(event.target.value)
                }
                placeholder="Search brands or products..."
                aria-label="Search brands or products"
                className="w-full rounded-lg border border-slate-200 bg-white py-2.5 pl-10 pr-3 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-red-500 focus:ring-2 focus:ring-red-100"
              />
            </div>

            <button
              type="button"
              onClick={clearFilters}
              className="inline-flex items-center justify-center gap-1.5 rounded-lg border border-slate-200 bg-white px-3.5 py-2.5 text-xs font-bold text-slate-600 transition hover:border-red-200 hover:bg-red-50 hover:text-red-700"
            >
              <X className="h-3.5 w-3.5" />
              Show All Brands
            </button>
          </div>

          {/* Category Dropdown Toggle */}
          <div className="mt-3 flex flex-col gap-2 border-t border-red-100 pt-3 sm:flex-row sm:items-center sm:justify-between">
            <label
              htmlFor="product-category"
              className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-slate-600"
            >
              <Filter className="h-4 w-4 text-red-600" />
              Product Category
            </label>

            <div className="relative w-full sm:w-64">
              <select
                id="product-category"
                value={activeCategory}
                onChange={(event) =>
                  setActiveCategory(event.target.value)
                }
                className="w-full appearance-none cursor-pointer rounded-lg border border-slate-200 bg-white py-2.5 pl-3 pr-10 text-sm font-semibold text-slate-700 outline-none transition hover:border-red-300 focus:border-red-500 focus:ring-2 focus:ring-red-100"
              >
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category === 'All'
                      ? 'All Categories'
                      : category}
                  </option>
                ))}
              </select>

              <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-red-600" />
            </div>
          </div>
        </div>

        {/* Results Information */}
        <div className="mb-3 flex items-center justify-between gap-3">
          <div>
            <h3 className="text-sm font-extrabold text-slate-900 sm:text-base">
              {searchQuery.trim()
                ? `Results for "${searchQuery.trim()}"`
                : 'Authorized Brands'}
            </h3>

            <p className="mt-0.5 text-xs text-slate-500">
              {filteredProducts.length}{' '}
              {filteredProducts.length === 1
                ? 'brand'
                : 'brands'} found
            </p>
          </div>

          <span className="rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs font-bold text-slate-600">
            {filteredProducts.length} items
          </span>
        </div>

        {/* Product Cards */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 justify-items-center gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {filteredProducts.map((item) => (
              <article
                key={item.brand}
                className="group flex h-full w-full max-w-sm flex-col overflow-hidden rounded-xl border border-blue-100 bg-gradient-to-br from-white via-white to-blue-50 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-red-300 hover:shadow-lg hover:shadow-red-900/10"
              >
                {/* Brand Image */}
                <div className="relative flex h-36 items-center justify-center overflow-hidden border-b border-slate-100 bg-gradient-to-br from-white via-white to-slate-50 p-4 sm:h-40">
                  {item.imgUrl ? (
                    <img
                      src={item.imgUrl}
                      alt={`${item.brand} logo`}
                      loading="lazy"
                      className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-105"
                      onError={(event) => {
                        event.currentTarget.style.display = 'none';
                      }}
                    />
                  ) : (
                    <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-red-50 text-red-600">
                      <Package className="h-7 w-7" />
                    </div>
                  )}

                  {/* Category Badge */}
                  <span className="absolute right-2.5 top-2.5 max-w-[75%] truncate rounded-md border border-slate-200 bg-white/95 px-2 py-1 text-[9px] font-extrabold uppercase tracking-wide text-slate-500 shadow-sm">
                    {item.category}
                  </span>

                  {/* Hover Accent */}
                  <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-red-600 transition-all duration-300 group-hover:w-full" />
                </div>

                {/* Card Content */}
                <div className="flex flex-1 flex-col p-4">
                  <h3 className="text-base font-extrabold leading-snug text-slate-900 transition-colors group-hover:text-red-700">
                    {item.brand}
                  </h3>

                  <p className="mt-1.5 text-xs font-semibold leading-5 text-red-600">
                    {item.tagline}
                  </p>

                  <ul className="mt-3 flex-1 space-y-2">
                    {item.details.map((detail) => (
                      <li
                        key={detail}
                        className="flex items-start gap-2 text-xs leading-5 text-slate-600"
                      >
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-red-500" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Explore Button */}
                  <button
                    type="button"
                    onClick={() => handleExplore(item)}
                    className="group/btn mt-4 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-slate-900 px-3 py-2.5 text-xs font-bold text-white transition duration-200 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                  >
                    Explore Products
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover/btn:translate-x-1" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        ) : (
          /* No Results */
          <div className="mx-auto max-w-5xl rounded-xl border border-dashed border-slate-300 bg-white px-5 py-10 text-center">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-red-50 text-red-500">
              <Package className="h-6 w-6" />
            </div>

            <h3 className="mt-3 text-base font-extrabold text-slate-900">
              No matching brands found
            </h3>

            <p className="mt-1.5 text-sm text-slate-500">
              Try another search or clear your filters.
            </p>

            <button
              type="button"
              onClick={clearFilters}
              className="mt-4 rounded-lg bg-red-600 px-4 py-2.5 text-xs font-bold text-white transition hover:bg-red-700"
            >
              View All Brands
            </button>
          </div>
        )}

        {/* Bulk Enquiry Box */}
        <div className="mx-auto mt-6 max-w-5xl overflow-hidden rounded-xl border border-slate-800 bg-slate-900 p-5 text-white shadow-md sm:p-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="max-w-2xl">
              <span className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-red-400">
                Wholesale & Bulk Orders
              </span>

              <h3 className="mt-1.5 text-lg font-extrabold sm:text-xl">
                Need a reliable supply partner?
              </h3>

              <p className="mt-1.5 text-xs leading-5 text-slate-300 sm:text-sm">
                Contact our team for product availability, bulk orders and project enquiries.
              </p>
            </div>

            <button
              type="button"
              onClick={() =>
                handleInquiry(
                  searchQuery.trim() || 'General Product Enquiry'
                )
              }
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-lg bg-red-600 px-4 py-2.5 text-xs font-bold text-white transition hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2 focus:ring-offset-slate-900"
            >
              Contact Our Team
              <ArrowRight className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
