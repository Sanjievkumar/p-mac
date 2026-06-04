import React, { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform, useInView } from 'framer-motion';
import { Settings, Wrench, Package, LineChart, ArrowRight, CheckCircle2 } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

/* ─────────────────────────────────────────────
   3D Tilt Card Component
───────────────────────────────────────────── */
function TiltCard({ children, className }) {
  const ref = useRef(null);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7deg", "-7deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7deg", "7deg"]);
  const glareOpacity = useTransform(mouseYSpring, [-0.5, 0.5], [0, 0.15]);
  const glareY = useTransform(mouseYSpring, [-0.5, 0.5], ["-100%", "100%"]);

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    x.set(mouseX / width - 0.5);
    y.set(mouseY / height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d", perspective: 1200 }}
      className={`relative ${className}`}
    >
      <motion.div 
        className="absolute inset-0 z-50 pointer-events-none rounded-[32px]"
        style={{
          opacity: glareOpacity,
          background: 'linear-gradient(to bottom, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0) 100%)',
          transform: `translateY(${glareY})`
        }}
      />
      <div style={{ transform: "translateZ(40px)" }} className="h-full w-full">
        {children}
      </div>
    </motion.div>
  );
}

/* ─────────────────────────────────────────────
   Magnetic Button Component
───────────────────────────────────────────── */
function MagneticButton({ children, onClick, className = '' }) {
  const ref = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e) => {
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX * 0.3, y: middleY * 0.3 });
  };

  const reset = () => setPosition({ x: 0, y: 0 });

  return (
    <motion.button
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      onClick={onClick}
      className={className}
    >
      {children}
    </motion.button>
  );
}

/* ─────────────────────────────────────────────
   Data
───────────────────────────────────────────── */
const SERVICES = [
  {
    id: 'turnkey',
    title: 'Turnkey Installations',
    icon: Settings,
    description: 'End-to-end design, supply, and commissioning of commercial laundry systems. From blueprint to final operation, we ensure seamless integration of world-class machinery tailored to your facility\'s unique throughput requirements.',
    features: ['Facility Design & Layout', 'Capacity Planning', 'Equipment Integration', 'Final Commissioning']
  },
  {
    id: 'amc',
    title: 'Preventive Maintenance (AMC)',
    icon: Wrench,
    description: 'Proactive Annual Maintenance Contracts designed to maximize uptime. Our certified engineers conduct rigorous scheduled diagnostics to identify and resolve wear before it impacts your daily operations.',
    features: ['Scheduled Inspections', 'Priority Emergency Response', 'Performance Diagnostics', 'Uptime Guarantee']
  },
  {
    id: 'spares',
    title: 'Genuine OEM Spare Parts',
    icon: Package,
    description: 'Direct access to a comprehensive inventory of authentic manufacturer parts. We ensure your critical equipment is serviced using only 100% genuine components to maintain factory-level performance and longevity.',
    features: ['Extensive Inventory', 'Rapid Dispatch', '100% Genuine Guarantee', 'Expert Sourcing']
  },
  {
    id: 'optimization',
    title: 'Workflow Optimization',
    icon: LineChart,
    description: 'Strategic engineering audits of your existing laundry operations. We analyze utility consumption, labor efficiency, and throughput to identify bottlenecks and implement modern automated upgrades.',
    features: ['Utility Audits', 'Automation Upgrades', 'Throughput Analysis', 'Labor Efficiency Mapping']
  }
];

const METHODOLOGY = [
  { step: '01', title: 'Comprehensive Audit', desc: 'We begin by analyzing your facility\'s specific operational demands, utility constraints, and throughput goals.' },
  { step: '02', title: 'Custom Engineering', desc: 'Our technical team designs a tailored solution layout, selecting the precise equipment mix needed to achieve optimal efficiency.' },
  { step: '03', title: 'Precision Deployment', desc: 'Expert technicians execute the installation, ensuring all mechanical, electrical, and plumbing systems integrate flawlessly.' },
  { step: '04', title: 'Lifecycle Support', desc: 'Post-installation, we provide rigorous preventive maintenance, operator training, and rapid response support to secure your investment.' }
];

/* ─────────────────────────────────────────────
   Main Component
───────────────────────────────────────────── */
export default function Services() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full min-h-screen bg-[#fafafa] font-display flex flex-col">
      <Navbar />

      {/* ══════════════════════════════════════════
          HERO SECTION
      ══════════════════════════════════════════ */}
      <section className="relative w-full pt-44 pb-32 px-6 lg:px-12 flex flex-col items-center overflow-hidden">
        {/* Ambient blobs */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#E31E24]/[0.04] rounded-full blur-[180px] -mr-40 -mt-40 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#001F3F]/[0.04] rounded-full blur-[160px] -ml-40 -mb-40 pointer-events-none" />

        {/* Blueprint Grid Watermark */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.2] animate-grid"
          style={{
            backgroundImage: 'linear-gradient(#001F3F 1px, transparent 1px), linear-gradient(90deg, #001F3F 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
          aria-hidden="true"
        />

        <div className="max-w-[1200px] w-full relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-6"
          >
            <span className="text-[#E31E24] font-bold text-[10px] tracking-[0.4em] uppercase bg-[#E31E24]/5 px-6 py-2 rounded-full border border-[#E31E24]/10 shadow-[0_0_20px_rgba(227,30,36,0.1)] inline-flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#E31E24] animate-pulse" /> Engineering Excellence
            </span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-6xl md:text-8xl lg:text-[100px] font-black tracking-tighter text-[#001F3F] leading-none mb-6 drop-shadow-sm"
          >
            OUR <span className="text-[#E31E24]">SERVICES.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-lg md:text-xl text-slate-500 max-w-3xl mx-auto font-light tracking-wide leading-relaxed"
          >
            From the initial blueprint to decades of reliable operation, Promac provides end-to-end engineering solutions that transform commercial laundries into highly efficient, automated production powerhouses.
          </motion.p>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          SERVICES GRID (3D Tilt Cards)
      ══════════════════════════════════════════ */}
      <section className="relative w-full pb-32 px-6 lg:px-12 bg-[#fafafa] z-20">
        <div className="max-w-[1300px] mx-auto grid lg:grid-cols-2 gap-8 lg:gap-12 relative">
          
          {SERVICES.map((service, index) => {
            const Icon = service.icon;
            return (
              <TiltCard key={service.id} className="h-full">
                <motion.div 
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="h-full bg-white rounded-[32px] shadow-[0_20px_60px_rgba(0,0,0,0.05)] border border-slate-100 p-10 md:p-14 relative overflow-hidden group hover:shadow-[0_40px_100px_rgba(0,31,63,0.08)] transition-shadow duration-500 flex flex-col"
                >
                  {/* Hover Graphic */}
                  <div className="absolute -top-32 -right-32 w-64 h-64 bg-[#E31E24]/5 rounded-full blur-[80px] group-hover:bg-[#E31E24]/10 transition-colors duration-700 pointer-events-none" />
                  
                  <div className="flex items-center gap-6 mb-8 relative z-10">
                    <div className="w-16 h-16 rounded-2xl bg-[#001F3F]/5 border border-[#001F3F]/10 flex items-center justify-center shrink-0 group-hover:bg-[#001F3F] group-hover:border-[#001F3F] transition-all duration-500 shadow-sm">
                      <Icon className="w-8 h-8 text-[#001F3F] group-hover:text-white transition-colors duration-500" />
                    </div>
                    <h3 className="text-3xl font-black tracking-tight text-[#001F3F]">
                      {service.title}
                    </h3>
                  </div>
                  
                  <p className="text-slate-500 font-light text-lg leading-relaxed mb-10 relative z-10 flex-grow">
                    {service.description}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6 relative z-10 mt-auto pt-8 border-t border-slate-100">
                    {service.features.map((feat, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <CheckCircle2 className="w-4 h-4 text-[#E31E24]" />
                        <span className="text-sm font-medium text-slate-700">{feat}</span>
                      </div>
                    ))}
                  </div>

                </motion.div>
              </TiltCard>
            );
          })}

        </div>
      </section>

      {/* ══════════════════════════════════════════
          METHODOLOGY TIMELINE
      ══════════════════════════════════════════ */}
      <section className="relative w-full py-32 px-6 lg:px-12 bg-[#001F3F] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.8)_1px,transparent_1px)] bg-[length:24px_24px] pointer-events-none" />
        
        <div className="max-w-[1300px] mx-auto relative z-10">
          <div className="mb-20 text-center md:text-left">
            <h2 className="text-sm font-bold tracking-[0.3em] uppercase text-[#E31E24] mb-4">The Promac Way</h2>
            <h3 className="text-4xl md:text-6xl font-black tracking-tighter">Our Methodology.</h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 relative">
            {/* Connecting line for desktop */}
            <div className="hidden lg:block absolute top-[40px] left-0 right-0 h-[1px] bg-white/10" />

            {METHODOLOGY.map((step, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: index * 0.15 }}
                className="relative"
              >
                <div className="w-20 h-20 rounded-full bg-[#E31E24] flex items-center justify-center text-2xl font-black mb-8 relative z-10 shadow-[0_0_30px_rgba(227,30,36,0.3)]">
                  {step.step}
                </div>
                <h4 className="text-2xl font-bold mb-4">{step.title}</h4>
                <p className="text-white/60 font-light leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          CALL TO ACTION
      ══════════════════════════════════════════ */}
      <section className="relative w-full py-32 px-6 lg:px-12 bg-[#fafafa] flex flex-col items-center text-center">
        <div className="max-w-[800px] mx-auto relative z-10">
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-[#001F3F] mb-6">
            Ready to optimize your facility?
          </h2>
          <p className="text-xl text-slate-500 font-light mb-12">
            Speak with our engineering experts today to schedule a comprehensive audit or discuss your next major installation.
          </p>
          <div className="flex justify-center">
            <MagneticButton 
              className="group relative overflow-hidden rounded-full bg-[#E31E24] px-10 py-6 text-center font-black tracking-widest text-white uppercase transition-all hover:bg-[#c4151b] hover:shadow-[0_15px_40px_rgba(227,30,36,0.3)] focus:outline-none"
              onClick={() => window.location.href = '/contact'}
            >
              <span className="relative z-10 flex items-center justify-center gap-3 text-lg">
                Book a Consultation
                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
              </span>
            </MagneticButton>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          FOOTER
      ══════════════════════════════════════════ */}
      <Footer />
    </div>
  );
}
