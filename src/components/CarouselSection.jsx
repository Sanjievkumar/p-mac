import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

import sealionLogo from '../assets/brands/sealion.png';
import maestrelliLogo from '../assets/brands/maestrelli.png';
import maxipressLogo from '../assets/brands/maxipress.png';

const MACHINES = [
  { 
    id: 1, 
    label: 'SEA-LION', 
    name: 'Industrial Washer Extractor',
    desc: 'High-performance washing technology designed for massive throughput and ultimate energy efficiency.',
    img: '/Brands/sea-lion brand/WASHER-EXTRACTOR.png', 
    logo: sealionLogo,
    link: '/brands/sea-lion/washer-extractors',
    brandColor: '#E31E24',
    bgClass: 'from-[#E31E24] to-[#8F1316]',
    activeBg: 'from-white/20 to-transparent'
  },
  { 
    id: 3, 
    label: 'MAESTRELLI', 
    name: 'Dreamclean Multisolvent',
    desc: 'Next-generation dry cleaning technology offering unparalleled garment care and solvent versatility.',
    img: '/Brands/MAESTRELLI brand/DREAMCLEAN MULTISOLVENT SOFT MOUNT.png', 
    logo: maestrelliLogo,
    link: '/brands/maestrelli/dream-clean',
    brandColor: '#001F3F',
    bgClass: 'from-[#003366] to-[#001429]',
    activeBg: 'from-white/10 to-transparent'
  },
  { 
    id: 4, 
    label: 'MAXIPRESS', 
    name: 'MPCAFF Form Finisher',
    desc: 'Precision form finishing equipment guaranteeing perfectly pressed garments with absolute reliability.',
    img: 'https://promactech.com/wp-content/uploads/2024/07/MPCAFF-FORM-FINISHER-640x640.png', 
    logo: maxipressLogo,
    link: '/brands/maxipress/mpcaff-form-finisher',
    brandColor: '#D3261C',
    bgClass: 'from-[#D3261C] to-[#8A1912]',
    activeBg: 'from-white/20 to-transparent'
  },
];

export default function CarouselSection() {
  const [hoveredIndex, setHoveredIndex] = useState(0); 
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      ref={ref}
      className="relative w-full bg-white overflow-hidden font-display py-24 lg:py-32"
    >
      {/* Background Ambience */}
      <div className="absolute inset-0 w-full h-full opacity-30">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.04)_1px,transparent_1px)] bg-[length:24px_24px]" />
      </div>

      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-16 flex flex-col items-center">
        
        {/* Title Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="w-full flex flex-col md:flex-row justify-between items-end mb-12 lg:mb-16 gap-6"
        >
          <div>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-[1px] bg-[#E31E24]" />
              <h4 className="text-[#E31E24] text-xs font-bold tracking-[0.3em] uppercase">Featured Flagships</h4>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.1]">
              Our Best Sellers<span className="text-[#E31E24]">.</span>
            </h2>
          </div>
          <Link to="/brands" className="hidden md:flex items-center gap-2 text-slate-500 hover:text-[#E31E24] text-xs font-bold tracking-widest uppercase transition-colors group">
            VIEW ALL BRANDS <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>

        {/* Expanding Cards Container */}
        <div className="w-full flex flex-col lg:flex-row h-[700px] lg:h-[600px] gap-4 lg:gap-6">
          {MACHINES.map((machine, index) => {
            const isActive = hoveredIndex === index;
            
            return (
              <motion.div
                key={machine.id}
                layout
                onMouseEnter={() => setHoveredIndex(index)}
                onClick={() => setHoveredIndex(index)}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { 
                  opacity: 1, 
                  y: 0,
                  flex: isActive ? 6 : 1
                } : {}}
                transition={{ 
                  duration: 0.8, 
                  type: "spring", 
                  stiffness: 150, 
                  damping: 20,
                  opacity: { delay: index * 0.1 }
                }}
                className={`relative rounded-3xl overflow-hidden cursor-pointer group flex-shrink-0 lg:flex-shrink transition-all duration-500 shadow-xl ${
                  isActive ? 'h-[500px] lg:h-full border border-transparent shadow-2xl' : 'h-[80px] lg:h-full border border-black/5 hover:shadow-2xl opacity-90 hover:opacity-100'
                }`}
              >
                {/* Background base */}
                <div className={`absolute inset-0 bg-gradient-to-br ${machine.bgClass} z-0`} />
                
                {/* Active glow */}
                <motion.div 
                  animate={{ opacity: isActive ? 1 : 0 }}
                  className={`absolute inset-0 bg-gradient-to-t ${machine.activeBg} mix-blend-screen z-0`} 
                />

                <div className="absolute inset-0 p-6 lg:p-10 flex flex-col z-10 w-full h-full">
                  
                  {/* Top: Logo & Name */}
                  <div className={`flex items-center justify-between transition-all duration-500 ${isActive ? 'opacity-100 delay-200' : 'opacity-0 lg:opacity-100 lg:rotate-[-90deg] lg:origin-top-left lg:-translate-x-16 lg:translate-y-20'}`}>
                    <div className="bg-white rounded-lg p-3 shadow-lg">
                      <img 
                        src={machine.logo} 
                        alt={machine.label} 
                        className="h-6 md:h-8 w-auto object-contain mix-blend-multiply"
                      />
                    </div>
                  </div>

                  {/* Vertical Label (only visible when collapsed on desktop) */}
                  <div className={`hidden lg:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-90 text-xl font-bold tracking-[0.2em] uppercase whitespace-nowrap text-white/50 transition-colors duration-300 ${isActive ? 'opacity-0' : 'opacity-100 group-hover:text-white/90'}`}>
                    {machine.label}
                  </div>

                  {/* Horizontal Label (only visible when collapsed on mobile) */}
                  <div className={`flex lg:hidden absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-xl font-bold tracking-[0.2em] uppercase whitespace-nowrap text-white/70 transition-opacity duration-300 ${isActive ? 'opacity-0' : 'opacity-100'}`}>
                    {machine.label}
                  </div>

                  {/* Main Content (Image & Text) */}
                  <div className={`relative flex-1 flex flex-col justify-end mt-12 transition-all duration-700 ${isActive ? 'opacity-100 translate-y-0 delay-100' : 'opacity-0 translate-y-20 pointer-events-none'}`}>
                    
                    {/* Machine Image */}
                    <div className="absolute top-0 right-0 lg:left-0 lg:right-auto bottom-36 lg:bottom-40 w-full flex items-center justify-center pointer-events-none">
                      <motion.div 
                        animate={{ 
                          scale: isActive ? 1 : 0.8,
                          x: isActive ? 0 : 50,
                          rotateY: isActive ? 0 : -20
                        }}
                        transition={{ duration: 0.8, type: "spring" }}
                        className="bg-white rounded-3xl p-6 lg:p-8 shadow-[0_20px_40px_rgba(0,0,0,0.3)] w-[90%] max-w-sm h-auto aspect-square flex items-center justify-center relative overflow-hidden"
                      >
                        {/* Subtle inner radial gradient for a studio lighting effect */}
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.02)_0%,transparent_100%)] pointer-events-none" />
                        <img 
                          src={machine.img} 
                          alt={machine.name}
                          className="max-h-full max-w-full object-contain drop-shadow-sm"
                        />
                      </motion.div>
                    </div>

                    {/* Bottom Details */}
                    <div className="relative z-20 bg-black/20 backdrop-blur-md border border-white/10 rounded-2xl p-6 lg:p-8 w-full transform transition-transform duration-500 shadow-xl">
                      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                        <div className="flex-1">
                          <h4 className="text-white/60 text-[10px] font-bold tracking-widest uppercase mb-2">
                            {machine.label}
                          </h4>
                          <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                            {machine.name}
                          </h3>
                          <p className="text-white/80 text-sm leading-relaxed max-w-lg hidden md:block">
                            {machine.desc}
                          </p>
                        </div>
                        
                        <Link 
                          to={machine.link}
                          className="flex-shrink-0 inline-flex items-center justify-center gap-2 text-slate-900 bg-white hover:bg-slate-100 text-xs font-bold tracking-widest uppercase px-6 py-4 rounded-xl transition-all duration-300 shadow-lg"
                        >
                          Explore <ArrowRight className="w-4 h-4" />
                        </Link>
                      </div>
                    </div>

                  </div>
                  
                </div>
              </motion.div>
            );
          })}
        </div>

        <Link to="/brands" className="mt-8 flex md:hidden items-center justify-center gap-2 text-slate-500 hover:text-slate-900 text-xs font-bold tracking-widest uppercase transition-colors w-full border border-slate-200 rounded-xl py-4 bg-white">
          VIEW ALL BRANDS <ArrowRight className="w-4 h-4" />
        </Link>

      </div>
    </section>
  );
}
