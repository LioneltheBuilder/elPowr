import Image from "next/image";
import { Button } from "../../ui/button";

export const HeroSection = () => {
  return (
    <div className="relative max-w-screen-xl mx-auto pt-24 px-4">
      <div className="relative max-w-4xl mx-auto text-center space-y-8">
        {/* Coming Soon Label */}
        <div className="inline-flex items-center rounded-full border border-[#29d1e0]/20 bg-[#29d1e0]/10 px-3 py-1 text-sm text-[#29d1e0] code-font">
          <span className="mr-1">+</span> Coming Soon
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl md:text-7xl leading-tight tracking-tight">
          <span className="text-[#29d1e0]">Build</span>{" "}
          <span className="text-[#a2d719]">Innovate</span>{" "}
          <span className="text-[#f29b1b]">Connect</span>
          <span className="text-[#ee0672]">;</span>
        </h1>

        {/* Subtitle */}
        <p className="text-white/60 text-xl md:text-2xl max-w-2xl mx-auto font-light">
          Join us for an extraordinary hackathon experience where innovation meets opportunity.
        </p>

        <div className="flex justify-center gap-4">
          <Button className="h-12 px-6 bg-[#29d1e0] text-[#202731] hover:bg-[#29d1e0]/90 font-medium text-lg">
            Register Interest
          </Button>
        </div>
      </div>

      <div className="mt-16">
        <Image
          src="/community/community1.jpg"
          alt="Hackathon Event"
          width={1200}
          height={600}
          className="rounded-lg border border-[#29d1e0]/10 object-cover h-[500px] w-full"
          priority
        />
      </div>
    </div>
  );
};
