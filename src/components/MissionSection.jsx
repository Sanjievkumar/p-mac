import { motion } from 'framer-motion';
import missionBg from '../assets/mission-handshake.png';

export default function MissionSection() {
  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ minHeight: '640px' }}
    >
      {/* ── Fixed parallax background ── */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${missionBg})`,
          backgroundAttachment: 'fixed',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
        aria-hidden="true"
      />

      {/* ── Dark navy overlay ── */}
      <div
        className="absolute inset-0 bg-[#001F3F]/60"
        aria-hidden="true"
      />

      {/* ── Soft vignette top & bottom ── */}
      <div
        className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#001F3F]/50 to-transparent pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#001F3F]/50 to-transparent pointer-events-none"
        aria-hidden="true"
      />

      {/* ── Content ── */}
      <div className="relative z-10 flex items-center justify-center min-h-[640px] px-6 py-28">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 32 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="
            relative max-w-4xl w-full
            bg-white/5 backdrop-blur-xl
            border border-white/20
            rounded-[40px]
            px-10 py-16 md:px-20 md:py-20
            text-center
            shadow-[0_8px_80px_rgba(0,0,0,0.45)]
          "
        >
          {/* Subtle inner glow ring */}
          <div
            className="absolute inset-0 rounded-[40px] pointer-events-none"
            style={{
              background:
                'radial-gradient(ellipse at 50% 0%, rgba(255,255,255,0.07) 0%, transparent 60%)',
            }}
            aria-hidden="true"
          />

          {/* ── OUR PURPOSE label ── */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-[#E31E24] text-[10px] font-bold tracking-[0.5em] uppercase mb-8"
          >
            Our Purpose
          </motion.p>

          {/* ── Main Quote ── */}
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75, delay: 0.32 }}
            className="text-white text-4xl md:text-5xl font-bold italic leading-tight"
          >
            "Our mission is to bridge the gap between industrial necessity and technological elegance."
          </motion.p>

          {/* ── Decorative divider ── */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.55 }}
            className="mx-auto mt-12 mb-8 w-24 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent origin-center"
          />

          {/* ── Footer attribution ── */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="text-white/50 text-[11px] font-semibold tracking-[0.4em] uppercase"
          >
            Promac Technologies &mdash; Est.&nbsp;2010
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
