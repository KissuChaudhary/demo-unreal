import Footer from "@/app/footer/page";
import Navbar from "@/app/navbar/page";
import { Toaster } from "@/components/ui/toaster";
import "./globals.css";
import { Suspense } from "react";
import { Analytics } from "@vercel/analytics/react";
import NextTopLoader from "nextjs-toploader";
import Script from 'next/script';

export const metadata = {
  title: "#1 AI Headshot Generator | Create Most Realistic Headshots with Unrealshot AI",
  description: "Create professional, high-quality AI-generated headshots in minutes with UnrealShot AI, our easy-to-use AI headshot generator. Perfect for businesses and individuals looking to elevate their profile with stunning, custom portraits.",
  keywords: "AI headshots, AI headshot generator, Free AI headshot generator, headshot maker, professional headshot, online headshot, AI-powered headshot, professional headshots, resume photos, LinkedIn profile photos",
  authors: [{ name: "UnrealShot AI" }],
  robots: "index, follow",
  viewport: "width=device-width, initial-scale=1.0",
  openGraph: {
    title: "#1 AI Headshot Generator | Create Most Realistic Headshots with Unrealshot AI",
    description: "Create professional, high-quality AI-generated headshots in minutes with UnrealShot AI, our easy-to-use AI headshot generator. Perfect for businesses and individuals looking to elevate their profile with stunning, custom portraits.",
    url: "https://www.unrealshot.com",
    siteName: "UnrealShot AI",
    images: [{ url: "/assets/ui/1.png" }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "#1 AI Headshot Generator | Create Most Realistic Headshots with Unrealshot AI",
    description: "Create professional, high-quality AI-generated headshots in minutes with UnrealShot AI, our easy-to-use AI headshot generator. Perfect for businesses and individuals looking to elevate their profile with stunning, custom portraits.",
    images: ["/assets/ui/1.png"],
  },
  other: {
    "revisit-after": "7 days",
    "google-site-verification": "Dr-QEYwpZdsKz8x0c03g4bq8B1Fmw8ts26FehVHy89g"
  }
};

export default function RootLayout({ children }: any) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
       <Script id="schema-website" type="application/ld+json">
          {JSON.stringify({
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "#1 AI Headshot Generator | Create Most Realistic Headshots with Unrealshot AI",
  "url": "https://www.unrealshot.com",
  "mainEntity": [
    {
      "@type": "WebPage",
      "name": "Home",
      "url": "https://www.unrealshot.com"
    },
    {
      "@type": "WebPage",
      "name": "Pricing",
      "url": "https://www.unrealshot.com/pricing"
    },
    {
      "@type": "WebPage",
      "name": "About Us",
      "url": "https://www.unrealshot.com/about"
    },
    {
      "@type": "WebPage",
      "name": "Contact",
      "url": "https://www.unrealshot.com/contact-us"
    },
    {
      "@type": "WebPage",
      "name": "FAQs",
      "url": "https://www.unrealshot.com/faqs"
    },
     {
      "@type": "WebPage",
      "name": "Terms",
      "url": "https://www.unrealshot.com/terms"
    },
     {
      "@type": "WebPage",
      "name": "Refunds",
      "url": "https://www.unrealshot.com/refund-policy"
    },
     {
      "@type": "WebPage",
      "name": "Privacy Policy",
      "url": "https://www.unrealshot.com/privacy-policy"
    },
     {
      "@type": "WebPage",
      "name": "Login",
      "url": "https://www.unrealshot.com/login"
    },
  ]
}
)}
        </Script>

        <Script src="https://www.googletagmanager.com/gtag/js?id=G-XGFT46LL3J" />
        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XGFT46LL3J');
          `}
        </Script>

        <NextTopLoader color="#2564eb" height={5} showSpinner={false} />
        <section>
          <Suspense
            fallback={
              <div className="flex w-full px-4 lg:px-40 py-4 items-center border-b text-center gap-8 justify-between h-[69px]" />
            }
          >
            <Navbar />
          </Suspense>
        </section>
        <main className="flex-grow items-center">
          {children}
        </main>
        <Footer />
        <Toaster />
        <Analytics />
      </body>
    </html>
  );
}
