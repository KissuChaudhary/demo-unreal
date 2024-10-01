import Head from 'next/head';
import LinkedInPostForm from '@/components/LinkedInPostForm';
import Script from 'next/script';
import { Lightbulb, Clock, Calendar, Repeat, DollarSign, Target, LucideIcon } from 'lucide-react';
import React from 'react';

export const metadata = {
  title: "Free LinkedIn Post Generator | Create Engaging LinkedIn Posts - Unrealshot AI",
  description: "Generate compelling LinkedIn posts easily with our LinkedIn post generator tool. Perfect for boosting your LinkedIn engagement.",
};

interface BenefitCardProps {
  icon: React.ReactElement<LucideIcon>;
  title: string;
  description: string;
}

const BenefitCard: React.FC<BenefitCardProps> = ({ icon, title, description }) => (
  <div className="bg-gray-50 p-6 rounded-lg">
    <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-green-100 text-green-500 mb-4">
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
      <div className="flex items-center justify-center w-8 h-8 rounded-full bg-indigo-500 text-white">
        {number}
      </div>
    </div>
    <div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  </div>
);

export default function LinkedInPostPage() {
  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </Head>
      {/* Schema for LinkedIn Post Generator */}
      <Script id="schema-linkedin-post" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": "Free LinkedIn Post Generator - Unrealshot AI",
          "description": "Generate compelling LinkedIn posts easily with our LinkedIn post generator tool. Perfect for boosting your LinkedIn engagement.",
          "url": "https://www.unrealshot.com/linkedin-post-generator",
        })}
      </Script>
      <Script id="schema-linkedin-post-webapp" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebApplication",
          "name": "Free LinkedIn Post Generator",
          "description": "An easy-to-use Free AI tool for generating engaging LinkedIn posts in seconds.",
          "applicationCategory": "BusinessApplication",
          "operatingSystem": "All",
          "url": "https://www.unrealshot.com/linkedin-post-generator",
          "offers": {
            "@type": "Offer",
            "price": "0.00",
            "priceCurrency": "USD",
          },
        })}
      </Script>
      <div className="min-h-screen px-4 sm:px-6 lg:px-8" style={{ paddingBottom: '3rem' }}>
        <LinkedInPostForm />
        {/* SEO content */}
        <section className="max-w-7xl mx-auto mt-12">
          {/* Benefits UI */}
          <div className="py-12 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="lg:text-center">
                <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                  Why Use UnrealShot AI's LinkedIn Post Generator?
                </h2>
                <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                  Take control of your LinkedIn content strategy with UnrealShot AI's LinkedIn Post Generator.
                  Simplify your post creation process and unlock AI-powered content creation that saves time and boosts engagement.
                </p>
              </div>
              <div className="mt-10">
                <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
                  <BenefitCard
                    icon={<Lightbulb size={24} />}
                    title="Boost Creativity"
                    description="Say goodbye to writer's block! Our AI helps you generate creative and insightful LinkedIn posts, ensuring you always have fresh ideas to share with your network."
                  />
                  <BenefitCard
                    icon={<Clock size={24} />}
                    title="Save Time, Work Smart"
                    description="Speed up the process of crafting captions and hashtags. With our AI tool, you can streamline your LinkedIn strategy and focus on what truly matters—growing your professional presence."
                  />
                  <BenefitCard
                    icon={<Calendar size={24} />}
                    title="Plan Strategically"
                    description="Create ambitious LinkedIn content strategies with ease. Whether you're planning campaigns or regular updates, our tool helps you stay organized and effective, ensuring consistent content delivery."
                  />
                  <BenefitCard
                    icon={<Repeat size={24} />}
                    title="Ensure Consistent Branding"
                    description="Keep your LinkedIn posts aligned with your brand's voice and style. Our AI's tone presets make sure your messaging stays consistent across every post, enhancing your brand's identity."
                  />
                  <BenefitCard
                    icon={<DollarSign size={24} />}
                    title="Stay Budget-Friendly"
                    description="Save on costly copywriters and complex tools. UnrealShot AI allows you to craft professional-quality LinkedIn captions without overspending, giving you high-quality results on a budget."
                  />
                  <BenefitCard
                    icon={<Target size={24} />}
                    title="Personalized Recommendations"
                    description="Tailor your LinkedIn posts with personalized content suggestions. The AI adapts to your industry and audience, offering recommendations that enhance your professional message and boost engagement."
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Instructions UI */}
          <div className="py-12 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-extrabold text-gray-900 mb-8">
                How to Use UnrealShot AI's LinkedIn Post Generator
              </h2>
              <p className="mb-8 text-xl text-gray-600">
                Creating professional, engaging LinkedIn posts is now simpler than ever with UnrealShot AI's LinkedIn Post Generator. Whether you're sharing key insights or promoting a new release, this tool streamlines the process of crafting tailored posts that fit your professional tone.
              </p>
              <p className="mb-8 text-xl font-semibold">Here's how to use it:</p>
              
              <div className="space-y-8">
                <StepItem
                  number="1"
                  title="Define Your Post Topic"
                  description="In the 'Topic' field, briefly describe the focus of your LinkedIn post. This is the foundation for generating a personalized and relevant caption. Whether you're sharing industry news or company updates, clear topics guide the generator in creating the perfect post."
                />
                <StepItem
                  number="2"
                  title="Add Key Points"
                  description="Use the 'Key Points' section to list important details about your post. These could be bullet points, facts, or any specific information you'd like to include. For example, if you're discussing a new product launch, highlight features or benefits to make your post informative and compelling."
                />
                <StepItem
                  number="3"
                  title="Select a Tone"
                  description="Maintaining your brand's voice is crucial. In the 'Tone' field, choose how you'd like your post to sound—whether it's professional, conversational, or inspirational. This ensures the generated content reflects your preferred style and audience."
                />
                <StepItem
                  number="4"
                  title="Include a Call to Action"
                  description="Finally, use the 'Call to Action' field to inspire engagement. Whether you want your audience to visit a link, share their thoughts, or sign up for a webinar, a strong call to action drives interaction and strengthens the impact of your post."
                />
                <StepItem
                  number="5"
                  title="Generate Your Post"
                  description="Once you've filled in all the fields, hit 'Generate Post' and watch as UnrealShot AI creates a polished LinkedIn post in seconds. If the result doesn't fit your vision, no worries—you can always tweak the inputs or generate a new version with one click."
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
