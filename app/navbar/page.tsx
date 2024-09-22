import React from "react";
import ActionButtons from "./action-buttons";
import Logo from "./logo";
import { NavigationMenuBar } from "./navigation-bar";
import Link from "next/link";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../../components/ui/dropdown-menu";
import { Button } from "../../components/ui/button";
import { Database } from "@/types/supabase";
import ClientSideCredits from "../../components/realtime/ClientSideCredits";
import { Avatar, AvatarFallback, AvatarImage } from "../../components/ui/avatar";
import { User, CreditCard, LogOut } from "lucide-react";

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
          <div className="flex flex-row gap-4 items-center">
            {stripeIsConfigured && (
              <ClientSideCredits creditsRow={credits ? credits : null} />
            )}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src={user.user_metadata?.avatar_url} alt={user.email || ""} />
                    <AvatarFallback>{user.email?.charAt(0).toUpperCase()}</AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56" align="end" forceMount>
                <DropdownMenuLabel className="font-normal">
                  <div className="flex flex-col space-y-1">
                    <p className="text-sm font-medium leading-none">{user.email}</p>
                    <p className="text-xs leading-none text-muted-foreground">
                      {user.email}
                    </p>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  <DropdownMenuItem>
                    <User className="mr-2 h-4 w-4" />
                    <span>Profile</span>
                  </DropdownMenuItem>
                  {stripeIsConfigured && (
                    <Link href="/get-credits">
                      <DropdownMenuItem>
                        <CreditCard className="mr-2 h-4 w-4" />
                        <span>Get Credits</span>
                      </DropdownMenuItem>
                    </Link>
                  )}
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <form action="/auth/sign-out" method="post">
                  <DropdownMenuItem asChild>
                    <Button
                      type="submit"
                      className="w-full text-left cursor-pointer"
                      variant="ghost"
                    >
                      <LogOut className="mr-2 h-4 w-4" />
                      <span>Log out</span>
                    </Button>
                  </DropdownMenuItem>
                </form>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        )}
      </div>
    </div>
  );
}
