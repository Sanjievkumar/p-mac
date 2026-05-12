import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import TrustedBrands from '../components/TrustedBrands';

export default function About() {
  const pillars = [
    {
      id: "01",
      title: "Global Expertise",
      desc: "Bridging the gap between international innovation and Indian industrial requirements with curated technology.",
      icon: "🌐"
    },
    {
      id: "02",
      title: "Lifecycle Support",
      desc: "From initial blueprint to daily maintenance, we ensure your operations never face a moment of downtime.",
      icon: "⚙️"
    },
    {
      id: "03",
      title: "Operational ROI",
      desc: "Engineering solutions that maximize output while minimizing resource consumption and overhead costs.",
      icon: "📈"
    }
  ];

  return (
    <div className="w-full min-h-screen bg-[#fafafa] font-display flex flex-col">
      <Navbar />

      {/* ── SECTION 1: HERO + CINEMATIC DEPTH ── */}
      <section className="relative w-full pt-44 pb-20 px-6 lg:px-12 flex flex-col items-center overflow-hidden">
        {/* Dynamic Background Elements */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#D42B2B]/[0.03] rounded-full blur-[180px] -mr-40 -mt-40" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#0B4F8A]/[0.02] rounded-full blur-[160px] -ml-40 -mb-40" />

        <div className="max-w-[1100px] w-full text-center mb-20 relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
             <span className="text-[#D42B2B] font-bold text-[10px] tracking-[0.5em] uppercase bg-[#D42B2B]/5 px-6 py-2 rounded-full border border-[#D42B2B]/10">
               Engineering the Future
             </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-8xl font-extrabold text-[#0a0a0a] tracking-tightest mb-8 leading-[0.95]"
          >
            BEYOND <span className="text-gray-300">EQUIPMENT.</span><br/>
            <span className="text-[#D42B2B]">PURE PERFORMANCE.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-2xl text-gray-500 font-medium max-w-3xl mx-auto leading-relaxed"
          >
            Promac Technologies is India's premier turnkey partner for world-class industrial laundry systems.
          </motion.p>
        </div>

        {/* Glass Content Console */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.5 }}
          className="relative max-w-[1200px] w-full rounded-[40px] overflow-hidden shadow-2xl mb-32 border border-white/60 bg-white/40 backdrop-blur-2xl p-12 md:p-20"
        >
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl font-extrabold text-[#0a0a0a] tracking-tight">
                Decades of <br/><span className="text-[#D42B2B]">Hands-on Expertise.</span>
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                As an experienced industrial laundry solutions provider, we support businesses with reliable equipment, expert guidance, and long-term service support. We help clients design, install, and operate efficient laundry facilities that deliver consistent performance.
              </p>
              <div className="flex gap-4">
                <div className="w-12 h-1 bg-[#D42B2B]" />
                <div className="w-4 h-1 bg-gray-200" />
                <div className="w-2 h-1 bg-gray-200" />
              </div>
            </div>
            <div className="bg-[#0a0a0a] rounded-3xl p-10 text-white relative overflow-hidden group">
               <div className="absolute top-0 right-0 p-8 opacity-20 transition-transform duration-700 group-hover:scale-150">
                 <svg className="w-32 h-32" viewBox="0 0 100 100" fill="none" stroke="currentColor">
                    <circle cx="50" cy="50" r="40" strokeWidth="0.5" />
                    <path d="M50 10V90M10 50H90" strokeWidth="0.5" />
                 </svg>
               </div>
               <h3 className="text-2xl font-bold mb-6 relative z-10">Our Mission</h3>
               <p className="text-gray-400 leading-relaxed text-lg relative z-10">
                 To empower the hospitality and healthcare sectors with sustainable, high-efficiency laundry technologies that redefine operational excellence across India.
               </p>
               <button className="mt-10 text-[10px] font-bold tracking-widest uppercase text-[#D42B2B] flex items-center gap-3 group-hover:translate-x-2 transition-transform">
                 Learn More <span className="text-xl">→</span>
               </button>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ── SECTION 2: CORE PILLARS ── */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-20">
             <h2 className="text-4xl md:text-6xl font-extrabold text-[#0a0a0a] tracking-tightest mb-6 uppercase">
               The Promac <span className="text-[#D42B2B]">Pillars.</span>
             </h2>
             <p className="text-gray-500 text-lg max-w-xl mx-auto">
               Our foundation is built on three core principles that drive every project we undertake.
             </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {pillars.map((pillar, idx) => (
              <motion.div
                key={pillar.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="p-10 rounded-[32px] bg-[#fafafa] border border-gray-100 hover:border-[#D42B2B]/20 transition-all duration-500 group cursor-pointer"
              >
                <div className="text-4xl mb-8 group-hover:scale-110 transition-transform duration-500">{pillar.icon}</div>
                <span className="text-[#D42B2B] font-bold text-[10px] tracking-widest mb-4 block">{pillar.id}</span>
                <h3 className="text-2xl font-extrabold text-[#0a0a0a] mb-4 tracking-tight">{pillar.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{pillar.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 3: TRUSTED BRANDS ── */}
      <TrustedBrands />

      <Footer />
    </div>
  );
}
