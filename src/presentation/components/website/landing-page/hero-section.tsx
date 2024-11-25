import React from "react";


import Image from "next/image";
import Discord from "@/public/landing-page/discord.svg";
import Youtube from "@/public/landing-page/youtube.svg";
import Additional1 from "@/public/additional/additional1.jpg";
import { Button } from "@/src/presentation/components/ui/button";
import Link from "next/link";

export const HeroSection = () => {
  return (
    <div className="relative max-w-screen-xl mx-auto  pt-24 px-4">
      {/* Background color */}
      <div className="absolute inset-0 bg-black" />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none max-w-screen-xl mx-auto"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px)
          `,
          backgroundSize: "100px 100px",
          backgroundPosition: "center center",
        }}
      />

      <div className="relative max-w-4xl mx-auto text-center space-y-8">
        {/* SAAS Template Label */}
        <div className="inline-flex items-center rounded-full border border-[#9AE662]/20 bg-[#9AE662]/10 px-3 py-1 text-sm text-[#9AE662]">
          <span className="mr-1">+</span> Solve Problems
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl md:text-6xl leading-tight text-white font-semibold">
          <span className="text-[#9AE662]">Build Your Future, </span> Empower
          Your Business,{" "}
          <span className="text-[#9AE662]">Join the Movement.</span>
        </h1>

        {/* Subtitle */}
        <p className="text-white/60 text-lg md:text-md max-w-2xl mx-auto">
          Join Digital Builders – a community of coders, creators, and
          businesses transforming the digital world with expert web development,
          marketing, and events.
        </p>

        {/* Email Form */}

        <div className="flex flex-wrap justify-center gap-6 text-sm text-white/60">
          <div className="flex flex-col gap-3 items-center">
            <div className="flex -space-x-2 ">
              <Image
                alt=""
                src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                className="w-7 h-7  inline-block size-9 rounded-full ring-2 ring-[#9AE662]"
                width={40}
                height={40}
              />
              <Image
                alt=""
                src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                className="w-7 h-7  inline-block size-9 rounded-full ring-2 ring-[#9AE662]"
                width={40}
                height={40}
              />
              <Image
                alt=""
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
                className="w-7 h-7  inline-block size-9 rounded-full ring-2 ring-[#9AE662]"
                width={40}
                height={40}
              />
              <Image
                alt=""
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                className="w-7 h-7  inline-block size-9 rounded-full ring-2 ring-[#9AE662]"
                width={40}
                height={40}
              />
            </div>
            <p>328+ Members</p>
          </div>

          <div className="flex flex-col items-center">
            <div className="flex gap-3">
              <Image src={Youtube} alt="Discord Icon" width={40} height={40} />
              <p className="text-white text-xl">4.04k</p>
            </div>
            <div className="pt-3">
              <p>subscribers</p>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-4 text-sm">
          <Link href="/services">
            <Button className="h-10 bg-[#9AE662] text-black hover:bg-[#9AE662]/90">
              Learn About Our Services
            </Button>
          </Link>
          <Link href="https://discord.gg/PzS4n2XW" target="_blank">
            <Button
              className="h-10 gap-3 border border-gray-400 hover:text-[#9AE662] text-white hover:border-[#9AE662] hover:bg-transparent"
              variant="ghost"
            >
              <Image src={Discord} alt="Discord Icon" width={20} height={20} />
              Join the Community
            </Button>
          </Link>
        </div>
      </div>

      <div className="pt-[65px] z-40 relative">
        <div className="relative group">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-gray-600/20 to-gray-800/20 rounded-lg blur opacity-20 group-hover:opacity-30 transition duration-1000" />

          <div className="relative">
            <Image
              src={Additional1}
              alt="Dashboard Image"
              width={1000}
              height={1000}
              className="rounded-lg border border-white/10 h-[300px] md:h-[500px] w-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
