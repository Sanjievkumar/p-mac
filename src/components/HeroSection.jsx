import { motion } from 'framer-motion';
import { ArrowRight, Globe2, Settings, ShieldCheck, Users } from 'lucide-react';
import heroImage from '../assets/hero-bg-hq.png';
import { Link } from 'react-router-dom';

export default function HeroSection() {
  return (
    <section id="hero" className="relative w-full h-[calc(100vh-68px)] min-h-[650px] bg-white overflow-hidden flex flex-col justify-between">
      {/* Background Image determining the natural height */}
      <div className="absolute inset-0 overflow-hidden">
        <img 
          src={heroImage} 
          alt="Industrial Laundry Machines" 
          className="absolute inset-0 w-full h-full object-cover object-right pointer-events-none" 
        />
      </div>
      
      {/* Gradient Overlay for text readability on smaller screens */}
      <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-transparent lg:w-1/2 pointer-events-none md:hidden lg:block mix-blend-normal" />

      {/* Main Hero Content */}
      <div className="absolute inset-0 z-10 w-full flex flex-col pb-0 lg:pb-[88px]">
        <div className="max-w-7xl mx-auto px-8 lg:px-16 w-full flex-grow flex items-center">
          <motion.div 
            className="max-w-2xl mt-12 md:mt-0"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Red line accent */}
            <div className="w-12 h-1 bg-[#CC141A] mb-8" />
            
            <h1 className="text-4xl md:text-5xl lg:text-[64px] xl:text-[72px] font-bold leading-[1.1] tracking-tight mb-6 md:mb-8 text-[#1A233A]">
              ENGINEERING<br/>
              <span className="text-[#CC141A]">EXCELLENCE.</span><br/>
              DELIVERING TRUST.
            </h1>
            
            <p className="text-slate-600 text-base md:text-lg lg:text-xl font-medium leading-relaxed mb-8 md:mb-10 max-w-lg">
              Advanced laundry and garment care solutions<br className="hidden md:block" />
              built on trust, innovation and<br className="hidden md:block" />
              global partnerships.
            </p>
            
            <Link to="/brands">
              <button className="bg-[#CC141A] hover:bg-red-700 text-white px-6 md:px-8 py-3 md:py-4 text-xs font-bold tracking-widest uppercase transition-colors duration-300 shadow-xl flex items-center gap-3 rounded-sm group">
                EXPLORE SOLUTIONS <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar Features */}
      <div className="absolute bottom-0 inset-x-0 z-20 w-full bg-white/95 backdrop-blur-md py-6 shadow-[0_-4px_20px_rgba(0,0,0,0.03)] hidden lg:block">
        <div className="max-w-7xl mx-auto px-8 lg:px-16">
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
    </section>
  );
}
