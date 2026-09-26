import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Play, ArrowRight, ArrowLeft, Volume2, VolumeX, Droplets, Layers, Cpu } from 'lucide-react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

// Asset Imports
import kannegiesserLogo from '../../assets/brands/kannegiesser.png';
import kannegiesserVideo from '../../assets/brands/kannegiesser-hero.mp4';
import buildingBg from '../../assets/brands/kannegiesser/kannegiesser_actual_factory.jpg';

const PRODUCTS = [
  // Washing Technology
  { id: 'kannegiesser-powertrans-vario', category: 'Washing Technology', name: 'Tunnel Washers', desc: 'PowerTrans Vario', img: 'https://www.kannegiesser.com/fileadmin/SHARED/Images/Products/Thumbs_PT_VARIO.png' },
  { id: 'kannegiesser-powerpress', category: 'Washing Technology', name: 'Extraction Technology', desc: 'PowerPress', img: 'https://www.kannegiesser.com/fileadmin/SHARED/Images/Products/Thumbs_PowerPress.png' },
  { id: 'kannegiesser-powerdry', category: 'Washing Technology', name: 'Dryers', desc: 'PowerDry', img: 'https://www.kannegiesser.com/fileadmin/SHARED/Images/Products/Thumbs_PowerDry.png' },
  { id: 'kannegiesser-powerswing', category: 'Washing Technology', name: 'Washer Extractors', desc: 'PowerSwing', img: 'https://www.kannegiesser.com/fileadmin/SHARED/Images/Products/Thumbs_PowerSwing.png' },
  { id: 'kannegiesser-cleanroom', category: 'Washing Technology', name: 'Clean Room Technology', desc: 'HighClean', img: 'https://www.kannegiesser.com/fileadmin/SHARED/Images/Products/Keyvisual_Cleanroom.png' },
  { id: 'kannegiesser-disinfection', category: 'Washing Technology', name: 'Disinfection Sluices', desc: 'CWD / CD', img: 'https://www.kannegiesser.com/fileadmin/SHARED/Images/Products/Thumbs_CD_Desi.png' },

  // Flatwork
  { id: 'kannegiesser-separating', category: 'Flatwork', name: 'Separating and Feeding Systems', desc: 'CSP', img: 'https://www.kannegiesser.com/fileadmin/SHARED/Images/Products/Keyvisual_CSP_NEU.jpg' },
  { id: 'kannegiesser-feeding', category: 'Flatwork', name: 'Feeding machines', desc: 'EMQ / EMT', img: 'https://www.kannegiesser.com/fileadmin/SHARED/Images/Products/Thumbs_EMQ_EMT.png' },
  { id: 'kannegiesser-ironers', category: 'Flatwork', name: 'Ironers', desc: 'HPM', img: 'https://www.kannegiesser.com/fileadmin/SHARED/Images/Products/Thumbs_HPM.png' },
  { id: 'kannegiesser-folding', category: 'Flatwork', name: 'Folding machines', desc: 'RFM', img: 'https://www.kannegiesser.com/fileadmin/SHARED/Images/Products/Thumbs_RFM.png' },
  { id: 'kannegiesser-drywork', category: 'Flatwork', name: 'Dry work folding machines', desc: 'XFM', img: 'https://www.kannegiesser.com/fileadmin/SHARED/Images/Products/Thumbs_XFM.png' },

  // Data Information Systems
  { id: 'kannegiesser-process-control', category: 'Data Information Systems', name: 'Process Control', desc: 'Smart Process Control', img: 'https://www.kannegiesser.com/fileadmin/SHARED/Images/Products/Category_Process-Control.png' },
  { id: 'kannegiesser-monitoring', category: 'Data Information Systems', name: 'Monitoring', desc: 'Data Analytics', img: 'https://www.kannegiesser.com/fileadmin/SHARED/Images/Products/Thumbs_DataInfoSystems.png' },
];

const CATEGORIES = [
  { id: 'Washing Technology', name: 'Washing Technology', icon: Droplets, color: 'bg-gradient-to-br from-[#00509B] to-[#003A70]' },
  { id: 'Flatwork', name: 'Flatwork', icon: Layers, color: 'bg-gradient-to-br from-[#003A70] to-[#002B50]' },
  { id: 'Data Information Systems', name: 'Data Information Systems', icon: Cpu, color: 'bg-gradient-to-br from-[#002B50] to-[#001F3F]' }
];

const TIMELINE = [
  { year: 1948, title: 'Founded', text: 'The company was founded in 1948 by Herbert Kannegiesser Dipl. Eng. in a wooden shed near Vlotho, starting with ironing machines for the garment industry.', img: '/images/kannegiesser/timeline/01_csm_image021_ca8d23610b.jpg' },
  { year: 1961, title: 'Diversification', text: 'Following a crisis in the shirt market, Kannegiesser evolved into the finishing specialist for modern laundries and expanded its production range.', img: '/images/kannegiesser/timeline/02_csm_AlteMaschine_74f47f4e9d.jpg' },
  { year: 1970, title: 'Generational Change', text: 'Martin Kannegiesser took over management, continuing internationalisation and devotion to complete system solutions.', img: '/images/kannegiesser/timeline/03_csm_WeltlandkarteOhne_b8e1288a6c.jpg' },
  { year: 1983, title: 'Ironer Lines from One Source', text: 'Kannegiesser presented the "Ironer line from one source", ending the concept of piecemeal equipment procurement.', img: '/images/kannegiesser/timeline/04_csm_KAN_554012_Mangel_angesetzt_CMYK_2bcfc43855.jpg' },
  { year: 1996, title: 'Logistics Expansion', text: 'Kleindienst WA schereitechnik GmbH was acquired, specialising in the transport and conveying sector.', img: '/images/kannegiesser/timeline/05_logistics_expansion.jpg' },
  { year: 1998, title: 'Wetwork Area', text: 'The purchase of Passat and Pharmagg represented the decisive step into the wetwork area, making Kannegiesser a full-range manufacturer.', img: '/images/kannegiesser/timeline/06_wetwork_area.jpg' },
  { year: 2005, title: 'UK Expansion', text: 'Kannegiesser took over 100% of the British company Ducker Engineering Limited.', img: '/images/kannegiesser/timeline/07_uk_expansion.jpg' },
  { year: 2014, title: 'Family Foundation', text: 'Martin Kannegiesser transfers his shares to the newly founded Kannegiesser Family Foundation to ensure company continuity.', img: '/images/kannegiesser/timeline/08_family_foundation.png' },
  { year: 2017, title: 'North American Expansion', text: 'Kannegiesser acquired E-Tech, Inc., forming Kannegiesser ETECH to focus on the North American market.', img: '/images/kannegiesser/timeline/09_na_expansion.png' },
  { year: 2020, title: 'New Leadership', text: 'Tina Kannegiesser becomes Chairwoman of the Management Board.', img: '/images/kannegiesser/timeline/10_new_leadership.jpg' },
  { year: 2022, title: 'Robotics', text: 'Robotics enters the laundry with the Robofeed feeding robot and Speedline folding machine.', img: '/images/kannegiesser/timeline/11_robotics.jpg' },
  { year: 2024, title: 'Management Updates', text: 'Tina Kannegiesser leads the company alongside co-executives Engelbert Heinz, Michael Harre, and Thorsten Malzer.', img: '/images/kannegiesser/timeline/12_management_updates.jpg' },
  { year: 2025, title: 'CTO Transition', text: 'Dr. Matthias Schopp takes over the position of Chief Technology Officer (CTO).', img: '/images/kannegiesser/timeline/13_cto_transition.jpg' }
];

export default function Kannegiesser() {
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef(null);
  const timelineScrollRef = useRef(null);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  const scrollTimeline = (direction) => {
    if (timelineScrollRef.current) {
      const scrollAmount = direction === 'left' ? -400 : 400;
      timelineScrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const wrapKannegiesser = (text) => {
    const parts = text.split(/(Kannegiesser's|Kannegiesser)/i);
    return parts.map((part, i) => 
      part.toLowerCase().includes('kannegiesser') ? 
        <span key={i} className="text-[#00509B] font-bold">{part}</span> : part
    );
  };

  return (
    <div className="w-full min-h-screen bg-white font-sans text-slate-800">
      <Navbar /><div className="absolute top-[100px] left-8 lg:left-16 z-50"><Link to="/brands" className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors font-medium text-sm bg-black/20 backdrop-blur-md px-4 py-2 rounded-full border border-white/10"><ArrowLeft className="w-4 h-4" /> Back to Brands</Link></div>

      {/* ── 1. Hero Section ── */}
      <section className="relative w-full h-[85vh] min-h-[600px] flex flex-col justify-center overflow-hidden bg-[#0A0A0A] pt-20 group">
        <video 
          ref={videoRef}
          autoPlay 
          loop 
          muted 
          playsInline 
          className="absolute inset-0 w-full h-full object-cover opacity-90"
        >
          <source src={kannegiesserVideo} type="video/mp4" />
        </video>

        {/* Mute Toggle Button */}
        <button
          onClick={toggleMute}
          className="absolute bottom-8 right-8 z-20 p-4 rounded-full bg-black/40 hover:bg-black/60 backdrop-blur-sm border border-white/20 text-white shadow-lg transition-all duration-300 opacity-0 group-hover:opacity-100"
          aria-label={isMuted ? "Unmute video" : "Mute video"}
        >
          {isMuted ? <VolumeX className="w-6 h-6" /> : <Volume2 className="w-6 h-6" />}
        </button>
      </section>

      {/* ── 2. About Kannegiesser ── */}
      <section className="w-full py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-8 lg:px-16 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center mb-24">
          
          <div>
            <div className="flex items-center gap-4 mb-6">
              <h4 className="text-[#00509B] text-base md:text-lg font-bold tracking-[0.2em] uppercase">ABOUT KANNEGIESSER</h4>
            </div>
            <div className="w-12 h-[2px] bg-[#00509B] mb-8" />
            
            <h2 className="text-4xl md:text-5xl font-bold text-[#001F3F] mb-8 leading-tight tracking-tight">
              Our Goals<span className="text-[#00509B]">.</span>
            </h2>
            
            <div className="text-slate-500 font-light text-lg leading-relaxed space-y-6 mb-12">
              <p>
                {wrapKannegiesser("For over 70 years, Kannegiesser has been the partner of textile service providers regarding industrial laundry technology. Successful companies in the laundry industry are obliged to offer their customers complete solutions with an overall scope of system integration, instead of leaving the customer to deal with the solution of complex detailed problems.")}
              </p>
              <p>
                {wrapKannegiesser("In this regard Kannegiesser is increasingly seen as the Technical Partner, who responsibly designs complete laundry solutions and further develops a unique structure, which eventually elevates machinery systems to their highest efficiency and availability.")}
              </p>
              <ul className="list-disc pl-5 space-y-2 mt-4 font-normal text-slate-700">
                <li>Responsibly develop and deliver the complete industrial laundry technology – from washing to drying to finishing and sorting.</li>
                <li>Cross-link the complete laundry technology via one uniform control architecture with open logistic concepts, company data management and a complete support and customer service organization.</li>
              </ul>
            </div>
          </div>

          <div className="relative">
            <img 
              src={buildingBg} 
              alt="Kannegiesser Headquarters" 
              className="w-full h-auto object-cover shadow-2xl rounded-2xl"
            />
            <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-[#00509B] -z-10" style={{ clipPath: 'polygon(100% 0, 0% 100%, 100% 100%)' }} />
          </div>
        </div>
      </section>

      {/* ── 2b. History Timeline ── */}
      <section className="w-full py-24 bg-slate-50 relative border-t border-slate-200 overflow-hidden">
        <div className="max-w-7xl mx-auto px-8 lg:px-16 mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6"><div>
          <h4 className="text-[#00509B] text-sm font-bold tracking-[0.2em] uppercase mb-4">OUR HISTORY</h4>
          <h2 className="text-3xl md:text-4xl font-bold text-[#001F3F]">
            From the woodshed to the world</h2></div><div className="flex items-center gap-4"><button onClick={() => scrollTimeline('left')} className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center text-[#00509B] hover:bg-[#00509B] hover:text-white transition-colors"><ArrowLeft className="w-5 h-5" /></button><button onClick={() => scrollTimeline('right')} className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center text-[#00509B] hover:bg-[#00509B] hover:text-white transition-colors"><ArrowRight className="w-5 h-5" /></button></div>
        </div>
        
        <div ref={timelineScrollRef} className="flex overflow-x-auto snap-x snap-mandatory gap-8 pb-12 px-8 lg:px-16 hide-scrollbar max-w-[100vw]">
          <div className="flex gap-8 w-max">
            {TIMELINE.map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="snap-center shrink-0 w-[300px] md:w-[400px] flex flex-col relative"
              >
                <div className="w-full h-2 bg-[#00509B]/20 mb-8 relative rounded-full">
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 w-4 h-4 md:w-6 md:h-6 rounded-full bg-[#00509B] border-4 border-white shadow-md flex items-center justify-center" />
                </div>
                
                {item.img && (
                  <div className="w-full h-48 md:h-56 mb-6 rounded-2xl overflow-hidden shadow-md">
                    <img src={item.img} alt={`Kannegiesser in ${item.year}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                  </div>
                )}
                
                <div className={`bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-slate-200 flex-1 ${!item.img ? 'mt-[13rem] md:mt-[15.5rem]' : ''}`}>
                  <span className="text-[#00509B] font-black text-2xl md:text-3xl tracking-tight block mb-2">{item.year}</span>
                  <h3 className="text-lg md:text-xl font-bold text-slate-800 mb-3">{item.title}</h3>
                  <p className="text-slate-600 leading-relaxed text-sm md:text-base">{wrapKannegiesser(item.text)}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ✨ 3. Product Catalog (Category First) ✨ */}
      <section id="products" className="w-full py-24 bg-white relative border-t border-slate-200/50 overflow-hidden">
        {/* Animated Grid Background */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.10] animate-grid"
          style={{
            backgroundImage: 'linear-gradient(#0B4F8A 1px, transparent 1px), linear-gradient(90deg, #0B4F8A 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
          aria-hidden="true"
        />

        <div className="max-w-7xl mx-auto px-8 lg:px-16 relative z-10">
          <div className="text-center mb-16">
            <h4 className="text-[#00509B] text-base md:text-lg font-bold tracking-[0.2em] uppercase mb-4">PRODUCT CATALOG</h4>
            <h2 className="text-4xl md:text-5xl font-bold text-[#001F3F] tracking-tight">
              Explore Kannegiesser<span className="text-[#00509B]">.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {CATEGORIES.map(cat => {
              const catProducts = PRODUCTS.filter(p => p.category === cat.name);
              return (
                <div key={cat.id} className="flex flex-col">
                  {/* Category Header */}
                  <div className={`w-full p-8 rounded-t-xl ${cat.color} text-white flex flex-col items-center text-center shadow-md relative overflow-hidden group/header`}>
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover/header:opacity-100 transition-opacity duration-500" />
                    <cat.icon className="w-12 h-12 mb-5 opacity-90 stroke-[1.2] transition-transform duration-500 group-hover/header:scale-110" />
                    <h3 className="text-xl font-bold tracking-wide uppercase text-white/95">{cat.name}</h3>
                    <div className="w-12 h-1 bg-white/20 mt-4 rounded-full" />
                  </div>

                  {/* Category Products */}
                  <div className="flex-1 bg-slate-50 border border-t-0 border-slate-200 rounded-b-xl p-6 flex flex-col gap-4">
                    {catProducts.map(product => (
                      <Link 
                        key={product.id}
                        to={`/brands/kannegiesser/${product.id}`}
                        className="group bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex items-center p-4 hover:-translate-y-1"
                      >
                        <div className="w-20 h-20 bg-slate-50 rounded-xl flex-shrink-0 flex items-center justify-center overflow-hidden border border-slate-100 mr-4">
                          <img 
                            src={product.img} 
                            alt={product.name}
                            className="max-h-full max-w-full object-contain group-hover:scale-110 transition-transform duration-500"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="text-[#00509B] text-[9px] font-bold tracking-widest uppercase mb-1 truncate">
                            {product.desc}
                          </h4>
                          <h3 className="text-sm font-bold text-[#001F3F] leading-snug truncate">
                            {product.name}
                          </h3>
                        </div>
                        <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-[#00509B] transition-colors ml-2 flex-shrink-0" />
                      </Link>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

