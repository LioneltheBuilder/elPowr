import { Button } from "@/src/presentation/components/ui/button";
import Link from "next/link";

export default function AboutHeroSection() {
  return (
    <div className=" bg-black text-white">
      <main className="max-w-screen-xl mx-auto  px-4 pt-12 space-y-24">
        {/* Hero Section */}
        <section className="text-center space-y-6 pt-12">
          <h1 className="text-4xl md:text-6xl leading-tight tracking-tighter">
            <span className="text-[#9AE662]">Empowering</span> Developers and
            <br />
            <span className="text-[#9AE662]">Businesses</span> to Thrive
          </h1>
          <p className="text-gray-400 max-w-3xl mx-auto">
            Discover Our Story, Mission, and Commitment to Building the Future of Tech
          </p>
        </section>

        {/* About Section */}
        <section className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center rounded-full border border-[#9AE662]/20 bg-[#9AE662]/10 px-3 py-1 text-sm text-[#9AE662]">
              <span className="mr-1">+</span> About Us
            </div>
            <h2 className="text-3xl md:text-4xl leading-tight">
              <span className="text-[#9AE662]">Building</span> the Future
              <br />
              Together
            </h2>
            <div>
              <Link href="/services" className="pt-4">
                <Button className="bg-[#9AE662] text-black hover:bg-[#9AE662]/90">
                  Contact us
                </Button>
              </Link>
            </div>
          </div>

          <div className="space-y-6 text-gray-400">
            <p>
              At Digital Builders, our journey began with a vision to create a 
              thriving community where developers, businesses, and tech enthusiasts 
              could come together to learn, grow, and innovate.
            </p>

            <p>
              With a team of passionate developers, designers, and industry experts, 
              we&apos;ve built a platform that combines practical education, networking 
              opportunities, and real-world project experience. Our community-driven 
              approach ensures that everyone has the support they need to succeed in 
              the ever-evolving tech landscape.
            </p>

            <p>
              Today, Digital Builders stands as a testament to the power of 
              community and collaboration. Whether you&apos;re a self-taught developer 
              looking to break into tech, or a business seeking digital transformation, 
              our ecosystem provides the resources, connections, and opportunities 
              you need to thrive.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
