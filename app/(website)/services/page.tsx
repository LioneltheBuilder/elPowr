import { Footer } from "@/src/presentation/components/website/landing-page/landing-footer";
import { Navbar } from "@/src/presentation/components/website/landing-page/navbar";
import CTASection from "@/src/presentation/components/website/services-page/cta-section";
import ServicesCard from "@/src/presentation/components/website/services-page/services-cards";
import ServicesHeroSection from "@/src/presentation/components/website/services-page/services-hero-section";

function page() {
  return (
    <div>
      <Navbar />
      <ServicesHeroSection />
      <ServicesCard/>
      <CTASection />
      <Footer />
    </div>
  );
}

export default page;
