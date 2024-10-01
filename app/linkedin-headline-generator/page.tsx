import Head from 'next/head';
import LinkedInHeadlineForm from '@/components/LinkedInHeadlineForm';
import Script from 'next/script';
import React from 'react';
import { Clock, Search, UserCheck, Award, Users, Target } from 'lucide-react';

export const metadata = {
  title: "Free LinkedIn Headline Generator | Create Impactful LinkedIn Headlines - Unrealshot AI",
  description: "Generate compelling LinkedIn headlines easily with our LinkedIn headline generator tool. Perfect for boosting your LinkedIn profile visibility.",
};

interface BenefitCardProps {
  icon: React.ReactElement;
  title: string;
  description: string;
}

const BenefitCard: React.FC<BenefitCardProps> = ({ icon, title, description }) => (
  <div className="bg-gray-50 p-6 rounded-lg">
    <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-blue-100 text-blue-500 mb-4">
      {icon}
    </div>
    <h2 className="text-lg font-medium title-font mb-2">{title}</h2>
    <p className="leading-relaxed text-base">{description}</p>
  </div>
);

interface StepItemProps {
  number: string;
  title: string;
  description: string;
}

const StepItem: React.FC<StepItemProps> = ({ number, title, description }) => (
  <div className="flex mb-8">
    <div className="flex-shrink-0 mr-4">
      <div className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-500 text-white">
        {number}
      </div>
    </div>
    <div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  </div>
);

export default function LinkedInHeadlinePage() {
  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </Head>
      {/* Schema for LinkedIn Headline Generator */}
      <Script id="schema-linkedin-headline" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": "Free LinkedIn Headline Generator - Unrealshot AI",
          "description": "Generate compelling LinkedIn headlines easily with our LinkedIn headline generator tool. Perfect for boosting your LinkedIn profile visibility.",
          "url": "https://www.unrealshot.com/linkedin-headline-generator",
        })}
      </Script>
      <Script id="schema-linkedin-headline-webapp" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebApplication",
          "name": "Free LinkedIn Headline Generator",
          "description": "An easy-to-use Free AI tool for generating impactful LinkedIn headlines in seconds.",
          "applicationCategory": "BusinessApplication",
          "operatingSystem": "All",
          "url": "https://www.unrealshot.com/linkedin-headline-generator",
          "offers": {
            "@type": "Offer",
            "price": "0.00",
            "priceCurrency": "USD",
          },
        })}
      </Script>
      <div className="min-h-screen px-4 sm:px-6 lg:px-8" style={{ paddingBottom: '3rem' }}>
        <LinkedInHeadlineForm />
        
        {/* Benefits Section */}
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-8 text-center">
              Benefits of Using UnrealShot AI's LinkedIn Headline Generator
            </h2>
            <p className="mt-4 max-w-3xl text-xl text-gray-500 mx-auto text-center mb-12">
              Creating an impactful LinkedIn headline is more than just listing your job title. It's about communicating your unique value in a concise and professional way.
            </p>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <BenefitCard
                icon={<Clock size={24} />}
                title="Saves Time and Effort"
                description="Our LinkedIn Headline Generator does the hard work for you, crafting a headline that highlights your strengths and industry expertise in seconds."
              />
              <BenefitCard
                icon={<Search size={24} />}
                title="Boosts Profile Visibility"
                description="A well-optimized LinkedIn headline improves your chances of showing up in LinkedIn searches, making you discoverable by recruiters and industry professionals."
              />
              <BenefitCard
                icon={<UserCheck size={24} />}
                title="Tailored to Your Expertise"
                description="With customizable input fields, our generator ensures your headline reflects your unique value, aligning with your professional profile and goals."
              />
              <BenefitCard
                icon={<Award size={24} />}
                title="Professional and Polished"
                description="The generator produces headlines that sound natural and professional, helping you present your best self on LinkedIn without overthinking the phrasing."
              />
              <BenefitCard
                icon={<Users size={24} />}
                title="Ideal for All Career Levels"
                description="Our tool adapts to your experience level, creating tailored headlines for entry-level roles, mid-career professionals, and senior executives."
              />
              <BenefitCard
                icon={<Target size={24} />}
                title="Enhances Personal Branding"
                description="Our generator ensures your headline reflects your unique strengths and professional identity, making you stand out in a crowded job market."
              />
            </div>
          </div>
        </section>

        {/* How to Use Section */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-8 text-center">
              How to Use UnrealShot AI's LinkedIn Headline Generator
            </h2>
            <p className="mb-12 text-xl text-gray-600 text-center">
              Crafting a professional LinkedIn headline that reflects your skills and value proposition can significantly enhance your visibility. With UnrealShot AI's LinkedIn Headline Generator, you can create concise, compelling headlines that set you apart.
            </p>
            <div className="space-y-8">
              <StepItem
                number="1"
                title="Define Your Current Role"
                description="In the 'Current Role' field, provide a short description of your current position. This gives the generator a base to build from."
              />
              <StepItem
                number="2"
                title="Highlight Your Key Skills"
                description="In the 'Key Skills' field, list some of your most important skills. These skills are what make you stand out, so be specific."
              />
              <StepItem
                number="3"
                title="Specify Your Industry"
                description="In the 'Industry' field, specify the sector you work in. This ensures that your headline is optimized for the right context and audience."
              />
              <StepItem
                number="4"
                title="Define Your Unique Value"
                description="In the 'Unique Value' field, add a statement that sums up the distinct value you offer to employers, teams, or clients."
              />
              <StepItem
                number="5"
                title="Generate Your Headline"
                description="Once you've completed all fields, click 'Generate Headline' to produce a polished, professional LinkedIn headline in seconds."
              />
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
