import { HeroSection } from "@/components/sections/hero";
import { WhoWeAreSection } from "@/components/sections/who-we-are";
import { TeamSection } from "@/components/sections/team";
import { FeaturesSectionWithBentoGrid } from "@/components/blocks/feature-section-with-bento-grid";
import { NavBarDemo } from "@/components/NavBarDemo";

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <NavBarDemo />
      <HeroSection />
      {/* <WhatWeDoSection /> */}
      <FeaturesSectionWithBentoGrid />
      <WhoWeAreSection />
      {/* <TimelineSection /> */}
      {/* <GetInvolvedSection /> */}
      <TeamSection />
    </main>
  );
}
