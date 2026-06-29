export interface ProjectItem {
  id: string;
  name: string;
  client: string;
  location: string;
  category: "fabrication" | "piping" | "structural" | "shutdown" | "painting";
  scope: string;
  year: string;
  duration: string;
  image: string;
}

export const projectsData: ProjectItem[] = [
  {
    id: "proj-1",
    name: "Industrial Structural Fabrication & Erection",
    client: "C/O Indwell Constructions Pvt Ltd.",
    location: "NTR Dist. (AP)",
    category: "structural",
    scope: "Structural Steel Fabrication & Erection services delivered on time with high safety compliance.",
    year: "2024",
    duration: "2023 - 2024",
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "proj-2",
    name: "Boiler Installation & Piping Work",
    client: "C/O Indwell Constructions Pvt Ltd.",
    location: "NTR Dist. (AP)",
    category: "piping",
    scope: "Boiler Erection, Piping & Commissioning utilizing high-grade materials and certified welding.",
    year: "2024",
    duration: "2023 - 2024",
    image: "https://images.unsplash.com/photo-1616401784845-180882ba9ba8?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "proj-3",
    name: "Shutdown & Maintenance Services",
    client: "C/O Indwell Constructions Pvt Ltd.",
    location: "NTR Dist. (AP)",
    category: "shutdown",
    scope: "Planned Shutdown, Maintenance & Repair services executed during turnaround schedules with zero safety incidents.",
    year: "2024",
    duration: "2024",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "proj-4",
    name: "Surface Preparation & Blasting",
    client: "C/O Indwell Constructions Pvt Ltd.",
    location: "NTR Dist. (AP)",
    category: "fabrication",
    scope: "Grit Blasting & Surface Preparation services matching industry standards for adhesion and quality finishes.",
    year: "2024",
    duration: "2024",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "proj-5",
    name: "Industrial Piping Fabrication & Installation",
    client: "C/O Indwell Constructions Pvt Ltd.",
    location: "NTR Dist. (AP)",
    category: "piping",
    scope: "MS, SS & Alloy Steel Piping Works covering high-pressure gas, steam, and water loops.",
    year: "2025",
    duration: "2024 - 2025",
    image: "https://plus.unsplash.com/premium_photo-1661921393343-343742700dd3?q=80&w=1170&auto=format&fit=crop"
  },
  {
    id: "proj-6",
    name: "Painting & Coating Works",
    client: "C/O Indwell Constructions Pvt Ltd.",
    location: "NTR Dist. (AP)",
    category: "painting",
    scope: "Industrial Painting & Protective Coating works to safeguard structural materials against corrosion.",
    year: "2025",
    duration: "2024 - 2025",
    image: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&w=800&q=80"
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
