"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ChevronDown, CheckCircle, Trophy, Users, ShieldCheck } from "lucide-react";
import { useEffect, useState } from "react";

export default function Hero() {
  const [bgIndex, setBgIndex] = useState(0);

  const backgroundImages = [
    "https://images.unsplash.com/photo-1540324155974-72a5e7f67134?auto=format&fit=crop&w=1920&q=80", // Refinery/Industrial
    "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1920&q=80", // Welding/Construction
    "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1920&q=80", // Mechanical Shop
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setBgIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [backgroundImages.length]);

  const stats = [
    {
      id: "stat-1",
      value: "15+",
      label: "Years of Experience",
      icon: <Trophy className="h-6 w-6 text-secondary" />,
    },
    {
      id: "stat-2",
      value: "500+",
      label: "Projects Completed",
      icon: <CheckCircle className="h-6 w-6 text-secondary" />,
    },
    {
      id: "stat-3",
      value: "150+",
      label: "Skilled Workforce",
      icon: <Users className="h-6 w-6 text-secondary" />,
    },
    {
      id: "stat-4",
      value: "100%",
      label: "Safety Commitment",
      icon: <ShieldCheck className="h-6 w-6 text-secondary" />,
    },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-950">
      {/* Background Images with Fade Transition */}
      {backgroundImages.map((image, index) => (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          key={image}
          src={image}
          alt="SKR Enterprises Industrial Background"
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1500 ease-in-out ${
            index === bgIndex ? "opacity-35 scale-105" : "opacity-0 scale-100"
          }`}
          style={{
            transition: "opacity 1.5s ease-in-out, transform 6s linear",
            transform: index === bgIndex ? "scale(1.08)" : "scale(1)",
          }}
        />
      ))}

      {/* Dark Overlay with Slant */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent" />

      {/* Hero Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Text Content */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="inline-flex items-center space-x-2 bg-secondary/15 border border-secondary/30 px-4 py-1.5 rounded-full text-secondary text-sm font-semibold uppercase tracking-wider"
            >
              <span>SKR ENTERPRISES</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-[1.1]"
            >
              Building Trust. <br />
              <span className="text-secondary bg-clip-text text-transparent bg-gradient-to-r from-secondary to-orange-400">
                Delivering Quality.
              </span>{" "}
              <br />
              Creating Value.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg text-gray-300 max-w-xl mx-auto lg:mx-0 font-medium"
            >
              Premium Mechanical Construction & Contracting services. Under the expert leadership
              of Mr. Sanjay Kumar Rajbhar, we engineer structures that stand the test of time.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4"
            >
              <Link
                href="/contact"
                className="w-full sm:w-auto bg-gradient-to-r from-secondary to-orange-500 hover:from-secondary-dark hover:to-orange-600 text-white font-bold px-8 py-4 rounded-full shadow-lg shadow-orange-500/20 hover:shadow-orange-500/30 transition-all duration-300 text-center flex items-center justify-center group"
              >
                Request a Consultation
                <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <Link
                href="/services"
                className="w-full sm:w-auto bg-white/10 hover:bg-white/15 text-white font-bold px-8 py-4 rounded-full border border-white/20 hover:border-white/30 transition-all duration-300 text-center"
              >
                Our Services
              </Link>
            </motion.div>
          </div>

          {/* Sidebar Panel of floating statistics */}
          <div className="lg:col-span-5 relative">
            <div className="absolute inset-0 bg-secondary/5 rounded-3xl blur-3xl" />
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative grid grid-cols-2 gap-4"
            >
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
                  className="bg-slate-900/80 border border-white/10 backdrop-blur-md p-6 rounded-2xl flex flex-col justify-between hover:border-secondary/40 transition-colors duration-300 group"
                >
                  <div className="p-3 bg-white/5 rounded-xl self-start group-hover:bg-secondary/10 transition-colors">
                    {stat.icon}
                  </div>
                  <div className="mt-8">
                    <span className="text-3xl sm:text-4xl font-extrabold text-white block">
                      {stat.value}
                    </span>
                    <span className="text-xs sm:text-sm text-gray-400 font-medium block mt-1">
                      {stat.label}
                    </span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Down arrow link indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <ChevronDown className="h-6 w-6 text-white/50" />
      </div>
    </section>
  );
}
