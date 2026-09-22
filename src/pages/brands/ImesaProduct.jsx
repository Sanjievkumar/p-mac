import React, { useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Cpu } from 'lucide-react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const IMESA_PRODUCTS = {
  "imesa-washing-machines": {
    category: "Washing Machines",
    title: "Washing Machines",
    subtitle: "EVOLINE Series",
    description: "Advanced washing machines with Tap.Tech integration.",
    img: "https://promactech.com/wp-content/uploads/2025/01/Washing-Machine-1024x819.png",
    tabs: {
      overview: {
        introTitle: "EVOLINE WASHING MACHINES",
        introText: "The new EVOLINE washing machines bring advanced Italian engineering to your laundry room. With robust construction and smart technology, they ensure perfect washing results.",
        applicationsTitle: "Smart Wash Technology",
        summaryBlocks: [
          { title: "Tap.Tech Label", text: "Built-in NFC technology communicates with the Laundry for You app to access the washing machine's identification data." },
          { title: "IMConnect Compatible", text: "Full integration with the IMConnect portal for remote management and diagnostics." }
        ]
      },
      benefits: {
        blocks: [
          { title: "Efficiency", text: "Optimized water and energy consumption tailored to each wash load." },
          { title: "Reliability", text: "Heavy-duty construction ensures a long lifespan even in demanding commercial environments." }
        ]
      },
      technologies: {
        blocks: [
          { title: "Advanced Touch Control", text: "Intuitive touch screen interface for easy program selection and customization." }
        ]
      },
      specs: { table: [ { label: "Capacity Range", value: "Up to 32 kg" }, { label: "Connectivity", value: "Wi-Fi & NFC" } ] }
    }
  },
  "imesa-dryers": {
    category: "Tumble Dryers",
    title: "Dryers",
    subtitle: "High Efficiency Drying",
    description: "Commercial tumble dryers designed for speed and fabric care.",
    img: "https://promactech.com/wp-content/uploads/2025/01/Dryers-1024x819.png",
    tabs: {
      overview: {
        introTitle: "IMESA TUMBLE DRYERS",
        introText: "Designed for maximum efficiency, IMESA tumble dryers provide fast drying times while preserving fabric quality.",
        applicationsTitle: "Drying Excellence",
        summaryBlocks: [
          { title: "Optimized Airflow", text: "Ensures uniform drying across the entire load, preventing over-drying and saving energy." },
          { title: "Smart Moisture Control", text: "Automatically stops the cycle when the desired residual moisture level is reached." }
        ]
      },
      benefits: {
        blocks: [
          { title: "Energy Savings", text: "Advanced insulation and heat recovery options minimize energy consumption." },
          { title: "Ergonomic Loading", text: "Large door opening for easy loading and unloading of bulky items." }
        ]
      },
      technologies: {
        blocks: [
          { title: "IMConnect Integration", text: "Monitor drying cycles and energy usage remotely." }
        ]
      },
      specs: { table: [ { label: "Heating Options", value: "Electric, Gas, Steam" }, { label: "Control", value: "Programmable Microprocessor" } ] }
    }
  }
};

export default function ImesaProduct() {
  const { id } = useParams();
  const product = IMESA_PRODUCTS[id];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!product) {
    return <Navigate to="/brands/imesa" replace />;
  }

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-24 pb-12 lg:pt-32 lg:pb-20 overflow-hidden bg-[#00A3E0] border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <Link 
            to="/brands/imesa" 
            className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors mb-12 group font-bold tracking-widest text-xs uppercase"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to IMESA
          </Link>

          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex flex-col"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-[2px] bg-white" />
                <h4 className="text-white text-base md:text-lg font-bold tracking-[0.2em] uppercase">
                  {product.category}
                </h4>
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-extrabold text-white leading-tight mb-4 tracking-tight">
                {product.title}
              </h1>
              <h3 className="text-2xl text-white/80 font-semibold mb-8">
                {product.subtitle}
              </h3>
              
              <p className="text-xl text-white/90 leading-relaxed max-w-2xl font-light">
                {product.description}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="flex flex-col lg:flex-row gap-16">
            
            {/* Main Content */}
            <div className="w-full lg:w-7/12 xl:w-2/3">
              <div className="mb-16">
                <h2 className="text-3xl font-black text-[#001F3F] mb-6">{product.tabs.overview.introTitle}</h2>
                <p className="text-xl text-slate-600 leading-relaxed mb-12">
                  {product.tabs.overview.introText}
                </p>
              </div>

              {/* Summary Blocks */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {product.tabs.overview?.summaryBlocks?.map((block, idx) => (
                  <div key={idx} className="bg-white rounded-3xl p-10 border border-slate-100 shadow-sm">
                    {block.title && <h3 className="text-2xl font-bold text-[#00A3E0] mb-2">{block.title}</h3>}
                    {block.subtitle && <h4 className="text-lg font-bold text-[#001F3F] mb-6">{block.subtitle}</h4>}
                    {block.text && <p className="text-slate-600 leading-relaxed whitespace-pre-line">{block.text}</p>}
                  </div>
                ))}
              </div>

              {/* Benefits */}
              <div className="mt-20">
                <h2 className="text-3xl font-black text-[#001F3F] mb-12 flex items-center gap-4">
                  <div className="w-8 h-8 rounded-full bg-[#00A3E0]/10 flex items-center justify-center">
                    <div className="w-3 h-3 rounded-full bg-[#00A3E0]" />
                  </div>
                  Key Benefits
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
                  {product.tabs.benefits?.blocks?.map((block, idx) => (
                    <div key={idx} className="relative pl-6 border-l-2 border-[#00A3E0]/20 hover:border-[#00A3E0] transition-colors">
                      <h4 className="text-xl font-bold text-[#001F3F] mb-3">{block.title}</h4>
                      {block.subtitle && <h5 className="text-md font-bold text-[#00A3E0] mb-3">{block.subtitle}</h5>}
                      <p className="text-slate-600 leading-relaxed">{block.text}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies */}
              <div className="mt-24 pt-20 border-t border-slate-200">
                <h2 className="text-3xl font-black text-[#001F3F] mb-12 flex items-center gap-4">
                  <div className="w-8 h-8 rounded-full bg-[#00A3E0]/10 flex items-center justify-center">
                    <div className="w-3 h-3 rounded-full bg-[#00A3E0]" />
                  </div>
                  Core Technologies
                </h2>
                <div className="grid grid-cols-1 gap-12">
                  {product.tabs.technologies?.blocks?.map((block, idx) => (
                    <div key={idx} className="bg-white rounded-3xl p-10 border border-slate-100 shadow-sm flex flex-col md:flex-row gap-8 items-start hover:shadow-md transition-shadow">
                      <div className="w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center shrink-0 border border-slate-100">
                        <Cpu className="w-8 h-8 text-[#00A3E0]" />
                      </div>
                      <div>
                        <h4 className="text-2xl font-bold text-[#001F3F] mb-2">{block.title}</h4>
                        {block.subtitle && <h5 className="text-lg font-bold text-[#00A3E0] mb-4">{block.subtitle}</h5>}
                        <p className="text-slate-600 leading-relaxed text-lg">{block.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar Sticky Area */}
            <div className="w-full lg:w-5/12 xl:w-1/3">
              <div className="sticky top-32 space-y-8">
                {/* Product Image Card */}
                <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-xl overflow-hidden group">
                  <div className="aspect-square relative flex items-center justify-center p-8 bg-slate-50/50 rounded-2xl mb-8">
                    <img 
                      src={product.img} 
                      alt={product.title}
                      className="w-full h-full object-contain transform group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                  <button className="w-full bg-[#00A3E0] hover:bg-[#001F3F] text-white py-4 px-6 rounded-xl font-bold tracking-wide transition-colors duration-300 shadow-md">
                    Request Quote
                  </button>
                  <button className="w-full mt-4 bg-slate-50 hover:bg-slate-100 text-[#001F3F] border border-slate-200 py-4 px-6 rounded-xl font-bold tracking-wide transition-colors duration-300">
                    Download Brochure
                  </button>
                </div>

                {/* Technical Specifications */}
                <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
                  <div className="bg-[#001F3F] p-6">
                    <h3 className="text-xl font-bold text-white flex items-center gap-3">
                      Technical Specifications
                    </h3>
                  </div>
                    <div className="p-0 overflow-x-auto w-full">
                      <table className="w-full text-left border-collapse min-w-[400px]">
                        <tbody>
                        {product.tabs.specs?.table?.map((row, idx) => (
                          <tr key={idx} className="border-b border-slate-100 last:border-0 hover:bg-slate-50 transition-colors">
                            <th className="py-6 px-8 text-[#001F3F] font-bold w-1/2 align-top">{row.label}</th>
                            <td className="py-6 px-8 text-slate-600">{row.value}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
