import React, { useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { products } from '../data/companyData';
import {
  Search,
  Package,
  ArrowRight,
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

          <div className="inline-flex items-center justify-center gap-2 px-3 py-1 rounded-full bg-red-100 uppercase text-red-700 text-xs font-bold tracking-wider mb-4">
            <span>Our Product Range</span>
          </div>

          <div className="flex items-center justify-center gap-3 sm:gap-6 mb-8 sm:mb-10">

            <span className="h-0.5 w-10 sm:w-20 md:w-28 bg-red-600 rounded-full shrink-0 shadow-xs" />

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 tracking-tight text-center">
              Explore Our{' '}
              <span className="text-red-600">
                Products
              </span>
            </h2>

            <span className="h-0.5 w-10 sm:w-20 md:w-28 bg-red-600 rounded-full shrink-0 shadow-xs" />

          </div>

          <p className="mx-auto mt-1.5 max-w-xl text-sm leading-6 text-slate-600">
            Quality brands for plumbing, water management and infrastructure.
          </p>

        </div>

        {/* Search and Category Filter Box */}
        <div className="mx-auto mb-5 max-w-5xl rounded-xl p-3 shadow-sm sm:p-4">

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">

            {/* Search Bar */}
            <div className="relative flex-1">

              <Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />

              <input
                type="search"
                value={searchQuery}
                onChange={(event) => setSearchQuery(event.target.value)}
                placeholder="Search brands or products..."
                aria-label="Search brands or products"
                className="w-full rounded-lg border border-slate-200 bg-white py-2.5 pl-10 pr-3 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-red-500 focus:ring-2 focus:ring-red-100"
              />

            </div>

            {/* Category Dropdown */}
            <div className="relative w-full sm:w-64 sm:shrink-0">

              <select
                id="product-category"
                value={activeCategory}
                onChange={(event) => setActiveCategory(event.target.value)}
                className="w-full appearance-none cursor-pointer rounded-lg border border-slate-200 bg-white py-2.5 pl-3 pr-10 text-sm font-semibold text-slate-700 outline-none transition focus:border-red-500 focus:ring-2 focus:ring-red-100"
              >
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category === 'All' ? 'All Categories' : category}
                  </option>
                ))}
              </select>

              <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-red-600" />

            </div>

          </div>
        </div>

        {/* Product Cards */}
        {filteredProducts.length > 0 ? (

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">

            {filteredProducts.map((item) => (

              <article
                key={item.brand}
                className="
                  group flex h-full min-h-[350px] w-full
                  flex-col overflow-hidden
                  rounded-xl
                  border border-blue-100
                  bg-gradient-to-br from-white via-white to-blue-50
                  shadow-sm
                  transition-all duration-300
                  hover:-translate-y-1
                  hover:border-red-300
                  hover:shadow-lg
                  hover:shadow-red-900/10
                "
              >

                {/* Brand Image */}
                <div className="
                  relative flex h-36 shrink-0
                  items-center justify-center
                  overflow-hidden
                  border-b border-slate-100
                  bg-gradient-to-br from-white via-white to-slate-50
                  p-4
                ">

                  {item.imgUrl ? (

                    <img
                      src={item.imgUrl}
                      alt={`${item.brand} logo`}
                      loading="lazy"
                      className="
                        h-full w-full
                        object-contain
                        transition-transform duration-300
                        group-hover:scale-105
                      "
                      onError={(event) => {
                        event.currentTarget.style.display = 'none';
                      }}
                    />

                  ) : (

                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-50 text-red-600">
                      <Package className="h-6 w-6" />
                    </div>

                  )}

                  {/* Hover Accent */}
                  <div className="
                    absolute bottom-0 left-0
                    h-0.5 w-0
                    bg-red-600
                    transition-all duration-300
                    group-hover:w-full
                  " />

                </div>

                {/* Card Content */}
                <div className="flex flex-1 flex-col p-4">

                  {/* Brand Name */}
                  <h3 className="
                    min-h-[3rem]
                    text-base sm:text-lg
                    font-extrabold
                    leading-snug text-slate-900
                    transition-colors
                    group-hover:text-red-700
                  ">
                    {item.brand}
                  </h3>

                  {/* Tagline */}
                  <p className="
                    mt-2
                    min-h-[2.5rem]
                    line-clamp-2
                    text-xs sm:text-sm
                    font-semibold
                    leading-5 text-red-600
                  ">
                    {item.tagline}
                  </p>

                  {/* Explore Button */}
                  <button
                    type="button"
                    onClick={() => handleExplore(item)}
                    className="
                      group/btn mt-auto
                      inline-flex w-full
                      items-center justify-center gap-2
                      rounded-lg
                      bg-slate-900
                      px-3 py-3
                      text-sm font-bold text-white
                      transition duration-200
                      
                      focus:outline-none
                      uppercase
                      focus:ring-2
                      focus:ring-red-500
                      focus:ring-offset-2
                    "
                  >
                    Explore Products

                    <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />

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
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-lg bg-red-600 px-4 py-2.5 text-xs font-bold text-white transition hover:bg-red-500 focus:outline-none focus:ring-2 uppercase focus:ring-red-400 focus:ring-offset-2 focus:ring-offset-slate-900"
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
