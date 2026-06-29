"use client";

import { motion } from "framer-motion";
import {
  Cog,
  Zap,
  Workflow,
  Flame,
  Grid,
  Truck,
  PowerOff,
  ClipboardCheck
} from "lucide-react";

interface TimelineItem {
  category: string;
  title: string;
  desc: string;
  icon: React.ReactNode;
}

export default function TimelineSection() {
  const timelineData: TimelineItem[] = [
    {
      category: "Mechanical Construction",
      title: "Assembly & Erection",
      desc: "Complete assembly of plant structures, machinery foundations, aligning shafts, and heavy steel setups.",
      icon: <Cog className="h-5 w-5 text-white" />,
    },
    {
      category: "Electrical Works",
      title: "Power & Instrumentation",
      desc: "Industrial cabling, control panel installation, cable trays, and electrical terminations for heavy systems.",
      icon: <Zap className="h-5 w-5 text-white" />,
    },
    {
      category: "Industrial Piping",
      title: "High-Pressure Pipelines",
      desc: "Process line welding, steam lines, carbon/alloy steel headers, and rigorous hydraulic testing.",
      icon: <Workflow className="h-5 w-5 text-white" />,
    },
    {
      category: "Boiler Works",
      title: "Thermal Refractory & Erection",
      desc: "Boiler erection, high-pressure tube replacements, safety inspection compliance, and refractory relining.",
      icon: <Flame className="h-5 w-5 text-white" />,
    },
    {
      category: "Structural Works",
      title: "Heavy Fabrication",
      desc: "Fabrication of trusses, girders, chimneys, storage tanks, support columns, and industrial warehouses.",
      icon: <Grid className="h-5 w-5 text-white" />,
    },
    {
      category: "Heavy Equipment Installation",
      title: "Precision Erection",
      desc: "Positioning reactors, pressure vessels, distillation columns, gas turbines, and massive pumps.",
      icon: <Truck className="h-5 w-5 text-white" />,
    },
    {
      category: "Shutdown Projects",
      title: "Turnaround Executions",
      desc: "Intensive 24/7 shutdown campaigns for routine overhauls, preventative checkups, and parts replacement.",
      icon: <PowerOff className="h-5 w-5 text-white" />,
    },
    {
      category: "Maintenance Contracts",
      title: "Continuous AMC Support",
      desc: "Structured annual maintenance contracts to optimize machinery health and ensure seamless operations.",
      icon: <ClipboardCheck className="h-5 w-5 text-white" />,
    },
  ];

  return (
    <section className="py-24 bg-white overflow-hidden" id="nature-of-business">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-secondary font-bold text-sm uppercase tracking-wider block mb-2">
            Operation Spectrum
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-primary tracking-tight">
            Nature of Business
          </h2>
          <p className="text-sm text-gray-500 mt-3">
            Our specialized lines of operation represent a diverse industrial portfolio designed to support heavy sector giants.
          </p>
          <div className="w-16 h-1 bg-secondary mx-auto mt-4 rounded" />
        </div>

        {/* Vertical Timeline container */}
        <div className="relative">
          {/* Central Line for desktop */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 -translate-x-1/2" />

          {/* Timeline Items */}
          <div className="space-y-16">
            {timelineData.map((item, index) => {
              const isEven = index % 2 === 0;
              return (
                <div
                  key={item.category}
                  className="flex flex-col md:flex-row relative items-start md:items-center"
                >
                  {/* Timeline Point icon */}
                  <div className="absolute left-4 md:left-1/2 w-10 h-10 rounded-full bg-secondary border-4 border-white flex items-center justify-center -translate-x-1/2 z-10 shadow-md">
                    {item.icon}
                  </div>

                  {/* Left Side Content (Desktop) */}
                  <div className={`w-full md:w-1/2 md:pr-12 pl-12 md:pl-0 ${isEven ? "md:text-right" : "md:order-last md:pl-12"}`}>
                    <motion.div
                      initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.6, delay: 0.1 }}
                      className="bg-gray-50 border border-gray-100 rounded-2xl p-6 hover:shadow-lg hover:border-secondary/20 transition-all duration-300 relative"
                    >
                      {/* Arrow pointer styling */}
                      <div
                        className={`hidden md:block absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-gray-50 border-t border-l border-gray-100 rotate-45 ${
                          isEven ? "-right-2 border-r border-b border-t-0 border-l-0" : "-left-2"
                        }`}
                      />

                      <span className="text-secondary font-bold text-xs uppercase tracking-wider block mb-1">
                        {item.category}
                      </span>
                      <h3 className="text-lg font-bold text-primary mb-2">
                        {item.title}
                      </h3>
                      <p className="text-sm text-gray-500 leading-relaxed">
                        {item.desc}
                      </p>
                    </motion.div>
                  </div>

                  {/* Placeholder column to balance the grid on desktop */}
                  <div className="hidden md:block w-1/2" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
