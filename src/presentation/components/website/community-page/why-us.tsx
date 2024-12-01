import { Button } from '@/src/presentation/components/ui/button';
import { Check } from 'lucide-react';
import Image from 'next/image';

export default function WhyUsSection() {
  return (
    <div className="max-w-screen-xl mx-auto px-4 relative py-12 border-t border-gray-600">
      <div className="flex flex-col lg:flex-row items-center gap-12 lg:pt-8">
        {/* Illustration */}
        <div className="relative w-full lg:w-1/2">
          <div className="relative shadow-lg">
            {/* Profile and Graph */}
            <div className="rounded-lg p-4 border border-dashed border-gray-500 bg-[#212121]/50">
              <Image
                src="/community/why-us.jpg"
                alt="Team collaboration"
                width={400}
                height={300}
                className="rounded-lg object-cover w-full lg:h-[400px]"
              />
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="w-full lg:w-1/2 space-y-6">
          <div className="inline-flex items-center rounded-full border border-[#9AE662]/20 bg-[#9AE662]/10 px-3 py-1 text-sm text-[#9AE662]">
            <span className="mr-1">+</span> Why Join?
          </div>
          <h2 className="text-4xl md:text-4xl leading-tight text-white">
            Your Platform for Growth and Connection
          </h2>

          <ul className="space-y-4 text-gray-400">
            <li className="flex items-center gap-3">
              <Check className="w-5 h-5 text-green-500" />
              <span>
                Access to exclusive events designed to ignite innovation and
                boost your skills.
              </span>
            </li>
            <li className="flex items-center gap-3">
              <Check className="w-5 h-5 text-green-500" />
              <span>
                A space to connect with like-minded individuals and industry
                leaders.
              </span>
            </li>
            <li className="flex items-center gap-3">
              <Check className="w-5 h-5 text-green-500" />
              <span>
                Opportunities for career development tailored to empower
                builders like you.
              </span>
            </li>
          </ul>
          <Button className="bg-[#9AE662] text-black hover:bg-[#9AE662]/90">
            More Details
          </Button>
        </div>
      </div>
    </div>
  );
}
