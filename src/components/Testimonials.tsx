"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { testimonialsData } from "@/data/testimonials";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

export default function Testimonials() {
  return (
    <section className="py-24 bg-white relative overflow-hidden" id="testimonials">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-secondary font-bold text-sm uppercase tracking-wider block mb-2">
            Reviews
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-primary tracking-tight">
            Client Testimonials
          </h2>
          <p className="text-sm text-gray-500 mt-3">
            Read comments from our key corporate clients and partners who have trusted us with their industrial needs.
          </p>
          <div className="w-16 h-1 bg-secondary mx-auto mt-4 rounded" />
        </div>

        {/* Swiper Slider */}
        <div className="max-w-4xl mx-auto">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            className="pb-16"
          >
            {testimonialsData.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="bg-gray-50 border border-gray-100 p-8 md:p-12 rounded-[2rem] relative shadow-sm text-center">
                  {/* Quote icon overlay */}
                  <Quote className="h-16 w-16 text-secondary/5 absolute top-6 left-6" />

                  {/* Rating Stars */}
                  <div className="flex justify-center space-x-1 mb-6">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-secondary text-secondary" />
                    ))}
                  </div>

                  {/* Review Text */}
                  <p className="text-base md:text-lg text-gray-600 italic leading-relaxed mb-8 max-w-2xl mx-auto">
                    &ldquo;{item.content}&rdquo;
                  </p>

                  {/* Client Info */}
                  <div>
                    <h4 className="text-lg font-bold text-primary">{item.name}</h4>
                    <span className="text-xs text-secondary font-semibold uppercase tracking-widest mt-1 block">
                      {item.role}
                    </span>
                    <span className="text-xs font-bold text-gray-400 block mt-0.5">
                      {item.company}
                    </span>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
