import { Button } from "@/components/ui/button";
import { team } from "@/src/presentation/constant/team-member";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function TeamSection() {
  return (
    <div className="bg-black text-white min-h-screen py-16">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="space-y-16">
          <div className="space-y-4 flex flex-col justify-center items-center">
            <div className="inline-flex items-center rounded-full border border-[#9AE662]/20 bg-[#9AE662]/10 px-3 py-1 text-sm text-[#9AE662]">
              <span className="mr-1">+</span> Team Members
            </div>
            <h2 className="text-4xl md:text-5xl text-center">
              Introduce our <span className="text-[#9AE662]">team</span>
            </h2>
            <p className="text-center lg:w-[750px] mx-auto text-gray-400 py-6">
              We are a group of self-taught developers, creators, and
              problem-solvers committed to making digital dreams a reality. Our
              diverse expertise in technology, design, and marketing fuels our
              passion for building impactful solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {team.map((member, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center space-y-4"
              >
                <div className="relative w-32 h-32 rounded-full overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover object-top"
                  />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold">{member.name}</h3>
                  <p className="text-gray-400">{member.role}</p>
                </div>
                <p className="text-gray-400 text-sm">{member.bio}</p>
                <div className="flex space-x-4">
                  <Link
                    href={member.linkedin}
                    className="text-[#9AE662] hover:text-[#9AE662]/90 hover:bg-transparent"
                    target="_blank"
                  >
                    <Linkedin />
                  </Link>

                  <Link
                    href={member.twitter}
                    className="text-[#9AE662] hover:text-[#9AE662]/90 hover:bg-transparent"
                    target="_blank"
                  >
                    <Twitter />
                  </Link>

                  <Link
                    href={member.instgram}
                    className="text-[#9AE662] hover:text-[#9AE662]/90 hover:bg-transparent"
                    target="_blank"
                  >
                    <Instagram className="w-6 h-6" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
