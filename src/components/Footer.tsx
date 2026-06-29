import Link from "next/link";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import SKRLogo from "@/components/SKRLogo";

const Instagram = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Our Services", href: "/services" },
    { name: "Projects Portfolio", href: "/projects" },
    { name: "Photo Gallery", href: "/gallery" },
  ];

  const legalLinks = [
    { name: "Certifications", href: "/certifications" },
    { name: "Careers", href: "/careers" },
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Contact", href: "/contact" },
  ];

  const services = [
    { name: "Mechanical Construction", href: "/services#mechanical-construction" },
    { name: "Fabrication & Erection", href: "/services#fabrication-erection" },
    { name: "Industrial Piping", href: "/services#industrial-piping" },
    { name: "Equipment Erection", href: "/services#equipment-erection" },
    { name: "Boiler Maintenance", href: "/services#boiler-maintenance" },
    { name: "Shutdown Maintenance", href: "/services#shutdown-maintenance" },
  ];

  return (
    <footer className="bg-primary text-gray-400 pt-16 pb-8 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Brand Column */}
        <div className="space-y-6">
          <Link href="/" className="flex items-center space-x-3 group">
            <SKRLogo className="h-9 w-9 text-white transition-transform duration-300 group-hover:rotate-6" />
            <div>
              <span className="text-xl font-extrabold tracking-wider text-white block leading-none">
                SKR ENTERPRISES
              </span>
              <span className="text-[10px] font-semibold text-secondary tracking-widest block uppercase">
                Your Trust, Our Responsibility
              </span>
            </div>
          </Link>
          <p className="text-sm text-gray-400 leading-relaxed">
            Leading mechanical construction and contracting firm offering fabrication, erection, high-pressure piping, and industrial maintenance services with a strong safety culture and certified workmanship.
          </p>
          <div className="space-y-2 pt-2">
            <span className="text-xs font-bold text-white uppercase block tracking-wider">Proprietor</span>
            <span className="text-sm text-white font-medium block">Mr. Sanjay Kumar Rajbhar</span>
          </div>
        </div>

        {/* Quick Links Column */}
        <div>
          <h3 className="text-white font-bold text-base mb-6 border-l-4 border-secondary pl-3">Quick Navigation</h3>
          <ul className="space-y-3 text-sm">
            {quickLinks.map((link) => (
              <li key={link.name}>
                <Link href={link.href} className="hover:text-secondary transition-colors block py-0.5">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
          <h3 className="text-white font-bold text-base mt-8 mb-4 border-l-4 border-secondary pl-3">Legal & Support</h3>
          <ul className="space-y-3 text-sm">
            {legalLinks.map((link) => (
              <li key={link.name}>
                <Link href={link.href} className="hover:text-secondary transition-colors block py-0.5">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services Column */}
        <div>
          <h3 className="text-white font-bold text-base mb-6 border-l-4 border-secondary pl-3">Core Services</h3>
          <ul className="space-y-3 text-sm">
            {services.map((service) => (
              <li key={service.name}>
                <Link href={service.href} className="hover:text-secondary transition-colors block py-0.5">
                  {service.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact details Column */}
        <div>
          <h3 className="text-white font-bold text-base mb-6 border-l-4 border-secondary pl-3">Registered Office</h3>
          <ul className="space-y-4 text-sm">
            <li className="flex items-start">
              <MapPin className="h-5 w-5 mr-3 text-secondary shrink-0 mt-0.5" />
              <span className="leading-relaxed text-gray-300">
                Haldi Rampur Kathar Baari,<br />
                Belthra Road, Ballia,<br />
                Uttar Pradesh – 221715
              </span>
            </li>
            <li className="flex items-center">
              <Phone className="h-5 w-5 mr-3 text-secondary shrink-0" />
              <a href="tel:+919381358951" className="hover:text-white text-gray-300 transition-colors">
                +91 9381358951
              </a>
            </li>
            <li className="flex items-center">
              <MessageCircle className="h-5 w-5 mr-3 text-secondary shrink-0" />
              <a href="https://wa.me/919381358951" target="_blank" rel="noopener noreferrer" className="hover:text-white text-gray-300 transition-colors">
                WhatsApp Chat
              </a>
            </li>
            <li className="flex items-center">
              <Mail className="h-5 w-5 mr-3 text-secondary shrink-0" />
              <a href="mailto:pamjavi1981@gmail.com" className="hover:text-white text-gray-300 transition-colors truncate">
                pamjavi1981@gmail.com
              </a>
            </li>
            <li className="flex items-center">
              <Instagram className="h-5 w-5 mr-3 text-secondary shrink-0" />
              <a href="https://instagram.com/skr_enterprises" target="_blank" rel="noopener noreferrer" className="hover:text-white text-gray-300 transition-colors">
                @skr_enterprises
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 pt-8 border-t border-white/5 text-center text-xs md:flex md:justify-between md:items-center">
        <p className="text-gray-500">
          &copy; {currentYear} SKR Enterprises. All rights reserved. Registered in Uttar Pradesh.
        </p>
        <p className="text-gray-500 mt-2 md:mt-0">
          Designed with standard safety, quality and efficiency protocols.
        </p>
      </div>
    </footer>
  );
}
