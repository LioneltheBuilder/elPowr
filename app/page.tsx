import { Navbar } from "@/src/presentation/components/website/landing-page/navbar";
import dynamic from 'next/dynamic';
import { Suspense } from 'react';

const HeroSection = dynamic(
  () => import('@/src/presentation/components/website/landing-page/hero-section').then(mod => mod.HeroSection),
  { ssr: false }
)

const DynamicFooter = dynamic(
  () => import('@/src/presentation/components/website/landing-page/landing-footer').then(mod => mod.Footer),
  { ssr: false }
)

export default function Home() {
  return (
    <div className="bg-black min-h-screen">
      <Navbar />
      <Suspense fallback={<div className="h-screen" />}>
        <HeroSection />
      </Suspense>
      <DynamicFooter />
    </div>
  );
}
