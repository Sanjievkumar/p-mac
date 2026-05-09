import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Award, Settings, MapPin, Handshake } from 'lucide-react';

const BRAND_BUBBLES = [
  { name: 'SEA-LION', logo: '/Brands/sea-lion brand/sea-lion-logo.png', size: 160, endX: '30%', endY: '15%', duration: 12, delay: 0 },
  { name: 'MAESTRELLI', logo: '/Brands/MAESTRELLI brand/Maestrelli_Logo.png', size: 140, endX: '50%', endY: '45%', duration: 14, delay: 1.5 },
  { name: 'KANNEGIESSER', logo: '/Brands/Kannegiesser brand/Kannegiesser_Logo.png', size: 180, endX: '70%', endY: '20%', duration: 16, delay: 0.5 },
  { name: 'MAXIPRESS', logo: '/Brands/maxipress brand/Maxipress_Logo.png', size: 150, endX: '85%', endY: '50%', duration: 13, delay: 2 },
];

const EMPTY_BUBBLES = Array.from({ length: 15 }).map((_, i) => ({
  size: 30 + Math.random() * 60,
  endX: `${25 + Math.random() * 70}%`,
  endY: `${10 + Math.random() * 70}%`,
  duration: 10 + Math.random() * 10,
  delay: Math.random() * 5
}));

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
            <div className="absolute top-4 left-4 w-4 h-4 border-t-2 border-l-2 border-[#e31e24]/60" />
            <div className="absolute top-4 right-4 w-4 h-4 border-t-2 border-r-2 border-[#e31e24]/60" />
            <div className="absolute bottom-4 left-4 w-4 h-4 border-b-2 border-l-2 border-[#e31e24]/60" />
            <div className="absolute bottom-4 right-4 w-4 h-4 border-b-2 border-r-2 border-[#e31e24]/60" />

            <p className="text-slate-200 text-lg md:text-[20px] leading-relaxed text-center font-body max-w-[850px]">
              Promac Technologies Pvt Ltd is a leading laundry equipment supplier in India, providing advanced commercial laundry and dry-cleaning machines for hospitality, healthcare, institutional, and industrial laundries. As an experienced industrial laundry solutions provider, we support businesses with reliable equipment, expert guidance, and long-term service support.
            </p>
            <p className="text-slate-200 text-lg md:text-[20px] leading-relaxed text-center font-body max-w-[850px]">
              With decades of hands-on industry experience, we help clients design, install, and operate efficient laundry facilities that deliver consistent performance and operational efficiency.
            </p>
          </div>
        </motion.div>

        {/* ── SECTION 2: EXACT DESIGN MATCH - TRUSTED BY LEADING BRANDS ── */}
        <div className="w-full max-w-[1400px] mx-auto relative z-10">
          
          {/* Typography Headers */}
          <div className="text-center mb-8 relative z-20">
            <h4 className="text-[#E31E24] font-bold text-sm tracking-widest uppercase mb-3">OUR CLIENTS</h4>
            <h2 className="text-4xl md:text-5xl lg:text-[46px] font-extrabold text-[#111] font-display tracking-tight mb-5">
              Trusted by Leading Brands
            </h2>
            <div className="w-8 h-[2px] bg-[#E31E24] mx-auto mb-6"></div>
            <p className="text-gray-500 font-medium max-w-lg mx-auto text-sm md:text-base leading-relaxed">
              Proud to be the laundry technology partner<br/>for India's most respected brands and institutions.
            </p>
          </div>

          {/* Machine & Bubbles Scene Area */}
          <div className="relative w-full h-[600px] lg:h-[700px] flex items-center overflow-hidden">
            {/* Soft background light */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(240,248,255,0.6)_0%,rgba(255,255,255,0)_70%)] pointer-events-none" />

            {/* Left Anchored Pure CSS Photorealistic Machine */}
            <div className="absolute left-[-20px] lg:left-0 bottom-0 z-30 flex items-end">
              <div className="relative w-[320px] md:w-[420px] h-[480px] md:h-[580px] bg-gradient-to-b from-[#e2e2e2] via-[#f5f5f5] to-[#c2c2c2] rounded-t-sm shadow-[30px_0_40px_rgba(0,0,0,0.15)] border-l-[1px] border-white border-r-[2px] border-gray-400">
                
                {/* Dark Top Control Panel */}
                <div className="absolute top-0 left-0 w-full h-[100px] md:h-[120px] bg-[#2a2a2a] rounded-t-sm border-b-[3px] border-black flex flex-col justify-center px-4 md:px-8 shadow-md">
                  <div className="flex items-center justify-between">
                    {/* Promac Logo */}
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 md:w-5 md:h-5 bg-[#E31E24] rounded-full flex items-center justify-center">
                        <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-white rounded-full" />
                      </div>
                      <span className="text-white font-bold tracking-widest text-sm md:text-lg">PROMAC</span>
                    </div>
                    {/* Console Lights & Screen */}
                    <div className="flex items-center gap-3 md:gap-5">
                      {/* Green button */}
                      <div className="w-2.5 h-2.5 md:w-3 md:h-3 bg-green-500 rounded-full shadow-[0_0_8px_#22c55e] border border-green-700" />
                      {/* LCD Screen */}
                      <div className="w-16 h-10 md:w-20 md:h-12 bg-[#8bc6ec] rounded-sm border-[2px] border-gray-600 shadow-[inset_0_2px_5px_rgba(0,0,0,0.5)] flex flex-col items-center justify-center p-1 md:p-2 gap-[2px]">
                         <div className="w-full h-[1px] md:h-[2px] bg-white/40"></div>
                         <div className="w-full h-[1px] md:h-[2px] bg-white/40"></div>
                         <div className="w-full h-[1px] md:h-[2px] bg-white/40"></div>
                      </div>
                      {/* Red Emergency Stop */}
                      <div className="w-5 h-5 md:w-7 md:h-7 bg-[#E31E24] rounded-full border-[2px] border-red-900 shadow-[0_2px_4px_rgba(0,0,0,0.5)] flex items-center justify-center">
                         <div className="w-3 h-3 md:w-4 md:h-4 bg-red-500 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* The Door / Drum (Source of bubbles) */}
                <div className="absolute top-[200px] md:top-[240px] left-1/2 -translate-x-1/2 w-[220px] h-[220px] md:w-[300px] md:h-[300px]">
                  {/* Outer Silver Ring */}
                  <div className="w-full h-full rounded-full bg-gradient-to-tr from-gray-400 via-white to-gray-300 shadow-[0_15px_30px_rgba(0,0,0,0.4)] border-[2px] border-gray-400 flex items-center justify-center p-3 md:p-4">
                    {/* Inner Black Ring Seal */}
                    <div className="w-full h-full rounded-full bg-gradient-to-b from-[#1a1a1a] to-[#050505] shadow-[inset_0_10px_20px_rgba(0,0,0,0.9)] border-[4px] border-[#333] flex items-center justify-center p-4 md:p-5">
                      {/* The Glass Drum Center */}
                      <div className="relative w-full h-full rounded-full bg-[#0a0a0a] overflow-hidden shadow-[inset_0_0_40px_rgba(0,0,0,1)] border-[4px] border-[#1a1a1a]">
                        {/* Clothes Simulation inside */}
                        <div className="absolute bottom-[-10%] left-0 w-[120%] h-[70%] bg-blue-600 blur-xl opacity-70 rounded-full transform -rotate-12 translate-y-4"></div>
                        <div className="absolute bottom-0 right-[-10%] w-[90%] h-[60%] bg-red-600 blur-xl opacity-70 rounded-full transform rotate-12"></div>
                        <div className="absolute top-[20%] left-[20%] w-[80%] h-[80%] bg-white blur-[40px] opacity-10 rounded-full"></div>
                        
                        {/* Glass Glare */}
                        <div className="absolute top-[-20%] left-[-20%] w-[140%] h-[140%] bg-gradient-to-br from-white/30 via-transparent to-transparent rounded-full transform rotate-45 pointer-events-none"></div>
                        <div className="absolute top-[10%] left-[10%] w-[30%] h-[30%] border-[2px] border-white/40 rounded-full opacity-60 blur-[1px]"></div>
                      </div>
                    </div>
                  </div>
                  {/* Door Handle */}
                  <div className="absolute top-1/2 -translate-y-1/2 left-[-10px] md:left-[-15px] w-[40px] md:w-[50px] h-[12px] md:h-[16px] bg-gradient-to-b from-gray-700 to-black rounded-l-full shadow-lg border-[1px] border-gray-600"></div>
                </div>
              </div>
            </div>

            {/* Right Side: The Realistic Bubble Engine */}
            <div className="absolute inset-0 z-20 pointer-events-none">
              
              {/* Empty Bubbles for background volume */}
              {EMPTY_BUBBLES.map((bubble, i) => (
                <motion.div
                  key={`empty-${i}`}
                  initial={{ opacity: 0, scale: 0.2, x: '10%', y: '50%' }}
                  animate={{ 
                    opacity: [0, 0.8, 0], 
                    scale: [0.2, 1, 1.2],
                    x: ['10%', bubble.endX],
                    y: ['50%', bubble.endY]
                  }}
                  transition={{
                    duration: bubble.duration,
                    delay: bubble.delay,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  className="absolute rounded-full"
                  style={{
                    width: bubble.size,
                    height: bubble.size,
                    background: 'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0.05) 30%, transparent 100%)',
                    border: '1px solid rgba(255,255,255,0.4)',
                    boxShadow: 'inset -5px -5px 15px rgba(100, 150, 255, 0.2), inset 5px 5px 15px rgba(255, 100, 200, 0.2), inset 0 0 10px rgba(255, 255, 255, 0.3), 0 5px 15px rgba(0,0,0,0.05)',
                    backdropFilter: 'blur(2px)'
                  }}
                >
                  <div className="absolute top-[15%] left-[15%] w-[25%] h-[25%] bg-white/60 rounded-full blur-[2px]" />
                </motion.div>
              ))}

              {/* Huge Anchor Logo Bubbles */}
              {BRAND_BUBBLES.map((bubble, i) => (
                <motion.div
                  key={`brand-${i}`}
                  initial={{ opacity: 0, scale: 0.5, x: '15%', y: '45%' }}
                  animate={{ 
                    opacity: [0, 1, 1, 0], 
                    scale: [0.5, 1, 1, 1.1],
                    x: ['15%', bubble.endX],
                    y: ['45%', bubble.endY, `calc(${bubble.endY} - 5%)`]
                  }}
                  transition={{
                    duration: bubble.duration,
                    delay: bubble.delay,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  className="absolute rounded-full flex items-center justify-center p-6 shadow-2xl pointer-events-auto cursor-default"
                  style={{
                    width: bubble.size,
                    height: bubble.size,
                    background: 'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.3) 40%, rgba(255,255,255,0.1) 100%)',
                    border: '1px solid rgba(255,255,255,0.6)',
                    boxShadow: 'inset -10px -10px 20px rgba(100, 150, 255, 0.3), inset 10px 10px 20px rgba(255, 100, 200, 0.3), inset 0 0 15px rgba(255, 255, 255, 0.8), 0 10px 30px rgba(0,0,0,0.1)',
                    backdropFilter: 'blur(6px)'
                  }}
                >
                  <div className="absolute top-[12%] left-[12%] w-[20%] h-[20%] bg-white/80 rounded-full blur-[3px]" />
                  <img 
                    src={bubble.logo} 
                    alt={bubble.name} 
                    className="relative z-10 w-full h-full object-contain mix-blend-multiply drop-shadow-sm transition-transform duration-300 hover:scale-110" 
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'block';
                    }}
                  />
                  <span className="hidden relative z-10 text-sm font-extrabold text-[#0b1b36] tracking-wider font-display text-center uppercase">
                    {bubble.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* ── SECTION 3: EXACT DESIGN MATCH - STATS BAR ── */}
        <div className="w-full max-w-[1100px] mx-auto relative z-40 -mt-20 px-4 pb-20">
          <div className="bg-white rounded-[24px] shadow-[0_20px_50px_rgba(0,0,0,0.06)] py-8 px-2 flex flex-col md:flex-row items-center justify-between border border-gray-100/50 backdrop-blur-sm">
            
            {/* Stat 1 */}
            <div className="flex flex-col sm:flex-row items-center gap-4 px-6 md:px-8 w-full md:w-1/4 border-b md:border-b-0 md:border-r border-gray-200 py-6 md:py-0">
               <Award className="w-12 h-12 text-[#E31E24]" strokeWidth={1.5} />
               <div className="text-center sm:text-left">
                 <h3 className="text-[26px] font-extrabold text-black leading-tight mb-0.5">20+</h3>
                 <p className="text-gray-600 text-xs font-medium tracking-wide leading-snug">Years of<br/>Industry Experience</p>
               </div>
            </div>

            {/* Stat 2 */}
            <div className="flex flex-col sm:flex-row items-center gap-4 px-6 md:px-8 w-full md:w-1/4 border-b md:border-b-0 md:border-r border-gray-200 py-6 md:py-0">
               <Settings className="w-12 h-12 text-[#E31E24]" strokeWidth={1.5} />
               <div className="text-center sm:text-left">
                 <h3 className="text-[26px] font-extrabold text-black leading-tight mb-0.5">1000+</h3>
                 <p className="text-gray-600 text-xs font-medium tracking-wide leading-snug">Installations<br/>Completed</p>
               </div>
            </div>

            {/* Stat 3 */}
            <div className="flex flex-col sm:flex-row items-center gap-4 px-6 md:px-8 w-full md:w-1/4 border-b md:border-b-0 md:border-r border-gray-200 py-6 md:py-0">
               <MapPin className="w-12 h-12 text-[#E31E24]" strokeWidth={1.5} />
               <div className="text-center sm:text-left">
                 <h3 className="text-[22px] font-extrabold text-black leading-tight mb-0.5 mt-1">Pan India</h3>
                 <p className="text-gray-600 text-xs font-medium tracking-wide leading-snug">Presence</p>
               </div>
            </div>

            {/* Stat 4 */}
            <div className="flex flex-col sm:flex-row items-center gap-4 px-6 md:px-8 w-full md:w-1/4 py-6 md:py-0">
               <Handshake className="w-12 h-12 text-[#E31E24]" strokeWidth={1.5} />
               <div className="text-center sm:text-left">
                 <p className="text-gray-600 text-xs font-medium tracking-wide leading-snug">Trusted by<br/></p>
                 <h3 className="text-[15px] font-extrabold text-black leading-tight mt-0.5">Leading Brands</h3>
               </div>
            </div>

          </div>
        </div>

      </section>

      <Footer />
    </div>
  );
}
