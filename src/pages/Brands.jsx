import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import GlobeSection from '../components/GlobeSection';

/* ─────────────────────────────────────────────
   Brand catalog data
   img  → main product showcase image
   logo → brand logo (white bg, mix-blend-multiply)
───────────────────────────────────────────── */
const BRANDS = [
  {
    id: 'sea-lion',
    name: 'SEA-LION',
    origin: 'China',
    tagline: 'Industrial Laundry Machines',
    logo: '/Brands/sea-lion brand/sea-lion-logo.png',
    img:  '/Brands/sea-lion brand/WASHER-EXTRACTOR.png',
    desc: 'SEA-LION is a globally established manufacturer of industrial laundry machines, offering reliable, energy-efficient, and automation-ready solutions.',
    products: ['Washer Extractors', 'Tumble Dryers', 'Flatwork Ironers', 'Barrier Washers'],
  },
  {
    id: 'maestrelli',
    name: 'MAESTRELLI',
    origin: 'Italy',
    tagline: 'Dry Cleaning Systems',
    logo: '/Brands/MAESTRELLI brand/Maestrelli_Logo.png',
    img:  '/Brands/MAESTRELLI brand/DREAMCLEAN MULTISOLVENT SOFT MOUNT.png',
    desc: 'Designed for reliability, fabric protection, and operational efficiency, Maestrelli systems help commercial laundries and dry cleaners achieve consistent cleaning quality with reduced solvent usage.',
    products: ['Multisolvent Dry Cleaning', 'Perc Machines', 'Soft-Mount Systems'],
  },
  {
    id: 'maxipress',
    name: 'MAXIPRESS',
    origin: 'Spain',
    tagline: 'Garment Finishing Equipment',
    logo: '/Brands/maxipress brand/Maxipress_Logo.png',
    img:  '/Brands/maxipress brand/MPCAFF-FORM FINISHER.png',
    desc: 'Engineered for high-volume commercial laundries and professional garment care facilities, MAXIPRESS solutions deliver consistent finishing quality, operational reliability, and long service life.',
    products: ['Form Finishers', 'Utility Presses', 'Steam Vacuum Boards', 'Collar & Cuff Presses'],
  },
  {
    id: 'kannegiesser',
    name: 'KANNEGIESSER',
    origin: 'Germany',
    tagline: 'End-to-End Laundry Automation',
    logo: '/Brands/Kannegiesser brand/Kannegiesser_Logo.png',
    img:  '/Brands/Kannegiesser brand/313434_EMQ_Halle_Keyvisual.jpg',
    desc: 'Kannegiesser has evolved from a machine manufacturer into a global technology partner for industrial laundries, delivering complete end-to-end laundry automation systems with decades of engineering expertise.',
    products: ['Tunnel Washers', 'Powertrans Systems', 'Flatwork Ironers', 'Automated Sorting'],
  },
];

/* ─── Reusable reveal helpers ──────────────── */
function FadeUp({ children, delay = 0, className = '' }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ─── Single brand row ──────────────────────── */
function BrandRow({ brand, reverse }) {
  const textCol = (
    <FadeUp delay={0.1} className="flex flex-col justify-center py-12 px-8 lg:px-14">
      {/* Origin badge */}
      <div className="flex items-center gap-3 mb-6">
        <div className="w-6 h-[1px] bg-[#E31E24]" />
        <span className="text-[#E31E24] text-[9px] font-bold tracking-[0.4em] uppercase">
          {brand.origin} — {brand.tagline}
        </span>
      </div>

      {/* Logo */}
      <div className="mb-6 h-12 flex items-center">
        <img
          src={brand.logo}
          alt={brand.name}
          className="h-full w-auto max-w-[180px] object-contain mix-blend-multiply"
          onError={(e) => { e.target.style.display = 'none'; }}
        />
      </div>

      {/* Name */}
      <h2 className="text-4xl md:text-5xl font-black text-[#001F3F] tracking-tighter mb-5 leading-none">
        {brand.name}
      </h2>

      {/* Description */}
      <p className="text-slate-500 text-[15px] leading-relaxed mb-8 max-w-[460px]">
        {brand.desc}
      </p>

      {/* Product chips */}
      <div className="flex flex-wrap gap-2 mb-10">
        {brand.products.map((p) => (
          <span
            key={p}
            className="text-[10px] font-bold tracking-widest uppercase text-[#001F3F] border border-[#001F3F]/20 px-3 py-1.5 rounded-sm"
          >
            {p}
          </span>
        ))}
      </div>

      {/* CTA */}
      <div>
        <a
          href={`#${brand.id}`}
          className="group inline-flex items-center gap-4 text-[10px] font-bold tracking-[0.2em] uppercase text-[#E31E24] border border-[#E31E24] px-7 py-3.5 rounded-sm transition-all duration-300 hover:bg-[#E31E24] hover:text-white"
        >
          VIEW PRODUCTS
          <span className="w-5 h-5 rounded-full border border-current flex items-center justify-center transition-transform duration-300 group-hover:translate-x-1">
            <svg className="w-2.5 h-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </span>
        </a>
      </div>
    </FadeUp>
  );

  const imgCol = (
    <FadeUp
      delay={0}
      className="relative flex items-center justify-center bg-[#f7f7f7] min-h-[360px] lg:min-h-[480px] overflow-hidden"
    >
      {/* Subtle grid watermark */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />
      <img
        src={brand.img}
        alt={brand.name}
        className="relative z-10 max-h-[320px] max-w-[80%] object-contain drop-shadow-[0_24px_40px_rgba(0,0,0,0.14)] mix-blend-multiply"
      />
    </FadeUp>
  );

  return (
    <div id={brand.id} className="border-b border-black/8 last:border-b-0">
      <div className={`grid grid-cols-1 lg:grid-cols-2 ${reverse ? 'lg:grid-flow-row-dense' : ''}`}>
        {reverse ? (
          <>
            <div className={reverse ? 'lg:col-start-2' : ''}>{textCol}</div>
            <div className={reverse ? 'lg:col-start-1' : ''}>{imgCol}</div>
          </>
        ) : (
          <>
            {imgCol}
            {textCol}
          </>
        )}
      </div>
    </div>
  );
}

/* ─── Page ─────────────────────────────────── */
export default function Brands() {
  return (
    <div className="w-full min-h-screen bg-white font-display flex flex-col">
      <Navbar />

      {/* ── Hero Banner ── */}
      <section className="relative pt-40 pb-20 px-6 bg-[#001F3F] overflow-hidden text-center">
        {/* Blueprint grid */}
        <div
          className="absolute inset-0 opacity-[0.06] pointer-events-none"
          style={{
            backgroundImage: 'linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
        />
        {/* Ambient glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-[#E31E24]/10 rounded-full blur-[120px] pointer-events-none" />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10 max-w-[800px] mx-auto"
        >
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-6 h-[1px] bg-[#E31E24]" />
            <p className="text-[#E31E24] text-[10px] font-bold tracking-[0.4em] uppercase">
              Strategic Partners
            </p>
            <div className="w-6 h-[1px] bg-[#E31E24]" />
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-6 leading-[0.95]">
            World-Class<br />
            <span className="text-[#E31E24]">Brand Partners.</span>
          </h1>
          <p className="text-slate-300 text-lg max-w-lg mx-auto leading-relaxed">
            Promac is the authorised Indian representative for four globally recognised industrial laundry technology manufacturers.
          </p>
        </motion.div>
      </section>

      {/* ── Brand Catalog ── */}
      <section className="w-full border-t border-black/10">
        {BRANDS.map((brand, idx) => (
          <BrandRow key={brand.id} brand={brand} reverse={idx % 2 !== 0} />
        ))}
      </section>

      {/* ── 3D Globe ── */}
      <GlobeSection />

      <Footer />
    </div>
  );
}
