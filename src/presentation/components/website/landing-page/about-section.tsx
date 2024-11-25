"use client";
import { BadgeCheck, Check, CheckCheck } from "lucide-react";
import { Button } from "@/src/presentation/components/ui/button";
import { Card } from "@/src/presentation/components/ui/card";
import Image from "next/image";
import Example from "@/public/additional/example1.jpg";
import Link from "next/link";

export function AboutSection() {
  const corePillars = [
    {
      id: 1,
      title: "Web Development",
      desc: "From websites to scalable applications, we bring your vision to life.",
    },
    {
      id: 2,
      title: "Marketing Solutions",
      desc: "Grow your brand with data-driven strategies.",
    },
    {
      id: 3,
      title: "Community & Events",
      desc: "Learn, network, and thrive with our conferences, workshops, and activations.",
    },
  ];

  return (
    <div className="max-w-screen-xl mx-auto bg-black text-white" id="feature">
      {/* First Feature Section */}
      <section className="px-4 pt-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center rounded-full border border-[#9AE662]/20 bg-[#9AE662]/10 px-3 py-1 text-sm text-[#9AE662]">
              <span className="mr-1">+</span> Why Digital Builders?
            </div>

            <h2 className="text-4xl md:text-4xl  leading-tight">
              <span className="text-[#9AE662]">Empowering Growth</span>{" "}
              Innovation and{" "}
              <span className="text-[#9AE662]"> Collaboration</span>
            </h2>

            <p className="text-gray-400">
              We are here to help you build. Whether you're a business seeking
              digital solutions, a developer ready to break into tech, or
              someone eager to learn and grow, Digital Builders is your partner
              for success.
            </p>
            <ul className=" flex flex-col gap-4 py-4">
              {corePillars.map((item) => (
                <li key={item.id} className="text-gray-400 flex gap-4">
                  <BadgeCheck className="text-[#9AE662]" />
                  <div className="">
                    <span className="font-semibold">{item.title}</span>
                    <p className="text-sm">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>

           <Link href="/about">
           <Button className="bg-[#9AE662] text-black hover:bg-[#9AE662]/90">
              Discover More
            </Button>
            </Link>
          </div>

          <div className="">
            <Image
              src={Example}
              width={600}
              height={800}
              alt="Digital Builder Team"
              className="rounded-lg  md:h-[450px]"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
