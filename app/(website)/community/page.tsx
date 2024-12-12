import CTASection from "@/src/presentation/components/website/community-page/call-to-action";
import CommunityHeroSection from "@/src/presentation/components/website/community-page/community-hero-section";
import { EventsSection } from "@/src/presentation/components/website/community-page/event-section";
import MemberSection from "@/src/presentation/components/website/community-page/memberSection";
import WhyUsSection from "@/src/presentation/components/website/community-page/why-us";
import { Footer } from "@/src/presentation/components/website/landing-page/landing-footer";
import { Navbar } from "@/src/presentation/components/website/landing-page/navbar";
import TestimonialSection from "@/src/presentation/components/website/landing-page/testimonial-section";

function page() {
  return (
    <div>
      <Navbar />
      <CommunityHeroSection />
      <WhyUsSection/>
      <EventsSection/>
      <MemberSection/>
      <TestimonialSection/>
      <CTASection/>
      <Footer />
    </div>
  );
}

export default page;
