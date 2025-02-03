import { HeroSection } from "@/components/sections/hero";
import { WhoWeAreSection } from "@/components/sections/who-we-are";
import { TeamSection } from "@/components/sections/team";
import { FeaturesSectionWithBentoGrid } from "@/components/blocks/feature-section-with-bento-grid";
import { NavBarDemo } from "@/components/NavBarDemo";
import { Footer } from "@/components/Footer";

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center pb-16 sm:pb-0">
      <NavBarDemo />
      <HeroSection />
      {/* <WhatWeDoSection /> */}
      <FeaturesSectionWithBentoGrid />
      <WhoWeAreSection />
      {/* <TimelineSection /> */}
      {/* <GetInvolvedSection /> */}
      <TeamSection />
      <Footer />
    </main>
  );
}

export const metadata = {
  title: 'Caltech Longevity Club',
  description: 'Join a network of driven students, scientists, and industry leaders exploring the frontiers of human potential',
  openGraph: {
    title: 'Caltech Longevity Club',
    description: 'Join a network of driven students, scientists, and industry leaders exploring the frontiers of human potential',
    images: [
      {
        url: '/og-image.jpg', // Add your Open Graph image
        width: 1200,
        height: 630,
        alt: 'Caltech Longevity Club',
      },
    ],
  },
};
