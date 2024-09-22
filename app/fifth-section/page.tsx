"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import React, { useState } from 'react';
import { ArrowRight, ChevronDown, ChevronUp, Camera, Users, Sparkles } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "What kind of photos do I need to upload?",
    answer: "You should upload clear, front-facing headshots with good lighting. Ensure your face is clearly visible and the photo is of high quality."
  },
  {
    question: "Do I need to wear a suit in the photos I upload?",
    answer: "No, you don't necessarily need to wear a suit. Wear what you'd typically wear for a professional headshot in your industry."
  },
  {
    question: "What outfits will my headshots be wearing?",
    answer: "Our AI can generate a variety of professional outfits. You can specify preferences or let the AI choose based on common professional attire."
  },
  {
    question: "What kind of backgrounds will my headshots have?",
    answer: "We offer a range of professional backgrounds, from solid colors to blurred office settings."
  },
  {
    question: "Do I have full rights to use my AI images?",
    answer: "Yes, you have full commercial rights to all AI-generated images of yourself."
  },
  {
    question: "Are my photos private?",
    answer: "Yes, we take your privacy seriously. Your uploaded and generated photos are kept private, secure and deleted after certain time period."
  },
  {
    question: "How does Unrealshot AI Headshot Generator work?",
    answer: "Unrealshot AI uses advanced AI technology to transform your input into high-quality headshots in just three simple steps. Simply upload your photo, choose your preferences, and let the AI do the rest!"
  },
  {
    question: "Is my payment information secure?",
    answer: "Absolutely. We use industry-standard encryption to ensure all payment information is secure."
  },
  {
    question: "Can our company order headshots for multiple employees?",
    answer: "Yes, we offer corporate plans for companies looking to generate headshots for multiple employees."
  },
  {
    question: "Is Unrealshot AI free to use?",
    answer: "Unrealshot AI operates on a credits-based system. You can purchase credits and use them to generate headshots based on your needs."
  },
   {
    question: "How long does it take to generate a headshot?",
    answer: "Once you submit your request, Unrealshot AI typically generates your headshot within a 20-30 minutes, depending on server load. You will receive an Email once it's ready."
  },
  {
    question: "What if I'm not satisfied with the results?  ",
    answer: "If you're not happy with your headshot, you can retry with different preferences or contact our support team for assistance."
  }
];

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, isOpen, onToggle }) => (
  <div className="bg-white mb-4 rounded-lg shadow">
    <button
      className="w-full text-left p-4 focus:outline-none flex justify-between items-center"
      onClick={onToggle}
    >
      <span className="font-semibold text-lg text-gray-800">{question}</span>
      {isOpen ? <ChevronUp className="text-blue-600" /> : <ChevronDown className="text-gray-400" />}
    </button>
    {isOpen && (
      <div className="px-4 pb-4 text-gray-600">
        {answer}
      </div>
    )}
  </div>
);

const BurgerIcon = () => (
  <svg className="w-8 h-8 text-yellow-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 14H21V16C21 17.1046 20.1046 18 19 18H5C3.89543 18 3 17.1046 3 16V14Z" fill="currentColor" />
    <path d="M3 11H21V12H3V11Z" fill="currentColor" />
    <path d="M3 8C3 6.89543 3.89543 6 5 6H19C20.1046 6 21 6.89543 21 8V9H3V8Z" fill="currentColor" />
  </svg>
);

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const midpoint = Math.ceil(faqData.length / 2);
  const leftColumnFAQs = faqData.slice(0, midpoint);
  const rightColumnFAQs = faqData.slice(midpoint);

  return (
    <>
      <div className="bg-gray-100 py-16 px-2">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-2 text-indigo-900">Frequently Asked Questions</h2>
          <p className="text-center mb-8 font-semibold text-gray-600">Have more questions? Feel free to email us!</p>
          <div className="md:flex md:space-x-8">
            <div className="md:w-1/2 space-y-4">
              {leftColumnFAQs.map((item, index) => (
                <FAQItem
                  key={index}
                  question={item.question}
                  answer={item.answer}
                  isOpen={openIndex === index}
                  onToggle={() => handleToggle(index)}
                />
              ))}
            </div>
            <div className="md:w-1/2 space-y-4 mt-4 md:mt-0">
              {rightColumnFAQs.map((item, index) => (
                <FAQItem
                  key={index + midpoint}
                  question={item.question}
                  answer={item.answer}
                  isOpen={openIndex === index + midpoint}
                  onToggle={() => handleToggle(index + midpoint)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="relative py-24 px-2 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-3xl p-8 lg:p-12 shadow-2xl flex flex-col lg:flex-row items-center justify-between bg-gradient-to-br from-white to-gray-100">
            <div className="mb-12 lg:mb-0 lg:mr-12 lg:w-1/2 relative z-10">
              <h2 className="text-4xl lg:text-5xl font-extrabold text-dark mb-6 leading-tight">
                Elevate Your <span className="text-indigo-800">Professional Image</span>
              </h2>
              <p className="text-xl mb-8">
                AI-powered headshots crafted for success in the modern business world
              </p>
              <div className="flex items-center mb-6">
                <BurgerIcon />
                <span className="text-md font-semibold ml-3">Premium quality at the price of a burger</span>
              </div>
              <div className="flex items-center mb-10">
                <Camera className="w-6 h-6 mr-3 text-indigo-600" />
                <span className="text-md font-semibold">Starting at just $5.49 for 6 headshots</span>
              </div>
              <a href="/login" className="inline-flex items-center justify-center bg-indigo-800 text-white font-bold py-4 px-8 rounded-lg text-lg shadow-lg hover:bg-indigo-700 transition-all duration-300 group">
                Get Your AI Headshot
                <Sparkles className="ml-2 group-hover:rotate-12 transition-transform duration-300" />
              </a>
            </div>
            <div className="w-full lg:w-1/2 flex justify-center items-center relative">
              <div className="relative w-80 h-80">
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-40 h-40 rounded-full overflow-hidden border-4 border-white shadow-xl">
                  <img src="/content/headshot14.webp" alt="AI Headshot Example 1" className="object-cover w-full h-full" />
                </div>
                <div className="absolute bottom-0 left-0 w-40 h-40 rounded-full overflow-hidden border-4 border-white shadow-xl">
                  <img src="/content/headshot15.webp" alt="AI Headshot Example 2" className="object-cover w-full h-full" />
                </div>
                <div className="absolute bottom-0 right-0 w-40 h-40 rounded-full overflow-hidden border-4 border-white shadow-xl">
                  <img src="/content/headshot16.webp" alt="AI Headshot Example 3" className="object-cover w-full h-full" />
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Floating UI elements */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          <BurgerIcon className="absolute top-1/4 left-1/4 transform -translate-x-1/2 -translate-y-1/2 animate-float hidden lg:block" />
          <BurgerIcon className="absolute bottom-1/4 right-1/4 transform translate-x-1/2 translate-y-1/2 animate-float-delay hidden lg:block" />
          <div className="absolute top-1/2 left-1/3 w-12 h-12 bg-yellow-300 rounded-full opacity-50 animate-pulse hidden lg:block"></div>
          <div className="absolute bottom-1/4 right-1/3 w-16 h-16 bg-indigo-400 rounded-full opacity-30 animate-pulse-delay hidden lg:block"></div>
        </div>
      </div>
    </>
  );
};

export default FAQSection;
