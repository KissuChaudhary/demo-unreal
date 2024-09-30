// app/about/page.tsx

import React from "react";
import Head from "next/head";
import Script from "next/script";

const AboutUs: React.FC = () => {
  return (
    <>
      <Head>
        <title>About Us | Unrealshot AI</title>
        <meta name="description" content="Learn more about the team behind Unrealshot AI, the AI headshot generator." />
      </Head>

      {/* Structured Data Schema */}
      <Script id="schema-about-us" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": "About Us - Unrealshot AI",
          "description": "Learn more about the journey and team behind Unrealshot AI, the AI headshot generator helping users create professional-grade headshots worldwide.",
          "url": "https://www.unrealshot.com/about",
          "mainEntity": {
            "@type": "Organization",
            "name": "Unrealshot AI",
            "description": "Unrealshot AI is an AI-powered platform that generates professional headshots with ease, empowering individuals and businesses globally.",
            "url": "https://www.unrealshot.com",
            "founder": {
              "@type": "Person",
              "name": "The Unrealshot AI Team"
            }
          }
        })}
      </Script>


      
    <div className="flex-grow pb-6">

      <main className="max-w-[80rem] px-4 sm:px-6 lg:px-8 mx-auto">
        <h1 className="text-main text-6xl font-bold mx-auto mb-10 text-indigo-900 lg:mb-14">
          About Us
        </h1>
        <p className="mb-4">
          Welcome to Unrealshot AI, where technology meets creativity to bring out the best version of you. But before we get into what we do, let’s talk about where it all began—our story.
        </p>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Our Journey</h2>
          <p className="mb-4">
            We are a small team of passionate developers, self-learned, and driven by curiosity. Hailing from India, our journey into the tech world started in a rather unconventional way—through blogging. Back then, we were just eager to share our thoughts, tips, and insights with the world, covering everything from tech tutorials to life hacks. It was our way of staying connected to the ever-evolving world of technology.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">The Spark of AI</h2>
          <p className="mb-4">
            But, as with any journey, we soon found ourselves intrigued by something bigger: Artificial Intelligence. AI had this magical quality—it was reshaping industries, changing the way people interacted with technology, and making the impossible possible. We dove into it headfirst, testing AI tools, tinkering with algorithms, and experimenting with different use cases. The more we explored, the more fascinated we became.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">The Birth of Unrealshot AI</h2>
          <p className="mb-4">
            One evening, after weeks of brainstorming and countless cups of coffee, it hit us—what if AI could make something as personal as a headshot? What if you didn’t need an expensive photographer or a studio setup to get that professional, polished look? That’s when PicshotAI was born.
          </p>
          <p className="mb-4">
            We wanted to build something that made it effortless for people to present themselves in the best light, whether for their LinkedIn profile, job applications, or business websites. So, we started developing an AI headshot generator that could do just that—deliver high-quality, professional-grade images in just a few clicks. No fuss, no frills—just results.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Empowering People</h2>
          <p className="mb-4">
            But this wasn’t just about the tech. It was about empowerment. We believe everyone deserves a professional-looking headshot, whether you're starting your career or running a business. Our goal has always been to make AI accessible, practical, and—most importantly—beneficial for people.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Today and Tomorrow</h2>
          <p className="mb-4">
            Today, Unrealshot AI is serving users worldwide, helping them create stunning headshots that look like they’ve been shot in a studio. From freelancers looking to stand out, to business owners crafting a professional brand, we’re proud to be a part of your journey.
          </p>
          <p className="mb-4">
            Our story is far from over. We continue to innovate, improve, and grow with every bit of feedback we receive. But at the heart of everything we do is the same passion that started it all—an unshakable belief in the power of technology to make life a little easier, and a lot more creative.
          </p>
        </section>

        <section className="mt-8">
          <p>
            Thank you for trusting us with your image. We look forward to seeing where this adventure takes us next!
          </p>
          <p className="mt-4">
            Warm regards,<br/>
            The Unrealshot AI Team
          </p>
        </section>
      </main>
    </div>
    </>
  );
}

export default AboutUs;
