import { motion } from 'framer-motion';
import { ArrowRight, Globe2, Settings, ShieldCheck, Users } from 'lucide-react';
import homeHeroBg from '../assets/home-hero-bg.png';
import { Link } from 'react-router-dom';

const FEATURES = [
  { icon: Globe2, title: 'GLOBAL PARTNERSHIPS', desc: 'World-Class Solutions' },
  { icon: Settings, title: 'ADVANCED TECHNOLOGY', desc: 'Maximum Efficiency' },
  { icon: ShieldCheck, title: 'RELIABLE SUPPORT', desc: 'Lifetime Partnership' },
  { icon: Users, title: 'EXPERT GUIDANCE', desc: 'Tailored For You' }
];

export default function HeroSection() {
  return (
    <section id="hero" className="relative w-full mt-[80px] bg-white overflow-hidden">
      {/* =========================================================================
          DESKTOP VIEW (lg: and above)
          Uses aspect ratio matching the clean 1024x576 hero background (img1)
          with contents placed exactly matching the reference mockup (img2).
      ========================================================================= */}
      <div className="hidden lg:block relative w-full max-w-[1536px] mx-auto aspect-[1024/576] overflow-hidden select-none">
        {/* Background Image (Clean img1 with machinery and sun rays) */}
        <img 
          src={homeHeroBg} 
          alt="Promac Industrial Laundry Engineering" 
          className="w-full h-full object-contain object-center pointer-events-none" 
        />

        {/* Interactive Desktop Content Layer */}
        <div className="absolute inset-0 z-20 pointer-events-none">
          {/* Red line accent - sits at x=55, y=100 (5.37%, 17.36%) */}
          <motion.div 
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            style={{ left: '5.37%', top: '17.36%' }}
            className="absolute w-[3.2%] h-[0.4%] min-h-[3px] bg-[#CC141A] origin-left rounded-full"
          />

          {/* H1 Heading - sits at x=55, y=131 (5.37%, 22.74%) */}
          <motion.h1 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            style={{ left: '5.37%', top: '22.74%', maxWidth: '44%' }}
            className="absolute font-black tracking-tight text-[#1A233A] leading-[1.08] text-[clamp(26px,2.95vw,46px)]"
          >
            ENGINEERED FOR<br/>
            <span className="text-[#CC141A]">PERFORMANCE.</span><br/>
            BUILT FOR THE<br/>
            FUTURE.
          </motion.h1>

          {/* Paragraph - sits at x=55, y=331 (5.37%, 57.46%) */}
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            style={{ left: '5.37%', top: '57.46%', maxWidth: '34%' }}
            className="absolute text-slate-600 font-medium text-[clamp(11px,1.15vw,15.5px)] leading-[1.45] text-justify"
          >
            Complete laundry solutions engineered for efficiency, reliability and scale — from individual machines to fully integrated industrial laundry systems.
          </motion.p>

          {/* Button - sits at x=55, y=421 (5.37%, 73.09%) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            style={{ left: '5.37%', top: '73.09%' }}
            className="absolute pointer-events-auto"
          >
            <Link to="/brands">
              <motion.button 
                whileHover={{ scale: 1.04, backgroundColor: '#A31015' }}
                whileTap={{ scale: 0.97 }}
                className="bg-[#CC141A] text-white px-[clamp(16px,1.6vw,26px)] py-[clamp(7px,0.8vw,12px)] text-[clamp(9.5px,0.95vw,12px)] font-bold tracking-[0.2em] uppercase transition-all duration-300 shadow-[0_6px_20px_rgba(204,20,26,0.35)] hover:shadow-[0_8px_25px_rgba(204,20,26,0.5)] flex items-center gap-3 rounded-sm group cursor-pointer"
              >
                <span>EXPLORE SOLUTIONS</span>
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform duration-300" />
              </motion.button>
            </Link>
          </motion.div>
        </div>

        {/* Bottom Feature Strip - sits directly on clean warehouse floor with dividers like in img2 */}
        <div className="absolute bottom-[4.2%] xl:bottom-[5%] inset-x-0 w-full z-20 pointer-events-auto">
          <div className="w-full px-6 xl:px-14">
            <div className="grid grid-cols-4 gap-2 divide-x divide-slate-300/80">
              {FEATURES.map((feature, idx) => (
                <motion.div 
                  key={idx} 
                  className="flex items-center gap-3.5 pl-6 first:pl-0"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.5 + (idx * 0.08) }}
                >
                  <div className="text-[#CC141A] shrink-0">
                    <feature.icon className="w-6 h-6 xl:w-7 xl:h-7 stroke-[1.6]" />
                  </div>
                  <div>
                    <h3 className="text-[11px] xl:text-xs font-bold text-[#1A233A] tracking-wider mb-0.5">{feature.title}</h3>
                    <p className="text-[9.5px] xl:text-[10.5px] text-slate-500 font-medium">{feature.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* =========================================================================
          MOBILE & TABLET VIEW (< lg)
          Full-height responsive hero with clear focus on laundry machinery,
          legible mobile typography, tappable touch targets, and a 2x2 feature grid.
      ========================================================================= */}
      <div className="lg:hidden relative w-full min-h-[580px] sm:min-h-[640px] flex flex-col justify-between overflow-hidden">
        {/* Background Image with machinery center focus */}
        <img 
          src={homeHeroBg} 
          alt="Promac Industrial Laundry Engineering" 
          className="absolute inset-0 w-full h-full object-cover object-[72%_center] pointer-events-none" 
        />

        {/* Gradient Overlay for high-contrast mobile readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-white/40 pointer-events-none z-10" />

        {/* Main Content Area */}
        <div className="relative z-20 w-full px-6 sm:px-10 pt-10 sm:pt-14 pb-8 flex-grow flex flex-col justify-center max-w-xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            {/* Red Accent Line */}
            <div className="w-12 h-1 bg-[#CC141A] mb-6 rounded-full" />

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black leading-[1.12] tracking-tight mb-4 text-[#1A233A]">
              ENGINEERED FOR<br/>
              <span className="text-[#CC141A]">PERFORMANCE.</span><br/>
              BUILT FOR THE<br/>
              FUTURE.
            </h1>

            <p className="text-slate-600 text-sm sm:text-base font-medium leading-relaxed mb-6 max-w-md">
              Complete laundry solutions engineered for efficiency, reliability and scale — from individual machines to fully integrated industrial laundry systems.
            </p>

            <Link to="/brands" className="inline-block">
              <motion.button 
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="bg-[#CC141A] hover:bg-[#A31015] text-white px-7 py-3.5 text-xs font-bold tracking-[0.2em] uppercase transition-all duration-300 shadow-md flex items-center gap-3 rounded-sm group cursor-pointer"
              >
                <span>EXPLORE SOLUTIONS</span>
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform duration-300" />
              </motion.button>
            </Link>
          </motion.div>
        </div>

        {/* Mobile Features (2x2 Grid) */}
        <div className="relative z-20 w-full bg-white/95 backdrop-blur-md py-4 px-6 sm:px-10 border-t border-slate-100 shadow-[0_-4px_15px_rgba(0,0,0,0.03)]">
          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            {FEATURES.map((feature, idx) => (
              <div key={idx} className="flex items-start gap-2.5">
                <div className="text-[#CC141A] shrink-0 mt-0.5">
                  <feature.icon className="w-4 h-4 sm:w-5 sm:h-5 stroke-[1.8]" />
                </div>
                <div>
                  <h3 className="text-[10px] sm:text-xs font-bold text-[#1A233A] tracking-wider leading-tight">{feature.title}</h3>
                  <p className="text-[9px] sm:text-[10px] text-slate-500 font-medium leading-tight">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
