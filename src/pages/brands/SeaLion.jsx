import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Play, ArrowRight, ArrowLeft, Calendar, Globe2, Building2, Layers, Volume2, VolumeX } from 'lucide-react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

// Asset Imports
import sealionLogo from '../../assets/brands/sealion.png';
import heroBg from '../../assets/brands/sea-lion/sealion_hero_1780727361346.png';
import buildingBg from '../../assets/brands/sealion-campus.jpg';
import sealionCorporateVideo from '../../assets/brands/sealion-corporate.mp4';
import sealionFactory1 from '../../assets/brands/sealion-factory-1.jpg';
import sealionFactory3 from '../../assets/brands/sealion-factory-3.jpg';
import sealionFactory4 from '../../assets/brands/sealion-factory-4.jpg';

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

const FACTORY_IMAGES = [buildingBg, sealionFactory1, sealionFactory3, sealionFactory4];

export default function SeaLion() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % FACTORY_IMAGES.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };


  return (
    <div className="w-full min-h-screen bg-white font-sans text-slate-800">
      <Navbar /><div className="absolute top-[100px] left-8 lg:left-16 z-50"><Link to="/brands" className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors font-medium text-sm bg-black/20 backdrop-blur-md px-4 py-2 rounded-full border border-white/10"><ArrowLeft className="w-4 h-4" /> Back to Brands</Link></div>

      {/* ── 1. Hero Section ── */}
      <section className="relative w-full h-[85vh] min-h-[600px] flex flex-col justify-center overflow-hidden bg-[#0A0A0A] pt-20 group">
        {/* Background Video */}
        <video 
          ref={videoRef}
          autoPlay 
          loop 
          muted 
          playsInline 
          className="absolute inset-0 w-full h-full object-cover opacity-90"
        >
          <source src={sealionCorporateVideo} type="video/mp4" />
        </video>

        {/* Mute Toggle Button */}
        <button
          onClick={toggleMute}
          className="absolute bottom-8 right-8 z-20 p-4 rounded-full bg-black/40 hover:bg-black/60 backdrop-blur-sm border border-white/20 text-white shadow-lg transition-all duration-300 opacity-0 group-hover:opacity-100"
          aria-label={isMuted ? "Unmute video" : "Mute video"}
        >
          {isMuted ? <VolumeX className="w-6 h-6" /> : <Volume2 className="w-6 h-6" />}
        </button>
        
      </section>

      {/* ── 2. About Section ── */}
      <section className="w-full py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-8 lg:px-16 grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-center">
          
          {/* Text Content */}
          <div className="order-2 lg:order-1 lg:col-span-5">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-[2px] bg-[#E31E24]" />
              <h4 className="text-[#E31E24] text-base md:text-lg font-bold tracking-[0.2em] uppercase">ABOUT SEA-LION</h4>
            </div>
            
            <h2 className="text-4xl md:text-[42px] font-bold text-slate-900 mb-8 leading-tight tracking-tight max-w-md">
              55+ Years of<br />Manufacturing Excellence<span className="text-[#E31E24]">.</span>
            </h2>
            
            <div className="text-slate-600 font-normal text-sm leading-relaxed space-y-6 mb-12 max-w-md">
              <p>
                <span className="text-[#E31E24] font-bold">Established in 1969</span>, Jiangsu <span className="text-[#E31E24] font-bold">Sea-lion</span> Machinery Co., Ltd. (formerly <span className="text-[#E31E24] font-bold">Sea-lion</span> Machinery Group) is the oldest manufacturer of industrial laundry machines in China, gaining a wealth of experiences on R&D and manufacture with laundry machines.
              </p>
              <p>
                <span className="text-[#E31E24] font-bold">Sea-lion</span> has a area of 166,000㎡ and building area of 116,800㎡ and possesses the total assets of 620 million RMB. <span className="text-[#E31E24] font-bold">Sea-lion</span>’s annual domestic sales can reach 510 million RMB and annual export amount to 10 million USD dollars.
              </p>
              <p>
                <span className="text-[#E31E24] font-bold">Sea-lion</span> has the biggest product scale and the most comprehensive variety in the line of washing machinery in China, including 10 series, 20 varieties and more than 100 types with annual production capacity of 12,000 sets.
              </p>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-slate-100">
              <div className="flex flex-col items-start gap-3">
                <Calendar className="w-6 h-6 text-[#E31E24] stroke-[1.5]" />
                <div>
                  <h3 className="text-lg font-bold text-slate-900">55+</h3>
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
          <div className="order-1 lg:order-2 relative lg:col-span-7 w-full scale-100 lg:scale-110 lg:translate-x-4">
            <div className="rounded-sm overflow-hidden shadow-2xl relative z-10">
              <div className="relative w-full aspect-[4/3] sm:aspect-[16/9] lg:aspect-auto lg:h-[600px] overflow-hidden">
                {FACTORY_IMAGES.map((img, idx) => (
                  <motion.img 
                    key={idx}
                    src={img} 
                    alt={`SEA-LION Factory ${idx + 1}`} 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: currentSlide === idx ? 1 : 0, scale: currentSlide === idx ? 1.05 : 1 }}
                    transition={{ duration: 1.2, ease: 'easeInOut' }}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                ))}
                
                {/* Slideshow Controls */}
                <div className="absolute bottom-4 left-0 w-full flex justify-center gap-2 z-20">
                  {FACTORY_IMAGES.map((_, idx) => (
                    <button 
                      key={idx}
                      onClick={() => setCurrentSlide(idx)}
                      className={`h-1.5 rounded-full transition-all duration-300 ${currentSlide === idx ? 'w-6 bg-[#E31E24]' : 'w-2 bg-white/60 hover:bg-white'}`}
                    />
                  ))}
                </div>
              </div>
            </div>
            {/* Red Geometric Accent */}
            <div className="absolute -bottom-6 -right-6 w-1/2 h-1/2 bg-[#E31E24] z-0" style={{ clipPath: 'polygon(100% 0, 0% 100%, 100% 100%)' }} />
          </div>
        </div>
      </section>

      {/* ── 3. Ecosystem Section ── */}
      <section className="w-full py-24 bg-gradient-to-br from-[#0B4F8A] to-[#042848] relative">
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
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight tracking-tight">
              One Ecosystem.<br />Every Process<span className="text-[#E31E24]">.</span>
            </h2>
            <p className="text-blue-50 font-normal text-sm md:text-base leading-relaxed mb-10 max-w-md">
              From washing and drying to finishing and automation, <span className="text-[#E31E24] font-bold">SEA-LION</span> delivers a complete industrial laundry workflow built for efficiency, reliability, and scale.
            </p>
          </div>

        </div>
      </section>

      {/* ✨ 4. Explore Solutions Grid ✨ */}
      <section className="w-full py-24 bg-white relative overflow-hidden" id="products">
        {/* Animated Grid Background */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.10] animate-grid"
          style={{
            backgroundImage: 'linear-gradient(#0B4F8A 1px, transparent 1px), linear-gradient(90deg, #0B4F8A 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
          aria-hidden="true"
        />

        <div className="max-w-7xl mx-auto px-8 lg:px-16 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <h4 className="text-[#E31E24] text-sm md:text-base font-bold tracking-[0.2em] uppercase mb-2">EXPLORE PRODUCTS</h4>
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
                    <div className="h-[300px] p-2 flex items-center justify-center bg-white relative overflow-hidden rounded-t-2xl m-[2px]">
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
