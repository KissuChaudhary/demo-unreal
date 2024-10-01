import Head from 'next/head';
import InstagramCaptionForm from '@/components/InstagramCaptionForm';
import Script from 'next/script';

export const metadata = {
  title: "Free Instagram Caption Generator | Create Engaging Captions - Unrealshot AI",
  description: "Generate engaging Instagram captions easily with our AI-powered caption generator tool. Perfect for boosting your social media presence.",
};

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

        {/* SEO content */}
        <section className="max-w-7xl mx-auto mt-12">
          <h2 className="text-2xl font-semibold">Create Engaging Instagram Captions with Our Free AI Tool</h2>
          <p className="mt-4">
            Crafting the perfect Instagram caption can be challenging, but it's crucial for engaging your audience and boosting your social media presence. Our <strong>free Instagram caption generator</strong> powered by AI is here to help you create compelling captions in seconds.
          </p>

          <h3 className="text-xl font-semibold mt-8">How Our AI Instagram Caption Generator Works</h3>
          <p className="mt-4">
            Our <strong>AI Instagram caption generator</strong> is designed to make creating your captions quick and easy. Simply provide a few key details, and the AI will generate a perfectly crafted caption for you. Here's how to use it:
          </p>
          <ol className="list-decimal list-inside mt-4">
            <li>Enter your post topic or theme.</li>
            <li>Specify the mood or tone you want to convey.</li>
            <li>Add relevant hashtags.</li>
            <li>Include a call-to-action if desired.</li>
            <li>Click "Generate", and your new Instagram caption is ready to use instantly.</li>
          </ol>

          {/* Add more SEO content here, similar to your LinkedIn Bio Generator page */}
        </section>
      </div>
    </>
  );
}
