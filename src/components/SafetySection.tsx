"use client";

import { motion } from "framer-motion";
import { ShieldCheck, HardHat, AlertTriangle, GraduationCap, Flame, Target } from "lucide-react";

export default function SafetySection() {
  const safetyPolicies = [
    {
      title: "Personal Protective Equipment",
      desc: "Mandatory double-lanyard safety harness, steel-toe boots, certified hard hats, and fire-resistant clothing across all sites.",
      icon: <HardHat className="h-8 w-8 text-secondary" />,
    },
    {
      title: "Quality Control Audits",
      desc: "Routine third-party NDT testing (DPI, UT, Radiography) and internal weld quality checks to ensure total code compliance.",
      icon: <ShieldCheck className="h-8 w-8 text-secondary" />,
    },
    {
      title: "Risk Assessment (HIRA)",
      desc: "Detailed Hazard Identification and Risk Assessment executed before executing any heavy lifting, crane riggings, or hot works.",
      icon: <AlertTriangle className="h-8 w-8 text-secondary" />,
    },
    {
      title: "Regular Safety Training",
      desc: "Daily morning Tool Box Talks (TBT), weekly safety drills, height-pass card checks, and fire hazard safety seminars.",
      icon: <GraduationCap className="h-8 w-8 text-secondary" />,
    },
    {
      title: "Emergency Preparedness",
      desc: "Established onsite first-aid posts, sand buckets, fire extinguishers, emergency alarms, and strategic evacuation routes.",
      icon: <Flame className="h-8 w-8 text-secondary" />,
    },
    {
      title: "Zero Accident Policy",
      desc: "An uncompromising operational philosophy aimed at achieving 100% hazard-free workspace and maintaining clean safety records.",
      icon: <Target className="h-8 w-8 text-secondary" />,
    },
  ];

  return (
    <section className="py-24 bg-slate-900 text-white relative overflow-hidden" id="safety">
      {/* Decorative orange glowing background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-secondary font-bold text-sm uppercase tracking-wider block mb-2">
            Absolute Compliance
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Quality, Safety & Health Policy
          </h2>
          <p className="text-sm text-gray-400 mt-3">
            In mechanical and piping construction, safety isn't an option—it is our primary foundation. We enforce strict industrial safety protocols.
          </p>
          <div className="w-16 h-1 bg-secondary mx-auto mt-4 rounded" />
        </div>

        {/* Safety Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {safetyPolicies.map((policy, i) => (
            <motion.div
              key={policy.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="bg-slate-950/60 border border-white/5 p-8 rounded-3xl hover:border-secondary/30 hover:bg-slate-950/80 transition-all duration-300 group"
            >
              <div className="p-4 bg-white/5 rounded-2xl inline-flex mb-6 group-hover:bg-secondary/15 transition-colors duration-300">
                {policy.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-secondary transition-colors duration-300">
                {policy.title}
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                {policy.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Safety Stat Board */}
        <div className="mt-20 border border-white/10 rounded-[2rem] p-8 md:p-12 bg-slate-950/40 backdrop-blur-md text-center max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-2 text-left">
            <h3 className="text-2xl font-bold text-white">Our Safe Man-Hours Record</h3>
            <p className="text-sm text-gray-400 max-w-lg">
              Operating with an impeccable track record. Our commitment ensures every worker returns home safely every single day.
            </p>
          </div>
          <div className="bg-secondary text-white font-black text-3xl md:text-4xl px-8 py-5 rounded-2xl shadow-xl shrink-0">
            Zero Incidents
          </div>
        </div>
      </div>
    </section>
  );
}
