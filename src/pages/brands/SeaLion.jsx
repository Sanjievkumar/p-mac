import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Play, ArrowRight, ArrowLeft, Calendar, Globe2, Building2, Layers } from 'lucide-react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

// Asset Imports
import sealionLogo from '../../assets/brands/sealion.png';
import heroBg from '../../assets/brands/sea-lion/sealion_hero_1780727361346.png';
import buildingBg from '../../assets/brands/sea-lion/sealion_building_1780727375255.png';
import ecosystemBg from '../../assets/brands/sea-lion/sealion_ecosystem_1780727389170.png';
import washerImg from '../../assets/brands/sea-lion/sealion_washer_1780727413794.png';
import dryerImg from '../../assets/brands/sea-lion/sealion_dryer_1780727427054.png';
import barrierImg from '../../assets/brands/sea-lion/sealion_barrier_1780727439836.png';
import ironerImg from '../../assets/brands/sea-lion/sealion_ironer_1780727455295.png';

const PRODUCTS = [
  { title: 'Washer Extractors', img: washerImg },
  { title: 'Tumble Dryers', img: dryerImg },
  { title: 'Barrier Washers', img: barrierImg },
  { title: 'Flatwork Ironers', img: ironerImg },
];

export default function SeaLion() {
  return (
    <div className="w-full min-h-screen bg-white font-sans text-slate-800">
      <Navbar />

      {/* ── 1. Hero Section ── */}
      <section className="relative w-full h-[85vh] min-h-[600px] flex flex-col justify-center overflow-hidden bg-[#0A0A0A] pt-20">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-90"
          style={{ backgroundImage: `url(${heroBg})` }}
        />
        {/* Gradient Overlay for Text Readability - focused on the left */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/40 to-transparent" />
        
        {/* Top Header Row - Fixed to top, safely below Navbar */}
        <div className="absolute top-28 md:top-32 left-0 w-full px-8 lg:px-20 flex flex-col items-start z-20 gap-2">
          <img 
            src={sealionLogo} 
            alt="SEA-LION" 
            className="h-8 md:h-10 object-contain"
          />
          <span className="text-white/80 text-xs tracking-wider font-semibold">
            Industrial Laundry Excellence
          </span>
        </div>

        {/* Main Content */}
        <div className="relative z-20 w-full px-8 lg:px-20 mt-16 md:mt-24">
          <Link to="/brands" className="inline-flex items-center gap-2 text-white/70 hover:text-white mb-6 transition-colors group">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span className="text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase">Back to Brands</span>
          </Link>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white text-4xl md:text-5xl lg:text-[64px] font-bold leading-[1.1] tracking-tight mb-8 max-w-2xl drop-shadow-lg"
          >
            Industrial<br />
            Laundry<br />
            Excellence<span className="text-[#E31E24]">.</span>
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-white text-lg md:text-xl font-bold mb-8 max-w-md tracking-wide drop-shadow-md">
              Trusted Across The World.
            </p>
            
            {/* Red dash and feature list */}
            <div className="w-12 h-[2px] bg-[#E31E24] mb-6" />
            <div className="flex items-center gap-3 text-white/80 text-sm font-medium mb-12">
              <span>Reliable</span>
              <div className="w-1 h-1 rounded-full bg-[#E31E24]" />
              <span>Efficient</span>
              <div className="w-1 h-1 rounded-full bg-[#E31E24]" />
              <span>Automation Ready</span>
            </div>
          </motion.div>

          <motion.button 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="group flex items-center gap-4 text-white hover:text-white transition-colors duration-300"
          >
            <div className="w-10 h-10 rounded-full border border-white/60 flex items-center justify-center transition-all duration-300 group-hover:border-white group-hover:scale-105">
              <Play className="w-3 h-3 ml-1 text-white fill-transparent transition-colors duration-300" />
            </div>
            <span className="text-xs font-bold tracking-[0.1em] uppercase opacity-90 group-hover:opacity-100 flex items-center gap-2">
              EXPLORE SOLUTIONS <ArrowRight className="w-4 h-4 opacity-70 group-hover:opacity-100 transition-opacity" />
            </span>
          </motion.button>
        </div>

        {/* Slider Dots */}
        <div className="absolute bottom-8 left-0 w-full flex justify-center gap-2 z-20">
          <div className="w-6 h-1.5 rounded-full bg-[#E31E24]" />
          <div className="w-1.5 h-1.5 rounded-full bg-white/50" />
          <div className="w-1.5 h-1.5 rounded-full bg-white/50" />
        </div>
      </section>

      {/* ── 2. About Section ── */}
      <section className="w-full py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-8 lg:px-16 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Text Content */}
          <div className="order-2 lg:order-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-[2px] bg-[#E31E24]" />
              <h4 className="text-[#E31E24] text-xs font-bold tracking-[0.2em] uppercase">ABOUT SEA-LION</h4>
            </div>
            
            <h2 className="text-4xl md:text-[42px] font-bold text-slate-900 mb-8 leading-tight tracking-tight max-w-md">
              30+ Years of<br />Manufacturing Excellence<span className="text-[#E31E24]">.</span>
            </h2>
            
            <div className="text-slate-600 font-normal text-sm leading-relaxed space-y-6 mb-12 max-w-md">
              <p>
                SEA-LION is a globally recognized manufacturer of industrial laundry equipment, delivering reliable and automation-ready solutions trusted by commercial laundries worldwide.
              </p>
              <p>
                Through continuous innovation and large-scale manufacturing capabilities, SEA-LION provides a complete range of washer extractors, tumble dryers, barrier washers, and flatwork ironing systems designed for long-term performance.
              </p>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-4 gap-6 pt-8 border-t border-slate-100">
              <div className="flex flex-col items-start gap-3">
                <Calendar className="w-6 h-6 text-[#E31E24] stroke-[1.5]" />
                <div>
                  <h3 className="text-lg font-bold text-slate-900">30+</h3>
                  <p className="text-xs text-slate-500 font-medium">Years</p>
                </div>
              </div>
              <div className="flex flex-col items-start gap-3 border-l border-slate-100 pl-6">
                <Globe2 className="w-6 h-6 text-[#E31E24] stroke-[1.5]" />
                <div>
                  <h3 className="text-lg font-bold text-slate-900">100+</h3>
                  <p className="text-xs text-slate-500 font-medium">Countries</p>
                </div>
              </div>
              <div className="flex flex-col items-start gap-3 border-l border-slate-100 pl-6">
                <Building2 className="w-6 h-6 text-[#E31E24] stroke-[1.5]" />
                <div>
                  <h3 className="text-lg font-bold text-slate-900">Global</h3>
                  <p className="text-xs text-slate-500 font-medium leading-tight">Manufacturing</p>
                </div>
              </div>
              <div className="flex flex-col items-start gap-3 border-l border-slate-100 pl-6">
                <Layers className="w-6 h-6 text-[#E31E24] stroke-[1.5]" />
                <div>
                  <h3 className="text-lg font-bold text-slate-900">Complete</h3>
                  <p className="text-xs text-slate-500 font-medium leading-tight">Laundry Solutions</p>
                </div>
              </div>
            </div>
          </div>

          {/* Image Content */}
          <div className="order-1 lg:order-2 relative">
            <div className="rounded-sm overflow-hidden shadow-2xl relative z-10">
              <img 
                src={buildingBg} 
                alt="SEA-LION Headquarters" 
                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            {/* Red Geometric Accent */}
            <div className="absolute -bottom-6 -right-6 w-1/2 h-1/2 bg-[#E31E24] z-0" style={{ clipPath: 'polygon(100% 0, 0% 100%, 100% 100%)' }} />
          </div>
        </div>
      </section>

      {/* ── 3. Ecosystem Section ── */}
      <section className="w-full py-24 bg-[#FAFAFA] relative border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-8 lg:px-16 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Graphic Content */}
          <div className="relative p-8 bg-white rounded-xl shadow-sm border border-slate-100">
            <img 
              src={ecosystemBg} 
              alt="SEA-LION Ecosystem" 
              className="w-full h-auto object-contain"
            />
          </div>

          {/* Text Content */}
          <div className="flex flex-col justify-center">
            <div className="w-8 h-[2px] bg-[#E31E24] mb-8" />
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight tracking-tight">
              One Ecosystem.<br />Every Process<span className="text-[#E31E24]">.</span>
            </h2>
            <p className="text-slate-600 font-normal text-sm leading-relaxed mb-10 max-w-md">
              From washing and drying to finishing and automation, SEA-LION delivers a complete industrial laundry workflow built for efficiency, reliability, and scale.
            </p>
            <button className="flex items-center gap-2 text-[#E31E24] text-xs font-bold tracking-widest uppercase hover:text-red-700 transition-colors">
              EXPLORE SOLUTIONS <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </section>

      {/* ── 4. Explore Solutions Grid ── */}
      <section className="w-full py-24 bg-white">
        <div className="max-w-7xl mx-auto px-8 lg:px-16">
          <h4 className="text-[#E31E24] text-[10px] font-bold tracking-[0.2em] uppercase mb-2">EXPLORE PRODUCTS</h4>
          <h2 className="text-3xl font-bold text-slate-900 mb-12 tracking-tight">
            Explore Our Solutions<span className="text-[#E31E24]">.</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PRODUCTS.map((item, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -5 }}
                className="group border border-slate-100 rounded-lg overflow-hidden bg-[#FAFAFA] flex flex-col cursor-pointer hover:shadow-lg transition-all duration-300"
              >
                {/* Image Area */}
                <div className="h-48 p-6 flex items-center justify-center bg-[#F3F4F6] overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <img 
                    src={item.img} 
                    alt={item.title} 
                    className="w-full h-full object-contain mix-blend-multiply transform group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                {/* Content Area */}
                <div className="p-5 flex items-center justify-between bg-white border-t border-slate-100 group-hover:border-[#E31E24]/20 transition-colors duration-300">
                  <h3 className="text-sm font-bold text-slate-800">{item.title}</h3>
                  <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-[#E31E24] group-hover:translate-x-1 transition-all duration-300" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
