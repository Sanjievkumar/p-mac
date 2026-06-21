import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

import sealionLogo from '../assets/brands/sealion.png';
import kannegiesserLogo from '../assets/brands/kannegiesser.png';
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
    color: 'from-blue-900/40 to-blue-600/10'
  },
  { 
    id: 2, 
    label: 'KANNEGIESSER', 
    name: 'Powertrans SBW 11',
    desc: 'The ultimate continuous batch washer system, setting the global standard for industrial laundry automation.',
    img: '/Brands/Kannegiesser brand/301868_Powertrans_SBW_11_persp04.jpg', 
    logo: kannegiesserLogo,
    link: '/brands/kannegiesser',
    color: 'from-orange-900/40 to-orange-600/10'
  },
  { 
    id: 3, 
    label: 'MAESTRELLI', 
    name: 'Dreamclean Multisolvent',
    desc: 'Next-generation dry cleaning technology offering unparalleled garment care and solvent versatility.',
    img: '/Brands/MAESTRELLI brand/DREAMCLEAN MULTISOLVENT SOFT MOUNT.png', 
    logo: maestrelliLogo,
    link: '/brands/maestrelli/dream-clean',
    color: 'from-sky-900/40 to-sky-600/10'
  },
  { 
    id: 4, 
    label: 'MAXIPRESS', 
    name: 'MPCAFF Form Finisher',
    desc: 'Precision form finishing equipment guaranteeing perfectly pressed garments with absolute reliability.',
    img: 'https://promactech.com/wp-content/uploads/2024/07/MPCAFF-FORM-FINISHER-640x640.png', 
    logo: maxipressLogo,
    link: '/brands/maxipress/mpcaff-form-finisher',
    color: 'from-red-900/40 to-red-600/10'
  },
];

export default function CarouselSection() {
  const [activeIndex, setActiveIndex] = useState(0); 
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const activeMachine = MACHINES[activeIndex];

  // Auto-cycle
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((p) => (p + 1) % MACHINES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      ref={ref}
      className="relative w-full bg-[#050505] overflow-hidden font-display py-24 lg:py-32"
    >
      {/* Background Ambience */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[length:24px_24px]" />
        <AnimatePresence mode="popLayout">
          <motion.div
            key={activeMachine.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className={`absolute inset-0 bg-gradient-to-br ${activeMachine.color} opacity-40 mix-blend-screen blur-3xl`}
          />
        </AnimatePresence>
      </div>

      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-16 flex flex-col lg:flex-row items-center lg:items-stretch gap-16 lg:gap-24">
        
        {/* ── Left side: Titles & Tabs ── */}
        <div className="w-full lg:w-5/12 flex flex-col justify-center z-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-[1px] bg-[#E31E24]" />
              <h4 className="text-[#E31E24] text-xs font-bold tracking-[0.3em] uppercase">Featured Flagships</h4>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-12 leading-[1.1]">
              Our Best<br/>Sellers<span className="text-[#E31E24]">.</span>
            </h2>

            {/* Brand Tabs */}
            <div className="flex flex-col gap-4">
              {MACHINES.map((machine, index) => {
                const isActive = index === activeIndex;
                return (
                  <button
                    key={machine.id}
                    onClick={() => setActiveIndex(index)}
                    className={`group relative flex items-center justify-between p-5 rounded-2xl transition-all duration-500 overflow-hidden ${
                      isActive ? 'bg-white/10 shadow-[0_0_40px_rgba(255,255,255,0.05)] border border-white/20' : 'hover:bg-white/5 border border-transparent'
                    }`}
                  >
                    {isActive && (
                      <motion.div 
                        layoutId="activeTabIndicator"
                        className="absolute left-0 top-0 bottom-0 w-1 bg-[#E31E24]" 
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                    <div className="flex items-center gap-6 relative z-10">
                      <div className={`w-16 h-12 bg-white rounded-lg p-2 flex items-center justify-center shadow-lg transition-transform duration-500 ${isActive ? 'scale-110' : 'group-hover:scale-105'}`}>
                        <img 
                          src={machine.logo} 
                          alt={machine.label} 
                          className="max-w-full max-h-full object-contain mix-blend-multiply"
                        />
                      </div>
                      <span className={`font-bold tracking-wider text-sm transition-colors duration-300 ${isActive ? 'text-white' : 'text-slate-400 group-hover:text-white'}`}>
                        {machine.label}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* ── Right side: 3D Showcase ── */}
        <div className="w-full lg:w-7/12 relative min-h-[500px] lg:min-h-[600px] flex items-center justify-center perspective-1000">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeMachine.id}
              initial={{ opacity: 0, rotateY: 15, x: 50, scale: 0.95 }}
              animate={{ opacity: 1, rotateY: 0, x: 0, scale: 1 }}
              exit={{ opacity: 0, rotateY: -15, x: -50, scale: 0.95 }}
              transition={{ duration: 0.6, type: 'spring', bounce: 0.3 }}
              className="relative w-full h-full flex flex-col items-center justify-center group"
            >
              {/* Glass Card Backdrop */}
              <div className="absolute inset-0 w-full h-[80%] mt-auto bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/10 rounded-3xl -z-10 shadow-2xl transition-transform duration-700 group-hover:scale-[1.02]" />
              
              {/* Image */}
              <div className="relative w-full h-[60%] lg:h-[70%] flex justify-center items-end px-8 mb-8 z-20">
                <img 
                  src={activeMachine.img} 
                  alt={activeMachine.name} 
                  className="max-w-full max-h-full object-contain drop-shadow-[0_30px_40px_rgba(0,0,0,0.4)] mix-blend-screen"
                />
              </div>

              {/* Text Info */}
              <div className="relative z-20 text-center px-8 lg:px-12 pb-10">
                <h3 className="text-2xl lg:text-3xl font-bold text-white mb-3">
                  {activeMachine.name}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-6 max-w-md mx-auto">
                  {activeMachine.desc}
                </p>
                
                <Link 
                  to={activeMachine.link}
                  className="inline-flex items-center gap-2 text-white text-xs font-bold tracking-widest uppercase bg-white/10 hover:bg-[#E31E24] px-6 py-3 rounded-full transition-all duration-300 border border-white/20 hover:border-[#E31E24]"
                >
                  Explore Details <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
