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
          Uses aspect ratio matching the 1024x576 hero background (img1)
          with contents placed with strong, commanding hierarchy and proper spacing.
      ========================================================================= */}
      <div className="hidden lg:block relative w-full max-w-[1536px] mx-auto aspect-[1024/576] overflow-hidden select-none">
        {/* Background Image (Clean img1 with machinery) */}
        <img 
          src={homeHeroBg} 
          alt="Promac Industrial Laundry Engineering" 
          className="w-full h-full object-contain object-center pointer-events-none" 
        />

        {/* Interactive Desktop Content Layer */}
        <div className="absolute inset-0 z-20 pointer-events-none">
          {/* Red line accent - positioned above headline with strong presence */}
          <motion.div 
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            style={{ left: '5.5%', top: '15%' }}
            className="absolute w-[4%] h-[0.5%] min-h-[4px] bg-[#CC141A] origin-left rounded-full"
          />

          {/* H1 Heading - enlarged, bold, commanding */}
          <motion.h1 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            style={{ left: '5.5%', top: '20%', maxWidth: '46%' }}
            className="absolute font-black tracking-tight text-[#1A233A] leading-[1.04] text-[clamp(28px,3.6vw,58px)] drop-shadow-sm"
          >
            ENGINEERED FOR<br/>
            <span className="text-[#CC141A]">PERFORMANCE.</span><br/>
            BUILT FOR THE<br/>
            FUTURE.
          </motion.h1>

          {/* Paragraph - larger, highly readable typography */}
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            style={{ left: '5.5%', top: '55%', maxWidth: '38%' }}
            className="absolute text-slate-700 font-medium text-[clamp(12px,1.25vw,17px)] leading-[1.5] text-justify"
          >
            Complete laundry solutions engineered for efficiency, reliability and scale — from individual machines to fully integrated industrial laundry systems.
          </motion.p>

          {/* Button - enlarged, prominent CTA */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            style={{ left: '5.5%', top: '71.5%' }}
            className="absolute pointer-events-auto"
          >
            <Link to="/brands">
              <motion.button 
                whileHover={{ scale: 1.04, backgroundColor: '#A31015' }}
                whileTap={{ scale: 0.97 }}
                className="bg-[#CC141A] text-white px-[clamp(18px,1.9vw,30px)] py-[clamp(9px,1vw,15px)] text-[clamp(10px,1vw,13.5px)] font-bold tracking-[0.22em] uppercase transition-all duration-300 shadow-[0_6px_22px_rgba(204,20,26,0.38)] hover:shadow-[0_8px_28px_rgba(204,20,26,0.55)] flex items-center gap-3.5 rounded-sm group cursor-pointer"
              >
                <span>EXPLORE SOLUTIONS</span>
                <ArrowRight className="w-4 h-4 xl:w-5 xl:h-5 transform group-hover:translate-x-1.5 transition-transform duration-300" />
              </motion.button>
            </Link>
          </motion.div>
        </div>

        {/* Bottom Feature Strip - sits on clean warehouse floor with dividers */}
        <div className="absolute bottom-[3.5%] xl:bottom-[4.2%] inset-x-0 w-full z-20 pointer-events-auto">
          <div className="w-full px-6 xl:px-14">
            <div className="grid grid-cols-4 gap-3 divide-x divide-slate-300/80">
              {FEATURES.map((feature, idx) => (
                <motion.div 
                  key={idx} 
                  className="flex items-center gap-3.5 pl-6 first:pl-0"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.5 + (idx * 0.08) }}
                >
                  <div className="text-[#CC141A] shrink-0">
                    <feature.icon className="w-6 h-6 xl:w-8 xl:h-8 stroke-[1.8]" />
                  </div>
                  <div>
                    <h3 className="text-xs xl:text-sm font-extrabold text-[#1A233A] tracking-wider mb-0.5">{feature.title}</h3>
                    <p className="text-[10px] xl:text-xs text-slate-500 font-medium">{feature.desc}</p>
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
