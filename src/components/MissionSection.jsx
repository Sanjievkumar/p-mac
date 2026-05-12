import { motion } from 'framer-motion';
import missionBg from '../assets/mission-bg.png';

export default function MissionSection() {
  return (
    <section className="relative w-full overflow-hidden" style={{ minHeight: '560px' }}>

      {/* ── Parallax Background Image ── */}
      <div
        className="absolute inset-0 bg-center bg-cover bg-no-repeat"
        style={{ backgroundImage: `url(${missionBg})` }}
        aria-hidden="true"
      />

      {/* ── Dark overlay (slate-950 / 65%) ── */}
      <div
        className="absolute inset-0 bg-slate-950/65"
        aria-hidden="true"
      />

      {/* ── Subtle top & bottom gradient fade ── */}
      <div
        className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-slate-950/60 to-transparent"
        aria-hidden="true"
      />
      <div
        className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-slate-950/60 to-transparent"
        aria-hidden="true"
      />

      {/* ── Content ── */}
      <div className="relative z-10 flex items-center justify-center min-h-[560px] px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: 48 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.45 }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          className="
            max-w-4xl w-full
            bg-white/5 backdrop-blur-lg
            border border-white/10
            rounded-3xl
            px-10 py-14 md:px-20 md:py-20
            text-center
          "
        >
          {/* Eye-brow label */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-[#E31E24] text-[10px] font-bold tracking-[0.45em] uppercase mb-6"
          >
            Our Purpose
          </motion.p>

          {/* Main quote */}
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75, delay: 0.28 }}
            className="text-5xl font-bold italic text-blue-50 text-center leading-tight"
          >
            "Our mission is to bridge the gap between industrial necessity and technological elegance."
          </motion.p>

          {/* Decorative line */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mx-auto mt-10 w-20 h-px bg-gradient-to-r from-transparent via-blue-300/60 to-transparent origin-center"
          />

          {/* Attribution */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.65 }}
            className="mt-6 text-blue-200/50 text-sm tracking-widest uppercase font-medium"
          >
            Promac Technologies — Est. 2010
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
