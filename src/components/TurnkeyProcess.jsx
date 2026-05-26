import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const steps = [
  {
    number: '01',
    title: 'Consultation',
    description:
      'Expert assessment of plant layout and Vastu-compliant integration to optimize workflow.',
    badge: 'OUTCOME: VASTU-COMPLIANT BLUEPRINT',
    icon: '🏗️',
  },
  {
    number: '02',
    title: 'Equipment Selection',
    description:
      'Partnering with industry titans like Sea-Lion, Kannegiesser, Maestrelli, and Maxipress.',
    badge: 'FOCUS: PEAK EFFICIENCY SCALING',
    icon: '⚙️',
  },
  {
    number: '03',
    title: 'Installation',
    description:
      'Expert commissioning to ensure peak technological innovation and operational readiness.',
    badge: 'LEAD TIME: 1-2 WEEKS',
    icon: '🔧',
  },
  {
    number: '04',
    title: 'Lifecycle Support',
    description:
      '24/7 AMC and unrivaled after-sales support with genuine OEM spare parts.',
    badge: 'OUTCOME: NEAR-ZERO DOWNTIME',
    icon: '🛡️',
  },
];

// --- Card Component ---
function StepCard({ step, index }) {
  const isLeft = index % 2 === 0; // even index = card on left, odd = card on right

  const cardVariants = {
    hidden: { opacity: 0, x: isLeft ? -50 : 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const dotVariants = {
    hidden: { scale: 0 },
    visible: { scale: 1, transition: { duration: 0.4, ease: 'backOut', delay: 0.2 } },
  };

  return (
    <div className="relative flex items-center w-full mb-16 last:mb-0">
      {/* ── Desktop alternating layout ── */}
      {/* Left slot */}
      <div className="hidden md:flex w-5/12 justify-end pr-10">
        {isLeft && (
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            className="w-full"
          >
            <Card step={step} />
          </motion.div>
        )}
      </div>

      {/* Center dot (desktop) */}
      <div className="hidden md:flex w-2/12 justify-center">
        <Dot dotVariants={dotVariants} />
      </div>

      {/* Right slot */}
      <div className="hidden md:flex w-5/12 pl-10">
        {!isLeft && (
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            className="w-full"
          >
            <Card step={step} />
          </motion.div>
        )}
      </div>

      {/* ── Mobile layout: all cards right of the line ── */}
      <div className="flex md:hidden w-full items-start gap-5 pl-10">
        <div className="absolute left-0 top-3 flex-shrink-0">
          <Dot dotVariants={dotVariants} />
        </div>
        <motion.div
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          className="w-full"
        >
          <Card step={step} />
        </motion.div>
      </div>
    </div>
  );
}

// --- Reusable Dot ---
function Dot({ dotVariants }) {
  return (
    <div className="relative flex items-center justify-center w-10 h-10 rounded-full bg-white border-2 border-slate-200 shadow-md z-10">
      <motion.div
        variants={dotVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.8 }}
        className="w-4 h-4 rounded-full bg-[#E31E24]"
      />
    </div>
  );
}

// --- Reusable Card ---
function Card({ step }) {
  return (
    <motion.div
      whileHover={{ y: -4, boxShadow: '0 20px 50px rgba(0,0,0,0.12)' }}
      transition={{ duration: 0.25 }}
      className="relative overflow-hidden bg-white rounded-2xl border border-slate-100 shadow-[0_4px_24px_rgba(0,0,0,0.07)] p-7"
    >
      {/* Watermark number */}
      <span
        className="absolute top-0 right-4 font-black text-slate-900 select-none pointer-events-none leading-none"
        style={{ fontSize: '120px', opacity: 0.04 }}
        aria-hidden="true"
      >
        {step.number}
      </span>

      {/* Step number pill */}
      <span className="inline-block mb-3 text-xs font-bold tracking-widest text-[#E31E24] uppercase">
        Step {step.number}
      </span>

      {/* Title */}
      <h3 className="text-2xl font-black text-[#001F3F] mb-2 leading-tight">
        {step.title}
      </h3>

      {/* Description */}
      <p className="text-slate-500 text-sm leading-relaxed mb-5">
        {step.description}
      </p>

      {/* Badge */}
      <span className="inline-flex items-center gap-1.5 bg-red-50 text-[#E31E24] text-[10px] font-bold tracking-widest uppercase px-3 py-1.5 rounded-full border border-red-100">
        <span className="w-1.5 h-1.5 rounded-full bg-[#E31E24] inline-block" />
        {step.badge}
      </span>
    </motion.div>
  );
}

// --- Main Section ---
export default function TurnkeyProcess() {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start 0.8', 'end 0.2'],
  });

  // Red fill line scales from 0 → 100% as the section scrolls through viewport
  const lineScaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section
      ref={sectionRef}
      className="relative bg-slate-50 py-32 overflow-hidden"
    >
      {/* Mild Blue Blueprint Grid Watermark */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.05] animate-grid"
        style={{
          backgroundImage:
            'linear-gradient(#3b82f6 1px, transparent 1px), linear-gradient(90deg, #3b82f6 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-5xl mx-auto px-6">
        {/* ── Header ── */}
        <div className="text-center mb-20">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-[#E31E24] text-xs font-bold tracking-widest uppercase mb-3"
          >
            The Promac Method
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl font-black text-[#001F3F] leading-tight"
          >
            Our Turnkey Process
          </motion.h2>

          {/* Red divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mx-auto mt-5 w-16 h-1 bg-[#E31E24] rounded-full origin-center"
          />
        </div>

        {/* ── Timeline container ── */}
        <div className="relative">
          {/* Gray base line — desktop: center, mobile: left */}
          <div
            className="
              absolute top-0 bottom-0 w-px bg-slate-200
              left-4 md:left-1/2 md:-translate-x-1/2
            "
            aria-hidden="true"
          />

          {/* Animated red fill line */}
          <motion.div
            style={{ scaleY: lineScaleY, transformOrigin: 'top' }}
            className="
              absolute top-0 bottom-0 w-px bg-[#E31E24]
              left-4 md:left-1/2 md:-translate-x-1/2
            "
            aria-hidden="true"
          />

          {/* Step cards */}
          {steps.map((step, index) => (
            <StepCard key={step.number} step={step} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
