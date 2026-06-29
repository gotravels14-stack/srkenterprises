export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  longDesc: string;
  iconName: string;
  features: string[];
  image: string;
}

export const servicesData: ServiceItem[] = [
  {
    id: "structural-fabrication",
    title: "Structural Fabrication",
    shortDesc: "Precision fabrication of structural steel and components as per client requirements and industry standards.",
    longDesc: "We fabricate high-strength steel structures conforming to industrial drawings and international standards. Our experienced team builds columns, beams, heavy trusses, safety platforms, handrails, and ladders in open or covered yards using premium raw steel and certified welding systems.",
    iconName: "Wrench",
    features: [
      "Industrial structural framing & columns",
      "Steel platform & catwalk systems",
      "Custom metal works & fabrication shop",
      "Welding safety and quality assurance"
    ],
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "equipment-erection",
    title: "Equipment Erection",
    shortDesc: "Safe and efficient erection of heavy equipment, machinery, and structures with precision and safety.",
    longDesc: "We provide safe, calculated rigging and lifting solutions to install static and rotating equipment. This covers positioning and aligning heavy heat exchangers, pressure vessels, reactors, columns, boilers, and massive industrial machinery at strict leveling tolerances.",
    iconName: "Cpu",
    features: [
      "Heavy lift planning & structural rigging",
      "Static & rotating machinery placement",
      "Vessel, heat exchanger & reactor erection",
      "Laser alignment & structural leveling"
    ],
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "industrial-piping",
    title: "Industrial Piping Installation",
    shortDesc: "Supply, installation, and commissioning of all types of process and utility piping systems.",
    longDesc: "Expert fabrication and installation of complex piping networks, including Mild Steel (MS), Stainless Steel (SS), Carbon Steel (CS), and Alloy Steel systems. We serve high-pressure steam lines, chemicals, gas lines, cooling water lines, and fuel distribution networks.",
    iconName: "Pipes",
    features: [
      "Process & utility piping installation",
      "Alloy steel & GTAW/SMAW welding",
      "Hydrotesting & pressure testing scans",
      "Spool fabrication & onsite support racks"
    ],
    image: "https://images.unsplash.com/photo-1616401784845-180882ba9ba8?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "boiler-maintenance",
    title: "Boiler Maintenance",
    shortDesc: "Complete boiler inspection, maintenance, repair, and performance optimization services.",
    longDesc: "Complete boiler servicing to maintain IBR safety compliance and fuel combustion efficiency. We handle boiler tube scanning/thickness checks, selective tube replacement, refractory repair, hydrotesting, chemical cleaning, and insulation works.",
    iconName: "Flame",
    features: [
      "Boiler tube repair & replacement",
      "Refractory application & maintenance",
      "IBR compliance checks & hydrotesting",
      "Insulation & outer casing repair works"
    ],
    image: "https://images.unsplash.com/photo-1616401784845-180882ba9ba8?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "shutdown-maintenance",
    title: "Shutdown Project Execution",
    shortDesc: "End-to-end shutdown planning, execution, and commissioning with minimal downtime and maximum efficiency.",
    longDesc: "Intensive turnaround and maintenance execution under strict schedules. Operating round-the-clock (24/7), our teams dismantle, inspect, repair, overhaul, and commission industrial assemblies to restore plant reliability with minimal downtime.",
    iconName: "Clock",
    features: [
      "Scheduled turnaround planning & logistics",
      "Rapid equipment overhaul & repairs",
      "Critical component replacement runs",
      "Safe startup coordination & checks"
    ],
    image: "https://images.unsplash.com/photo-1540324155974-72a5e7f67134?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "surface-blasting",
    title: "Surface Preparation & Blasting",
    shortDesc: "Abrasive blasting services (Grit & Sand) for surface cleaning and preparation as per industrial standards.",
    longDesc: "High-grade abrasive cleaning to prepare steel surfaces for protective paint coatings. We offer grit blasting and sand blasting to achieve Sa 2.5 standard finishes, removing scale, old paint, rust, and surface contaminants.",
    iconName: "Layers",
    features: [
      "Grit blasting for superior adhesion",
      "Sand blasting for structural steel cleaning",
      "Rust & corrosion surface scaling removal",
      "Preparation for high-durability epoxy coating"
    ],
    image: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "industrial-painting",
    title: "Industrial Painting",
    shortDesc: "Protective and industrial painting services for steel structures, equipment, tanks, and pipelines.",
    longDesc: "Application of specialized protective paint systems to prevent atmospheric and chemical corrosion. We apply multi-layer epoxy systems, high-temperature coatings, polyurethane finishes, and color-coded safety markings on pipes, tanks, and structural frames.",
    iconName: "Paintbrush",
    features: [
      "Multi-coat epoxy & PU paint systems",
      "Pipe rack color-coding safety bands",
      "Storage tank & structural paint coatings",
      "High-temperature thermal coatings"
    ],
    image: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "manpower-supply",
    title: "Skilled Manpower Supply",
    shortDesc: "Supply of skilled, semi-skilled, and unskilled manpower to meet your project needs with reliability.",
    longDesc: "Deployment of fully qualified and safety-trained personnel for long-term or short-term industrial contracts. We supply site engineers, supervisors, IBR-certified high-pressure welders, pipe fitters, fabricators, safety officers, and helpers.",
    iconName: "Users",
    features: [
      "Site engineers & safety inspectors",
      "High-pressure IBR welders (ARC/MIG)",
      "Pipe fitters, fabricators & riggers",
      "General helpers & site support labor"
    ],
    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=800&q=80"
  }
];
