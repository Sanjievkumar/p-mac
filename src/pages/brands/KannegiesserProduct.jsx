import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, CheckCircle2, Factory } from 'lucide-react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { FLATWORK_DATA } from './flatworkData';

const WASHING_TECH_DATA = {
  "powertrans-vario": {
    category: "Washing Technology",
    title: "PowerTrans Vario",
    subtitle: "Tunnel Washers",
    description: "Combining high productivity with great variety of article range and batches.",
    img: "https://www.kannegiesser.com/fileadmin/SHARED/Images/Products/Keyvisual_PT_VARIO.jpg",
    tabs: {
      overview: {
        introTitle: "THE TOP OF TODAY’S WASHING TECHNOLOGY",
        introText: "The PowerTrans Vario – combining high productivity with great variety of article range and batches. The PowerTrans Vario serves exactly the demands of your daily business now and in future. We designed this machine to enable you to provide hygiene and diversity. With the PowerTrans Vario at your side, you are more than prepared for the upcoming demands in the years to come.",
        applicationsTitle: "Fully tailored to your application",
        applications: [
          { name: "Cruise Ships", img: "https://www.kannegiesser.com/fileadmin/SHARED/Images/Products/Applications/Keyvisual_Kreuzfahrtschiff.jpg" },
          { name: "Workwear", img: "https://www.kannegiesser.com/fileadmin/SHARED/Images/Products/Applications/Keyvisual_Schutzkleidung.jpg" },
          { name: "Healthcare", img: "https://www.kannegiesser.com/fileadmin/SHARED/Images/Products/Applications/Keyvisual_Krankenhaus.jpg" },
          { name: "Hospitality & Restaurant", img: "https://www.kannegiesser.com/fileadmin/SHARED/Images/Products/Applications/Keyvisual_Hotel.jpg" },
          { name: "Airlines", img: "https://www.kannegiesser.com/fileadmin/SHARED/Images/Products/Applications/Keyvisual_Fluglinien.jpg" },
          { name: "Mats", img: "https://www.kannegiesser.com/fileadmin/SHARED/Images/Products/Applications/Keyvisual_Matten.jpg" },
          { name: "Residental", img: "https://www.kannegiesser.com/fileadmin/SHARED/Images/Products/Applications/Keyvisual_Bewohner.jpg" }
        ],
        summaryBlocks: [
          {
            title: "Hygiene & Diversity",
            subtitle: "The main future tasks for Textile Service Providers",
            text: "Global business trends show that hygiene and diversity in particular will become the main tasks for Textile Service Providers in future. Hygiene is the core business of a textile service company. Diversity is the second challenge and offers a chance to differentiate from the competition. New textiles, articles and colors will have an impact on the whole process and will require machines to cope with these elements."
          },
          {
            title: "Cost-effectiveness, Performance and Availability",
            subtitle: "The key success factors for your daily business",
            text: "The PowerTrans Vario minimizes the consumption of water, energy and chemicals. The principle of the straight drum wall design enables high loading ratios and overload safety without any restrictions on the wash and finish quality. To ensure that your daily laundry processes run smoothly and steadily, you have a long-lasting, resilient partner by your side."
          }
        ]
      },
      benefits: {
        blocks: [
          {
            title: "YOU CAN FEEL IT WHEN IT GOES DEEP INTO THE FIBERS.",
            subtitle: "Due to the ActiveDrop system.",
            text: "Highly efficient stain removal and hygiene requires washing deep in the fibers – without causing harm to the textile surface. It’s good to know that you can rely on our technical innovation called ActiveDrop."
          },
          {
            title: "THE MAJOR BENEFIT OF ACTIVE DROP",
            text: "It works deep into the fibers, allowing wash performance, textile care and a guarantee of hygiene as never before seen or felt.",
            img: "https://www.kannegiesser.com/fileadmin/_processed_/3/1/csm_ActiveDrop_193fef5667.jpg"
          }
        ]
      },
      technologies: {
        blocks: [
          {
            title: "DIVERSITY IN COLOR, MATERIAL, SIZE AND ARTICLE",
            subtitle: "The daily business of the PowerTrans Vario.",
            text: "The PowerTrans Vario offers flexibility comparable to that of washer extractors, whereby the hourly performance is as high and the consumption as low as can be expected from a modern high-performance batch washer. The load mix and sequence can be optimally adjusted to the logistic chain and the requirements of the laundry. Because it‘s you who defines the batch sequence – not the machine – and that allows for shortest process times."
          },
          {
            title: "CONSISTENTLY SEPARATED BATCHES",
            text: "The PowerTrans Vario is a ‘Separate Batch Washer’, which means every batch is treated separately. Optimized drum design, precise manufacturing methods and intelligent controls enable operational flexibility. The outcome is perfect quality and hygienic guarantees for each single batch.",
            img: "https://www.kannegiesser.com/fileadmin/_processed_/6/6/csm_PowerTrans_Separate-Batches_01_e41ddba778.png"
          },
          {
            title: "MORE ACTIVE WASH TIME",
            text: "To make sure you can handle greater peaks of demand at any time, we have significantly reduced the auxiliary process times, raising the active wash time per batch. Quick filling and draining, quick heating and liquor exchange between the inner and the outer drum are the main benefits of the QuickExchange compartment. All this – together with the fast batch transfer from one compartment to the next – works like a ‘turbo‘ which boosts your wash performance without compromising quality.",
            img: "https://www.kannegiesser.com/fileadmin/_processed_/7/5/csm_dv1376030_231df937df.jpg"
          }
        ]
      },
      specs: {
        table: [
          { label: "Nominal batch sizes (based on cotton sheets):", value: "40/50/60/85/110/130 kg (88/110/132/187/242/287 lb)" },
          { label: "Hourly output (depending on the model):", value: "300 to 5,000 kg (700 to 11,000 lb)" }
        ]
      }
    }
  },
  "powerpress": {
    category: "Washing Technology",
    title: "PowerPress",
    subtitle: "Extraction Technology",
    description: "High moisture extraction performance combined with fatigue strength.",
    img: "https://www.kannegiesser.com/fileadmin/SHARED/Images/Products/Keyvisual_PowerPress.jpg",
    tabs: {
      overview: {
        introTitle: "HIGH PERFORMANCE MEETS MINIMUM RESIDUAL MOISTURE",
        introText: "Lower Residual Moisture Leads to Energy Savings in the Finishing Process. One of the most important development objectives of a modern moisture extraction press is optimum performance with all types of laundry, even for very short wash cycles and delicate articles. The subsequent energy savings during drying and ironing are considerable and high performance hydraulics and control system ensure gentle treatment of all textiles.",
        applicationsTitle: "Fully tailored to your application",
        applications: [
          { name: "Cruise Ships", img: "https://www.kannegiesser.com/fileadmin/SHARED/Images/Products/Applications/Keyvisual_Kreuzfahrtschiff.jpg" },
          { name: "Airlines", img: "https://www.kannegiesser.com/fileadmin/SHARED/Images/Products/Applications/Keyvisual_Fluglinien.jpg" },
          { name: "Hospitality & Restaurant", img: "https://www.kannegiesser.com/fileadmin/SHARED/Images/Products/Applications/Keyvisual_Hotel.jpg" },
          { name: "Healthcare", img: "https://www.kannegiesser.com/fileadmin/SHARED/Images/Products/Applications/Keyvisual_Krankenhaus.jpg" }
        ],
        summaryBlocks: [
          {
            title: "PowerPress - The output maximizer",
            subtitle: "Redefining moisture extraction",
            text: "The Kannegiesser PowerPress redefines moisture extraction in batch washer systems."
          },
          {
            title: "High moisture extraction performance",
            subtitle: "Reliability in the field",
            text: "There is no such thing as standard operation in the field. Overloading, bulky items, batches that fall apart easily are the norm. The PowerPress is optimally designed for this type of operation in the field. A high degree of reliability, even if the press is overloaded or when processing types of laundry liable to fall apart, is vital for the practical operation of the equipment."
          }
        ]
      },
      benefits: {
        blocks: [
          {
            title: "Simple operation, easy maintenance",
            text: "These two features are inextricably linked. A clearly designed machine construction with highest material standards and a completely newly designed collection tank makes maintenance very simple. The system remains clean and, therefore, perfectly hygienic and requires minimum maintenance. The PowerPress is controlled by a high performance yet easy to operate control system."
          }
        ]
      },
      technologies: {
        blocks: [
          {
            title: "The output maximized extraction press",
            subtitle: "Uncompromising performance and strength",
            text: "The high moisture extraction performance is uncompromisingly combined with fatigue strength - these characteristics feature the PowerPress series. The four components of moisture extraction technology (power, speed, water drainage and fatigue strength) are essential parts of the PowerPress and ensure higher output and energy savings in the entire process chain."
          },
          {
            title: "Operational safety at its best",
            text: "With Kannegiesser you get enduring reliability and operating safety – the base for high availability and low life-cycle costs!"
          }
        ]
      },
      specs: {
        table: [
          { label: "PowerPress PP 10", value: "1004 mm press cake diameter resulting in a low press cake height" },
          { label: "PowerPress PP 13", value: "Minimized Residual Moisture even for Large Batches with more than 85 kg" },
          { label: "PowerPress Universal", value: "Extremely compact measurements for smallest space conditions" }
        ]
      }
    }
  },
  "powerdry": {
    category: "Washing Technology",
    title: "PowerDry",
    subtitle: "Dryers",
    description: "The most powerful dryer on the market.",
    img: "https://www.kannegiesser.com/fileadmin/SHARED/Images/Products/Keyvisual_PowerDry.jpg",
    tabs: {
      overview: {
        introTitle: "THE MOST POWERFUL DRYER ON THE MARKET",
        introText: "Optimized airflow within a dryer determines efficiency, performance and energy savings of a drying process. The construction of the PowerDry, especially the intelligent air recirculation, the inner cylinder construction and efficient heating units determine the optimized airflow. Innovative process control and heating management methods secure a low energy consumption while shortening overall process times. This combination is the reason for the PowerDry being the most efficient batch dryer on the market.",
        applicationsTitle: "Fully tailored to your application",
        applications: [
          { name: "Cruise Ships", img: "https://www.kannegiesser.com/fileadmin/SHARED/Images/Products/Applications/Keyvisual_Kreuzfahrtschiff.jpg" },
          { name: "Workwear", img: "https://www.kannegiesser.com/fileadmin/SHARED/Images/Products/Applications/Keyvisual_Schutzkleidung.jpg" },
          { name: "Healthcare", img: "https://www.kannegiesser.com/fileadmin/SHARED/Images/Products/Applications/Keyvisual_Krankenhaus.jpg" },
          { name: "Hospitality & Restaurant", img: "https://www.kannegiesser.com/fileadmin/SHARED/Images/Products/Applications/Keyvisual_Hotel.jpg" },
          { name: "Airlines", img: "https://www.kannegiesser.com/fileadmin/SHARED/Images/Products/Applications/Keyvisual_Fluglinien.jpg" },
          { name: "Mats", img: "https://www.kannegiesser.com/fileadmin/SHARED/Images/Products/Applications/Keyvisual_Matten.jpg" },
          { name: "Residental", img: "https://www.kannegiesser.com/fileadmin/SHARED/Images/Products/Applications/Keyvisual_Bewohner.jpg" }
        ],
        summaryBlocks: [
          {
            title: "Low Energy Consumption and High Capacity",
            subtitle: "Unmatched combination",
            text: "This combination is the reason for the PowerDry being the most efficient batch dryer on the market."
          },
          {
            title: "Universal Application Possibilities",
            subtitle: "For a wide range of items",
            text: "The increasing amount of processed good is also creating an increased diversity of items and materials. The PowerDry covers this diversity with its high flexibility. Possible applications for the PowerDry series include cotton, blended fabrics, laminates and even micro fibre textiles."
          }
        ]
      },
      benefits: {
        blocks: [
          {
            title: "Efficiency During the Drying Process",
            subtitle: "Low Energy Consumption Through Intelligent Air Circulation",
            text: "A constant heat distribution throughout the entire burner assembly is accomplished by the geometry of the burner assembly and the adjustable exhaust flap. Through a large opening in the outer cylinder the constantly distributed heat is evenly spread over the entire load in the inner cylinder."
          }
        ]
      },
      technologies: {
        blocks: [
          {
            title: "High air re-circulation for low energy consumption",
            text: "During the continuing drying process, the amount of exhaust and inlet air decreases within the drying process. Depending on the drying level of the goods, the majority of the exhaust air is recirculated by a separate exhaust flap, achieving an optimum amount of air re-circulation. The already heated air stays within the process. The necessary heat demand created by the atmospheric burner is drastically reduced.",
            img: "https://www.kannegiesser.com/fileadmin/_processed_/0/f/csm_PowerDry_Pic_Waermerueckgewinnung_51339cce39.jpg"
          },
          {
            title: "INFRATOUCH CONTROLLING",
            text: "For the exact determination of linen temperature at each point in time utilizing infrared measuring in the inner cylinder. Furthermore the Kannegiesser developed control algorithm allows an accurate drying process.",
            img: "https://www.kannegiesser.com/fileadmin/_processed_/7/1/csm_PowerDry_Pic_Infra-Touch-Regelung_3f7356ca93.jpg"
          },
          {
            title: "ECO2Power",
            text: "Due to continuously measuring of linen temperature with InfraTouch, together with supply air and exhaust air temperature, the optimal process adjustment will be realized. The result is a maximum air circulation rate and an ideal distribution of the linen in the inner cylinder. The higher the air recirculation in the process, the lower will be the demand for the heat demand supplied by the heating element (gas or steam). The results are not only significant energy savings, but also an exact determination of the material temperature. Both lead to an exact drying process and accurate predetermined drying point.",
            img: "https://www.kannegiesser.com/fileadmin/_processed_/8/3/csm_ECO2power_a0d376e426.jpg"
          }
        ]
      }
    }
  }
,
  "futura": {
    category: "Washing Technology",
    title: "Futura",
    subtitle: "Washer Extractors",
    description: "The Kannegiesser Futura is a series of industrial open-pocket washer-extractors designed for high-performance laundry processing.",
    img: "https://www.kannegiesser.com/fileadmin/SHARED/Images/Products/Keyvisual_Futura.jpg",
    tabs: {
      overview: {
        introTitle: "FUTURA WASHER EXTRACTOR",
        introText: "The Kannegiesser Futura open-pocket washer-extractors are designed for high-performance laundry processing. Available in capacities from 110 kg to 250 kg, they support both manual and automatic loading and unloading. They operate at an efficient 300 to 350 G-factor with JET-rinsing technology to minimize fresh water consumption.",
        applicationsTitle: "Tailored to your needs",
        summaryBlocks: [
          { title: "High G-Factor", text: "Operates at 300 to 350 G for efficient extraction." },
          { title: "JET-Rinsing", text: "Minimizes fresh water consumption while maximizing output." }
        ]
      },
      benefits: { blocks: [ { title: "Barrier-Wall Options", text: "Suitable for hygiene-critical environments such as healthcare laundries." } ] },
      technologies: { blocks: [ { title: "Carewash", text: "Uses a specific cylinder perforation designed to be gentle on textiles." } ] },
      specs: { table: [ { label: "Capacity", value: "110 kg to 250 kg" }, { label: "Extraction", value: "300 - 350 G" } ] }
    }
  },
  "favorit-vario-highclean": {
    category: "Washing Technology",
    title: "Favorit Vario HighClean",
    subtitle: "Clean Room Technology",
    description: "Cleanroom barrier washer tailored for high particle control and sterilization.",
    img: "https://www.kannegiesser.com/fileadmin/SHARED/Images/Products/Keyvisual_FavoritVario.jpg",
    tabs: {
      overview: { introTitle: "FAVORIT VARIO HIGHCLEAN", introText: "Specialized clean room technology ensuring complete particle control and absolute barrier separation for sensitive healthcare and microelectronics applications.", summaryBlocks: [] },
      benefits: { blocks: [{ title: "Absolute Barrier Separation", text: "Prevents cross-contamination." }] },
      technologies: { blocks: [] },
      specs: { table: [{ label: "Application", value: "Clean Room" }] }
    }
  },
  "cwd-cd": {
    category: "Washing Technology",
    title: "CWD / CD",
    subtitle: "Disinfection Sluices",
    description: "Reliable disinfection sluices ensuring separation of soiled and clean linen.",
    img: "https://www.kannegiesser.com/fileadmin/SHARED/Images/Products/Keyvisual_Disinfection.jpg",
    tabs: {
      overview: { introTitle: "DISINFECTION SLUICES", introText: "CWD and CD units provide essential disinfection layers for healthcare laundries, safely separating soiled and clean linen environments.", summaryBlocks: [] },
      benefits: { blocks: [] },
      technologies: { blocks: [] },
      specs: { table: [{ label: "Application", value: "Disinfection" }] }
    }
  }
};



const DATA_INFO_DATA = {
  "system-overviews": {
    category: "Data Information System",
    title: "Systems Overview",
    subtitle: "SmartLaundry & Dashboard",
    description: "Complete overview of the entire laundry facility with real-time data.",
    img: "https://www.kannegiesser.com/fileadmin/SHARED/Images/Products/Keyvisual_Dashboard.jpg",
    tabs: {
      overview: {
        introTitle: "DATA INFORMATION SYSTEMS",
        introText: "Kannegiesser Data Information Systems, including the Central System Overview and Laundry Dashboard, connect your entire facility to provide real-time metrics, bottleneck identification, and operational transparency.",
        summaryBlocks: [{ title: "SmartLaundry", text: "Connecting machines for an automated flow." }]
      },
      benefits: { blocks: [{ title: "Real-time Metrics", text: "View live data for every single machine on the floor." }] },
      technologies: { blocks: [{ title: "Laundry Dashboard", text: "A central hub for machine learning and reporting." }] },
      specs: { table: [{ label: "Software", value: "Cloud-based & On-premise options" }] }
    }
  }
};

const PRODUCT_DATA = { ...WASHING_TECH_DATA, ...FLATWORK_DATA, ...DATA_INFO_DATA };

export default function KannegiesserProduct() {
  const { id } = useParams();
  const product = PRODUCT_DATA[id];
  const [activeTab, setActiveTab] = useState('overview');

  useEffect(() => {
    window.scrollTo(0, 0);
    setActiveTab('overview');
  }, [id]);

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-white">
        <h1 className="text-4xl font-bold text-[#001F3F] mb-4">Product Not Found</h1>
        <Link to="/brands/kannegiesser" className="text-[#E31E24] hover:underline font-bold">
          Return to Kannegiesser
        </Link>
      </div>
    );
  }

  const renderTabContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <motion.div 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}
            className="space-y-24"
          >
            {/* Intro */}
            <div className="max-w-4xl">
              <h2 className="text-3xl lg:text-4xl font-bold text-[#001F3F] mb-6">{product.tabs.overview.introTitle}</h2>
              <p className="text-lg text-slate-600 leading-relaxed whitespace-pre-line">{product.tabs.overview.introText}</p>
            </div>

            {/* Applications */}
            <div>
              <h3 className="text-2xl font-bold text-[#001F3F] mb-8">{product.tabs.overview.applicationsTitle}</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {product.tabs.overview?.applications?.map((app, idx) => (
                  <div key={idx} className="relative group rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow aspect-square">
                    <img src={app.img} alt={app.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#001F3F]/90 via-[#001F3F]/20 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <span className="text-white font-bold text-sm tracking-wide">{app.name}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Summary Blocks */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {product.tabs.overview?.summaryBlocks?.map((block, idx) => (
                <div key={idx} className="bg-slate-50 rounded-3xl p-10 border border-slate-100 shadow-sm">
                  {block.title && <h3 className="text-2xl font-bold text-[#E31E24] mb-2">{block.title}</h3>}
                  {block.subtitle && <h4 className="text-lg font-bold text-[#001F3F] mb-6">{block.subtitle}</h4>}
                  {block.text && <p className="text-slate-600 leading-relaxed whitespace-pre-line">{block.text}</p>}
                </div>
              ))}
            </div>
          </motion.div>
        );
      
      case 'benefits':
        return (
          <motion.div 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}
            className="space-y-24"
          >
            {product.tabs.benefits?.blocks?.map((block, idx) => (
              <div key={idx} className={`flex flex-col ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12 lg:gap-20`}>
                <div className="flex-1">
                  <h2 className="text-3xl lg:text-4xl font-bold text-[#001F3F] mb-4 uppercase">{block.title}</h2>
                  {block.subtitle && <h3 className="text-xl font-bold text-[#E31E24] mb-6">{block.subtitle}</h3>}
                  <p className="text-lg text-slate-600 leading-relaxed whitespace-pre-line">{block.text}</p>
                </div>
                {block.img && (
                  <div className="flex-1 w-full relative">
                    <div className="absolute inset-0 bg-[#E31E24]/5 rounded-3xl transform -rotate-3 scale-105 -z-10" />
                    <img src={block.img} alt={block.title} className="w-full h-auto rounded-3xl shadow-2xl border border-slate-100" />
                  </div>
                )}
              </div>
            ))}
          </motion.div>
        );

      case 'technologies':
        return (
          <motion.div 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}
            className="space-y-24"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-[#001F3F] mb-12 uppercase border-b-4 border-[#E31E24] inline-block pb-2">Technical Overview</h2>
            
            {product.tabs.technologies?.blocks?.map((block, idx) => (
              <div key={idx} className={`flex flex-col ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12 lg:gap-20`}>
                <div className="flex-1">
                  {block.title && <h2 className="text-3xl lg:text-4xl font-bold text-[#001F3F] mb-4 uppercase">{block.title}</h2>}
                  {block.subtitle && <h3 className="text-xl font-bold text-[#E31E24] mb-6">{block.subtitle}</h3>}
                  {block.text && <p className="text-lg text-slate-600 leading-relaxed whitespace-pre-line">{block.text}</p>}
                </div>
                {block.img && (
                  <div className="flex-1 w-full bg-white p-8 rounded-3xl shadow-xl border border-slate-100 flex items-center justify-center">
                    <img src={block.img} alt={block.title || "Technology image"} className="max-h-[300px] w-auto object-contain drop-shadow-md" />
                  </div>
                )}
              </div>
            ))}
          </motion.div>
        );

      case 'specs':
        return (
          <motion.div 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}
            className="space-y-12 max-w-4xl mx-auto"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-[#001F3F] mb-8 uppercase border-b-4 border-[#E31E24] inline-block pb-2">Technical Data</h2>
            <div className="bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden">
              <table className="w-full text-left border-collapse">
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
          </motion.div>
        );
      
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <Link 
            to="/brands/kannegiesser" 
            className="inline-flex items-center gap-2 text-slate-500 hover:text-[#E31E24] transition-colors mb-12 group font-bold tracking-widest text-xs uppercase"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Kannegiesser
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="flex flex-col"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-[2px] bg-[#E31E24]" />
                <h4 className="text-[#E31E24] text-xs font-bold tracking-[0.2em] uppercase">
                  {product.category}
                </h4>
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-extrabold text-[#001F3F] leading-tight mb-4 tracking-tight">
                {product.title}
              </h1>
              <h3 className="text-2xl text-slate-500 font-semibold mb-8">
                {product.subtitle}
              </h3>
              
              <Link 
                to="/contact"
                className="w-max inline-flex items-center justify-center bg-[#E31E24] text-white px-8 py-4 rounded-xl font-bold tracking-wider uppercase text-sm hover:bg-red-700 transition-colors shadow-lg shadow-red-500/30"
              >
                Request Quote
              </Link>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative w-full h-full min-h-[400px] flex items-center justify-center rounded-3xl overflow-hidden shadow-2xl border border-slate-100"
            >
              <img 
                src={product.img} 
                alt={product.title}
                className="absolute inset-0 w-full h-full object-cover object-center"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Deep Dive Content Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          
          {/* Navigation Tabs (Only show if more than 1 tab exists) */}
          {['overview', ...(product.tabs.benefits ? ['benefits'] : []), ...(product.tabs.technologies ? ['technologies'] : []), ...(product.tabs.specs ? ['specs'] : [])].length > 1 && (
            <div className="flex flex-wrap items-center justify-center gap-4 mb-20 border-b border-slate-200 pb-4">
              {['overview', ...(product.tabs.benefits ? ['benefits'] : []), ...(product.tabs.technologies ? ['technologies'] : []), ...(product.tabs.specs ? ['specs'] : [])].map(tab => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-8 py-4 rounded-t-xl font-bold text-sm tracking-widest uppercase transition-all duration-300 relative ${
                    activeTab === tab 
                      ? 'text-[#E31E24]' 
                      : 'text-slate-400 hover:text-[#001F3F]'
                  }`}
                >
                  {tab}
                  {activeTab === tab && (
                    <motion.div 
                      layoutId="activeTabKannegiesser"
                      className="absolute bottom-0 left-0 right-0 h-1 bg-[#E31E24]"
                    />
                  )}
                </button>
              ))}
            </div>
          )}

          {/* Dynamic Content */}
          <div className="min-h-[500px]">
            <AnimatePresence mode="wait">
              {renderTabContent()}
            </AnimatePresence>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
}
