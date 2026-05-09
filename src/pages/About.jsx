import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Award, Settings, MapPin, Handshake } from 'lucide-react';

// 15 logo bubbles using the 4 brand logos repeated + varied sizes
const LOGO_BUBBLES = [
  // Small cluster near machine door
  { logo:'/Brands/sea-lion brand/sea-lion-logo.png',         name:'SEA-LION',     l:20,  t:12,  s:140, dur:5.5, delay:0.0 },
  { logo:'/Brands/maxipress brand/Maxipress_Logo.png',        name:'MAXIPRESS',    l:28,  t:45,  s:108, dur:4.8, delay:1.2 },
  { logo:'/Brands/MAESTRELLI brand/Maestrelli_Logo.png',     name:'MAESTRELLI',   l:30,  t:65,  s:98,  dur:6.0, delay:0.6 },
  // Mid zone
  { logo:'/Brands/Kannegiesser brand/Kannegiesser_Logo.png', name:'KANNEGIESSER', l:40,  t:28,  s:128, dur:5.2, delay:1.8 },
  { logo:'/Brands/sea-lion brand/sea-lion-logo.png',         name:'SEA-LION',     l:42,  t:60,  s:112, dur:6.4, delay:0.4 },
  { logo:'/Brands/maxipress brand/Maxipress_Logo.png',        name:'MAXIPRESS',    l:50,  t:10,  s:152, dur:5.8, delay:2.2 },
  { logo:'/Brands/MAESTRELLI brand/Maestrelli_Logo.png',     name:'MAESTRELLI',   l:52,  t:50,  s:104, dur:4.6, delay:1.0 },
  // Center-right
  { logo:'/Brands/Kannegiesser brand/Kannegiesser_Logo.png', name:'KANNEGIESSER', l:62,  t:18,  s:134, dur:6.2, delay:0.8 },
  { logo:'/Brands/sea-lion brand/sea-lion-logo.png',         name:'SEA-LION',     l:64,  t:58,  s:118, dur:5.0, delay:2.8 },
  { logo:'/Brands/maxipress brand/Maxipress_Logo.png',        name:'MAXIPRESS',    l:68,  t:36,  s:106, dur:7.0, delay:0.2 },
  // Far right
  { logo:'/Brands/MAESTRELLI brand/Maestrelli_Logo.png',     name:'MAESTRELLI',   l:76,  t:8,   s:88,  dur:4.4, delay:1.6 },
  { logo:'/Brands/Kannegiesser brand/Kannegiesser_Logo.png', name:'KANNEGIESSER', l:78,  t:42,  s:142, dur:5.6, delay:3.0 },
  { logo:'/Brands/sea-lion brand/sea-lion-logo.png',         name:'SEA-LION',     l:82,  t:64,  s:96,  dur:6.8, delay:0.5 },
  { logo:'/Brands/maxipress brand/Maxipress_Logo.png',        name:'MAXIPRESS',    l:88,  t:20,  s:116, dur:5.3, delay:2.0 },
  { logo:'/Brands/MAESTRELLI brand/Maestrelli_Logo.png',     name:'MAESTRELLI',   l:90,  t:48,  s:100, dur:6.1, delay:1.3 },
];

// Empty soap bubbles scattered throughout for depth
const EMPTY_BUBBLES = [
  {l:8,  t:10, s:44, dur:4.2, delay:0.3},
  {l:12, t:38, s:58, dur:5.1, delay:1.4},
  {l:15, t:62, s:36, dur:3.8, delay:0.8},
  {l:22, t:28, s:70, dur:5.6, delay:2.1},
  {l:24, t:72, s:48, dur:4.7, delay:0.1},
  {l:36, t:15, s:60, dur:6.0, delay:1.9},
  {l:38, t:75, s:40, dur:4.3, delay:0.7},
  {l:46, t:40, s:52, dur:5.4, delay:2.5},
  {l:55, t:72, s:66, dur:4.9, delay:1.1},
  {l:60, t:4,  s:42, dur:3.6, delay:0.5},
  {l:70, t:70, s:54, dur:5.8, delay:1.7},
  {l:72, t:24, s:46, dur:4.5, delay:0.9},
  {l:84, t:78, s:38, dur:5.2, delay:2.3},
  {l:92, t:6,  s:56, dur:6.3, delay:0.6},
  {l:95, t:60, s:44, dur:4.0, delay:1.5},
];

const BubbleGlassStyle = (size) => ({
  position: 'absolute',
  width: size,
  height: size,
  borderRadius: '50%',
  background: 'rgba(255, 255, 255, 0.10)',
  border: '1px solid rgba(255,255,255,0.30)',
  boxShadow: [
    '0 0 25px rgba(255, 255, 255, 0.50)',
    'inset 0 0 20px rgba(255,255,255,0.15)',
    '0 8px 32px rgba(100,160,220,0.15)',
  ].join(', '),
  backdropFilter: 'blur(10px)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  overflow: 'hidden',
});

export default function About() {
  return (
    <div className="w-full min-h-screen bg-white font-sans flex flex-col">
      <Navbar />

      {/* ── SECTION 1: HERO + GLASS CONSOLE ── */}
      <section className="relative w-full pt-32 pb-10 px-6 lg:px-12 flex flex-col items-center overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#e31e24] rounded-full blur-[160px] opacity-[0.04] pointer-events-none" />
        <div className="max-w-[1000px] w-full text-center mb-14 pt-8">
          <motion.h1 initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:0.6}}
            className="text-4xl md:text-[54px] font-extrabold text-[#0b1b36] tracking-tighter mb-5 uppercase leading-[1.1]">
            BEYOND EQUIPMENT.<br/><span className="text-[#e31e24]">DEFINING FUTURE EFFICIENCY.</span>
          </motion.h1>
          <motion.p initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:0.6,delay:0.2}}
            className="text-xl md:text-2xl text-slate-500 font-serif font-medium italic">
            One Partner. Every Aspect. Complete Confidence.
          </motion.p>
        </div>

        {/* Glass Console */}
        <motion.div initial={{opacity:0,y:50}} whileInView={{opacity:1,y:0}} viewport={{once:true}}
          transition={{duration:0.8,ease:'easeOut',delay:0.4}}
          className="relative max-w-[1000px] w-full rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.14)] mb-20">
          <div className="absolute inset-[-50%] z-0 animate-[spin_4s_linear_infinite] opacity-70">
            <div className="w-full h-full bg-[conic-gradient(from_90deg_at_50%_50%,#0f172a_0%,#0f172a_70%,#e31e24_100%)]" />
          </div>
          <div className="relative z-10 m-[2px] bg-slate-900/80 backdrop-blur-xl rounded-[14px] p-10 border border-white/5 flex flex-col items-center gap-5">
            <div className="absolute top-4 left-4 w-4 h-4 border-t-2 border-l-2 border-[#e31e24]/60" />
            <div className="absolute top-4 right-4 w-4 h-4 border-t-2 border-r-2 border-[#e31e24]/60" />
            <div className="absolute bottom-4 left-4 w-4 h-4 border-b-2 border-l-2 border-[#e31e24]/60" />
            <div className="absolute bottom-4 right-4 w-4 h-4 border-b-2 border-r-2 border-[#e31e24]/60" />
            <p className="text-slate-200 text-lg md:text-[20px] leading-relaxed text-center max-w-[850px]">
              Promac Technologies Pvt Ltd is a leading laundry equipment supplier in India, providing advanced commercial laundry and dry-cleaning machines for hospitality, healthcare, institutional, and industrial laundries. As an experienced industrial laundry solutions provider, we support businesses with reliable equipment, expert guidance, and long-term service support.
            </p>
            <p className="text-slate-200 text-lg md:text-[20px] leading-relaxed text-center max-w-[850px]">
              With decades of hands-on industry experience, we help clients design, install, and operate efficient laundry facilities that deliver consistent performance and operational efficiency.
            </p>
          </div>
        </motion.div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          SECTION 2 — TRUSTED BY LEADING BRANDS
          Pixel-faithful to uploaded reference design
      ══════════════════════════════════════════════════════════════ */}
      <section style={{
        position: 'relative',
        background: 'radial-gradient(ellipse at 60% 40%, #ffffff 0%, #f8fafc 45%, #f1f5f9 100%)',
        overflow: 'hidden',
        paddingBottom: 0,
      }}>
        {/* Soft blue ambient blob — top left, matches reference */}
        <div style={{position:'absolute',top:'-25%',left:'-15%',width:620,height:620,background:'#bcd8f0',borderRadius:'50%',filter:'blur(140px)',opacity:0.48,pointerEvents:'none'}} />
        {/* Very subtle right blob */}
        <div style={{position:'absolute',bottom:'5%',right:'-8%',width:400,height:400,background:'#daeeff',borderRadius:'50%',filter:'blur(110px)',opacity:0.32,pointerEvents:'none'}} />

        {/* ── CENTERED HEADER ── */}
        <div style={{position:'relative',zIndex:20,textAlign:'center',paddingTop:56,paddingBottom:8}}>
          <p style={{color:'#E31E24',fontSize:11,fontWeight:700,letterSpacing:'0.24em',textTransform:'uppercase',marginBottom:10,fontFamily:'sans-serif'}}>
            OUR CLIENTS
          </p>
          <h2 style={{fontSize:'clamp(32px,4vw,50px)',fontWeight:800,color:'#111',lineHeight:1.15,marginBottom:16,fontFamily:'sans-serif'}}>
            Trusted by Leading Brands
          </h2>
          <p style={{color:'#6b7280',fontSize:14,lineHeight:1.8,maxWidth:400,margin:'0 auto',fontFamily:'sans-serif'}}>
            Proud to be the laundry technology partner<br/>for India's most respected brands and institutions.
          </p>
        </div>

        {/* ── MAIN SCENE ── */}
        <div style={{position:'relative',width:'100%',height:620,overflow:'hidden'}}>

          {/* ══ MACHINE IMAGE — left-anchored, cropped off left edge ══ */}
          <div style={{
            position: 'absolute',
            bottom: 0,
            left: -90,
            zIndex: 28,
            height: '100%',
            display: 'flex',
            alignItems: 'flex-end',
          }}>
            <img
              src="/Brands/sea-lion brand/WASHER-EXTRACTOR.png"
              alt="Promac Industrial Washer"
              style={{
                height: '95%',
                width: 'auto',
                objectFit: 'contain',
                objectPosition: 'bottom left',
                filter: 'drop-shadow(24px 0 44px rgba(0,0,0,0.20))',
              }}
            />
            {/* Ground shadow — makes machine look grounded */}
            <div style={{
              position: 'absolute',
              bottom: -10,
              left: '10%',
              width: '75%',
              height: 40,
              background: 'radial-gradient(ellipse, rgba(0,0,0,0.18) 0%, transparent 70%)',
              filter: 'blur(12px)',
              pointerEvents: 'none',
            }} />
          </div>

          {/* ══ EMPTY SOAP BUBBLES — decorative, scattered ══ */}
          {EMPTY_BUBBLES.map((b, i) => (
            <motion.div
              key={`e${i}`}
              style={{
                ...BubbleGlassStyle(b.s),
                left: `${b.l}%`,
                top: `${b.t}%`,
                zIndex: 22,
              }}
              animate={{ y: [0, -18, 0] }}
              transition={{ repeat: Infinity, duration: b.dur, delay: b.delay, ease: 'easeInOut' }}
            >
              {/* Glare dot */}
              <div style={{position:'absolute',top:'13%',left:'15%',width:'22%',height:'22%',background:'rgba(255,255,255,0.82)',borderRadius:'50%',filter:'blur(2px)'}} />
            </motion.div>
          ))}

          {/* ══ LOGO BUBBLES — 15 bubbles with brand logos ══ */}
          {LOGO_BUBBLES.map((b, i) => (
            <motion.div
              key={`l${i}`}
              style={{
                ...BubbleGlassStyle(b.s),
                left: `${b.l}%`,
                top: `${b.t}%`,
                zIndex: 30,
                cursor: 'default',
              }}
              animate={{ y: [0, -20, 0] }}
              transition={{ repeat: Infinity, duration: b.dur, delay: b.delay, ease: 'easeInOut' }}
            >
              {/* Glass glare highlight */}
              <div style={{position:'absolute',top:'10%',left:'12%',width:'26%',height:'26%',background:'rgba(255,255,255,0.86)',borderRadius:'50%',filter:'blur(3px)',pointerEvents:'none',zIndex:2}} />
              {/* Brand Logo */}
              <img
                src={b.logo}
                alt={b.name}
                style={{
                  width: '60%',
                  height: '60%',
                  objectFit: 'contain',
                  mixBlendMode: 'multiply',
                  opacity: 0.8,
                  position: 'relative',
                  zIndex: 1,
                }}
                onError={e => {
                  e.target.style.display = 'none';
                  if (e.target.nextSibling) e.target.nextSibling.style.display = 'flex';
                }}
              />
              {/* Fallback text */}
              <span style={{
                display: 'none', position: 'absolute', inset: 0,
                alignItems: 'center', justifyContent: 'center',
                fontSize: 10, fontWeight: 800, color: '#0b1b36',
                letterSpacing: '0.06em', textAlign: 'center',
                textTransform: 'uppercase', lineHeight: 1.3, padding: '0 12px',
                zIndex: 1,
              }}>
                {b.name}
              </span>
            </motion.div>
          ))}
        </div>
        {/* END SCENE */}

        {/* ══ STATS BAR — floating white card ══ */}
        <div style={{padding: '0 28px 52px', position: 'relative', zIndex: 30}}>
          <div style={{
            maxWidth: 1060,
            margin: '0 auto',
            background: 'rgba(255,255,255,0.90)',
            backdropFilter: 'blur(20px)',
            borderRadius: 28,
            boxShadow: '0 24px 64px rgba(0,0,0,0.12), 0 4px 16px rgba(0,0,0,0.06)',
            border: '1px solid rgba(255,255,255,0.7)',
            display: 'grid',
            gridTemplateColumns: 'repeat(4,1fr)',
          }}>
            {[
              { icon: <Award    strokeWidth={1.5} style={{width:42,height:42,color:'#E31E24',flexShrink:0}} />, n:'20+',       s:'Years of\nIndustry Experience' },
              { icon: <Settings strokeWidth={1.5} style={{width:42,height:42,color:'#E31E24',flexShrink:0}} />, n:'1000+',    s:'Installations\nCompleted' },
              { icon: <MapPin   strokeWidth={1.5} style={{width:42,height:42,color:'#E31E24',flexShrink:0}} />, n:'Pan India', s:'Presence' },
              { icon: <Handshake strokeWidth={1.5} style={{width:42,height:42,color:'#E31E24',flexShrink:0}} />, n:'Trusted by', s:'Leading Brands' },
            ].map((s, i) => (
              <div key={i} style={{
                display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 16,
                padding: '28px 24px',
                borderRight: i < 3 ? '1px solid #e5e7eb' : 'none',
              }}>
                {s.icon}
                <div>
                  <div style={{fontSize:27,fontWeight:800,color:'#111',lineHeight:1.15,fontFamily:'sans-serif'}}>{s.n}</div>
                  <div style={{fontSize:11,color:'#6b7280',fontWeight:500,lineHeight:1.6,marginTop:2,whiteSpace:'pre-line',fontFamily:'sans-serif'}}>{s.s}</div>
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
