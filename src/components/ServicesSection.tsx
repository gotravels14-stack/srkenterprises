"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { servicesData } from "@/data/services";
import {
  Settings,
  Wrench,
  Workflow,
  Cpu,
  Layers,
  Flame,
  Clock,
  ShieldAlert,
  Paintbrush,
  Grid,
  Users,
  Calendar,
  ArrowRight
} from "lucide-react";

export default function ServicesSection() {
  const getIcon = (name: string) => {
    switch (name) {
      case "Settings":
        return <Settings className="h-6 w-6 text-secondary" />;
      case "Wrench":
        return <Wrench className="h-6 w-6 text-secondary" />;
      case "Pipes":
        return <Workflow className="h-6 w-6 text-secondary" />;
      case "Cpu":
        return <Cpu className="h-6 w-6 text-secondary" />;
      case "Layers":
        return <Layers className="h-6 w-6 text-secondary" />;
      case "Flame":
        return <Flame className="h-6 w-6 text-secondary" />;
      case "Clock":
        return <Clock className="h-6 w-6 text-secondary" />;
      case "ShieldAlert":
        return <ShieldAlert className="h-6 w-6 text-secondary" />;
      case "Paintbrush":
        return <Paintbrush className="h-6 w-6 text-secondary" />;
      case "Grid":
        return <Grid className="h-6 w-6 text-secondary" />;
      case "Users":
        return <Users className="h-6 w-6 text-secondary" />;
      case "Calendar":
        return <Calendar className="h-6 w-6 text-secondary" />;
      default:
        return <Settings className="h-6 w-6 text-secondary" />;
    }
  };

  // Preview only the first 6 core services on the home page, with a CTA to view all
  const homeServices = servicesData.slice(0, 6);

  return (
    <section className="py-24 bg-gray-50 border-y border-gray-200/50" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div className="max-w-xl">
            <span className="text-secondary font-bold text-sm uppercase tracking-wider block mb-2">
              Our Capabilities
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-primary tracking-tight">
              Industrial Contracting Services
            </h2>
            <div className="w-16 h-1 bg-secondary mt-4 rounded" />
          </div>
          <p className="text-gray-500 text-sm md:max-w-md mt-4 md:mt-0">
            SKR Enterprises specializes in fabricating structural steels, high-pressure utility pipes, 
            heavy rigging installation, and round-the-clock plant maintenance.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {homeServices.map((service, i) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white border border-gray-100 rounded-2xl p-8 hover:shadow-2xl hover:border-white transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Icon Container */}
                <div className="p-4 bg-gray-50 rounded-2xl inline-flex group-hover:bg-secondary/15 transition-colors duration-300">
                  {getIcon(service.iconName)}
                </div>

                <h3 className="text-xl font-bold text-primary mt-6 mb-3 group-hover:text-secondary transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-6">
                  {service.shortDesc}
                </p>
              </div>

              {/* Action Link */}
              <Link
                href={`/services#${service.id}`}
                className="inline-flex items-center text-sm font-bold text-primary hover:text-secondary transition-colors group/link"
              >
                Learn More
                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover/link:translate-x-1" />
              </Link>
            </motion.div>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="mt-16 text-center">
          <Link
            href="/services"
            className="inline-flex items-center justify-center bg-primary hover:bg-primary-dark text-white font-bold px-8 py-4 rounded-full shadow-lg transition-all duration-300 hover:-translate-y-0.5"
          >
            Explore All 12 Industrial Services
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
