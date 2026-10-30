import React from 'react';
import AboutSection from '../components/AboutSection';
import {
  Award,
  ShieldCheck,
  Users,
  Clock,
  CheckCircle2,
  ArrowRight,
  ArrowUpRight,
  Building2,
  Handshake,
  Sparkles,
  Home,
} from 'lucide-react';
import { companyInfo } from '../data/companyData';
import { Link } from 'react-router-dom';

export default function AboutPage({ onOpenInquiry }) {
  return (
    <main className="min-h-screen bg-slate-50">

      {/* ================= PAGE HERO ================= */}
      <section className="relative isolate overflow-hidden bg-slate-950 text-white">

        {/* Background Effects */}
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,rgba(189,16,45,0.22),transparent_50%)]" />

        <div className="absolute -right-24 -top-24 -z-10 h-72 w-72 rounded-full border border-white/5 sm:h-96 sm:w-96" />
        <div className="absolute -right-12 -top-12 -z-10 h-56 w-56 rounded-full border border-white/5 sm:h-72 sm:w-72" />

        <div className="mx-auto max-w-7xl px-4 py-7 sm:px-6 sm:py-9 lg:px-8 lg:py-11">

          {/* Breadcrumb */}
          <nav
            aria-label="Breadcrumb"
            className="mb-6 flex items-center justify-center gap-2 text-xs font-medium text-slate-400 sm:justify-start sm:text-sm"
          >
            <Link
              to="/"
              className="inline-flex items-center gap-1.5 transition hover:text-white"
            >
              <Home className="h-3.5 w-3.5" />
              Home
            </Link>

            <ArrowRight className="h-3.5 w-3.5" />

            <span className="font-bold text-red-400">
              About Us
            </span>
          </nav>

          <div className="grid items-center gap-7 lg:grid-cols-[1.3fr_0.7fr]">

            {/* Hero Content */}
            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-red-400/20 bg-red-500/10 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.18em] text-red-300 sm:text-xs">
                <Sparkles size={14} />
                Trusted Since 1985
              </div>

              <h1 className="max-w-3xl text-3xl font-black leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                Building Trust.
                <br />
                <span className="text-red-400">
                  Delivering Quality.
                </span>
              </h1>

              <p className="mt-4 max-w-2xl text-sm leading-6 text-slate-300 sm:text-base sm:leading-7">
                Get to know Vishwas Sales Corporation, a trusted name in
                plumbing, piping, pumping, and water management solutions.
                With a legacy dating back to 1985, we help residential,
                commercial, and industrial customers find dependable
                products for their projects.
              </p>

              {/* Hero Buttons */}
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <a
                  href="#our-story"
                  className="inline-flex items-center gap-2 rounded-xl bg-red-600 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-red-950/30 transition-all hover:-translate-y-0.5 hover:bg-red-700"
                >
                  Discover Our Story
                  <ArrowRight size={17} />
                </a>

                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition-all hover:border-white/30 hover:bg-white/10"
                >
                  Contact Our Team
                  <ArrowUpRight size={17} />
                </Link>
              </div>

              {/* Trust Indicators */}
              <div className="mt-7 flex flex-wrap gap-x-5 gap-y-3 border-t border-white/10 pt-4">
                <div className="flex items-center gap-2 text-xs text-slate-300">
                  <ShieldCheck size={15} className="text-red-400" />
                  Trusted Products
                </div>

                <div className="flex items-center gap-2 text-xs text-slate-300">
                  <Handshake size={15} className="text-red-400" />
                  Customer Relationships
                </div>

                <div className="flex items-center gap-2 text-xs text-slate-300">
                  <Building2 size={15} className="text-red-400" />
                  Project Solutions
                </div>
              </div>
            </div>

            {/* Hero Information Panel */}
            <div className="hidden lg:block">
              <div className="relative rounded-2xl border border-white/10 bg-white/[0.04] p-5 shadow-xl backdrop-blur-sm xl:p-6">

                <div className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-xl bg-red-500/10 text-red-400">
                  <Award size={21} />
                </div>

                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-400">
                  Vishwas Sales Corporation
                </p>

                <h2 className="mt-10 text-xl font-extrabold leading-snug text-white xl:text-2xl">
                  Four decades of experience. One commitment to quality.
                </h2>

                <p className="mt-2 text-sm leading-6 text-slate-400">
                  Helping customers source reliable plumbing, pumping,
                  and water infrastructure products.
                </p>

                <div className="mt-5 grid grid-cols-2 gap-3">

                  <div className="rounded-xl border border-white/5 bg-white/[0.03] p-3">
                    <Clock className="mb-2 text-red-400" size={19} />
                    <p className="text-2xl font-black text-white">40+</p>
                    <p className="mt-1 text-xs text-slate-400">
                      Years of Experience
                    </p>
                  </div>

                  <div className="rounded-xl border border-white/5 bg-white/[0.03] p-3">
                    <Users className="mb-2 text-red-400" size={19} />
                    <p className="text-2xl font-black text-white">
                      Trusted
                    </p>
                    <p className="mt-1 text-xs text-slate-400">
                      Customer Relationships
                    </p>
                  </div>

                </div>

                <div className="mt-4 rounded-xl bg-red-600 p-3.5">
                  <p className="text-sm font-bold text-white">
                    Planning your next project?
                  </p>

                  <p className="mt-1 text-xs leading-5 text-red-100">
                    Talk to our team about product availability and
                    suitable solutions for your requirements.
                  </p>

                  <button
                    type="button"
                    onClick={() =>
                      onOpenInquiry?.('General Enquiry')
                    }
                    className="mt-3 inline-flex items-center gap-2 text-xs font-bold text-white transition-opacity hover:opacity-80"
                  >
                    Enquire Now
                    <ArrowRight size={14} />
                  </button>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= OUR STORY ================= */}
      <section id="our-story" className="scroll-mt-20">
        <AboutSection onOpenInquiry={onOpenInquiry} />
      </section>

      {/* ================= MEMBERSHIPS & ACCREDITATIONS ================= */}
      <section className="border-t border-slate-200 bg-white py-10 sm:py-14 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          {/* Section Heading */}
          <div className="mb-7 flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
            <div>
              <div className="mb-2 inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.16em] text-red-600 sm:text-xs">
                <span className="h-1.5 w-5 rounded-full bg-red-600" />
                Our Associations
              </div>

              <h2 className="text-2xl font-black tracking-tight text-slate-900 sm:text-3xl">
                Memberships <span className="text-red-600">&amp; Accreditations</span>
              </h2>

              <p className="mt-2 max-w-2xl text-xs leading-6 text-slate-500 sm:text-sm">
                Our industry associations reflect our engagement with
                professional networks and the wider business community.
              </p>
            </div>

            <span className="w-fit rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-[10px] font-semibold text-slate-600 sm:text-xs">
              Professional Associations
            </span>
          </div>

          {/* Membership Cards */}








          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {companyInfo.memberships.map((membership, index) => (
              <article
                key={membership.name || index}
                className="group relative flex h-[220px] flex-col justify-end overflow-hidden rounded-xl border border-slate-200 bg-cover bg-center bg-no-repeat shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                style={{
                  backgroundImage: `url("/${membership.url}")`,
                }}
              >
                {/* Bottom overlay for readable text */}
                <div className="absolute inset-0 bg-gradient-to-t from-white via-white/30 to-transparent" />

                {/* Membership Details */}
                <div className="relative z-10 p-4">
                  <h3 className="text-sm font-extrabold leading-5 text-slate-900">
                    {membership.name}
                  </h3>

                  <p className="mt-1 text-[10px] font-bold uppercase tracking-wider text-red-600">
                    {membership.label}
                  </p>
                </div>
              </article>
            ))}
          </div>









          {/* Bottom CTA */}
          <div className="mt-7 flex flex-col gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-5 sm:flex-row sm:items-center sm:justify-between sm:p-7">
            <div>
              <h3 className="text-lg font-extrabold text-slate-900">
                Let's build a reliable solution together.
              </h3>

              <p className="mt-1 text-xs leading-6 text-slate-500 sm:text-sm">
                Connect with our team for product information,
                project requirements, and business enquiries.
              </p>
            </div>

            <Link
              to="/contact"
              className="inline-flex w-fit shrink-0 items-center gap-2 rounded-xl bg-red-600 px-5 py-3 text-xs font-bold text-white shadow-lg shadow-red-950/10 transition-all hover:-translate-y-0.5 hover:bg-red-700 sm:text-sm"
            >
              Get in Touch
              <ArrowRight size={16} />
            </Link>
          </div>

        </div>
      </section>

    </main>
  );
}