import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Award, Settings, MapPin, Handshake } from 'lucide-react';

const BRAND_BUBBLES = [
  { name:'SEA-LION',     logo:'/Brands/sea-lion brand/sea-lion-logo.png',         l:21, t:14, s:148, dur:5.5, delay:0   },
  { name:'KANNEGIESSER', logo:'/Brands/Kannegiesser brand/Kannegiesser_Logo.png', l:54, t:8,  s:162, dur:6.5, delay:0.9 },
  { name:'MAESTRELLI',   logo:'/Brands/MAESTRELLI brand/Maestrelli_Logo.png',     l:73, t:26, s:150, dur:7.0, delay:1.7 },
  { name:'MAXIPRESS',    logo:'/Brands/maxipress brand/Maxipress_Logo.png',       l:41, t:49, s:138, dur:5.2, delay:2.5 },
];

const DECO = [
  {l:8, t:8, s:52},{l:14,t:22,s:38},{l:10,t:48,s:70},{l:18,t:65,s:44},
  {l:28,t:38,s:80},{l:34,t:60,s:56},{l:38,t:25,s:68},{l:46,t:65,s:48},
  {l:50,t:32,s:76},{l:58,t:55,s:62},{l:62,t:13,s:88},{l:65,t:72,s:42},
  {l:70,t:44,s:58},{l:76,t:8, s:66},{l:80,t:62,s:50},{l:84,t:30,s:72},
  {l:88,t:16,s:54},{l:90,t:50,s:46},{l:93,t:72,s:38},{l:95,t:36,s:60},
];

const SOAP = (w,h,extra={}) => ({
  position:'absolute', width:w, height:h||w, borderRadius:'50%',
  background:'radial-gradient(circle at 30% 28%, rgba(255,255,255,0.68) 0%, rgba(220,238,255,0.14) 44%, rgba(190,218,255,0.05) 100%)',
  border:'1.5px solid rgba(255,255,255,0.62)',
  boxShadow:'inset 5px 5px 14px rgba(255,255,255,0.56), inset -5px -5px 18px rgba(120,178,255,0.30), inset 0 0 24px rgba(255,118,196,0.13), 0 8px 28px rgba(0,0,0,0.06)',
  backdropFilter:'blur(4px)',
  ...extra,
});

export default function About() {
  return (
    <div className="w-full min-h-screen bg-white font-sans flex flex-col">
      <Navbar />

      {/* SECTION 1 */}
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
        <motion.div initial={{opacity:0,y:50}} whileInView={{opacity:1,y:0}} viewport={{once:true}}
          transition={{duration:0.8,ease:'easeOut',delay:0.4}}
          className="relative max-w-[1000px] w-full rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.14)] mb-20">
          <div className="absolute inset-[-50%] z-0 animate-[spin_4s_linear_infinite] opacity-70">
            <div className="w-full h-full bg-[conic-gradient(from_90deg_at_50%_50%,#0f172a_0%,#0f172a_70%,#e31e24_100%)]" />
          </div>
          <div className="relative z-10 m-[2px] bg-slate-900/80 backdrop-blur-xl rounded-[14px] p-10 border border-white/5 flex flex-col items-center gap-5">
            {['top-4 left-4 border-t-2 border-l-2','top-4 right-4 border-t-2 border-r-2','bottom-4 left-4 border-b-2 border-l-2','bottom-4 right-4 border-b-2 border-r-2'].map((c,i)=>(
              <div key={i} className={`absolute w-4 h-4 ${c} border-[#e31e24]/60`} />
            ))}
            <p className="text-slate-200 text-lg md:text-[20px] leading-relaxed text-center max-w-[850px]">
              Promac Technologies Pvt Ltd is a leading laundry equipment supplier in India, providing advanced commercial laundry and dry-cleaning machines for hospitality, healthcare, institutional, and industrial laundries. As an experienced industrial laundry solutions provider, we support businesses with reliable equipment, expert guidance, and long-term service support.
            </p>
            <p className="text-slate-200 text-lg md:text-[20px] leading-relaxed text-center max-w-[850px]">
              With decades of hands-on industry experience, we help clients design, install, and operate efficient laundry facilities that deliver consistent performance and operational efficiency.
            </p>
          </div>
        </motion.div>
      </section>

      {/* SECTION 2 — TRUSTED BY LEADING BRANDS */}
      <section style={{position:'relative',overflow:'hidden',background:'linear-gradient(150deg,#e6f2ff 0%,#f2f8ff 25%,#fafcff 55%,#ffffff 100%)'}}>
        {/* Blue ambient blob top-left — from the reference */}
        <div style={{position:'absolute',top:'-20%',left:'-12%',width:580,height:580,background:'#c2dcf5',borderRadius:'50%',filter:'blur(130px)',opacity:0.50,pointerEvents:'none'}} />

        {/* Header — centered */}
        <div style={{position:'relative',zIndex:20,textAlign:'center',paddingTop:52,paddingBottom:12}}>
          <p style={{color:'#E31E24',fontSize:11,fontWeight:700,letterSpacing:'0.22em',textTransform:'uppercase',marginBottom:10}}>OUR CLIENTS</p>
          <h2 style={{fontSize:'clamp(30px,3.8vw,46px)',fontWeight:800,color:'#111',lineHeight:1.15,marginBottom:14}}>Trusted by Leading Brands</h2>
          <p style={{color:'#6b7280',fontSize:14,lineHeight:1.75,maxWidth:400,margin:'0 auto'}}>
            Proud to be the laundry technology partner<br/>for India's most respected brands and institutions.
          </p>
        </div>

        {/* SCENE — fixed height container */}
        <div style={{position:'relative',width:'100%',height:600,overflow:'hidden'}}>

          {/* ═══ MACHINE — left edge, partially cropped ═══ */}
          <div style={{position:'absolute',bottom:0,left:-60,zIndex:26,width:440,height:560}}>
            {/* Outer body */}
            <div style={{
              position:'absolute',bottom:0,left:0,width:'100%',height:'100%',
              borderRadius:'14px 14px 6px 6px',
              background:'linear-gradient(172deg,#cdd6df 0%,#eaeff4 18%,#c0cbd6 42%,#d8e2ea 62%,#b2c0cc 100%)',
              boxShadow:'10px 0 30px rgba(0,0,0,0.18),inset 3px 0 10px rgba(255,255,255,0.55),inset -3px 0 8px rgba(0,0,0,0.14)',
            }}>
              {/* Brushed metal lines */}
              {Array.from({length:30}).map((_,i)=>(
                <div key={i} style={{position:'absolute',left:0,right:0,top:14+i*18,height:1,background:'rgba(255,255,255,0.20)'}} />
              ))}

              {/* TOP CONTROL PANEL */}
              <div style={{
                position:'absolute',top:0,left:0,right:0,height:118,
                borderRadius:'14px 14px 0 0',
                background:'linear-gradient(180deg,#191f2a 0%,#212840 100%)',
                borderBottom:'3px solid #0d1018',
                boxShadow:'inset 0 -6px 14px rgba(0,0,0,0.50)',
                padding:'10px 22px',display:'flex',flexDirection:'column',gap:8,justifyContent:'center',
              }}>
                {/* Brand row */}
                <div style={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
                  <div style={{display:'flex',alignItems:'center',gap:8}}>
                    <div style={{width:16,height:16,borderRadius:'50%',background:'#E31E24',boxShadow:'0 0 12px #E31E24',border:'2px solid #ff8080'}} />
                    <span style={{color:'#fff',fontWeight:800,fontSize:15,letterSpacing:'0.18em',fontFamily:'sans-serif'}}>PROMAC</span>
                  </div>
                  <div style={{display:'flex',gap:6}}>
                    {['#22c55e','#f59e0b','#3b4555'].map((c,i)=>(
                      <div key={i} style={{width:10,height:10,borderRadius:'50%',background:c,boxShadow:i<2?`0 0 8px ${c}`:'none'}} />
                    ))}
                  </div>
                </div>
                {/* Controls row */}
                <div style={{display:'flex',alignItems:'center',gap:10}}>
                  {/* LCD */}
                  <div style={{flex:1,height:44,background:'linear-gradient(135deg,#6daed0,#4a90b0)',borderRadius:5,border:'2px solid #3a7090',boxShadow:'inset 0 3px 12px rgba(0,0,0,0.55)',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',gap:4,padding:'0 8px'}}>
                    {[...Array(3)].map((_,i)=><div key={i} style={{width:'86%',height:2.5,background:'rgba(255,255,255,0.40)',borderRadius:1}} />)}
                  </div>
                  {/* Button grid */}
                  <div style={{display:'grid',gridTemplateColumns:'repeat(4,1fr)',gap:5}}>
                    {['#666','#666','#E31E24','#666','#666','#444','#444','#444'].map((c,i)=>(
                      <div key={i} style={{width:11,height:11,borderRadius:'50%',background:c,boxShadow:c==='#E31E24'?'0 0 6px #E31E24':'0 2px 4px rgba(0,0,0,0.5)',border:'1px solid rgba(255,255,255,0.10)'}} />
                    ))}
                  </div>
                  {/* Yellow caution sticker */}
                  <div style={{width:22,height:30,background:'#f59e0b',borderRadius:3,display:'flex',alignItems:'center',justifyContent:'center',border:'1px solid #b45309'}}>
                    <span style={{fontSize:8,fontWeight:900,color:'#000',lineHeight:1}}>⚠</span>
                  </div>
                  {/* E-Stop */}
                  <div style={{width:38,height:38,borderRadius:'50%',flexShrink:0,background:'radial-gradient(circle at 34% 28%,#ff5555,#b91c1c)',border:'3px solid #7f1d1d',boxShadow:'0 4px 12px rgba(0,0,0,0.55),0 0 14px rgba(200,0,0,0.40)'}} />
                </div>
              </div>

              {/* DOOR FRAME OUTER CHROME RING */}
              <div style={{
                position:'absolute',top:142,left:'50%',transform:'translateX(-50%)',
                width:282,height:282,borderRadius:'50%',
                background:'linear-gradient(138deg,#dce4ee 0%,#a8b6c4 35%,#cfd8e2 60%,#94a6b6 100%)',
                boxShadow:'0 12px 40px rgba(0,0,0,0.42),inset 0 6px 12px rgba(255,255,255,0.58),inset 0 -6px 12px rgba(0,0,0,0.26)',
                display:'flex',alignItems:'center',justifyContent:'center',
              }}>
                {/* Rubber gasket */}
                <div style={{width:244,height:244,borderRadius:'50%',background:'linear-gradient(135deg,#141a22,#222a34)',boxShadow:'inset 0 8px 28px rgba(0,0,0,0.95),0 0 0 8px #101418',display:'flex',alignItems:'center',justifyContent:'center'}}>
                  {/* Glass porthole */}
                  <div style={{width:218,height:218,borderRadius:'50%',overflow:'hidden',background:'radial-gradient(circle at 37% 31%,rgba(255,255,255,0.16) 0%,rgba(18,42,88,0.48) 36%,rgba(3,6,16,0.97) 100%)',boxShadow:'inset 0 0 60px rgba(0,0,0,0.94)',position:'relative'}}>
                    {/* Blue clothes */}
                    <div style={{position:'absolute',bottom:'-10%',left:'-14%',width:'138%',height:'70%',background:'radial-gradient(ellipse,#2563eb,#1e3a8a)',borderRadius:'50%',filter:'blur(16px)',opacity:0.90,transform:'rotate(-13deg)'}} />
                    {/* Red clothes */}
                    <div style={{position:'absolute',bottom:'6%',right:'-10%',width:'85%',height:'60%',background:'radial-gradient(ellipse,#dc2626,#991b1b)',borderRadius:'50%',filter:'blur(13px)',opacity:0.86,transform:'rotate(24deg)'}} />
                    {/* White clothes */}
                    <div style={{position:'absolute',top:'20%',left:'16%',width:'56%',height:'44%',background:'radial-gradient(ellipse,rgba(255,255,255,0.42),transparent)',borderRadius:'50%',filter:'blur(10px)',opacity:0.62}} />
                    {/* Primary glare */}
                    <div style={{position:'absolute',top:'6%',left:'9%',width:'42%',height:'42%',background:'radial-gradient(circle,rgba(255,255,255,0.48),transparent)',borderRadius:'50%',filter:'blur(5px)'}} />
                    {/* Small glare dot */}
                    <div style={{position:'absolute',top:'15%',left:'18%',width:'17%',height:'17%',background:'rgba(255,255,255,0.60)',borderRadius:'50%',filter:'blur(2px)'}} />
                  </div>
                </div>
              </div>

              {/* Handle */}
              <div style={{position:'absolute',top:268,left:2,width:22,height:34,background:'linear-gradient(180deg,#b8c6d2,#7890a4)',borderRadius:'4px 0 0 4px',boxShadow:'-3px 3px 10px rgba(0,0,0,0.44)',border:'1px solid rgba(255,255,255,0.30)'}} />

              {/* Bottom footer */}
              <div style={{position:'absolute',bottom:0,left:0,right:0,height:58,background:'linear-gradient(180deg,#b0bcc8,#98a8b4)',borderRadius:'0 0 6px 6px',borderTop:'2px solid #788898',display:'flex',alignItems:'center',justifyContent:'center',gap:16}}>
                {[90,46,90].map((w,i)=><div key={i} style={{width:w,height:8,background:'#788898',borderRadius:4,boxShadow:'inset 0 1px 4px rgba(0,0,0,0.42)'}} />)}
              </div>
            </div>
          </div>

          {/* ═══ SOAP BUBBLE CLOUD — full width ═══ */}

          {/* Small decorative */}
          {DECO.map((b,i)=>(
            <motion.div key={`d${i}`}
              style={{...SOAP(b.s,b.s,{left:`${b.l}%`,top:`${b.t}%`,zIndex:22})}}
              animate={{y:[-8,8,-8]}}
              transition={{repeat:Infinity,repeatType:'mirror',duration:3+i*0.28,delay:i*0.22,ease:'easeInOut'}}>
              <div style={{position:'absolute',top:'12%',left:'14%',width:'23%',height:'23%',background:'rgba(255,255,255,0.80)',borderRadius:'50%',filter:'blur(2px)'}} />
            </motion.div>
          ))}

          {/* Brand logo bubbles */}
          {BRAND_BUBBLES.map((b,i)=>(
            <motion.div key={`bb${i}`}
              style={{...SOAP(b.s,b.s,{left:`${b.l}%`,top:`${b.t}%`,zIndex:30,display:'flex',alignItems:'center',justifyContent:'center',cursor:'default'})}}
              animate={{y:[-14,14,-14]}}
              transition={{repeat:Infinity,repeatType:'mirror',duration:b.dur,delay:b.delay,ease:'easeInOut'}}>
              <div style={{position:'absolute',top:'10%',left:'12%',width:'27%',height:'27%',background:'rgba(255,255,255,0.84)',borderRadius:'50%',filter:'blur(3px)',pointerEvents:'none'}} />
              <img src={b.logo} alt={b.name} style={{width:'60%',height:'60%',objectFit:'contain',mixBlendMode:'multiply',position:'relative',zIndex:1}}
                onError={e=>{e.target.style.display='none';e.target.nextSibling.style.display='flex';}} />
              <span style={{display:'none',position:'absolute',inset:0,alignItems:'center',justifyContent:'center',fontSize:12,fontWeight:800,color:'#0b1b36',letterSpacing:'0.06em',textAlign:'center',textTransform:'uppercase',lineHeight:1.3,padding:'0 14px'}}>
                {b.name}
              </span>
            </motion.div>
          ))}
        </div>

        {/* STATS BAR */}
        <div style={{padding:'0 32px 52px',position:'relative',zIndex:30}}>
          <div style={{maxWidth:1060,margin:'0 auto',background:'#fff',borderRadius:18,boxShadow:'0 6px 36px rgba(0,0,0,0.07)',border:'1px solid #efefef',display:'grid',gridTemplateColumns:'repeat(4,1fr)'}}>
            {[
              {icon:<Award strokeWidth={1.5} style={{width:40,height:40,color:'#E31E24',flexShrink:0}} />, n:'20+',         s:'Years of\nIndustry Experience'},
              {icon:<Settings strokeWidth={1.5} style={{width:40,height:40,color:'#E31E24',flexShrink:0}} />, n:'1000+',   s:'Installations\nCompleted'},
              {icon:<MapPin strokeWidth={1.5} style={{width:40,height:40,color:'#E31E24',flexShrink:0}} />,   n:'Pan India', s:'Presence'},
              {icon:<Handshake strokeWidth={1.5} style={{width:40,height:40,color:'#E31E24',flexShrink:0}} />, n:'Trusted by', s:'Leading Brands'},
            ].map((s,i)=>(
              <div key={i} style={{display:'flex',flexDirection:'row',alignItems:'center',gap:14,padding:'26px 22px',borderRight:i<3?'1px solid #e5e7eb':'none'}}>
                {s.icon}
                <div>
                  <div style={{fontSize:26,fontWeight:800,color:'#111',lineHeight:1.15}}>{s.n}</div>
                  <div style={{fontSize:11,color:'#6b7280',fontWeight:500,lineHeight:1.55,marginTop:2,whiteSpace:'pre-line'}}>{s.s}</div>
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
