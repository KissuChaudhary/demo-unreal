"use client";
import React, { useState } from 'react';
import { Camera, Wand2, Image } from 'lucide-react';

const HowItWorks = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      title: "Upload Your Photos",
      description: "Submit 5+ high-quality selfies. Ensure they are front-facing, with only one person, no hats or accessories.",
      icon: Camera,
    },
    {
      title: "AI Processing",
      description: "Our AI Headshot Generator works its magic in about 60-90 minutes, learning your facial features for perfect business headshots.",
      icon: Wand2,
    },
    {
      title: "Receive Headshots",
      description: "Get your stunning, professional-quality headshots once the model is trained for the most professional look.",
      icon: Image,
    }
  ];

  return (
    <div className="bg-gradient-to-br from-gray-50 to-indigo-50 flex items-center justify-center py-8 px-2 overflow-hidden">
      {/* Floating elements */}
      <div className="bg-white rounded-3xl p-8 max-w-6xl w-full relative z-10">
        <h2 className="text-4xl font-bold mb-2 text-indigo-800">How It Works</h2>
        <p className="text-xl mb-8">
          Three steps to your perfect AI-generated headshot
        </p>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left-aligned tabs */}
          <div className="lg:w-1/3">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`mb-4 p-4 rounded-2xl cursor-pointer transition-all duration-300 ${
                  index === activeStep 
                    ? 'bg-indigo-900 text-white shadow-lg scale-105' 
                    : 'bg-indigo-50 text-indigo-800 hover:bg-indigo-100'
                }`}
                onClick={() => setActiveStep(index)}
              >
                <h3 className="text-lg font-semibold flex items-center">
                  <step.icon className="w-6 h-6 mr-3" />
                  {step.title}
                </h3>
              </div>
            ))}
          </div>

          {/* Right-aligned content cards */}
          <div className="lg:w-2/3">
            <div
              key={activeStep}
              className="bg-indigo-900 rounded-3xl p-8 shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <div className="flex items-center justify-center w-20 h-20 bg-white bg-opacity-20 rounded-full mb-6 mx-auto">
                {React.createElement(steps[activeStep].icon, { className: "w-10 h-10 text-white" })}
              </div>
              <h4 className="text-2xl font-bold mb-4 text-white text-center">{steps[activeStep].title}</h4>
              <p className="text-indigo-100 text-center leading-relaxed">{steps[activeStep].description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
