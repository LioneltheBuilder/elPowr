import { MessageSquare, Users } from 'lucide-react';
import Image from 'next/image';
import { Button } from '../../ui/button';
import Link from 'next/link';

export default function MemberSection() {
  return (
    <section className="max-w-screen-xl mx-auto px-4 relative py-12">
      <div className="grid lg:grid-cols-2 gap-6 items-center">
        <div className="space-y-8 order-2 lg:order-1">
          <div>
            <div className="inline-flex items-center rounded-full border border-[#9AE662]/20 bg-[#9AE662]/10 px-3 py-1 text-sm text-[#9AE662]">
              <span className="mr-1">+</span> Member Benefits
            </div>
            <h1 className="text-4xl md:text-4xl leading-tight text-white py-6">
              Unlock Your Potential with Our Community
            </h1>

            <div className="space-y-4">
              <div className="flex gap-4 items-start">
                <div className="h-8 w-8 rounded-lg bg-[#9AE662]/10 flex items-center justify-center ">
                  <MessageSquare className="h-4 w-4 text-[#9AE662]" />
                </div>
                <div>
                  <h3 className="font-bold text-white">Discord Community</h3>
                  <p className="text-gray-400">
                    Join our free Discord community to engage in lively
                    discussions.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 items-start py-4 border-t border-gray-700">
                <div className="h-8 w-8 rounded-lg bg-[#9AE662]/10 flex items-center justify-center">
                  <Users className="h-4 w-4 text-[#9AE662]" />
                </div>
                <div>
                  <h3 className="font-bold  text-white">Career Development</h3>
                  <p className="text-gray-400">
                    Gain access to expert-led guidance and resources.
                  </p>
                </div>
              </div>
              <div className='mt-4'>
              <Link href="https://discord.gg/PzS4n2XW" target="_blank" >
                <Button
                  size="lg"
                  className="bg-[#9AE662] text-black hover:bg-[#9AE662]/90"
                >
                  Join Our Discord
                </Button>
              </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Image Grid */}

        <div className="lg:order-1">
          <Image
            src="/community1.jpg"
            alt="Team collaboration"
            width={400}
            height={300}
            className="rounded-lg object-cover w-full lg:h-[400px]"
          />
        </div>
      </div>
    </section>
  );
}
