import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowLeft, Calendar, Globe2, ShieldCheck, Layers, HeadphonesIcon } from 'lucide-react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

import maxipressLogo from '../../assets/brands/maxipress.png';
import maxipressHero from '../../assets/brands/maxipress_hero_actual.jpg';
import heroBg from '../../assets/brands/kannegiesser/kannegiesser_video_thumbnail_1780671618796.png';
import buildingBg from '../../assets/brands/sea-lion/sealion_building_1780727375255.png';
import wf1 from '../../assets/brands/sea-lion/sealion_washer_1780727413794.png';
import wf2 from '../../assets/brands/sea-lion/sealion_dryer_1780727427054.png';
import wf3 from '../../assets/brands/kannegiesser/kannegiesser_finishing_1780671087290.png';
import wf4 from '../../assets/brands/sea-lion/sealion_ironer_1780727455295.png';
import wf5 from '../../assets/brands/kannegiesser/kannegiesser_washing_1780671064949.png';

const WORKFLOW = [
  { step: '01', title: 'Pressing', img: wf1 },
  { step: '02', title: 'Forming', img: wf2 },
  { step: '03', title: 'Finishing', img: wf3 },
  { step: '04', title: 'Folding', img: wf4 },
  { step: '05', title: 'Inspection', img: wf5 }
];

import { PRODUCT_DATA } from './MaxiPressProduct';

export default function MaxiPress() {
  return (
    <div className="w-full min-h-screen bg-[#F8F9FA] font-sans text-slate-800">
      <Navbar /><div className="absolute top-[100px] left-8 lg:left-16 z-50"><Link to="/brands" className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors font-medium text-sm bg-black/20 backdrop-blur-md px-4 py-2 rounded-full border border-white/10"><ArrowLeft className="w-4 h-4" /> Back to Brands</Link></div>

      {/* ✨ 1. Hero Section ✨ */}
      <section className="relative w-full min-h-[70vh] flex flex-col justify-center overflow-hidden bg-white pt-24 pb-12 border-b border-slate-100">
        <div className="absolute inset-0 bg-slate-50/50" />
        
        {/* Top Floating Elements */}
        <div className="absolute top-8 left-0 w-full px-8 lg:px-20 flex justify-between items-start z-30">
          <Link to="/brands" className="inline-flex items-center gap-2 text-slate-500 hover:text-[#E31E24] transition-colors group">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span className="text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase">Back to Brands</span>
          </Link>
        </div>

        <div className="relative z-20 w-full px-8 lg:px-20 mt-8 md:mt-16">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            
            {/* Left side: Logo & Text */}
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-xl">
              <img src={maxipressLogo} alt="MAXIPRESS" className="h-16 md:h-24 object-contain mb-10 origin-left hover:scale-105 transition-transform" />
              
              <div className="w-12 h-1 bg-[#E31E24] mb-8" />
              
              <h1 className="text-4xl md:text-5xl lg:text-[56px] font-bold leading-[1.1] tracking-tight mb-6 text-slate-900">
                Finishing Excellence<span className="text-[#E31E24]">.</span><br />
                Perfected<span className="text-[#E31E24]">.</span>
              </h1>
              
              <p className="text-slate-600 text-lg font-medium mb-12 max-w-md">
                Advanced pressing and finishing solutions for professional laundries worldwide.
              </p>

              <a href="#products" className="inline-flex bg-[#E31E24] hover:bg-red-700 text-white px-8 py-4 text-xs font-bold tracking-widest uppercase transition-colors duration-300 items-center gap-3 w-fit shadow-lg shadow-red-500/20">
                EXPLORE PRODUCTS <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>

            {/* Right side: Product Collage Display */}
            <div className="relative w-full h-[450px] lg:h-[600px] flex items-center justify-center rounded-3xl overflow-hidden shadow-2xl border border-slate-200 group">
              <img 
                src={maxipressHero} 
                alt="MaxiPress Products" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>

          </div>
        </div>
      </section>

      {/* ── 2. About Section ── */}
      <section className="relative w-full py-32 bg-[#FAFAFA] overflow-hidden">
        {/* Animated Grid Background */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.10] animate-grid"
          style={{
            backgroundImage: 'linear-gradient(#E31E24 1px, transparent 1px), linear-gradient(90deg, #E31E24 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
          aria-hidden="true"
        />
        
        <div className="max-w-4xl mx-auto px-8 lg:px-16 text-center relative z-10">
          <h4 className="text-[#E31E24] text-base md:text-lg font-bold tracking-[0.2em] uppercase mb-4">ABOUT MAXIPRESS</h4>
          <div className="w-12 h-[2px] bg-[#E31E24] mx-auto mb-8" />
          
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-10 leading-tight tracking-tight">
            Precision Finishing<br />For Professional Laundries<span className="text-[#E31E24]">.</span>
          </h2>
          
          <div className="text-slate-600 font-normal text-base md:text-lg leading-relaxed space-y-6 mb-16">
            <p><span className="text-[#D3261C] font-bold">MaxiPress</span> delivers advanced finishing and pressing equipment designed to achieve superior garment presentation, operational efficiency, and consistent quality across hospitality, healthcare, and textile service operations.</p>
            <p>Engineered for reliability and performance, our solutions help laundries of all sizes enhance productivity and maintain the highest standards of fabric care.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-10 border-t border-slate-200/60">
            {[
              { icon: Calendar, num: '30+', label: 'Years of Expertise' },
              { icon: Globe2, num: '100+', label: 'Countries Served' },
              { icon: ShieldCheck, num: 'Reliable', label: 'Global Support' },
              { icon: Layers, num: 'Complete', label: 'Finishing Solutions' }
            ].map((stat, i) => (
              <div key={i} className="flex flex-col items-center text-center gap-3">
                <stat.icon className="w-12 h-12 text-[#E31E24] stroke-[1.5]" />
                <div>
                  <h3 className="text-3xl font-bold text-slate-900">{stat.num}</h3>
                  <p className="text-base text-slate-500 font-medium leading-tight mt-1">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. Workflow Section ── */}
      <section className="w-full py-24 bg-white border-y border-slate-100 overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-8 lg:px-16 flex flex-col xl:flex-row gap-16 items-center">
          
          <div className="w-full xl:w-1/3 flex-shrink-0">
            <h4 className="text-[#D3261C] text-base md:text-lg font-bold tracking-[0.2em] uppercase mb-4">FINISHING WORKFLOW</h4>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight tracking-tight">
              Complete Finishing<br />Workflow<span className="text-[#D3261C]">.</span>
            </h2>
            <div className="text-slate-600 text-base leading-relaxed max-w-xl">
              From pressing to perfect presentation, <span className="text-[#D3261C] font-bold">MaxiPress</span> ensures every garment meets the highest standards.
            </div>
          </div>

          <div className="w-full xl:w-2/3 relative">
            <div className="absolute top-1/2 left-0 w-full h-[1px] border-t border-dashed border-[#E31E24]/30 -z-10" />
            <div className="flex justify-between items-center w-full gap-4 overflow-x-auto pb-8 snap-x">
              {WORKFLOW.map((item, idx) => (
                <div key={idx} className="flex flex-col items-center flex-1 min-w-[140px] snap-center">
                  <div className="bg-white rounded-lg p-4 shadow-sm border border-slate-100 w-full aspect-square flex flex-col items-center justify-center relative mb-6 group hover:-translate-y-2 transition-transform duration-300">
                    <img src={item.img} alt={item.title} className="w-24 h-24 object-contain mix-blend-multiply" />
                    {idx !== WORKFLOW.length - 1 && (
                      <ArrowRight className="absolute -right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#E31E24] z-10 hidden md:block" />
                    )}
                  </div>
                  <div className="w-2 h-2 rounded-full bg-[#E31E24] mb-3" />
                  <span className="text-[10px] font-bold text-slate-400 mb-1">STAGE {item.step}</span>
                  <h3 className="text-xs font-bold text-slate-900 text-center">{item.title}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. Solutions Grid ── */}
      <section className="relative w-full py-24 bg-slate-50 overflow-hidden" id="products">
        {/* Animated Grid Background */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.10] animate-grid"
          style={{
            backgroundImage: 'linear-gradient(#E31E24 1px, transparent 1px), linear-gradient(90deg, #E31E24 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
          aria-hidden="true"
        />
        
        <div className="max-w-7xl mx-auto px-8 lg:px-16 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <h4 className="text-[#E31E24] text-base md:text-lg font-bold tracking-[0.2em] uppercase mb-2">EXPLORE PRODUCTS</h4>
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight leading-none">
                Our Finishing Solutions<span className="text-[#E31E24]">.</span>
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {Object.entries(PRODUCT_DATA).map(([id, product], idx) => (
              <motion.div 
                key={id}
                initial={{ opacity: 0, y: 30 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.6, delay: Math.min(idx * 0.1, 0.4) }}
                viewport={{ once: true, margin: "-50px" }}
              >
                <Link to={`/brands/maxipress/${id}`} className="block h-full group">
                  <div className="h-full rounded-2xl overflow-hidden bg-white flex flex-col cursor-pointer border border-slate-200 hover:border-transparent relative shadow-sm hover:shadow-xl transition-all duration-500">
                    
                    {/* Animated Border Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#E31E24]/0 via-transparent to-[#E31E24]/0 group-hover:from-[#E31E24]/10 group-hover:to-[#1c1c1c]/10 transition-all duration-700 opacity-0 group-hover:opacity-100" />

                    {/* Image Area */}
                    <div className="h-[300px] p-2 flex items-center justify-center bg-slate-50 relative overflow-hidden rounded-t-2xl m-[2px]">
                      {/* Grid background */}
                      <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, black 1px, transparent 0)', backgroundSize: '16px 16px' }} />
                      
                      <img 
                        src={product.img} 
                        alt={product.title} 
                        className="w-full h-full object-contain filter drop-shadow-xl group-hover:scale-110 group-hover:-translate-y-4 transition-all duration-500 ease-out relative z-10"
                      />
                    </div>

                    {/* Content Area */}
                    <div className="p-6 flex flex-col flex-grow justify-between bg-white relative z-10 m-[2px] mt-0 rounded-b-2xl border-t border-slate-100/50">
                      <div>
                        <h3 className="text-sm font-bold text-slate-800 leading-snug mb-2 transition-colors duration-300 group-hover:text-[#E31E24] line-clamp-2">
                          {product.title}
                        </h3>
                        <p className="text-xs text-slate-500 line-clamp-2 mb-4">{product.description}</p>
                      </div>
                      
                      <div className="mt-auto flex items-center text-[10px] font-bold tracking-widest uppercase text-slate-400 group-hover:text-[#E31E24] transition-colors duration-300">
                        View Product 
                        <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-2 transition-transform duration-500" />
                      </div>
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
