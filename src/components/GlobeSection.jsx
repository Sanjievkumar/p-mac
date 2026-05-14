import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

/* ─────────────────────────────────────────────
   Map Pins Data
───────────────────────────────────────────── */
const PINS = [
  { lat: 30.5728, lng: 104.0668, label: 'SEA-LION',      country: 'China',   color: '#E31E24' },
  { lat: 45.4654, lng:   9.1859, label: 'MAESTRELLI',    country: 'Italy',   color: '#E31E24' },
  { lat: 52.1205, lng:   8.7946, label: 'KANNEGIESSER',  country: 'Germany', color: '#E31E24' },
  { lat: 40.4168, lng:  -3.7038, label: 'MAXIPRESS',     country: 'Spain',   color: '#E31E24' },
];

export default function GlobeSection() {
  const containerRef = useRef(null);
  const globeRef     = useRef(null);
  const [ready, setReady] = useState(false);
  const [size,  setSize]  = useState({ w: 800, h: 500 });

  /* Responsive size based on container */
  useEffect(() => {
    const measure = () => {
      if (!containerRef.current) return;
      const w = containerRef.current.offsetWidth || 800;
      setSize({ w, h: 500 });
    };
    measure();
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, []);

  /* Dynamically import react-globe.gl */
  useEffect(() => {
    let globe;

    import('react-globe.gl').then(({ default: Globe }) => {
      if (!containerRef.current) return;

      globe = Globe({
        animateIn: true,
        waitForGlobeReady: true,
      })(containerRef.current);

      /* Deep Space / Glowing Blue Continents effect */
      globe
        .globeImageUrl('https://unpkg.com/three-globe/example/img/earth-dark.jpg')
        .bumpImageUrl('https://unpkg.com/three-globe/example/img/earth-topology.png')
        .showAtmosphere(true)
        .atmosphereColor('#3a86ff')
        .atmosphereAltitude(0.2)
        .backgroundColor('rgba(0,0,0,0)') /* Let the parent bg show */
        .width(size.w)
        .height(size.h)
        /* Partner HQ pins */
        .pointsData(PINS)
        .pointLat('lat')
        .pointLng('lng')
        .pointColor('color')
        .pointAltitude(0.04)
        .pointRadius(0.6)
        .pointsMerge(false)
        /* Labels on pins */
        .labelsData(PINS)
        .labelLat('lat')
        .labelLng('lng')
        .labelText('label')
        .labelSize(1.2)
        .labelColor(() => '#ffffff')
        .labelDotRadius(0.4)
        .labelAltitude(0.05)
        /* Auto-rotate */
        .enablePointerInteraction(true);

      /* Start rotation */
      globe.controls().autoRotate      = true;
      globe.controls().autoRotateSpeed = 0.8;

      /* Initial point of view — centred on Europe/Asia */
      globe.pointOfView({ lat: 35, lng: 55, altitude: 2.2 }, 0);

      globeRef.current = globe;
      setReady(true);
    });

    return () => {
      if (globeRef.current) {
        try { globeRef.current._destructor?.(); } catch (_) {}
      }
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /* Resize globe when container changes */
  useEffect(() => {
    if (globeRef.current && ready) {
      globeRef.current.width(size.w).height(size.h);
    }
  }, [size, ready]);

  return (
    <section className="relative w-full bg-[#000814] py-24 overflow-hidden">
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
      <div className="max-w-[1200px] mx-auto px-6 flex flex-col items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          ref={containerRef}
          className="w-full h-[500px] md:h-[600px] rounded-3xl overflow-hidden shadow-[0_0_120px_rgba(0,30,80,0.5)] border border-white/5 bg-transparent flex justify-center"
        />

        {/* Legend */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="mt-8 flex flex-wrap justify-center gap-6 md:gap-12"
        >
          {PINS.map((pin) => (
            <div key={`legend-${pin.label}`} className="flex items-center gap-2">
              <span className="relative flex h-3 w-3 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E31E24] opacity-60" />
                <span className="relative inline-flex rounded-full h-3 w-3 bg-[#E31E24]" />
              </span>
              <p className="text-white text-xs font-bold tracking-widest uppercase">{pin.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
