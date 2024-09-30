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

      <div className="min-h-screen px-4 sm:px-6 lg:px-8" style={{ paddingBottom: '3rem' }}>
        <LinkedInBioForm />
      </div>
    </>
  );
}
