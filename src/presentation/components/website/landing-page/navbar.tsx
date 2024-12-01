'use client';

import { Button } from '@/src/presentation/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ResponsiveNavbar } from './responsiveNavbar';

export const Navbar = () => {
  const path = usePathname();

  const navLink = [
    { id: 1, name: 'Home', href: '/' },
    { id: 2, name: 'About', href: '/about' },
    { id: 3, name: 'Services', href: '/services' },
    { id: 4, name: 'Community', href: '/community' },
    // { id: 5, name: "Blog", href: "/blog" },
  ];

  return (
    <div className="">
      <nav className="border-b border-white/10">
        <div className="max-w-screen-xl mx-auto  px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Image
                alt="Digital Builder"
                width={50}
                height={50}
                src="/community/logo.png"
                className=""
              />
              <span className="font-bold text-white text-lg">
                Digital Builder
              </span>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              {navLink.map(({ id, name, href }) => (
                <Link
                  className={` ${
                    path === href
                      ? 'text-[#9AE662] hover:text-[#9AE662]/80'
                      : 'text-white/70 hover:text-white'
                  }`}
                  href={href}
                  key={id}
                >
                  {name}
                </Link>
              ))}
            </div>

            <div className="items-center space-x-4 hidden md:flex">
              <Link href="/login">
                <Button className="bg-[#9AE662] text-black hover:bg-[#9AE662]/90">
                  Log in
                </Button>
              </Link>
            </div>
            <ResponsiveNavbar />
          </div>
        </div>
      </nav>
    </div>
  );
};
