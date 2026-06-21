import { motion } from 'framer-motion';
import founderBg from '../assets/founder-bg.png';

export default function FounderSection() {
  return (
    <section id="about" className="relative w-full min-h-[550px] py-16 md:py-24 bg-white overflow-hidden flex flex-col justify-center">
      {/* Background Image */}
      <img 
        src={founderBg} 
        alt="Tunnel Washer Showroom" 
        className="absolute inset-0 w-full h-full object-cover object-right pointer-events-none" 
      />
      
      {/* Gradient Overlay for text readability on smaller screens */}
      <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent lg:w-1/2 pointer-events-none mix-blend-normal" />

      {/* Main Content */}
      <div className="relative z-10 w-full flex flex-col">
        <div className="max-w-7xl mx-auto px-8 lg:px-16 w-full h-full flex items-center">
          <motion.div 
            className="max-w-xl lg:max-w-2xl mt-12 md:mt-0"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Eyebrow */}
            <div className="flex items-center gap-4 mb-6">
              <div className="w-8 h-[1px] bg-[#CC141A]" />
              <p className="text-[#CC141A] text-xs font-bold tracking-[0.2em] uppercase m-0">
                A Few Words From Our Founder
              </p>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-[56px] font-bold leading-[1.15] tracking-tight mb-8 text-[#1A233A]">
              Building Solutions.<br/>
              Delivering Value.<br/>
              <span className="text-[#CC141A] italic font-serif tracking-normal">Always.</span>
            </h2>
            
            <div className="text-slate-600 text-sm md:text-base font-medium leading-relaxed max-w-lg space-y-5">
              <p>
                At Promac Technologies, our journey has always been about solving real challenges with practical, reliable and future-ready solutions. We believe in engineering excellence, long-term partnerships, and creating value that lasts.
              </p>
              <p>
                Our commitment to innovation, quality, and customer success drives everything we do. Thank you for being a part of our journey.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
