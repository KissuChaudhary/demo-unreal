"use client";
import React from 'react';
import Link from "next/link";
import { ThumbsUp, Shield, Lock, LucideIcon, Sparkles } from 'lucide-react';

interface FeatureCardProps {
  icon: React.ReactElement<LucideIcon>;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => (
  <div className="bg-white p-6 rounded-lg shadow">
    {icon}
    <h3 className="text-lg font-semibold mt-4 mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

interface TestimonialCardProps {
  imageSrc: string;
  name: string;
  quote: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ imageSrc, name, quote }) => (
  <div className="flex items-center space-x-4">
    <img src={imageSrc} alt={name} className="w-16 h-16 rounded-full" />
    <div>
      <div className="flex text-green-500">
        {[...Array(5)].map((_, i) => (
          <span key={i}>★</span>
        ))}
      </div>
      <p className="text-sm italic">"{quote}"</p>
      <p className="font-semibold mt-1">{name}</p>
    </div>
  </div>
);

const FourthSection: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <p className="text-center text-lg font-semibold text-gray-600 mb-4">Founded in India. We respect your privacy.</p>
      
<h2 className="text-4xl font-bold text-center text-indigo-900 mb-4">We Might Not Be Perfect. But We're The Best.</h2>      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <FeatureCard 
          icon={<ThumbsUp className="text-green-500" size={24} />}
          title="Look Your Best in Every Shot"
          description="Our AI enhances your natural features, creating professional headshots that showcase your best self—perfect for any platform."
        />
        <FeatureCard 
          icon={<Shield className="text-blue-500" size={24} />}
          title="Flexible Credits, No Subscriptions"
          description="Buy credits when you need them. No subscriptions, no hidden fees, and you have full ownership of your photos."
        />
        <FeatureCard 
          icon={<Lock className="text-purple-500" size={24} />}
          title="We Respect Your Privacy"
          description="Your privacy matters. All your photos are deleted after 7 days, or you can delete them instantly whenever you want. We’ll never sell or share your data."
        />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <TestimonialCard 
          imageSrc="/content/selfie1.jpeg"
          name="Amit Patel"
          quote="Needed a professional headshot for an important client meeting within 24 hours—got it back in less than 2! Amazing service!"
        />
        <TestimonialCard 
          imageSrc="/content/selfie3.jpg"
          name="Sarah Thompson"
          quote="I usually dread getting headshots done, but this was quick and painless. Plus, I didn’t even need to leave my home!"
        />
        <TestimonialCard 
          imageSrc="/content/selfie2.jpg"
          name="Mariah Edwards"
          quote="This saved me so much time and money. The results were excellent, and the process was super simple. Highly recommend!"
        />
      </div>
      <div className="text-center relative">
        <div className="inline-block relative">
          <a href="/get-credits" className="flex items-center justify-center bg-indigo-800 text-white font-bold py-2 px-4 rounded-lg text-lg shadow-lg hover:bg-indigo-700 transition-all duration-300 group">
                Choose Your Headshots Package
                <Sparkles className="ml-2 group-hover:rotate-12 transition-transform duration-300" />
              </a>
          <p className="text-gray-600 italic text-sm 
                        md:absolute md:transform md:rotate-6 md:-right-52 md:top-1/2 md:-translate-y-1/2 md:w-48
                        sm:static sm:mt-2 sm:transform-none sm:rotate-0 sm:text-center sm:w-auto">
            If you're not happy, we will refund your full purchase
          </p>
        </div>
      </div>
  
    </div>
  );
};

export default FourthSection;
