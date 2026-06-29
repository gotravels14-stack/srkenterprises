"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import { servicesData } from "@/data/services";
import Link from "next/link";
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
  CheckCircle,
  ArrowRight
} from "lucide-react";

export default function ServicesPage() {
  const getIcon = (name: string) => {
    switch (name) {
      case "Settings":
        return <Settings className="h-6 w-6 text-white" />;
      case "Wrench":
        return <Wrench className="h-6 w-6 text-white" />;
      case "Pipes":
        return <Workflow className="h-6 w-6 text-white" />;
      case "Cpu":
        return <Cpu className="h-6 w-6 text-white" />;
      case "Layers":
        return <Layers className="h-6 w-6 text-white" />;
      case "Flame":
        return <Flame className="h-6 w-6 text-white" />;
      case "Clock":
        return <Clock className="h-6 w-6 text-white" />;
      case "ShieldAlert":
        return <ShieldAlert className="h-6 w-6 text-white" />;
      case "Paintbrush":
        return <Paintbrush className="h-6 w-6 text-white" />;
      case "Grid":
        return <Grid className="h-6 w-6 text-white" />;
      case "Users":
        return <Users className="h-6 w-6 text-white" />;
      case "Calendar":
        return <Calendar className="h-6 w-6 text-white" />;
      default:
        return <Settings className="h-6 w-6 text-white" />;
    }
  };

  return (
    <>
      <Navbar />
      <main className="flex-grow pt-24 bg-gray-50">
        {/* Page Banner Header */}
        <div className="bg-primary text-white py-20 relative overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1920&q=80"
            alt="Piping background"
            className="absolute inset-0 w-full h-full object-cover opacity-20"
          />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
            <h1 className="text-4xl sm:text-5xl font-black tracking-tight">Our Services</h1>
            <p className="text-sm sm:text-base text-gray-300 max-w-xl mx-auto leading-relaxed">
              Explore our 12 core industrial capabilities. We combine skilled craftsmanship, safety, and modern machinery to deliver excellent results.
            </p>
          </div>
        </div>

        {/* Detailed Services list */}
        <div className="py-24 space-y-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {servicesData.map((service, index) => {
            const isEven = index % 2 === 0;
            return (
              <section
                key={service.id}
                id={service.id}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-12 items-center pb-20 border-b border-gray-200 last:border-b-0 last:pb-0 scroll-mt-28`}
              >
                {/* Image Column */}
                <div
                  className={`lg:col-span-5 h-[350px] relative rounded-3xl overflow-hidden shadow-lg group ${
                    isEven ? "" : "lg:order-last"
                  }`}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={service.image}
                    alt={service.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-103"
                  />
                  <div className="absolute inset-0 bg-[#0A2342]/10 group-hover:bg-[#0A2342]/5 transition-colors" />
                </div>

                {/* Text Content Column */}
                <div className="lg:col-span-7 space-y-6">
                  {/* Icon & Title Banner */}
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-secondary rounded-2xl shadow-md">
                      {getIcon(service.iconName)}
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-primary">
                      {service.title}
                    </h2>
                  </div>

                  {/* Descriptions */}
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed font-medium">
                    {service.longDesc}
                  </p>

                  {/* Features / Key deliverables list */}
                  <div className="space-y-3">
                    <span className="text-xs font-bold text-gray-400 uppercase tracking-widest block">
                      Scope of Deliverables
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {service.features.map((feature) => (
                        <div key={feature} className="flex items-start space-x-2.5">
                          <CheckCircle className="h-4 w-4 text-green-500 shrink-0 mt-0.5" />
                          <span className="text-xs sm:text-sm text-gray-600 font-medium">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Quick CTA */}
                  <div className="pt-4 flex">
                    <Link
                      href={`/contact?service=${encodeURIComponent(service.title)}`}
                      className="bg-primary hover:bg-primary-dark text-white font-bold text-sm px-6 py-3.5 rounded-full shadow-md flex items-center group transition-all duration-300"
                    >
                      Get Quote for {service.title}
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </section>
            );
          })}
        </div>
      </main>
      <Footer />
      <FloatingContact />
    </>
  );
}
