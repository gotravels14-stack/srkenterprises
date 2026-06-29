"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import TimelineSection from "@/components/TimelineSection";
import IndustriesSection from "@/components/IndustriesSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import ResourcesSection from "@/components/ResourcesSection";
import SafetySection from "@/components/SafetySection";
import Testimonials from "@/components/Testimonials";
import FAQSection from "@/components/FAQSection";
import FloatingContact from "@/components/FloatingContact";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Download, ArrowRight } from "lucide-react";
import { projectsData } from "@/data/projects";

export default function Home() {
  // Select 3 featured projects for display on the home page
  const featuredProjects = projectsData.slice(0, 3);

  // Client list for the scrolling logo slider
  const clients = [
    "Larsen & Toubro",
    "NTPC Limited",
    "IOCL Refinery",
    "UltraTech Cement",
    "IFFCO Fertilizer",
    "HPCL-Mittal Energy",
    "TATA Power",
    "BHEL",
  ];

  return (
    <>
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero />

        {/* Client Logos Scrolling Slider */}
        <div className="bg-slate-900 border-y border-white/5 py-10 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 mb-4">
            <span className="text-secondary font-bold text-xs uppercase tracking-widest text-center block">
              Trusted by Top Contractors & Clients
            </span>
          </div>
          <div className="flex w-[200%] md:w-[150%] animate-scroll-left space-x-12 items-center">
            {/* Render Twice for Loop */}
            {[...clients, ...clients].map((client, index) => (
              <div
                key={`${client}-${index}`}
                className="text-white/40 text-lg sm:text-xl font-bold tracking-wider uppercase text-center w-40 shrink-0"
              >
                {client}
              </div>
            ))}
          </div>
        </div>

        {/* About Section */}
        <AboutSection />

        {/* Services Section */}
        <ServicesSection />

        {/* Nature of Business (Timeline) */}
        <TimelineSection />

        {/* Industries We Serve */}
        <IndustriesSection />

        {/* Why Choose Us */}
        <WhyChooseUs />

        {/* Featured Projects Preview */}
        <section className="py-24 bg-gray-50 border-y border-gray-200/50" id="featured-projects">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
              <div>
                <span className="text-secondary font-bold text-sm uppercase tracking-wider block mb-2">
                  Portfolio Highlight
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-primary tracking-tight">
                  Featured Projects
                </h2>
                <div className="w-16 h-1 bg-secondary mt-4 rounded" />
              </div>
              <Link
                href="/projects"
                className="inline-flex items-center text-sm font-bold text-primary hover:text-secondary transition-colors mt-4 md:mt-0"
              >
                View All Projects Portfolio
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {featuredProjects.map((project) => (
                <div
                  key={project.id}
                  className="bg-white border border-gray-100 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="h-56 overflow-hidden relative">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={project.image}
                      alt={project.name}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-103"
                    />
                  </div>
                  <div className="p-6 space-y-4">
                    <span className="bg-secondary/10 text-secondary text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                      {project.category}
                    </span>
                    <h3 className="text-lg font-bold text-primary leading-snug">
                      {project.name}
                    </h3>
                    <div className="text-xs text-gray-500 space-y-1">
                      <p>
                        <strong className="text-gray-700">Client:</strong> {project.client}
                      </p>
                      <p>
                        <strong className="text-gray-700">Location:</strong> {project.location}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Resources Dashboard */}
        <ResourcesSection />

        {/* Safety & Health Policy */}
        <SafetySection />

        {/* Testimonials */}
        <Testimonials />

        {/* Company Profile PDF Download banner */}
        <section className="py-16 bg-gradient-to-r from-primary to-primary-dark text-white border-y border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-2 text-center md:text-left">
              <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">
                Want to learn more about our capacity?
              </h2>
              <p className="text-sm text-gray-400 max-w-xl">
                Download the complete SKR Enterprises Corporate Profile Brochure including machinery logs, legal registrations, and past execution works.
              </p>
            </div>
            {/* Direct download prompt */}
            <a
              href="mailto:pamjaw1981@gmail.com?subject=Request%20Company%20Profile%20PDF"
              className="bg-secondary hover:bg-secondary-dark text-white font-bold px-8 py-4 rounded-full shadow-lg shadow-orange-500/20 hover:shadow-orange-500/30 transition-all duration-300 flex items-center justify-center shrink-0"
            >
              <Download className="mr-2 h-5 w-5" />
              Request Company Profile PDF
            </a>
          </div>
        </section>

        {/* FAQs */}
        <FAQSection />

        {/* Final CTA Banner */}
        <section className="py-24 bg-white relative overflow-hidden">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8 relative z-10">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-primary tracking-tight">
              Need Mechanical Construction Experts?
            </h2>
            <p className="text-base text-gray-500 max-w-xl mx-auto leading-relaxed">
              Partner with SKR Enterprises for high-pressure piping, structural steel erections, or planned turnaround shutdown campaigns. Let us deliver your project safely, on schedule, and with peak engineering standards.
            </p>
            <div className="flex justify-center">
              <Link
                href="/contact"
                className="bg-secondary hover:bg-secondary-dark text-white font-black px-10 py-5 rounded-full shadow-xl shadow-orange-500/20 transition-all duration-300 hover:-translate-y-0.5 text-lg"
              >
                Request a Free Consultation
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingContact />
    </>
  );
}
