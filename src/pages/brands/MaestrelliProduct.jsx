import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

import energyCompactImg from '../../assets/brands/maestrelli/energy-compact.png';
import dreamCleanImg from '../../assets/brands/maestrelli/dream-clean.png';

import energyCompactSpecs from '../../assets/brands/maestrelli/energy-compact-specs.jpg';
import dreamCleanSpecs from '../../assets/brands/maestrelli/dream-clean-specs.jpg';

const PRODUCT_DATA = {
  'energy-compact': {
    title: 'ENERGY-COMPACT-PERC-dry-Cleaning',
    img: energyCompactImg,
    specImg: energyCompactSpecs,
    subtitle: 'High Efficiency 2 Tanks Dry-Cleaning System',
    description: `The ENERGY line was named and developed taking into high consideration the "energy saving" issue. Energy COMPACT series are a slim version with 2 tanks and 1 filter.`,
    features: [
      'Advanced 2-tank system for maximum efficiency',
      'Integrated high-efficiency solvent distiller',
      'Slim, space-saving design perfect for compact facilities',
      'Optimized for superior PERC dry-cleaning performance',
      'Heavy-duty Italian engineering and construction'
    ],
    sections: [
      {
        title: 'HIGH EFFICIENCY SOLVENT DISTILLER',
        content: 'Machine Learning is a subset of AI that focuses on developing algorithms and models that allow computers to learn from data and improve their performance over time. It plays a crucial role in enabling AI systems to recognize patterns, make predictions, and adapt to new information.'
      },
      {
        title: 'FREQUENCY INVERTER ON MAIN MOTOR',
        content: 'The adoption, as standard, of the frequency inverter, made in Japan by OMRON, on the drum motor allows for use of a motor with lower power and hence electric consumption. It also allows for slightly faster and more efficient high-speed spinning (extraction) and so for faster drying which means less electric consumption.'
      },
      {
        title: 'COPELAND - SCROLL TECHNOLOGY - REFRIGERATION COMPRESSOR',
        content: 'Also, in the are the adoption of the Copeland compressor using the "Scroll" technology high efficiency permits to mount a compressor of slightly smaller power that uses less electricity. The SCROLL TECHNOLOGY also assures the lowest noise emission levels and the longest durability due to its smooth operation.'
      },
      {
        title: 'WATER SAVINGS',
        content: 'Maestrelli is the only manufacturer who mounts 3 Danfoss water saving valves on the machine. With the adoption of two Danfoss valves on the refrigeration circuit the water consumption is reduced to the minimum necessary. The third Danfoss, mounted on the still condenser is not standard of some of the competing machines.'
      },
      {
        title: 'HIGH QUALITY COMPONENTS',
        content: 'All contactors and thermal overloads mounted on our machines are made by the German manufacturer SIEMENS. All the cables are singularly numbered for easy recognition of the wiring schematic.'
      },
      {
        title: 'ACCESSIBILITY',
        content: 'The design of the machine keeps all its vital components at reach for easy maintenance and hence low total cost of ownership. Interventions such as heat exchangers cleaning can be performed without any loss of refrigeration gas thanks to the self-locking euro-quip joints on the refrigeration circuit. The refrigeration compressor, not directly attached to the heat exchangers makes it easy to remove them for the extraordinary cleaning (suggested every 3 years).'
      },
      {
        title: 'CUSTOM MADE COMPUTER',
        content: 'Easily programmable computer capable of storing 25 programs (many already made by from the factory) covering all the possible needs of the operator. Maintenance programs included (filters cleaning, good morning cycle). Manual override, self-test, large display, black-out protection. Graphical check-panel shows in what part of the machine an alarm might have occurred.'
      },
      {
        title: 'FULLY CUSTOMIZABLE MACHINE',
        content: 'The Energy line is suitable for each country regulation compliance, from the most simple version to the most restrictive regulations; with more than 15 available options, like de-colourising cartridge filter, safety trough, active carbon eco-booster, automatic drying control, double water separator, built-in air compressor, suction fan at door opening, solvent cooling, soap dosing pump, still drying, still sludge sealed discharge, spray Matic, micro and door interlocks, etc.'
      }
    ]
  },
  'dream-clean': {
    title: 'DREAM CLEAN -MULTOSOLVENT-SOFT-MOUNT',
    img: dreamCleanImg,
    specImg: dreamCleanSpecs,
    subtitle: 'Multi-Solvent Soft-Mount Washing Technology',
    description: `Maestrelli exploits again its experience innovating the sector with the DREAMCLEAN series, multi-solvent machines capable of using all new-generation solvents, from the isoparaffin to the silicone ones. The range consists of machines with still (HS & RS series) or without still (H & R series), hard-mounted (R & RS) or soft-mounted (H & HS), compact-sized (H & R) or large-sized (HS & RS) with load capacities from 11 to 45 Kg.`,
    features: [
      'The machine is equipped with 24 high technology instruments for control/safety and of 10 alarms for signalling any anomaly.',
      'Self-drying button trap.',
      'Modular construction with possibility of having Twin configurations (2 washing units sharing the same still).',
      'Integrated solvent cooling system.',
      'Stainless steel, self-cleaning still.'
    ],
    sections: [
      {
        title: 'SAFETY FEATURES',
        content: 'Our machines use the vacuum technique to avoid any flammability problem. The flash point of the air-solvent vapours mix in the machine, is brought to levels as high to assure that the critical level will never be reached. Two different levels of vacuum are set for the washing drum and the distillation unit. They are controlled through double circuit pressure controls that automatically put the machine under security in case of malfunctioning.'
      },
      {
        title: 'CYCLE TIME',
        content: 'One of the key factors for hydrocarbon machines is to be able to complete a washing-drying cycle within times comparable to those of the Perc machines. Thanks to an optimized design of the air flow, inside the machine, during the drying phase, the overall cycle time of our DREAMCLEAN series is only 10-15% longer than that of a normal Perc machine.'
      },
      {
        title: 'SPECIAL WATER SEPARATOR WITH DECANTER',
        content: 'The water separator, in Hydrocarbon machines, can also become a particularly critical area due to the possible development of bacteria. If this happens the result would be the production of bad smelling substances that inevitably spread all over the machine and remain inevitably on the washed garments. This is avoided with our multiple treatment and purification systems of the solvent. The large volume separator assures better separation, through gravity, of the solvent from the water overcoming all the problems due to the different specific weight of hydrocarbon solvents if compared with Perc.'
      },
      {
        title: 'LOW RUNNING COSTS',
        content: 'We reduced to minimal levels the consumption of energy, water and solvent during the drying and distillation phases. The adoption of an electronic inverter on the main motor allows for progressive variation of rotation speed of the drum.'
      },
      {
        title: 'SPECIAL FEATURES',
        content: 'The machine is equipped with 24 high technology instruments for control/safety and of 10 alarms for signalling any anomaly. Self-drying button trap. Modular construction with possibility of having Twin configurations (2 washing units sharing the same still). Integrated solvent cooling system. Stainless steel, self-cleaning still.'
      }
    ]
  }
};

export default function MaestrelliProduct() {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    if (PRODUCT_DATA[productId]) {
      setProduct(PRODUCT_DATA[productId]);
    }
  }, [productId]);

  if (!product) {
    return (
      <div className="w-full min-h-screen bg-[#F8F9FA] flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Product Not Found</h2>
          <Link to="/brands/maestrelli" className="text-[#CC141A] hover:underline flex items-center justify-center gap-2">
            <ArrowLeft className="w-4 h-4" /> Back to Maestrelli
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen bg-[#F8F9FA] font-sans text-slate-800">
      <Navbar />

      <div className="pt-32 pb-24 px-8 lg:px-16 max-w-7xl mx-auto">
        <Link to="/brands/maestrelli" className="inline-flex items-center gap-2 text-slate-500 hover:text-[#CC141A] transition-colors group mb-12">
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span className="text-xs font-bold tracking-[0.2em] uppercase">Back to Maestrelli</span>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.6 }}
            className="bg-white rounded-xl shadow-xl overflow-hidden p-8 flex items-center justify-center aspect-square border border-slate-100"
          >
            <img src={product.img} alt={product.title} className="w-full h-full object-contain mix-blend-multiply" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-[#CC141A] text-[10px] font-bold tracking-[0.2em] uppercase mb-4">PRODUCT DETAILS</h4>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 tracking-tight leading-tight">
              {product.title}
            </h1>
            <h2 className="text-xl text-slate-500 font-medium mb-8">
              {product.subtitle}
            </h2>
            
            <p className="text-slate-600 text-base leading-relaxed mb-10">
              {product.description}
            </p>

            <div className="mb-12">
              <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-6">Key Features & Capabilities</h3>
              <ul className="space-y-4">
                {product.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#CC141A] shrink-0 mt-0.5" />
                    <span className="text-slate-600 leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-8 border-t border-slate-200">
              <Link to="/contact">
                <button className="bg-[#CC141A] hover:bg-red-700 text-white px-8 py-4 text-xs font-bold tracking-widest uppercase transition-colors duration-300 shadow-lg shadow-red-500/20 rounded-sm w-full md:w-auto">
                  Request a Quote
                </button>
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Detailed Sections */}
        {product.sections && product.sections.length > 0 && (
          <div className="mt-24 pt-16 border-t border-slate-200">
            <h2 className="text-2xl font-bold text-slate-900 mb-12 text-center tracking-tight">
              Advanced Technology & Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
              {product.sections.map((section, idx) => (
                <div key={idx} className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                  <h3 className="text-[#CC141A] text-sm font-bold tracking-wider mb-4 border-b border-red-100 pb-4">
                    {section.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {section.content}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Technical Specifications */}
        {product.specImg && (
          <div className="mt-24 pt-16 border-t border-slate-200">
            <h2 className="text-2xl font-bold text-slate-900 mb-12 text-center tracking-tight">
              Technical Specifications
            </h2>
            <div className="bg-white rounded-xl shadow-md border border-slate-100 overflow-hidden flex justify-center">
              <img src={product.specImg} alt="Technical Specifications" className="w-full max-w-4xl object-contain mix-blend-multiply p-4" />
            </div>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}
