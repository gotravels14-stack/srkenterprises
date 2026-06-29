"use client";

import { motion } from "framer-motion";
import { Check, ShieldAlert, Award, Calendar, Users2, Hammer, ShieldCheck, HeartHandshake, Smile } from "lucide-react";
import { useState, useEffect, useRef } from "react";

// Hook to animate numbers
function Counter({ value, suffix = "", duration = 2 }: { value: number; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const [isIntersecting, setIsIntersecting] = useState(false);
  const elementRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
        }
      },
      { threshold: 0.1 }
    );
    
    if (elementRef.current) {
      observer.observe(elementRef.current);
    }
    
    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isIntersecting) return;

    let start = 0;
    const end = value;
    const totalMiliseconds = duration * 1000;
    const incrementTime = Math.max(Math.floor(totalMiliseconds / end), 20);
    
    const timer = setInterval(() => {
      start += Math.ceil(end / (totalMiliseconds / incrementTime));
      if (start >= end) {
        clearInterval(timer);
        setCount(end);
      } else {
        setCount(start);
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, [value, duration, isIntersecting]);

  return <span ref={elementRef}>{count}{suffix}</span>;
}

export default function WhyChooseUs() {
  const advantages = [
    { title: "Experienced Team", icon: <Users2 className="h-5 w-5 text-secondary" /> },
    { title: "Safety First", icon: <ShieldAlert className="h-5 w-5 text-secondary" /> },
    { title: "On-Time Completion", icon: <Calendar className="h-5 w-5 text-secondary" /> },
    { title: "Quality Assurance", icon: <Award className="h-5 w-5 text-secondary" /> },
    { title: "Skilled Workforce", icon: <Users2 className="h-5 w-5 text-secondary" /> },
    { title: "Modern Equipment", icon: <Hammer className="h-5 w-5 text-secondary" /> },
    { title: "Cost Effective Solutions", icon: <HeartHandshake className="h-5 w-5 text-secondary" /> },
    { title: "Reliable Support", icon: <Smile className="h-5 w-5 text-secondary" /> },
  ];

  const counters = [
    { value: 3, suffix: "+", label: "Years Experience", sub: "Active in mechanical construction" },
    { value: 10, suffix: "+", label: "Completed Projects", sub: "Executed with high quality standards" },
    { value: 40, suffix: " approx.", label: "Manpower Strength", sub: "Engineers, supervisors & skilled workers" },
    { value: 100, suffix: "%", label: "Safety Record", sub: "Zero major safety incidents on site" },
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden" id="why-choose-us">
      {/* Background shape */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gray-50 rounded-full blur-3xl opacity-55 translate-y-1/3 -translate-x-1/3" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-secondary font-bold text-sm uppercase tracking-wider block mb-2">
            Why Choose SKR
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-primary tracking-tight">
            Our Competitive Advantages
          </h2>
          <div className="w-16 h-1 bg-secondary mx-auto mt-4 rounded" />
        </div>

        {/* Top: Staggered list of advantages */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {advantages.map((adv, i) => (
            <motion.div
              key={adv.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="bg-gray-50 border border-gray-100 p-6 rounded-2xl flex items-center space-x-4 hover:border-secondary/20 hover:bg-white hover:shadow-lg transition-all duration-300"
            >
              <div className="p-3 bg-secondary/10 rounded-xl shrink-0">
                {adv.icon}
              </div>
              <h3 className="font-bold text-primary text-sm sm:text-base leading-snug">
                {adv.title}
              </h3>
            </motion.div>
          ))}
        </div>

        {/* Bottom: Statistics Grid with animated counters */}
        <div className="bg-primary rounded-[2.5rem] text-white p-8 md:p-16 relative overflow-hidden shadow-2xl">
          {/* Decorative circles */}
          <div className="absolute -top-12 -right-12 w-48 h-48 bg-white/5 rounded-full blur-2xl" />
          <div className="absolute -bottom-16 -left-16 w-64 h-64 bg-secondary/10 rounded-full blur-2xl" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
            {counters.map((count, i) => (
              <div key={count.label} className="text-center space-y-3">
                <span className="text-4xl md:text-5xl font-black text-secondary block">
                  <Counter value={count.value} suffix={count.suffix} />
                </span>
                <div>
                  <span className="text-lg font-bold text-white block">
                    {count.label}
                  </span>
                  <span className="text-xs text-gray-400 block mt-1 leading-normal max-w-[200px] mx-auto">
                    {count.sub}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
