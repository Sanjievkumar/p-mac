// Official IMESA Categories & Series Database (1:1 clone of imesa.it structure)
import lmSeriesImg from '../../assets/brands/imesa/imesa-lm-series.png';
import d2wBarrierImg from '../../assets/brands/imesa/remote/Lavatrice-a-barriera-asettica_Barrier-Washers_D2W_18_1.jpg';
import rcSeriesImg from '../../assets/brands/imesa/remote/Lavatrici-rigide_Low-spin-washing-machines_RC_30_1-1000x707.jpg';
import esSmartImg from '../../assets/brands/imesa/imesa-es-smart.png';
import es5575Img from '../../assets/brands/imesa/imesa-es-55-75.png';
import fiEasyImg from '../../assets/brands/imesa/remote/fi2022_02.439.png';
import fiSmartImg from '../../assets/brands/imesa/remote/fi2022_03.369.png';
import mcaIronerImg from '../../assets/brands/imesa/remote/IMESA_Calandre-asciuganti_Drying-Ironing_MCA_NEW_FRONTE-1.png';
import mcmIronerImg from '../../assets/brands/imesa/remote/Calandre-asciuganti_Drying-Ironing_MCM_1.jpg';

// Category Hero Photography & Icons
import catHeroWashingImg from '../../assets/brands/imesa/imesa-cat-hero-washing.jpg';
import iconWashingImg from '../../assets/brands/imesa/icon-washing.png';
import catHeroDryersImg from '../../assets/brands/imesa/imesa-cat-hero-dryers.png';
import iconDryersImg from '../../assets/brands/imesa/icon-dryers.png';
import catHeroFlatworkImg from '../../assets/brands/imesa/imesa-cat-hero-flatwork.jpg';
import iconFlatworkImg from '../../assets/brands/imesa/icon-flatwork.png';
import catHeroDryingIronersImg from '../../assets/brands/imesa/imesa-cat-hero-drying-ironers.jpg';
import iconDryingIronersImg from '../../assets/brands/imesa/icon-drying-ironers.png';

export const OFFICIAL_CATEGORIES = [
  {
    id: 'washing-machines',
    slug: 'washing-machines',
    name: 'Washing Machines',
    capacityBadge: '8/125 KG',
    badgeIcon: iconWashingImg,
    h1: 'INDUSTRIAL WASHING MACHINES',
    h1Formatted: 'INDUSTRIAL WASHING<br class="hidden sm:inline" /> MACHINES',
    heroImg: catHeroWashingImg,
    cardImg: lmSeriesImg,
    subtitle: 'High Spin & Hygiene Barrier Washers',
    cardDesc: 'Freestanding high-spin industrial washers and aseptic barrier machines designed with IM11 touchscreens, G-Factor up to 400G, and biological contamination barriers.',
    highlights: ['IM11 7" Touchscreen', '350 - 400 G Factor', 'EN 14065 / RABC Certified'],
    introLead: 'EVO.LINE: THE INDUSTRIAL WASHING MACHINES BY IMESA',
    introParas: [
      'The wide range of <strong>washing machines</strong> IMESA is the answer to every specific washing need.',
      '<strong>Efficiency, sturdiness and ease of use</strong> for high level washing results.<br class="hidden sm:inline" />The new <strong class="text-[#009ee2]">EVO.LINE</strong> washing machines, completely renewed in design, present features that further enhance their performance.',
      'Simplicity, Flexibility and Productivity are the characteristics that distinguish the IMESA product, designed for the complete satisfaction of the customer.'
    ],
    showcases: [
      {
        id: 'high-spin',
        title: 'HIGH SPIN INDUSTRIAL WASHING MACHINES',
        subtitle: 'LM SERIES',
        machineImg: lmSeriesImg,
        primaryTarget: 'imesa-lm-series',
        paras: [
          'With the LM series, IMESA deploys technology and quality.',
          'The <strong>IM11 computer touchscreen</strong> is an indispensable device that makes the washing machine perfect for every customer.<br />A wash for every need.'
        ],
        seriesButtons: [
          { id: 'imesa-lm-8-11', label: 'LM 8-11 kg' },
          { id: 'imesa-lm-series', label: 'LM 14-23 kg' },
          { id: 'imesa-lm-26-32', label: 'LM 26-32 kg' },
          { id: 'imesa-lm-40-85', label: 'LM 40-85 kg' },
          { id: 'imesa-lm-100-125', label: 'LM 100-125 kg' }
        ]
      },
      {
        id: 'hard-mounted',
        title: 'HARD MOUNTED INDUSTRIAL WASHING MACHINES',
        subtitle: 'RC SERIES',
        machineImg: rcSeriesImg,
        primaryTarget: 'imesa-rc-series',
        paras: [
          'Hard mounted industrial washing machine designed to last.',
          'Efficiency, sturdiness and ease of use for high level washing results. RC series industrial washing machines do not require springs or shock absorbers.',
          'Fixed to the ground by fixing devices. Ideal for use on board small and medium sized ships, ferries and freighters.',
          'The innovative <strong>IM11 computer touchscreen</strong> makes programming, use and maintenance extremely simple and within reach of all types of user.'
        ],
        seriesButtons: [
          { id: 'imesa-rc-series', label: 'RC 11-85 kg' }
        ]
      },
      {
        id: 'barrier-washers',
        title: 'HYGIENE BARRIER WASHERS',
        subtitle: 'D2W SERIES',
        machineImg: d2wBarrierImg,
        primaryTarget: 'imesa-d2w-barrier',
        paras: [
          'The IMESA D2W series of hygiene barrier washers fully satisfies the needs of hospitals, nursing and retirement homes, nurseries and schools, clinics and the pharmaceutical and food industries by guaranteeing maximum safety and zero contamination risk.',
          'Pass-through dual door biological separation complying with <strong>EN 14065 (RABC)</strong> sanitary standards.'
        ],
        seriesButtons: [
          { id: 'imesa-d2w-barrier', label: 'D2W 18-23 kg' },
          { id: 'imesa-d2w-30-55', label: 'D2W 30-55 kg' }
        ]
      }
    ]
  },
  {
    id: 'dryers',
    slug: 'dryers',
    name: 'Dryers',
    capacityBadge: '11/75 KG',
    badgeIcon: iconDryersImg,
    h1: 'TUMBLE DRYERS',
    h1Formatted: 'TUMBLE DRYERS',
    heroImg: catHeroDryersImg,
    cardImg: esSmartImg,
    subtitle: 'ES Smart & Premium Tumble Dryers',
    cardDesc: 'High efficiency tumble dryers featuring patented D-FLOW axial airflow, reversing drum rotation as standard, and capacities ranging from 11 kg up to 75 kg.',
    highlights: ['Patented D-FLOW Airflow', 'Standard Reversing Drum', 'Capacities up to 75 kg'],
    introLead: 'THE DRYING REVOLUTION: ES SMART & PREMIUM',
    introParas: [
      'The wide range of <strong>tumble dryers</strong> IMESA is designed to deliver top quality drying results while minimizing energy consumption.',
      '<strong>Patented D-FLOW</strong> axial airflow ensures gentle linen treatment and uniform drying.<br class="hidden sm:inline" />The new <strong class="text-[#009ee2]">EVO.LINE</strong> dryers, completely renewed in design, present features that further enhance their performance.',
      'Simplicity, Flexibility and Productivity are the characteristics that distinguish the IMESA product, designed for the complete satisfaction of the customer.'
    ],
    showcases: [
      {
        id: 'es-smart-premium',
        title: 'TUMBLE DRYER',
        subtitle: 'ES EASY, SMART AND PREMIUM SERIES (11 - 36 KG)',
        machineImg: esSmartImg,
        primaryTarget: 'imesa-es-smart',
        paras: [
          'With the ES series, IMESA deploys technology and quality.',
          'The <strong>IM10 computer touchscreen</strong> allows endless drying solutions for effective and customized drying results.<br />A dry for every need.'
        ],
        seriesButtons: [
          { id: 'imesa-es-easy', label: 'ES Easy Line 11-36 kg' },
          { id: 'imesa-es-smart', label: 'ES Smart Line 11-36 kg' },
          { id: 'imesa-es-premium', label: 'ES Premium Line 11-36 kg' }
        ]
      },
      {
        id: 'es-large-capacity',
        title: 'TUMBLE DRYER',
        subtitle: 'ES 55 AND 75 SERIES',
        machineImg: es5575Img,
        primaryTarget: 'imesa-es-premium',
        paras: [
          'The large capacity 55 and 75 kg ES dryers are designed to meet the needs of industrial laundries and high productivity facilities.',
          'Full control of drying parameters with <strong>DSC (Dynamic Speed Control)</strong> and self-cleaning lint filters.'
        ],
        seriesButtons: [
          { id: 'imesa-es-premium', label: 'ES Premium Line 55-75 kg' }
        ]
      }
    ]
  },
  {
    id: 'flatwork-ironers',
    slug: 'flatwork-ironers',
    name: 'Flatwork Ironers',
    capacityBadge: 'Ø 250 - 330 MM',
    badgeIcon: iconFlatworkImg,
    h1: 'FLATWORK IRONERS',
    h1Formatted: 'FLATWORK IRONERS',
    heroImg: catHeroFlatworkImg,
    cardImg: fiSmartImg,
    subtitle: 'FI Easy & Smart Line Ironers',
    cardDesc: 'Precision chest flatwork ironers engineered with mechanical torsion bar uniform pressure, IM10 touch control, and Nomex high-temperature padding.',
    highlights: ['Torsion Bar Pressure', 'IM10 Touch Screen', 'Nomex Coating & Cool-Down'],
    introLead: 'TAILOR-MADE FLATWORK FINISHING BY IMESA',
    introParas: [
      'The wide range of <strong>flatwork ironers</strong> IMESA is the answer to every specific ironing need.',
      '<strong>Efficiency, sturdiness and ease of use</strong> for high level ironing results.<br class="hidden sm:inline" />The new <strong class="text-[#009ee2]">FI SERIES</strong> ironers, completely renewed in design, present features that further enhance their performance.',
      'Simplicity, Flexibility and Productivity are the characteristics that distinguish the IMESA product, designed for the complete satisfaction of the customer.'
    ],
    showcases: [
      {
        id: 'fi-easy',
        title: 'FLATWORK IRONERS - Easy FI -',
        subtitle: 'DIAM. 25 CM – DIAM. 33 CM',
        machineImg: fiEasyImg,
        primaryTarget: 'imesa-fi-easy',
        paras: [
          'The IMESA flatwork ironer <em>Easy</em> FI is equipped with <strong>analog control unit</strong>, digital thermostat for temperature adjustment, fixed ironing speed (or adjustable by inverter as optional) and fixed ironing pressure uniform all over the entire roller length by means of the special torsion bar.',
          'The <em>Easy</em> FI flatwork ironer is equipped with Cotton roller cover, on request can be replaced with NOMEX roller cover. The vacuum system and frequency variator for electronic ironing speed control are available on order.',
          'Available with IoT connection for the remote machine control.',
          '<em>Easy</em> FI line is the ideal solution for restaurants, small hotels and country houses.'
        ],
        seriesButtons: [
          { id: 'imesa-fi-easy', label: 'Serie Easy FI' }
        ]
      },
      {
        id: 'fi-smart',
        title: 'FLATWORK IRONERS - Smart FI -',
        subtitle: 'DIAM. 25 CM – DIAM. 33 CM',
        machineImg: fiSmartImg,
        primaryTarget: 'imesa-fi-smart',
        paras: [
          'The IMESA <em>Smart</em> FI flatwork ironer is equipped with <strong>digital control unit IM10 touch screen</strong>, allowing endless ironing solution for effective and customized ironing result.',
          'The <em>Smart</em> FI flatwork ironer is complete with frequency variator for <strong>electronic ironing speed control according to temperature</strong>, Cool Down system and patented linear drive system for the <strong>control of the ironing pressure</strong> for a uniform ironing quality all over the entire length of the roller by means of the special torsion bar.',
          'The roller cover is in NOMEX as standard, resistant to high temperature. The roller metal mesh cover is on request. Models with diameter 33 cm come with suction included as standard.',
          'The <em>Smart</em> FI flatwork ironer is available with IoT connection for the machine remote control.',
          '<em>Smart</em> FI line is the ideal solution for restaurants, small hotels and country houses.'
        ],
        seriesButtons: [
          { id: 'imesa-fi-smart', label: 'Serie Smart FI' }
        ]
      }
    ]
  },
  {
    id: 'drying-ironers',
    slug: 'drying-ironers',
    name: 'Drying Ironers',
    capacityBadge: 'Ø 330 - 502 MM',
    badgeIcon: iconDryingIronersImg,
    h1: 'DRYING IRONERS',
    h1Formatted: 'DRYING IRONERS',
    heroImg: catHeroDryingIronersImg,
    cardImg: mcmIronerImg,
    subtitle: 'MCA & MCM High-Speed Ironers',
    cardDesc: 'Direct drying ironers capable of drying and ironing damp linen in a single pass without pre-drying, offering outputs up to 140 kg/h and automated feeding/folding integration.',
    highlights: ['Single Pass Dry & Iron', 'Output up to 140 kg/h', '82% Roller Contact Area'],
    introLead: 'SINGLE-PASS DRY & IRON PRODUCTIVITY',
    introParas: [
      'The series of <strong>drying ironers</strong> IMESA are designed to meet every ironing need.',
      '<strong>Single-pass dry and iron</strong> capability without pre-drying saves significant space, time and energy.<br class="hidden sm:inline" />The new <strong class="text-[#009ee2]">MCA and MCM SERIES</strong> present features that further enhance their performance.',
      'Simplicity, Flexibility and Productivity are the characteristics that distinguish the IMESA product, designed for the complete satisfaction of the customer.'
    ],
    showcases: [
      {
        id: 'mca-line',
        title: 'DRYING IRONER',
        subtitle: 'MCA LINE',
        machineImg: mcaIronerImg,
        primaryTarget: 'imesa-mca-ironer',
        paras: [
          'IMESA MCA drying ironers dry and iron damp linen in a single operation, without having to pass through a dryer.',
          'Front linen feed and return enables compact, <strong>space-saving installation against walls</strong>.'
        ],
        seriesButtons: [
          { id: 'imesa-mca-ironer', label: 'MCA 150-180-210' }
        ]
      },
      {
        id: 'mcm-line',
        title: 'DRYING IRONER',
        subtitle: 'MCM LINE',
        machineImg: mcmIronerImg,
        primaryTarget: 'imesa-mcm-ironer',
        paras: [
          'IMESA MCM series drying ironers guarantee high performance and reliability.',
          'Industrial roller with <strong>82% contact surface</strong>, output up to 140 kg/h, and modular automated feeders and folders.'
        ],
        seriesButtons: [
          { id: 'imesa-mcm-ironer', label: 'MCM 2500 - 2800 - 3200' }
        ]
      }
    ]
  }
];

export const CATEGORY_MAP = OFFICIAL_CATEGORIES.reduce((acc, cat) => {
  acc[cat.id] = cat;
  return acc;
}, {});
