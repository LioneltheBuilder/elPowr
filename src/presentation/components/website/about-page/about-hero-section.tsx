import { Button } from "@/src/presentation/components/ui/button";
import Link from "next/link";

export default function AboutHeroSection() {
  return (
    <div className=" bg-black text-white">
      <main className="max-w-screen-xl mx-auto  px-4 pt-12 space-y-24">
        {/* Hero Section */}
        <section className="text-center space-y-6 pt-12">
          <h1 className="text-4xl md:text-6xl leading-tight tracking-tighter">
            <span className="text-[#9AE662]">Empowering</span> Teams with
            Innovative
            <br />
            Project <span className="text-[#9AE662]">Management</span> Solutions
          </h1>
          <p className="text-gray-400 max-w-3xl mx-auto">
            Discover Our Story, Mission, and Commitment to Streamlining Project
            Workflows
          </p>
        </section>

        {/* About Section */}
        <section className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center rounded-full border border-[#9AE662]/20 bg-[#9AE662]/10 px-3 py-1 text-sm text-[#9AE662]">
              <span className="mr-1">+</span> About Us
            </div>
            <h2 className="text-3xl md:text-4xl leading-tight">
              <span className="text-[#9AE662]">Revolutionizing</span> Project
              <br />
              Management with Saasta
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
              At Saasta, our journey began with a simple but powerful idea: to
              revolutionize project management for teams of all sizes.
              Frustrated by the complexities and limitations of existing
              solutions, we set out to create a platform that would empower
              teams to collaborate more effectively, streamline workflows, and
              drive success.
            </p>

            <p>
              With a team of passionate developers and project management
              experts, we embarked on a journey of innovation and iteration. We
              listened to the needs of our users, gathered feedback, and
              continuously refined our platform to meet the evolving demands of
              modern businesses.
            </p>

            <p>
              Today, Saasta stands as a testament to our commitment to
              excellence and our relentless pursuit of improvement. We take
              pride in providing a solution that not only meets the needs of our
              users but exceeds their expectations. As we continue to grow and
              evolve, our dedication to empowering teams with innovative project
              management solutions remains unwavering.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
