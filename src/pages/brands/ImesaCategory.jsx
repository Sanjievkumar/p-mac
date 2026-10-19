import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ChevronRight, Mail } from 'lucide-react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { OFFICIAL_CATEGORIES, CATEGORY_MAP } from './imesaCategoryData';

export default function ImesaCategory({ categoryId }) {
  const { categorySlug } = useParams();

  // Determine active category from prop, slug param, or fallback to washing-machines
  const rawSlug = (categoryId || categorySlug || 'washing-machines').toLowerCase();
  
  // Normalize aliases
  let resolvedId = 'washing-machines';
  if (rawSlug.includes('wash')) resolvedId = 'washing-machines';
  else if (rawSlug.includes('dryer') || rawSlug === 'dryers') resolvedId = 'dryers';
  else if (rawSlug.includes('flatwork')) resolvedId = 'flatwork-ironers';
  else if (rawSlug.includes('drying-iron') || rawSlug.includes('mca') || rawSlug.includes('mcm')) resolvedId = 'drying-ironers';
  else if (CATEGORY_MAP[rawSlug]) resolvedId = rawSlug;

  const currentCategory = CATEGORY_MAP[resolvedId] || OFFICIAL_CATEGORIES[0];
  const otherCategories = OFFICIAL_CATEGORIES.filter(c => c.id !== currentCategory.id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [resolvedId]);

  return (
    <div className="min-h-screen bg-white font-inter text-slate-800 flex flex-col">
      <Navbar />

      {/* ── 1. Official Breadcrumbs Bar with Standard Back Button ── */}
      <nav aria-label="Breadcrumb" className="w-full bg-[#f8f9fa] border-b border-slate-200/80 pt-20 sm:pt-24 pb-3 sm:pb-4 px-4 sm:px-8 lg:px-12 xl:px-16 text-xs sm:text-sm text-slate-500 font-medium">
        <div className="max-w-[1536px] mx-auto flex items-center justify-between flex-wrap gap-3 sm:gap-4">
          <div className="flex items-center flex-wrap gap-1.5 sm:gap-2">
            <Link to="/" className="hover:text-[#0d447b] transition-colors">Home</Link>
            <span className="text-slate-300">/</span>
            <Link to="/brands" className="hover:text-[#0d447b] transition-colors">Brands</Link>
            <span className="text-slate-300">/</span>
            <Link to="/brands/imesa" className="hover:text-[#0d447b] transition-colors">IMESA</Link>
            <span className="text-slate-300">/</span>
            <span className="text-[#0d447b] font-bold">{currentCategory.name}</span>
          </div>

          {/* Standard Promac Back Button */}
          <Link 
            to="/brands/imesa" 
            className="inline-flex items-center gap-2 text-slate-500 hover:text-[#0d447b] transition-colors font-medium text-xs sm:text-sm group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>Back to IMESA Overview</span>
          </Link>
        </div>
      </nav>

      {/* ── 2. Category Switcher Bar ── */}
      <div className="w-full bg-white border-b border-slate-200 py-3 sm:py-3.5 px-4 sm:px-8 lg:px-12 xl:px-16 sticky top-16 z-30 shadow-sm backdrop-blur-md bg-white/95">
        <div className="max-w-[1536px] mx-auto flex items-center justify-between flex-wrap gap-3">
          <span className="text-xs sm:text-sm font-bold text-[#0d447b] uppercase tracking-wider hidden lg:inline-block">
            IMESA Categories:
          </span>
          
          <div className="flex items-center gap-2 sm:gap-3 w-full lg:w-auto overflow-x-auto pb-1 lg:pb-0 scrollbar-none">
            {OFFICIAL_CATEGORIES.map(cat => {
              const isActive = cat.id === currentCategory.id;
              return (
                <Link
                  key={cat.id}
                  to={`/brands/imesa/${cat.id}`}
                  className={`px-4 sm:px-5 py-2 text-xs sm:text-sm font-bold transition-all duration-150 flex items-center gap-2 shrink-0 border ${
                    isActive
                      ? 'bg-[#0d447b] text-white border-[#0d447b]'
                      : 'bg-white text-[#0d447b] border-slate-200 hover:border-[#0d447b]'
                  }`}
                >
                  {cat.badgeIcon && (
                    <img src={cat.badgeIcon} alt="" className="w-4 h-4 object-contain" />
                  )}
                  {cat.name}
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      {/* ── 3. Official IMESA Category Hero (Exact 1:1 clone of official site img1) ── */}
      <section className="w-full bg-white">
        <div className="max-w-[1536px] mx-auto grid grid-cols-1 lg:grid-cols-12 items-stretch">
          
          {/* Left Column: Icon mark, H1, Thin line, Official Paragraphs */}
          <div className="lg:col-span-6 xl:col-span-6 flex flex-col justify-center px-6 sm:px-10 lg:pl-12 xl:pl-20 lg:pr-10 py-12 sm:py-16 lg:py-20">
            
            {/* Official Icon mark with built-in capacity */}
            {currentCategory.badgeIcon && (
              <img 
                src={currentCategory.badgeIcon} 
                alt={currentCategory.name} 
                className="w-16 h-16 sm:w-20 sm:h-20 object-contain mb-6 sm:mb-8" 
              />
            )}

            {/* Official Category H1 Title - matching official site proportions */}
            <h1 
              className="text-2xl sm:text-3xl lg:text-[34px] xl:text-[38px] font-bold text-[#0d447b] tracking-tight uppercase leading-[1.25] mb-4 sm:mb-5"
              dangerouslySetInnerHTML={{ __html: currentCategory.h1Formatted || currentCategory.h1 }}
            />

            {/* Official IMESA Underline Accent */}
            <div className="w-16 h-[3px] bg-[#9BB7D0] mb-6 sm:mb-8" />

            {/* Category Intro Paragraphs in #0d447b - exact official IMESA specs: 17px, 29px leading, 0.34px tracking */}
            <div className="space-y-4 text-[#0d447b] text-[15px] sm:text-[16px] lg:text-[17px] leading-[27px] sm:leading-[29px] tracking-[0.34px] font-normal font-inter">
              {currentCategory.introParas.map((para, idx) => (
                <p key={idx} dangerouslySetInnerHTML={{ __html: para }} />
              ))}
            </div>

          </div>

          {/* Right Column: Full-bleed Category Hero Photography (Operator with machine drum) */}
          <div className="lg:col-span-6 xl:col-span-6 flex items-stretch">
            <div className="w-full h-full min-h-[360px] sm:min-h-[460px] lg:min-h-[520px]">
              <img 
                src={currentCategory.heroImg} 
                alt={currentCategory.h1} 
                className="w-full h-full object-cover object-center" 
              />
            </div>
          </div>

        </div>

        {/* Official Site Horizontal Bottom Grey Strip */}
        <div className="w-full h-8 sm:h-10 bg-[#EDF1F5]" />
      </section>

      {/* ── 4. Official IMESA Machine Series Section (Exact 1:1 clone of official site img2) ── */}
      <section className="w-full bg-[#FFFFFF] py-16 sm:py-20 lg:py-24">
        <div className="max-w-[1536px] mx-auto px-6 sm:px-10 lg:px-16">
          
          <div className="space-y-20 sm:space-y-28">
            {currentCategory.showcases.map((showcase, index) => {
              const isReversed = index % 2 === 1;
              return (
                <div 
                  key={showcase.id}
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center ${
                    index > 0 ? 'pt-20 sm:pt-28 border-t border-slate-200/80' : ''
                  }`}
                >
                  
                  {/* Machine Front-Facing Photography floating on clean background */}
                  <div className={`lg:col-span-6 min-w-0 flex items-center justify-center order-1 ${
                    isReversed ? 'lg:order-2 lg:pl-6 xl:pl-10' : 'lg:order-1 lg:pr-6 xl:pr-10'
                  }`}>
                    <Link 
                      to={`/brands/imesa/${showcase.primaryTarget}`}
                      className="group block w-full max-w-full text-center"
                      title="Click to view full specifications"
                    >
                      <img 
                        src={showcase.machineImg} 
                        alt={showcase.title}
                        className="max-w-full w-auto max-h-[360px] sm:max-h-[420px] lg:max-h-[480px] xl:max-h-[520px] mx-auto object-contain transition-transform duration-300 group-hover:scale-[1.02]" 
                      />
                    </Link>
                  </div>

                  {/* Title, Subtitle, Text, Boxed Capacity Buttons */}
                  <div className={`lg:col-span-6 min-w-0 flex flex-col justify-center order-2 ${
                    isReversed ? 'lg:order-1 lg:pr-6 xl:pr-10' : 'lg:order-2 lg:pl-6 xl:pl-10'
                  }`}>
                    
                    {/* Machine Showcase Title (exact official IMESA specs: 25px, 38px, 1.25px tracking) */}
                    <h2 className="text-[20px] sm:text-[22px] lg:text-[25px] font-bold text-[#0d447b] leading-[32px] sm:leading-[38px] tracking-[1.25px] uppercase mb-2 font-inter">
                      {showcase.title}
                    </h2>

                    {/* Machine Series Subtitle (exact official IMESA specs: 14px, 21px, 0.7px tracking) */}
                    <h3 className="text-[13px] sm:text-[14px] leading-[21px] tracking-[0.7px] font-semibold text-[#0d447b] uppercase mb-5 sm:mb-6 font-inter">
                      {showcase.subtitle}
                    </h3>

                    {/* Description Paragraphs - exact official IMESA specs: 17px, 29px leading, 0.34px tracking */}
                    <div className="space-y-3.5 text-[#0d447b] text-[15px] sm:text-[16px] lg:text-[17px] leading-[27px] sm:leading-[29px] tracking-[0.34px] mb-7 sm:mb-8 max-w-2xl font-normal font-inter">
                      {showcase.paras.map((para, idx) => (
                        <p key={idx} dangerouslySetInnerHTML={{ __html: para }} />
                      ))}
                    </div>

                    {/* Official Capacity Series Rectangular Buttons */}
                    <div className="flex flex-wrap gap-2.5 sm:gap-3.5 pt-1">
                      {showcase.seriesButtons.map((btn) => (
                        <Link
                          key={btn.id}
                          to={`/brands/imesa/${btn.id}`}
                          className="border border-[#0d447b] text-[#0d447b] bg-white hover:bg-[#0d447b] hover:text-white transition-colors duration-150 px-5 sm:px-6 py-2.5 sm:py-3 text-[13px] sm:text-[14px] leading-[21px] tracking-[0.34px] font-semibold font-inter inline-block text-center shadow-none cursor-pointer"
                        >
                          {btn.label}
                        </Link>
                      ))}
                    </div>

                  </div>

                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ── 5. Cross-Category Exploration Cards ── */}
      <section className="w-full bg-[#f8f9fa] border-t border-slate-200/80 py-16 sm:py-20 lg:py-24">
        <div className="max-w-[1536px] mx-auto px-6 sm:px-10 lg:px-16">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10">
            <div>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0d447b] uppercase tracking-tight">
                Explore Other IMESA Categories
              </h3>
              <p className="text-slate-600 text-sm sm:text-base md:text-lg mt-1">
                Browse complementary laundry systems manufactured by IMESA in Italy.
              </p>
            </div>

            <Link 
              to="/brands/imesa" 
              className="inline-flex items-center gap-2 text-sm sm:text-base font-bold text-[#0d447b] hover:text-[#083256] uppercase tracking-wider transition-colors shrink-0"
            >
              All IMESA Products <ChevronRight className="w-5 h-5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {otherCategories.map((cat) => (
              <Link
                key={cat.id}
                to={`/brands/imesa/${cat.id}`}
                className="group bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 hover:border-[#0d447b] hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-bold text-[#0d447b] bg-[#f0f4f8] px-3 py-1.5 rounded-full uppercase tracking-wider">
                      {cat.capacityBadge}
                    </span>
                    {cat.badgeIcon && (
                      <img src={cat.badgeIcon} alt="" className="w-5 h-5 object-contain opacity-80" />
                    )}
                  </div>

                  <div className="h-40 sm:h-44 flex items-center justify-center p-3 mb-5 bg-slate-50/60 rounded-xl overflow-hidden">
                    <img 
                      src={cat.cardImg} 
                      alt={cat.name} 
                      className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  <h4 className="font-bold text-[#0d447b] text-lg sm:text-xl uppercase mb-2 transition-colors">
                    {cat.name}
                  </h4>
                  <p className="text-slate-600 text-sm sm:text-[15px] leading-relaxed">
                    {cat.cardDesc}
                  </p>
                </div>

                <div className="flex items-center gap-2 text-sm font-bold text-[#0d447b] mt-5 pt-4 border-t border-slate-100 group-hover:translate-x-1.5 transition-transform">
                  View Category <ChevronRight className="w-4 h-4" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. Technical Consultation Banner ── */}
      <section className="w-full bg-[#0d447b] py-16 sm:py-20 lg:py-24 text-white">
        <div className="max-w-[1536px] mx-auto px-6 sm:px-10 lg:px-16 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          <div className="max-w-3xl">
            <span className="text-cyan-200 text-xs sm:text-sm font-extrabold tracking-widest uppercase mb-2.5 block">
              Engineering & Project Consultation
            </span>
            <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black tracking-tight mb-3">
              Need Guidance Selecting the Right IMESA Capacity?
            </h3>
            <p className="text-white/90 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed">
              Our laundry engineers help calculate hourly linen throughput, utility consumption, and floorplan configuration for hospital, hotel, and industrial installations.
            </p>
          </div>

          <Link
            to="/contact"
            className="px-8 sm:px-10 py-4 sm:py-4.5 rounded-none bg-white text-[#0d447b] hover:bg-slate-100 font-bold text-sm sm:text-base tracking-wider uppercase transition-colors shrink-0 inline-flex items-center gap-2.5 shadow-lg"
          >
            <Mail className="w-5 h-5" /> Request Technical Quotation
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
