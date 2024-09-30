import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies, headers } from "next/headers";
import { redirect } from "next/navigation";
import { Database } from "../../types/supabase";
import { Login } from "./components/Login";
import Script from 'next/script';


export const dynamic = "force-dynamic";

export default async function LoginPage({
  searchParams,
}: {
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  const cookieStore = cookies();
  const supabase = createServerComponentClient<Database>({
    cookies: () => cookieStore,
  });

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (user) {
    redirect("/");
  }

  const headersList = headers();
  const host = headersList.get("host");

  const loginSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Login Page",
    "description": "Login to your Unrealshot AI account",
    "url": `https://${host}/login`,
    "mainEntity": {
      "@type": "LoginAction",
      "name": "Unrealshot AI Login",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": `https://${host}/login`,
        "actionPlatform": [
          "http://schema.org/DesktopWebPlatform",
          "http://schema.org/MobileWebPlatform"
        ]
      }
    }
  };

  return (
    <>
      <Script
        id="login-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(loginSchema) }}
      />
    <div className="flex flex-col flex-1 w-full ">
      <Login host={host} searchParams={searchParams} />
    </div>
    </>
  );
}
