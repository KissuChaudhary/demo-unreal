import Head from 'next/head';
import LinkedInBioForm from '@/components/LinkedInBioForm';
import Script from "next/script";

export const metadata = {
  title: "LinkedIn Bio Generator | Create Professional LinkedIn Bios",
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
          "name": "LinkedIn Bio Generator",
          "description": "Generate professional LinkedIn bios easily with our LinkedIn bio generator tool.",
          "url": "https://www.unrealshot.com/linkedin-bio-generator"
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
            "priceCurrency": "USD"
          }
        })}
      </Script>

      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-4xl font-extrabold text-center text-gray-900 mb-8">
            Generate Your Perfect LinkedIn Bio with Our Free AI Tool
          </h1>
          <p className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Create a professional and personalized LinkedIn bio in seconds with our AI-powered generator. Stand out to employers, clients, and collaborators effortlessly.
          </p>
          
          <LinkedInBioForm />
          
          <div className="mt-24 space-y-24">
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">How Our AI LinkedIn Bio Generator Works</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <p className="text-gray-600 mb-4">Our AI LinkedIn bio generator is designed to make creating your LinkedIn bio quick and easy. Simply provide a few key details, and the AI will generate a perfectly written bio for you.</p>
                  <ul className="space-y-2">
                    {['Enter your job title or profession', 'Describe your experience or expertise', 'Choose your preferred tone', 'Click "Generate" for instant results'].map((step, index) => (
                      <li key={index} className="flex items-start">
                        <ArrowRight className="h-6 w-6 text-blue-500 mr-2 flex-shrink-0" />
                        <span>{step}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-4">Features of Our Free LinkedIn Bio Generator</h3>
                  <ul className="space-y-3">
                    {[
                      { icon: <CheckCircle className="h-5 w-5 text-green-500" />, text: 'Completely Free' },
                      { icon: <Zap className="h-5 w-5 text-yellow-500" />, text: 'AI-Powered' },
                      { icon: <Users className="h-5 w-5 text-blue-500" />, text: 'Multiple Tone Options' },
                      { icon: <Sparkles className="h-5 w-5 text-purple-500" />, text: 'Tailored Results' }
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
                  { title: 'Saves Time', description: 'Get a polished bio in seconds, not hours.' },
                  { title: 'Professional Quality', description: 'AI-crafted bios that sound natural and impressive.' },
                  { title: 'Versatile', description: 'Perfect for job seekers, freelancers, and business owners alike.' }
                ].map((benefit, index) => (
                  <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </div>
                ))}
              </div>
            </section>
            
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">The Benefits of a Strong LinkedIn Bio</h2>
              <div className="bg-white p-8 rounded-lg shadow-md">
                <ul className="space-y-4">
                  {[
                    'Makes a lasting first impression',
                    'Improves visibility in LinkedIn searches',
                    'Demonstrates professionalism',
                    'Engages your audience and grows your network'
                  ].map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="h-6 w-6 text-green-500 mr-2 flex-shrink-0" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>
            
            <section className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Get Started with Our Free LinkedIn Bio Generator AI</h2>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Take the guesswork out of writing, and let AI do the work for you. Try it now, and give your LinkedIn profile the boost it needs to stand out.
              </p>
              <a href="#generator" className="inline-block bg-blue-600 text-white font-bold py-3 px-8 rounded-full hover:bg-blue-700 transition duration-300">
                Generate Your Bio Now
              </a>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
