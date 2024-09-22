import React from "react";
import ActionButtons from "./action-buttons";
import Logo from "./logo";
import { NavigationMenuBar } from "./navigation-bar";
import Link from "next/link";
import { AvatarIcon } from "@radix-ui/react-icons";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../../components/ui/dropdown-menu";
import { Button } from "../../components/ui/button";
import { Database } from "@/types/supabase";
import ClientSideCredits from "../../components/realtime/ClientSideCredits";

export const dynamic = "force-dynamic";

const stripeIsConfigured = process.env.NEXT_PUBLIC_STRIPE_IS_ENABLED === "true";

export const revalidate = 0;

export default async function Navbar() {
  const cookieStore = cookies();
  const supabase = createServerComponentClient<Database>({
    cookies: () => cookieStore,
  });

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const { data: credits } = await supabase
    .from("credits")
    .select("*")
    .eq("user_id", user?.id ?? "")
    .single();

  return (
    <div className="border-b">
    <div className="flex justify-between items-center h-16 px-4 py-2 max-w-full md:max-w-[1240px] mx-auto">
      <Link href="/">
        <Logo />
      </Link>

      {/* Rendered navbar when user is logged in */}
      {user && (
        <div className="hidden lg:flex flex-row gap-2">
          <Link href="/overview">
            <Button
              variant={"ghost"}
              className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-md transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50 font-medium"
            >
              Home
            </Button>
          </Link>
          {stripeIsConfigured && (
            <Link href="/get-credits">
              <Button
                variant={"ghost"}
                className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-md transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50 font-medium"
              >
                Get Credits
              </Button>
            </Link>
          )}
        </div>
      )}

      {/* Rendered navbar when user is not logged in */}
      {!user && (
        <>
          <NavigationMenuBar />
          <ActionButtons />
        </>
      )}

      {/* Rendered navbar when user is logged in */}
      {user && (
        <div className="flex flex-row gap-4 text-center align-middle justify-center">
          {stripeIsConfigured && (
            <ClientSideCredits creditsRow={credits ? credits : null} />
          )}
          <DropdownMenu>
            {stripeIsConfigured && (
            <Link href="/get-credits">
              <Button
                variant={"ghost"}
                className="w-full text-left font-medium">
                Get Credits
              </Button>
            </Link>
          )}
            <DropdownMenuTrigger asChild className="cursor-pointer">
              <AvatarIcon height={24} width={24} className="text-primary" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <DropdownMenuLabel className="text-primary text-center overflow-hidden text-ellipsis">
                {user.email}
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <form action="/auth/sign-out" method="post">
                <Button
                  type="submit"
                  className="w-full text-left font-medium"
                  variant={"ghost"}
                >
                  Log out
                </Button>
              </form>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      )}
    </div>
      </div>
  );
}
