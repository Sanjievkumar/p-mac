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
  'perc-dry-cleaning-machines': {
    title: 'PERC DRY-CLEANING MACHINES',
    img: energyCompactImg,
    subtitle: 'High Efficiency 2 & 3 Tanks Dry-Cleaning Systems',
    description: `MAESTRELLI S.r.l., one of the leading manufacturers in the dry-cleaning industry, with more than 40.000 machines sold all over the world. The ENERGY line was named and developed taking into high consideration the "energy saving" issue. Available in COMPACT series (2 tanks) and PLUS series (3 tanks), featuring a HIGH EFFICIENCY SOLVENT DISTILLER.`,
    features: [
      'Available in 2-tank (Compact) and 3-tank (Plus) configurations',
      'Integrated high-efficiency solvent distiller',
      'Optimized for superior PERC dry-cleaning performance',
      'Heavy-duty Italian engineering and construction',
      'Easily programmable computer capable of storing 25 programs',
      'Graphical check-panel for easy monitoring and alarm indication'
    ],
    categoryProducts: [
      {
        id: 'energy-compact-2-tanks',
        title: 'ENERGY COMPACT – 2 TANKS',
        img: 'https://promactech.com/wp-content/uploads/2024/07/ENERGY-COMPACT-PERC-dry-Cleaning-1024x819.png'
      },
      {
        id: 'energy-plus-3-tanks',
        title: 'ENERGY PLUS – 3 TANKS',
        img: 'https://promactech.com/wp-content/uploads/2024/07/ENERGY-PLUS-1-1024x819.png'
      }
    ],
    sections: []
  },
  'energy-compact-2-tanks': {
    title: 'ENERGY COMPACT – 2 TANKS',
    img: 'https://promactech.com/wp-content/uploads/2024/07/ENERGY-COMPACT-PERC-dry-Cleaning-1024x819.png',
    subtitle: 'High Efficiency 2 Tanks Dry-Cleaning System',
    description: 'The ENERGY line was named and developed taking into high consideration the "energy saving" issue. Energy COMPACT series are a slim version with 2 tanks and 1 filter.',
    features: [
      'HIGH EFFICIENCY SOLVENT DISTILLER: Machine Learning is a subset of AI that focuses on developing algorithms and models that allow computers to learn from data and improve their performance over time. It plays a crucial role in enabling AI systems to recognize patterns, make predictions, and adapt to new information.',
      'FREQUENCY INVERTER ON MAIN MOTOR: The adoption, as standard, of the frequency inverter, made in Japan by OMRON, on the drum motor allows for use of a motor with lower power and hence electric consumption. It also allows for slightly faster and more efficient high-speed spinning (extraction) and so for faster drying which means less electric consumption.',
      'COPELAND - SCROLL TECHNOLOGY: Also, in the are the adoption of the Copeland compressor using the "Scroll" technology high efficiency permits to mount a compressor of slightly smaller power that uses less electricity. The SCROLL TECHNOLOGY also assures the lowest noise emission levels and the longest durability due to its smooth operation.',
      'WATER SAVINGS: Maestrelli is the only manufacturer who mounts 3 Danfoss water saving valves on the machine. With the adoption of two Danfoss valves on the refrigeration circuit the water consumption is reduced to the minimum necessary.',
      'HIGH QUALITY COMPONENTS: All contactors and thermal overloads mounted on our machines are made by the German manufacturer SIEMENS. All the cables are singularly numbered for easy recognition of the wiring schematic.',
      'ACCESSIBILITY: The design of the machine keeps all its vital components at reach for easy maintenance and hence low total cost of ownership. Interventions such as heat exchangers cleaning can be performed without any loss of refrigeration gas.',
      'CUSTOM MADE COMPUTER: Easily programmable computer capable of storing 25 programs (many already made by from the factory) covering all the possible needs of the operator. Maintenance programs included (filters cleaning, good morning cycle).',
      'FULLY CUSTOMIZABLE MACHINE: The Energy line is suitable for each country regulation compliance, from the most simple version to the most restrictive regulations; with more than 15 available options.'
    ],
    sections: [],
    specTables: [
      {
        title: 'TECHNICAL SPECIFICATIONS',
        headers: ['ITEM NAME', 'UNIT', '200C', '250C', '350C', '400C'],
        rows: [
          ['DRUM CAPACITY', 'Kg', '8-10', '10-12', '15-17', '18-20'],
          ['Diameter', 'mm', '700', '725', '850', '900'],
          ['Depth', 'mm', '420', '533', '530', '565'],
          ['Volume', 'Lt', '160', '220', '300', '360'],
          ['Loading Door Diameter', 'mm', '420', '420', '420', '420'],
          ['TANKS', '', '', '', '', ''],
          ['Tank 1', 'Lt', '130', '130', '120', '120'],
          ['Tank 2', 'Lt', '78', '78', '85', '85'],
          ['CAPACITY', '', '', '', '', ''],
          ['Distillator', 'Lt', '105', '105', '105', '105'],
          ['Nylon Filter', 'm2', '2.2', '5.0', '5.0', '5.0'],
          ['MOTORS', '', '', '', '', ''],
          ['Washing & Extraction', 'kW', '1.5', '1.5', '2.2', '2.2'],
          ['Pump', 'kW', '0.55', '0.55', '0.55', '0.55'],
          ['Fan', 'kW', '0.75', '0.75', '0.75', '1.5'],
          ['Refrigerator', 'kW', '2.1', '2.1', '2.6', '2.6'],
          ['Air Compressor', 'kW', '0.35', '0.35', '0.35', '0.35'],
          ['Filter', 'kW', '0.5', '0.5', '0.5', '0.5'],
          ['HEATING ELEMENT', '', '', '', '', ''],
          ['Distillator', 'kW', '6', '6', '6', '6'],
          ['Air Heater', 'kW', '3.3', '3.9', '4.2', '4.8'],
          ['Steam Power', 'kW', '3.4', '3.6', '4.2', '5'],
          ['Electric Power', 'kW', '10', '10', '12', '12'],
          ['PRESSURE', '', '', '', '', ''],
          ['Steam', 'Bar', '4.5', '4.5', '4.5', '4.5'],
          ['Compressed Air', 'Bar', '6', '6', '6', '6'],
          ['Water (Min/Max)', 'Bar', '1.5 / 6', '1.5 / 6', '1.5 / 6', '1.5 / 6'],
          ['CONSUMPTIONS (without distillation)', '', '', '', '', ''],
          ['Water', 'Lt/Cycle', '170', '170', '190', '190'],
          ['Steam', 'Kg/Cycle', '40', '40', '50', '50'],
          ['Electricity', 'kW/Cycle', '6.5', '6.7', '6.9', '7.2'],
          ['DIMENSIONS', '', '', '', '', ''],
          ['Width', 'mm', '1080', '1080', '1080', '1180'],
          ['Depth', 'mm', '2207', '2207', '2207', '2207'],
          ['Height', 'mm', '1890', '1890', '1890', '2060'],
          ['Weight - (empty Machine)', 'Kg', '820', '950', '1000', '1050'],
          ['Weight - (with solvent)', 'Kg', '1150', '1250', '1360', '1430']
        ]
      }
    ]
  },
  'energy-plus-3-tanks': {
    title: 'ENERGY PLUS – 3 TANKS',
    img: 'https://promactech.com/wp-content/uploads/2024/07/ENERGY-PLUS-1-1024x819.png',
    subtitle: 'High Efficiency 3 Tanks Dry-Cleaning System',
    description: 'The ENERGY line was named and developed taking into high consideration the "energy saving" issue. ENERGY PLUS series is a classical wide version with 3 tanks and 1 or 2 filters.',
    features: [
      'V-SHAPED STILL BOTTOM: The particular V shape of the bottom of the still improves the heat convection and the solvent turbulence during the distillation thus shortening the heat up phase and avoiding dirt layers.',
      'EFFICIENT DISTILLATION: Faster and more efficient distillation obviously means shorter time and lower electric consumption to terminate the distillation of equivalent quantities of solvent.',
      'FREQUENCY INVERTER ON MAIN MOTOR: The adoption, as standard, of the frequency inverter, made in Japan by OMRON, on the drum motor allows for use of a motor with lower power and hence electric consumption. It also allows for slightly faster and more efficient high-speed spinning (extraction) and so for faster drying which means less electric consumption.',
      'COPELAND - SCROLL TECHNOLOGY: Also, in the are the adoption of the Copeland compressor using the "Scroll" technology high efficiency permits to mount a compressor of slightly smaller power that uses less electricity. The SCROLL TECHNOLOGY also assures the lowest noise emission levels and the longest durability due to its smooth operation.',
      'WATER SAVINGS: Maestrelli is the only manufacturer who mounts 3 Danfoss water saving valves on the machine. With the adoption of two Danfoss valves on the refrigeration circuit the water consumption is reduced to the minimum necessary.',
      'HIGH QUALITY COMPONENTS: All contactors and thermal overloads mounted on our machines are made by the German manufacturer SIEMENS. All the cables are singularly numbered for easy recognition of the wiring schematic.',
      'ACCESSIBILITY: The design of the machine keeps all its vital components at reach for easy maintenance and hence low total cost of ownership. Interventions such as heat exchangers cleaning can be performed without any loss of refrigeration gas.',
      'FULLY CUSTOMIZABLE MACHINE: The Energy line is suitable for each country regulation compliance, from the most simple version to the most restrictive regulations; with more than 15 available options.'
    ],
    sections: [],
    specTables: [
      {
        title: 'TECHNICAL SPECIFICATIONS',
        headers: ['ITEM NAME', 'UNIT', '200', '250', '350', '400', '450', '550'],
        rows: [
          ['DRUM CAPACITY', 'Kg', '8-10', '10-12', '15-17', '18-20', '20-22', '25-28'],
          ['Diameter', 'mm', '700', '700', '850', '900', '1000', '1060'],
          ['Depth', 'mm', '420', '520', '530', '565', '520', '565'],
          ['Volume', 'Lt', '160', '200', '300', '360', '400', '500'],
          ['Loading Door Diameter', 'mm', '500', '500', '500', '500', '500', '500'],
          ['TANKS', '', '', '', '', '', '', ''],
          ['Tank 1', 'Lt', '105', '115', '115', '145', '145', '175'],
          ['Tank 2', 'Lt', '105', '115', '115', '145', '145', '175'],
          ['Tank 3', 'Lt', '140', '155', '155', '160', '160', '245'],
          ['CAPACITY', '', '', '', '', '', '', ''],
          ['Distillator', 'Lt', '93', '93', '150', '150', '195', '280'],
          ['Nylon Filter', 'm2', '35', '35', '55', '55', '65', '85'],
          ['MOTORS', '', '', '', '', '', '', ''],
          ['Washing & Extraction', 'kW', '1.5', '1.5', '2.2', '2.2', '2.2', '3.5'],
          ['Pump', 'kW', '0.55', '0.55', '0.55', '0.55', '0.75', '1.1'],
          ['Fan', 'kW', '0.75', '0.75', '0.75', '1.5', '2.2', '2.2'],
          ['Refrigerator', 'kW', '2.1', '2.1', '2.6', '2.6', '3.8', '3.8'],
          ['Air Compressor', 'kW', '0.35', '0.35', '0.35', '0.35', '0.35', '0.35'],
          ['Filter', 'kW', '0.5', '0.5', '0.5', '0.5', '0.75', '0.75'],
          ['HEATING ELEMENT', '', '', '', '', '', '', ''],
          ['Distillator', 'kW', '6', '6', '7.5', '7.5', '14', '16'],
          ['Air Heater', 'kW', '4.2', '4.2', '4.2', '4.8', '4.8', '7.2'],
          ['Steam Power', 'kW', '3.4', '3.6', '4.2', '4.2', '4.8', '5.5'],
          ['Electric Power', 'kW', '12', '13.6', '14', '15', '16', '19'],
          ['PRESSURE', '', '', '', '', '', '', ''],
          ['Steam', 'Bar', '4.5', '4.5', '4.5', '4.5', '4.5', '4.5'],
          ['Compressed Air', 'Bar', '6', '6', '6', '6', '6', '6'],
          ['Water (Min/Max)', 'Bar', '1.5 / 6', '1.5 / 6', '1.5 / 6', '1.5 / 6', '1.5 / 6', '1.5 / 6'],
          ['CONSUMPTIONS (without distillation)', '', '', '', '', '', '', ''],
          ['Water', 'Lt/Cycle', '170', '170', '190', '190', '210', '250'],
          ['Steam', 'Kg/Cycle', '40', '40', '50', '50', '70', '100'],
          ['Electricity', 'kW/Cycle', '6.5', '6.7', '6.9', '7.2', '8', '9'],
          ['DIMENSIONS', '', '', '', '', '', '', ''],
          ['Width', 'mm', '1700', '1700', '1700', '2024', '2100', '2470'],
          ['Depth', 'mm', '1490', '1490', '1490', '1575', '1575', '1500'],
          ['Height', 'mm', '1930', '1930', '1930', '2060', '2150', '2350'],
          ['Weight - (empty Machine)', 'Kg', '950', '1030', '1130', '1180', '1650', '2200'],
          ['Weight - (with solvent)', 'Kg', '1550', '1720', '1820', '1980', '2450', '3350']
        ]
      }
    ]
  },
  'dream-clean': {
    title: 'DREAM CLEAN -MULTOSOLVENT-SOFT-MOUNT',
    img: dreamCleanImg,
    subtitle: 'Multi-Solvent Soft-Mount Washing Technology',
    description: `Maestrelli exploits again its experience innovating the sector with the DREAMCLEAN series, multi-solvent machines capable of using all new-generation solvents, from the isoparaffin to the silicone ones. The range consists of machines with still (HS & RS series) or without still (H & R series), hard-mounted (R & RS) or soft-mounted (H & HS), compact-sized (H & R) or large-sized (HS & RS) with load capacities from 11 to 45 Kg.`,
    features: [
      'Our desire of answering to the worldwide constantly increasing level of demand for prevention against air/water pollution and the exposure of the operator to the harmful products, has brought us to the of a complete line of dry-cleaning machines based on hydrocarbon solvents.',
      'This relatively new solvent is an iso-paraffine derived from petrol. It was introduced on the dry-cleaning market for two main reasons: it is biodegradable and performs gentler cleaning than Perchloro Ethylene.',
      'The first quality assures a lower environmental impact, and it is well accepted in those countries where environmental regulations are at the highest levels.',
      'The fact that the solvent is less aggressive allows for gentle cleaning on particularly delicate fabrics and materials such as silk, leather, plastic inserts, and beads, etc. For this reason, it is also seen as the perfect substitute for the now outlawed Fluorocarbon solvent.',
      'Maestrelli has been the first, among the Italian dry-cleaning machines’ manufacturers, to develop a reliable system using this technology. A considerable number of such machines has been sold, in the past 8 years, in target European markets.'
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
    ],
    specTables: [
      {
        title: 'TECHNICAL SPECIFICATIONS',
        headers: ['DESCRIPTION', 'UNITS', 'HS350', 'HS450', 'HS 600', 'HS900', 'RS250', 'RS350'],
        rows: [
          ['Load Capacity', 'Kg', '15/17', '18/20', '26/27', '40/45', '11/12', '15/17'],
          ['DRUM', '', '', '', '', '', '', ''],
          ['Diameter', 'mm', '850', '900', '1060', '1200', '725', '850'],
          ['Depth', 'mm', '530', '570', '570', '710', '533', '530'],
          ['Volume', 'dm³', '300', '362', '503', '800', '220', '300'],
          ['Wash Speed', 'rpm', '20/60', '25/60', '15/30', '15/30', '20/60', '20/60'],
          ['Extract Speed', 'rpm', '800', '800', '750', '750', '520', '520'],
          ['FILTER CAPACITY', '', '', '', '', '', '', ''],
          ['Nylon Filter/Eco', 'm²', '4', '4', '6.5', '8', '2.3', '4'],
          ['Decolorating Filter', 'Nº', '1', '2', '2', '2', '1', '1'],
          ['STILL', 'L', '115/90', '115/90', '370/290', '540/430', '90/70', '115/90'],
          ['TANKS', '', '', '', '', '', '', ''],
          ['1st Tank', 'L', '120', '130', '180', '270', '130', '175'],
          ['2nd Tank', 'L', '120', '130', '180', '270', '130', '175'],
          ['3rd Tank', 'L', '140', '140', '250', '360', '-', '-'],
          ['MOTORS', '', '', '', '', '', '', ''],
          ['Wash', 'kW', '1.5', '2.2', '4', '7.5', '1.1', '1.5'],
          ['Extract', 'kW', '1.5', '2.2', '4', '7.5', '1.1', '1.5'],
          ['Fan', 'kW', '1.5', '2.2', '2.2', '3', '0.75', '0.75'],
          ['Pump', 'kW', '0.75', '0.75', '1.1', '1.5', '0.55', '0.75'],
          ['Filter', 'kW', '0.25', '0.33', '0.55', '0.55', '0.25', '0.25'],
          ['Refrigeration', 'kW', '2.6', '3.8', '3.8', '4.5', '2.6', '2.6'],
          ['INSTALLED POWER', '', '', '', '', '', '', ''],
          ['Steam Model', 'kW', '5.5', '8', '10', '12', '4.5', '5.5'],
          ['Electric Model', 'kW', '15', '20', '30', '-', '13', '15'],
          ['PRESSURE', '', '', '', '', '', '', ''],
          ['Water Pressure', 'bar', '1.5', '1.5', '1.5', '1.5', '1.5', '1.5'],
          ['Steam Pressure', 'bar', '4.5', '4.5', '4.5', '4.5', '4.5', '4.5'],
          ['Air Pressure', 'bar', '8', '8', '8', '8', '8', '8'],
          ['DIMENSION', '', '', '', '', '', '', ''],
          ['Width', 'mm', '1850', '1850', '2300', '2860', '1660', '1850'],
          ['Depth', 'mm', '1490', '1490', '1700', '2010', '1396', '1490'],
          ['Height', 'mm', '2030', '2091', '2330', '2625', '1995', '2060'],
          ['WEIGHT', 'Kg', '1750', '2000', '2850', '4800', '1150', '1750']
        ]
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

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <motion.div 
            initial={{ opacity: 0, x: -30 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 bg-white rounded-xl shadow-xl overflow-hidden p-8 flex items-center justify-center border border-slate-100 sticky top-32"
          >
            <img src={product.img} alt={product.title} className="w-full h-full object-contain mix-blend-multiply" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7"
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

        {/* Spec Tables */}
        {product.specTables && product.specTables.length > 0 && (
          <div className="mt-24 pt-16 border-t border-slate-200">
            <h2 className="text-2xl font-bold text-slate-900 mb-12 text-center tracking-tight">
              Technical Specifications
            </h2>
            <div className="space-y-16">
              {product.specTables.map((table, idx) => (
                <div key={idx} className="bg-white rounded-xl shadow-lg border border-slate-200 overflow-hidden relative">
                  {/* Top Red Accent */}
                  <div className="absolute top-0 left-0 w-full h-1 bg-[#CC141A]" />
                  
                  {table.title && (
                    <div className="bg-white px-6 py-5 border-b border-slate-200">
                      <h3 className="text-base font-bold text-slate-900 uppercase tracking-wider flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-[#CC141A]" />
                        {table.title}
                      </h3>
                    </div>
                  )}
                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-sm text-slate-700 border-collapse">
                      <thead className="bg-slate-900 text-xs uppercase font-bold text-white tracking-wide">
                        <tr>
                          {table.headers.map((header, hIdx) => (
                            <th key={hIdx} className="px-6 py-5 whitespace-nowrap first:pl-8 last:pr-8">
                              {header}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100">
                        {table.rows.map((row, rIdx) => {
                          const isCategoryHeader = row[1] === '';
                          return (
                            <tr key={rIdx} className={`${isCategoryHeader ? 'bg-slate-100' : 'even:bg-slate-50/50'} hover:bg-slate-100 transition-colors duration-150`}>
                              {row.map((cell, cIdx) => (
                                <td 
                                  key={cIdx} 
                                  className={`px-6 py-4 whitespace-nowrap first:pl-8 last:pr-8 ${isCategoryHeader ? 'font-bold text-slate-900 uppercase tracking-wider py-5' : cIdx === 0 ? 'font-bold text-slate-900 border-r border-slate-100 bg-white/50' : 'text-slate-600'}`}
                                  colSpan={isCategoryHeader && cIdx === 0 ? table.headers.length : 1}
                                >
                                  {isCategoryHeader && cIdx !== 0 ? null : (cell || '-')}
                                </td>
                              ))}
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Category Products Links */}
        {product.categoryProducts && product.categoryProducts.length > 0 && (
          <div className="mt-24 pt-16 border-t border-slate-200">
            <h2 className="text-3xl font-extrabold text-slate-900 mb-12 text-center tracking-tight">
              AVAILABLE MODELS
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
              {product.categoryProducts.map((cp, idx) => (
                <Link to={`/brands/maestrelli/${cp.id}`} key={idx} className="group block bg-white rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-300 overflow-hidden">
                  <div className="w-full aspect-square bg-slate-50 flex items-center justify-center p-8 group-hover:bg-slate-100 transition-colors duration-300">
                    <img src={cp.img} alt={cp.title} className="max-w-full max-h-full object-contain group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <div className="p-8 text-center bg-white border-t border-slate-100 relative">
                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-[#CC141A] transition-colors">{cp.title}</h3>
                    <div className="mt-4 flex items-center justify-center text-[#CC141A] font-semibold text-sm">
                      View Details
                      <ArrowLeft className="w-4 h-4 ml-2 rotate-180 transform group-hover:translate-x-2 transition-transform" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Advanced Technology */}
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
