"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone } from "lucide-react";
import SKRLogo from "@/components/SKRLogo";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Projects", href: "/projects" },
    { name: "Gallery", href: "/gallery" },
    { name: "Certifications", href: "/certifications" },
    { name: "Careers", href: "/careers" },
    { name: "Contact", href: "/contact" },
  ];

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  const isHomePage = pathname === "/";
  // The navbar should be solid on all subpages, or when scrolled on the home page
  const shouldBeSolid = scrolled || !isHomePage;

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          shouldBeSolid
            ? "bg-[#0A2342]/95 shadow-lg backdrop-blur-md py-3 border-b border-white/10"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Custom Logo & Brand */}
            <Link href="/" className="flex items-center space-x-3 group">
              <SKRLogo className="h-9 w-9 text-white transition-transform duration-300 group-hover:rotate-6" />
              <div>
                <span className="text-xl font-extrabold tracking-wider text-white block leading-none">
                  SKR ENTERPRISES
                </span>
                <span className="text-[10px] font-semibold text-secondary tracking-widest block uppercase mt-0.5">
                  Your Trust, Our Responsibility
                </span>
              </div>
            </Link>

            {/* Desktop Nav Links */}
            <div className="hidden lg:flex items-center space-x-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    isActive(link.href)
                      ? "text-secondary font-bold"
                      : "text-gray-300 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Contact Info & CTA */}
            <div className="hidden lg:flex items-center space-x-4">
              <a
                href="tel:+919381358951"
                className="flex items-center text-gray-300 hover:text-secondary text-sm font-semibold transition-colors"
              >
                <Phone className="h-4 w-4 mr-2 text-secondary animate-pulse" />
                +91 9381358951
              </a>
              <Link
                href="/contact"
                className="bg-secondary hover:bg-secondary-dark text-white px-5 py-2.5 rounded-full text-sm font-bold shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5"
              >
                Get Quote
              </Link>
            </div>

            {/* Mobile Menu Trigger button */}
            <div className="lg:hidden flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-300 hover:text-white focus:outline-none"
                aria-label="Toggle Menu"
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Sidebar - placed outside <nav> to avoid transition bugs */}
      <div
        className={`lg:hidden fixed inset-y-0 right-0 w-80 bg-[#0A2342] shadow-2xl z-55 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-6 border-b border-white/10">
          <span className="text-lg font-bold text-white tracking-wider flex items-center gap-2">
            <SKRLogo className="h-6 w-6 text-white" />
            Navigation
          </span>
          <button
            onClick={() => setIsOpen(false)}
            className="text-gray-300 hover:text-white focus:outline-none"
          >
            <X className="h-6 w-6" />
          </button>
        </div>
        <div className="px-6 py-8 flex flex-col space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`text-lg font-medium py-2 border-b border-white/5 block transition-colors ${
                isActive(link.href)
                  ? "text-secondary font-bold"
                  : "text-gray-300 hover:text-white"
              }`}
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-8 flex flex-col space-y-4">
            <a
              href="tel:+919381358951"
              className="flex items-center text-gray-300 hover:text-secondary text-base font-semibold"
            >
              <Phone className="h-5 w-5 mr-3 text-secondary" />
              +91 9381358951
            </a>
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="bg-secondary hover:bg-secondary-dark text-white text-center py-3 rounded-xl font-bold shadow-md transition-all duration-300 block"
            >
              Get Quote
            </Link>
          </div>
        </div>
      </div>

      {/* Dimmed Background Overlay */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black/60 z-51 lg:hidden"
        />
      )}
    </>
  );
}
