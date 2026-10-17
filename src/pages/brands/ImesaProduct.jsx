import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowLeft, ChevronRight, CheckCircle2, ShieldCheck, 
  FileText, Download, Mail, ExternalLink, Sparkles,
  Info, Cpu, Layers, Wind, Droplets, ArrowRight,
  Maximize2, Tablet, Wifi, RotateCw, Flame, Thermometer
} from 'lucide-react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

function getFeatureIcon(title = '') {
  const t = title.toLowerCase();
  if (t.includes('touch') || t.includes('im11') || t.includes('im10') || t.includes('screen')) return <Tablet className="w-6 h-6 sm:w-7 sm:h-7 text-[#0C4779]" />;
  if (t.includes('wi-fi') || t.includes('iot') || t.includes('connect') || t.includes('app')) return <Wifi className="w-6 h-6 sm:w-7 sm:h-7 text-[#0C4779]" />;
  if (t.includes('inox') || t.includes('steel') || t.includes('drum')) return <ShieldCheck className="w-6 h-6 sm:w-7 sm:h-7 text-[#0C4779]" />;
  if (t.includes('g-factor') || t.includes('spin') || t.includes('rotation') || t.includes('inverter') || t.includes('alternating')) return <RotateCw className="w-6 h-6 sm:w-7 sm:h-7 text-[#0C4779]" />;
  if (t.includes('d-flow') || t.includes('flow') || t.includes('air') || t.includes('cool')) return <Wind className="w-6 h-6 sm:w-7 sm:h-7 text-[#0C4779]" />;
  if (t.includes('chest') || t.includes('iron') || t.includes('roller') || t.includes('torsion')) return <Layers className="w-6 h-6 sm:w-7 sm:h-7 text-[#0C4779]" />;
  if (t.includes('heat') || t.includes('steam') || t.includes('gas') || t.includes('temperature')) return <Flame className="w-6 h-6 sm:w-7 sm:h-7 text-[#0C4779]" />;
  return <Sparkles className="w-6 h-6 sm:w-7 sm:h-7 text-[#0C4779]" />;
}

// Official IMESA Products Database (Extracted directly from imesa.it)
import { IMESA_OFFICIAL_PRODUCTS } from './imesaProductData';

// Slug & Route Aliases for 100% backward compatibility
const SLUG_ALIASES = {
  "imesa-washing-machines": "imesa-lm-series",
  "lm-series": "imesa-lm-series",
  "high-spin-industrial-washing-machines": "imesa-lm-series",
  "lm-8-11": "imesa-lm-8-11",
  "lm-8-11-kg": "imesa-lm-8-11",
  "imesa-lm-8-11": "imesa-lm-8-11",
  "lm-14-18-23": "imesa-lm-series",
  "lm-14-18-23-kg": "imesa-lm-series",
  "lm-14-23": "imesa-lm-series",
  "lm-14-23-kg": "imesa-lm-series",
  "imesa-lm-14-23": "imesa-lm-series",
  "imesa-lm-series": "imesa-lm-series",
  "lm-26-32": "imesa-lm-26-32",
  "lm-26-32-kg": "imesa-lm-26-32",
  "imesa-lm-26-32": "imesa-lm-26-32",
  "lm-40-85": "imesa-lm-40-85",
  "lm-40-85-kg": "imesa-lm-40-85",
  "lm-40-55-70-85-kg": "imesa-lm-40-85",
  "imesa-lm-40-85": "imesa-lm-40-85",
  "lm-100-125": "imesa-lm-100-125",
  "lm-100-125-kg": "imesa-lm-100-125",
  "imesa-lm-100-125": "imesa-lm-100-125",
  "d2w-barrier": "imesa-d2w-barrier",
  "hygiene-barrier-washers": "imesa-d2w-barrier",
  "d2w-18-23": "imesa-d2w-barrier",
  "d2w-18-23-kg": "imesa-d2w-barrier",
  "imesa-d2w-barrier": "imesa-d2w-barrier",
  "d2w-30-55": "imesa-d2w-30-55",
  "d2w-30-55-kg": "imesa-d2w-30-55",
  "imesa-d2w-30-55": "imesa-d2w-30-55",
  "imesa-dryers": "imesa-es-smart",
  "es-smart": "imesa-es-smart",
  "es-smart-line": "imesa-es-smart",
  "es-premium": "imesa-es-premium",
  "es-premium-line": "imesa-es-premium",
  "imesa-flatwork-ironers": "imesa-fi-easy",
  "fi-easy": "imesa-fi-easy",
  "fi-easy-line": "imesa-fi-easy",
  "fi-smart": "imesa-fi-smart",
  "fi-smart-line": "imesa-fi-smart",
  "imesa-drying-ironers": "imesa-mca-ironer",
  "mca-series": "imesa-mca-ironer",
  "mca-ironer": "imesa-mca-ironer",
  "mca": "imesa-mca-ironer",
  "mcm-series": "imesa-mcm-ironer",
  "mcm-ironer": "imesa-mcm-ironer",
  "mcm": "imesa-mcm-ironer"
};

export default function ImesaProduct() {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState('learnMore');
  const [activeImage, setActiveImage] = useState(null);
  const [showInquiryModal, setShowInquiryModal] = useState(false);
  const [inquirySubmitted, setInquirySubmitted] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setActiveTab('learnMore');
    setActiveImage(null);
  }, [id]);

  const rawId = (id || "").toLowerCase();
  const resolvedKey = IMESA_OFFICIAL_PRODUCTS[rawId] 
    ? rawId 
    : SLUG_ALIASES[rawId] || "imesa-lm-series";

  const product = IMESA_OFFICIAL_PRODUCTS[resolvedKey] || IMESA_OFFICIAL_PRODUCTS["imesa-lm-series"];

  // Displayed image (selected thumbnail or primary fallback)
  const currentImg = activeImage || product.primaryImg;

  // Contact form submission handler
  const handleInquirySubmit = (e) => {
    e.preventDefault();
    setInquirySubmitted(true);
    setTimeout(() => {
      setShowInquiryModal(false);
      setInquirySubmitted(false);
    }, 2500);
  };

  return (
    <div className="min-h-screen bg-white font-sans text-slate-800 flex flex-col">
      <Navbar />

      {/* ── 1. Official IMESA Breadcrumbs Bar ── */}
      <nav aria-label="Breadcrumb" className="w-full bg-[#f8f9fa] border-b border-slate-200/80 pt-20 sm:pt-24 pb-3 sm:pb-4 px-4 sm:px-6 lg:px-16 text-xs text-slate-500 font-medium">
        <div className="max-w-7xl mx-auto flex items-center flex-wrap gap-1.5 sm:gap-2">
          <Link to="/" className="hover:text-[#0C4779] transition-colors">Home</Link>
          <span className="text-slate-300">/</span>
          <Link to="/brands" className="hover:text-[#0C4779] transition-colors">Brands</Link>
          <span className="text-slate-300">/</span>
          <Link to={`/brands/imesa/${product.categorySlug || 'washing-machines'}`} className="hover:text-[#0C4779] transition-colors font-semibold">
            {product.category}
          </Link>
          <span className="text-slate-300">/</span>
          <span className="text-slate-500 hidden sm:inline">{product.subCategory}</span>
          <span className="text-slate-300 hidden sm:inline">/</span>
          <span className="text-[#0C4779] font-semibold truncate max-w-[200px] sm:max-w-xs md:max-w-md">{product.title}</span>
        </div>
      </nav>

      {/* ── 1.1 Official IMESA Series Capacity Switcher (Mobile Swipe Friendly) ── */}
      {product.seriesSiblings && product.seriesSiblings.length > 1 && (
        <div className="w-full bg-[#f1f5f9]/70 border-b border-slate-200/80 py-2.5 sm:py-3.5 px-4 sm:px-6 lg:px-16">
          <div className="max-w-7xl mx-auto flex items-center justify-between flex-wrap gap-2">
            <span className="text-[11px] font-black text-[#0C4779] uppercase tracking-wider shrink-0 flex items-center gap-1.5">
              Available Models:
            </span>
            <div className="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0 scrollbar-none w-full sm:w-auto">
              {product.seriesSiblings.map(s => {
                const isCurrent = resolvedKey === s.id;
                return (
                  <Link
                    key={s.id}
                    to={`/brands/imesa/${s.id}`}
                    className={`px-3.5 sm:px-4 py-1.5 rounded-full text-xs font-bold tracking-wide transition-all shrink-0 ${
                      isCurrent
                        ? 'bg-[#0C4779] text-white shadow-md shadow-[#0C4779]/20'
                        : 'bg-white text-slate-600 hover:text-[#0C4779] border border-slate-200 hover:border-[#0C4779]/40'
                    }`}
                  >
                    {s.label}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* ── 2. Hero / Product Presentation Section (Exact 2-Column IMESA Layout) ── */}
      <section className="w-full py-8 sm:py-12 lg:py-16 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
            
            {/* Left Column: Generous Product Image Showcase + Interactive Gallery Thumbnails */}
            <div className="lg:col-span-6 flex flex-col items-center w-full">
              {/* Main Machine Container */}
              <div className="relative w-full bg-white rounded-2xl p-4 sm:p-6 lg:p-10 border border-slate-200/70 shadow-sm flex items-center justify-center min-h-[300px] sm:min-h-[440px] md:min-h-[520px] overflow-hidden group">
                {/* Official IMESA Badge */}
                <div className="absolute top-4 left-4 z-10 flex items-center gap-2">
                  <span className="bg-[#0C4779] text-white text-[10px] sm:text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
                    {product.badge}
                  </span>
                </div>

                {/* Main Machine Image */}
                <motion.img 
                  key={currentImg}
                  initial={{ opacity: 0.8, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4 }}
                  src={currentImg} 
                  alt={product.title}
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    e.currentTarget.src = product.primaryImg;
                  }}
                  className="w-full h-auto max-h-[320px] sm:max-h-[440px] md:max-h-[500px] object-contain drop-shadow-xl group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Gallery Thumbnails Strip */}
              {product.galleryImages && product.galleryImages.length > 0 && (
                <div className="flex items-center gap-2 sm:gap-3 mt-4 sm:mt-5 overflow-x-auto w-full py-1.5 scrollbar-none">
                  <button 
                    onClick={() => setActiveImage(product.primaryImg)}
                    className={`w-16 h-16 sm:w-20 sm:h-20 rounded-xl border-2 p-1 bg-white overflow-hidden shrink-0 transition-all ${
                      currentImg === product.primaryImg ? 'border-[#0C4779] shadow-md scale-105' : 'border-slate-200 opacity-70 hover:opacity-100 hover:border-slate-300'
                    }`}
                  >
                    <img src={product.primaryImg} alt="Thumbnail Main" className="w-full h-full object-contain" referrerPolicy="no-referrer" />
                  </button>
                  {product.galleryImages.map((imgUrl, idx) => (
                    <button 
                      key={idx}
                      onClick={() => setActiveImage(imgUrl)}
                      className={`w-16 h-16 sm:w-20 sm:h-20 rounded-xl border-2 p-1 bg-white overflow-hidden shrink-0 transition-all ${
                        currentImg === imgUrl ? 'border-[#0C4779] shadow-md scale-105' : 'border-slate-200 opacity-70 hover:opacity-100 hover:border-slate-300'
                      }`}
                    >
                      <img 
                        src={imgUrl} 
                        alt={`Thumbnail ${idx + 1}`} 
                        className="w-full h-full object-contain" 
                        referrerPolicy="no-referrer"
                        onError={(e) => {
                          e.currentTarget.parentElement.style.display = 'none';
                        }}
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Right Column: Title, Short Description, Key Points, and Actions */}
            <div className="lg:col-span-6 flex flex-col w-full">
              {/* Category Eyebrow */}
              <div className="text-[11px] sm:text-xs font-bold text-[#0C4779] uppercase tracking-[0.2em] mb-1.5 sm:mb-2">
                {product.subCategory}
              </div>

              {/* Official Product Title in IMESA Navy Blue */}
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0C4779] leading-tight mb-2 sm:mb-4 tracking-tight">
                {product.title}
              </h1>

              {/* Series Model Label */}
              <div className="inline-block text-slate-500 font-medium text-xs sm:text-sm mb-5 sm:mb-6">
                {product.seriesName}
              </div>

              {/* Official Short Description Bullet Paragraphs */}
              <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8 text-slate-700 text-xs sm:text-sm md:text-base leading-relaxed border-l-2 border-[#0C4779]/30 pl-3.5 sm:pl-4">
                {product.shortDesc && product.shortDesc.map((para, idx) => (
                  <p key={idx} className="leading-relaxed">
                    {para}
                  </p>
                ))}
              </div>

              {/* Action Buttons (Request Info / View Technical Specs) */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-4 border-t border-slate-100">
                <button 
                  onClick={() => setShowInquiryModal(true)}
                  className="bg-[#0C4779] hover:bg-[#083256] text-white py-3 sm:py-3.5 px-6 sm:px-8 rounded-lg font-bold text-xs sm:text-sm tracking-wide shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2"
                >
                  <Mail className="w-4 h-4" />
                  REQUEST INFORMATION
                </button>
                <button 
                  onClick={() => {
                    const el = document.getElementById('technical-tabs');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                    setActiveTab('specs');
                  }}
                  className="bg-white hover:bg-slate-50 text-[#0C4779] border border-slate-300 hover:border-[#0C4779] py-3 sm:py-3.5 px-5 sm:px-6 rounded-lg font-bold text-xs sm:text-sm tracking-wide transition-all flex items-center justify-center gap-2"
                >
                  <FileText className="w-4 h-4" />
                  TECHNICAL SPECIFICATIONS
                </button>
              </div>

              {/* Direct Category Link */}
              <div className="mt-6 sm:mt-8 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
                <span>Official IMESA Factory Warranty</span>
                <Link to={`/brands/imesa/${product.categorySlug || 'washing-machines'}`} className="text-[#0C4779] hover:underline font-semibold flex items-center gap-1">
                  Back to {product.category} <ChevronRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── 3. Key Features Icon Boxes (Direct clone of imesa.it signature iconbox row) ── */}
      {product.iconBoxes && product.iconBoxes.length > 0 && (
        <section className="w-full py-12 sm:py-16 bg-[#f8f9fa] border-b border-slate-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16">
            <div className="text-center mb-8 sm:mb-12">
              <span className="text-[#0C4779] text-[11px] sm:text-xs font-bold tracking-[0.2em] uppercase block mb-1.5 sm:mb-2">
                EXCELLENCE IN DESIGN
              </span>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#0C4779] tracking-tight">
                Key Machine Features
              </h2>
            </div>

            {/* Responsive Grid matching imesa.it layout */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3.5 sm:gap-6">
              {product.iconBoxes.map((box, idx) => (
                <div 
                  key={idx}
                  className="bg-white rounded-2xl p-4 sm:p-6 border border-slate-200/70 shadow-sm hover:shadow-md transition-shadow flex flex-col items-center text-center justify-between group"
                >
                  <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-[#0C4779]/5 flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform relative">
                    {box.iconUrl ? (
                      <img 
                        src={box.iconUrl} 
                        alt={box.title} 
                        referrerPolicy="no-referrer"
                        className="w-8 h-8 sm:w-10 sm:h-10 object-contain drop-shadow-sm" 
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                          const fallback = e.currentTarget.parentElement.querySelector('.icon-fallback');
                          if (fallback) fallback.style.display = 'flex';
                        }}
                      />
                    ) : null}
                    <div 
                      className="icon-fallback items-center justify-center" 
                      style={{ display: box.iconUrl ? 'none' : 'flex' }}
                    >
                      {getFeatureIcon(box.title)}
                    </div>
                  </div>
                  <h3 className="text-[11px] sm:text-xs md:text-sm font-semibold text-[#0C4779] leading-snug flex-1 flex items-center">
                    {box.title}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── 4. Key Highlights & Operational Advantages ── */}
      {product.highlights && product.highlights.length > 0 && (
        <section className="w-full py-12 sm:py-16 bg-white border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16">
            <div className="max-w-3xl mb-8 sm:mb-10">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#0C4779] mb-2 sm:mb-3">
                Technological Advantages
              </h2>
              <div className="w-16 h-1 bg-[#0C4779] rounded-full mb-3 sm:mb-4"></div>
              <p className="text-slate-600 text-xs sm:text-sm md:text-base">
                Engineered to maximize efficiency, fabric care, and longevity in professional and commercial laundry operations.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 sm:gap-4 lg:gap-6">
              {product.highlights.map((item, idx) => (
                <div 
                  key={idx}
                  className="flex items-start gap-3 sm:gap-3.5 p-3.5 sm:p-4 rounded-xl bg-slate-50 border border-slate-100 hover:border-slate-200 transition-colors"
                >
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#0C4779] shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm md:text-base text-slate-700 leading-snug">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── 5. Technology Spotlight (IM11, IMConnect, etc.) ── */}
      {product.techCards && product.techCards.length > 0 && (
        <section className="w-full py-12 sm:py-16 bg-slate-50 border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16">
            <div className="text-center mb-8 sm:mb-12">
              <span className="text-[#0C4779] text-[11px] sm:text-xs font-bold tracking-[0.2em] uppercase block mb-1.5 sm:mb-2">
                CONNECTED INNOVATION
              </span>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#0C4779]">
                Smart Systems & IoT Telemetry
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
              {product.techCards.map((card, idx) => (
                <div key={idx} className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm flex flex-col justify-between">
                  <div>
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#0C4779]/10 flex items-center justify-center text-[#0C4779] mb-4 sm:mb-5">
                      <Cpu className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-[#0C4779] mb-2 sm:mb-3">{card.title}</h3>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-5 sm:mb-6">{card.text}</p>
                  </div>
                  <Link 
                    to="/brands/imesa" 
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0C4779] uppercase tracking-wider hover:underline"
                  >
                    Discover Connectivity <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── 6. Official IMESA Tabbed Section (Learn More / Technical Data / Download Area) ── */}
      <section id="technical-tabs" className="w-full py-12 sm:py-16 lg:py-24 bg-white flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16">
          
          {/* Tab Selection Navigation (Horizontal Swipe on Small Devices) */}
          <div className="flex border-b border-slate-200 mb-8 sm:mb-10 overflow-x-auto gap-2 scrollbar-none pb-1">
            <button
              onClick={() => setActiveTab('learnMore')}
              className={`pb-3 sm:pb-4 px-4 sm:px-6 text-xs sm:text-sm md:text-base font-bold whitespace-nowrap border-b-2 transition-all shrink-0 ${
                activeTab === 'learnMore'
                  ? 'border-[#0C4779] text-[#0C4779]'
                  : 'border-transparent text-slate-500 hover:text-slate-800'
              }`}
            >
              Learn More
            </button>
            <button
              onClick={() => setActiveTab('specs')}
              className={`pb-3 sm:pb-4 px-4 sm:px-6 text-xs sm:text-sm md:text-base font-bold whitespace-nowrap border-b-2 transition-all shrink-0 ${
                activeTab === 'specs'
                  ? 'border-[#0C4779] text-[#0C4779]'
                  : 'border-transparent text-slate-500 hover:text-slate-800'
              }`}
            >
              Technical Data
            </button>
            <button
              onClick={() => setActiveTab('downloads')}
              className={`pb-3 sm:pb-4 px-4 sm:px-6 text-xs sm:text-sm md:text-base font-bold whitespace-nowrap border-b-2 transition-all shrink-0 ${
                activeTab === 'downloads'
                  ? 'border-[#0C4779] text-[#0C4779]'
                  : 'border-transparent text-slate-500 hover:text-slate-800'
              }`}
            >
              Download Area
            </button>
          </div>

          {/* Tab 1: Learn More (Features List) */}
          {activeTab === 'learnMore' && (
            <motion.div 
              initial={{ opacity: 0, y: 15 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.3 }}
              className="space-y-4"
            >
              <h3 className="text-lg sm:text-xl font-bold text-[#0C4779] mb-4 sm:mb-6">Detailed Design & Engineering Features</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                {product.learnMoreTable && product.learnMoreTable.map((item, idx) => (
                  <div key={idx} className="p-3.5 sm:p-4 rounded-xl bg-slate-50 border border-slate-100 flex items-start gap-2.5 sm:gap-3">
                    <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#0C4779] shrink-0 mt-0.5" />
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Tab 2: Technical Data (Official multi-column table directly from imesa.it) */}
          {activeTab === 'specs' && (
            <motion.div 
              initial={{ opacity: 0, y: 15 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-center justify-between mb-4 sm:mb-6 flex-wrap gap-2">
                <h3 className="text-lg sm:text-xl font-bold text-[#0C4779]">Technical Specifications</h3>
                <span className="text-[11px] sm:text-xs text-slate-400 bg-slate-100 px-2.5 py-1 rounded-full">
                  Swipe horizontally on small screens ⇄
                </span>
              </div>

              {product.specsTable && product.specsTable.length > 0 ? (
                <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
                  <div className="overflow-x-auto scrollbar-thin">
                    <table className="w-full text-left border-collapse min-w-[600px] sm:min-w-[650px]">
                      {/* Header Row */}
                      <thead>
                        <tr className="bg-[#0C4779] text-white">
                          {product.specsTable[0].map((header, colIdx) => (
                            <th 
                              key={colIdx} 
                              className={`py-3 sm:py-4 px-4 sm:px-6 text-xs sm:text-sm font-bold tracking-wide uppercase ${
                                colIdx === 0 ? 'bg-[#083256] sticky left-0 z-10' : ''
                              }`}
                            >
                              {header}
                            </th>
                          ))}
                        </tr>
                      </thead>

                      {/* Body Rows */}
                      <tbody className="divide-y divide-slate-100 text-xs sm:text-sm">
                        {product.specsTable.slice(1).map((row, rowIdx) => (
                          <tr key={rowIdx} className="hover:bg-slate-50 transition-colors">
                            {row.map((cell, cellIdx) => (
                              <td 
                                key={cellIdx} 
                                className={`py-3 sm:py-4 px-4 sm:px-6 text-slate-700 ${
                                  cellIdx === 0 
                                    ? 'font-bold text-[#0C4779] bg-slate-50/90 sticky left-0 z-10 shadow-[2px_0_5px_-2px_rgba(0,0,0,0.06)]' 
                                    : ''
                                }`}
                              >
                                {cell}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              ) : (
                <div className="p-8 text-center text-slate-500 bg-slate-50 rounded-2xl border border-slate-200">
                  Detailed technical data sheet available upon request.
                </div>
              )}
            </motion.div>
          )}

          {/* Tab 3: Download Area */}
          {activeTab === 'downloads' && (
            <motion.div 
              initial={{ opacity: 0, y: 15 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.3 }}
              className="bg-slate-50 rounded-2xl p-6 sm:p-8 border border-slate-200 flex flex-col md:flex-row items-center justify-between gap-5 sm:gap-6 text-center md:text-left"
            >
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-[#0C4779] mb-2">IMESA Official Product Catalog & Documentation</h3>
                <p className="text-slate-600 text-xs sm:text-sm max-w-xl">
                  Download the complete technical brochure, dimensional drawings, and installation manual for {product.title}.
                </p>
              </div>
              <button 
                onClick={() => setShowInquiryModal(true)}
                className="bg-[#0C4779] hover:bg-[#083256] text-white py-3 sm:py-3.5 px-6 rounded-xl font-bold text-xs sm:text-sm tracking-wide shadow-md transition-colors flex items-center justify-center gap-2 shrink-0 w-full sm:w-auto"
              >
                <Download className="w-4 h-4" /> Download Official Datasheet
              </button>
            </motion.div>
          )}

        </div>
      </section>

      {/* ── 7. Bottom Cross-Navigation Tiles ── */}
      <section className="w-full py-12 sm:py-16 bg-[#f8f9fa] border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
            
            {/* Tile 1: Contact Us */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm flex flex-col justify-between hover:border-[#0C4779] transition-colors">
              <div>
                <span className="text-[10px] sm:text-xs font-bold text-slate-400 uppercase tracking-widest block mb-1.5 sm:mb-2">INQUIRY</span>
                <h4 className="text-lg sm:text-xl font-bold text-[#0C4779] mb-2 sm:mb-3">Do you like these products?</h4>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-5 sm:mb-6">
                  Get in touch with our technical sales engineers for pricing, sizing, and project consultancy.
                </p>
              </div>
              <button 
                onClick={() => setShowInquiryModal(true)}
                className="inline-flex items-center gap-1.5 text-[#0C4779] font-bold text-xs sm:text-sm hover:underline"
              >
                Contact us <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            {/* Tile 2: Back to Products */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm flex flex-col justify-between hover:border-[#0C4779] transition-colors">
              <div>
                <span className="text-[10px] sm:text-xs font-bold text-slate-400 uppercase tracking-widest block mb-1.5 sm:mb-2">CATALOG</span>
                <h4 className="text-lg sm:text-xl font-bold text-[#0C4779] mb-2 sm:mb-3">Back to the products</h4>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-5 sm:mb-6">
                  Discover the entire range of IMESA commercial and industrial laundry equipment.
                </p>
              </div>
              <Link 
                to="/brands/imesa" 
                className="inline-flex items-center gap-1.5 text-[#0C4779] font-bold text-xs sm:text-sm hover:underline"
              >
                All products <ChevronRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Tile 3: Back to Category */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm flex flex-col justify-between hover:border-[#0C4779] transition-colors">
              <div>
                <span className="text-[10px] sm:text-xs font-bold text-slate-400 uppercase tracking-widest block mb-1.5 sm:mb-2">CATEGORY</span>
                <h4 className="text-lg sm:text-xl font-bold text-[#0C4779] mb-2 sm:mb-3">Back to {product.category}</h4>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-5 sm:mb-6">
                  Explore other models and capacity series in the {product.category} collection.
                </p>
              </div>
              <Link 
                to={`/brands/imesa/${product.categorySlug || 'washing-machines'}`}
                className="inline-flex items-center gap-1.5 text-[#0C4779] font-bold text-xs sm:text-sm hover:underline"
              >
                {product.category} <ChevronRight className="w-4 h-4" />
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* ── 8. Request Information Modal ── */}
      <AnimatePresence>
        {showInquiryModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white rounded-3xl p-6 sm:p-8 max-w-lg w-full shadow-2xl border border-slate-200 relative max-h-[90vh] overflow-y-auto"
            >
              <button 
                onClick={() => setShowInquiryModal(false)}
                className="absolute top-5 right-5 text-slate-400 hover:text-slate-700 text-2xl font-bold w-8 h-8 flex items-center justify-center rounded-full bg-slate-100"
              >
                &times;
              </button>

              <h3 className="text-xl sm:text-2xl font-bold text-[#0C4779] mb-1.5">Request Information</h3>
              <p className="text-xs sm:text-sm text-slate-500 mb-5">
                Inquire about <strong>{product.title}</strong> ({product.seriesName}).
              </p>

              {inquirySubmitted ? (
                <div className="py-8 text-center text-emerald-600 font-bold flex flex-col items-center gap-2">
                  <CheckCircle2 className="w-12 h-12 text-emerald-500" />
                  <span className="text-sm sm:text-base">Thank you! Your inquiry has been sent to our technical team.</span>
                </div>
              ) : (
                <form onSubmit={handleInquirySubmit} className="space-y-3.5 sm:space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-600 uppercase mb-1">Your Name *</label>
                    <input required type="text" className="w-full border border-slate-200 rounded-lg px-3.5 sm:px-4 py-2 sm:py-2.5 text-xs sm:text-sm focus:outline-none focus:border-[#0C4779]" placeholder="John Doe" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-600 uppercase mb-1">Business Email *</label>
                    <input required type="email" className="w-full border border-slate-200 rounded-lg px-3.5 sm:px-4 py-2 sm:py-2.5 text-xs sm:text-sm focus:outline-none focus:border-[#0C4779]" placeholder="john@company.com" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-600 uppercase mb-1">Phone Number</label>
                    <input type="tel" className="w-full border border-slate-200 rounded-lg px-3.5 sm:px-4 py-2 sm:py-2.5 text-xs sm:text-sm focus:outline-none focus:border-[#0C4779]" placeholder="+91 ..." />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-600 uppercase mb-1">Message / Requirements</label>
                    <textarea rows="3" defaultValue={`Hello, please provide pricing, datasheet, and delivery timeline for ${product.title}.`} className="w-full border border-slate-200 rounded-lg px-3.5 sm:px-4 py-2 sm:py-2.5 text-xs sm:text-sm focus:outline-none focus:border-[#0C4779]" />
                  </div>
                  <button type="submit" className="w-full bg-[#0C4779] hover:bg-[#083256] text-white py-3 sm:py-3.5 rounded-lg font-bold text-xs sm:text-sm tracking-wide shadow-md transition-colors">
                    Send Technical Request
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
}
