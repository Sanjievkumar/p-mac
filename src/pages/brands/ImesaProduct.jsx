import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowLeft, ChevronRight, CheckCircle2, ShieldCheck, 
  FileText, Download, Mail, ExternalLink, Sparkles,
  Info, Cpu, Layers, Wind, Droplets, ArrowRight,
  Maximize2, Tablet, Wifi, RotateCw, Flame, Thermometer, Search
} from 'lucide-react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

function getFeatureIcon(title = '') {
  const t = title.toLowerCase();
  if (t.includes('touch') || t.includes('im11') || t.includes('im10') || t.includes('screen')) return <Tablet className="w-6 h-6 sm:w-7 sm:h-7 text-[#0d447b]" />;
  if (t.includes('wi-fi') || t.includes('iot') || t.includes('connect') || t.includes('app')) return <Wifi className="w-6 h-6 sm:w-7 sm:h-7 text-[#0d447b]" />;
  if (t.includes('inox') || t.includes('steel') || t.includes('drum')) return <ShieldCheck className="w-6 h-6 sm:w-7 sm:h-7 text-[#0d447b]" />;
  if (t.includes('g-factor') || t.includes('spin') || t.includes('rotation') || t.includes('inverter') || t.includes('alternating')) return <RotateCw className="w-6 h-6 sm:w-7 sm:h-7 text-[#0d447b]" />;
  if (t.includes('d-flow') || t.includes('flow') || t.includes('air') || t.includes('cool')) return <Wind className="w-6 h-6 sm:w-7 sm:h-7 text-[#0d447b]" />;
  if (t.includes('chest') || t.includes('iron') || t.includes('roller') || t.includes('torsion')) return <Layers className="w-6 h-6 sm:w-7 sm:h-7 text-[#0d447b]" />;
  if (t.includes('heat') || t.includes('steam') || t.includes('gas') || t.includes('temperature')) return <Flame className="w-6 h-6 sm:w-7 sm:h-7 text-[#0d447b]" />;
  return <Sparkles className="w-6 h-6 sm:w-7 sm:h-7 text-[#0d447b]" />;
}

// Official IMESA Products Database (Extracted directly from imesa.it)
import { IMESA_OFFICIAL_PRODUCTS, resolveAsset } from './imesaProductData';

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
  const currentImg = activeImage ? resolveAsset(activeImage) : product.primaryImg;

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
    <div className="min-h-screen bg-white font-inter text-slate-800 flex flex-col">
      <Navbar />

      {/* ── 1. Official IMESA Breadcrumbs Bar with Standard Back Button ── */}
      <nav aria-label="Breadcrumb" className="w-full bg-[#f8f9fa] border-b border-slate-200/80 pt-20 sm:pt-24 pb-3 sm:pb-4 px-4 sm:px-6 lg:px-16 text-[14px] sm:text-[15px] lg:text-[16px] leading-[29px] tracking-[0.34px] text-[#767676] font-normal font-inter">
        <div className="max-w-7xl mx-auto flex items-center justify-between flex-wrap gap-3 sm:gap-4">
          <div className="flex items-center flex-wrap gap-1.5 sm:gap-2">
            <Link to="/" className="hover:text-[#0d447b] transition-colors">Home</Link>
            <span className="text-slate-300">/</span>
            <Link to="/brands" className="hover:text-[#0d447b] transition-colors">Brands</Link>
            <span className="text-slate-300">/</span>
            <Link to="/brands/imesa" className="hover:text-[#0d447b] transition-colors">IMESA</Link>
            <span className="text-slate-300">/</span>
            <Link to={`/brands/imesa/${product.categorySlug || 'washing-machines'}`} className="hover:text-[#0d447b] transition-colors">
              {product.category}
            </Link>
            <span className="text-slate-300">/</span>
            <span className="text-[#767676] hidden sm:inline">{product.subCategory}</span>
            <span className="text-slate-300 hidden sm:inline">/</span>
            <span className="text-[#0d447b] font-medium truncate max-w-[200px] sm:max-w-xs md:max-w-md">{product.title}</span>
          </div>

          {/* Standard Promac Back Button */}
          <Link 
            to={`/brands/imesa/${product.categorySlug || 'washing-machines'}`} 
            className="inline-flex items-center gap-2 text-slate-500 hover:text-[#0d447b] transition-colors font-medium text-xs sm:text-sm group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>Back to {product.category || 'Category'}</span>
          </Link>
        </div>
      </nav>

      {/* ── 1.1 Official IMESA Series Capacity Switcher (Mobile Swipe Friendly) ── */}
      {product.seriesSiblings && product.seriesSiblings.length > 1 && (
        <div className="w-full bg-[#f1f5f9]/70 border-b border-slate-200/80 py-2.5 sm:py-3.5 px-4 sm:px-6 lg:px-16">
          <div className="max-w-7xl mx-auto flex items-center justify-between flex-wrap gap-2">
            <span className="text-xs sm:text-sm font-bold text-[#0d447b] uppercase tracking-wider shrink-0 flex items-center gap-2">
              Available Models:
            </span>
            <div className="flex items-center gap-2.5 overflow-x-auto pb-1 sm:pb-0 scrollbar-none w-full sm:w-auto">
              {product.seriesSiblings.map(s => {
                const isCurrent = resolvedKey === s.id;
                return (
                  <Link
                    key={s.id}
                    to={`/brands/imesa/${s.id}`}
                    className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-bold tracking-wide transition-all shrink-0 ${
                      isCurrent
                        ? 'bg-[#0d447b] text-white shadow-md shadow-[#0d447b]/20'
                        : 'bg-white text-slate-700 hover:text-[#0d447b] border border-slate-200 hover:border-[#0d447b]/40'
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

      {/* ── 2. Hero / Product Presentation Section (Exact 1:1 Official IMESA Layout) ── */}
      <section className="w-full py-8 sm:py-12 lg:py-14 bg-white border-b border-slate-100">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-14 items-start">
            
            {/* Left Column: Vertical Thumbnails Strip + Floating Machine Image */}
            <div className="lg:col-span-5 xl:col-span-5 min-w-0 flex flex-col sm:flex-row gap-4 sm:gap-6 items-start w-full">
              
              {/* Vertical Gallery Thumbnails Strip (matching official IMESA site) */}
              {product.galleryImages && product.galleryImages.length > 0 && (
                <div className="flex sm:flex-col gap-2.5 overflow-x-auto sm:overflow-y-auto sm:max-h-[500px] w-full sm:w-auto shrink-0 scrollbar-none order-2 sm:order-1 py-1">
                  {product.galleryImages.map((imgUrl, idx) => {
                    const resolvedThumb = resolveAsset(imgUrl);
                    const isSelected = activeImage ? activeImage === imgUrl : (currentImg === resolvedThumb || idx === 0);
                    return (
                      <button 
                        key={idx}
                        onClick={() => setActiveImage(imgUrl)}
                        className={`w-16 h-12 sm:w-[72px] sm:h-[54px] rounded border p-1 bg-white transition-all shrink-0 flex items-center justify-center cursor-pointer ${
                          isSelected ? 'border-[#0d447b] ring-1.5 ring-[#0d447b] shadow-xs' : 'border-slate-200 hover:border-slate-400'
                        }`}
                        title={`View image ${idx + 1}`}
                      >
                        <img 
                          src={resolvedThumb} 
                          alt={`Thumbnail ${idx + 1}`} 
                          className="w-full h-full max-w-full max-h-full object-contain pointer-events-none" 
                          referrerPolicy="no-referrer"
                          onError={(e) => {
                            e.currentTarget.parentElement.style.display = 'none';
                          }}
                        />
                      </button>
                    );
                  })}
                </div>
              )}

              {/* Main Machine Image floating cleanly on white background */}
              <div className="flex-1 w-full flex items-center justify-center relative min-h-[300px] sm:min-h-[380px] lg:min-h-[440px] order-1 sm:order-2 group">
                <motion.img 
                  key={currentImg}
                  initial={{ opacity: 0.85 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.25 }}
                  src={currentImg} 
                  alt={product.title}
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    e.currentTarget.src = product.primaryImg;
                  }}
                  className="w-auto max-w-full max-h-[340px] sm:max-h-[420px] lg:max-h-[480px] object-contain drop-shadow-sm mx-auto"
                />

                {/* Subtle zoom icon matching official IMESA product image */}
                <button 
                  onClick={() => window.open(currentImg, '_blank')}
                  className="absolute top-2 right-2 p-2 rounded-full text-slate-400 hover:text-[#0d447b] hover:bg-slate-50 transition-all cursor-pointer opacity-80 hover:opacity-100"
                  title="Enlarge image"
                >
                  <Search className="w-5 h-5 stroke-[1.75]" />
                </button>
              </div>

            </div>

            {/* Right Column: Title, Description, and Actions */}
            <div className="lg:col-span-7 xl:col-span-7 min-w-0 flex flex-col justify-start w-full">
              
              {/* Official Product Title in #0d447b - exact official IMESA font-size: 25px, line-height: 38px, letter-spacing: 1.25px, weight: 700 */}
              <h1 
                className="text-[22px] sm:text-[24px] lg:text-[25px] font-bold text-[#0d447b] leading-[34px] sm:leading-[38px] tracking-[1.25px] mb-5 sm:mb-6 font-inter"
                dangerouslySetInnerHTML={{ __html: product.titleFormatted || product.title }}
              />

              {/* Description Paragraphs in #0d447b - exact official IMESA font-size: 17px, line-height: 29px, letter-spacing: 0.34px, weight: 400 */}
              <div className="space-y-4 mb-7 sm:mb-8 text-[#0d447b] text-[15px] sm:text-[16px] lg:text-[17px] leading-[27px] sm:leading-[29px] tracking-[0.34px] font-normal font-inter">
                {product.shortDesc && product.shortDesc.map((para, idx) => (
                  <p key={idx} dangerouslySetInnerHTML={{ __html: para }} />
                ))}
              </div>

              {/* Action Buttons (Request Info / View Technical Specs) */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-5 border-t border-slate-100">
                <button 
                  onClick={() => setShowInquiryModal(true)}
                  className="bg-[#0d447b] hover:bg-[#093560] text-white py-3.5 px-7 rounded-xl font-bold text-sm tracking-wide shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2.5 cursor-pointer"
                >
                  <Mail className="w-5 h-5" />
                  REQUEST INFORMATION
                </button>
                <button 
                  onClick={() => {
                    const el = document.getElementById('technical-tabs');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                    setActiveTab('specs');
                  }}
                  className="bg-white hover:bg-slate-50 text-[#0d447b] border border-slate-300 hover:border-[#0d447b] py-3.5 px-6 rounded-xl font-bold text-sm tracking-wide transition-all flex items-center justify-center gap-2.5 cursor-pointer"
                >
                  <FileText className="w-5 h-5" />
                  TECHNICAL SPECIFICATIONS
                </button>
              </div>

              {/* Direct Category Link */}
              <div className="mt-7 pt-4 border-t border-slate-100 flex items-center justify-between text-xs sm:text-sm text-slate-500">
                <span className="font-medium">Official IMESA Factory Warranty</span>
                <Link to={`/brands/imesa/${product.categorySlug || 'washing-machines'}`} className="text-[#0d447b] hover:underline font-bold flex items-center gap-1.5 text-sm">
                  Back to {product.category} <ChevronRight className="w-4 h-4" />
                </Link>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* ── 3. Key Features Icon Boxes (Direct clone of imesa.it signature iconbox row) ── */}
      {product.iconBoxes && product.iconBoxes.length > 0 && (
        <section className="w-full py-14 sm:py-18 lg:py-20 bg-[#f8f9fa] border-b border-slate-200/80">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
            <div className="text-center mb-10 sm:mb-12">
              <span className="text-[#0d447b] text-[13px] sm:text-[14px] leading-[21px] tracking-[0.2em] font-bold uppercase block mb-2 sm:mb-3 font-inter">
                EXCELLENCE IN DESIGN
              </span>
              <h2 className="text-[22px] sm:text-[24px] lg:text-[25px] font-bold text-[#0d447b] leading-[34px] sm:leading-[38px] tracking-[0.5px] font-inter">
                Key Machine Features
              </h2>
            </div>

            {/* Responsive Grid matching imesa.it layout - exact official specs: 14px, 21px, 0.7px tracking, #0d447b */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
              {product.iconBoxes.map((box, idx) => {
                const resolvedIcon = resolveAsset(box.iconUrl);
                return (
                  <div 
                    key={idx}
                    className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200/80 shadow-xs hover:shadow-md transition-all duration-200 flex flex-col items-center text-center justify-between group min-h-[220px] sm:min-h-[240px]"
                  >
                    <div className="w-16 h-16 sm:w-18 sm:h-18 rounded-2xl bg-[#0d447b]/8 flex items-center justify-center mb-4 sm:mb-5 group-hover:scale-105 transition-transform relative shrink-0">
                      {resolvedIcon ? (
                        <img 
                          src={resolvedIcon} 
                          alt={box.title} 
                          referrerPolicy="no-referrer"
                          className="w-10 h-10 sm:w-12 sm:h-12 object-contain drop-shadow-xs" 
                          onError={(e) => {
                            e.currentTarget.style.display = 'none';
                            const fallback = e.currentTarget.parentElement.querySelector('.icon-fallback');
                            if (fallback) fallback.style.display = 'flex';
                          }}
                        />
                      ) : null}
                      <div 
                        className="icon-fallback items-center justify-center" 
                        style={{ display: resolvedIcon ? 'none' : 'flex' }}
                      >
                        {getFeatureIcon(box.title)}
                      </div>
                    </div>
                    {/* Exact official IMESA font-size: 14px, line-height: 21px, letter-spacing: 0.7px, weight: 300 / normal, color: #0D447B */}
                    <h3 className="text-[14px] leading-[21px] tracking-[0.7px] font-light sm:font-normal text-[#0d447b] font-inter text-center flex-1 flex items-center justify-center">
                      {box.title}
                    </h3>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* ── 4. Key Highlights & Operational Advantages (Exact 1:1 match to official IMESA layout & inspector specs) ── */}
      {product.highlights && product.highlights.length > 0 && (
        <section className="w-full py-14 sm:py-18 lg:py-20 bg-white border-b border-slate-100">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-16 items-center">
              
              {/* Left Column: Machine Angle Photography matching official site */}
              <div className="lg:col-span-5 flex items-center justify-center">
                <img 
                  src={resolveAsset(product.galleryImages?.[1] || product.galleryImages?.[0] || product.primaryImg)} 
                  alt={product.title}
                  className="max-h-[340px] sm:max-h-[400px] lg:max-h-[440px] w-auto max-w-full object-contain drop-shadow-sm"
                  onError={(e) => {
                    e.currentTarget.src = product.primaryImg;
                  }}
                />
              </div>

              {/* Right Column: Section Header + Bulleted List with exact official typography (17px / 29px / 0.34px / #0d447b) */}
              <div className="lg:col-span-7 flex flex-col justify-center">
                <span className="text-[#0d447b] text-[13px] sm:text-[14px] leading-[21px] tracking-[0.2em] font-bold uppercase block mb-2 sm:mb-3 font-inter">
                  OPERATIONAL ADVANTAGES
                </span>
                <h2 className="text-[22px] sm:text-[24px] lg:text-[25px] font-bold text-[#0d447b] leading-[34px] sm:leading-[38px] tracking-[0.5px] font-inter mb-6 sm:mb-7">
                  Technological Advantages
                </h2>

                <ul className="space-y-3.5 sm:space-y-4">
                  {product.highlights.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3.5 text-[15px] sm:text-[16px] lg:text-[17px] leading-[27px] sm:leading-[29px] tracking-[0.34px] text-[#0d447b] font-normal font-inter">
                      <span className="w-2 h-2 rounded-full bg-[#0d447b] shrink-0 mt-2.5" />
                      <span className="flex-1 [&>strong]:font-bold [&>strong]:text-[#0d447b]" dangerouslySetInnerHTML={{ __html: item }} />
                    </li>
                  ))}
                </ul>
              </div>

            </div>

          </div>
        </section>
      )}

      {/* ── 5. Technology Spotlight (IM11, IMConnect, etc.) ── */}
      {product.techCards && product.techCards.length > 0 && (
        <section className="w-full py-14 sm:py-18 lg:py-20 bg-slate-50 border-b border-slate-200">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
            <div className="text-center mb-10 sm:mb-12">
              <span className="text-[#0d447b] text-[13px] sm:text-[14px] leading-[21px] tracking-[0.2em] font-bold uppercase block mb-2 sm:mb-3 font-inter">
                CONNECTED INNOVATION
              </span>
              <h2 className="text-[22px] sm:text-[24px] lg:text-[25px] font-bold text-[#0d447b] leading-[34px] sm:leading-[38px] tracking-[0.5px] font-inter">
                Smart Systems & IoT Telemetry
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
              {product.techCards.map((card, idx) => (
                <div key={idx} className="bg-white rounded-3xl p-7 sm:p-9 border border-slate-200/90 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
                  <div>
                    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-[#0d447b]/10 flex items-center justify-center text-[#0d447b] mb-5 sm:mb-6">
                      <Cpu className="w-7 h-7 sm:w-8 sm:h-8" />
                    </div>
                    <h3 className="text-[20px] sm:text-[22px] font-bold text-[#0d447b] leading-[30px] font-inter mb-3">{card.title}</h3>
                    <p className="text-[#0d447b]/90 text-[15px] sm:text-[16px] lg:text-[17px] leading-[27px] sm:leading-[29px] tracking-[0.34px] font-inter font-normal mb-6 sm:mb-8">{card.text}</p>
                  </div>
                  <Link 
                    to="/brands/imesa" 
                    className="inline-flex items-center gap-2 text-sm sm:text-base font-bold text-[#0d447b] uppercase tracking-wider hover:underline font-inter"
                  >
                    Discover Connectivity <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── 6. Official IMESA Tabbed Section (Learn More / Technical Data / Download Area) ── */}
      <section id="technical-tabs" className="w-full py-14 sm:py-18 lg:py-20 bg-white flex-1">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          
          {/* Tab Selection Navigation (Horizontal Swipe on Small Devices) */}
          <div className="flex border-b border-slate-200 mb-10 sm:mb-12 overflow-x-auto gap-3 sm:gap-4 scrollbar-none pb-1">
            <button
              onClick={() => setActiveTab('learnMore')}
              className={`pb-3.5 sm:pb-4 px-5 sm:px-8 text-[15px] sm:text-[16px] lg:text-[17px] leading-[29px] tracking-[0.34px] font-bold whitespace-nowrap border-b-2 transition-all shrink-0 font-inter cursor-pointer ${
                activeTab === 'learnMore'
                  ? 'border-[#0d447b] text-[#0d447b]'
                  : 'border-transparent text-slate-500 hover:text-slate-800'
              }`}
            >
              Learn More
            </button>
            <button
              onClick={() => setActiveTab('specs')}
              className={`pb-3.5 sm:pb-4 px-5 sm:px-8 text-[15px] sm:text-[16px] lg:text-[17px] leading-[29px] tracking-[0.34px] font-bold whitespace-nowrap border-b-2 transition-all shrink-0 font-inter cursor-pointer ${
                activeTab === 'specs'
                  ? 'border-[#0d447b] text-[#0d447b]'
                  : 'border-transparent text-slate-500 hover:text-slate-800'
              }`}
            >
              Technical Data
            </button>
            <button
              onClick={() => setActiveTab('downloads')}
              className={`pb-3.5 sm:pb-4 px-5 sm:px-8 text-[15px] sm:text-[16px] lg:text-[17px] leading-[29px] tracking-[0.34px] font-bold whitespace-nowrap border-b-2 transition-all shrink-0 font-inter cursor-pointer ${
                activeTab === 'downloads'
                  ? 'border-[#0d447b] text-[#0d447b]'
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
              className="space-y-6"
            >
              <h3 className="text-[22px] sm:text-[24px] lg:text-[25px] font-bold text-[#0d447b] leading-[34px] sm:leading-[38px] tracking-[0.5px] font-inter mb-6 sm:mb-8">
                Detailed Design & Engineering Features
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                {product.learnMoreTable && product.learnMoreTable.map((item, idx) => (
                  <div key={idx} className="p-5 sm:p-6 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-start gap-3.5 sm:gap-4 shadow-xs hover:border-[#0d447b]/40 transition-colors">
                    <CheckCircle2 className="w-5 h-5 text-[#0d447b] shrink-0 mt-0.5" />
                    <p className="text-[15px] sm:text-[16px] lg:text-[17px] leading-[27px] sm:leading-[29px] tracking-[0.34px] text-[#0d447b] font-normal font-inter">
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
              <div className="flex items-center justify-between mb-6 sm:mb-8 flex-wrap gap-2">
                <h3 className="text-[22px] sm:text-[24px] lg:text-[25px] font-bold text-[#0d447b] leading-[34px] sm:leading-[38px] tracking-[0.5px] font-inter">
                  Technical Specifications
                </h3>
                <span className="text-xs sm:text-sm text-slate-500 bg-slate-100 px-3.5 py-1.5 rounded-full font-medium">
                  Swipe horizontally on small screens ⇄
                </span>
              </div>

              {product.specsTable && product.specsTable.length > 0 ? (
                <div className="bg-white rounded-2xl shadow-xs border border-slate-200 overflow-hidden font-inter">
                  <div className="overflow-x-auto scrollbar-thin">
                    <table className="w-full text-left border-collapse min-w-[700px] sm:min-w-[800px]">
                      {/* Header Row */}
                      <thead>
                        <tr className="bg-[#0d447b] text-white">
                          {product.specsTable[0].map((header, colIdx) => (
                            <th 
                              key={colIdx} 
                              className={`py-4 sm:py-5 px-5 sm:px-7 text-xs sm:text-sm md:text-[15px] font-bold tracking-wide uppercase ${
                                colIdx === 0 ? 'bg-[#093560] sticky left-0 z-10' : ''
                              }`}
                            >
                              {header}
                            </th>
                          ))}
                        </tr>
                      </thead>

                      {/* Body Rows */}
                      <tbody className="divide-y divide-slate-100 text-xs sm:text-sm md:text-[15px]">
                        {product.specsTable.slice(1).map((row, rowIdx) => (
                          <tr key={rowIdx} className="hover:bg-slate-50 transition-colors">
                            {row.map((cell, cellIdx) => (
                              <td 
                                key={cellIdx} 
                                className={`py-4 sm:py-4.5 px-5 sm:px-7 text-slate-700 leading-[24px] ${
                                  cellIdx === 0 
                                    ? 'font-bold text-[#0d447b] bg-slate-50/90 sticky left-0 z-10 shadow-[2px_0_5px_-2px_rgba(0,0,0,0.06)]' 
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
                <div className="p-10 text-center text-[#0d447b] bg-slate-50 rounded-2xl border border-slate-200 text-base sm:text-lg font-inter">
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
              className="bg-slate-50 rounded-3xl p-8 sm:p-12 border border-slate-200 flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8 text-center md:text-left"
            >
              <div>
                <h3 className="text-[22px] sm:text-[24px] lg:text-[25px] font-bold text-[#0d447b] leading-[34px] sm:leading-[38px] tracking-[0.5px] font-inter mb-3">
                  IMESA Official Product Catalog & Documentation
                </h3>
                <p className="text-[#0d447b]/90 text-[15px] sm:text-[16px] lg:text-[17px] leading-[27px] sm:leading-[29px] tracking-[0.34px] font-inter max-w-2xl">
                  Download the complete technical brochure, dimensional drawings, and installation manual for {product.title}.
                </p>
              </div>
              <button 
                onClick={() => setShowInquiryModal(true)}
                className="bg-[#0d447b] hover:bg-[#093560] text-white py-4 px-8 sm:px-10 rounded-xl font-bold text-sm sm:text-base tracking-wide shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2.5 shrink-0 w-full sm:w-auto cursor-pointer"
              >
                <Download className="w-5 h-5" /> Download Official Datasheet
              </button>
            </motion.div>
          )}

        </div>
      </section>

      {/* ── 7. Bottom Cross-Navigation Tiles ── */}
      <section className="w-full py-16 sm:py-20 bg-[#f8f9fa] border-t border-slate-200">
        <div className="max-w-[1536px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            
            {/* Tile 1: Contact Us */}
            <div className="bg-white rounded-3xl p-7 sm:p-9 border border-slate-200 shadow-sm flex flex-col justify-between hover:border-[#0d447b] hover:shadow-md transition-all">
              <div>
                <span className="text-xs sm:text-sm font-bold text-slate-400 uppercase tracking-widest block mb-2 sm:mb-3">INQUIRY</span>
                <h4 className="text-xl sm:text-2xl font-bold text-[#0d447b] mb-3 sm:mb-4">Do you like these products?</h4>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6 sm:mb-8">
                  Get in touch with our technical sales engineers for pricing, sizing, and project consultancy.
                </p>
              </div>
              <button 
                onClick={() => setShowInquiryModal(true)}
                className="inline-flex items-center gap-2 text-[#0d447b] font-bold text-sm sm:text-base hover:underline"
              >
                Contact us <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            {/* Tile 2: Back to Products */}
            <div className="bg-white rounded-3xl p-7 sm:p-9 border border-slate-200 shadow-sm flex flex-col justify-between hover:border-[#0d447b] hover:shadow-md transition-all">
              <div>
                <span className="text-xs sm:text-sm font-bold text-slate-400 uppercase tracking-widest block mb-2 sm:mb-3">CATALOG</span>
                <h4 className="text-xl sm:text-2xl font-bold text-[#0d447b] mb-3 sm:mb-4">Back to the products</h4>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6 sm:mb-8">
                  Discover the entire range of IMESA commercial and industrial laundry equipment.
                </p>
              </div>
              <Link 
                to="/brands/imesa" 
                className="inline-flex items-center gap-2 text-[#0d447b] font-bold text-sm sm:text-base hover:underline"
              >
                All products <ChevronRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Tile 3: Back to Category */}
            <div className="bg-white rounded-3xl p-7 sm:p-9 border border-slate-200 shadow-sm flex flex-col justify-between hover:border-[#0d447b] hover:shadow-md transition-all">
              <div>
                <span className="text-[10px] sm:text-xs font-bold text-slate-400 uppercase tracking-widest block mb-1.5 sm:mb-2">CATEGORY</span>
                <h4 className="text-lg sm:text-xl font-bold text-[#0d447b] mb-2 sm:mb-3">Back to {product.category}</h4>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-5 sm:mb-6">
                  Explore other models and capacity series in the {product.category} collection.
                </p>
              </div>
              <Link 
                to={`/brands/imesa/${product.categorySlug || 'washing-machines'}`}
                className="inline-flex items-center gap-1.5 text-[#0d447b] font-bold text-xs sm:text-sm hover:underline"
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

              <h3 className="text-xl sm:text-2xl font-bold text-[#0d447b] mb-1.5">Request Information</h3>
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
                    <input required type="text" className="w-full border border-slate-200 rounded-lg px-3.5 sm:px-4 py-2 sm:py-2.5 text-xs sm:text-sm focus:outline-none focus:border-[#0d447b]" placeholder="John Doe" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-600 uppercase mb-1">Business Email *</label>
                    <input required type="email" className="w-full border border-slate-200 rounded-lg px-3.5 sm:px-4 py-2 sm:py-2.5 text-xs sm:text-sm focus:outline-none focus:border-[#0d447b]" placeholder="john@company.com" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-600 uppercase mb-1">Phone Number</label>
                    <input type="tel" className="w-full border border-slate-200 rounded-lg px-3.5 sm:px-4 py-2 sm:py-2.5 text-xs sm:text-sm focus:outline-none focus:border-[#0d447b]" placeholder="+91 ..." />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-600 uppercase mb-1">Message / Requirements</label>
                    <textarea rows="3" defaultValue={`Hello, please provide pricing, datasheet, and delivery timeline for ${product.title}.`} className="w-full border border-slate-200 rounded-lg px-3.5 sm:px-4 py-2 sm:py-2.5 text-xs sm:text-sm focus:outline-none focus:border-[#0d447b]" />
                  </div>
                  <button type="submit" className="w-full bg-[#0d447b] hover:bg-[#093560] text-white py-3 sm:py-3.5 rounded-lg font-bold text-xs sm:text-sm tracking-wide shadow-md transition-colors">
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
