import Head from 'next/head';
import InstagramBioForm from '@/components/InstagramBioForm';
import Script from 'next/script';
import React from 'react';
import { Clock, Fingerprint, UserCheck, MessageCircle, Eye, RefreshCw } from 'lucide-react';

export const metadata = {
  title: "Free Instagram Bio Generator | Create Engaging Instagram Bios - Unrealshot AI",
  description: "Generate captivating Instagram bios easily with our Instagram bio generator tool. Perfect for boosting your Instagram profile's appeal.",
};

interface BenefitCardProps {
  icon: React.ReactElement;
  title: string;
  description: string;
}

const BenefitCard: React.FC<BenefitCardProps> = ({ icon, title, description }) => (
  <div className="bg-gray-50 p-6 rounded-lg">
    <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-purple-100 text-purple-500 mb-4">
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
      <div className="flex items-center justify-center w-8 h-8 rounded-full bg-purple-500 text-white">
        {number}
      </div>
    </div>
    <div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  </div>
);

export default function InstagramBioPage() {
  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </Head>
      {/* Schema for Instagram Bio Generator */}
      <Script id="schema-instagram-bio" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": "Free Instagram Bio Generator - Unrealshot AI",
          "description": "Generate captivating Instagram bios easily with our Instagram bio generator tool. Perfect for boosting your Instagram profile's appeal.",
          "url": "https://www.unrealshot.com/instagram-bio-generator",
        })}
      </Script>
      <Script id="schema-instagram-bio-webapp" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebApplication",
          "name": "Free Instagram Bio Generator",
          "description": "An easy-to-use Free AI tool for generating engaging Instagram Bios in seconds.",
          "applicationCategory": "BusinessApplication",
          "operatingSystem": "All",
          "url": "https://www.unrealshot.com/instagram-bio-generator",
          "offers": {
            "@type": "Offer",
            "price": "0.00",
            "priceCurrency": "USD",
          },
        })}
      </Script>
      <div className="min-h-screen px-4 sm:px-6 lg:px-8" style={{ paddingBottom: '3rem' }}>
        <InstagramBioForm />
        
        {/* Benefits Section */}
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-8 text-center">
              Benefits of Using the Instagram Bio Generator
            </h2>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <BenefitCard
                icon={<Clock size={24} />}
                title="Quick & Easy"
                description="Create the perfect bio in seconds. No need to sit and think about what to say—we handle that for you."
              />
              <BenefitCard
                icon={<Fingerprint size={24} />}
                title="Unique and Personalized"
                description="Get a bio tailored to your name, job, interests, and personality, making it truly your own."
              />
              <BenefitCard
                icon={<UserCheck size={24} />}
                title="Showcase Your Identity"
                description="Highlight your profession, hobbies, or unique traits to put your best foot forward in a few words."
              />
              <BenefitCard
                icon={<MessageCircle size={24} />}
                title="Engage Your Audience"
                description="Draw in followers and encourage interaction with a well-crafted bio and the right call to action."
              />
              <BenefitCard
                icon={<Eye size={24} />}
                title="First Impressions Matter"
                description="Make a great first impression that captures your essence in a few simple lines."
              />
              <BenefitCard
                icon={<RefreshCw size={24} />}
                title="Stay Relevant"
                description="Easily update your bio to reflect changes in your career, hobbies, or projects."
              />
            </div>
          </div>
        </section>

        {/* How to Use Section */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-8 text-center">
              How to Use the Instagram Bio Generator
            </h2>
            <div className="space-y-8">
              <StepItem
                number="1"
                title="Enter Your Name"
                description="Type in your name or the name you want featured in the bio. Make it personal or professional, depending on what suits your account."
              />
              <StepItem
                number="2"
                title="Occupation"
                description="Fill in your job title, profession, or what you do. This helps show who you are and what you're passionate about."
              />
              <StepItem
                number="3"
                title="Add Your Interests"
                description="Share the things that excite you. Hobbies, passions, or causes you care about—adding these gives people a quick insight into what drives you."
              />
              <StepItem
                number="4"
                title="Describe Your Personality"
                description="Capture your unique personality traits. Use this section to make your bio feel authentic and relatable."
              />
              <StepItem
                number="5"
                title="Include a Call to Action"
                description="Enter a call to action that encourages interaction, such as checking out your website or DMing you for collaborations."
              />
              <StepItem
                number="6"
                title="Generate Your Bio"
                description="Hit the 'Generate Bio' button to create a short and catchy bio that perfectly sums up who you are in just a few seconds."
              />
              <StepItem
                number="7"
                title="Copy and Use"
                description="Review your bio, click the 'Copy' button, and then paste it right into your Instagram profile. You're all set with a polished bio that stands out!"
              />
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
