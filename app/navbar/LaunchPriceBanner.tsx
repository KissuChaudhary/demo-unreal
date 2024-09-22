'use client';

import React, { useState } from 'react';

const LaunchPriceBanner = () => {
  const [isRevealed, setIsRevealed] = useState(false);

  return (
    <div 
      className="bg-pink-100 py-2 text-center cursor-pointer"
      onMouseEnter={() => setIsRevealed(true)}
      onMouseLeave={() => setIsRevealed(false)}
      onClick={() => setIsRevealed(!isRevealed)} // For touch devices
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center">
          <span className="font-bold text-pink-600 mr-2">50% off</span>
          <span className="font-bold text-pink-600 ml-2">launch price!</span>
        </div>
        <div className="mt-1 relative">
          <div className="inline-block relative" style={{ width: '40px' }}>
            <span className="invisible">$19</span>
            <div className={`
              absolute left-0 top-0 w-full bg-white
              border-radius: 5px z-index: 1000
              transition-all duration-300 ease-in-out
              transform rotate-[-5deg]
              ${isRevealed ? 'translate-y-full opacity-0' : 'opacity-100'}
            `}
            style={{
              borderRadius: '5px',
              zIndex: 1000,
            }}
            >
              <span className="font-bold text-pink-500 text-lg">$9</span>
            </div>
            <span className="absolute left-0 top-0 line-through text-pink-400 text-lg">$19</span>
          </div>
          <span className="text-pink-400 text-xs ml-1">/ month</span>
        </div>
      </div>
    </div>
  );
};

export default LaunchPriceBanner;
