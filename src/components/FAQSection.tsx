"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface FAQItem {
  question: string;
  answer: string;
}

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    {
      question: "What industrial services does SKR Enterprises provide?",
      answer: "We provide comprehensive industrial mechanical contracting services. Our main areas of focus include mechanical construction, structural steel fabrication & erection, high-pressure utility piping, heavy equipment rigging & installation, boiler tube repairs, and anti-corrosive industrial painting.",
    },
    {
      question: "Do you handle shutdown maintenance campaigns?",
      answer: "Yes, shutdown maintenance is one of our special strengths. We provide high-velocity, round-the-clock (24/7) turnaround services to minimize industrial plant downtime, deploying specialized tools and highly skilled crews to complete maintenance during planned plant shut-offs.",
    },
    {
      question: "Do you supply skilled industrial manpower?",
      answer: "Yes, we maintain a large, vetted pool of certified skilled technicians. We supply IBR-certified high-pressure welders, mechanical fabricators, pipe fitters, crane riggers, electrical technicians, safety supervisors, and general industrial helpers.",
    },
    {
      question: "Which manufacturing and industrial sectors do you serve?",
      answer: "We serve heavy industries including Oil & Gas refineries, Petrochemical plants, Fertilizer manufacturing units, Power generation plants, Cement plants, Steel manufacturing facilities, and other large-scale manufacturing sites.",
    },
    {
      question: "Where is SKR Enterprises located and where do you operate?",
      answer: "Our registered corporate office is located in Ballia, Uttar Pradesh. However, we operate and execute major industrial contracting projects and maintenance contracts across multiple states in India, deploying site offices directly on-site at client plants.",
    },
    {
      question: "What safety regulations and standards do you comply with?",
      answer: "We adhere strictly to OSHA and Indian Industrial Safety standards. Our teams run Daily Tool Box Talks (TBT), perform Hazard Identification & Risk Assessments (HIRA) for critical lifts or hot works, enforce 100% PPE compliance, and carry out periodic safety drills.",
    },
  ];

  const toggleFAQ = (index: number) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };

  return (
    <section className="py-24 bg-gray-50 border-t border-gray-200/50" id="faq">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-secondary font-bold text-sm uppercase tracking-wider block mb-2">
            Support
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-primary tracking-tight">
            Frequently Asked Questions
          </h2>
          <div className="w-16 h-1 bg-secondary mx-auto mt-4 rounded" />
        </div>

        {/* Accordions */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.question}
                className="bg-white border border-gray-200/60 rounded-2xl overflow-hidden shadow-sm hover:border-secondary/20 transition-colors duration-300"
              >
                {/* Trigger Button */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full text-left px-6 py-5 flex justify-between items-center focus:outline-none select-none"
                >
                  <span className="font-bold text-primary text-sm sm:text-base pr-4">
                    {faq.question}
                  </span>
                  <div className="bg-gray-50 p-2 rounded-lg shrink-0">
                    {isOpen ? (
                      <ChevronUp className="h-4 w-4 text-secondary" />
                    ) : (
                      <ChevronDown className="h-4 w-4 text-secondary" />
                    )}
                  </div>
                </button>

                {/* Content Panel */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: "auto" }}
                      exit={{ height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-1 text-sm text-gray-500 border-t border-gray-50 leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
