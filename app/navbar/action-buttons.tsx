

import { Button } from "@/components/ui/button";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";

import { AlignJustify } from "lucide-react";

import Link from "next/link";

const ActionButtons = () => {
  return (
    <div>
      <div className="md:hidden">
        <Sheet>
          <SheetTrigger>
            <AlignJustify />
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetDescription>
                <div className="flex flex-col space-y-4 items-start w-full text-lg text-black mt-10">
                    <Link href="/">Home</Link>
        <Link href="/refund-policy">Refunds</Link>
        <Link href="/faqs">FAQs</Link>
        <Link href="/blog">Blog</Link>
        <Link href="/overview">
          <button className="flex items-center bg-indigo-900 text-white font-bold py-2 px-6 rounded-lg shadow-lg hover:bg-indigo-800 transition duration-300">
            Sign in
          </button>
        </Link>
                </div>
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>

      <div className="hidden md:flex md:space-x-4">
       
        <Link href="/overview">
          <Button className="flex items-center bg-indigo-900 text-white font-bold py-3 px-6 rounded shadow-lg hover:bg-indigo-800 transition duration-300">Get Started</Button>
        </Link>
      </div>
    </div>
  );
};

export default ActionButtons;
