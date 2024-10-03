"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { AlignJustify, ChevronDown, ChevronUp } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const ActionButtons = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isToolsOpen, setIsToolsOpen] = useState(false);
  const router = useRouter();

  const handleLinkClick = (href: string) => {
    setIsOpen(false);
    router.push(href);
  };

  const toggleTools = () => {
    setIsToolsOpen(!isToolsOpen);
  };

  const freeTools = [
    { name: "LinkedIn Bio Generator", href: "/linkedin-bio-generator" },
    { name: "LinkedIn Headline Generator", href: "/linkedin-headline-generator" },
    { name: "LinkedIn Post Generator", href: "/linkedin-post-generator" },
    { name: "Instagram Bio Generator", href: "/instagram-bio-generator" },
    { name: "Instagram Caption Generator", href: "/instagram-caption-generator" },
  ];

  return (
    <div>
      <div className="md:hidden">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" className="p-0">
              <AlignJustify />
            </Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetDescription>
                <div className="flex flex-col space-y-4 items-start w-full text-lg text-black mt-10">
                  <Link href="/" onClick={() => handleLinkClick("/")}>
                    Home
                  </Link>
                  <Link href="/refund-policy" onClick={() => handleLinkClick("/refund-policy")}>
                    Refunds
                  </Link>
                  <Link href="/faqs" onClick={() => handleLinkClick("/faqs")}>
                    FAQs
                  </Link>
                  <div className="w-full">
                    <button
                      onClick={toggleTools}
                      className="flex items-center justify-between w-full text-left"
                    >
                      Free Tools
                      {isToolsOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                    </button>
                    {isToolsOpen && (
                      <div className="mt-2 space-y-2">
                        {freeTools.map((tool) => (
                          <Link
                            key={tool.href}
                            href={tool.href}
                            onClick={() => handleLinkClick(tool.href)}
                            className="flex"
                          >
                            {tool.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                  <button
                    onClick={() => handleLinkClick("/overview")}
                    className="flex items-center bg-indigo-900 text-white font-bold py-2 px-6 rounded-lg shadow-lg hover:bg-indigo-800 transition duration-300"
                  >
                    Sign in
                  </button>
                </div>
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
      <div className="hidden md:flex md:space-x-4">
        <Link href="/overview">
          <Button className="flex items-center bg-indigo-900 text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:bg-indigo-800 transition duration-300">
            Get Started
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default ActionButtons;
