export type Product = {
  slug: string;
  brand: "JSD Solar" | "Jinko Solar";
  model: string;

  name: string;

  category:
    | "solar-panels"
    | "hybrid-inverters"
    | "off-grid-inverters"
    | "lithium-batteries"
    | "energy-storage"
    | "portable-power"
    | "solar-street-lights"
    | "accessories";

  image: string[];

  badge?: string;

  warranty: string;

  shortDescription: string;

  description: string;

  benefits: string[];

  features: string[];

  applications: string[];

  specs: Record<string, string>;

  datasheet?: string;
};

export const products: Product[] = [
  // ==========================
  // JSD SOLAR
  // ==========================

  {
    slug: "jsd-5kw-hybrid-inverter",

    brand: "JSD Solar",

    model: "JSD-H5K",

    name: "5kW Hybrid Solar Inverter",

    category: "hybrid-inverters",

    image: [
      "/products/jsd/h5k/front.webp",
      "/products/jsd/h5k/side.webp",
      "/products/jsd/h5k/display.webp",
    ],

    badge: "Best Seller",

    warranty: "5-Year Warranty",

    shortDescription:
      "Smart hybrid inverter for residential and commercial solar systems.",

    description:
      "High-efficiency hybrid inverter supporting solar panels, lithium batteries and utility power for uninterrupted energy supply.",

    benefits: [
      "Lower Electricity Bills",
      "Automatic Backup Power",
      "Smart Energy Management",
    ],

    features: [
      "Pure sine wave output",
      "Dual MPPT technology",
      "LCD touchscreen",
      "Wi-Fi monitoring",
      "Battery compatible",
    ],

    applications: [
      "Homes",
      "Offices",
      "Schools",
      "Churches",
      "Small Businesses",
    ],

    specs: {
      RatedPower: "5kW",
      BatteryVoltage: "48V",
      MPPT: "Dual",
      Efficiency: "98%",
      Output: "230V AC",
    },

    datasheet: "/datasheets/jsd/jsd-h5k.pdf",
  },

  {
    slug: "jsd-10kw-hybrid-inverter",

    brand: "JSD Solar",

    model: "JSD-H10K",

    name: "10kW Hybrid Solar Inverter",

    category: "hybrid-inverters",

    image: [
      "/products/jsd/h10k/front.webp",
      "/products/jsd/h10k/side.webp",
    ],

    badge: "Commercial",

    warranty: "5-Year Warranty",

    shortDescription:
      "Powerful inverter for larger residential and commercial installations.",

    description:
      "Designed for demanding solar installations requiring high efficiency and reliable backup power.",

    benefits: [
      "Higher Energy Output",
      "Fast Switching",
      "Supports Large Loads",
    ],

    features: [
      "Dual MPPT",
      "Smart Monitoring",
      "Parallel Support",
      "Pure Sine Wave",
    ],

    applications: [
      "Hotels",
      "Factories",
      "Schools",
      "Commercial Buildings",
    ],

    specs: {
      RatedPower: "10kW",
      BatteryVoltage: "48V",
      Efficiency: "98%",
      Output: "230V AC",
    },

    datasheet: "/datasheets/jsd/jsd-h10k.pdf",
  },

  {
    slug: "jsd-48v-200ah-lithium",

    brand: "JSD Solar",

    model: "JSD-LFP200",

    name: "48V 200Ah Lithium Battery",

    category: "lithium-batteries",

    image: [
      "/products/jsd/battery200/front.webp",
      "/products/jsd/battery200/side.webp",
    ],

    badge: "Premium",

    warranty: "10-Year Warranty",

    shortDescription:
      "Long-life LiFePO₄ battery for solar energy storage.",

    description:
      "High-performance lithium battery engineered for dependable backup power and long cycle life.",

    benefits: [
      "Long Cycle Life",
      "Fast Charging",
      "Maintenance Free",
    ],

    features: [
      "LiFePO₄ Chemistry",
      "Built-in BMS",
      "Rack Mount",
      "Expandable Capacity",
    ],

    applications: [
      "Homes",
      "Businesses",
      "Solar Backup",
    ],

    specs: {
      Voltage: "48V",
      Capacity: "200Ah",
      Chemistry: "LiFePO₄",
      DesignLife: "10+ Years",
    },

    datasheet: "/datasheets/jsd/lfp200.pdf",
  },

  // ==========================
  // JINKO SOLAR
  // ==========================

  {
    slug: "jinko-tiger-neo-585w",

    brand: "Jinko Solar",

    model: "Tiger Neo 585W",

    name: "Tiger Neo N-Type 585W Solar Panel",

    category: "solar-panels",

    image: [
      "/products/jinko/585/front.webp",
      "/products/jinko/585/back.webp",
    ],

    badge: "Tier 1",

    warranty: "25-Year Product Warranty",

    shortDescription:
      "High-efficiency N-Type monocrystalline solar module.",

    description:
      "Premium Jinko Tiger Neo panel delivering excellent efficiency and long-term reliability.",

    benefits: [
      "Higher Energy Yield",
      "Excellent Low-Light Performance",
      "Reduced Degradation",
    ],

    features: [
      "N-Type Cell Technology",
      "High Efficiency",
      "PID Resistant",
      "Excellent Temperature Coefficient",
    ],

    applications: [
      "Residential",
      "Commercial",
      "Industrial",
      "Solar Farms",
    ],

    specs: {
      RatedPower: "585W",
      CellType: "N-Type Mono",
      Efficiency: "22.6%",
      Frame: "Anodized Aluminium",
    },

    datasheet: "/datasheets/jinko/tiger-neo-585.pdf",
  },

  {
    slug: "jinko-tiger-neo-550w",

    brand: "Jinko Solar",

    model: "Tiger Neo 550W",

    name: "Tiger Neo N-Type 550W Solar Panel",

    category: "solar-panels",

    image: [
      "/products/jinko/550/front.webp",
      "/products/jinko/550/back.webp",
    ],

    badge: "Most Popular",

    warranty: "25-Year Product Warranty",

    shortDescription:
      "Reliable high-performance solar panel for residential and commercial systems.",

    description:
      "Built using advanced N-Type technology to maximize energy generation while ensuring long-term durability.",

    benefits: [
      "Lower Electricity Bills",
      "Higher Efficiency",
      "Long Service Life",
    ],

    features: [
      "Half Cell Technology",
      "N-Type Cells",
      "Low Degradation",
      "Excellent Weather Resistance",
    ],

    applications: [
      "Homes",
      "Businesses",
      "Schools",
      "Industrial Projects",
    ],

    specs: {
      RatedPower: "550W",
      CellType: "N-Type Mono",
      Efficiency: "21.8%",
      Frame: "Aluminium Alloy",
    },

    datasheet: "/datasheets/jinko/tiger-neo-550.pdf",
  },
];