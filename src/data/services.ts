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
    id: "mechanical-construction",
    title: "Mechanical Construction",
    shortDesc: "End-to-end mechanical engineering and installation services for heavy industries and plants.",
    longDesc: "SKR Enterprises offers comprehensive mechanical construction services, managing complex installations from initial planning through structural execution. We deliver heavy structural frameworks, mechanical systems integration, and precise alignments for refinery, power, and manufacturing facilities.",
    iconName: "Settings",
    features: [
      "Heavy industrial assembly & alignment",
      "Process unit installations",
      "Foundation bolt & equipment alignment",
      "Piping system integrations"
    ],
    image: "https://plus.unsplash.com/premium_photo-1683134181132-d21384512e01?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: "fabrication-erection",
    title: "Fabrication & Erection",
    shortDesc: "High-precision shop fabrication and onsite erection of heavy steel structures.",
    longDesc: "We specialize in the fabrication and onsite erection of heavy structural components. Utilizing state-of-the-art welding techniques and materials, we build durable skeletons for warehouses, process plants, pipe racks, and heavy support systems.",
    iconName: "Wrench",
    features: [
      "Structural steel fabrication",
      "Onsite structural erection",
      "Quality assurance & Weld inspection",
      "Custom metal works & ducting"
    ],
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "industrial-piping",
    title: "Industrial Piping",
    shortDesc: "Custom high-pressure process piping, utility piping, and alloy steel piping systems.",
    longDesc: "We design, fabricate, and install premium industrial piping systems, including carbon steel, stainless steel, and alloy steel networks. Our piping solutions cater to steam, chemicals, gases, oil, and water distribution, engineered to withstand extreme pressures and thermal variations.",
    iconName: "Pipes",
    features: [
      "Process & utility piping systems",
      "Alloy steel & exotic metal welding",
      "High-pressure testing & hydrotesting",
      "Pipe rack & support design"
    ],
    image: "https://plus.unsplash.com/premium_photo-1661921393343-343742700dd3?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: "equipment-erection",
    title: "Equipment Erection",
    shortDesc: "Heavy equipment rigging, placement, and precision leveling for industrial machinery.",
    longDesc: "Safe and precise installation of heavy rotating and static equipment. We handle columns, vessels, heat exchangers, reactors, compressors, pumps, and heavy machinery, ensuring exact tolerances, alignment, and secure foundations.",
    iconName: "Cpu",
    features: [
      "Heavy rigging & lifting plans",
      "Static & rotating equipment placement",
      "Laser alignment & precision leveling",
      "Vessel, column & exchanger erection"
    ],
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "structural-fabrication",
    title: "Structural Fabrication",
    shortDesc: "Robust steel structural designs built to international codes and standards.",
    longDesc: "Our structural fabrication services convert detailed engineering blueprints into physical structures. We manufacture columns, beams, trusses, platforms, handrails, and ladders, using premium raw steel and certified welding personnel.",
    iconName: "Layers",
    features: [
      "Industrial columns & trusses",
      "Platforms, catwalks & ladders",
      "Custom structural frames",
      "Corrosion-resistant finishes"
    ],
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "boiler-maintenance",
    title: "Boiler Maintenance",
    shortDesc: "Refractory work, tube replacement, cleaning, and regulatory safety compliance checks.",
    longDesc: "Maximize heat efficiency and safety with our specialized boiler maintenance services. We perform tube thickness checks, pressure testing, tube repairs/replacements, refractory repairs, and burner tuning to meet IBR and safety standards.",
    iconName: "Flame",
    features: [
      "Boiler tube repair & replacement",
      "Refractory repair & application",
      "Hydrotesting & thickness scanning",
      "Preventive & corrective maintenance"
    ],
    image: "https://plus.unsplash.com/premium_photo-1661844830578-e17e40bdf2dc?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: "shutdown-maintenance",
    title: "Shutdown Maintenance",
    shortDesc: "Speedy, round-the-clock plant turnaround services to minimize operational downtime.",
    longDesc: "We provide comprehensive, high-velocity turnaround services during planned shutdowns. Operating with 24/7 schedules, we carry out intensive overhaul, inspection, testing, repairs, and modernization of heavy industrial units.",
    iconName: "Clock",
    features: [
      "Pre-shutdown planning & execution",
      "Rapid component replacement",
      "Around-the-clock skilled crew",
      "Post-shutdown startup assistance"
    ],
    image: "https://images.unsplash.com/photo-1681812508855-f7b04fefcd83?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: "plant-maintenance",
    title: "Plant Maintenance",
    shortDesc: "Onsite maintenance crews for continuous plant operations and zero breakdown.",
    longDesc: "Keep your plant running smoothly with our onsite maintenance teams. We offer preventive, predictive, and corrective maintenance support tailored to process plants, ensuring equipment reliability and reducing unexpected breakdowns.",
    iconName: "ShieldAlert",
    features: [
      "Routine equipment inspections",
      "Lubrication, bearing & seal changes",
      "Breakdown troubleshooting",
      "Reliability engineering support"
    ],
    image: "https://plus.unsplash.com/premium_photo-1661454669588-7477730e79de?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: "industrial-painting",
    title: "Industrial Painting",
    shortDesc: "Heavy-duty grit blasting and anti-corrosion protective coatings for metal structures.",
    longDesc: "Protective coating and painting services designed for harsh industrial environments. We perform abrasive blasting (sand/grit) followed by premium multi-coat epoxy, polyurethane, or thermal spray coatings to prevent corrosion and weathering.",
    iconName: "Paintbrush",
    features: [
      "Grit blasting & surface preparation",
      "Anti-corrosive epoxy & PU coating",
      "Pipe color coding & safety marking",
      "High-temperature painting"
    ],
    image: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "scaffolding",
    title: "Scaffolding",
    shortDesc: "Safe, BS-compliant access scaffolding erection and dismantling for heights.",
    longDesc: "We erect certified, high-strength cup-lock and tubular scaffolding structures to enable safe height access for construction, maintenance, and painting teams. Every installation undergoes strict safety checks and tag approvals.",
    iconName: "Grid",
    features: [
      "Cup-lock & modular scaffolding systems",
      "Temporary access platforms",
      "Rigid load testing & tagging",
      "Fast erection & dismantling"
    ],
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "manpower-supply",
    title: "Manpower Supply",
    shortDesc: "Certified technicians, high-pressure welders, riggers, fitters, and helpers.",
    longDesc: "SKR Enterprises maintains a vast, vetted pool of skilled manpower ready to deploy. We supply IBR-certified high-pressure welders, pipe fitters, fabricators, mechanical technicians, riggers, safety supervisors, and general labor.",
    iconName: "Users",
    features: [
      "IBR-certified pressure welders (GTAW/GMAW/SMAW)",
      "Experienced pipe & structural fitters",
      "Certified rigging & lifting crews",
      "Rigorous safety-trained personnel"
    ],
    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "amc",
    title: "Annual Maintenance Contracts",
    shortDesc: "Structured year-long maintenance packages to sustain maximum plant uptime.",
    longDesc: "We deliver systematic annual maintenance contracts (AMC) for factories, refineries, and plants. Our customized contracts include periodic shutdowns, continuous inspections, troubleshooting, emergency response, and part refurbishment.",
    iconName: "Calendar",
    features: [
      "Scheduled quarterly inspections",
      "Priority breakdown services",
      "Long-term cost predictability",
      "Dedicated account engineers"
    ],
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80"
  }
];
