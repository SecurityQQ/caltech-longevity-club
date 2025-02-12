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
  metadataBase: new URL('https://caltechlongevity.com'),
  keywords: ['Caltech', 'longevity', 'aging research', 'biotech', 'student club', 'science', 'innovation'],
  icons: {
    icon: [
      { url: '/favicons/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicons/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicons/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
    ],
    shortcut: ['/favicons/favicon.ico'],
    apple: [
      { url: '/favicons/apple-icon-57x57.png', sizes: '57x57', type: 'image/png' },
      { url: '/favicons/apple-icon-60x60.png', sizes: '60x60', type: 'image/png' },
      { url: '/favicons/apple-icon-72x72.png', sizes: '72x72', type: 'image/png' },
      { url: '/favicons/apple-icon-76x76.png', sizes: '76x76', type: 'image/png' },
      { url: '/favicons/apple-icon-114x114.png', sizes: '114x114', type: 'image/png' },
      { url: '/favicons/apple-icon-120x120.png', sizes: '120x120', type: 'image/png' },
      { url: '/favicons/apple-icon-144x144.png', sizes: '144x144', type: 'image/png' },
      { url: '/favicons/apple-icon-152x152.png', sizes: '152x152', type: 'image/png' },
      { url: '/favicons/apple-icon-180x180.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      {
        rel: 'apple-touch-icon-precomposed',
        url: '/favicons/apple-icon-precomposed.png',
      },
      {
        rel: 'android-chrome',
        url: '/favicons/android-icon-192x192.png',
        sizes: '192x192',
      },
    ],
  },
  manifest: '/favicons/manifest.json',
  themeColor: '#ffffff',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'Caltech Longevity Club',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://caltechlongevity.com',
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
    creator: '@CaltechLongevity',
    site: '@CaltechLongevity',
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
