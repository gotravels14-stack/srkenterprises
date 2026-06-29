"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import ContactForm from "@/components/ContactForm";
import { MapPin, Phone, Mail, Clock, ShieldCheck, MessageCircle } from "lucide-react";

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="flex-grow pt-24 bg-gray-50">
        {/* Page Banner Header */}
        <div className="bg-primary text-white py-20 relative overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://images.unsplash.com/photo-1540324155974-72a5e7f67134?auto=format&fit=crop&w=1920&q=80"
            alt="Refinery background"
            className="absolute inset-0 w-full h-full object-cover opacity-20"
          />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
            <h1 className="text-4xl sm:text-5xl font-black tracking-tight">Contact Our Team</h1>
            <p className="text-sm sm:text-base text-gray-300 max-w-xl mx-auto leading-relaxed">
              Have an upcoming shutdown, fabrication schedule, or utility piping project? Get in touch with us today for technical estimates.
            </p>
          </div>
        </div>

        {/* Contact Body Split Content */}
        <div className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Details & Map */}
          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-3">
              <h2 className="text-2xl font-extrabold text-primary">Get In Touch</h2>
              <p className="text-sm text-gray-500 font-medium leading-relaxed">
                Connect with our Proprietor, Mr. Sanjay Kumar Rajbhar, or our project planning division directly. We respond to emails within 24 hours.
              </p>
            </div>

            {/* List of Details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-2xl border border-gray-150 flex items-start space-x-3.5">
                <MapPin className="h-6 w-6 text-secondary shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <span className="text-xs font-bold text-gray-400 uppercase tracking-widest block">Address</span>
                  <span className="text-xs sm:text-sm font-medium text-slate-800 leading-normal block">
                    Haldi Rampur Kathar Baari,<br />
                    Belthra Road, Ballia,<br />
                    Uttar Pradesh – 221715
                  </span>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-gray-150 flex items-start space-x-3.5">
                <Phone className="h-6 w-6 text-secondary shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <span className="text-xs font-bold text-gray-400 uppercase tracking-widest block">Phone / Call</span>
                  <a href="tel:+919381358951" className="text-xs sm:text-sm font-bold text-slate-800 hover:text-secondary block">
                    +91 9381358951
                  </a>
                  <span className="text-[10px] text-gray-400 block font-medium">Available for urgent calls</span>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-gray-150 flex items-start space-x-3.5">
                <MessageCircle className="h-6 w-6 text-secondary shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <span className="text-xs font-bold text-gray-400 uppercase tracking-widest block">WhatsApp</span>
                  <a
                    href="https://wa.me/919381358951"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs sm:text-sm font-bold text-slate-800 hover:text-secondary block"
                  >
                    +91 9381358951
                  </a>
                  <span className="text-[10px] text-gray-400 block font-medium">Text for instant estimates</span>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-gray-150 flex items-start space-x-3.5">
                <Mail className="h-6 w-6 text-secondary shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <span className="text-xs font-bold text-gray-400 uppercase tracking-widest block">Email Address</span>
                  <a href="mailto:pamjaw1981@gmail.com" className="text-xs sm:text-sm font-bold text-slate-850 hover:text-secondary block truncate max-w-[170px] sm:max-w-none">
                    pamjaw1981@gmail.com
                  </a>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-gray-150 flex items-start space-x-3.5 sm:col-span-2">
                <Clock className="h-6 w-6 text-secondary shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <span className="text-xs font-bold text-gray-400 uppercase tracking-widest block">Office Hours</span>
                  <span className="text-xs sm:text-sm font-medium text-slate-800 block">
                    Monday – Saturday: 9:00 AM – 7:00 PM (IST)
                  </span>
                  <span className="text-[10px] text-gray-400 font-bold block">
                    Site deployments and shutdowns run 24/7.
                  </span>
                </div>
              </div>
            </div>

            {/* Google Map Iframe (responsive & generic) */}
            <div className="rounded-[2rem] overflow-hidden border border-gray-150 shadow-sm h-72 w-full relative">
              <iframe
                title="SKR Enterprises Office Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14343.832766345864!2d83.87327318086055!2d26.02700593457582!2d26.027!2d83.873!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3991873130ab62b9%3A0xe960e6530f2fcd1b!2sBelthara%20Road%2C%20Uttar%20Pradesh%20221715!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-6">
            <ContactForm />
          </div>
        </div>
      </main>
      <Footer />
      <FloatingContact />
    </>
  );
}
