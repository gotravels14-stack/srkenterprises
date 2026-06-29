export interface GalleryItem {
  id: string;
  title: string;
  category: "construction" | "piping" | "fabrication" | "shutdown" | "welding" | "painting" | "equipment";
  image: string;
  description: string;
}

export const galleryData: GalleryItem[] = [
  {
    id: "gal-1",
    title: "Structural Columns Erection",
    category: "construction",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80",
    description: "Aligning heavy steel columns for a process plant structure."
  },
  {
    id: "gal-2",
    title: "Argon TIG Welding on SS Pipe",
    category: "welding",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80", // Will use a welding visual
    description: "Welder performing high-precision root pass on process line."
  },
  {
    id: "gal-3",
    title: "High-Pressure Gas Piping",
    category: "piping",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80",
    description: "Manifold installation for utility pipelines."
  },
  {
    id: "gal-4",
    title: "Heavy Equipment Rigging",
    category: "equipment",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80",
    description: "Positioning a static heat exchanger onto its foundation."
  },
  {
    id: "gal-5",
    title: "Sandblasting & Primer Application",
    category: "painting",
    image: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&w=800&q=80",
    description: "Surface preparation and coating of structural beams."
  },
  {
    id: "gal-6",
    title: "Boiler Tubing Maintenance",
    category: "shutdown",
    image: "https://images.unsplash.com/photo-1616401784845-180882ba9ba8?auto=format&fit=crop&w=800&q=80",
    description: "Tube inspection and maintenance during unit shutdown."
  },
  {
    id: "gal-7",
    title: "Custom Pipe Spool Fabrication",
    category: "fabrication",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80",
    description: "Fabrication of intricate piping spools in our workshop."
  },
  {
    id: "gal-8",
    title: "Structure Painting & Finish",
    category: "painting",
    image: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&w=800&q=80",
    description: "Final coat PU application for weathering protection."
  },
  {
    id: "gal-9",
    title: "Boiler Header Repair",
    category: "shutdown",
    image: "https://images.unsplash.com/photo-1540324155974-72a5e7f67134?auto=format&fit=crop&w=800&q=80",
    description: "Refurbishment and weld overlay of boiler header manifold."
  },
  {
    id: "gal-10",
    title: "Weld Joint Inspection",
    category: "welding",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80",
    description: "Certified NDT inspector executing dye penetrant test."
  }
];

export const galleryCategories = [
  { id: "all", label: "All Photos" },
  { id: "construction", label: "Construction" },
  { id: "piping", label: "Piping" },
  { id: "fabrication", label: "Fabrication" },
  { id: "shutdown", label: "Shutdown & Maintenance" },
  { id: "welding", label: "Welding" },
  { id: "painting", label: "Painting" },
  { id: "equipment", label: "Equipment Installation" }
] as const;
