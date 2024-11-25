import { Button } from "@/src/presentation/components/ui/button";
import { Check } from "lucide-react";
import React from "react";
import Image from "next/image";
import Example from "@/public/additional/example2.jpg";
import Link from "next/link";

export function CommunitySection() {
  return (
    <section className="max-w-screen-xl mx-auto bg-black text-white pt-16 px-4">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6 order-1 ">
          <Image
            src={Example}
            width={600}
            height={800}
            alt="Digital Builder Team"
            className="rounded-lg  md:h-[450px]"
          />
        </div>

        <div className="space-y-6 lg:order-2">
          <div className="inline-flex items-center rounded-full border border-[#9AE662]/20 bg-[#9AE662]/10 px-3 py-1 text-sm text-[#9AE662]">
            <span className="mr-1">+</span> A Community Built for You
          </div>

          <h2 className="text-4xl md:text-5xl leading-tight text-white">
            Collaborate, Learn, Innovate
          </h2>

          <p className="text-gray-400 ">
            Be part of something bigger. At Digital Builders, we’re fostering a
            space for self-taught developers, tech enthusiasts, and businesses
            to collaborate, learn, and innovate.
          </p>
          <p className="text-white">Membership Tiers</p>
          <ul className="space-y-4">
            <li className="flex items-center space-x-3">
              <Check className="h-5 w-5 text-[#9AE662]" />
              <span className="text-gray-400">
                <b>Free Membership: </b>Access to Discord and basic networking.
              </span>
            </li>
            <li className="flex items-center space-x-3">
              <Check className="h-5 w-5 text-[#9AE662]" />
              <span className="text-gray-400">
                <b>Premium Membership: </b>Workshops, expert-led sessions, and
                exclusive events.
              </span>
            </li>
          </ul>
          <div> 
          <Link href="/community">
            <Button className="h-10 bg-[#9AE662] text-black hover:bg-[#9AE662]/90">
              Become a Member Today
            </Button>
          </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
