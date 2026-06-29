"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Users, Hammer, CheckCircle2, ChevronRight } from "lucide-react";

export default function ResourcesSection() {
  const [activeTab, setActiveTab] = useState<"manpower" | "machinery">("manpower");

  const workforce = [
    { role: "Engineers", count: "5 - 8", percentage: 90, desc: "Responsible for Project Planning, Technical Supervision, and Quality & Safety Control." },
    { role: "Supervisors", count: "8 - 12", percentage: 95, desc: "Responsible for Site Supervision, Manpower Coordination, and Work Execution Monitoring." },
    { role: "Skilled Workers", count: "20 - 25", percentage: 100, desc: "Welding, piping, structural fabrication, fitting, and equipment installation." },
    { role: "Unskilled Workers / Helpers", count: "10 - 15", percentage: 90, desc: "Material handling, site cleaning, unloading, and general helpers support." },
    { role: "Admin & Support Staff", count: "3 - 5", percentage: 85, desc: "Handles project documentation, stores & procurement, and logistics coordination." },
  ];

  const machinery = [
    { name: "Welding Machines (Arc & MIG)", quantity: "10 Nos.", category: "Core Machinery" },
    { name: "Gas Cutting Sets", quantity: "6 Sets", category: "Core Machinery" },
    { name: "Angle Grinders", quantity: "12 Nos.", category: "Core Machinery" },
    { name: "Drilling Machines", quantity: "6 Nos.", category: "Core Machinery" },
    { name: "Power Tools (Various)", quantity: "15 Nos.", category: "Support Tools" },
    { name: "Scaffolding Materials", quantity: "As Required", category: "Access & Safety" },
    { name: "Lifting Equipment (Chain Pulley / Lever Block)", quantity: "6 Nos.", category: "Lifting & Rigging" },
    { name: "Measuring Tools (Tape, Level, Theodolite etc.)", quantity: "As Required", category: "Testing & Quality" },
    { name: "Fabrication Tools & Tackles", quantity: "As Required", category: "Core Machinery" },
    { name: "Vehicles (Pick up / Load Carrier)", quantity: "2 Nos.", category: "Logistics" },
  ];

  const facilities = [
    "Spacious fabrication yard with open and covered area.",
    "Power supply with required capacity.",
    "Safe storage area for materials and equipment.",
    "Office with necessary communication and documentation facilities.",
    "Transport facility for smooth movement of materials and manpower."
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
            At SKR Enterprises, our strength lies in our skilled manpower and modern resources. We own a comprehensive fleet of machinery and tools to execute projects efficiently, safely, and on time.
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
              <span>Skilled Workforce ({workforce.length})</span>
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
              <span>Machinery & Fleet ({machinery.length})</span>
            </button>
          </div>
        </div>

        {/* Tab Content Panels */}
        <div className="min-h-[400px] mb-16">
          {activeTab === "manpower" ? (
            <div className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {workforce.map((item) => (
                  <div
                    key={item.role}
                    className="bg-white border border-gray-100 p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="flex justify-between items-center mb-3">
                      <h3 className="font-bold text-primary text-base sm:text-lg">
                        {item.role}
                      </h3>
                      <span className="text-secondary font-black text-xs sm:text-sm bg-secondary/10 px-3 py-1 rounded-full">
                        {item.count} Persons
                      </span>
                    </div>
                    <p className="text-xs text-gray-500 mb-4">{item.desc}</p>
                    
                    {/* Capacity Indicator Bar */}
                    <div>
                      <div className="flex justify-between text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1">
                        <span>Utilization Strength</span>
                        <span>{item.percentage}%</span>
                      </div>
                      <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                        <div
                          style={{ width: `${item.percentage}%` }}
                          className="h-full bg-secondary rounded-full"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Highlight Total Strength */}
              <div className="bg-primary text-white rounded-3xl p-8 flex flex-col md:flex-row items-center justify-between shadow-xl">
                <div>
                  <h4 className="text-xl font-bold">Total Manpower Strength</h4>
                  <p className="text-sm text-gray-300 mt-1 max-w-xl">
                    Our well-qualified team of professionals works in coordination to ensure the successful completion of every project safely and on time.
                  </p>
                </div>
                <div className="mt-6 md:mt-0 bg-secondary text-white font-black text-2xl md:text-3xl px-8 py-4 rounded-2xl shadow-lg whitespace-nowrap">
                  35 - 40 (Approx.)
                </div>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {machinery.map((machine) => (
                <div
                  key={machine.name}
                  className="bg-white border border-gray-100 p-6 rounded-2xl flex flex-col justify-between hover:border-secondary/20 transition-colors shadow-sm"
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
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Infrastructure & Facilities */}
        <div className="bg-white border border-gray-100 rounded-[2rem] p-8 md:p-12 shadow-sm">
          <h3 className="text-xl md:text-2xl font-bold text-primary mb-6">Our Infrastructure & Facilities</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {facilities.map((fac, idx) => (
              <div key={idx} className="flex items-start space-x-3">
                <div className="mt-1 bg-secondary/15 p-1 rounded-lg">
                  <ChevronRight className="h-4 w-4 text-secondary" />
                </div>
                <p className="text-sm text-gray-600 leading-relaxed font-medium">{fac}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
