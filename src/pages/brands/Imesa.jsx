import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, ArrowLeft, Droplets, Factory, ShieldCheck, HeartHandshake, Lightbulb, UserCheck, Settings, Megaphone, Globe } from 'lucide-react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { Link } from 'react-router-dom';

import imesaHeroVideo from '../../assets/brands/imesa-hero.mp4';
import imesaLogo from '../../assets/brands/imesa.png';

const PRODUCTS = [
  {
    id: 'imesa-washing-machines',
    name: 'Washing Machines',
    desc: 'Advanced EVOLINE washing machines with Tap.Tech',
    img: 'https://promactech.com/wp-content/uploads/2025/01/Washing-Machine-1024x819.png'
  },
  {
    id: 'imesa-dryers',
    name: 'Dryers',
    desc: 'High efficiency tumble dryers',
    img: 'https://promactech.com/wp-content/uploads/2025/01/Dryers-1024x819.png'
  }
];

export default function Imesa() {
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans text-slate-800">
      <Navbar /><div className="absolute top-[100px] left-8 lg:left-16 z-50"><Link to="/brands" className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors font-medium text-sm bg-black/20 backdrop-blur-md px-4 py-2 rounded-full border border-white/10"><ArrowLeft className="w-4 h-4" /> Back to Brands</Link></div>

      {/* Hero Section with Video */}
      <section className="relative w-full h-[85vh] min-h-[600px] flex flex-col justify-center overflow-hidden bg-[#0A0A0A] pt-20 group">
        <video
          autoPlay
          loop
          muted={isMuted}
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-90"
        >
          <source src={imesaHeroVideo} type="video/mp4" />
        </video>

        {/* Audio Toggle */}
        <button 
          onClick={() => setIsMuted(!isMuted)}
          className="absolute bottom-8 right-8 z-20 p-4 rounded-full bg-black/40 hover:bg-black/60 backdrop-blur-sm border border-white/20 text-white shadow-lg transition-all duration-300 opacity-0 group-hover:opacity-100"
        >
          {isMuted ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><line x1="23" y1="9" x2="17" y2="15"></line><line x1="17" y1="9" x2="23" y2="15"></line></svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path><path d="M19.07 4.93a10 10 0 0 1 0 14.14"></path></svg>
          )}
        </button>
      </section>

      {/* Who We Are */}
      <section className="py-24 bg-white relative overflow-hidden">
        {/* Animated Grid Background */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.15] animate-grid"
          style={{
            backgroundImage: 'linear-gradient(#00A3E0 1px, transparent 1px), linear-gradient(90deg, #00A3E0 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
          aria-hidden="true"
        />
        
        <div className="max-w-7xl mx-auto px-6 lg:px-16 text-center relative z-10">
          <div className="flex flex-col items-center mb-16">
            <div className="w-12 h-[2px] bg-[#00A3E0] mb-4" />
            <h2 className="text-4xl lg:text-5xl font-black text-[#001F3F] uppercase tracking-tight">Who We Are</h2>
          </div>
          
          <h3 className="text-2xl lg:text-4xl font-bold text-[#00A3E0] mb-12 max-w-4xl mx-auto leading-tight">
            We drive change to create value and make our customers and people successful.
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-left">
            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-[#00A3E0]/10 rounded-2xl flex items-center justify-center mb-6">
                <HeartHandshake className="w-6 h-6 text-[#00A3E0]" />
              </div>
              <p className="text-slate-600 leading-relaxed text-lg">
                We support people with our services and design sustainable laundry solutions that simplify people's lives by ensuring the durability of fabrics over time.
              </p>
            </div>
            
            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-[#00A3E0]/10 rounded-2xl flex items-center justify-center mb-6">
                <Droplets className="w-6 h-6 text-[#00A3E0]" />
              </div>
              <p className="text-slate-600 leading-relaxed text-lg">
                Our products are designed to treat any fabric and/or material depending on the need, through a conscious and sustainable consumption of water and energy.
              </p>
            </div>

            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-[#00A3E0]/10 rounded-2xl flex items-center justify-center mb-6">
                <Factory className="w-6 h-6 text-[#00A3E0]" />
              </div>
              <p className="text-slate-600 leading-relaxed text-lg">
                50 years of history and experience. We at <strong className="text-[#001F3F]">IMESA</strong> SpA are the only Italian manufacturing company whose core business is also a vocation: washing, drying and ironing of all types of fabric.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Designing Your Clean (Icons Section) */}
      <section className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-16 text-center">
          <div className="flex flex-col items-center mb-16">
            <div className="w-12 h-[2px] bg-[#00A3E0] mb-4" />
            <h2 className="text-4xl lg:text-5xl font-black text-[#001F3F] uppercase tracking-tight">IMESA, Designing Your Clean</h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-16">
            <div className="flex flex-col items-center text-center group">
              <div className="w-32 h-32 bg-white rounded-full shadow-lg flex items-center justify-center mb-6 group-hover:-translate-y-2 transition-transform duration-300">
                <img src="https://promactech.com/wp-content/uploads/2025/01/icone-chi-siamo-investimenti.png" alt="Investments" className="w-20 h-20 object-contain" />
              </div>
              <p className="font-bold text-[#001F3F] text-lg max-w-[200px]">We invest in ideas, people, processes.</p>
            </div>
            
            <div className="flex flex-col items-center text-center group">
              <div className="w-32 h-32 bg-white rounded-full shadow-lg flex items-center justify-center mb-6 group-hover:-translate-y-2 transition-transform duration-300">
                <img src="https://promactech.com/wp-content/uploads/2025/01/icone-chi-siamo-innovazione.png" alt="Innovation" className="w-20 h-20 object-contain" />
              </div>
              <p className="font-bold text-[#001F3F] text-lg max-w-[200px]">We are constantly innovating our technology.</p>
            </div>
            
            <div className="flex flex-col items-center text-center group">
              <div className="w-32 h-32 bg-white rounded-full shadow-lg flex items-center justify-center mb-6 group-hover:-translate-y-2 transition-transform duration-300">
                <img src="https://promactech.com/wp-content/uploads/2025/01/icone-soluzioni-custom_sviluppo.png" alt="Custom Solutions" className="w-20 h-20 object-contain" />
              </div>
              <p className="font-bold text-[#001F3F] text-lg max-w-[200px]">We talk to the customer to understand their needs and satisfy them.</p>
            </div>
            
            <div className="flex flex-col items-center text-center group">
              <div className="w-32 h-32 bg-white rounded-full shadow-lg flex items-center justify-center mb-6 group-hover:-translate-y-2 transition-transform duration-300">
                <img src="https://promactech.com/wp-content/uploads/2025/01/icone-chi-siamo-personalizzazione.png" alt="Personalization" className="w-20 h-20 object-contain" />
              </div>
              <p className="font-bold text-[#001F3F] text-lg max-w-[200px]">We personalize our services.</p>
            </div>
            
            <div className="flex flex-col items-center text-center group">
              <div className="w-32 h-32 bg-white rounded-full shadow-lg flex items-center justify-center mb-6 group-hover:-translate-y-2 transition-transform duration-300">
                <img src="https://promactech.com/wp-content/uploads/2025/01/Icona-megafono.png" alt="Communication" className="w-20 h-20 object-contain" />
              </div>
              <p className="font-bold text-[#001F3F] text-lg max-w-[200px]">We communicate through emotions.</p>
            </div>
            
            <div className="flex flex-col items-center text-center group">
              <div className="w-32 h-32 bg-white rounded-full shadow-lg flex items-center justify-center mb-6 group-hover:-translate-y-2 transition-transform duration-300">
                <img src="https://promactech.com/wp-content/uploads/2025/01/Icona-made-in-Italy.png" alt="Made in Italy" className="w-20 h-20 object-contain" />
              </div>
              <p className="font-bold text-[#001F3F] text-lg max-w-[200px]">Let's spread Made in Italy.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Ecosystem Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="flex flex-col items-center text-center mb-16">
            <div className="w-12 h-[2px] bg-[#00A3E0] mb-4" />
            <h2 className="text-4xl lg:text-5xl font-black text-[#001F3F] uppercase tracking-tight mb-4">The IMESA Connection Space</h2>
            <p className="text-xl text-slate-600 max-w-3xl">
              Where, through the portal and app, customers, technicians and the company collaborate, share and act.
            </p>
          </div>
          
          <div className="space-y-24">
            
            {/* 1. Benefits At Your Fingertips */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1 relative">
                <img 
                  src="https://promactech.com/wp-content/uploads/2025/01/IMESA_Dashboard-PC_Portal-IMConnect_1200x800-1024x683.jpg" 
                  alt="IMConnect" 
                  className="rounded-3xl shadow-2xl relative z-10 w-full"
                />
              </div>
              <div className="order-1 lg:order-2">
                <div className="w-12 h-12 bg-[#00A3E0]/10 rounded-2xl flex items-center justify-center mb-6">
                  <span className="text-[#00A3E0] font-black text-xl">1</span>
                </div>
                <h3 className="text-3xl lg:text-4xl font-bold text-[#001F3F] mb-6">Benefits At Your Fingertips</h3>
                <p className="text-lg text-slate-600 leading-relaxed">
                  With <strong>IMConnect</strong>, there is room for remote management of the laundry for real-time control of production, acquisition of valuable data, predictive maintenance and organizational agility.
                </p>
              </div>
            </div>

            {/* 2. The Laundry is Ever Smarter and More Social */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-2 relative">
                <img 
                  src="https://promactech.com/wp-content/uploads/2025/01/Stanza.71_con-telefono-in-mano-copia.jpg" 
                  alt="Smarter Laundry" 
                  className="rounded-3xl shadow-2xl relative z-10 w-full"
                />
              </div>
              <div className="order-1 lg:order-1">
                <div className="w-12 h-12 bg-[#00A3E0]/10 rounded-2xl flex items-center justify-center mb-6">
                  <span className="text-[#00A3E0] font-black text-xl">2</span>
                </div>
                <h3 className="text-3xl lg:text-4xl font-bold text-[#001F3F] mb-6">The Laundry is Ever Smarter and More Social</h3>
                <p className="text-lg text-slate-600 leading-relaxed">
                  Laundry For You is the <strong>IMESA</strong> app dedicated to the dealer and laundry manager that allows you to monitor and optimize your machine fleet and provides a space dedicated to the publication of personalized news and promotions.
                </p>
              </div>
            </div>
            
            {/* 3. TAP.TECH Label */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1 relative">
                <img 
                  src="https://promactech.com/wp-content/uploads/2025/01/LM_Tap.Tech_-1024x683.jpg" 
                  alt="Tap.Tech Label" 
                  className="rounded-3xl shadow-2xl relative z-10 w-full"
                />
              </div>
              <div className="order-1 lg:order-2">
                <div className="w-12 h-12 bg-[#00A3E0]/10 rounded-2xl flex items-center justify-center mb-6">
                  <span className="text-[#00A3E0] font-black text-xl">3</span>
                </div>
                <h3 className="text-3xl lg:text-4xl font-bold text-[#001F3F] mb-6">TAP.TECH Label</h3>
                <p className="text-lg text-slate-600 leading-relaxed">
                  <strong>Tap.Tech. Label</strong>, with built-in NFC technology, communicates with the Laundry for You app to access the washing machine's identification data. Available on all washing machines up to 32 kg.
                </p>
              </div>
            </div>

            {/* 4. The Self-service Laundry App */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-2 relative">
                <img 
                  src="https://promactech.com/wp-content/uploads/2025/01/stanza.80_rielaborata_1000X700.jpg" 
                  alt="Self Service App" 
                  className="rounded-3xl shadow-2xl relative z-10 w-full"
                />
              </div>
              <div className="order-1 lg:order-1">
                <div className="w-12 h-12 bg-[#00A3E0]/10 rounded-2xl flex items-center justify-center mb-6">
                  <span className="text-[#00A3E0] font-black text-xl">4</span>
                </div>
                <h3 className="text-3xl lg:text-4xl font-bold text-[#001F3F] mb-6">The Self-service Laundry App</h3>
                <p className="text-lg text-slate-600 leading-relaxed">
                  Laundry for you PAY is the <strong>IMESA</strong> app dedicated to the end customer of the self-service laundry that allows you to book and pay for the service online.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Explore Products */}
      <section className="py-24 bg-slate-50 relative border-t border-slate-200 overflow-hidden">
        {/* Animated Grid Background */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.10] animate-grid"
          style={{
            backgroundImage: 'linear-gradient(#00A3E0 1px, transparent 1px), linear-gradient(90deg, #00A3E0 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
          aria-hidden="true"
        />
        
        <div className="max-w-7xl mx-auto px-6 lg:px-16 relative z-10">
          <div className="flex flex-col items-center mb-16 text-center">
            <h2 className="text-4xl lg:text-5xl font-black text-[#001F3F] mb-6">EXPLORE <span className="text-[#00A3E0]">PRODUCTS</span></h2>
            <p className="text-slate-500 max-w-2xl text-lg">
              Discover IMESA's range of washing machines and dryers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-4xl mx-auto">
            {PRODUCTS.map((product) => (
              <Link 
                to={`/brands/imesa/${product.id}`} 
                key={product.id}
                className="group flex flex-col h-full"
              >
                <div className="bg-white rounded-t-3xl p-8 border border-b-0 border-slate-200 overflow-hidden relative flex-1 flex items-center justify-center min-h-[300px]">
                  <img 
                    src={product.img} 
                    alt={product.name} 
                    className="w-full h-auto object-contain transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                
                <div className="bg-slate-50 border border-slate-200 rounded-b-3xl p-8 flex flex-col gap-4 group-hover:bg-[#00A3E0] transition-colors duration-300 relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-6 opacity-0 group-hover:opacity-20 transform translate-x-4 -translate-y-4 transition-all duration-300">
                    <Droplets className="w-24 h-24 text-white" />
                  </div>

                  <h3 className="text-2xl font-bold text-[#001F3F] group-hover:text-white transition-colors relative z-10">
                    {product.name}
                  </h3>
                  
                  <p className="text-slate-500 group-hover:text-white/90 transition-colors flex-1 relative z-10 font-medium">
                    {product.desc}
                  </p>
                  
                  <div className="flex items-center gap-2 text-[#00A3E0] font-bold group-hover:text-white transition-colors mt-4 relative z-10 tracking-wide">
                    View Details
                    <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
