import Head from 'next/head';
import LinkedInBioForm from '@/components/LinkedInBioForm';
import Script from 'next/script';
import { ArrowRight, CheckCircle, Zap, Users, Sparkles, BookOpen, Briefcase, Target } from 'lucide-react';

export const metadata = {
  title: "LinkedIn Bio Generator | Create Professional LinkedIn Bios - Unrealshot AI",
  description: "Generate professional LinkedIn bios easily with our LinkedIn bio generator tool. Perfect for boosting your LinkedIn profile.",
};

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
          "name": "LinkedIn Bio Generator - Unrealshot AI",
          "description": "Generate professional LinkedIn bios easily with our LinkedIn bio generator tool. Perfect for boosting your LinkedIn profile.",
          "url": "https://www.unrealshot.com/linkedin-bio-generator",
        })}
      </Script>
      <Script id="schema-linkedin-webapp" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebApplication",
          "name": "LinkedIn Bio Generator",
          "description": "An easy-to-use tool for generating LinkedIn bios.",
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
      </div>
      <div className="space-y-16">
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">How Our AI LinkedIn Bio Generator Works</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <p className="text-gray-600 mb-4">Our AI LinkedIn bio generator is designed to make creating your LinkedIn bio quick and easy. Simply provide a few key details, and the AI will generate a perfectly written bio for you. Here's how to use it:</p>
                  <ul className="space-y-3">
                    {[
                      'Enter your job title or profession.',
                      'Describe your experience or expertise in a few sentences.',
                      'Choose your preferred tone—formal, friendly, or casual.',
                      'Click "Generate", and your new LinkedIn bio is ready to use instantly.'
                    ].map((step, index) => (
                      <li key={index} className="flex items-start">
                        <ArrowRight className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0" />
                        <span>{step}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="mt-4 text-gray-600">No need to second-guess your words. Our AI LinkedIn bio generator does the work for you, giving you a polished bio in seconds.</p>
                </div>
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-2xl font-semibold mb-4">Features of Our Free LinkedIn Bio Generator</h3>
                  <ul className="space-y-3">
                    {[
                      { icon: <CheckCircle className="h-5 w-5 text-green-500" />, text: 'Completely Free: No subscriptions or hidden costs.' },
                      { icon: <Zap className="h-5 w-5 text-yellow-500" />, text: 'AI-Powered: Creates bios that sound natural and professional.' },
                      { icon: <Users className="h-5 w-5 text-blue-500" />, text: 'Multiple Tone Options: Formal, casual, or friendly to suit your style.' },
                      { icon: <Sparkles className="h-5 w-5 text-purple-500" />, text: 'Tailored Results: Unique to you, reflecting your professional journey.' }
                    ].map((feature, index) => (
                      <li key={index} className="flex items-center">
                        {feature.icon}
                        <span className="ml-2">{feature.text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>
            
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Use Our AI LinkedIn Bio Generator?</h2>
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  { icon: <BookOpen className="h-8 w-8 text-blue-500" />, title: 'Saves Time', description: 'You don't need to brainstorm or edit. The AI writes your bio for you, giving you more time to focus on your career.' },
                  { icon: <Briefcase className="h-8 w-8 text-green-500" />, title: 'Professional Quality', description: 'The bios generated are polished, well-written, and ready to go.' },
                  { icon: <Target className="h-8 w-8 text-red-500" />, title: 'Versatility', description: 'Whether you're a job seeker, freelancer, or business owner, our tool caters to all LinkedIn users.' }
                ].map((benefit, index) => (
                  <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                    <div className="flex items-center mb-4">
                      {benefit.icon}
                      <h3 className="text-xl font-semibold ml-2">{benefit.title}</h3>
                    </div>
                    <p className="text-gray-600">{benefit.description}</p>
                  </div>
                ))}
              </div>
            </section>
            
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Use Cases for Our AI LinkedIn Bio Generator</h2>
              <div className="bg-white p-8 rounded-lg shadow-md">
                <p className="text-gray-600 mb-4">Our AI LinkedIn bio generator is perfect for anyone looking to enhance their LinkedIn profile:</p>
                <ul className="space-y-3">
                  {[
                    'Job Seekers: Stand out to recruiters with a bio that highlights your key skills and experience.',
                    'Freelancers: Craft a compelling bio that attracts clients and showcases your expertise.',
                    'Career Changers: If you're transitioning to a new industry or role, use the generator to create a bio that fits your new career path.',
                    'Business Owners: Highlight your entrepreneurial achievements and the unique value your business offers.'
                  ].map((useCase, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                      <span>{useCase}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>
            
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">The Benefits of a Strong LinkedIn Bio</h2>
              <div className="grid md:grid-cols-2 gap-8">
                {[
                  { title: 'First Impressions Count', description: 'Your LinkedIn bio is often the first thing people read about you. A strong bio leaves a lasting, positive impression.' },
                  { title: 'Better Visibility', description: 'Including relevant keywords (like your job title and skills) can help your profile show up in more LinkedIn searches.' },
                  { title: 'Showcases Professionalism', description: 'A clear, concise bio demonstrates that you are serious about your career.' },
                  { title: 'Engages Your Audience', description: 'A compelling bio can encourage people to connect with you, helping you grow your professional network.' }
                ].map((benefit, index) => (
                  <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </div>
                ))}
              </div>
            </section>
            
            <section className="text-center bg-blue-50 p-12 rounded-lg">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Get Started with Our Free LinkedIn Bio Generator AI</h2>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Creating a LinkedIn bio doesn't have to be a challenge. With our free LinkedIn bio generator, you'll have a professional bio ready in seconds. Take the guesswork out of writing, and let AI do the work for you.
              </p>
              <a href="#generator" className="inline-block bg-blue-600 text-white font-bold py-3 px-8 rounded-full hover:bg-blue-700 transition duration-300">
                Try It Now
              </a>
            </section>
          </div>
    </>
  );
}
