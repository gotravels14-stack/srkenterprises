"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import { galleryData, galleryCategories, GalleryItem } from "@/data/gallery";
import { motion, AnimatePresence } from "framer-motion";
import { X, Search } from "lucide-react";

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [activeImage, setActiveImage] = useState<GalleryItem | null>(null);

  const filteredItems = selectedCategory === "all"
    ? galleryData
    : galleryData.filter((item) => item.category === selectedCategory);

  return (
    <>
      <Navbar />
      <main className="flex-grow pt-24 bg-gray-50">
        {/* Page Banner Header */}
        <div className="bg-primary text-white py-20 relative overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1920&q=80"
            alt="Welding background"
            className="absolute inset-0 w-full h-full object-cover opacity-20"
          />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
            <h1 className="text-4xl sm:text-5xl font-black tracking-tight">Project Gallery</h1>
            <p className="text-sm sm:text-base text-gray-300 max-w-xl mx-auto leading-relaxed">
              Explore snapshots of our on-site mechanical construction, high-pressure welding joints, and chemical pipe installations.
            </p>
          </div>
        </div>

        {/* Filter Controls */}
        <div className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-2 mb-16">
            {galleryCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-5 py-3 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 ${
                  selectedCategory === cat.id
                    ? "bg-secondary text-white shadow-md"
                    : "bg-white border border-gray-200 text-gray-600 hover:text-primary hover:border-primary"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Masonry Image Grid */}
          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  key={item.id}
                  onClick={() => setActiveImage(item)}
                  className="group relative h-72 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl border border-gray-100 cursor-pointer"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={item.image}
                    alt={item.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 scale-100 group-hover:scale-103"
                  />
                  <div className="absolute inset-0 bg-[#0A2342]/75 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-6 text-center text-white">
                    <Search className="h-8 w-8 text-secondary mb-3 animate-pulse" />
                    <h3 className="font-bold text-base leading-snug">{item.title}</h3>
                    <span className="text-[10px] text-secondary font-bold uppercase tracking-wider mt-1 block">
                      {item.category}
                    </span>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {activeImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-primary/95 z-50 flex items-center justify-center p-4 md:p-10"
            >
              {/* Close triggers */}
              <button
                onClick={() => setActiveImage(null)}
                className="absolute top-6 right-6 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full transition-colors z-50"
                aria-label="Close Lightbox"
              >
                <X className="h-6 w-6" />
              </button>
              
              <div
                onClick={() => setActiveImage(null)}
                className="absolute inset-0 z-10"
              />

              {/* Box Content */}
              <motion.div
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 20 }}
                transition={{ type: "spring", damping: 25, stiffness: 200 }}
                className="bg-slate-900 border border-white/10 rounded-[2rem] overflow-hidden max-w-4xl w-full z-20 shadow-2xl"
              >
                <div className="grid grid-cols-1 md:grid-cols-12">
                  {/* Image Column */}
                  <div className="md:col-span-8 bg-black flex items-center justify-center min-h-[300px] max-h-[500px]">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={activeImage.image}
                      alt={activeImage.title}
                      className="object-contain max-h-[500px] w-full"
                    />
                  </div>

                  {/* Info Column */}
                  <div className="md:col-span-4 p-8 flex flex-col justify-between text-white space-y-6">
                    <div className="space-y-4">
                      <span className="bg-secondary/25 text-secondary text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full border border-secondary/30">
                        {activeImage.category}
                      </span>
                      <h2 className="text-xl font-bold tracking-tight mt-2">{activeImage.title}</h2>
                      <p className="text-xs text-gray-400 leading-relaxed font-medium">
                        {activeImage.description}
                      </p>
                    </div>

                    <div className="pt-6 border-t border-white/5 text-[10px] text-gray-500 font-bold uppercase tracking-widest">
                      SKR Enterprises Portfolio
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
      <Footer />
      <FloatingContact />
    </>
  );
}
