import { Badge } from "@/src/presentation/components/ui/badge";
import { Card, CardContent } from "@/src/presentation/components/ui/card";
import {
  BarChart3,
  Code2,
  MicVocal,
} from "lucide-react";
import Image from "next/image";
import React from "react";

import Service1 from "@/public/services/web-dev.jpg";
import Service2 from "@/public/services/mark.jpg";
import Service3 from "@/public/services/conference.jpg";

function ServicesCard() {
  return (
    <div className="grid md:grid-cols-2 gap-8 max-w-screen-xl mx-auto px-4 py-10">
      <Card className="border-0 shadow-lg bg-[#0a0a0a]">
        <CardContent className="p-0">
          <div className="relative h-64 mb-6">
            <Image
              src={Service2}
              alt="Marketing"
              className="object-cover rounded-t-lg border-b border-gray-900"
              fill
            />
            <div className="absolute left-6 bottom-6">
              <div className="bg-orange-600 w-12 h-12 rounded-lg flex items-center justify-center">
                <BarChart3 className="text-white w-6 h-6" />
              </div>
            </div>
          </div>
          <div className="px-6 pb-6">
            <h3 className="text-2xl font-bold mb-4 text-white">
              Grow Your Brand, Expand Your Reach.
            </h3>
            <p className="text-gray-400 mb-6">
              Our data-driven marketing strategies help you connect with your
              audience and achieve measurable growth. Let us handle the hard
              part while you focus on your business.
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              <Badge
                variant="secondary"
                className="bg-orange-600 text-orange-200 hover:bg-orange-700"
              >
                Social Media Management
              </Badge>
              <Badge
                variant="secondary"
                className="bg-orange-600 text-orange-200 hover:bg-orange-700"
              >
                SEO Optimization
              </Badge>
              <Badge
                variant="secondary"
                className="bg-orange-600 text-orange-200 hover:bg-orange-700"
              >
                Email Marketing Campaigns
              </Badge>
              <Badge
                variant="secondary"
                className="bg-orange-600 text-orange-200 hover:bg-orange-700"
              >
                Branding and Content Creation
              </Badge>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-0 shadow-lg bg-[#0a0a0a]">
        <CardContent className="p-0">
          <div className="relative h-64 mb-6">
            <Image
              src={Service1}
              alt="Web Development Service"
              className="object-cover rounded-t-lg"
              fill
            />
            <div className="absolute left-6 bottom-6">
              <div className="bg-black/50 w-12 h-12 rounded-lg flex items-center justify-center">
                <Code2 className="text-[#9AE662] w-6 h-6" />
              </div>
            </div>
          </div>
          <div className="px-6 pb-6">
            <h3 className="text-2xl font-bold mb-4 text-white">
              Build Your Digital Presence.
            </h3>
            <p className="text-gray-400 mb-6">
              We design and develop websites and applications that are not only
              visually stunning but also highly functional. From small
              businesses to growing enterprises, we bring your ideas to life.
            </p>
            <div className="space-y-2 mb-6">
              <div className="flex items-center gap-2">
                <Badge
                  variant="secondary"
                  className="text-[#9AE662] bg-[#9AE662]/10 hover:bg-[#9AE662]/20"
                >
                  ✓ Custom Website Design
                </Badge>
              </div>
              <div className="flex items-center gap-2">
                <Badge
                  variant="secondary"
                  className="text-[#9AE662] bg-[#9AE662]/10 hover:bg-[#9AE662]/20"
                >
                  ✓ E-Commerce Platforms
                </Badge>
              </div>
              <div className="flex items-center gap-2">
                <Badge
                  variant="secondary"
                  className="text-[#9AE662] bg-[#9AE662]/10 hover:bg-[#9AE662]/20"
                >
                  ✓ Scalable Web Applications
                </Badge>
              </div>
              <div className="flex items-center gap-2">
                <Badge
                  variant="secondary"
                  className="text-[#9AE662] bg-[#9AE662]/10 hover:bg-[#9AE662]/20"
                >
                  ✓ Mobile Optimization
                </Badge>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-0 shadow-lg bg-[#0a0a0a]">
        <CardContent className="p-0">
          <div className="relative h-64 mb-6">
            <Image
              src={Service3}
              alt="Analytics Service"
              className="object-cover rounded-t-lg"
              fill
            />
            <div className="absolute left-6 bottom-6">
              <div className="bg-purple-600 w-12 h-12 rounded-lg flex items-center justify-center">
                <MicVocal className="text-white w-6 h-6" />
              </div>
            </div>
          </div>
          <div className="px-6 pb-6">
            <h3 className="text-2xl font-bold mb-4 text-white">
              Creating Impactful Experiences.
            </h3>
            <p className="text-gray-400 mb-6">
              We organize events that bring people together and create lasting
              impressions. From professional networking to creative activations,
              we handle it all.
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              <Badge variant="secondary" className="bg-purple-600 text-purple-300 hover:bg-purple-700">Conferences and Workshops</Badge>
              <Badge variant="secondary" className="bg-purple-600 text-purple-300 hover:bg-purple-700">Networking Events</Badge>
              <Badge variant="secondary" className="bg-purple-600 text-purple-300 hover:bg-purple-700">Creative Activations</Badge>
            </div>
          </div>
        </CardContent>
      </Card>

    </div>
  );
}

export default ServicesCard;
