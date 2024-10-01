import Head from 'next/head';
import CoverLetterForm from '@/components/CoverLetterForm';
import Script from 'next/script';

export const metadata = {
  title: "Free Cover Letter Generator | Create Professional Cover Letters - Unrealshot AI",
  description: "Generate professional cover letters easily with our AI-powered cover letter generator tool. Perfect for boosting your job application success.",
};

export default function CoverLetterPage() {
  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </Head>

      {/* Schema for Cover Letter Generator */}
      <Script id="schema-cover-letter" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": "Free Cover Letter Generator - Unrealshot AI",
          "description": "Generate professional cover letters easily with our AI-powered cover letter generator tool. Perfect for boosting your job application success.",
          "url": "https://www.unrealshot.com/cover-letter-generator",
        })}
      </Script>
      <Script id="schema-cover-letter-webapp" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebApplication",
          "name": "Free Cover Letter Generator",
          "description": "An easy-to-use Free AI tool for generating professional cover letters in seconds.",
          "applicationCategory": "BusinessApplication",
          "operatingSystem": "All",
          "url": "https://www.unrealshot.com/cover-letter-generator",
          "offers": {
            "@type": "Offer",
            "price": "0.00",
            "priceCurrency": "USD",
          },
        })}
      </Script>

      <div className="min-h-screen px-4 sm:px-6 lg:px-8" style={{ paddingBottom: '3rem' }}>
        <CoverLetterForm />

        {/* SEO content */}
        <section className="max-w-7xl mx-auto mt-12">
          <h2 className="text-2xl font-semibold">Create Your Perfect Cover Letter with Our Free AI Tool</h2>
          <p className="mt-4">
            A well-crafted cover letter can be the key to landing your dream job. With our <strong>free cover letter generator</strong> powered by advanced AI, you can create a personalized, professional cover letter in minutes. No more writer's block or uncertainty about what to include - our tool does the hard work for you.
          </p>

          <h3 className="text-xl font-semibold mt-8">How Our AI Cover Letter Generator Works</h3>
          <p className="mt-4">
            Our <strong>AI cover letter generator</strong> is designed to make creating your cover letter quick and easy. Simply provide some key details about yourself and the job you're applying for, and our AI will generate a tailored cover letter for you. Here's how to use it:
          </p>
          <ol className="list-decimal list-inside mt-4">
            <li>Enter your personal information and contact details.</li>
            <li>Provide information about the job you're applying for.</li>
            <li>Describe your relevant skills and experience.</li>
            <li>Choose your preferred tone - professional, friendly, enthusiastic, or formal.</li>
            <li>Click "Generate", and your new cover letter is ready to use instantly.</li>
          </ol>
          <p className="mt-4">
            Our <strong>AI cover letter generator</strong> takes care of the writing for you, giving you a polished, professional cover letter in seconds.
          </p>

          <h3 className="text-xl font-semibold mt-8">Features of Our Free Cover Letter Generator</h3>
          <ul className="list-disc list-inside mt-4">
            <li><strong>Completely Free:</strong> Our cover letter generator is 100% free to use, with no hidden costs or subscriptions required.</li>
            <li><strong>AI-Powered:</strong> Leveraging advanced AI technology, our tool creates cover letters that sound natural and professional.</li>
            <li><strong>Multiple Tone Options:</strong> Choose from professional, friendly, enthusiastic, or formal tones to match the company culture and your personal style.</li>
            <li><strong>Customizable:</strong> While our AI generates the initial content, you can easily edit and personalize the cover letter further.</li>
            <li><strong>Quick and Easy:</strong> Generate a complete cover letter in under a minute.</li>
            <li><strong>Tailored Results:</strong> Each cover letter is unique, reflecting your specific skills, experience, and the job you're applying for.</li>
          </ul>

          <h3 className="text-xl font-semibold mt-8">Why Use Our AI Cover Letter Generator?</h3>
          <p className="mt-4">
            Our <strong>free cover letter generator</strong> offers several key benefits:
          </p>
          <ul className="list-disc list-inside mt-4">
            <li><strong>Saves Time:</strong> No need to spend hours crafting the perfect cover letter. Our AI does it for you in seconds.</li>
            <li><strong>Reduces Stress:</strong> Take the anxiety out of writing cover letters, especially if you're applying to multiple jobs.</li>
            <li><strong>Professional Quality:</strong> Our AI is trained on successful cover letters, ensuring a high-quality result every time.</li>
            <li><strong>Customizable for Different Jobs:</strong> Easily generate unique cover letters for each job application.</li>
            <li><strong>Improves Your Chances:</strong> A well-written cover letter can significantly boost your chances of landing an interview.</li>
          </ul>

          <h3 className="text-xl font-semibold mt-8">Tips for Using Your Generated Cover Letter</h3>
          <p className="mt-4">
            While our AI cover letter generator creates an excellent base, here are some tips to make the most of it:
          </p>
          <ul className="list-disc list-inside mt-4">
            <li><strong>Personalize:</strong> Add specific details about the company or position that weren't included in the initial generation.</li>
            <li><strong>Proofread:</strong> Always review the generated cover letter for any errors or areas that could be improved.</li>
            <li><strong>Tailor:</strong> Adjust the content to align more closely with the job description if needed.</li>
            <li><strong>Be Authentic:</strong> While editing, ensure the letter still sounds like you.</li>
            <li><strong>Keep it Concise:</strong> Aim to keep your cover letter to one page.</li>
          </ul>

          <h3 className="text-xl font-semibold mt-8">Get Started with Our Free Cover Letter Generator</h3>
          <p className="mt-4">
            Creating a compelling cover letter doesn't have to be a challenge. With our <strong>free cover letter generator</strong>, you'll have a professional, tailored cover letter ready in seconds. Take the stress out of job applications and let our AI do the work for you. Try it now, and give your job application the boost it needs to stand out from the crowd.
          </p>
        </section>
      </div>
    </>
  );
}
