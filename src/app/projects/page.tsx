"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import { projectsData, categories } from "@/data/projects";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Calendar, Briefcase, Award } from "lucide-react";

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const filteredProjects = selectedCategory === "all"
    ? projectsData
    : projectsData.filter((p) => p.category === selectedCategory);

  return (
    <>
      <Navbar />
      <main className="flex-grow pt-24 bg-gray-50">
        {/* Page Banner Header */}
        <div className="bg-primary text-white py-20 relative overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1920&q=80"
            alt="Refinery background"
            className="absolute inset-0 w-full h-full object-cover opacity-20"
          />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
            <h1 className="text-4xl sm:text-5xl font-black tracking-tight">Our Projects</h1>
            <p className="text-sm sm:text-base text-gray-300 max-w-xl mx-auto leading-relaxed">
              Explore our project archives showing successfully executed structural fabrication, high-pressure utility piping, and refinery shutdowns.
            </p>
          </div>
        </div>

        {/* Filter Controls */}
        <div className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-2 mb-16">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-5 py-3 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 ${
                  selectedCategory === cat.id
                    ? "bg-secondary text-white shadow-md shadow-orange-500/20"
                    : "bg-white border border-gray-200 text-gray-600 hover:text-primary hover:border-primary"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Projects Portfolio Grid */}
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  key={project.id}
                  className="bg-white border border-gray-100 rounded-[2rem] overflow-hidden shadow-sm hover:shadow-xl hover:border-white transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    {/* Visual Card Image */}
                    <div className="h-60 bg-slate-900 overflow-hidden relative">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={project.image}
                        alt={project.name}
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 scale-100 group-hover:scale-103"
                      />
                      <div className="absolute inset-0 bg-[#0A2342]/10 group-hover:bg-[#0A2342]/5 transition-colors" />
                      <span className="absolute top-4 left-4 bg-secondary text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-md z-10">
                        {project.category}
                      </span>
                    </div>

                    {/* Metadata Details */}
                    <div className="p-8 space-y-4">
                      <h3 className="text-xl font-extrabold text-primary leading-snug group-hover:text-secondary transition-colors duration-300">
                        {project.name}
                      </h3>
                      <p className="text-xs text-gray-500 leading-relaxed font-medium">
                        {project.scope}
                      </p>
                    </div>
                  </div>

                  {/* Footer metadata block */}
                  <div className="px-8 pb-8 pt-4 border-t border-gray-50 text-xs text-gray-500 space-y-3 font-semibold">
                    <div className="flex items-center">
                      <Briefcase className="h-4 w-4 text-secondary shrink-0 mr-2" />
                      <span>Client: <strong className="text-gray-700">{project.client}</strong></span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 text-secondary shrink-0 mr-2" />
                      <span>{project.location}</span>
                    </div>
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 text-secondary shrink-0 mr-2" />
                      <span>Completed in {project.year}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </main>
      <Footer />
      <FloatingContact />
    </>
  );
}
