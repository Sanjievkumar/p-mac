import { motion } from 'framer-motion';
import founderWords from '../assets/founder-words.png';

export default function FounderSection() {
  return (
    <section
      id="about"
      className="relative w-full bg-[#111111] overflow-hidden"
    >
      {/* ── Clip-path left-to-right cinematic reveal ── */}
      <motion.div
        initial={{ clipPath: 'inset(0 100% 0 0)' }}
        whileInView={{ clipPath: 'inset(0 0% 0 0)' }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 1.5, ease: 'easeInOut' }}
        className="w-full"
      >
        <img
          src={founderWords}
          alt="Words from our Founder — Senthil Kumar DR, Promac Technologies"
          className="w-full h-auto object-contain object-center block"
        />
      </motion.div>
    </section>
  );
}
