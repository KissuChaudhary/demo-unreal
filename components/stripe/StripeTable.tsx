//@ts-nocheck
"use client";
import { User } from "@supabase/supabase-js";
import { Loader2Icon } from "lucide-react";
import PayPalButton from "../paypal/PaypalButton";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Script from "next/script";

type Props = {
  user: User;
};

type PlanType = "oneCredit" | "threeCredits" | "fiveCredits";

type PlanDetails = {
  title: string;
  price: number;
  credits: number;
  images: number;
  models: number;
  stripePriceId: string;
};

const plans: { [key in PlanType]: PlanDetails } = {
  oneCredit: {
    title: "1 Credit",
    price: 12,
    credits: 1,
    images: 16,
    models: 1,
    stripePriceId: process.env.NEXT_PUBLIC_STRIPE_PRICE_ID_ONE_CREDIT!,
  },
  threeCredits: {
    title: "3 Credits",
    price: 30,
    credits: 3,
    images: 48,
    models: 3,
    stripePriceId: process.env.NEXT_PUBLIC_STRIPE_PRICE_ID_THREE_CREDITS!,
  },
  fiveCredits: {
    title: "5 Credits",
    price: 40,
    credits: 5,
    images: 80,
    models: 5,
    stripePriceId: process.env.NEXT_PUBLIC_STRIPE_PRICE_ID_FIVE_CREDITS!,
  },
};

const StripePricingTable = ({ user }: Props) => {
  // Stripe vars
  const [scriptLoading, setScriptLoading] = useState({
    oneCredit: false,
    threeCredits: false,
    fiveCredits: false,
  });

  // PayPal vars
  const [paypalScriptLoaded, setPaypalScriptLoaded] = useState(false);

  // Razorpay vars
  const [razorpayAmount, setRazorpayAmount] = useState("0");

  // Stripe script
  const onSubscribe = async (plan: PlanType) => {
    setScriptLoading((prevState) => ({
      ...prevState,
      [plan]: true,
    }));

    try {
      const response = await axios.get(
        `/api/stripe?priceId=${plans[plan].stripePriceId}`
      );
      window.location.href = response.data.url;
    } catch (error) {
      console.error("Error creating Stripe checkout session", error);
      setScriptLoading((prevState) => ({
        ...prevState,
        [plan]: false,
      }));
    }
  };

  // Paypal script
  const addPayPalScript = () => {
    if (window.paypal) {
      setPaypalScriptLoaded(true);
      return;
    }
    const script = document.createElement("script");
    script.src = `https://www.paypal.com/sdk/js?client-id=${process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID}`;
    script.async = true;
    script.onload = () => setPaypalScriptLoaded(true);
    document.body.appendChild(script);
  };

  useEffect(() => {
    addPayPalScript();
  }, []);

  // Razorpay script
  const createRazorpayOrder = async () => {
    try {
      const response = await axios.post("/api/razorpay/order", {
        amount: parseFloat(razorpayAmount) * 100, // Convert to the smallest currency unit (e.g., paise for INR)
      });
      return response.data.orderId;
    } catch (error) {
      console.error("Error creating Razorpay order", error);
      return null;
    }
  };

  const processRazorpayPayment = async () => {
    const orderId = await createRazorpayOrder();
    if (!orderId) {
      alert("Order creation failed. Please try again.");
      return;
    }

    const options = {
      key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
      amount: parseFloat(razorpayAmount) * 100,
      currency: "INR",
      name: "Your Company Name",
      description: "Purchase Description",
      order_id: orderId,
      handler: async (response: any) => {
        const result = await axios.post("/api/razorpay/verify", {
          orderCreationId: orderId,
          razorpayPaymentId: response.razorpay_payment_id,
          razorpayOrderId: response.razorpay_order_id,
          razorpaySignature: response.razorpay_signature,
          userId: user.id, // Include user ID
          userEmail: user.email, // Include user email
        });
        if (result.data.isOk) {
          alert("Payment successful, credits updated!");
        } else {
          alert(result.data.message);
        }
      },
      prefill: {
        name: "Your Name",
        email: user.email,
      },
      theme: {
        color: "#1d4fd8",
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.on("payment.failed", (response: any) => {
      alert(response.error.description);
    });
    paymentObject.open();
  };

  return (
    <>
      <Script
        id="razorpay-checkout-js"
        src="https://checkout.razorpay.com/v1/checkout.js"
      />
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 md:gap-8">
        {Object.keys(plans).map((planKey) => {
          const plan = plans[planKey as PlanType];
          return (
            <div
              key={planKey}
              className="rounded-2xl bg-white border border-gray-200 p-6 shadow-sm sm:px-8 lg:p-12"
            >
              <div className="text-center">
                <h2 className="text-lg font-medium text-gray-900">
                  {plan.title} <span className="sr-only">Plan</span>
                </h2>
                <p className="mt-2 sm:mt-4">
                  <strong className="text-3xl font-bold text-gray-900 sm:text-4xl">
                    ${plan.price}
                  </strong>
                  <span className="text-sm font-medium text-gray-700">
                    {" "}
                    /credits
                  </span>
                </p>
              </div>

              <ul className="mt-6 space-y-2">
                <li className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-5 h-5 text-primary"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>
                  <span className="text-gray-700">
                    {plan.images} Headshot Images
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-5 h-5 text-primary"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>
                  <span className="text-gray-700">
                    {plan.models} Model(s) Included
                  </span>
                </li>
              </ul>

              <a
                className="mt-8 block rounded-full border transition-all cursor-pointer px-12 py-3 text-center text-sm font-medium border-none bg-[#6861ff] text-white hover:bg-[#5b54e0] hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#5750d6]"
                onClick={() => onSubscribe(planKey as PlanType)}
              >
                <span className="flex items-center justify-center gap-2">
                  {scriptLoading[planKey as PlanType] && (
                    <Loader2Icon className="animate-spin" />
                  )}
                  {!scriptLoading[planKey as PlanType] && "Pay With Stripe"}
                </span>
              </a>

              {paypalScriptLoaded && (
                <PayPalButton price={plan.price.toString()} />
              )}

              <a
                className="mt-8 block rounded-full border transition-all cursor-pointer px-12 py-3 text-center text-sm font-medium border-none bg-[#3c99ff] text-white hover:bg-[#3485dc] hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#3485dc]"
                onClick={processRazorpayPayment}
              >
                Pay With Razorpay
              </a>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default StripePricingTable;
