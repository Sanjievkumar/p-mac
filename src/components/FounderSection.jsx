import { motion } from 'framer-motion';
import founderImage from '../assets/founder.png';

export default function FounderSection() {
  const textVariants = {
    hidden: { opacity: 0, x: -40 },
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
    <section id="about" className="relative w-full h-auto min-h-[800px] overflow-hidden bg-[#121110]">
      
      {/* ── BACKGROUND ARCHITECTURE (CODED TO MATCH DESIGN) ── */}
      <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
         {/* Base textured color */}
         <div className="absolute inset-0 bg-[#141414]" />
         
         {/* Gold accent lines on the left panel wall */}
         <div className="absolute top-0 bottom-0 left-[38%] w-[1px] bg-gradient-to-b from-transparent via-[#b39050] to-[#5c4a2e] opacity-40" />
         <div className="absolute top-0 bottom-0 left-[52%] w-[1px] bg-gradient-to-b from-[#5c4a2e] via-[#b39050] to-transparent opacity-40" />
         <div className="absolute top-[52%] left-0 w-[52%] h-[1px] bg-gradient-to-r from-transparent via-[#b39050] to-[#5c4a2e] opacity-40" />
         
         {/* Subtle ambient lighting from the lamp on the right */}
         <div className="absolute top-[40%] right-[10%] w-[600px] h-[600px] bg-[#d99f48] rounded-full blur-[200px] opacity-[0.15]" />
      </div>

      <div className="relative w-full h-full max-w-[1400px] mx-auto flex flex-col md:flex-row items-center z-10">
        
        {/* ── LEFT SIDE: CODED TYPOGRAPHY WITH REVEAL ── */}
        <div className="w-full md:w-[55%] pl-6 md:pl-10 lg:pl-20 pr-6 md:pr-10 pt-20 pb-20">
           <motion.div
             initial="hidden"
             whileInView="visible"
             viewport={{ once: false, margin: "-100px" }}
           >
             <motion.div custom={0} variants={textVariants} className="flex items-center gap-4 mb-8">
               <div className="w-12 h-[1px] bg-[#cc3333]" />
               <p className="text-[#cc3333] font-bold tracking-[0.2em] text-xs uppercase font-display">
                 A Few Words From Our Founder
               </p>
             </motion.div>
             
             <h2 className="text-4xl md:text-5xl lg:text-6xl text-white leading-[1.15] mb-8 tracking-tight font-sans">
               <motion.div custom={1} variants={textVariants} className="font-bold">Building Solutions.</motion.div>
               <motion.div custom={2} variants={textVariants} className="font-bold">Delivering Value.</motion.div>
               <motion.div custom={3} variants={textVariants} className="text-[#cc3333] font-serif italic mt-2">Always.</motion.div>
             </h2>
             
             <motion.p custom={4} variants={textVariants} className="text-gray-300 text-sm md:text-base leading-[1.8] mb-6 max-w-[450px] font-body">
               At Promac Technologies, our journey has always been about solving real challenges with practical, reliable and future-ready solutions. We believe in engineering excellence, long-term partnerships, and creating value that lasts.
             </motion.p>
             
             <motion.p custom={5} variants={textVariants} className="text-gray-300 text-sm md:text-base leading-[1.8] mb-10 max-w-[450px] font-body">
               Our commitment to innovation, quality, and customer success drives everything we do. Thank you for being a part of our journey.
             </motion.p>

             <motion.div custom={6} variants={textVariants} className="mt-8">
               <p className="text-4xl text-[#cc3333]/70 mb-4" style={{ fontFamily: "'Brush Script MT', 'Great Vibes', cursive" }}>
                 Senthil Kumar
               </p>
               <p className="text-gray-200 font-bold text-sm tracking-wide font-display">Senthil Kumar DR</p>
               <p className="text-gray-500 text-[10px] uppercase tracking-widest mt-1 font-display">
                 Founder & Managing Director<br/>
                 Promac Technologies Pvt Ltd
               </p>
             </motion.div>
           </motion.div>
        </div>

        {/* ── RIGHT SIDE: PHOTOREALISTIC FOUNDER CROP ── */}
        <div className="absolute right-0 bottom-0 w-full md:w-[50%] h-[50%] md:h-full z-[-1]">
           <img 
             src={founderImage} 
             alt="Founder" 
             className="w-full h-full object-cover object-right"
           />
           {/* A gradient mask on the left edge to blend seamlessly into the CSS wall */}
           <div className="hidden md:block absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-[#141414] to-transparent" />
           {/* Gradient mask on top edge for mobile */}
           <div className="block md:hidden absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#141414] to-transparent" />
        </div>

      </div>
    </section>
  );
}
