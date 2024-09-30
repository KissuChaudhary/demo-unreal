// app/privacy/page.tsx

import React from "react";
import Head from "next/head";
import Script from 'next/script';

const PrivacyPolicy: React.FC = () => {
  return (
        <>
    {/* Structured Data Schema */}
<Script id="schema-contact" type="application/ld+json">
  {JSON.stringify({
   "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Privacy Policy - UnrealShot AI",
    "url": "https://www.unrealshot.com/privacy-policy",
    "description": "Learn how UnrealShot AI collects, uses, and protects your personal data."
    
  })}
</Script>
    <div className="flex-grow pb-6">
      <Head>
        <title>Privacy Policy | Unrealshot AI Headshot Generator</title>
        <meta name="description" content="Privacy policy for Unrealshot AI, outlining data collection, use, and protection." />
      </Head>
      <main className="max-w-[80rem] px-4 sm:px-6 lg:px-8 mx-auto">
        <h1 className="text-main text-6xl font-bold mx-auto mb-10 text-indigo-900 lg:mb-14">
          Privacy Policy
        </h1>
        <p className="mb-4">
          Effective Date: [07 Sep 2024]
        </p>

        <section className="mb-6">
           <p className="mb-4">
  At Unrealshot AI, accessible from{" "}
  <a
    href="https://www.unrealshot.com"
    className="text-blue-500 hover:underline"
    target="_blank"
    rel="noopener noreferrer"
  >
    https://www.unrealshot.com
  </a>
  , we are committed to protecting your privacy. This Privacy Policy explains what information we collect, how we use it, and your rights regarding your personal data. Please take a moment to read this policy carefully.
</p>

          <h2 className="text-xl font-semibold mb-2">1. Information We Collect</h2>
          <p className="mb-4">We collect the following types of data to provide and improve our services:</p>
          <ul className="list-disc list-inside pl-5">
            <li><strong>1.1 Personal Information:</strong> Name, email address, account credentials, payment information, and images or media you upload for processing in our AI headshot generator.</li>
            <li><strong>1.2 Usage Data:</strong> IP addresses, browser types, device information, pages visited, features used, time spent on our site, crash reports, and other diagnostic data.</li>
            <li><strong>1.3 Cookies and Tracking Technologies:</strong> We use cookies and similar tracking technologies, including:
              <ul className="list-disc list-inside pl-5 mt-2">
                <li>Necessary Cookies for basic website functionalities.</li>
                <li>Analytics Cookies to collect performance data.</li>
                <li>Advertising Cookies for personalized ads and measuring their effectiveness.</li>
              </ul>
            </li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">2. How We Use Your Information</h2>
          <p className="mb-4">We use the collected information for various purposes, including:</p>
          <ul className="list-disc list-inside pl-5">
            <li>Service provision to process and deliver your headshots.</li>
            <li>Customer support to assist with inquiries and issues.</li>
            <li>Payment processing to manage billing and transactions.</li>
            <li>Marketing to provide personalized content and advertisements.</li>
            <li>Improvement of services by analyzing user trends.</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">3. Sharing Your Information</h2>
          <p className="mb-4">We do not sell your personal information. However, we may share your data with trusted partners under the following circumstances:</p>
          <ul className="list-disc list-inside pl-5">
            <li><strong>3.1 Third-Party Service Providers:</strong> We work with service providers, including cloud storage providers like AWS, payment processors like Stripe or PayPal, and analytics providers like Google Analytics and Hotjar.</li>
            <li><strong>3.2 Legal Obligations:</strong> We may disclose your personal information if required to comply with applicable laws, regulations, or legal processes.</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">4. Data Security</h2>
          <p className="mb-4">We implement robust security measures to protect your personal data, including encryption, secure data storage protocols, and restricted access. However, no method of transmission over the internet is 100% secure.</p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">5. Your Data Rights</h2>
          <p className="mb-4">You have the following rights regarding your personal information:</p>
          <ul className="list-disc list-inside pl-5">
            <li>Access and correction: Request access to and correction of your data.</li>
            <li>Data portability: Request a copy of your data in a machine-readable format.</li>
            <li>Erasure: Request the deletion of your data.</li>
            <li>Objection: Object to certain types of processing, including marketing.</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">6. Children's Privacy</h2>
          <p className="mb-4">We do not knowingly collect data from individuals under 18. If we become aware of such collection, we will delete the data immediately.</p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">7. International Data Transfers</h2>
          <p className="mb-4">Your personal data may be transferred to servers located outside your country. We ensure that such transfers are conducted securely and in accordance with applicable laws.</p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">8. Data Retention</h2>
          <p className="mb-4">We retain your data only for as long as necessary to fulfill the purposes outlined in this policy or as required by law. Afterward, your data will be securely deleted.</p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">9. Third-Party Links</h2>
          <p className="mb-4">Our website may contain links to third-party websites. We are not responsible for their content or privacy practices. We encourage you to review their privacy policies.</p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">10. Changes to This Privacy Policy</h2>
          <p className="mb-4">We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated effective date. Continued use of our services after any changes signifies your acceptance of the updated policy.</p>
        </section>

        <section className="mt-8">
          <p>If you have any questions or concerns about this Privacy Policy, please contact us at <a href="mailto:support@Unrealshot.com" className="text-blue-500 hover:underline">support@unrealshot.com</a>.</p>
        </section>
      </main>
    </div>
        </>
  );
}

export default PrivacyPolicy;
