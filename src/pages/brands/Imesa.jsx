import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  ArrowLeft, ArrowRight, Droplets, Wind, Layers, RefreshCw, 
  HeartHandshake, Factory, ShieldCheck, Cpu, Volume2, VolumeX,
  Smartphone, Wifi, CheckCircle2, Award
} from 'lucide-react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

// Asset Imports
import imesaHeroVideo from '../../assets/brands/imesa-hero.mp4';
import imesaLogo from '../../assets/brands/imesa.png';

// 4 Official IMESA Categories & 8 Products
const IMESA_CATEGORIES = [
  {
    id: 'washing-machines',
    name: 'Washing Machines',
    tagline: 'High-Spin Industrial & Hygiene Barrier Washers',
    icon: Droplets,
    color: 'from-[#002D62] to-[#00A3E0]',
    accent: '#00A3E0',
    products: [
      {
        id: 'imesa-lm-series',
        name: 'HIGH SPIN INDUSTRIAL WASHING MACHINES',
        series: 'LM Series (8 - 125 kg)',
        desc: 'Freestanding high-spin industrial washers with IM11 7" touchscreen and Wet Cleaning technology.',
        img: 'https://imesa.it/wp-content/uploads/2019/10/A_LM_14_18_23_F_1.png',
        badge: 'G-Factor 350-400'
      },
      {
        id: 'imesa-d2w-barrier',
        name: 'HYGIENE BARRIER WASHERS',
        series: 'D2W Series (18 - 55 kg)',
        desc: 'Pass-through double-door aseptic barrier washers guaranteeing zero cross-contamination (EN 14065).',
        img: 'https://imesa.it/wp-content/uploads/2022/01/Lavatrice-a-barriera-asettica_Barrier-Washers_D2W_18_5.jpg',
        badge: 'RABC / EN 14065'
      }
    ]
  },
  {
    id: 'dryers',
    name: 'Dryers',
    tagline: 'Tumble Dryers with D-FLOW Technology',
    icon: Wind,
    color: 'from-[#001F3F] to-[#00509B]',
    accent: '#00509B',
    products: [
      {
        id: 'imesa-es-smart',
        name: 'ES SMART LINE TUMBLE DRYERS',
        series: 'ES Smart Line (11 - 36 kg)',
        desc: 'Commercial tumble dryers featuring the patented D-FLOW axial airflow system and IM10 touchscreen.',
        img: 'https://imesa.it/wp-content/uploads/2025/04/ES2025_SMART.png',
        badge: 'D-FLOW System'
      },
      {
        id: 'imesa-es-premium',
        name: 'ES PREMIUM LINE TUMBLE DRYERS',
        series: 'ES Premium Line (11 - 75 kg)',
        desc: 'Top-of-the-range industrial tumble dryers with high-capacity options and precision moisture sensor.',
        img: 'https://imesa.it/wp-content/uploads/2019/10/A_ES-55_75_BL_F-copia.jpg',
        badge: 'Up to 75 kg'
      }
    ]
  },
  {
    id: 'flatwork-ironers',
    name: 'Flatwork Ironers',
    tagline: 'Precision Chest Ironers with Uniform Torsion Bar',
    icon: Layers,
    color: 'from-[#003B73] to-[#008080]',
    accent: '#008080',
    products: [
      {
        id: 'imesa-fi-easy',
        name: 'FI EASY LINE FLATWORK IRONERS',
        series: 'FI EASY Line (Ø 250 - 330 mm)',
        desc: 'Straightforward, robust flatwork ironer with digital thermostat and uniform pressure torsion bar.',
        img: 'https://imesa.it/wp-content/uploads/2022/11/fi2022_02.380.png',
        badge: 'Essential & Robust'
      },
      {
        id: 'imesa-fi-smart',
        name: 'FI SMART LINE FLATWORK IRONERS',
        series: 'FI SMART Line (Ø 250 - 330 mm)',
        desc: 'Full-featured flatwork ironer with IM10 touch, patented electronic pressure, and Nomex coating.',
        img: 'https://imesa.it/wp-content/uploads/2022/11/fi2022_03.369.png',
        badge: 'Full Optional'
      }
    ]
  },
  {
    id: 'drying-ironers',
    name: 'Drying Ironers',
    tagline: 'Direct Dry & Iron in a Single Pass',
    icon: RefreshCw,
    color: 'from-[#007799] to-[#002244]',
    accent: '#007799',
    products: [
      {
        id: 'imesa-mca-ironer',
        name: 'MCA COMPACT DRYING IRONERS',
        series: 'MCA Line (Ø 33 cm, 1500 - 2100 mm)',
        desc: 'Dry and iron directly from the high-spin washer with compact wall installation and front return.',
        img: 'https://imesa.it/wp-content/uploads/2024/12/IMESA_Calandre-asciuganti_Drying-Ironing_MCA_NEW_FRONTE-1.png',
        badge: 'Compact Wall Design'
      },
      {
        id: 'imesa-mcm-ironer',
        name: 'MCM INDUSTRIAL DRYING IRONERS',
        series: 'MCM Line (Ø 50 cm, 2500 - 3200 mm)',
        desc: 'Heavy-duty industrial drying ironer with 84% contact surface and optional integrated feeder/folder.',
        img: 'https://imesa.it/wp-content/uploads/2022/01/Calandre-asciuganti_Drying-Ironing_MCM_3.jpg',
        badge: '84% Contact Surface'
      }
    ]
  }
];

export default function Imesa() {
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="imesa-brand-page min-h-screen bg-white font-sans text-slate-800">
      <Navbar />

      {/* Back to Brands Floating Button */}
      <div className="absolute top-[100px] left-8 lg:left-16 z-50">
        <Link 
          to="/brands" 
          className="inline-flex items-center gap-2 text-white/90 hover:text-white transition-colors font-semibold text-xs tracking-wider uppercase bg-black/40 backdrop-blur-md px-4 py-2.5 rounded-full border border-white/20 shadow-md"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Brands
        </Link>
      </div>

      {/* ── 1. Hero Section with Video ── */}
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

        {/* Video Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/40 pointer-events-none" />

        {/* Floating Brand Badge */}
        <div className="absolute top-28 right-8 lg:right-16 z-20 hidden md:flex items-center gap-3 bg-white/90 backdrop-blur-md px-5 py-2.5 rounded-full border border-white/40 shadow-lg">
          <img src={imesaLogo} alt="IMESA" className="h-6 w-auto object-contain" />
          <span className="text-[11px] font-bold text-[#001F3F] tracking-widest uppercase border-l border-slate-300 pl-3">
            Made in Italy Since 1968
          </span>
        </div>

        {/* Hero Content */}
        <div className="relative z-20 max-w-7xl mx-auto px-8 lg:px-16 w-full text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 bg-[#00A3E0]/30 border border-[#00A3E0]/50 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-6 text-white">
              Italian Laundry Technology
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight leading-none mb-6">
              IMESA<span className="text-[#00A3E0]">.</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 font-light leading-relaxed mb-8">
              Designing Your Clean. Sustainable, intelligent, and certified laundry technology perfected in Italy for over 50 years.
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href="#products" 
                className="inline-flex items-center gap-2 bg-[#00A3E0] hover:bg-[#008cc2] text-white px-8 py-4 rounded-full font-bold text-sm tracking-wider uppercase transition-all shadow-lg hover:shadow-cyan-500/25"
              >
                Explore Machinery <ArrowRight className="w-4 h-4" />
              </a>
              <a 
                href="#iot" 
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/30 backdrop-blur-md px-8 py-4 rounded-full font-bold text-sm tracking-wider uppercase transition-all"
              >
                IoT & Connected Space
              </a>
            </div>
          </motion.div>
        </div>

        {/* Audio Toggle */}
        <button 
          onClick={() => setIsMuted(!isMuted)}
          className="absolute bottom-8 right-8 z-20 p-4 rounded-full bg-black/40 hover:bg-black/60 backdrop-blur-sm border border-white/20 text-white shadow-lg transition-all duration-300 opacity-0 group-hover:opacity-100"
          aria-label={isMuted ? "Unmute video" : "Mute video"}
        >
          {isMuted ? <VolumeX className="w-6 h-6" /> : <Volume2 className="w-6 h-6" />}
        </button>
      </section>

      {/* ── 2. About IMESA & Italian Heritage ── */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-8 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div>
              <div className="flex items-center gap-4 mb-4">
                <span className="text-[#00A3E0] text-sm md:text-base font-bold tracking-[0.2em] uppercase">ABOUT IMESA</span>
              </div>
              <div className="w-12 h-[2px] bg-[#00A3E0] mb-8" />
              
              <h2 className="text-3xl md:text-5xl font-extrabold text-[#001F3F] mb-8 leading-tight tracking-tight">
                Italian Engineering Driven by Vocation<span className="text-[#00A3E0]">.</span>
              </h2>
              
              <div className="text-slate-700 font-normal text-base md:text-lg leading-relaxed space-y-6 text-justify">
                <p>
                  Established in 1968 in Cessalto (Treviso), Italy, <strong className="text-[#001F3F] font-semibold">IMESA S.p.A.</strong> is a globally respected manufacturer whose core business and vocation is the complete cycle of commercial fabric care: washing, drying, and ironing.
                </p>
                <p>
                  For over 50 years, IMESA has designed sustainable, high-efficiency laundry solutions that simplify operators' lives while preserving fabric durability. Today, IMESA equipment is distributed in more than 130 countries, recognized for its certified Italian manufacturing quality, Industry 4.0 IoT telemetry, and uncompromising hygienic standards.
                </p>
              </div>

              {/* Core Strengths Checklist */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 pt-8 border-t border-slate-100">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#00A3E0] shrink-0" />
                  <span className="text-sm font-semibold text-slate-800">100% Made in Italy</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#00A3E0] shrink-0" />
                  <span className="text-sm font-semibold text-slate-800">EN 14065 RABC Certified</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#00A3E0] shrink-0" />
                  <span className="text-sm font-semibold text-slate-800">IMConnect IoT Ecosystem</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#00A3E0] shrink-0" />
                  <span className="text-sm font-semibold text-slate-800">Full Range: Wash to Iron</span>
                </div>
              </div>
            </div>

            {/* Right: Key Figures & Heritage Badge */}
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200/80 shadow-sm flex flex-col justify-center">
                <span className="text-[#00A3E0] font-black text-4xl lg:text-5xl tracking-tight mb-2">50+</span>
                <span className="text-[#001F3F] font-bold text-lg mb-1">Years Heritage</span>
                <span className="text-slate-500 text-xs">Pioneering Italian laundry manufacturing since 1968.</span>
              </div>
              <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200/80 shadow-sm flex flex-col justify-center">
                <span className="text-[#00A3E0] font-black text-4xl lg:text-5xl tracking-tight mb-2">130+</span>
                <span className="text-[#001F3F] font-bold text-lg mb-1">Countries</span>
                <span className="text-slate-500 text-xs">Global distributor and service network worldwide.</span>
              </div>
              <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200/80 shadow-sm flex flex-col justify-center">
                <span className="text-[#00A3E0] font-black text-4xl lg:text-5xl tracking-tight mb-2">100%</span>
                <span className="text-[#001F3F] font-bold text-lg mb-1">Made in Italy</span>
                <span className="text-slate-500 text-xs">Engineered and assembled in Cessalto (Treviso).</span>
              </div>
              <div className="bg-[#001F3F] text-white p-8 rounded-3xl shadow-xl flex flex-col justify-center">
                <span className="text-[#00A3E0] font-black text-4xl lg:text-5xl tracking-tight mb-2">4.0</span>
                <span className="text-white font-bold text-lg mb-1">Industry 4.0</span>
                <span className="text-white/70 text-xs">IMConnect IoT cloud telemetry and remote management.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. Who We Are - 3 Core Value Cards ── */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-8 lg:px-16">
          <div className="text-center mb-16">
            <h4 className="text-[#00A3E0] text-sm md:text-base font-bold tracking-[0.2em] uppercase mb-4">OUR PRINCIPLES</h4>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#001F3F] tracking-tight">
              We Drive Change to Create Lasting Value<span className="text-[#00A3E0]">.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-3xl border border-slate-200/70 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-[#00A3E0]/10 rounded-2xl flex items-center justify-center mb-6">
                <HeartHandshake className="w-7 h-7 text-[#00A3E0]" />
              </div>
              <h3 className="text-xl font-bold text-[#001F3F] mb-3">Customer Centricity</h3>
              <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                We support people with comprehensive services and engineer sustainable laundry solutions that simplify operators' lives while guaranteeing fabric durability over time.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-3xl border border-slate-200/70 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-[#00A3E0]/10 rounded-2xl flex items-center justify-center mb-6">
                <Droplets className="w-7 h-7 text-[#00A3E0]" />
              </div>
              <h3 className="text-xl font-bold text-[#001F3F] mb-3">Conscious Consumption</h3>
              <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                Our machinery is calibrated to treat any textile with care, achieving minimal water, chemical, and energy consumption through smart weighing and dynamic speed modulation.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-slate-200/70 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-[#00A3E0]/10 rounded-2xl flex items-center justify-center mb-6">
                <Factory className="w-7 h-7 text-[#00A3E0]" />
              </div>
              <h3 className="text-xl font-bold text-[#001F3F] mb-3">Complete Line Vocation</h3>
              <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                IMESA is the only Italian manufacturer whose core business encompasses the entire textile cycle: high-spin washing, hygienic barrier protection, tumble drying, and ironer finishing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. The IMESA Connection Space (IoT Ecosystem) ── */}
      <section id="iot" className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-8 lg:px-16">
          <div className="flex flex-col items-center text-center mb-20">
            <div className="w-12 h-[2px] bg-[#00A3E0] mb-4" />
            <h4 className="text-[#00A3E0] text-sm md:text-base font-bold tracking-[0.2em] uppercase mb-2">INDUSTRY 4.0</h4>
            <h2 className="text-3xl md:text-5xl font-extrabold text-[#001F3F] uppercase tracking-tight mb-6">
              The IMESA Connection Space
            </h2>
            <p className="text-lg md:text-xl text-slate-600 max-w-3xl leading-relaxed">
              Where customers, technicians, and managers collaborate, analyze data, and optimize machinery in real time through our cloud portal and mobile suite.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* 1. IMConnect */}
            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200/80 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 bg-[#00A3E0] text-white rounded-2xl flex items-center justify-center mb-6 font-black text-lg">
                  1
                </div>
                <h3 className="text-xl font-bold text-[#001F3F] mb-3">IMConnect Portal</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  Cloud-based remote laundry management for real-time monitoring of energy, water, cycle times, running costs per kg, and predictive maintenance alerts.
                </p>
              </div>
              <div className="pt-4 border-t border-slate-200/60 flex items-center gap-2 text-xs font-bold text-[#00A3E0] tracking-wider uppercase">
                <Wifi className="w-4 h-4" /> Cloud Telemetry
              </div>
            </div>

            {/* 2. Laundry for You */}
            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200/80 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 bg-[#00A3E0] text-white rounded-2xl flex items-center justify-center mb-6 font-black text-lg">
                  2
                </div>
                <h3 className="text-xl font-bold text-[#001F3F] mb-3">Laundry for You App</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  Mobile application dedicated to dealers and plant managers to supervise machine fleets, adjust wash recipes, and receive maintenance notifications.
                </p>
              </div>
              <div className="pt-4 border-t border-slate-200/60 flex items-center gap-2 text-xs font-bold text-[#00A3E0] tracking-wider uppercase">
                <Smartphone className="w-4 h-4" /> Fleet Management
              </div>
            </div>

            {/* 3. TAP.TECH Label */}
            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200/80 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 bg-[#00A3E0] text-white rounded-2xl flex items-center justify-center mb-6 font-black text-lg">
                  3
                </div>
                <h3 className="text-xl font-bold text-[#001F3F] mb-3">TAP.TECH NFC</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  Integrated NFC tag directly on the machine fascia. Simply tap a smartphone to access machine serial data, technical manuals, and cycle logs instantly.
                </p>
              </div>
              <div className="pt-4 border-t border-slate-200/60 flex items-center gap-2 text-xs font-bold text-[#00A3E0] tracking-wider uppercase">
                <Cpu className="w-4 h-4" /> Instant NFC Sync
              </div>
            </div>

            {/* 4. Laundry for You PAY */}
            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200/80 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 bg-[#00A3E0] text-white rounded-2xl flex items-center justify-center mb-6 font-black text-lg">
                  4
                </div>
                <h3 className="text-xl font-bold text-[#001F3F] mb-3">Laundry for You PAY</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  End-user mobile application for commercial and self-service laundries enabling real-time machine booking, remote cycle progress tracking, and cashless payment.
                </p>
              </div>
              <div className="pt-4 border-t border-slate-200/60 flex items-center gap-2 text-xs font-bold text-[#00A3E0] tracking-wider uppercase">
                <Award className="w-4 h-4" /> Cashless Self-Service
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. Product Catalog (4 Core Categories, Just Like Kannegiesser) ── */}
      <section id="products" className="py-24 bg-slate-50 relative border-t border-slate-200 overflow-hidden">
        {/* Animated Background Grid */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.08] animate-grid"
          style={{
            backgroundImage: 'linear-gradient(#00A3E0 1px, transparent 1px), linear-gradient(90deg, #00A3E0 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
          aria-hidden="true"
        />

        <div className="max-w-7xl mx-auto px-8 lg:px-16 relative z-10">
          <div className="text-center mb-20">
            <h4 className="text-[#00A3E0] text-sm md:text-base font-bold tracking-[0.2em] uppercase mb-3">PRODUCT CATALOG</h4>
            <h2 className="text-3xl md:text-5xl font-extrabold text-[#001F3F] tracking-tight">
              Explore IMESA Machinery<span className="text-[#00A3E0]">.</span>
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-base md:text-lg mt-4">
              Comprehensive industrial laundry systems across 4 specialized categories.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {IMESA_CATEGORIES.map(category => (
              <div key={category.id} className="flex flex-col bg-white rounded-3xl border border-slate-200/90 shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                
                {/* Category Header Banner */}
                <div className={`w-full p-8 bg-gradient-to-r ${category.color} text-white flex items-center justify-between`}>
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <category.icon className="w-6 h-6 text-white/90" />
                      <h3 className="text-2xl font-bold tracking-tight uppercase">{category.name}</h3>
                    </div>
                    <p className="text-white/80 text-xs md:text-sm font-medium">{category.tagline}</p>
                  </div>
                  <span className="bg-white/20 text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider backdrop-blur-sm">
                    {category.products.length} Series
                  </span>
                </div>

                {/* Category Product Cards */}
                <div className="p-6 md:p-8 flex flex-col gap-6 flex-1 bg-white">
                  {category.products.map(product => (
                    <Link
                      key={product.id}
                      to={`/brands/imesa/${product.id}`}
                      className="group bg-slate-50 hover:bg-slate-100/80 border border-slate-200/80 rounded-2xl p-6 transition-all duration-300 flex flex-col sm:flex-row items-center gap-6 hover:-translate-y-1 hover:shadow-md"
                    >
                      {/* Product Image Container */}
                      <div className="w-32 h-32 md:w-36 md:h-36 bg-white rounded-xl flex items-center justify-center p-3 border border-slate-200 shrink-0 overflow-hidden">
                        <img 
                          src={product.img} 
                          alt={product.name}
                          className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-500" 
                        />
                      </div>

                      {/* Product Info */}
                      <div className="flex-1 min-w-0 text-center sm:text-left">
                        <div className="inline-block bg-[#00A3E0]/15 text-[#00A3E0] text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider mb-2">
                          {product.badge}
                        </div>
                        <h4 className="text-base md:text-lg font-bold text-[#001F3F] group-hover:text-[#00A3E0] transition-colors leading-snug mb-1">
                          {product.name}
                        </h4>
                        <p className="text-xs font-semibold text-slate-500 mb-2 uppercase tracking-wide">
                          {product.series}
                        </p>
                        <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                          {product.desc}
                        </p>
                      </div>

                      {/* Explore Arrow */}
                      <div className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-400 group-hover:text-[#00A3E0] group-hover:border-[#00A3E0] group-hover:bg-[#00A3E0]/10 transition-all shrink-0">
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
                      </div>
                    </Link>
                  ))}
                </div>

              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
