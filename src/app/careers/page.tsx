"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import confetti from "canvas-confetti";
import { Briefcase, Send, Loader2, CheckCircle2, ChevronRight, Upload } from "lucide-react";
import { motion } from "framer-motion";

export default function CareersPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    role: "",
    experience: "",
    message: "",
    resume: "",
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const openPositions = [
    {
      title: "IBR-Pressure Welder (GTAW/SMAW)",
      experience: "3-6 Years",
      location: "Onsite Deployment",
      type: "Full-Time",
      requirements: "Must hold valid IBR certification card. Experienced in high-pressure alloy pipe root-pass welding.",
    },
    {
      title: "Pipe Fitter / Fabricator",
      experience: "2-5 Years",
      location: "Onsite / Workshop",
      type: "Full-Time",
      requirements: "Ability to read structural blueprints and piping isometric drawings. Skilled in spool fabrication.",
    },
    {
      title: "Mechanical Site Supervisor",
      experience: "5+ Years",
      location: "Onsite Deployment",
      type: "Full-Time",
      requirements: "Diploma in Mech. Engineering. Experienced in supervising structural assemblies and maintaining safety tags.",
    },
    {
      title: "Safety Inspector / Supervisor",
      experience: "3+ Years",
      location: "Onsite Deployment",
      type: "Full-Time",
      requirements: "ADIS / NEBOSH certified. Enforcing PPE, safety logs, toolbox talks, and risk checklists on site.",
    },
  ];

  const validate = () => {
    const tempErrors: Record<string, string> = {};
    if (!form.name.trim()) tempErrors.name = "Name is required";
    if (!form.phone.trim()) tempErrors.phone = "Phone number is required";
    if (!form.email.trim()) {
      tempErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      tempErrors.email = "Invalid email format";
    }
    if (!form.role) tempErrors.role = "Please select a role";
    if (!form.experience.trim()) tempErrors.experience = "Experience details required";

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
    if (errors[e.target.name]) {
      setErrors({
        ...errors,
        [e.target.name]: "",
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);

      confetti({
        particleCount: 150,
        spread: 80,
        origin: { y: 0.6 },
        colors: ["#0A2342", "#F97316", "#ffffff"],
      });

      setForm({
        name: "",
        email: "",
        phone: "",
        role: "",
        experience: "",
        message: "",
        resume: "",
      });
    }, 1800);
  };

  return (
    <>
      <Navbar />
      <main className="flex-grow pt-24 bg-gray-50">
        {/* Page Banner Header */}
        <div className="bg-primary text-white py-20 relative overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1920&q=80"
            alt="Team background"
            className="absolute inset-0 w-full h-full object-cover opacity-20"
          />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
            <h1 className="text-4xl sm:text-5xl font-black tracking-tight">Careers at SKR</h1>
            <p className="text-sm sm:text-base text-gray-300 max-w-xl mx-auto leading-relaxed">
              Build your career in mechanical construction, high-pressure welding, and refinery erections with one of Uttar Pradesh's fastest-growing contracting firms.
            </p>
          </div>
        </div>

        {/* Split Content layout */}
        <div className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Job listings */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-3">
              <h2 className="text-2xl font-extrabold text-primary">Current Openings</h2>
              <p className="text-sm text-gray-500 font-medium">
                We are actively looking for certified professionals to deploy across ongoing plant contracts.
              </p>
            </div>

            <div className="space-y-6">
              {openPositions.map((job) => (
                <div
                  key={job.title}
                  className="bg-white border border-gray-150 p-6 sm:p-8 rounded-[2rem] shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                    <h3 className="font-extrabold text-primary text-base sm:text-lg group-hover:text-secondary transition-colors duration-300">
                      {job.title}
                    </h3>
                    <div className="flex gap-2 shrink-0">
                      <span className="bg-secondary/10 text-secondary text-[10px] font-bold px-3 py-1 rounded-full border border-secondary/20">
                        {job.experience} Exp
                      </span>
                      <span className="bg-primary/5 text-primary text-[10px] font-bold px-3 py-1 rounded-full">
                        {job.location}
                      </span>
                    </div>
                  </div>
                  <p className="text-xs sm:text-sm text-gray-500 leading-relaxed font-medium">
                    {job.requirements}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Application Form */}
          <div className="lg:col-span-5">
            <div className="bg-white border border-gray-150 p-8 rounded-[2.5rem] shadow-xl relative overflow-hidden sticky top-28">
              {submitted ? (
                <div className="text-center py-16 space-y-6 animate-fade-in">
                  <div className="bg-green-500/10 text-green-500 p-4 rounded-full inline-flex">
                    <CheckCircle2 className="h-12 w-12" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-primary">Application Submitted!</h3>
                    <p className="text-sm text-gray-500 max-w-sm mx-auto leading-relaxed">
                      Thank you for applying. If your qualifications match our site requirements, our human resource team will contact you.
                    </p>
                  </div>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="bg-primary hover:bg-primary-dark text-white font-bold px-6 py-3 rounded-full text-xs transition-colors"
                  >
                    Apply for Another Position
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="space-y-1">
                    <h3 className="text-xl font-extrabold text-primary">Join Our Team</h3>
                    <p className="text-xs text-gray-400">
                      Submit your credentials and CV to our database.
                    </p>
                  </div>

                  {/* Name */}
                  <div className="space-y-1.5">
                    <label htmlFor="name" className="text-xs font-bold text-gray-500 uppercase tracking-wider block">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your Name"
                      className={`w-full bg-gray-50 border px-4 py-3 rounded-xl text-sm text-slate-850 focus:outline-none focus:bg-white transition-colors ${
                        errors.name ? "border-red-500 focus:border-red-500" : "border-gray-200 focus:border-secondary"
                      }`}
                    />
                    {errors.name && <span className="text-[10px] text-red-500 font-medium block">{errors.name}</span>}
                  </div>

                  {/* Phone */}
                  <div className="space-y-1.5">
                    <label htmlFor="phone" className="text-xs font-bold text-gray-500 uppercase tracking-wider block">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="Phone Number"
                      className={`w-full bg-gray-50 border px-4 py-3 rounded-xl text-sm text-slate-805 focus:outline-none focus:bg-white transition-colors ${
                        errors.phone ? "border-red-500 focus:border-red-500" : "border-gray-200 focus:border-secondary"
                      }`}
                    />
                    {errors.phone && <span className="text-[10px] text-red-500 font-medium block">{errors.phone}</span>}
                  </div>

                  {/* Email */}
                  <div className="space-y-1.5">
                    <label htmlFor="email" className="text-xs font-bold text-gray-500 uppercase tracking-wider block">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="Email Address"
                      className={`w-full bg-gray-50 border px-4 py-3 rounded-xl text-sm text-slate-805 focus:outline-none focus:bg-white transition-colors ${
                        errors.email ? "border-red-500 focus:border-red-500" : "border-gray-200 focus:border-secondary"
                      }`}
                    />
                    {errors.email && <span className="text-[10px] text-red-500 font-medium block">{errors.email}</span>}
                  </div>

                  {/* Position Selector */}
                  <div className="space-y-1.5">
                    <label htmlFor="role" className="text-xs font-bold text-gray-500 uppercase tracking-wider block">
                      Applying For *
                    </label>
                    <select
                      id="role"
                      name="role"
                      value={form.role}
                      onChange={handleChange}
                      className={`w-full bg-gray-50 border px-4 py-3 rounded-xl text-sm text-slate-805 focus:outline-none focus:bg-white transition-colors ${
                        errors.role ? "border-red-500 focus:border-red-500" : "border-gray-200 focus:border-secondary"
                      }`}
                    >
                      <option value="">Select a position</option>
                      {openPositions.map((pos) => (
                        <option key={pos.title} value={pos.title}>
                          {pos.title}
                        </option>
                      ))}
                      <option value="Other">Other / General Technician</option>
                    </select>
                    {errors.role && <span className="text-[10px] text-red-500 font-medium block">{errors.role}</span>}
                  </div>

                  {/* Experience */}
                  <div className="space-y-1.5">
                    <label htmlFor="experience" className="text-xs font-bold text-gray-500 uppercase tracking-wider block">
                      Total Experience (Years) *
                    </label>
                    <input
                      type="text"
                      id="experience"
                      name="experience"
                      value={form.experience}
                      onChange={handleChange}
                      placeholder="e.g. 4 Years"
                      className={`w-full bg-gray-50 border px-4 py-3 rounded-xl text-sm text-slate-805 focus:outline-none focus:bg-white transition-colors ${
                        errors.experience ? "border-red-500 focus:border-red-500" : "border-gray-200 focus:border-secondary"
                      }`}
                    />
                    {errors.experience && <span className="text-[10px] text-red-500 font-medium block">{errors.experience}</span>}
                  </div>

                  {/* Resume Upload (Mock file input) */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-gray-500 uppercase tracking-wider block">
                      Upload Resume (PDF/Word)
                    </label>
                    <div className="border-2 border-dashed border-gray-250 bg-gray-50 p-4 rounded-xl text-center hover:border-secondary transition-colors cursor-pointer relative">
                      <input
                        type="file"
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                        accept=".pdf,.doc,.docx"
                        onChange={(e) => {
                          if (e.target.files?.[0]) {
                            setForm({ ...form, resume: e.target.files[0].name });
                          }
                        }}
                      />
                      <Upload className="h-5 w-5 text-gray-400 mx-auto mb-2" />
                      <span className="text-xs text-gray-500 block">
                        {form.resume ? form.resume : "Choose File or drag & drop"}
                      </span>
                    </div>
                  </div>

                  {/* Message */}
                  <div className="space-y-1.5">
                    <label htmlFor="message" className="text-xs font-bold text-gray-500 uppercase tracking-wider block">
                      Cover Note (Optional)
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={3}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Briefly state your core certifications (e.g. IBR Welder card number)..."
                      className="w-full bg-gray-50 border border-gray-200 px-4 py-3 rounded-xl text-sm text-slate-805 focus:outline-none focus:bg-white focus:border-secondary transition-colors"
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-gradient-to-r from-secondary to-orange-500 hover:from-secondary-dark hover:to-orange-600 text-white font-bold py-4 rounded-xl shadow-lg transition-all duration-300 flex items-center justify-center space-x-2 disabled:opacity-85 cursor-pointer"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="h-5 w-5 animate-spin" />
                        <span>Submitting Application...</span>
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4" />
                        <span>Send Application</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <FloatingContact />
    </>
  );
}
