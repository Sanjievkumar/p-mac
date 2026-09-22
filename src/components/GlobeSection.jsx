import React from 'react';
import { motion } from 'framer-motion';

import kannegiesserBuilding from '../assets/brands/kannegiesser/kannegiesser_actual_factory.jpg';
import sealionBuilding from '../assets/brands/sealion-real-factory.jpg';
import maestrelliBuilding from '../assets/brands/maestrelli_building.png';
import maxipressBuilding from '../assets/brands/maxipress/maxi_building_1780728119159.png';
import imesaBuilding from '../assets/industrial-laundry-factory.jpg'; // Using a placeholder until real is provided

const FACTORIES = [
  { id: 'kannegiesser', name: 'KANNEGIESSER', country: 'Germany', img: kannegiesserBuilding },
  { id: 'sealion', name: 'SEA-LION', country: 'China', img: sealionBuilding },
  { id: 'imesa', name: 'IMESA', country: 'Italy', img: imesaBuilding },
  { id: 'maestrelli', name: 'MAESTRELLI', country: 'Italy', img: maestrelliBuilding },
  { id: 'maxipress', name: 'MAXIPRESS', country: 'Spain', img: maxipressBuilding },
];

export default function GlobeSection() {
  return (
    <section className="relative w-full bg-[#000814] pt-24 pb-32 overflow-hidden flex flex-col">
      {/* Decorative Grid Background */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)', backgroundSize: '48px 48px' }} />

      {/* Section header */}
      <div className="max-w-[1200px] mx-auto px-6 mb-16 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-3 mb-5"
        >
          <div className="w-8 h-[1px] bg-[#E31E24]" />
          <p className="text-[#E31E24] text-[10px] font-bold tracking-[0.4em] uppercase">
            Global Facilities
          </p>
          <div className="w-8 h-[1px] bg-[#E31E24]" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-5"
        >
          Partners Across the Globe.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.25 }}
          className="text-slate-400 text-[15px] max-w-xl mx-auto leading-relaxed"
        >
          Promac bridges Indian industry with the world's finest laundry technology manufacturers — from China to Germany, Italy to Spain.
        </motion.p>
      </div>

      {/* Horizontal Gallery */}
      <div className="w-full relative z-10 px-6 md:px-12 mx-auto max-w-[1600px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-6">
          {FACTORIES.map((factory, idx) => (
            <motion.div
              key={factory.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 + 0.2, duration: 0.6 }}
              className="group relative h-[300px] lg:h-[420px] rounded-2xl overflow-hidden cursor-pointer"
            >
              {/* Image */}
              <img 
                src={factory.img} 
                alt={`${factory.name} Factory in ${factory.country}`} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
              
              {/* Text Content */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-2 h-2 rounded-full bg-[#E31E24]" />
                    <span className="text-white/80 text-[10px] font-bold tracking-widest uppercase">
                      {factory.country}
                    </span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-black text-white tracking-tight">
                    {factory.name}
                  </h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
