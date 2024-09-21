"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { Database } from "@/types/supabase";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import disposableDomains from "disposable-email-domains";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
// import { AiOutlineGoogle } from "react-icons/ai";
import { WaitingForMagicLink } from "./WaitingForMagicLink";

type Inputs = {
  email: string;
};

export const Login = ({
  host,
  searchParams,
}: {
  host: string | null;
  searchParams?: { [key: string]: string | string[] | undefined };
}) => {
  const supabase = createClientComponentClient<Database>();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isMagicLinkSent, setIsMagicLinkSent] = useState(false);
  const { toast } = useToast();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitted },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    setIsSubmitting(true);
    try {
      await signInWithMagicLink(data.email);
      setTimeout(() => {
        setIsSubmitting(false);
        toast({
          title: "Email sent",
          description: "Check your inbox for a magic link to sign in.",
          duration: 5000,
        });
        setIsMagicLinkSent(true);
      }, 1000);
    } catch (error) {
      setIsSubmitting(false);
      toast({
        title: "Something went wrong",
        variant: "destructive",
        description:
          "Please try again, if the problem persists, contact us at hello@tryleap.ai",
        duration: 5000,
      });
    }
  };

  let inviteToken = null;
  if (searchParams && "inviteToken" in searchParams) {
    inviteToken = searchParams["inviteToken"];
  }

  const protocol = host?.includes("localhost") ? "http" : "https";
  const redirectUrl = `${protocol}://${host}/auth/callback`;

  console.log({ redirectUrl });

  // const signInWithGoogle = async () => {
  //   const { data, error } = await supabase.auth.signInWithOAuth({
  //     provider: "google",
  //     options: {
  //       redirectTo: redirectUrl,
  //     },
  //   });

  //   console.log(data, error);
  // };

  const signInWithMagicLink = async (email: string) => {
    const { error } = await supabase.auth.signInWithOtp({
      email,
      options: {
        emailRedirectTo: redirectUrl,
      },
    });

    if (error) {
      console.log(`Error: ${error.message}`);
    }
  };

  if (isMagicLinkSent) {
    return (
      <WaitingForMagicLink toggleState={() => setIsMagicLinkSent(false)} />
    );
  }

  return (
    <>
      <div className="flex items-center justify-center p-8">
        <div className="flex flex-col gap-4 bg-white dark:bg-neutral-900 border border-gray-200 dark:border-neutral-700 shadow-sm p-4 rounded-xl max-w-sm w-full">
          <div className="text-center">
            <h1 className="block text-2xl font-bold text-gray-800 dark:text-white">
              Welcome
            </h1>
            <p className="mt-2 text-sm text-gray-600 dark:text-neutral-400">
              Don't have an account yet?{" "}
              <a
                href="#"
                className="text-blue-600 decoration-2 hover:underline focus:outline-none focus:underline font-medium dark:text-blue-500"
              >
                Sign up below!
              </a>
            </p>
          </div>

          <div className="mt-5">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col gap-4"
            >
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm mb-2 dark:text-white"
                >
                  Email address
                </label>
                <div className="relative">
                  <Input
                    type="email"
                    placeholder="Email"
                    className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                    {...register("email", {
                      required: true,
                      validate: {
                        emailIsValid: (value: string) =>
                          /^[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
                            value
                          ) || "Please enter a valid email",
                        emailDoesntHavePlus: (value: string) =>
                          /^[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
                            value
                          ) || "Email addresses with a '+' are not allowed",
                        emailIsntDisposable: (value: string) =>
                          !disposableDomains.includes(value.split("@")[1]) ||
                          "Please use a permanent email address",
                      },
                    })}
                  />
                  {isSubmitted && errors.email && (
                    <span className="text-xs text-red-400">
                      {errors.email?.message || "Email is required to sign in"}
                    </span>
                  )}
                </div>
              </div>

              <Button
                isLoading={isSubmitting}
                disabled={isSubmitting}
                variant="outline"
                className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium 
                rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 hover:text-white 
                focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                type="submit"
              >
                Continue with Email
              </Button>
            </form>

            <div className="flex items-center p-4 mt-4">
              <p className="text-sm text-gray-600 dark:text-neutral-400">
                By signing up, you agree to our{" "}
                <a
                  href="#"
                  className="underline text-blue-600 dark:text-blue-500"
                >
                  Terms of Service
                </a>{" "}
                and{" "}
                <a
                  href="#"
                  className="underline text-blue-600 dark:text-blue-500"
                >
                  Privacy Policy
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

// export const OR = () => {
//   return (
//     <div className="flex items-center my-1">
//       <div className="border-b flex-grow mr-2 opacity-50" />
//       <span className="text-sm opacity-50">OR</span>
//       <div className="border-b flex-grow ml-2 opacity-50" />
//     </div>
//   );
// };
