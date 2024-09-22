import Link from "next/link";
import { Button } from "../../components/ui/button";
import React from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Star } from "lucide-react";

const pricingOptions = [
  {
    title: "Starter",
    price: "$5.49",
    features: [
      "01 Credit",
      "06 headshots",
      "90 min turnaround time"
    ],
    popular: false,
    bestValue: false
  },
  {
    title: "Basic",
    price: "$19.49",
    originalPrice: "$21.99",
    discount: "-12%",
    features: [
      "04 Credits",
      "24 headshots",
      "Priority Support",
      "90 min turnaround time"
    ],
    popular: true,
    bestValue: false
  },
  {
    title: "Premium",
    price: "$41.99",
    originalPrice: "$49.49",
    discount: "-15%",
    features: [
      "09 Credits",
      "54 headshots",
      "Priority Support",
      "90 min turnaround time"
    ],
    popular: false,
    bestValue: true
  }
];

const Pricing = () => {
  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-indigo-900 text-center mb-2">Price for ‘Absolutely Stunning’ Professional Headshots</h2>
      <p className="text-center font-semibold text-gray-600 mb-8">
        Need ‘mind-blowing’ corporate headshots for yourself or your team? We offer ‘top-notch’ services at prices so ‘affordable,’ you’ll wonder if we’re serious.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {pricingOptions.map((option, index) => (
          <Card key={index} className={`relative ${option.popular ? 'border-purple-500 border-2' : ''}`}>
            {option.popular && (
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 bg-purple-500 -translate-y-1/2 text-white px-3 py-1 rounded-full text-sm font-semibold">
                MOST POPULAR
              </div>
            )}
            {option.bestValue && (
              <div className="absolute top-0 right-0 bg-teal-500 text-white px-3 py-1 rounded-tr-lg text-sm font-semibold">
                FOR TEAMS
              </div>
            )}
            <CardHeader>
              <CardTitle className="text-2xl font-bold">{option.price}</CardTitle>
              {option.originalPrice && (
                <div className="flex items-center space-x-2">
                  <span className="text-gray-400 line-through">{option.originalPrice}</span>
                  <span className="text-purple-500 font-semibold">{option.discount}</span>
                </div>
              )}
            </CardHeader>
            <CardContent>
              <h3 className="font-semibold mb-4">{option.title} Includes</h3>
              <ul className="space-y-2">
                {option.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-center space-x-2">
                    <Check className="h-5 w-5 text-green-500" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Link href="/login">
              <Button className="w-full flex items-center bg-indigo-900 text-white py-2 px-6 hover:text-white rounded shadow-lg hover:bg-indigo-800 transition duration-300" variant={option.popular ? "default" : "outline"}>
                Get Your Headshots
              </Button>
                </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
      
      <div className="mt-8 text-center">
        <div className="flex items-center justify-center space-x-1">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="h-5 w-5 fill-current text-yellow-400" />
          ))}
        </div>
        <p className="mt-2 text-gray-600">Over 2,000 AI Headshots in Just One Month – Who Knew Perfection Was So Popular?</p>
      </div>
    </div>
  );
};

export default Pricing;
