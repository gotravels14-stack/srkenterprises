"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import AboutSection from "@/components/AboutSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import { Shield, Eye, Target, Briefcase, Award } from "lucide-react";

export default function AboutPage() {
  const milestones = [
    { year: "2011", title: "Company Inception", desc: "SKR Enterprises founded in Ballia, UP, beginning with minor structural steel fabrication works." },
    { year: "2014", title: "Entering Piping Sector", desc: "Expanded capabilities to include high-pressure carbon steel piping and utility systems." },
    { year: "2017", title: "Heavy Erection & Rigging", desc: "Acquired heavy lifting equipment and began installing heavy industrial vessels and columns." },
    { year: "2020", title: "Major Shutdown Contracts", desc: "Partnered with power plants and refineries to deliver scheduled shutdown maintenance support." },
    { year: "2023", title: "National Level Contracting", desc: "Serving multiple states in India and executing complex multi-million rupee contracts for L&T, NTPC, UltraTech." },
  ];

  return (
    <>
      <Navbar />
      <main className="flex-grow pt-24 bg-gray-50">
        {/* Banner header */}
        <div className="bg-primary text-white py-20 relative overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1920&q=80"
            alt="Construction background"
            className="absolute inset-0 w-full h-full object-cover opacity-20"
          />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
            <h1 className="text-4xl sm:text-5xl font-black tracking-tight">About Our Company</h1>
            <p className="text-sm sm:text-base text-gray-300 max-w-xl mx-auto leading-relaxed">
              Delivering high-end mechanical fabrication, high-pressure piping, and industrial erections across India with verified quality.
            </p>
          </div>
        </div>

        {/* Core Content */}
        <AboutSection />

        {/* Timeline of Milestones */}
        <section className="py-24 bg-gray-50 border-t border-gray-200/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-secondary font-bold text-sm uppercase tracking-wider block mb-2">
                Our Journey
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-primary tracking-tight">
                Historical Milestones
              </h2>
              <div className="w-16 h-1 bg-secondary mx-auto mt-4 rounded" />
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="relative border-l border-gray-200 ml-4 md:ml-0 md:border-l-0 md:grid md:grid-cols-5 md:gap-4">
                {milestones.map((m, index) => (
                  <div key={m.year} className="mb-10 md:mb-0 relative text-left md:text-center space-y-2">
                    {/* Circle marker */}
                    <div className="absolute left-[-21px] md:left-1/2 top-1.5 w-4.5 h-4.5 rounded-full bg-secondary border-4 border-white -translate-x-1/2 shadow" />
                    
                    <div className="pl-6 md:pl-0 pt-0.5 md:pt-8">
                      <span className="text-2xl font-black text-secondary block">{m.year}</span>
                      <h3 className="text-sm font-bold text-primary block mt-1">{m.title}</h3>
                      <p className="text-xs text-gray-500 mt-2 max-w-xs mx-auto leading-relaxed">{m.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <WhyChooseUs />
      </main>
      <Footer />
      <FloatingContact />
    </>
  );
}
