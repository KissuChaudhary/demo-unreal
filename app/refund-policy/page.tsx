// app/refund-policy/page.tsx

import React from "react";
import Head from "next/head";
import Script from 'next/script';


const RefundPolicy: React.FC = () => {
  return (
        <>
    {/* Structured Data Schema */}
<Script id="schema-contact" type="application/ld+json">
  {JSON.stringify({
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Refund Policy - UnrealShot AI",
    "url": "https://www.unrealshot.com/refund-policy",
    "description": "Read about our refund policy for AI-generated headshots at UnrealShot AI, including eligibility and refund process details."
    
  })}
</Script>
    <div className="flex-grow pb-6">
      <Head>
        <title>Refund Policy | Unrealshot AI</title>
        <meta name="description" content="Refund policy for the AI headshot generator service by Unrealshot AI." />
      </Head>
      <main className="max-w-[80rem] px-4 sm:px-6 lg:px-8 mx-auto">
        <h1 className="text-main text-6xl font-bold mx-auto mb-10 text-indigo-900 lg:mb-14">
          Refund Policy
        </h1>
        <p className="mb-4">
          Thank you for choosing our  <a href="https://www.unrealshot.com" className="text-indigo-600">  AI headshot generator </a>  service. We strive to provide the best experience for our users. Please review our refund policy below to understand the circumstances under which refunds may be issued.
        </p>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">1. Refund Scenarios</h2>
          <ul className="list-disc list-inside pl-5">
            <li><strong>Technical Issues or Errors:</strong> If you encounter technical problems that prevent you from receiving our service—such as the AI failing to generate headshots or producing unusable results—you may be eligible for a refund.</li>
            <li><strong>Service Not Delivered:</strong> If you have paid for headshots but did not receive them, you are entitled to a refund.</li>
            <li><strong>Duplicate Charges:</strong> If you are accidentally charged more than once for the same service, we will issue a refund for the duplicate charge.</li>
            <li><strong>Unsatisfactory Results:</strong> Refunds for dissatisfaction with the quality of headshots are handled on a case-by-case basis. As the output is subjective, please contact us to discuss your concerns.</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">2. Refund Timeframe</h2>
          <ul className="list-disc list-inside pl-5">
            <li><strong>Request Period:</strong> You may request a refund within 7 days of your purchase.</li>
            <li><strong>Processing Time:</strong> Once a refund is approved, it will be processed within 3 to 7 business days. Please allow additional time for the refund to reflect in your account.</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">3. Conditions for Refunds</h2>
          <ul className="list-disc list-inside pl-5">
            <li><strong>Original Payment Method:</strong> Refunds will be issued to the original payment method used for the purchase.</li>
            <li><strong>Partial Refunds:</strong> Partial refunds may be offered if part of the service has been delivered or used.</li>
            <li><strong>Non-Refundable Situations:</strong> 
              <ul className="list-disc list-inside pl-5 mt-2">
                <li>Changes of mind after the service has been delivered.</li>
                <li>Refund requests made outside the 7-day request period.</li>
                <li>Issues beyond our control, such as dissatisfaction due to unrealistic expectations or failure to follow guidelines for uploading photos.</li>
              </ul>
            </li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">4. Handling Abusive Refund Requests</h2>
          <ul className="list-disc list-inside pl-5">
            <li><strong>Fraud Prevention:</strong> To prevent misuse of our refund policy, we may limit the number of refund requests per user.</li>
            <li><strong>Case-by-Case Basis:</strong> Subjective dissatisfaction will be evaluated individually to determine if a refund is justified.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">5. Alternative Solutions</h2>
          <ul className="list-disc list-inside pl-5">
            <li><strong>Free Redos:</strong> If you are unhappy with the initial headshots, we offer free redos to ensure you receive a result you are satisfied with.</li>
            <li><strong>Discounts or Credits:</strong> As an alternative to a full refund, we may offer a discount or credit towards future services if you have used part of the service.</li>
          </ul>
        </section>

        <section className="mt-8">
          <p>If you have any questions or need to request a refund, please <a href="https://www.unrealshot.com/contact-us" className="text-indigo-600"> contact</a>  our support team at <a href="mailto:support@unrealshot.com" className="text-blue-500 hover:underline">support@unrealshot.com</a>. We are here to assist you!</p>
        </section>
      </main>
      </div>
        </>
          );
}

export default RefundPolicy;
