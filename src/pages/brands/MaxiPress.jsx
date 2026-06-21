import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowLeft, Calendar, Globe2, ShieldCheck, Layers, HeadphonesIcon } from 'lucide-react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { PRODUCT_DATA } from './MaxiPressProduct';

// Asset Imports
import maxipressLogo from '../../assets/brands/maxipress.png';

// Images
import heroBg from '../../assets/brands/maxipress/maxi_hero_1780728104366.png';
import buildingBg from '../../assets/brands/maxipress/maxi_building_1780728119159.png';
import wf1 from '../../assets/brands/maxipress/maxi_wf_1_1780728132369.png';
import wf2 from '../../assets/brands/maxipress/maxi_wf_2_1780728144691.png';
import wf3 from '../../assets/brands/maxipress/maxi_wf_3_1780728158285.png';
import wf4 from '../../assets/brands/maxipress/maxi_wf_4_1780728185911.png';
import wf5 from '../../assets/brands/maxipress/maxi_wf_5_1780728197642.png';

const WORKFLOW = [
  { step: '01', title: 'Pressing', img: wf1 },
  { step: '02', title: 'Forming', img: wf2 },
  { step: '03', title: 'Finishing', img: wf3 },
  { step: '04', title: 'Quality Check', img: wf4 },
  { step: '05', title: 'Ready for Delivery', img: wf5 }
];

export default function MaxiPress() {
  return (
    <div className="w-full min-h-screen bg-[#F8F9FA] font-sans text-slate-800">
      <Navbar />

      {/* ── 1. Hero Section ── */}
      <section className="relative w-full h-[85vh] min-h-[600px] flex flex-col justify-center overflow-hidden bg-white pt-20">
        <div 
          className="absolute inset-0 bg-cover bg-right bg-no-repeat opacity-90"
          style={{ backgroundImage: `url(${heroBg})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent" />
        
        {/* Top Floating Elements */}
        <div className="absolute top-28 md:top-32 left-0 w-full px-8 lg:px-20 flex justify-between items-start z-30">
          <Link to="/brands" className="inline-flex items-center gap-2 text-slate-500 hover:text-[#E31E24] transition-colors group">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span className="text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase">Back to Brands</span>
          </Link>
        </div>

        <div className="relative z-20 w-full px-8 lg:px-20 mt-8 md:mt-16">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-2xl">
            <img src={maxipressLogo} alt="MAXIPRESS" className="h-8 md:h-10 object-contain mb-10" />
            
            <div className="w-12 h-1 bg-[#E31E24] mb-6" />
            
            <h1 className="text-4xl md:text-5xl lg:text-[56px] font-bold leading-[1.1] tracking-tight mb-6 text-slate-900">
              Finishing Excellence<span className="text-[#E31E24]">.</span><br />
              Perfected<span className="text-[#E31E24]">.</span>
            </h1>
            
            <p className="text-slate-600 text-lg font-medium mb-12 max-w-md">
              Advanced pressing and finishing solutions for professional laundries worldwide.
            </p>

            <a href="#products" className="inline-flex bg-[#E31E24] hover:bg-red-700 text-white px-8 py-4 text-xs font-bold tracking-widest uppercase transition-colors duration-300 items-center gap-3 w-fit">
              EXPLORE PRODUCTS <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* ── 2. About Section ── */}
      <section className="w-full py-24 bg-white">
        <div className="max-w-7xl mx-auto px-8 lg:px-16 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div className="order-2 lg:order-1 relative">
            <div className="rounded-xl overflow-hidden shadow-2xl">
              <img src={buildingBg} alt="MaxiPress Building" className="w-full h-auto object-cover" />
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <h4 className="text-[#E31E24] text-[10px] font-bold tracking-[0.2em] uppercase mb-4">ABOUT MAXIPRESS</h4>
            <div className="w-8 h-[2px] bg-slate-200 mb-6" />
            
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 leading-tight tracking-tight">
              Precision Finishing<br />For Professional Laundries<span className="text-[#E31E24]">.</span>
            </h2>
            
            <div className="text-slate-600 font-normal text-sm leading-relaxed space-y-6 mb-12">
              <p>MaxiPress delivers advanced finishing and pressing equipment designed to achieve superior garment presentation, operational efficiency, and consistent quality across hospitality, healthcare, and textile service operations.</p>
              <p>Engineered for reliability and performance, our solutions help laundries of all sizes enhance productivity and maintain the highest standards of fabric care.</p>
            </div>

            <div className="grid grid-cols-4 gap-6 pt-8 border-t border-slate-100">
              {[
                { icon: Calendar, num: '30+', label: 'Years of Expertise' },
                { icon: Globe2, num: '100+', label: 'Countries Served' },
                { icon: ShieldCheck, num: 'Reliable', label: 'Global Support' },
                { icon: Layers, num: 'Complete', label: 'Finishing Solutions' }
              ].map((stat, i) => (
                <div key={i} className="flex flex-col items-center text-center gap-3">
                  <stat.icon className="w-6 h-6 text-[#E31E24] stroke-[1.5]" />
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
          
          <div className="w-full xl:w-1/3 flex-shrink-0">
            <h4 className="text-[#E31E24] text-[10px] font-bold tracking-[0.2em] uppercase mb-4">FINISHING WORKFLOW</h4>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight tracking-tight">
              Complete Finishing<br />Workflow<span className="text-[#E31E24]">.</span>
            </h2>
            <p className="text-slate-600 font-normal text-sm leading-relaxed mb-8">
              From pressing to perfect presentation, MaxiPress ensures every garment meets the highest standards.
            </p>
            <button className="flex items-center gap-2 text-[#E31E24] text-xs font-bold tracking-widest uppercase hover:text-red-700 transition-colors">
              LEARN MORE <ArrowRight className="w-4 h-4" />
            </button>
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
      <section className="w-full py-24 bg-white" id="products">
        <div className="max-w-7xl mx-auto px-8 lg:px-16">
          <h4 className="text-[#E31E24] text-[10px] font-bold tracking-[0.2em] uppercase mb-2">EXPLORE PRODUCTS</h4>
          <h2 className="text-3xl font-bold text-slate-900 mb-12 tracking-tight">
            Our Finishing Solutions<span className="text-[#E31E24]">.</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {Object.entries(PRODUCT_DATA).map(([id, product], idx) => (
              <motion.div 
                key={id}
                initial={{ opacity: 0, y: 30 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.6, delay: Math.min(idx * 0.1, 0.5) }}
                viewport={{ once: true }}
              >
                <Link to={`/brands/maxipress/${id}`} className="block h-full group border border-slate-100 rounded-xl overflow-hidden bg-[#FAFAFA] flex flex-col cursor-pointer hover:shadow-xl transition-all duration-300">
                  <div className="h-56 p-6 flex items-center justify-center bg-white overflow-hidden relative">
                    <div className="absolute inset-0 bg-gradient-to-tr from-[#E31E24]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                    <img src={product.img} alt={product.title} className="w-full h-full object-contain mix-blend-multiply transform group-hover:scale-105 transition-transform duration-500 relative z-10" />
                  </div>
                  <div className="p-6 flex flex-col justify-between flex-grow bg-[#F8F9FA] border-t border-slate-100">
                    <div>
                      <h3 className="text-sm font-bold text-slate-900 mb-2 leading-snug line-clamp-2">{product.title}</h3>
                      <p className="text-xs text-slate-500 line-clamp-2 mb-4">{product.description}</p>
                    </div>
                    <div className="flex items-center text-[#E31E24] text-[10px] font-bold tracking-wider uppercase mt-auto">
                      View Product <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. CTA Banner ── */}
      <section className="w-full bg-[#CC141A] py-16">
        <div className="max-w-7xl mx-auto px-8 lg:px-16 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-start gap-6 text-white">
            <HeadphonesIcon className="w-10 h-10 stroke-1" />
            <div>
              <h3 className="text-xl font-bold mb-2 tracking-wide">Need Help Choosing The Right Solution?</h3>
              <p className="text-white/80 text-sm max-w-md leading-relaxed">
                Our experts are here to help you find the perfect finishing equipment for your laundry.
              </p>
            </div>
          </div>
          <button className="bg-white hover:bg-slate-50 text-[#CC141A] px-8 py-4 text-xs font-bold tracking-widest uppercase transition-colors duration-300 shadow-lg flex items-center gap-3 shrink-0 rounded-sm">
            TALK TO OUR EXPERTS <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
