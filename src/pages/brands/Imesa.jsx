import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  ArrowLeft, ChevronRight, Droplets, Wind, Layers, 
  HeartHandshake, Factory, Volume2, VolumeX, ShieldCheck, 
  Cpu, Award, Sparkles, ArrowRight
} from 'lucide-react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

// Asset Imports
import imesaHeroVideo from '../../assets/brands/imesa-hero.mp4';
import imesaLogo from '../../assets/brands/imesa.png';

// Local Connection Space Images
import imConnectImg from '../../assets/brands/imesa/IMESA_Dashboard-PC_Portal-IMConnect_1200x800-1024x683.jpg';
import smartLaundryImg from '../../assets/brands/imesa/Stanza.71_con-telefono-in-mano-copia.jpg';
import tapTechImg from '../../assets/brands/imesa/LM_Tap.Tech_-1024x683.jpg';
import selfServiceImg from '../../assets/brands/imesa/stanza.80_rielaborata_1000X700.jpg';

// Official IMESA Categories Data
import { OFFICIAL_CATEGORIES } from './imesaCategoryData';

export default function Imesa() {
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#FDFDFD] font-sans text-slate-800">
      <Navbar />

      {/* Back to Brands Navigation */}
      <div className="absolute top-[85px] sm:top-[100px] left-4 sm:left-8 lg:left-16 z-50">
        <Link 
          to="/brands" 
          className="inline-flex items-center gap-2 text-white/85 hover:text-white transition-colors font-medium text-xs sm:text-sm bg-black/30 backdrop-blur-md px-3.5 py-2 sm:px-4 sm:py-2 rounded-full border border-white/15 shadow-sm"
        >
          <ArrowLeft className="w-3.5 h-3.5 sm:w-4 sm:h-4" /> Back to Brands
        </Link>
      </div>

      {/* ── 1. Hero Section with Video (Pure clean video, NO overlaid text or buttons per user requirement) ── */}
      <section className="relative w-full h-[75vh] sm:h-[85vh] min-h-[480px] sm:min-h-[600px] flex flex-col justify-center overflow-hidden bg-gradient-to-br from-slate-950 via-[#0C4779] to-slate-900 pt-16 sm:pt-20 group">
        <video
          autoPlay
          loop
          muted={isMuted}
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover opacity-95 transition-opacity duration-700"
        >
          <source src={imesaHeroVideo} type="video/mp4" />
        </video>

        {/* Audio Toggle Button */}
        <button 
          onClick={() => setIsMuted(!isMuted)}
          className="absolute bottom-6 right-6 sm:bottom-8 sm:right-8 z-20 p-3.5 sm:p-4 rounded-full bg-black/40 hover:bg-black/60 backdrop-blur-sm border border-white/20 text-white shadow-lg transition-all duration-300 opacity-90 sm:opacity-0 sm:group-hover:opacity-100"
          aria-label={isMuted ? "Unmute video" : "Mute video"}
        >
          {isMuted ? <VolumeX className="w-5 h-5 sm:w-6 sm:h-6" /> : <Volume2 className="w-5 h-5 sm:w-6 sm:h-6" />}
        </button>
      </section>

      {/* ── 2. Who We Are Section ── */}
      <section className="py-16 sm:py-24 bg-white relative overflow-hidden">
        {/* Animated Grid Background */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.12] animate-grid"
          style={{
            backgroundImage: 'linear-gradient(#0C4779 1px, transparent 1px), linear-gradient(90deg, #0C4779 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
          aria-hidden="true"
        />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 text-center relative z-10">
          <div className="flex flex-col items-center mb-10 sm:mb-16">
            <div className="w-12 h-[2px] bg-[#0C4779] mb-4" />
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0C4779] uppercase tracking-tight">Who We Are</h2>
          </div>
          
          <h3 className="text-xl sm:text-3xl lg:text-4xl font-bold text-[#0C4779] mb-10 sm:mb-12 max-w-4xl mx-auto leading-snug sm:leading-tight">
            We drive change to create value and make our customers and people successful.
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 lg:gap-12 text-left">
            <div className="bg-slate-50 p-6 sm:p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-[#0C4779]/10 rounded-2xl flex items-center justify-center mb-5 sm:mb-6">
                <HeartHandshake className="w-6 h-6 text-[#0C4779]" />
              </div>
              <p className="text-slate-600 leading-relaxed text-base sm:text-lg">
                We support people with our services and design sustainable laundry solutions that simplify people's lives by ensuring the durability of fabrics over time.
              </p>
            </div>
            
            <div className="bg-slate-50 p-6 sm:p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-[#0C4779]/10 rounded-2xl flex items-center justify-center mb-5 sm:mb-6">
                <Droplets className="w-6 h-6 text-[#0C4779]" />
              </div>
              <p className="text-slate-600 leading-relaxed text-base sm:text-lg">
                Our products are designed to treat any fabric and/or material depending on the need, through a conscious and sustainable consumption of water and energy.
              </p>
            </div>

            <div className="bg-slate-50 p-6 sm:p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-[#0C4779]/10 rounded-2xl flex items-center justify-center mb-5 sm:mb-6">
                <Factory className="w-6 h-6 text-[#0C4779]" />
              </div>
              <p className="text-slate-600 leading-relaxed text-base sm:text-lg">
                50 years of history and experience. We at <strong className="text-[#0C4779]">IMESA</strong> SpA are the only Italian manufacturing company whose core business is also a vocation: washing, drying and ironing of all types of fabric.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. IMESA, Designing Your Clean ── */}
      <section className="py-16 sm:py-24 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 text-center">
          <div className="flex flex-col items-center mb-12 sm:mb-16">
            <div className="w-12 h-[2px] bg-[#0C4779] mb-4" />
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0C4779] uppercase tracking-tight">IMESA, Designing Your Clean</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-100 shadow-sm flex flex-col items-center text-center">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-[#0C4779]/10 flex items-center justify-center mb-5 sm:mb-6 text-[#0C4779]">
                <Droplets className="w-7 h-7 sm:w-8 sm:h-8" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-[#0C4779] mb-2 sm:mb-3">Washing</h3>
              <p className="text-slate-500 leading-relaxed text-sm">
                High spin freestanding washers and aseptic hygiene barrier machines engineered with IM11 touchscreens and conscious water recovery.
              </p>
            </div>

            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-100 shadow-sm flex flex-col items-center text-center">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-[#0C4779]/10 flex items-center justify-center mb-5 sm:mb-6 text-[#0C4779]">
                <Wind className="w-7 h-7 sm:w-8 sm:h-8" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-[#0C4779] mb-2 sm:mb-3">Drying</h3>
              <p className="text-slate-500 leading-relaxed text-sm">
                ES Smart and Premium dryers powered by patented D-FLOW axial airflow for rapid, uniform moisture extraction and fabric protection.
              </p>
            </div>

            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-100 shadow-sm flex flex-col items-center text-center">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-[#0C4779]/10 flex items-center justify-center mb-5 sm:mb-6 text-[#0C4779]">
                <Layers className="w-7 h-7 sm:w-8 sm:h-8" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-[#0C4779] mb-2 sm:mb-3">Ironing</h3>
              <p className="text-slate-500 leading-relaxed text-sm">
                FI flatwork chest ironers and MCA/MCM drying ironers delivering flawless flatwork finish in single-pass operations.
              </p>
            </div>

            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-100 shadow-sm flex flex-col items-center text-center">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-[#0C4779]/10 flex items-center justify-center mb-5 sm:mb-6 text-[#0C4779]">
                <Cpu className="w-7 h-7 sm:w-8 sm:h-8" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-[#0C4779] mb-2 sm:mb-3">Connected Space</h3>
              <p className="text-slate-500 leading-relaxed text-sm">
                Complete Industry 4.0 ecosystem with IMConnect telemetry, Laundry for You manager app, Tap.Tech NFC, and online payment integration.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. The IMESA Connection Space (IoT Showcase) ── */}
      <section className="py-16 sm:py-24 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16">
          <div className="flex flex-col items-center mb-12 sm:mb-20 text-center">
            <div className="w-12 h-[2px] bg-[#0C4779] mb-4" />
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0C4779] uppercase tracking-tight mb-3 sm:mb-4">
              The IMESA Connection Space
            </h2>
            <p className="text-slate-500 text-base sm:text-lg max-w-2xl">
              An ecosystem of digital platforms and services created to manage machines, track operations, and simplify daily laundry workflows.
            </p>
          </div>

          <div className="space-y-16 sm:space-y-24">
            {/* 1. Benefits At Your Fingertips */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-16 items-center">
              <div className="order-2 lg:order-1 relative">
                <img 
                  src={imConnectImg} 
                  alt="IMConnect" 
                  className="rounded-3xl shadow-xl sm:shadow-2xl relative z-10 w-full object-cover"
                />
              </div>
              <div className="order-1 lg:order-2">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#0C4779]/10 rounded-2xl flex items-center justify-center mb-4 sm:mb-6">
                  <span className="text-[#0C4779] font-black text-lg sm:text-xl">1</span>
                </div>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0C4779] mb-4 sm:mb-6">Benefits At Your Fingertips</h3>
                <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                  With <strong className="text-[#0C4779]">IMConnect</strong>, there is room for remote management of the laundry for real-time control of production, acquisition of valuable data, predictive maintenance and organizational agility.
                </p>
              </div>
            </div>

            {/* 2. The Laundry is Ever Smarter and More Social */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-16 items-center">
              <div className="order-2 lg:order-2 relative">
                <img 
                  src={smartLaundryImg} 
                  alt="Smarter Laundry" 
                  className="rounded-3xl shadow-xl sm:shadow-2xl relative z-10 w-full object-cover"
                />
              </div>
              <div className="order-1 lg:order-1">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#0C4779]/10 rounded-2xl flex items-center justify-center mb-4 sm:mb-6">
                  <span className="text-[#0C4779] font-black text-lg sm:text-xl">2</span>
                </div>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0C4779] mb-4 sm:mb-6">The Laundry is Ever Smarter and More Social</h3>
                <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                  Laundry For You is the <strong className="text-[#0C4779]">IMESA</strong> app dedicated to the dealer and laundry manager that allows you to monitor and optimize your machine fleet and provides a space dedicated to the publication of personalized news and promotions.
                </p>
              </div>
            </div>
            
            {/* 3. TAP.TECH Label */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-16 items-center">
              <div className="order-2 lg:order-1 relative">
                <img 
                  src={tapTechImg} 
                  alt="Tap.Tech Label" 
                  className="rounded-3xl shadow-xl sm:shadow-2xl relative z-10 w-full object-cover"
                />
              </div>
              <div className="order-1 lg:order-2">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#0C4779]/10 rounded-2xl flex items-center justify-center mb-4 sm:mb-6">
                  <span className="text-[#0C4779] font-black text-lg sm:text-xl">3</span>
                </div>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0C4779] mb-4 sm:mb-6">TAP.TECH Label</h3>
                <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                  <strong className="text-[#0C4779]">Tap.Tech. Label</strong>, with built-in NFC technology, communicates with the Laundry for You app to access the washing machine's identification data. Available on all washing machines up to 32 kg.
                </p>
              </div>
            </div>

            {/* 4. The Self-service Laundry App */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-16 items-center">
              <div className="order-2 lg:order-2 relative">
                <img 
                  src={selfServiceImg} 
                  alt="Self Service App" 
                  className="rounded-3xl shadow-xl sm:shadow-2xl relative z-10 w-full object-cover"
                />
              </div>
              <div className="order-1 lg:order-1">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#0C4779]/10 rounded-2xl flex items-center justify-center mb-4 sm:mb-6">
                  <span className="text-[#0C4779] font-black text-lg sm:text-xl">4</span>
                </div>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0C4779] mb-4 sm:mb-6">The Self-service Laundry App</h3>
                <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                  Laundry for you PAY is the <strong className="text-[#0C4779]">IMESA</strong> app dedicated to the end customer of the self-service laundry that allows you to book and pay for the service online.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── 5. Product Category Boxes (Clicking a box navigates to that category's dedicated official build page) ── */}
      <section className="py-16 sm:py-24 bg-[#F8F9FA] relative border-t border-slate-200" id="products">
        {/* Animated Grid Background */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.08] animate-grid"
          style={{
            backgroundImage: 'linear-gradient(#0C4779 1px, transparent 1px), linear-gradient(90deg, #0C4779 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
          aria-hidden="true"
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 relative z-10">
          <div className="flex flex-col items-center mb-12 sm:mb-16 text-center">
            <div className="w-12 h-[2px] bg-[#0C4779] mb-4" />
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0C4779] tracking-tight uppercase mb-3">
              PRODUCT CATEGORIES
            </h2>
            <p className="text-slate-500 max-w-2xl text-sm sm:text-base md:text-lg">
              Select a category box below to explore official series models, specifications, and technical documentation.
            </p>
          </div>

          {/* 4 Interactive Category Boxes (2x2 Grid) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 max-w-6xl mx-auto">
            {OFFICIAL_CATEGORIES.map((cat, idx) => (
              <motion.div
                key={cat.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="h-full"
              >
                <Link
                  to={`/brands/imesa/${cat.id}`}
                  className="group flex flex-col h-full bg-white rounded-3xl border border-slate-200/90 shadow-sm hover:shadow-2xl hover:border-[#0C4779]/40 transition-all duration-300 overflow-hidden cursor-pointer"
                >
                  {/* Card Header Bar */}
                  <div className="px-6 sm:px-8 pt-6 sm:pt-7 pb-3 flex items-center justify-between bg-white border-b border-slate-100">
                    <span className="inline-flex items-center gap-1.5 bg-[#0C4779] text-white text-[10px] sm:text-[11px] font-bold px-3 py-1.5 rounded-full uppercase tracking-wider shadow-sm">
                      {cat.capacityBadge}
                    </span>
                    <span className="text-[11px] sm:text-xs font-bold text-slate-400 uppercase tracking-widest flex items-center gap-1.5">
                      {cat.badgeIcon && (
                        <img src={cat.badgeIcon} alt="" className="w-3.5 h-3.5 sm:w-4 sm:h-4 object-contain" />
                      )}
                      IMESA SpA
                    </span>
                  </div>

                  {/* Machine Photography Preview */}
                  <div className="px-6 sm:px-8 py-6 sm:py-8 flex items-center justify-center bg-gradient-to-b from-slate-50/50 to-white min-h-[220px] sm:min-h-[280px] md:min-h-[320px] relative overflow-hidden border-b border-slate-100">
                    <img
                      src={cat.cardImg}
                      alt={cat.name}
                      className="w-full h-48 sm:h-56 md:h-64 object-contain drop-shadow-md group-hover:scale-105 transition-transform duration-500 will-change-transform"
                    />
                  </div>

                  {/* Card Content */}
                  <div className="p-6 sm:p-8 flex flex-col gap-3 flex-1 bg-white">
                    <div className="text-[#0C4779] text-xs font-bold uppercase tracking-widest">
                      {cat.subtitle}
                    </div>

                    <h3 className="text-xl sm:text-2xl font-black text-[#0C4779] transition-colors uppercase tracking-tight">
                      {cat.name}
                    </h3>

                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed flex-1">
                      {cat.cardDesc}
                    </p>

                    {/* Highlights tags */}
                    <div className="flex flex-wrap gap-1.5 sm:gap-2 pt-2">
                      {cat.highlights.map((h, i) => (
                        <span
                          key={i}
                          className="bg-slate-100 group-hover:bg-[#0C4779]/10 text-slate-700 group-hover:text-[#0C4779] text-[11px] sm:text-xs font-semibold px-2.5 py-1 rounded-md transition-colors"
                        >
                          {h}
                        </span>
                      ))}
                    </div>

                    {/* Action Bar */}
                    <div className="flex items-center justify-between text-[#0C4779] font-bold text-xs sm:text-sm mt-4 pt-4 border-t border-slate-100 group-hover:text-[#083256] transition-colors tracking-wide">
                      <span>Explore {cat.name}</span>
                      <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-2 transition-transform duration-300" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
