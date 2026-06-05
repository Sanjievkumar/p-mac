import React from 'react';
import { motion } from 'framer-motion';
import { Play, Settings, ArrowRight, ShieldCheck, Cpu, MonitorPlay } from 'lucide-react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

// Asset Imports
import kannegiesserLogo from '../../assets/brands/kannegiesser.png';
import heroBg from '../../assets/brands/kannegiesser/kannegiesser_video_thumbnail_1780671618796.png';
import buildingBg from '../../assets/brands/kannegiesser/kannegiesser_building_1780671039860.png';
import mapBg from '../../assets/brands/kannegiesser/kannegiesser_map_1780671051559.png';
import washingImg from '../../assets/brands/kannegiesser/kannegiesser_washing_1780671064949.png';
import finishingImg from '../../assets/brands/kannegiesser/kannegiesser_finishing_1780671087290.png';
import automationImg from '../../assets/brands/kannegiesser/kannegiesser_automation_1780671100601.png';
import softwareImg from '../../assets/brands/kannegiesser/kannegiesser_software_1780671113625.png';

const SOLUTIONS = [
  {
    title: 'Washing Systems',
    img: washingImg,
    icon: <Settings className="w-5 h-5 text-white" />
  },
  {
    title: 'Finishing Systems',
    img: finishingImg,
    icon: <ShieldCheck className="w-5 h-5 text-white" />
  },
  {
    title: 'Automation & Logistics',
    img: automationImg,
    icon: <Cpu className="w-5 h-5 text-white" />
  },
  {
    title: 'SmartLaundry Software',
    img: softwareImg,
    icon: <MonitorPlay className="w-5 h-5 text-white" />
  }
];

export default function Kannegiesser() {
  return (
    <div className="w-full min-h-screen bg-white font-sans text-slate-800">
      <Navbar />

      {/* ── 1. Hero Section (Video Placeholder) ── */}
      <section className="relative w-full h-[85vh] min-h-[600px] flex flex-col justify-center overflow-hidden bg-[#0A0A0A]">
        {/* Background Image (Acts as Video Thumbnail) */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-80"
          style={{ backgroundImage: `url(${heroBg})` }}
        />
        {/* Heavy Gradient Overlay for Text Readability - focused on the left */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent" />
        
        {/* Top Header Row - Fixed to top to prevent clashing */}
        <div className="absolute top-10 left-0 w-full px-8 lg:px-20 flex justify-between items-start z-20">
          {/* Logo inverted to pure white */}
          <img 
            src={kannegiesserLogo} 
            alt="Kannegiesser" 
            className="h-6 md:h-8 object-contain brightness-0 invert opacity-90"
          />
          <div className="flex items-center gap-3 mt-1">
            <span className="text-white text-[10px] md:text-xs tracking-wide font-medium opacity-80 capitalize">
              A Promac Technologies Partner
            </span>
            <div className="w-4 md:w-6 h-[1px] bg-[#E31E24]" />
          </div>
        </div>

        {/* Main Content - Vertically centered but aligned strictly with header's left padding */}
        <div className="relative z-20 w-full px-8 lg:px-20">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white text-3xl md:text-4xl lg:text-[42px] font-semibold leading-[1.3] tracking-normal mb-8 max-w-xl drop-shadow-xl"
          >
            GERMAN ENGINEERING.<br />
            GLOBAL LAUNDRY LEADERSHIP.
          </motion.h1>
          
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
          
          {/* Text Content */}
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
                For over seven decades, Kannegiesser has set global benchmarks in industrial laundry technology. From washing and finishing to logistics and automation, we deliver fully integrated systems trusted by leading industries worldwide.
              </p>
              <p>
                As Kannegiesser's strategic partner in India, Promac Technologies brings these globally proven solutions closer to businesses through consultation, implementation, commissioning, and long-term support.
              </p>
            </div>

            {/* Stats */}
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
                <p className="text-xs text-slate-500 uppercase tracking-wider font-bold">Laundry Ecosystem</p>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <img 
              src={buildingBg} 
              alt="Kannegiesser Headquarters" 
              className="w-full h-auto object-cover shadow-2xl"
            />
            {/* Red Geometric Accent */}
            <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-[#E31E24] -z-10" style={{ clipPath: 'polygon(100% 0, 0% 100%, 100% 100%)' }} />
          </div>
        </div>
      </section>

      {/* ── 3. Global Presence ── */}
      <section className="w-full py-24 bg-[#F8F9FA] relative border-t border-slate-200/50">
        <div className="max-w-7xl mx-auto px-8 lg:px-16 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Text Content */}
          <div className="order-2 lg:order-1">
            <h4 className="text-[#E31E24] text-xs font-bold tracking-[0.2em] uppercase mb-6">GLOBAL PRESENCE</h4>
            <h2 className="text-4xl md:text-5xl font-bold text-[#001F3F] mb-8 leading-tight tracking-tight">
              Trusted Worldwide.<br />Engineered In Germany<span className="text-[#E31E24]">.</span>
            </h2>
            <p className="text-slate-500 font-light text-lg leading-relaxed mb-12 max-w-md">
              Delivering intelligent laundry solutions across more than 50 countries through advanced automation, operational efficiency, and decades of engineering excellence.
            </p>

            <div className="flex items-center gap-12">
              <div>
                <h3 className="text-4xl font-bold text-[#0250A0] mb-2">50+</h3>
                <p className="text-xs text-[#001F3F] font-bold uppercase tracking-wider">Countries<br />Global Installations</p>
              </div>
              <div className="w-[1px] h-16 bg-slate-300" />
              <div>
                <h3 className="text-4xl font-bold text-[#0250A0] mb-2">75+</h3>
                <p className="text-xs text-[#001F3F] font-bold uppercase tracking-wider">Years<br />Engineering Excellence</p>
              </div>
            </div>
          </div>

          {/* Map Image */}
          <div className="order-1 lg:order-2 flex justify-end">
            <img 
              src={mapBg} 
              alt="Global Presence Map" 
              className="w-full max-w-2xl h-auto object-contain opacity-80 mix-blend-multiply"
            />
          </div>
        </div>
      </section>

      {/* ── 4. Explore Solutions ── */}
      <section className="w-full py-24 bg-white">
        <div className="max-w-7xl mx-auto px-8 lg:px-16 text-center">
          <h4 className="text-[#E31E24] text-xs font-bold tracking-[0.2em] uppercase mb-4">EXPLORE SOLUTIONS</h4>
          <h2 className="text-3xl md:text-4xl font-bold text-[#001F3F] mb-16 tracking-tight">
            Explore Kannegiesser Solutions<span className="text-[#E31E24]">.</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
            {SOLUTIONS.map((item, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -8 }}
                className="group border border-slate-100 rounded-xl overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] transition-all duration-300 bg-white flex flex-col cursor-pointer"
              >
                {/* Image */}
                <div className="h-48 overflow-hidden relative">
                  <div className="absolute inset-0 bg-[#001F3F]/10 group-hover:bg-transparent transition-colors duration-500 z-10" />
                  <img 
                    src={item.img} 
                    alt={item.title} 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                  {/* Floating Icon */}
                  <div className="absolute -bottom-5 left-6 w-10 h-10 rounded-full bg-[#60A5FA] flex items-center justify-center border-4 border-white z-20 group-hover:bg-[#0250A0] transition-colors duration-300">
                    {item.icon}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 pt-10 flex-grow flex items-center justify-between">
                  <h3 className="text-[15px] font-bold text-[#001F3F]">{item.title}</h3>
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
