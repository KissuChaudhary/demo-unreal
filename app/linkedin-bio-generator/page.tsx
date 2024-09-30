import Head from 'next/head';
import LinkedInBioForm from '@/components/LinkedInBioForm';

export async function generateMetadata() {
  return {
    title: "LinkedIn Bio Generator | Create Professional LinkedIn Bios",
    description: "Generate professional LinkedIn bios easily with our LinkedIn bio generator tool. Perfect for boosting your LinkedIn profile.",
    openGraph: {
      title: "LinkedIn Bio Generator | Create Professional LinkedIn Bios",
      description: "Generate professional LinkedIn bios easily with our LinkedIn bio generator tool.",
      url: "https://yourwebsite.com/linkedin-bio-generator",
    },
    twitter: {
      title: "LinkedIn Bio Generator | Create Professional LinkedIn Bios",
      description: "Generate professional LinkedIn bios easily with our LinkedIn bio generator tool.",
    }
  };
}

export default function LinkedInBioPage() {
  const schemaWebPage = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "LinkedIn Bio Generator",
    "description": "Generate professional LinkedIn bios easily with our LinkedIn bio generator tool.",
    "url": "https://yourwebsite.com/linkedin-bio-generator"
  };

  const schemaWebApplication = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "LinkedIn Bio Generator",
    "description": "An easy-to-use tool for generating LinkedIn bios.",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "All",
    "url": "https://yourwebsite.com/linkedin-bio-generator",
    "offers": {
      "@type": "Offer",
      "price": "0.00",
      "priceCurrency": "USD"
    }
  };

  return (
    <>
      <Head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaWebPage) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaWebApplication) }} />
      </Head>
      <div className="min-h-screen px-4 sm:px-6 lg:px-8" style={{ paddingBottom: '3rem' }}>
        <LinkedInBioForm />
      </div>
    </>
  );
}
