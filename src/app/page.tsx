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
  description: 'Join a network of driven students, scientists, and industry leaders exploring the frontiers of human potential. Discover cutting-edge longevity research and innovations at Caltech.',
  // metadataBase: new URL('https://caltechlongevity.org'), ?
  keywords: ['Caltech', 'longevity', 'aging research', 'biotech', 'student club', 'science', 'innovation'],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://caltechlongevity.org',
    title: 'Caltech Longevity Club - Exploring the Future of Human Potential',
    description: 'Join a network of driven students, scientists, and industry leaders exploring the frontiers of human potential. Discover cutting-edge longevity research and innovations at Caltech.',
    siteName: 'Caltech Longevity Club',
    images: [
      {
        url: '/seo/1200630.webp',
        width: 1200,
        height: 630,
        alt: 'Caltech Longevity Club - Advancing the Science of Aging',
      },
      {
        url: '/seo/800800.webp',
        width: 800,
        height: 800,
        alt: 'Caltech Longevity Club Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Caltech Longevity Club',
    description: 'Join a network of driven students, scientists, and industry leaders exploring the frontiers of human potential. Discover cutting-edge longevity research and innovations at Caltech.',
    images: ['/seo/1200630.webp'],
    // creator: '@CaltechLongevity', ?
    // site: '@CaltechLongevity', ?
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code', // Add your Google verification code
  },
};
