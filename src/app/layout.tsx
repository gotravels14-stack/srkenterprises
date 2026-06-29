import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "SKR Enterprises | Mechanical Construction & Contracting Services",
  description: "SKR Enterprises delivers premium industrial mechanical construction, fabrication, erection, piping, shutdown maintenance, and skilled manpower supply. Partner with us for quality, safety, and timely project execution.",
  keywords: "Mechanical Construction, Fabrication, Piping, Equipment Erection, Boiler Maintenance, Shutdown, Uttar Pradesh, Sanjay Kumar Rajbhar, SKR Enterprises",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} ${inter.variable} h-full scroll-smooth`}>
      <body className="min-h-full flex flex-col font-sans bg-gray-50 text-slate-900 selection:bg-orange-500 selection:text-white antialiased">
        {children}
      </body>
    </html>
  );
}
