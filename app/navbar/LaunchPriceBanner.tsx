'use client';

import React, { useState } from 'react';

const LaunchPriceBanner = () => {
  const [isRevealed, setIsRevealed] = useState(false);

  return (
    <div 
      className="bg-indigo-100 py-2 text-center cursor-pointer"
      onMouseEnter={() => setIsRevealed(true)}
      onMouseLeave={() => setIsRevealed(false)}
      onClick={() => setIsRevealed(!isRevealed)} // For touch devices
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center">
          <span className="font-bold text-indigo-600 mr-2">30% off Launch Price!</span>
        </div>
        <div className="mt-1 relative">
          <div className="inline-block relative" style={{ width: '40px' }}>
            <span className="invisible">$21.99</span>
            <div 
              className={`
                absolute left-[-15px] top-0 w-full bg-white
                transition-all duration-300 ease-in-out
                transform rotate-[-5deg]
                ${isRevealed ? 'translate-y-full opacity-0' : 'opacity-100'}
              `}
              style={{
                borderRadius: '5px',
                zIndex: 1000,
                width: 'calc(100% + 5px)',
              }}
            >
              <span className="font-bold text-indigo-500 text-lg">$15.49</span>
            </div>
            <span className="absolute left-[-15px] top-0 line-through text-indigo-400 text-lg font-semibold">$21.99</span>
          </div>
          <span className="text-indigo-400 text-xs ml-1 font-semibold">/ 04 Credits</span>
        </div>  
      </div>
    </div>
  );
};

export default LaunchPriceBanner;
