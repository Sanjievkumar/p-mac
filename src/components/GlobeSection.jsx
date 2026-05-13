import { motion } from 'framer-motion';

/* ─────────────────────────────────────────────
   Map Pins Data
   Coordinates converted to percentages for a 
   standard equirectangular map projection.
───────────────────────────────────────────── */
const PINS = [
  { label: 'SEA-LION',     country: 'China',   top: '33.05%', left: '78.88%' },
  { label: 'MAESTRELLI',   country: 'Italy',   top: '24.77%', left: '52.52%' },
  { label: 'KANNEGIESSER', country: 'Germany', top: '21.05%', left: '52.41%' },
  { label: 'MAXIPRESS',    country: 'Spain',   top: '27.55%', left: '48.97%' },
];

export default function GlobeSection() {
  return (
    <section className="relative w-full bg-[#060d1a] py-24 overflow-hidden border-t border-white/5">
      {/* Section header */}
      <div className="max-w-[1200px] mx-auto px-6 mb-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-3 mb-5"
        >
          <div className="w-8 h-[1px] bg-[#E31E24]" />
          <p className="text-[#E31E24] text-[10px] font-bold tracking-[0.4em] uppercase">
            Global Technology Network
          </p>
          <div className="w-8 h-[1px] bg-[#E31E24]" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-5"
        >
          Partners Across the Globe.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.25 }}
          className="text-slate-400 text-[15px] max-w-xl mx-auto leading-relaxed"
        >
          Promac bridges Indian industry with the world's finest laundry technology manufacturers — from China to Germany, Italy to Spain.
        </motion.p>
      </div>

      {/* Map Container */}
      <div className="max-w-[1200px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="relative w-full aspect-[2/1] md:aspect-[2.2/1] rounded-3xl overflow-hidden shadow-[0_0_80px_rgba(14,30,60,0.8)] border border-white/10 bg-[#0a1526]"
        >
          {/* Static Earth Map Base */}
          <img
            src="https://unpkg.com/three-globe/example/img/earth-night.jpg"
            alt="Global Network Map"
            className="absolute inset-0 w-full h-full object-cover opacity-90 object-center"
          />
          
          {/* Faint blue atmosphere glow over the map */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#7ec8e3]/10 to-transparent pointer-events-none mix-blend-screen" />

          {/* Render Pins */}
          {PINS.map((pin, i) => (
            <motion.div
              key={pin.label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 + i * 0.1 }}
              className="absolute z-10 flex flex-col items-center -translate-x-1/2 -translate-y-1/2"
              style={{ top: pin.top, left: pin.left }}
            >
              <div className="relative group/pin cursor-pointer flex flex-col items-center">
                {/* Tooltip Label (Shows on hover on desktop, always visible on mobile if needed but better kept simple) */}
                <div className="absolute bottom-full mb-2 flex-col items-center hidden md:flex opacity-0 group-hover/pin:opacity-100 transition-opacity duration-300">
                  <div className="bg-white px-3 py-1.5 rounded text-xs font-bold text-[#001F3F] shadow-lg whitespace-nowrap">
                    {pin.label} <span className="text-slate-500 font-normal ml-1">({pin.country})</span>
                  </div>
                  <div className="w-0 h-0 border-l-[5px] border-r-[5px] border-t-[6px] border-l-transparent border-r-transparent border-t-white" />
                </div>
                
                {/* Pulsing Dot */}
                <span className="relative flex h-4 w-4">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E31E24] opacity-75" />
                  <span className="relative inline-flex rounded-full h-4 w-4 bg-[#E31E24] shadow-[0_0_12px_rgba(227,30,36,0.8)] border-2 border-[#0a1526]" />
                </span>

                {/* Always-on subtle label for mobile/tablet clarity */}
                <span className="mt-1 text-[9px] md:hidden font-bold text-white tracking-widest uppercase drop-shadow-md">
                  {pin.country}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Legend for desktop (optional but good for context) */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="mt-8 flex flex-wrap justify-center gap-6 md:gap-12"
        >
          {PINS.map((pin) => (
            <div key={`legend-${pin.label}`} className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#E31E24] shadow-[0_0_8px_rgba(227,30,36,0.8)]" />
              <p className="text-slate-300 text-xs font-bold tracking-widest uppercase">{pin.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
