import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Award, Settings, MapPin, Handshake } from 'lucide-react';

// --- FIXED DATA (computed once, outside render to avoid hydration chaos) ---

const BRAND_BUBBLES = [
  // (name, logo, left%, top%, size in px, float duration, delay)
  { name: 'SEA-LION',      logo: '/Brands/sea-lion brand/sea-lion-logo.png',          left: 30, top: 12, size: 130, dur: 5.5, delay: 0 },
  { name: 'KANNEGIESSER',  logo: '/Brands/Kannegiesser brand/Kannegiesser_Logo.png',  left: 57, top: 8,  size: 155, dur: 6.5, delay: 0.8 },
  { name: 'MAESTRELLI',    logo: '/Brands/MAESTRELLI brand/Maestrelli_Logo.png',      left: 72, top: 40, size: 140, dur: 7,   delay: 1.6 },
  { name: 'MAXIPRESS',     logo: '/Brands/maxipress brand/Maxipress_Logo.png',        left: 48, top: 52, size: 120, dur: 5,   delay: 2.4 },
];

const SMALL_BUBBLES = [
  { left: 25, top: 55, size: 60,  dur: 4.8, delay: 0   },
  { left: 33, top: 30, size: 80,  dur: 5.2, delay: 1   },
  { left: 40, top: 70, size: 48,  dur: 6.1, delay: 0.5 },
  { left: 50, top: 28, size: 72,  dur: 5.8, delay: 1.8 },
  { left: 61, top: 65, size: 55,  dur: 4.5, delay: 0.3 },
  { left: 68, top: 18, size: 90,  dur: 6.6, delay: 2.2 },
  { left: 80, top: 15, size: 65,  dur: 5.3, delay: 0.7 },
  { left: 84, top: 50, size: 52,  dur: 4.9, delay: 1.4 },
  { left: 88, top: 70, size: 44,  dur: 7.2, delay: 0.1 },
  { left: 38, top: 50, size: 36,  dur: 3.8, delay: 3.1 },
  { left: 55, top: 74, size: 42,  dur: 4.2, delay: 2.0 },
  { left: 76, top: 78, size: 58,  dur: 5.6, delay: 1.1 },
  { left: 91, top: 35, size: 48,  dur: 6.3, delay: 0.4 },
  { left: 26, top: 75, size: 34,  dur: 4.0, delay: 2.7 },
  { left: 64, top: 83, size: 66,  dur: 5.9, delay: 1.3 },
];

// Soap bubble CSS reused on both brand and small bubbles
const bubbleStyle = {
  background: 'radial-gradient(circle at 32% 28%, rgba(255,255,255,0.62) 0%, rgba(255,255,255,0.10) 45%, rgba(200,230,255,0.04) 100%)',
  border: '1.5px solid rgba(255,255,255,0.55)',
  boxShadow: [
    'inset  4px  4px 12px rgba(255,255,255,0.55)',
    'inset -4px -4px 14px rgba(130,190,255,0.25)',
    'inset  0    0   20px rgba(255,140,200,0.12)',
    '0  8px 24px rgba(0,0,0,0.06)',
  ].join(', '),
  backdropFilter: 'blur(4px)',
};

export default function About() {
  return (
    <div className="w-full min-h-screen bg-white font-sans flex flex-col">
      <Navbar />

      {/* ── SECTION 1: HERO COPY & GLASS CONSOLE ── */}
      <section className="relative w-full pt-32 pb-10 px-6 lg:px-12 flex flex-col items-center overflow-hidden">
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-[#e31e24] rounded-full blur-[150px] opacity-[0.05] pointer-events-none" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-[#0b1b36] rounded-full blur-[120px] opacity-[0.05] pointer-events-none" />

        <div className="max-w-[1000px] w-full text-center mb-16 relative z-10 pt-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-[56px] font-extrabold text-[#0b1b36] tracking-tighter mb-6 font-display uppercase leading-[1.1]"
          >
            BEYOND EQUIPMENT.<br/>
            <span className="text-[#e31e24]">DEFINING FUTURE EFFICIENCY.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl text-slate-500 font-serif font-medium italic"
          >
            One Partner. Every Aspect. Complete Confidence.
          </motion.p>
        </div>

        {/* Glass Console */}
        <motion.div
          initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.8, ease: 'easeOut', delay: 0.4 }}
          className="relative max-w-[1000px] w-full rounded-2xl overflow-hidden z-10 shadow-[0_20px_50px_rgba(0,0,0,0.15)] mb-20"
        >
          <div className="absolute inset-[-50%] z-0 animate-[spin_4s_linear_infinite] opacity-70">
            <div className="w-full h-full bg-[conic-gradient(from_90deg_at_50%_50%,#0f172a_0%,#0f172a_70%,#e31e24_100%)]" />
          </div>
          <div className="relative z-10 m-[2px] bg-slate-900/80 backdrop-blur-xl rounded-[14px] p-8 md:p-12 lg:p-16 border border-white/5 flex flex-col items-center gap-6">
            <div className="absolute top-4 left-4  w-4 h-4 border-t-2 border-l-2 border-[#e31e24]/60" />
            <div className="absolute top-4 right-4 w-4 h-4 border-t-2 border-r-2 border-[#e31e24]/60" />
            <div className="absolute bottom-4 left-4  w-4 h-4 border-b-2 border-l-2 border-[#e31e24]/60" />
            <div className="absolute bottom-4 right-4 w-4 h-4 border-b-2 border-r-2 border-[#e31e24]/60" />
            <p className="text-slate-200 text-lg md:text-[20px] leading-relaxed text-center font-body max-w-[850px]">
              Promac Technologies Pvt Ltd is a leading laundry equipment supplier in India, providing advanced commercial laundry and dry-cleaning machines for hospitality, healthcare, institutional, and industrial laundries. As an experienced industrial laundry solutions provider, we support businesses with reliable equipment, expert guidance, and long-term service support.
            </p>
            <p className="text-slate-200 text-lg md:text-[20px] leading-relaxed text-center font-body max-w-[850px]">
              With decades of hands-on industry experience, we help clients design, install, and operate efficient laundry facilities that deliver consistent performance and operational efficiency.
            </p>
          </div>
        </motion.div>
      </section>

      {/* ── SECTION 2: TRUSTED BY LEADING BRANDS — exact design replica ── */}
      <section
        className="relative w-full overflow-hidden"
        style={{
          background: 'linear-gradient(160deg, #f0f7ff 0%, #e8f4ff 40%, #f5faff 100%)',
          minHeight: 700,
        }}
      >
        {/* Blue ambient top-left blob */}
        <div className="absolute top-0 left-0 w-[600px] h-[500px] bg-[#cce8ff] rounded-full blur-[120px] opacity-60 pointer-events-none translate-x-[-30%] translate-y-[-30%]" />

        {/* ── TYPOGRAPHY HEADER (centred above everything) ── */}
        <div className="relative z-20 pt-14 pb-4 text-center">
          <p className="text-[#e31e24] text-xs font-bold tracking-[0.25em] uppercase mb-2">OUR CLIENTS</p>
          <h2 className="text-4xl md:text-[44px] font-extrabold tracking-tight text-[#111] leading-tight mb-4">
            Trusted by Leading Brands
          </h2>
          <p className="text-gray-500 text-sm md:text-base max-w-md mx-auto leading-relaxed">
            Proud to be the laundry technology partner<br />for India's most respected brands and institutions.
          </p>
        </div>

        {/* ── SCENE: Machine left, bubbles right ── */}
        <div className="relative w-full" style={{ height: 580 }}>

          {/* ═══════════════════════════════════════
              PURE-CSS INDUSTRIAL WASHING MACHINE
              Anchored to the left, bottom of scene
          ════════════════════════════════════════ */}
          <div
            className="absolute bottom-0 left-0 z-30"
            style={{ width: 380, height: 520 }}
          >
            {/* Main body — brushed stainless gradient */}
            <div
              className="absolute bottom-0 left-0"
              style={{
                width: 340,
                height: 500,
                borderRadius: '10px 10px 4px 4px',
                background: 'linear-gradient(170deg, #d8dfe8 0%, #f0f4f8 25%, #c8d0da 50%, #e0e6ed 75%, #b8c4cf 100%)',
                boxShadow: '6px 0 20px rgba(0,0,0,0.18), inset 2px 0 6px rgba(255,255,255,0.7), inset -2px 0 4px rgba(0,0,0,0.1)',
              }}
            >
              {/* Subtle brushed-metal horizontal lines */}
              {[...Array(24)].map((_, i) => (
                <div key={i} style={{ position:'absolute', left:0, right:0, top: 20 + i*20, height:1, background:'rgba(255,255,255,0.25)' }} />
              ))}

              {/* ── TOP CONTROL PANEL (dark) ── */}
              <div
                style={{
                  position:'absolute', top:0, left:0, right:0,
                  height: 110,
                  borderRadius: '10px 10px 0 0',
                  background: 'linear-gradient(180deg, #1e2530 0%, #252d38 100%)',
                  borderBottom: '3px solid #111',
                  boxShadow: 'inset 0 -4px 8px rgba(0,0,0,0.4)',
                  display:'flex', flexDirection:'column', justifyContent:'center',
                  padding: '10px 18px',
                  gap: 8,
                }}
              >
                {/* Row 1: PROMAC badge + indicator lights */}
                <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between' }}>
                  {/* PROMAC badge */}
                  <div style={{ display:'flex', alignItems:'center', gap:6 }}>
                    <div style={{ width:14, height:14, borderRadius:'50%', background:'#E31E24', boxShadow:'0 0 8px #E31E24', border:'2px solid #ff6060' }} />
                    <span style={{ color:'#fff', fontWeight:800, fontSize:13, letterSpacing:'0.15em', fontFamily:'sans-serif' }}>PROMAC</span>
                  </div>
                  {/* Indicator LEDs */}
                  <div style={{ display:'flex', gap:6, alignItems:'center' }}>
                    <div style={{ width:10, height:10, borderRadius:'50%', background:'#22c55e', boxShadow:'0 0 8px #22c55e' }} />
                    <div style={{ width:10, height:10, borderRadius:'50%', background:'#f59e0b', boxShadow:'0 0 6px #f59e0b' }} />
                    <div style={{ width:10, height:10, borderRadius:'50%', background:'#555' }} />
                  </div>
                </div>
                {/* Row 2: LCD Screen + buttons */}
                <div style={{ display:'flex', alignItems:'center', gap:10 }}>
                  {/* LCD display */}
                  <div style={{
                    flex:1, height:38, background:'#7bb8d4',
                    borderRadius:4, border:'2px solid #4a7a99',
                    boxShadow:'inset 0 2px 8px rgba(0,0,0,0.5)',
                    display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center',
                    gap:3, padding:'4px 6px',
                  }}>
                    {[...Array(3)].map((_,i)=>(
                      <div key={i} style={{ width:'90%', height:2, background:'rgba(255,255,255,0.4)', borderRadius:1 }} />
                    ))}
                  </div>
                  {/* Row of small buttons */}
                  <div style={{ display:'flex', gap:5 }}>
                    {['#888','#888','#E31E24','#888','#888'].map((c,i)=>(
                      <div key={i} style={{
                        width:14, height:14, borderRadius:'50%', background:c,
                        boxShadow: c==='#E31E24' ? '0 0 6px #E31E24' : '0 2px 4px rgba(0,0,0,0.4)',
                        border:'1.5px solid rgba(255,255,255,0.15)',
                      }} />
                    ))}
                  </div>
                  {/* Big red Emergency Stop */}
                  <div style={{
                    width:32, height:32, borderRadius:'50%',
                    background:'radial-gradient(circle at 35% 30%, #ff5555, #cc0000)',
                    border:'3px solid #991111',
                    boxShadow:'0 3px 8px rgba(0,0,0,0.5), 0 0 10px rgba(200,0,0,0.4)',
                  }} />
                </div>
              </div>

              {/* ── DOOR FRAME RING (outer chrome) ── */}
              <div
                style={{
                  position:'absolute', top:128, left:'50%', transform:'translateX(-50%)',
                  width:248, height:248,
                  borderRadius:'50%',
                  background:'linear-gradient(135deg, #e8edf2 0%, #b0bac5 40%, #d8e0e8 70%, #a0aab5 100%)',
                  boxShadow:'0 8px 30px rgba(0,0,0,0.35), inset 0 4px 8px rgba(255,255,255,0.6), inset 0 -4px 8px rgba(0,0,0,0.2)',
                  display:'flex', alignItems:'center', justifyContent:'center',
                }}
              >
                {/* Inner rubber gasket */}
                <div style={{
                  width:218, height:218, borderRadius:'50%',
                  background:'linear-gradient(135deg, #1c2028, #2a303a)',
                  boxShadow:'inset 0 6px 20px rgba(0,0,0,0.9), 0 0 0 6px #181e26',
                  display:'flex', alignItems:'center', justifyContent:'center',
                }}>
                  {/* The Glass Porthole */}
                  <div style={{
                    width:196, height:196, borderRadius:'50%',
                    background:'radial-gradient(circle at 38% 32%, rgba(255,255,255,0.18) 0%, rgba(20,40,80,0.5) 40%, rgba(5,10,20,0.95) 100%)',
                    overflow:'hidden', position:'relative',
                    boxShadow:'inset 0 0 40px rgba(0,0,0,0.9)',
                  }}>
                    {/* Clothes simulation - blue fabric */}
                    <div style={{ position:'absolute', bottom:'-5%', left:'-10%', width:'130%', height:'65%', background:'radial-gradient(ellipse, #1d4ed8, #1e3a8a)', borderRadius:'50%', filter:'blur(12px)', opacity:0.9, transform:'rotate(-15deg)' }} />
                    {/* Clothes - red piece */}
                    <div style={{ position:'absolute', bottom:'10%', right:'-5%', width:'80%', height:'55%', background:'radial-gradient(ellipse, #dc2626, #991b1b)', borderRadius:'50%', filter:'blur(10px)', opacity:0.85, transform:'rotate(20deg)' }} />
                    {/* Clothes - white piece */}
                    <div style={{ position:'absolute', top:'25%', left:'20%', width:'50%', height:'40%', background:'radial-gradient(ellipse, rgba(255,255,255,0.5), transparent)', borderRadius:'50%', filter:'blur(8px)', opacity:0.7 }} />
                    {/* Glass glare highlight */}
                    <div style={{ position:'absolute', top:'8%', left:'12%', width:'38%', height:'38%', background:'radial-gradient(circle, rgba(255,255,255,0.4), transparent)', borderRadius:'50%', filter:'blur(4px)' }} />
                    {/* Secondary small glare */}
                    <div style={{ position:'absolute', top:'18%', left:'22%', width:'15%', height:'15%', background:'rgba(255,255,255,0.55)', borderRadius:'50%', filter:'blur(2px)' }} />
                  </div>
                </div>
              </div>

              {/* Door handle */}
              <div style={{
                position:'absolute', top:128+110, left:6,
                width:22, height:28,
                background:'linear-gradient(180deg, #c8d0d8, #8090a0)',
                borderRadius:'4px 0 0 4px',
                boxShadow:'-2px 2px 6px rgba(0,0,0,0.4)',
                border:'1px solid rgba(255,255,255,0.3)',
              }} />

              {/* Bottom panel stripe */}
              <div style={{ position:'absolute', bottom:0, left:0, right:0, height:50,
                background:'linear-gradient(180deg, #c0cad4, #a8b4be)',
                borderRadius:'0 0 4px 4px',
                borderTop:'2px solid #8090a0',
                display:'flex', alignItems:'center', justifyContent:'center', gap:12,
              }}>
                {[80,40,80].map((w,i)=>(
                  <div key={i} style={{ width:w, height:6, background:'#8898a8', borderRadius:3, boxShadow:'inset 0 1px 3px rgba(0,0,0,0.4)' }} />
                ))}
              </div>
            </div>
          </div>
          {/* END Machine */}

          {/* ═══════════════════════════════
              SOAP BUBBLE CLOUD
          ═══════════════════════════════ */}

          {/* Small / empty decorative bubbles */}
          {SMALL_BUBBLES.map((b, i) => (
            <motion.div
              key={`sb-${i}`}
              className="absolute rounded-full pointer-events-none"
              style={{
                left: `${b.left}%`,
                top: `${b.top}%`,
                width: b.size,
                height: b.size,
                ...bubbleStyle,
              }}
              animate={{ y: [-10, 10, -10] }}
              transition={{ repeat: Infinity, repeatType: 'mirror', duration: b.dur, delay: b.delay, ease: 'easeInOut' }}
            >
              {/* Glare dot */}
              <div style={{ position:'absolute', top:'14%', left:'16%', width:'22%', height:'22%', background:'rgba(255,255,255,0.75)', borderRadius:'50%', filter:'blur(2px)' }} />
            </motion.div>
          ))}

          {/* Large brand logo bubbles */}
          {BRAND_BUBBLES.map((b, i) => (
            <motion.div
              key={`bb-${i}`}
              className="absolute rounded-full flex items-center justify-center z-20"
              style={{
                left: `${b.left}%`,
                top: `${b.top}%`,
                width: b.size,
                height: b.size,
                ...bubbleStyle,
                cursor: 'default',
              }}
              animate={{ y: [-14, 14, -14] }}
              transition={{ repeat: Infinity, repeatType: 'mirror', duration: b.dur, delay: b.delay, ease: 'easeInOut' }}
            >
              {/* Glare */}
              <div style={{ position:'absolute', top:'12%', left:'14%', width:'26%', height:'26%', background:'rgba(255,255,255,0.80)', borderRadius:'50%', filter:'blur(3px)', pointerEvents:'none' }} />
              <img
                src={b.logo}
                alt={b.name}
                className="relative z-10 object-contain mix-blend-multiply"
                style={{ width:'65%', height:'65%' }}
                onError={e => { e.target.style.display='none'; e.target.nextSibling.style.display='flex'; }}
              />
              <span
                className="hidden absolute inset-0 items-center justify-center text-[11px] font-extrabold text-[#0b1b36] tracking-wider text-center uppercase leading-tight px-2"
              >
                {b.name}
              </span>
            </motion.div>
          ))}
        </div>

        {/* ── STATS BAR ── */}
        <div className="relative z-30 px-6 lg:px-16 pb-16 -mt-4">
          <div
            className="max-w-[1100px] mx-auto bg-white rounded-[20px] shadow-[0_8px_40px_rgba(0,0,0,0.08)] border border-gray-100"
            style={{ display:'grid', gridTemplateColumns:'repeat(4,1fr)' }}
          >
            {[
              { icon: <Award className="w-9 h-9 text-[#E31E24]" strokeWidth={1.5} />, num:'20+',      sub:'Years of\nIndustry Experience' },
              { icon: <Settings className="w-9 h-9 text-[#E31E24]" strokeWidth={1.5} />, num:'1000+',  sub:'Installations\nCompleted' },
              { icon: <MapPin className="w-9 h-9 text-[#E31E24]" strokeWidth={1.5} />,   num:'Pan India', sub:'Presence' },
              { icon: <Handshake className="w-9 h-9 text-[#E31E24]" strokeWidth={1.5} />, num:'Trusted by', sub:'Leading Brands' },
            ].map((s, i) => (
              <div
                key={i}
                className="flex flex-col sm:flex-row items-center gap-4 px-6 py-8"
                style={{ borderRight: i < 3 ? '1px solid #e5e7eb' : 'none' }}
              >
                {s.icon}
                <div className="text-center sm:text-left">
                  <div className="text-2xl font-extrabold text-gray-900 leading-tight">{s.num}</div>
                  <div className="text-xs text-gray-500 font-medium leading-snug mt-0.5 whitespace-pre-line">{s.sub}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
