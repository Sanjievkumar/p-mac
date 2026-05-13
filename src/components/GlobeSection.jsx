import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

/* ─────────────────────────────────────────────
   Globe pins — real HQ coordinates
───────────────────────────────────────────── */
const PINS = [
  { lat: 30.5728, lng: 104.0668, label: 'SEA-LION',      country: 'China',   color: '#E31E24' },
  { lat: 45.4654, lng:   9.1859, label: 'MAESTRELLI',    country: 'Italy',   color: '#E31E24' },
  { lat: 52.1205, lng:   8.7946, label: 'KANNEGIESSER',  country: 'Germany', color: '#E31E24' },
  { lat: 40.4168, lng:  -3.7038, label: 'MAXIPRESS',     country: 'Spain',   color: '#E31E24' },
];

/* ─────────────────────────────────────────────
   Lazy-loaded 3-D Globe wrapper
   react-globe.gl uses Three.js (heavy) so we
   import it only client-side after mount.
───────────────────────────────────────────── */
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

  /* Dynamically import react-globe.gl (Three.js heavy) */
  useEffect(() => {
    let globe;

    import('react-globe.gl').then(({ default: Globe }) => {
      if (!containerRef.current) return;

      globe = Globe({
        animateIn: true,
        waitForGlobeReady: true,
      })(containerRef.current);

      /* Earth textures from public CDN - Using HTTPS to prevent black box on localhost */
      globe
        .globeImageUrl('https://unpkg.com/three-globe/example/img/earth-day.jpg')
        .bumpImageUrl('https://unpkg.com/three-globe/example/img/earth-topology.png')
        .backgroundImageUrl('https://unpkg.com/three-globe/example/img/night-sky.png')
        .showAtmosphere(true)
        .atmosphereColor('#7ec8e3')
        .atmosphereAltitude(0.18)
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
      globe.controls().autoRotateSpeed = 0.6;

      /* Initial point of view — centred on Europe/Asia */
      globe.pointOfView({ lat: 30, lng: 60, altitude: 2.2 }, 0);

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
    <section className="relative w-full bg-[#060d1a] py-24 overflow-hidden">
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

      {/* Globe + Legend row */}
      <div className="max-w-[1200px] mx-auto px-6 flex flex-col lg:flex-row items-center justify-center gap-12">

        {/* Globe canvas container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          ref={containerRef}
          className="w-full h-[500px] rounded-2xl overflow-hidden shadow-[0_0_80px_rgba(14,30,60,0.8)]"
          style={{ background: '#060d1a' }}
        />

        {/* Legend */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="flex flex-col gap-6 min-w-[220px]"
        >
          <p className="text-[10px] font-bold tracking-[0.4em] text-slate-500 uppercase mb-2">
            Pin Legend
          </p>

          {PINS.map((pin) => (
            <div key={pin.label} className="flex items-center gap-3">
              {/* Pulsing dot */}
              <span className="relative flex h-3 w-3 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E31E24] opacity-60" />
                <span className="relative inline-flex rounded-full h-3 w-3 bg-[#E31E24]" />
              </span>
              <div>
                <p className="text-white text-sm font-bold">{pin.label}</p>
                <p className="text-slate-500 text-[11px]">{pin.country}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
