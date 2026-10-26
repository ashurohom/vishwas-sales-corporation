import React from 'react';

export default function LegacySection() {
  return (
    <section id="legacy-section" className="py-8 sm:py-10 lg:py-12 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Card Matching Reference Design (Compact & Flush Left Red Block) */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-lg shadow-slate-200/50 overflow-hidden flex flex-col lg:flex-row items-stretch transition-all hover:shadow-xl">
          
          {/* Left Column: Solid Vibrant Red 41 Years of Legacy Block */}
          <div className="lg:w-[35%] xl:w-[32%] bg-gradient-to-br from-red-600 via-red-600 to-rose-700 p-6 sm:p-7 lg:p-8 text-center text-white flex flex-col items-center justify-center relative overflow-hidden shrink-0">
            
            {/* Subtle Lighting Accents */}
            <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-white/10 blur-xl pointer-events-none" />
            <div className="absolute -bottom-8 -left-8 w-36 h-36 rounded-full bg-black/15 blur-xl pointer-events-none" />
            
            {/* Golden Emblem Badge - Transparent PNG (No white background, increased size) */}
            <div className="relative z-10 mb-3 flex items-center justify-center">
              <img
                src="/images/legacy-41-badge.png"
                alt="41 Years of Legacy Golden Symbol Emblem"
                className="h-20 sm:h-24 lg:h-28 w-auto object-contain select-none drop-shadow-md"
                loading="lazy"
              />
            </div>

            {/* Bold 41 Number */}
            <div className="relative z-10 text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-none">
              41
            </div>

            {/* Years of Legacy */}
            <div className="relative z-10 text-xs sm:text-sm font-extrabold text-white tracking-widest uppercase mt-2">
              YEARS OF LEGACY
            </div>

            {/* Thin Divider Line */}
            <div className="relative z-10 w-10 h-0.5 bg-white/60 mx-auto my-2.5 rounded-full" />

            {/* Subtitle: Trusted Industrial Solutions */}
            <div className="relative z-10 text-[11px] sm:text-xs font-medium text-red-50 tracking-wide">
              Trusted Industrial Solutions
            </div>

          </div>

          {/* Right Column: Company Description Copy (No Buttons, Compact Height) */}
          <div className="lg:w-[65%] xl:w-[68%] p-6 sm:p-8 lg:p-9 xl:p-10 flex flex-col justify-center bg-white">
            
            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-red-600 mb-3.5 leading-tight">
              Vishwas Sales Corporation
            </h2>

            {/* 3 Text Paragraphs */}
            <div className="space-y-3 text-slate-600 text-xs sm:text-sm md:text-base leading-relaxed font-normal">
              <p>
                <strong className="text-slate-900 font-semibold">Vishwas Sales Corporation</strong> is a trusted name for industrial products and engineering solutions, serving customers with quality products, dependable service and practical technical support. With a legacy of over 41 years, we focus on building long-term relationships with industries, businesses and customers across a wide range of applications.
              </p>

              <p>
                Our product range includes industrial electrical and engineering products from leading brands. Vishwas Sales Corporation aims to make it easier for customers to find reliable products, competitive solutions and professional support for their industrial requirements.
              </p>

              <p>
                Whether you are looking for industrial products, electrical components, engineering supplies or technical assistance, Vishwas Sales Corporation is committed to providing responsive service and solutions suited to your requirements.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
