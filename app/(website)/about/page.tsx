import AboutHeroSection from "@/src/presentation/components/website/about-page/about-hero-section";
import CtaSection from "@/src/presentation/components/website/about-page/cta-section";
import MissionSection from "@/src/presentation/components/website/about-page/missionSection";
import TeamSection from "@/src/presentation/components/website/about-page/team-section";
import { Footer } from "@/src/presentation/components/website/landing-page/landing-footer";
import { Navbar } from "@/src/presentation/components/website/landing-page/navbar";

function page() {
  return (
    <div>
      <Navbar />
      <AboutHeroSection />
      <MissionSection />
      <TeamSection />
      <CtaSection />
      <Footer />
    </div>
  );
}

export default page;
