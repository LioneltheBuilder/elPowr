import Image from "next/image";
import React from "react";
import Community from "@/public/additional/community.jpg";
import Community2 from "@/public/additional/community2.jpg";

function CommunityHeroSection() {
  return (
    <div className="max-w-screen-xl mx-auto px-4 relative py-12">
      <div className="text-center mb-16">
        <div className="inline-flex items-center rounded-full border border-[#9AE662]/20 bg-[#9AE662]/10 px-3 py-1 text-sm text-[#9AE662]">
          <span className="mr-1">+</span> Community
        </div>
        <h2 className="text-4xl md:text-5xl text-white mb-4 py-6">
          Join the Digital Builders Movement.
        </h2>
        <p className="text-gray-400  max-w-3xl mx-auto">
          We believe in the power of community. Whether you’re a beginner
          looking to learn coding, a developer seeking to expand your network,
          or an entrepreneur eager to collaborate, our community is your home
          for growth and innovation.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-5">
        <div>
          <Image
            src={Community}
            alt="Community Image"
            width={1000}
            height={500}
            className="rounded-lg h-[300px] object-cover object-top"
          />
        </div>
        <div className="pt-20">
          <Image
            src={Community2}
            alt="Community Image"
            width={1000}
            height={1000}
            className="rounded-lg h-[300px] object-cover top-0"
          />
        </div>
      </div>
    </div>
  );
}

export default CommunityHeroSection;
