//@ts-nocheck
import React from "react";
import StripePricingTable from "@/components/stripe/StripeTable";
import Head from "next/head";

const faqItems = [
  {
    question: "Can I get more credits at any time?",
    answer:
      "Of course! Need more credits? Just say the word. We won’t ask any awkward questions like 'Did you really need another headshot of your cat?' But hey, we’d love some feedback if you’re feeling generous.",
  },
  {
    question: "How does Unrealshot AI's pricing work?",
    answer:
      "Our pricing is as straightforward as it gets. Buy credits, use credits. No hidden fees, no strings attached—just like how we wish our gym memberships worked.",
  },
  {
    question: "How secure is Unrealshot AI?",
    answer:
      "We guard your data like it's the last slice of pizza at a party. Seriously, your security is our top priority, and we take it very seriously—unlike that pizza slice, which will be gone in seconds.",
  },
  {
    question: "How do I access the headshots I generated?",
    answer:
      "Once your headshots are ready, you'll receive an email with a download link. You can also access them anytime by logging into your account and navigating to your dashboard.",
  },
  {
    question: "What if I'm not satisfied with the results?",
    answer:
      "If you're not happy with the headshots generated, please reach out to our support team. We offer free redos and are committed to ensuring you get the results you're looking for.",
  },
  {
    question: "How do I get access to the credits I purchased?",
    answer:
      "Misplaced your receipt? Don’t worry, we’ve all been there. Just log into your account, and you’ll find your credits safely waiting for you under your avatar. If you still can’t find them, our support team is here to help (they’re much better at finding things than we are at finding our keys).",
  },
  {
    question: "Can I upgrade my plan later?",
    answer:
      "Yes, you can upgrade your plan at any time. Any unused credits from your current plan will roll over to your new plan, so nothing goes to waste.",
  },
  {
    question: "Is there a free trial available?",
    answer:
      "Unrealshot AI operates on credit based system. If you wish to use our AI before committing to a paid plan, you can contact us via mail for Free trial.",
  },
  {
    question: "How long does it take to receive my headshots?",
    answer:
      "Once you upload your photos, our AI gets to work immediately. Typically, you’ll receive your AI-generated headshots within 20-30 minutes via email.",
  },
  {
    question: "Can I use Unrealshot AI for team headshots?",
    answer:
      "Yes, we offer plans for teams as well. If your team needs headshots, simply sign up for a team plan, and you can generate headshots for your company.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqItems.map((item) => ({
    "@type": "Question",
    "name": item.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": item.answer,
    },
  })),
};

const Faqs = () => {
  return (
    <>
      <Head>
        <title>FAQs Page | Unrealshot AI</title>
        <meta name="description" content="Frequently asked questions about Unrealshot AI headshot generator service." />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </Head>

      <div className="flex-grow px-4 pb-6">
        {/* Title */}
        <div className="max-w-[80rem] px-4 sm:px-6 lg:px-8 mx-auto">
          <h1
            className="text-main text-6xl font-bold mx-auto mb-10 text-indigo-900 lg:mb-14"
          >
            Have Questions? We've Got Answers!
          </h1>
        </div>
        {/* End Title */}

        <div className="max-w-[80rem] px-4 sm:px-6 lg:px-8 mx-auto">
          {faqItems.map((item, index) => (
            <div key={index} className="py-8 first:pt-0 last:pb-0">
              <div className="flex gap-x-5">
                <svg
                  className="shrink-0 mt-1 h-6 w-6 text-gray-500 dark:text-neutral-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                  <path d="M12 17h.01" />
                </svg>

                <div className="grow">
                  <h3 className="md:text-lg font-semibold text-gray-800 dark:text-neutral-200">
                    {item.question}
                  </h3>
                  <p className="mt-1 text-gray-500 dark:text-neutral-500">
                    {item.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Faqs;
