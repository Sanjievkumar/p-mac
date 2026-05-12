import { motion } from 'framer-motion';
import ecosystem3d from '../assets/ecosystem-3d.png';

export default function EcosystemSection() {
  // Precision-crafted icons matching the design references
  const cards = [
    { 
      id: "01", 
      title: "Consultancy\n& Planning", 
      text: "Strategic planning, workflow engineering and custom layouts designed to build the right foundation for your success.", 
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
          <rect x="8" y="2" width="8" height="4" rx="1" ry="1" />
          <path d="M9 14h1.5" />
          <path d="M9 10h1.5" />
          <path d="M13.5 10H15" />
          <path d="M13.5 14H15" />
          <path d="M17 18.5l-4 4-2-1 1-2 4-4a1.5 1.5 0 0 1 2.1 0v0a1.5 1.5 0 0 1 0 2.1z" />
        </svg>
      )
    },
    { 
      id: "02", 
      title: "Machine Supply\n& Installation", 
      text: "High-performance laundry equipment, professionally installed and integrated for seamless, reliable operations.", 
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
          <rect x="5" y="3" width="14" height="18" rx="2" ry="2" />
          <path d="M5 8h14" />
          <circle cx="12" cy="14" r="5" />
          <circle cx="12" cy="14" r="2.5" />
          <circle cx="8" cy="5.5" r="1" fill="currentColor" />
          <circle cx="10" cy="5.5" r="1" fill="currentColor" />
        </svg>
      )
    },
    { 
      id: "03", 
      title: "Automation\n& Operations", 
      text: "Smart automation and digital systems that streamline workflows, maximize efficiency and elevate operational performance.", 
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1Z" />
        </svg>
      )
    },
    { 
      id: "04", 
      title: "Spare Parts\n& AMC Support", 
      text: "Genuine spare parts, preventive maintenance and 24/7 support for uninterrupted performance and complete peace of mind.", 
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="M9 12l2 2 4-4" />
        </svg>
      )
    }
  ];

  // Staggered reveal animation matching the FounderSection
  const textVariants = {
    hidden: { opacity: 0, x: 40 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.15,
        duration: 0.8,
        ease: "easeOut"
      }
    })
  };

  return (
    <section id="ecosystem" className="relative w-full bg-[#fafbfc] py-24 overflow-hidden font-sans">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
        
        {/* ── TOP HALF: Floating 3D Graphic (Left) & Typography (Right) ── */}
        <div className="flex flex-col lg:flex-row items-center justify-between mb-20">
          
          {/* Left Side: Seamless Floating 3D Graphic */}
          <div className="w-full lg:w-[60%] flex justify-start mb-16 lg:mb-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative w-full max-w-[900px] h-auto flex items-center justify-center"
            >
              {/* 
                Continuous Levitation + Hover Interaction
                The image floats up and down endlessly on a 6-second cycle.
                When hovered, it scales up and rotates slightly to feel physical.
              */}
              <motion.img 
                src={ecosystem3d} 
                alt="3D Industrial Laundry Ecosystem" 
                className="w-full h-auto object-contain drop-shadow-[0_40px_80px_rgba(0,0,0,0.08)] mix-blend-multiply cursor-pointer"
                animate={{ y: [-15, 10, -15] }}
                transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                whileHover={{ scale: 1.05, rotate: -1.5, filter: "brightness(1.05)" }}
              />
            </motion.div>
          </div>



          {/* Right Side: Exact Typography Replica */}
          <div className="w-full lg:w-[40%] pl-0 lg:pl-10">
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={{ hidden: {}, visible: {} }}
              viewport={{ once: false, amount: 0.2 }}
            >
              <motion.div custom={0} variants={textVariants} className="flex items-center gap-4 mb-6">
                <p className="text-[#E31E24] font-bold tracking-[0.4em] text-[10px] uppercase">
                  THE PROMAC ECOSYSTEM
                </p>
                <div className="w-10 h-[1px] bg-[#E31E24]" />
              </motion.div>

              <h2 className="text-5xl md:text-6xl lg:text-[64px] text-[#001F3F] leading-[1.05] tracking-tight mb-8">
                <motion.div custom={1} variants={textVariants} className="font-display font-bold text-[#001F3F]">One Partner.</motion.div>
                <motion.div custom={2} variants={textVariants} className="font-display font-bold text-[#E31E24]">Every Aspect.</motion.div>
                <motion.div custom={3} variants={textVariants} className="font-display font-normal italic text-[#001F3F] mt-2">Complete Confidence.</motion.div>
              </h2>

              <motion.p custom={4} variants={textVariants} className="text-gray-500 font-display text-sm md:text-[15px] leading-relaxed max-w-sm mb-10">
                An integrated ecosystem of expertise, technology and support that powers your laundry operations — today and tomorrow.
              </motion.p>

              {/* Replica Button */}
              <motion.div custom={5} variants={textVariants}>
                <button className="border border-[#E31E24] text-[#E31E24] text-[10px] font-bold tracking-[0.15em] px-8 py-3.5 flex items-center gap-4 hover:bg-[#E31E24] hover:text-white transition-all duration-300 rounded-[3px] group">
                  EXPLORE THE ECOSYSTEM
                  <span className="w-5 h-5 rounded-full border border-current flex items-center justify-center transition-transform duration-300 group-hover:translate-x-1">
                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </button>
              </motion.div>
            </motion.div>
          </div>
          
        </div>

        {/* ── BOTTOM HALF: Value Proposition Cards Grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, idx) => (
             <motion.div 
               key={card.id}
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.6, delay: idx * 0.1, ease: "easeOut" }}
               // Group class added to trigger hover interactions for children elements
               className="group bg-white rounded-xl shadow-[0_8px_30px_rgba(0,0,0,0.03)] p-8 border border-gray-100/50 flex flex-col hover:shadow-[0_20px_50px_rgba(227,30,36,0.08)] transition-all duration-500 hover:-translate-y-2 cursor-pointer"
             >
                <div className="flex justify-between items-start mb-10">
                   <span className="text-[#E31E24] font-bold text-xl">{card.id}</span>
                   {/* Custom precision-built SVG icons */}
                   <div className="text-[#E31E24] w-8 h-8 opacity-90 transition-transform duration-500 group-hover:scale-110">{card.icon}</div>
                </div>
                
                <h3 className="text-[22px] text-[#001F3F] font-display font-bold leading-[1.2] mb-3 whitespace-pre-line tracking-tight transition-colors duration-300">
                  {card.title}
                </h3>
                
                {/* Expanding Red Line Micro-Interaction */}
                <div className="w-8 h-[2px] bg-[#E31E24] mb-5 transition-all duration-500 ease-out group-hover:w-full" />
                
                <p className="text-gray-500 text-[12px] leading-relaxed font-sans transition-colors duration-300 group-hover:text-gray-800">
                  {card.text}
                </p>
             </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
