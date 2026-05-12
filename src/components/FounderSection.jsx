import { motion } from 'framer-motion';
import founderWords from '../assets/founder-words.png';

export default function FounderSection() {
  return (
    <section
      id="about"
      className="relative w-full bg-[#0d0d0d] overflow-hidden py-20 md:py-28"
    >
      {/* ── Subtle ambient glow behind the image ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at 50% 60%, rgba(200,40,40,0.07) 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      {/* ── Single-column centred layout ── */}
      <div className="relative z-10 flex flex-col items-center justify-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 48 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="w-full max-w-6xl"
        >
          <img
            src={founderWords}
            alt="Words from our Founder — Senthil Kumar DR, Promac Technologies"
            className="w-full h-auto object-contain object-center"
          />
        </motion.div>
      </div>

      {/* ── Top fade blending from hero ── */}
      <div
        className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-[#f5f5f5] to-transparent pointer-events-none z-0"
        aria-hidden="true"
      />

      {/* ── Bottom fade blending into next section ── */}
      <div
        className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#f5f5f5] to-transparent pointer-events-none z-0"
        aria-hidden="true"
      />
    </section>
  );
}
