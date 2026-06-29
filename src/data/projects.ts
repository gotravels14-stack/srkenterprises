export interface ProjectItem {
  id: string;
  name: string;
  client: string;
  location: string;
  category: "fabrication" | "piping" | "structural" | "shutdown" | "painting";
  scope: string;
  year: string;
  image: string;
}

export const projectsData: ProjectItem[] = [
  {
    id: "proj-1",
    name: "Refinery Piping Expansion",
    client: "L&T Heavy Engineering / IOCL",
    location: "Mathura Refinery, UP",
    category: "piping",
    scope: "Fabrication, welding, hydrotesting, and erection of 24-inch high-pressure carbon steel pipelines.",
    year: "2025",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "proj-2",
    name: "Heavy Structure Fabrication for Cement Plant",
    client: "UltraTech Cement",
    location: "Dhar, Madhya Pradesh",
    category: "structural",
    scope: "Fabrication and erection of heavy structural girders, columns, and platforms for the primary hopper system.",
    year: "2024",
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "proj-3",
    name: "Annual Shutdown Maintenance",
    client: "NTPC Limited",
    location: "Singrauli Super Thermal Power, MP",
    category: "shutdown",
    scope: "Overhaul and boiler maintenance, high-pressure tube replacements, and heat exchanger repair during a 20-day shutdown.",
    year: "2025",
    image: "https://images.unsplash.com/photo-1614214055879-01b56a2cdc42?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: "proj-4",
    name: "Stainless Steel Chemical Line Fabrication",
    client: "IFFCO Fertilizer",
    location: "Phulpur, Uttar Pradesh",
    category: "fabrication",
    scope: "Precision fabrication and GTAW welding of SS316L pipelines for process lines containing corrosive urea compounds.",
    year: "2024",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "proj-5",
    name: "Pipe Rack Painting & Corrosion Protection",
    client: "HPCL-Mittal Energy Limited",
    location: "Bathinda, Punjab",
    category: "painting",
    scope: "Sandblasting to Sa 2.5 standard followed by three-coat epoxy anti-corrosive coating application on utility pipe racks.",
    year: "2023",
    image: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "proj-6",
    name: "Cooling Tower Piping System",
    client: "TATA Power",
    location: "Jamshedpur, Jharkhand",
    category: "piping",
    scope: "Supply and erection of Large Diameter MS pipelines for cooling water lines, including in-situ welding and coatings.",
    year: "2023",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "proj-7",
    name: "Turbine Building Structural Works",
    client: "BHEL",
    location: "Korba, Chhattisgarh",
    category: "structural",
    scope: "Erection of complex overhead crane girder systems and heavy structural trusses for the generator hall.",
    year: "2024",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "proj-8",
    name: "Refinery Desalter Vessel Erection",
    client: "Reliance Industries",
    location: "Jamnagar Refinery, Gujarat",
    category: "shutdown",
    scope: "Precision lifting, rigging, and leveling of massive static vessel (Desalter) during a major unit turnaround.",
    year: "2022",
    image: "https://images.unsplash.com/photo-1616401784845-180882ba9ba8?auto=format&fit=crop&w=800&q=80"
  }
];
export const categories = [
  { id: "all", label: "All Projects" },
  { id: "fabrication", label: "Fabrication" },
  { id: "piping", label: "Piping" },
  { id: "structural", label: "Structural" },
  { id: "shutdown", label: "Shutdown & Maintenance" },
  { id: "painting", label: "Industrial Painting" }
] as const;
