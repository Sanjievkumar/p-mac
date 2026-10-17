import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ChevronRight, CheckCircle2, ShieldCheck, Mail, ArrowRight } from 'lucide-react';
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
    <div className="min-h-screen bg-[#FDFDFD] font-sans text-slate-800 flex flex-col">
      <Navbar />

      {/* ── 1. Official Breadcrumbs Bar ── */}
      <nav aria-label="Breadcrumb" className="w-full bg-[#f8f9fa] border-b border-slate-200/80 pt-20 sm:pt-24 pb-3 sm:pb-4 px-4 sm:px-6 lg:px-16 text-xs text-slate-500 font-medium">
        <div className="max-w-7xl mx-auto flex items-center justify-between flex-wrap gap-2.5 sm:gap-4">
          <div className="flex items-center flex-wrap gap-1.5 sm:gap-2">
            <Link to="/" className="hover:text-[#0C4779] transition-colors">Home</Link>
            <span className="text-slate-300">/</span>
            <Link to="/brands" className="hover:text-[#0C4779] transition-colors">Brands</Link>
            <span className="text-slate-300">/</span>
            <Link to="/brands/imesa" className="hover:text-[#0C4779] transition-colors">IMESA</Link>
            <span className="text-slate-300">/</span>
            <span className="text-[#0C4779] font-bold">{currentCategory.name}</span>
          </div>

          <Link 
            to="/brands/imesa" 
            className="inline-flex items-center gap-1.5 text-slate-500 hover:text-[#0C4779] font-semibold transition-colors text-[11px] sm:text-xs"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> Back to IMESA Overview
          </Link>
        </div>
      </nav>

      {/* ── 2. Category Navigation Switcher Bar (Mobile Horizontal Swipe Friendly) ── */}
      <div className="w-full bg-white border-b border-slate-200 py-2.5 sm:py-3.5 px-4 sm:px-6 lg:px-16 sticky top-16 z-30 shadow-sm backdrop-blur-md bg-white/95">
        <div className="max-w-7xl mx-auto flex items-center justify-between flex-wrap gap-3">
          <span className="text-xs font-black text-[#0C4779] uppercase tracking-wider hidden lg:inline-block">
            IMESA Categories:
          </span>
          
          <div className="flex items-center gap-2 w-full lg:w-auto overflow-x-auto pb-1 lg:pb-0 scrollbar-none">
            {OFFICIAL_CATEGORIES.map(cat => {
              const isActive = cat.id === currentCategory.id;
              return (
                <Link
                  key={cat.id}
                  to={`/brands/imesa/${cat.id}`}
                  className={`px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs font-bold transition-all duration-200 flex items-center gap-1.5 shrink-0 ${
                    isActive
                      ? 'bg-[#0C4779] text-white shadow-sm shadow-[#0C4779]/20'
                      : 'bg-slate-100 text-slate-600 hover:text-[#0C4779] hover:bg-slate-200/70'
                  }`}
                >
                  {cat.badgeIcon && (
                    <img src={cat.badgeIcon} alt="" className="w-3.5 h-3.5 object-contain" />
                  )}
                  {cat.name}
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      {/* ── 3. Main Category Content ── */}
      <main className="flex-1 py-8 sm:py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 space-y-10 sm:space-y-16">
          
          {/* ── Category Hero Banner (Exact match of Screenshot 2) ── */}
          <section className="bg-white border border-slate-200/80 rounded-3xl p-6 sm:p-8 lg:p-12 shadow-sm overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 items-center">
              
              {/* Left Column: Icon + Capacity Pill, H1, Accent Line, EVO.LINE Copy */}
              <div className="lg:col-span-6 flex flex-col justify-center">
                
                {/* Official Capacity Pill Badge */}
                <div className="inline-flex items-center gap-2 bg-[#f0f4f8] border border-[#0C4779]/15 px-3 sm:px-3.5 py-1.5 rounded-full mb-4 sm:mb-5 w-fit">
                  {currentCategory.badgeIcon && (
                    <img 
                      src={currentCategory.badgeIcon} 
                      alt={currentCategory.name} 
                      className="w-4 h-4 sm:w-5 sm:h-5 object-contain" 
                    />
                  )}
                  <span className="text-[#0C4779] text-[11px] sm:text-xs font-bold tracking-wider uppercase">
                    {currentCategory.capacityBadge}
                  </span>
                </div>

                {/* Main H1 Title */}
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0C4779] tracking-tight uppercase leading-snug mb-3">
                  {currentCategory.h1}
                </h1>

                {/* Official IMESA Accent Underline (30px wide, 2px height) */}
                <div className="w-10 h-0.5 bg-[#0C4779] mb-4 sm:mb-5" />

                {/* Category Subtitle */}
                <h4 className="text-xs sm:text-sm md:text-base font-bold text-[#0C4779] uppercase tracking-wide mb-3 sm:mb-4">
                  {currentCategory.introLead}
                </h4>

                {/* Category Intro Paragraphs */}
                <div className="space-y-2.5 sm:space-y-3 text-slate-600 text-xs sm:text-sm md:text-base leading-relaxed">
                  {currentCategory.introParas.map((para, idx) => (
                    <p key={idx}>{para}</p>
                  ))}
                </div>
              </div>

              {/* Right Column: Category Hero Image with Rounded Clean Frame */}
              <div className="lg:col-span-6 flex justify-center">
                <div className="w-full max-w-xl rounded-2xl overflow-hidden border border-slate-100 shadow-md sm:shadow-lg bg-slate-50">
                  <img 
                    src={currentCategory.heroImg} 
                    alt={currentCategory.h1} 
                    className="w-full h-auto object-cover max-h-[260px] sm:max-h-[380px] hover:scale-105 transition-transform duration-700" 
                  />
                </div>
              </div>

            </div>
          </section>

          {/* ── Category Machine Showcases (Exact match of Screenshot 1) ── */}
          <section className="space-y-8 sm:space-y-10">
            <div className="border-b border-slate-200 pb-3 sm:pb-4 flex items-center justify-between">
              <div>
                <h2 className="text-lg sm:text-xl md:text-2xl font-black text-[#0C4779] uppercase tracking-wide">
                  Available Machine Series
                </h2>
                <p className="text-slate-500 text-xs sm:text-sm mt-0.5">
                  Select a series below to inspect technical specifications, dimensions, and documentation.
                </p>
              </div>
              <span className="text-xs font-bold text-slate-400 uppercase tracking-widest hidden sm:inline-block">
                {currentCategory.showcases.length} Series
              </span>
            </div>

            <div className="space-y-6 sm:space-y-8">
              {currentCategory.showcases.map((showcase) => (
                <div 
                  key={showcase.id}
                  className="bg-white border border-slate-200/80 rounded-3xl p-6 sm:p-8 lg:p-12 shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 items-center">
                    
                    {/* Left Column (5 cols): Large Front-Facing Machine Cutout */}
                    <div className="lg:col-span-5 flex items-center justify-center py-4 bg-gradient-to-b from-slate-50/50 to-white rounded-2xl border border-slate-100/60 p-4 sm:p-6 min-h-[220px] sm:min-h-[300px]">
                      <Link 
                        to={`/brands/imesa/${showcase.primaryTarget}`}
                        className="group block w-full text-center"
                        title="Click to view full technical specifications"
                      >
                        <img 
                          src={showcase.machineImg} 
                          alt={showcase.title}
                          className="max-h-[260px] sm:max-h-[360px] md:max-h-[440px] w-auto mx-auto object-contain drop-shadow-md group-hover:scale-105 transition-transform duration-500 will-change-transform" 
                        />
                      </Link>
                    </div>

                    {/* Right Column (7 cols): Title, Eyebrow, Copy, & Series Buttons */}
                    <div className="lg:col-span-7 flex flex-col justify-center">
                      
                      {/* Machine Showcase Title (uppercase navy) */}
                      <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-[#0C4779] tracking-tight uppercase leading-snug mb-1">
                        {showcase.title}
                      </h3>

                      {/* Machine Series Eyebrow */}
                      <h6 className="text-xs sm:text-sm font-bold text-[#0C4779]/70 uppercase tracking-widest mb-3 sm:mb-4">
                        {showcase.subtitle}
                      </h6>

                      {/* Description Paragraphs */}
                      <div className="space-y-2.5 sm:space-y-3 text-slate-600 text-xs sm:text-sm md:text-base leading-relaxed mb-5 sm:mb-6">
                        {showcase.paras.map((para, idx) => (
                          <p key={idx}>{para}</p>
                        ))}
                      </div>

                      {/* Official Capacity Series Rectangular Buttons (Screenshot 1) */}
                      <div className="pt-3 border-t border-slate-100">
                        <span className="block text-[10px] sm:text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-2.5 sm:mb-3">
                          Select Series Model / Capacity:
                        </span>

                        <div className="flex flex-wrap gap-2 sm:gap-2.5">
                          {showcase.seriesButtons.map((btn) => (
                            <Link
                              key={btn.id}
                              to={`/brands/imesa/${btn.id}`}
                              className="inline-flex items-center justify-center px-3.5 sm:px-4 py-2 border border-[#0C4779] text-[#0C4779] hover:bg-[#0C4779] hover:text-white transition-all duration-200 text-xs sm:text-sm font-semibold tracking-wide group rounded-none"
                            >
                              <span className="btn-txt">{btn.label}</span>
                              <ChevronRight className="w-3.5 h-3.5 ml-1 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all duration-200" />
                            </Link>
                          ))}
                        </div>
                      </div>

                    </div>

                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ── 4. Cross-Category Exploration Cards ── */}
          <section className="bg-slate-50 border border-slate-200/80 rounded-3xl p-6 sm:p-8 lg:p-12">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 mb-6 sm:mb-8">
              <div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-black text-[#0C4779] uppercase tracking-tight">
                  Explore Other IMESA Categories
                </h3>
                <p className="text-slate-500 text-xs sm:text-sm mt-0.5">
                  Browse complementary laundry systems manufactured by IMESA in Italy.
                </p>
              </div>

              <Link 
                to="/brands/imesa" 
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0C4779] hover:text-[#083256] uppercase tracking-wider transition-colors"
              >
                All IMESA Products <ChevronRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
              {otherCategories.map((cat) => (
                <Link
                  key={cat.id}
                  to={`/brands/imesa/${cat.id}`}
                  className="group bg-white p-5 sm:p-6 rounded-2xl border border-slate-200 hover:border-[#0C4779]/40 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3 sm:mb-4">
                      <span className="text-[10px] font-bold text-[#0C4779] bg-[#f0f4f8] px-2.5 py-1 rounded-full uppercase tracking-wider">
                        {cat.capacityBadge}
                      </span>
                      {cat.badgeIcon && (
                        <img src={cat.badgeIcon} alt="" className="w-4 h-4 object-contain opacity-70" />
                      )}
                    </div>

                    <div className="h-32 sm:h-36 flex items-center justify-center p-2 mb-4 bg-slate-50/50 rounded-xl overflow-hidden">
                      <img 
                        src={cat.cardImg} 
                        alt={cat.name} 
                        className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>

                    <h4 className="font-bold text-[#0C4779] text-sm sm:text-base uppercase mb-1 transition-colors">
                      {cat.name}
                    </h4>
                    <p className="text-slate-500 text-xs line-clamp-2 leading-relaxed">
                      {cat.cardDesc}
                    </p>
                  </div>

                  <div className="flex items-center gap-1.5 text-xs font-bold text-[#0C4779] mt-4 sm:mt-5 pt-3 border-t border-slate-100 group-hover:translate-x-1 transition-transform">
                    View Category <ChevronRight className="w-3.5 h-3.5" />
                  </div>
                </Link>
              ))}
            </div>
          </section>

          {/* ── 5. Technical Support & Inquiry CTA ── */}
          <section className="bg-gradient-to-r from-[#0C4779] to-[#083256] rounded-3xl p-6 sm:p-8 lg:p-12 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8 text-center md:text-left">
            <div className="max-w-2xl">
              <span className="text-cyan-300 text-[11px] sm:text-xs font-bold tracking-widest uppercase mb-2 block">
                Engineering & Project Consultation
              </span>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold tracking-tight mb-2 sm:mb-3">
                Need Guidance Selecting the Right IMESA Capacity?
              </h3>
              <p className="text-white/85 text-xs sm:text-sm md:text-base leading-relaxed">
                Our laundry engineers help calculate hourly linen throughput, utility consumption, and floorplan configuration for hospital, hotel, and industrial installations.
              </p>
            </div>

            <Link
              to="/contact"
              className="px-6 sm:px-8 py-3 sm:py-3.5 rounded-full bg-white text-[#0C4779] hover:bg-slate-100 font-bold text-xs sm:text-sm tracking-wide shadow-lg transition-all shrink-0 inline-flex items-center gap-2"
            >
              <Mail className="w-4 h-4" /> Request Technical Quotation
            </Link>
          </section>

        </div>
      </main>

      <Footer />
    </div>
  );
}
