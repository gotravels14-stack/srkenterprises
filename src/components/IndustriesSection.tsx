"use client";

import { motion } from "framer-motion";

interface IndustryItem {
  name: string;
  image: string;
  description: string;
}

export default function IndustriesSection() {
  const industries: IndustryItem[] = [
    {
      name: "Oil & Gas",
      image:
        "https://images.unsplash.com/photo-1693847173071-bd6237101335?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description:
        "Pipeline infrastructure and extraction facility maintenance support.",
    },
    {
      name: "Refineries",
      image:
        "https://images.unsplash.com/photo-1726731782158-fcf6822b6ca4?q=80&w=1228&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description:
        "High-pressure piping systems and planned turnaround services.",
    },
    {
      name: "Petrochemicals",
      image:
        "https://plus.unsplash.com/premium_photo-1661964136447-676beb97b303?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description:
        "Reactor installations, structural works, and process loop fabrications.",
    },
    {
      name: "Fertilizer Plants",
      image:
        "https://images.unsplash.com/photo-1708434196966-bef6928e182d?q=80&w=1407&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description:
        "Exotic stainless steel welding and chemical tank maintenance.",
    },
    {
      name: "Power Plants",
      image:
        "https://images.unsplash.com/photo-1616401784845-180882ba9ba8?auto=format&fit=crop&w=800&q=80",
      description:
        "Boiler repairs, turbine building structurals, and generator rigging.",
    },
    {
      name: "Cement Plants",
      image:
        "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=800&q=80",
      description:
        "Heavy structural fabrication of silos, hoppers, and ducting.",
    },
    {
      name: "Steel Plants",
      image:
        "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80",
      description:
        "Furnace refractory support, overhead crane gantry erection.",
    },
    {
      name: "Manufacturing Industries",
      image:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80",
      description:
        "Production line piping, machinery alignment, and utility works.",
    },
  ];

  return (
    <section
      className="py-24 bg-gray-950 text-white relative overflow-hidden"
      id="industries"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(10,35,66,0.3),transparent)]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-secondary font-bold text-sm uppercase tracking-wider block mb-2">
            Where We Deploy
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Industries We Serve
          </h2>
          <p className="text-sm text-gray-400 mt-3">
            Deploying certified experts and specialized equipment across heavy
            process sectors.
          </p>
          <div className="w-16 h-1 bg-secondary mx-auto mt-4 rounded" />
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((ind, i) => (
            <motion.div
              key={ind.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group h-[350px] relative rounded-3xl overflow-hidden shadow-xl border border-white/5 cursor-pointer"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={ind.image}
                alt={ind.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-750 scale-100 group-hover:scale-105"
              />
              {/* Gradient Overlay using inline RGBA to ensure perfect cross-browser transparency */}
              <div
                className="absolute inset-0 transition-opacity duration-300"
                style={{
                  background:
                    "linear-gradient(to top, rgba(15, 23, 42, 0.95) 0%, rgba(15, 23, 42, 0.45) 50%, rgba(15, 23, 42, 0.1) 100%)",
                }}
              />

              {/* Text Overlay */}
              <div className="absolute inset-x-0 bottom-0 p-6 flex flex-col justify-end h-full">
                <span className="text-secondary font-extrabold text-xs uppercase tracking-widest block mb-1">
                  Sector Support
                </span>
                <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-secondary transition-colors duration-300">
                  {ind.name}
                </h3>
                <p className="text-xs text-gray-300 leading-relaxed mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {ind.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
