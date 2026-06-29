"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import { ShieldCheck, FileText, Landmark, Scale, Briefcase, Award } from "lucide-react";
import { motion } from "framer-motion";

export default function CertificationsPage() {
  const registrations = [
    {
      title: "GST Registration",
      authority: "Government of India",
      desc: "Goods and Services Tax registration enabling standard tax compliance on all billing and works contracts.",
      icon: <Landmark className="h-6 w-6 text-secondary" />,
    },
    {
      title: "PAN Card Registration",
      authority: "Income Tax Department",
      desc: "Permanent Account Number corporate registration for tax filings and official financial accounts.",
      icon: <FileText className="h-6 w-6 text-secondary" />,
    },
    {
      title: "MSME Udyam Registration",
      authority: "Ministry of MSME, Govt of India",
      desc: "Micro, Small & Medium Enterprise certification supporting enterprise growth and government contract eligibility.",
      icon: <Award className="h-6 w-6 text-secondary" />,
    },
    {
      title: "EPF Registration",
      authority: "Employees' Provident Fund Organisation",
      desc: "Provident fund compliance ensuring retirement and security benefit schemes for our skilled workforce.",
      icon: <ShieldCheck className="h-6 w-6 text-secondary" />,
    },
    {
      title: "ESIC Compliance",
      authority: "Employees' State Insurance Corporation",
      desc: "Medical and health insurance compliance covering our on-site laborers and technical staff against hazards.",
      icon: <ShieldCheck className="h-6 w-6 text-secondary" />,
    },
    {
      title: "Professional Tax Registration",
      authority: "State Commercial Tax Department",
      desc: "State professional tax compliance registration for employer operations and salaries.",
      icon: <Scale className="h-6 w-6 text-secondary" />,
    },
    {
      title: "Factory License",
      authority: "Directorate of Factories",
      desc: "Registered factory licenses ensuring workshop standards, fire safety, and machinery certifications.",
      icon: <Briefcase className="h-6 w-6 text-secondary" />,
    },
    {
      title: "Labour License",
      authority: "Office of the Labour Commissioner",
      desc: "Contract labour license enabling placement and management of industrial workforce on client sites.",
      icon: <Scale className="h-6 w-6 text-secondary" />,
    },
    {
      title: "Safety & ISO Compliances",
      authority: "Accredited Certifying Bodies",
      desc: "Operating in alignment with ISO safety standards, quality control procedures, and zero incident targets.",
      icon: <ShieldCheck className="h-6 w-6 text-secondary" />,
    },
  ];

  return (
    <>
      <Navbar />
      <main className="flex-grow pt-24 bg-gray-50">
        {/* Page Banner Header */}
        <div className="bg-primary text-white py-20 relative overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1920&q=80"
            alt="Compliance background"
            className="absolute inset-0 w-full h-full object-cover opacity-20"
          />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
            <h1 className="text-4xl sm:text-5xl font-black tracking-tight">Legal Registrations & Compliance</h1>
            <p className="text-sm sm:text-base text-gray-300 max-w-xl mx-auto leading-relaxed">
              SKR Enterprises operates with absolute transparency, maintaining full registrations and compliances across central and state authorities.
            </p>
          </div>
        </div>

        {/* Registrations List Grid */}
        <div className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {registrations.map((reg, i) => (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                key={reg.title}
                className="bg-white border border-gray-100 p-8 rounded-[2rem] hover:shadow-xl hover:border-white transition-all duration-300 flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  <div className="p-4 bg-gray-50 rounded-2xl inline-flex group-hover:bg-secondary/15 transition-colors duration-300">
                    {reg.icon}
                  </div>
                  <h3 className="text-lg font-bold text-primary group-hover:text-secondary transition-colors duration-300">
                    {reg.title}
                  </h3>
                  <p className="text-xs text-gray-400 font-bold uppercase tracking-wider block mt-1">
                    Authority: {reg.authority}
                  </p>
                  <p className="text-xs sm:text-sm text-gray-500 leading-relaxed font-medium">
                    {reg.desc}
                  </p>
                </div>
                
                <div className="mt-8 pt-4 border-t border-gray-50 flex items-center text-xs font-bold text-green-600">
                  <span className="w-2.5 h-2.5 bg-green-500 rounded-full mr-2 inline-block" />
                  Active & Compliant
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
      <FloatingContact />
    </>
  );
}
