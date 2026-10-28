
import React, { useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Search,
  Package,
  ArrowRight,
  MessageSquare,
  Filter,
  X,
} from 'lucide-react';


const products = [
  {
    brand: 'Raksha Pipes',
    category: 'Pipes & Fittings',
    tagline: 'Plumbing, sanitary, agriculture and water tank solutions',
    details: [
      'Piping solutions for plumbing and water supply',
      'Products for agricultural applications',
      'Options for residential and commercial projects',
    ],
    subTypes: [
      {
        id: 'RAK-01',
        name: 'PVC Pipes',
        categoryType: 'PVC Pipe',
        imgUrl: '',
        applications: ['Plumbing', 'Water supply'],
      },
      {
        id: 'RAK-02',
        name: 'Pipe Fittings',
        categoryType: 'Pipe Fittings',
        imgUrl: '',
        applications: ['Plumbing installations'],
      },
    ],
  },
  {
    brand: 'Ashirvad by aliaxis',
    category: 'Pipes & Fittings',
    tagline: 'Plumbing, sanitary and water supply solutions',
    details: [
      'Piping systems for building plumbing',
      'Pipes and compatible fittings',
      'Products for suitable water supply applications',
    ],
    subTypes: [
      {
        id: 'ASH-01',
        name: 'CPVC Pipes',
        categoryType: 'CPVC Pipe',
        imgUrl: '',
        applications: ['Building plumbing'],
      },
      {
        id: 'ASH-02',
        name: 'Pipe Fittings',
        categoryType: 'Pipe Fittings',
        imgUrl: '',
        applications: ['Plumbing installations'],
      },
    ],
  },
  {
    brand: 'C.R.I. Pumps',
    category: 'Pumps',
    tagline: 'Agriculture, residential, industrial and sewage pumps',
    details: [
      'Pumping solutions for different applications',
      'Options for agricultural and residential water supply',
      'Product selection based on required specifications',
    ],
    subTypes: [
      {
        id: 'CRI-01',
        name: 'Submersible Pump',
        categoryType: 'Submersible Pump',
        imgUrl: '',
        applications: ['Water supply', 'Agriculture'],
      },
      {
        id: 'CRI-02',
        name: 'Monoblock Pump',
        categoryType: 'Monoblock Pump',
        imgUrl: '',
        applications: ['Water transfer', 'Water supply'],
      },
      {
        id: 'CRI-03',
        name: 'Sewage Pump',
        categoryType: 'Sewage Pump',
        imgUrl: '',
        applications: ['Sewage handling'],
      },
    ],
  },
  {
    brand: 'Hydro-Pneumatic Water Supply System',
    category: 'Water Supply Systems',
    tagline: 'Complete water supply solutions and turnkey projects',
    details: [
      'Integrated water supply system solutions',
      'Pressure boosting and distribution requirements',
      'Project-based system selection',
    ],
    subTypes: [
      {
        id: 'HPS-01',
        name: 'Hydro-Pneumatic Booster System',
        categoryType: 'Booster System',
        imgUrl: '',
        applications: ['Buildings', 'Water supply projects'],
      },
      {
        id: 'HPS-02',
        name: 'Turnkey Water Supply Solution',
        categoryType: 'Turnkey Project',
        imgUrl: '',
        applications: ['Residential and commercial projects'],
      },
    ],
  },
  {
    brand: 'Huliot India',
    category: 'Pipes & Fittings',
    tagline: 'Plumbing water supply, wastewater and drainage',
    details: [
      'Piping and drainage solutions',
      'Wastewater management applications',
      'Product selection based on system requirements',
    ],
    subTypes: [
      {
        id: 'HUL-01',
        name: 'Drainage Pipes',
        categoryType: 'Drainage Pipe',
        imgUrl: '',
        applications: ['Building drainage'],
      },
      {
        id: 'HUL-02',
        name: 'Drainage Fittings',
        categoryType: 'Drainage Fittings',
        imgUrl: '',
        applications: ['Drainage installations'],
      },
    ],
  },
  {
    brand: 'Leader Valves Limited',
    category: 'Valves',
    tagline: 'Valves for a range of applications',
    details: [
      'Flow control and isolation products',
      'Valve selection based on application',
      'Confirm available materials and sizes',
    ],
    subTypes: [
      {
        id: 'LEA-01',
        name: 'Ball Valve',
        categoryType: 'Ball Valve',
        imgUrl: '',
        applications: ['Flow control'],
      },
      {
        id: 'LEA-02',
        name: 'Gate Valve',
        categoryType: 'Gate Valve',
        imgUrl: '',
        applications: ['Water distribution'],
      },
      {
        id: 'LEA-03',
        name: 'Check Valve',
        categoryType: 'Check Valve',
        imgUrl: '',
        applications: ['Flow control systems'],
      },
    ],
  },
  {
    brand: 'Autocon',
    category: 'Electrical Control Panels',
    tagline: 'Electronic control panels',
    details: [
      'Control panel solutions',
      'Electrical control requirements',
      'Panel selection based on application',
    ],
    subTypes: [
      {
        id: 'AUT-01',
        name: 'Electrical Control Panel',
        categoryType: 'Control Panel',
        imgUrl: '',
        applications: ['Equipment control'],
      },
    ],
  },
  {
    brand: 'Sintex',
    category: 'Water Tanks',
    tagline: 'Water storage solutions',
    details: [
      'Water storage products',
      'Options for residential and commercial applications',
      'Capacity selection based on requirements',
    ],
    subTypes: [
      {
        id: 'SIN-01',
        name: 'Water Storage Tank',
        categoryType: 'Water Tank',
        imgUrl: '',
        applications: ['Water storage'],
      },
    ],
  },
  {
    brand: 'Johnson Bathware',
    category: 'Bathware',
    tagline: 'CP fittings and sanitaryware',
    details: [
      'Bathroom fittings',
      'Sanitaryware products',
      'Options for bathroom projects',
    ],
    subTypes: [
      {
        id: 'JB-01',
        name: 'CP Fittings',
        categoryType: 'CP Fittings',
        imgUrl: '',
        applications: ['Bathroom installations'],
      },
      {
        id: 'JB-02',
        name: 'Sanitaryware',
        categoryType: 'Sanitaryware',
        imgUrl: '',
        applications: ['Bathrooms'],
      },
    ],
  },
  {
    brand: 'Kohler',
    category: 'Bathware',
    tagline: 'CP fittings and sanitaryware',
    details: [
      'Bathroom fittings and fixtures',
      'Sanitaryware options',
      'Selection based on project design',
    ],
    subTypes: [
      {
        id: 'KOH-01',
        name: 'CP Fittings',
        categoryType: 'CP Fittings',
        imgUrl: '',
        applications: ['Bathroom installations'],
      },
      {
        id: 'KOH-02',
        name: 'Sanitaryware',
        categoryType: 'Sanitaryware',
        imgUrl: '',
        applications: ['Bathrooms'],
      },
    ],
  },
  {
    brand: 'WAASOL',
    category: 'Solar Water Heaters',
    tagline: 'Solar water heaters and PV solar water heaters',
    details: [
      'Solar water heating solutions',
      'Options based on hot water demand',
      'System selection based on installation requirements',
    ],
    subTypes: [
      {
        id: 'WAA-01',
        name: 'Solar Water Heater',
        categoryType: 'Solar Water Heater',
        imgUrl: '',
        applications: ['Hot water supply'],
      },
      {
        id: 'WAA-02',
        name: 'PV Solar Water Heating System',
        categoryType: 'PV Solar System',
        imgUrl: '',
        applications: ['Solar energy applications'],
      },
    ],
  },
  {
    brand: 'LAXSO',
    category: 'Solar Water Heaters',
    tagline: 'Solar water heaters and PV solar water heaters',
    details: [
      'Solar water heating products',
      'Solutions based on hot water requirements',
      'Confirm available system types',
    ],
    subTypes: [
      {
        id: 'LAX-01',
        name: 'Solar Water Heater',
        categoryType: 'Solar Water Heater',
        imgUrl: '',
        applications: ['Hot water supply'],
      },
      {
        id: 'LAX-02',
        name: 'PV Solar Water Heating System',
        categoryType: 'PV Solar System',
        imgUrl: '',
        applications: ['Solar energy applications'],
      },
    ],
  },
  {
    brand: 'R Drain',
    category: 'Drainage Products',
    tagline: 'HDPE subsoil drainage pipe',
    details: [
      'Subsoil drainage pipe solutions',
      'Drainage products for suitable projects',
      'Confirm pipe dimensions and specifications',
    ],
    subTypes: [
      {
        id: 'RD-01',
        name: 'HDPE Subsoil Drainage Pipe',
        categoryType: 'HDPE Drainage Pipe',
        imgUrl: '',
        applications: ['Subsoil drainage'],
      },
    ],
  },
  {
    brand: 'Kisan',
    category: 'Pipes & Hoses',
    tagline: 'HDPE, PVC, hose suction and garden pipes',
    details: [
      'HDPE and PVC pipe options',
      'Hose suction pipe products',
      'Garden pipe solutions',
    ],
    subTypes: [
      {
        id: 'KIS-01',
        name: 'HDPE Pipes',
        categoryType: 'HDPE Pipe',
        imgUrl: '',
        applications: ['Water distribution'],
      },
      {
        id: 'KIS-02',
        name: 'PVC Pipes',
        categoryType: 'PVC Pipe',
        imgUrl: '',
        applications: ['Piping installations'],
      },
      {
        id: 'KIS-03',
        name: 'Hose Suction Pipes',
        categoryType: 'Hose Suction',
        imgUrl: '',
        applications: ['Water transfer'],
      },
      {
        id: 'KIS-04',
        name: 'Garden Pipes',
        categoryType: 'Garden Pipe',
        imgUrl: '',
        applications: ['Gardening', 'Watering'],
      },
    ],
  },
  {
    brand: 'Maru Ropes',
    category: 'Ropes',
    tagline: 'PP and nylon ropes, ISI and non-ISI',
    details: [
      'Polypropylene rope options',
      'Nylon rope options',
      'Confirm certification and specifications for each product',
    ],
    subTypes: [
      {
        id: 'MAR-01',
        name: 'PP Rope',
        categoryType: 'Polypropylene Rope',
        imgUrl: '',
        applications: ['General rope applications'],
      },
      {
        id: 'MAR-02',
        name: 'Nylon Rope',
        categoryType: 'Nylon Rope',
        imgUrl: '',
        applications: ['General rope applications'],
      },
    ],
  },
  {
    brand: 'Thermodrain',
    category: 'Drainage Products',
    tagline: 'Drainage products',
    details: [
      'Drainage product solutions',
      'Product selection based on installation requirements',
      'Confirm available product types and sizes',
    ],
    subTypes: [
      {
        id: 'THD-01',
        name: 'Drainage Product',
        categoryType: 'Drainage',
        imgUrl: '',
        applications: ['Drainage installations'],
      },
    ],
  },
  {
    brand: 'Vikrant',
    category: 'Chamber Covers',
    tagline: 'Chamber covers and infrastructure products',
    details: [
      'Chamber cover solutions',
      'Infrastructure access products',
      'Confirm load rating and dimensions',
    ],
    subTypes: [
      {
        id: 'VIK-01',
        name: 'Chamber Cover',
        categoryType: 'Chamber Cover',
        imgUrl: '',
        applications: ['Infrastructure projects'],
      },
    ],
  },
  {
    brand: 'Jasper',
    category: 'Chamber Covers',
    tagline: 'Chamber covers and infrastructure products',
    details: [
      'Chamber cover products',
      'Infrastructure access solutions',
      'Confirm product dimensions and load requirements',
    ],
    subTypes: [
      {
        id: 'JAS-01',
        name: 'Chamber Cover',
        categoryType: 'Chamber Cover',
        imgUrl: '',
        applications: ['Infrastructure projects'],
      },
    ],
  },
  {
    brand: 'R.P. Composites',
    category: 'Composite Products',
    tagline: 'Chamber covers and composite products',
    details: [
      'Composite product solutions',
      'Chamber cover applications',
      'Confirm material and load specifications',
    ],
    subTypes: [
      {
        id: 'RPC-01',
        name: 'Composite Chamber Cover',
        categoryType: 'Composite Chamber Cover',
        imgUrl: '',
        applications: ['Infrastructure projects'],
      },
    ],
  },
  {
    brand: 'Topaz',
    category: 'Chamber Covers',
    tagline: 'Chamber covers and infrastructure products',
    details: [
      'Chamber cover solutions',
      'Infrastructure access products',
      'Confirm dimensions and specifications',
    ],
    subTypes: [
      {
        id: 'TOP-01',
        name: 'Chamber Cover',
        categoryType: 'Chamber Cover',
        imgUrl: '',
        applications: ['Infrastructure projects'],
      },
    ],
  },
  {
    brand: 'Birla Opus Paints',
    category: 'Paints',
    tagline: 'Decorative paints',
    details: [
      'Decorative paint solutions',
      'Paint selection based on surface and finish',
      'Confirm available product range and shades',
    ],
    subTypes: [
      {
        id: 'BOP-01',
        name: 'Decorative Paint',
        categoryType: 'Paint',
        imgUrl: '',
        applications: ['Interior and exterior painting'],
      },
    ],
  },
  {
    brand: 'Birla White',
    category: 'Cement & Building Products',
    tagline: 'White cement and building products',
    details: [
      'White cement products',
      'Building and finishing applications',
      'Confirm available grades and packaging',
    ],
    subTypes: [
      {
        id: 'BW-01',
        name: 'White Cement',
        categoryType: 'White Cement',
        imgUrl: '',
        applications: ['Building and finishing work'],
      },
    ],
  },
];




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

        <div className="mb-7 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
          <div className="flex flex-col gap-4 sm:flex-row">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
              <input
                type="search"
                value={searchQuery}
                onChange={(event) => setSearchQuery(event.target.value)}
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
                className={`rounded-full border px-4 py-2 text-xs font-bold transition ${
                  activeCategory === category
                    ? 'border-red-600 bg-red-600 text-white'
                    : 'border-slate-200 bg-white text-slate-600 hover:border-red-300 hover:text-red-700'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

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

        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {filteredProducts.map((item) => (
              <article
                key={item.brand}
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:border-red-200 hover:shadow-xl"
              >
                <div className="h-1.5 bg-red-600" />

                <div className="flex flex-1 flex-col p-5 sm:p-6">
                  <div className="mb-4 flex items-start justify-between gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-50 text-red-700 group-hover:bg-red-600 group-hover:text-white">
                      <Package className="h-6 w-6" />
                    </div>
                    <span className="rounded-full bg-slate-100 px-3 py-1 text-[10px] font-bold uppercase text-slate-600">
                      {item.category}
                    </span>
                  </div>

                  <h3 className="text-xl font-extrabold text-slate-900">
                    {item.brand}
                  </h3>

                  <p className="mt-2 text-sm font-semibold text-red-600">
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

                  <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
                    <button
                      type="button"
                      onClick={() => handleExplore(item)}
                      className="inline-flex items-center justify-center gap-2 rounded-xl bg-slate-900 px-4 py-3 text-sm font-bold text-white transition hover:bg-red-600"
                    >
                      Explore Products
                      <ArrowRight className="h-4 w-4" />
                    </button>

                    <button
                      type="button"
                      onClick={() => handleInquiry(item.brand)}
                      className="inline-flex items-center justify-center gap-2 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-bold text-red-700 transition hover:bg-red-600 hover:text-white"
                    >
                      <MessageSquare className="h-4 w-4" />
                      Enquire Now
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
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
                handleInquiry(searchQuery.trim() || 'General Product Enquiry')
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
