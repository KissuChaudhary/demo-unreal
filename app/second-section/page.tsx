"use client";

import Link from "next/link";
import React from "react";
import { Star, ArrowDownRight, X } from "lucide-react";
import Image from "next/image";

// Testimonial Component Interface
interface Testimonial {
  text: string;
  rating: number;
}

// Testimonials Data
const testimonials: Testimonial[] = [
  { text: "The variety was amazing.", rating: 5 },
  { text: "Great way to get a headshot.", rating: 5 },
  { text: "They look so realistic.", rating: 5 },
  { text: "I had great options for LinkedIn", rating: 5 },
  { text: "The quality was outstanding.", rating: 5 },
  { text: "Exceptional service and support.", rating: 4.5 },
  { text: "Highly recommended for professionals.", rating: 4.5 },
  { text: "A bit pricey, but worth it.", rating: 4.5 },
  { text: "Very satisfied with the outcome.", rating: 4.5 },
  { text: "Good quality, but delivery was slow.", rating: 4.5 },
];

// Testimonial Item Component
const TestimonialItem: React.FC<Testimonial> = ({ text, rating }) => (
  <div className="inline-flex flex-col items-center justify-center px-8 py-2">
    <p className="text-sm font-medium text-gray-800 mb-1">"{text}"</p>
    <div className="flex">
      {[...Array(Math.floor(rating))].map((_, i) => (
        <Star key={i} size={16} fill="#FFD700" stroke="#FFD700" />
      ))}
      {rating % 1 !== 0 && <Star size={16} fill="#FFD700" stroke="#FFD700" />}
    </div>
  </div>
);

// Testimonial Slider Section Component
const TestimonialSlider: React.FC = () => (
  <div className="w-full overflow-hidden bg-[#FFF9E5] py-4">
    <div className="marquee">
      <div className="marquee-content">
        {testimonials.concat(testimonials).map((testimonial, index) => (
          <TestimonialItem key={index} {...testimonial} />
        ))}
      </div>
    </div>
  </div>
);

// Trustpilot Rating Component
const TrustpilotRating = () => (
  <div className="flex items-center justify-center mb-4">
    <div className="flex">
      {[...Array(5)].map((_, i) => (
        <Star key={i} size={20} fill="#00B67A" stroke="#00B67A" />
      ))}
    </div>
    <span className="ml-2 text-[#00B67A] font-bold">Trusted by Thousands</span>
  </div>
);

// Process Step Component
interface ProcessStepProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ProcessStep: React.FC<ProcessStepProps> = ({
  icon,
  title,
  description,
}) => (
  <div className="flex items-start mb-4">
    <div className="mr-4">{icon}</div>
    <div>
      <h4 className="text-lg font-bold mb-2">{title}</h4>
      <p className="text-gray-600">{description}</p>
    </div>
  </div>
);

// Main Comparison Page Component
const ComparisonPage = () => {
  return (
    <div>
      {/* Full-width Testimonial Slider */}
      <TestimonialSlider />

      {/* Content Wrapper for Centered Content */}
      <div className="max-w-6xl mx-auto px-2 py-8">
        {/* Trustpilot Rating */}
        <TrustpilotRating />

        <h2 className="text-4xl font-bold text-center text-indigo-900 mb-4">
          From Casual Snap shots to Pro Headshots
        </h2>

        <p className="text-center text-center text-gray-600 mb-8 font-semibold max-w-3xl mx-auto text-gray-600 mb-8 max-w-3xl mx-auto">
          Cut Costs and Save Time with Unrealshot AI—Create Your Ideal Headshots
          Quickly
        </p>

        {/* Comparison Section */}
        <div className="flex flex-col md:flex-row justify-between items-stretch gap-4 mb-8">
          {/* With Unrealshot AI Section */}
          <div className="flex-1 bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center mb-4">
              <Image
                src="/images/logo/logo-1.svg"
                alt="Unrealshot AI headshot generator"
                width={30}
                height={30}
              />
              <h3 className="text-xl font-bold ml-2">With Unrealshot AI</h3>
            </div>

            <ProcessStep
              icon={
                <Image
                  src="/content/upload.svg"
                  alt="Upload"
                  width={24}
                  height={24}
                />
              }
              title="1. Upload your photos (2 minutes)"
              description="Choose from your existing photo library or snap some new selfies right away."
            />

            <ProcessStep
              icon={
                <Image
                  src="/content/working.svg"
                  alt="AI"
                  width={24}
                  height={24}
                />
              }
              title="2. Unrealshot AI At Work (30-60 minutes)"
              description="Our AI will process your photos to generate a professional headshot based on photogenic qualities of your photos."
            />

            <ProcessStep
              icon={
                <Image
                  src="/content/download.svg"
                  alt="Download"
                  width={24}
                  height={24}
                />
              }
              title="3. Download your AI Headshots (2 minutes)"
              description="Download your newly created headshot and enjoy a polished, professional image."
            />

            <div className="mt-4">
              <img
                src="/content/picshot-comp.webp"
                alt="HeadshotPro Timeline"
                className="img-compare rounded-[10px]"
              />
            </div>
          </div>

          {/* Divider VS */}
          <div className="flex items-center justify-center font-bold text-gray-400 my-4 md:my-0">
            VS
          </div>

          {/* Physical Photoshoot Section */}
          <div className="flex-1 bg-white rounded-lg shadow-lg p-6">
            <img
              src="/content/subheading.webp"
              alt="Physical Photoshoot Timeline"
              className="img-compare mb-4 rounded-[10px]"
            />
            <h3 className="text-xl font-bold mb-4">Studio photoshoot</h3>

            {[
              "Find a photographer you like",
              "Contact them and wait for a reply",
              "Decide on a date and time you're both available",
              "Find the right clothing to wear to the photo shoot",
              "Get in your car and drive to the photo studio",
              "Pose for your photos and pick your favorite shots",
              "Wait for the photographer to send you the photos",
              "Update your professional profiles with your new photos",
            ].map((step, index) => (
              <div key={index} className="flex items-center mb-2">
                <X size={16} className="text-red-500 mr-2" />
                <span className="text-gray-600">{step}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action Section */}
        <div className="relative flex flex-col items-center justify-center text-center">
          <span className="inline-block transform -rotate-12 font-handwriting mb-2">
            Results Within Hours!
          </span>
          <ArrowDownRight size={24} className="text-indigo-600 mb-4" />
          <Link href="/login">
            <button className="bg-indigo-900 text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:bg-indigo-800 transition duration-300">
              Create your AI headshots Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ComparisonPage;
