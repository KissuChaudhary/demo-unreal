// app/terms/page.tsx

import React from "react";
import Head from "next/head";
import Script from 'next/script';


// Define metadata for the page
export const metadata = {
  title: "Terms - UnrealShot AI",
  description: "Review the terms and conditions for using UnrealShot AI, our AI headshot generator service.",
};

const TermsOfService: React.FC = () => {
  return (
        <>
 <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </Head>
          
             {/* Structured Data Schema */}
      <Script id="schema-about-us" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": "Terms - UnrealShot AI",
          "description": "Review the terms and conditions for using UnrealShot AI, our AI headshot generator service.",
          "url": "https://www.unrealshot.com/refund-policy",
          "mainEntity": {
            "@type": "Organization",
            "name": "Unrealshot AI",
            "description": "Unrealshot AI is an AI-powered platform that generates professional headshots with ease, empowering individuals and businesses globally.",
            "url": "https://www.unrealshot.com",
            "founder": {
              "@type": "Person",
              "name": "Unrealshot AI"
            }
          }
        })}
      </Script>
    <div className="flex-grow pb-6">
      <Head>
        <title>Terms of Service | Unrealshot AI</title>
        <meta name="description" content="Read the comprehensive terms of service for Unrealshot AI, the AI headshot generator platform." />
      </Head>
      <main className="max-w-[80rem] px-4 sm:px-6 lg:px-8 mx-auto">
        <h1 className="text-main text-6xl font-bold mx-auto mb-10 text-indigo-900 lg:mb-14">
          Terms of Service
        </h1>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">1. Introduction</h2>
          <p className="mb-4">
            Welcome to <strong>Unrealshot AI </strong>("we," "our," "us"). By accessing or using our website at 
            <a href="https://www.unrealshot.com" className="text-indigo-600"> https://www.unrealshot.com</a> 
            ("Site"), you agree to comply with and be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, please do not use the Site.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">2. Use of Our Service</h2>
          <p className="mb-4">
           <strong>Unrealshot AI </strong> is an AI-powered headshot generator that allows users to create professional images. 
            Users must adhere to all applicable laws and agree not to misuse our services. Any violations of these rules can result in the termination of access to the platform.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">3. Account and User Responsibilities</h2>
          <p className="mb-4">
            To access certain features of the Site, you may need to create an account. You agree to provide accurate and complete information when registering and to keep this information updated. 
            Users are responsible for maintaining the confidentiality of their account details and for all activities under their account.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">4. Payment and Credits</h2>
          <p className="mb-4">
            <strong>Unrealshot AI</strong> operates on a credit-based system for using our services. All purchases of credits are final and non-refundable, except as specified in our 
            <a href="https://www.unrealshot.com/refund-policy" className="text-indigo-600"> Refund Policy</a>. 
            We reserve the right to modify pricing and the terms of credits at any time.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">5. Data Retention and Deletion</h2>
          <p className="mb-4">
            We value your privacy. Data, including photos and generated headshots, is stored for a period of 30 days, after which it is permanently deleted. Users may request the deletion of their data at any time by contacting us at 
            <a href="mailto:support@unrealshot.com" className="text-indigo-600"> support@unrealshot.com</a>. 
            For more information, please review our 
            <a href="https://www.unrealshot.com/privacy-policy" className="text-indigo-600"> Privacy Policy</a>.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">6. Third-Party Services</h2>
          <p className="mb-4">
            <strong>Unrealshot AI </strong> uses third-party services, including the **Astria API** for image generation. By using our service, you agree to be bound by the terms and policies of these third parties. 
            Please review <strong>Astria API's </strong> terms at 
            <a href="https://www.astria.ai/terms" className="text-indigo-600"> https://www.astria.ai/terms</a>.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">7. Limitation of Liability</h2>
          <p className="mb-4">
            To the maximum extent permitted by law, <strong>Unrealshot AI </strong> and its affiliates shall not be liable for any indirect, incidental, special, or consequential damages arising out of or in connection with your use of our services.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">8. Changes to the Terms</h2>
          <p className="mb-4">
            We reserve the right to update these Terms at any time. Any changes will be posted on this page, with the updated date. Continued use of the Site after any changes constitutes acceptance of those changes.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">9. Contact Us</h2>
          <p className="mb-4">
            If you have any questions about these Terms, please contact us at 
            <a href="https://www.unrealshot.com/contact-us" className="text-indigo-600"> https://www.unrealshot.com/contact-us</a>.
          </p>
        </section>
      </main>
    </div>
        </>
  );
}

export default TermsOfService;
