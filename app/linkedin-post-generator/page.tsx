import Head from 'next/head';
import LinkedInPostForm from '@/components/LinkedInPostForm';
import Script from 'next/script';

export const metadata = {
  title: "Free LinkedIn Post Generator | Create Engaging LinkedIn Posts - Unrealshot AI",
  description: "Generate compelling LinkedIn posts easily with our LinkedIn post generator tool. Perfect for boosting your LinkedIn engagement.",
};

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

   </div>
    </>
  );
}
