"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Users, Hammer, Shield, CheckCircle2 } from "lucide-react";

export default function ResourcesSection() {
  const [activeTab, setActiveTab] = useState<"manpower" | "machinery">("manpower");

  const workforce = [
    { role: "Project Engineers", count: "10+", percentage: 90, desc: "B.Tech/Diploma engineers managing site execution and QA/QC." },
    { role: "Site Supervisors", count: "15+", percentage: 95, desc: "Vetted supervisors managing day-to-day operations and safety." },
    { role: "IBR-Pressure Welders", count: "40+", percentage: 100, desc: "High-pressure GTAW/SMAW certified carbon and SS welders." },
    { role: "Pipe & Structural Fitters", count: "50+", percentage: 95, desc: "Experienced in spool fit-ups, alignments, and drawing readings." },
    { role: "Riggers & Helpers", count: "80+", percentage: 85, desc: "Safety-trained rigging personnel and general helpers." },
    { role: "Electricians & Technicians", count: "12+", percentage: 90, desc: "Managing panel terminations, motors, utility hookups." },
  ];

  const machinery = [
    { name: "Welding Rectifiers & Inverters", quantity: "45 Units", category: "Core Fabrication" },
    { name: "Gas Cutting Sets & Pug Machines", quantity: "15 Units", category: "Core Fabrication" },
    { name: "Heavy Duty Grinding Machines", quantity: "50 Units", category: "Core Fabrication" },
    { name: "Hydraulic Jacking Systems", quantity: "4 Sets", category: "Lifting & Rigging" },
    { name: "Pipe Bending & Threading Machines", quantity: "6 Units", category: "Core Fabrication" },
    { name: "Modular Cup-Lock Scaffolding", quantity: "5000+ Sqm", category: "Access & Safety" },
    { name: "Hydrotesting Pump Assemblies (up to 400 bar)", quantity: "3 Units", category: "Testing & Quality" },
    { name: "Personal Protective Equipment (PPE) Inventory", quantity: "Fully Equipped", category: "Access & Safety" },
  ];

  return (
    <section className="py-24 bg-gray-50 border-b border-gray-200/50" id="resources">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-secondary font-bold text-sm uppercase tracking-wider block mb-2">
            Assets & Infrastructure
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-primary tracking-tight">
            Manpower & Resources
          </h2>
          <p className="text-sm text-gray-500 mt-3">
            Our comprehensive fleet of machinery and pool of certified, safety-trained technicians form the backbone of our execution power.
          </p>
          <div className="w-16 h-1 bg-secondary mx-auto mt-4 rounded" />
        </div>

        {/* Tab Controls */}
        <div className="flex justify-center mb-12">
          <div className="bg-gray-200 p-1.5 rounded-full inline-flex space-x-1">
            <button
              onClick={() => setActiveTab("manpower")}
              className={`flex items-center space-x-2 px-6 py-3 rounded-full text-sm font-bold transition-all duration-300 ${
                activeTab === "manpower"
                  ? "bg-primary text-white shadow-md"
                  : "text-gray-600 hover:text-primary"
              }`}
            >
              <Users className="h-4 w-4" />
              <span>Skilled Workforce</span>
            </button>
            <button
              onClick={() => setActiveTab("machinery")}
              className={`flex items-center space-x-2 px-6 py-3 rounded-full text-sm font-bold transition-all duration-300 ${
                activeTab === "machinery"
                  ? "bg-primary text-white shadow-md"
                  : "text-gray-600 hover:text-primary"
              }`}
            >
              <Hammer className="h-4 w-4" />
              <span>Machinery & Fleet</span>
            </button>
          </div>
        </div>

        {/* Tab Content Panels */}
        <div className="min-h-[400px]">
          <AnimatePresence mode="wait">
            {activeTab === "manpower" ? (
              <motion.div
                key="manpower"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-8"
              >
                {workforce.map((item, i) => (
                  <div
                    key={item.role}
                    className="bg-white border border-gray-100 p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="flex justify-between items-center mb-3">
                      <h3 className="font-bold text-primary text-base sm:text-lg">
                        {item.role}
                      </h3>
                      <span className="text-secondary font-black text-sm bg-secondary/10 px-3 py-1 rounded-full">
                        {item.count}
                      </span>
                    </div>
                    <p className="text-xs text-gray-500 mb-4">{item.desc}</p>
                    
                    {/* Capacity Indicator Bar */}
                    <div>
                      <div className="flex justify-between text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1">
                        <span>Deployability</span>
                        <span>{item.percentage}%</span>
                      </div>
                      <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${item.percentage}%` }}
                          transition={{ duration: 0.8, delay: i * 0.05 }}
                          className="h-full bg-secondary rounded-full"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            ) : (
              <motion.div
                key="machinery"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
              >
                {machinery.map((machine, i) => (
                  <motion.div
                    key={machine.name}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: i * 0.05 }}
                    className="bg-white border border-gray-100 p-6 rounded-2xl flex flex-col justify-between hover:border-secondary/20 transition-colors"
                  >
                    <div>
                      <span className="text-[10px] font-extrabold text-secondary uppercase tracking-widest block mb-2">
                        {machine.category}
                      </span>
                      <h3 className="font-bold text-primary text-sm sm:text-base leading-snug">
                        {machine.name}
                      </h3>
                    </div>
                    <div className="flex items-center space-x-2 mt-6 pt-3 border-t border-gray-50 text-xs font-bold text-gray-500">
                      <CheckCircle2 className="h-4 w-4 text-green-500" />
                      <span>{machine.quantity}</span>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
