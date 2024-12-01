'use client';
import { Button } from '@/src/presentation/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/src/presentation/components/ui/sheet';
import { AlignRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navLink = [
  { id: 1, name: 'Home', href: '/' },
  { id: 2, name: 'About', href: '/about' },
  { id: 3, name: 'Services', href: '/services' },
  { id: 4, name: 'Community', href: '/community' },
  // { id: 5, name: "Blog", href: "/blog" },
];

export function ResponsiveNavbar() {
  const path = usePathname();
  return (
    <div className="md:hidden">
      <Sheet>
        <SheetTrigger asChild>
          <Button
            variant="outline"
            className="bg-transparent text-[#9AE662] border-gray-700 hover:bg-black/40 hover:text-[#9AE662]"
          >
            <AlignRight />
          </Button>
        </SheetTrigger>
        <SheetContent className="bg-black border-l border-gray-700">
          <SheetHeader className="hidden">
            <SheetTitle>Edit profile</SheetTitle>
            <SheetDescription>
              Make changes to your profile here. Click save when you&apos;re done.
            </SheetDescription>
          </SheetHeader>
          <nav className="border-b border-white/10">
            <div className="py-4">
              <div className="flex flex-col">
                <div className="flex items-center space-x-2 border-b border-gray-800 pb-4">
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

                <div className="flex flex-col gap-4 pt-4">
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
              </div>
            </div>
          </nav>
          <div className="pt-4">
            <Link href="/login">
              <Button className="bg-[#9AE662] text-black hover:bg-[#9AE662]/90">
                Log in
              </Button>
            </Link>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
