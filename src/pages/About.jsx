import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Award, Wrench, MapPin, Building2 } from 'lucide-react';

const ANCHOR_BRANDS = [
  { name: 'SEA-LION', logo: '/Brands/sea-lion brand/sea-lion-logo.png' },
  { name: 'KANNEGIESSER', logo: '/Brands/Kannegiesser brand/Kannegiesser_Logo.png' },
  { name: 'MAESTRELLI', logo: '/Brands/MAESTRELLI brand/Maestrelli_Logo.png' },
  { name: 'MAXIPRESS', logo: '/Brands/maxipress brand/Maxipress_Logo.png' },
];

export default function About() {
  return (
    <div className="w-full min-h-screen bg-[#fafbfc] font-sans flex flex-col">
      <Navbar />
      
      {/* ── ABOUT PAGE: SECTION 1 ── */}
      <section className="relative w-full pt-32 pb-16 px-6 lg:px-12 flex flex-col items-center flex-grow overflow-hidden">
        
        {/* Background Ambient Light */}
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-[#e31e24] rounded-full blur-[150px] opacity-[0.05] pointer-events-none" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-[#0b1b36] rounded-full blur-[120px] opacity-[0.05] pointer-events-none" />

        {/* 1. Typography */}
        <div className="max-w-[1000px] w-full text-center mb-16 relative z-10 pt-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-[56px] font-extrabold text-[#0b1b36] tracking-tighter mb-6 font-display uppercase leading-[1.1]"
          >
            BEYOND EQUIPMENT.<br/>
            <span className="text-[#e31e24]">DEFINING FUTURE EFFICIENCY.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl text-slate-500 font-serif font-medium italic"
          >
            One Partner. Every Aspect. Complete Confidence.
          </motion.p>
        </div>

        {/* 2. The Upgraded Box (Frosted Engineering Console) */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          className="relative max-w-[1000px] w-full rounded-2xl overflow-hidden group z-10 shadow-[0_20px_50px_rgba(0,0,0,0.15)] mb-28"
        >
          {/* CSS Animation: Moving Red Light Border Scanner */}
          <div className="absolute inset-[-50%] z-0 animate-[spin_4s_linear_infinite] opacity-70">
            <div className="w-full h-full bg-[conic-gradient(from_90deg_at_50%_50%,#0f172a_0%,#0f172a_70%,#e31e24_100%)]" />
          </div>
          
          {/* The Inner Frosted Glass Console */}
          <div className="relative z-10 m-[2px] bg-slate-900/80 backdrop-blur-xl rounded-[14px] p-8 md:p-12 lg:p-16 border border-white/5 flex flex-col items-center justify-center gap-6">
            
            {/* Decorative Cyber/Engineering Corner Accents */}
            <div className="absolute top-4 left-4 w-4 h-4 border-t-2 border-l-2 border-[#e31e24]/60" />
            <div className="absolute top-4 right-4 w-4 h-4 border-t-2 border-r-2 border-[#e31e24]/60" />
            <div className="absolute bottom-4 left-4 w-4 h-4 border-b-2 border-l-2 border-[#e31e24]/60" />
            <div className="absolute bottom-4 right-4 w-4 h-4 border-b-2 border-r-2 border-[#e31e24]/60" />

            {/* Official Client Content */}
            <p className="text-slate-200 text-lg md:text-[20px] leading-relaxed text-center font-body max-w-[850px]">
              Promac Technologies Pvt Ltd is a leading laundry equipment supplier in India, providing advanced commercial laundry and dry-cleaning machines for hospitality, healthcare, institutional, and industrial laundries. As an experienced industrial laundry solutions provider, we support businesses with reliable equipment, expert guidance, and long-term service support.
            </p>
            <p className="text-slate-200 text-lg md:text-[20px] leading-relaxed text-center font-body max-w-[850px]">
              With decades of hands-on industry experience, we help clients design, install, and operate efficient laundry facilities that deliver consistent performance and operational efficiency.
            </p>
          </div>
        </motion.div>

        {/* ── SECTION 2: TRUSTED BY LEADING BRANDS (IMMERSIVE 3D) ── */}
        <div className="w-full max-w-[1200px] mx-auto mb-20 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            className="flex flex-col items-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#0b1b36] font-display tracking-tighter uppercase text-center">
              TRUSTED BY LEADING BRANDS
            </h2>
          </motion.div>

          <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
            
            {/* Left Side: Photorealistic Washer & Particle System */}
            <div className="w-full lg:w-1/2 flex justify-center lg:justify-start pl-0 lg:pl-10 relative min-h-[500px]">
              
              <div className="relative w-full max-w-[450px] flex items-center justify-center">
                {/* Photorealistic Washer Image */}
                <motion.img 
                  src="/Brands/sea-lion brand/WASHER-EXTRACTOR.png" 
                  alt="Promac Industrial Washer" 
                  className="w-full h-auto object-contain drop-shadow-[0_30px_50px_rgba(0,0,0,0.15)] relative z-20"
                />

                {/* Real-Look Bubble Physics Emitter from Door Area */}
                <div className="absolute inset-0 z-30 flex items-center justify-center pointer-events-none pb-[15%]">
                  {[...Array(15)].map((_, i) => {
                    const randomX = (Math.random() - 0.5) * 200;
                    const randomDuration = 4 + Math.random() * 6; // 4 to 10 seconds
                    const randomDelay = Math.random() * 4;
                    const randomScale = 0.4 + Math.random() * 0.8;
                    
                    return (
                      <motion.div
                        key={`bubble-${i}`}
                        initial={{ opacity: 0, y: 40, x: 0, scale: 0 }}
                        whileInView={{ 
                          opacity: [0, 0.9, 0.9, 0], 
                          y: [0, -150, -400], 
                          x: [0, randomX * 0.5, randomX],
                          scale: [0, randomScale, randomScale * 1.5]
                        }}
                        transition={{ 
                          repeat: Infinity, 
                          duration: randomDuration, 
                          delay: randomDelay,
                          ease: "easeOut"
                        }}
                        className="absolute w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/40"
                        style={{
                          boxShadow: 'inset 0 0 15px rgba(255,255,255,0.4), inset 0 0 10px rgba(100,200,255,0.2), 0 4px 10px rgba(0,0,0,0.1)'
                        }}
                      />
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Right Side: Wobbling Brand Anchor Bubbles */}
            <div className="w-full lg:w-1/2 relative min-h-[500px] flex items-center justify-center pr-0 lg:pr-10">
              <div className="flex flex-wrap items-center justify-center gap-12 relative z-30">
                {ANCHOR_BRANDS.map((brand, i) => {
                  const wobbleAngle = i % 2 === 0 ? 3 : -3;
                  return (
                    <motion.div
                      key={i}
                      animate={{ 
                        y: [-15, 15, -15],
                        rotateZ: [0, wobbleAngle, 0, -wobbleAngle, 0]
                      }}
                      transition={{
                        repeat: Infinity,
                        repeatType: "mirror",
                        duration: 5 + (i * 0.8), // Different speeds for organic floating
                        ease: "easeInOut"
                      }}
                      className="w-[180px] h-[100px] md:w-[220px] md:h-[120px] flex items-center justify-center transition-all duration-300 relative group"
                    >
                      <img 
                        src={brand.logo} 
                        alt={brand.name} 
                        className="w-full h-full object-contain mix-blend-multiply transition-transform duration-500 group-hover:scale-110 relative z-10 drop-shadow-sm" 
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.nextSibling.style.display = 'block';
                        }}
                      />
                      {/* Fallback Text if Logo fails */}
                      <span className="hidden text-xl font-bold text-[#0b1b36] tracking-widest font-display text-center uppercase px-4 relative z-10">
                        {brand.name}
                      </span>
                    </motion.div>
                  );
                })}
              </div>
            </div>
            
          </div>
        </div>

        {/* ── SECTION 3: STATS BAR ── */}
        <div className="w-full max-w-[1200px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 relative z-10">
          
          {/* Stat 1 */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white p-8 rounded-xl shadow-lg border border-slate-100 flex flex-col items-center text-center group hover:-translate-y-2 hover:border-[#e31e24]/30 transition-all duration-300"
          >
            <div className="w-16 h-16 bg-[#e31e24]/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-[#e31e24] transition-colors duration-300">
              <Award className="w-8 h-8 text-[#e31e24] group-hover:text-white transition-colors duration-300" />
            </div>
            <h3 className="text-4xl font-extrabold text-[#0b1b36] mb-3">20+</h3>
            <p className="text-slate-500 font-bold text-[13px] tracking-widest uppercase">Years of Industry Experience</p>
          </motion.div>

          {/* Stat 2 */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white p-8 rounded-xl shadow-lg border border-slate-100 flex flex-col items-center text-center group hover:-translate-y-2 hover:border-[#e31e24]/30 transition-all duration-300"
          >
            <div className="w-16 h-16 bg-[#e31e24]/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-[#e31e24] transition-colors duration-300">
              <Wrench className="w-8 h-8 text-[#e31e24] group-hover:text-white transition-colors duration-300" />
            </div>
            <h3 className="text-4xl font-extrabold text-[#0b1b36] mb-3">1000+</h3>
            <p className="text-slate-500 font-bold text-[13px] tracking-widest uppercase">Installations Completed</p>
          </motion.div>

          {/* Stat 3 */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-white p-8 rounded-xl shadow-lg border border-slate-100 flex flex-col items-center text-center group hover:-translate-y-2 hover:border-[#e31e24]/30 transition-all duration-300"
          >
            <div className="w-16 h-16 bg-[#e31e24]/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-[#e31e24] transition-colors duration-300">
              <MapPin className="w-8 h-8 text-[#e31e24] group-hover:text-white transition-colors duration-300" />
            </div>
            <h3 className="text-4xl font-extrabold text-[#0b1b36] mb-3">PAN INDIA</h3>
            <p className="text-slate-500 font-bold text-[13px] tracking-widest uppercase">Presence</p>
          </motion.div>

          {/* Stat 4 */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-white p-8 rounded-xl shadow-lg border border-slate-100 flex flex-col items-center text-center group hover:-translate-y-2 hover:border-[#e31e24]/30 transition-all duration-300"
          >
            <div className="w-16 h-16 bg-[#e31e24]/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-[#e31e24] transition-colors duration-300">
              <Building2 className="w-8 h-8 text-[#e31e24] group-hover:text-white transition-colors duration-300" />
            </div>
            <h3 className="text-4xl font-extrabold text-[#0b1b36] mb-3">TRUSTED</h3>
            <p className="text-slate-500 font-bold text-[13px] tracking-widest uppercase">by Leading Brands</p>
          </motion.div>
          
        </div>

      </section>

      <Footer />
    </div>
  );
}
