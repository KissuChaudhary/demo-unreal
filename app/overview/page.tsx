import ClientSideModelsList from "@/components/realtime/ClientSideModelsList";
import { Database } from "@/types/supabase";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
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

  if (!user) {
    return (
      <>
        <Head>
          <link rel="canonical" href="https://www.unrealshot.com/login" />
        </Head>
        <div>User not found</div>
      </>
    );
  }
  const { data: models } = await supabase
    .from("models")
    .select(
      *, samples (
          *
        )
    )
    .eq("user_id", user?.id ?? "");

  return <ClientSideModelsList serverModels={models ?? []} />;
}
