import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  ArrowLeft, ChevronRight, Droplets, Wind, Layers, RefreshCw, 
  HeartHandshake, Factory, Volume2, VolumeX, ShieldCheck, 
  Cpu, Award, Sparkles
} from 'lucide-react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

// Asset Imports
import imesaHeroVideo from '../../assets/brands/imesa-hero.mp4';
import imesaLogo from '../../assets/brands/imesa.png';

// Local Product Machine Images
import lmSeriesImg from '../../assets/brands/imesa/imesa-lm-series.png';
import d2wBarrierImg from '../../assets/brands/imesa/imesa-d2w-barrier.jpg';
import esSmartImg from '../../assets/brands/imesa/imesa-es-smart.png';
import esPremiumImg from '../../assets/brands/imesa/imesa-es-premium.png';
import fiEasyImg from '../../assets/brands/imesa/imesa-fi-easy.jpg';
import fiSmartImg from '../../assets/brands/imesa/imesa-fi-smart.jpg';
import mcaIronerImg from '../../assets/brands/imesa/imesa-mca-ironer.jpg';
import mcmIronerImg from '../../assets/brands/imesa/imesa-mcm-ironer.jpg';

// 4 Official IMESA Categories & 8 Products directly from imesa.it
const IMESA_CATEGORIES = [
  { id: 'all', name: 'All Products' },
  { id: 'washing-machines', name: 'Washing Machines' },
  { id: 'dryers', name: 'Dryers' },
  { id: 'flatwork-ironers', name: 'Flatwork Ironers' },
  { id: 'drying-ironers', name: 'Drying Ironers' }
];

const PRODUCTS = [
  // ── 1. Washing Machines (https://imesa.it/en/washing-machines/) ──
  {
    id: 'imesa-lm-series',
    category: 'washing-machines',
    categoryName: 'Washing Machines',
    name: 'HIGH SPIN INDUSTRIAL WASHING MACHINES',
    series: 'LM Series (8 - 125 kg)',
    desc: 'Freestanding high spin industrial washing machines with IM11 7" touch screen computer, G-Factor up to 400 G, and Wet Cleaning compatibility.',
    img: lmSeriesImg,
    badge: 'High Spin 400 G',
    icon: Droplets
  },
  {
    id: 'imesa-d2w-barrier',
    category: 'washing-machines',
    categoryName: 'Washing Machines',
    name: 'HYGIENE BARRIER WASHERS',
    series: 'D2W Series (18 - 55 kg)',
    desc: 'Pass-through aseptic barrier washers with opposed dual-door system designed to eliminate contamination risks according to EN 14065 (RABC).',
    img: d2wBarrierImg,
    badge: 'EN 14065 / RABC',
    icon: ShieldCheck
  },

  // ── 2. Dryers (https://imesa.it/en/dryers/) ──
  {
    id: 'imesa-es-smart',
    category: 'dryers',
    categoryName: 'Dryers',
    name: 'ES SMART LINE TUMBLE DRYERS',
    series: 'ES Smart Line (11 - 36 kg)',
    desc: 'Commercial tumble dryers featuring the patented D-FLOW axial airflow system, standard reversing drum rotation, and IM10 touchscreen computer.',
    img: esSmartImg,
    badge: 'D-FLOW System',
    icon: Wind
  },
  {
    id: 'imesa-es-premium',
    category: 'dryers',
    categoryName: 'Dryers',
    name: 'ES PREMIUM LINE TUMBLE DRYERS',
    series: 'ES Premium Line (11 - 75 kg)',
    desc: 'Top-of-the-range industrial tumble dryers with Dual Power staged heating, residual humidity control, DSC/FSC speed control, and capacities up to 75 kg.',
    img: esPremiumImg,
    badge: 'Up to 75 kg',
    icon: Sparkles
  },

  // ── 3. Flatwork Ironers (https://imesa.it/en/flatwork-ironers-easy-and-smart-fi/) ──
  {
    id: 'imesa-fi-easy',
    category: 'flatwork-ironers',
    categoryName: 'Flatwork Ironers',
    name: 'FI EASY LINE FLATWORK IRONERS',
    series: 'FI EASY Line (Ø 250 - 330 mm)',
    desc: 'Simple, robust flatwork ironer with digital thermostat, uniform pressure mechanical torsion bar, and ergonomic 930 mm work height.',
    img: fiEasyImg,
    badge: 'Torsion Bar',
    icon: Layers
  },
  {
    id: 'imesa-fi-smart',
    category: 'flatwork-ironers',
    categoryName: 'Flatwork Ironers',
    name: 'FI SMART LINE FLATWORK IRONERS',
    series: 'FI SMART Line (Ø 250 - 330 mm)',
    desc: 'Top-of-the-range full-optional flatwork ironer with IM10 touchscreen, electronic chest pressure, inverter speed control, Nomex coating, and Cool-Down.',
    img: fiSmartImg,
    badge: 'IM10 Touch',
    icon: Cpu
  },

  // ── 4. Drying Ironers (https://imesa.it/en/drying-ironers/) ──
  {
    id: 'imesa-mca-ironer',
    category: 'drying-ironers',
    categoryName: 'Drying Ironers',
    name: 'MCA COMPACT DRYING IRONERS',
    series: 'MCA Series (Ø 330 mm / 1500 - 2100 mm)',
    desc: 'Compact drying ironers enabling direct drying and ironing of damp linen (up to 50% moisture) in a single operation with front return for wall installation.',
    img: mcaIronerImg,
    badge: 'Single Pass Dry & Iron',
    icon: RefreshCw
  },
  {
    id: 'imesa-mcm-ironer',
    category: 'drying-ironers',
    categoryName: 'Drying Ironers',
    name: 'MCM INDUSTRIAL DRYING IRONERS',
    series: 'MCM Series (Ø 502 mm / 2500 - 3200 mm)',
    desc: 'High-productivity industrial drying ironer with 82% roller contact, output up to 140 kg/h, IM10 touch control, and modular feeder and folder units.',
    img: mcmIronerImg,
    badge: 'Up to 140 kg/h',
    icon: Award
  }
];

export default function Imesa() {
  const [isMuted, setIsMuted] = useState(true);
  const [activeCategory, setActiveCategory] = useState('all');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filteredProducts = activeCategory === 'all' 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-white font-sans text-slate-800">
      <Navbar />

      {/* Back to Brands Navigation */}
      <div className="absolute top-[100px] left-8 lg:left-16 z-50">
        <Link 
          to="/brands" 
          className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors font-medium text-sm bg-black/20 backdrop-blur-md px-4 py-2 rounded-full border border-white/10"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Brands
        </Link>
      </div>

      {/* ── 1. Hero Section with Video (Pure clean video, NO overlaid text or buttons) ── */}
      <section className="relative w-full h-[85vh] min-h-[600px] flex flex-col justify-center overflow-hidden bg-[#0A0A0A] pt-20 group">
        <video
          autoPlay
          loop
          muted={isMuted}
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-90"
        >
          <source src={imesaHeroVideo} type="video/mp4" />
        </video>

        {/* Audio Toggle Button */}
        <button 
          onClick={() => setIsMuted(!isMuted)}
          className="absolute bottom-8 right-8 z-20 p-4 rounded-full bg-black/40 hover:bg-black/60 backdrop-blur-sm border border-white/20 text-white shadow-lg transition-all duration-300 opacity-0 group-hover:opacity-100"
          aria-label={isMuted ? "Unmute video" : "Mute video"}
        >
          {isMuted ? <VolumeX className="w-6 h-6" /> : <Volume2 className="w-6 h-6" />}
        </button>
      </section>

      {/* ── 2. Who We Are Section ── */}
      <section className="py-24 bg-white relative overflow-hidden">
        {/* Animated Grid Background */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.15] animate-grid"
          style={{
            backgroundImage: 'linear-gradient(#00A3E0 1px, transparent 1px), linear-gradient(90deg, #00A3E0 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
          aria-hidden="true"
        />
        
        <div className="max-w-7xl mx-auto px-6 lg:px-16 text-center relative z-10">
          <div className="flex flex-col items-center mb-16">
            <div className="w-12 h-[2px] bg-[#00A3E0] mb-4" />
            <h2 className="text-4xl lg:text-5xl font-black text-[#001F3F] uppercase tracking-tight">Who We Are</h2>
          </div>
          
          <h3 className="text-2xl lg:text-4xl font-bold text-[#00A3E0] mb-12 max-w-4xl mx-auto leading-tight">
            We drive change to create value and make our customers and people successful.
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-left">
            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-[#00A3E0]/10 rounded-2xl flex items-center justify-center mb-6">
                <HeartHandshake className="w-6 h-6 text-[#00A3E0]" />
              </div>
              <p className="text-slate-600 leading-relaxed text-lg">
                We support people with our services and design sustainable laundry solutions that simplify people's lives by ensuring the durability of fabrics over time.
              </p>
            </div>
            
            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-[#00A3E0]/10 rounded-2xl flex items-center justify-center mb-6">
                <Droplets className="w-6 h-6 text-[#00A3E0]" />
              </div>
              <p className="text-slate-600 leading-relaxed text-lg">
                Our products are designed to treat any fabric and/or material depending on the need, through a conscious and sustainable consumption of water and energy.
              </p>
            </div>

            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-[#00A3E0]/10 rounded-2xl flex items-center justify-center mb-6">
                <Factory className="w-6 h-6 text-[#00A3E0]" />
              </div>
              <p className="text-slate-600 leading-relaxed text-lg">
                50 years of history and experience. We at <strong className="text-[#001F3F]">IMESA</strong> SpA are the only Italian manufacturing company whose core business is also a vocation: washing, drying and ironing of all types of fabric.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. IMESA, Designing Your Clean ── */}
      <section className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-16 text-center">
          <div className="flex flex-col items-center mb-16">
            <div className="w-12 h-[2px] bg-[#00A3E0] mb-4" />
            <h2 className="text-4xl lg:text-5xl font-black text-[#001F3F] uppercase tracking-tight">IMESA, Designing Your Clean</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-2xl bg-[#00A3E0]/10 flex items-center justify-center mb-6 text-[#00A3E0]">
                <Droplets className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-[#001F3F] mb-3">Washing</h3>
              <p className="text-slate-500 leading-relaxed text-sm">
                High spin freestanding washers and aseptic hygiene barrier machines engineered with IM11 touchscreens and conscious water recovery.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-2xl bg-[#00A3E0]/10 flex items-center justify-center mb-6 text-[#00A3E0]">
                <Wind className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-[#001F3F] mb-3">Drying</h3>
              <p className="text-slate-500 leading-relaxed text-sm">
                ES Smart and Premium dryers powered by patented D-FLOW axial airflow for rapid, uniform moisture extraction and fabric protection.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-2xl bg-[#00A3E0]/10 flex items-center justify-center mb-6 text-[#00A3E0]">
                <Layers className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-[#001F3F] mb-3">Ironing</h3>
              <p className="text-slate-500 leading-relaxed text-sm">
                FI flatwork chest ironers and MCA/MCM drying ironers delivering flawless flatwork finish in single-pass operations.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-2xl bg-[#00A3E0]/10 flex items-center justify-center mb-6 text-[#00A3E0]">
                <Cpu className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-[#001F3F] mb-3">Connected Space</h3>
              <p className="text-slate-500 leading-relaxed text-sm">
                Complete Industry 4.0 ecosystem with IMConnect telemetry, Laundry for You manager app, Tap.Tech NFC, and online payment integration.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. The IMESA Connection Space (IoT Showcase) ── */}
      <section className="py-24 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="flex flex-col items-center mb-20 text-center">
            <div className="w-12 h-[2px] bg-[#00A3E0] mb-4" />
            <h2 className="text-4xl lg:text-5xl font-black text-[#001F3F] uppercase tracking-tight mb-4">
              The IMESA Connection Space
            </h2>
            <p className="text-slate-500 text-lg max-w-2xl">
              An ecosystem of digital platforms and services created to manage machines, track operations, and simplify daily laundry workflows.
            </p>
          </div>

          <div className="space-y-24">
            {/* 1. Benefits At Your Fingertips */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1 relative">
                <img 
                  src="https://promactech.com/wp-content/uploads/2025/01/IMESA_Dashboard-PC_Portal-IMConnect_1200x800-1024x683.jpg" 
                  alt="IMConnect" 
                  className="rounded-3xl shadow-2xl relative z-10 w-full object-cover"
                />
              </div>
              <div className="order-1 lg:order-2">
                <div className="w-12 h-12 bg-[#00A3E0]/10 rounded-2xl flex items-center justify-center mb-6">
                  <span className="text-[#00A3E0] font-black text-xl">1</span>
                </div>
                <h3 className="text-3xl lg:text-4xl font-bold text-[#001F3F] mb-6">Benefits At Your Fingertips</h3>
                <p className="text-lg text-slate-600 leading-relaxed">
                  With <strong>IMConnect</strong>, there is room for remote management of the laundry for real-time control of production, acquisition of valuable data, predictive maintenance and organizational agility.
                </p>
              </div>
            </div>

            {/* 2. The Laundry is Ever Smarter and More Social */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-2 relative">
                <img 
                  src="https://promactech.com/wp-content/uploads/2025/01/Stanza.71_con-telefono-in-mano-copia.jpg" 
                  alt="Smarter Laundry" 
                  className="rounded-3xl shadow-2xl relative z-10 w-full object-cover"
                />
              </div>
              <div className="order-1 lg:order-1">
                <div className="w-12 h-12 bg-[#00A3E0]/10 rounded-2xl flex items-center justify-center mb-6">
                  <span className="text-[#00A3E0] font-black text-xl">2</span>
                </div>
                <h3 className="text-3xl lg:text-4xl font-bold text-[#001F3F] mb-6">The Laundry is Ever Smarter and More Social</h3>
                <p className="text-lg text-slate-600 leading-relaxed">
                  Laundry For You is the <strong>IMESA</strong> app dedicated to the dealer and laundry manager that allows you to monitor and optimize your machine fleet and provides a space dedicated to the publication of personalized news and promotions.
                </p>
              </div>
            </div>
            
            {/* 3. TAP.TECH Label */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1 relative">
                <img 
                  src="https://promactech.com/wp-content/uploads/2025/01/LM_Tap.Tech_-1024x683.jpg" 
                  alt="Tap.Tech Label" 
                  className="rounded-3xl shadow-2xl relative z-10 w-full object-cover"
                />
              </div>
              <div className="order-1 lg:order-2">
                <div className="w-12 h-12 bg-[#00A3E0]/10 rounded-2xl flex items-center justify-center mb-6">
                  <span className="text-[#00A3E0] font-black text-xl">3</span>
                </div>
                <h3 className="text-3xl lg:text-4xl font-bold text-[#001F3F] mb-6">TAP.TECH Label</h3>
                <p className="text-lg text-slate-600 leading-relaxed">
                  <strong>Tap.Tech. Label</strong>, with built-in NFC technology, communicates with the Laundry for You app to access the washing machine's identification data. Available on all washing machines up to 32 kg.
                </p>
              </div>
            </div>

            {/* 4. The Self-service Laundry App */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-2 relative">
                <img 
                  src="https://promactech.com/wp-content/uploads/2025/01/stanza.80_rielaborata_1000X700.jpg" 
                  alt="Self Service App" 
                  className="rounded-3xl shadow-2xl relative z-10 w-full object-cover"
                />
              </div>
              <div className="order-1 lg:order-1">
                <div className="w-12 h-12 bg-[#00A3E0]/10 rounded-2xl flex items-center justify-center mb-6">
                  <span className="text-[#00A3E0] font-black text-xl">4</span>
                </div>
                <h3 className="text-3xl lg:text-4xl font-bold text-[#001F3F] mb-6">The Self-service Laundry App</h3>
                <p className="text-lg text-slate-600 leading-relaxed">
                  Laundry for you PAY is the <strong>IMESA</strong> app dedicated to the end customer of the self-service laundry that allows you to book and pay for the service online.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── 5. Explore Products (4 Categories, 8 Products from imesa.it) ── */}
      <section className="py-24 bg-slate-50 relative border-t border-slate-200 overflow-hidden" id="products">
        {/* Animated Grid Background */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.10] animate-grid"
          style={{
            backgroundImage: 'linear-gradient(#00A3E0 1px, transparent 1px), linear-gradient(90deg, #00A3E0 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
          aria-hidden="true"
        />
        
        <div className="max-w-7xl mx-auto px-6 lg:px-16 relative z-10">
          <div className="flex flex-col items-center mb-12 text-center">
            <h2 className="text-4xl lg:text-5xl font-black text-[#001F3F] mb-4">
              EXPLORE <span className="text-[#00A3E0]">PRODUCTS</span>
            </h2>
            <p className="text-slate-500 max-w-2xl text-lg">
              Discover IMESA's complete range of washing machines, tumble dryers, flatwork ironers, and drying ironers.
            </p>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
              {IMESA_CATEGORIES.map(cat => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-5 py-2.5 rounded-full text-sm font-bold tracking-wide transition-all ${
                    activeCategory === cat.id
                      ? 'bg-[#00A3E0] text-white shadow-md shadow-[#00A3E0]/20'
                      : 'bg-white text-slate-600 hover:text-[#001F3F] border border-slate-200 hover:border-slate-300'
                  }`}
                >
                  {cat.name}
                </button>
              ))}
            </div>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 lg:gap-10 max-w-6xl mx-auto">
            {filteredProducts.map((product) => {
              const IconComp = product.icon || Droplets;
              return (
                <Link 
                  to={`/brands/imesa/${product.id}`} 
                  key={product.id}
                  className="group flex flex-col h-full bg-white rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden"
                >
                  {/* Card Top Meta Bar - Dedicated bar prevents any clashing with image */}
                  <div className="px-8 pt-7 pb-2 flex items-center justify-between z-20 relative bg-white">
                    <span className="inline-flex items-center gap-1.5 bg-[#001F3F] text-white text-[11px] font-bold px-3.5 py-1.5 rounded-full uppercase tracking-wider shadow-sm">
                      {product.badge}
                    </span>
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                      {product.categoryName}
                    </span>
                  </div>

                  {/* Dedicated Large Image Container */}
                  <div className="px-8 py-6 flex items-center justify-center bg-white border-b border-slate-100 min-h-[320px] relative">
                    <img 
                      src={product.img} 
                      alt={product.name} 
                      className="w-full h-64 md:h-72 object-contain transform group-hover:scale-105 transition-transform duration-500" 
                    />
                  </div>
                  
                  {/* Content Container */}
                  <div className="p-8 flex flex-col gap-3 flex-1 relative">
                    <div className="text-[#00A3E0] text-xs font-bold uppercase tracking-widest">
                      {product.series}
                    </div>

                    <h3 className="text-xl md:text-2xl font-bold text-[#001F3F] group-hover:text-[#00A3E0] transition-colors leading-snug">
                      {product.name}
                    </h3>
                    
                    <p className="text-slate-500 text-sm leading-relaxed flex-1">
                      {product.desc}
                    </p>
                    
                    <div className="flex items-center gap-2 text-[#00A3E0] font-bold text-sm mt-4 pt-4 border-t border-slate-100 group-hover:text-[#001F3F] transition-colors tracking-wide">
                      View Technical Details
                      <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
