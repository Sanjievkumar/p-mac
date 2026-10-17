import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
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
import es5575Img from '../../assets/brands/imesa/imesa-es-55-75.png';
import fiEasyImg from '../../assets/brands/imesa/imesa-fi-easy.jpg';
import fiSmartImg from '../../assets/brands/imesa/imesa-fi-smart.jpg';
import mcaIronerImg from '../../assets/brands/imesa/imesa-mca-ironer.jpg';
import mcmIronerImg from '../../assets/brands/imesa/imesa-mcm-ironer.jpg';

// Category Hero Photography & Icons (Official imesa.it assets downloaded locally)
import catHeroWashingImg from '../../assets/brands/imesa/imesa-cat-hero-washing.jpg';
import iconWashingImg from '../../assets/brands/imesa/icon-washing.png';
import catHeroDryersImg from '../../assets/brands/imesa/imesa-cat-hero-dryers.png';
import iconDryersImg from '../../assets/brands/imesa/icon-dryers.png';
import catHeroFlatworkImg from '../../assets/brands/imesa/imesa-cat-hero-flatwork.jpg';
import iconFlatworkImg from '../../assets/brands/imesa/icon-flatwork.png';
import catHeroDryingIronersImg from '../../assets/brands/imesa/imesa-cat-hero-drying-ironers.jpg';
import iconDryingIronersImg from '../../assets/brands/imesa/icon-drying-ironers.png';

// Local Connection Space Images
import imConnectImg from '../../assets/brands/imesa/IMESA_Dashboard-PC_Portal-IMConnect_1200x800-1024x683.jpg';
import smartLaundryImg from '../../assets/brands/imesa/Stanza.71_con-telefono-in-mano-copia.jpg';
import tapTechImg from '../../assets/brands/imesa/LM_Tap.Tech_-1024x683.jpg';
import selfServiceImg from '../../assets/brands/imesa/stanza.80_rielaborata_1000X700.jpg';

// 4 Official IMESA Categories & Series Database (1:1 clone of imesa.it structure)
const OFFICIAL_CATEGORIES = [
  {
    id: 'washing-machines',
    name: 'Washing Machines',
    capacityBadge: '8/125 KG',
    badgeIcon: iconWashingImg,
    h1: 'INDUSTRIAL WASHING MACHINES',
    heroImg: catHeroWashingImg,
    introLead: 'EVO.LINE: THE INDUSTRIAL WASHING MACHINES BY IMESA',
    introParas: [
      'The wide range of washing machines IMESA is the answer to every specific washing need.',
      'Efficiency, sturdiness and ease of use for high level washing results. The new EVO.LINE washing machines, completely renewed in design, present features that further enhance their performance.',
      'Simplicity, Flexibility and Productivity are the characteristics that distinguish the IMESA product, designed for the complete satisfaction of the customer.'
    ],
    showcases: [
      {
        id: 'high-spin',
        title: 'HIGH SPIN INDUSTRIAL WASHING MACHINES',
        subtitle: 'LM SERIES',
        machineImg: lmSeriesImg,
        primaryTarget: 'imesa-lm-series',
        paras: [
          'With the LM series, IMESA deploys technology and quality.',
          'The IM11 computer touchscreen is an indispensable device that makes the washing machine perfect for every customer. A wash for every need.'
        ],
        seriesButtons: [
          { id: 'imesa-lm-8-11', label: 'LM 8-11 kg' },
          { id: 'imesa-lm-series', label: 'LM 14-23 kg' },
          { id: 'imesa-lm-26-32', label: 'LM 26-32 kg' },
          { id: 'imesa-lm-40-85', label: 'LM 40-85 kg' },
          { id: 'imesa-lm-100-125', label: 'LM 100-125 kg' }
        ]
      },
      {
        id: 'barrier-washers',
        title: 'HYGIENE BARRIER WASHERS',
        subtitle: 'D2W SERIES',
        machineImg: d2wBarrierImg,
        primaryTarget: 'imesa-d2w-barrier',
        paras: [
          'The IMESA D2W series of hygiene barrier washers fully satisfies the needs of hospitals, nursing and retirement homes, nurseries and schools, clinics and the pharmaceutical and food industries by guaranteeing maximum safety and zero contamination risk.',
          'Pass-through dual door biological separation complying with EN 14065 (RABC) sanitary standards.'
        ],
        seriesButtons: [
          { id: 'imesa-d2w-barrier', label: 'D2W 18-23 kg' },
          { id: 'imesa-d2w-30-55', label: 'D2W 30-55 kg' }
        ]
      }
    ]
  },
  {
    id: 'dryers',
    name: 'Dryers',
    capacityBadge: '11/75 KG',
    badgeIcon: iconDryersImg,
    h1: 'TUMBLE DRYERS',
    heroImg: catHeroDryersImg,
    introLead: 'THE DRYING REVOLUTION: ES SMART & PREMIUM',
    introParas: [
      'Designed for industrial and community use, the IMESA ES tumble dryer series delivers outstanding performance, reliable productivity, and flawless drying every time.',
      'ES Dryer Line: redefining the concept of drying and its importance in modern laundry operations with patented D-FLOW axial airflow.'
    ],
    showcases: [
      {
        id: 'es-smart-premium',
        title: 'TUMBLE DRYER',
        subtitle: 'ES SMART AND PREMIUM SERIES (11 - 36 KG)',
        machineImg: esSmartImg,
        primaryTarget: 'imesa-es-smart',
        paras: [
          'Available in Smart and Premium versions, the ES tumble dryer line offers flexible configurations to meet every need with tailored, modular solutions.',
          'ES Dryer Line: redefining the concept of drying and its importance in modern laundry operations.'
        ],
        seriesButtons: [
          { id: 'imesa-es-smart', label: 'ES Smart Line 11-36 kg' },
          { id: 'imesa-es-premium', label: 'ES Premium Line 11-36 kg' }
        ]
      },
      {
        id: 'es-large-capacity',
        title: 'TUMBLE DRYER',
        subtitle: 'ES 55 AND 75 SERIES',
        machineImg: es5575Img,
        primaryTarget: 'imesa-es-premium',
        paras: [
          'The large capacity 55 and 75 kg ES dryers are designed to meet the needs of industrial laundries and high productivity facilities that require high performance and full control of drying parameters.'
        ],
        seriesButtons: [
          { id: 'imesa-es-premium', label: 'ES Premium Line 55-75 kg' }
        ]
      }
    ]
  },
  {
    id: 'flatwork-ironers',
    name: 'Flatwork Ironers',
    capacityBadge: 'Ø 250 - 330 MM',
    badgeIcon: iconFlatworkImg,
    h1: 'FLATWORK IRONERS',
    heroImg: catHeroFlatworkImg,
    introLead: 'TAILOR-MADE FLATWORK FINISHING BY IMESA',
    introParas: [
      'The IMESA FI flatwork ironer serie comes in Easy LINE and Smart LINE versions: two different control units to meet customer’s needs at best.',
      'Optimized machine overall dimensions, polished steel roller for anti-wrinkle ironing and easy introduction of linen. Safety is guaranteed by the manual lever release system, the emergency button and chest lifting pedal.'
    ],
    showcases: [
      {
        id: 'fi-easy',
        title: 'FLATWORK IRONERS',
        subtitle: 'SERIE EASY FI (DIAM. 25 CM – DIAM. 33 CM)',
        machineImg: fiEasyImg,
        primaryTarget: 'imesa-fi-easy',
        paras: [
          'The IMESA flatwork ironer Easy FI is equipped with analog control unit, digital thermostat for temperature adjustment, fixed ironing speed (or adjustable by inverter as optional) and fixed ironing pressure uniform all over the entire roller length by means of the special torsion bar.',
          'The Easy FI flatwork ironer is equipped with Cotton roller cover (Nomex available on request), vacuum suction system, and IoT remote connection ready.'
        ],
        seriesButtons: [
          { id: 'imesa-fi-easy', label: 'Serie Easy FI' }
        ]
      },
      {
        id: 'fi-smart',
        title: 'FLATWORK IRONERS',
        subtitle: 'SERIE SMART FI (DIAM. 25 CM – DIAM. 33 CM)',
        machineImg: fiSmartImg,
        primaryTarget: 'imesa-fi-smart',
        paras: [
          'The IMESA Smart FI flatwork ironer is equipped with digital control unit IM10 touch screen, allowing endless ironing solution for effective and customized ironing result.',
          'Complete with frequency variator for electronic speed control according to temperature, Cool Down system and patented linear drive system for uniform ironing quality across the entire roller length.'
        ],
        seriesButtons: [
          { id: 'imesa-fi-smart', label: 'Serie Smart FI' }
        ]
      }
    ]
  },
  {
    id: 'drying-ironers',
    name: 'Drying Ironers',
    capacityBadge: 'Ø 330 - 502 MM',
    badgeIcon: iconDryingIronersImg,
    h1: 'DRYING IRONERS',
    heroImg: catHeroDryingIronersImg,
    introLead: 'SINGLE-PASS DRY & IRON PRODUCTIVITY',
    introParas: [
      'The series of IMESA DRYING IRONER are designed to meet every ironing need. A unique machine with chrome steel roller that operates with maximum efficiency and low energy consumption ensuring high performance.',
      'The ideal products to meet the needs of industrial hotels and laundries.'
    ],
    showcases: [
      {
        id: 'mca-line',
        title: 'DRYING IRONER',
        subtitle: 'MCA LINE',
        machineImg: mcaIronerImg,
        primaryTarget: 'imesa-mca-ironer',
        paras: [
          'IMESA MCA drying ironers dry and iron damp linen in a single operation, without having to pass through a dryer.',
          'Front linen feed and return enables compact, space-saving installation against walls.'
        ],
        seriesButtons: [
          { id: 'imesa-mca-ironer', label: 'MCA 150-180-210' }
        ]
      },
      {
        id: 'mcm-line',
        title: 'DRYING IRONER',
        subtitle: 'MCM LINE',
        machineImg: mcmIronerImg,
        primaryTarget: 'imesa-mcm-ironer',
        paras: [
          'IMESA MCM series drying ironers guarantee high performance and reliability.',
          'Industrial roller with 82% contact surface, output up to 140 kg/h, and modular automated feeders and folders.'
        ],
        seriesButtons: [
          { id: 'imesa-mcm-ironer', label: 'MCM 2500 - 2800 - 3200' }
        ]
      }
    ]
  }
];

const CATEGORY_TABS = [
  { id: 'all', name: 'All Categories' },
  { id: 'washing-machines', name: 'Washing Machines' },
  { id: 'dryers', name: 'Dryers' },
  { id: 'flatwork-ironers', name: 'Flatwork Ironers' },
  { id: 'drying-ironers', name: 'Drying Ironers' }
];

export default function Imesa() {
  const [isMuted, setIsMuted] = useState(true);
  const [activeCategory, setActiveCategory] = useState('all');
  const location = useLocation();

  useEffect(() => {
    // If arriving with a hash or query param like #dryers or ?category=washing-machines
    const params = new URLSearchParams(location.search);
    const catQuery = params.get('category');
    const hash = location.hash.replace('#', '');
    if (catQuery && OFFICIAL_CATEGORIES.some(c => c.id === catQuery)) {
      setActiveCategory(catQuery);
    } else if (hash && OFFICIAL_CATEGORIES.some(c => c.id === hash)) {
      setActiveCategory(hash);
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  const displayedCategories = activeCategory === 'all'
    ? OFFICIAL_CATEGORIES
    : OFFICIAL_CATEGORIES.filter(c => c.id === activeCategory);

  return (
    <div className="min-h-screen bg-[#FDFDFD] font-sans text-slate-800">
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

      {/* ── 1. Hero Section with Video (Pure clean video, NO overlaid text or buttons per user requirement) ── */}
      <section className="relative w-full h-[85vh] min-h-[600px] flex flex-col justify-center overflow-hidden bg-gradient-to-br from-slate-950 via-[#001F3F] to-slate-900 pt-20 group">
        <video
          autoPlay
          loop
          muted={isMuted}
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover opacity-95 transition-opacity duration-700"
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
                  src={imConnectImg} 
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
                  src={smartLaundryImg} 
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
                  src={tapTechImg} 
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
                  src={selfServiceImg} 
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

      {/* ── 5. Official IMESA Category Showcase Pages (1:1 Clone matching official imesa.it category structure) ── */}
      <section className="py-20 bg-[#F8F9FA] relative border-t border-slate-200" id="products">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          
          {/* Section Header & Category Filter Tabs */}
          <div className="flex flex-col items-center mb-16 text-center">
            <h2 className="text-3xl md:text-5xl font-black text-[#0D447B] tracking-tight uppercase mb-3">
              PRODUCT <span className="text-[#00A3E0]">CATEGORIES</span>
            </h2>
            <p className="text-slate-500 max-w-2xl text-base md:text-lg">
              Explore IMESA's complete industrial machinery catalogue. Select a category below or explore the full range.
            </p>

            {/* Interactive Category Filter Pills */}
            <div className="flex flex-wrap items-center justify-center gap-2.5 mt-8">
              {CATEGORY_TABS.map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveCategory(tab.id)}
                  className={`px-5 py-2.5 rounded-full text-xs md:text-sm font-bold tracking-wide transition-all duration-200 ${
                    activeCategory === tab.id
                      ? 'bg-[#0D447B] text-white shadow-md shadow-[#0D447B]/20'
                      : 'bg-white text-slate-600 hover:text-[#0D447B] border border-slate-200 hover:border-slate-300'
                  }`}
                >
                  {tab.name}
                </button>
              ))}
            </div>
          </div>

          {/* Render Each Category Exactly as on imesa.it */}
          <div className="space-y-28">
            {displayedCategories.map((cat) => (
              <div key={cat.id} className="space-y-12" id={cat.id}>
                
                {/* ── Official Category Hero Banner (Exact match of Screenshot 2) ── */}
                <div className="bg-white border border-slate-200/80 rounded-3xl p-8 lg:p-12 shadow-sm overflow-hidden">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                    
                    {/* Left: Category Icon, Capacity Pill, H1, Underline, and Intro Copy */}
                    <div className="lg:col-span-6 flex flex-col justify-center">
                      
                      {/* Capacity Badge Pill */}
                      <div className="inline-flex items-center gap-2.5 bg-[#f0f4f8] border border-[#0D447B]/15 px-3.5 py-1.5 rounded-full mb-5 w-fit">
                        {cat.badgeIcon && (
                          <img 
                            src={cat.badgeIcon} 
                            alt={cat.name} 
                            className="w-5 h-5 object-contain" 
                          />
                        )}
                        <span className="text-[#0D447B] text-xs font-bold tracking-wider uppercase">
                          {cat.capacityBadge}
                        </span>
                      </div>

                      {/* Category Main H1 */}
                      <h1 className="text-2xl md:text-4xl font-extrabold text-[#0D447B] tracking-tight uppercase leading-snug mb-3">
                        {cat.h1}
                      </h1>

                      {/* Official IMESA Accent Underline (30px wide, 2px height) */}
                      <div className="w-10 h-0.5 bg-[#00A3E0] mb-5" />

                      {/* Category Lead Title */}
                      <h4 className="text-sm md:text-base font-bold text-[#0D447B] uppercase tracking-wide mb-4">
                        {cat.introLead}
                      </h4>

                      {/* Category Intro Paragraphs */}
                      <div className="space-y-3 text-slate-600 text-sm md:text-base leading-relaxed">
                        {cat.introParas.map((para, pIdx) => (
                          <p key={pIdx}>{para}</p>
                        ))}
                      </div>
                    </div>

                    {/* Right: Category Hero Operator Image with Subtle Clean Frame */}
                    <div className="lg:col-span-6 flex justify-center">
                      <div className="w-full max-w-xl rounded-2xl overflow-hidden border border-slate-100 shadow-lg">
                        <img 
                          src={cat.heroImg} 
                          alt={cat.h1} 
                          className="w-full h-auto object-cover max-h-[380px] hover:scale-105 transition-transform duration-700" 
                        />
                      </div>
                    </div>

                  </div>
                </div>

                {/* ── Official 2-Column Machine Showcases (Exact match of Screenshot 1) ── */}
                <div className="space-y-8">
                  {cat.showcases.map((showcase) => (
                    <div 
                      key={showcase.id}
                      className="bg-white border border-slate-200/80 rounded-3xl p-8 lg:p-12 shadow-sm hover:shadow-md transition-shadow duration-300"
                    >
                      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                        
                        {/* Left Column (5-6 cols): Large Front-Facing Machine Cutout */}
                        <div className="lg:col-span-5 flex items-center justify-center py-4 bg-gradient-to-b from-slate-50/50 to-white rounded-2xl border border-slate-100/60 p-6">
                          <Link 
                            to={`/brands/imesa/${showcase.primaryTarget}`}
                            className="group block w-full text-center"
                          >
                            <img 
                              src={showcase.machineImg} 
                              alt={showcase.title}
                              className="max-h-[380px] md:max-h-[440px] w-auto mx-auto object-contain drop-shadow-md group-hover:scale-105 transition-transform duration-500 will-change-transform" 
                            />
                          </Link>
                        </div>

                        {/* Right Column (6-7 cols): Machine Title, Eyebrow, Copy, & Series Buttons */}
                        <div className="lg:col-span-7 flex flex-col justify-center">
                          
                          {/* Machine Showcase Title (uppercase navy) */}
                          <h3 className="text-xl md:text-3xl font-extrabold text-[#0D447B] tracking-tight uppercase leading-snug mb-1">
                            {showcase.title}
                          </h3>

                          {/* Machine Series Eyebrow */}
                          <h6 className="text-xs md:text-sm font-bold text-[#0D447B]/70 uppercase tracking-widest mb-4">
                            {showcase.subtitle}
                          </h6>

                          {/* Description Text */}
                          <div className="space-y-3 text-slate-600 text-sm md:text-base leading-relaxed mb-6">
                            {showcase.paras.map((para, idx) => (
                              <p key={idx}>{para}</p>
                            ))}
                          </div>

                          {/* Official Capacity Series Rectangular Buttons (Exact match of Screenshot 1) */}
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

              </div>
            ))}
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
}
