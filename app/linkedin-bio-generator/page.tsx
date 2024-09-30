import Head from 'next/head';
import LinkedInBioForm from '@/components/LinkedInBioForm';

export const getServerSideProps = async () => {
  return {
    props: {
      schemaWebPage: {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "LinkedIn Bio Generator",
        "description": "Generate professional LinkedIn bios easily with our LinkedIn bio generator tool.",
        "url": "https://unrealshot.com/linkedin-bio-generator"
      },
      schemaWebApplication: {
        "@context": "https://schema.org",
        "@type": "WebApplication",
        "name": "LinkedIn Bio Generator",
        "description": "An easy-to-use tool for generating LinkedIn bios.",
        "applicationCategory": "BusinessApplication",
        "operatingSystem": "All",
        "url": "https://unrealshot.com/linkedin-bio-generator",
        "offers": {
          "@type": "Offer",
          "price": "0.00",
          "priceCurrency": "USD"
        }
      }
    }
  }
}

export default function LinkedInBioPage({ schemaWebPage, schemaWebApplication }: any) {
  return (
    <>
      <Head>
        <title>LinkedIn Bio Generator | Create Professional LinkedIn Bios</title>
        <meta
          name="description"
          content="Generate professional LinkedIn bios easily with our LinkedIn bio generator tool. Perfect for boosting your LinkedIn profile."
        />

        {/* WebPage schema */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaWebPage) }} />

        {/* WebApplication schema */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaWebApplication) }} />
      </Head>
      <div className="min-h-screen px-4 sm:px-6 lg:px-8" style={{ paddingBottom: '3rem' }}>
        <LinkedInBioForm />
      </div>
    </>
  );
}
