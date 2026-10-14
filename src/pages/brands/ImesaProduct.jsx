import React, { useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { ArrowLeft, Cpu, Droplets, Wind, Layers, RefreshCw, ShieldCheck, CheckCircle2, Award, Sparkles } from 'lucide-react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

// Local Machine Product Images
import lmSeriesImg from '../../assets/brands/imesa/imesa-lm-series.png';
import d2wBarrierImg from '../../assets/brands/imesa/imesa-d2w-barrier.jpg';
import esSmartImg from '../../assets/brands/imesa/imesa-es-smart.png';
import esPremiumImg from '../../assets/brands/imesa/imesa-es-premium.png';
import fiEasyImg from '../../assets/brands/imesa/imesa-fi-easy.jpg';
import fiSmartImg from '../../assets/brands/imesa/imesa-fi-smart.jpg';
import mcaIronerImg from '../../assets/brands/imesa/imesa-mca-ironer.jpg';
import mcmIronerImg from '../../assets/brands/imesa/imesa-mcm-ironer.jpg';

// 8 Official IMESA Products across 4 Categories directly from imesa.it
const IMESA_PRODUCTS = {
  // ── 1. Washing Machines (https://imesa.it/en/washing-machines/) ──
  "imesa-lm-series": {
    category: "Washing Machines",
    title: "HIGH SPIN INDUSTRIAL WASHING MACHINES",
    subtitle: "LM Series (8 - 125 kg)",
    description: "Freestanding high-spin industrial washing machines featuring the IM11 7\" capacitive touchscreen, G-Factor up to 400 G, and full Wet Cleaning compatibility.",
    img: lmSeriesImg,
    badge: "High Spin 400 G",
    tabs: {
      overview: {
        introTitle: "HIGH SPIN FREESTANDING WASHING EXCELLENCE",
        introText: "The LM series represents the maximum expression of IMESA washing technology. Soft-mount, freestanding design requiring no ground anchoring, the LM range delivers maximum spin extraction up to 400 G to reduce residual linen moisture and cut subsequent drying costs. Equipped with the innovative IM11 7-inch color capacitive touchscreen, dynamic imbalance reduction (PBS), and Wet Cleaning compatibility, the LM series delivers uncompromising wash quality with conscious water and detergent consumption.",
        summaryBlocks: [
          {
            title: "IM11 7\" Capacitive Touchscreen",
            subtitle: "Tablet-like intuitive navigation",
            text: "Features an inclined display for easy reading, unlimited customizable washing programs, multi-language support, and USB port for program transfer.",
            bullets: [
              "7\" capacitive color display",
              "Unlimited programmable cycles",
              "USB telemetry and program backup",
              "Wi-Fi IoT connectivity to IMConnect"
            ]
          },
          {
            title: "Freestanding High Extraction",
            subtitle: "400 G-Factor without ground anchoring",
            text: "Advanced horizontal and vertical shock absorbers allow high spin speeds without vibrations transferred to the building structure.",
            bullets: [
              "Extracts moisture up to 400 G",
              "Cuts drying cycle duration by up to 30%",
              "No structural floor anchoring required",
              "Smooth inverter-driven acceleration"
            ]
          }
        ]
      },
      benefits: {
        blocks: [
          {
            title: "Conscious Water & Chemical Savings",
            subtitle: "Proportional resource consumption",
            text: "Automatically adapts water intake and detergent volume according to the real linen weight loaded in the drum, eliminating resource waste."
          },
          {
            title: "Wet Cleaning Compatibility",
            subtitle: "Eco-friendly alternative to dry cleaning",
            text: "Gentle drum mechanics and precision temperature regulation allow safe washing of delicate garments, woolens, and tailored textiles."
          },
          {
            title: "AISI 304 Stainless Steel Drum & Tub",
            subtitle: "Built for continuous commercial shifts",
            text: "Inner drum and outer tub are precision-stamped from AISI 304 stainless steel with smooth perforations that protect fabrics from friction wear."
          }
        ]
      },
      technologies: {
        blocks: [
          {
            title: "IMConnect Cloud Telemetry",
            subtitle: "Remote plant management",
            text: "Real-time supervision of operational status, energy and water consumption logs, running costs per kg, and predictive maintenance alerts."
          },
          {
            title: "Power Balance System (PBS)",
            subtitle: "Dynamic electronic balancing",
            text: "Continuously senses and redistributes uneven linen loads before high extraction, reducing wear on bearings and mechanical drives."
          }
        ]
      },
      specs: {
        table: [
          { label: "Capacities Available", value: "8, 11, 14, 18, 23, 26, 32, 40, 55, 70, 85, 100, 125 kg" },
          { label: "Extraction G-Factor", value: "350 - 400 G (up to 1,180 RPM)" },
          { label: "Control Computer", value: "IM11 7\" Capacitive Touchscreen with Wi-Fi / USB" },
          { label: "Chassis & Drum Construction", value: "AISI 304 Stainless Steel Inner Drum and Tub" },
          { label: "Heating Methods", value: "Electric, Hot Water, Direct Steam, Indirect Steam, Dual Fuel" },
          { label: "Detergent Dosing", value: "Top 4-compartment dispenser + up to 11 external liquid pump connections" },
          { label: "Special Programs", value: "Standard Wash, Wet Cleaning, Thermal Disinfection, Eco Saving" },
          { label: "Connectivity", value: "IMConnect IoT Portal & Laundry for You Mobile App" }
        ]
      }
    }
  },

  "imesa-d2w-barrier": {
    category: "Washing Machines",
    title: "HYGIENE BARRIER WASHERS",
    subtitle: "D2W Series (18 - 55 kg)",
    description: "Pass-through aseptic barrier washers with opposed dual-door partition system designed to eliminate contamination risks according to EN 14065 (RABC).",
    img: d2wBarrierImg,
    badge: "EN 14065 / RABC",
    tabs: {
      overview: {
        introTitle: "TOTAL ASEPTIC BIOCONTAMINATION PREVENTION",
        introText: "The IMESA D2W series hygiene barrier washing machines are purpose-built for healthcare institutions, cleanrooms, and commercial laundries where biocontamination prevention is critical. Installed across a physical partition wall, loading is performed strictly from the contaminated/dirty room, while unloading occurs exclusively inside the clean room. Compliant with EN 14065 regulations (RABC), the D2W guarantees complete microbiological safety through automated electronic door interlocking.",
        summaryBlocks: [
          {
            title: "Two-Door Partition Layout",
            subtitle: "Strict separation of clean and soiled textiles",
            text: "Physical wall integration ensures soiled linen never crosses paths with sanitized linen, preventing airborne and contact cross-infection.",
            bullets: [
              "Two opposed doors across dividing wall",
              "Motorized electronic door interlock",
              "Compliant with EN 14065 (RABC) standards",
              "Ergonomic loading height"
            ]
          },
          {
            title: "Automated Drum Positioning",
            subtitle: "Instant opening alignment",
            text: "The drum automatically positions and locks its opening flush with the door upon cycle completion, enabling effortless operator unloading.",
            bullets: [
              "Automatic motorized drum positioning",
              "Mechanical drum locking brake",
              "Dual display monitoring on both sides",
              "Emergency release mechanism"
            ]
          }
        ]
      },
      benefits: {
        blocks: [
          {
            title: "Validated Thermal Disinfection",
            subtitle: "Guaranteed biocontamination control",
            text: "The control system monitors holding temperature and exposure duration continuously, validating that disinfection cycles achieve complete pathogen neutralization."
          },
          {
            title: "Dual Display Monitoring",
            subtitle: "Clear status on both clean and soiled sides",
            text: "Color status displays on both sides of the barrier wall keep operators informed of cycle progression, door unlock clearance, and maintenance alerts."
          },
          {
            title: "Heavy-Gauge AISI 304 Construction",
            subtitle: "Hospital-grade sterility and hygiene",
            text: "Smooth stainless steel inner and outer surfaces withstand intensive chemical disinfectants and harsh commercial laundering detergents without degradation."
          }
        ]
      },
      technologies: {
        blocks: [
          {
            title: "Electronic Door Interlocking",
            subtitle: "Zero cross-contamination guarantee",
            text: "Microprocessor-controlled safety locks ensure the clean-side door cannot open until the complete disinfection cycle has succeeded and the dirty-side door is sealed."
          },
          {
            title: "IMConnect IoT Validation",
            subtitle: "Traceability and compliance logging",
            text: "Exports certified wash reports detailing cycle temperatures, water volumes, and chemical dosing to satisfy healthcare regulatory audits."
          }
        ]
      },
      specs: {
        table: [
          { label: "Capacities Available", value: "18, 23, 30, 55 kg" },
          { label: "Door Configuration", value: "Opposed Dual Pass-Through Doors (180° layout)" },
          { label: "Safety Standard", value: "EN 14065 (RABC Biocontamination Control)" },
          { label: "Control Interface", value: "IM11 Touchscreen with Clean-Side Secondary Display" },
          { label: "Drum Positioning", value: "Motorized automatic alignment and brake lock" },
          { label: "Heating Options", value: "Electric, Direct Steam, Indirect Steam" },
          { label: "Construction", value: "AISI 304 Stainless Steel Inner Drum, Tub, and Outer Panels" },
          { label: "Disinfection Cycles", value: "Thermal & Chemo-Thermal Disinfection Programs" }
        ]
      }
    }
  },

  // ── 2. Dryers (https://imesa.it/en/dryers/) ──
  "imesa-es-smart": {
    category: "Dryers",
    title: "ES SMART LINE TUMBLE DRYERS",
    subtitle: "ES Smart Line (11 - 36 kg)",
    description: "Commercial tumble dryers featuring the patented D-FLOW axial airflow system, standard reversing drum rotation, and IM10 touchscreen computer.",
    img: esSmartImg,
    badge: "D-FLOW System",
    tabs: {
      overview: {
        introTitle: "INTELLIGENT DRYING WITH PATENTED D-FLOW AIRFLOW",
        introText: "The IMESA ES Smart Line represents the ideal commercial drying solution for hotels, laundromats, and healthcare institutions. Featuring the patented D-FLOW axial airflow system, heated air travels directly through the drum core, ensuring uniform moisture extraction and shorter cycle times. Powered by the IM10 color touchscreen computer with automatic reversing drum rotation as standard, the ES Smart Line prevents linen tangling and optimizes thermal efficiency.",
        summaryBlocks: [
          {
            title: "Patented D-FLOW Airflow",
            subtitle: "Uniform thermal distribution",
            text: "Directs heated air axially through the center of the tumble drum, enveloping garments completely for rapid, uniform moisture extraction.",
            bullets: [
              "Axial direct-path airflow pattern",
              "Accelerates drying times significantly",
              "Drastically reduces thermal heat waste",
              "Gentle fabric care and reduced fiber stress"
            ]
          },
          {
            title: "Standard Reversing Drum",
            subtitle: "Prevents linen tangling and balling",
            text: "Alternating drum rotation ensures even heat exposure for bulky items like bedsheets and duvets, eliminating damp inner folds.",
            bullets: [
              "Automatic bidirectional drum rotation",
              "Prevents twisting of large sheets and duvets",
              "Standard on all ES Smart capacities",
              "Inverter-controlled acceleration"
            ]
          }
        ]
      },
      benefits: {
        blocks: [
          {
            title: "IM10 Touchscreen Control",
            subtitle: "On-the-fly cycle parameter adjustments",
            text: "Intuitive touch interface allows operators to adjust drying temperature, time, and cool-down parameters even while a cycle is active."
          },
          {
            title: "Automatic Cool-Down Phase",
            subtitle: "Anti-crease and fire prevention",
            text: "Gradually cools down linen at the end of every cycle, preventing fabric thermal shock, eliminating creases, and preventing self-combustion hazards."
          },
          {
            title: "Large Diameter Door & Wide Filter",
            subtitle: "Ergonomic operation and easy cleaning",
            text: "Generous door opening facilitates swift loading/unloading, while the front-accessible magnetic lint filter is cleaned in seconds."
          }
        ]
      },
      technologies: {
        blocks: [
          {
            title: "Dynamic Temperature Sensing",
            subtitle: "Precise thermal regulation",
            text: "Dual air sensors monitor inlet and exhaust air temperatures, adjusting heater activation dynamically to maintain optimal fabric conditions."
          },
          {
            title: "IMConnect IoT Telemetry",
            subtitle: "Remote tracking and fleet supervision",
            text: "Enables cloud monitoring of drying hours, energy usage per batch, and maintenance alerts across single or multiple machines."
          }
        ]
      },
      specs: {
        table: [
          { label: "Capacities Available", value: "11, 14, 18, 23, 34 kg" },
          { label: "Airflow Technology", value: "Patented D-FLOW Axial Airflow System" },
          { label: "Drum Motion", value: "Standard Alternating Reversing Rotation" },
          { label: "Control Computer", value: "IM10 Color Touch Screen with Customizable Programs" },
          { label: "Heating Options", value: "Electric, Gas, Steam" },
          { label: "Drum Construction", value: "AISI 304 Stainless Steel Drum with Smooth Perforations" },
          { label: "Safety Functions", value: "Automatic Cool-Down, Emergency Stop, Lint Filter Sensor" },
          { label: "Connectivity", value: "IMConnect Portal Ready & Self-Service Compatibility" }
        ]
      }
    }
  },

  "imesa-es-premium": {
    category: "Dryers",
    title: "ES PREMIUM LINE TUMBLE DRYERS",
    subtitle: "ES Premium Line (11 - 75 kg)",
    description: "Top-of-the-range industrial tumble dryers with Dual Power staged heating, precision residual humidity sensor, DSC/FSC speed control, and capacities up to 75 kg.",
    img: esPremiumImg,
    badge: "Up to 75 kg",
    tabs: {
      overview: {
        introTitle: "HEAVY INDUSTRIAL DRYING PERFORMANCE",
        introText: "The IMESA ES Premium Line is engineered for high-throughput industrial laundries, hotel laundry plants, and healthcare facilities demanding precision moisture control, continuous operation, and maximum energy efficiency. Spanning capacities up to heavy 75 kg industrial batches, the Premium series combines precision residual humidity sensing, Drum Speed Control (DSC), Fan Speed Control (FSC), and the Dual Power staged heating system.",
        summaryBlocks: [
          {
            title: "Precision Humidity Sensor",
            subtitle: "Automatic stop at exact residual moisture",
            text: "Continuously monitors fabric moisture inside the drum, terminating the heating phase precisely when the target dryness is reached.",
            bullets: [
              "Prevents fabric over-drying and thermal damage",
              "Saves up to 20% in energy consumption",
              "Delivers ideal moisture levels for ironing",
              "Reduces cycle times automatically"
            ]
          },
          {
            title: "Dual Power Staged Heating",
            subtitle: "Independent heating group regulation",
            text: "Two independently switchable heating banks adjust thermal output to match fabric density, optimizing energy usage throughout the cycle.",
            bullets: [
              "Two independently regulated heating stages",
              "DSC (Drum Speed Control) via inverter",
              "FSC (Fan Speed Control) for airflow optimization",
              "AISI 304 stainless steel SOFT CARE drum"
            ]
          }
        ]
      },
      benefits: {
        blocks: [
          {
            title: "Heavy-Duty Industrial Capacities",
            subtitle: "From 11 kg up to 75 kg continuous loads",
            text: "Built with reinforced structural chassis and oversized drive assemblies to withstand continuous round-the-clock industrial laundry shifts."
          },
          {
            title: "SOFT CARE Non-Abrasive Drum",
            subtitle: "Gentle tumbling for luxury textiles",
            text: "Perforations with countersunk edges prevent fabric pilling, pulling, or fiber thinning even during long drying shifts."
          },
          {
            title: "Full Optional IM10 Touchscreen",
            subtitle: "Complete program customization",
            text: "Includes specialized drying programs for duvets, wool, synthetics, and flame-retardant hospital garments with real-time graphs."
          }
        ]
      },
      technologies: {
        blocks: [
          {
            title: "Inverter Speed Control (DSC & FSC)",
            subtitle: "Synchronized rotation and suction",
            text: "Allows precise synchronization between drum rotation speed and exhaust suction velocity based on fabric weight and volume."
          },
          {
            title: "IMConnect IoT Cloud Integration",
            subtitle: "Comprehensive cost accounting",
            text: "Tracks exact kWh and gas consumption per batch, empowering managers to benchmark operational costs per kilogram."
          }
        ]
      },
      specs: {
        table: [
          { label: "Capacities Available", value: "11, 14, 18, 23, 34, 55, 75 kg" },
          { label: "Heating Control", value: "Dual Power Staged Heating (Independent Banks)" },
          { label: "Moisture Control", value: "Standard Precision Residual Humidity Sensor" },
          { label: "Speed Regulation", value: "DSC (Drum Speed Control) & FSC (Fan Speed Control) via Inverter" },
          { label: "Airflow Technology", value: "D-FLOW Axial Airflow with Reversing Rotation" },
          { label: "Heating Methods", value: "Electric, Gas, Steam" },
          { label: "Drum Construction", value: "AISI 304 Stainless Steel SOFT CARE Drum" },
          { label: "Control Computer", value: "IM10 Touch Screen with Advanced Telemetry" }
        ]
      }
    }
  },

  // ── 3. Flatwork Ironers (https://imesa.it/en/flatwork-ironers-easy-and-smart-fi/) ──
  "imesa-fi-easy": {
    category: "Flatwork Ironers",
    title: "FI EASY LINE FLATWORK IRONERS",
    subtitle: "FI EASY Line (Ø 250 - 330 mm)",
    description: "Simple, robust flatwork ironer with digital thermostat, uniform pressure mechanical torsion bar, and ergonomic 930 mm work height.",
    img: fiEasyImg,
    badge: "Torsion Bar",
    tabs: {
      overview: {
        introTitle: "ROBUST & STRAIGHTFORWARD FLATWORK IRONING",
        introText: "The IMESA FI EASY Line flatwork ironers offer the perfect combination of simplicity, high ironing quality, and attractive investment cost. Featuring an intuitive electromechanical control with a precise digital thermostat, uniform ironing pressure guaranteed by IMESA's torsion bar system, and a comfortable 930 mm work height, the FI EASY line delivers perfectly pressed sheets and tablecloths with minimal operator effort.",
        summaryBlocks: [
          {
            title: "Mechanical Torsion Bar",
            subtitle: "Guaranteed uniform chest pressure",
            text: "IMESA's mechanical torsion bar distributes ironing pressure equally across the entire chest width, preventing uneven creases or damp edges on wide sheets.",
            bullets: [
              "Equal pressure across full roller length",
              "Eliminates damp edges on wide linens",
              "Simple, maintenance-free mechanical design",
              "Protects chest and roller from uneven wear"
            ]
          },
          {
            title: "Ergonomic 930 mm Feed Height",
            subtitle: "Designed for operator comfort and safety",
            text: "The feeding table is ergonomically positioned at 930 mm from the floor to reduce operator fatigue during long ironing shifts.",
            bullets: [
              "Comfortable 930 mm ergonomic feed table",
              "Emergency stop foot bar at the base",
              "Anti-panic finger guard safety bar",
              "Compact front-return linen delivery"
            ]
          }
        ]
      },
      benefits: {
        blocks: [
          {
            title: "Digital Thermostat Precision",
            subtitle: "Accurate temperature monitoring",
            text: "Displays and regulates ironing temperature accurately, ensuring consistent thermal transfer without scorching delicate cottons."
          },
          {
            title: "Customizable Configurations",
            subtitle: "Tailor the machine to your needs",
            text: "Available with optional steam exhaust suction system, electronic inverter speed regulation, and heat-resistant Nomex roller coating."
          },
          {
            title: "Long-Life Chromed Cylinder Option",
            subtitle: "Scratch-resistant polished surface",
            text: "Polished steel roller delivers friction-free linen gliding, producing a crisp, glossy finish on hotel tablecloths and pillowcases."
          }
        ]
      },
      technologies: {
        blocks: [
          {
            title: "Torsion Pressure Balance",
            subtitle: "Mechanical reliability",
            text: "Distributes ironing force uniformly along the contact arc without complex hydraulics or pneumatic cylinders."
          },
          {
            title: "Emergency Manual Release",
            subtitle: "Linen protection during power failure",
            text: "Equipped with a manual chest release lever allowing operators to free linen immediately in the event of a sudden power outage."
          }
        ]
      },
      specs: {
        table: [
          { label: "Roller Diameters Available", value: "Ø 250 mm and Ø 330 mm" },
          { label: "Roller Lengths (Width)", value: "1000, 1250, 1500, 1750, 2000 mm" },
          { label: "Pressure System", value: "Mechanical Torsion Bar (Uniform Chest Pressure)" },
          { label: "Control System", value: "Electromechanical Unit with Digital Thermostat Display" },
          { label: "Feed Table Height", value: "930 mm (Ergonomic Standard)" },
          { label: "Heating Options", value: "Electric, Gas, Steam" },
          { label: "Roller Coating", value: "High-density needle-punched felt (Nomex coating optional)" },
          { label: "Safety Systems", value: "Anti-panic Hand-Safe Guard Bar & Base Emergency Foot Pedal" }
        ]
      }
    }
  },

  "imesa-fi-smart": {
    category: "Flatwork Ironers",
    title: "FI SMART LINE FLATWORK IRONERS",
    subtitle: "FI SMART Line (Ø 250 - 330 mm)",
    description: "Top-of-the-range full-optional flatwork ironer with IM10 touchscreen, electronic chest pressure, inverter speed control, Nomex coating, and Cool-Down.",
    img: fiSmartImg,
    badge: "IM10 Touch",
    tabs: {
      overview: {
        introTitle: "FULL-OPTIONAL INTELLIGENT FLATWORK IRONING",
        introText: "The IMESA FI SMART Line is the top-of-the-range flatwork ironer engineered for intensive professional use. Built with the IM10 touch screen computer, standard inverter speed regulation, automatic speed-temperature compensation, and patented electronic linear pressure adjustment, the FI SMART adapts dynamically to any fabric thickness. Complete with high-temperature Nomex coating, built-in steam suction, and Cool-Down energy savings, it is the benchmark in commercial flatwork finishing.",
        summaryBlocks: [
          {
            title: "IM10 Touch Screen Computer",
            subtitle: "Dynamic cycle adjustments",
            text: "Allows operators to modify ironing temperature and roller speed even during an active ironing cycle, adapting instantly to varying fabric dampness.",
            bullets: [
              "Full-color intuitive touchscreen display",
              "Speed-temperature automatic compensation",
              "Industry 4.0 and IoT connectivity",
              "Real-time operational diagnostics"
            ]
          },
          {
            title: "Electronic Linear Pressure Adjustment",
            subtitle: "Patented pressure regulation",
            text: "Electronic pressure system adjusts chest force to match delicate napkins or heavy multi-ply bedsheets, guaranteeing wrinkle-free results.",
            bullets: [
              "Electronic linear pressure control",
              "Standard inverter speed control",
              "Nomex padding resistant up to 250°C",
              "Built-in steam exhaust suction standard"
            ]
          }
        ]
      },
      benefits: {
        blocks: [
          {
            title: "Automatic Cool-Down Function",
            subtitle: "Coating preservation and energy saving",
            text: "Cool-Down gradually relieves roller pressure and cools cylinder clothing at end of shift, extending roller life and saving power."
          },
          {
            title: "\"Thick\" Insertion Function",
            subtitle: "Effortless feeding of folded hems",
            text: "Temporarily delays chest closure when thick seams or folded hems are introduced, preventing jamming and fabric puckering."
          },
          {
            title: "Standard Nomex Coating",
            subtitle: "High thermal durability",
            text: "Supplied standard with high-density Nomex coating that withstands temperatures up to 250°C without scorch marks or deterioration."
          }
        ]
      },
      technologies: {
        blocks: [
          {
            title: "Speed-Temperature Compensation",
            subtitle: "Continuous quality monitoring",
            text: "Automatically regulates ironing speed relative to cylinder temperature drops, ensuring every sheet exits fully dried and pressed."
          },
          {
            title: "IMConnect IoT Telemetry",
            subtitle: "Production output and cost tracking",
            text: "Transmits linear meters pressed, machine hours, and power consumption directly to the central management portal."
          }
        ]
      },
      specs: {
        table: [
          { label: "Roller Diameters Available", value: "Ø 250 mm and Ø 330 mm" },
          { label: "Roller Lengths (Width)", value: "1000, 1250, 1500, 1750, 2000 mm" },
          { label: "Control Computer", value: "IM10 Touch Screen with Speed-Temperature Compensation" },
          { label: "Chest Pressure", value: "Patented Electronic Linear Pressure Adjustment" },
          { label: "Speed Regulation", value: "Standard Frequency Inverter Drive" },
          { label: "Steam Extraction", value: "Integrated Suction Exhaust Fan as Standard" },
          { label: "Roller Coating", value: "Standard High-Temperature Resistant Nomex" },
          { label: "Special Functions", value: "Cool-Down System, \"Thick\" Function, Hand-Safe Guard Bar" }
        ]
      }
    }
  },

  // ── 4. Drying Ironers (https://imesa.it/en/drying-ironers/) ──
  "imesa-mca-ironer": {
    category: "Drying Ironers",
    title: "MCA COMPACT DRYING IRONERS",
    subtitle: "MCA Series (Ø 330 mm / 1500 - 2100 mm)",
    description: "Compact drying ironers enabling direct drying and ironing of damp linen (up to 50% moisture) in a single operation with front return for wall installation.",
    img: mcaIronerImg,
    badge: "Single Pass Dry & Iron",
    tabs: {
      overview: {
        introTitle: "SINGLE-PASS COMPACT DRY & IRON TECHNOLOGY",
        introText: "The IMESA MCA Line compact drying ironers allow commercial laundries to dry and iron damp linen (up to 50% residual moisture) in a single operation, bypassing the tumble dryer completely. With a 33 cm diameter heated roller, Nomex ironing belts, and a compact wall-installation footprint where linen is returned to the front, the MCA Line saves immense floor space, labor time, and energy costs.",
        summaryBlocks: [
          {
            title: "Direct Dry & Iron in One Pass",
            subtitle: "Bypasses the tumble dryer",
            text: "Accepts linen straight from high-spin washing machines with up to 50% residual moisture, drying and ironing simultaneously to reduce processing steps.",
            bullets: [
              "Eliminates tumble dryer step for flatwork",
              "Drastically cuts overall laundry cycle times",
              "Saves floor space and utility energy",
              "Nomex belts withstand heavy continuous heat"
            ]
          },
          {
            title: "Compact Wall-Mount Footprint",
            subtitle: "Front feeding and front return",
            text: "Engineered with front-only feeding and return, allowing the unit to be placed directly against a wall in restaurants, pubs, and boutique hotels.",
            bullets: [
              "Flush-to-wall installation",
              "Front linen collection table",
              "Standard electronic inverter speed regulation",
              "Full-length hand-safe protection bar"
            ]
          }
        ]
      },
      benefits: {
        blocks: [
          {
            title: "Inverter Speed Control",
            subtitle: "Adapts to linen dampness",
            text: "Electronic inverter allows operators to fine-tune ironing speed based on linen weight, fabric thickness, and residual moisture levels."
          },
          {
            title: "Large Collection Basin",
            subtitle: "Clean and hygienic linen handling",
            text: "Spacious collection tray catches ironed linen securely, preventing sheets and tablecloths from touching the laundry room floor."
          },
          {
            title: "High Heat Efficiency",
            subtitle: "Low energy consumption",
            text: "Optimized thermal insulation and direct contact heated cylinder transfer maximum heat into the linen with minimal radiant heat loss."
          }
        ]
      },
      technologies: {
        blocks: [
          {
            title: "Nomex Ironing Belts",
            subtitle: "Thermal resilience",
            text: "High-grade Nomex belts ensure smooth feeding and excellent grip without leaving seam marks or belt impressions on fine table linens."
          },
          {
            title: "Automatic Exhaust Suction",
            subtitle: "Moisture evacuation",
            text: "Powerful extraction fan evacuates evaporated moisture immediately, maintaining optimal drying conditions inside the ironing chamber."
          }
        ]
      },
      specs: {
        table: [
          { label: "Roller Diameter", value: "Ø 330 mm (33 cm)" },
          { label: "Working Widths Available", value: "1500 mm (MCA 1500), 1800 mm (MCA 1800), 2100 mm (MCA 2100)" },
          { label: "Operation Type", value: "Single-Pass Direct Drying & Ironing (up to 50% moisture)" },
          { label: "Installation Type", value: "Wall-standing with Front Feeding and Front Return" },
          { label: "Heating Options", value: "Electric or Gas (Electronic Spark Ignition)" },
          { label: "Speed Control", value: "Standard Frequency Inverter Drive" },
          { label: "Ironing Bands", value: "Heat-Resistant Nomex Belts" },
          { label: "Safety Systems", value: "Hand-Protection Bar with Instant Stop & Finger Guard" }
        ]
      }
    }
  },

  "imesa-mcm-ironer": {
    category: "Drying Ironers",
    title: "MCM INDUSTRIAL DRYING IRONERS",
    subtitle: "MCM Series (Ø 502 mm / 2500 - 3200 mm)",
    description: "High-productivity industrial drying ironer with 82% roller contact, output up to 140 kg/h, IM10 touch control, and modular feeder and folder units.",
    img: mcmIronerImg,
    badge: "Up to 140 kg/h",
    tabs: {
      overview: {
        introTitle: "HIGH-CAPACITY INDUSTRIAL DRYING & FINISHING",
        introText: "The IMESA MCM Series represents the heavy-duty industrial pinnacle of drying ironers. Featuring a massive 502 mm diameter heated roller and expansive ironing widths up to 3200 mm, the MCM provides up to 82% circumferential fabric contact for unmatched thermal transfer. Controlled by the IM10 touchscreen computer and available with automated feeding bands, longitudinal and cross folders, and two independent ironing lanes, the MCM delivers up to 140 kg/hour of flawless flatwork.",
        summaryBlocks: [
          {
            title: "82% Circumferential Contact",
            subtitle: "Massive thermal heat exchange",
            text: "Textiles stay in continuous contact with 82% of the large 502 mm heated cylinder, generating rapid evaporation and pristine mirror-smooth flatwork finish.",
            bullets: [
              "502 mm (approx. 50 cm) diameter heated roller",
              "Massive 82% circumferential contact surface",
              "High throughput output up to 140 kg/hour",
              "Working widths up to 3200 mm (3.2 m)"
            ]
          },
          {
            title: "Modular Feeder & Folder Automation",
            subtitle: "Versatile modular production line",
            text: "Can be configured as a standalone unit, with motorized front or rear exits, automated feeding belts, and integrated longitudinal/cross folders.",
            bullets: [
              "IM10 Touch Screen digital interface",
              "Dual-lane operation for pillowcases & napkins",
              "Integrated longitudinal and cross folder options",
              "Automatic speed-temperature synchronization"
            ]
          }
        ]
      },
      benefits: {
        blocks: [
          {
            title: "Two Independent Ironing Lanes",
            subtitle: "Double small-item productivity",
            text: "Operators can iron two separate lines of tablecloths or pillowcases simultaneously with individual lane controls, doubling throughput."
          },
          {
            title: "Automatic Speed/Temperature Compensation",
            subtitle: "Zero damp linen delivery",
            text: "Sensors monitor temperature fluctuations and adjust roller speed dynamically so linen exits perfectly dried and pressed at all times."
          },
          {
            title: "Electric, Gas, or Steam Heating",
            subtitle: "Flexible power configuration",
            text: "Adaptable to all industrial laundry utility supplies, including high-pressure steam boilers and modulated gas burners."
          }
        ]
      },
      technologies: {
        blocks: [
          {
            title: "IM10 Touch Control Terminal",
            subtitle: "Industry 4.0 production management",
            text: "Stores custom ironing recipes for different fabric densities, logs hourly production metrics, and connects to the IMConnect cloud."
          },
          {
            title: "Suction Feeding System",
            subtitle: "Smooth linen introduction",
            text: "Suction belts pull linens flat against the feed table, eliminating wrinkles and folds before textiles reach the heated roller."
          }
        ]
      },
      specs: {
        table: [
          { label: "Roller Diameter", value: "Ø 502 mm (approx. 50 cm)" },
          { label: "Working Widths Available", value: "2500 mm (MCM 250), 2800 mm (MCM 280), 3200 mm (MCM 320)" },
          { label: "Ironing Output Capacity", value: "Up to 140 kg/hour" },
          { label: "Circumferential Contact", value: "82% Heated Surface Contact" },
          { label: "Heating Options", value: "Electric, Gas, or High-Pressure Steam" },
          { label: "Control Computer", value: "IM10 Touch Screen with Speed-Temperature Compensation" },
          { label: "Automation Modules", value: "Suction Feeder, Motorized Rear Return, Longitudinal & Cross Folders" },
          { label: "Ironing Lanes", value: "1 Large Center Lane or 2 Independent Lanes" }
        ]
      }
    }
  }
};

// Route Alias Mapping to ensure backward compatibility
const SLUG_ALIASES = {
  "imesa-washing-machines": "imesa-lm-series",
  "lm-series": "imesa-lm-series",
  "high-spin-industrial-washing-machines": "imesa-lm-series",
  "d2w-barrier": "imesa-d2w-barrier",
  "hygiene-barrier-washers": "imesa-d2w-barrier",
  "imesa-dryers": "imesa-es-smart",
  "es-smart": "imesa-es-smart",
  "es-smart-line": "imesa-es-smart",
  "es-premium": "imesa-es-premium",
  "es-premium-line": "imesa-es-premium",
  "fi-easy": "imesa-fi-easy",
  "fi-easy-line": "imesa-fi-easy",
  "fi-smart": "imesa-fi-smart",
  "fi-smart-line": "imesa-fi-smart",
  "mca-series": "imesa-mca-ironer",
  "mca-ironer": "imesa-mca-ironer",
  "mcm-series": "imesa-mcm-ironer",
  "mcm-ironer": "imesa-mcm-ironer"
};

export default function ImesaProduct() {
  const { id } = useParams();
  const detailsRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const rawId = (id || "").toLowerCase();
  const resolvedKey = IMESA_PRODUCTS[rawId] 
    ? rawId 
    : SLUG_ALIASES[rawId] || "imesa-lm-series";

  const product = IMESA_PRODUCTS[resolvedKey] || IMESA_PRODUCTS["imesa-lm-series"];

  // Scroll-driven interactive image animation
  const { scrollYProgress } = useScroll({
    target: detailsRef,
    offset: ["start start", "end end"]
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 25, restDelta: 0.001 });
  const imageScale = useTransform(smoothProgress, [0, 0.5, 1], [0.96, 1.05, 0.98]);
  const imageY = useTransform(smoothProgress, [0, 1], [-25, 25]);

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800">
      <Navbar />

      {/* ── 1. Header Section in IMESA Signature Vibrant Cyan/Blue ── */}
      <section className="relative pt-24 pb-12 lg:pt-32 lg:pb-20 overflow-hidden bg-[#00A3E0] border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <Link 
            to="/brands/imesa" 
            className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors mb-8 group font-bold tracking-widest text-xs uppercase"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to IMESA Catalog
          </Link>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-[2px] bg-white" />
              <h4 className="text-white text-sm md:text-base font-bold tracking-[0.2em] uppercase">
                {product.category}
              </h4>
            </div>
            
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-3 tracking-tight">
              {product.title}
            </h1>
            <h3 className="text-xl md:text-2xl text-white/90 font-semibold mb-6">
              {product.subtitle}
            </h3>
            
            <p className="text-lg md:text-xl text-white/90 leading-relaxed max-w-3xl font-light">
              {product.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── 2. Content & Large Machine Showcase Layout with Scroll Animation ── */}
      <section ref={detailsRef} className="py-16 lg:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            
            {/* Left Sticky Column: Large Prominent Machine Image & Actions */}
            <div className="lg:col-span-5 xl:col-span-5 h-full">
              <div className="sticky top-28 z-10 space-y-6">
                {/* Big Studio Machine Showcase Card */}
                <div className="bg-white rounded-3xl p-6 lg:p-8 border border-slate-200/80 shadow-xl overflow-hidden group">
                  {/* Top Meta Bar */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="inline-flex items-center gap-1.5 bg-[#001F3F] text-white text-[11px] font-bold px-3.5 py-1.5 rounded-full uppercase tracking-wider shadow-sm">
                      {product.badge}
                    </span>
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                      {product.category}
                    </span>
                  </div>

                  {/* Greatly Enlarged Machine Image Container with Real-time Scroll Animation */}
                  <div className="relative flex items-center justify-center min-h-[380px] md:min-h-[460px] lg:min-h-[520px] w-full p-2 bg-white rounded-2xl overflow-hidden">
                    <motion.div 
                      style={{ scale: imageScale, y: imageY }}
                      className="w-full h-full flex items-center justify-center will-change-transform"
                    >
                      <img 
                        src={product.img} 
                        alt={product.title}
                        className="w-full h-full max-h-[480px] lg:max-h-[540px] object-contain drop-shadow-xl"
                      />
                    </motion.div>
                  </div>

                  {/* Action Buttons */}
                  <div className="mt-6 pt-6 border-t border-slate-100 space-y-3">
                    <button className="w-full bg-[#00A3E0] hover:bg-[#001F3F] text-white py-4 px-6 rounded-xl font-bold tracking-wide transition-colors duration-300 shadow-md">
                      Request Technical Quote
                    </button>
                    <button className="w-full bg-slate-50 hover:bg-slate-100 text-[#001F3F] border border-slate-200 py-3.5 px-6 rounded-xl font-bold tracking-wide transition-colors duration-300 text-sm">
                      Download Datasheet
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Detailed Product Information & Specifications */}
            <div className="lg:col-span-7 xl:col-span-7 space-y-16">
              {/* Product Overview */}
              <div>
                <h2 className="text-2xl md:text-3xl font-black text-[#001F3F] mb-6">
                  {product.tabs.overview.introTitle}
                </h2>
                <p className="text-lg text-slate-600 leading-relaxed">
                  {product.tabs.overview.introText}
                </p>
              </div>

              {/* Engineering Highlights */}
              <div>
                <h3 className="text-xl font-black text-[#001F3F] mb-6">Engineering Highlights</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {product.tabs.overview?.summaryBlocks?.map((block, idx) => (
                    <div key={idx} className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                      {block.title && <h3 className="text-lg font-bold text-[#00A3E0] mb-2">{block.title}</h3>}
                      {block.subtitle && <h4 className="text-sm font-bold text-[#001F3F] mb-3">{block.subtitle}</h4>}
                      {block.text && <p className="text-slate-600 leading-relaxed text-sm mb-4">{block.text}</p>}
                      {block.bullets && (
                        <ul className="space-y-2 pt-3 border-t border-slate-100">
                          {block.bullets.map((b, i) => (
                            <li key={i} className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                              <CheckCircle2 className="w-3.5 h-3.5 text-[#00A3E0] shrink-0" />
                              <span>{b}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Technical Specifications Table */}
              <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
                <div className="bg-[#001F3F] p-6 flex items-center justify-between">
                  <h3 className="text-lg font-bold text-white flex items-center gap-2.5">
                    <Award className="w-5 h-5 text-[#00A3E0]" />
                    Technical Specifications
                  </h3>
                  <span className="text-white/60 text-xs font-semibold uppercase tracking-wider">
                    {product.subtitle}
                  </span>
                </div>
                <div className="p-0 overflow-x-auto w-full">
                  <table className="w-full text-left border-collapse">
                    <tbody>
                      {product.tabs.specs?.table?.map((row, idx) => (
                        <tr key={idx} className="border-b border-slate-100 last:border-0 hover:bg-slate-50 transition-colors">
                          <th className="py-4 px-6 text-[#001F3F] font-bold text-xs uppercase tracking-wider w-5/12 align-top">
                            {row.label}
                          </th>
                          <td className="py-4 px-6 text-slate-600 text-sm">
                            {row.value}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Key Benefits */}
              <div>
                <h2 className="text-2xl md:text-3xl font-black text-[#001F3F] mb-8 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#00A3E0]/10 flex items-center justify-center">
                    <div className="w-3 h-3 rounded-full bg-[#00A3E0]" />
                  </div>
                  Key Benefits
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-8">
                  {product.tabs.benefits?.blocks?.map((block, idx) => (
                    <div key={idx} className="relative pl-6 border-l-2 border-[#00A3E0]/30 hover:border-[#00A3E0] transition-colors">
                      <h4 className="text-lg font-bold text-[#001F3F] mb-2">{block.title}</h4>
                      {block.subtitle && <h5 className="text-sm font-bold text-[#00A3E0] mb-2">{block.subtitle}</h5>}
                      <p className="text-slate-600 text-sm leading-relaxed">{block.text}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Core Technologies */}
              <div className="pt-8 border-t border-slate-200">
                <h2 className="text-2xl md:text-3xl font-black text-[#001F3F] mb-8 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#00A3E0]/10 flex items-center justify-center">
                    <div className="w-3 h-3 rounded-full bg-[#00A3E0]" />
                  </div>
                  Core Technologies & Systems
                </h2>
                <div className="grid grid-cols-1 gap-6">
                  {product.tabs.technologies?.blocks?.map((block, idx) => (
                    <div key={idx} className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm flex flex-col sm:flex-row gap-6 items-start hover:shadow-md transition-shadow">
                      <div className="w-14 h-14 rounded-2xl bg-[#00A3E0]/10 flex items-center justify-center shrink-0 border border-[#00A3E0]/20 text-[#00A3E0]">
                        <Cpu className="w-7 h-7" />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-[#001F3F] mb-1">{block.title}</h4>
                        {block.subtitle && <h5 className="text-sm font-bold text-[#00A3E0] mb-3">{block.subtitle}</h5>}
                        <p className="text-slate-600 leading-relaxed text-sm">{block.text}</p>
                      </div>
                    </div>
                  ))}
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
