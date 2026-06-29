"use client";

import { useState } from "react";
import { Phone, MessageCircle, Mail, MapPin, ArrowUp, Plus, X } from "lucide-react";

export default function FloatingContact() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const contactOptions = [
    {
      name: "Call Us",
      icon: <Phone className="h-5 w-5" />,
      href: "tel:+919381358951",
      color: "bg-blue-600 hover:bg-blue-700",
    },
    {
      name: "WhatsApp",
      icon: <MessageCircle className="h-5 w-5" />,
      href: "https://wa.me/919381358951",
      color: "bg-green-500 hover:bg-green-600",
    },
    {
      name: "Email",
      icon: <Mail className="h-5 w-5" />,
      href: "mailto:pamjavi1981@gmail.com",
      color: "bg-red-500 hover:bg-red-600",
    },
    {
      name: "Directions",
      icon: <MapPin className="h-5 w-5" />,
      href: "https://maps.google.com/?q=Belthra+Road+Ballia+Uttar+Pradesh",
      color: "bg-amber-600 hover:bg-amber-700",
    },
  ];

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-center space-y-3">
      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="bg-primary hover:bg-primary-dark text-white p-3 rounded-full shadow-lg border border-white/10 hover:border-secondary transition-all duration-300 group"
        aria-label="Scroll to Top"
      >
        <ArrowUp className="h-5 w-5 transition-transform duration-300 group-hover:-translate-y-1" />
      </button>

      {/* Floating Menu Action Options */}
      {isOpen && (
        <div className="flex flex-col items-center space-y-3 animate-fade-in">
          {contactOptions.map((option) => (
            <a
              key={option.name}
              href={option.href}
              target={option.name !== "Call Us" && option.name !== "Email" ? "_blank" : undefined}
              rel={option.name !== "Call Us" && option.name !== "Email" ? "noopener noreferrer" : undefined}
              className={`${option.color} text-white p-3 rounded-full shadow-lg flex items-center justify-center transition-transform duration-300 hover:scale-110 relative group`}
              aria-label={option.name}
            >
              {option.icon}
              {/* Tooltip */}
              <span className="absolute right-14 bg-primary text-white text-xs font-semibold px-2 py-1 rounded shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap border border-white/10">
                {option.name}
              </span>
            </a>
          ))}
        </div>
      )}

      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`${
          isOpen ? "bg-red-500 hover:bg-red-600 rotate-45" : "bg-secondary hover:bg-secondary-dark"
        } text-white p-4 rounded-full shadow-2xl transition-all duration-300 scale-100 active:scale-95 animate-pulse-subtle`}
        aria-label="Toggle Contact Channels"
      >
        {isOpen ? <X className="h-6 w-6" /> : <Plus className="h-6 w-6" />}
      </button>
    </div>
  );
}
