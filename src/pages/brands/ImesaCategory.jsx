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
      <nav aria-label="Breadcrumb" className="w-full bg-[#f8f9fa] border-b border-slate-200/80 pt-24 pb-4 px-6 lg:px-16 text-xs text-slate-500 font-medium">
        <div className="max-w-7xl mx-auto flex items-center justify-between flex-wrap gap-4">
          <div className="flex items-center flex-wrap gap-2">
            <Link to="/" className="hover:text-[#0D447B] transition-colors">Home</Link>
            <span className="text-slate-300">/</span>
            <Link to="/brands" className="hover:text-[#0D447B] transition-colors">Brands</Link>
            <span className="text-slate-300">/</span>
            <Link to="/brands/imesa" className="hover:text-[#0D447B] transition-colors">IMESA</Link>
            <span className="text-slate-300">/</span>
            <span className="text-[#0D447B] font-bold">{currentCategory.name}</span>
          </div>

          <Link 
            to="/brands/imesa" 
            className="inline-flex items-center gap-1.5 text-slate-500 hover:text-[#0D447B] font-semibold transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> Back to IMESA Overview
          </Link>
        </div>
      </nav>

      {/* ── 2. Category Navigation Switcher Bar ── */}
      <div className="w-full bg-white border-b border-slate-200 py-3.5 px-6 lg:px-16 sticky top-16 z-30 shadow-sm backdrop-blur-md bg-white/95">
        <div className="max-w-7xl mx-auto flex items-center justify-between flex-wrap gap-3">
          <span className="text-xs font-black text-[#0D447B] uppercase tracking-wider hidden sm:inline-block">
            IMESA Categories:
          </span>
          
          <div className="flex items-center flex-wrap gap-2 w-full sm:w-auto">
            {OFFICIAL_CATEGORIES.map(cat => {
              const isActive = cat.id === currentCategory.id;
              return (
                <Link
                  key={cat.id}
                  to={`/brands/imesa/${cat.id}`}
                  className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all duration-200 flex items-center gap-1.5 ${
                    isActive
                      ? 'bg-[#0D447B] text-white shadow-sm shadow-[#0D447B]/20'
                      : 'bg-slate-100 text-slate-600 hover:text-[#0D447B] hover:bg-slate-200/70'
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
      <main className="flex-1 py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-16 space-y-16">
          
          {/* ── Category Hero Banner (Exact match of Screenshot 2) ── */}
          <section className="bg-white border border-slate-200/80 rounded-3xl p-8 lg:p-12 shadow-sm overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              
              {/* Left Column: Icon + Capacity Pill, H1, Accent Line, EVO.LINE Copy */}
              <div className="lg:col-span-6 flex flex-col justify-center">
                
                {/* Official Capacity Pill Badge */}
                <div className="inline-flex items-center gap-2.5 bg-[#f0f4f8] border border-[#0D447B]/15 px-3.5 py-1.5 rounded-full mb-5 w-fit">
                  {currentCategory.badgeIcon && (
                    <img 
                      src={currentCategory.badgeIcon} 
                      alt={currentCategory.name} 
                      className="w-5 h-5 object-contain" 
                    />
                  )}
                  <span className="text-[#0D447B] text-xs font-bold tracking-wider uppercase">
                    {currentCategory.capacityBadge}
                  </span>
                </div>

                {/* Main H1 Title */}
                <h1 className="text-2xl md:text-4xl font-extrabold text-[#0D447B] tracking-tight uppercase leading-snug mb-3">
                  {currentCategory.h1}
                </h1>

                {/* Official IMESA Accent Underline (30px wide, 2px height) */}
                <div className="w-10 h-0.5 bg-[#00A3E0] mb-5" />

                {/* Category Subtitle */}
                <h4 className="text-sm md:text-base font-bold text-[#0D447B] uppercase tracking-wide mb-4">
                  {currentCategory.introLead}
                </h4>

                {/* Category Intro Paragraphs */}
                <div className="space-y-3 text-slate-600 text-sm md:text-base leading-relaxed">
                  {currentCategory.introParas.map((para, idx) => (
                    <p key={idx}>{para}</p>
                  ))}
                </div>
              </div>

              {/* Right Column: Category Hero Image with Rounded Clean Frame */}
              <div className="lg:col-span-6 flex justify-center">
                <div className="w-full max-w-xl rounded-2xl overflow-hidden border border-slate-100 shadow-lg bg-slate-50">
                  <img 
                    src={currentCategory.heroImg} 
                    alt={currentCategory.h1} 
                    className="w-full h-auto object-cover max-h-[380px] hover:scale-105 transition-transform duration-700" 
                  />
                </div>
              </div>

            </div>
          </section>

          {/* ── Category Machine Showcases (Exact match of Screenshot 1) ── */}
          <section className="space-y-10">
            <div className="border-b border-slate-200 pb-4 flex items-center justify-between">
              <div>
                <h2 className="text-xl md:text-2xl font-black text-[#0D447B] uppercase tracking-wide">
                  Available Machine Series
                </h2>
                <p className="text-slate-500 text-xs md:text-sm mt-0.5">
                  Select a series below to inspect technical specifications, dimensions, and documentation.
                </p>
              </div>
              <span className="text-xs font-bold text-slate-400 uppercase tracking-widest hidden sm:inline-block">
                {currentCategory.showcases.length} Series
              </span>
            </div>

            <div className="space-y-8">
              {currentCategory.showcases.map((showcase) => (
                <div 
                  key={showcase.id}
                  className="bg-white border border-slate-200/80 rounded-3xl p-8 lg:p-12 shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                    
                    {/* Left Column (5 cols): Large Front-Facing Machine Cutout */}
                    <div className="lg:col-span-5 flex items-center justify-center py-4 bg-gradient-to-b from-slate-50/50 to-white rounded-2xl border border-slate-100/60 p-6">
                      <Link 
                        to={`/brands/imesa/${showcase.primaryTarget}`}
                        className="group block w-full text-center"
                        title="Click to view full technical specifications"
                      >
                        <img 
                          src={showcase.machineImg} 
                          alt={showcase.title}
                          className="max-h-[380px] md:max-h-[440px] w-auto mx-auto object-contain drop-shadow-md group-hover:scale-105 transition-transform duration-500 will-change-transform" 
                        />
                      </Link>
                    </div>

                    {/* Right Column (7 cols): Title, Eyebrow, Copy, & Series Buttons */}
                    <div className="lg:col-span-7 flex flex-col justify-center">
                      
                      {/* Machine Showcase Title (uppercase navy) */}
                      <h3 className="text-xl md:text-3xl font-extrabold text-[#0D447B] tracking-tight uppercase leading-snug mb-1">
                        {showcase.title}
                      </h3>

                      {/* Machine Series Eyebrow */}
                      <h6 className="text-xs md:text-sm font-bold text-[#0D447B]/70 uppercase tracking-widest mb-4">
                        {showcase.subtitle}
                      </h6>

                      {/* Description Paragraphs */}
                      <div className="space-y-3 text-slate-600 text-sm md:text-base leading-relaxed mb-6">
                        {showcase.paras.map((para, idx) => (
                          <p key={idx}>{para}</p>
                        ))}
                      </div>

                      {/* Official Capacity Series Rectangular Buttons (Screenshot 1) */}
                      <div className="pt-2 border-t border-slate-100">
                        <span className="block text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-3">
                          Select Series Model / Capacity:
                        </span>

                        <div className="flex flex-wrap gap-2.5">
                          {showcase.seriesButtons.map((btn) => (
                            <Link
                              key={btn.id}
                              to={`/brands/imesa/${btn.id}`}
                              className="inline-flex items-center justify-center px-4 py-2 border border-[#0D447B] text-[#0D447B] hover:bg-[#0D447B] hover:text-white transition-all duration-200 text-xs md:text-sm font-semibold tracking-wide group rounded-none"
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
          <section className="bg-slate-50 border border-slate-200/80 rounded-3xl p-8 lg:p-12">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
              <div>
                <h3 className="text-xl md:text-2xl font-black text-[#0D447B] uppercase tracking-tight">
                  Explore Other IMESA Categories
                </h3>
                <p className="text-slate-500 text-sm mt-0.5">
                  Browse complementary laundry systems manufactured by IMESA in Italy.
                </p>
              </div>

              <Link 
                to="/brands/imesa" 
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0D447B] hover:text-[#00A3E0] uppercase tracking-wider transition-colors"
              >
                All IMESA Products <ChevronRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {otherCategories.map((cat) => (
                <Link
                  key={cat.id}
                  to={`/brands/imesa/${cat.id}`}
                  className="group bg-white p-6 rounded-2xl border border-slate-200 hover:border-[#0D447B]/40 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-[10px] font-bold text-[#0D447B] bg-[#f0f4f8] px-2.5 py-1 rounded-full uppercase tracking-wider">
                        {cat.capacityBadge}
                      </span>
                      {cat.badgeIcon && (
                        <img src={cat.badgeIcon} alt="" className="w-4 h-4 object-contain opacity-70" />
                      )}
                    </div>

                    <div className="h-36 flex items-center justify-center p-2 mb-4 bg-slate-50/50 rounded-xl overflow-hidden">
                      <img 
                        src={cat.cardImg} 
                        alt={cat.name} 
                        className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>

                    <h4 className="font-bold text-[#0D447B] text-base uppercase mb-1 group-hover:text-[#00A3E0] transition-colors">
                      {cat.name}
                    </h4>
                    <p className="text-slate-500 text-xs line-clamp-2 leading-relaxed">
                      {cat.cardDesc}
                    </p>
                  </div>

                  <div className="flex items-center gap-1.5 text-xs font-bold text-[#0D447B] mt-5 pt-3 border-t border-slate-100 group-hover:translate-x-1 transition-transform">
                    View Category <ChevronRight className="w-3.5 h-3.5" />
                  </div>
                </Link>
              ))}
            </div>
          </section>

          {/* ── 5. Technical Support & Inquiry CTA ── */}
          <section className="bg-gradient-to-r from-[#001F3F] to-[#0D447B] rounded-3xl p-8 lg:p-12 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl">
              <span className="text-[#00A3E0] text-xs font-bold tracking-widest uppercase mb-2 block">
                Engineering & Project Consultation
              </span>
              <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight mb-3">
                Need Guidance Selecting the Right IMESA Capacity?
              </h3>
              <p className="text-white/80 text-sm md:text-base leading-relaxed">
                Our laundry engineers help calculate hourly linen throughput, utility consumption, and floorplan configuration for hospital, hotel, and industrial installations.
              </p>
            </div>

            <Link
              to="/contact"
              className="px-8 py-3.5 rounded-full bg-[#00A3E0] hover:bg-[#0092c8] text-white font-bold text-sm tracking-wide shadow-lg hover:shadow-cyan-500/30 transition-all shrink-0 inline-flex items-center gap-2"
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
