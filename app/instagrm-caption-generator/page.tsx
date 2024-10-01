import Head from 'next/head';
import InstagramCaptionGenerator from '@/components/InstagramCaptionGenerator';
import Script from 'next/script';

export const metadata = {
  title: "Free Instagram Caption Generator | Create Engaging Captions - Unrealshot AI",
  description: "Generate engaging Instagram captions easily with our AI-powered Instagram caption generator tool. Perfect for boosting your social media presence.",
};

export default function InstagramCaptionPage() {
  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </Head>

      <Script id="schema-instagram-caption" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": "Free Instagram Caption Generator - Unrealshot AI",
          "description": "Generate engaging Instagram captions easily with our AI-powered Instagram caption generator tool. Perfect for boosting your social media presence.",
          "url": "https://www.unrealshot.com/instagram-caption-generator",
        })}
      </Script>

      <div className="min-h-screen px-4 sm:px-6 lg:px-8" style={{ paddingBottom: '3rem' }}>
        <InstagramCaptionGenerator />
      </div>
    </>
  );
}
