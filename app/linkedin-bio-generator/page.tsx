import Head from 'next/head';
import LinkedInBioForm from '@/components/LinkedInBioForm';
import Script from 'next/script';
import React from 'react';
import { Clock, UserCheck, Award, TrendingUp, Star, RefreshCw } from 'lucide-react';

export const metadata = {
  title: "Free LinkedIn Bio Generator | Create Professional LinkedIn Bios - Unrealshot AI",
  description: "Generate professional LinkedIn bios easily with our LinkedIn bio generator tool. Perfect for boosting your LinkedIn profile.",
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

export default function LinkedInBioPage() {
  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </Head>

      {/* Schema for LinkedIn Bio Generator */}
      <Script id="schema-linkedin-bio" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": "Free LinkedIn Bio Generator - Unrealshot AI",
          "description": "Generate professional LinkedIn bios easily with our LinkedIn bio generator tool. Perfect for boosting your LinkedIn profile.",
          "url": "https://www.unrealshot.com/linkedin-bio-generator",
        })}
      </Script>
      <Script id="schema-linkedin-webapp" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebApplication",
          "name": "Free LinkedIn Bio Generator",
          "description": "An easy-to-use Free AI tool for generating professional LinkedIn bios in seconds.",
          "applicationCategory": "BusinessApplication",
          "operatingSystem": "All",
          "url": "https://www.unrealshot.com/linkedin-bio-generator",
          "offers": {
            "@type": "Offer",
            "price": "0.00",
            "priceCurrency": "USD",
          },
        })}
      </Script>

      <div className="min-h-screen px-4 sm:px-6 lg:px-8" style={{ paddingBottom: '3rem' }}>
        <LinkedInBioForm />

        {/* Benefits Section */}
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-8 text-center">
              Benefits of Using the LinkedIn Bio Generator
            </h2>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <BenefitCard
                icon={<Clock size={24} />}
                title="Time-Saving"
                description="Create a professional LinkedIn bio in seconds, saving hours of effort in perfecting your profile summary."
              />
              <BenefitCard
                icon={<UserCheck size={24} />}
                title="Tailored to You"
                description="Get a customized bio based on your name, role, experience, skills, and goals, ensuring it truly represents you as a professional."
              />
              <BenefitCard
                icon={<Award size={24} />}
                title="Professional Branding"
                description="Present a polished and cohesive narrative about your career and achievements, essential for personal branding."
              />
              <BenefitCard
                icon={<TrendingUp size={24} />}
                title="Career Growth"
                description="Attract recruiters, potential employers, or new clients with a well-structured bio, opening doors to new opportunities."
              />
              <BenefitCard
                icon={<Star size={24} />}
                title="Stand Out"
                description="Make a difference in the crowded LinkedIn space with a concise, impactful bio aligned with your goals."
              />
              <BenefitCard
                icon={<RefreshCw size={24} />}
                title="Update Easily"
                description="Quickly update your bio when you switch jobs, acquire new skills, or change your professional focus, keeping your profile relevant."
              />
            </div>
          </div>
        </section>

        {/* How to Use Section */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-8 text-center">
              How to Use Unrealshot AI's LinkedIn Bio Generator
            </h2>
            <div className="space-y-8">
              <StepItem
                number="1"
                title="Name"
                description="Enter your name or the name you want to display on your LinkedIn profile. This is how people will recognize you professionally."
              />
              <StepItem
                number="2"
                title="Current Role"
                description="Type in your current job title or position. This helps define your career path for others to see."
              />
              <StepItem
                number="3"
                title="Experience"
                description="Share a brief overview of your professional experience, highlighting key achievements and industries you've worked in."
              />
              <StepItem
                number="4"
                title="Skills"
                description="List your core competencies or areas of expertise to showcase the value you bring to your profession."
              />
              <StepItem
                number="5"
                title="Goals"
                description="Communicate your future aspirations and career objectives, whether you're looking for new opportunities or aiming for professional growth."
              />
              <StepItem
                number="6"
                title="Generate Your Bio"
                description="Click the 'Generate Bio' button to get a well-crafted LinkedIn bio in just a few seconds."
              />
              <StepItem
                number="7"
                title="Copy and Use"
                description="Review the generated bio, click the 'Copy' button, and paste it into your LinkedIn profile to complete the process."
              />
            </div>
          </div>
        </section>

        {/* Existing SEO content */}
        <section className="max-w-7xl mx-auto mt-12">
        
          <h2 className="text-xl font-semibold mt-8">How Our AI LinkedIn Bio Generator Works</h2>
          <p className="mt-4">
            Our <strong>AI LinkedIn bio generator</strong> is designed to make creating your LinkedIn bio quick and easy. Simply provide a few key details, and the AI will generate a perfectly written bio for you. Here’s how to use it:
          </p>
          <ol className="list-decimal list-inside mt-4">
            <li>Enter your job title or profession.</li>
            <li>Describe your experience or expertise in a few sentences.</li>
            <li>Choose your preferred tone—formal, friendly, or casual.</li>
            <li>Click "Generate", and your new LinkedIn bio is ready to use instantly.</li>
          </ol>
          <p className="mt-4">
            No need to second-guess your words. Our <strong>AI LinkedIn bio generator</strong> does the work for you, giving you a polished bio in seconds.
          </p>

          <h2 className="text-xl font-semibold mt-8">Features of Our Free LinkedIn Bio Generator</h2>
          <ul className="list-disc list-inside mt-4">
            <li><strong>Completely Free:</strong> Our free LinkedIn bio generator requires no subscriptions or hidden costs.</li>
            <li><strong>AI-Powered:</strong> Using advanced AI, our tool creates bios that sound natural and professional.</li>
            <li><strong>Multiple Tone Options:</strong> Whether you want a formal, casual, or friendly tone, our AI tailors the bio to suit your preferences.</li>
            <li><strong>Quick and Easy:</strong> Enter a few details, and your bio is ready in under a minute.</li>
            <li><strong>Tailored Results:</strong> Your bio is unique to you, reflecting your professional journey and accomplishments.</li>
          </ul>

       
          <h3 className="text-xl font-semibold mt-8">Use Cases for Our AI LinkedIn Bio Generator</h3>
          <p className="mt-4">
            Our <strong>AI LinkedIn bio generator</strong> is perfect for anyone looking to enhance their LinkedIn profile:
          </p>
          <ul className="list-disc list-inside mt-4">
            <li><strong>Job Seekers:</strong> Stand out to recruiters with a bio that highlights your key skills and experience.</li>
            <li><strong>Freelancers:</strong> Craft a compelling bio that attracts clients and showcases your expertise.</li>
            <li><strong>Career Changers:</strong> If you’re transitioning to a new industry or role, use the generator to create a bio that fits your new career path.</li>
            <li><strong>Business Owners:</strong> Highlight your entrepreneurial achievements and the unique value your business offers.</li>
          </ul>

         

          <h3 className="text-xl font-semibold mt-8">Explore More with UnrealShot AI</h3>
          <p className="mt-4">
  Want to take your LinkedIn profile to the next level? After generating your perfect bio, head over to our homepage and try our 
  <a href="https://www.unrealshot.com/" className="text-blue-600 underline hover:text-indigo-800"> AI headshot generator </a> 
  for professional, AI-generated headshots that enhance your LinkedIn profile.
</p>


          <h3 className="text-xl font-semibold mt-8">Get Started with Our Free LinkedIn Bio Generator AI</h3>
          <p className="mt-4">
            Creating a LinkedIn bio doesn’t have to be a challenge. With our <strong>free LinkedIn bio generator</strong>, you’ll have a professional bio ready in seconds. Take the guesswork out of writing, and let AI do the work for you. Try it now, and give your LinkedIn profile the boost it needs to stand out.
          </p>
      </section>
      </div>
    </>
  );
}
