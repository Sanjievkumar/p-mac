import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowLeft, Calendar, Globe2, ShieldCheck, Layers, HeadphonesIcon } from 'lucide-react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

import maestrelliLogo from '../../assets/brands/maestrelli.png';

// Product Images
import energyCompactImg from '../../assets/brands/maestrelli/energy-compact.png';
import dreamCleanImg from '../../assets/brands/maestrelli/dream-clean.png';

// Temporary Image Placeholders for workflow
import heroBg from '../../assets/brands/kannegiesser/kannegiesser_video_thumbnail_1780671618796.png';
import buildingBg from '../../assets/brands/sea-lion/sealion_building_1780727375255.png';
import wf1 from '../../assets/brands/sea-lion/sealion_washer_1780727413794.png';
import wf2 from '../../assets/brands/sea-lion/sealion_dryer_1780727427054.png';
import wf3 from '../../assets/brands/kannegiesser/kannegiesser_finishing_1780671087290.png';
import wf4 from '../../assets/brands/sea-lion/sealion_ironer_1780727455295.png';
import wf5 from '../../assets/brands/kannegiesser/kannegiesser_washing_1780671064949.png';

const WORKFLOW = [
  { step: '01', title: 'Garment Intake', img: wf1 },
  { step: '02', title: 'Dry Cleaning', img: wf2 },
  { step: '03', title: 'Fabric Care', img: wf3 },
  { step: '04', title: 'Finishing', img: wf4 },
  { step: '05', title: 'Ready For Delivery', img: wf5 }
];

const PRODUCTS = [
  { 
    id: 'perc-dry-cleaning-machines',
    title: 'PERC DRY-CLEANING MACHINES', 
    desc: 'The ENERGY line was named and developed taking into high consideration the "energy saving" issue. Available in COMPACT series (2 tanks) and PLUS series (3 tanks), featuring a HIGH EFFICIENCY SOLVENT DISTILLER.', 
    img: energyCompactImg 
  },
  { 
    id: 'dream-clean',
    title: 'DREAM CLEAN -MULTOSOLVENT-SOFT-MOUNT', 
    desc: 'Maestrelli exploits again its experience innovating the sector with the DREAMCLEAN series, multi-solvent machines capable of using all new-generation solvents, from the isoparaffin to the silicone ones. The range consists of machines with still (HS & RS series) or without still (H & R series).', 
    img: dreamCleanImg 
  }
];

export default function Maestrelli() {
  return (
    <div className="w-full min-h-screen bg-[#F8F9FA] font-sans text-slate-800">
      <Navbar />

      {/* ── 1. Hero Section ── */}
      <section className="relative w-full h-[85vh] min-h-[600px] flex flex-col justify-center overflow-hidden bg-white pt-20 border-b-4 border-[#CC141A]">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-90"
          style={{ backgroundImage: `url(${heroBg})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent" />
        
        {/* Top Floating Elements */}
        <div className="absolute top-28 md:top-32 left-0 w-full px-8 lg:px-20 flex justify-between items-start z-30">
          <Link to="/brands" className="inline-flex items-center gap-2 text-slate-500 hover:text-[#CC141A] transition-colors group">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span className="text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase">Back to Brands</span>
          </Link>
        </div>

        <div className="relative z-20 w-full px-8 lg:px-20 mt-8 md:mt-16">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-2xl">
            <img src={maestrelliLogo} alt="MAESTRELLI" className="h-10 md:h-12 object-contain mb-8" />
            
            <h1 className="text-4xl md:text-5xl lg:text-[60px] font-bold leading-[1.1] tracking-tight mb-6 text-slate-900">
              Italian Garment Care<span className="text-[#CC141A]">.</span><br />
              Perfected Since <span className="text-[#CC141A]">1935</span><span className="text-slate-900">.</span>
            </h1>
            
            <p className="text-slate-600 text-lg font-medium mb-4 max-w-sm">
              Advanced Dry-Cleaning & Fabric Care Solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── 2. About Section ── */}
      <section className="w-full py-24 bg-white">
        <div className="max-w-7xl mx-auto px-8 lg:px-16 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div className="relative">
            <div className="rounded-xl overflow-hidden shadow-2xl">
              <img src={buildingBg} alt="Maestrelli Building" className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700" />
            </div>
            {/* Italian Flag Accent Strip */}
            <div className="absolute -bottom-2 -right-2 flex w-1/3 h-4">
              <div className="w-1/3 h-full bg-[#009246]" />
              <div className="w-1/3 h-full bg-white" />
              <div className="w-1/3 h-full bg-[#CE2B37]" />
            </div>
          </div>

          <div>
            <h4 className="text-[#CC141A] text-[10px] font-bold tracking-[0.2em] uppercase mb-4">ABOUT MAESTRELLI</h4>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 leading-tight tracking-tight">
              90 Years Of<br />Textile Expertise<span className="text-[#CC141A]">.</span>
            </h2>
            
            <div className="text-slate-600 font-normal text-sm leading-relaxed space-y-6 mb-12">
              <p><span className="text-[#001F3F] font-bold">MAESTRELLI</span> S.r.l is one of the most important producers in the dry-cleaning sector, with more than 40.000 machines sold and having major clients anywhere in the world, from Europe to Middle east and from South-east to the Americas.</p>
              <p>The Company was also the first Italian producer ever: being born back in 1935, during all these years of successful activity <span className="text-[#001F3F] font-bold">Maestrelli</span> has been building and consolidating its reputation in almost any country. Furthermore, throughout this period, countless have been the innovations introduced by the firm, such as front loading, electrical machines, and self-cleaning filter.</p>
              <p>The Company has been always capable of growing and renovating itself, adding to its core business of dry-cleaning machines a wide range of products that goes from washing machines, dryers to barrier washer extractors, hydroextractors and ironing tables. As of today, <span className="text-[#001F3F] font-bold">Maestrelli</span> can confidently assert to be a major and reliable representative for anyone who wants to create a modern and high-end laundry.</p>
            </div>

            <div className="grid grid-cols-4 gap-6 pt-8 border-t border-slate-100">
              {[
                { icon: Calendar, num: '1935', label: 'Founded' },
                { icon: Layers, num: '40,000+', label: 'Machines Installed' },
                { icon: Globe2, num: 'Global', label: 'Exports' },
                { icon: ShieldCheck, num: 'Italian', label: 'Engineering' }
              ].map((stat, i) => (
                <div key={i} className="flex flex-col items-center text-center gap-3">
                  <stat.icon className="w-6 h-6 text-[#CC141A] stroke-[1.5]" />
                  <div>
                    <h3 className="text-base font-bold text-slate-900">{stat.num}</h3>
                    <p className="text-[10px] text-slate-500 font-medium leading-tight">{stat.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. Workflow Section ── */}
      <section className="w-full py-24 bg-[#FAFAFA] border-y border-slate-100 overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-8 lg:px-16 flex flex-col xl:flex-row gap-16 items-center">
          
          <div className="w-full xl:w-1/4 flex-shrink-0">
            <h4 className="text-[#CC141A] text-[10px] font-bold tracking-[0.2em] uppercase mb-4">GARMENT CARE WORKFLOW</h4>
            <h2 className="text-3xl font-bold text-slate-900 mb-6 leading-tight tracking-tight">
              Care In Every Step<span className="text-[#CC141A]">.</span>
            </h2>
            <p className="text-slate-600 font-normal text-sm leading-relaxed mb-8">
              <span className="text-[#001F3F] font-bold">Maestrelli</span> delivers complete solutions to ensure superior results, fabric care and customer satisfaction.
            </p>
            <a href="#products">
              <button className="flex items-center gap-2 text-[#CC141A] text-xs font-bold tracking-widest uppercase hover:text-red-700 transition-colors">
                LEARN MORE <ArrowRight className="w-4 h-4" />
              </button>
            </a>
          </div>

          <div className="w-full xl:w-3/4 relative">
            <div className="absolute top-1/2 left-0 w-full h-[1px] border-t border-dashed border-[#CC141A]/30 -z-10" />
            <div className="flex justify-between items-center w-full gap-4 overflow-x-auto pb-8 snap-x">
              {WORKFLOW.map((item, idx) => (
                <div key={idx} className="flex flex-col items-center flex-1 min-w-[120px] snap-center">
                  <div className="bg-white rounded-lg p-2 shadow-sm border border-slate-100 w-full aspect-[4/5] flex flex-col items-center justify-center relative mb-6 group hover:-translate-y-2 transition-transform duration-300 overflow-hidden">
                    <img src={item.img} alt={item.title} className="w-full h-full object-cover mix-blend-multiply opacity-80 group-hover:opacity-100 transition-opacity" />
                    {idx !== WORKFLOW.length - 1 && (
                      <ArrowRight className="absolute -right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#CC141A] z-10 hidden md:block" />
                    )}
                  </div>
                  <div className="w-2 h-2 rounded-full bg-[#CC141A] mb-3" />
                  <span className="text-[10px] font-bold text-[#CC141A] mb-1">0{idx + 1}</span>
                  <h3 className="text-xs font-bold text-slate-900 text-center">{item.title}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. Solutions Grid ── */}
      <section className="w-full py-24 bg-white" id="products">
        <div className="max-w-7xl mx-auto px-8 lg:px-16">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <h4 className="text-[#CC141A] text-[10px] font-bold tracking-[0.2em] uppercase mb-2">EXPLORE PRODUCTS</h4>
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight leading-none">
                Our Garment Care Solutions<span className="text-[#CC141A]">.</span>
              </h2>
            </div>
            <div className="h-[2px] w-16 bg-[#CC141A] mb-2 hidden md:block" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {PRODUCTS.map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.6, delay: Math.min(idx * 0.1, 0.4) }}
                viewport={{ once: true, margin: "-50px" }}
              >
                <Link to={`/brands/maestrelli/${item.id}`} className="block h-full group">
                  <div className="h-full rounded-2xl overflow-hidden bg-[#fafafa] flex flex-col cursor-pointer border border-slate-100 hover:border-transparent relative shadow-sm hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] transition-all duration-500">
                    
                    {/* Animated Border Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#CC141A]/0 via-transparent to-[#CC141A]/0 group-hover:from-[#CC141A]/20 group-hover:to-[#1c1c1c]/20 transition-all duration-700 opacity-0 group-hover:opacity-100" />

                    {/* Image Area */}
                    <div className="h-56 p-8 flex items-center justify-center bg-white relative overflow-hidden rounded-t-2xl m-[2px]">
                      {/* Grid background */}
                      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                      
                      <img 
                        src={item.img} 
                        alt={item.title} 
                        className="w-full h-full object-contain mix-blend-multiply transform group-hover:scale-[1.15] group-hover:-translate-y-2 transition-transform duration-700 relative z-10 drop-shadow-sm group-hover:drop-shadow-xl"
                      />
                    </div>

                    {/* Content Area */}
                    <div className="p-6 flex flex-col flex-grow justify-between bg-[#fafafa] relative z-10 m-[2px] mt-0 rounded-b-2xl border-t border-slate-100/50">
                      <div>
                        <h3 className="text-sm font-bold text-slate-800 leading-snug mb-2 transition-colors duration-300 group-hover:text-[#CC141A] line-clamp-2">
                          {item.title}
                        </h3>
                      </div>
                      
                      <div className="mt-auto flex items-center text-[10px] font-bold tracking-widest uppercase text-slate-400 group-hover:text-[#CC141A] transition-colors duration-300">
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

      {/* ── 5. CTA Banner ── */}
      <section className="w-full bg-[#CC141A] py-16 relative overflow-hidden border-b-4 border-[#1c1c1c]">
        {/* Placeholder Italian Landscape Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20 mix-blend-overlay grayscale"
          style={{ backgroundImage: `url(${heroBg})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#CC141A] to-[#CC141A]/50" />
        
        <div className="max-w-7xl mx-auto px-8 lg:px-16 flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
          <div className="flex items-center gap-6 text-white">
            <HeadphonesIcon className="w-12 h-12 stroke-[1.5]" />
            <div>
              <h3 className="text-xl font-bold mb-1 tracking-wide">Need The Right Garment Care Solution?</h3>
              <p className="text-white/80 text-sm max-w-md">
                Our experts are here to help you choose the perfect equipment for your business.
              </p>
            </div>
          </div>
          <Link to="/contact">
            <button className="bg-white hover:bg-slate-50 text-[#CC141A] px-8 py-4 text-xs font-bold tracking-widest uppercase transition-colors duration-300 shadow-xl flex items-center gap-3 shrink-0 rounded-sm">
              TALK TO OUR EXPERTS <ArrowRight className="w-4 h-4" />
            </button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
