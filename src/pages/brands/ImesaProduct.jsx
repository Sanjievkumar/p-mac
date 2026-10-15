import React, { useState, useEffect, useRef } from 'react';
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
  if (t.includes('touch') || t.includes('im11') || t.includes('im10') || t.includes('screen')) return <Tablet className="w-7 h-7 text-[#0D447B]" />;
  if (t.includes('wi-fi') || t.includes('iot') || t.includes('connect') || t.includes('app')) return <Wifi className="w-7 h-7 text-[#0D447B]" />;
  if (t.includes('inox') || t.includes('steel') || t.includes('drum')) return <ShieldCheck className="w-7 h-7 text-[#0D447B]" />;
  if (t.includes('g-factor') || t.includes('spin') || t.includes('rotation') || t.includes('inverter') || t.includes('alternating')) return <RotateCw className="w-7 h-7 text-[#0D447B]" />;
  if (t.includes('d-flow') || t.includes('flow') || t.includes('air') || t.includes('cool')) return <Wind className="w-7 h-7 text-[#0D447B]" />;
  if (t.includes('chest') || t.includes('iron') || t.includes('roller') || t.includes('torsion')) return <Layers className="w-7 h-7 text-[#0D447B]" />;
  if (t.includes('heat') || t.includes('steam') || t.includes('gas') || t.includes('temperature')) return <Flame className="w-7 h-7 text-[#0D447B]" />;
  return <Sparkles className="w-7 h-7 text-[#0D447B]" />;
}


// Official IMESA Products Database (Extracted directly from imesa.it)
import { IMESA_OFFICIAL_PRODUCTS } from './imesaProductData';

// Slug & Route Aliases for 100% backward compatibility
const SLUG_ALIASES = {
  "imesa-washing-machines": "imesa-lm-series",
  "lm-series": "imesa-lm-series",
  "high-spin-industrial-washing-machines": "imesa-lm-series",
  "lm-14-18-23": "imesa-lm-series",
  "d2w-barrier": "imesa-d2w-barrier",
  "hygiene-barrier-washers": "imesa-d2w-barrier",
  "d2w-18-23": "imesa-d2w-barrier",
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
      <nav aria-label="Breadcrumb" className="w-full bg-[#f8f9fa] border-b border-slate-200/80 pt-24 pb-4 px-6 lg:px-16 text-xs text-slate-500 font-medium">
        <div className="max-w-7xl mx-auto flex items-center flex-wrap gap-2">
          <Link to="/" className="hover:text-[#0D447B] transition-colors">Home</Link>
          <span className="text-slate-300">/</span>
          <Link to="/brands/imesa" className="hover:text-[#0D447B] transition-colors">Products</Link>
          <span className="text-slate-300">/</span>
          <Link to="/brands/imesa" className="hover:text-[#0D447B] transition-colors">{product.category}</Link>
          <span className="text-slate-300">/</span>
          <span className="text-slate-500">{product.subCategory}</span>
          <span className="text-slate-300">/</span>
          <span className="text-[#0D447B] font-semibold truncate max-w-xs md:max-w-md">{product.title}</span>
        </div>
      </nav>

      {/* ── 2. Hero / Product Presentation Section (Exact 2-Column IMESA Layout) ── */}
      <section className="w-full py-12 lg:py-16 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left Column: Generous Product Image Showcase + Interactive Gallery Thumbnails */}
            <div className="lg:col-span-6 flex flex-col items-center">
              {/* Main Machine Container */}
              <div className="relative w-full bg-white rounded-2xl p-6 lg:p-10 border border-slate-200/70 shadow-sm flex items-center justify-center min-h-[440px] md:min-h-[540px] overflow-hidden group">
                {/* Official IMESA Badge */}
                <div className="absolute top-4 left-4 z-10 flex items-center gap-2">
                  <span className="bg-[#0D447B] text-white text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
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
                  className="w-full h-auto max-h-[500px] object-contain drop-shadow-xl group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Gallery Thumbnails Strip (if available) */}
              {product.galleryImages && product.galleryImages.length > 0 && (
                <div className="flex items-center gap-3 mt-5 overflow-x-auto w-full py-2">
                  <button 
                    onClick={() => setActiveImage(product.primaryImg)}
                    className={`w-20 h-20 rounded-xl border-2 p-1.5 bg-white overflow-hidden shrink-0 transition-all ${
                      currentImg === product.primaryImg ? 'border-[#0D447B] shadow-md scale-105' : 'border-slate-200 opacity-70 hover:opacity-100 hover:border-slate-300'
                    }`}
                  >
                    <img src={product.primaryImg} alt="Thumbnail Main" className="w-full h-full object-contain" referrerPolicy="no-referrer" />
                  </button>
                  {product.galleryImages.map((imgUrl, idx) => (
                    <button 
                      key={idx}
                      onClick={() => setActiveImage(imgUrl)}
                      className={`w-20 h-20 rounded-xl border-2 p-1.5 bg-white overflow-hidden shrink-0 transition-all ${
                        currentImg === imgUrl ? 'border-[#0D447B] shadow-md scale-105' : 'border-slate-200 opacity-70 hover:opacity-100 hover:border-slate-300'
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
            <div className="lg:col-span-6 flex flex-col">
              {/* Category Eyebrow */}
              <div className="text-xs font-bold text-[#0D447B] uppercase tracking-[0.2em] mb-2">
                {product.subCategory}
              </div>

              {/* Official Product Title in IMESA Navy Blue */}
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0D447B] leading-tight mb-4 tracking-tight">
                {product.title}
              </h1>

              {/* Series Model Label */}
              <div className="inline-block text-slate-500 font-medium text-sm mb-6">
                {product.seriesName}
              </div>

              {/* Official Short Description Bullet Paragraphs */}
              <div className="space-y-4 mb-8 text-slate-700 text-sm md:text-base leading-relaxed border-l-2 border-[#0D447B]/30 pl-4">
                {product.shortDesc && product.shortDesc.map((para, idx) => (
                  <p key={idx} className="leading-relaxed">
                    {para}
                  </p>
                ))}
              </div>

              {/* Action Buttons (Request Info / Download Brochure) */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4 border-t border-slate-100">
                <button 
                  onClick={() => setShowInquiryModal(true)}
                  className="bg-[#0D447B] hover:bg-[#002855] text-white py-3.5 px-8 rounded-lg font-bold text-sm tracking-wide shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2"
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
                  className="bg-white hover:bg-slate-50 text-[#0D447B] border border-slate-300 hover:border-[#0D447B] py-3.5 px-6 rounded-lg font-bold text-sm tracking-wide transition-all flex items-center justify-center gap-2"
                >
                  <FileText className="w-4 h-4" />
                  TECHNICAL SPECIFICATIONS
                </button>
              </div>

              {/* Direct Catalog Link */}
              <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
                <span>Direct Official IMESA Line Distribution</span>
                <Link to="/brands/imesa" className="text-[#0D447B] hover:underline font-semibold flex items-center gap-1">
                  Back to IMESA Catalog <ChevronRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── 3. Key Features Icon Boxes (Direct clone of imesa.it signature iconbox row) ── */}
      {product.iconBoxes && product.iconBoxes.length > 0 && (
        <section className="w-full py-16 bg-[#f8f9fa] border-b border-slate-200/80">
          <div className="max-w-7xl mx-auto px-6 lg:px-16">
            <div className="text-center mb-12">
              <span className="text-[#0D447B] text-xs font-bold tracking-[0.2em] uppercase block mb-2">
                EXCELLENCE IN DESIGN
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-[#0D447B] tracking-tight">
                Key Machine Features
              </h2>
            </div>

            {/* Responsive Grid matching imesa.it 6-column layout */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {product.iconBoxes.map((box, idx) => (
                <div 
                  key={idx}
                  className="bg-white rounded-2xl p-6 border border-slate-200/70 shadow-sm hover:shadow-md transition-shadow flex flex-col items-center text-center justify-between group"
                >
                  <div className="w-16 h-16 rounded-full bg-[#0D447B]/5 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform relative">
                    {box.iconUrl ? (
                      <img 
                        src={box.iconUrl} 
                        alt={box.title} 
                        referrerPolicy="no-referrer"
                        className="w-10 h-10 object-contain drop-shadow-sm" 
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
                  <h3 className="text-xs md:text-sm font-semibold text-[#0D447B] leading-snug flex-1 flex items-center">
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
        <section className="w-full py-16 bg-white border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-6 lg:px-16">
            <div className="max-w-3xl mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-[#0D447B] mb-3">
                Technological Advantages
              </h2>
              <div className="w-16 h-1 bg-[#0D447B] rounded-full mb-4"></div>
              <p className="text-slate-600 text-sm md:text-base">
                Engineered to maximize efficiency, fabric care, and longevity in professional and commercial laundry operations.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
              {product.highlights.map((item, idx) => (
                <div 
                  key={idx}
                  className="flex items-start gap-3.5 p-4 rounded-xl bg-slate-50 border border-slate-100 hover:border-slate-200 transition-colors"
                >
                  <CheckCircle2 className="w-5 h-5 text-[#0D447B] shrink-0 mt-0.5" />
                  <span className="text-sm md:text-base text-slate-700 leading-snug">
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
        <section className="w-full py-16 bg-slate-50 border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-6 lg:px-16">
            <div className="text-center mb-12">
              <span className="text-[#0D447B] text-xs font-bold tracking-[0.2em] uppercase block mb-2">
                CONNECTED INNOVATION
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-[#0D447B]">
                Smart Systems & IoT Telemetry
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {product.techCards.map((card, idx) => (
                <div key={idx} className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm flex flex-col justify-between">
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-[#0D447B]/10 flex items-center justify-center text-[#0D447B] mb-5">
                      <Cpu className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-[#0D447B] mb-3">{card.title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed mb-6">{card.text}</p>
                  </div>
                  <Link 
                    to="/brands/imesa" 
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0D447B] uppercase tracking-wider hover:underline"
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
      <section id="technical-tabs" className="w-full py-16 lg:py-24 bg-white flex-1">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          
          {/* Tab Selection Navigation */}
          <div className="flex border-b border-slate-200 mb-10 overflow-x-auto gap-2">
            <button
              onClick={() => setActiveTab('learnMore')}
              className={`pb-4 px-6 text-sm md:text-base font-bold whitespace-nowrap border-b-2 transition-all ${
                activeTab === 'learnMore'
                  ? 'border-[#0D447B] text-[#0D447B]'
                  : 'border-transparent text-slate-500 hover:text-slate-800'
              }`}
            >
              Learn More
            </button>
            <button
              onClick={() => setActiveTab('specs')}
              className={`pb-4 px-6 text-sm md:text-base font-bold whitespace-nowrap border-b-2 transition-all ${
                activeTab === 'specs'
                  ? 'border-[#0D447B] text-[#0D447B]'
                  : 'border-transparent text-slate-500 hover:text-slate-800'
              }`}
            >
              Technical Data
            </button>
            <button
              onClick={() => setActiveTab('downloads')}
              className={`pb-4 px-6 text-sm md:text-base font-bold whitespace-nowrap border-b-2 transition-all ${
                activeTab === 'downloads'
                  ? 'border-[#0D447B] text-[#0D447B]'
                  : 'border-transparent text-slate-500 hover:text-slate-800'
              }`}
            >
              Download Area
            </button>
          </div>

          {/* Tab 1: Learn More (Features List directly from official first table) */}
          {activeTab === 'learnMore' && (
            <motion.div 
              initial={{ opacity: 0, y: 15 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.3 }}
              className="space-y-4"
            >
              <h3 className="text-xl font-bold text-[#0D447B] mb-6">Detailed Design & Engineering Features</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {product.learnMoreTable && product.learnMoreTable.map((item, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-slate-50 border border-slate-100 flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#0D447B] shrink-0 mt-0.5" />
                    <p className="text-sm text-slate-700 leading-relaxed font-normal">
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
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-[#0D447B]">Technical Specifications</h3>
                <span className="text-xs text-slate-400">Horizontal scroll on small screens</span>
              </div>

              {product.specsTable && product.specsTable.length > 0 ? (
                <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
                  <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse min-w-[650px]">
                      {/* Header Row */}
                      <thead>
                        <tr className="bg-[#0D447B] text-white">
                          {product.specsTable[0].map((header, colIdx) => (
                            <th 
                              key={colIdx} 
                              className={`py-4 px-6 text-sm font-bold tracking-wide uppercase ${
                                colIdx === 0 ? 'bg-[#002855] sticky left-0 z-10' : ''
                              }`}
                            >
                              {header}
                            </th>
                          ))}
                        </tr>
                      </thead>

                      {/* Body Rows */}
                      <tbody className="divide-y divide-slate-100 text-sm">
                        {product.specsTable.slice(1).map((row, rowIdx) => (
                          <tr key={rowIdx} className="hover:bg-slate-50 transition-colors">
                            {row.map((cell, cellIdx) => (
                              <td 
                                key={cellIdx} 
                                className={`py-4 px-6 text-slate-700 ${
                                  cellIdx === 0 
                                    ? 'font-bold text-[#0D447B] bg-slate-50/80 sticky left-0 z-10 shadow-[2px_0_5px_-2px_rgba(0,0,0,0.05)]' 
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
              className="bg-slate-50 rounded-2xl p-8 border border-slate-200 flex flex-col md:flex-row items-center justify-between gap-6"
            >
              <div>
                <h3 className="text-xl font-bold text-[#0D447B] mb-2">IMESA Official Product Catalog & Documentation</h3>
                <p className="text-slate-600 text-sm max-w-xl">
                  Download the complete technical brochure, dimensional drawings, and installation manual for {product.title}.
                </p>
              </div>
              <button 
                onClick={() => setShowInquiryModal(true)}
                className="bg-[#0D447B] hover:bg-[#002855] text-white py-3.5 px-6 rounded-xl font-bold text-sm tracking-wide shadow-md transition-colors flex items-center gap-2 shrink-0"
              >
                <Download className="w-4 h-4" /> Download Official Datasheet
              </button>
            </motion.div>
          )}

        </div>
      </section>

      {/* ── 7. Bottom Cross-Navigation Tiles (Exact Match to imesa.it footer actions) ── */}
      <section className="w-full py-16 bg-[#f8f9fa] border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Tile 1: Contact Us */}
            <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm flex flex-col justify-between hover:border-[#0D447B] transition-colors">
              <div>
                <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block mb-2">INQUIRY</span>
                <h4 className="text-xl font-bold text-[#0D447B] mb-3">Do you like these products?</h4>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  Get in touch with our technical sales engineers for pricing, sizing, and project consultancy.
                </p>
              </div>
              <button 
                onClick={() => setShowInquiryModal(true)}
                className="inline-flex items-center gap-2 text-[#0D447B] font-bold text-sm hover:underline"
              >
                Contact us <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            {/* Tile 2: Back to Products */}
            <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm flex flex-col justify-between hover:border-[#0D447B] transition-colors">
              <div>
                <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block mb-2">CATALOG</span>
                <h4 className="text-xl font-bold text-[#0D447B] mb-3">Back to the products</h4>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  Discover the entire range of IMESA commercial and industrial laundry equipment.
                </p>
              </div>
              <Link 
                to="/brands/imesa" 
                className="inline-flex items-center gap-2 text-[#0D447B] font-bold text-sm hover:underline"
              >
                All products <ChevronRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Tile 3: Back to Category */}
            <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm flex flex-col justify-between hover:border-[#0D447B] transition-colors">
              <div>
                <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block mb-2">CATEGORY</span>
                <h4 className="text-xl font-bold text-[#0D447B] mb-3">Back to {product.category}</h4>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  Explore other models and capacity series in the {product.category} collection.
                </p>
              </div>
              <Link 
                to="/brands/imesa" 
                className="inline-flex items-center gap-2 text-[#0D447B] font-bold text-sm hover:underline"
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
              className="bg-white rounded-3xl p-8 max-w-lg w-full shadow-2xl border border-slate-200 relative"
            >
              <button 
                onClick={() => setShowInquiryModal(false)}
                className="absolute top-6 right-6 text-slate-400 hover:text-slate-700 text-2xl font-bold w-8 h-8 flex items-center justify-center rounded-full bg-slate-100"
              >
                &times;
              </button>

              <h3 className="text-2xl font-bold text-[#0D447B] mb-2">Request Information</h3>
              <p className="text-sm text-slate-500 mb-6">
                Inquire about <strong>{product.title}</strong> ({product.seriesName}).
              </p>

              {inquirySubmitted ? (
                <div className="py-8 text-center text-emerald-600 font-bold flex flex-col items-center gap-2">
                  <CheckCircle2 className="w-12 h-12 text-emerald-500" />
                  <span>Thank you! Your inquiry has been sent to our technical team.</span>
                </div>
              ) : (
                <form onSubmit={handleInquirySubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-600 uppercase mb-1">Your Name *</label>
                    <input required type="text" className="w-full border border-slate-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-[#0D447B]" placeholder="John Doe" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-600 uppercase mb-1">Business Email *</label>
                    <input required type="email" className="w-full border border-slate-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-[#0D447B]" placeholder="john@company.com" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-600 uppercase mb-1">Phone Number</label>
                    <input type="tel" className="w-full border border-slate-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-[#0D447B]" placeholder="+91 ..." />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-600 uppercase mb-1">Message / Requirements</label>
                    <textarea rows="3" defaultValue={`Hello, please provide pricing, datasheet, and delivery timeline for ${product.title}.`} className="w-full border border-slate-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-[#0D447B]" />
                  </div>
                  <button type="submit" className="w-full bg-[#0D447B] hover:bg-[#002855] text-white py-3.5 rounded-lg font-bold text-sm tracking-wide shadow-md transition-colors">
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
