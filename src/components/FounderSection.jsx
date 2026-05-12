import { motion } from 'framer-motion';
import founderWords from '../assets/founder-words.png';

export default function FounderSection() {
  const textVariants = {
    hidden: { opacity: 0, x: -40 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.15,
        duration: 0.8,
        ease: 'easeOut',
      },
    }),
  };

  return (
    <section
      id="about"
      className="relative w-full h-auto min-h-[800px] overflow-hidden bg-[#121110]"
    >
      {/* ── BACKGROUND ARCHITECTURE ── */}
      <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
        <div className="absolute inset-0 bg-[#141414]" />

        {/* Gold accent lines */}
        <div className="absolute top-0 bottom-0 left-[38%] w-[1px] bg-gradient-to-b from-transparent via-[#b39050] to-[#5c4a2e] opacity-40" />
        <div className="absolute top-0 bottom-0 left-[52%] w-[1px] bg-gradient-to-b from-[#5c4a2e] via-[#b39050] to-transparent opacity-40" />
        <div className="absolute top-[52%] left-0 w-[52%] h-[1px] bg-gradient-to-r from-transparent via-[#b39050] to-[#5c4a2e] opacity-40" />

        {/* Ambient warm light */}
        <div className="absolute top-[40%] right-[10%] w-[600px] h-[600px] bg-[#d99f48] rounded-full blur-[200px] opacity-[0.15]" />
      </div>

      <div className="relative w-full h-full max-w-[1400px] mx-auto flex flex-col md:flex-row items-center z-10">

        {/* ── LEFT: Typography ── */}
        <div className="w-full md:w-[55%] pl-6 md:pl-10 lg:pl-20 pr-6 md:pr-10 pt-20 pb-20">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, margin: '-100px' }}
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

            <motion.p custom={4} variants={textVariants} className="text-gray-300 text-sm md:text-base leading-[1.8] mb-6 max-w-[450px]">
              At Promac Technologies, our journey has always been about solving real challenges with practical, reliable and future-ready solutions. We believe in engineering excellence, long-term partnerships, and creating value that lasts.
            </motion.p>

            <motion.p custom={5} variants={textVariants} className="text-gray-300 text-sm md:text-base leading-[1.8] mb-10 max-w-[450px]">
              Our commitment to innovation, quality, and customer success drives everything we do. Thank you for being a part of our journey.
            </motion.p>

            <motion.div custom={6} variants={textVariants} className="mt-8">
              <p
                className="text-4xl text-[#cc3333]/70 mb-4"
                style={{ fontFamily: "'Brush Script MT', 'Great Vibes', cursive" }}
              >
                Senthil Kumar
              </p>
              <p className="text-gray-200 font-bold text-sm tracking-wide font-display">Senthil Kumar DR</p>
              <p className="text-gray-500 text-[10px] uppercase tracking-widest mt-1 font-display">
                Founder &amp; Managing Director<br />
                Promac Technologies Pvt Ltd
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* ── RIGHT: Founder Words image ── */}
        <div className="relative w-full md:w-[45%] flex items-center justify-center px-6 md:px-10 py-12 md:py-0">
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="w-full max-w-[420px]"
          >
            <img
              src={founderWords}
              alt="Words from our Founder — Senthil Kumar DR"
              className="
                w-full h-auto
                object-contain object-center
                rounded-2xl
                shadow-2xl
                border border-slate-200/20
              "
            />
          </motion.div>

          {/* Left blend gradient on desktop */}
          <div
            className="hidden md:block absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#141414] to-transparent pointer-events-none"
            aria-hidden="true"
          />
        </div>

      </div>
    </section>
  );
}
