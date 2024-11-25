import { CommunitySection } from "@/src/presentation/components/website/landing-page/community-section";
import { AboutSection } from "@/src/presentation/components/website/landing-page/about-section";
import { HeroSection } from "@/src/presentation/components/website/landing-page/hero-section";
import TestimonialSection from "@/src/presentation/components/website/landing-page/testimonial-section";
import CallToAction from "@/src/presentation/components/website/landing-page/callToAction";
import { Navbar } from "@/src/presentation/components/website/landing-page/navbar";
import { Footer } from "@/src/presentation/components/website/landing-page/landing-footer";

export default function Home() {
  return (
    <div className="">
        <Navbar />
      <HeroSection />
      <AboutSection />
      <CommunitySection />
      <TestimonialSection />
      <CallToAction />
      <Footer />
    </div>
  );
}
