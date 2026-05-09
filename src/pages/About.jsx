import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Award, Settings, MapPin, Handshake } from 'lucide-react';

// Brand bubbles – large, contain logos, scattered across full scene
const BRAND_BUBBLES = [
  { name: 'SEA-LION',     logo: '/Brands/sea-lion brand/sea-lion-logo.png',         l: 27, t: 10, s: 138, dur: 5.5, delay: 0   },
  { name: 'KANNEGIESSER', logo: '/Brands/Kannegiesser brand/Kannegiesser_Logo.png', l: 56, t: 5,  s: 158, dur: 6.5, delay: 0.9 },
  { name: 'MAESTRELLI',   logo: '/Brands/MAESTRELLI brand/Maestrelli_Logo.png',     l: 74, t: 36, s: 144, dur: 7.0, delay: 1.7 },
  { name: 'MAXIPRESS',    logo: '/Brands/maxipress brand/Maxipress_Logo.png',        l: 47, t: 50, s: 126, dur: 5.2, delay: 2.5 },
];

// Small decorative soap bubbles – scattered from machine outward across entire width
const DECO_BUBBLES = [
  { l:24, t:54, s:64,  dur:4.8, delay:0.0 },
  { l:32, t:28, s:82,  dur:5.2, delay:1.1 },
  { l:40, t:68, s:46,  dur:6.1, delay:0.4 },
  { l:50, t:22, s:74,  dur:5.9, delay:1.9 },
  { l:62, t:62, s:54,  dur:4.5, delay:0.2 },
  { l:68, t:14, s:92,  dur:6.6, delay:2.3 },
  { l:80, t:12, s:66,  dur:5.3, delay:0.6 },
  { l:85, t:50, s:50,  dur:4.9, delay:1.5 },
  { l:89, t:70, s:42,  dur:7.1, delay:0.1 },
  { l:37, t:48, s:34,  dur:3.9, delay:3.2 },
  { l:55, t:76, s:44,  dur:4.2, delay:2.0 },
  { l:77, t:80, s:60,  dur:5.7, delay:1.2 },
  { l:92, t:32, s:48,  dur:6.3, delay:0.5 },
  { l:25, t:78, s:36,  dur:4.0, delay:2.8 },
  { l:65, t:85, s:58,  dur:5.8, delay:1.4 },
  { l:44, t:38, s:38,  dur:4.4, delay:0.8 },
  { l:58, t:44, s:28,  dur:3.6, delay:3.5 },
  { l:73, t:58, s:34,  dur:4.6, delay:1.0 },
];

const soap = (extra = {}) => ({
  background: 'radial-gradient(circle at 30% 28%, rgba(255,255,255,0.65) 0%, rgba(220,240,255,0.12) 45%, rgba(190,220,255,0.04) 100%)',
  border: '1.5px solid rgba(255,255,255,0.60)',
  boxShadow: [
    'inset  5px  5px 14px rgba(255,255,255,0.55)',
    'inset -5px -5px 16px rgba(120,180,255,0.28)',
    'inset  0    0   22px rgba(255,120,200,0.12)',
    '0  8px 28px rgba(0,0,0,0.06)',
  ].join(', '),
  backdropFilter: 'blur(5px)',
  borderRadius: '50%',
  position: 'absolute',
  ...extra,
});

export default function About() {
  return (
    <div className="w-full min-h-screen bg-white font-sans flex flex-col">
      <Navbar />

      {/* ── SECTION 1: HERO + GLASS CONSOLE ── */}
      <section className="relative w-full pt-32 pb-10 px-6 lg:px-12 flex flex-col items-center overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#e31e24] rounded-full blur-[160px] opacity-[0.04] pointer-events-none" />
        <div className="max-w-[1000px] w-full text-center mb-16 pt-10">
          <motion.h1 initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:0.6}}
            className="text-4xl md:text-5xl lg:text-[56px] font-extrabold text-[#0b1b36] tracking-tighter mb-6 font-display uppercase leading-[1.1]">
            BEYOND EQUIPMENT.<br/>
            <span className="text-[#e31e24]">DEFINING FUTURE EFFICIENCY.</span>
          </motion.h1>
          <motion.p initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:0.6,delay:0.2}}
            className="text-xl md:text-2xl text-slate-500 font-serif font-medium italic">
            One Partner. Every Aspect. Complete Confidence.
          </motion.p>
        </div>

        {/* Glass Console */}
        <motion.div initial={{opacity:0,y:50}} whileInView={{opacity:1,y:0}} viewport={{once:true}}
          transition={{duration:0.8,ease:'easeOut',delay:0.4}}
          className="relative max-w-[1000px] w-full rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.15)] mb-20">
          <div className="absolute inset-[-50%] z-0 animate-[spin_4s_linear_infinite] opacity-70">
            <div className="w-full h-full bg-[conic-gradient(from_90deg_at_50%_50%,#0f172a_0%,#0f172a_70%,#e31e24_100%)]" />
          </div>
          <div className="relative z-10 m-[2px] bg-slate-900/80 backdrop-blur-xl rounded-[14px] p-8 md:p-14 border border-white/5 flex flex-col items-center gap-6">
            <div className="absolute top-4 left-4 w-4 h-4 border-t-2 border-l-2 border-[#e31e24]/60" />
            <div className="absolute top-4 right-4 w-4 h-4 border-t-2 border-r-2 border-[#e31e24]/60" />
            <div className="absolute bottom-4 left-4 w-4 h-4 border-b-2 border-l-2 border-[#e31e24]/60" />
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

      {/* ═══════════════════════════════════════════════════════════
          SECTION 2 — "TRUSTED BY LEADING BRANDS"
          Exact pixel-faithful replica of the reference design
      ════════════════════════════════════════════════════════════ */}
      <section style={{
        background: 'linear-gradient(155deg,#e8f4ff 0%,#f4f9ff 35%,#ffffff 65%,#f0f7ff 100%)',
        position:'relative', overflow:'hidden', paddingBottom: 0,
      }}>
        {/* Ambient blue blobs matching reference */}
        <div style={{position:'absolute',top:'-15%',left:'-10%',width:500,height:500,background:'#c8e3f8',borderRadius:'50%',filter:'blur(120px)',opacity:0.55,pointerEvents:'none'}} />
        <div style={{position:'absolute',bottom:'10%',right:'-5%',width:350,height:350,background:'#d0eaff',borderRadius:'50%',filter:'blur(100px)',opacity:0.4,pointerEvents:'none'}} />

        {/* ── Header ── */}
        <div style={{position:'relative',zIndex:20,paddingTop:56,paddingBottom:16,textAlign:'center'}}>
          <p style={{color:'#E31E24',fontSize:11,fontWeight:700,letterSpacing:'0.22em',textTransform:'uppercase',marginBottom:10}}>OUR CLIENTS</p>
          <h2 style={{fontSize:'clamp(32px,4vw,48px)',fontWeight:800,color:'#111',lineHeight:1.15,marginBottom:16}}>
            Trusted by Leading Brands
          </h2>
          <p style={{color:'#6b7280',fontSize:15,maxWidth:430,margin:'0 auto',lineHeight:1.7}}>
            Proud to be the laundry technology partner<br/>for India's most respected brands and institutions.
          </p>
        </div>

        {/* ── Scene: Machine + Bubble Cloud ── */}
        <div style={{position:'relative',width:'100%',height:620,overflow:'hidden'}}>

          {/* ─────────────────────────────────────
              PURE CSS INDUSTRIAL WASHING MACHINE
              Left-anchored, bottom of scene
          ───────────────────────────────────── */}
          <div style={{position:'absolute',bottom:0,left:0,zIndex:25,width:400,height:540}}>

            {/* Machine body */}
            <div style={{
              position:'absolute',bottom:0,left:0,width:360,height:520,
              borderRadius:'12px 12px 4px 4px',
              background:'linear-gradient(175deg,#d4dbe4 0%,#eef2f6 20%,#c8d2dc 45%,#dde4ec 65%,#b8c4cf 100%)',
              boxShadow:'8px 0 24px rgba(0,0,0,0.16),inset 2px 0 8px rgba(255,255,255,0.6),inset -2px 0 6px rgba(0,0,0,0.12)',
            }}>
              {/* Brushed metal horizontal lines */}
              {Array.from({length:28}).map((_,i)=>(
                <div key={i} style={{position:'absolute',left:0,right:0,top:16+i*18,height:1,background:'rgba(255,255,255,0.22)'}} />
              ))}

              {/* ── TOP CONTROL PANEL ── */}
              <div style={{
                position:'absolute',top:0,left:0,right:0,height:116,
                borderRadius:'12px 12px 0 0',
                background:'linear-gradient(180deg,#1b2230 0%,#232b38 100%)',
                borderBottom:'3px solid #0e1520',
                boxShadow:'inset 0 -6px 12px rgba(0,0,0,0.45)',
                padding:'12px 20px',display:'flex',flexDirection:'column',gap:8,justifyContent:'center',
              }}>
                {/* Row 1: Brand + lights */}
                <div style={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
                  <div style={{display:'flex',alignItems:'center',gap:7}}>
                    <div style={{width:15,height:15,borderRadius:'50%',background:'#E31E24',boxShadow:'0 0 10px #E31E24',border:'2px solid #ff7070'}} />
                    <span style={{color:'#fff',fontWeight:800,fontSize:14,letterSpacing:'0.18em'}}>PROMAC</span>
                  </div>
                  <div style={{display:'flex',gap:7,alignItems:'center'}}>
                    <div style={{width:10,height:10,borderRadius:'50%',background:'#22c55e',boxShadow:'0 0 8px #22c55e'}} />
                    <div style={{width:10,height:10,borderRadius:'50%',background:'#f59e0b',boxShadow:'0 0 6px #f59e0b'}} />
                    <div style={{width:10,height:10,borderRadius:'50%',background:'#3b4555'}} />
                  </div>
                </div>
                {/* Row 2: LCD + knobs + E-stop */}
                <div style={{display:'flex',alignItems:'center',gap:10}}>
                  {/* LCD */}
                  <div style={{
                    flex:1,height:42,background:'linear-gradient(135deg,#7ab8d5,#5a9ab8)',
                    borderRadius:5,border:'2px solid #4a7a99',
                    boxShadow:'inset 0 3px 10px rgba(0,0,0,0.55)',
                    display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',gap:4,padding:'4px 8px',
                  }}>
                    {[...Array(3)].map((_,i)=>(
                      <div key={i} style={{width:'88%',height:2,background:'rgba(255,255,255,0.42)',borderRadius:1}} />
                    ))}
                  </div>
                  {/* Knobs row */}
                  <div style={{display:'flex',gap:5,flexWrap:'wrap',maxWidth:80}}>
                    {['#777','#777','#E31E24','#777','#777','#555','#555','#555'].map((c,i)=>(
                      <div key={i} style={{
                        width:12,height:12,borderRadius:'50%',background:c,
                        boxShadow:c==='#E31E24'?'0 0 6px #E31E24':'0 2px 4px rgba(0,0,0,0.45)',
                        border:'1.5px solid rgba(255,255,255,0.12)',
                      }} />
                    ))}
                  </div>
                  {/* E-Stop */}
                  <div style={{
                    width:36,height:36,borderRadius:'50%',flexShrink:0,
                    background:'radial-gradient(circle at 34% 30%,#ff5555,#b91c1c)',
                    border:'3px solid #7f1d1d',
                    boxShadow:'0 3px 10px rgba(0,0,0,0.5),0 0 12px rgba(200,0,0,0.45)',
                  }} />
                </div>
              </div>

              {/* ── MAIN DOOR RING ── */}
              <div style={{
                position:'absolute',top:138,left:'50%',transform:'translateX(-50%)',
                width:264,height:264,borderRadius:'50%',
                background:'linear-gradient(140deg,#e0e7ef 0%,#aab5c2 38%,#d5dde6 65%,#98a8b8 100%)',
                boxShadow:'0 10px 36px rgba(0,0,0,0.38),inset 0 5px 10px rgba(255,255,255,0.55),inset 0 -4px 8px rgba(0,0,0,0.22)',
                display:'flex',alignItems:'center',justifyContent:'center',
              }}>
                {/* Rubber gasket */}
                <div style={{
                  width:228,height:228,borderRadius:'50%',
                  background:'linear-gradient(135deg,#181e28,#252d3a)',
                  boxShadow:'inset 0 8px 24px rgba(0,0,0,0.95),0 0 0 7px #14181f',
                  display:'flex',alignItems:'center',justifyContent:'center',
                }}>
                  {/* Glass porthole */}
                  <div style={{
                    width:205,height:205,borderRadius:'50%',overflow:'hidden',
                    background:'radial-gradient(circle at 38% 32%,rgba(255,255,255,0.15) 0%,rgba(20,45,90,0.45) 38%,rgba(4,8,18,0.96) 100%)',
                    boxShadow:'inset 0 0 50px rgba(0,0,0,0.92)',
                    position:'relative',
                  }}>
                    {/* Clothes: blue */}
                    <div style={{position:'absolute',bottom:'-8%',left:'-12%',width:'135%',height:'68%',background:'radial-gradient(ellipse,#1d4ed8,#1e3a8a)',borderRadius:'50%',filter:'blur(14px)',opacity:0.88,transform:'rotate(-14deg)'}} />
                    {/* Clothes: red */}
                    <div style={{position:'absolute',bottom:'8%',right:'-8%',width:'82%',height:'58%',background:'radial-gradient(ellipse,#dc2626,#991b1b)',borderRadius:'50%',filter:'blur(12px)',opacity:0.82,transform:'rotate(22deg)'}} />
                    {/* Clothes: white */}
                    <div style={{position:'absolute',top:'22%',left:'18%',width:'54%',height:'42%',background:'radial-gradient(ellipse,rgba(255,255,255,0.45),transparent)',borderRadius:'50%',filter:'blur(9px)',opacity:0.65}} />
                    {/* Primary glass glare */}
                    <div style={{position:'absolute',top:'7%',left:'10%',width:'40%',height:'40%',background:'radial-gradient(circle,rgba(255,255,255,0.45),transparent)',borderRadius:'50%',filter:'blur(4px)'}} />
                    {/* Secondary glare dot */}
                    <div style={{position:'absolute',top:'17%',left:'21%',width:'16%',height:'16%',background:'rgba(255,255,255,0.58)',borderRadius:'50%',filter:'blur(2px)'}} />
                  </div>
                </div>
              </div>

              {/* Door handle */}
              <div style={{position:'absolute',top:248,left:4,width:20,height:32,background:'linear-gradient(180deg,#c0ccd8,#7a8da0)',borderRadius:'4px 0 0 4px',boxShadow:'-2px 3px 8px rgba(0,0,0,0.42)',border:'1px solid rgba(255,255,255,0.28)'}} />

              {/* Bottom footer stripe */}
              <div style={{
                position:'absolute',bottom:0,left:0,right:0,height:56,
                background:'linear-gradient(180deg,#b8c4ce,#a0aeb8)',
                borderRadius:'0 0 4px 4px',
                borderTop:'2px solid #7a8a9a',
                display:'flex',alignItems:'center',justifyContent:'center',gap:14,
              }}>
                {[88,44,88].map((w,i)=>(
                  <div key={i} style={{width:w,height:7,background:'#7a8a9a',borderRadius:4,boxShadow:'inset 0 1px 4px rgba(0,0,0,0.4)'}} />
                ))}
              </div>
            </div>
          </div>
          {/* END Machine */}

          {/* ─────────────────────────────────────
              SOAP BUBBLE CLOUD
              Spans full width – overlaps machine
          ───────────────────────────────────── */}

          {/* Decorative empty bubbles */}
          {DECO_BUBBLES.map((b,i)=>(
            <motion.div key={`d${i}`}
              style={{...soap(), left:`${b.l}%`, top:`${b.t}%`, width:b.s, height:b.s, zIndex:20}}
              animate={{y:[-10,10,-10]}}
              transition={{repeat:Infinity,repeatType:'mirror',duration:b.dur,delay:b.delay,ease:'easeInOut'}}
            >
              <div style={{position:'absolute',top:'13%',left:'15%',width:'22%',height:'22%',background:'rgba(255,255,255,0.78)',borderRadius:'50%',filter:'blur(2px)'}} />
            </motion.div>
          ))}

          {/* Brand logo bubbles */}
          {BRAND_BUBBLES.map((b,i)=>(
            <motion.div key={`b${i}`}
              style={{...soap(), left:`${b.l}%`, top:`${b.t}%`, width:b.s, height:b.s, zIndex:28, display:'flex', alignItems:'center', justifyContent:'center', cursor:'default'}}
              animate={{y:[-14,14,-14]}}
              transition={{repeat:Infinity,repeatType:'mirror',duration:b.dur,delay:b.delay,ease:'easeInOut'}}
            >
              <div style={{position:'absolute',top:'11%',left:'13%',width:'26%',height:'26%',background:'rgba(255,255,255,0.82)',borderRadius:'50%',filter:'blur(3px)',pointerEvents:'none'}} />
              <img src={b.logo} alt={b.name}
                style={{width:'62%',height:'62%',objectFit:'contain',mixBlendMode:'multiply',position:'relative',zIndex:1}}
                onError={e=>{e.target.style.display='none';e.target.nextSibling.style.display='flex';}}
              />
              <span style={{display:'none',position:'absolute',inset:0,alignItems:'center',justifyContent:'center',fontSize:11,fontWeight:800,color:'#0b1b36',letterSpacing:'0.08em',textAlign:'center',textTransform:'uppercase',lineHeight:1.3,padding:'0 16px'}}>
                {b.name}
              </span>
            </motion.div>
          ))}
        </div>
        {/* END Scene */}

        {/* ── STATS BAR ── */}
        <div style={{position:'relative',zIndex:30,padding:'0 40px 56px'}}>
          <div style={{
            maxWidth:1100,margin:'0 auto',background:'#fff',
            borderRadius:20,boxShadow:'0 8px 40px rgba(0,0,0,0.07)',
            border:'1px solid #f0f0f0',
            display:'grid',gridTemplateColumns:'repeat(4,1fr)',
          }}>
            {[
              {icon:<Award  className="text-[#E31E24]" style={{width:38,height:38}} strokeWidth={1.5}/>, n:'20+',        s:'Years of\nIndustry Experience'},
              {icon:<Settings className="text-[#E31E24]" style={{width:38,height:38}} strokeWidth={1.5}/>, n:'1000+',    s:'Installations\nCompleted'},
              {icon:<MapPin  className="text-[#E31E24]" style={{width:38,height:38}} strokeWidth={1.5}/>, n:'Pan India', s:'Presence'},
              {icon:<Handshake className="text-[#E31E24]" style={{width:38,height:38}} strokeWidth={1.5}/>, n:'Trusted by', s:'Leading Brands'},
            ].map((s,i)=>(
              <div key={i} style={{
                display:'flex',flexDirection:'row',alignItems:'center',gap:16,
                padding:'28px 24px',
                borderRight: i<3 ? '1px solid #e5e7eb' : 'none',
              }}>
                {s.icon}
                <div>
                  <div style={{fontSize:24,fontWeight:800,color:'#111',lineHeight:1.2}}>{s.n}</div>
                  <div style={{fontSize:11,color:'#6b7280',fontWeight:500,lineHeight:1.5,marginTop:2,whiteSpace:'pre-line'}}>{s.s}</div>
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
