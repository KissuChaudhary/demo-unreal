import ClientSideModelsList from "@/components/realtime/ClientSideModelsList";
import { Database } from "@/types/supabase";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { redirect } from "next/navigation"; // Import the redirect function
import Head from "next/head";

export const dynamic = "force-dynamic";

export default async function Index() {
  const cookieStore = cookies();
  const supabase = createServerComponentClient<Database>({
    cookies: () => cookieStore,
  });

  const {
    data: { user },
  } = await supabase.auth.getUser();

  // Redirect non-logged-in users to the login page
  if (!user) {
    redirect("/login"); // Use Next.js redirect for non-logged-in users
  }

  const { data: models } = await supabase
    .from("models")
    .select(
      `*, samples (
          *
        )`
    )
    .eq("user_id", user?.id ?? "");

  return (
    <>
      <Head>
        <link rel="canonical" href="https://www.unrealshot.com/overview" />
      </Head>
      <ClientSideModelsList serverModels={models ?? []} />
    </>
  );
}
