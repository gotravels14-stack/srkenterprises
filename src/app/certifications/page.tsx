"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import { ShieldCheck, FileText, Landmark, Scale, Briefcase, Award, Building } from "lucide-react";
import { motion } from "framer-motion";

export default function CertificationsPage() {
  const corporateDetails = [
    { label: "Company Name", value: "SKR Enterprises", icon: <Building className="h-5 w-5 text-secondary" /> },
    { label: "Proprietor Name", value: "Sanjay Kumar Rajbhar", icon: <ShieldCheck className="h-5 w-5 text-secondary" /> },
    { label: "Constitution", value: "Proprietorship Firm", icon: <Scale className="h-5 w-5 text-secondary" /> },
    { label: "Year of Establishment", value: "2024", icon: <Briefcase className="h-5 w-5 text-secondary" /> },
  ];

  const registrations = [
    {
      title: "GST Registration",
      authority: "Government of India",
      number: "09BHPPK5387R1Z2",
      desc: "Goods and Services Tax registration enabling standard tax compliance on all billing and works contracts.",
      icon: <Landmark className="h-6 w-6 text-secondary" />,
    },
    {
      title: "PAN Card Registration",
      authority: "Income Tax Department, India",
      number: "BHPPK5387R",
      desc: "Permanent Account Number corporate registration for tax filings and official financial transactions.",
      icon: <FileText className="h-6 w-6 text-secondary" />,
    },
    {
      title: "MSME Udyam Registration",
      number: "UDYAM-AP-20-0025179",
      authority: "Ministry of MSME, Govt of India",
      desc: "Micro, Small & Medium Enterprise certification supporting enterprise growth and government contract eligibility.",
      icon: <Award className="h-6 w-6 text-secondary" />,
    },
    {
      title: "EPF Registration",
      authority: "Employees' Provident Fund Organisation",
      number: "Registered & Compliant",
      desc: "Provident fund compliance ensuring retirement and security benefit schemes for our skilled workforce.",
      icon: <ShieldCheck className="h-6 w-6 text-secondary" />,
    },
    {
      title: "ESIC Compliance",
      authority: "Employees' State Insurance Corporation",
      number: "Registered & Compliant",
      desc: "Medical and health insurance compliance covering our on-site laborers and technical staff against hazards.",
      icon: <ShieldCheck className="h-6 w-6 text-secondary" />,
    },
    {
      title: "Labour License",
      authority: "Office of the Labour Commissioner",
      number: "Registered & Compliant",
      desc: "Contract labour license enabling placement and management of industrial workforce on client sites.",
      icon: <Scale className="h-6 w-6 text-secondary" />,
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
            <h1 className="text-4xl sm:text-5xl font-black tracking-tight">Legal & Registration</h1>
            <p className="text-sm sm:text-base text-gray-300 max-w-xl mx-auto leading-relaxed">
              SKR Enterprises operates with absolute transparency, maintaining full registrations and compliances across central and state authorities.
            </p>
          </div>
        </div>

        {/* Corporate details block */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
          <div className="bg-white border border-gray-100 rounded-[2rem] p-8 md:p-12 shadow-sm grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            <div className="lg:col-span-2 space-y-6">
              <h2 className="text-2xl font-bold text-primary">Company Profile</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {corporateDetails.map((detail, idx) => (
                  <div key={idx} className="flex items-start space-x-3 bg-gray-50 p-4 rounded-xl">
                    <div className="p-2 bg-secondary/15 rounded-lg shrink-0">
                      {detail.icon}
                    </div>
                    <div>
                      <span className="text-[10px] text-gray-400 font-extrabold uppercase tracking-widest block">
                        {detail.label}
                      </span>
                      <span className="text-sm font-bold text-primary mt-1 block">
                        {detail.value}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4 border-t lg:border-t-0 lg:border-l border-gray-100 pt-8 lg:pt-0 lg:pl-8 flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-bold text-primary mb-3">Compliance Declaration</h3>
                <p className="text-xs text-gray-500 leading-relaxed font-medium">
                  SKR Enterprises is a legally registered proprietorship firm engaged in mechanical construction and contracting services. The company operates in compliance with applicable statutory requirements and maintains high standards of professionalism, transparency, quality, and ethical business practices.
                </p>
              </div>
              <div className="bg-green-50 text-green-700 text-xs font-bold px-4 py-3 rounded-xl border border-green-100 flex items-center mt-4">
                <span className="w-2.5 h-2.5 bg-green-500 rounded-full mr-2.5 inline-block shrink-0 animate-pulse" />
                Fully Legally Compliant Operations
              </div>
            </div>

          </div>
        </div>

        {/* Registrations List Grid */}
        <div className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-primary mb-8 text-center">Statutory Registrations & Licenses</h2>
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
                  {reg.number && (
                    <div className="bg-primary/5 border border-primary/10 px-3 py-1.5 rounded-lg inline-block text-xs font-extrabold text-primary select-all">
                      {reg.number}
                    </div>
                  )}
                  <p className="text-[10px] text-gray-400 font-extrabold uppercase tracking-wider block mt-1">
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
