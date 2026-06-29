"use client";

import { motion } from "framer-motion";
import { Shield, Award, Users, HeartHandshake, CheckCircle2 } from "lucide-react";

export default function AboutSection() {
  const values = [
    {
      name: "Integrity",
      description: "We conduct our business with honesty, transparency and strong ethics.",
      icon: <Shield className="h-6 w-6 text-secondary" />,
    },
    {
      name: "Quality",
      description: "We are committed to maintain the highest standards in every work.",
      icon: <Award className="h-6 w-6 text-secondary" />,
    },
    {
      name: "Teamwork",
      description: "We believe in collaboration, respect and growing together.",
      icon: <Users className="h-6 w-6 text-secondary" />,
    },
    {
      name: "Safety",
      description: "Safety of our people, clients and site is our top priority in every project.",
      icon: <HeartHandshake className="h-6 w-6 text-secondary" />,
    },
    {
      name: "Commitment",
      description: "We are dedicated to deliver projects on time with best resources and efforts.",
      icon: <CheckCircle2 className="h-6 w-6 text-secondary" />,
    },
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden" id="about">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gray-100 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-secondary font-bold text-sm uppercase tracking-wider block mb-2">
            Who We Are
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-primary tracking-tight">
            About SKR Enterprises
          </h2>
          <div className="w-16 h-1 bg-secondary mx-auto mt-4 rounded" />
        </div>

        {/* Split Layout: Image & Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          {/* Left Column: Image/Visual representation */}
          <div className="lg:col-span-5 relative h-[450px] rounded-2xl overflow-hidden shadow-2xl group">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=800&q=80"
              alt="SKR Enterprises Heavy Construction"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-[#0A2342]/20 group-hover:bg-[#0A2342]/10 transition-colors" />
            <div className="absolute bottom-6 left-6 right-6 bg-primary/90 backdrop-blur-md p-6 rounded-xl border border-white/10 text-white">
              <span className="text-secondary font-extrabold text-sm uppercase tracking-wider block">
                Mechanical Contracting
              </span>
              <p className="text-xs text-gray-300 mt-1">
                Erecting industrial steel frames and processing systems in core infrastructure sectors.
              </p>
            </div>
          </div>

          {/* Right Column: Overview, Vision & Mission */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-primary">Your Trust, Our Responsibility</h3>
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                SKR Enterprises is a trusted name in the field of mechanical construction and contracting services. With a strong foundation of technical expertise, skilled manpower and modern resources, we have successfully executed a wide range of projects with quality, safety and on-time completion. Our commitment to excellence and client satisfaction has helped us build long-term relationships and establish a strong presence in the industry.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-gray-100">
              <div className="space-y-2">
                <span className="text-secondary font-extrabold text-sm uppercase tracking-wider block">
                  Our Vision
                </span>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  To be a leading mechanical construction and contracting company recognized for our quality work, innovation, safety practices and customer satisfaction.
                </p>
              </div>
              <div className="space-y-2">
                <span className="text-secondary font-extrabold text-sm uppercase tracking-wider block">
                  Our Mission
                </span>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  To deliver high-quality, reliable and cost-effective services by using best practices, skilled manpower and advanced technology while ensuring safety, integrity and timely execution in every project.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Founder Bio highlight */}
        <div className="bg-gray-50 border border-gray-100 rounded-3xl p-8 md:p-12 mb-20">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-4 flex flex-col items-center text-center">
              <div className="w-28 h-28 bg-primary rounded-full flex items-center justify-center text-white text-3xl font-extrabold shadow-md mb-4 border-4 border-white">
                SKR
              </div>
              <h4 className="text-lg font-bold text-primary">Mr. Sanjay Kumar Rajbhar</h4>
              <span className="text-xs font-semibold text-secondary uppercase tracking-widest mt-1">
                Proprietor & Founder
              </span>
            </div>
            <div className="md:col-span-8 space-y-4">
              <h3 className="text-xl font-bold text-primary">Proprietor's Commitment</h3>
              <p className="text-sm text-gray-600 leading-relaxed italic">
                &ldquo;At SKR Enterprises, we believe that industrial engineering is not just about metal, welding,
                and erection; it is about building client trust. Safety is our core policy, quality is our promise,
                and timely project delivery is our signature. We look forward to executing your next project
                with absolute professionalism.&rdquo;
              </p>
              <div className="flex flex-wrap gap-4 pt-2">
                <span className="bg-white border border-gray-200 px-3 py-1 rounded-full text-xs font-semibold text-gray-500 flex items-center">
                  <CheckCircle2 className="h-3.5 w-3.5 text-secondary mr-1.5" />
                  Expertise in Mechanical Construction
                </span>
                <span className="bg-white border border-gray-200 px-3 py-1 rounded-full text-xs font-semibold text-gray-500 flex items-center">
                  <CheckCircle2 className="h-3.5 w-3.5 text-secondary mr-1.5" />
                  Commitment to Quality & Safety
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div>
          <div className="text-center max-w-xl mx-auto mb-12">
            <h3 className="text-2xl font-bold text-primary">Our Core Values</h3>
            <p className="text-sm text-gray-500 mt-2">
              The fundamental principles that guide our everyday operations, on-site execution, and corporate behavior.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {values.map((val, i) => (
              <motion.div
                key={val.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white border border-gray-100 p-6 rounded-2xl hover:shadow-xl hover:border-white transition-all duration-300 flex flex-col items-center text-center group"
              >
                <div className="p-4 bg-gray-50 rounded-xl mb-4 group-hover:bg-secondary/15 transition-colors">
                  {val.icon}
                </div>
                <h4 className="text-base font-bold text-primary mb-2">{val.name}</h4>
                <p className="text-xs text-gray-500 leading-relaxed">{val.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
