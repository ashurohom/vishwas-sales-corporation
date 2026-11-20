import React from 'react';
import Logo from './Logo';
import {
  Award,
  Smile,
  Layers,
  ShieldCheck,
  Users2,
  CircleDollarSign,
  ArrowRight,
  CheckCircle,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import MissionVision from './MissionVision';
import { companyInfo } from '../data/companyData';

export default function AboutSection({ onOpenInquiry }) {
  const pillarIcons = [
    <Award className="w-6 h-6 text-red-600" />,
    <Smile className="w-6 h-6 text-red-600" />,
    <Layers className="w-6 h-6 text-red-600" />,
    <ShieldCheck className="w-6 h-6 text-red-600" />,
    <Users2 className="w-6 h-6 text-red-600" />,
    <CircleDollarSign className="w-6 h-6 text-red-600" />,
  ];

  return (
    <section
      id="about"
      className="py-20 bg-slate-50 border-b border-slate-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* =========================================================
            ABOUT MAIN PRESENTATION
        ========================================================= */}

        <div className="mb-16">

          {/* CENTERED HEADING */}
          <div className="text-center mb-10">
            <div className="inline-flex items-center justify-center gap-2 px-3 py-1 rounded-full bg-red-100 uppercase text-red-700 text-xs font-bold tracking-wider mb-4">
              <span>Since 1985 • Over 40 Years of Trust</span>
            </div>


            <div className="flex items-center justify-center gap-3 sm:gap-6 mb-8 sm:mb-10">
              <span className="h-0.5 w-10 sm:w-20 md:w-28 bg-red-600 rounded-full shrink-0 shadow-xs" />

              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight text-center">
                Welcome to{' '}
                <span className="text-red-600">Vishwas Sales Corporation</span>
              </h2>

              <span className="h-0.5 w-10 sm:w-20 md:w-28 bg-red-600 rounded-full shrink-0 shadow-xs" />
            </div>

          </div>

          {/* LEFT CONTENT + RIGHT VISUAL */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">

            {/* LEFT CONTENT */}
            <div className="lg:col-span-6 flex flex-col justify-between text-left">

              <div>
                <div className="text-base text-slate-600 leading-7 text-justify">
                  <p>
                    With a legacy spanning <strong>4 decades</strong>,{' '}
                    <span className="font-bold text-slate-900">
                      VISHWAS SALES CORPORATION
                    </span>{' '}
                    has been a leading name in the water industry, catering to both
                    corporate and residential water needs. Our commitment to
                    delivering superior, trustworthy dealings, prompt delivery
                    schedules, and competitive pricing sets us apart as the
                    preferred choice for discerning clients across Maharashtra.
                    Headquartered at <strong>Hadapsar, Pune</strong>, we operate
                    an active network of over <strong>800+ dealers</strong>,
                    partnered with leading infrastructure builders, hospitals,
                    and thousands of co-operative housing societies.
                  </p>
                </div>


                {/* Credential bullets */}
                <div className="mt-6 grid grid-cols-2 gap-3 text-xs font-semibold text-slate-800">

                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-red-600 shrink-0" />
                    <span>40+ Years Industry Legacy</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-red-600 shrink-0" />
                    <span>800+ Pune & MH Dealers</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-red-600 shrink-0" />
                    <span>CREDAI Pune Metro Member</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-red-600 shrink-0" />
                    <span>Dedicated In-House Workshop</span>
                  </div>

                </div>
              </div>

              <div className="mt-8 flex justify-center sm:justify-start">
                <button
                  onClick={() =>
                    onOpenInquiry && onOpenInquiry('Partner With Us')
                  }
                  className="
      inline-flex
      items-center
      gap-2
      px-6
      py-3
      rounded-xl
      bg-slate-900
      hover:bg-slate-800
      text-white
      font-bold
      text-xs
      uppercase
      tracking-wider
      shadow-md
      transition-all
    "
                >
                  <span>Partner With Vishwas Sales</span>
                  <ArrowRight className="w-4 h-4 text-red-400" />
                </button>
              </div>

            </div>


            {/* RIGHT VISUAL SHOWCASE */}
            <div className="lg:col-span-6 flex">

              <div className="relative w-full h-full rounded-3xl bg-white p-8 border border-slate-200/90 shadow-xl">

                <div className="flex flex-col items-center justify-center gap-3 sm:flex-row sm:justify-between pb-6 border-b border-slate-100">
                  <Logo size="normal" />

                  <span className="text-sm font-bold px-3 py-1 bg-red-50 text-red-700 rounded-full border border-red-200 text-center">
                    Reliability Assured Since 1985
                  </span>
                </div>

                {/* In-House Workshop & Technical Excellence Banner */}
                <div className="mt-6 p-5 rounded-2xl bg-slate-900 text-white space-y-3">

                  <div className="flex items-center justify-between">

                    <span className="text-sm font-bold uppercase tracking-wider text-red-400">
                      Workshop & Technical Force
                    </span>


                  </div>

                  <h4 className="text-xl sm:text-2xl font-extrabold text-white text-center sm:text-left">
                    Skilled & Dedicated Technical Team
                  </h4>

                  <p className="text-sm sm:text-base text-slate-300 leading-7 text-justify">
                    Our dedicated repair division features certified pump mechanics,
                    electrical rewinders, and diagnostic equipment. Whether for routine
                    society maintenance or emergency de-watering, we deploy skilled
                    personnel immediately.
                  </p>

                  <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-3 text-sm text-slate-400">
                    <span>✓ Submersible Repairs</span>
                    <span>✓ Standby Pumps</span>
                    <span>✓ Emergency Dispatch</span>
                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>



        {/* =========================================================
            INSTITUTIONAL MEMBERSHIPS
        ========================================================= */}
        <section className="py-16 border-b border-slate-200">

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            <div className="text-center max-w-2xl mx-auto mb-10">

              <div className="flex items-center justify-center gap-3 sm:gap-6 mb-8 sm:mb-10">
                <span className="h-0.5 w-10 sm:w-20 md:w-28 bg-red-600 rounded-full shrink-0 shadow-xs" />

                <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight text-center sm:whitespace-nowrap">
                  Institutional Memberships{" "}
                  <span className="text-red-600">& Accreditations</span>
                </h2>

                <span className="h-0.5 w-10 sm:w-20 md:w-28 bg-red-600 rounded-full shrink-0 shadow-xs" />
              </div>

              <p className="text-sm sm:text-base text-slate-500 mt-1">
                Active participating members in Maharashtra's apex real estate
                and trade organizations.
              </p>


            </div>


            {/* Membership Cards */}
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">

              {companyInfo.memberships.map((membership, index) => (

                <article
                  key={membership.name || index}
                  className="
                    group
                    relative
                    flex
                    h-[220px]
                    flex-col
                    justify-end
                    overflow-hidden
                    rounded-xl
                    border
                    border-slate-200
                    bg-cover
                    bg-center
                    bg-no-repeat
                    shadow-sm
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:shadow-lg
                  "
                  style={{
                    backgroundImage: `url("/${membership.url}")`,
                  }}
                >

                  {/* Bottom overlay */}
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


            <div className="mt-12 text-center">

              <Link
                to="/contact"
                className="
                  inline-flex
                  items-center
                  gap-2
                  px-6
                  py-3
                  rounded-xl
                  bg-red-600
                  hover:bg-red-700
                  text-white
                  text-xs
                  font-bold
                  uppercase
                  tracking-wider
                  shadow-lg
                  shadow-red-600/30
                  transition-all
                "
              >
                <span>Get in Touch With Our Leadership</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

            </div>

          </div>

        </section>


        {/* =========================================================
            MISSION & VISION
        ========================================================= */}
        <MissionVision />


        {/* =========================================================
            SIX CORE PILLARS
        ========================================================= */}
        <div className="mt-12 pt-12 border-t border-slate-200">

          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto mb-10">


            <div className="flex items-center justify-center gap-3 sm:gap-6 mb-8 sm:mb-10">
              <span className="h-0.5 w-10 sm:w-20 md:w-28 bg-red-600 rounded-full shrink-0 shadow-xs" />

              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight text-center sm:whitespace-nowrap">
                Why Discerning{" "}
                <span className="text-red-600">
                  Clients Choose Us
                </span>
              </h2>

              <span className="h-0.5 w-10 sm:w-20 md:w-28 bg-red-600 rounded-full shrink-0 shadow-xs" />
            </div>



            <p className="text-sm sm:text-base text-slate-500 mt-2">
              The 6 foundational principles driving our 4 decades of client
              satisfaction.
            </p>

          </div>


          {/* =====================================================
              SIX PILLAR CARDS

              IMPORTANT:
              Only ONE grid wrapper is used here.
          ===================================================== */}
          <div className="grid w-full min-w-0 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

            {companyInfo.sixPillars.map((pillar, idx) => (

              <div
                key={pillar.number}
                className="
    relative
    w-full
    min-w-0
    min-h-[280px]
    group
    drop-shadow-[0_8px_18px_rgba(15,23,42,0.10)]
  "
              >

                {/* MAIN BOX */}
                <div
                  className="
      relative
      w-full
      min-w-0
      h-full
      min-h-[280px]

      bg-white

      border
      border-red-100

      overflow-hidden

      rounded-2xl

      transition-all
      duration-300

      group-hover:drop-shadow-[0_12px_24px_rgba(220,38,38,0.15)]
    "
                >

                  {/* NUMBER BADGE */}
                  <div
                    className="
        absolute
        top-0
        left-0
        z-20

        w-[62px]
        h-[56px]

        bg-red-600
        text-white

        flex
        items-center
        justify-center

        text-2xl
        font-black

        rounded-br-2xl

        [clip-path:polygon(0_0,100%_0,82%_100%,0_100%)]

        shadow-md
        shadow-red-600/20
      "
                  >
                    {pillar.number}
                  </div>

                  {/* CARD CONTENT */}
                  <div
                    className="
        relative
        z-10
        h-full
        px-8
        pt-12
        pb-7
        pr-14
      "
                  >

                    {/* ICON + TITLE */}
                    <div className="flex items-center gap-5 mb-4">

                      {/* Icon Circle */}
                      <div
                        className="
            shrink-0
            w-[96px]
            h-[96px]
            rounded-full
            bg-red-50
            flex
            items-center
            justify-center
            text-red-600

            group-hover:bg-red-100
            group-hover:scale-105

            transition-all
            duration-300
          "
                      >
                        <div className="scale-125">
                          {pillarIcons[idx]}
                        </div>
                      </div>

                      {/* Title */}
                      <div className="flex-1 min-w-0">

                        <h4
                          className="
              text-lg
              sm:text-xl
              font-bold
              leading-tight
              text-slate-900
              group-hover:text-red-600
              transition-colors
              duration-300
            "
                        >
                          {pillar.title}
                        </h4>

                        {/* Red underline */}
                        <div
                          className="
              mt-5
              h-[3px]
              w-12
              rounded-full
              bg-red-600
            "
                        />

                      </div>

                    </div>

                    {/* DESCRIPTION */}

                    <p
                      className="
    text-sm
    sm:text-[15px]
    text-slate-700
    leading-relaxed
    mt-5
    max-w-[390px]
    text-justify
  "
                    >
                      {pillar.desc}
                    </p>

                  </div>

                  {/* SUBTLE RIGHT EDGE */}
                  <div
                    className="
        absolute
        top-0
        right-0
        w-[48px]
        h-full
        pointer-events-none
        bg-gradient-to-l
        from-red-50
        via-white
        to-transparent
        opacity-80
      "
                  />

                </div>

              </div>

            ))}

          </div>

        </div>

      </div>
    </section>
  );
}