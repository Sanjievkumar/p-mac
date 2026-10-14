import { motion } from 'framer-motion';
import { ArrowRight, Globe2, Settings, ShieldCheck, Users } from 'lucide-react';
import heroImage from '../assets/hero-bg-new.png';
import { Link } from 'react-router-dom';

export default function HeroSection() {
  return (
    <section id="hero" className="relative w-full min-h-[650px] h-[calc(100vh-80px)] max-h-[920px] mt-[80px] bg-white overflow-hidden flex flex-col justify-between">
      {/* Centered Master Stage matching Navbar max-width for ultra-wide / zoom coherence */}
      <div className="relative w-full max-w-[1600px] mx-auto h-full flex-grow flex flex-col justify-between">
        
        {/* Background Image scoped inside the stage frame */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img 
            src={heroImage} 
            alt="Industrial Laundry Machines" 
            className="w-full h-full object-cover object-right" 
          />
        </div>
        
        {/* Gradient Overlay for text readability on smaller screens */}
        <div className="absolute inset-0 bg-white/60 lg:hidden pointer-events-none z-0" />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-white/70 lg:to-transparent lg:w-[65%] pointer-events-none mix-blend-normal z-0" />

        {/* Main Hero Content - aligned with Navbar container */}
        <div className="relative z-10 w-full flex-grow flex items-center max-w-[1400px] mx-auto px-8 lg:px-16 pb-0 lg:pb-[88px]">
          <motion.div 
            className="max-w-2xl mt-12 md:mt-0"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Red line accent */}
            <div className="w-12 h-1 bg-[#CC141A] mb-8" />
            
            <h1 className="text-4xl md:text-5xl lg:text-[64px] xl:text-[72px] font-bold leading-[1.1] tracking-tight mb-6 md:mb-8 text-[#1A233A]">
              ENGINEERED FOR<br/>
              <span className="text-[#CC141A]">PERFORMANCE.</span><br/>
              BUILT FOR THE FUTURE.
            </h1>
            
            <p className="text-slate-600 text-base md:text-lg lg:text-xl font-medium leading-relaxed mb-8 md:mb-10 max-w-[460px] text-justify">
              Complete laundry solutions engineered for efficiency, reliability and scale — from individual machines to fully integrated industrial laundry systems.
            </p>
            
            <Link to="/brands">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#CC141A] hover:bg-[#A31015] text-white px-6 md:px-8 py-3 md:py-4 text-xs font-bold tracking-[0.2em] uppercase transition-all duration-300 hover:shadow-[0_8px_25px_rgba(204,20,26,0.4)] flex items-center gap-3 rounded-sm group relative overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-3">
                  EXPLORE SOLUTIONS 
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform duration-300" />
                </span>
                
                {/* Subtle hover overlay */}
                <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
              </motion.button>
            </Link>
          </motion.div>
        </div>

        {/* Bottom Bar Features - aligned with Navbar container */}
        <div className="relative z-20 w-full bg-white/95 backdrop-blur-md py-6 shadow-[0_-4px_20px_rgba(0,0,0,0.03)] hidden lg:block border-t border-slate-100/80">
          <div className="max-w-[1400px] mx-auto px-8 lg:px-16">
            <div className="grid grid-cols-4 gap-4 divide-x divide-slate-100">
              {[
                { icon: Globe2, title: 'GLOBAL PARTNERSHIPS', desc: 'World-Class Solutions' },
                { icon: Settings, title: 'ADVANCED TECHNOLOGY', desc: 'Maximum Efficiency' },
                { icon: ShieldCheck, title: 'RELIABLE SUPPORT', desc: 'Lifetime Partnership' },
                { icon: Users, title: 'EXPERT GUIDANCE', desc: 'Tailored For You' }
              ].map((feature, idx) => (
                <motion.div 
                  key={idx} 
                  className="flex items-center gap-4 pl-8 first:pl-0"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 + (idx * 0.1) }}
                >
                  <div className="text-[#CC141A] shrink-0">
                    <feature.icon className="w-8 h-8 stroke-[1.5]" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-[#1A233A] tracking-wider mb-1">{feature.title}</h3>
                    <p className="text-[10px] text-slate-500 font-medium">{feature.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
