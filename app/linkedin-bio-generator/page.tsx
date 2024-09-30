import Head from 'next/head';
import LinkedInBioForm from '@/components/LinkedInBioForm';
import Script from 'next/script';

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

        {/* SEO content */}
        <section className="max-w-7xl mx-auto mt-12">
          <h2 className="text-2xl font-semibold">Generate Your Perfect LinkedIn Bio with Our Free AI Tool</h2>
          <p className="mt-4">
            Your LinkedIn bio plays a crucial role in making a strong first impression on potential employers, clients, or collaborators. If you're struggling with what to say, don’t worry—our <strong>free LinkedIn bio generator</strong> powered by AI is here to help. In just a few clicks, you can create a professional and personalized bio that showcases your skills and experience, without spending hours thinking of the right words.
          </p>

          <h3 className="text-xl font-semibold mt-8">How Our AI LinkedIn Bio Generator Works</h3>
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

          <h3 className="text-xl font-semibold mt-8">Features of Our Free LinkedIn Bio Generator</h3>
          <ul className="list-disc list-inside mt-4">
            <li><strong>Completely Free:</strong> Our free LinkedIn bio generator requires no subscriptions or hidden costs.</li>
            <li><strong>AI-Powered:</strong> Using advanced AI, our tool creates bios that sound natural and professional.</li>
            <li><strong>Multiple Tone Options:</strong> Whether you want a formal, casual, or friendly tone, our AI tailors the bio to suit your preferences.</li>
            <li><strong>Quick and Easy:</strong> Enter a few details, and your bio is ready in under a minute.</li>
            <li><strong>Tailored Results:</strong> Your bio is unique to you, reflecting your professional journey and accomplishments.</li>
          </ul>

          <h3 className="text-xl font-semibold mt-8">Why Use Our AI LinkedIn Bio Generator?</h3>
          <p className="mt-4">
            Our <strong>free LinkedIn bio generator AI</strong> offers several key benefits that make it the best option for your <strong>LinkedIn profile</strong>:
          </p>
          <ul className="list-disc list-inside mt-4">
            <li><strong>Saves Time:</strong> You don’t need to brainstorm or edit. The AI writes your bio for you, giving you more time to focus on your career.</li>
            <li><strong>Professional Quality:</strong> The bios generated are polished, well-written, and ready to go.</li>
            <li><strong>Versatility:</strong> Whether you’re a job seeker, freelancer, or business owner, our tool caters to all LinkedIn users.</li>
            <li><strong>Instant Results:</strong> With just a few clicks, you’ll have a bio that’s good to go—no waiting or tweaking necessary.</li>
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

          <h3 className="text-xl font-semibold mt-8">The Benefits of a Strong LinkedIn Bio</h3>
          <p className="mt-4">
            A <strong>well-crafted LinkedIn bio</strong> offers several important benefits:
          </p>
          <ul className="list-disc list-inside mt-4">
            <li><strong>First Impressions Count:</strong> Your <strong>LinkedIn bio</strong> is often the first thing people read about you. A strong bio leaves a lasting, positive impression.</li>
            <li><strong>Better Visibility:</strong> Including relevant keywords (like your job title and skills) can help your profile show up in more LinkedIn searches.</li>
            <li><strong>Showcases Professionalism:</strong> A clear, concise bio demonstrates that you are serious about your career.</li>
            <li><strong>Engages Your Audience:</strong> A compelling bio can encourage people to connect with you, helping you grow your professional network.</li>
          </ul>

          <h3 className="text-xl font-semibold mt-8">Explore More with UnrealShot AI</h3>
          <p className="mt-4">
  Want to take your LinkedIn profile to the next level? After generating your perfect bio, head over to our homepage and try our 
  <a href="https://www.unrealshot.com/" className="text-blue-600 underline hover:text-indigo-800">AI headshot generator</a> 
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
