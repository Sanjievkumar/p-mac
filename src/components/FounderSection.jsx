import { motion } from 'framer-motion';
import founderWords from '../assets/founder-words.png';

export default function FounderSection() {
  return (
    <section
      id="about"
      className="relative w-full bg-[#111111] overflow-hidden"
    >
      {/* ── Simple fade-up reveal — no clip-path ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="w-full"
      >
        <img
          src={founderWords}
          alt="Words from our Founder — Senthil Kumar DR, Promac Technologies"
          className="w-full h-auto object-contain object-center block"
          style={{ opacity: 1 }}
        />
      </motion.div>
    </section>
  );
}
