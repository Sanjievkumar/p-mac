import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function About() {
  return (
    <div className="w-full min-h-screen bg-[#fafbfc] font-sans flex flex-col">
      <Navbar />
      
      {/* ── ABOUT PAGE: SECTION 1 ── */}
      <section className="relative w-full pt-32 pb-24 px-6 lg:px-12 flex flex-col items-center flex-grow overflow-hidden">
        
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
          className="relative max-w-[900px] w-full rounded-2xl overflow-hidden group z-10 shadow-[0_20px_50px_rgba(0,0,0,0.15)]"
        >
          {/* CSS Animation: Moving Red Light Border Scanner */}
          <div className="absolute inset-[-50%] z-0 animate-[spin_4s_linear_infinite] opacity-70">
            <div className="w-full h-full bg-[conic-gradient(from_90deg_at_50%_50%,#0f172a_0%,#0f172a_70%,#e31e24_100%)]" />
          </div>
          
          {/* The Inner Frosted Glass Console */}
          <div className="relative z-10 m-[2px] bg-slate-900/80 backdrop-blur-xl rounded-[14px] p-8 md:p-12 lg:p-16 border border-white/5 flex items-center justify-center">
            
            {/* Decorative Cyber/Engineering Corner Accents */}
            <div className="absolute top-4 left-4 w-4 h-4 border-t-2 border-l-2 border-[#e31e24]/60" />
            <div className="absolute top-4 right-4 w-4 h-4 border-t-2 border-r-2 border-[#e31e24]/60" />
            <div className="absolute bottom-4 left-4 w-4 h-4 border-b-2 border-l-2 border-[#e31e24]/60" />
            <div className="absolute bottom-4 right-4 w-4 h-4 border-b-2 border-r-2 border-[#e31e24]/60" />

            {/* Core Paragraph */}
            <p className="text-slate-200 text-lg md:text-[22px] leading-relaxed text-center font-body max-w-[750px]">
              For over two decades, Promac Technologies has redefined the boundaries of industrial laundry operations. By engineering robust, intelligent, and deeply integrated systems, we provide unparalleled efficiency and reliability. Our commitment to innovation ensures that our partners are equipped not just for the challenges of today, but for the evolving demands of tomorrow.
            </p>
          </div>
        </motion.div>

      </section>

      <Footer />
    </div>
  );
}
