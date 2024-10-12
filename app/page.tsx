import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import Script from 'next/script';
import FirstSection from "./first-section/page";
import Carousel from "../components/ui/carousel";
import SecondSection from "./second-section/page";
import ThirdSection from "./third-section/page";
import FourthSection from "./fourth-section/page";
import PricingSection from "./pricing/page";
import FifthSection from "./fifth-section/page";

export const dynamic = "force-dynamic";

export default async function Index() {
  const cookiesStore = cookies();
  const supabase = createServerComponentClient({ cookies: () => cookiesStore });
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <>
      <Script id="schema-webpage" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": "UnrealShot AI - Best AI Headshot Generator | Create Most Realistic Headshots",
          "description": "Create professional, high-quality AI-generated headshots in minutes with UnrealShot AI, our easy-to-use AI headshot generator. Perfect for businesses and individuals looking to elevate their profile with stunning, custom portraits.",
          "url": "https://www.unrealshot.com",
          "isPartOf": {
            "@type": "WebSite",
            "name": "UnrealShot AI",
            "url": "https://www.unrealshot.com",
          },
          "image": "/assets/ui/1.png",
          "author": {
            "@type": "Organization",
            "name": "UnrealShot AI",
          },
        })}
      </Script>

      <Script id="schema-webapplication" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebApplication",
          "name": "UnrealShot AI - Best AI Headshot Generator | Create Most Realistic Headshots",
          "url": "https://www.unrealshot.com",
          "applicationCategory": "PhotoEditing",
          "operatingSystem": "All",
          "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "USD",
          },
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.8",
            "reviewCount": "92",
          },
          "author": {
            "@type": "Organization",
            "name": "UnrealShot AI",
          },
        })}
      </Script>

      <div>
        <FirstSection />
        <Carousel />
        <SecondSection />
        <ThirdSection />
        <FourthSection />
        <PricingSection />
        <FifthSection />
      </div>
    </>
  );
}
