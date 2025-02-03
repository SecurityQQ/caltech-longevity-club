"use client"

import { useRef, forwardRef } from "react";
import { AnimatedBeam } from "@/components/ui/animated-beam";

const TextNode = forwardRef<
  HTMLDivElement,
  {
    className?: string;
    children: React.ReactNode;
    isCenter?: boolean;
  }
>(({ className, children, isCenter = false }, ref) => {
  return (
    <div
      ref={ref}
      className={`
        glass-card flex items-center justify-center p-4 rounded-lg 
        hover:scale-105 transition-transform duration-300 z-10
        ${isCenter ? 'bg-black/40' : 'bg-white/5'} 
        ${className}
      `}
    >
      <span className={isCenter ? "header-text-glow text-2xl font-bold" : "text-muted-foreground hover:text-foreground transition-colors duration-300"}>
        {children}
      </span>
    </div>
  );
});

TextNode.displayName = "TextNode";

export const SkeletonThree = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const centerRef = useRef<HTMLDivElement>(null);
  const node1Ref = useRef<HTMLDivElement>(null);
  const node2Ref = useRef<HTMLDivElement>(null);
  const node3Ref = useRef<HTMLDivElement>(null);
  const node4Ref = useRef<HTMLDivElement>(null);
  const node5Ref = useRef<HTMLDivElement>(null);
  const node6Ref = useRef<HTMLDivElement>(null);

  return (
    <div
      className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] overflow-hidden rounded-xl bg-background"
      ref={containerRef}
    >
      {/* Animated Beams - Moved to top so they render first */}
      <div className="absolute inset-0 z-0">
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={node1Ref}
          toRef={centerRef}
          gradientStartColor="hsl(var(--orange-vivid))"
          gradientStopColor="hsl(var(--orange-bright))"
        />
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={node2Ref}
          toRef={centerRef}
          gradientStartColor="hsl(var(--orange-vivid))"
          gradientStopColor="hsl(var(--orange-bright))"
        />
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={node3Ref}
          toRef={centerRef}
          gradientStartColor="hsl(var(--orange-vivid))"
          gradientStopColor="hsl(var(--orange-bright))"
        />
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={node4Ref}
          toRef={centerRef}
          gradientStartColor="hsl(var(--orange-vivid))"
          gradientStopColor="hsl(var(--orange-bright))"
          reverse
        />
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={node5Ref}
          toRef={centerRef}
          gradientStartColor="hsl(var(--orange-vivid))"
          gradientStopColor="hsl(var(--orange-bright))"
        />
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={node6Ref}
          toRef={centerRef}
          gradientStartColor="hsl(var(--orange-vivid))"
          gradientStopColor="hsl(var(--orange-bright))"
          reverse
        />
      </div>

      {/* Center Node - Make responsive */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <TextNode ref={centerRef} className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32" isCenter={true}>
          <span className="text-lg sm:text-xl md:text-2xl">Longevity Impact</span>
        </TextNode>
      </div>

      {/* Surrounding Nodes - Adjust positions and sizes */}
      <div className="absolute left-[15%] sm:left-[20%] top-[8%] sm:top-[10%]">
        <TextNode ref={node1Ref} className="w-20 sm:w-24 md:w-28">
          Aging Research
        </TextNode>
      </div>

      <div className="absolute right-[15%] sm:right-[20%] top-[8%] sm:top-[10%]">
        <TextNode ref={node2Ref} className="w-24 sm:w-28 md:w-32">
          Biotech Careers
        </TextNode>
      </div>

      <div className="absolute left-[5%] sm:left-[10%] top-1/2 -translate-y-1/2">
        <TextNode ref={node3Ref} className="w-24 sm:w-28 md:w-32">
          Research Skills
        </TextNode>
      </div>

      <div className="absolute right-[5%] sm:right-[10%] top-1/2 -translate-y-1/2">
        <TextNode ref={node4Ref} className="w-28 sm:w-32 md:w-36">
          Industry Connect
        </TextNode>
      </div>

      <div className="absolute bottom-[8%] sm:bottom-[10%] left-[15%] sm:left-[20%]">
        <TextNode ref={node5Ref} className="w-28 sm:w-32 md:w-36">
          Innovation Lab
        </TextNode>
      </div>

      <div className="absolute bottom-[8%] sm:bottom-[10%] right-[15%] sm:right-[20%]">
        <TextNode ref={node6Ref} className="w-28 sm:w-32 md:w-36">
          Global Network
        </TextNode>
      </div>
    </div>
  );
}; 