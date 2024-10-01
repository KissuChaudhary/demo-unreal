import Head from 'next/head';
import LinkedInHeadlineForm from '@/components/LinkedInHeadlineForm';
import Script from 'next/script';

export const metadata = {
  title: "Free LinkedIn Headline Generator | Create Impactful LinkedIn Headlines - Unrealshot AI",
  description: "Generate compelling LinkedIn headlines easily with our LinkedIn headline generator tool. Perfect for boosting your LinkedIn profile visibility.",
};

export default function LinkedInHeadlinePage() {
  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </Head>

      {/* Schema for LinkedIn Headline Generator */}
      <Script id="schema-linkedin-headline" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": "Free LinkedIn Headline Generator - Unrealshot AI",
          "description": "Generate compelling LinkedIn headlines easily with our LinkedIn headline generator tool. Perfect for boosting your LinkedIn profile visibility.",
          "url": "https://www.unrealshot.com/linkedin-headline-generator",
        })}
      </Script>
      <Script id="schema-linkedin-headline-webapp" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebApplication",
          "name": "Free LinkedIn Headline Generator",
          "description": "An easy-to-use Free AI tool for generating impactful LinkedIn headlines in seconds.",
          "applicationCategory": "BusinessApplication",
          "operatingSystem": "All",
      "url": "https://www.unrealshot.com/linkedin-headline-generator",
          "offers": {
            "@type": "Offer",
            "price": "0.00",
            "priceCurrency": "USD",
          },
        })}
      </Script>

      <div className="min-h-screen px-4 sm:px-6 lg:px-8" style={{ paddingBottom: '3rem' }}>
        <LinkedInHeadlineForm />

   </div>
    </>
  );
}
