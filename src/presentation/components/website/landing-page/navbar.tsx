"use client";

import { Button } from "@/src/presentation/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const Navbar = () => {
  const path = usePathname();

  const navLink = [
    { id: 1, name: "Home", href: "/" },
    { id: 2, name: "About", href: "/about" },
    { id: 3, name: "Services", href: "/services" },
    { id: 4, name: "Community", href: "/community" },
    // { id: 5, name: "Blog", href: "/blog" },
  ];

  return (
    <div className="">
      <nav className="border-b border-white/10">
        <div className="max-w-screen-xl mx-auto  px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              {/* <Image
                alt="Edenic Energy"
                width={35}
                height={35}
                src="dashboard/logo.svg"
              /> */}
              <span className="text-xl font-bold text-white">
                DB
              </span>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              {navLink.map(({ id, name, href }) => (
                <Link
                  className={` ${
                    path === href
                      ? "text-[#9AE662] hover:text-[#9AE662]/80"
                      : "text-white/70 hover:text-white"
                  }`}
                  href={href}
                  key={id}
                >
                  {name}
                </Link>
              ))}
              {/* <Link className="text-white/70 hover:text-white" href="/feature">
                Feature
              </Link>
              <Link className="text-white/70 hover:text-white" href="/pricing">
                Pricing
              </Link>
              <Link className="text-white/70 hover:text-white" href="/blog">
                Blog
              </Link>
              <Link className="text-white/70 hover:text-white" href="/about">
                About
              </Link> */}
            </div>

            <div className="flex items-center space-x-4">
              <Button
                variant="outline"
                className="hidden md:inline-flex border-white/20 text-white hover:bg-white/10 hover:text-white bg-transparent"
              >
                Contact Us
              </Button>
              <Link href="/login">
                <Button className="bg-[#9AE662] text-black hover:bg-[#9AE662]/90">
                  Log in
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};
