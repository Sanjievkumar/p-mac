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

const PRODUCTS = [
  { id: 'sea-lion-tunnel-continuous-batch-washer-systems', title: 'TUNNEL CONTINUOUS BATCH WASHER SYSTEMS', img: 'https://promactech.com/wp-content/uploads/2024/07/Pin-Merge-1024x819.png' },
  { id: 'sea-lion-washer-extractor', title: 'WASHER EXTRACTOR', img: 'https://promactech.com/wp-content/uploads/2024/07/01.-WASHER-EXTRACTOR-1024x819.png' },
  { id: 'sea-lion-open-pocket-washer-extractor', title: 'OPEN POCKET WASHER EXTRACTOR', img: 'https://promactech.com/wp-content/uploads/2024/07/OPEN-POCKET-WASHER-EXTRACTOR-4-1024x819.png' },
  { id: 'sea-lion-barrier-washer', title: 'BARRIER WASHER', img: 'https://promactech.com/wp-content/uploads/2024/07/BARRIER-WASHER-6-1024x819.png' },
  { id: 'sea-lion-tumble-dryer', title: 'TUMBLE DRYER', img: 'https://promactech.com/wp-content/uploads/2024/07/Tumble-Dryer-2-1024x819.png' },
  { id: 'sea-lion-automatic-feeder', title: 'AUTOMATIC FEEDER', img: 'https://promactech.com/wp-content/uploads/2024/07/AUTOMATIC-FEEDER-2-1024x819.png' },
  { id: 'sea-lion-flatwork-roller-ironer', title: 'FLATWORK ROLLER IRONER', img: 'https://promactech.com/wp-content/uploads/2024/07/FLATWORK-IRONER-ROLLER-1024x819.png' },
  { id: 'sea-lion-high-speed-serpentine-flatwork-ironer', title: 'HIGH SPEED SERPENTINE FLATWORK IRONER', img: 'https://promactech.com/wp-content/uploads/2024/07/HIGH-SPEED-SERPENTINE-FLATWORK-IRONER-1024x819.png' },
  { id: 'sea-lion-high-speed-chest-ironer', title: 'HIGH SPEED CHEST IRONER', img: 'https://promactech.com/wp-content/uploads/2024/07/HIGH-SPEED-CHEST-IRONER-2-1024x819.png' },
  { id: 'sea-lion-automatic-high-speed-folder-with-stacker', title: 'AUTOMATIC HIGH SPEED FOLDER WITH STACKER', img: 'https://promactech.com/wp-content/uploads/2024/07/AUTOMATIC-LINEN-FOLDER-WITH-STACKER-1-1024x819.png' },
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
        
        {/* Top Floating Elements - Fixed to top, safely below Navbar */}
        <div className="absolute top-28 md:top-32 left-0 w-full px-8 lg:px-20 flex justify-between items-start z-30">
          <Link to="/brands" className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors group">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span className="text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase">Back to Brands</span>
          </Link>
        </div>

        {/* Main Content */}
        <div className="relative z-20 w-full px-8 lg:px-20 mt-8 md:mt-16">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <div className="flex flex-col items-start gap-2 mb-8">
              <img 
                src={sealionLogo} 
                alt="SEA-LION" 
                className="h-8 md:h-10 object-contain"
              />
              <span className="text-white/80 text-xs tracking-wider font-semibold">
                Industrial Laundry Excellence
              </span>
            </div>
            
            <h1 className="text-white text-4xl md:text-5xl lg:text-[64px] font-bold leading-[1.1] tracking-tight mb-8 drop-shadow-lg">
              Industrial<br />
              Laundry<br />
              Excellence<span className="text-[#E31E24]">.</span>
            </h1>
          </motion.div>
          
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
                <span className="text-[#E31E24] font-bold">SEA-LION</span> is a globally recognized manufacturer of industrial laundry equipment, delivering reliable and automation-ready solutions trusted by commercial laundries worldwide.
              </p>
              <p>
                Through continuous innovation and large-scale manufacturing capabilities, <span className="text-[#E31E24] font-bold">SEA-LION</span> provides a complete range of washer extractors, tumble dryers, barrier washers, and flatwork ironing systems designed for long-term performance.
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
              From washing and drying to finishing and automation, <span className="text-[#E31E24] font-bold">SEA-LION</span> delivers a complete industrial laundry workflow built for efficiency, reliability, and scale.
            </p>
            <button className="flex items-center gap-2 text-[#E31E24] text-xs font-bold tracking-widest uppercase hover:text-red-700 transition-colors">
              EXPLORE SOLUTIONS <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </section>

      {/* ── 4. Explore Solutions Grid ── */}
      <section className="w-full py-24 bg-white" id="products">
        <div className="max-w-7xl mx-auto px-8 lg:px-16">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <h4 className="text-[#E31E24] text-[10px] font-bold tracking-[0.2em] uppercase mb-2">EXPLORE PRODUCTS</h4>
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight leading-none">
                Industrial Solutions<span className="text-[#E31E24]">.</span>
              </h2>
            </div>
            <div className="h-[2px] w-16 bg-[#E31E24] mb-2 hidden md:block" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {PRODUCTS.map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.6, delay: Math.min(idx * 0.1, 0.4) }}
                viewport={{ once: true, margin: "-50px" }}
              >
                <Link to={`/brands/sea-lion/${item.id}`} className="block h-full group">
                  <div className="h-full rounded-2xl overflow-hidden bg-[#fafafa] flex flex-col cursor-pointer border border-slate-100 hover:border-transparent relative shadow-sm hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] transition-all duration-500">
                    
                    {/* Animated Border Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#E31E24]/0 via-transparent to-[#E31E24]/0 group-hover:from-[#E31E24]/20 group-hover:to-[#0B4F8A]/20 transition-all duration-700 opacity-0 group-hover:opacity-100" />

                    {/* Image Area */}
                    <div className="h-56 p-8 flex items-center justify-center bg-white relative overflow-hidden rounded-t-2xl m-[2px]">
                      {/* Grid background */}
                      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                      
                      <img 
                        src={item.img} 
                        alt={item.title} 
                        className="w-full h-full object-contain mix-blend-multiply transform group-hover:scale-[1.15] group-hover:-translate-y-2 transition-transform duration-700 relative z-10 drop-shadow-sm group-hover:drop-shadow-xl"
                      />
                    </div>

                    {/* Content Area */}
                    <div className="p-6 flex flex-col flex-grow justify-between bg-[#fafafa] relative z-10 m-[2px] mt-0 rounded-b-2xl border-t border-slate-100/50">
                      <h3 className="text-sm font-bold text-slate-800 leading-snug pr-6 transition-colors duration-300 group-hover:text-[#E31E24]">
                        {item.title}
                      </h3>
                      
                      <div className="mt-6 flex items-center text-[10px] font-bold tracking-widest uppercase text-slate-400 group-hover:text-[#E31E24] transition-colors duration-300">
                        View Machine 
                        <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-2 transition-transform duration-500" />
                      </div>
                    </div>
                    
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
