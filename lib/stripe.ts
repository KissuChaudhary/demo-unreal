import Stripe from "stripe";
import { types } from "util";

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2024-06-20", // The latest available version in your account
  typescript: true,
});
