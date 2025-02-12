"use client"

import React from "react";
import { cn } from "@/lib/utils";
import createGlobe from "cobe";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { IconBrandYoutubeFilled } from "@tabler/icons-react";
import Link from "next/link";
import { SkeletonOne } from "./skeletons/skeleton-one";
import { SkeletonTwo } from "./skeletons/skeleton-two";
import { SkeletonThree } from "./skeletons/skeleton-three";
import { SkeletonFour } from "./skeletons/skeleton-four";

export function FeaturesSectionWithBentoGrid() {
  const features = [
    {
      title: "Longevity in Action",
      description:
        "Explore longevity practices and technologies through theoretical research and analytical studies",
      skeleton: <SkeletonOne />,
      className:
        "col-span-1 md:col-span-4 lg:col-span-4 border-b md:border-r dark:border-neutral-800",
    },
    {
      title: "Meetups & Guest Speakers",
      description:
        "Bi-weekly industry, executive, and science guest speakers leading discussions and offering resources",
      skeleton: <SkeletonTwo />,
      className: "col-span-1 md:col-span-2 lg:col-span-2 border-b dark:border-neutral-800",
    },
    {
      title: "Everything you need to start",
      description:
        "Build products, start new projects, and make your mark in longevity with access to resources and collaboration opportunities",
      skeleton: <SkeletonThree />,
      className:
        "col-span-1 md:col-span-3 lg:col-span-3 border-b md:border-r dark:border-neutral-800",
    },
    {
      title: "Career Development",
      description:
        "Access exclusive opportunities, mentorship programs, and resources to build your career in longevity science & business",
      skeleton: <SkeletonFour />,
      className: "col-span-1 md:col-span-3 lg:col-span-3 border-b md:border-none",
    },
  ];

  return (
    <section id="features" className="w-full py-12 bg-black/50">
      <div className="relative z-20 max-w-7xl mx-auto">
        <div className="px-8">
          <h4 className="text-4xl lg:text-6xl lg:leading-tight max-w-5xl mx-auto text-center tracking-tight font-bold header-text-glow mb-6">
            What We Do
          </h4>

          <p className="text-base lg:text-lg max-w-2xl mx-auto text-center font-medium">
            Empowering the next generation of longevity researchers and entrepreneurs
          </p>
        </div>

        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-6 mt-16 xl:border rounded-md dark:border-neutral-800">
            {features.map((feature) => (
              <FeatureCard key={feature.title} className={feature.className}>
                <FeatureTitle>{feature.title}</FeatureTitle>
                <FeatureDescription>{feature.description}</FeatureDescription>
                <div className="h-full w-full">{feature.skeleton}</div>
              </FeatureCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const FeatureCard = ({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn(`p-4 sm:p-8 relative overflow-hidden`, className)}>
      {children}
    </div>
  );
};

const FeatureTitle = ({ children }: { children?: React.ReactNode }) => {
  return (
    <h3 className="text-xl md:text-2xl font-bold tracking-tight text-left gradient-text">
      {children}
    </h3>
  );
};

const FeatureDescription = ({ children }: { children?: React.ReactNode }) => {
  return (
    <p className="text-sm md:text-base text-left mt-2 mb-4 text-neutral-300 dark:text-neutral-300 font-medium leading-relaxed">
      {children}
    </p>
  );
};

export const Globe = ({ className }: { className?: string }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    let phi = 0;

    if (!canvasRef.current) return;

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: 600 * 2,
      height: 600 * 2,
      phi: 0,
      theta: 0,
      dark: 1,
      diffuse: 1.2,
      mapSamples: 16000,
      mapBrightness: 6,
      baseColor: [0.3, 0.3, 0.3],
      markerColor: [0.1, 0.8, 1],
      glowColor: [1, 1, 1],
      markers: [
        { location: [37.7595, -122.4367], size: 0.03 },
        { location: [40.7128, -74.006], size: 0.1 },
      ],
      onRender: (state) => {
        state.phi = phi;
        phi += 0.01;
      },
    });

    return () => {
      globe.destroy();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{ width: 600, height: 600, maxWidth: "100%", aspectRatio: 1 }}
      className={className}
    />
  );
};