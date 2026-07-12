import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Play, ArrowRight, ArrowLeft, WashingMachine } from 'lucide-react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

// Asset Imports
import kannegiesserLogo from '../../assets/brands/kannegiesser.png';
import heroBg from '../../assets/brands/kannegiesser/kannegiesser_video_thumbnail_1780671618796.png';
import buildingBg from '../../assets/brands/kannegiesser/kannegiesser_building_1780671039860.png';
import mapBg from '../../assets/brands/kannegiesser/kannegiesser_map_1780671051559.png';

const PRODUCTS = [
  {
    id: 'powertrans-vario',
    category: 'Washing Technology',
    name: 'PowerTrans Vario',
    desc: 'Tunnel Washers',
    img: 'https://www.kannegiesser.com/fileadmin/SHARED/Images/Products/Keyvisual_PT_VARIO.jpg'
  },
  {
    id: 'powerpress',
    category: 'Washing Technology',
    name: 'PowerPress',
    desc: 'Extraction Technology',
    img: 'https://www.kannegiesser.com/fileadmin/SHARED/Images/Products/Keyvisual_PowerPress.jpg'
  },
  {
    id: 'powerdry',
    category: 'Washing Technology',
    name: 'PowerDry',
    desc: 'Dryers',
    img: 'https://www.kannegiesser.com/fileadmin/SHARED/Images/Products/Keyvisual_PowerDry.jpg'
  },
  {
    id: 'synchro',
    category: 'Flatwork',
    name: 'Synchro EMT / EMQ',
    desc: 'Feeding machines',
    img: 'https://www.kannegiesser.com/fileadmin/SHARED/Images/Products/Keyvisual_EMQ_EMT.jpg'
  },
  {
    id: 'emv',
    category: 'Flatwork',
    name: 'EMV',
    desc: 'Feeding machines',
    img: 'https://www.kannegiesser.com/fileadmin/SHARED/Images/Products/Keyvisual_EMV.jpg'
  },
  {
    id: 'emc',
    category: 'Flatwork',
    name: 'EMC',
    desc: 'Feeding machines',
    img: 'https://www.kannegiesser.com/fileadmin/SHARED/Images/Products/Keyvisual_EMC.jpg'
  },
  {
    id: 'xfm',
    category: 'Flatwork',
    name: 'XFM',
    desc: 'Dry work folding machines',
    img: 'https://www.kannegiesser.com/fileadmin/SHARED/Images/Products/Keyvisual_XFM.jpg'
  },
  {
    id: 'shm-gas',
    category: 'Flatwork',
    name: 'SHM / SHM gas',
    desc: 'Ironer',
    img: 'https://www.kannegiesser.com/fileadmin/SHARED/Images/Products/Keyvisual_SHM.png'
  },
  {
    id: 'cfm',
    category: 'Flatwork',
    name: 'CFM',
    desc: 'Folding machines',
    img: 'https://www.kannegiesser.com/fileadmin/SHARED/Images/Products/Keyvisual_CFM.jpg'
  },
  {
    id: 'sfm',
    category: 'Flatwork',
    name: 'SFM',
    desc: 'Folding machines',
    img: 'https://www.kannegiesser.com/fileadmin/SHARED/Images/Products/Keyvisual_SFM.jpg'
  }
];

export default function Kannegiesser() {
  const [activeTab, setActiveTab] = useState('Washing Technology');
  
  const filteredProducts = PRODUCTS.filter(p => p.category === activeTab);

  return (
    <div className="w-full min-h-screen bg-white font-sans text-slate-800">
      <Navbar />

      {/* ── 1. Hero Section (Video Placeholder) ── */}
      <section className="relative w-full h-[85vh] min-h-[600px] flex flex-col justify-center overflow-hidden bg-[#0A0A0A] pt-20">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroBg})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/30 to-transparent" />
        
        <div className="absolute top-28 md:top-32 left-0 w-full px-8 lg:px-20 flex justify-between items-start z-30">
          <Link to="/brands" className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors group">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span className="text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase">Back to Brands</span>
          </Link>
          <div className="flex items-center gap-3 mt-1">
            <span className="text-white text-[10px] md:text-xs tracking-wide font-medium opacity-90 capitalize drop-shadow-md">
              A Promac Technologies Partner
            </span>
            <div className="w-4 md:w-6 h-[2px] bg-[#E31E24]" />
          </div>
        </div>

        <div className="relative z-20 w-full px-8 lg:px-20 mt-8 md:mt-16">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h2 className="text-white text-2xl md:text-3xl font-black italic tracking-tighter drop-shadow-md mb-8">
              Kannegiesser
            </h2>
            <h1 className="text-white text-4xl md:text-5xl lg:text-[64px] font-semibold leading-[1.1] tracking-tight mb-6 drop-shadow-lg">
              GERMAN ENGINEERING.<br />
              GLOBAL LAUNDRY LEADERSHIP.
            </h1>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="w-8 h-[2px] bg-[#E31E24] mb-6" />
            <p className="text-white/80 text-sm md:text-base font-normal mb-12 max-w-sm leading-relaxed drop-shadow-md">
              75+ Years of Innovation in<br />Industrial Laundry Technology.
            </p>
          </motion.div>

          <motion.button 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="group flex items-center gap-4 text-white/90 hover:text-white transition-colors duration-300"
          >
            <div className="w-10 h-10 rounded-full border border-white/60 flex items-center justify-center transition-all duration-300 group-hover:border-white">
              <Play className="w-3 h-3 ml-1 text-white fill-transparent transition-colors duration-300" />
            </div>
            <span className="text-[11px] font-bold tracking-[0.15em] uppercase opacity-90">
              DISCOVER KANNEGIESSER
            </span>
          </motion.button>
        </div>
      </section>

      {/* ── 2. About Kannegiesser ── */}
      <section className="w-full py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-8 lg:px-16 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          <div>
            <div className="flex items-center gap-4 mb-6">
              <h4 className="text-[#E31E24] text-xs font-bold tracking-[0.2em] uppercase">ABOUT KANNEGIESSER</h4>
            </div>
            <div className="w-12 h-[2px] bg-[#E31E24] mb-8" />
            
            <h2 className="text-4xl md:text-5xl font-bold text-[#001F3F] mb-8 leading-tight tracking-tight">
              75+ Years of<br />Laundry Innovation<span className="text-[#E31E24]">.</span>
            </h2>
            
            <div className="text-slate-500 font-light text-lg leading-relaxed space-y-6 mb-12">
              <p>
                For over seven decades, <span className="text-[#0B4F8A] font-bold">Kannegiesser</span> has set global benchmarks in industrial laundry technology. From washing and finishing to logistics and automation, we deliver fully integrated systems trusted by leading industries worldwide.
              </p>
              <p>
                As <span className="text-[#0B4F8A] font-bold">Kannegiesser's</span> strategic partner in India, Promac Technologies brings these globally proven solutions closer to businesses through consultation, implementation, commissioning, and long-term support.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-slate-200 pt-8">
              <div>
                <h3 className="text-2xl font-bold text-[#E31E24] mb-1">1948</h3>
                <p className="text-xs text-slate-500 uppercase tracking-wider font-bold">Founded</p>
              </div>
              <div className="border-l border-slate-200 pl-8">
                <h3 className="text-2xl font-bold text-[#E31E24] mb-1">Germany</h3>
                <p className="text-xs text-slate-500 uppercase tracking-wider font-bold">Origin</p>
              </div>
              <div className="border-l border-slate-200 pl-8">
                <h3 className="text-2xl font-bold text-[#E31E24] mb-1">50+</h3>
                <p className="text-xs text-slate-500 uppercase tracking-wider font-bold">Countries</p>
              </div>
              <div className="border-l border-slate-200 pl-8">
                <h3 className="text-2xl font-bold text-[#E31E24] mb-1">Complete</h3>
                <p className="text-xs text-slate-500 uppercase tracking-wider font-bold">Ecosystem</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <img 
              src={buildingBg} 
              alt="Kannegiesser Headquarters" 
              className="w-full h-auto object-cover shadow-2xl rounded-2xl"
            />
            <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-[#E31E24] -z-10" style={{ clipPath: 'polygon(100% 0, 0% 100%, 100% 100%)' }} />
          </div>
        </div>
      </section>

      {/* ── 3. Product Catalog ── */}
      <section className="w-full py-24 bg-[#F8F9FA] relative border-t border-slate-200/50">
        <div className="max-w-7xl mx-auto px-8 lg:px-16">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div>
              <h4 className="text-[#E31E24] text-xs font-bold tracking-[0.2em] uppercase mb-4">PRODUCT CATALOG</h4>
              <h2 className="text-4xl md:text-5xl font-bold text-[#001F3F] tracking-tight">
                Explore Kannegiesser<span className="text-[#E31E24]">.</span>
              </h2>
            </div>
            
            {/* Category Tabs */}
            <div className="flex bg-white rounded-xl p-2 shadow-sm border border-slate-200">
              {['Washing Technology', 'Flatwork'].map(tab => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-8 py-3 rounded-lg text-sm font-bold transition-all duration-300 ${
                    activeTab === tab 
                      ? 'bg-[#001F3F] text-white shadow-md' 
                      : 'text-slate-500 hover:text-[#001F3F] hover:bg-slate-50'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          <AnimatePresence mode="wait">
            <motion.div 
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredProducts.length > 0 ? (
                filteredProducts.map((product) => (
                  <Link 
                    key={product.id}
                    to={`/brands/kannegiesser/${product.id}`}
                    className="group bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col hover:-translate-y-2"
                  >
                    <div className="h-64 bg-slate-50 p-6 relative flex items-center justify-center overflow-hidden">
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,31,63,0.03)_0%,transparent_100%)] pointer-events-none" />
                      <img 
                        src={product.img} 
                        alt={product.name}
                        className="max-h-full max-w-full object-contain drop-shadow-md group-hover:scale-110 transition-transform duration-700"
                      />
                    </div>
                    <div className="p-8 flex flex-col flex-1 bg-white">
                      <h4 className="text-[#E31E24] text-[10px] font-bold tracking-widest uppercase mb-2">
                        {product.desc}
                      </h4>
                      <h3 className="text-2xl font-bold text-[#001F3F] mb-6">
                        {product.name}
                      </h3>
                      
                      <div className="mt-auto flex items-center justify-between">
                        <span className="text-sm font-bold text-slate-400 group-hover:text-[#001F3F] transition-colors">
                          View Details
                        </span>
                        <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-[#E31E24] transition-colors duration-300">
                          <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-white transition-colors" />
                        </div>
                      </div>
                    </div>
                  </Link>
                ))
              ) : (
                <div className="col-span-full py-20 text-center flex flex-col items-center">
                  <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mb-6">
                    <span className="text-slate-400 font-bold text-2xl">?</span>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-800 mb-2">Products Coming Soon</h3>
                  <p className="text-slate-500">We are currently updating our {activeTab} catalogue.</p>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      <Footer />
    </div>
  );
}
