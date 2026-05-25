import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import Globe from 'react-globe.gl';

/* ─────────────────────────────────────────────
   Map Pins Data
───────────────────────────────────────────── */
const PINS = [
  { lat: 30.5728, lng: 104.0668, label: 'SEA-LION',      country: 'China' },
  { lat: 45.4654, lng:   9.1859, label: 'MAESTRELLI',    country: 'Italy' },
  { lat: 52.1205, lng:   8.7946, label: 'KANNEGIESSER',  country: 'Germany' },
  { lat: 40.4168, lng:  -3.7038, label: 'MAXIPRESS',     country: 'Spain' },
];

export default function GlobeSection() {
  const containerRef = useRef(null);
  const globeRef = useRef(null);
  const [size, setSize] = useState({ w: 0, h: 0 });
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  /* Responsive size based on container */
  useEffect(() => {
    const measure = () => {
      if (!containerRef.current) return;
      setSize({
        w: containerRef.current.offsetWidth,
        h: containerRef.current.offsetHeight
      });
    };
    measure();
    window.addEventListener('resize', measure);
    // Add a slight delay measure to catch late layout shifts
    const to = setTimeout(measure, 300);
    return () => {
      window.removeEventListener('resize', measure);
      clearTimeout(to);
    };
  }, [isClient]);

  /* Globe Init */
  useEffect(() => {
    if (globeRef.current) {
      globeRef.current.controls().autoRotate = true;
      globeRef.current.controls().autoRotateSpeed = 0.5;
      globeRef.current.pointOfView({ lat: 35, lng: 55, altitude: 2.2 }, 0);
    }
  }, [isClient, size.w]);

  return (
    <section className="relative w-full bg-[#000814] pt-24 overflow-hidden flex flex-col">
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

      {/* Globe Container */}
      <div className="max-w-[1200px] mx-auto w-full px-6 flex flex-col items-center justify-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          ref={containerRef}
          className="w-full h-[600px] rounded-3xl overflow-hidden shadow-[0_0_120px_rgba(0,30,80,0.5)] border border-white/10 bg-[#000814] flex justify-center relative z-10"
        >
          {isClient && size.w > 0 && (
            <Globe
              ref={globeRef}
              width={size.w}
              height={size.h}
              globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
              backgroundColor="rgba(0,0,0,0)"
              
              /* Red Pulsing Rings for Pins */
              ringsData={PINS}
              ringLat="lat"
              ringLng="lng"
              ringColor={() => '#E31E24'}
              ringMaxRadius={5}
              ringPropagationSpeed={3}
              ringRepeatPeriod={800}
              
              /* Solid Red Inner Dot */
              pointsData={PINS}
              pointLat="lat"
              pointLng="lng"
              pointColor={() => '#E31E24'}
              pointAltitude={0.01}
              pointRadius={0.5}
              atmosphereColor="#0077ff"
              atmosphereAltitude={0.3}
              
              /* HTML Labels on top */
              htmlElementsData={PINS}
              htmlLat="lat"
              htmlLng="lng"
              htmlElement={d => {
                const el = document.createElement('div');
                el.innerHTML = `
                  <div class="relative flex flex-col items-center group cursor-pointer" style="transform: translate(-50%, -50%); pointer-events: auto;">
                    <!-- Tooltip -->
                    <div class="absolute bottom-full mb-3 bg-white px-3 py-1.5 rounded text-xs font-bold text-[#001F3F] shadow-xl whitespace-nowrap transition-opacity duration-300 z-50 flex items-center gap-2 border border-slate-100 pointer-events-none">
                      <span class="text-[#E31E24] text-lg leading-none">•</span>
                      ${d.label} - ${d.country}
                    </div>
                    <!-- Hit Area -->
                    <div class="w-8 h-8 rounded-full transparent absolute z-20"></div>
                  </div>
                `;
                return el;
              }}
            />
          )}
        </motion.div>
      </div>
      
      {/* Footer Seamless Gradient Transition */}
      <div className="w-full h-32 bg-gradient-to-b from-[#000814] to-black mt-16 pointer-events-none" />
    </section>
  );
}
