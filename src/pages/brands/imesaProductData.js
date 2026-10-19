// Official IMESA Products Database (Direct clone of imesa.it data and structure)
import lmSeriesImg from '../../assets/brands/imesa/imesa-lm-series.png';
import lm811Img from '../../assets/brands/imesa/imesa-lm-8-11.jpg';
import lm2632Img from '../../assets/brands/imesa/imesa-lm-26-32.png';
import lm4085Img from '../../assets/brands/imesa/imesa-lm-40-85.jpg';
import lm100125Img from '../../assets/brands/imesa/imesa-lm-100-125.jpg';

import d2wBarrierImg from '../../assets/brands/imesa/remote/Lavatrice-a-barriera-asettica_Barrier-Washers_D2W_18_1.jpg';
import d2w3055Img from '../../assets/brands/imesa/remote/A_D2W-30_55_F1-copia-1000x1000.jpg';

import esSmartImg from '../../assets/brands/imesa/imesa-es-smart.png';
import esPremiumImg from '../../assets/brands/imesa/imesa-es-premium.png';
import fiEasyImg from '../../assets/brands/imesa/remote/fi2022_02.439.png';
import fiSmartImg from '../../assets/brands/imesa/remote/fi2022_03.369.png';
import mcaIronerImg from '../../assets/brands/imesa/remote/IMESA_Calandre-asciuganti_Drying-Ironing_MCA_NEW_FRONTE-1.png';
import mcmIronerImg from '../../assets/brands/imesa/remote/Calandre-asciuganti_Drying-Ironing_MCM_1.jpg';

// Local mirrored assets for 100% reliability, zero 403 blocks, and instant loading
const localAssets = import.meta.glob('../../assets/brands/imesa/remote/*.*', { eager: true, import: 'default' });

export function resolveAsset(urlOrFilename) {
  if (!urlOrFilename) return null;
  const filename = urlOrFilename.split('/').pop();
  for (const [path, mod] of Object.entries(localAssets)) {
    if (path.endsWith('/' + filename)) {
      return mod;
    }
  }
  return urlOrFilename;
}

// Sibling navigation groups for capacity switching
const LM_SIBLINGS = [
  { id: 'imesa-lm-8-11', label: 'LM 8 - 11 kg' },
  { id: 'imesa-lm-series', label: 'LM 14 - 18 - 23 kg' },
  { id: 'imesa-lm-26-32', label: 'LM 26 - 32 kg' },
  { id: 'imesa-lm-40-85', label: 'LM 40 - 55 - 70 - 85 kg' },
  { id: 'imesa-lm-100-125', label: 'LM 100 - 125 kg' }
];

const D2W_SIBLINGS = [
  { id: 'imesa-d2w-barrier', label: 'D2W 18 - 23 kg' },
  { id: 'imesa-d2w-30-55', label: 'D2W 30 - 55 kg' }
];

const ES_SIBLINGS = [
  { id: 'imesa-es-smart', label: 'ES Smart Line (11 - 36 kg)' },
  { id: 'imesa-es-premium', label: 'ES Premium Line (11 - 75 kg)' }
];

const FI_SIBLINGS = [
  { id: 'imesa-fi-easy', label: 'FI Easy Line (Ø 250 - 330 mm)' },
  { id: 'imesa-fi-smart', label: 'FI Smart Line (Ø 250 - 330 mm)' }
];

const IRONER_SIBLINGS = [
  { id: 'imesa-mca-ironer', label: 'MCA Compact (Ø 330 mm)' },
  { id: 'imesa-mcm-ironer', label: 'MCM Industrial (Ø 502 mm)' }
];

const RAW_IMESA_PRODUCTS = {
  // ── 1. High Spin Washing Machines: LM 8 - 11 kg ──
  "imesa-lm-8-11": {
    id: "imesa-lm-8-11",
    category: "Washing Machines",
    subCategory: "High Spin Washing Machines",
    categorySlug: "washing-machines",
    seriesName: "LM Series (8 - 11 kg)",
    badge: "High Spin 350-400 G",
    title: "Industrial Washing Machine LM 8-11 kg",
    primaryImg: lm811Img,
    seriesSiblings: LM_SIBLINGS,
    galleryImages: ["A_LM-8_11_2023_F-1000x1000.jpg", "03-4.jpg", "02-4.jpg"],
    shortDesc: [
      "High spin industrial washing machines, faithful to the IMESA philosophy of tradition and technology.",
      "Efficiency, sturdiness and ease of use for high level washing results.",
      "Washing programmes to satisfy the need for energy, water and detergent savings.",
      "The innovative IM11 computer touchscreen makes programming, use and maintenance extremely simple and intuitive."
    ],
    iconBoxes: [
      { title: "INNOVATIVE IM11 7\" tilted capacitive touchscreen", iconUrl: "Icone-touch-screen.png" },
      { title: "Total control of wash cycles by wi-fi via IM11, IMConnect portal and Laundry for You App", iconUrl: "ICONA_TECNOLOGIA.png" },
      { title: "Infinite washing solutions", iconUrl: "ICONA_INFINITI-PROGRAMMI.png" },
      { title: "Drum and outer drum made of stainless steel AISI 304 AS STANDARD.", iconUrl: "ICONA_INOX.png" },
      { title: "350-400 G factor", iconUrl: "ICONA_FATTORE-G.png" },
      { title: "No anchoring to the ground", iconUrl: "Icone-caratteristiche.png" }
    ],
    highlights: [
      "New oversized door, the largest in its category, for easier loading and unloading",
      "Balanced water fill: hot and cold water are mixed during filling phase to save energy",
      "Programmable water, temperature, engine speed and rotation/break rate levels",
      "Self-service ready with centralised pay point, coin acceptor or other payment systems"
    ],
    techCards: [
      { title: "IM 11", text: "Learn more about technological innovation to support the customer." },
      { title: "IMConnect", text: "Remote laundry management for real-time production control, predictive maintenance and organisational agility." }
    ],
    learnMoreTable: [
      "New oversized door, the largest in its category, for easier loading and unloading.",
      "Improved the efficiency of the air flow system of the electrical panel.",
      "Reduced space between the drum and valve to zero water and detergent waste.",
      "Balancing system: vertical and horizontal shock absorbers for maximum stability and low noise.",
      "Compatible with water recovery tanks",
      "USB port for data transfer and HACCP trace reports",
      "Delayed start function",
      "Wet-Cleaning and MOP cycles ready"
    ],
    specsTable: [["MODELLI","LM 8","LM 11"],["Drum Size","535x360 &Oslash; x P mm","535x470 &Oslash; x P mm"],["Drum Volume","81 lt","105 lt"],["High spin speed","1002 r.p.m.","1002 r.p.m."],["G Factor","300","300"],["Water Connection","2 x 3/4&rdquo; &Oslash;","2 x 3/4&rdquo; &Oslash;"],["Water Drain","50 &Oslash; mm","50 &Oslash; mm"],["Size: LxWxH","720x821x1113 mm","720x933x1113 mm"],["Net Weight","254 Kg","264 Kg"],["Packaging Size: LxWxH","760x940x1210 mm","760x1045x1210 mm"],["Gross Weight","267 Kg","276 Kg"],["Electrical Heating Power","7,5 kW","10,5 kW"],["Steam Consumption","4 kg/h (Ciclo B-ISO9398)","6 kg/h (Ciclo B-ISO9398)"],["Container 20\" - 40\" loading plane","36 - 74 pcs stacked","32 - 68 pcs stacked"]]
  },

  // ── 2. High Spin Washing Machines: LM 14 - 18 - 23 kg ──
  "imesa-lm-series": {
    id: "imesa-lm-series",
    category: "Washing Machines",
    subCategory: "High Spin Washing Machines",
    categorySlug: "washing-machines",
    seriesName: "LM Series (14 - 23 kg)",
    badge: "High Spin 350-400 G",
    title: "Industrial Washing Machine LM 14-18-23 kg",
    primaryImg: lmSeriesImg,
    seriesSiblings: LM_SIBLINGS,
    galleryImages: ["A_LM_14_18_23_F_1.png", "B_LM_14_18_23_P1_1.png", "C_LM_14_18_23_P2_1.png", "03-4.jpg", "02-4.jpg"],
    shortDesc: [
      "High spin industrial washing machines, faithful to the IMESA philosophy of tradition and technology.",
      "Efficiency, sturdiness and ease of use for high level washing results.",
      "Washing programmes to satisfy the need for energy, water and detergent savings.",
      "The innovative IM11 computer touchscreen makes programming, use and maintenance extremely simple and intuitive."
    ],
    iconBoxes: [
      { title: "INNOVATIVE IM11 7\" tilted capacitive touchscreen", iconUrl: "Icone-touch-screen.png" },
      { title: "Total control of wash cycles by wi-fi via the IM11, IMConnect portal and Laundry for You App", iconUrl: "ICONA_TECNOLOGIA.png" },
      { title: "Infinite washing solutions", iconUrl: "ICONA_INFINITI-PROGRAMMI.png" },
      { title: "Drum and outer drum made of stainless steel AISI 304 AS STANDARD. Front, top and side panels in INOX 304 ON REQUEST.", iconUrl: "ICONA_INOX.png" },
      { title: "350-400 G factor", iconUrl: "ICONA_FATTORE-G.png" },
      { title: "No anchoring to the ground", iconUrl: "Icone-caratteristiche.png" }
    ],
    highlights: [
      "5 alternative heating methods: hot water, electric, Electric + steam, direct steam, indirect steam",
      "Balanced water fill: hot and cold water are mixed during the filling phase to save energy",
      "Management of delicate laundry for the specific treatment of all types of fabrics",
      "Programmable water, temperature, engine speed and rotation/break rate levels for total customization of washing cycles"
    ],
    techCards: [
      { title: "IM 11", text: "Learn more about technological innovation to support the customer." },
      { title: "IMConnect", text: "With IMConnect, space is given to remote laundry management for real-time production control, valuable data acquisition, predictive maintenance and organisational agility." }
    ],
    learnMoreTable: [
      "New: glazing door with hand operation door lock system, lock support pins and conical gasket. Anti-vibration sides and electrical panel air flow system improved efficiency",
      "Easily removable front panel for easy maintenance of the exhaust valve and shock absorber control",
      "Reduced space between the drum and valve to zero water and detergent waste",
      "Balancing system: vertical and horizontal shock absorbers for maximum stability and low noise.",
      "Hand operation door lock system.",
      "Also available in self-service version with payment by centralised pay point, coin acceptor or other payment systems",
      "Compatible with water recovery tanks",
      "Control panel tilted for better visibility and easy use",
      "USB port",
      "Delayed start function",
      "Wet-Cleaning and MOP cycles ready",
      "Interactive TapTech label"
    ],
    specsTable: [
      ["MODELLI", "LM 14", "LM 18", "LM 23"],
      ["Drum Size", "700x365 Ø x P mm", "700x470 Ø x P mm", "700x560 Ø x P mm"],
      ["Drum Volume", "141 lt", "181 lt", "216 lt"],
      ["High spin speed", "915 r.p.m.", "915 r.p.m.", "915 r.p.m."],
      ["G Factor", "327", "327", "327"],
      ["Water Connection", "2 x 3/4\" Ø", "2 x 3/4\" Ø", "2 x 3/4\" Ø"],
      ["Water Drain", "50 Ø mm", "50 Ø mm", "50 Ø mm"],
      ["Size: LxWxH", "880x899x1285 mm", "880x1004x1285 mm", "880x1094x1285 mm"],
      ["Net Weight", "416 Kg", "432 Kg", "451,8 Kg"],
      ["Packaging Size: LxWxH", "920x1150x1400 mm", "920x1150x1400 mm", "920x1150x1400 mm"],
      ["Gross Weight", "431,1 Kg", "447,3 Kg", "467,1 Kg"],
      ["Electrical Heating Power", "11 kW", "14 kW", "17 kW"],
      ["Steam Consumption", "9 kg/h (Ciclo B - ISO 9398)", "11 kg/h (Ciclo B - ISO 9398)", "14 kg/h (Ciclo B - ISO 9398)"],
      ["Container loading plane", "12 - 26 pcs", "12 - 26 pcs", "12 - 26 pcs"]
    ]
  },

  // ── 3. High Spin Washing Machines: LM 26 - 32 kg ──
  "imesa-lm-26-32": {
    id: "imesa-lm-26-32",
    category: "Washing Machines",
    subCategory: "High Spin Washing Machines",
    categorySlug: "washing-machines",
    seriesName: "LM Series (26 - 32 kg)",
    badge: "High Spin 350-400 G",
    title: "Industrial Washing Machine LM 26-32 kg",
    primaryImg: lm2632Img,
    seriesSiblings: LM_SIBLINGS,
    galleryImages: ["A_LM_26_32_F_1-1000x707.png", "03-4.jpg", "02-4.jpg"],
    shortDesc: [
      "High spin industrial washing machines developed on the basis of IMESA's sensitivity to new market needs.",
      "Efficiency, sturdiness and ease of use for high level washing results.",
      "Ideal for medium-to-large hotels, healthcare linen facilities, and industrial laundries.",
      "Innovative IM11 computer touchscreen makes programming, use and maintenance extremely simple."
    ],
    iconBoxes: [
      { title: "INNOVATIVE IM11 7\" tilted capacitive touchscreen", iconUrl: "Icone-touch-screen.png" },
      { title: "Total control of wash cycles by wi-fi via IM11, IMConnect portal and Laundry for You App", iconUrl: "ICONA_TECNOLOGIA.png" },
      { title: "Infinite washing solutions", iconUrl: "ICONA_INFINITI-PROGRAMMI.png" },
      { title: "Drum and outer drum made of stainless steel AISI 304 AS STANDARD.", iconUrl: "ICONA_INOX.png" },
      { title: "350-400 G factor", iconUrl: "ICONA_FATTORE-G.png" },
      { title: "No anchoring to the ground", iconUrl: "Icone-caratteristiche.png" }
    ],
    highlights: [
      "Double water fill valves for rapid balanced cycles",
      "Heavy duty suspension and multi-point shock absorbing system",
      "Easily removable front panel for quick access to drain valve and heating elements",
      "Standard IoT connectivity for predictive service alerts"
    ],
    techCards: [
      { title: "IM 11", text: "Learn more about technological innovation to support the customer." },
      { title: "IMConnect", text: "Remote laundry management for real-time production control, predictive maintenance and organisational agility." }
    ],
    learnMoreTable: [
      "New: glazing door with hand operation door lock system, lock support pins and conical gasket. Electrical panel air flow system improved efficiency",
      "Machine with efficient shock absorber system for minimum vibration transmission",
      "Easily removable front panel for easy maintenance of the exhaust valve and of heating elements",
      "Compatible with water recovery tanks",
      "USB port for cycle logging and recipe transfers",
      "Wet-Cleaning and MOP cycles ready"
    ],
    specsTable: [["MODELLI","LM 26","LM 32"],["Drum Size","855 x 444 &Oslash; x P mm","855 x 557 &Oslash; x P mm"],["Drum Volume","254 lt","320 lt"],["High spin speed","915 r.p.m.","915 r.p.m."],["G Factor","400","400"],["Water Connection","2 x 3/4&rdquo; &Oslash;","2 x 3/4&rdquo; &Oslash;"],["Water Drain","50 &Oslash; mm","50 &Oslash; mm"],["Size: LxWxH","1100 x 970 x 1440 mm","1100 x 1084 x 1440 mm"],["Net Weight","535 Kg","554 Kg"],["Packaging Size: LxWxH","1120x1130x1540 mm","1120x1130x1540 mm"],["Gross Weight","549,4 Kg","568,4 Kg"],["Electrical Heating Power","24 kW","24 kW"],["Steam Consumption","2 Kg/h (Ciclo B - ISO 9398)","4 Kg/h (Ciclo B - ISO 9398)"],["Container 20\" - 40\" loading plan","10 - 20 pcs","10 - 20 pcs"]]
  },

  // ── 4. High Spin Washing Machines: LM 40 - 55 - 70 - 85 kg ──
  "imesa-lm-40-85": {
    id: "imesa-lm-40-85",
    category: "Washing Machines",
    subCategory: "High Spin Washing Machines",
    categorySlug: "washing-machines",
    seriesName: "LM Series (40 - 85 kg)",
    badge: "High Spin Heavy Duty",
    title: "Industrial Washing Machine LM 40-55-70-85 kg",
    primaryImg: lm4085Img,
    seriesSiblings: LM_SIBLINGS,
    galleryImages: ["Lavatrici-supercentrifuganti_High-spin-washing-machines_LM_85_3-1000x707.jpg", "03-4.jpg", "02-4.jpg"],
    shortDesc: [
      "Robust and reliable high spin industrial washing machines engineered for heavy daily continuous duty.",
      "Designed for centralized hospitality facilities, hospitals, and high-volume commercial laundries.",
      "Dual pneumatic drain valves, reinforced chassis, and heavy load balancing.",
      "Equipped with the IM11 7\" touch screen for full traceability and precision dosing control."
    ],
    iconBoxes: [
      { title: "INNOVATIVE IM11 7\" tilted capacitive touchscreen", iconUrl: "Icone-touch-screen.png" },
      { title: "Total control of wash cycles by wi-fi via IM11, IMConnect portal and Laundry for You App", iconUrl: "ICONA_TECNOLOGIA.png" },
      { title: "Pneumatic water drain valves as standard", iconUrl: "Icone-caratteristiche.png" },
      { title: "AISI 304 stainless steel structure and drum", iconUrl: "ICONA_INOX.png" },
      { title: "350-400 G factor", iconUrl: "ICONA_FATTORE-G.png" },
      { title: "No anchoring to the ground", iconUrl: "Icone-caratteristiche.png" }
    ],
    highlights: [
      "Pneumatically operated drain valves for high-flow instant discharge",
      "Double water connections with integrated hot and cold mixing",
      "Advanced unbalance sensing system for ultra-smooth high spin ramp-up",
      "Pre-configured for up to 11 external liquid detergent pumps"
    ],
    techCards: [
      { title: "IM 11", text: "Learn more about technological innovation to support the customer." },
      { title: "IMConnect", text: "Remote laundry management for real-time production control, predictive maintenance and organisational agility." }
    ],
    learnMoreTable: [
      "New: glazing door with hand operation door lock system.",
      "Balancing system: vertical and horizontal shock absorbers for maximum stability and low noise",
      "Hand operation door lock system",
      "Compatible with water recovery tanks and water reuse loops",
      "USB port and direct LAN / Wi-Fi telemetry",
      "Pneumatic steam and water valves"
    ],
    specsTable: [["Modelli","LM 40","LM 55","LM 70","LM 85"],["Drum Size","880 x 650 &Oslash; x P mm","1080 x 603 &Oslash; x P mm","1200 x 618 &Oslash; x P mm","1200x 750 &Oslash; x P mm"],["Drum Volume","400 lt","562 lt","700 lt","850 lt"],["High spin speed","802 r.p.m.","802 r.p.m.","723 r.p.m.","723 r.p.m."],["G Factor","351","351","351","351"],["Water Connection","2 x 1&rdquo; &Oslash;","2 x 1&rdquo;1/2 &Oslash;","2 x 1&rdquo;1/2 &Oslash;","2 x 1&rdquo;1/2 &Oslash;"],["Water Drain","80 &Oslash; mm","80 &Oslash; mm","80 &Oslash; mm","80 &Oslash; mm"],["Size: LxWxH","1540x1452x1770 mm","1540x1667x1770 mm","1700x1479x2020 mm","1700x1611x2020 mm"],["Net Weight","1451,9 Kg","1620,9 Kg","1810,9 Kg","1851,8 Kg"],["Packaging Size: LxWxH","1540x1700x1910 mm","1540x1700x1910 mm","1700x1540x2200 mm","1750x1700x2200 mm"],["Packaging Size: LxWxH","1510 Kg","1680 Kg","1870 Kg","1912 Kg"],["Electrical Heating Power","29 kW","36 kW","38 kW","40 kW"],["Direct Steam Consumption","28 kg/h (Ciclo B - ISO9398)","39 kg/h (Ciclo B - ISO9398)","52 kg/h (Ciclo B - ISO9398)","63 kg/h (Ciclo B - ISO9398)"],["Container 20\" - 40\" loading plane","3 - 7 pcs","3 - 7 pcs","3 - 7 pcs","3 - 7 pcs"]]
  },

  // ── 5. High Spin Washing Machines: LM 100 - 125 kg ──
  "imesa-lm-100-125": {
    id: "imesa-lm-100-125",
    category: "Washing Machines",
    subCategory: "High Spin Washing Machines",
    categorySlug: "washing-machines",
    seriesName: "LM Series (100 - 125 kg)",
    badge: "Dual Tilting Option",
    title: "Industrial Washing Machine LM 100-125 kg",
    primaryImg: lm100125Img,
    seriesSiblings: LM_SIBLINGS,
    galleryImages: ["Lavatrici-supercentrifuganti_High-spin-washing-machines_LM_100_1-1000x707.jpg", "03-4.jpg", "02-4.jpg"],
    shortDesc: [
      "Dedicated high spin industrial washing machines specifically designed for ultra-high throughput.",
      "Available with pneumatic front and back tilting system to facilitate loading and unloading of massive linen cakes.",
      "Engineered for heavy industrial and textile processing plants operating on multi-shift production.",
      "Full IM11 computer control with customized wash algorithms and chemical dosing optimization."
    ],
    iconBoxes: [
      { title: "INNOVATIVE IM11 7\" tilted capacitive touchscreen", iconUrl: "Icone-touch-screen.png" },
      { title: "Forward and backward pneumatic tilting system available", iconUrl: "Icone-caratteristiche.png" },
      { title: "Double pneumatic door lock and 180° extra-wide opening", iconUrl: "Icone-oblo.png" },
      { title: "AISI 304 stainless steel structure and spider", iconUrl: "ICONA_INOX.png" },
      { title: "350 G factor high-efficiency moisture extraction", iconUrl: "ICONA_FATTORE-G.png" },
      { title: "Total Industry 4.0 telemetry via IMConnect", iconUrl: "ICONA_TECNOLOGIA.png" }
    ],
    highlights: [
      "Optional two-way pneumatic tilting system drastically reduces operator loading/unloading fatigue",
      "Wide 180° opening door with double pneumatic safety lock",
      "Reduced imbalance, heavy duty industrial bearings with extended working life",
      "Integrated weighing cells option for automatic water and chemical proportional metering"
    ],
    techCards: [
      { title: "IM 11", text: "Learn more about technological innovation to support the customer." },
      { title: "IMConnect", text: "Remote laundry management for real-time production control, predictive maintenance and organisational agility." }
    ],
    learnMoreTable: [
      "New: glazing door with hand operation door lock system",
      "Reduced imbalance, shock absorbers with a longer working life, low maintenance",
      "Double pneumatic closing and wide 180° opening of the door to facilitate loading and unloading the linen",
      "Dual forward/backward tilting system option",
      "High volume dual drain valves for rapid cycle turnaround",
      "Full HACCP compliance logging and remote telemetry"
    ],
    specsTable: [["Modelli","LM 100","LM 125"],["Drum Size","1270 x 878 &Oslash; x P mm","1270 x 1074 &Oslash; x P mm"],["Drum Volume","1000 lt","1250 lt"],["High spin speed","700 r.p.m.","700 r.p.m."],["G Factor","347","347"],["Water Connection","2 x 1&rdquo; 1/2 &Oslash;","2 x 1&rdquo; 1/2 &Oslash;"],["Water Drain","80 &Oslash; mm","2 x 80 &Oslash; mm"],["Size: LxWxH","1700x1644x2065 mm","1700x1834x2065 mm"],["Net Weight","1990 Kg","2074 Kg"],["Packaging Size: LxWxH","1740x1740x2260 mm","1800x1930x2260 mm"],["Gross Weight","2050 Kg","2141 Kg"],["Steam Consumption","2,7 kg","3,4 kg"],["Container 20\" - 40\" loading plan","3 - 6 pcs","3 - 6 pcs"]]
  },

  // ── 6. Hygiene Barrier Washers: D2W 18 - 23 kg ──
  "imesa-d2w-barrier": {
    id: "imesa-d2w-barrier",
    category: "Washing Machines",
    subCategory: "Hygiene Barrier Washers",
    categorySlug: "washing-machines",
    seriesName: "D2W Series (18 - 23 kg)",
    badge: "EN 14065 / RABC",
    title: "Hygiene Barrier Washers D2W 18-23 Kg",
    primaryImg: d2wBarrierImg,
    seriesSiblings: D2W_SIBLINGS,
    galleryImages: ["Lavatrice-a-barriera-asettica_Barrier-Washers_D2W_18_5.jpg", "Lavatrice-a-barriera-asettica_Barrier-Washers_D2W_18_1.jpg", "Lavatrice-a-barriera-asettica_Barrier-Washers_D2W_18_2.jpg", "Lavatrice-a-barriera-asettica_Barrier-Washers_D2W_18_4.jpg", "Lavatrice-a-barriera-asettica_Barrier-Washers_D2W_18_3.jpg"],
    shortDesc: [
      "D2W 18 and 23 kg hygiene barrier industrial washing machine are ideal for small and medium-sized structures.",
      "Efficiency, sturdiness and ease of use for high level washing results.",
      "The hygiene barrier washers are suitable as hospital washing machine.",
      "With two doors, one for loading and one for unloading, infected linen is loaded in the dirty room and clean linen is unloaded from the opposite side in a sterile room according to EN 14065 (RABC)."
    ],
    iconBoxes: [
      { title: "INNOVATIVE IM11 7\" capacitive touchscreen", iconUrl: "Icone-touch-screen.png" },
      { title: "Total control of wash cycles by wi-fi via the IM11, IMConnect portal and Laundry for You App", iconUrl: "ICONA_TECNOLOGIA.png" },
      { title: "Infinite washing solutions", iconUrl: "ICONA_INFINITI-PROGRAMMI.png" },
      { title: "AISI 304 stainless steel structure and spider", iconUrl: "ICONA_INOX.png" },
      { title: "300-350 G factor", iconUrl: "ICONA_FATTORE-G.png" }
    ],
    highlights: [
      "Hygiene Barrier Washers designed for full biological separation (EN 14065)",
      "3 alternative heating methods: electric, direct or indirect steam",
      "Electronic interlock of opposite doors to prevent contamination",
      "Display on clean side to visualise progress, time left and end of programme"
    ],
    techCards: [
      { title: "IM 11", text: "Learn more about technological innovation to support the customer." },
      { title: "IMConnect", text: "Remote laundry management for real-time production control, valuable data acquisition, predictive maintenance and organisational agility." }
    ],
    learnMoreTable: [
      "Two large opposite doors separate loading of the dirty linen from unloading of the clean linen to avoid the risk of contamination",
      "Automatic positioning of the drum for easy opening.",
      "The washing machine is mounted on a raised platform for maximum ergonomics while loading the linen",
      "Hot and cold water connection",
      "Emergency stop button to interrupt the cycle if needed for total safety",
      "No anchoring to the ground",
      "Compatible with water recovery tanks",
      "USB port",
      "Delayed start function"
    ],
    specsTable: [
      ["MODELLI", "D2W 18", "D2W 23"],
      ["Drum Size", "700 x 470 Ø x P mm", "700 x 560 Ø x P mm"],
      ["Drum Volume", "180 lt", "215 lt"],
      ["High spin speed", "877 r.p.m.", "877 r.p.m."],
      ["G Factor", "300", "300"],
      ["Water Connection", "2 x 3/4\" Ø", "2 x 3/4\" Ø"],
      ["Water Drain", "50 Ø mm", "50 Ø mm"],
      ["Size: LxWxH", "967x980x1570 mm", "967x1070x1570 mm"],
      ["Net Weight", "528,1 Kg", "540,3 Kg"],
      ["Packaging Size: LxWxH", "1150x1100x1700 mm", "1150x1100x1700 mm"],
      ["Gross Weight", "561,9 Kg", "574 Kg"],
      ["Electrical Heating Power", "12 kW", "15 kW"],
      ["Direct Steam Consumption", "1,2 kg", "1,8 kg/h"],
      ["Container 20\" - 40\" loading plan", "10 - 20 pcs", "10 - 20 pcs"]
    ]
  },

  // ── 7. Hygiene Barrier Washers: D2W 30 - 55 kg ──
  "imesa-d2w-30-55": {
    id: "imesa-d2w-30-55",
    category: "Washing Machines",
    subCategory: "Hygiene Barrier Washers",
    categorySlug: "washing-machines",
    seriesName: "D2W Series (30 - 55 kg)",
    badge: "EN 14065 / RABC",
    title: "Hygiene Barrier Washers D2W 30-55 Kg",
    primaryImg: d2w3055Img,
    seriesSiblings: D2W_SIBLINGS,
    galleryImages: ["A_D2W-30_55_F1-copia-1000x1000.jpg", "Lavatrice-a-barriera-asettica_Barrier-Washers_D2W_18_5.jpg"],
    shortDesc: [
      "D2W 30 and 55 kg hygiene barrier industrial washing machines are ideal for facilities coping with high linen volumes.",
      "Engineered for hospitals, cleanrooms, and surgical centers requiring absolute anti-contamination barriers.",
      "Dual opposed pass-through doors with automated drum positioning and electronic interlock.",
      "Stainless steel AISI 304 construction throughout with clean-side secondary status screen."
    ],
    iconBoxes: [
      { title: "INNOVATIVE IM11 7\" capacitive touchscreen", iconUrl: "Icone-touch-screen.png" },
      { title: "Total control of wash cycles by wi-fi via the IM11, IMConnect portal and Laundry for You App", iconUrl: "ICONA_TECNOLOGIA.png" },
      { title: "Infinite washing solutions", iconUrl: "ICONA_INFINITI-PROGRAMMI.png" },
      { title: "AISI 304 stainless steel structure and spider", iconUrl: "ICONA_INOX.png" },
      { title: "300-350 G factor", iconUrl: "ICONA_FATTORE-G.png" }
    ],
    highlights: [
      "High capacity hospital barrier washers designed for EN 14065 and RABC strict microbiological protocols",
      "Two large opposite doors prevent cross-contamination between dirty and sterile sectors",
      "Secondary digital display on sterile cleanroom side to monitor cycle progression",
      "Pneumatic braking and automatic drum positioning for effortless opening"
    ],
    techCards: [
      { title: "IM 11", text: "Learn more about technological innovation to support the customer." },
      { title: "IMConnect", text: "Remote laundry management for real-time production control, predictive maintenance and organisational agility." }
    ],
    learnMoreTable: [
      "Two large opposite doors separate loading the dirty linen from unloading of the clean linen",
      "Practical space-saving doors.",
      "Automatic positioning of the drum for easy opening.",
      "Pneumatic braking system for pinpoint door alignment",
      "Clean room display to visualise cycle advance and end of programme",
      "Raised platform ergonomic loading height",
      "Emergency stop button on both dirty and clean sides for total operator safety"
    ],
    specsTable: [["MODELLI","D2W 30","D2W 55"],["Drum Size","880 x 523 &Oslash; x P mm","977 x753 &Oslash; x P mm"],["Drum Volume","318 lt","565 lt"],["High spin speed","840 r.p.m.","802 r.p.m."],["G Factor","347","350"],["Water Connection","2 x 1&rdquo; &Oslash;","2 x 1&rdquo;1/2&rdquo; &Oslash;"],["Water Drain","80 &Oslash; mm","80 &Oslash; mm"],["Size: LxWxH","1373x1166x1968 mm","1627x1625x1908 mm"],["Net Weight","1047,1 Kg","1825,9 Kg"],["Packaging Size: LxWxH","1300x1300x2100 mm","1660x1700x2120 mm"],["Gross Weight","1084 Kg","1884 Kg"],["Electrical Heating Power","24 kW","30 kW"],["Direct Steam Consumption","3 kg","6 kg"]]
  },

  // ── 8. Dryers: ES Smart Line ──
  "imesa-es-smart": {
    id: "imesa-es-smart",
    category: "Dryers",
    subCategory: "Tumble Dryers ES Smart Line",
    categorySlug: "dryers",
    seriesName: "ES Smart Series (11 – 36 kg)",
    badge: "D-FLOW System",
    title: "Tumble Dryers ES Smart Line",
    modelsList: ["ES 11", "ES 14", "ES 18", "ES 23", "ES 26", "ES 32", "ES 36"],
    primaryImg: esSmartImg,
    seriesSiblings: ES_SIBLINGS,
    galleryImages: ["ES_36_SMART1.jpg", "ES_18_SMART1.jpg", "ES_18_SMART2.jpg", "ES_18_SMART3.jpg", "ES_36_SMART2.jpg", "ES_36_SMART3.jpg"],
    shortDesc: [
      "The <span class=\"text-[#009ee2] font-semibold\">ES Smart tumble dryer line</span> delivers top-level performance and ensures high energy efficiency.",
      "It is the perfect choice for facilities looking to manage drying programs independently, with flexibility and professional precision.",
      "Equipped with the <strong>IM10 computer touchscreen</strong> and <strong>patented D-FLOW</strong> axial airflow system."
    ],
    iconBoxes: [
      { title: "IM.10 Touch Screen Computer for efficient programming of drying cycles and performance monitoring", iconUrl: "Icone-touch-screen.png" },
      { title: "D-FLOW SYSTEM: new axial air flow system inside the drum", iconUrl: "Icone_D-Flow.png" },
      { title: "Standard drum alternating rotation reversal", iconUrl: "Icone-inverter.png" },
      { title: "Drying parameters can be freely modified even when the cycle is running", iconUrl: "Icone-ool-down.png" },
      { title: "Large double-glazed door, opening to the right and reversible on the field (extension kit included).", iconUrl: "Icone-oblo.png" },
      { title: "AISI 304 stainless steel drum with new \"soft care\" perforation for greater delicacy on fabrics.", iconUrl: "Icone-soft-care.png" }
    ],
    highlights: [
      "3 heating systems available: electric, steam and gas",
      "New practical drawer filter, easily removable and easy to clean.",
      "Multi-step heating function for optimal temperature management during the cycle: ensures greater delicacy in the treatment of garments.",
      "Dual power: two heating elements that can be activated independently (only for electric models).",
      "Cool down system, air cooling at the end of the cycle, and anti-wrinkle function for perfect and easy ironing"
    ],
    techCards: [
      { title: "IM 10", text: "Discover the innovative touch-screen interface" }
    ],
    learnMoreTable: [
      "IM.10 allows for virtually unlimited solutions to suit any type of fabric.",
      "The drum alternating rotation reversal is standard on the entire line and it ensures uniform drying, reducing creases and tangles.",
      "The high evaporation speed and the new axial air system D-FLOW SYSTEM allow the optimization of the available energy and guarantee rapid and effective cycles.",
      "The AISI 304 stainless steel drum is synonymous with durability and resistance.",
      "The Smart line is compatible with self-service payment systems.",
      "The Smart series offers a wide range of optional features to maximize performance and adapt perfectly to every operational need, including the humidity control sensor, particularly required in Wet Cleaning treatments."
    ],
    specsTable: [
      ["MODELLI", "SL ES 11", "SL ES 14", "SL ES 18", "SL ES 23", "SL ES 26", "SL ES 32", "SL ES 34"],
      ["Drum Size", "756 x 445 Ø x P mm", "756x565 Ø x P mm", "756x736 Ø x P mm", "977 x 565 Ø x P mm", "977 x 625 Ø x P mm", "977 x 775 Ø x P mm", "977 x 875 Ø x P mm"],
      ["Drum Volume", "195 lt.", "247,5 lt.", "322 lt.", "417 lt.", "462 lt.", "572 lt.", "646 lt."],
      ["Drying Speed", "38 r.p.m.", "38 r.p.m.", "38 r.p.m.", "44 r.p.m.", "44 r.p.m.", "44 r.p.m.", "44 r.p.m."],
      ["Drain Flow", "1200 m3/h", "1200 m3/h", "1200 m3/h", "1680 m3/h", "1680 m3/h", "1680 m3/h", "1680 m3/h"],
      ["Drain Diameter", "150 Ø mm", "150 Ø mm", "150 Ø mm", "200 Ø mm", "200 Ø mm", "200 Ø mm", "200 Ø"],
      ["Size: LxWxH", "789x796x1647 mm", "789x916x1647 mm", "789x1086x1647 mm", "1010x916x1932 mm", "1010x976x1932 mm", "1010x1126x1932 mm", "1010x1226x1932 mm"],
      ["Net Weight electric/gas/steam", "191 / 187 / 206 Kg", "202 / 198 / 217 Kg", "218 / 220 / 239 Kg", "261 / 267 / 286 Kg", "270 / 280 / 299 Kg", "282 / 293 / 312 Kg", "295 / 305 / 324 Kg"],
      ["Packaging Size: LxWxH", "836x790x1810 mm", "836x910x1810 mm", "836x1080x1810 mm", "1057x910x2095 mm", "1057x970x2095 mm", "1057x1126x2095 mm", "1057x1210x2095 mm"],
      ["Gross Weight electric/gas/steam", "200 / 196 / 215 Kg", "212 / 208 / 227 Kg", "231 / 233 / 252 Kg", "273 / 279 / 298 Kg", "283 / 293 / 313 Kg", "297 / 308 / 327 Kg", "311 / 321 / 340 Kg"],
      ["Electrical Heating Power", "12 kW (6x2)", "12 kW (6x2)", "18 kW (6x3)", "24 kW (6x4)", "24 kW (6x4)", "30 kW (6x5)", "30 kW (6x5)"],
      ["Steam Consumption", "26 Kg", "36 Kg", "46 Kg", "49 Kg", "52 Kg", "64 Kg", "73 Kg"],
      ["Steam heating consumption", "23,5 Kw", "23,5 kW", "23,5 Kw", "32 kW", "32 kW", "42 kW", "42 kW"],
      ["Container 20\" - 40\" loading plan", "14 - 30 pcs", "12 - 28 pcs", "12 - 28 pcs", "12 - 26 pcs", "12 - 24 pcs", "10 - 22 pcs", "10 - 21 pcs"]
    ]
  },

  // ── 9. Dryers: ES Premium Line ──
  "imesa-es-premium": {
    id: "imesa-es-premium",
    category: "Dryers",
    subCategory: "Tumble Dryers ES Premium Line",
    categorySlug: "dryers",
    seriesName: "ES Premium Series (11 – 75 kg)",
    badge: "Dual Power / Inverter",
    title: "Tumble Dryers ES Premium Line",
    modelsList: ["ES 11", "ES 14", "ES 18", "ES 23", "ES 26", "ES 32", "ES 36", "ES 55", "ES 75"],
    primaryImg: esPremiumImg,
    seriesSiblings: ES_SIBLINGS,
    galleryImages: ["ES_36_SMART1.jpg", "ES_18_SMART1.jpg", "ES_18_SMART2.jpg", "ES_18_SMART3.jpg", "ES_36_SMART2.jpg", "ES_36_SMART3.jpg"],
    shortDesc: [
      "At the top of the range, the <span class=\"text-[#009ee2] font-semibold\">ES Premium dryer line</span> combines exceptional drying performance with superior energy efficiency.",
      "With advanced, easily programmable functions, it is the perfect solution for businesses that demand precision and control in every cycle.",
      "Standard AISI 304 stainless steel front panel and <strong>soft-care drum perforation</strong> for delicate linen treatment."
    ],
    iconBoxes: [
      { title: "IM.10 Touch Screen Computer for efficient programming of drying cycles and performance monitoring", iconUrl: "Icone-touch-screen.png" },
      { title: "D-FLOW SYSTEM: new axial air flow system inside the drum", iconUrl: "Icone_D-Flow.png" },
      { title: "AISI 304 stainless steel drum with new \"soft care\" perforation for greater delicacy on fabrics.", iconUrl: "Icone-soft-care.png" },
      { title: "Drying parameters can be freely modified even when the cycle is running", iconUrl: "Icone-ool-down.png" },
      { title: "Large double-glazed door, opening to the right and reversible on the field (extension kit included).", iconUrl: "Icone-oblo.png" },
      { title: "Humidity control sensor", iconUrl: "Icone-caratteristiche.png" }
    ],
    highlights: [
      "3 heating systems available: electric, steam and gas",
      "New practical drawer filter, easily removable and easy to clean.",
      "Multi-step heating function for optimal temperature management during the cycle: ensures greater delicacy in the treatment of garments.",
      "Dual power: two heating groups that can be activated independently together with air flow control for better optimization of electrical consumption. (only for electric models).",
      "Cool down system operated by IM.10, air cooling at the end of the cycle, and anti-wrinkle function for perfect and easy ironing"
    ],
    techCards: [],
    learnMoreTable: [
      "Advanced drum rotation speed control as standard to optimise drying quality.",
      "The drum alternating rotation reversal is standard on the entire line and it ensures uniform drying, reducing creases and tangles.",
      "The high evaporation speed and the new axial air system D-FLOW SYSTEM allow the optimization of the available energy and guarantee rapid and effective cycles.",
      "Vacuum speed regulation as standard to ensure uniform and efficient drying",
      "The front panel of the Premium models is in AISI 304 stainless steel as standard and ensures maximum resistance and long life even in the most humid and demanding environments.",
      "The Premium line is compatible with self-service payment systems."
    ],
    specsTable: [
      ["MODELS", "PL ES 11", "PL ES 14", "PL ES 18", "PL ES 23", "PL ES 26", "PL ES 32", "PL ES 36"],
      ["Drum diameter", "756 x 445 Ø x P mm", "756 x 565 Ø x P mm", "756 x 736 Ø x P mm", "977 x 565 Ø x P mm", "977 x 565 Ø x P mm", "977 x 775 Ø x P mm", "977 x 875 Ø x P mm"],
      ["Drum volume", "195 lt.", "247,5 lt.", "322 lt.", "417 lt.", "462 lt.", "572 lt.", "646 lt."],
      ["Standard speed", "38 r.p.m.", "38 r.p.m.", "38 r.p.m.", "38 r.p.m.", "38 r.p.m.", "38 r.p.m.", "38 r.p.m."],
      ["Air flow", "1200 m3/h", "1200 m3/h", "1200 m3/h", "1680 m3/h", "1680 m3/h", "1680 m3/h", "1680 m3/h"],
      ["Load diameter", "150 Ø mm", "150 Ø mm", "150 Ø mm", "200 Ø mm", "200 Ø mm", "200 Ø mm", "200 Ø mm"],
      ["Machine dimension: LxPxH", "789x796x1647 mm", "789x916x1647 mm", "789x1086x1647 mm", "1010x916x1932 mm", "1010x976x1932 mm", "1010x1126x1932 mm", "1010x1226x1932 mm"],
      ["Net weight electr/gas/steam", "191 / 187 / 206 Kg", "202 / 198 / 217 Kg", "218 / 220 / 239 Kg", "261 / 267 / 286 Kg", "270 / 280 / 299 Kg", "282 / 293 / 312 Kg", "295 / 305 / 324 Kg"],
      ["Packaging dimensions: WxDxH", "836x790x1810 mm", "836x790x1810 mm", "836x1080x1810 mm", "1057x910x2095 mm", "1057x970x2095 mm", "1057x1126x2095 mm", "1057x1210x2095 mm"],
      ["Std. gross weight elettr/gas/steam", "200 / 196 / 215 Kg", "212 / 208 / 227 Kg", "231 / 233 / 252 Kg", "273 / 279 / 298 Kg", "283 / 293 / 313 Kg", "297 / 308 / 327 Kg", "311 / 321 / 340 Kg"],
      ["Electric heating power", "12 kW (6x2)", "12 kW (6x2)", "18 kW (6x3)", "24 kW (6x4)", "24 kW (6x4)", "30 kW (6x5)", "30 kW (6x5)"],
      ["Steam consumption", "26 Kg", "36 Kg", "46 Kg", "49 Kg", "52 Kg", "64 Kg", "73 Kg"],
      ["Power installed", "23,5 kW", "23,5 kW", "23,5 kW", "32 kW", "32 kW", "42 kW", "42 kW"],
      ["STD. packed machines in to 20' container", "14 - 30 pz", "12 - 28 pz", "12 - 28 pz", "12 - 26 pz", "12 - 26 pz", "10 - 22 pz", "10 - 21 pz"]
    ]
  },

  // ── 10. Flatwork Ironers: Easy Line ──
  "imesa-fi-easy": {
    id: "imesa-fi-easy",
    category: "Flatwork Ironers",
    subCategory: "Easy Line Flatwork Ironers",
    categorySlug: "flatwork-ironers",
    seriesName: "FI Series • Roller Length 1000 – 2000 mm • Ø 250 – 330 mm",
    badge: "Chromed Chest / Torsion Bar",
    title: "Flatwork Ironer Easy Line FI 100/25 – 120/25 – 150/25 – 160/33 – 180/33 – 200/33",
    titleFormatted: "Flatwork Ironer Easy Line FI 100/25 – 120/25 –<br class='hidden sm:inline' /> 150/25 – 160/33 – 180/33 – 200/33",
    modelsList: ["FI 100/25", "FI 120/25", "FI 150/25", "FI 160/33", "FI 180/33", "FI 200/33"],
    primaryImg: fiEasyImg,
    seriesSiblings: FI_SIBLINGS,
    galleryImages: ["fi2022_02.380-1.png", "fi2022_02.441.png", "fi2022_02.440.png", "fi2022_02.439.png", "fi2022_02.442.png"],
    shortDesc: [
      "The IMESA <em>Easy FI</em> <span class=\"text-[#009ee2] font-medium\">flatwork ironer series</span> is unique: dedicated to customers wholook for a simple but high-performance flatwork ironer.",
      "The IMESA <em>Easy FI</em> <span class=\"text-[#009ee2] font-medium\">flatwork ironer series</span> is equipped with analog control system, digital thermostat for temperature regulation, fixed ironing speed (adjustable with inverter on request) and fixed ironing pressure.",
      "It is the ideal solution for ironing in restaurants, <span class=\"text-[#009ee2] font-medium\">small hotels</span> and agritourisms."
    ],
    iconBoxes: [
      { title: "Analog control unit, adjustable ironing parameters, digital thermostat for temperature control.", iconUrl: "Icone_IM7Easy.png" },
      { title: "The IMESA Easy FI ironers are available 100-120-150cm long/diam. 25cm or 160-180-200cm long/diam. 33cm.", iconUrl: "ICONA_FATTORE-G.png" },
      { title: "Fixed or adjustable (opt.) ironing speed, fixed pressure.", iconUrl: "Icone-caratteristiche.png" },
      { title: "Cotton roller cover, chromed steel heating chest.", iconUrl: "Icone-caratteristiche.png" },
      { title: "Start and stop ironing foot control, adjustable feed table position,", iconUrl: "Icone-caratteristiche.png" },
      { title: "Safety devices: manual handle release, emergency stop, chest lifting pedal.", iconUrl: "ICONA_FATTORE-G.png" }
    ],
    highlights: [
      "New aesthetic and optimized machine dimensions.",
      "Analog control units, adjustable ironing parameters, digital thermostat for temperature control.",
      "Fixed or adjustable (opt.) ironing speed, fixed pressure.",
      "Uniform chest pressure throughout the entire length of the roller for top quality ironing.",
      "Options and Accessories: NOMEX roller cover, frequency variator for electronic control of ironing speed, vacuum, IoT (wi-fi connection) for remote control of the machine and cloth collection tray"
    ],
    techCards: [],
    learnMoreTable: [
      "Heating chest in chromed steel, rather than aluminium - less expansion and surface porosity.",
      "Roller cover in cotton cloth as standard. NOMEX cover on request.",
      "Start and stop ironing pedals operated by a simple pressure with the foot.",
      "Safety systems: manual handle release, emergency stop, chest lifting pedal.",
      "Ironing Speed control on request.",
      "Available with or without suction (on request).",
      "Cloth collection tray."
    ],
    specsTable: [
      ["MODELS", "Easy FI 100/25", "Easy FI 120/25", "Easy FI 150/25", "Easy FI 160/33", "Easy FI 180/33", "Easy FI 200/33"],
      ["Ironing surface", "1000 mm", "1200 mm", "1500 mm", "1600 mm", "1800 mm", "2000 mm"],
      ["Roller diameter", "250 Ømm", "250 Ømm", "250 Ømm", "330 Ømm", "330 Ømm", "330 Ømm"],
      ["Rotation Speed", "3 mt/min", "3 mt/min", "3 mt/min", "3 mt/min", "3 mt/min", "3 mt/min"],
      ["Adjustable speed (opt. inverter)", "1-6 mt/min", "1-6 mt/min", "1-6 mt/min", "1-6 mt/min", "1-6 mt/min", "1-6 mt/min"],
      ["Hourly production", "25 Kg/h", "30 Kg/h", "35 Kg/h", "40 Kg/h", "50 Kg/h", "60 Kg/h"],
      ["Ironing Humidity Required", "20%", "20%", "20%", "20%", "20%", "20%"],
      ["Humid Air Drain", "80 Ømm", "80 Ømm", "80 Ømm", "80 Ømm", "80 Ømm", "80 Ømm"],
      ["Suction Flow", "160 m3/h", "160 m3/h", "160 m3/h", "160 m3/h", "160 m3/h", "160 m3/h"],
      ["Size: LxWxH", "1550x643x985 mm", "1750x643x985 mm", "2050x643x985 mm", "2150x643x985 mm", "2350x643x985 mm", "2550x643x985 mm"],
      ["Net Weight", "117,4 Kg", "- Kg", "147,6 Kg", "180 Kg", "196,8 Kg", "213,8 Kg"],
      ["Packaging Size: LxWxH", "1600x645x1140 mm", "1800x645x1140 mm", "2100x645x1140 mm", "2200x645x1140 mm", "2400x645x1140 mm", "2600x645x1140 mm"],
      ["Gross Weight", "142 Kg", "- Kg", "177 Kg", "216 Kg", "229 Kg", "249 Kg"],
      ["Power", "4,5 kW", "5,4 kW", "7,3 kW", "7,3 kW", "10,5 kW", "13,8 kW"],
      ["Container 20\" - 40\" loading plan", "24 - 50 pcs stacked (High cube)", "18 - 36 pcs stacked (High cube)", "18 - 36 pcs stacked (High cube)", "18 - 36 pcs stacked (High cube)", "6 - 15 pcs", "6 - 12 pcs"]
    ]
  },

  // ── 11. Flatwork Ironers: Smart Line ──
  "imesa-fi-smart": {
    id: "imesa-fi-smart",
    category: "Flatwork Ironers",
    subCategory: "Smart Line Flatwork Ironers",
    categorySlug: "flatwork-ironers",
    seriesName: "FI Series • Roller Length 1000 – 2000 mm • Ø 250 – 330 mm",
    badge: "Patented Torsion Bar",
    title: "Flatwork Ironer Smart Line FI 100/25 – 120/25 – 150/25 – 160/33 – 180/33 – 200/33",
    titleFormatted: "Flatwork Ironer Smart Line FI 100/25 – 120/25 –<br class='hidden sm:inline' /> 150/25 – 160/33 – 180/33 – 200/33",
    modelsList: ["FI 100/25", "FI 120/25", "FI 150/25", "FI 160/33", "FI 180/33", "FI 200/33"],
    primaryImg: fiSmartImg,
    seriesSiblings: FI_SIBLINGS,
    galleryImages: ["fi2022_03.369.png", "fi2022_03.367.png", "fi2022_03.368.png", "fi2022_03.371.png", "fi2022_03.370.png"],
    shortDesc: [
      "The IMESA <em>Smart FI</em> <span class=\"text-[#009ee2] font-medium\">flatwork ironer series</span> is unique: top performance and maximum productivity.",
      "The IMESA <em>Smart FI</em> <span class=\"text-[#009ee2] font-medium\">flatwork ironer series</span> is equipped with the most modern devices to make the work in the laundry efficient, simple and safe.",
      "It is the ideal ironing solution for restaurants, <span class=\"text-[#009ee2] font-medium\">small hotels</span> and agritourisms."
    ],
    iconBoxes: [
      { title: "IM10 computer touch screen for easy programming and monitoring of ironing cycles.", iconUrl: "Icone-touch-screen.png" },
      { title: "«Thick» function: delays the closing of the roller for an easier introduction of the fabric.", iconUrl: "ICONA_FATTORE-G.png" },
      { title: "The IMESA Smart FI ironers are available 100-120-150cm long/diam. 25cm or 150-180-200cm long/diam. 33cm.", iconUrl: "Icone-caratteristiche.png" },
      { title: "The linear action device allows the ironing pressure control in order to adapt the program to the type of fabric treated.", iconUrl: "Icone-caratteristiche.png" },
      { title: "The torsion bar guarantees the uniform pressure of the chest all over the entire length of the roller, to get the best ironing results.", iconUrl: "Icone-caratteristiche.png" },
      { title: "The patented technology confirms the absolute uniqueness of the IMESA flatwork ironer.", iconUrl: "ICONA_BREVETTO.png" }
    ],
    highlights: [
      "Uniform ironing pressure over the entire length of the roller, electronically controlled for an excellent ironing result.",
      "Programmes with customised temperature and speed for different types of fabric for perfect ironing, even with difficult creases.",
      "Electronic ironing speed control by inverter.",
      "Automatic regulation of ironing speed according to temperature variation: constant quality results.",
      "Cool down system useful to save energy and preserve over time the good state of the roller coating."
    ],
    techCards: [
      { title: "IM 10", text: "Discover the innovative touch-screen interface." }
    ],
    learnMoreTable: [
      "IM10 digital control system: intuitive for easy interaction. Ironing parameters can be modified after the cycle is started.",
      "Heating chest in chromed steel, rather than aluminium - less expansion and surface porosity",
      "Nomex chest cover, resistant to high temperature.",
      "Torsion bar: uniform pressure of the chest throughout the entire length of the roller.",
      "Electronic ironing speed control by inverter. Linear drive for ironing pressure control.",
      "Start and stop ironing pedal.",
      "Manual handle release, emergency stop, chest lifting pedal.",
      "Optional cloth collection tray"
    ],
    specsTable: [
      ["MODELS", "Smart FI 100/25", "Smart FI 120/25", "Smart FI 150/25", "Smart FI 160/33", "Smart FI 180/33", "Smart FI 200/33"],
      ["Ironing surface", "1000 mm", "1200 mm", "1500 mm", "1600 mm", "1800 mm", "2000 mm"],
      ["Roller diameter", "250 Ømm", "250 Ømm", "250 Ømm", "300 Ømm", "300 Ømm", "300 Ømm"],
      ["Rotation Speed", "1-6 mt/min", "1-6 mt/min", "1-6 mt/min", "1-6 mt/min", "1-6 mt/min", "1-6 mt/min"],
      ["Ironing pressure (adjustable)", "214 - 322 Kg/mt²", "214 - 322 Kg/mt²", "214 - 322 Kg/mt²", "214 - 322 Kg/mt²", "214 - 322 Kg/mt²", "214 - 322 Kg/mt²"],
      ["Hourly production", "25 kg/h", "30 kg/h", "35 kg/h", "40 kg/h", "50 kg/h", "60 kg/h"],
      ["Ironing Humidity Required", "20%", "20%", "20%", "20%", "20%", "20%"],
      ["Humid Air Drain", "80 Ømm", "80 Ømm", "80 Ømm", "80 Ømm", "80 Ømm", "80 Ømm"],
      ["Suction Flow", "160 m3/h", "160 m3/h", "160 m3/h", "160 m3/h", "160 m3/h", "160 m3/h"],
      ["Size: LxWxH", "1550x643x985 mm", "1750x643x985 mm", "2050x643x985 mm", "2150x643x985 mm", "2350x643x985 mm", "2550x643x985 mm"],
      ["Net Weight", "117,4 Kg", "- Kg", "147,6 Kg", "180 Kg", "196,8 Kg", "213,8 Kg"],
      ["Packaging Size: LxWxH", "1600x645x1140 mm", "1800x645x1140 mm", "2100x645x1140 mm", "2200x645x1140 mm", "2400x645x1140 mm", "2600x645x1140 mm"],
      ["Gross Weight", "142 Kg", "- Kg", "177 Kg", "216 Kg", "229 Kg", "249 Kg"],
      ["Power", "4,5 kW", "5,4 kW", "7,3 kW", "7,3 kW", "10,5 kW", "13,8 kW"],
      ["Container 20\" - 40\" loading plan", "24 - 50 pcs stacked (High cube)", "18 - 36 pcs stacked (High cube)", "18 - 36 pcs stacked (High cube)", "18 - 36 pcs stacked (High cube)", "6 - 15 pcs", "6 - 12 pcs"]
    ]
  },

  // ── 12. Drying Ironers: MCA Series ──
  "imesa-mca-ironer": {
    id: "imesa-mca-ironer",
    category: "Drying Ironers",
    subCategory: "Compact Drying Ironers",
    categorySlug: "drying-ironers",
    seriesName: "MCA Series • Ø 330 mm (Length 1500 – 2100 mm)",
    badge: "Single Pass Dry & Iron",
    title: "Drying Ironers MCA Series",
    modelsList: ["MCA 150 (1500 mm)", "MCA 180 (1880 mm)", "MCA 210 (2068 mm)"],
    primaryImg: mcaIronerImg,
    seriesSiblings: IRONER_SIBLINGS,
    galleryImages: ["IMESA_Calandre-asciuganti_Drying-Ironing_MCA_NEW_FRONTE-1.png", "IMESA_Calandre-asciuganti_Drying-Ironing_MCA_NEW_PROSPETTIVA.png", "IMESA_Calandre-asciuganti_Drying-Ironing_MCA_NEW_PROSPETTIVA-ALTO.png", "03-4.jpg", "02-4.jpg"],
    shortDesc: [
      "The IMESA <span class=\"text-[#009ee2] font-semibold\">MCA drying ironers</span> dry and iron damp linen in a single operation without pre-drying.",
      "Designed to guarantee continuous production, exceptional finish quality and energy efficiency.",
      "The compact size and possibility of installation against a wall make MCA models ideal for restaurants, pubs and small/medium sized hotels."
    ],
    iconBoxes: [
      { title: "IM10 computer touch screen for easy programming and monitoring of drying cycles.", iconUrl: "Icone-touch-screen.png" },
      { title: "Like a real tablet, the IM10 touch screen has the same intelligibility, ergonomics and potential as a computer.", iconUrl: "ICONA_TECNOLOGIA.png" },
      { title: "Memorisation of infinite ironing programmes", iconUrl: "ICONA_INFINITI-PROGRAMMI.png" },
      { title: "Parameters can be modified during the cycle", iconUrl: "ICONA_PROGRAMMI-PREFERITI.png" },
      { title: "IMESA MCA series 33 mm diam. drying ironers are available with 150 cm, 180 cm and 210 cm roller.", iconUrl: "ICONA_FATTORE-G.png" }
    ],
    highlights: [
      "2 heating methods: electric or gas",
      "The inverter fitted as standard electronically regulates ironing speed for maximum productivity on the basis of the moisture in the fabric and ironing temperature.",
      "Automatic speed/temperature compensation: the speed of the roller is set automatically according to the temperature, facilitating the operator's work and guaranteeing top quality results.",
      "System cooldown: saves energy and helps preserve the ironing belts.",
      "Openable cover for easy maintenance."
    ],
    techCards: [],
    learnMoreTable: [
      "Chromed steel roller for a long working life.",
      "NOMEX feed and ironing belts, resistant to very high temperatures.",
      "Filters on the air intakes for an efficient vapour aspiration system.",
      "All parts in movement during ironing are inaccessible: the operator can rely on total protection and work with absolute peace of mind.",
      "The hand safety bar prevents hands and arms from being accidentally inserted in the space between the roller and the chest and avoids dragging of excessively thick fabric or objects",
      "Double emergency stops on both sides",
      "Openable cover for easy maintenance."
    ],
    specsTable: [
      ["MODELLI", "MCA 150", "MCA 180", "MCA 210"],
      ["Ironing surface", "1504 mm", "1880 mm", "2068 mm"],
      ["Rotation Speed", "1-6 mt/min", "1-6 mt/min", "1-6 mt/min"],
      ["Ironing Humidity Required", "50%", "50%", "50%"],
      ["Humid Air Drain", "100 Ø mm", "100 Ø mm", "100 Ø mm"],
      ["Smokes Drain", "100 Ø mm", "100 Ø mm", "100 Ø mm"],
      ["Humid Air Flowrate", "350 m3/h", "350 m3/h", "350 m3/h"],
      ["Size: LxWxH", "2134 x 598 x 1092 mm", "2514 x 598 x 1092 mm", "2704 x 598 x 1092 mm"],
      ["Net Weight (electric/gas)", "382 / 412 Kg", "431 / 449 Kg", "505 / 451 Kg"],
      ["Packaging Size: LxWxH", "2230 x 710 x 1270 mm", "2610 x 710 x 1270 mm", "2800 x 710 x 1270 mm"],
      ["Gross Weight (electric/gas)", "420 / 450 Kg", "478 / 496 Kg", "556 / 502 Kg"],
      ["Electrical Heating", "20,7 kW", "25,2 kW", "28,8 kW"],
      ["Gas Power", "22 kW", "24,6 kW", "26 kW"],
      ["Container 20\" - 40\" loading plan", "8 - 16 pcs", "6 - 12 pcs", "6 - 12 pcs"]
    ]
  },

  // ── 13. Drying Ironers: MCM Series ──
  "imesa-mcm-ironer": {
    id: "imesa-mcm-ironer",
    category: "Drying Ironers",
    subCategory: "Industrial Drying Ironers",
    categorySlug: "drying-ironers",
    seriesName: "MCM Series • Ø 502 mm (Length 2500 – 3200 mm)",
    badge: "82% Cylinder Contact",
    title: "Industrial Drying Ironers MCM Series",
    modelsList: ["MCM 2500 (2500 mm)", "MCM 2800 (2800 mm)", "MCM 3200 (3200 mm)"],
    primaryImg: mcmIronerImg,
    seriesSiblings: IRONER_SIBLINGS,
    galleryImages: ["Calandre-asciuganti_Drying-Ironing_MCM_3.jpg", "Calandre-asciuganti_Drying-Ironing_MCM_1.jpg", "Calandre-asciuganti_Drying-Ironing_MCM_2.jpg", "03-4.jpg", "02-4.jpg"],
    shortDesc: [
      "The IMESA <span class=\"text-[#009ee2] font-semibold\">MCM series drying ironers</span> guarantee high industrial performance and maximum reliability.",
      "Engineered with an <strong>82% roller contact perimeter</strong> for superior ironing output and finish consistency.",
      "The complete MCM range is the ideal linen finishing solution for large restaurants, centralized hotels, nursing homes and hospitals."
    ],
    iconBoxes: [
      { title: "IM10 computer touch screen for easy programming and monitoring of drying cycles", iconUrl: "Icone-touch-screen.png" },
      { title: "Like a real tablet, the IM10 touch screen has the same intelligibility, ergonomics and potential as a computer.", iconUrl: "ICONA_TECNOLOGIA.png" },
      { title: "Memorisation of infinite ironing programmes", iconUrl: "ICONA_INFINITI-PROGRAMMI.png" },
      { title: "Parameters can be modified during the cycle", iconUrl: "ICONA_PROGRAMMI-PREFERITI.png" },
      { title: "IMESA MCM series 502 mm diam. drying ironers are available with 2500 mm, 2800 mm and 3200 mm roller.", iconUrl: "ICONA_FATTORE-G.png" },
      { title: "The linen remains in contact with the roller for 82% of its circumference perimeter", iconUrl: "ICONA_INTRODUTTORE.png" },
      { title: "Available in BASIC version with front/back MOTORISED OUTPUT, FOLDER and automatic FEEDER.", iconUrl: "ICONA_PIEGATRICE.png" },
      { title: "Models with automatic FEEDER and FOLDER are equipped with PLC control with 128 ironing programs.", iconUrl: "Icone-caratteristiche.png" }
    ],
    highlights: [
      "MCM 2500 – 2800 – 3200",
      "3 heating methods: electric, steam, gas",
      "Automatic speed/temperature compensation: the speed of the roller is set automatically according to the temperature, facilitating the operator's work and guaranteeing top quality results.",
      "System cooldown: saves energy and helps preserve the ironing belts.",
      "Available with motorised linen exit on two sides: faster ironing, higher productivity and more than one operator.",
      "The linen can be ironed on two independent lines, with the possibility of configuring the type of fold: single, double or none.",
      "Available with suction feed table for perfect fabric feed, enabling a single operator to iron and fold even large items."
    ],
    techCards: [],
    learnMoreTable: [
      "NOMEX feed and ironing belts, resistant to very high temperatures.",
      "In the drying ironer with folder, the safety windows under the feed table enable folding to be controlled in complete safety.",
      "The hand safety bar protects the operator from slipping an arm under the roller accidentally.",
      "Two emergency buttons"
    ],
    specsTable: [
      ["MODELLI", "MCM 2500", "MCM 2800", "MCM 3200"],
      ["Ironing width", "2505 mm", "2715 mm", "3130 mm"],
      ["Ironing width with feeder", "1978 mm", "2190 mm", "2608 mm"],
      ["Maximum length of fabrics for first fold", "3500 mm", "3500 mm", "3500 mm"],
      ["Hourly production*", "62 kg/h", "68 kg/h", "80 kg/h"],
      ["Evaporation*", "31 lt/h", "34 lt/h", "40 lt/h"],
      ["Rotation Speed", "1-10 mt./min.", "1-10 mt./min.", "1-10 mt./min."],
      ["Ironing Humidity Required", "50%", "50%", "50%"],
      ["Humid Air Drain", "100 Ø mm", "100 Ø mm", "100 Ø mm"],
      ["Smokes Drain (Gas Version)", "100 Ø mm", "100 Ø mm", "100 Ø mm"],
      ["Basic machine and with motorised EXIT dimensions: WxDxH", "3414x1358x1708 mm", "3610x1358x1708 mm", "4027x1358x1708 mm"],
      ["Machine dimensions with OUTPUT, FOLDER and INTRODUCER: LxWxH", "3413x1655x1708 mm", "3610x1655x1708 mm", "4027x1655x1708 mm"],
      ["Net weight basic machine and with motorised EXIT", "1283 Kg", "1371 Kg", "1522 Kg"],
      ["Net Weight with OUTPUT, FOLDER and INTRODUCER", "1656 Kg", "1730 Kg", "1856 Kg"],
      ["Packing dimensions basic machine or with motorised EXIT: WxDxH", "3420x1100x1868 mm", "3630x1100x1868 mm", "4040x1100x1868 mm"],
      ["Packing dimensions machine with EXIT, FOLD and FEEDER: WxDxH", "3420x1300x1868 mm", "3630x1300x1868 mm", "4040x1300x1868 mm"],
      ["Gross weight basic machine and with motorised EXIT", "1351 Kg", "1443 Kg", "1598 Kg"],
      ["Gross weight with EXIT and FOLD", "1726 Kg", "1804 Kg", "1930 Kg"],
      ["Electric power basic machine", "49,3 kW", "52,9 kW", "61,9 kW"],
      ["Steam power basic machine", "0,7 kW", "0,7 kW", "0,7 kW"],
      ["Gas power basic machine", "0,9 kW", "0,9 kW", "0,9 kW"],
      ["Electrical Machine Power with EXIT", "49,5 kW", "52,9 kW", "61,9 kW"],
      ["Steam Machine Power with EXIT", "0,9 kW", "0,9 kW", "0,9 kW"],
      ["Gas Machine Power with EXIT", "1,1 kW", "1,1 kW", "1,1 kW"],
      ["Electrical Machine Power with EXIT, FOLDER and INTRODUCER", "49,5 kW", "53,1 kW", "62,1 kW"],
      ["Steam Machine Power with EXIT, FOLDER and INTRODUCER", "0,9 kW", "0,9 kW", "0,9 kW"],
      ["Gas Machine Power with EXIT, FOLDER and INTRODUCER", "1,1 kW", "1,1 kW", "1,1 kW"],
      ["Hourly steam Consumption", "100 Kg/h", "110 Kg/h", "125 Kg/h"],
      ["Air compressed consumption (with EA or EB)", "500 lt/h", "500 lt/h", "500 lt/h"],
      ["Air compressed pressure (with EA or EB)", "6 bar", "6 bar", "6 bar"],
      ["Basic machine container 20\" - 40\" loading plan", "2 - 6 pcs", "2 - 6 pcs", "2 - 4 pcs"],
      ["Machine with EXIT, FOLD and FEEDER container 20\" - 40\" loading plan", "1 - 3 pcs", "1 - 3 pcs", "1 - 2 pcs"]
    ]
  }
};

// Process products to automatically map all gallery and icon assets to local Vite bundles
export const IMESA_OFFICIAL_PRODUCTS = Object.fromEntries(
  Object.entries(RAW_IMESA_PRODUCTS).map(([key, prod]) => [
    key,
    {
      ...prod,
      galleryImages: (prod.galleryImages || []).map(resolveAsset),
      iconBoxes: (prod.iconBoxes || []).map(box => ({
        ...box,
        iconUrl: resolveAsset(box.iconUrl)
      }))
    }
  ])
);
