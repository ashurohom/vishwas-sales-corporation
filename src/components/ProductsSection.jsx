import React, { useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { products } from '../data/companyData';
import {
  Search,
  Package,
  ArrowRight,
  MessageSquare,
  Filter,
  X,
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
    if (onOpenInquiry) {
      onOpenInquiry(brand);
    }
  };

  return (
    <section className="bg-slate-50 py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Section Heading */}
        <div className="mb-8 text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-red-50 px-4 py-2 text-xs font-bold uppercase tracking-wider text-red-700">
            <Package className="h-4 w-4" />
            Our Product Range
          </span>

          <h2 className="mt-4 text-2xl font-black uppercase text-slate-900 sm:text-4xl">
            Explore Our Products
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-slate-600 sm:text-base">
            Discover brands and product categories for plumbing,
            water management and infrastructure requirements.
          </p>
        </div>

        {/* Search and Category Filters */}
        <div className="mb-7 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
          <div className="flex flex-col gap-4 sm:flex-row">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />

              <input
                type="search"
                value={searchQuery}
                onChange={(event) =>
                  setSearchQuery(event.target.value)
                }
                placeholder="Search brands or products..."
                aria-label="Search brands or products"
                className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3 pl-12 pr-4 text-sm outline-none focus:border-red-500 focus:ring-2 focus:ring-red-100"
              />
            </div>

            <button
              type="button"
              onClick={clearFilters}
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 px-4 py-3 text-sm font-bold text-slate-700 hover:bg-red-50 hover:text-red-700"
            >
              <X className="h-4 w-4" />
              Show All Brands
            </button>
          </div>

          <div className="mt-5 flex flex-wrap items-center gap-2">
            <span className="mr-1 inline-flex items-center gap-2 text-xs font-bold uppercase text-slate-500">
              <Filter className="h-4 w-4" />
              Categories
            </span>

            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={`rounded-full border px-4 py-2 text-xs font-bold transition ${activeCategory === category
                  ? 'border-red-600 bg-red-600 text-white'
                  : 'border-slate-200 bg-white text-slate-600 hover:border-red-300 hover:text-red-700'
                  }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-5 flex items-center justify-between gap-3">
          <div>
            <h3 className="text-lg font-extrabold text-slate-900">
              {searchQuery.trim()
                ? `Results for "${searchQuery.trim()}"`
                : 'Our Authorized Brands'}
            </h3>

            <p className="mt-1 text-sm text-slate-500">
              {filteredProducts.length} brands found
            </p>
          </div>
        </div>

        {/* Brand Product Cards */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {filteredProducts.map((item) => (
              <article
                key={item.brand}
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:border-red-200 hover:shadow-xl"
              >
                {/* Brand Image Area */}
                <div className="relative flex h-48 items-center justify-center overflow-hidden border-b border-slate-100 bg-white p-5 sm:h-52">
                  {item.imgUrl ? (
                    <img
                      src={item.imgUrl}
                      alt={`${item.brand} logo`}
                      loading="lazy"
                      className="h-full w-full object-contain transition duration-300 group-hover:scale-105"
                      onError={(event) => {
                        event.currentTarget.style.display = 'none';
                      }}
                    />
                  ) : (
                    <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-red-50 text-red-600">
                      <Package className="h-10 w-10" />
                    </div>
                  )}

                  {/* Category Badge */}
                  <span className="absolute right-3 top-3 max-w-[75%] rounded-full bg-slate-100/95 px-3 py-1.5 text-[10px] font-bold uppercase text-slate-600">
                    {item.category}
                  </span>

                  {/* Bottom Accent */}
                  <div className="absolute bottom-0 left-0 h-1 w-0 bg-red-600 transition-all duration-300 group-hover:w-full" />
                </div>

                {/* Card Content */}
                <div className="flex flex-1 flex-col p-5 sm:p-6">
                  <h3 className="text-xl font-extrabold text-slate-900">
                    {item.brand}
                  </h3>

                  <p className="mt-2 text-sm font-semibold leading-6 text-red-600">
                    {item.tagline}
                  </p>

                  <ul className="mt-5 flex-1 space-y-3">
                    {item.details.map((detail) => (
                      <li
                        key={detail}
                        className="flex items-start gap-3 text-sm leading-5 text-slate-600"
                      >
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-red-600" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Action Buttons */}
                  <div className="mt-6 grid grid-cols-1 gap-3">
                    <button
                      type="button"
                      onClick={() => handleExplore(item)}
                      className="group relative inline-flex w-full items-center justify-center gap-2 overflow-hidden rounded-xl bg-gradient-to-r from-red-600 to-red-700 px-4 py-3.5 text-sm font-bold text-white shadow-md shadow-red-600/20 transition-all duration-300 hover:-translate-y-0.5 hover:from-red-700 hover:to-red-800 hover:shadow-lg hover:shadow-red-600/30 active:translate-y-0 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                    >
                      <span>Explore Products</span>
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          /* No Results */
          <div className="rounded-2xl border border-dashed border-slate-300 bg-white px-5 py-14 text-center">
            <Package className="mx-auto h-12 w-12 text-slate-300" />

            <h3 className="mt-4 text-lg font-extrabold text-slate-900">
              No matching brands found
            </h3>

            <p className="mt-2 text-sm text-slate-500">
              Try another search or view all available brands.
            </p>

            <button
              type="button"
              onClick={clearFilters}
              className="mt-5 rounded-xl bg-red-600 px-5 py-3 text-sm font-bold text-white hover:bg-red-700"
            >
              View All Brands
            </button>
          </div>
        )}

        {/* Bulk Enquiry CTA */}
        <div className="mt-10 rounded-2xl bg-slate-950 p-6 text-white sm:p-8">
          <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-red-400">
                Wholesale & Bulk Orders
              </span>

              <h3 className="mt-3 text-2xl font-black sm:text-3xl">
                Looking for a reliable supply partner?
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-300">
                Contact our team for product availability, bulk
                requirements and project enquiries.
              </p>
            </div>

            <button
              type="button"
              onClick={() =>
                handleInquiry(
                  searchQuery.trim() || 'General Product Enquiry'
                )
              }
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-red-600 px-6 py-3.5 text-sm font-bold text-white hover:bg-red-700"
            >
              Contact Our Team
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
