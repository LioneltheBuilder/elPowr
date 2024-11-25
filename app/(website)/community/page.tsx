import CommunityHeroSection from "@/src/presentation/components/website/community-page/community-hero-section";
import { Footer } from "@/src/presentation/components/website/landing-page/landing-footer";
import { Navbar } from "@/src/presentation/components/website/landing-page/navbar";
import React from "react";

function page() {
  return (
    <div>
      <Navbar />
      <CommunityHeroSection />
      <Footer />
    </div>
  );
}

export default page;
