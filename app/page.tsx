import { AboutSection } from "@/src/presentation/components/website/landing-page/about-section";
import { HeroSection } from "@/src/presentation/components/website/landing-page/hero-section";
import { Footer } from "@/src/presentation/components/website/landing-page/landing-footer";
import { Navbar } from "@/src/presentation/components/website/landing-page/navbar";

export default function Home() {
  return (
    <div className="bg-black min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
      </main>
      <Footer />
    </div>
  );
}
