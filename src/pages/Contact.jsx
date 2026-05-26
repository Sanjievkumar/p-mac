import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full min-h-screen bg-[#fafafa] font-display flex flex-col">
      <Navbar />

      {/* ══════════════════════════════════════════
          HERO SECTION
      ══════════════════════════════════════════ */}
      <section className="relative w-full pt-44 pb-20 px-6 lg:px-12 flex flex-col items-center overflow-hidden bg-white">
        {/* Ambient blobs */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#E31E24]/[0.03] rounded-full blur-[180px] -mr-40 -mt-40 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#0B4F8A]/[0.02] rounded-full blur-[160px] -ml-40 -mb-40 pointer-events-none" />

        {/* Blueprint Grid Watermark */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.15] animate-grid"
          style={{
            backgroundImage:
              'linear-gradient(#3b82f6 1px, transparent 1px), linear-gradient(90deg, #3b82f6 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
          aria-hidden="true"
        />

        <div className="max-w-[1100px] w-full text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-6"
          >
            <span className="text-[#E31E24] font-bold text-[10px] tracking-[0.4em] uppercase bg-[#E31E24]/5 px-6 py-2 rounded-full border border-[#E31E24]/10">
              Reach Out
            </span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-7xl font-black text-[#0a0a0a] tracking-tighter mb-6 leading-tight"
          >
            Let's Build the <span className="text-[#0B4F8A]">Future.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-slate-500 max-w-2xl mx-auto"
          >
            Connect with our engineering experts to discuss turnkey solutions, equipment upgrades, or lifecycle support.
          </motion.p>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          CONTACT CONTENT SECTION
      ══════════════════════════════════════════ */}
      <section className="relative w-full py-24 px-6 lg:px-12 bg-[#fafafa]">
        <div className="max-w-[1200px] mx-auto grid lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* LEFT: Contact Information */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="space-y-16"
          >
            {/* Corporate Office */}
            <div>
              <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-[#0a0a0a] mb-8">
                Corporate Office
              </h2>
              <p className="text-slate-700 text-lg md:text-xl leading-relaxed max-w-md">
                Ground Floor, Door No:5, Plot No:33,<br />
                Sapthagiri Nagar, Inner Ring Road,<br /><br />
                Puludivakkam, Chennai – 600 091,<br /><br />
                Tamil Nadu – INDIA.
              </p>
            </div>

            {/* Phone */}
            <div>
              <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-[#0a0a0a] mb-8">
                Phone
              </h2>
              <div className="space-y-4">
                <a href="tel:+919566340888" className="block text-[#E31E24] text-xl md:text-2xl hover:text-[#0B4F8A] transition-colors duration-300">
                  +91 95663 40888
                </a>
                <a href="tel:+919566340016" className="block text-[#E31E24] text-xl md:text-2xl hover:text-[#0B4F8A] transition-colors duration-300">
                  +91 95663 40016
                </a>
              </div>
            </div>

            {/* E-Mail */}
            <div>
              <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-[#0a0a0a] mb-8">
                E-Mail
              </h2>
              <a href="mailto:sales@promactech.com" className="text-[#E31E24] text-xl md:text-2xl hover:text-[#0B4F8A] transition-colors duration-300">
                sales@promactech.com
              </a>
            </div>
          </motion.div>

          {/* RIGHT: Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="bg-white rounded-[40px] p-10 md:p-14 shadow-[0_10px_40px_rgba(0,0,0,0.04)] border border-slate-100"
          >
            <h2 className="text-3xl md:text-4xl font-black tracking-tighter text-[#0a0a0a] mb-4">
              Get in Touch
            </h2>
            <p className="text-slate-500 text-sm md:text-base mb-10">
              Kindly allow <span className="italic font-semibold text-slate-700">24-48 hours</span> for the team to follow up with you and assist you further.
            </p>

            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
              <div className="border-b border-slate-200 focus-within:border-[#E31E24] transition-colors duration-300 pb-2">
                <label className="block text-sm font-bold text-[#0a0a0a] mb-2">First Name</label>
                <input 
                  type="text" 
                  placeholder="First Name" 
                  className="w-full bg-transparent border-none outline-none text-slate-700 placeholder:text-slate-400 focus:ring-0 px-0"
                />
              </div>

              <div className="border-b border-slate-200 focus-within:border-[#E31E24] transition-colors duration-300 pb-2">
                <label className="block text-sm font-bold text-[#0a0a0a] mb-2">Mobile Number</label>
                <input 
                  type="tel" 
                  placeholder="Mobile Number" 
                  className="w-full bg-transparent border-none outline-none text-slate-700 placeholder:text-slate-400 focus:ring-0 px-0"
                />
              </div>

              <div className="border-b border-slate-200 focus-within:border-[#E31E24] transition-colors duration-300 pb-2">
                <label className="block text-sm font-bold text-[#0a0a0a] mb-2">Email</label>
                <input 
                  type="email" 
                  placeholder="Email Address" 
                  className="w-full bg-transparent border-none outline-none text-slate-700 placeholder:text-slate-400 focus:ring-0 px-0"
                />
              </div>

              <div className="border-b border-slate-200 focus-within:border-[#E31E24] transition-colors duration-300 pb-2 relative">
                <label className="block text-sm font-bold text-[#0a0a0a] mb-2 uppercase">Subject</label>
                <select className="w-full bg-transparent border-none outline-none text-slate-500 focus:ring-0 px-0 appearance-none cursor-pointer">
                  <option value="" disabled selected>- Select Subject -</option>
                  <option value="sales">Sales Inquiry</option>
                  <option value="support">Technical Support</option>
                  <option value="amc">AMC & Lifecycle Support</option>
                  <option value="other">Other</option>
                </select>
                {/* Custom dropdown arrow */}
                <div className="absolute right-0 bottom-4 pointer-events-none">
                  <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>

              <div className="border-b border-slate-200 focus-within:border-[#E31E24] transition-colors duration-300 pb-2">
                <label className="block text-sm font-bold text-[#0a0a0a] mb-2">Your Message</label>
                <textarea 
                  rows="4"
                  placeholder="Your Message" 
                  className="w-full bg-transparent border-none outline-none text-slate-700 placeholder:text-slate-400 focus:ring-0 px-0 resize-none"
                ></textarea>
              </div>

              <button 
                type="submit"
                className="group relative w-full overflow-hidden rounded-full bg-[#E31E24] px-8 py-4 text-center font-bold text-white transition-all hover:bg-[#c4151b] focus:outline-none"
              >
                <span className="relative z-10 flex items-center justify-center gap-2 tracking-widest text-sm uppercase">
                  Send Message
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>
              </button>
            </form>
          </motion.div>

        </div>
      </section>

      {/* ══════════════════════════════════════════
          DECORATIVE DIVIDER
      ══════════════════════════════════════════ */}
      <div className="section-divider mt-auto" />

      <Footer />
    </div>
  );
}
