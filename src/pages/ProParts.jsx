import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Wrench, PackageCheck, Settings } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function ProParts() {
  return (
    <div className="w-full min-h-screen bg-white font-sans text-slate-800">
      <Navbar />

      {/* Hero Section */}
      <section className="relative w-full pt-40 pb-20 bg-gradient-to-br from-[#0B4F8A] to-[#042848] flex items-center justify-center overflow-hidden">
        {/* Abstract animated background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.05)_0%,transparent_50%)]" />
          <div className="absolute top-1/4 -right-20 w-96 h-96 bg-[#E31E24]/20 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 text-center px-8 max-w-4xl mx-auto">
          <motion.h4 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-[#E31E24] font-bold tracking-[0.25em] text-sm md:text-base uppercase mb-4"
          >
            Genuine Spare Parts
          </motion.h4>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight leading-[1.1]"
          >
            PRO-PARTS<span className="text-[#E31E24]">.</span>
          </motion.h1>
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="w-24 h-1 bg-[#E31E24] mx-auto rounded-full mb-8"
          />
        </div>
      </section>


      {/* About Section */}
      <section className="relative w-full py-24 bg-[#FAFAFA] border-b border-slate-100 overflow-hidden">
        {/* Subtle grid background */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.03] animate-grid"
          style={{
            backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)',
            backgroundSize: '32px 32px',
          }}
          aria-hidden="true"
        />

        <div className="max-w-4xl mx-auto px-8 lg:px-16 relative z-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-10 leading-tight">
            Your Premier Destination for <br className="hidden md:block"/>
            <span className="text-[#0B4F8A]">Genuine Spare Parts.</span>
          </h2>
          
          <div className="text-slate-600 font-medium text-base md:text-lg leading-relaxed space-y-6 text-justify">
            <p>
              <span className="text-[#E31E24] font-bold">PRO-PARTS</span>, a division of Promac Technologies Pvt Ltd, is your premier destination for genuine spare parts tailored specifically for the hotel and commercial laundry sectors in India. With a legacy rooted in over a decade of expertise in the industry, Promac Technologies has established itself as a leader in supplying high-quality laundry machines and equipment. Recognizing the critical need for reliable components that enhance operational efficiency, PRO-PARTS was founded to address the demands of businesses seeking authentic spare parts for their commercial kitchen and laundry equipment.
            </p>
            <p>
              Our mission is to be the trusted partner for hotels and commercial laundries, offering a comprehensive range of authentic spare parts that enhance performance and reliability. At PRO-PARTS, we pride ourselves on our commitment to excellence, ensuring that every product meets rigorous standards for quality and performance.
            </p>
            <p>
              By leveraging Promac's extensive network and experience, we deliver timely and efficient solutions tailored to our clients' needs. Our customer-centric approach ensures that we not only meet but exceed expectations, positioning PRO-PARTS as the go-to source for all your spare parts requirements.
            </p>
            <p>
              In our pursuit of excellence, we continually strive to innovate and expand our offerings, ensuring that we remain at the forefront of the industry. With PRO-PARTS, you can trust that you are partnering with a reliable source committed to enhancing your operational capabilities through quality, integrity, and dedicated service.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Section */}

      <section className="relative w-full py-24 bg-white">
        <div className="max-w-5xl mx-auto px-8 lg:px-16 text-center">
          
          <div className="relative mb-20 p-8 md:p-12 bg-[#FAFAFA] rounded-3xl border border-slate-100 shadow-sm">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 leading-tight">
              It is more than just a spare part.<br/>
              <span className="text-[#0B4F8A]">It's all about keeping it real.</span>
            </h2>
            <div className="max-w-3xl mx-auto text-slate-600 font-medium text-lg md:text-xl leading-relaxed space-y-6">
              <p>
                Genuine OEM components are guaranteed to meet or exceed the manufacturer's specifications, ensuring safety, dependability, efficiency, and warranty protection. 
              </p>
              <p className="text-[#E31E24] font-bold">
                It's a wise decision for both your equipment and your business.
              </p>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: ShieldCheck, title: "Warranty Protection", desc: "Maintain your manufacturer warranty with approved parts." },
              { icon: Wrench, title: "Safety Assured", desc: "Tested and guaranteed to meet rigorous safety specifications." },
              { icon: PackageCheck, title: "Dependability", desc: "Exact fit components for reliable, long-term operation." },
              { icon: Settings, title: "Peak Efficiency", desc: "Keep your machines running at their optimal performance." }
            ].map((feature, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="flex flex-col items-center text-center p-6"
              >
                <div className="w-16 h-16 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center mb-6 shadow-sm">
                  <feature.icon className="w-8 h-8 text-[#E31E24] stroke-[1.5]" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{feature.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-20 bg-slate-50 border-t border-slate-100 text-center">
        <div className="max-w-2xl mx-auto px-8">
          <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">Need a specific part?</h3>
          <p className="text-slate-600 mb-8">Our expert technicians can help you identify and source the exact OEM component for your machine.</p>
          <a href="/contact" className="inline-block bg-[#E31E24] text-white font-bold py-4 px-10 rounded-full hover:bg-[#C1181F] transition-all hover:shadow-lg hover:-translate-y-1">
            Contact Support
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
