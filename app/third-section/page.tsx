'use client';

import React, { useState } from "react";

const ThirdSection: React.FC = () => {
  const [sliderPosition, setSliderPosition] = useState<number>(50);
  const [isDragging, setIsDragging] = useState(false);

  const handleStartDrag = (clientX: number, boundingRect: DOMRect) => {
    const offsetX = clientX - boundingRect.left;
    const newSliderPosition = (offsetX / boundingRect.width) * 100;
    setSliderPosition(Math.max(0, Math.min(100, newSliderPosition)));
  };

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault(); // Prevent default behavior
    setIsDragging(true);
    handleStartDrag(e.clientX, e.currentTarget.getBoundingClientRect());
  };

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    e.preventDefault(); // Prevent default behavior
    setIsDragging(true);
    handleStartDrag(e.touches[0].clientX, e.currentTarget.getBoundingClientRect());
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isDragging) {
      handleStartDrag(e.clientX, e.currentTarget.getBoundingClientRect());
    }
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (isDragging) {
      handleStartDrag(e.touches[0].clientX, e.currentTarget.getBoundingClientRect());
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  const BeforeAfterImage: React.FC<{ beforeSrc: string; afterSrc: string; alt: string }> = ({
    beforeSrc,
    afterSrc,
    alt,
  }) => (
    <div
      className="relative w-full max-w-[512px] aspect-[2/3] overflow-hidden rounded-lg mx-auto"
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
      onMouseUp={handleMouseUp}
      onTouchEnd={handleTouchEnd}
      onMouseLeave={handleMouseUp}
      onTouchCancel={handleTouchEnd}
      onMouseDown={handleMouseDown}
      onTouchStart={handleTouchStart}
    >
      <img src={beforeSrc} alt={`${alt} - Before`} className="absolute top-0 left-0 w-full h-full object-cover" />
      <div
        className="absolute top-0 left-0 w-full h-full overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
      >
        <img src={afterSrc} alt={`${alt} - After`} className="absolute top-0 left-0 w-full h-full object-cover" />
      </div>
      <div
        className="absolute top-0 left-0 w-full h-full"
        style={{ cursor: 'col-resize' }}
        onMouseDown={handleMouseDown}
        onTouchStart={handleTouchStart}
      >
        <div
          className="absolute top-0 left-1/2 w-1 h-full bg-gray-700 transform -translate-x-1/2"
          style={{ left: `${sliderPosition}%` }}
        />
        <div
          className="absolute top-1/2 left-1/2 w-[1.7em] h-[1.7em] bg-white border-2 border-gray-300 rounded-full transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center"
          style={{ left: `${sliderPosition}%` }}
        >
          <div className="w-4 h-4 bg-gray-700 rounded-full" />
        </div>
      </div>
    </div>
  );

  return (
    <div className="pt-10 w-full max-w-[1240px] mx-auto px-1.5 md:px-0">
      <h2 className="text-4xl font-bold text-center text-indigo-900 mb-4">
          Ready To See The AI Version Of You
        </h2>

        <p className="text-center text-gray-600 mb-8 font-semibold max-w-3xl mx-auto">
         Let Unrealshot AI show you a side of yourself you didn't know existed.
        </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-[3rem]">
        <BeforeAfterImage
          beforeSrc="/content/selfie1.jpeg"
          afterSrc="/content/headshot1.webp"
          alt="Professional woman"
        />
        <BeforeAfterImage
          beforeSrc="/content/selfie2.jpg"
          afterSrc="/content/headshot2.webp"
          alt="Professional man"
        />
        <BeforeAfterImage
          beforeSrc="/content/selfie3.jpg"
          afterSrc="/content/headshot3.webp"
          alt="Business man"
        />
      </div>
    </div>
  );
};

export default ThirdSection;

