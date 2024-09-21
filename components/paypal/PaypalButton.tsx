//@ts-nocheck
import { useEffect, useRef, useState } from "react";
import axios from "axios";

interface PayPalButtonProps {
  price: string; // Ensure price is a string to match the expected format
}

const PayPalButton: React.FC<PayPalButtonProps> = ({ price }) => {
  const paypalRef = useRef<HTMLDivElement | null>(null);
  const [paypalScriptLoaded, setPaypalScriptLoaded] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Load the PayPal script
  const addPayPalScript = () => {
    if (window.paypal) {
      setPaypalScriptLoaded(true);
      return;
    }

    const script = document.createElement("script");
    script.src = `https://www.paypal.com/sdk/js?client-id=${process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID}&currency=USD`;
    script.async = true;
    script.onload = () => setPaypalScriptLoaded(true);
    script.onerror = () => {
      console.error("Failed to load PayPal script.");
      setError("Failed to load PayPal script.");
    };
    document.body.appendChild(script);
  };

  useEffect(() => {
    addPayPalScript();
  }, []);

  useEffect(() => {
    if (paypalScriptLoaded && paypalRef.current) {
      window.paypal
        .Buttons({
          fundingSource: window.paypal.FUNDING.PAYPAL,
          style: {
            color: "black",
            label: "pay",
            shape: "pill",
          },
          createOrder: (data, actions) => {
            return actions.order.create({
              purchase_units: [
                {
                  amount: {
                    value: price,
                  },
                },
              ],
            });
          },
          onApprove: async (data, actions) => {
            setLoading(true);
            try {
              // Capture payment
              await actions.order.capture();
              // Notify your server
              await axios.post("/paypal/subscription-webhook", {
                orderId: data.orderID,
                payerId: data.payerID,
                price: price,
              });
              alert("Payment successful, credits updated!");
            } catch (error) {
              console.error("Error during payment process:", error);
              setError("Payment failed. Please try again.");
            } finally {
              setLoading(false);
            }
          },
          onError: (err) => {
            console.error("PayPal Checkout error:", err);
            setError("Payment failed. Please try again.");
            setLoading(false);
          },
        })
        .render(paypalRef.current);
    }
  }, [paypalScriptLoaded, price]);

  return (
    <div>
      <div ref={paypalRef} className="mt-8"></div>
      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}
    </div>
  );
};

export default PayPalButton;
