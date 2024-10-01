import Head from 'next/head';
import InstagramCaptionForm from '@/components/InstagramCaptionForm';
import Script from 'next/script';
import React from 'react';
import { Clock, ThumbsUp, Feather, Sliders, Hash, MessageCircle } from 'lucide-react';

export const metadata = {
  title: "Free Instagram Caption Generator | Create Engaging Captions - Unrealshot AI",
  description: "Generate engaging Instagram captions easily with our AI-powered caption generator tool. Perfect for boosting your social media presence.",
};

interface BenefitCardProps {
  icon: React.ReactElement;
  title: string;
  description: string;
}

const BenefitCard: React.FC<BenefitCardProps> = ({ icon, title, description }) => (
  <div className="bg-gray-50 p-6 rounded-lg">
    <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-pink-100 text-pink-500 mb-4">
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
      <div className="flex items-center justify-center w-8 h-8 rounded-full bg-pink-500 text-white">
        {number}
      </div>
    </div>
    <div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  </div>
);

export default function InstagramCaptionPage() {
  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </Head>
      {/* Schema for Instagram Caption Generator */}
      <Script id="schema-instagram-caption" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": "Free Instagram Caption Generator - Unrealshot AI",
          "description": "Generate engaging Instagram captions easily with our AI-powered caption generator tool. Perfect for boosting your social media presence.",
          "url": "https://www.unrealshot.com/instagram-caption-generator",
        })}
      </Script>
      <Script id="schema-instagram-webapp" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebApplication",
          "name": "Free Instagram Caption Generator",
          "description": "An easy-to-use Free AI tool for generating engaging Instagram captions in seconds.",
          "applicationCategory": "SocialMediaApplication",
          "operatingSystem": "All",
          "url": "https://www.unrealshot.com/instagram-caption-generator",
          "offers": {
            "@type": "Offer",
            "price": "0.00",
            "priceCurrency": "USD",
          },
        })}
      </Script>
      <div className="min-h-screen px-4 sm:px-6 lg:px-8" style={{ paddingBottom: '3rem' }}>
        <InstagramCaptionForm />
        
        {/* Benefits Section */}
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-8 text-center">
              Benefits of Using the Instagram Caption Generator
            </h2>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <BenefitCard
                icon={<Clock size={24} />}
                title="Save Time"
                description="Get engaging captions instantly, freeing up time for the rest of your content creation."
              />
              <BenefitCard
                icon={<ThumbsUp size={24} />}
                title="Boost Engagement"
                description="Create captions that spark conversations and increase likes and comments on your posts."
              />
              <BenefitCard
                icon={<Feather size={24} />}
                title="Professional & Creative Results"
                description="Write captions that are clear, concise, and creative, enhancing the quality of your Instagram posts."
              />
              <BenefitCard
                icon={<Sliders size={24} />}
                title="Customize to Your Needs"
                description="Tailor captions to suit the tone you want, maintaining a consistent voice across your posts."
              />
              <BenefitCard
                icon={<Hash size={24} />}
                title="Hashtag Optimization"
                description="Ensure your posts are more discoverable by a larger audience with optimized hashtags."
              />
              <BenefitCard
                icon={<MessageCircle size={24} />}
                title="Increase Follower Engagement"
                description="Foster active interaction and build a loyal community with well-placed calls to action."
              />
            </div>
          </div>
        </section>

        {/* How to Use Section */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-8 text-center">
              How to Use the Instagram Caption Generator
            </h2>
            <div className="space-y-8">
              <StepItem
                number="1"
                title="Enter Your Topic"
                description="Begin by typing in the subject of your Instagram post. Clearly defining your topic helps the generator understand your content."
              />
              <StepItem
                number="2"
                title="Set the Mood"
                description="Select the tone or mood you'd like to convey in your caption to ensure it aligns with the feelings you want to express."
              />
              <StepItem
                number="3"
                title="Add Hashtags"
                description="Include relevant hashtags to boost visibility and reach a wider audience."
              />
              <StepItem
                number="4"
                title="Call to Action"
                description="Add a call to action to engage your followers, such as encouraging likes, comments, follows, or directing users to a link."
              />
              <StepItem
                number="5"
                title="Generate Your Caption"
                description="Click the 'Generate Caption' button to get a professional and tailored Instagram caption based on your inputs."
              />
              <StepItem
                number="6"
                title="Copy and Post"
                description="Review your generated caption, click 'Copy', and you're all set to post it on Instagram along with your photo or video."
              />
            </div>
          </div>
        </section>

  
      </div>
    </>
  );
}
