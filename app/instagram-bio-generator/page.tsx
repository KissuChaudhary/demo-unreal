import Head from 'next/head';
import InstagramBioForm from '@/components/InstagramBioForm';
import Script from 'next/script';

export const metadata = {
  title: "Free Instagram Bio Generator | Create Engaging Instagram Bios - Unrealshot AI",
  description: "Generate captivating Instagram bios easily with our Instagram bio generator tool. Perfect for boosting your Instagram profile's appeal.",
};

export default function InstagramBioPage() {
  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </Head>

      {/* Schema for LinkedIn Post Generator */}
      <Script id="schema-instagram-bio" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": "Free Instagram Bio Generator - Unrealshot AI",
          "description": "Generate captivating Instagram bios easily with our Instagram bio generator tool. Perfect for boosting your Instagram profile's appeal.",
          "url": "https://www.unrealshot.com/instagram-bio-generator",
        })}
      </Script>
      <Script id="schema-instagram-bio-webapp" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebApplication",
          "name": "Free Instagram Bio Generator",
          "description": "An easy-to-use Free AI tool for generating engaging instagram Bios in seconds.",
          "applicationCategory": "BusinessApplication",
          "operatingSystem": "All",
          "url": "https://www.unrealshot.com/instagram-bio-generator",
          "offers": {
            "@type": "Offer",
            "price": "0.00",
            "priceCurrency": "USD",
          },
        })}
      </Script>

      <div className="min-h-screen px-4 sm:px-6 lg:px-8" style={{ paddingBottom: '3rem' }}>
        <InstagramBioForm />

   </div>
    </>
  );
}
