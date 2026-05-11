import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import TrustedBrands from '../components/TrustedBrands';

export default function About() {
  return (
    <div className="w-full min-h-screen bg-white font-sans flex flex-col">
      <Navbar />

      {/* ── SECTION 1: HERO + GLASS CONSOLE ── */}
      <section className="relative w-full pt-32 pb-10 px-6 lg:px-12 flex flex-col items-center overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#e31e24] rounded-full blur-[160px] opacity-[0.04] pointer-events-none" />

        <div className="max-w-[1000px] w-full text-center mb-14 pt-8">
          <motion.h1
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-[54px] font-extrabold text-[#0b1b36] tracking-tighter mb-5 uppercase leading-[1.1]"
          >
            BEYOND EQUIPMENT.<br/>
            <span className="text-[#e31e24]">DEFINING FUTURE EFFICIENCY.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl text-slate-500 font-serif font-medium italic"
          >
            One Partner. Every Aspect. Complete Confidence.
          </motion.p>
        </div>

        {/* Glass Console */}
        <motion.div
          initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.8, ease: 'easeOut', delay: 0.4 }}
          className="relative max-w-[1000px] w-full rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.14)] mb-20"
        >
          <div className="absolute inset-[-50%] z-0 animate-[spin_4s_linear_infinite] opacity-70">
            <div className="w-full h-full bg-[conic-gradient(from_90deg_at_50%_50%,#0f172a_0%,#0f172a_70%,#e31e24_100%)]" />
          </div>
          <div className="relative z-10 m-[2px] bg-slate-900/80 backdrop-blur-xl rounded-[14px] p-10 border border-white/5 flex flex-col items-center gap-5">
            <div className="absolute top-4 left-4 w-4 h-4 border-t-2 border-l-2 border-[#e31e24]/60" />
            <div className="absolute top-4 right-4 w-4 h-4 border-t-2 border-r-2 border-[#e31e24]/60" />
            <div className="absolute bottom-4 left-4 w-4 h-4 border-b-2 border-l-2 border-[#e31e24]/60" />
            <div className="absolute bottom-4 right-4 w-4 h-4 border-b-2 border-r-2 border-[#e31e24]/60" />
            <p className="text-slate-200 text-lg md:text-[20px] leading-relaxed text-center max-w-[850px]">
              Promac Technologies Pvt Ltd is a leading laundry equipment supplier in India, providing advanced commercial laundry and dry-cleaning machines for hospitality, healthcare, institutional, and industrial laundries. As an experienced industrial laundry solutions provider, we support businesses with reliable equipment, expert guidance, and long-term service support.
            </p>
            <p className="text-slate-200 text-lg md:text-[20px] leading-relaxed text-center max-w-[850px]">
              With decades of hands-on industry experience, we help clients design, install, and operate efficient laundry facilities that deliver consistent performance and operational efficiency.
            </p>
          </div>
        </motion.div>
      </section>

      {/* ── SECTION 2: YOUR TRUSTED BRANDS COMPONENT ── */}
      <TrustedBrands />

      <Footer />
    </div>
  );
}
