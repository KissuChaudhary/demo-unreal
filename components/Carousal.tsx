"use client";
import Card from "@/components/Card";
import React from "react";

interface CarouselProps {
  reverse?: boolean; // Add a reverse prop to control the direction
  images: string[]; // Add an images prop to accept an array of image URLs
}

const Carousal: React.FC<CarouselProps> = ({ reverse = false, images }) => {
  return (
    <div className="pb-2 mb-4 mt-0 relative overflow-hidden">
      <div className="absolute top-0 left-0 z-10 h-full w-16 bg-gradient-to-r from-white to-transparent pointer-events-none" />
      <div className="absolute top-0 right-0 z-10 h-full w-16 bg-gradient-to-l from-white to-transparent pointer-events-none" />

      <div
        className={`flex gap-4 will-change-transform ${
          reverse ? "animate-scroll-left" : "animate-scroll-right"
        }`}
      >
        {[...images, ...images].map((item, idx) => (
          <Card image={item} key={idx} />
        ))}
      </div>
    </div>
  );
};

export default Carousal;
