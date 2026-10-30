import React from 'react';
import {
  Droplets,
  Wrench,
  ShieldCheck,
  ArrowUpRight,
  Award,
  Users,
  Package,
  Tags,
} from 'lucide-react';


export default function AuthorizedBrandsSection() {
  const capabilities = [
    {
      number: '01',
      icon: Droplets,
      title: 'Authorized Brand Distribution',
      description:
        'Direct authorized partner for C.R.I. Pumps, Raksha Pipes, Ashirvad and Leader Valves.',
    },
    {
      number: '02',
      icon: Wrench,
      title: 'In-House Pump Repair Workshop',
      description:
        'Expert repair and maintenance for submersible pumps, monoblock pumps, motors, starters and control panels.',
    },
    {
      number: '03',
      icon: ShieldCheck,
      title: 'Reliable Water Support',
      description:
        'Standby backup pumps and de-watering rentals for housing societies, hospitals and commercial properties.',
    },
  ];

  const metrics = [
    { value: '41+', label: 'Years Experience', icon: Award },
    { value: '500+', label: 'Happy Customers', icon: Users },
    { value: '1000+', label: 'Products', icon: Package },
    { value: '50+', label: 'Associated Brands', icon: Tags },
  ];

  return (
    <section className="relative overflow-hidden bg-white py-14 sm:py-16 lg:py-20 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Intro */}
        <div className="max-w-2xl mx-auto text-center mb-9 sm:mb-12">
          <span className="inline-flex items-center gap-2 rounded-full border border-red-100 bg-red-50 px-4 py-2 text-[11px] sm:text-xs font-bold uppercase tracking-[0.16em] text-red-700">
            <span className="w-1.5 h-1.5 rounded-full bg-red-600" />
            What Sets Us Apart
          </span>

          <h2 className="mt-4 text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-slate-900">
            More Than Products.
            <span className="block text-red-600 mt-1">
              Complete Water Solutions.
            </span>
          </h2>

          <p className="mt-3 text-sm sm:text-base leading-relaxed text-slate-500">
            From authorized product distribution to expert pump servicing,
            we deliver dependable solutions backed by decades of experience.
          </p>
        </div>

        {/* Capability Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6">
          {capabilities.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.number}
                className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 sm:p-7 transition-all duration-300 hover:-translate-y-1 hover:border-red-200 hover:shadow-xl hover:shadow-red-900/5"
              >
                {/* Decorative number */}
                <span className="absolute right-5 top-4 text-5xl font-black text-slate-100 transition-colors duration-300 group-hover:text-red-50">
                  {item.number}
                </span>

                <div className="relative z-10">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-red-100 bg-red-50 text-red-600 transition-all duration-300 group-hover:bg-red-600 group-hover:text-white group-hover:scale-105">
                    <Icon size={25} strokeWidth={1.8} />
                  </div>

                  <h3 className="mt-6 text-lg font-extrabold text-slate-900 transition-colors group-hover:text-red-600">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-500">
                    {item.description}
                  </p>

                  <div className="mt-6 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-red-600">
                    <span>Our Expertise</span>
                    <ArrowUpRight
                      size={15}
                      className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                    />
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 h-1 w-0 bg-red-600 transition-all duration-300 group-hover:w-full" />
              </div>
            );
          })}
        </div>

        {/* Metrics */}
        <div className="mt-10 sm:mt-14 overflow-hidden rounded-3xl border border-slate-200 bg-slate-50">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-slate-200">
            {metrics.map((metric, index) => {
              const Icon = metric.icon;

              return (
                <div
                  key={metric.label}
                  className="group relative flex flex-col items-center justify-center px-3 py-7 sm:py-9 text-center transition-colors duration-300 hover:bg-white"
                >
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-white border border-slate-200 text-red-600 transition-all duration-300 group-hover:border-red-100 group-hover:bg-red-50">
                    <Icon size={19} strokeWidth={1.8} />
                  </div>

                  <div className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-slate-900">
                    {metric.value}
                  </div>

                  <p className="mt-1.5 text-[11px] sm:text-sm font-semibold text-slate-500">
                    {metric.label}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
